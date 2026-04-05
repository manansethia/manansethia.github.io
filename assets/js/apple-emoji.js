/* Apple Emoji Replacer
 * Replaces Unicode emoji in text nodes with Apple WebP images.
 * Auto-generated – do not edit manually.
 */
(function () {
  'use strict';

  var EMOJI_MAP = {
  "👨‍💻": "/images/emoji/emoji-1F468-200D-1F4BB.webp",
  "🇨🇳": "/images/emoji/emoji-1F1E8-1F1F3.webp",
  "🇮🇳": "/images/emoji/emoji-1F1EE-1F1F3.webp",
  "☁": "/images/emoji/emoji-2601.webp",
  "⚔": "/images/emoji/emoji-2694.webp",
  "⚠": "/images/emoji/emoji-26A0.webp",
  "⚡": "/images/emoji/emoji-26A1.webp",
  "✅": "/images/emoji/emoji-2705.webp",
  "✴": "/images/emoji/emoji-2734.webp",
  "🃏": "/images/emoji/emoji-1F0CF.webp",
  "🌅": "/images/emoji/emoji-1F305.webp",
  "🌍": "/images/emoji/emoji-1F30D.webp",
  "🌏": "/images/emoji/emoji-1F30F.webp",
  "🌐": "/images/emoji/emoji-1F310.webp",
  "🌒": "/images/emoji/emoji-1F312.webp",
  "🌙": "/images/emoji/emoji-1F319.webp",
  "🌡": "/images/emoji/emoji-1F321.webp",
  "🌱": "/images/emoji/emoji-1F331.webp",
  "🍓": "/images/emoji/emoji-1F353.webp",
  "🍯": "/images/emoji/emoji-1F36F.webp",
  "🎓": "/images/emoji/emoji-1F393.webp",
  "🎖": "/images/emoji/emoji-1F396.webp",
  "🎙": "/images/emoji/emoji-1F399.webp",
  "🎲": "/images/emoji/emoji-1F3B2.webp",
  "🏅": "/images/emoji/emoji-1F3C5.webp",
  "🏆": "/images/emoji/emoji-1F3C6.webp",
  "🏏": "/images/emoji/emoji-1F3CF.webp",
  "🏢": "/images/emoji/emoji-1F3E2.webp",
  "🐍": "/images/emoji/emoji-1F40D.webp",
  "🐘": "/images/emoji/emoji-1F418.webp",
  "🐝": "/images/emoji/emoji-1F41D.webp",
  "🐼": "/images/emoji/emoji-1F43C.webp",
  "👋": "/images/emoji/emoji-1F44B.webp",
  "👨": "/images/emoji/emoji-1F468.webp",
  "💡": "/images/emoji/emoji-1F4A1.webp",
  "💤": "/images/emoji/emoji-1F4A4.webp",
  "💬": "/images/emoji/emoji-1F4AC.webp",
  "💳": "/images/emoji/emoji-1F4B3.webp",
  "💻": "/images/emoji/emoji-1F4BB.webp",
  "💼": "/images/emoji/emoji-1F4BC.webp",
  "💽": "/images/emoji/emoji-1F4BD.webp",
  "💾": "/images/emoji/emoji-1F4BE.webp",
  "📈": "/images/emoji/emoji-1F4C8.webp",
  "📊": "/images/emoji/emoji-1F4CA.webp",
  "📋": "/images/emoji/emoji-1F4CB.webp",
  "📍": "/images/emoji/emoji-1F4CD.webp",
  "📜": "/images/emoji/emoji-1F4DC.webp",
  "📄": "/images/emoji/emoji-1F4C4.webp",
  "📝": "/images/emoji/emoji-1F4DD.webp",
  "📡": "/images/emoji/emoji-1F4E1.webp",
  "📰": "/images/emoji/emoji-1F4F0.webp",
  "📱": "/images/emoji/emoji-1F4F1.webp",
  "📶": "/images/emoji/emoji-1F4F6.webp",
  "📸": "/images/emoji/emoji-1F4F8.webp",
  "📺": "/images/emoji/emoji-1F4FA.webp",
  "🔀": "/images/emoji/emoji-1F500.webp",
  "🔁": "/images/emoji/emoji-1F501.webp",
  "🔋": "/images/emoji/emoji-1F50B.webp",
  "🔌": "/images/emoji/emoji-1F50C.webp",
  "🔍": "/images/emoji/emoji-1F50D.webp",
  "🔐": "/images/emoji/emoji-1F510.webp",
  "🔒": "/images/emoji/emoji-1F512.webp",
  "🔧": "/images/emoji/emoji-1F527.webp",
  "🔷": "/images/emoji/emoji-1F537.webp",
  "🕙": "/images/emoji/emoji-1F559.webp",
  "🖥": "/images/emoji/emoji-1F5A5.webp",
  "🗄": "/images/emoji/emoji-1F5C4.webp",
  "🗓": "/images/emoji/emoji-1F5D3.webp",
  "😆": "/images/emoji/emoji-1F606.webp",
  "🙏": "/images/emoji/emoji-1F64F.webp",
  "🚀": "/images/emoji/emoji-1F680.webp",
  "🛕": "/images/emoji/emoji-1F6D5.webp",
  "🛠": "/images/emoji/emoji-1F6E0.webp",
  "🛡": "/images/emoji/emoji-1F6E1.webp",
  "🤖": "/images/emoji/emoji-1F916.webp",
  "🥇": "/images/emoji/emoji-1F947.webp",
  "🥈": "/images/emoji/emoji-1F948.webp",
  "🥉": "/images/emoji/emoji-1F949.webp",
  "🥎": "/images/emoji/emoji-1F94E.webp",
  "🥳": "/images/emoji/emoji-1F973.webp",
  "🦋": "/images/emoji/emoji-1F98B.webp",
  "🧠": "/images/emoji/emoji-1F9E0.webp",
  "🧪": "/images/emoji/emoji-1F9EA.webp",
  "🧰": "/images/emoji/emoji-1F9F0.webp",
  "🧳": "/images/emoji/emoji-1F9F3.webp",
  "🪙": "/images/emoji/emoji-1FA99.webp",
  "🪨": "/images/emoji/emoji-1FAA8.webp",
  "🪲": "/images/emoji/emoji-1FAB2.webp"
  };

  // Build sorted keys (longest first so compound/ZWJ sequences match first)
  var keys = Object.keys(EMOJI_MAP).sort(function(a, b) { return b.length - a.length; });

  var escapedKeys = keys.map(function(k) {
    return k.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  });
  var emojiRegex = new RegExp('(' + escapedKeys.join('|') + ')', 'gu');

  function replaceEmojisInNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      var text = node.nodeValue;
      if (!emojiRegex.test(text)) return;
      emojiRegex.lastIndex = 0;

      var frag = document.createDocumentFragment();
      var lastIdx = 0;
      var match;
      emojiRegex.lastIndex = 0;

      while ((match = emojiRegex.exec(text)) !== null) {
        if (match.index > lastIdx) {
          frag.appendChild(document.createTextNode(text.slice(lastIdx, match.index)));
        }
        var emoji = match[0];
        var src = EMOJI_MAP[emoji];
        if (src) {
          var img = document.createElement('img');
          img.src = src;
          img.alt = emoji;
          img.className = 'apple-emoji';
          img.setAttribute('aria-label', emoji);
          img.setAttribute('role', 'img');
          img.setAttribute('loading', 'lazy');
          frag.appendChild(img);
        } else {
          frag.appendChild(document.createTextNode(emoji));
        }
        lastIdx = emojiRegex.lastIndex;
      }

      if (lastIdx < text.length) {
        frag.appendChild(document.createTextNode(text.slice(lastIdx)));
      }

      node.parentNode.replaceChild(frag, node);

    } else if (
      node.nodeType === Node.ELEMENT_NODE &&
      node.nodeName !== 'SCRIPT' &&
      node.nodeName !== 'STYLE' &&
      node.nodeName !== 'TEXTAREA' &&
      node.nodeName !== 'INPUT' &&
      !node.classList.contains('no-emoji')
    ) {
      var children = Array.from(node.childNodes);
      children.forEach(function(child) { replaceEmojisInNode(child); });
    }
  }

  function init() {
    replaceEmojisInNode(document.body);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
