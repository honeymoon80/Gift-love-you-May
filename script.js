'use strict';

// =============================================
// ⚙️ CONFIGURACIÓN PERSONALIZABLE
// =============================================

const ACCESS_CODE = '140225';

// 📝 CONTENIDO DE LA CARTA (PERSONALIZABLE)
// Las imágenes deben estar en assets/
// Las palabras clave se marcan con <span class="keyword" data-key="NOMBRE">palabra</span>
// Las imágenes inline se marcan con <div class="letter-inline-image"><img src="assets/..." alt=""><div class="caption">Texto</div></div>

const LETTER_CONTENT = `
  <p>
    Desde que te conocí, supe que algo especial estaba por pasar. 
    No sabía que esa chispa que vi en tus ojos se convertiría en el 
    <span class="keyword" data-key="amor">amor</span> más grande que jamás he sentido.
  </p>

  <p>
    Cada día a tu lado es un regalo que guardo en lo más profundo de mi 
    <span class="keyword" data-key="corazon">corazón</span>. 
    Eres esa persona que ilumina hasta los días más grises, 
    la que con una sola sonrisa puede arreglar cualquier cosa.
  </p>

  <div class="letter-inline-image">
    <img src="assets/inline1.webp" alt="Momento especial" loading="lazy">
    <div class="caption">🌸 Nuestro primer viaje juntos 🌸</div>
  </div>

  <p>
    No puedo imaginar mi vida sin ti. Eres mi compañera, mi cómplice, 
    mi mejor amiga, mi <span class="keyword" data-key="sueños">sueño</span> hecho realidad. 
    Contigo he aprendido que el amor no se busca, se encuentra, y yo tuve la suerte de encontrarte.
  </p>

  <div class="letter-inline-image">
    <img src="assets/inline2.webp" alt="Momentos juntos" loading="lazy">
    <div class="caption">💕 Cada momento a tu lado es especial 💕</div>
  </div>

  <p>
    Nuestros <span class="keyword" data-key="recuerdos">recuerdos</span> son el tesoro más valioso que tengo. 
    Cada risa, cada abrazo, cada mirada cómplice, cada uno de esos momentos 
    está grabado en mi <span class="keyword" data-key="corazon">corazón</span> para siempre.
  </p>

  <p>
    Y cuando pienso en el futuro, solo veo <span class="keyword" data-key="eternidad">eternidad</span> a tu lado. 
    Un camino lleno de amor, de aventuras, de sueños compartidos. 
    Porque contigo, todo es posible. Contigo, la vida es hermosa.
  </p>

  <div class="letter-inline-image">
    <img src="assets/inline3.webp" alt="Nuestro futuro" loading="lazy">
    <div class="caption">🌅 Nuestro futuro juntos 🌅</div>
  </div>

  <p>
    Así que aquí estoy, escribiendo estas palabras para ti, 
    mi <span class="keyword" data-key="amor">amor</span>, mi vida, mi todo. 
    Para decirte lo mucho que te <span class="keyword" data-key="amor">amo</span>, 
    lo agradecido que estoy por tenerte, y lo feliz que eres tú la razón de mi felicidad.
  </p>

  <p>
    Gracias por ser tú. Gracias por ser mi <span class="keyword" data-key="sueños">sueño</span> cumplido, 
    mi <span class="keyword" data-key="recuerdos">recuerdo</span> favorito, 
    mi <span class="keyword" data-key="eternidad">eternidad</span> preferida.
  </p>

  <p style="text-align:center;font-family:'Great Vibes',cursive;font-size:1.4rem;color:#be185d;margin-top:10px;">
    Te amo, mi niñita hermosa. Siempre. 💗
  </p>
`;

