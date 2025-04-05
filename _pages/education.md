---
permalink: /education/
title: "Education"
author_profile: true
redirect_from: 
  - /education.html
---

<style>
  .edu-entry {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 25px;
    flex-wrap: wrap;
  }

  .edu-logo {
    flex: 0 0 60px;
  }

  .edu-logo img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 10px;
    border: 3px solid transparent;
  }

  /* Border for KPS - rgb(205, 120, 37) */
  .kps-logo img {
    border-color: rgb(205, 120, 37);
  }

  /* Border for KKA - rgb(123, 157, 225) */
  .kka-logo img {
    border-color: rgb(123, 157, 225);
  }

  .edu-text {
    flex: 1;
    min-width: 200px;
  }

  @media (max-width: 600px) {
    .edu-entry {
      flex-direction: column;
      align-items: flex-start;
    }

    .edu-logo {
      margin-bottom: 10px;
    }
  }
</style>

<!-- KPS Entry -->
<div class="edu-entry">
  <div class="edu-logo kps-logo">
    <img src="/images/kps.jpeg" alt="KPS Logo">
  </div>
  <div class="edu-text">
    <h3 style="margin: 0;">Krishna Public School, Dunda</h3>
    <em>Grade 1 - Grade 12 (Math Stream)</em><br>
    Raipur, C.G., India &nbsp; | &nbsp; 🗓️ April 2014 – April 2026<br>
    <strong>Roles:</strong>
    <ul>
      <li>President - Coder's Club (2023)</li>
      <li>Vice President - Coder's Club (2022)</li>
    </ul>
  </div>
</div>

<!-- KKA Entry -->
<div class="edu-entry">
  <div class="edu-logo kka-logo">
    <img src="/images/kka.jpeg" alt="KKA Logo">
  </div>
  <div class="edu-text">
    <h3 style="margin: 0;">Krishna Kids Academy, Shailendra Nagar</h3>
    <em>Playgroup - Kindergarten II</em><br>
    Raipur, C.G., India &nbsp; | &nbsp; 🗓️ April 2010 – February 2014<br>
  </div>
</div>

