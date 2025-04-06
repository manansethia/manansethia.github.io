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
    overflow-y: hidden; 
    padding: 15px 0;
    gap: 10px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    scrollbar-gutter: stable both-edges;
    -webkit-overflow-scrolling: touch;      
    margin-top: 4px;
    margin-bottom: 4px;
  }

  .achievement-images::-webkit-scrollbar {
    display: none;                
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
    margin: 0 0 20px 0;
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

  @media (min-width: 1024px) {
    .achievement-images img {
      height: 180px;
      min-width: 20%;
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
    animation: fadeInZoom 0.3s ease;
  }

  .modal img {
    display: block;
    margin: auto;
    max-width: 90%;
    max-height: 90%;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0,0,0,0.4);
    transition: transform 0.3s ease;
  }

  #modalImg {
    transition: transform 0.3s ease;
  }

  .modal img.fade-in {
    animation: fadeInZoom 0.3s ease;
  }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 36px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    z-index: 10000;
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
  <p>Upon entering 6th grade, I became eligible for the senior category of the Wild Wisdom Quiz. </p>
  <p>Partnering with Utkarsh Dewangan, then in 8th grade, we competed together and secured the position of Zonal 2nd Runner-Up.</p>
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
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.querySelector('.close-btn');

  let currentGallery = [];
  let currentIndex = 0;
  let lastTap = 0;
  let startX = 0;
  let currentScale = 1;
  let initialDistance = 0;

  document.querySelectorAll('.achievement-images').forEach((gallery) => {
    const images = gallery.querySelectorAll('img');
    images.forEach((img, index) => {
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        currentGallery = Array.from(images);
        currentIndex = index;
        openModalWithImage();
      });
    });
  });

  function openModalWithImage() {
    if (!currentGallery.length) return;
    modal.style.display = 'block';
    modalImg.src = currentGallery[currentIndex].src;
    modalImg.alt = currentGallery[currentIndex].alt;
    modalImg.classList.add('fade-in');
    modalImg.style.transform = 'scale(1)';
    currentScale = 1;
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target === closeBtn) {
      modal.style.display = 'none';
      modalImg.style.transform = 'scale(1)';
      currentScale = 1;
    }
  });

  document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'block') {
      if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % currentGallery.length;
        openModalWithImage();
      } else if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
        openModalWithImage();
      } else if (e.key === 'Escape') {
        modal.style.display = 'none';
        modalImg.style.transform = 'scale(1)';
        currentScale = 1;
      }
    }
  });

  modalImg.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      startX = e.touches[0].clientX;
    } else if (e.touches.length === 2) {
      initialDistance = getDistance(e.touches[0], e.touches[1]);
    }
  });

  modalImg.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const newDistance = getDistance(e.touches[0], e.touches[1]);
      const scaleChange = newDistance / initialDistance;
      const newScale = Math.min(Math.max(currentScale * scaleChange, 1), 3);
      modalImg.style.transform = `scale(${newScale})`;
    }
  }, { passive: false });

  modalImg.addEventListener('touchend', (e) => {
    if (e.touches.length === 0 && e.changedTouches.length === 1) {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;

      if (tapLength < 300 && tapLength > 0) {
        currentScale = currentScale > 1 ? 1 : 2;
        modalImg.style.transform = `scale(${currentScale})`;
      }
      lastTap = currentTime;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          currentIndex = (currentIndex + 1) % currentGallery.length;
        } else {
          currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
        }
        openModalWithImage();
      }
    }
  });

  function getDistance(touch1, touch2) {
    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }
</script>
