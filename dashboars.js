// ====== CONTROL DE LA TAQUILLA (ETAPA 1) ======
const vipNameInput = document.getElementById('vip-name');
const charCounter = document.getElementById('char-counter');
const zoneSelect = document.getElementById('zone-select');
const totalPriceSpan = document.getElementById('total-price');
const ticketForm = document.getElementById('ticket-form');

vipNameInput.addEventListener('input', () => {
  const len = vipNameInput.value.length;
  charCounter.textContent = `${len}/20 caracteres`;
  if (len > 20) {
    charCounter.classList.add('text-red-500', 'font-bold');
  } else {
    charCounter.classList.remove('text-red-500', 'font-bold');
  }
});

zoneSelect.addEventListener('change', () => {
  totalPriceSpan.textContent = `$${zoneSelect.value}`;
});

ticketForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (vipNameInput.value.trim() === '' || zoneSelect.value === '0') {
    alert('❌ ¡ERROR: Campos vacíos o incorrectos!');
  } else {
    alert(`🤘 ¡COMPRA CONFIRMADA para ${vipNameInput.value}!`);
  }
});

// ====== CONTROL DEL SOUNDBOARD (ETAPA 2) ======
const soundButtons = document.querySelectorAll('.sound-btn');
const soundDisplay = document.getElementById('sound-display');
const distortionSlider = document.getElementById('distortion-slider');
const distortionValue = document.getElementById('distortion-value');

soundButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    soundButtons.forEach(b => b.classList.remove('bg-yellow-400', 'text-black'));
    btn.classList.add('bg-yellow-400', 'text-black');
    soundDisplay.textContent = `⚡ Reproduciendo: [${btn.getAttribute('data-effect')}]`;
  });
});

distortionSlider.addEventListener('input', () => {
  distortionValue.textContent = `${distortionSlider.value}%`;
});

// ====== CONTROL DEL INVENTARIO (ETAPA 3) ======
const searchBox = document.getElementById('search-box');
const inventoryItems = document.querySelectorAll('#inventory-list li');

searchBox.addEventListener('input', () => {
  const filterText = searchBox.value.toLowerCase().trim();
  inventoryItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filterText) ? "" : "none";
  });
});

inventoryItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('text-green-500');
    item.classList.toggle('line-through');
  });
});