// 🔑 MENSAJES DE PALABRAS CLAVE (data-key)
const KEYWORD_MESSAGES = {
  'amor': 'El amor que siento por ti es inmenso, puro y verdadero. No hay distancia ni tiempo que pueda apagarlo. Eres el amor de mi vida, May. 💗',
  'corazon': 'Mi corazón te pertenece desde el primer momento en que te vi. Cada latido que da es un "te amo" que nunca se cansa de repetir. Tú eres dueña de cada rincón de mi corazón. 💕',
  'sueños': 'Tú eres el sueño más hermoso que jamás imaginé. Cada noche cierro los ojos y te veo a ti, y cada mañana al despertar agradezco que seas real. Eres mi sueño hecho realidad. ✨',
  'recuerdos': 'Cada recuerdo contigo es un tesoro que guardo con todo mi amor. Desde el primer día hasta hoy, cada momento ha sido mágico porque estabas tú. Son mi mayor riqueza. 📸💗',
  'eternidad': 'La eternidad es poco tiempo para amarte como mereces. Quiero pasar todas mis vidas a tu lado, en todas las versiones del universo, siempre eligiéndote a ti. ♾️💕'
};

// 🖼️ IMÁGENES DEL MODAL FINAL
const FINAL_IMAGES = [
  'assets/final1.webp',
  'assets/final2.webp',
  'assets/final3.webp',
  'assets/final4.webp'
];

// 🎵 PLAYLIST
const PLAYLIST = [
  { name: '♪ Canción 1 para May ♪', src: 'assets/musica1.mp3' },
  { name: '♪ Canción 2 para May ♪', src: 'assets/musica2.mp3' },
  { name: '♪ Canción 3 para May ♪', src: 'assets/musica3.mp3' },
  { name: '♪ Canción 4 para May ♪', src: 'assets/musica4.mp3' },
  { name: '♪ Canción 5 para May ♪', src: 'assets/musica5.mp3' },
  { name: '♪ Canción 6 para May ♪', src: 'assets/musica6.mp3' },
  { name: '♪ Canción 7 para May ♪', src: 'assets/musica7.mp3' },
  { name: '♪ Canción 8 para May ♪', src: 'assets/musica8.mp3' },
];

// =============================================
// EMOJIS Y COLORES PARA PARTÍCULAS
// =============================================
const EMOJI_BIG = ['💖','💗','💘','💕','💓','✨','🎀','🌸','🦋','🥹','💝','💞','🌺','🌟','⭐','🍒','💫'];
const EMOJI_SMALL = ['💗','✨','🌸','💕','⭐','🌟','💖','🎀'];
const PARTICLE_COLORS_BIG = ['#ff69b4','#ff1493','#db2777','#f9a8d4','#c026d3','#e879f9','#fde68a','#fff'];
const PARTICLE_COLORS_SMALL = ['#ff69b4','#f9a8d4','#fda4af','#e9d5ff'];
const MAY_WORDS_BIG = ['May 💕','Para May 🌸','Te queremos May','May love ✨','Mi May 💗','Te amo May','My beautiful May','Siempre tuya May','Eres mi sol May','May mi cielito 🥹','Eres un sueño May','May mi amor eterno 💞','I love you May','May eres perfecta 🌺','Mi vida entera May','Tú y yo May 💝','May mi tesoro 🎀','Infinito amor May','May mi niñita bella 🌸','Para siempre May 💗'];
const MAY_WORDS_SMALL = ['May','Amor','May 🌸','💕 May','May ✨','Beso','May ❤️','Mi reina May','May 💗','💖 May','Siempre May','May 🎀','Amor May','May bella'];

// =============================================
// ESTADO
// =============================================
let currentSong = 0;
let isPlaying = false;
let musicMinimized = false;
let particlePool = [];
const MAX_PARTICLES = 60;

// =============================================
// DOM REFS
// =============================================
const lockScreen = document.getElementById('lockScreen');
const mainPortfolio = document.getElementById('mainPortfolio');
const confettiCont = document.getElementById('confettiContainer');
const lockBtn = document.getElementById('lockBtn');
const lockError = document.getElementById('lockError');
const lockDigits = Array.from({ length: 6 }, (_, i) => document.getElementById('d' + i));

const letterBody = document.getElementById('letterBody');
const letterFinalBtn = document.getElementById('letterFinalBtn');

const keywordModal = document.getElementById('keywordModal');
const keywordBackdrop = document.getElementById('keywordBackdrop');
const keywordClose = document.getElementById('keywordClose');
const keywordTitle = document.getElementById('keywordTitle');
const keywordText = document.getElementById('keywordText');

