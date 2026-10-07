/**
 * ============================================================================
 * SMILECARE DENTAL CLINIC - MAIN APPLICATION CONTROLLER
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initClinicData();
  initStickyHeader();
  initMobileNavigation();
  initActiveNavSpy();
  initFaqAccordion();
  initTreatmentModals();
  initDoctorModal();
  initAppointmentForm();
  initCurrentYear();
  initLiveStatusBadge();
  initBeforeAfterSlider();
  initSymptomTriage();
});

/**
 * 1. Synchronize UI with Central Configuration (js/config.js)
 */
function initClinicData() {
  if (typeof CLINIC_CONFIG === 'undefined') return;

  // Bind phone numbers
  const phoneLinks = document.querySelectorAll('.bind-phone-link');
  phoneLinks.forEach(link => {
    link.href = `tel:${CLINIC_CONFIG.contact.phoneTel}`;
  });

  const phoneTexts = document.querySelectorAll('.bind-phone-text');
  phoneTexts.forEach(el => {
    el.textContent = CLINIC_CONFIG.contact.phoneDisplay;
  });

  // Bind WhatsApp links
  const waUrl = `https://wa.me/${CLINIC_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(CLINIC_CONFIG.contact.whatsappDefaultMessage)}`;
  const waLinks = document.querySelectorAll('.bind-whatsapp-link');
  waLinks.forEach(link => {
    link.href = waUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  // Bind Email links & text
  const emailLinks = document.querySelectorAll('.bind-email-link');
  emailLinks.forEach(link => {
    link.href = `mailto:${CLINIC_CONFIG.contact.email}`;
  });
  const emailTexts = document.querySelectorAll('.bind-email-text');
  emailTexts.forEach(el => {
    el.textContent = CLINIC_CONFIG.contact.email;
  });

  // Bind Address
  const addressTexts = document.querySelectorAll('.bind-address-text');
  addressTexts.forEach(el => {
    el.textContent = `${CLINIC_CONFIG.contact.addressLine1}, ${CLINIC_CONFIG.contact.addressLine2}, ${CLINIC_CONFIG.contact.city}, ${CLINIC_CONFIG.contact.state} - ${CLINIC_CONFIG.contact.pincode}`;
  });

  // Bind Hours
  const weekdayTexts = document.querySelectorAll('.bind-hours-weekday');
  weekdayTexts.forEach(el => {
    el.textContent = CLINIC_CONFIG.hours.weekdays;
  });
  const sundayTexts = document.querySelectorAll('.bind-hours-sunday');
  sundayTexts.forEach(el => {
    el.textContent = CLINIC_CONFIG.hours.sunday;
  });

  // Bind Doctor Details
  const doctorNameTexts = document.querySelectorAll('.bind-doctor-name');
  doctorNameTexts.forEach(el => {
    el.textContent = CLINIC_CONFIG.doctor.name;
  });
  const doctorQualTexts = document.querySelectorAll('.bind-doctor-qualifications');
  doctorQualTexts.forEach(el => {
    el.textContent = CLINIC_CONFIG.doctor.qualifications;
  });
  const doctorTitleTexts = document.querySelectorAll('.bind-doctor-title');
  doctorTitleTexts.forEach(el => {
    el.textContent = CLINIC_CONFIG.doctor.title;
  });
  const doctorBioTexts = document.querySelectorAll('.bind-doctor-bio');
  doctorBioTexts.forEach(el => {
    el.textContent = CLINIC_CONFIG.doctor.shortBio;
  });

  // Restrict appointment date picker to today or later
  const dateInput = document.getElementById('preferred-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }
}

/**
 * 2. Sticky Header with Scroll Shadow
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 3. Mobile Navigation Drawer & Backdrop
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const menuOverlay = document.getElementById('menu-overlay');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-drawer-cta .btn');

  if (!toggleBtn || !navMenu || !menuOverlay) return;

  const openMenu = () => {
    navMenu.classList.add('open');
    menuOverlay.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    navMenu.classList.remove('open');
    menuOverlay.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menuOverlay.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMenu();
    }
  });
}

/**
 * 4. Active Navigation Item Spy
 */
function initActiveNavSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -70% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

/**
 * 5. FAQ Accordion with Accessibility
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-button');
    const content = item.querySelector('.faq-content');

    if (!button || !content) return;

    button.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other accordion items for clean single-expand behavior
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherButton = otherItem.querySelector('.faq-button');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherButton) otherButton.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      if (isActive) {
        item.classList.remove('active');
        button.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // Open first item by default
  if (faqItems.length > 0) {
    const firstButton = faqItems[0].querySelector('.faq-button');
    const firstContent = faqItems[0].querySelector('.faq-content');
    if (firstButton && firstContent) {
      faqItems[0].classList.add('active');
      firstButton.setAttribute('aria-expanded', 'true');
      firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
    }
  }
}

/**
 * 6. Treatment Details Modal
 */
function initTreatmentModals() {
  const modal = document.getElementById('treatment-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close-btn');
  const titleEl = document.getElementById('modal-treatment-title');
  const descEl = document.getElementById('modal-treatment-desc');
  const detailsList = document.getElementById('modal-treatment-details');
  const bookBtn = document.getElementById('modal-treatment-book-btn');

  const openTreatmentModal = (treatmentId) => {
    const treatment = CLINIC_CONFIG.treatments.find(t => t.id === treatmentId);
    if (!treatment) return;

    if (titleEl) titleEl.textContent = treatment.title;
    if (descEl) descEl.textContent = treatment.fullDescription;
    
    if (detailsList) {
      detailsList.innerHTML = treatment.details
        .map(item => `
          <li style="display: flex; align-items: flex-start; gap: 0.6rem; margin-bottom: 0.6rem; font-size: 0.925rem;">
            <svg style="color: var(--color-primary); flex-shrink: 0; margin-top: 3px;" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${item}</span>
          </li>
        `).join('');
    }

    if (bookBtn) {
      bookBtn.onclick = () => {
        closeModal();
        // Select treatment in form
        const select = document.getElementById('treatment-select');
        if (select) {
          select.value = treatment.id;
        }
        // Smooth scroll to appointment section
        const appointmentSec = document.getElementById('appointment');
        if (appointmentSec) {
          appointmentSec.scrollIntoView({ behavior: 'smooth' });
        }
      };
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Attach click listener to Learn More buttons
  const learnMoreBtns = document.querySelectorAll('[data-treatment-id]');
  learnMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-treatment-id');
      openTreatmentModal(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}

/**
 * 7. Doctor Bio & Credentials Modal
 */
function initDoctorModal() {
  const modal = document.getElementById('doctor-modal');
  const triggerBtn = document.getElementById('meet-doctor-btn');
  if (!modal || !triggerBtn) return;

  const closeBtn = modal.querySelector('.modal-close-btn');
  const bookFromModalBtn = document.getElementById('doctor-modal-book-btn');

  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  triggerBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  
  if (bookFromModalBtn) {
    bookFromModalBtn.addEventListener('click', () => {
      closeModal();
      const appointmentSec = document.getElementById('appointment');
      if (appointmentSec) {
        appointmentSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}

/**
 * 8. Appointment Request Form Submission & Confirmation
 */
function initAppointmentForm() {
  const form = document.getElementById('appointment-form');
  const modal = document.getElementById('confirmation-modal');
  if (!form || !modal) return;

  const closeBtn = modal.querySelector('.modal-close-btn');
  const modalDoneBtn = document.getElementById('confirmation-done-btn');

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modalDoneBtn) modalDoneBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : 'Request Appointment';

    // Collect form data
    const formData = {
      fullName: document.getElementById('full-name')?.value.trim() || '',
      phone: document.getElementById('phone-number')?.value.trim() || '',
      email: document.getElementById('email-address')?.value.trim() || '',
      preferredDate: document.getElementById('preferred-date')?.value || '',
      preferredTime: document.getElementById('preferred-time')?.value || '',
      treatment: document.getElementById('treatment-select')?.value || '',
      treatmentLabel: document.getElementById('treatment-select')?.options[document.getElementById('treatment-select')?.selectedIndex]?.text || '',
      message: document.getElementById('patient-message')?.value.trim() || ''
    };

    // Client-side quick validation
    if (!formData.fullName || !formData.phone || !formData.email || !formData.preferredDate || !formData.preferredTime || !formData.treatment) {
      alert('Please fill in all required fields to request your appointment.');
      return;
    }

    // Set temporary button loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="spinner" style="animation: spin 1s linear infinite; display: inline-block; vertical-align: middle;" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10"></path>
        </svg>
        <span>Processing Request...</span>
      `;
    }

    // Simulate polite asynchronous submission (350ms)
    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }

      // Populate confirmation modal with patient-friendly summary
      document.getElementById('confirm-patient-name').textContent = formData.fullName;
      document.getElementById('confirm-treatment').textContent = formData.treatmentLabel;
      document.getElementById('confirm-date').textContent = formData.preferredDate;
      document.getElementById('confirm-time').textContent = formData.preferredTime;
      document.getElementById('confirm-phone').textContent = formData.phone;

      // Show confirmation dialog
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';

      // Log clear developer guide for backend integration
      console.log('--- SMILECARE APPOINTMENT REQUEST CAPTURED ---');
      console.log('Data:', formData);
      console.log('To connect to a live email/CRM service: Check README.md section "Connecting the Appointment Form".');

      // Reset form
      form.reset();
    }, 400);
  });
}

/**
 * 9. Update Copyright Year Dynamically
 */
function initCurrentYear() {
  const yearEls = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = currentYear >= 2026 ? currentYear : 2026;
  });
}

/**
 * 10. Real-Time 24/7 Live Clinic Status Badge
 */
function initLiveStatusBadge() {
  const badgeEls = document.querySelectorAll('.live-status-pill');
  if (!badgeEls.length) return;

  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 1-6 Mon-Sat
  const hour = now.getHours();
  const minute = now.getMinutes();

  let isOpen = false;
  let statusText = "24/7 Online Desk Active";

  if (day >= 1 && day <= 6) {
    // Mon - Sat: 9:00 AM to 7:00 PM (19:00)
    if (hour >= 9 && hour < 19) {
      isOpen = true;
      statusText = "Open Now • Closes 7:00 PM";
    } else {
      statusText = "After Hours • 24/7 Online & WhatsApp Open";
    }
  } else {
    // Sunday: Closed for routine, emergency on request
    statusText = "Sunday • 24/7 Priority Emergency Available";
  }

  badgeEls.forEach(badge => {
    if (isOpen) {
      badge.classList.remove('closed');
      badge.innerHTML = `<span class="live-status-dot"></span><span>${statusText}</span>`;
    } else {
      badge.classList.add('closed');
      badge.innerHTML = `<span class="live-status-dot"></span><span>${statusText}</span>`;
    }
  });
}

/**
 * 11. Interactive Before & After Smile Transformation Slider
 */
function initBeforeAfterSlider() {
  const container = document.querySelector('.before-after-container');
  const overlay = document.querySelector('.before-after-overlay');
  const handle = document.querySelector('.before-after-handle');

  if (!container || !overlay || !handle) return;

  let isDragging = false;

  const updatePosition = (clientX) => {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percentage = (x / rect.width) * 100;
    overlay.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  };

  const startDrag = (e) => {
    isDragging = true;
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    updatePosition(clientX);
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    updatePosition(clientX);
  };

  const stopDrag = () => {
    isDragging = false;
  };

  container.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', onDrag);
  window.addEventListener('mouseup', stopDrag);

  container.addEventListener('touchstart', startDrag, { passive: true });
  window.addEventListener('touchmove', onDrag, { passive: true });
  window.addEventListener('touchend', stopDrag);
}

/**
 * 12. Dental Symptom Triage Widget ("Where Does It Hurt?")
 */
function initSymptomTriage() {
  const symptomCards = document.querySelectorAll('.symptom-card');
  if (!symptomCards.length) return;

  symptomCards.forEach(card => {
    card.addEventListener('click', () => {
      // Remove active from others
      symptomCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const targetTreatmentId = card.getAttribute('data-target-treatment');
      
      // Auto-select in appointment dropdown
      const select = document.getElementById('treatment-select');
      if (select && targetTreatmentId) {
        select.value = targetTreatmentId;
      }

      // Smooth scroll to treatments section
      const treatmentSec = document.getElementById('treatments');
      if (treatmentSec) {
        treatmentSec.scrollIntoView({ behavior: 'smooth' });
      }

      // Highlight target card with brief visual pulse
      const treatmentCard = document.querySelector(`[data-treatment-id="${targetTreatmentId}"]`)?.closest('.treatment-card');
      if (treatmentCard) {
        treatmentCard.style.outline = '3px solid var(--color-primary)';
        treatmentCard.style.transform = 'translateY(-6px)';
        setTimeout(() => {
          treatmentCard.style.outline = '';
          treatmentCard.style.transform = '';
        }, 2500);
      }
    });
  });
}

