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
    animation: fadeInZoom 0.3s ease;
  }

  .modal-content {
    position: relative;
    margin: auto;
    width: 85%;
    height: 85%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0,0,0,0.2);
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0,0,0,0.4);
  }

  .image-container {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  #modalImg {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
    transform-origin: center;
  }

  .modal img.fade-in {
    animation: fadeInZoom 0.3s ease;
  }

  /* Navigation Controls */
  .close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 40px;
    height: 40px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
    z-index: 10000;
    transition: background-color 0.3s ease;
  }

  .close-btn:hover {
    background-color: rgba(0,0,0,0.8);
  }

  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
    z-index: 10000;
    transition: background-color 0.3s ease;
  }

  .nav-btn:hover {
    background-color: rgba(0,0,0,0.8);
  }

  .prev-btn {
    left: 15px;
  }

  .next-btn {
    right: 15px;
  }

  /* Thumbnail Strip */
  .thumbnail-container {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.3);
    border-radius: 0 0 12px 12px;
    padding: 10px 0;
  }

  .thumbnail-strip {
    display: flex;
    overflow-x: auto;
    gap: 10px;
    padding: 0 20px;
    scrollbar-width: thin;
    scrollbar-color: rgba(255,255,255,0.3) transparent;
  }

  .thumbnail-strip::-webkit-scrollbar {
    height: 6px;
  }

  .thumbnail-strip::-webkit-scrollbar-track {
    background: transparent;
  }

  .thumbnail-strip::-webkit-scrollbar-thumb {
    background-color: rgba(255,255,255,0.3);
    border-radius: 6px;
  }

  .thumbnail {
    height: 60px;
    width: auto;
    border-radius: 5px;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .thumbnail:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  .thumbnail.active {
    opacity: 1;
    border: 2px solid white;
  }

  /* Zoom Controls */
  .zoom-controls {
    position: absolute;
    bottom: 100px;
    right: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 10000;
  }

  .zoom-btn {
    width: 40px;
    height: 40px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .zoom-btn:hover {
    background-color: rgba(0,0,0,0.8);
  }

  .zoom-level {
    width: 40px;
    height: 40px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
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
  <h2>🐼 Zonal 2nd Runner-Up – Senior Wild Wisdom Quiz 2019</h2>
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
  <h2>🐼 Zonal 1st Runner-Up – Junior Wild Wisdom Quiz 2018</h2>
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
    <div class="close-btn">&times;</div>
    <div class="image-container">
      <div class="nav-btn prev-btn">&#10094;</div>
      <img id="modalImg" src="" alt="Enlarged View" />
      <div class="nav-btn next-btn">&#10095;</div>
      <div class="zoom-controls">
        <div class="zoom-btn zoom-in">+</div>
        <div class="zoom-level">100%</div>
        <div class="zoom-btn zoom-out">-</div>
      </div>
    </div>
    <div class="thumbnail-container">
      <div class="thumbnail-strip" id="thumbnailStrip">
        <!-- Thumbnails will be dynamically added here -->
      </div>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Get all gallery images across all sections
    const allSections = document.querySelectorAll('.achievement-section');
    const allGalleries = document.querySelectorAll('.achievement-images');
    let allImages = [];
    let sectionMap = []; // Maps image index to section index
    
    // Collect all images and build section mapping
    allGalleries.forEach((gallery, sectionIndex) => {
      const images = gallery.querySelectorAll('img');
      images.forEach(img => {
        allImages.push(img);
        sectionMap.push(sectionIndex);
      });
    });

    // Modal elements
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const zoomInBtn = document.querySelector('.zoom-in');
    const zoomOutBtn = document.querySelector('.zoom-out');
    const zoomLevelDisplay = document.querySelector('.zoom-level');
    const thumbnailStrip = document.getElementById('thumbnailStrip');
    
    // State variables
    let currentIndex = 0;
    let currentScale = 1;
    let maxScale = 3;
    let minScale = 0.5;
    let lastTap = 0;
    let startX = 0;
    let startY = 0;
    let initialDistance = 0;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let translateX = 0;
    let translateY = 0;

    // Initialize thumbnails
    function initThumbnails() {
      thumbnailStrip.innerHTML = '';
      allImages.forEach((img, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = img.src;
        thumbnail.alt = img.alt;
        thumbnail.classList.add('thumbnail');
        if (index === currentIndex) {
          thumbnail.classList.add('active');
        }
        thumbnail.addEventListener('click', () => {
          currentIndex = index;
          updateModalImage();
        });
        thumbnailStrip.appendChild(thumbnail);
      });
    }

    // Update modal image and related elements
    function updateModalImage() {
      // Update main image
      modalImg.src = allImages[currentIndex].src;
      modalImg.alt = allImages[currentIndex].alt;
      modalImg.classList.add('fade-in');
      
      // Reset zoom and position
      resetZoomAndPosition();
      
      // Update thumbnails
      const thumbnails = thumbnailStrip.querySelectorAll('.thumbnail');
      thumbnails.forEach((thumb, index) => {
        if (index === currentIndex) {
          thumb.classList.add('active');
          // Scroll thumbnail into view
          thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          thumb.classList.remove('active');
        }
      });
    }

    // Reset zoom and position
    function resetZoomAndPosition() {
      currentScale = 1;
      translateX = 0;
      translateY = 0;
      updateTransform();
      zoomLevelDisplay.textContent = '100%';
    }

    // Update transform with current scale and position
    function updateTransform() {
      modalImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;
    }

    // Open modal with clicked image
    allImages.forEach((img, index) => {
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = index;
        modal.style.display = 'block';
        initThumbnails();
        updateModalImage();
      });
    });

    // Navigation: Previous image
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
      updateModalImage();
    });

    // Navigation: Next image
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % allImages.length;
      updateModalImage();
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    // Zoom controls
    zoomInBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentScale < maxScale) {
        currentScale = Math.min(currentScale + 0.25, maxScale);
        updateTransform();
        zoomLevelDisplay.textContent = `${Math.round(currentScale * 100)}%`;
      }
    });

    zoomOutBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentScale > minScale) {
        currentScale = Math.max(currentScale - 0.25, minScale);
        updateTransform();
        zoomLevelDisplay.textContent = `${Math.round(currentScale * 100)}%`;
      }
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (modal.style.display === 'block') {
        if (e.key === 'ArrowRight') {
          currentIndex = (currentIndex + 1) % allImages.length;
          updateModalImage();
        } else if (e.key === 'ArrowLeft') {
          currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
          updateModalImage();
        } else if (e.key === 'Escape') {
          modal.style.display = 'none';
        } else if (e.key === '+' || e.key === '=') {
          if (currentScale < maxScale) {
            currentScale = Math.min(currentScale + 0.25, maxScale);
            updateTransform();
            zoomLevelDisplay.textContent = `${Math.round(currentScale * 100)}%`;
          }
        } else if (e.key === '-' || e.key === '_') {
          if (currentScale > minScale) {
            currentScale = Math.max(currentScale - 0.25, minScale);
            updateTransform();
            zoomLevelDisplay.textContent = `${Math.round(currentScale * 100)}%`;
          }
        }
      }
    });

    // Mouse wheel zoom
    modalImg.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (e.deltaY < 0 && currentScale < maxScale) {
        // Zoom in
        currentScale = Math.min(currentScale + 0.1, maxScale);
      } else if (e.deltaY > 0 && currentScale > minScale) {
        // Zoom out
        currentScale = Math.max(currentScale - 0.1, minScale);
      }
      updateTransform();
      zoomLevelDisplay.textContent = `${Math.round(currentScale * 100)}%`;
    });

    // Mouse drag for panning when zoomed
    modalImg.addEventListener('mousedown', (e) => {
      if (currentScale > 1) {
        isDragging = true;
        dragStartX = e.clientX - translateX;
        dragStartY = e.clientY - translateY;
        modalImg.style.cursor = 'grabbing';
      }
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        translateX = e.clientX - dragStartX;
        translateY = e.clientY - dragStartY;
        updateTransform();
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      modalImg.style.cursor = 'grab';
    });

    // Touch events for mobile
    modalImg.addEventListener('touchstart', (e) => {
      e.preventDefault();
      
      if (e.touches.length === 1) {
        // Single touch for dragging or double tap
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        
        if (currentScale > 1) {
          isDragging = true;
          dragStartX = startX - translateX;
          dragStartY = startY - translateY;
        }
        
        // Check for double tap
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 300 && tapLength > 0) {
          // Double tap detected
          if (currentScale > 1) {
            // Reset zoom if already zoomed
            resetZoomAndPosition();
          } else {
            // Zoom to 2x at tap position
            currentScale = 2;
            updateTransform();
            zoomLevelDisplay.textContent = `${Math.round(currentScale * 100)}%`;
          }
          e.preventDefault(); // Prevent default zoom behavior
        }
        lastTap = currentTime;
        
      } else if (e.touches.length === 2) {
        // Pinch zoom
        initialDistance = getDistance(e.touches[0], e.touches[1]);
        isDragging = false;
      }
    }, { passive: false });

    modalImg.addEventListener('touchmove', (e) => {
      e.preventDefault();
      
      if (e.touches.length === 1 && isDragging) {
        // Dragging (panning) when zoomed in
        translateX = e.touches[0].clientX - dragStartX;
        translateY = e.touches[0].clientY - dragStartY;
        updateTransform();
        
      } else if (e.touches.length === 2) {
        // Pinch zoom
        const currentDistance = getDistance(e.touches[0], e.touches[1]);
        const scale = currentDistance / initialDistance;
        
        // Calculate new scale based on pinch
        let newScale = currentScale * scale;
        newScale = Math.min(Math.max(newScale, minScale), maxScale);
        
        // Only update if scale changed significantly
        if (Math.abs(newScale - currentScale) > 0.01) {
          currentScale = newScale;
          updateTransform();
          zoomLevelDisplay.textContent = `${Math.round(currentScale * 100)}%`;
          initialDistance = currentDistance;
        }
      }
    }, { passive: false });

    modalImg.addEventListener('touchend', (e) => {
      if (e.touches.length === 0) {
        isDragging = false;
        
        // Handle swipe for navigation when not zoomed in
        if (currentScale <= 1) {
          const endX = e.changedTouches[0].clientX;
          const diff = startX - endX;
          
          // If significant horizontal swipe detected
          if (Math.abs(diff) > 50) {
            if (diff > 0) {
              // Swipe left, go to next image
              currentIndex = (currentIndex + 1) % allImages.length;
            } else {
              // Swipe right, go to previous image
              currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
            }
            updateModalImage();
          }
        }
      }
    });

    // Helper function to calculate distance between two touch points
    function getDistance(touch1, touch2) {
      const dx = touch2.clientX - touch1.clientX;
      const dy = touch2.clientY - touch1.clientY;
      return Math.sqrt(dx * dx + dy * dy);
    }
  });
</script>