const finalModal = document.getElementById('finalModal');
const finalBackdrop = document.getElementById('finalBackdrop');
const finalClose = document.getElementById('finalClose');
const finalTitle = document.getElementById('finalTitle');
const finalText = document.getElementById('finalText');
const finalImagesContainer = document.getElementById('finalImagesContainer');

const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevSongBtn = document.getElementById('prevSongBtn');
const nextSongBtn = document.getElementById('nextSongBtn');
const songName = document.getElementById('songName');
const songNum = document.getElementById('songNum');
const currentTimeEl = document.getElementById('currentTime');
const totalTimeEl = document.getElementById('totalTime');
const musicProgFill = document.getElementById('musicProgressFill');
const musicProgThumb = document.getElementById('musicProgressThumb');
const musicProgBar = document.getElementById('musicProgressBar');
const volumeSlider = document.getElementById('volumeSlider');
const musicPlayer = document.getElementById('musicPlayer');
const musicToggleBtn = document.getElementById('musicToggleBtn');

const lockFloating = document.getElementById('lockFloatingHearts');

// =============================================
// INICIO
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  // Cargar contenido de la carta
  if (letterBody) {
    letterBody.innerHTML = LETTER_CONTENT;
    initKeywords();
  }

  // Imágenes finales
  if (finalImagesContainer) {
    finalImagesContainer.innerHTML = '';
    FINAL_IMAGES.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.className = 'final-modal-img';
      img.loading = 'lazy';
      finalImagesContainer.appendChild(img);
    });
  }

  // Botón mensaje final
  if (letterFinalBtn) {
    letterFinalBtn.addEventListener('click', openFinalModal);
  }

  // Focus en el primer input del lock
  if (lockDigits[0]) {
    setTimeout(() => lockDigits[0].focus(), 500);
  }

  buildLockScreen();
  initDecoClicks();
  initMusic();

  // Iniciar corazones flotantes
  startFloatingHearts();
});

// =============================================
// PANTALLA DE BLOQUEO
// =============================================
lockDigits.forEach((input, idx) => {
  input.addEventListener('input', (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(-1);
    e.target.value = val;
    if (val && idx < 5) {
      lockDigits[idx + 1].focus();
    }
    const code = lockDigits.map(d => d.value).join('');
    if (code.length === 6) setTimeout(verifyCode, 80);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !e.target.value && idx > 0) {
      lockDigits[idx - 1].focus();
      lockDigits[idx - 1].value = '';
    }
    if (e.key === 'Enter') verifyCode();
  });

  input.addEventListener('keypress', (e) => {
    if (!/[0-9]/.test(e.key) && !e.ctrlKey) e.preventDefault();
  });
});

lockBtn.addEventListener('click', verifyCode);

function verifyCode() {
  const code = lockDigits.map(d => d.value).join('');
  if (code === ACCESS_CODE) {
    onCodeCorrect();
  } else {
    lockError.classList.add('visible');
    lockError.style.animation = 'none';
    setTimeout(() => { lockError.style.animation = ''; }, 10);
    lockDigits.forEach(d => { d.value = ''; d.style.borderColor = '#be185d'; });
    setTimeout(() => {
      lockDigits.forEach(d => { d.style.borderColor = ''; });
    }, 800);
    lockDigits[0].focus();
  }
}

function onCodeCorrect() {
  lockError.classList.remove('visible');
  launchConfetti();
  lockScreen.style.animation = 'fadeOut 0.8s ease 0.5s forwards';
  setTimeout(() => {
    lockScreen.style.display = 'none';
    mainPortfolio.classList.remove('hidden');
    mainPortfolio.style.animation = 'fadeIn 0.8s ease forwards';
    setTimeout(() => audioPlayer.play().catch(() => {}), 500);
  }, 1300);
}

// =============================================
// CONFETI
// =============================================
function launchConfetti() {
  const colors = ['#ff69b4','#f9a8d4','#fda4af','#e9d5ff','#c4b5fd','#fde68a','#a7f3d0','#fbcfe8'];
  for (let i = 0; i < 120; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.left = Math.random() * 100 + 'vw';
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.width  = (Math.random() * 10 + 5) + 'px';
      el.style.height = (Math.random() * 10 + 5) + 'px';
      el.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
      el.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
      el.style.animationDelay = Math.random() * 0.5 + 's';
      confettiCont.appendChild(el);
      setTimeout(() => el.remove(), 3500);
    }, i * 10);
  }
}

