// ==========================================================================
// SONIYA CATHERINE — REFINED PORTFOLIO INTERACTIVITY & AUDITED DATASET
// ==========================================================================

// 1. COMPLETE AUDITED DATASET OF ALL 43 PORTFOLIO ARTWORKS
const portfolioData = [
  // --- COLUMN 1 ---
  {
    id: 'dig-gather-1',
    brand: 'Gather',
    title: 'Social Media Promotional Poster I',
    category: 'DIGITAL',
    src: 'assets/digital designs/gather_instagram_poster01.webp',
    alt: 'Gather social media poster 01',
    colWidth: 'col-medium'
  },
  {
    id: 'prt-adv-book3',
    brand: 'Advocation',
    title: 'Editorial Typography Spread',
    category: 'PRINT',
    src: 'assets/print designs/advocation-book03.webp',
    alt: 'Advocation typography editorial spread',
    colWidth: 'col-wide'
  },

  // --- COLUMN 2 ---
  {
    id: 'prt-blue-haven',
    brand: 'Blue Haven',
    title: 'Screenprinted Canvas Tote Bag',
    category: 'PRINT',
    src: 'assets/print designs/blue haven tote bag.webp',
    alt: 'Blue Haven screenprinted tote bag',
    colWidth: 'col-narrow'
  },
  {
    id: 'web-mock-1',
    brand: 'Studio Interactive',
    title: 'Creative Studio Web Experience',
    category: 'WEBSITE',
    src: 'assets/website designs/website-mockup01.webp',
    alt: 'Studio web UI design mockup 01',
    colWidth: 'col-wide'
  },

  // --- COLUMN 3 ---
  {
    id: 'web-mock-5',
    brand: 'Editorial Media',
    title: 'Digital Magazine & Publication Web Layout',
    category: 'WEBSITE',
    src: 'assets/website designs/website-mockup05.webp',
    alt: 'Editorial media publication web mockup 05',
    colWidth: 'col-wide'
  },
  {
    id: 'dig-juzt-90',
    brand: 'Juztshine',
    title: '90-Day Challenge Digital Poster',
    category: 'DIGITAL',
    src: 'assets/digital designs/juztshine 90 day challenge poster.webp',
    alt: 'Juztshine 90 day challenge poster',
    colWidth: 'col-narrow'
  },

  // --- COLUMN 4 ---
  {
    id: 'prt-adv-post2',
    brand: 'Advocation',
    title: 'Promotional Postcard Series II',
    category: 'PRINT',
    src: 'assets/print designs/advocation postcard 02.webp',
    alt: 'Advocation promotional postcard 02',
    colWidth: 'col-medium'
  },
  {
    id: 'web-mock-2',
    brand: 'SaaS Platform',
    title: 'Enterprise Cloud Platform Dashboard',
    category: 'WEBSITE',
    src: 'assets/website designs/website-mockup02.webp',
    alt: 'Enterprise cloud platform web mockup 02',
    colWidth: 'col-medium'
  },

  // --- COLUMN 5 ---
  {
    id: 'dig-self-serve',
    brand: 'Self-Serve Severence',
    title: 'Brand Identity & Minimalist Logo',
    category: 'DIGITAL',
    src: 'assets/digital designs/self-serve-sverence-logo.webp',
    alt: 'Self-serve Severence logo branding mark',
    colWidth: 'col-narrow'
  },
  {
    id: 'prt-dest-post2',
    brand: 'Destiny',
    title: 'Typographic Poster Series II',
    category: 'PRINT',
    src: 'assets/print designs/destiny poster 2.webp',
    alt: 'Destiny typographic poster print 02',
    colWidth: 'col-medium'
  },

  // --- COLUMN 6 ---
  {
    id: 'dig-women-res',
    brand: 'Women Resilience',
    title: 'Digital Newsletter Editorial Layout',
    category: 'DIGITAL',
    src: 'assets/digital designs/Newsletter design for Women Resilience.webp',
    alt: 'Women Resilience digital newsletter design',
    colWidth: 'col-medium'
  },
  {
    id: 'web-dest-mock1',
    brand: 'Destiny',
    title: 'Brand Web Experience UI Concept I',
    category: 'WEBSITE',
    src: 'assets/website designs/destiny mockup 1.webp',
    alt: 'Destiny brand web interface mockup 01',
    colWidth: 'col-wide'
  },

  // --- COLUMN 7 ---
  {
    id: 'prt-needy-banner',
    brand: 'Needy Aid',
    title: 'Brand Pull-Up Exhibition Banner',
    category: 'PRINT',
    src: 'assets/print designs/Needy aid-brand pull up banner.webp',
    alt: 'Needy Aid brand pull up banner print',
    colWidth: 'col-narrow'
  },
  {
    id: 'web-mock-3',
    brand: 'Digital Agency',
    title: 'Creative Portfolio Web Architecture',
    category: 'WEBSITE',
    src: 'assets/website designs/website-mockup03.webp',
    alt: 'Digital agency portfolio web mockup 03',
    colWidth: 'col-wide'
  },

  // --- COLUMN 8 ---
  {
    id: 'dig-dest-fund',
    brand: 'Destiny',
    title: 'Fundraiser Campaign Event Flyer',
    category: 'DIGITAL',
    src: 'assets/digital designs/destiny fundraiser flyer@2x.webp',
    alt: 'Destiny fundraiser event flyer design',
    colWidth: 'col-narrow'
  },
  {
    id: 'prt-adv-book1',
    brand: 'Advocation',
    title: 'Publication Book Cover Design',
    category: 'PRINT',
    src: 'assets/print designs/advocation-book01.webp',
    alt: 'Advocation publication book cover',
    colWidth: 'col-medium'
  },

  // --- COLUMN 9 ---
  {
    id: 'web-nar-mock3',
    brand: 'NAR Architecture',
    title: 'Architectural Portfolio Web UI',
    category: 'WEBSITE',
    src: 'assets/website designs/mockup 3 - nar.webp',
    alt: 'NAR architectural portfolio web mockup',
    colWidth: 'col-wide'
  },
  {
    id: 'dig-gather-2',
    brand: 'Gather',
    title: 'Social Media Promotional Poster II',
    category: 'DIGITAL',
    src: 'assets/digital designs/gather_instagram_poster02.webp',
    alt: 'Gather social media poster 02',
    colWidth: 'col-medium'
  },

  // --- COLUMN 10 ---
  {
    id: 'prt-dest-post1',
    brand: 'Destiny',
    title: 'Typographic Poster Series I',
    category: 'PRINT',
    src: 'assets/print designs/destiny poster01.webp',
    alt: 'Destiny typographic poster print 01',
    colWidth: 'col-narrow'
  },
  {
    id: 'web-mock-4',
    brand: 'Retail Storefront',
    title: 'Modern E-Commerce Storefront UI',
    category: 'WEBSITE',
    src: 'assets/website designs/website-mockup04.webp',
    alt: 'E-commerce web store interface mockup 04',
    colWidth: 'col-wide'
  },

  // --- COLUMN 11 ---
  {
    id: 'dig-com-food',
    brand: 'Community Food Initiative',
    title: 'Food Drive Promotional Flyer',
    category: 'DIGITAL',
    src: 'assets/digital designs/flyer-community food.webp',
    alt: 'Community food initiative promotional flyer',
    colWidth: 'col-narrow'
  },
  {
    id: 'prt-adv-post1',
    brand: 'Advocation',
    title: 'Promotional Postcard Series I',
    category: 'PRINT',
    src: 'assets/print designs/advocation postcard 01.webp',
    alt: 'Advocation promotional postcard 01',
    colWidth: 'col-medium'
  },

  // --- COLUMN 12 ---
  {
    id: 'web-wr-mock1',
    brand: 'Women Resilience',
    title: 'Community Advocacy Web Platform',
    category: 'WEBSITE',
    src: 'assets/website designs/mockup-1-wr.webp',
    alt: 'Women Resilience web platform mockup',
    colWidth: 'col-wide'
  },
  {
    id: 'dig-dizaneals',
    brand: 'Dizaneals',
    title: 'Brand Identity & Logo Mark',
    category: 'DIGITAL',
    src: 'assets/digital designs/dizaneals logo.webp',
    alt: 'Dizaneals logo design mark',
    colWidth: 'col-narrow'
  },

  // --- COLUMN 13 ---
  {
    id: 'prt-dest-post3',
    brand: 'Destiny',
    title: 'Typographic Poster Series III',
    category: 'PRINT',
    src: 'assets/print designs/destiny poster 3.webp',
    alt: 'Destiny typographic poster print 03',
    colWidth: 'col-medium'
  },
  {
    id: 'dig-sa-collect',
    brand: 'SA Collective Inc.',
    title: 'Corporate Newsletter Editorial',
    category: 'DIGITAL',
    src: 'assets/digital designs/newsletter SA Collective Inc.webp',
    alt: 'SA Collective Inc newsletter design',
    colWidth: 'col-medium'
  },

  // --- COLUMN 14 ---
  {
    id: 'web-dest-mock2',
    brand: 'Destiny',
    title: 'Brand Web Experience UI Concept II',
    category: 'WEBSITE',
    src: 'assets/website designs/mockup 2 - destiny.webp',
    alt: 'Destiny brand web interface mockup 02',
    colWidth: 'col-wide'
  },
  {
    id: 'prt-gat-tag1-1',
    brand: 'Gather',
    title: 'Apparel Hangtag Edition I',
    category: 'PRINT',
    src: 'assets/print designs/gather_tag01-01.webp',
    alt: 'Gather apparel hangtag 01',
    colWidth: 'col-narrow'
  },

  // --- COLUMN 15 ---
  {
    id: 'dig-ig01',
    brand: 'Social Studio',
    title: 'Editorial Feed Graphics I',
    category: 'DIGITAL',
    src: 'assets/digital designs/ig01.webp',
    alt: 'Editorial social media graphics 01',
    colWidth: 'col-narrow'
  },
  {
    id: 'prt-adv-book2',
    brand: 'Advocation',
    title: 'Book Editorial Inner Page Layout',
    category: 'PRINT',
    src: 'assets/print designs/advocation-book02.webp',
    alt: 'Advocation book inner spread layout',
    colWidth: 'col-medium'
  },

  // --- COLUMN 16 ---
  {
    id: 'web-mock-6',
    brand: 'Brand Studio',
    title: 'Interactive Brand Agency Website',
    category: 'WEBSITE',
    src: 'assets/website designs/website-mockup06.webp',
    alt: 'Interactive agency website mockup 06',
    colWidth: 'col-wide'
  },
  {
    id: 'prt-dest-decal',
    brand: 'Destiny',
    title: 'Vinyl Decal Graphic Sticker',
    category: 'PRINT',
    src: 'assets/print designs/destiny decal.webp',
    alt: 'Destiny vinyl decal graphic sticker',
    colWidth: 'col-narrow'
  },

  // --- COLUMN 17 ---
  {
    id: 'dig-ig-story',
    brand: 'Instagram Story Campaign',
    title: 'Story Editorial Promotion Layout',
    category: 'DIGITAL',
    src: 'assets/digital designs/instagram story.gif',
    alt: 'Instagram story promotional layout',
    colWidth: 'col-narrow'
  },
  {
    id: 'prt-gat-tag1-2',
    brand: 'Gather',
    title: 'Apparel Hangtag Edition II',
    category: 'PRINT',
    src: 'assets/print designs/gather_tag01-02.webp',
    alt: 'Gather apparel hangtag 02',
    colWidth: 'col-narrow'
  },

  // --- COLUMN 18 ---
  {
    id: 'dig-gather-logo',
    brand: 'Gather',
    title: 'Brandmark Identity Design',
    category: 'DIGITAL',
    src: 'assets/digital designs/gather_logo_with_bg.webp',
    alt: 'Gather brandmark on dark background',
    colWidth: 'col-narrow'
  },
  {
    id: 'prt-dest-form2',
    brand: 'Destiny',
    title: 'Printed Client Intake Form',
    category: 'PRINT',
    src: 'assets/print designs/destiny form2.webp',
    alt: 'Destiny client intake printed form',
    colWidth: 'col-narrow'
  },

  // --- COLUMN 19 ---
  {
    id: 'dig-ig02',
    brand: 'Social Studio',
    title: 'Editorial Feed Graphics II',
    category: 'DIGITAL',
    src: 'assets/digital designs/ig02.webp',
    alt: 'Editorial social media graphics 02',
    colWidth: 'col-narrow'
  },
  {
    id: 'prt-dest-form3',
    brand: 'Destiny',
    title: 'Consultation Record Form',
    category: 'PRINT',
    src: 'assets/print designs/destiny form3.webp',
    alt: 'Destiny consultation record form print',
    colWidth: 'col-narrow'
  },

  // --- COLUMN 20 ---
  {
    id: 'prt-gat-price',
    brand: 'Gather',
    title: 'Retail Price Tag Print Design',
    category: 'PRINT',
    src: 'assets/print designs/gather_pricetag.webp',
    alt: 'Gather retail price tag print',
    colWidth: 'col-narrow'
  },
  {
    id: 'prt-juzt-track1',
    brand: 'Juztshine',
    title: 'Daily Workout Tracker Insert',
    category: 'PRINT',
    src: 'assets/print designs/juztshine_workout_tracker01.webp',
    alt: 'Juztshine daily workout tracker print insert',
    colWidth: 'col-narrow'
  },

  // --- COLUMN 21 ---
  {
    id: 'prt-gat-tag2-1',
    brand: 'Gather',
    title: 'Product Packaging Tag I',
    category: 'PRINT',
    src: 'assets/print designs/gather_tag02-01.webp',
    alt: 'Gather packaging product tag 01',
    colWidth: 'col-narrow'
  },
  {
    id: 'prt-juzt-track2',
    brand: 'Juztshine',
    title: 'Exercise Progress Log Sheet',
    category: 'PRINT',
    src: 'assets/print designs/juztshine_workout_tracker_02.webp',
    alt: 'Juztshine exercise progress log sheet',
    colWidth: 'col-narrow'
  },

  // --- COLUMN 22 ---
  {
    id: 'prt-gat-tag2-2',
    brand: 'Gather',
    title: 'Product Packaging Tag II',
    category: 'PRINT',
    src: 'assets/print designs/gather_tag02-02.webp',
    alt: 'Gather packaging product tag 02',
    colWidth: 'col-narrow'
  }
];

