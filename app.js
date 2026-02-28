const IMAGES = {
  'chellah':      'images/chellah.jpg',
  'hassan-tower': 'images/hassan-tower.jpg',
  'kasbah':       'images/kasbah.jpg',
  'flouka':       'images/flouka.jpg',
  'dinarjat':     'images/dinarjat.jpg',
  'sufra':        'images/sufra.jpg',
  'museum':       'images/museum.jpg',
  'villa':        'images/villa.jpg',
  'medina':       'images/medina.jpg',
  'kasr':         'images/kasr.jpg',
  'beach':        'images/beach.jpg',
};

const TRIP = {
  destination: 'Rabat Morocco',
  subtitle: 'Alex + Anna',
  dates: '11 – 15 March 2026',
  days: [
    {
      day: 1,
      date: 'Wednesday 11 March',
      title: 'Arrival & Explore',
      items: [
        { time: '10:35',       activity: 'Land at RBA',            detail: 'Arrive Rabat–Salé Airport. Taxi or Careem to Airbnb on Rue Jabli (~15–20 min).' },
        { time: '11:30–1:00', activity: 'Settle in and Stock up',    detail: 'Drop bags, walk to Carrefour – bread, eggs, fruit, coffee, snacks.' },
        { time: '1:00–3:00',  activity: 'Explore The Area',        detail: "Wander around St Peter's Cathedral (built 1919) and the local area." },
        { time: '3:00–5:30',  activity: 'Potential Nap Time',      detail: 'Relax and recharge, or keep exploring.' },
        { time: '~6:45pm',    activity: 'Iftar',                   detail: 'Head toward the medina as sunset approaches.' },
        { time: '7:30–9:00',  activity: 'Dinner at Sufra',         detail: '19 Av. Moulay Rachid. Palestinian – falafel and knafeh for dessert. Small place, book ahead. The owners speak English.', imageKey: 'sufra', mapsQuery: 'Sufra Restaurant Rabat Morocco' },
        { time: '9:00–11:00', activity: 'Evening Walk',            detail: 'Stroll the medina. Try mint tea, chebakia, msemen from street stalls.', imageKey: 'medina', mapsQuery: 'Medina Rabat Morocco' }
      ],
    },
    {
      day: 2,
      date: 'Thursday 12 March',
      title: 'History, Ruins & Traditional Moroccan',
      items: [
        { time: '9:00–10:00',  activity: 'Breakfast at Home',         detail: 'Leisurely morning.' },
        { time: '10:30–12:30', activity: 'Chellah',                   detail: 'Roman ruins from 40 AD layered with a 14th-century Islamic necropolis, overgrown gardens, nesting storks. Audio guide recommended. Entry ~70 MAD.', imageKey: 'chellah', mapsQuery: 'Chellah Rabat Morocco' },
        { time: '12:30–2:00',  activity: 'Hassan Tower & Mausoleum',  detail: 'Unfinished 12th-century minaret with 200 stone columns. Next door: Mausoleum of Mohammed V – tilework and gilded ceiling. Free entry.', imageKey: 'hassan-tower', mapsQuery: 'Hassan Tower Rabat Morocco' },
        { time: '2:00–4:00',   activity: 'Lunch & Rest',              detail: 'Back home. Have lunch. Recharge.' },
        { time: '4:30–6:30',   activity: 'Medina & Souks',            detail: 'Browse Rue des Consuls for cool stuff.', mapsQuery: 'Rue des Consuls Rabat Morocco' },
        { time: '~6:45pm',     activity: 'Iftar',                     detail: 'Call to prayer.' },
        { time: '7:30–9:30',   activity: 'Dinner at Kasr Al Assil',   detail: '39 Rue Youssef Ibn Tachfine. Traditional Moroccan – Royal Tagine, rfissa with chicken, Jawhara dessert. Closed Sundays; couscous Fridays only (Can switch days).', imageKey: 'kasr', mapsQuery: 'Kasr Al Assil Restaurant Rabat Morocco' },
        { time: '10:00+',      activity: 'Night Stroll',              detail: 'Walk along the river or through the Ville Nouvelle.' }
      ],
    },
    {
      day: 3,
      date: 'Friday 13 March',
      title: 'Beach, Boats & Kufta',
      items: [
        { time: '9:00–10:00',  activity: 'Slow Start',                  detail: 'Relaxed breakfast at the Airbnb.' },
        { time: '11:00–1:00',  activity: 'Kasbah des Oudayas',          detail: '12th-century fortress above the river mouth. Blue-and-white alleyways, Andalusian Gardens, views over the Atlantic and across to Salé. Walk down to the beach.', imageKey: 'kasbah', mapsQuery: 'Kasbah des Oudayas Rabat Morocco' },
        { time: '1:00–2:30',   activity: 'Flouka to Salé',              detail: 'Take a rowing boat across the Bouregreg River to Salé – a few minutes on the water with views both ways. Just a few dirhams. Explore Salé medina.', imageKey: 'flouka', mapsQuery: 'Bab Mrissa Sale Morocco' },
        { time: '2:30–4:30',   activity: 'Rest & Recharge',             detail: 'Tram back. Lunch at home.' },
        { time: '5:00–6:30',   activity: 'Mohammed VI Museum',          detail: 'Museum of Modern and Contemporary Art, 200+ modern Moroccan artists.', imageKey: 'museum', mapsQuery: 'Mohammed VI Museum Modern Art Rabat Morocco' },
        { time: '~6:45pm',     activity: 'Iftar',                       detail: '' },
        { time: '7:30–9:30',   activity: 'Dinner at Zain Al Abdeen',    detail: 'Rue Souika, inside the medina. A local spot. Cheap and satisfying.', mapsQuery: 'Zain Al Abdeen Kufta Rabat Morocco' },
        { time: '10:00+',      activity: 'Night Market',                detail: 'Friday nights are the liveliest. Food stalls, fresh juice, roasted nuts, chebakia.' }
      ],
    },
    {
      day: 4,
      date: 'Saturday 14 March',
      title: 'Art, Coast & a Mysterious Evening',
      items: [
        { time: '9:30–10:30',  activity: 'Leisurely Breakfast',     detail: 'Penultimate day. No rush.' },
        { time: '10:30–1:00',  activity: 'Villa des Arts',           detail: 'Art nouveau building with rotating contemporary art exhibitions. Peaceful gardens. Very cheap entry. Close to the Airbnb.', imageKey: 'villa', mapsQuery: 'Villa des Arts Rabat Morocco' },
        { time: '1:00–3:00',   activity: 'Lunch & Relax',           detail: 'Pick up ingredients and cook something together at the Airbnb.' },
        { time: '3:00–5:30',   activity: 'Hammam at Dar El Kebira',  detail: 'A 17th-century riad in the medina offering a traditional hammam experience – steam, black soap scrub, and relaxation. Website: dar-el-kebira.com · Book in advance by email or phone – contact details on their website.', mapsQuery: 'Dar El Kebira Rabat Morocco' },
        { time: '7:30–9:30',   activity: 'Dinner at Dinarjat',      detail: "Hidden behind an unmarked heavy wooden door on Boulevard el Alou – a 17th-century riad. Live music in the courtyard, Moroccan cuisine (lamb tagine tfaya, veal jarret, pastilla). Book ahead – essential.", imageKey: 'dinarjat', mapsQuery: 'Dinarjat Restaurant Rabat Morocco' },
        { time: '10:00+',      activity: 'Last Night Out',           detail: "Walk back through the medina's alleyways after dinner." }
      ],
    },
    {
      day: 5,
      date: 'Sunday 15 March',
      title: 'Final Morning & Departure',
      items: [
        { time: '9:00–10:00', activity: 'Last Breakfast',    detail: 'Pack up and enjoy a final morning in the Airbnb.' },
        { time: '11:00',      activity: 'Head to Airport',   detail: 'Taxi or Careem to Rabat–Salé Airport (RBA). 15–20 minutes from central Rabat. Small easy airport – 1.5 hours before departure is plenty.' },
        { time: '12:40',      activity: 'Fly Home ✈️',       detail: 'RK1712 to Manchester. Arrive 16:00.' }
      ],
    }
  ],
  restaurants: [
    { name: 'Sufra',                type: 'Palestinian / Levantine', address: '19 Av. Moulay Rachid',        notes: 'Closed Mon. Book ahead. English spoken.',     mapsQuery: 'Sufra Restaurant Rabat Morocco' },
    { name: 'Kasr Al Assil',        type: 'Traditional Moroccan',    address: '39 Rue Youssef Ibn Tachfine', notes: 'Closed Sun. Couscous Fridays only.',           mapsQuery: 'Kasr Al Assil Restaurant Rabat Morocco' },
    { name: 'Zain Al Abdeen Kufta', type: 'Kufta specialist',        address: 'Rue Souika, medina',          notes: 'Simple local spot. Opens 10am.',               mapsQuery: 'Zain Al Abdeen Kufta Rabat Morocco' },
    { name: 'Dinarjat',             type: 'Upscale Moroccan',        address: 'Blvd el Alou, medina',        notes: 'Book essential. Live music. ~300–400 MAD/pp.', mapsQuery: 'Dinarjat Restaurant Rabat Morocco' }
  ],
  sights: [
    { name: 'Kasbah des Oudayas',                   info: '12th-century fortress · blue-and-white streets · Andalusian Gardens · Free', mapsQuery: 'Kasbah des Oudayas Rabat Morocco' },
    { name: 'Chellah',                              info: 'Roman ruins + Islamic necropolis · storks · ~70 MAD entry',                   mapsQuery: 'Chellah Rabat Morocco' },
    { name: 'Hassan Tower & Mausoleum Mohammed V',  info: 'Iconic 12th-century minaret + royal tomb · Free',                            mapsQuery: 'Hassan Tower Rabat Morocco' },
    { name: 'Rabat Medina & Rue des Consuls',       info: 'Souks, rugs, leather, spices · UNESCO listed',                               mapsQuery: 'Medina Rabat Morocco' },
    { name: 'Mohammed VI Museum of Modern Art',     info: '200+ modern Moroccan artists',                                               mapsQuery: 'Mohammed VI Museum Modern Art Rabat Morocco' },
    { name: 'Villa des Arts',                       info: 'Contemporary exhibitions · art nouveau building',                            mapsQuery: 'Villa des Arts Rabat Morocco' },
    { name: 'Salé via flouka boat',                 info: 'Untouristy twin city across the Bouregreg river',                            mapsQuery: 'Bab Mrissa Sale Morocco' },
    { name: 'Plage des Oudayas & Corniche',         info: 'Atlantic walks and beach',                                                   mapsQuery: 'Plage des Oudayas Rabat Morocco', imageKey: 'beach' }
  ]
};