// =============================================
// CORAZONES FLOTANTES
// =============================================
function startFloatingHearts() {
  const hearts = ['💗','💕','🌸','✨','💖','🎀','🌺'];
  function spawnHeart() {
    const el = document.createElement('div');
    el.className = 'lock-float-heart';
    el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = (Math.random() * 6 + 7) + 's';
    el.style.fontSize = (Math.random() * 16 + 14) + 'px';
    el.style.opacity = (Math.random() * 0.4 + 0.3).toFixed(2);
    el.style.position = 'fixed';
    el.style.bottom = '-40px';
    el.style.pointerEvents = 'none';
    el.style.zIndex = '2';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 14000);
  }
  for (let i = 0; i < 8; i++) setTimeout(spawnHeart, i * 300);
  setInterval(spawnHeart, 600);
}

function spawnLockHeart() {
  if (!lockScreen || lockScreen.style.display === 'none') return;
  const hearts = ['💗','💕','🌸','✨','💖'];
  const el = document.createElement('div');
  el.className = 'lock-float-heart';
  el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  el.style.left = Math.random() * 100 + '%';
  el.style.animationDuration = (Math.random() * 5 + 6) + 's';
  el.style.fontSize = (Math.random() * 14 + 12) + 'px';
  if (lockFloating) lockFloating.appendChild(el);
  setTimeout(() => el.remove(), 12000);
}
for (let i = 0; i < 10; i++) setTimeout(spawnLockHeart, i * 200);
setInterval(spawnLockHeart, 400);

// =============================================
// PALABRAS CLAVE
// =============================================
function initKeywords() {
  const keywords = document.querySelectorAll('.keyword');
  keywords.forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const key = el.dataset.key;
      if (key && KEYWORD_MESSAGES[key]) {
        openKeywordModal(el.textContent.trim(), KEYWORD_MESSAGES[key]);
      }
    });
  });
}

function openKeywordModal(title, text) {
  if (keywordTitle) keywordTitle.textContent = '💕 ' + title + ' 💕';
  if (keywordText) keywordText.textContent = text;
  keywordModal.classList.remove('hidden');
  // Partículas al abrir
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 3;
  spawnParticles(cx, cy, 18, 'big');
}

function closeKeywordModal() {
  keywordModal.classList.add('hidden');
}

// =============================================
// MODAL FINAL
// =============================================
function openFinalModal() {
  finalModal.classList.remove('hidden');
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 3;
  spawnParticles(cx, cy, 30, 'big');
}

function closeFinalModal() {
  finalModal.classList.add('hidden');
}

// =============================================
// MODAL CLICKS
// =============================================
if (keywordBackdrop) keywordBackdrop.addEventListener('click', closeKeywordModal);
if (keywordClose) keywordClose.addEventListener('click', closeKeywordModal);

if (finalBackdrop) finalBackdrop.addEventListener('click', closeFinalModal);
if (finalClose) finalClose.addEventListener('click', closeFinalModal);

// =============================================
// ADORNOS CLICKEABLES
// =============================================
function initDecoClicks() {
  const decos = document.querySelectorAll('.clickable-deco');
  decos.forEach(deco => {
    const handler = (e) => {
      e.stopPropagation();
      const rect = deco.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top  + rect.height / 2;
      spawnParticles(cx, cy, 22, 'big');
      deco.style.transform = 'scale(1.5) rotate(20deg)';
      setTimeout(() => { deco.style.transform = ''; }, 300);
    };
    deco.addEventListener('click', handler);
    deco.addEventListener('touchstart', handler, { passive: true });
  });
}

// =============================================
// CLIC EN FONDO (partículas pequeñas)
// =============================================
document.addEventListener('click', (e) => {
  if (mainPortfolio.classList.contains('hidden')) return;
  const ignore = e.target.closest('button, input, .clickable-deco, .music-player, .music-toggle-btn, .lock-screen, .keyword, .letter-final-btn, .keyword-modal, .final-modal');
  if (ignore) return;
  spawnParticles(e.clientX, e.clientY, 7, 'small');
});

