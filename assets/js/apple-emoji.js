/* Apple Emoji Replacer
 * Replaces Unicode emoji in text nodes with Apple AVIF images.
 * Runs in idle-time chunks via requestIdleCallback to avoid blocking main thread.
 */
(function () {
  'use strict';

  var EMOJI_MAP = {
  "✨": "/images/emoji/emoji-2728.avif",
  "☕": "/images/emoji/emoji-2615.avif",
  "🎯": "/images/emoji/emoji-1F3AF.avif",
  "🐾": "/images/emoji/emoji-1F43E.avif",
  "👨‍💻": "/images/emoji/emoji-1F468-200D-1F4BB.avif",
  "🇨🇳": "/images/emoji/emoji-1F1E8-1F1F3.avif",
  "🇮🇳": "/images/emoji/emoji-1F1EE-1F1F3.avif",
  "☁": "/images/emoji/emoji-2601.avif",
  "⚔": "/images/emoji/emoji-2694.avif",
  "⚙": "/images/emoji/emoji-2699.avif",
  "⚙️": "/images/emoji/emoji-2699.avif",
  "⌨️": "/images/emoji/emoji-2328.avif",
  "⚠": "/images/emoji/emoji-26A0.avif",
  "⚡": "/images/emoji/emoji-26A1.avif",
  "✅": "/images/emoji/emoji-2705.avif",
  "✴": "/images/emoji/emoji-2734.avif",
  "🃏": "/images/emoji/emoji-1F0CF.avif",
  "🌅": "/images/emoji/emoji-1F305.avif",
  "🌍": "/images/emoji/emoji-1F30D.avif",
  "🌏": "/images/emoji/emoji-1F30F.avif",
  "🌐": "/images/emoji/emoji-1F310.avif",
  "🌒": "/images/emoji/emoji-1F312.avif",
  "🌙": "/images/emoji/emoji-1F319.avif",
  "🌡": "/images/emoji/emoji-1F321.avif",
  "🌱": "/images/emoji/emoji-1F331.avif",
  "🍓": "/images/emoji/emoji-1F353.avif",
  "🍯": "/images/emoji/emoji-1F36F.avif",
  "🎓": "/images/emoji/emoji-1F393.avif",
  "🎖": "/images/emoji/emoji-1F396.avif",
  "🎙": "/images/emoji/emoji-1F399.avif",
  "🎲": "/images/emoji/emoji-1F3B2.avif",
  "🏅": "/images/emoji/emoji-1F3C5.avif",
  "🏆": "/images/emoji/emoji-1F3C6.avif",
  "🏏": "/images/emoji/emoji-1F3CF.avif",
  "🏢": "/images/emoji/emoji-1F3E2.avif",
  "🐍": "/images/emoji/emoji-1F40D.avif",
  "🐘": "/images/emoji/emoji-1F418.avif",
  "🐝": "/images/emoji/emoji-1F41D.avif",
  "🐼": "/images/emoji/emoji-1F43C.avif",
  "👋": "/images/emoji/emoji-1F44B.avif",
  "👨": "/images/emoji/emoji-1F468.avif",
  "💡": "/images/emoji/emoji-1F4A1.avif",
  "💤": "/images/emoji/emoji-1F4A4.avif",
  "💬": "/images/emoji/emoji-1F4AC.avif",
  "💳": "/images/emoji/emoji-1F4B3.avif",
  "💻": "/images/emoji/emoji-1F4BB.avif",
  "💼": "/images/emoji/emoji-1F4BC.avif",
  "💽": "/images/emoji/emoji-1F4BD.avif",
  "💾": "/images/emoji/emoji-1F4BE.avif",
  "📈": "/images/emoji/emoji-1F4C8.avif",
  "📊": "/images/emoji/emoji-1F4CA.avif",
  "📋": "/images/emoji/emoji-1F4CB.avif",
  "📍": "/images/emoji/emoji-1F4CD.avif",
  "📑": "/images/emoji/emoji-1F4D1.avif",
  "📜": "/images/emoji/emoji-1F4DC.avif",
  "📄": "/images/emoji/emoji-1F4C4.avif",
  "📝": "/images/emoji/emoji-1F4DD.avif",
  "📡": "/images/emoji/emoji-1F4E1.avif",
  "📰": "/images/emoji/emoji-1F4F0.avif",
  "📱": "/images/emoji/emoji-1F4F1.avif",
  "📶": "/images/emoji/emoji-1F4F6.avif",
  "📸": "/images/emoji/emoji-1F4F8.avif",
  "📺": "/images/emoji/emoji-1F4FA.avif",
  "🔀": "/images/emoji/emoji-1F500.avif",
  "🔁": "/images/emoji/emoji-1F501.avif",
  "🔋": "/images/emoji/emoji-1F50B.avif",
  "🔌": "/images/emoji/emoji-1F50C.avif",
  "🔍": "/images/emoji/emoji-1F50D.avif",
  "🔐": "/images/emoji/emoji-1F510.avif",
  "🔒": "/images/emoji/emoji-1F512.avif",
  "🔧": "/images/emoji/emoji-1F527.avif",
  "🔷": "/images/emoji/emoji-1F537.avif",
  "🕙": "/images/emoji/emoji-1F559.avif",
  "🖥": "/images/emoji/emoji-1F5A5.avif",
  "🖥️": "/images/emoji/emoji-1F5A5.avif",
  "🕸️": "/images/emoji/emoji-1F578.avif",
  "🗄": "/images/emoji/emoji-1F5C4.avif",
  "🗓": "/images/emoji/emoji-1F5D3.avif",
  "😆": "/images/emoji/emoji-1F606.avif",
  "🙏": "/images/emoji/emoji-1F64F.avif",
  "🚀": "/images/emoji/emoji-1F680.avif",
  "🛕": "/images/emoji/emoji-1F6D5.avif",
  "🛠": "/images/emoji/emoji-1F6E0.avif",
  "🛠️": "/images/emoji/emoji-1F6E0.avif",
  "🛡": "/images/emoji/emoji-1F6E1.avif",
  "🤖": "/images/emoji/emoji-1F916.avif",
  "🥇": "/images/emoji/emoji-1F947.avif",
  "🥈": "/images/emoji/emoji-1F948.avif",
  "🥉": "/images/emoji/emoji-1F949.avif",
  "🥎": "/images/emoji/emoji-1F94E.avif",
  "🥳": "/images/emoji/emoji-1F973.avif",
  "🦋": "/images/emoji/emoji-1F98B.avif",
  "🧠": "/images/emoji/emoji-1F9E0.avif",
  "🧪": "/images/emoji/emoji-1F9EA.avif",
  "🧰": "/images/emoji/emoji-1F9F0.avif",
  "🧱": "/images/emoji/emoji-1F9F1.avif",
  "🧳": "/images/emoji/emoji-1F9F3.avif",
  "🪙": "/images/emoji/emoji-1FA99.avif",
  "🪨": "/images/emoji/emoji-1FAA8.avif",
  "🪲": "/images/emoji/emoji-1FAB2.avif",
  "🔮": "/images/emoji/emoji-1F52E.avif"
  };

  // Build sorted keys (longest first so compound/ZWJ sequences match first)
  var keys = Object.keys(EMOJI_MAP).sort(function(a, b) { return b.length - a.length; });
  var escapedKeys = keys.map(function(k) {
    return k.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  });
  var emojiRegex = new RegExp('(' + escapedKeys.join('|') + ')', 'gu');

  /* Replace emoji in a single text node — synchronous, fast */
  function replaceTextNode(node) {
    var text = node.nodeValue;
    emojiRegex.lastIndex = 0;
    if (!emojiRegex.test(text)) return;
    emojiRegex.lastIndex = 0;

    var frag = document.createDocumentFragment();
    var lastIdx = 0;
    var match;

    while ((match = emojiRegex.exec(text)) !== null) {
      if (match.index > lastIdx) {
        frag.appendChild(document.createTextNode(text.slice(lastIdx, match.index)));
      }
      var src = EMOJI_MAP[match[0]];
      if (src) {
        var img = document.createElement('img');
        img.src = src;
        img.alt = match[0];
        img.className = 'apple-emoji';
        img.loading = 'lazy';
        img.decoding = 'async';
        img.fetchPriority = 'low';
        img.setAttribute('aria-label', match[0]);
        img.setAttribute('role', 'img');
        frag.appendChild(img);
      } else {
        frag.appendChild(document.createTextNode(match[0]));
      }
      lastIdx = emojiRegex.lastIndex;
    }
    if (lastIdx < text.length) {
      frag.appendChild(document.createTextNode(text.slice(lastIdx)));
    }
    node.parentNode.replaceChild(frag, node);
  }

  /* Stream text nodes instead of retaining a page-sized array in memory. */
  function createTextIterator(root) {
    return document.createNodeIterator(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          var parent = node.parentElement;
          if (!parent || parent.closest('script, style, textarea, input, code, pre, .no-emoji')) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      },
      false
    );
  }

  function init() {
    /* Apple OS (macOS, iOS, iPadOS) natively renders full-color Apple emojis at system font level.
       Skipping image substitution on Apple devices avoids minutes of DOM mutations, forced reflows,
       and hundreds of unnecessary AVIF image decodes on initial page open. */
    var isApple = /Macintosh|Mac OS|iPhone|iPad|iPod/.test(navigator.userAgent || '');
    if (isApple) return;

    processInChunks(createTextIterator(document.getElementById('main') || document.body));
  }

  /* Process nodes in fast slices without dragging across minutes */
  function processInChunks(iterator) {
    var finished = false;
    var cancelled = false;

    function doChunk(deadline) {
      if (cancelled || document.hidden) {
        schedule();
        return;
      }

      var processed = 0;
      while (processed < 250 && (!deadline || deadline.timeRemaining() > 0.5)) {
        var node = iterator.nextNode();
        if (!node) {
          finished = true;
          break;
        }
        if (node.parentNode) replaceTextNode(node);
        processed += 1;
      }

      if (!finished) schedule();
    }

    function schedule() {
      if (cancelled || finished) return;
      if (!document.hidden) {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(doChunk, { timeout: 100 });
        } else {
          setTimeout(function() { doChunk(null); }, 16);
        }
      }
    }

    document.addEventListener('visibilitychange', schedule);
    window.addEventListener('pagehide', function() { cancelled = true; }, { once: true });
    schedule();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
