/**
 * Truemed savings calculator widget for help.truemed.com.
 *
 * Mounts into <div id="truemed-savings-calculator"></div> wherever that element
 * appears in an MDX page. Mirrors the calculator on truemed.com/how-it-works:
 * estimated savings = purchase amount x federal marginal tax bracket.
 */
(function () {
  "use strict";

  var MOUNT_ID = "truemed-savings-calculator";
  var BRACKETS = [22, 24, 32, 35, 37];
  var MIN_AMOUNT = 100;
  var MAX_AMOUNT = 1000;
  var STEP = 25;
  var DEFAULT_AMOUNT = 500;
  var DEFAULT_BRACKET = 32;

  var usd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  });

  function render(root) {
    if (root.getAttribute("data-tm-mounted") === "true") return;
    root.setAttribute("data-tm-mounted", "true");
    root.classList.add("tm-calc");

    var bracket = DEFAULT_BRACKET;

    root.innerHTML = [
      '<div class="tm-calc__headline">',
      '  <span class="tm-calc__eyebrow">Estimated savings</span>',
      '  <span class="tm-calc__amount" aria-live="polite"></span>',
      '  <span class="tm-calc__caption"></span>',
      '</div>',
      '<div class="tm-calc__field">',
      '  <div class="tm-calc__field-head">',
      '    <label class="tm-calc__label" for="tm-calc-amount">Your purchase</label>',
      '    <span class="tm-calc__value"></span>',
      '  </div>',
      '  <input class="tm-calc__slider" id="tm-calc-amount" type="range"',
      '         min="' + MIN_AMOUNT + '" max="' + MAX_AMOUNT + '" step="' + STEP + '"',
      '         value="' + DEFAULT_AMOUNT + '" aria-label="Purchase amount in dollars" />',
      '  <div class="tm-calc__scale">',
      '    <span>' + usd.format(MIN_AMOUNT) + '</span>',
      '    <span>' + usd.format(MAX_AMOUNT) + '</span>',
      '  </div>',
      '</div>',
      '<div class="tm-calc__field">',
      '  <span class="tm-calc__label" id="tm-calc-bracket-label">Federal income tax bracket</span>',
      '  <div class="tm-calc__brackets" role="group" aria-labelledby="tm-calc-bracket-label"></div>',
      '</div>',
      '<p class="tm-calc__note">Estimated. Actual savings vary by individual. Truemed is for qualified',
      '   customers. HSA/FSA tax savings vary. Learn more at',
      '   <a href="https://www.truemed.com/disclosures">truemed.com/disclosures</a>.</p>'
    ].join("");

    var slider = root.querySelector(".tm-calc__slider");
    var group = root.querySelector(".tm-calc__brackets");
    var amountEl = root.querySelector(".tm-calc__amount");
    var captionEl = root.querySelector(".tm-calc__caption");
    var valueEl = root.querySelector(".tm-calc__value");

    function update() {
      var amount = parseFloat(slider.value);
      if (!isFinite(amount)) amount = DEFAULT_AMOUNT;

      amountEl.textContent = usd.format(amount * (bracket / 100));
      valueEl.textContent = usd.format(amount);
      captionEl.textContent =
        "on a " + usd.format(amount) + " purchase at a " + bracket + "% tax bracket";

      // Paint the filled portion of the track up to the thumb.
      var pct = ((amount - MIN_AMOUNT) / (MAX_AMOUNT - MIN_AMOUNT)) * 100;
      slider.style.setProperty("--tm-fill", pct + "%");
    }

    BRACKETS.forEach(function (value) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tm-calc__bracket";
      btn.textContent = value + "%";
      btn.setAttribute("aria-pressed", String(value === bracket));
      btn.addEventListener("click", function () {
        bracket = value;
        Array.prototype.forEach.call(group.children, function (el) {
          el.setAttribute("aria-pressed", String(el === btn));
        });
        update();
      });
      group.appendChild(btn);
    });

    slider.addEventListener("input", update);
    update();
  }

  function scan() {
    var root = document.getElementById(MOUNT_ID);
    if (root) render(root);
  }

  function start() {
    scan();
    // Fern docs is a single-page app, so page changes swap the DOM without a
    // full reload. Re-scan on mutation so the widget mounts on client-side nav.
    if (window.MutationObserver && document.body) {
      new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
