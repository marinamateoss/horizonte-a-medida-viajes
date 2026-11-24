// ==========================================================================
// HORIZONTE A MEDIDA VIAJES - LÓGICA MINIMALISTA & KAWAII
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  createFloatingSakura();
  initItinerary();
  initVariants();
  initCalculator();
  initFaqs();
  initChatbot();
  initContactForm();
  initMobileMenu();
});

// --------------------------------------------------------------------------
// 0. PÉTALOS DE SAKURA FLOTANTES (Sutil y poético)
// --------------------------------------------------------------------------
function createFloatingSakura() {
  const container = document.body;
  const numPetals = 6;
  for (let i = 0; i < numPetals; i++) {
    const petal = document.createElement('div');
    petal.className = 'sakura-petal';
    petal.style.left = Math.random() * 95 + 'vw';
    petal.style.width = (10 + Math.random() * 8) + 'px';
    petal.style.height = (14 + Math.random() * 10) + 'px';
    petal.style.animationDuration = (9 + Math.random() * 8) + 's';
    petal.style.animationDelay = (Math.random() * 5) + 's';
    container.appendChild(petal);
  }
}

// --------------------------------------------------------------------------
// 1. MÓDULO DE ITINERARIO (10 DÍAS)
// --------------------------------------------------------------------------
let currentActiveDay = 1;
let currentVariant = 'clasico';

function initItinerary() {
  const daysNav = document.getElementById('daysNav');
  if (!daysNav) return;

  renderDaysNav();
  renderDayDetail(1);
}

function renderDaysNav() {
  const daysNav = document.getElementById('daysNav');
  daysNav.innerHTML = '';

  ITINERARY_10_DAYS.forEach(item => {
    const tab = document.createElement('div');
    tab.className = `day-tab-item ${item.day === currentActiveDay ? 'active' : ''}`;
    tab.id = `day-tab-${item.day}`;
    tab.onclick = () => selectDay(item.day);

    tab.innerHTML = `
      <div class="day-tab-emoji">${item.emoji}</div>
      <div class="day-tab-info">
        <div class="day-tab-base">${item.base}</div>
        <div class="day-tab-title">Día ${item.day}: ${item.title}</div>
      </div>
    `;
    daysNav.appendChild(tab);
  });
}

function selectDay(dayNumber) {
  currentActiveDay = dayNumber;
  document.querySelectorAll('.day-tab-item').forEach(el => el.classList.remove('active'));
  const activeTab = document.getElementById(`day-tab-${dayNumber}`);
  if (activeTab) activeTab.classList.add('active');
  renderDayDetail(dayNumber);
}

