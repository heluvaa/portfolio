/* ZICOXBT — loot sheet behaviors: nav sync, reveal, inspect */
(function () {
  "use strict";
  var rmq = window.matchMedia("(prefers-reduced-motion: reduce)");
  var reduced = rmq.matches;
  rmq.addEventListener && rmq.addEventListener("change", function (e) { reduced = e.matches; });

  /* ---- 1. sticky rail: active section sync ---- */
  var links = Array.prototype.slice.call(document.querySelectorAll(".rail-link"));
  var sections = links.map(function (l) { return document.getElementById(l.dataset.target); }).filter(Boolean);
  function syncNav() {
    var mid = window.innerHeight * 0.38, best = null, bestTop = -Infinity;
    for (var i = 0; i < sections.length; i++) {
      var r = sections[i].getBoundingClientRect();
      if (r.top <= mid && r.top > bestTop) { best = sections[i]; bestTop = r.top; }
    }
    if (!best && sections[0] && sections[0].getBoundingClientRect().bottom > mid) best = sections[0];
    links.forEach(function (l) { l.classList.toggle("active", !!best && l.dataset.target === best.id); });
    // keep active chip visible inside horizontally scrollable rail
    var act = document.querySelector(".rail-link.active");
    if (act && act.scrollIntoView) {
      var nav = act.parentElement;
      var ar = act.getBoundingClientRect(), nr = nav.getBoundingClientRect();
      if (ar.left < nr.left || ar.right > nr.right) nav.scrollTo({ left: nav.scrollLeft + (ar.left - nr.left) - 24, behavior: reduced ? "auto" : "smooth" });
    }
  }
  var raf = false;
  window.addEventListener("scroll", function () { if (!raf) { raf = true; requestAnimationFrame(function () { raf = false; syncNav(); }); } }, { passive: true });
  syncNav();

  /* ---- 2. reveal-on-scroll (single authored motion) ---- */
  var revealables = Array.prototype.slice.call(document.querySelectorAll(".panel, .loot, .sec-h, .scroll-hint"));
  if ("IntersectionObserver" in window && !reduced) {
    revealables.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("on"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealables.forEach(function (el) { io.observe(el); });
  }

  /* ---- 3. loot cards: tap-to-inspect (legendary) ---- */
  document.querySelectorAll("[data-loot]").forEach(function (card) {
    var more = card.querySelector(".loot-more");
    var btn = card.querySelector(".loot-body .btn-ghost, .loot-body .btn-primary");
    if (!more) return;
    function toggle() {
      var open = !more.hidden;
      more.hidden = open;
      card.setAttribute("aria-expanded", String(!open));
    }
    var bar = document.createElement("button");
    bar.type = "button";
    bar.className = "inspect-btn";
    bar.textContent = "INSPECT +";
    bar.setAttribute("aria-controls", "more-" + Math.random().toString(36).slice(2, 8));
    more.id = bar.getAttribute("aria-controls");
    bar.addEventListener("click", toggle);
    card.querySelector(".loot-body").insertBefore(bar, card.querySelector(".loot-links"));
    card.setAttribute("aria-expanded", "false");
  });

  /* ---- 4. attribute numbers count up once (data, not decoration) ---- */
  var attrs = Array.prototype.slice.call(document.querySelectorAll(".attrs .attr dt"));
  if ("IntersectionObserver" in window && attrs.length && !reduced) {
    var seen = false;
    var io2 = new IntersectionObserver(function (es) {
      if (seen || !es.some(function (e) { return e.isIntersecting; })) return;
      seen = true; io2.disconnect();
      attrs.forEach(function (dt) {
        var target = parseInt(dt.textContent, 10);
        if (isNaN(target) || target === 0) return;
        var t0 = null, dur = 700;
        function step(ts) {
          if (!t0) t0 = ts;
          var p = Math.min(1, (ts - t0) / dur);
          dt.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step); else dt.textContent = String(target);
        }
        dt.textContent = "0";
        requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });
    io2.observe(document.querySelector(".attrs"));
  }
})();
