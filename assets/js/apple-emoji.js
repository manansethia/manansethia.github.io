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

  /* Collect ALL text nodes in document first (one-pass traversal) */
  function collectTextNodes(root) {
    var nodes = [];
    var walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
      {
        acceptNode: function(node) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            var tag = node.nodeName;
            if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA' ||
                tag === 'INPUT' || tag === 'CODE' || tag === 'PRE' ||
                node.classList.contains('no-emoji')) {
              return NodeFilter.FILTER_REJECT; // skip entire subtree
            }
            return NodeFilter.FILTER_SKIP;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      },
      false
    );
    var node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue && node.nodeValue.trim()) nodes.push(node);
    }
    return nodes;
  }

  /* Process text nodes in idle-time chunks to avoid blocking main thread */
  function processInChunks(nodes, chunkSize) {
    var idx = 0;
    function doChunk(deadline) {
      /* Use deadline if available (requestIdleCallback), else just run chunk */
      var timeRemaining = deadline ? deadline.timeRemaining() : 10;
      while (idx < nodes.length && timeRemaining > 1) {
        var node = nodes[idx++];
        if (node.parentNode) replaceTextNode(node);
        timeRemaining = deadline ? deadline.timeRemaining() : (--chunkSize > 0 ? 10 : 0);
      }
      if (idx < nodes.length) {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(doChunk, { timeout: 2000 });
        } else {
          setTimeout(function() { doChunk(null); }, 16);
        }
      }
    }
    if ('requestIdleCallback' in window) {
      requestIdleCallback(doChunk, { timeout: 2000 });
    } else {
      setTimeout(function() { doChunk(null); }, 100);
    }
  }

  function init() {
    var nodes = collectTextNodes(document.body);
    processInChunks(nodes, 50); // 50 nodes per chunk
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
