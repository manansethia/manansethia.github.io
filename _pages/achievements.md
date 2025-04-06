---
permalink: /achievements/
title: "Achievements"
author_profile: true
redirect_from: 
  - /achievements.html
---

<style>
  .achievement-section {
    margin-top: 7px;
    margin-bottom: 30px;
    animation: fadeInUp 1s ease forwards;
    opacity: 0;
  }

  .achievement-section.visible {
    opacity: 1;
  }

  .achievement-section h3 {
    margin-bottom: 5px;
  }

  .achievement-section p {
    margin: 6px 0; 
    line-height: 1.5;
  }

  .achievement-meta {
    font-size: 0.9em;
    color: rgb(0, 0, 0);
    margin-bottom: 8px;
  }

  .achievement-images {
    display: flex;
    overflow-x: auto;
    overflow-y: visible; /* allow vertical overflow */
    padding: 15px 0;
    gap: 10px;
    scroll-snap-type: x mandatory;
    margin-top: 4px;
    margin-bottom: 4px;
  }

  .achievement-images img {
    height: 160px;
    flex: 0 0 auto;
    border-radius: 10px;
    object-fit: cover;
    scroll-snap-align: start;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    z-index: 1;
  }

  .achievement-images img:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }

  hr.silver-line {
    border: none;
    height: 1.5px;
    background-color: rgb(122, 91, 63);
    margin: 0 0 12px 0;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Modal Styles */
  .modal {
    display: none;
    position: fixed;
    z-index: 9999;
    padding: 40px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(4px);
  }

  .modal img {
    display: block;
    margin: auto;
    max-width: 90%;
    max-height: 90%;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0,0,0,0.4);
  }

  @keyframes fadeInZoom {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }  
</style>

<!-- Achievements Section -->

<div class="achievement-section">
  <h3>🐼 Zonal 2nd Runner-Up – Senior Wild Wisdom Quiz 2019</h3>
  <div class="achievement-meta">
    🏢 <em>Issued by World Wide Fund for Nature (WWF-India)</em><br>
    🗓️ <em>October 2019</em>
  </div>
  <p>Upon entering 6th grade, I became eligible for the senior category of the Wild Wisdom Quiz. Partnering with Utkarsh Dewangan, then in 8th grade, we competed together and secured the position of Zonal 2nd Runner-Up.</p>
  <div class="achievement-images">
    <img src="/images/wwq191.jpg" alt="WWQ '19">
    <img src="/images/wwq192.jpg" alt="WWQ '19">
    <img src="/images/wwq193.jpg" alt="WWQ '19">
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h3>🐼 Zonal 1st Runner-Up – Junior Wild Wisdom Quiz 2018</h3>
  <div class="achievement-meta">
    🏢 <em>Issued by World Wide Fund for Nature (WWF-India)</em><br>
    🗓️ <em>September 2018</em>
  </div>
  <p>The Wild Wisdom Quiz, initiated by WWF-India in 2008, is a renowned competition focusing on wildlife and environmental awareness.</p>
  <p>In 5th grade, I participated alongside my teammate, Agriyan Maulik, who was then in 4th grade. The quiz featured teams from Chhattisgarh and Madhya Pradesh. Together, we achieved the position of Zonal 1st Runner-Up.</p>
  <div class="achievement-images">
    <img src="/images/wwq181.jpeg" alt="WWQ '18">
    <img src="/images/wwq182.jpeg" alt="WWQ '18">
    <img src="/images/wwq183.jpeg" alt="WWQ '18">
  </div>
</div>

<!-- Image Modal -->
<div id="imgModal" class="modal" onclick="this.style.display='none'">
  <img id="modalImg" src="" alt="Enlarged View" />
</div>

<script>
  // Fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.achievement-section').forEach(section => {
    observer.observe(section);
  });

  // Image modal on click
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');

  document.querySelectorAll('.achievement-images img').forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  modal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
</script>
