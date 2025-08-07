document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('nav a');

    // Moments data with image lists
    const moments = [
        {
            title: 'The Beginning of Us',
            desc: 'We started as nothing more than <b>Soel Mama and Sananie</b>, sharing laughs and simple moments. There was an easy, natural rhythm between us. It wasn\'t a sudden spark, but a gentle warmth that grew steadily, and with every shared laugh and lingering look, my heart grew a little fonder.',
            images: [
                ['images/1beginning/initialselfie.jpeg', 'When Hair Becomes a Canvas'],
                ['images/1beginning/bikeselfie.jpeg', 'The bike ride'],
                ['images/1beginning/laptopselfie.jpeg', 'Laptop surfing for nothing'],
                ['images/1beginning/daarluh.jpeg', 'They decorated my life'],
                ['images/1beginning/randomselfie.jpeg', 'The day we walked together'],
                ['images/1beginning/dosaselfie.jpeg', 'You made me love dosas'],
                ['images/1beginning/funselfie.jpeg', 'fun times'],
                ['images/1beginning/staring.jpeg', 'lost in thought'],
                ['images/1beginning/staringjoel.jpeg', 'Jananie is staring at Joel'],
            ]
        },
        {
            title: 'When Hope Found Its Voice',
            desc: 'It was a beautiful secret we kept from ourselves until we couldn\'t anymore. I\'ll never forget the day I asked you. My heart was a frantic drum against my ribs, a mix of pure nervousness and exhilarating excitement. It was a moment suspended in time, filled with unspoken hope, and with your \"<b>Yes</b>,\" everything changed. That was the day our story truly began—the start of a beautiful journey together.',
            images: [
                ['images/2itsyes/myask.jpeg','Brave enough to ask'],
                ['images/2itsyes/sketched.jpeg','This made me fall for you'],
                ['images/2itsyes/ask.jpeg','We both knew it was coming'],
                ['images/2itsyes/firstilys.jpeg','First "I love you"'],
                ['images/2itsyes/firstda.jpeg','First "Da"'],
                ['images/2itsyes/lovemessages.jpeg','Love yous that made us smile'],
                ['images/2itsyes/expressing.jpeg','Expressing feelings'],
                ['images/2itsyes/forjoel.jpeg','Joel\'s Jananie'],
            ]
        },
        {
            title: 'The Unfolding Story',
            desc: 'It began with simple chats and conversations that beautifully bridged the distance between us, evolving from words on a screen to voices in the air. What started as a long-distance connection soon blossomed into frequent, cherished meetings. Each shared story, every knowing glance, and especially the many, many laughs we\'ve had, are building something truly beautiful. It\'s in these everyday moments – the easy banter, the comfortable silences, the sheer joy of just being together – that love isn\'t just growing; it\'s deeply taking root, surprising us with its quiet strength.',
            images: [
                ['images/3rooted/1firstphoto.jpeg','The very first photo of you sent to Joel'],
                ['images/3rooted/lovely.jpeg','Took selfies together when no one was watching'],
                ['images/3rooted/bikeride.jpeg','This ride was so special, Laaaa...'],
                ['images/3rooted/railwaytbm.jpeg','Leaving Joel\'s place after a long day'],
                ['images/3rooted/home.jpg','After train travel, we were home'],
                ['images/3rooted/deco.jpeg','Joel\'s Flowery Crown, Jananie\'s Love'],
                ['images/3rooted/hotel.jpeg','We were this 👌 close'],
                ['images/3rooted/outing.jpeg','We went out for the first time'],
            ]
        },
        {
            title: 'More Than Just Visits',
            desc: 'The spaces between calls and texts began filling with the happy reality of frequent meetings. Our dates weren\'t about grand journeys, but about finding joy in the everyday: the shared treats at snack shop, the quiet moments of peace at the temple, and the breezy freedom of bike rides. These simple outings wove our lives together more closely, building a richer story through countless smiles and comfortable silences.',
            images: [
                ['images/4bridging/firstouting.jpeg','The first outing together after they knew'],
                ['images/4bridging/usintemple2.jpeg','The morning before college'],
                ['images/4bridging/frozen.jpeg','Jananie is frozen'],
                ['images/4bridging/snackshop.jpeg','Lunch at the snack shop'],
                ['images/4bridging/theatre.jpeg','Jananie was more perfect than a movie'],
                ['images/4bridging/triedtohide.jpeg','Tried to hide but got caught on camera'],
                ['images/4bridging/birdpark.jpg','Bird park visit with my Thangamayil'],
                ['images/4bridging/unplanned.jpeg','Unplanned but perfect'],
                ['images/4bridging/mostrecentmeeting.jpeg','The most recent meeting'],
            ]
        },
        {
            title: 'Uncovering Our Core',
            desc: 'Our private time, just the two of us, felt like a special, quiet place where the rest of the world faded away. In those close moments, with our sweet romance, soft touches, and our own unique scent, we went deeper. We didn\'t just find; we truly uncovered who we are at our core – our shared dreams, the things we understood without words, and the deep love that connects our souls forever.',
            images: [
                ['images/5kisses/unforgettable.jpg','The unforgettable kiss that built our bond forever'],
                ['images/5kisses/magical.jpg','The magical kiss that took us to another world'],
                ['images/5kisses/sweet.jpg','The sweet kiss which should be framed'],
                ['images/5kisses/playful.jpg','The playful kiss that made us laugh'],
                ['images/5kisses/tender.jpg','The tender kiss that brought us closer'],
                ['images/5kisses/hot.jpg', 'The hot kiss that made us blush'],
                ['images/5kisses/lust.jpg','The lustful kiss that made us crave more'],
            ]
        },
        {
            title: 'A Life Together',
            desc: 'I love you with all my heart and I want to <b>thank you</b> for being the undeniable light of my life. Each new day with you is a blessing beyond measure, a gift I cherish. I\'m filled with such excitement as I look forward to everything the future holds for us—the countless memories we\'ll create, the dreams we\'ll chase hand-in-hand, and the beautiful life we\'ll continue to build together.',
            images: [
                ['images/6dream/heldhands.jpeg','I will hold your hand forever'],
            ]
        },
        {
            title: '',
            desc: '',
            images: [
            ]
        }
    ];

    function renderHome() {
        mainContent.innerHTML = `
            <div class="hb-wish">Wishing you a day filled with laughter, love, and all your favorite things.</div>
            <div class="wordart-container">
                <iframe loading="lazy" style="width:100%; height: 100%; border: none" src="https://cdn.wordart.com/iframe/0dkinpw84obd"></iframe>
            </div>
        `;
        // Always show header and footer on home
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        if (header) header.style.display = '';
        if (footer) footer.style.display = '';
    }

    function renderMoment(idx) {

        const moment = moments[idx];
        // If moment is empty (title, desc, images all empty), show nothing or a minimal placeholder
        if (
            (!moment.title || moment.title.trim() === '') &&
            (!moment.desc || moment.desc.trim() === '') &&
            (!moment.images || moment.images.length === 0)
        ) {
            mainContent.innerHTML = '';
            // Hide header and footer
            const header = document.querySelector('header');
            const footer = document.querySelector('footer');
            if (header) header.style.display = 'none';
            if (footer) footer.style.display = 'none';
            return;
        } else {
            // Show header and footer if hidden
            const header = document.querySelector('header');
            const footer = document.querySelector('footer');
            if (header) header.style.display = '';
            if (footer) footer.style.display = '';
        }

        // Support images as [src, title] or just src
        const images = moment.images;
        function parseImage(img) {
            if (Array.isArray(img)) {
                return { src: img[0], title: img[1] || '' };
            } else if (typeof img === 'string') {
                return { src: img, title: '' };
            }
            return { src: '', title: '' };
        }
        const mainImageObj = parseImage(images[0]);
        const mainImageSrc = mainImageObj.src;
        const mainImageTitle = mainImageObj.title;
        const circleImages = images.slice(1);

        const alignClass = idx % 2 === 0 ? 'moment-left' : 'moment-right';

        // Circles for image preview
        let circlesHtml = `<div class="moment-circles">`;
        circleImages.forEach((img, i) => {
            const imgObj = parseImage(img);
            circlesHtml += `<span class="circle" data-img="${imgObj.src}" data-title="${imgObj.title.replace(/"/g, '&quot;')}"></span>`;
        });
        circlesHtml += `</div>`;

        // Read more logic for desc
        const maxChars = 220;
        let descHtml = '';
        if (moment.desc.length > maxChars) {
            const shortDesc = moment.desc.slice(0, maxChars);
            descHtml = `<span class="desc-short">${shortDesc}</span><span class="desc-full" style="display:none;">${moment.desc}</span> <button class="read-more-btn" style="background:none;border:none;color:#ad1457;font-weight:bold;cursor:pointer;">...</button>`;
        } else {
            descHtml = moment.desc;
        }

        // Main moment image
        const mainImage = `<img src="${mainImageSrc}" alt="${moment.title}" class="moment-img ${alignClass === 'moment-left' ? 'moment-img-left' : 'moment-img-right'}" data-title="${mainImageTitle.replace(/"/g, '&quot;')}">`;

        mainContent.innerHTML = `
            <div class="moment ${alignClass}">
                ${mainImage}
                <div class="moment-text ${alignClass === 'moment-left' ? 'moment-text-left' : 'moment-text-right'}">
                    <h2 class="moment-title">${moment.title}</h2>
                    <p class="moment-desc">${descHtml}</p>
                    ${circlesHtml}
                </div>
            </div>
        `;

        setTimeout(() => {
            const momentDiv = mainContent.querySelector('.moment');
            if (momentDiv) momentDiv.classList.add('moment-visible');
            // Read more button logic
            const readMoreBtn = mainContent.querySelector('.read-more-btn');
            if (readMoreBtn) {
                readMoreBtn.addEventListener('click', function() {
                    mainContent.querySelector('.desc-short').style.display = 'none';
                    mainContent.querySelector('.desc-full').style.display = 'inline';
                    readMoreBtn.style.display = 'none';
                });
            }
        }, 10);

        // Circle hover/click preview logic with title overlay
        const circles = mainContent.querySelectorAll('.circle');
        circles.forEach(circle => {
            // Remove any previous click event listeners if re-rendering
            circle.onclick = null;

            function showCirclePreview(e, isClick) {
                e.stopPropagation();
                document.querySelectorAll('.circle-img-preview').forEach(p => p.remove());
                let preview = document.createElement('div');
                preview.className = 'circle-img-preview show';
                const imgSrc = circle.dataset.img;
                const imgTitle = circle.dataset.title || '';
                preview.innerHTML = `
                    <img src="${imgSrc}" alt="Preview" />
                    ${imgTitle ? `<div class="img-popup-title">${imgTitle}</div>` : ''}
                `;
                circle.closest('.moment-circles').appendChild(preview);

                // Position preview exactly above the hovered/clicked circle
                preview.style.position = 'absolute';
                preview.style.left = `${circle.offsetLeft + circle.offsetWidth / 2}px`;
                preview.style.top = `${circle.offsetTop - 16}px`;
                preview.style.transform = 'translate(-50%, -100%)';

                preview.querySelector('img').addEventListener('click', function(ev) {
                    ev.stopPropagation();
                    showFullscreenImage(imgSrc, imgTitle);
                });

                if (isClick) {
                    setTimeout(() => {
                        function outsideHandler(ev) {
                            if (!preview.contains(ev.target) && ev.target !== circle) {
                                preview.remove();
                                document.removeEventListener('click', outsideHandler);
                            }
                        }
                        document.addEventListener('click', outsideHandler);
                    }, 10);
                } else {
                    circle.addEventListener('mouseleave', function handler() {
                        preview.classList.remove('show');
                        setTimeout(() => preview.remove(), 350);
                        circle.removeEventListener('mouseleave', handler);
                    });
                }
            }

            circle.addEventListener('mouseenter', function(e) { showCirclePreview(e, false); });
            circle.addEventListener('click', function(e) { showCirclePreview(e, true); });
        });

        // Main image popup logic (left/right effect preserved)
        const mainImg = mainContent.querySelector('.moment-img');
        if (mainImg) {
            mainImg.addEventListener('click', function(e) {
                e.stopPropagation();
                showFullscreenImage(mainImageSrc, mainImageTitle);
            });
        }

        // (Remove duplicate/old preview logic. Only use the new logic above that uses data-title for correct title display.)
    }

    // Navigation
    let heartsShown = false;
    const hearts = document.querySelectorAll('.heart');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page === 'home') {
                renderHome();
            } else {
                renderMoment(Number(page.replace('moment', '')) - 1);
            }
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Show hearts on first navigation click
            if (!heartsShown) {
                hearts.forEach(h => h.classList.remove('hearts-hidden'));
                heartsShown = true;
            }

            // --- CLOSE MOBILE NAVBAR IF OPEN ---
            const navbarCollapse = document.getElementById('navbarNavMobile');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    // Typed.js effect for header
    const typed = document.querySelector('.typed');
    if (typed && typed.tagName === 'SPAN') { // Only run Typed.js if it's a <span>
        let typed_strings = typed.getAttribute('data-typed-items');
        typed_strings = typed_strings.split(',');
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
        });
    }

    // Initial render
    renderHome();

    // Hide desktop notice after 4 seconds on mobile
    const desktopNotice = document.querySelector('.desktop-notice');
    if (desktopNotice && window.innerWidth <= 600) {
        // Add transition for smooth scroll up
        desktopNotice.style.transition = 'opacity 0.4s, transform 0.4s';
        setTimeout(() => {
            desktopNotice.style.opacity = '0';
            desktopNotice.style.transform = 'translateY(-40px)';
            setTimeout(() => {
                desktopNotice.style.display = 'none';
            }, 400);
        }, 2500);
    }

    function enableMobileCirclePreviewClose() {
        // Only run on mobile
        if (window.matchMedia("(max-width: 700px)").matches) {
            document.querySelectorAll('.circle').forEach(circle => {
                let preview;
                circle.addEventListener('touchstart', function(e) {
                    e.stopPropagation();
                    // Remove any existing preview
                    document.querySelectorAll('.circle-img-preview').forEach(p => p.remove());
                    // Create and show preview
                    preview = document.createElement('div');
                    preview.className = 'circle-img-preview show';
                    preview.innerHTML = `<img src="${circle.dataset.img}" alt="Preview" />`;
                    // Append to .moment-circles for correct positioning
                    circle.closest('.moment-circles').appendChild(preview);
                });

                // Close preview when tapping anywhere else
                document.body.addEventListener('touchstart', function(e) {
                    if (preview && !circle.contains(e.target)) {
                        preview.remove();
                        preview = null;
                    }
                }, { passive: true });
            });
        }
    }

    // Call this after rendering moments on mobile
    enableMobileCirclePreviewClose();
});


