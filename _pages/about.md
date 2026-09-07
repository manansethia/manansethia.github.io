---
permalink: /
title: "Namaste!"
description: "Manan Sethia — Computer Science undergraduate at NTU Singapore, quizzer, competitive programmer, and curious builder."
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
      linear-gradient(135deg, rgba(255,255,255,0.88), rgba(255,248,232,0.88)),
      radial-gradient(1200px 400px at -10% -20%, rgba(255, 200, 120, 0.25), transparent 60%),
      radial-gradient(1000px 500px at 110% 120%, rgba(255, 180, 60, 0.18), transparent 60%);

    backdrop-filter: blur(60px) saturate(160%) !important;
    -webkit-backdrop-filter: blur(60px) saturate(160%) !important;

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
      linear-gradient(135deg, rgba(60,40,15,0.88), rgba(30,20,8,0.88)),
      radial-gradient(1200px 400px at -10% -20%, rgba(255, 170, 60, 0.15), transparent 60%),
      radial-gradient(1000px 500px at 110% 120%, rgba(255, 150, 40, 0.12), transparent 60%);

    border: 1px solid rgba(255, 200, 120, 0.18);

    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.08),
      inset 0 -1px 0 rgba(0,0,0,0.3),
      0 14px 40px rgba(0,0,0,0.6),
      0 0 0 1px rgba(255, 200, 120, 0.08);
  }

  .royal-mode .home-hero {
    background:
      linear-gradient(135deg, rgba(66, 58, 46, 0.88), rgba(33, 30, 23, 0.88)),
      radial-gradient(1200px 400px at -10% -20%, rgba(72, 70, 64, 0.2), transparent 60%),
      radial-gradient(1000px 500px at 110% 120%, rgba(72, 70, 64, 0.15), transparent 60%);

    border: 1px solid rgba(240, 240, 240, 0.2);

    box-shadow:
      inset 0 1px 0 rgba(240,240,240,0.12),
      inset 0 -1px 0 rgba(0,0,0,0.3),
      0 14px 40px rgba(0,0,0,0.6),
      0 0 0 1px rgba(240, 240, 240, 0.08);
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
    will-change: transform;
  }

  .home-hero.is-offscreen::after { animation-play-state: paused; }

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

  .royal-mode .home-pill {
    color: #ffffd1;
    background: rgba(72, 69, 64, 0.85);
    border-color: rgba(240, 240, 240, 0.3);
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
  .dark-mode .home-hero-text strong { color: #ffe499; }

  .royal-mode .home-hero-text {
    color: #ffffff;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  }
  .royal-mode .home-hero-text strong { color: #ffffd1; }

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
  .home-body strong { color: #3a1e00; }
  .dark-mode .home-body { color: #f0ece4; }
  .dark-mode .home-body strong { color: #ffe499; }

  .royal-mode .home-body h2 { border-bottom-color: rgba(200, 200, 200, 0.7); }
  .royal-mode .home-body { color: #ffffff; }
  .royal-mode .home-body strong { color: #ffffd1; }

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
  .royal-mode .home-photo-card {
    border-color: rgba(240, 240, 240, 0.3);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background: rgba(72, 69, 64, 0.5);
  }

  .home-photo-card img {
    width: 100%;
    height: 195px;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    object-fit: cover;
    display: block;
    /* !important required to beat the wildcard `* { transition-duration: 0s
       !important }` rule in _base.scss. Without it, hover snaps instantly. */
    -webkit-transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
                box-shadow 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
                border-radius 0.3s ease !important;
    transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
                box-shadow 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
                border-radius 0.3s ease !important;
  }
  .home-photo-card img:hover {
    transform: scale(1.07) translateY(-3px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22);
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
  .royal-mode .home-photo-cap { color: #ffffd1; }

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
  .royal-mode .home-closing {
    border-top-color: rgb(240, 240, 240);
    color: #ffffd1;
  }
  .royal-mode .page__content h2 { border-bottom: 1.5px solid rgba(240, 240, 240, 0.9); }
</style>

<!-- Hero -->
<div class="home-hero">
  <div class="home-hero-content">
    <div class="home-pill" id="greetPill">Hey, I'm Manan!</div>
    <div class="home-hero-text">
      I grew up in Raipur, a city in central India. Most of what I know today started with a <strong>birthday gift from my grandmother</strong>, a <strong>broken laptop</strong>, and an internet connection nobody was monitoring. I am 18, endlessly curious about how we tricked sand into thinking, and still chasing the same feeling I got the first time I turned a page and discovered something I wasn't supposed to know yet.
    </div>
  </div>
</div>

<!-- Narrative -->
<div class="home-body">

  <h2>How it started</h2>
  <p>
    My grandmother gifted me a <strong>DK Knowledge Encyclopedia</strong> on my 10th birthday. I don't think she knew what she was setting off. Every page was pure bliss, and that book turned curiosity from a habit into a compulsion. That same year I signed up for a WWF wildlife quiz, not because I knew anything about wildlife, but because I quietly wanted to be the kid in school who did things. By my first major quiz, the QPL, I realized it was never about the fame. It was about the hunger to learn.
  </p>

  <h2>The Lenovo G580</h2>
  <p>
    Before coding, computers meant GTA Vice City, Angry Birds Star Wars, and hours on MS Paint. The machine was my dad's old <strong>2012 Lenovo G580</strong>. During COVID, I tried modding Minecraft and accidentally ran a Trojan. It attacked svchost.exe, consumed all 4GB of RAM, and corrupted family photos. I couldn't sleep that night. I didn't tell my parents. My instinct was to fix it myself. Weeks of tutorials, three recovery programs, and a dying HDD later, I recovered what I could, added an SSD, upgraded the RAM, and moved to Windows 10. All on my own.
  </p>
  <p>
    That laptop has seen many lives since: different versions of Windows going all the way back to XP, Ubuntu, Chrome OS, Kali Linux, macOS Ventura, and a custom Debian build I was putting together. Each one taught me something new.
  </p>

  <h2>The thrill</h2>
  <p>
    Walking into a competition as the only school student in a room full of college teams feels surreal. Defeating someone by a thin margin is a feeling I live for. I'm a free bird by nature, and mixing leadership with patience and a genuine sense of fun turned out to be the only thing that gets a team aligned.
  </p>

  <h2>The NTU chapter</h2>
  <p>
    I am now pursuing a <strong>Bachelor of Computing (Honours) in Computer Science</strong> at Nanyang Technological University's College of Computing and Data Science, with specialisations in <strong>Cyber Security</strong> and <strong>Artificial Intelligence</strong>. I am supported by the <strong>NTU Science and Technology Undergraduate Scholarship</strong>.
  </p>

  <h2>Beyond the usual</h2>

  <div class="home-photos" id="homePhotos">
    <div class="home-photo-card">
      <img loading="lazy" decoding="async" src="/images/oldlaptop.avif" alt="">
      <div class="home-photo-cap">The G580 on XP SP3 with One-Core API and the Al Pacino Gangsta Edition boot skin</div>
    </div>
    <div class="home-photo-card">
      <img loading="lazy" decoding="async" src="/images/rpi5unoqesp32p4.avif" alt="">
      <div class="home-photo-cap">Raspberry Pi 5, Arduino Uno Q & ESP32-P4, my experimental lab rats</div>
    </div>
    <div class="home-photo-card">
      <img loading="lazy" decoding="async" src="/images/tylerdurd.avif" alt="">
      <div class="home-photo-cap">Tyler Durden & The Narrator, a sketch I made a year back using black pen</div>
    </div>
    <div class="home-photo-card">
      <img loading="lazy" decoding="async" src="/images/dexter.avif" alt="">
      <div class="home-photo-cap">Dexter the Lhasa Apso on his 1st birthday, named after the cartoon scientist</div>
    </div>
  </div>

  <p>
    I read Wikipedia every day just to discover something new. I watch Fern, Neo, and Mustard documentaries. I read true crime, dystopia, and real-life histories like <em>Killing Pablo</em>, <em>Permanent Record</em>, and <em>American Prometheus</em>. I used to draw a lot too, starting with oil pastels, then sketch pens, and eventually settling into black pen stencils and monochrome work.
  </p>
  <p>
    At home there's <strong>Dexter</strong>, my Lhasa Apso. Lately I have been deep in elevated digital privacy, degooglification, and tracker blocking across all my devices. After finishing school as <strong>Headboy of Krishna Public School</strong>, I began studying Computer Science at Nanyang Technological University in Singapore. It feels less like a career plan and more like the next chapter of a story that started with a virus and a lot of late nights on forums.
  </p>

  <div class="home-closing">
    Thanks for reading. Feel free to explore the rest through the navbar above. There's a lot more to see.
  </div>

</div>

<script>
  /* ── Glitch-decode greeting pill ── */
  (function() {
    var pill = document.getElementById('greetPill');
    if (!pill) return;

    var greetings = [
      "Hey, I'm Manan!",
      "\u0928\u092e\u0938\u094d\u0924\u0947, \u092e\u0948\u0902 \u092e\u0928\u0928 \u0939\u0942\u0901!",
      "\u0928\u092e\u0938\u094d\u0915\u093e\u0930\u0903, \u0905\u0939\u0902 \u092e\u0928\u0928\u0903!",
      "\u0bb5\u0ba3\u0b95\u0bcd\u0b95\u0bae\u0bcd, \u0ba8\u0bbe\u0ba9\u0bcd \u0bae\u0ba9\u0ba9\u0bcd!",
      "\u09a8\u09ae\u09b8\u09cd\u0995\u09be\u09b0, \u0986\u09ae\u09bf \u09ae\u09a8\u09a8!",
      "\u0c28\u0c2e\u0c38\u0c4d\u0c15\u0c3e\u0c30\u0c02, \u0c28\u0c47\u0c28\u0c41 \u0c2e\u0c28\u0c28\u0c4d!",
      "\u0ca8\u0cae\u0cb8\u0ccd\u0c95\u0cbe\u0cb0, \u0ca8\u0cbe\u0ca8\u0cc1 \u0cae\u0ca8\u0ca8\u0ccd!",
      "\u0d28\u0d2e\u0d38\u0d4d\u0d15\u0d3e\u0d30\u0d02, \u0d1e\u0d3e\u0d7b \u0d2e\u0d28\u0d7b \u0d06\u0d23\u0d4d!",
      "\u0928\u092e\u0938\u094d\u0915\u093e\u0930, \u092e\u0940 \u092e\u0928\u0928 \u0906\u0939\u0947!",
      "\u0aa8\u0aae\u0ab8\u0acd\u0aa4\u0ac7, \u0ab9\u0ac1\u0a82 \u0aae\u0aa8\u0aa8 \u0a9b\u0ac1\u0a82!",
      "\u0a38\u0a24\u0a3f \u0a38\u0a4d\u0a30\u0a40 \u0a05\u0a15\u0a3e\u0a32, \u0a2e\u0a48\u0a02 \u0a2e\u0a28\u0a28 \u0a39\u0a3e\u0a02!",
      "\u0633\u0644\u0627\u0645\u060c \u0645\u06cc\u06ba \u0645\u0646\u0646 \u0622\u06ba!",
      "\u0b28\u0b2e\u0b38\u0b4d\u0b15\u0b3e\u0b30, \u0b2e\u0b41\u0b01 \u0b2e\u0b28\u0b28!",
      "\u09a8\u09ae\u09b8\u09cd\u0995\u09be\u09f0, \u09ae\u0987 \u09ae\u09a8\u09a8!",
      "\u0622\u062f\u0627\u0628\u060c \u0645\u06cc\u06ba \u0645\u0646\u0646 \u06c1\u0648\u06ba!",
      "\u0633\u0644\u0627\u0645\u060c \u0628\u0624 \u0686\u06be\u064f\u0633 \u0645\u0646\u0646!",
      "\u0633\u0644\u0627\u0645\u060c \u0645\u0627\u0646 \u0645\u0646\u0646 \u0622\u0647\u064a\u0627\u0646!",
      "\u0928\u092e\u0938\u094d\u0915\u093e\u0930, \u092e\u093e\u0902 \u092e\u0928\u0928 \u0906\u0939\u093f\u092f\u093e\u0902!",
      "\u092a\u094d\u0930\u0923\u093e\u092e, \u0939\u092e \u092e\u0928\u0928 \u091b\u0940!",
      "\u092a\u094d\u0930\u0923\u093e\u092e, \u0939\u092e \u092e\u0928\u0928 \u0939\u0908\u0902!",
      "\u092a\u094d\u0930\u0923\u093e\u092e, \u0939\u092e \u092e\u0928\u0928 \u0939\u093f\u092f\u094b!",
      "\u0930\u093e\u092e \u0930\u093e\u092e, \u0939\u092e \u092e\u0928\u0928 \u0905\u0939\u0940!",
      "\u0930\u093e\u0927\u0947 \u0930\u093e\u0927\u0947, \u0939\u092e \u092e\u0928\u0928 \u0939\u0948\u0902!",
      "\u0916\u092e\u094d\u092e\u093e \u0918\u0923\u0940, \u092e\u094d\u0939\u0948\u0902 \u092e\u0928\u0928 \u0939\u0942\u0901!",
      "\u0930\u093e\u092e \u0930\u093e\u092e, \u092e\u0948\u0902 \u092e\u0928\u0928 \u0938\u0942\u0902!",
      "\u0926\u0947\u0935 \u092c\u0930\u0947\u0902 \u0915\u0930\u0942\u0902, \u0939\u093e\u0902\u0935 \u092e\u0928\u0928!",
      "\u0ca8\u0cae\u0cb8\u0ccd\u0c95\u0cbe\u0cb0, \u0caf\u0cbe\u0ca8\u0ccd \u0cae\u0ca8\u0ca8\u0ccd!",
      "\uabc8\uabe8\uabd4\uabe8\uabdd\uabd6\uabd4\uabe4, \uabd1\uabe9\uabcd\uabe5\uabdb \uabc3\uabc5\uabdf\uabc5\uabe4!",
      "\u1c61\u1c5a\u1c66\u1c5f\u1c68, \u1c64\u1c67 \u1c6b\u1c5a \u1c62\u1c5f\u1c71\u1c5f\u1c71!",
      "\u0916\u0941\u0932\u0941\u092e\u092c\u093e\u092f, \u0906\u0902 \u092e\u0928\u093e\u0928!",
      "\u0928\u092e\u0938\u094d\u0924\u0947, \u092e\u0948\u0902 \u092e\u0928\u0928 \u0939\u093e\u0902!",
      "\u0928\u092e\u0938\u094d\u0924\u0947, \u092e \u092e\u0928\u0928 \u0939\u0941\u0901!",
      "\u0d86\u0dba\u0dd4\u0db6\u0ddd\u0dc0\u0db1\u0dca, \u0db8\u0db8 \u0db8\u0db1\u0db1\u0dca!",
      "\u0787\u07a6\u0787\u07b0\u0790\u07a6\u078d\u07a7\u0789\u07b0 \u07a2\u07a6\u078d\u07a6\u0787\u07a8\u0786\u07aa\u0789\u07b0\u060c \u0789\u07a8\u0787\u07a9 \u0789\u07a6\u0782\u07a6\u0782\u07b0!",
      "\u0f56\u0f40\u0fb2\u0f0b\u0f64\u0f72\u0f66\u0f0b\u0f56\u0f51\u0f7a\u0f0b\u0f63\u0f7a\u0f42\u0f66, \u0f44\u0f0b\u0f53\u0f72\u0f0b\u0f58\u0f0b\u0f53\u0f53\u0f0b\u0f61\u0f72\u0f53!",
      "\u0f40\u0f74\u0b1c\u1030\u0f5f\u0f44\u0f0b\u0f54\u0f7c\u0f0b\u0f63\u0f42\u0f66, \u0f44\u0f0b\u0f53\u0f72\u0f0b\u0f58\u0f0b\u0f53\u0f53\u0f0b\u0f68\u0f72\u0f53!",
      "\u4f60\u597d\uff0c\u6211\u662f\u9a6c\u5357\uff01",
      "\u4f60\u597d\uff0c\u6211\u662f\u99ac\u5357\uff01",
      "\u96f7\u597d\uff0c\u6211\u4fc2\u99ac\u5357\uff01",
      "\u4fac\u597d\uff0c\u6211\u53eb\u9a6c\u5357\uff01",
      "\u6c5d\u597d\uff0c\u6211\u662f\u99ac\u5357\uff01",
      "\u6c5d\u597d\uff0c\u6211\u4fc2\u99ac\u5357\uff01",
      "\u3053\u3093\u306b\u3061\u306f\u3001\u30de\u30ca\u30f3\u3067\u3059\uff01",
      "\u521d\u3081\u307e\u3057\u3066\u3001\u30de\u30ca\u30f3\u3068\u7533\u3057\u307e\u3059\u3002",
      "\u6bce\u5ea6\u3001\u30de\u30ca\u30f3\u3084\u3067\uff01",
      "\u306f\u3044\u3055\u3044\u3001\u308f\u3093\u3084\u30de\u30ca\u30f3\u3084\u3044\u3073\u30fc\u3093\uff01",
      "\uc548\ub155\ud558\uc138\uc694, \ub9c8\ub09c\uc785\ub2c8\ub2e4!",
      "\uc548\ub155, \ub09c \ub9c8\ub09c\uc774\uc57c!",
      "Xin ch\u00e0o, t\u00f4i l\u00e0 Manan!",
      "\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e04\u0e23\u0e31\u0e1a \u0e1c\u0e21\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e32\u0e19\u0e31\u0e19!",
      "\u0eaa\u0eb0\u0e9a\u0eb2\u0e8d\u0e94\u0eb5, \u0e82\u0ec9\u0ead\u0e8d\u0e8a\u0eb7\u0ec8\u0ea1\u0eb2\u0e99\u0eb2\u0e99!",
      "\u1787\u17c6\u179a\u17b6\u1794\u179f\u17bd\u179a, \u1781\u17d2\u1789\u17bb\u17c6\u1788\u17d2\u1798\u17c4\u17c7 \u1798\u17c9\u17b6\u178e\u17b6\u1793!",
      "\u1019\u1004\u103a\u1039\u1002\u101c\u102c\u1015\u102b\u104a \u1000\u103b\u103d\u1014\u103a\u1010\u1031\u102c\u103a \u1019\u102c\u1014\u1014\u103a \u1015\u102b!",
      "Halo, saya Manan!",
      "Sugeng rawuh, kulo Manan!",
      "Sampurasun, simkuring Manan!",
      "Om Swastyastu, tiang Manan!",
      "Horas, au ma si Manan!",
      "Kamusta, ako si Manan!",
      "Kumusta, ako si Manan!",
      "Kablaaw, siak ni Manan!",
      "Maupay nga adlaw, ako hi Manan!",
      "Marhay na aldaw, ako si Manan!",
      "\u0645\u0631\u062d\u0628\u0627\u064b\u060c \u0623\u0646\u0627 \u0645\u0627\u0646\u0627\u0646!",
      "\u0623\u0647\u0644\u0627\u064b\u060c \u0623\u0646\u0627 \u0645\u0646\u0627\u0646!",
      "\u0645\u0631\u062d\u0628\u0627\u060c \u0623\u0646\u0627 \u0645\u0646\u0627\u0646!",
      "\u0647\u0644\u0627 \u0648\u0627\u0644\u0644\u0647\u060c \u0623\u0646\u0627 \u0645\u0646\u0627\u0646!",
      "\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064a\u0643\u0645\u060c \u0623\u0646\u0627 \u0645\u0646\u0627\u0646!",
      "\u0633\u0644\u0627\u0645\u060c \u0645\u0646 \u0645\u0646\u0646 \u0647\u0633\u062a\u0645!",
      "\u0633\u0644\u0627\u0645\u060c \u0646\u0627\u0645 \u0645\u0646 \u0645\u0646\u0646 \u0627\u0633\u062a!",
      "\u0421\u0430\u043b\u043e\u043c, \u043c\u0430\u043d \u041c\u0430\u043d\u0430\u043d \u04b3\u0430\u0441\u0442\u0430\u043c!",
      "\u0633\u0644\u0627\u0645\u060c \u0632\u0645\u0627 \u0646\u0648\u0645 \u0645\u0646\u0646 \u062f\u06cc!",
      "Silav, ez Manan im!",
      "\u0633\u06b5\u0627\u0648\u060c \u0645\u0646 \u0645\u06d5\u0646\u0627\u0646\u0645!",
      "\u05e9\u05dc\u05d5\u05dd, \u05d0\u05e0\u05d9 \u05de\u05e0\u05df!",
      "Merhaba, ben Manan!",
      "Salam, m\u0259n Mananam!",
      "Salam, men Manan!",
      "Salom, men Mananman!",
      "\u0421\u04d9\u043b\u0435\u043c, \u043c\u0435\u043d \u041c\u0430\u043d\u0430\u043d\u043c\u044b\u043d!",
      "\u0421\u0430\u043b\u0430\u043c, \u043c\u0435\u043d \u041c\u0430\u043d\u0430\u043d\u043c\u044b\u043d!",
      "\u064a\u0627\u062e\u0634\u0649\u0645\u06c7\u0633\u0649\u0632\u060c \u0645\u06d5\u0646 \u0645\u0627\u0646\u0627\u0646!",
      "\u0421\u04d9\u043b\u0430\u043c, \u043c\u0438\u043d \u041c\u0430\u043d\u0430\u043d!",
      "\u072b\u0720\u0721\u0710\u060c \u0710\u0722\u0710 \u071d\u0718\u0722 \u0721\u0722\u0722!",
      "\u2d30\u2d63\u2d53\u2d4d, \u2d4f\u2d3d\u2d3d\u2d49\u2d4f \u2d37 \u2d4e\u2d30\u2d4f\u2d30\u2d4f!",
      "\u00a1Hola, soy Manan!",
      "Bonjour, je suis Manan !",
      "Hallo, ich bin Manan!",
      "Gr\u00fcezi, ich bi de Manan!",
      "Servus, i bin da Manan!",
      "Ciao, sono Manan!",
      "Ol\u00e1, eu sou o Manan!",
      "Oi, eu sou o Manan!",
      "\u041f\u0440\u0438\u0432\u0435\u0442, \u044f \u041c\u0430\u043d\u0430\u043d!",
      "\u041f\u0440\u0438\u0432\u0456\u0442, \u044f \u041c\u0430\u043d\u0430\u043d!",
      "\u041f\u0440\u044b\u0432\u0456\u0442\u0430\u043d\u043d\u0435, \u044f \u041c\u0430\u043d\u0430\u043d!",
      "Cze\u015b\u0107, jestem Manan!",
      "Ahoj, j\u00e1 jsem Manan!",
      "Ahoj, vol\u00e1m sa Manan!",
      "Szia, Manan vagyok!",
      "Salut, sunt Manan!",
      "\u0417\u0434\u0440\u0430\u0432\u0435\u0439\u0442\u0435, \u0430\u0437 \u0441\u044a\u043c \u041c\u0430\u043d\u0430\u043d!",
      "\u0417\u0434\u0440\u0430\u0432\u043e, \u0458\u0430\u0441 \u0441\u0443\u043c \u041c\u0430\u043d\u0430\u043d!",
      "\u017divjo, jaz sem Manan!",
      "Bok, ja sam Manan!",
      "\u0417\u0434\u0440\u0430\u0432\u043e, \u0458\u0430 \u0441\u0430\u043c \u041c\u0430\u043d\u0430\u043d!",
      "Zdravo, ja sam Manan!",
      "Pozdrav, ja sam Manan!",
      "\u0393\u03b5\u03b9\u03b1 \u03c3\u03b1\u03c2, \u03b5\u03af\u03bc\u03b1\u03b9 \u03bf \u039c\u03b1\u03bd\u03ac\u03bd!",
      "P\u00ebrsh\u00ebndetje, un\u00eb jam Manan!",
      "Kaixo, Manan naiz!",
      "Hola, soc en Manan!",
      "Ola, son Manan!",
      "Hallo, ik ben Manan!",
      "Goeiedag, ik ben Manan!",
      "Hallo, ek is Manan!",
      "Moien, ech sinn de Manan!",
      "Hullo, A'm Manan!",
      "Hal\u00f2, is mise Manan!",
      "Dia dhuit, is mise Manan!",
      "Helo, Manan ydw i!",
      "Dydh da, Manan ov vy!",
      "Hej, jeg er Manan!",
      "Hei, jeg heter Manan!",
      "Hej, jag heter Manan!",
      "Hei, min\u00e4 olen Manan!",
      "Tere, mina olen Manan!",
      "H\u00e6, \u00e9g heiti Manan!",
      "Hey, eg eiti Manan!",
      "Bures, mun lean Manan!",
      "Bon\u0121u, jien Manan!",
      "Habari, mimi naitwa Manan!",
      "\u1230\u120b\u121d, \u12a5\u1294 \u121b\u1293\u1295 \u1290\u129d!",
      "\u1230\u120b\u121d, \u12a3\u1290 \u121b\u1293\u1295 \u12a5\u12e8!",
      "Akkam, ani Maanaan!",
      "Haye, waxaan ahay Manan!",
      "\u1eb8 n l\u1eb9\u0301 o, \u00e8mi ni Manan!",
      "Kedu, a b\u1ee5 m Manan!",
      "Sannu, sunana Manan!",
      "Jam waali, min yo Manan!",
      "Sawubona, igama lami nguManan!",
      "Molo, igama lam nguManan!",
      "Dumela, lebitso la ka ke Manan!",
      "Dumela, leina la me ke Manan!",
      "Mhoro, ini ndinonzi Manan!",
      "Moni, dzina langa ndine Manan!",
      "Mbote, kombo na ngai Manan!",
      "Muraho, nitwa Manan!",
      "Amahoro, nitwa Manan!",
      "Ki kati, nze Manan!",
      "Na nga def, Manan laa tudd!",
      "I ni ce, ne t\u0254g\u0254 Manan!",
      "Miawoez\u0254, \u014bk\u0254nyee nye Manan!",
      "Mema wo akwaaba, me din de Manan!",
      "Manao ahoana, izaho no Manan!",
      "Y\u00e1'\u00e1t'\u00e9\u00e9h, Manan yinishy\u00e9!",
      "\u13a3\u13cf\u13f2, \u13b9\u14c7\u13c2 \u13d3\u13c7\u13d9\u13a0!",
      "\u140a\u1403\u14d0\u1593\u1403, \u14ab\u14c7\u14d0 \u1405\u1559\u1593!",
      "Aluu, uanga Manan-mik ateqarpunga!",
      "Boozhoo, Manan nindizhinikaaz!",
      "H\u00e1u k\u021fol\u00e1, Manan em\u00e1\u010diyapi ye!",
      "Niltze, not\u014dc\u0101 Manan!",
      "Ba'ax ka wa'alik, in k'aaba'e' Manan!",
      "Allillanchu, sutiymi Manan!",
      "Kamisaraki, nayaxa Manan satawa!",
      "Mba'\u00e9ichapa, che h\u00e9ra Manan!",
      "Mari mari, Manan pingen!",
      "Aloha k\u0101kou, \u02bbo Manan ko\u02bbu inoa!",
      "Kia ora, ko Manan t\u014dku ingoa!",
      "Talofa, o lo'u igoa o Manan!",
      "M\u0101l\u014d e lelei, ko hoku hingoa ko Manan!",
      "Bula, na yacaqu o Manan!",
      "Halo, nem bilong mi em Manan!",
      "Salve, nomen mihi est Manan!",
      "\u03a7\u03b1\u1fd6\u03c1\u03b5, \u1f10\u03b3\u03ce \u03b5\u1f30\u03bc\u03b9 \u039c\u03b1\u03bd\u03ac\u03bd!",
      "\ud800\udf37\ud800\udf30\ud800\udf39\ud800\udf3b\ud800\udf43, \ud800\udf39\ud800\udf3a \ud800\udf3c\ud800\udf30\ud800\udf3d\ud800\udf30\ud800\udf3d \ud800\udf39\ud800\udf3c!",
      "\u16ba\u16a8\u16c1\u16da\u16a8, \u16d6\u16b2 \u16d7\u16a8\u16be\u16a8\u16be!",
      "\u16bc\u16c5\u16c1\u16da, \u16c1\u16c5\u16b4 \u16d8\u16c5\u16be\u16c5\u16be!",
      "\u16b9\u16d6\u16cb \u16bb\u16aa\u16da, \u16c1\u16b3 \u16d6\u16a9\u16d7 \u16d7\u16aa\u16be\u16aa\u16be!",
      "Wes h\u0101l, ic eom Manan!",
      "Heill ok s\u00e6ll, ek heiti Manan!",
      "Heil s\u012bs, ih bin Manan!",
      "\u0421\u044a\u0434\u0440\u0430\u0432\u044c\u0441\u0442\u0432\u043e\u0443\u0438, \u0430\u0437\u044a \u0435\u0441\u043c\u044c \u041c\u0430\u043d\u0430\u043d\u044a!",
      "\ud800\udfa0\ud800\udfad\ud800\udfb6 \ud800\udfb6\ud800\udfb4\ud800\udfb4 \ud800\udfc3\ud800\udfa1\ud800\udfb9!",
      "\ud802\udf0e\ud802\udf31\ud802\udf19\ud802\udf01, \ud802\udf00\ud802\udf30\ud802\udf06\ud802\udf28 \ud802\udf28\ud802\udf00\ud802\udf25\ud802\udf00\ud802\udf25 \ud802\udf00\ud802\udf35\ud802\udf28\ud802\udf0d!",
      "\ud80c\uddcb\ud80c\udd71 \ud80c\udd53\ud80c\ude16\ud80c\ude16 \ud80c\udc00!",
      "\u2c9a\u2c9f\u03e5\u2ca2\u2c93, \u2c81\u2c9b\u2c9f\u2c95 \u2ca1\u2c89 \u2c98\u2c81\u2c9b\u2c81\u2c9b!",
      "\ud802\udd14\ud802\udd0b\ud802\udd0c, \ud802\udd00\ud802\udd0d\ud802\udd0a \ud802\udd0c\ud802\udd0d\ud802\udd0d!",
      "\u0160ulmu, an\u0101ku Manan!",
      "Silim-ma, \u014be\u2082-e Manan-me-en!",
      "\u05e9\u05b8\u05c1\u05dc\u05d5\u05b9\u05dd, \u05d0\u05b8\u05e0\u05b9\u05db\u05b4\u05d9 \u05de\u05b8\u05e0\u05b8\u05df!",
      "\u072b\u0720\u0721, \u0710\u0722\u0710 \u0721\u0722\u0722!",
      "\u1230\u120b\u121d \u1208\u12a8, \u12a0\u1290 \u121b\u1293\u1295 \u12cd\u12a5\u1271!",
      "Achuta, je Manan!",
      "Su cuy'gar, ni Manan!",
      "RRRAARRWHH, Manan!",
      "Utinni, Manan!",
      "Bona na kachu, Manan!",
      "Ch'a, olo Manan!",
      "Koy-koy, Manan!",
      "nuqneH, jIH Manan!",
      "Qapla', jIH Manan!",
      "Dif-tor heh smusma, Manan kroykah.",
      "Hann n'veid, au'e Manan!",
      "Kaltx\u00ec, ohe lu Manan!",
      "M'athchomaroon, anha Manan!",
      "Valar morghulis, \u00f1uha br\u014dzi Manan issa.",
      "Elen s\u00edla l\u00famenn' omentielvo, ni Manan!",
      "Mae govannen, im Manan!",
      "Baluk nidad, Manan z\u00e2ram!",
      "Oi, beratna, mi Manan!",
      "Bi-la kaifa, am Manan!",
      "Drem Yol Lok, zu'u Manan!",
      "Sul sul, Manan!",
      "Saluton, mi estas Manan!",
      "Saluto, mea nomo esas Manan.",
      "Salute, io me appella Manan.",
      "coi, mi'e la manan.",
      "toki, mi jan Manan."
    ];

    /* Scramble glyph pool: multi-script (Devanagari, Cyrillic, CJK, Katakana/Hiragana, Hangul, Tamil, Cherokee, Runic, Tibetan, Arabic, Greek, Hebrew, Indic, SE Asian, African, Indigenous, Ancient) */
    var glyphPool = Array.from(
      /* Devanagari */
      "\u0905\u0906\u0907\u0908\u0909\u090A\u090F\u0915\u0916\u0917\u091A\u091C\u0924\u0926\u0928\u092A\u092E\u092F\u0930\u0932\u0935\u0938\u0939" +
      /* Cyrillic */
      "\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u041A\u041B\u041C\u041D\u041E\u041F\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u042D\u042E\u042F" +
      /* CJK */
      "\u4F60\u597D\u6211\u662F\u4E16\u754C\u4EBA\u5927\u4E2D\u5C0F\u4E0A\u4E0B\u5DE6\u53F3\u7F8E\u660E\u9F99\u98CE\u6C34\u706B\u5730\u6728\u91D1" +
      /* Katakana & Hiragana */
      "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053" +
      /* Hangul */
      "\uAC00\uB098\uB2E4\uB77C\uB9C8\uBC14\uC0AC\uC544\uC790\uCC28\uCE74\uD0C0\uD30C\uD558" +
      /* Tamil */
      "\u0BA4\u0BAE\u0BA8\u0BAA\u0B95\u0B9A\u0B9F\u0B9E\u0BA3\u0BAF\u0BB0\u0BB2\u0BB5\u0BB4\u0BB3" +
      /* Cherokee */
      "\u13A0\u13A2\u13A4\u13A6\u13A8\u13AA\u13AC\u13B0\u13B3\u13B6\u13B9\u13BB\u13C0\u13C3\u13C6\u13C9\u13CC\u13CF" +
      /* Runic */
      "\u16A0\u16A2\u16A6\u16A8\u16B1\u16B7\u16B9\u16BA\u16BE\u16C1\u16C3\u16C7\u16C8\u16D2\u16D6\u16DA\u16DE\u16DF" +
      /* Tibetan */
      "\u0F40\u0F41\u0F42\u0F44\u0F45\u0F46\u0F47\u0F49\u0F4F\u0F50\u0F51\u0F53\u0F54\u0F55\u0F56\u0F58\u0F59\u0F5A\u0F5F\u0F60\u0F61\u0F62\u0F63\u0F66\u0F67" +
      /* Arabic & Persian */
      "\u0627\u0628\u062A\u062B\u062C\u062D\u062E\u062F\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063A\u0641\u0642\u0643\u0644\u0645\u0646\u0647\u0648\u064A" +
      /* Greek */
      "\u0391\u0392\u0393\u0394\u0395\u0396\u0397\u0398\u0399\u039A\u039B\u039C\u039D\u039E\u039F\u03A0\u03A1\u03A3\u03A4\u03A5\u03A6\u03A7\u03A8\u03A9" +
      /* Hebrew */
      "\u05D0\u05D1\u05D2\u05D3\u05D4\u05D5\u05D6\u05D7\u05D8\u05D9\u05DB\u05DC\u05DE\u05E0\u05E1\u05E2\u05E4\u05E6\u05E7\u05E8\u05E9\u05EA" +
      /* Indic (Bengali, Telugu, Kannada, Malayalam, Gujarati, Gurmukhi, Odia, Sinhala) */
      "\u0985\u0995\u09A4\u09AE\u09B0\u09B8" +
      "\u0C05\u0C15\u0C24\u0C2E\u0C30\u0C38" +
      "\u0C85\u0C95\u0CA4\u0CAE\u0CB0\u0CB8" +
      "\u0D05\u0D15\u0D24\u0D2E\u0D30\u0D38" +
      "\u0A85\u0A95\u0AA4\u0AAE\u0AB0\u0AB8" +
      "\u0A05\u0A15\u0A24\u0A2E\u0A30\u0A38" +
      "\u0B05\u0B15\u0B24\u0B2E\u0B30\u0B38" +
      "\u0D85\u0D9A\u0DA4\u0DB8\u0DBB\u0DC3" +
      /* Southeast Asian (Thai, Lao, Myanmar, Khmer) */
      "\u0E01\u0E02\u0E04\u0E19\u0E21\u0E23\u0E2A" +
      "\u0E81\u0E82\u0E94\u0E99\u0EA1\u0EA5\u0EAA" +
      "\u1000\u1001\u1002\u1010\u1019\u101C\u101E" +
      "\u1780\u1781\u1784\u1793\u1798\u179B\u179F" +
      /* Ethiopic, Canadian Syllabics, Tifinagh, Thaana, Syriac, Georgian */
      "\u1200\u1210\u1228\u1230\u1260\u12A0\u12E8\u1308" +
      "\u1403\u140A\u1428\u1431\u14BB\u14D0\u1550\u1585" +
      "\u2D30\u2D33\u2D37\u2D3D\u2D4D\u2D4F\u2D53\u2D61" +
      "\u0780\u0782\u0784\u0787\u078C\u0790\u0794" +
      "\u0710\u0712\u0718\u071D\u0721\u0726\u072A" +
      "\u10D0\u10D2\u10D4\u10D8\u10DA\u10DB\u10E0\u10E1" +
      /* Ol Chiki, Meitei Mayek, Coptic */
      "\u1C5A\u1C5E\u1C61\u1C64\u1C67\u1C6A\u1C70" +
      "\uABC0\uABC3\uABC8\uABCD\uABD1" +
      "\u2C80\u2C86\u2C8E\u2C94\u2C9A\u2CA0" +
      /* Ancient: Egyptian Hieroglyphs, Gothic, Old Persian, Avestan, Phoenician */
      "\uD80C\uDC00\uD80C\uDD53\uD80C\uDD71\uD80C\uDDCB\uD80C\uDE16" +
      "\uD800\uDF30\uD800\uDF37\uD800\uDF39\uD800\uDF3B\uD800\uDF3C\uD800\uDF43" +
      "\uD800\uDFA0\uD800\uDFAD\uD800\uDFB6\uD800\uDFC3" +
      "\uD802\uDF00\uD802\uDF06\uD802\uDF25\uD802\uDF31" +
      "\uD802\uDD00\uD802\uDD0A\uD802\uDD0C\uD802\uDD14"
    );

    var idx = 0;
    var animating = false;
    var decodeTimer = 0;
    var cycleTimer = 0;
    var heroInView = true;

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
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        pill.textContent = target;
        return;
      }
      animating = true;
      var iterations = 0;
      var totalFrames = 16;
      var targetChars = Array.from(target);
      var totalChars = targetChars.length;

      decodeTimer = window.setInterval(function() {
        iterations++;
        var progress = iterations / totalFrames;
        var revealed = Math.floor(progress * totalChars);
        var display = "";

        for (var i = 0; i < totalChars; i++) {
          if (i < revealed) {
            display += targetChars[i];
          } else {
            display += randomGlyph();
          }
        }

        pill.textContent = display;

        if (iterations >= totalFrames) {
          window.clearInterval(decodeTimer);
          decodeTimer = 0;
          pill.textContent = target;
          animating = false;
        }
      }, 35);
    }

    function startCycle() {
      if (!heroInView || cycleTimer) return;
      cycleTimer = window.setInterval(function() {
        idx = (idx + 1) % greetings.length;
        glitchTo(greetings[idx]);
      }, 3000);
    }

    function stopCycle() {
      window.clearInterval(cycleTimer);
      window.clearInterval(decodeTimer);
      cycleTimer = 0;
      decodeTimer = 0;
      animating = false;
    }

    document.addEventListener('visibilitychange', function() {
      if (document.hidden || !heroInView) stopCycle();
      else startCycle();
    });

    var hero = pill.closest('.home-hero');
    var heroObserver = null;
    if (hero && 'IntersectionObserver' in window) {
      heroObserver = new IntersectionObserver(function(entries) {
        heroInView = Boolean(entries[0] && entries[0].isIntersecting);
        hero.classList.toggle('is-offscreen', !heroInView);
        if (heroInView && !document.hidden) startCycle();
        else stopCycle();
      });
      heroObserver.observe(hero);
    }
    window.addEventListener('pagehide', stopCycle, { once: true });
    window.addEventListener('pagehide', function() {
      if (heroObserver) heroObserver.disconnect();
    }, { once: true });
    startCycle();
  })();

  /* ── Drag-to-scroll for photo strip ── */
  (function() {
    var el = document.getElementById('homePhotos');
    if (!el) return;
    var isDown = false;
    var startX = 0;
    var scrollStart = 0;
    var latestX = 0;
    var dragRaf = 0;

    function renderDrag() {
      dragRaf = 0;
      if (isDown) el.scrollLeft = scrollStart - (latestX - startX) * 1.5;
    }

    function finishDrag(e) {
      if (!isDown) return;
      isDown = false;
      el.classList.remove('dragging');
      if (e && el.hasPointerCapture && el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    }

    el.addEventListener('pointerdown', function(e) {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      isDown = true;
      startX = latestX = e.clientX;
      scrollStart = el.scrollLeft;
      el.classList.add('dragging');
      el.setPointerCapture(e.pointerId);
    });
    el.addEventListener('pointermove', function(e) {
      if (!isDown) return;
      latestX = e.clientX;
      if (!dragRaf) dragRaf = requestAnimationFrame(renderDrag);
      e.preventDefault();
    });
    el.addEventListener('pointerup', finishDrag);
    el.addEventListener('pointercancel', finishDrag);
    window.addEventListener('pagehide', function() {
      if (dragRaf) cancelAnimationFrame(dragRaf);
    }, { once: true });
  })();
</script>
