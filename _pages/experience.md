---
permalink: /experience/
title: "💼 Experience"
description: "Manan Sethia's experience — Headboy, Coder's Club President, ATL Innovator, IGYM Member, Xplora Coordinator, and 10 years at Krishna Public School."
keywords: "Manan Sethia experience, Headboy, Coder's Club, Krishna Public School, student leadership, IGYM, Xplora"
author_profile: true
---

<style>
  /* Page title */
  .dark-mode .page__title {
    color: #ffffff;
  }

  /* Layout */
  .exp-section {
    margin-top: 8px;
  }

  .exp-org {
    position: relative;
  }

  .exp-org::before {
    content: "";
    position: absolute;
    left: 29px;
    top: 62px;
    bottom: 20px;
    width: 3px;
    background: #c07300;
  }

  .dark-mode .exp-org::before {
    background: #e6c194;
  }

  .exp-org-header,
  .exp-role-row {
    display: grid;
    grid-template-columns: 60px minmax(0, 1fr);
    gap: 18px;
  }

  .exp-org-header {
    align-items: start;
  }

  /* Logos */
  .exp-logo-box,
  .exp-role-icon {
    overflow: hidden;
    background: #ffffff;
    box-sizing: border-box;
    border-radius: 10px;
    border: 2px solid rgba(185, 115, 0, 0.45);
  }

  .exp-logo-box {
    width: 60px;
    height: 60px;
  }

  .exp-role-icon {
    width: 49px;
    height: 49px;
    flex-shrink: 0;
  }

  .dark-mode .exp-logo-box,
  .dark-mode .exp-role-icon {
    border-color: rgba(255, 210, 120, 0.45);
  }

  .exp-logo-box img,
  .exp-role-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Typography */
  .exp-org-copy,
  .exp-role-copy {
    min-width: 0;
  }

  .exp-org-copy {
    padding-top: 2px;
  }

  .exp-org-name,
  .exp-role-title,
  .exp-sub-role {
    margin: 0;
    color: #000000;
  }

  .exp-org-name {
    font-size: 1.14em;
    line-height: 1.3;
    font-weight: 700;
  }

  .exp-role-title {
    font-size: 1em;
    line-height: 1.3;
    font-weight: 700;
  }

  .exp-sub-role {
    font-size: 0.9em;
    line-height: 1.35;
    font-weight: 600;
  }

  .dark-mode .exp-org-name,
  .dark-mode .exp-role-title,
  .dark-mode .exp-sub-role {
    color: #ffffff;
  }

  .exp-org-range,
  .exp-role-sub,
  .exp-role-date,
  .exp-sub-date {
    font-style: italic;
    line-height: 1.45;
  }

  .exp-org-range {
    margin: 4px 0 0 0;
    font-size: 0.9em;
    color: rgb(30, 15, 0);
  }

  .exp-role-sub {
    margin: 3px 0 0 0;
    font-size: 0.9em;
    color: #000000;
  }

  .exp-role-date {
    margin: 3px 0 0 0;
    font-size: 0.84em;
    color: rgb(30, 15, 0);
  }

  .exp-sub-date {
    margin: 2px 0 0 0;
    font-size: 0.82em;
    color: rgb(30, 15, 0);
  }

  .dark-mode .exp-org-range,
  .dark-mode .exp-role-sub,
  .dark-mode .exp-role-date,
  .dark-mode .exp-sub-date {
    color: rgb(255 223 192);
  }

  /* Role rows */
  .exp-role-list {
    margin-top: 10px;
  }

  .exp-role-row {
    align-items: start;
    padding: 14px 0;
  }

  .exp-role-row + .exp-role-row {
    border-top: 2px solid rgba(192, 115, 0, 0.6);
  }

  .dark-mode .exp-role-row + .exp-role-row {
    border-top-color: rgba(230, 193, 148, 0.8);
  }

  .exp-role-marker {
    display: flex;
    justify-content: center;
    padding-top: 18px;
    position: relative;
    z-index: 1;
  }

  .exp-role-dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #c07300;
    border: 2px solid #ffffff;
  }

  .dark-mode .exp-role-dot {
    background: #e6c194;
    border-color: #120c00;
  }

  .exp-role-main {
    display: grid;
    grid-template-columns: 49px minmax(0, 1fr);
    gap: 14px;
    align-items: start;
    min-width: 0;
  }

  /* Nested timeline */
  .exp-sub-timeline {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 2px solid rgba(192, 115, 0, 0.5);
  }

  .dark-mode .exp-sub-timeline {
    border-top-color: rgba(230, 193, 148, 0.7);
  }

  .exp-sub-list {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 24px;
  }

  .exp-sub-list::before {
    content: "";
    position: absolute;
    left: 8px;
    top: 6px;
    bottom: 6px;
    width: 3px;
    background: repeating-linear-gradient(
      to bottom,
      #c07300 0px,
      #c07300 6px,
      transparent 6px,
      transparent 11px
    );
  }

  .dark-mode .exp-sub-list::before {
    background: repeating-linear-gradient(
      to bottom,
      #e6c194 0px,
      #e6c194 6px,
      transparent 6px,
      transparent 11px
    );
  }

  .exp-sub-row {
    position: relative;
  }

  .exp-sub-row::before {
    content: "";
    position: absolute;
    left: -18px;
    top: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #c07300;
    border: 2px solid #ffffff;
  }

  .dark-mode .exp-sub-row::before {
    background: #e6c194;
    border-color: #120c00;
  }

  /* Divider */
  .exp-divider {
    border: none;
    height: 2px;
    background-color: #c07300;
    margin: 8px 0 16px 0;
  }

  .dark-mode hr.exp-divider {
    background-color: #e6c194;
  }

  /* Responsive */
  @media (min-width: 57.8125em) {
    .exp-logo-box,
    .exp-role-icon {
      border-width: 3px;
    }
  }

  @media (max-width: 640px) {
    .exp-org::before {
      left: 23px;
      top: 50px;
      bottom: 18px;
    }

    .exp-org-header,
    .exp-role-row {
      grid-template-columns: 48px minmax(0, 1fr);
      gap: 14px;
    }

    .exp-logo-box {
      width: 48px;
      height: 48px;
    }

    .exp-role-marker {
      padding-top: 19px;
    }

    .exp-role-main {
      gap: 12px;
    }

    .exp-org-name {
      font-size: 1.03em;
    }

    .exp-role-title {
      font-size: 0.95em;
    }
  }
  .exp-desc, .exp-sub-desc { font-family: inherit; letter-spacing: 0; }
  .exp-desc { margin-top: 8px; font-size: 0.95em; line-height: 1.5; color: #111; }
  .dark-mode .exp-desc { color: #eee; }
  .exp-desc p, .exp-sub-desc p { margin: 6px 0; }
  .exp-desc a, .exp-sub-desc a { color: #c07300; text-decoration: none; border-bottom: 1px solid #c07300; }
  .dark-mode .exp-desc a, .dark-mode .exp-sub-desc a { color: #e6c194; border-bottom-color: #e6c194; }
  .exp-sub-desc { margin-top: 4px; font-size: 0.92em; line-height: 1.45; color: #222; }
  .dark-mode .exp-sub-desc { color: #ddd; }
  .exp-images { display: flex; overflow-x: auto; overflow-y: hidden; padding: 10px 0; margin-top: 5px; gap: 15px; scroll-snap-type: x mandatory; scroll-behavior: smooth; scrollbar-width: none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; cursor: grab; }
  .exp-images:empty { display: none; }
  .exp-images::-webkit-scrollbar { display: none; }
  .exp-images img { height: 180px; flex: 0 0 auto; border-radius: 8px; object-fit: cover; scroll-snap-align: start; transition: transform 0.3s ease, box-shadow 0.3s ease; z-index: 1; }
  .exp-images img:hover { transform: scale(1.03); box-shadow: 0 0 10px rgba(0,0,0,0.2); }
  .exp-images.dragging { cursor: grabbing; }

  /* KPS marquee gallery */
  .exp-kps-wrap {
    overflow: hidden;
    margin-top: 20px;
    margin-left: 78px; /* aligns with role content: 60px logo + 18px gap */
    border-radius: 10px;
  }
  @media (max-width: 640px) {
    .exp-kps-wrap { margin-left: 62px; } /* 48px logo + 14px gap */
  }
  .exp-kps-track {
    display: flex;
    gap: 10px;
    width: max-content;
    animation: kpsMarquee 90s linear infinite;
  }
  .exp-kps-wrap:hover .exp-kps-track {
    animation-play-state: paused;
  }
  @keyframes kpsMarquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .exp-kps-track img {
    height: 170px;
    flex-shrink: 0;
    border-radius: 8px;
    object-fit: cover;
    display: block;
    transition: none !important;
    transform: none !important;
  }
</style>

<div class="exp-section">
  <article class="exp-org">
    <header class="exp-org-header">
      <div class="exp-logo-box">
        <img src="/images/igeo.avif" alt="IGEO Logo">
      </div>
      <div class="exp-org-copy">
        <div class="exp-org-name">International Geoscience Education Organisation (IGEO)</div>
        <div class="exp-org-range">Mar 2026 – Present</div>
      </div>
    </header>

    <div class="exp-role-list">
      <article class="exp-role-row">
        <div class="exp-role-marker">
          <div class="exp-role-dot"></div>
        </div>
        <div class="exp-role-main">
          <div class="exp-role-icon">
            <img src="/images/igym.avif" alt="IGYM Logo">
          </div>
          <div class="exp-role-copy">
            <div class="exp-role-title">Member</div>
            <div class="exp-role-sub">
              International Geoscience Youth Movement (IGYM)
              <span class="exp-live-duration" data-duration-start="2026-03" data-duration-end="present" data-duration-prefix=" · "> · 2 mos</span>
            </div>
            <div class="exp-role-date">Mar 2026 – Present</div>
            <div class="exp-desc">
              <p>IGYM is a youth led initiative associated with the Earth Science Olympiad ecosystem, focused on geoscience awareness, climate action, and student led research and outreach. Members are usually selected from IESO participants. Each year a sponsored program is conducted at different locations to foster continued engagement in earth sciences and outreach.</p>
              <p>I will be participating in the Himalayan Outreach Program at Dehradun from 10th to 16th June, involving field visits to natural formations across Dehradun, Benog Tibba, Tehri, including the Tehri Dam.</p>
            </div>
            <div class="exp-images"></div>
          </div>
        </div>
      </article>
    </div>
  </article>

  <hr class="silver-line exp-divider" />

  <article class="exp-org">
    <header class="exp-org-header">
      <div class="exp-logo-box">
        <img src="/images/kps.avif" alt="KPS Logo">
      </div>
      <div class="exp-org-copy">
        <div class="exp-org-name">Krishna Public School, Kamal Vihar</div>
        <div class="exp-org-range">Apr 2016 – Mar 2026 · 10 yrs</div>
      </div>
    </header>

    <div class="exp-role-list">
      <article class="exp-role-row">
        <div class="exp-role-marker"><div class="exp-role-dot"></div></div>
        <div class="exp-role-main">
          <div class="exp-role-icon"><img src="/images/stud.avif" alt="Student Council Logo"></div>
          <div class="exp-role-copy">
            <div class="exp-role-title">Headboy</div>
            <div class="exp-role-sub">Student Council · 8 mos</div>
            <div class="exp-role-date">Jul 2025 – Feb 2026</div>
            <div class="exp-desc">
              <p>As Headboy, I share the responsibility with the Headgirl of overseeing the entire student council: a network comprising 18 clubs, an editorial board, and 4 houses. We oversee 97 members, including presidents, vice presidents, prefects, deputy prefects, and editorial members.</p>
              <p>My core responsibilities involve maintaining discipline across the council, scheduling events, managing assemblies, and organizing new initiatives. I proudly oversaw major school events: XPLORA (interschool tech and robotics), KPSMUN (three day interschool MUN), Venture Vortex (business pitching), Kaushal Mahotsav (performing arts), Lihitya (literature and creative expression), Intelligence Fest (large scale interschool multi domain competition), and our Annual Function and Felicitation where I handled speeches, event flow, and guest coordination.</p>
            </div>
            <div class="exp-images"></div>
          </div>
        </div>
      </article>

      <article class="exp-role-row">
        <div class="exp-role-marker"><div class="exp-role-dot"></div></div>
        <div class="exp-role-main">
          <div class="exp-role-icon"><img src="/images/icode.avif" alt="I-Code Logo"></div>
          <div class="exp-role-copy">
            <div class="exp-role-title">Problem Setter</div>
            <div class="exp-role-sub">I-Code · 1 yr 2 mos</div>
            <div class="exp-role-date">Aug 2024 – Oct 2025</div>
            <div class="exp-desc">
              <p>I-Code is an intensive one to two day intraschool and interschool coding event. In its first edition, it featured web and app development, while the second edition expanded into a basic DSA problem-based programming competition.</p>
              <p>I served as a problem setter, designing logic and algorithm questions for multiple difficulty categories. I was actively involved in both the inaugural intraschool edition and the expanded interschool event that followed.</p>
            </div>
            <div class="exp-images"></div>
          </div>
        </div>
      </article>

      <article class="exp-role-row">
        <div class="exp-role-marker"><div class="exp-role-dot"></div></div>
        <div class="exp-role-main">
          <div class="exp-role-icon"><img src="/images/xplora.avif" alt="Xplora Logo"></div>
          <div class="exp-role-copy">
            <div class="exp-role-title">Advisor and Coordinator</div>
            <div class="exp-role-sub">Xplora · 3 yrs 1 mo</div>
            <div class="exp-role-date">Nov 2022 – Nov 2025</div>
            <div class="exp-desc">
              <p>XPLORA is a flagship tech event cohosted by our Coders Club and ATL Club, featuring high energy robowars, ideathons, and gaming competitions.</p>
              <p>I coordinated its 3rd edition and moved into an advisory role for the 4th and 5th editions. My work involved ground level planning, scheduling, outreach, advertising, managing finances, and competition design. You can learn more at <a href="https://techfestkps.com/" target="_blank">techfestkps.com</a>.</p>
            </div>
            <div class="exp-images"></div>
          </div>
        </div>
      </article>

      <article class="exp-role-row">
        <div class="exp-role-marker"><div class="exp-role-dot"></div></div>
        <div class="exp-role-main">
          <div class="exp-role-icon"><img src="/images/atl.avif" alt="ATL Club Logo"></div>
          <div class="exp-role-copy">
            <div class="exp-role-title">Innovator and Mentor</div>
            <div class="exp-role-sub">Atal Tinkering Lab (ATL Club) · 3 yrs 9 mos</div>
            <div class="exp-role-date">Jul 2022 – Mar 2026</div>
            <div class="exp-desc">
              <p>My journey began as an innovator: building prototypes, participating in competitions, and exploring robotics, embedded systems, and single board computers.</p>
              <p>Over time, I naturally transitioned into mentoring. I proudly guide juniors on their projects, assist them with acquiring materials, wiring components, writing code, and offer support throughout execution and refinement.</p>
            </div>
            <div class="exp-images"></div>
          </div>
        </div>
      </article>

      <article class="exp-role-row">
        <div class="exp-role-marker"><div class="exp-role-dot"></div></div>
        <div class="exp-role-main">
          <div class="exp-role-icon"><img src="/images/coders.avif" alt="Coder's Club Logo"></div>
          <div class="exp-role-copy">
            <div class="exp-role-title">Technical Leadership and Community Building</div>
            <div class="exp-role-sub">Coder's Club · 6 yrs 9 mos</div>
            <div class="exp-role-date">Jul 2019 – Mar 2026</div>
            <div class="exp-desc">
              <p>Previously known as the Computer Club, this is where my primary technological efforts took root.</p>
            </div>
            <div class="exp-images"></div>

            <div class="exp-sub-timeline">
              <div class="exp-sub-list">
                
                <div class="exp-sub-row">
                  <div class="exp-sub-role">Mentor</div>
                  <div class="exp-sub-date">Jun 2024 – Mar 2026 · 1 yr 10 mos</div>
                  <div class="exp-sub-desc">
                    <p>I guided students deeply into competitive programming by creating and assigning practice problems, including dedicated prep material for I-Code. I helped students identify their technical skill levels, assisted faculty with technical limitations, and conducted specialized workshops on practical cybersecurity: offensive, defensive, and prevention strategies.</p>
                  </div>
                </div>

                <div class="exp-sub-row">
                  <div class="exp-sub-role">President</div>
                  <div class="exp-sub-date">Jul 2023 – Jun 2024 · 1 yr</div>
                  <div class="exp-sub-desc">
                    <p>I hosted advanced technical workshops spanning MIT App Inventor, reinforcement learning chatbots, and competitive programming using C++. During this time, I proudly represented the school in multiple high stakes competitions: Data and AI, Junior SIH, Inspire Manak, Youth Ideathon, and technical quizzes (<a href="/achievements/?search=coding">view my achievements</a>). I heavily promoted Linux adoption among both students and teachers, taking personal initiative to upgrade existing Edubuntu systems and fix failing hardware across 5 computer labs.</p>
                  </div>
                </div>

                <div class="exp-sub-row">
                  <div class="exp-sub-role">Vice President</div>
                  <div class="exp-sub-date">Jul 2022 – Jun 2023 · 1 yr</div>
                  <div class="exp-sub-desc">
                    <p>I conducted app development workshops using MIT App Inventor for grades 6 to 12 and organized complementary competitions. I introduced younger students to the basics of computer vision using OpenCV and conducted exploratory sessions on game development involving Python, Pygame, and Tkinter. Behind the scenes, I helped coordinate our flagship event, XPLORA.</p>
                  </div>
                </div>

                <div class="exp-sub-row">
                  <div class="exp-sub-role">Member</div>
                  <div class="exp-sub-date">Jul 2019 – Jun 2022 · 3 yrs</div>
                  <div class="exp-sub-desc">
                    <p>I started entirely driven by curiosity. I explored block coding, basic Python scripting, and the fundamental differences between CLI and GUI usage. These early days gave me a solid introduction to supervised and unsupervised learning concepts, leading me to create engaging technology presentations for school assemblies, competitions, and annual functions.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </article>

      <article class="exp-role-row">
        <div class="exp-role-marker"><div class="exp-role-dot"></div></div>
        <div class="exp-role-main">
          <div class="exp-role-icon"><img src="/images/qpllogo.avif" alt="QPL Quiz Club Logo"></div>
          <div class="exp-role-copy">
            <div class="exp-role-title">Member, Quiz Organizer and Mentor</div>
            <div class="exp-role-sub">Quiz Premier League (QPL) · 10 yrs</div>
            <div class="exp-role-date">Apr 2016 – Mar 2026</div>
            <div class="exp-desc">
              <p>I joined the quiz club in 3rd grade as part of its 4th generation. I learned immensely under my seniors and gradually improved my knowledge base, eventually representing the school in multiple high tier quizzes (<a href="/achievements/?search=quiz">see my quizzes</a>).</p>
              <p>I utilized this experience to host intraschool quizzes across diverse domains: general knowledge, finance, history, technology, and sports. I actively championed participation in quizzing and guided juniors on reliable preparation strategies.</p>
            </div>
            <div class="exp-images"></div>
          </div>
        </div>
      </article>

    </div>

    <!-- KPS Photo Gallery — CSS marquee auto-scroll -->
    <div class="exp-kps-wrap">
      <div class="exp-kps-track" id="kpsTrack"></div>
    </div>

  </article>
</div>

<script>
(function () {
  var imgs = [
    'clean','5thquiz','cyb1','cyb2','data&aii','hdfc',
    'headboy','hiqf','mindsparkquiz','mmq2','nr','nx2024','quiz4',
    'sbi001','sc','shinecosmo','tcs242','tcs251','techday','udta',
    'usq','usqq','usqqq','workshop','workshop2','workshop3','workshop4',
    'wwq181','wwq191','yesww2'
  ];

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  var track = document.getElementById('kpsTrack');
  if (!track) return;

  var shuffled = shuffle(imgs.slice());

  function addSet(list) {
    list.forEach(function (name) {
      var img = document.createElement('img');
      img.src = '/images/' + name + '.avif';
      img.alt = '';
      track.appendChild(img);
    });
  }

  /* Two sets: CSS animation goes 0 → -50%, creating seamless loop */
  addSet(shuffled);
  addSet(shuffled);
})();
</script>

<script>
  (function () {
    function parseYearMonth(value) {
      var parts = (value || "").split("-");
      var year = parseInt(parts[0], 10);
      var month = parseInt(parts[1], 10);

      if (!year || !month) {
        return null;
      }

      return { year: year, month: month };
    }

    function getMonthDifference(start, end) {
      return ((end.year - start.year) * 12) + (end.month - start.month) + 1;
    }

    function formatDuration(totalMonths) {
      var years = Math.floor(totalMonths / 12);
      var months = totalMonths % 12;
      var parts = [];

      if (years) {
        parts.push(years + " yr" + (years === 1 ? "" : "s"));
      }

      if (months) {
        parts.push(months + " mo" + (months === 1 ? "" : "s"));
      }

      return parts.join(" ");
    }

    var today = new Date();
    var current = {
      year: today.getFullYear(),
      month: today.getMonth() + 1
    };

    document.querySelectorAll(".exp-live-duration").forEach(function (node) {
      var start = parseYearMonth(node.dataset.durationStart);
      var end = node.dataset.durationEnd === "present"
        ? current
        : parseYearMonth(node.dataset.durationEnd);

      if (!start || !end) {
        return;
      }

      var months = getMonthDifference(start, end);

      if (months < 1) {
        return;
      }

      node.textContent = (node.dataset.durationPrefix || "") + formatDuration(months);
    });
  })();
</script>

{% include horizontal-scroll-keys.html %}