// 2. DOM ELEMENTS
const galleryViewport = document.getElementById('galleryViewport');
const galleryTrack = document.getElementById('galleryTrack');
const scrollLeftBtn = document.getElementById('scrollLeftBtn');
const scrollRightBtn = document.getElementById('scrollRightBtn');
const fixedCreativeDesigner = document.getElementById('fixedCreativeDesigner');
const desktopBrandHome = document.getElementById('desktopBrandHome');
const mobileBrandHome = document.getElementById('mobileBrandHome');

// Desktop Filter Dropdown Elements
const desktopFilterDropdown = document.getElementById('desktopFilterDropdown');
const filterDropdownTrigger = document.getElementById('filterDropdownTrigger');
const selectedFilterLabel = document.getElementById('selectedFilterLabel');
const filterDropdownMenu = document.getElementById('filterDropdownMenu');

// Mobile Controls Stack Elements (Filter Icon above Scroll to Top)
const mobileFilterWrapper = document.getElementById('mobileFilterWrapper');
const mobileFilterBtn = document.getElementById('mobileFilterBtn');
const mobileFilterMenu = document.getElementById('mobileFilterMenu');
const mobileBackToTop = document.getElementById('mobileBackToTop');

// Lightbox Elements
const lightboxModal = document.getElementById('lightboxModal');
const lightboxBackdrop = document.getElementById('lightboxBackdrop');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxBrand = document.getElementById('lightboxBrand');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxCategory = document.getElementById('lightboxCategory');

