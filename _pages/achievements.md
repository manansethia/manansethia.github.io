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

  /* Enhanced Modal Styles */
  .modal {
    display: none;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: rgba(0,0,0,0.7);
    backdrop-filter: blur(5px);
    animation: fadeIn 0.3s ease;
  }

  .modal-content {
    position: relative;
    width: 90%;
    max-width: 1200px;
    height: 85%;
    margin: 2% auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .modal-image-container {
    position: relative;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  #modalImg {
    max-width: 100%;
    max-height: calc(100% - 100px);
    object-fit: contain;
    transition: transform 0.3s ease;
    transform-origin: center;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }

  .modal-nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
  }

  .nav-btn {
    background: rgba(0,0,0,0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
    transition: background 0.3s ease;
    margin: 0 20px;
  }

  .nav-btn:hover {
    background: rgba(0,0,0,0.8);
  }

  .close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(0,0,0,0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s ease;
    z-index: 10001;
  }

  .close-btn:hover {
    background: rgba(0,0,0,0.8);
  }

  .thumbnails-container {
    width: 100%;
    height: 90px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 10px;
    overflow-x: auto;
    padding: 5px 0;
    scroll-behavior: smooth;
  }

  .thumbnails-container::-webkit-scrollbar {
    height: 6px;
  }

  .thumbnails-container::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.5);
    border-radius: 3px;
  }

  .thumbnail {
    height: 70px;
    width: auto;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.2s ease;
    opacity: 0.7;
  }

  .thumbnail.active {
    opacity: 1;
    transform: scale(1.1);
    box-shadow: 0 0 5px rgba(255,255,255,0.8);
  }

  .thumbnail:hover {
    opacity: 1;
  }

  .controls {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
  }

  .zoom-btn {
    background: rgba(0,0,0,0.5);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 8px 15px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .zoom-btn:hover {
    background: rgba(0,0,0,0.8);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    .nav-btn {
      width: 40px;
      height: 40px;
    }
    
    .thumbnails-container {
      height: 70px;
    }
    
    .thumbnail {
      height: 50px;
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

<!-- Enhanced Image Modal -->
<div id="imgModal" class="modal">
  <div class="modal-content">
    <button class="close-btn" id="closeModal">&times;</button>
    
    <div class="modal-image-container">
      <img id="modalImg" src="" alt="Enlarged View" />
      <div class="modal-nav">
        <button class="nav-btn prev-btn" id="prevBtn">&#10094;</button>
        <button class="nav-btn next-btn" id="nextBtn">&#10095;</button>
      </div>
    </div>
    
    <div class="thumbnails-container" id="thumbnailsContainer">
      <!-- Thumbnails will be added here by JavaScript -->
    </div>
    
    <div class="controls">
      <button class="zoom-btn" id="zoomOutBtn">&#8722;</button>
      <button class="zoom-btn" id="zoomInBtn">&#43;</button>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.getElementById('closeModal');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const thumbnailsContainer = document.getElementById('thumbnailsContainer');
    
    // Collect all gallery images from all sections
    const galleryContainers = document.querySelectorAll('.achievement-images');
    let allGalleryImages = [];
    
    galleryContainers.forEach(container => {
      const images = container.querySelectorAll('img');
      allGalleryImages = [...allGalleryImages, ...Array.from(images)];
    });
    
    let currentIndex = 0;
    let currentZoom = 1;
    const minZoom = 1;
    const maxZoom = 3;
    const zoomStep = 0.5;
    
    // Touch variables
    let touchStartX = 0;
    let touchStartY = 0;
    let initialDistance = 0;
    let lastTapTime = 0;
    let initialPinchZoom = 1;
    
    // Create all thumbnails
    function createThumbnails() {
      thumbnailsContainer.innerHTML = '';
      allGalleryImages.forEach((img, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = img.src;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        if (index === currentIndex) {
          thumbnail.classList.add('active');
        }
        thumbnail.addEventListener('click', () => {
          currentIndex = index;
          updateModal();
        });
        thumbnailsContainer.appendChild(thumbnail);
      });
    }
    
    // Update the modal with current image
    function updateModal() {
      modalImg.src = allGalleryImages[currentIndex].src;
      modalImg.alt = allGalleryImages[currentIndex].alt;
      
      // Reset zoom
      currentZoom = 1;
      modalImg.style.transform = `scale(${currentZoom})`;
      
      // Update active thumbnail
      const thumbnails = thumbnailsContainer.querySelectorAll('.thumbnail');
      thumbnails.forEach((thumb, index) => {
        if (index === currentIndex) {
          thumb.classList.add('active');
          // Scroll into view
          thumb.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center'});
        } else {
          thumb.classList.remove('active');
        }
      });
    }
    
    // Set up click event for all gallery images
    allGalleryImages.forEach((img, index) => {
      img.addEventListener('click', () => {
        currentIndex = index;
        modal.style.display = 'block';
        createThumbnails();
        updateModal();
      });
    });
    
    // Navigation functions
    function showPrevImage() {
      currentIndex = (currentIndex - 1 + allGalleryImages.length) % allGalleryImages.length;
      updateModal();
    }
    
    function showNextImage() {
      currentIndex = (currentIndex + 1) % allGalleryImages.length;
      updateModal();
    }
    
    // Zoom functions
    function zoomIn() {
      if (currentZoom < maxZoom) {
        currentZoom += zoomStep;
        modalImg.style.transform = `scale(${currentZoom})`;
      }
    }
    
    function zoomOut() {
      if (currentZoom > minZoom) {
        currentZoom -= zoomStep;
        modalImg.style.transform = `scale(${currentZoom})`;
      }
    }
    
    // Event listeners
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
    
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    zoomInBtn.addEventListener('click', zoomIn);
    zoomOutBtn.addEventListener('click', zoomOut);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (modal.style.display === 'block') {
        if (e.key === 'ArrowRight') {
          showNextImage();
        } else if (e.key === 'ArrowLeft') {
          showPrevImage();
        } else if (e.key === '+') {
          zoomIn();
        } else if (e.key === '-') {
          zoomOut();
        } else if (e.key === 'Escape') {
          modal.style.display = 'none';
        }
      }
    });
    
    // Touch events for mobile
    modalImg.addEventListener('touchstart', (e) => {
      e.preventDefault();
      
      if (e.touches.length === 1) {
        // Single touch for swipe
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        
        // Check for double tap
        const currentTime = new Date().getTime();
        const tapDelay = currentTime - lastTapTime;
        
        if (tapDelay < 300 && tapDelay > 0) {
          // Double tap detected
          if (currentZoom > minZoom) {
            currentZoom = minZoom;
          } else {
            currentZoom = 2;
          }
          modalImg.style.transform = `scale(${currentZoom})`;
        }
        
        lastTapTime = currentTime;
        
      } else if (e.touches.length === 2) {
        // Pinch zoom
        initialDistance = getDistance(e.touches[0], e.touches[1]);
        initialPinchZoom = currentZoom;
      }
    }, { passive: false });
    
    modalImg.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const newDistance = getDistance(e.touches[0], e.touches[1]);
        const distanceRatio = newDistance / initialDistance;
        
        // Calculate new zoom level based on pinch
        currentZoom = Math.min(Math.max(initialPinchZoom * distanceRatio, minZoom), maxZoom);
        modalImg.style.transform = `scale(${currentZoom})`;
      }
    }, { passive: false });
    
    modalImg.addEventListener('touchend', (e) => {
      if (e.changedTouches.length === 1 && e.touches.length === 0) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        // Only register as swipe if horizontal movement is significant
        // and greater than vertical movement (to avoid confusion with scrolling)
        if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX < 0) {
            showNextImage();
          } else {
            showPrevImage();
          }
        }
      }
    });
    
    // Helper function to calculate distance between two touch points
    function getDistance(touch1, touch2) {
      const dx = touch1.clientX - touch2.clientX;
      const dy = touch1.clientY - touch2.clientY;
      return Math.sqrt(dx * dx + dy * dy);
    }
  });
</script>