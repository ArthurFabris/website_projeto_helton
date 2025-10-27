document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  // Shrink header ao rolar a página
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });

  // Abre/fecha menu no mobile
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});

// Testimonials Data
const testimonials = [
  {
    text: "Agradeço ao Dr. Helton pelo cuidado excepcional. Ele cuidou da minha saúde bucal e foi muito atencioso em todo o procedimento. Além da infraestrutura moderna. Parabéns Dr. Helton pelo cuidado e carinho. 🥰",
    name: "Diane Melo"
  },
  {
    text: "Quero aqui agradecer o atendimento exemplar que Dr Helton tem prestado a mim. Sempre se prontificou em me atender e sanar qualquer tipo de desconforto, todas as vezes que liguei de imediato mostrou-se ser um profissional com excelência no conhecimento no tratamento humanizado. Parabéns pelo ótimo trabalho. 👏👏👏👏👏",
    name: "Hariadna Lima Prates"
  },
  {
    text: "Drº Helton foi extremamente atencioso, pontual e cuidadoso em cada etapa do atendimento. Explicou todo o procedimento com clareza, utilizou materiais adequados, além de empatia e respeito. Hoje sinto alívio, confiança e sigo com o tratamento, sabendo que estou sendo acompanhada por alguém que realmente se preocupa com o bem-estar do paciente.",
    name: "Maria de Fátima Lima"
  },
  {
    text: "Fiz implantes dentários e o resultado mudou minha autoestima. Atendimento excelente, profissionalismo e cuidado em todas as etapas. Voltei a sorrir com confiança. Obrigado Drº Helton.",
    name: "Paulo Freitas Sousa"
  },
  {
    text: "O Dr. Helton escolheu a profissão que ama mesmo, além de ser um excelente profissional no que faz, é atencioso, cuidadoso e o mais importante, humano. Cuida com muito zelo de seus pacientes e acompanha o tempo necessário na realização do procedimento. Agradeço a Deus por ter colocado o Dr. Helton como o profissional para cuidar da minha saúde bucal.",
    name: "Adriana Simon"
  }
];

let currentTestimonial = 0;

function showTestimonial(direction) {
  const testimonial = testimonials[currentTestimonial];
  const textElement = document.getElementById('testimonial-text');
  const nameElement = document.getElementById('testimonial-name');
  
  // Remove both classes to reset
  textElement.classList.remove('slide-in-right', 'slide-in-left');
  
  // Trigger reflow
  void textElement.offsetWidth;
  
  // Apply animation based on button clicked
  if (direction === 'next') {
    textElement.classList.add('slide-in-left');
  } else {
    textElement.classList.add('slide-in-right');
  }
  
  textElement.textContent = `"${testimonial.text}"`;
  nameElement.textContent = testimonial.name;
}

document.getElementById('prev-testimonial').addEventListener('click', () => {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial('prev');
});

document.getElementById('next-testimonial').addEventListener('click', () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial('next');
});

// Initialize
showTestimonial('next');




// ==========================
// BEFORE/AFTER SLIDER - MÚLTIPLOS SLIDERS
// ==========================

// Seleciona TODOS os sliders da página
const allSliders = document.querySelectorAll('.before-after-slider');

allSliders.forEach((sliderContainer) => {
  const slider = sliderContainer.querySelector('.slider-control');
  const beforeImage = sliderContainer.querySelector('.before-image');
  const sliderButton = sliderContainer.querySelector('.slider-button');

  // Verifica se todos os elementos existem
  if (!slider || !beforeImage || !sliderButton) return;

  // Função para atualizar a posição do slider
  function updateSlider(value) {
    // Garante que o valor está entre 0 e 100
    value = Math.max(0, Math.min(100, value));
    
    // Atualiza o clip-path da imagem "antes"
    beforeImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
    
    // Atualiza a posição do botão do slider
    sliderButton.style.left = `${value}%`;
    
    // Atualiza o valor do input
    slider.value = value;
  }

  // Evento quando o usuário arrasta o slider (input range)
  slider.addEventListener('input', (e) => {
    updateSlider(e.target.value);
  });

  // Suporte para mouse
  let isDragging = false;

  sliderContainer.addEventListener('mousedown', () => {
    isDragging = true;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  sliderContainer.addEventListener('mouseleave', () => {
    isDragging = false;
  });

  sliderContainer.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const rect = sliderContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      updateSlider(percentage);
    }
  });

  // Suporte para touch em mobile
  sliderContainer.addEventListener('touchstart', () => {
    isDragging = true;
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
  });

  sliderContainer.addEventListener('touchmove', (e) => {
    if (isDragging) {
      const rect = sliderContainer.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      updateSlider(percentage);
      e.preventDefault(); // Previne scroll enquanto arrasta
    }
  });

  // Clique direto na imagem também move o slider
  sliderContainer.addEventListener('click', (e) => {
    // Ignora se o clique foi no input range
    if (e.target === slider) return;
    
    const rect = sliderContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    updateSlider(percentage);
  });
});