// Mobile Menu Elements
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

// Current State
let currentCategory = 'ALL';

// Lightbox Navigation State
let lightboxFilteredList = []; // Holds the filtered dataset at the moment a lightbox was opened
let lightboxIndex = -1;        // Index of the currently shown item within lightboxFilteredList

// 3. RENDER MASONRY GALLERY (ALL FIRST-ROW ITEMS START AT SAME TOP Y-BASELINE)
function renderGallery(activeCat = 'ALL') {
  galleryTrack.innerHTML = '';

  // Filter items precisely
  let filtered = activeCat === 'ALL' 
    ? [...portfolioData]
    : portfolioData.filter(item => item.category === activeCat);

  // In PRINT view, ensure hero items appear in early columns for maximum visibility
  if (activeCat === 'PRINT') {
    const heroIds = ['prt-adv-post2', 'prt-blue-haven', 'prt-dest-post2'];
    const heroes = filtered.filter(item => heroIds.includes(item.id));
    const rest = filtered.filter(item => !heroIds.includes(item.id));
    filtered = [...heroes, ...rest];
  }

  // Determine items per column (2 per column on desktop keeps artwork in upper visible zone)
  const isMobile = window.innerWidth <= 768;
  const itemsPerColumn = isMobile ? 1 : 2;
  const totalColumns = Math.ceil(filtered.length / itemsPerColumn);

  for (let c = 0; c < totalColumns; c++) {
    const colItems = filtered.slice(c * itemsPerColumn, (c + 1) * itemsPerColumn);
    if (colItems.length === 0) continue;

    const colWidthClass = colItems[0].colWidth || 'col-medium';
    const colEl = document.createElement('div');
    colEl.className = `masonry-col ${colWidthClass}`;

    colItems.forEach(item => {
      const card = document.createElement('div');
      card.className = 'art-card';
      card.setAttribute('data-id', item.id);
      card.setAttribute('data-category', item.category);
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View ${item.brand} — ${item.title}`);

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt;
      img.loading = 'lazy';

      card.appendChild(img);

      // Lightbox click handler
      card.addEventListener('click', () => openLightbox(item));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(item);
        }
      });

      colEl.appendChild(card);
    });

    galleryTrack.appendChild(colEl);
  }

  // Reset scroll position smoothly
  if (isMobile) {
    galleryViewport.scrollTop = 0;
  } else {
    galleryViewport.scrollLeft = 0;
  }

  updateMobileIntroTypography();
  resetAutoScrollTimer();
}

// 4. MOBILE INTRO-ONLY TYPOGRAPHY FADE ON SCROLL LOGIC
function updateMobileIntroTypography() {
  if (window.innerWidth > 768) {
    // Desktop: Always visible
    fixedCreativeDesigner?.classList.remove('hidden');
    return;
  }

  // Mobile: Only visible in ALL category and when at the top of the page
  if (currentCategory === 'ALL' && galleryViewport.scrollTop <= 30) {
    fixedCreativeDesigner?.classList.remove('hidden');
  } else {
    fixedCreativeDesigner?.classList.add('hidden');
  }
}

// Mobile scroll listener to fade out CREATIVE / DESIGNER smoothly
galleryViewport.addEventListener('scroll', () => {
  if (window.innerWidth <= 768) {
    updateMobileIntroTypography();
  }
}, { passive: true });

// 5. FILTER CONTROLS & DROPDOWN LOGIC
function setCategory(category) {
  currentCategory = category;

  // Update selected desktop dropdown label
  if (selectedFilterLabel) {
    selectedFilterLabel.textContent = category;
  }

  // Update active state in desktop dropdown items
  document.querySelectorAll('.filter-dropdown-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-category') === category);
  });

  // Update active state in mobile filter items
  document.querySelectorAll('.mobile-filter-item').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-category') === category);
  });

  // Close desktop dropdown menu
  if (desktopFilterDropdown) {
    desktopFilterDropdown.classList.remove('open');
    filterDropdownTrigger?.setAttribute('aria-expanded', 'false');
  }

  // Close mobile filter popup menu
  if (mobileFilterWrapper) {
    mobileFilterWrapper.classList.remove('open');
    mobileFilterBtn?.setAttribute('aria-expanded', 'false');
  }

  // Re-render complete filtered gallery
  renderGallery(category);
}

// Toggle Desktop Filter Dropdown
filterDropdownTrigger?.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = desktopFilterDropdown.classList.toggle('open');
  filterDropdownTrigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Desktop Dropdown item selection
filterDropdownMenu?.addEventListener('click', (e) => {
  const item = e.target.closest('.filter-dropdown-item');
  if (item) {
    const cat = item.getAttribute('data-category');
    setCategory(cat);
  }
});

// Toggle Mobile Filter Menu
mobileFilterBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = mobileFilterWrapper.classList.toggle('open');
  mobileFilterBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Mobile Filter Menu item selection
mobileFilterMenu?.addEventListener('click', (e) => {
  const item = e.target.closest('.mobile-filter-item');
  if (item) {
    const cat = item.getAttribute('data-category');
    setCategory(cat);
  }
});

// Close dropdowns on click outside
document.addEventListener('click', (e) => {
  if (desktopFilterDropdown && !desktopFilterDropdown.contains(e.target)) {
    desktopFilterDropdown.classList.remove('open');
    filterDropdownTrigger?.setAttribute('aria-expanded', 'false');
  }
  if (mobileFilterWrapper && !mobileFilterWrapper.contains(e.target)) {
    mobileFilterWrapper.classList.remove('open');
    mobileFilterBtn?.setAttribute('aria-expanded', 'false');
  }
});

// Clicking Brand Name resets to ALL view and returns to top
function handleHomeReset() {
  setCategory('ALL');
  if (window.innerWidth <= 768) {
    galleryViewport.scrollTo({ top: 0, behavior: 'smooth' });
    updateMobileIntroTypography();
  } else {
    galleryViewport.scrollTo({ left: 0, behavior: 'smooth' });
  }
}

desktopBrandHome?.addEventListener('click', handleHomeReset);
desktopBrandHome?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    handleHomeReset();
  }
});

mobileBrandHome?.addEventListener('click', handleHomeReset);
mobileBrandHome?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    handleHomeReset();
  }
});

// 6. HORIZONTAL SCROLL & ARROW CONTROLS (DESKTOP)
if (scrollLeftBtn && scrollRightBtn) {
  scrollLeftBtn.addEventListener('click', () => {
    pauseAutoScroll();
    galleryViewport.scrollBy({ left: -window.innerWidth * 0.55, behavior: 'smooth' });
    resetAutoScrollTimer();
  });

  scrollRightBtn.addEventListener('click', () => {
    pauseAutoScroll();
    galleryViewport.scrollBy({ left: window.innerWidth * 0.55, behavior: 'smooth' });
    resetAutoScrollTimer();
  });
}

// Intercept vertical wheel on desktop gallery to convert to horizontal scroll smoothly
galleryViewport.addEventListener('wheel', (e) => {
  if (window.innerWidth > 768) {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      pauseAutoScroll();
      galleryViewport.scrollLeft += e.deltaY * 1.4;
      resetAutoScrollTimer();
    }
  }
}, { passive: false });

// 7. DESKTOP INACTIVITY AUTO-SCROLL (ONLY AFTER 2.5s INACTIVITY)
let autoScrollTimer = null;
let autoScrollRaf = null;
let isUserInteracting = false;
const INACTIVITY_DELAY = 2500;

function startAutoScroll() {
  if (window.innerWidth <= 768) return; // Desktop only
  if (isUserInteracting) return;

  cancelAnimationFrame(autoScrollRaf);

  function step() {
    const maxScroll = galleryViewport.scrollWidth - galleryViewport.clientWidth;
    
    if (galleryViewport.scrollLeft >= maxScroll - 1) {
      pauseAutoScroll();
      return;
    }

    if (!isUserInteracting && window.innerWidth > 768) {
      galleryViewport.scrollLeft += 0.5;
      autoScrollRaf = requestAnimationFrame(step);
    }
  }

  autoScrollRaf = requestAnimationFrame(step);
}

function pauseAutoScroll() {
  isUserInteracting = true;
  cancelAnimationFrame(autoScrollRaf);
  if (autoScrollTimer) clearTimeout(autoScrollTimer);
}

function resetAutoScrollTimer() {
  pauseAutoScroll();
  isUserInteracting = false;
  if (window.innerWidth > 768) {
    autoScrollTimer = setTimeout(() => {
      startAutoScroll();
    }, INACTIVITY_DELAY);
  }
}

['mousemove', 'pointermove', 'pointerdown', 'wheel', 'scroll', 'click', 'keydown', 'touchstart'].forEach(evt => {
  window.addEventListener(evt, () => {
    if (window.innerWidth > 768) {
      resetAutoScrollTimer();
    }
  }, { passive: true });
});


// 8. IMAGE LIGHTBOX MODAL — WITH CATEGORY-AWARE PREV / NEXT NAVIGATION

// DOM refs for lightbox nav arrows
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

// Returns the same filtered+ordered list that renderGallery() currently shows
function getFilteredItems(category) {
  let filtered = category === 'ALL'
    ? [...portfolioData]
    : portfolioData.filter(item => item.category === category);

  // Mirror the PRINT hero-reorder logic from renderGallery
  if (category === 'PRINT') {
    const heroIds = ['prt-adv-post2', 'prt-blue-haven', 'prt-dest-post2'];
    const heroes  = filtered.filter(item => heroIds.includes(item.id));
    const rest    = filtered.filter(item => !heroIds.includes(item.id));
    filtered = [...heroes, ...rest];
  }
  return filtered;
}

// Populate lightbox image + caption
function populateLightbox(item) {
  lightboxImg.src   = item.src;
  lightboxImg.alt   = item.alt;
  lightboxCategory.textContent = item.category;
  lightboxBrand.textContent    = item.brand;
  lightboxTitle.textContent    = item.title;
}

// Enable / disable prev & next arrows based on current index and list length
function updateLightboxArrows() {
  if (!lightboxPrev || !lightboxNext) return;

  if (lightboxIndex <= 0) {
    lightboxPrev.setAttribute('disabled', '');
    lightboxPrev.setAttribute('aria-disabled', 'true');
  } else {
    lightboxPrev.removeAttribute('disabled');
    lightboxPrev.setAttribute('aria-disabled', 'false');
  }

  if (lightboxIndex >= lightboxFilteredList.length - 1) {
    lightboxNext.setAttribute('disabled', '');
    lightboxNext.setAttribute('aria-disabled', 'true');
  } else {
    lightboxNext.removeAttribute('disabled');
    lightboxNext.setAttribute('aria-disabled', 'false');
  }
}

function openLightbox(item) {
  pauseAutoScroll();

  // Snapshot the current filtered list at the moment the lightbox opens
  lightboxFilteredList = getFilteredItems(currentCategory);
  lightboxIndex = lightboxFilteredList.findIndex(i => i.id === item.id);
  if (lightboxIndex === -1) lightboxIndex = 0;

  populateLightbox(lightboxFilteredList[lightboxIndex]);
  updateLightboxArrows();

  lightboxModal.classList.add('active');
  lightboxModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function navigateLightbox(direction) {
  const nextIndex = lightboxIndex + direction;
  if (nextIndex < 0 || nextIndex >= lightboxFilteredList.length) return;
  lightboxIndex = nextIndex;
  populateLightbox(lightboxFilteredList[lightboxIndex]);
  updateLightboxArrows();
}

function closeLightbox() {
  lightboxModal.classList.remove('active');
  lightboxModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  resetAutoScrollTimer();
}

lightboxClose?.addEventListener('click', closeLightbox);
lightboxBackdrop?.addEventListener('click', closeLightbox);
lightboxPrev?.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox(-1); });
lightboxNext?.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox(+1); });

document.addEventListener('keydown', (e) => {
  if (!lightboxModal.classList.contains('active')) return;
  if (e.key === 'Escape')      { closeLightbox(); }
  else if (e.key === 'ArrowLeft')  { navigateLightbox(-1); }
  else if (e.key === 'ArrowRight') { navigateLightbox(+1); }
});

// 9. MOBILE HAMBURGER MENU OVERLAY
hamburgerBtn?.addEventListener('click', () => {
  const isOpen = hamburgerBtn.classList.toggle('open');
  mobileMenuOverlay.classList.toggle('active', isOpen);
  hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  mobileMenuOverlay.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
});

mobileMenuOverlay?.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburgerBtn.classList.remove('open');
    mobileMenuOverlay.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileMenuOverlay.setAttribute('aria-hidden', 'true');
  });
});

// 10. MOBILE FIXED BACK TO TOP BUTTON
mobileBackToTop?.addEventListener('click', () => {
  galleryViewport.scrollTo({ top: 0, behavior: 'smooth' });
  if (currentCategory === 'ALL') {
    fixedCreativeDesigner?.classList.remove('hidden');
  }
});

// 11. INITIALIZE ON DOM READY
document.addEventListener('DOMContentLoaded', () => {
  renderGallery('ALL');
  resetAutoScrollTimer();
});

// Handle window resize cleanly
window.addEventListener('resize', () => {
  renderGallery(currentCategory);
  updateMobileIntroTypography();
});
