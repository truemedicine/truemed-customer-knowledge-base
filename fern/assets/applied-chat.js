// Truemed consumer support assistant (Applied Labs).
// Loads the Applied Labs widget loader, then mounts the <applied-chat>
// web component fixed to the bottom-right of every help.truemed.com page.
// Agent: Truemed Chat (consumer workspace) ccacff99-2552-48c3-864c-6773fb7d3392.
// Appended to <body> (outside Fern's React root) so the launcher persists
// across Fern's client-side page navigations.
(function () {
  var AGENT_ID = 'ccacff99-2552-48c3-864c-6773fb7d3392';
  var SRC = 'https://cdn.applied.guide/artifacts/applied-chat.umd.js';
  var MAX_ATTEMPTS = 4;

  function mount() {
    if (document.querySelector('applied-chat')) return;
    var el = document.createElement('applied-chat');
    el.setAttribute('agent-id', AGENT_ID);
    el.style.cssText =
      'position:fixed;right:24px;bottom:24px;z-index:2147483000;';
    document.body.appendChild(el);
  }

  // Load the loader with retry-on-error so a transient CDN failure doesn't
  // leave the widget absent until a full page reload (backoff: 1s, 2s, 4s).
  function load(attempt) {
    var s = document.createElement('script');
    s.src = SRC;
    s.async = true;
    s.onload = mount;
    s.onerror = function () {
      s.remove();
      if (attempt < MAX_ATTEMPTS) {
        setTimeout(function () { load(attempt + 1); }, 1000 * Math.pow(2, attempt - 1));
      }
    };
    document.head.appendChild(s);
  }

  load(1);
})();
