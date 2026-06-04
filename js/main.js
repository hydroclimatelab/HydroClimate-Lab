document.addEventListener('DOMContentLoaded', () => {
  const d = LAB_DATA;

  // ── NAV ────────────────────────────────────────────────
  const navInitials = document.getElementById('nav-initials');
  if (navInitials) navInitials.textContent = d.lab.logo_initials;
  document.getElementById('nav-labname').textContent = d.lab.name;
  document.getElementById('nav-institute').textContent = d.lab.institute;
  document.title = `${d.lab.name} — ${d.lab.institute}`;

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  window.addEventListener('scroll', () => document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40));

  // ── HERO ───────────────────────────────────────────────
  document.getElementById('hero-dept').textContent = d.lab.institute + ' · ' + d.lab.department;
  document.getElementById('hero-tagline').textContent = d.lab.tagline;
  document.getElementById('hero-title').innerHTML = `${d.lab.name}<br/><span>Research</span> Lab`;
  document.querySelector('.hero-scroll').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({behavior:'smooth'});
  });

  // ── STATS ──────────────────────────────────────────────
  const statsBar = document.getElementById('stats-bar');
  d.stats.forEach(s => {
    statsBar.innerHTML += `<div class="stat-item"><div class="stat-num">${s.number}</div><div class="stat-label">${s.label}</div></div>`;
  });

  // ── ABOUT / PI ─────────────────────────────────────────
  document.getElementById('about-text').innerHTML = d.pi.bio;
  document.getElementById('prof-name').textContent = d.pi.name;
  document.getElementById('prof-title-wrap').innerHTML = `<span class="prof-title-text">${d.pi.title}</span>`;
  document.getElementById('prof-office').textContent = d.pi.office;
  document.getElementById('prof-degree').textContent = d.pi.degree;
  document.getElementById('prof-email').textContent = d.pi.email;

  const photoWrap = document.getElementById('prof-photo-wrap');
  if (d.pi.photo) {
    const img = document.createElement('img');
    img.src = d.pi.photo; img.alt = d.pi.name; img.className = 'prof-photo';
    img.onerror = () => img.replaceWith(makeAvatar('AP', '#1a4a8a', 'prof-avatar'));
    photoWrap.appendChild(img);
  } else {
    photoWrap.appendChild(makeAvatar('AP', '#1a4a8a', 'prof-avatar'));
  }

  const socialLinks = document.getElementById('prof-social-links');
  if (d.pi.google_scholar) socialLinks.innerHTML += `<a href="${d.pi.google_scholar}" target="_blank">Google Scholar</a>`;
  if (d.pi.researchgate)   socialLinks.innerHTML += `<a href="${d.pi.researchgate}" target="_blank">ResearchGate</a>`;
  if (d.pi.orcid)          socialLinks.innerHTML += `<a href="${d.pi.orcid}" target="_blank">ORCID</a>`;
  if (d.pi.iitpage)        socialLinks.innerHTML += `<a href="${d.pi.iitpage}" target="_blank">IIT KGP Page</a>`;
  if (d.pi.cv_link)        socialLinks.innerHTML += `<a href="${d.pi.cv_link}" target="_blank">Download CV</a>`;

  const piLinks = document.getElementById('pi-links');
  if (d.pi.google_scholar) piLinks.innerHTML += `<a href="${d.pi.google_scholar}" target="_blank">📚 Google Scholar (2000+ Citations)</a>`;
  if (d.pi.researchgate)   piLinks.innerHTML += `<a href="${d.pi.researchgate}" target="_blank">🔬 ResearchGate</a>`;
  if (d.pi.iitpage)        piLinks.innerHTML += `<a href="${d.pi.iitpage}" target="_blank">🏛 IIT KGP Profile</a>`;

  // ── RESEARCH ───────────────────────────────────────────
  const rg = document.getElementById('research-grid');
  d.research.forEach(r => {
    rg.innerHTML += `<div class="research-card">
      <div class="research-icon" style="background:${r.color}">${r.icon}</div>
      <h3>${r.title}</h3><p>${r.desc}</p>
      <span class="tag">${r.tag}</span>
    </div>`;
  });

  // ── PUBLICATIONS with filter ───────────────────────────
//const pl = document.getElementById('pub-list');

//if (pl) {

  //d.publications.forEach(p => {
   // ...
  //});

