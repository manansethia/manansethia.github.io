---
permalink: /
title: "🙏 Namaste!"
description: "Manan Sethia — student, quizzer, and competitive programmer from Raipur. Passionate about AI, cybersecurity, operating systems, and building things at the intersection of curiosity and code."
keywords: "Manan Sethia, portfolio, computer science, competitive programming, quizzer, Raipur, IESO, ZCO, AI, cybersecurity"
author_profile: true
---

<style>
  /* ── Hero box (UPGRADED) ── */
  .home-hero {
    position: relative;
    margin-bottom: 32px;
    padding: 28px 26px 24px;
    border-radius: 22px;

    background:
      linear-gradient(135deg, rgba(255,255,255,0.55), rgba(255,255,255,0.15)),
      radial-gradient(1200px 400px at -10% -20%, rgba(255, 200, 120, 0.25), transparent 60%),
      radial-gradient(1000px 500px at 110% 120%, rgba(255, 180, 60, 0.18), transparent 60%);

    backdrop-filter: blur(22px) saturate(160%);
    -webkit-backdrop-filter: blur(22px) saturate(160%);

    border: 1px solid rgba(255, 190, 90, 0.35);

    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.45),
      inset 0 -1px 0 rgba(255,255,255,0.08),
      0 10px 30px rgba(120, 70, 10, 0.18),
      0 0 0 1px rgba(255, 210, 140, 0.15);

    isolation: isolate;
    overflow: hidden;

    animation: homeUp 0.55s cubic-bezier(0.2, 0.8, 0.2, 1) both;
    background-blend-mode: overlay, normal, normal;
  }

  .dark-mode .home-hero {
    background:
      linear-gradient(135deg, rgba(60,40,15,0.6), rgba(30,20,8,0.4)),
      radial-gradient(1200px 400px at -10% -20%, rgba(255, 170, 60, 0.15), transparent 60%),
      radial-gradient(1000px 500px at 110% 120%, rgba(255, 150, 40, 0.12), transparent 60%);

    border: 1px solid rgba(255, 200, 120, 0.18);

    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.08),
      inset 0 -1px 0 rgba(0,0,0,0.3),
      0 14px 40px rgba(0,0,0,0.6),
      0 0 0 1px rgba(255, 200, 120, 0.08);
  }

  @keyframes homeUp {
    0% { opacity: 0; transform: translateY(16px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .home-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background:
      linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.35), transparent 60%);
    opacity: 0.25;
    mix-blend-mode: soft-light;
    pointer-events: none;
  }

  .home-hero::after {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    background:
      radial-gradient(300px at 80% 20%, rgba(255, 190, 90, 0.35), transparent 70%),
      radial-gradient(250px at 20% 80%, rgba(255, 220, 140, 0.25), transparent 70%);
    filter: blur(40px);
    opacity: 0.6;
    z-index: 0;
    animation: premiumFloat 8s ease-in-out infinite alternate;
  }

  @keyframes premiumFloat {
    0%   { transform: translate(0, 0) scale(1); }
    100% { transform: translate(30px, -25px) scale(1.1); }
  }

  .home-hero-content { position: relative; z-index: 2; }

  /* ── Glitch pill ── */
  .home-pill {
    display: inline-block;
    font-size: 0.95em;
    font-weight: 700;
    color: #5a3000;
    background: rgba(255, 220, 130, 0.82);
    border: 1px solid rgba(192, 115, 0, 0.4);
    padding: 7px 20px;
    border-radius: 20px;
    margin-bottom: 16px;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    min-height: 1.5em;
    white-space: nowrap;
    font-family: -apple-system, "SFProWeb", "SF Pro Text", sans-serif;
  }

  .dark-mode .home-pill {
    color: #ffe090;
    background: rgba(80, 50, 5, 0.85);
    border-color: rgba(212, 160, 64, 0.5);
  }

  .home-hero-text {
    font-size: 1em;
    line-height: 1.82;
    color: #120800;
    text-shadow: 0 1px 3px rgba(255, 248, 230, 0.7);
  }
  .home-hero-text strong { color: #3a1e00; }

  .dark-mode .home-hero-text {
    color: #f5f0e6;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  }
  .dark-mode .home-hero-text strong { color: #ffffff; }

  /* ── Narrative body ── */
  .home-body {
    font-size: 1.02em;
    line-height: 1.78;
    animation: homeUp 0.55s cubic-bezier(0.2, 0.8, 0.2, 1) 0.1s both;
  }
  .home-body h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding-bottom: 0.3em;
    border-bottom: 1.5px solid #c07300;
  }
  .dark-mode .home-body h2 { border-bottom-color: #e6c194; }
  .home-body p { margin-bottom: 1rem; }
  .dark-mode .home-body { color: #f0ece4; }
  .dark-mode .home-body strong { color: #ffffff; }

  /* ── Photo strip ── */
  .home-photos {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 15px 10px;
    gap: 15px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch;
    margin: 1.8rem 0;
    cursor: grab;
  }
  .home-photos::-webkit-scrollbar { display: none; }
  .home-photos.dragging { cursor: grabbing; }

  .home-photo-card {
    flex: 0 0 auto;
    width: 280px;
    border-radius: 14px;
    border: 1px solid rgba(179, 108, 0, 0.3);
    box-shadow: 0 8px 16px rgba(88, 57, 8, 0.08);
    scroll-snap-align: start;
    background: rgba(255, 250, 240, 0.5);
  }
  .dark-mode .home-photo-card {
    border-color: rgba(255, 210, 120, 0.2);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    background: rgba(30, 20, 8, 0.5);
  }

  .home-photo-card img {
    width: 100%;
    height: 195px;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-radius 0.3s ease;
  }
  .home-photo-card img:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    position: relative;
    z-index: 10;
    border-radius: 13px;
  }

  .home-photo-cap {
    padding: 10px 14px;
    font-size: 0.82em;
    font-weight: 600;
    color: #5a3e00;
    line-height: 1.4;
  }
  .dark-mode .home-photo-cap { color: #e8d4a8; }

  /* ── Closing ── */
  .home-closing {
    margin-top: 2.5rem;
    padding-top: 1.5rem;
    border-top: 1.5px solid #c07300;
    font-size: 0.94em;
    line-height: 1.7;
    color: #7b5b2d;
    transition: color 0.3s ease, border-top-color 0.3s ease;
  }
  .dark-mode .home-closing {
    border-top-color: #e6c194;
    color: #d3b885;
  }
</style>

<!-- Hero -->
<div class="home-hero">
  <div class="home-hero-content">
    <div class="home-pill" id="greetPill">Hey, I'm Manan!</div>
    <div class="home-hero-text">
      I grew up in Raipur, a small city in central India. Most of what I know today started with a <strong>birthday gift from my grandmother</strong>, a <strong>broken laptop</strong>, and an internet connection nobody was monitoring. I am 18, endlessly curious about how we tricked sand into thinking, and still chasing the same feeling I got the first time I turned a page and discovered something I wasn't supposed to know yet.
    </div>
  </div>
</div>

<!-- Narrative -->
<div class="home-body">

  <h2>✨ How it started</h2>
  <p>
    My grandmother gifted me a <strong>DK Knowledge Encyclopedia</strong> on my 10th birthday. I don't think she knew what she was setting off. Every page was pure bliss, and that book turned curiosity from a habit into a compulsion. That same year I signed up for a WWF wildlife quiz, not because I knew anything about wildlife, but because I quietly wanted to be the kid in school who did things. By my first major quiz, the QPL, I realized it was never about the fame. It was about the hunger to learn.
  </p>

  <h2>💻 The Lenovo G580</h2>
  <p>
    Before coding, computers meant GTA Vice City, Angry Birds Star Wars, and hours on MS Paint. The machine was my dad's old <strong>2012 Lenovo G580</strong>. During COVID, I tried modding Minecraft and accidentally ran a Trojan. It attacked svchost.exe, consumed all 4GB of RAM, and corrupted family photos. I couldn't sleep that night. I didn't tell my parents. My instinct was to fix it myself. Weeks of tutorials, three recovery programs, and a dying HDD later, I recovered what I could, added an SSD, upgraded the RAM, and moved to Windows 10. All on my own.
  </p>
  <p>
    That laptop has seen many lives since: different versions of Windows going all the way back to XP, Ubuntu, Chrome OS, Kali Linux, macOS Ventura, and a custom Debian build I was putting together. Each one taught me something new.
  </p>

  <h2>🎯 The thrill</h2>
  <p>
    Walking into a competition as the only school student in a room full of college teams feels surreal. Defeating someone by a thin margin is a feeling I live for. I'm a free bird by nature, and mixing leadership with patience and a genuine sense of fun turned out to be the only thing that gets a team aligned.
  </p>

  <h2>☕️ Beyond the usual</h2>

  <div class="home-photos" id="homePhotos">
    <div class="home-photo-card">
      <img src="/images/oldlaptop.avif" alt="">
      <div class="home-photo-cap">The G580 on XP SP3 with One-Core API and the Al Pacino Gangsta Edition boot skin</div>
    </div>
    <div class="home-photo-card">
      <img src="/images/rpi5unoqesp32p4.avif" alt="">
      <div class="home-photo-cap">Raspberry Pi 5, Arduino Uno Q & ESP32-P4, my experimental lab rats</div>
    </div>
    <div class="home-photo-card">
      <img src="/images/tylerdurd.avif" alt="">
      <div class="home-photo-cap">Tyler Durden & The Narrator, a sketch I made a year back using black pen</div>
    </div>
    <div class="home-photo-card">
      <img src="/images/dexter.avif" alt="">
      <div class="home-photo-cap">Dexter the Lhasa Apso on his 1st birthday, named after the cartoon scientist</div>
    </div>
  </div>

  <p>
    I read Wikipedia every day just to discover something new. I watch Fern, Neo, and Mustard documentaries. I read true crime, dystopia, and real-life histories like <em>Killing Pablo</em>, <em>Permanent Record</em>, and <em>American Prometheus</em>. I used to draw a lot too, starting with oil pastels, then sketch pens, and eventually settling into black pen stencils and monochrome work.
  </p>
  <p>
    At home there's <strong>Dexter</strong>, my Lhasa Apso. Lately I have been deep in elevated digital privacy, degooglification, and tracker blocking across all my devices. I recently finished school as <strong>Headboy of Krishna Public School</strong>, and right now I am preparing for a Computer Science degree, which feels less like a career plan and more like the next chapter of a story that started with a virus and a lot of late nights on forums.
  </p>

  <div class="home-closing">
    Thanks for reading. Feel free to explore the rest through the navbar above. There's a lot more to see. 🔮
  </div>

</div>

<script>
  /* ── Glitch-decode greeting pill ── */
  (function() {
    var pill = document.getElementById('greetPill');
    if (!pill) return;

    var greetings = [
      "Hey, I'm Manan!",
      "\u0928\u092E\u0938\u094D\u0924\u0947, \u092E\u0948\u0902 \u092E\u0928\u0928 \u0939\u0942\u0901!",
      "\u0928\u092E\u0938\u094D\u0915\u093E\u0930\u0903, \u0905\u0939\u0902 \u092E\u0928\u0928\u0903!",
      "\u041F\u0440\u0438\u0432\u0435\u0442, \u044F \u041C\u0430\u043D\u0430\u043D!",
      "\u4F60\u597D\uFF0C\u6211\u662F\u9A6C\u5357!",
      "\u3053\u3093\u306B\u3061\u306F\u3001\u30DE\u30CA\u30F3\u3067\u3059!",
      "Hola, soy Manan!",
      "\u0BB5\u0BA3\u0B95\u0BCD\u0B95\u0BAE\u0BCD, \u0BA8\u0BBE\u0BA9\u0BCD \u0BAE\u0BA9\u0BA9\u0BCD!",
      "\u09A8\u09AE\u09B8\u09CD\u0995\u09BE\u09B0, \u0986\u09AE\u09BF \u09AE\u09A8\u09A8!",
      "\u0C28\u0C2E\u0C38\u0C4D\u0C15\u0C3E\u0C30\u0C02, \u0C28\u0C47\u0C28\u0C41 \u0C2E\u0C28\u0C28\u0C4D!",
      "\uC548\uB155\uD558\uC138\uC694, \uB9C8\uB09C\uC785\uB2C8\uB2E4!",
      "Bonjour, je suis Manan!",
      "Hallo, ich bin Manan!",
      "\u0645\u0631\u062D\u0628\u0627\u060C \u0623\u0646\u0627 \u0645\u0627\u0646\u0627\u0646!",
      "\u0B28\u0B2E\u0B38\u0B4D\u0B15\u0B3E\u0B30, \u0B2E\u0B41\u0B01 \u0B2E\u0B28\u0B28!",
      "\u0AA8\u0AAE\u0AB8\u0ACD\u0AA4\u0AC7, \u0AB9\u0AC1\u0A82 \u0AAE\u0AA8\u0AA8 \u0A9B\u0AC1\u0A82!",
      "\u0A28\u0A2E\u0A38\u0A15\u0A3E\u0A30, \u0A2E\u0A48\u0A02 \u0A2E\u0A28\u0A28 \u0A39\u0A3E\u0A02!",
      "Ol\u00E1, eu sou Manan!",
      "Ciao, sono Manan!",
      "Merhaba, ben Manan!",
      "Xin ch\u00E0o, t\u00F4i l\u00E0 Manan!",
      "Sawadee, phom Manan!",
      "Salve, ego Manan sum!",
      "\uD800\uDC00\uD800\uDC06\uD800\uDC13\uD800\uDC0A\uD800\uDC22 \uD800\uDC0C\uD800\uDC04!",
      "\u13A0\u13D2\u13A6 \u13A0\u13CC\u13F1!",
      "Qapla'! jIH Manan!",
      "\u16BA\u16D6\u16DA\u16DA, \u16D6\u16B7 \u16DA\u16C1\u16B1!",
      "\u10E1\u10D0\u10DA\u10D0\u10DB\u10D8, \u10DB\u10D4 \u10D5\u10D0\u10E0 \u10DB\u10D0\u10DC\u10D0\u10DC\u10D8!",
      "\u0F56\u0F40\u0F62\u0F0B\u0F64\u0F72\u0F66, \u0F44\u0F0B\u0F42\u0F72\u0F0B\u0F58\u0F72\u0F44 \u0F58\u0F0B\u0F63\u0F0B\u0F58\u0F0B\u0F53\u0F53!",
      "\u1200\u120E, \u12A5\u1294 \u121B\u1293\u1295 \u1290\u129D!",
      "\u1798\u17D2\u1787\u17BC\u179B\u179A\u17C0\u1794\u179F\u17BD\u179A, \u1781\u17D2\u1789\u17BB\u17C6 \u1798\u17B6\u178E\u17B6\u1793!"
    ];

    /* Scramble glyph pool: Devanagari + Cyrillic + CJK + Hangul + Tamil + Hieroglyphs + Norse runes + random */
    var glyphPool =
      "\u0905\u0906\u0907\u0908\u0909\u090A\u090B\u090F\u0910\u0913\u0914\u0915\u0916\u0917\u0918\u091A\u091B\u091C\u091D\u091F" +
      "\u0920\u0921\u0922\u0923\u0924\u0925\u0926\u0927\u0928\u092A\u092B\u092C\u092D\u092E\u092F\u0930\u0932\u0935\u0936\u0937\u0938\u0939" +
      "\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u041A\u041B\u041C\u041D\u041E\u041F\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u042D\u042E\u042F" +
      "\u4F60\u597D\u6211\u662F\u4E16\u754C\u4EBA\u5927\u4E2D\u5C0F\u4E0A\u4E0B\u5DE6\u53F3\u7F8E\u660E\u9F99\u98CE\u6C34\u706B\u5730\u6728\u91D1" +
      "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB" +
      "\uAC00\uB098\uB2E4\uB77C\uB9C8\uBC14\uC0AC\uC544\uC790\uCC28\uCE74\uD0C0\uD30C\uD558" +
      "\u0BA4\u0BAE\u0BA8\u0BAA\u0B95\u0B9A\u0B9F\u0B9E\u0BA3\u0BAE\u0BAF\u0BB0\u0BB2\u0BB5\u0BB4\u0BB3" +
      "\u13A0\u13A2\u13A4\u13A6\u13A8\u13AA\u13AC\u13B0\u13B3\u13B6\u13B9\u13BB\u13C0\u13C3\u13C6\u13C9\u13CC\u13CF" +
      "\u16A0\u16A2\u16A6\u16A8\u16B1\u16B7\u16B9\u16BA\u16BE\u16C1\u16C3\u16C7\u16C8\u16D2\u16D6\u16DA\u16DE\u16DF" +
      "\u0F40\u0F41\u0F42\u0F44\u0F45\u0F46\u0F47\u0F49\u0F4F\u0F50\u0F51\u0F53\u0F54\u0F55\u0F56\u0F58\u0F59\u0F5A\u0F5F\u0F60\u0F61\u0F62\u0F63\u0F66\u0F67";

    var idx = 0;
    var animating = false;

    function shuffle(arr) {
      for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
      }
      return arr;
    }

    /* Shuffle everything beyond index 1 (keep English first, Hindi second, rest random) */
    var fixedStart = greetings.slice(0, 2);
    var rest = shuffle(greetings.slice(2));
    greetings = fixedStart.concat(rest);

    function randomGlyph() {
      return glyphPool[Math.floor(Math.random() * glyphPool.length)];
    }

    function glitchTo(target) {
      if (animating) return;
      animating = true;
      var iterations = 0;
      var totalFrames = 16;

      var interval = setInterval(function() {
        iterations++;
        var progress = iterations / totalFrames;
        var revealed = Math.floor(progress * target.length);
        var display = "";

        for (var i = 0; i < target.length; i++) {
          if (i < revealed) {
            display += target[i];
          } else {
            display += randomGlyph();
          }
        }

        pill.textContent = display;

        if (iterations >= totalFrames) {
          clearInterval(interval);
          pill.textContent = target;
          animating = false;
        }
      }, 35);
    }

    setInterval(function() {
      idx = (idx + 1) % greetings.length;
      glitchTo(greetings[idx]);
    }, 3000);
  })();

  /* ── Drag-to-scroll for photo strip ── */
  (function() {
    var el = document.getElementById('homePhotos');
    if (!el) return;
    var isDown = false, startX, scrollLeft;
    el.addEventListener('mousedown', function(e) {
      isDown = true; el.classList.add('dragging');
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    });
    el.addEventListener('mouseleave', function() { isDown = false; el.classList.remove('dragging'); });
    el.addEventListener('mouseup', function() { isDown = false; el.classList.remove('dragging'); });
    el.addEventListener('mousemove', function(e) {
      if (!isDown) return;
      e.preventDefault();
      el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX) * 1.5;
    });
  })();
</script>