document.addEventListener('touchstart', (e) => {
  if (mainPortfolio.classList.contains('hidden')) return;
  const ignore = e.target.closest('button, input, .clickable-deco, .music-player, .music-toggle-btn, .lock-screen, .keyword, .letter-final-btn, .keyword-modal, .final-modal');
  if (ignore) return;
  spawnParticles(e.touches[0].clientX, e.touches[0].clientY, 7, 'small');
}, { passive: true });

// =============================================
// PARTÍCULAS
// =============================================
function spawnParticles(x, y, count, type) {
  const isBig = type === 'big';
  const items = isBig ? EMOJI_BIG : EMOJI_SMALL;
  const words = isBig ? MAY_WORDS_BIG : MAY_WORDS_SMALL;
  const colors = isBig ? PARTICLE_COLORS_BIG : PARTICLE_COLORS_SMALL;
  const size = isBig ? 'particle-big' : 'particle-small';

  if (particlePool.length >= MAX_PARTICLES) return;

  for (let i = 0; i < count; i++) {
    if (particlePool.length >= MAX_PARTICLES) break;
    const el = document.createElement('div');
    el.className = 'particle ' + size;

    const useWord = Math.random() > 0.5;
    if (useWord) {
      el.textContent = words[Math.floor(Math.random() * words.length)];
      el.style.fontSize = isBig ? (Math.random() * 6 + 11) + 'px' : (Math.random() * 4 + 8) + 'px';
      el.style.color = colors[Math.floor(Math.random() * colors.length)];
      el.style.fontFamily = "'Dancing Script', cursive";
      el.style.fontWeight = '600';
      el.style.textShadow = '0 1px 4px rgba(190,24,93,0.4)';
    } else {
      el.textContent = items[Math.floor(Math.random() * items.length)];
      el.style.fontSize = isBig ? (Math.random() * 12 + 16) + 'px' : (Math.random() * 8 + 10) + 'px';
    }

    const angle = (Math.random() * Math.PI * 2);
    const speed = isBig ? (Math.random() * 80 + 60) : (Math.random() * 50 + 30);
    const vx = Math.cos(angle) * speed;
    const vy = -Math.abs(Math.sin(angle)) * speed - (isBig ? 60 : 40);

    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.position = 'fixed';
    el.style.pointerEvents = 'none';
    el.style.zIndex = '9500';

    const duration = isBig ? (Math.random() * 1000 + 1800) : (Math.random() * 800 + 1200);
    el.style.animation = 'none';

    document.body.appendChild(el);
    particlePool.push(el);

    const startTime = performance.now();
    const startX = x;
    const startY = y;
    const gravity = 80;

    function animateParticle(now) {
      const elapsed = (now - startTime) / 1000;
      const newX = startX + vx * elapsed;
      const newY = startY + vy * elapsed + 0.5 * gravity * elapsed * elapsed;
      const rotate = elapsed * (isBig ? 180 : 120);
      const opacity = Math.max(0, 1 - elapsed / (duration / 1000));
      const scale = Math.max(0.1, 1 - elapsed / (duration / 1000) * 0.7);

      el.style.left = newX + 'px';
      el.style.top = newY + 'px';
      el.style.transform = `rotate(${rotate}deg) scale(${scale})`;
      el.style.opacity = opacity;

      if (elapsed < duration / 1000 && opacity > 0) {
        requestAnimationFrame(animateParticle);
      } else {
        el.remove();
        const idx = particlePool.indexOf(el);
        if (idx !== -1) particlePool.splice(idx, 1);
      }
    }
    requestAnimationFrame(animateParticle);
  }
}

// =============================================
// MÚSICA
// =============================================
function initMusic() {
  if (!audioPlayer || PLAYLIST.length === 0) return;
  loadSong(0);
  audioPlayer.volume = 0.7;

  const tryPlay = () => {
    audioPlayer.play().catch(() => {});
    document.removeEventListener('click', tryPlay);
    document.removeEventListener('touchstart', tryPlay);
  };
  document.addEventListener('click', tryPlay, { once: true });
  document.addEventListener('touchstart', tryPlay, { once: true });
  setTimeout(() => audioPlayer.play().catch(() => {}), 500);
}