function toggleEvent(el) {
  const body = el.querySelector('.event-body');
  const isOpen = el.classList.contains('open');

  if (isOpen) {
    // Pin to explicit height before collapsing so transition has a start point
    body.style.height = body.scrollHeight + 'px';
    requestAnimationFrame(() => {
      body.style.height = '0';
    });
    el.classList.remove('open');
  } else {
    el.classList.add('open');
    body.style.height = body.scrollHeight + 'px';
    // After open transition finates, let height be auto so resize works
    body.addEventListener('transitionend', () => {
      if (el.classList.contains('open')) body.style.height = 'auto';
    }, { once: true });
  }
}

function renderTrip() {
  document.getElementById('destination').textContent = TRIP.destination;
  document.getElementById('subtitle').textContent    = TRIP.subtitle;
  document.getElementById('dates').textContent       = TRIP.dates;

  // Days
  const daysContainer = document.getElementById('days');
  daysContainer.innerHTML = '';
  TRIP.days.forEach((day, i) => {
    const card = document.createElement('div');
    card.className = 'day-card';
    card.style.animationDelay = `${0.15 + i * 0.09}s`;

    const eventsHTML = day.items.map(item => {
      const imgSrc = item.imageKey && IMAGES[item.imageKey];
      const imgHTML = imgSrc ? `<img class="event-img" src="${imgSrc}" alt="${item.activity}" loading="lazy">` : '';
      const detailHTML = item.detail ? `<p class="event-detail">${item.detail}</p>` : '';
      const mapsHTML = item.mapsQuery ? `<a class="event-maps-btn" href="https://maps.google.com/?q=${encodeURIComponent(item.mapsQuery)}" target="_blank" rel="noopener noreferrer">📍 Open in Maps</a>` : '';
      return `
        <div class="event" onclick="toggleEvent(this)">
          <div class="event-row">
            <span class="event-time">${item.time}</span>
            <span class="event-name">${item.activity}</span>
            <span class="event-toggle">+</span>
          </div>
          <div class="event-body">
            <div class="event-body-inner">${imgHTML}${detailHTML}${mapsHTML}</div>
          </div>
        </div>`;
    }).join('');

    card.innerHTML = `
      <div class="day-card-header">
        <span class="day-pill">Day ${day.day}</span>
        <div class="day-info">
          <div class="day-date">${day.date}</div>
          <div class="day-title">${day.title}</div>
        </div>
      </div>
      <div class="events">${eventsHTML}</div>`;

    daysContainer.appendChild(card);
  });

  // Restaurants
  document.getElementById('restaurants').innerHTML = TRIP.restaurants.map(r => `
    <a class="place-card" href="https://maps.google.com/?q=${encodeURIComponent(r.mapsQuery)}" target="_blank" rel="noopener noreferrer">
      <div class="place-card-body">
        <span class="place-name">${r.name}</span>
        <span class="place-type">${r.type}</span>
        <span class="place-sub">📍 ${r.address} · ${r.notes}</span>
      </div>
      <span class="place-arrow">›</span>
    </a>`).join('');

  // Sights
  document.getElementById('sights').innerHTML = TRIP.sights.map(s => `
    <a class="place-card" href="https://maps.google.com/?q=${encodeURIComponent(s.mapsQuery)}" target="_blank" rel="noopener noreferrer">
      <div class="place-card-body">
        <span class="place-name">${s.name}</span>
        <span class="place-sub">${s.info}</span>
      </div>
      <span class="place-arrow">›</span>
    </a>`).join('');
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js');
}

renderTrip();

// Pad body so fixed header doesn't overlap content
function applyHeaderOffset() {
  const h = document.querySelector('header').offsetHeight;
  document.body.style.paddingTop = (h) + 'px'; // 
}
applyHeaderOffset();
window.addEventListener('resize', applyHeaderOffset);

// Hide splash after animations finish
setTimeout(() => {
  const splash = document.getElementById('splash');
  splash.classList.add('hiding');
  setTimeout(() => splash.remove(), 750);
}, 1900);