function renderDayDetail(dayNumber) {
  const day = ITINERARY_10_DAYS.find(d => d.day === dayNumber);
  const container = document.getElementById('dayDetailContainer');
  if (!day || !container) return;

  let customNote = day.tips;
  let customTitle = day.title;
  let customBase = day.base;
  let customConcept = day.concept;

  if (currentVariant === 'cultura' && day.day === 5) {
    customTitle = "Kioto & Tesoros de Himeji o té matcha en Uji";
    customBase = "Kioto / Himeji";
    customConcept = "Dō (道) — El camino tradicional de la ceremonia y la historia.";
    customNote = "Variante Cultural: Noche extra en Kioto sustituyendo Hakone para recorrer templos de madera únicos.";
  } else if (currentVariant === 'familias' && day.day === 4) {
    customTitle = "Tokio Mágico: Warner Bros (Harry Potter) o Museo Ghibli";
    customConcept = "Asobi (遊び) — El arte del juego y la imaginación compartida.";
    customNote = "Variante Familiar: Entradas garantizadas reservadas con antelación y ritmo sin prisas.";
  } else if (currentVariant === 'gastronomia' && day.day === 7) {
    customTitle = "Kioto: Degustación de Sakes en Fushimi & Cena Kaiseki";
    customConcept = "Shun (旬) — Saborear los ingredientes en su estación perfecta.";
    customNote = "Variante Foodie: Recorrido por destilerías históricas y cena de alta cocina tradicional de 9 pases.";
  } else if (currentVariant === 'anime' && day.day === 2) {
    customTitle = "Tokio: Akihabara Tech, Nakano Broadway & Gundam Base";
    customConcept = "Otaku (オタク) — La pasión por el detalle en el arte pop nipón.";
    customNote = "Variante Anime: Ruta de coleccionismo, figuras exclusivas y arcades vintage.";
  }

  const activitiesHtml = day.activities.map(act => `<li>${act}</li>`).join('');

  container.innerHTML = `
    <div class="day-detail-header">
      <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap;">
        <span class="hanko-badge">Día ${day.day} de 10</span>
        <span class="pill-badge">${customBase}</span>
        ${currentVariant !== 'clasico' ? `<span class="pill-badge" style="color: #E03131; border-color: #FFC9C9;">${ITINERARY_VARIANTS[currentVariant].name}</span>` : ''}
      </div>
      <div class="day-concept-tag">🌿 ${customConcept}</div>
      <h3 class="day-detail-title">${day.emoji} ${customTitle}</h3>
      <p class="day-detail-summary">${day.summary}</p>
    </div>

    <div class="day-detail-grid">
      <div>
        <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 0.65rem; color: #2D2825;">Momentos destacados del día:</h4>
        <ul class="activities-list">
          ${activitiesHtml}
        </ul>
      </div>
      <div class="day-image-card">
        <img src="${day.image}" alt="Viaje a Japón Día ${day.day}" loading="lazy">
      </div>
    </div>

    <div class="day-detail-footer">
      <div class="footer-item">
        <div style="font-size: 1.25rem;">🚅</div>
        <div>
          <h5>Desplazamiento</h5>
          <p>${day.transport}</p>
        </div>
      </div>
      <div class="footer-item">
        <div style="font-size: 1.25rem;">🍵</div>
        <div>
          <h5>Consejo Omotenashi</h5>
          <p>${customNote}</p>
        </div>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 2. VARIANTES DE ITINERARIO
// --------------------------------------------------------------------------
function initVariants() {
  const buttons = document.querySelectorAll('.variant-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const variantKey = btn.dataset.variant;
      if (!ITINERARY_VARIANTS[variantKey]) return;

      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentVariant = variantKey;

      updateVariantBanner(variantKey);
      renderDayDetail(currentActiveDay);
    });
  });
}

function updateVariantBanner(key) {
  const variant = ITINERARY_VARIANTS[key];
  const banner = document.getElementById('variantBanner');
  if (!banner) return;

  const prosList = variant.pros.map(p => `🌸 ${p}`).join(' &nbsp;•&nbsp; ');

  banner.innerHTML = `
    <div>
      <h4>${variant.badge} ${variant.name} — <span style="font-weight: normal; font-size: 0.85rem;">${variant.subtitle}</span></h4>
      <p style="margin-top: 0.2rem;">${variant.description}</p>
      <div style="font-size: 0.78rem; color: #E03131; margin-top: 0.35rem; font-weight: 600;">
        ${prosList}
      </div>
    </div>
    <a href="#cotizador" class="btn btn-primary btn-sm" onclick="setVariantInCalculator('${key}')">
      Cotizar esta variante 🍡
    </a>
  `;
}

function setVariantInCalculator(variantKey) {
  if (variantKey === 'gastronomia' || variantKey === 'cultura') {
    selectOption('calc-style', 'confort');
  } else if (variantKey === 'relajado') {
    selectOption('calc-pace', 'relajado');
  }
}

// --------------------------------------------------------------------------
// 3. COTIZADOR INTERACTIVO (RAG Sección 11)
// --------------------------------------------------------------------------
const calcState = {
  departure: 'madrid',
  season: 'otono',
  adults: 2,
  duration: 10,
  style: 'confort',
  pace: 'equilibrado',
  addons: {
    ryokan: true,
    shinkansen: true,
    takkyubin: true,
    insurance: true,
    guide: false,
    esim: true
  }
};

function initCalculator() {
  setupBtnGroup('departure-btns', 'departure', (val) => { calcState.departure = val; calculateQuote(); });
  setupBtnGroup('season-btns', 'season', (val) => { calcState.season = val; calculateQuote(); });
  setupBtnGroup('adults-btns', 'adults', (val) => { calcState.adults = parseInt(val, 10); calculateQuote(); });
  setupBtnGroup('style-btns', 'style', (val) => { calcState.style = val; calculateQuote(); });
  setupBtnGroup('pace-btns', 'pace', (val) => { calcState.pace = val; calculateQuote(); });

  const addonCheckboxes = document.querySelectorAll('.addon-card input[type="checkbox"]');
  addonCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const addonKey = cb.dataset.addon;
      calcState.addons[addonKey] = cb.checked;
      const card = cb.closest('.addon-card');
      if (cb.checked) card.classList.add('active');
      else card.classList.remove('active');
      calculateQuote();
    });
  });

  calculateQuote();
}

function setupBtnGroup(containerId, stateKey, onChange) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const buttons = container.querySelectorAll('.calc-select-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      onChange(btn.dataset.val);
    });
  });
}

function selectOption(groupPrefix, value) {
  const btn = document.querySelector(`[data-${groupPrefix}="${value}"]`);
  if (btn) btn.click();
}

function calculateQuote() {
  const pax = calcState.adults;
  const nights = calcState.duration;

  // 1. Vuelos internacionales
  let flightPerPax = 950;
  if (calcState.season === 'primavera') flightPerPax = 1250;
  else if (calcState.season === 'verano') flightPerPax = 1100;
  else if (calcState.season === 'otono') flightPerPax = 1020;
  else if (calcState.season === 'invierno') flightPerPax = 840;
  const totalFlights = flightPerPax * pax;

  // 2. Hoteles (habitaciones necesarias base doble)
  const rooms = Math.ceil(pax / 2);
  let hotelNightRate = 140; // Confort
  if (calcState.style === 'esencial') hotelNightRate = 85;
  else if (calcState.style === 'premium') hotelNightRate = 280;
  else if (calcState.style === 'lujo') hotelNightRate = 420;
  const totalHotels = hotelNightRate * nights * rooms;

  // 3. Transportes internos (Shinkansen + Tarjeta IC)
  let transportPerPax = 135;
  if (!calcState.addons.shinkansen) transportPerPax = 45;
  const totalTransport = transportPerPax * pax;

  // 4. Extras y experiencias
  let totalAddons = 0;
  if (calcState.addons.ryokan) totalAddons += (240 * rooms);
  if (calcState.addons.takkyubin) totalAddons += (45 * pax);
  if (calcState.addons.guide) totalAddons += 320;
  if (calcState.addons.esim) totalAddons += (28 * pax);

  // 5. Seguro médico con asistencia internacional
  let insurancePerPax = calcState.addons.insurance ? 92 : 0;
  const totalInsurance = insurancePerPax * pax;

  // 6. Honorarios fijos de diseño personalizado y asistencia 24h
  const designFee = 180;

  const subtotal = totalFlights + totalHotels + totalTransport + totalAddons + totalInsurance + designFee;
  const totalPerPerson = Math.round(subtotal / pax);

  // Margen preventivo recomendado (12% del terrestre)
  const landSubtotal = totalHotels + totalTransport + totalAddons;
  const recommendedMargin = Math.round((landSubtotal * 0.12) / pax);

  updateElementText('summaryFlights', `${formatEuro(totalFlights)} (${formatEuro(flightPerPax)}/pax)`);
  updateElementText('summaryHotels', `${formatEuro(totalHotels)} (${nights} noches)`);
  updateElementText('summaryTransport', `${formatEuro(totalTransport)}`);
  updateElementText('summaryAddons', `${formatEuro(totalAddons)}`);
  updateElementText('summaryInsurance', `${formatEuro(totalInsurance)}`);
  updateElementText('summaryDesignFee', `${formatEuro(designFee)}`);
  updateElementText('totalPricePerPerson', `${formatEuro(totalPerPerson)}`);
  updateElementText('totalPriceOverall', `${formatEuro(subtotal)}`);
  updateElementText('preventiveMarginText', `🍙 Margen preventivo sugerido: ~${formatEuro(recommendedMargin)} por persona (10-15% del presupuesto terrestre) para degustaciones y recuerdos.`);
}

function formatEuro(val) {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
}

function updateElementText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// --------------------------------------------------------------------------
// 4. FAQS Y CONOCIMIENTO RAG
// --------------------------------------------------------------------------
function initFaqs() {
  const accordionContainer = document.getElementById('ragAccordion');
  if (!accordionContainer) return;

  accordionContainer.innerHTML = '';

  FAQS_KNOWLEDGE.forEach((faq, idx) => {
    const item = document.createElement('div');
    item.className = `rag-faq-item ${idx === 0 ? 'open' : ''}`;
    item.innerHTML = `
      <div class="rag-faq-header">
        <div style="display: flex; align-items: center; gap: 0.6rem;">
          <span>${faq.icon}</span>
          <span>${faq.q}</span>
        </div>
        <span class="rag-faq-icon">▼</span>
      </div>
      <div class="rag-faq-body">
        <p>${formatMarkdown(faq.a)}</p>
      </div>
    `;

    const header = item.querySelector('.rag-faq-header');
    header.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.rag-faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });

    accordionContainer.appendChild(item);
  });
}

function formatMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n• /g, '<br>• ')
    .replace(/\n/g, '<br>');
}

// --------------------------------------------------------------------------
// 5. ASISTENTE VIRTUAL IA AIKO-CHAN
// --------------------------------------------------------------------------
let chatHistory = [];

function initChatbot() {
  const launcher = document.getElementById('chatLauncherBtn');
  const windowEl = document.getElementById('chatWindow');
  const closeBtn = document.getElementById('chatCloseBtn');
  const sendBtn = document.getElementById('chatSendBtn');
  const inputField = document.getElementById('chatInputField');

  if (!launcher || !windowEl) return;

  launcher.addEventListener('click', () => {
    windowEl.classList.toggle('open');
    if (windowEl.classList.contains('open') && chatHistory.length === 0) {
      appendBotMessage(BOT_KNOWLEDGE_BASE.welcome);
      renderQuickPills();
    }
  });

  closeBtn.addEventListener('click', () => {
    windowEl.classList.remove('open');
  });

  const handleSend = () => {
    const msg = inputField.value.trim();
    if (!msg) return;
    appendUserMessage(msg);
    inputField.value = '';
    processBotResponse(msg);
  };

  sendBtn.addEventListener('click', handleSend);
  inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
  });
}

function renderQuickPills() {
  const pillsContainer = document.getElementById('chatQuickPills');
  if (!pillsContainer) return;

  pillsContainer.innerHTML = '';
  BOT_KNOWLEDGE_BASE.suggestions.forEach(sug => {
    const pill = document.createElement('button');
    pill.className = 'quick-pill';
    pill.textContent = sug;
    pill.onclick = () => {
      appendUserMessage(sug);
      processBotResponse(sug);
    };
    pillsContainer.appendChild(pill);
  });
}

function appendUserMessage(text) {
  chatHistory.push({ role: 'user', text });
  const container = document.getElementById('chatMessagesContainer');
  const msgEl = document.createElement('div');
  msgEl.className = 'chat-msg user';
  msgEl.textContent = text;
  container.appendChild(msgEl);
  container.scrollTop = container.scrollHeight;
}

function appendBotMessage(text, withAgentCta = false) {
  chatHistory.push({ role: 'bot', text });
  const container = document.getElementById('chatMessagesContainer');
  const msgEl = document.createElement('div');
  msgEl.className = 'chat-msg bot';
  
  let formatted = formatMarkdown(text);
  if (withAgentCta) {
    formatted += `
      <div style="margin-top: 0.65rem; padding-top: 0.5rem; border-top: 1px dashed #EFE8DE;">
        <a href="#contacto" onclick="document.getElementById('chatWindow').classList.remove('open')" class="btn btn-sakura btn-sm" style="font-size: 0.78rem; padding: 0.35rem 0.75rem;">
          🌸 Agendar Videollamada Omotenashi
        </a>
      </div>
    `;
  }
  msgEl.innerHTML = formatted;
  container.appendChild(msgEl);
  container.scrollTop = container.scrollHeight;
}

// --------------------------------------------------------------------------
// MOTOR DE INTENCIÓN DEL CHATBOT — Scoring + búsqueda en base de datos
// --------------------------------------------------------------------------

/** Normaliza texto: quita tildes, pasa a minúsculas, limpia puntuación */
function normalizeText(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[¿?¡!.,;:()\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Cuenta cuántas palabras clave del array aparecen en el texto normalizado */
function scoreKeywords(norm, keywords) {
  return keywords.reduce((score, kw) => score + (norm.includes(kw) ? 1 : 0), 0);
}

/** Busca en FAQS_KNOWLEDGE la que más palabras relevantes comparte con la query */
function findBestFaq(norm) {
  const stopwords = new Set(['que', 'como', 'cual', 'cuando', 'donde', 'hay', 'es', 'un',
    'una', 'de', 'la', 'el', 'los', 'las', 'me', 'mi', 'tu', 'su', 'se', 'para',
    'con', 'por', 'en', 'y', 'o', 'a', 'al', 'del', 'si', 'no', 'le', 'lo']);
  const queryWords = norm.split(' ').filter(w => w.length > 2 && !stopwords.has(w));
  let best = null;
  let bestScore = 0;
  FAQS_KNOWLEDGE.forEach(faq => {
    const faqNorm = normalizeText(faq.q + ' ' + faq.a);
    const hits = queryWords.filter(w => faqNorm.includes(w)).length;
    if (hits > bestScore) { bestScore = hits; best = faq; }
  });
  return bestScore >= 2 ? { faq: best, score: bestScore } : null;
}

/** Busca un día del itinerario por número o por lugar mencionado */
function findItineraryDay(norm) {
  const dayMatch = norm.match(/\bdia\s*(\d{1,2})\b/);
  if (dayMatch) {
    const d = ITINERARY_10_DAYS.find(d => d.day === parseInt(dayMatch[1]));
    if (d) return d;
  }
  const placeMap = {
    'tokio': 1, 'tokyo': 1, 'shinjuku': 1, 'ginza': 1, 'haneda': 1, 'narita': 1,
    'asakusa': 2, 'akihabara': 2, 'senso': 2, 'ueno': 2,
    'shibuya': 3, 'harajuku': 3, 'meiji': 3, 'takeshita': 3,
    'kamakura': 4, 'nikko': 4, 'teamlab': 4, 'buda': 4, 'daibutsu': 4,
    'hakone': 5, 'fuji': 5, 'romancecar': 5, 'owakudani': 5, 'ashi': 5,
    'gion': 6, 'kioto': 6, 'kyoto': 6, 'ninenzaka': 6, 'yasaka': 6,
    'fushimi': 7, 'inari': 7, 'kiyomizu': 7, 'nishiki': 7, 'torii': 7,
    'arashiyama': 8, 'bambu': 8, 'kinkakuji': 8, 'kinkaku': 8, 'tenryu': 8,
    'nara': 9, 'ciervo': 9, 'ciervos': 9, 'todaiji': 9, 'osaka': 9, 'dotonbori': 9,
    'aeropuerto': 10, 'regreso': 10, 'vuelta': 10, 'despedida': 10, 'kix': 10
  };
  for (const [kw, dayNum] of Object.entries(placeMap)) {
    if (norm.includes(kw)) return ITINERARY_10_DAYS.find(d => d.day === dayNum) || null;
  }
  return null;
}

/** Define todas las intenciones con sus sinónimos */
function buildIntents() {
  return [
    {
      id: 'saludo',
      keywords: ['hola', 'buenas', 'buenos dias', 'buenas tardes', 'buenas noches', 'konnichiwa', 'saludos', 'hey', 'ola'],
      respond: () => appendBotMessage(
        `¡Konnichiwa! 🌸 Soy **Aiko**, tu asesora virtual de **Horizonte a Medida Viajes**.\n\n` +
        `Puedo ayudarte con:\n` +
        `• 🗾 Itinerario y destinos\n• 💴 Presupuesto y precios\n• 🛂 Visados y documentación\n` +
        `• ♨️ Alojamientos (hoteles, ryokan)\n• 🚅 Transporte y tren bala\n• 🌸 Mejor época para viajar\n\n` +
        `¿Por dónde empezamos?`
      )
    },
    {
      id: 'visado',
      keywords: ['visado', 'visa', 'pasaporte', 'entrada japon', 'permiso', 'visit japan', 'documentacion', 'documentos', 'necesito para entrar'],
      respond: () => appendBotMessage(BOT_KNOWLEDGE_BASE.rules.visas)
    },
    {
      id: 'salud',
      keywords: ['vacuna', 'vacunas', 'salud', 'medico', 'medica', 'sanitario', 'sanidad', 'enfermedad', 'farmacia', 'seguro medico', 'seguro de salud', 'requisito sanitario'],
      respond: () => appendBotMessage(BOT_KNOWLEDGE_BASE.rules.health)
    },
    {
      id: 'equipaje',
      keywords: ['maleta', 'maletas', 'equipaje', 'takkyubin', 'envio', 'enviar', 'bulto', 'peso maleta', 'arrastrar', 'facturar', 'consigna'],
      respond: () => appendBotMessage(BOT_KNOWLEDGE_BASE.rules.bags)
    },
    {
      id: 'pago',
      keywords: ['reserva', 'reservar', 'pago', 'pagar', 'deposito', 'cancelar', 'cancelacion', 'reembolso', 'anticipo', 'plazo pago', 'cuando pago', 'cuanto pago', 'sena', 'contrato'],
      respond: () => appendBotMessage(BOT_KNOWLEDGE_BASE.rules.booking)
    },
    {
      id: 'ryokan',
      keywords: ['ryokan', 'onsen', 'kaiseki', 'tatami', 'futon', 'yukata', 'termal', 'aguas termales', 'bano termal', 'alojamiento tradicional', 'noche ryokan'],
      respond: () => {
        const ryokan = ACCOMMODATIONS.find(a => a.category === 'Tradicional (Ryokan)');
        appendBotMessage(
          `Dormir en un **Ryokan** es la esencia de Japón ♨️\n\n` +
          `${ryokan.profile}\n\n` +
          `✅ Incluye: ${ryokan.features.join(' • ')}\n\n` +
          `💴 **Precio orientativo:** ${ryokan.priceRange}\n\n` +
          `En nuestra ruta clásica de 10 días, la noche de Ryokan es en Hakone con vistas al Monte Fuji. ¿Te cuento más?`
        );
      }
    },
    {
      id: 'hotel',
      keywords: ['hotel', 'hoteles', 'alojamiento', 'donde dormir', 'hospedaje', 'habitacion', 'estrella', 'confort', 'premium', 'esencial', 'lujo', 'apartahotel'],
      respond: () => {
        const lines = ACCOMMODATIONS.map(a => `**${a.category}** (${a.stars}) — ${a.priceRange}: ${a.profile}`).join('\n\n');
        appendBotMessage(`Tenemos 5 categorías de alojamiento:\n\n${lines}\n\n¿Cuál encaja con tu estilo? 🌸`);
      }
    },
    {
      id: 'presupuesto',
      keywords: ['cuanto cuesta', 'cuanto vale', 'precio', 'coste', 'tarifa', 'importe', 'presupuesto', 'cotizar', 'cotizacion', 'cuanto es', 'cuanto sale', 'euros', 'dinero', 'cuanto debo', 'cuanto me cuesta'],
      respond: () => appendBotMessage(
        `Referencias orientativas para **2 personas, 10 días**:\n\n` +
        `• 🏨 **Confort** (recomendado): desde ~2.480 €/persona — vuelos, hoteles 3-4*, tren bala, ryokan y seguro.\n` +
        `• ✨ **Premium**: desde ~3.200 €/persona — hoteles 4-5*, habitaciones amplias.\n` +
        `• 🌟 **Lujo**: desde ~4.500 €/persona — experiencias y hoteles exclusivos.\n\n` +
        `El precio cambia según **temporada** (primavera es la más cara), origen de salida y extras. Para una cifra exacta usa nuestro **cotizador** 👆 o cuéntame tu situación.`,
        true
      )
    },
    {
      id: 'temporada',
      keywords: ['cuando ir', 'mejor epoca', 'mejor mes', 'cuando viajar', 'temporada', 'primavera', 'sakura', 'cereza', 'cerezo', 'otono', 'momiji', 'verano', 'invierno', 'nieve', 'clima', 'tiempo hace', 'mes mejor', 'que mes'],
      respond: () => {
        const s = BOT_KNOWLEDGE_BASE.rules.seasons;
        appendBotMessage(
          `Cada estación en Japón tiene su magia 🌸🍁🏮❄️\n\n` +
          `${s.sakura}\n\n${s.momiji}\n\n${s.verano}\n\n${s.invierno}\n\n` +
          `¿Tienes fechas en mente? Te digo cuál es la mejor opción para ti.`
        );
      }
    },
    {
      id: 'jr_pass',
      keywords: ['jr pass', 'jr-pass', 'japan rail', 'rail pass', 'pase tren', 'bono tren', 'shinkansen', 'tren bala', 'tren rapido', 'transporte interno', 'como me muevo'],
      respond: () => {
        const faq = FAQS_KNOWLEDGE.find(f => f.q.includes('JR Pass'));
        appendBotMessage(faq ? faq.a : BOT_KNOWLEDGE_BASE.rules.bags);
      }
    },
    {
      id: 'alergias',
      keywords: ['alergia', 'alergias', 'vegetariano', 'vegetariana', 'vegano', 'vegana', 'celiaco', 'celiaca', 'gluten', 'sin gluten', 'intolerancia', 'marisco', 'lacteos', 'dieta', 'comida especial', 'restriccion'],
      respond: () => {
        const faq = FAQS_KNOWLEDGE.find(f => f.q.includes('alergias'));
        appendBotMessage(faq ? faq.a : `Para restricciones alimentarias, preparamos **tarjetas en japonés** con tu alergia o dieta para mostrar en restaurantes. Funciona muy bien y los locales suelen adaptarse con gusto. 🍙`);
      }
    },
    {
      id: 'asistencia',
      keywords: ['asistencia', 'emergencia', 'incidencia', 'problema en japon', 'me pierdo', 'robo', 'accidente', '24 horas', 'telefono agencia', 'whatsapp agencia', 'contacto agencia', 'numero de contacto'],
      respond: () => {
        const faq = FAQS_KNOWLEDGE.find(f => f.q.includes('incidencia'));
        const c = AGENCY_DATA.contact;
        appendBotMessage(
          (faq ? faq.a + '\n\n' : '') +
          `📞 **Teléfono:** ${c.phone}\n💬 **WhatsApp:** ${c.whatsapp}\n📧 **Email:** ${c.email}\n🕐 **Horario oficina:** ${c.hours}`
        );
      }
    },
    {
      id: 'gastos_diarios',
      keywords: ['gasto diario', 'gastos diarios', 'dinero suelto', 'cuanto llevar', 'efectivo', 'cash', 'yenes', 'margen', 'cuanto gasto al dia', 'bolsillo', 'propina', 'cuanto dinero llevar'],
      respond: () => {
        const faq = FAQS_KNOWLEDGE.find(f => f.q.includes('gastos diarios'));
        appendBotMessage(faq ? faq.a : `Recomendamos un margen del **10-15% del presupuesto terrestre** para comidas extras y recuerdos. En Japón se come muy bien desde **10-15 €** en un ramen local o izakaya. 💴`);
      }
    },
    {
      id: 'cancelacion',
      keywords: ['cancelar', 'cancelacion', 'anular', 'anulacion', 'desistir', 'gastos cancelacion', 'penalizacion', 'reembolso', 'si cancelo', 'devolucion', 'devolver dinero'],
      respond: () => {
        const faq = FAQS_KNOWLEDGE.find(f => f.tag && f.tag.includes('Cancelaciones'));
        appendBotMessage(faq ? faq.a : BOT_KNOWLEDGE_BASE.rules.cancellation);
      }
    },
    {
      id: 'seguro',
      keywords: ['seguro', 'seguro medico', 'seguro viaje', 'cobertura', 'poliza', 'gastos medicos', 'repatriacion', 'siniestro', 'hospital'],
      respond: () => {
        appendBotMessage(
          `En Horizonte a Medida consideramos el seguro médico internacional un requisito fundamental debido a los elevados costes de la sanidad en Japón.\n\n` +
          `• 🩺 **Coberturas clave:** Asistencia médica continuada, hospitalización, repatriación y cobertura de equipaje.\n` +
          `• 📄 **Procedimiento:** Ante una emergencia médica, la prioridad es atenderse en servicios locales y contactar con la aseguradora antes de incurrir en gastos extraordinarios, conservando informes y facturas originales.\n` +
          `• 🌸 Dispones además del soporte de nuestra agencia (asistencia 24h para emergencias en ruta).`
        );
      }
    },
    {
      id: 'accesibilidad',
      keywords: ['accesible', 'accesibilidad', 'silla de ruedas', 'movilidad reducida', 'escalon', 'ascensor', 'discapacidad', 'adaptado'],
      respond: () => appendBotMessage(BOT_KNOWLEDGE_BASE.rules.accessibility)
    },
    {
      id: 'itinerario',
      keywords: ['itinerario', 'ruta', '10 dias', 'diez dias', 'que vemos', 'programa', 'que incluye la ruta', 'destinos', 'ciudades', 'dias del viaje', 'resumen viaje'],
      respond: () => {
        const summary = ITINERARY_10_DAYS.map(d => `**Día ${d.day}** — ${d.base}: ${d.title}`).join('\n');
        appendBotMessage(
          `Nuestra ruta clásica de 10 días:\n\n${summary}\n\n` +
          `Todo puede adaptarse a tu estilo (Familia, Gastro, Anime, Cultura o Relax). ¿Quieres saber más sobre algún día concreto? 🗾`
        );
      }
    },
    {
      id: 'variantes',
      keywords: ['variante', 'variantes', 'alternativa', 'opcion', 'personalizar', 'adaptar', 'familia', 'ninos', 'anime', 'manga', 'gastronomia', 'cultura', 'patrimonio', 'relax', 'slow travel'],
      respond: () => {
        const lines = Object.values(ITINERARY_VARIANTS).map(v => `${v.badge} **${v.name}:** ${v.subtitle}`).join('\n');
        appendBotMessage(`Tenemos 6 variantes de ruta:\n\n${lines}\n\n¿Cuál se adapta mejor a tu grupo? 🌸`);
      }
    }
  ];
}

function processBotResponse(query) {
  const norm = normalizeText(query);

  setTimeout(() => {
    // 1. Scoring de intenciones definidas
    const intents = buildIntents();
    const scored = intents
      .map(intent => ({ ...intent, score: scoreKeywords(norm, intent.keywords) }))
      .filter(i => i.score > 0)
      .sort((a, b) => b.score - a.score);

    if (scored.length > 0) {
      scored[0].respond();
      return;
    }

    // 2. Búsqueda semántica por solapamiento de palabras en FAQs
    const faqResult = findBestFaq(norm);
    if (faqResult) {
      appendBotMessage(faqResult.faq.a);
      return;
    }

    // 3. Búsqueda por lugar o día del itinerario
    const day = findItineraryDay(norm);
    if (day) {
      appendBotMessage(
        `**Día ${day.day} — ${day.base}** *(${day.title})*\n\n` +
        `${day.summary}\n\n` +
        `🎯 **Momentos clave:** ${day.activities.join(' • ')}\n\n` +
        `🚅 **Transporte:** ${day.transport}\n\n` +
        `🍵 **Consejo:** ${day.tips}`
      );
      return;
    }

    // 4. Sin información: respuesta honesta, sin inventar
    appendBotMessage(
      `No tengo información específica sobre eso en mi base de conocimiento. 🙏\n\n` +
      `Puedo ayudarte con: **visados, presupuesto, itinerario, alojamientos, transporte, temporadas, equipaje o restricciones alimentarias**.\n\n` +
      `Para preguntas más específicas, nuestros asesores humanos estarán encantados de atenderte:`,
      true
    );
  }, 400);
}

// --------------------------------------------------------------------------
// 6. FORMULARIO TABLILLA EMA DE DESEOS DE VIAJE
// --------------------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('travelRequestForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName').value;
    const email = document.getElementById('formEmail').value;
    const phone = document.getElementById('formPhone').value;
    const dates = document.getElementById('formDates').value;
    const travelers = document.getElementById('formPax').value;
    const style = document.getElementById('formStyle').value;

    const refCode = 'EMA-' + Math.floor(100000 + Math.random() * 900000);

    showCuteModal({
      refCode,
      name,
      email,
      phone,
      dates,
      travelers,
      style
    });

    form.reset();
  });
}

function showCuteModal(data) {
  const modal = document.createElement('div');
  modal.id = 'confirmModal';
  modal.style.cssText = `
    position: fixed; inset: 0; background: rgba(45, 40, 37, 0.6);
    backdrop-filter: blur(8px); display: flex; align-items: center;
    justify-content: center; z-index: 2000; padding: 1.5rem;
  `;

  modal.innerHTML = `
    <div style="background: #FFFDF9; border: 2px solid #EFE8DE; border-radius: 24px; max-width: 480px; width: 100%; padding: 2.25rem; box-shadow: 0 25px 50px rgba(0,0,0,0.15); text-align: center; position: relative;">
      <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎋</div>
      <h3 style="font-size: 1.5rem; color: #2D2825; margin-bottom: 0.35rem;">¡Tu deseo de viaje ha sido colgado!</h3>
      <p style="color: #786F66; font-size: 0.88rem; margin-bottom: 1.25rem;">
        Expediente: <strong style="color: #E03131;">${data.refCode}</strong>
      </p>
      <div style="background: #FAF7F2; border-radius: 14px; padding: 1rem 1.25rem; text-align: left; font-size: 0.85rem; color: #2D2825; margin-bottom: 1.5rem; border: 1px solid #EFE8DE;">
        <p style="margin-bottom: 0.25rem;"><strong>Viajero:</strong> ${data.name}</p>
        <p style="margin-bottom: 0.25rem;"><strong>Contacto:</strong> ${data.email} | ${data.phone}</p>
        <p style="margin-bottom: 0.25rem;"><strong>Detalles:</strong> ${data.travelers} • Estilo ${data.style}</p>
        <p style="color: #2B8A3E; font-weight: 600;">🌸 Un asesor humano preparará tu propuesta con hospitalidad Omotenashi.</p>
      </div>
      <div style="display: flex; gap: 0.65rem; justify-content: center;">
        <a href="https://wa.me/34622987654?text=Hola,%20acabo%20de%20colgar%20mi%20deseo%20para%20viajar%20a%20Jap%C3%B3n%20con%20referencia%20${data.refCode}" target="_blank" class="btn btn-primary btn-sm">
          Abrir en WhatsApp 💬
        </a>
        <button onclick="document.getElementById('confirmModal').remove()" class="btn btn-secondary btn-sm">
          Cerrar 🌸
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

// --------------------------------------------------------------------------
// 7. MENÚ MÓVIL
// --------------------------------------------------------------------------
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    const isShown = navLinks.style.display === 'flex';
    if (isShown) {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '74px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = '#FAF7F2';
      navLinks.style.padding = '1.5rem';
      navLinks.style.boxShadow = '0 10px 25px rgba(0,0,0,0.06)';
      navLinks.style.borderBottom = '1px solid #EFE8DE';
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 960) {
        navLinks.style.display = 'none';
      }
    });
  });
}

// --------------------------------------------------------------------------
// 8. ABRIR CHAT CON AIKO (desde botones del vídeo Avatar IA)
// --------------------------------------------------------------------------
function openChatAndAsk(message) {
  const chatWindow = document.getElementById('chatWindow');
  if (!chatWindow) return;
  chatWindow.classList.add('open');
  // Iniciar historial si está vacío
  if (typeof chatHistory !== 'undefined' && chatHistory.length === 0) {
    if (typeof BOT_KNOWLEDGE_BASE !== 'undefined') {
      appendBotMessage(BOT_KNOWLEDGE_BASE.welcome);
    }
    if (typeof renderQuickPills === 'function') renderQuickPills();
  }
  // Enviar el mensaje tras un pequeño delay para que el chat esté visible
  if (message) {
    setTimeout(() => {
      if (typeof appendUserMessage === 'function') appendUserMessage(message);
      if (typeof processBotResponse === 'function') processBotResponse(message);
    }, 500);
  }
}
