/**
 * ============================================================================
 * SMILECARE DENTAL CLINIC - ACCESSIBLE GALLERY LIGHTBOX
 * ============================================================================
 */

class GalleryLightbox {
  constructor() {
    this.modal = document.getElementById('lightbox-modal');
    this.imageElement = document.getElementById('lightbox-image');
    this.captionElement = document.getElementById('lightbox-caption');
    this.closeBtn = document.getElementById('lightbox-close');
    this.prevBtn = document.getElementById('lightbox-prev');
    this.nextBtn = document.getElementById('lightbox-next');
    
    this.items = [];
    this.currentIndex = 0;
    
    this.init();
  }

  init() {
    if (!this.modal) return;

    // Attach click events to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-title')?.textContent || '';
      const caption = item.getAttribute('data-caption') || title;
      const src = img?.getAttribute('src') || '';

      this.items.push({ src, caption });

      item.addEventListener('click', () => {
        this.open(index);
      });

      // Keyboard accessibility (Enter / Space)
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', `View ${title}`);
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.open(index);
        }
      });
    });

    // Close on button click
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    // Prev / Next button clicks
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.prev();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.next();
      });
    }

    // Close on backdrop click
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.modal.classList.contains('active')) return;

      if (e.key === 'Escape') {
        this.close();
      } else if (e.key === 'ArrowLeft') {
        this.prev();
      } else if (e.key === 'ArrowRight') {
        this.next();
      }
    });
  }

  open(index) {
    if (this.items.length === 0) return;
    this.currentIndex = index;
    this.updateImage();
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.closeBtn?.focus();
  }

  close() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.updateImage();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.updateImage();
  }

  updateImage() {
    const item = this.items[this.currentIndex];
    if (item && this.imageElement) {
      this.imageElement.src = item.src;
      this.imageElement.alt = item.caption;
      if (this.captionElement) {
        this.captionElement.textContent = item.caption;
      }
    }
  }
}

// Instantiate once DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new GalleryLightbox();
});
