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
    text: "Meu sorriso ficou perfeito. Muito obrigada!",
    name: "Ana Costa"
  },
  {
    text: "Atendimento em casa foi muito prático e seguro.",
    name: "Carlos Oliveira"
  },
  {
    text: "Melhor clínica que já fui. Voltarei com certeza!",
    name: "Fernanda Martins"
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