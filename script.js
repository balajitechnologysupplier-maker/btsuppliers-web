/* ============================================================
   BULLETPROOF ICON SIZER
   Forces every SVG on the page to the correct size based on
   its context. Runs after DOM ready and whenever the cart
   drawer / toasts / dynamic content is added.
   ============================================================ */
function btsFixIconSizes(root) {
  root = root || document;
  var sizes = [
    ['.topbar__item svg', 11],
    ['.nav__cart svg', 14],
    ['.cart-badge svg', 10],
    ['.btn--sm svg', 11],
    ['.btn--lg svg', 14],
    ['.btn svg', 12],
    ['.hero__ticks svg', 13],
    ['.float-card__icon svg', 12],
    ['.cat-card__icon svg', 17],
    ['.cat-list svg', 12],
    ['.cat-card__link svg', 12],
    ['.why-card__icon svg', 16],
    ['.check-list svg', 14],
    ['.branch__row > svg', 14],
    ['.phone-chips svg', 10],
    ['.contact-info__icon svg', 14],
    ['.form-success__icon svg', 20],
    ['.pay-option__icon svg', 16],
    ['.confirm-hero__icon svg', 30],
    ['.order-id svg', 12],
    ['.drawer__close svg', 14],
    ['.drawer__empty svg', 40],
    ['.empty svg', 44],
    ['.fab svg', 18],
    ['.fab--top svg', 14],
    ['.toast svg', 14],
    ['.alert svg', 15],
    ['.footer__contact svg', 12],
    ['.footer__phones svg', 10],
    ['.socials a svg', 12],
    ['.breadcrumb svg', 12],
    ['.pd-specs svg', 12],
    ['.qty svg', 12],
    ['.summary svg', 12],
    ['.stock-pill svg', 10]
  ];

  function apply(svg, size) {
    svg.style.setProperty('width', size + 'px', 'important');
    svg.style.setProperty('height', size + 'px', 'important');
    svg.style.setProperty('min-width', size + 'px', 'important');
    svg.style.setProperty('min-height', size + 'px', 'important');
    svg.style.setProperty('max-width', size + 'px', 'important');
    svg.style.setProperty('max-height', size + 'px', 'important');
    svg.style.setProperty('flex', 'none', 'important');
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
  }

  /* First: two large illustrations get full width */
  root.querySelectorAll('.tech-panel > svg, .split__media > svg').forEach(function (svg) {
    svg.style.setProperty('width', '100%', 'important');
    svg.style.setProperty('height', 'auto', 'important');
    svg.style.setProperty('min-width', '0', 'important');
    svg.style.setProperty('min-height', '0', 'important');
    svg.style.setProperty('max-width', '100%', 'important');
    svg.style.setProperty('max-height', 'none', 'important');
    svg.removeAttribute('width');
    svg.removeAttribute('height');
  });

  /* Second: apply each context-specific size */
  sizes.forEach(function (pair) {
    root.querySelectorAll(pair[0]).forEach(function (svg) {
      if (svg.closest('.tech-panel, .split__media')) return;
      apply(svg, pair[1]);
    });
  });

  /* Third: any remaining SVG that hasn't been styled gets 14px */
  root.querySelectorAll('svg').forEach(function (svg) {
    if (svg.closest('.tech-panel, .split__media')) return;
    if (svg.style.width) return;
    apply(svg, 14);
  });
}

/* Run on page load */
document.addEventListener('DOMContentLoaded', function () { btsFixIconSizes(); });
window.addEventListener('load', function () { btsFixIconSizes(); });

/* Re-run when the cart drawer / toast / dynamic content changes */
if ('MutationObserver' in window) {
  var observer = new MutationObserver(function () { btsFixIconSizes(); });
  document.addEventListener('DOMContentLoaded', function () {
    observer.observe(document.body, { childList: true, subtree: true });
  });
}