//}

  // ── NEWS ───────────────────────────────────────────────
  const nl = document.getElementById('news-list');
  d.news.forEach(n => {
    nl.innerHTML += `<div class="news-item">
      <span class="news-date">${n.date}</span>
      <div class="news-text">${n.text}${n.link ? `<a href="${n.link}" target="_blank">Read more →</a>` : ''}</div>
    </div>`;
  });

  // ── TEAM ───────────────────────────────────────────────
  const tg = document.getElementById('team-grid');
  if (tg) {
    d.team.slice(0, 4).forEach(m => {
      let photoHtml;
      if (m.photo) {
        photoHtml = `<img src="${m.photo}" alt="${m.name}" class="team-photo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="team-avatar" style="display:none;background:linear-gradient(135deg,${m.color},${m.color}aa)">${m.initials}</div>`;
      } else {
        photoHtml = `<div class="team-avatar" style="background:linear-gradient(135deg,${m.color},${m.color}aa)">${m.initials}</div>`;
      }
      tg.innerHTML += `<a href="member.html?id=${m.id}" class="team-card">
        ${photoHtml}
        <div class="team-name">${m.name}</div>
        <div class="team-role">${m.role}</div>
        <div class="team-research">${m.research}</div>
        <div class="team-view-profile">View Profile →</div>
      </a>`;
    });
    tg.innerHTML += `<a href="team.html#join" class="team-card recruit">
      <div class="recruit-plus">＋</div>
      <div class="team-role" style="text-align:center;line-height:1.6">Join our team!<br/><span style="color:var(--sky);font-size:12px;font-weight:600;">Apply here →</span></div>
    </a>`;
  }

  // ── GALLERY ────────────────────────────────────────────
  const gg = document.getElementById('gallery-grid');
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCap = document.getElementById('lb-caption');

  d.gallery.forEach(g => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    const img = document.createElement('img');
    img.src = g.src; img.alt = g.caption; img.loading = 'lazy';
    img.onerror = () => {
      item.innerHTML = `<div class="gallery-placeholder">📷<span>${g.caption}</span></div>`;
    };
    const overlay = document.createElement('div');
    overlay.className = 'gallery-overlay';
    overlay.innerHTML = `<div class="gallery-caption">${g.caption}</div>`;
    item.appendChild(img); item.appendChild(overlay);
    item.addEventListener('click', () => {
      if (img.naturalWidth > 0) { lbImg.src = g.src; lbCap.textContent = g.caption; lb.classList.add('open'); }
    });
    gg.appendChild(item);
  });
  document.getElementById('lb-close').addEventListener('click', () => lb.classList.remove('open'));
  lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });


  // ── CONTACT ────────────────────────────────────────────
  const ci = document.getElementById('contact-info');
  const c = d.contact;
  ci.innerHTML = `
    <div class="contact-row"><div class="contact-icon">📍</div>
      <div class="contact-detail"><h4>Address</h4><p>${c.address}</p></div></div>
    <div class="contact-row"><div class="contact-icon">📧</div>
      <div class="contact-detail"><h4>Email</h4>
        <p><a href="mailto:${c.email_pi}">${c.email_pi}</a></p></div></div>
    <div class="contact-row"><div class="contact-icon">🕐</div>
      <div class="contact-detail"><h4>Office Hours</h4><p>${c.office_hours}</p></div></div>
    <div class="contact-row"><div class="contact-icon">🗺</div>
      <div class="contact-detail"><h4>Location</h4>
        <p><a href="${c.google_maps}" target="_blank">Open in Google Maps →</a></p></div></div>
    <div class="contact-row"><div class="contact-icon">🔬</div>
      <div class="contact-detail"><h4>For Students & Postdocs</h4>
        <p>PhD, M.Tech, and Postdoc positions available in hydroclimatology, AI-ML, and remote sensing. Eligible for ANRF National Postdoc Fellowship.</p></div></div>`;

  // Google Form embed / link
  const gfArea = document.getElementById('google-form-embed');
  if (c.google_form && !c.google_form.includes('YOUR_FORM_ID')) {
    gfArea.innerHTML = `
      <a href="${c.google_form}" target="_blank" class="google-form-btn">
        <span class="gf-icon">📋</span>Open Contact / Application Form
      </a>
      <p class="google-form-note">Opens Google Form in a new tab.<br/>
        For quick inquiries also email: <a href="mailto:${c.email_pi}">${c.email_pi}</a></p>`;
  } else {
    gfArea.innerHTML = `
      <a class="google-form-btn" style="opacity:.6;cursor:default">
        <span class="gf-icon">📋</span>Contact Form (Coming Soon)
      </a>
      <p class="google-form-note">⚠ Add your Google Form link in <code>js/data.js</code> under <code>contact.google_form</code>.<br/>
        For now, email directly: <a href="mailto:${c.email_pi}">${c.email_pi}</a></p>`;
  }

  // ── FOOTER ─────────────────────────────────────────────
  document.getElementById('footer-labname').textContent = d.lab.name;
  document.getElementById('footer-dept').textContent = d.lab.department;
  document.getElementById('footer-text').innerHTML =
    `© ${new Date().getFullYear()} ${d.lab.name}, ${d.lab.institute}. All rights reserved.`;

  // ── SMOOTH SCROLL ──────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); window.scrollTo({top: target.offsetTop - 70, behavior:'smooth'}); }
    });
  });

});

function makeAvatar(initials, color, className) {
  const el = document.createElement('div');
  el.className = className;
  el.style.background = `linear-gradient(135deg, ${color}, ${color}aa)`;
  el.textContent = initials;
  return el;
}