function loadSong(idx) {
  if (!audioPlayer || PLAYLIST.length === 0) return;
  currentSong = ((idx % PLAYLIST.length) + PLAYLIST.length) % PLAYLIST.length;
  const song = PLAYLIST[currentSong];
  audioPlayer.src = song.src;
  if (songName) songName.textContent = song.name;
  if (songNum) songNum.textContent = `${currentSong + 1} / ${PLAYLIST.length}`;
  if (isPlaying) audioPlayer.play().catch(() => {});
  updateMusicProgress();
}

function togglePlayPause() {
  if (!audioPlayer) return;
  if (isPlaying) {
    audioPlayer.pause();
    isPlaying = false;
    if (playPauseBtn) playPauseBtn.textContent = '▶';
  } else {
    audioPlayer.play().catch(() => {});
    isPlaying = true;
    if (playPauseBtn) playPauseBtn.textContent = '⏸';
  }
}

function formatTime(secs) {
  if (isNaN(secs)) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return m + ':' + (s < 10 ? '0' : '') + s;
}

function updateMusicProgress() {
  if (!audioPlayer) return;
  const pct = audioPlayer.duration ? (audioPlayer.currentTime / audioPlayer.duration * 100) : 0;
  if (musicProgFill) musicProgFill.style.width = pct + '%';
  if (musicProgThumb) musicProgThumb.style.left = pct + '%';
  if (currentTimeEl) currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
  if (totalTimeEl) totalTimeEl.textContent = formatTime(audioPlayer.duration);
}

if (audioPlayer) {
  audioPlayer.addEventListener('timeupdate', updateMusicProgress);
  audioPlayer.addEventListener('ended', () => {
    isPlaying = true;
    loadSong(currentSong + 1);
    audioPlayer.play().catch(() => {});
  });
  audioPlayer.addEventListener('play', () => {
    isPlaying = true;
    if (playPauseBtn) playPauseBtn.textContent = '⏸';
  });
  audioPlayer.addEventListener('pause', () => {
    isPlaying = false;
    if (playPauseBtn) playPauseBtn.textContent = '▶';
  });
  audioPlayer.addEventListener('loadedmetadata', updateMusicProgress);
}

if (playPauseBtn) playPauseBtn.addEventListener('click', (e) => { e.stopPropagation(); togglePlayPause(); });
if (prevSongBtn) prevSongBtn.addEventListener('click', (e) => { e.stopPropagation(); loadSong(currentSong - 1); if (isPlaying) audioPlayer.play().catch(() => {}); });
if (nextSongBtn) nextSongBtn.addEventListener('click', (e) => { e.stopPropagation(); loadSong(currentSong + 1); if (isPlaying) audioPlayer.play().catch(() => {}); });

if (musicProgBar) {
  const seekMusic = (e) => {
    e.stopPropagation();
    if (!audioPlayer || !audioPlayer.duration) return;
    const rect = musicProgBar.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audioPlayer.currentTime = pct * audioPlayer.duration;
  };
  musicProgBar.addEventListener('click', seekMusic);
  let dragging = false;
  musicProgBar.addEventListener('mousedown', () => dragging = true);
  document.addEventListener('mouseup', () => dragging = false);
  document.addEventListener('mousemove', (e) => { if (dragging && musicProgBar) seekMusic(e); });
}

if (volumeSlider && audioPlayer) {
  volumeSlider.addEventListener('input', (e) => {
    e.stopPropagation();
    audioPlayer.volume = e.target.value;
    const pct = e.target.value * 100;
    e.target.style.background = `linear-gradient(90deg, #f472b6 ${pct}%, rgba(251,182,206,0.4) ${pct}%)`;
  });
}

if (musicToggleBtn && musicPlayer) {
  musicToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    musicMinimized = !musicMinimized;
    musicPlayer.classList.toggle('minimized', musicMinimized);
    musicToggleBtn.textContent = musicMinimized ? '🎵' : '🎵';
  });
}

// =============================================
// LIMPIEZA DE PARTÍCULAS AL REDIMENSIONAR
// =============================================
window.addEventListener('resize', () => {
  particlePool.forEach(p => { if (!document.body.contains(p)) p.remove(); });
  particlePool = particlePool.filter(p => document.body.contains(p));
});
