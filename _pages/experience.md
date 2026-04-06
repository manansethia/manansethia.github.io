---
permalink: /experience/
title: "💼 Experience"
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
</style>

<div class="exp-section">
  <article class="exp-org">
    <header class="exp-org-header">
      <div class="exp-logo-box">
        <img src="/images/igeo.webp" alt="IGEO Logo">
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
            <img src="/images/igym.webp" alt="IGYM Logo">
          </div>
          <div class="exp-role-copy">
            <div class="exp-role-title">Tech Head and Member</div>
            <div class="exp-role-sub">
              International Geoscience Youth Movement (IGYM)
              <span
                class="exp-live-duration"
                data-duration-start="2026-03"
                data-duration-end="present"
                data-duration-prefix=" · "
              > · 2 mos</span>
            </div>
            <div class="exp-role-date">Mar 2026 – Present</div>
          </div>
        </div>
      </article>
    </div>
  </article>

  <hr class="silver-line exp-divider" />

  <article class="exp-org">
    <header class="exp-org-header">
      <div class="exp-logo-box">
        <img src="/images/kps.webp" alt="KPS Logo">
      </div>
      <div class="exp-org-copy">
        <div class="exp-org-name">Krishna Public School, Kamal Vihar</div>
        <div class="exp-org-range">Apr 2016 – Mar 2026 · 10 yrs</div>
      </div>
    </header>

  <div class="exp-role-list">
      <article class="exp-role-row">
        <div class="exp-role-marker">
          <div class="exp-role-dot"></div>
        </div>
        <div class="exp-role-main">
          <div class="exp-role-icon">
            <img src="/images/stud.webp" alt="Student Council Logo">
          </div>
          <div class="exp-role-copy">
            <div class="exp-role-title">Headboy</div>
            <div class="exp-role-sub">Student Council · 8 mos</div>
            <div class="exp-role-date">Jul 2025 – Feb 2026</div>
          </div>
        </div>
      </article>

      <article class="exp-role-row">
        <div class="exp-role-marker">
          <div class="exp-role-dot"></div>
        </div>
        <div class="exp-role-main">
          <div class="exp-role-icon">
            <img src="/images/icode.webp" alt="I-Code Logo">
          </div>
          <div class="exp-role-copy">
            <div class="exp-role-title">Problem Setter</div>
            <div class="exp-role-sub">I-Code · 1 yr 2 mos</div>
            <div class="exp-role-date">Aug 2024 – Oct 2025</div>
          </div>
        </div>
      </article>

      <article class="exp-role-row">
        <div class="exp-role-marker">
          <div class="exp-role-dot"></div>
        </div>
        <div class="exp-role-main">
          <div class="exp-role-icon">
            <img src="/images/xplora.webp" alt="Xplora Logo">
          </div>
          <div class="exp-role-copy">
            <div class="exp-role-title">Advisor and Coordinator</div>
            <div class="exp-role-sub">Xplora · 3 yrs 1 mo</div>
            <div class="exp-role-date">Nov 2022 – Nov 2025</div>
          </div>
        </div>
      </article>

      <article class="exp-role-row">
        <div class="exp-role-marker">
          <div class="exp-role-dot"></div>
        </div>
        <div class="exp-role-main">
          <div class="exp-role-icon">
            <img src="/images/atl.webp" alt="ATL Club Logo">
          </div>
          <div class="exp-role-copy">
            <div class="exp-role-title">Innovator and Mentor</div>
            <div class="exp-role-sub">Atal Tinkering Lab (ATL Club) · 3 yrs 9 mos</div>
            <div class="exp-role-date">Jul 2022 – Mar 2026</div>
          </div>
        </div>
      </article>

      <article class="exp-role-row">
        <div class="exp-role-marker">
          <div class="exp-role-dot"></div>
        </div>
        <div class="exp-role-main">
          <div class="exp-role-icon">
            <img src="/images/coders.webp" alt="Coder's Club Logo">
          </div>
          <div class="exp-role-copy">
            <div class="exp-role-title">Technical Leadership and Community Building</div>
            <div class="exp-role-sub">Coder's Club · 6 yrs 9 mos</div>
            <div class="exp-role-date">Jul 2019 – Mar 2026</div>

            <div class="exp-sub-timeline">
              <div class="exp-sub-list">
                <div class="exp-sub-row">
                  <div class="exp-sub-role">Mentor</div>
                  <div class="exp-sub-date">Jun 2024 – Mar 2026 · 1 yr 10 mos</div>
                </div>

                <div class="exp-sub-row">
                  <div class="exp-sub-role">President</div>
                  <div class="exp-sub-date">Jul 2023 – Jun 2024 · 1 yr</div>
                </div>

                <div class="exp-sub-row">
                  <div class="exp-sub-role">Vice President</div>
                  <div class="exp-sub-date">Jul 2022 – Jun 2023 · 1 yr</div>
                </div>

                <div class="exp-sub-row">
                  <div class="exp-sub-role">Member</div>
                  <div class="exp-sub-date">Jul 2019 – Jun 2022 · 3 yrs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article class="exp-role-row">
        <div class="exp-role-marker">
          <div class="exp-role-dot"></div>
        </div>
        <div class="exp-role-main">
          <div class="exp-role-icon">
            <img src="/images/qpllogo.webp" alt="QPL Quiz Club Logo">
          </div>
          <div class="exp-role-copy">
            <div class="exp-role-title">Member, Quiz Organizer and Mentor</div>
            <div class="exp-role-sub">Quiz Premier League (QPL) · 10 yrs</div>
            <div class="exp-role-date">Apr 2016 – Mar 2026</div>
          </div>
        </div>
      </article>
    </div>
  </article>
</div>

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