function showFullscreenImage(src, title = '') {
    // Remove any existing popup
    document.querySelectorAll('.image-popup-overlay').forEach(p => p.remove());
    // Create popup
    const popup = document.createElement('div');
    popup.className = 'image-popup-overlay show';
    popup.innerHTML = `
        <div class="image-popup">
            <img src="${src}" alt="${title}" />
            ${title ? `<div class="img-popup-title">${title}</div>` : ''}
        </div>
    `;
    document.body.appendChild(popup);
    document.body.classList.add('popup-blur');
    // Click outside image closes popup
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.classList.remove('show');
            document.body.classList.remove('popup-blur');
            setTimeout(() => popup.remove(), 350);
        }
    });
    // Escape key closes popup
    document.addEventListener('keydown', function escHandler(ev) {
        if (ev.key === "Escape") {
            popup.classList.remove('show');
            document.body.classList.remove('popup-blur');
            setTimeout(() => popup.remove(), 350);
            document.removeEventListener('keydown', escHandler);
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  const profileIcon = document.getElementById('sidebar-profile-icon');
  const sidebarLinks = document.querySelectorAll('#sidebar-links .nav-link');

  function updateSidebarLinkText() {
    sidebarLinks.forEach(link => {
      const textSpan = link.querySelector('.sidebar-link-text');
      if (sidebar.classList.contains('shrinked')) {
        textSpan.textContent = '';
      } else {
        textSpan.textContent = link.getAttribute('title') || '';
      }
    });
  }

  if (profileIcon) {
    profileIcon.addEventListener('click', function () {
      sidebar.classList.toggle('shrinked');
      document.body.classList.toggle('sidebar-shrinked');
      updateSidebarLinkText();
    });
  }

  // Initialize sidebar link text on load
  updateSidebarLinkText();
});

// if (prompt("Love you sollunga thangam:") !== "loveyoujoel") {
//     document.body.innerHTML = `
//         <div style="
//             height:100vh;
//             width:100vw;
//             display:flex;
//             align-items:center;
//             justify-content:center;
//             background:#ff80ab;
//         ">
//             <h1 style="color:#d50000;text-align:center;font-size:2rem;">
//                 Correct a type pannunga chellakutty
//             </h1>
//         </div>
//     `;
//     throw new Error("Access denied");
// }



