// Objeto com os dados de cada modal
const modalData = {
    'dsd': {
      title: 'Diagnóstico Clínico Digital do Sorriso',
      image: 'imagens/dsd.jpg',
      description: 'O Digital Smile Design (DSD) é uma revolução no planejamento odontológico. Utilizando fotos e vídeos de alta qualidade, criamos um modelo digital do seu sorriso, permitindo que você participe ativamente do processo de design e veja o resultado final antes mesmo de qualquer procedimento ser iniciado.',
      subtitle: 'Principais Vantagens do DSD:',
      listItems: [
        '<strong>Visualização prévia do resultado:</strong> Veja uma simulação realista do seu novo sorriso.',
        '<strong>Planejamento preciso e personalizado:</strong> Cada detalhe é ajustado digitalmente para harmonia facial.',
        '<strong>Maior previsibilidade:</strong> Garante que o resultado final corresponda exatamente ao planejado.',
        '<strong>Comunicação clara:</strong> Facilita o entendimento entre dentista e paciente sobre os objetivos.',
        '<strong>Redução do tempo de tratamento:</strong> O planejamento digital otimiza cada etapa do processo.'
      ]
    },
    'reabilitacao': {
      title: 'Reabilitação Oral',
      image: 'imagens/reparacao.jpeg',
      description: 'A reabilitação oral visa restaurar a saúde, função e estética bucal de forma completa. Combinamos diversas especialidades, como implantodontia, prótese e periodontia, para devolver a você a capacidade de sorrir, mastigar e falar com total confiança e conforto.',
      subtitle: 'Nossos procedimentos incluem:',
      listItems: [
        '<strong>Implantes dentários:</strong> Reposição de dentes perdidos com a mais moderna tecnologia.',
        '<strong>Próteses fixas e removíveis:</strong> Soluções personalizadas para cada caso, garantindo naturalidade.',
        '<strong>Coroas e pontes estéticas:</strong> Feitas com materiais que imitam perfeitamente o dente natural.',
        '<strong>Restaurações complexas:</strong> Recuperação de dentes danificados com materiais de alta qualidade.',
        '<strong>Recuperação da autoestima:</strong> Um sorriso completo e funcional melhora significativamente a qualidade de vida.'
      ]
    },
    'gengiva': {
      title: 'Tratamento da Gengiva',
      image: 'imagens/gengiva.jpg',
      description: 'A saúde da gengiva é a base para um sorriso duradouro. Tratamos desde a gengivite (inflamação inicial) até a periodontite (estágio avançado que causa perda óssea), utilizando técnicas modernas para paralisar a doença e preservar a estrutura dental.',
      subtitle: 'Sinais de alerta que tratamos:',
      listItems: [
        '<strong>Prevenção e tratamento de gengivites:</strong> Controle da inflamação e orientação de higiene.',
        '<strong>Combate à periodontite:</strong> Procedimentos de raspagem e alisamento para remover tártaro profundo.',
        '<strong>Eliminação de sangramento gengival:</strong> Um dos principais sinais de inflamação.',
        '<strong>Tratamento de mau hálito:</strong> Frequentemente associado a problemas periodontais.',
        '<strong>Técnicas modernas:</strong> Abordagens eficazes para manter sua gengiva saudável.'
      ]
    },
    'proteses': {
      title: 'Próteses: Convencionais e Sobre Implantes',
      image: 'imagens/protese.webp',
      description: 'Oferecemos soluções protéticas para substituir um ou mais dentes perdidos. As próteses sobre implantes, como o protocolo fixo, são a alternativa mais moderna, oferecendo estabilidade e conforto superiores, enquanto as próteses convencionais continuam sendo uma opção viável para muitos casos.',
      subtitle: 'Opções disponíveis:',
      listItems: [
        '<strong>Próteses totais (dentaduras):</strong> Restauram todos os dentes de uma arcada.',
        '<strong>Próteses parciais removíveis:</strong> Substituem alguns dentes perdidos.',
        '<strong>Próteses fixas sobre implantes (protocolo):</strong> A solução mais segura e confortável para reabilitação total.',
        '<strong>Coroas sobre implantes:</strong> Para a perda de um único dente.',
        '<strong>Resultados estéticos:</strong> Materiais que garantem uma aparência natural e harmoniosa.'
      ]
    },
    'infantil': {
      title: 'Atendimento Infantil (Odontopediatria)',
      image: 'imagens/crianca.jpeg',
      description: 'Cuidar do sorriso desde cedo é fundamental. Nosso atendimento infantil é focado em criar uma experiência positiva e educativa, prevenindo problemas futuros e garantindo que a criança cresça sem medo de ir ao dentista. Acompanhamos desde os primeiros dentes de leite até a adolescência.',
      subtitle: 'Foco do nosso atendimento:',
      listItems: [
        '<strong>Primeira consulta acolhedora:</strong> Para familiarizar a criança com o ambiente.',
        '<strong>Prevenção e orientação:</strong> Ensinamos os pais e a criança sobre a higiene bucal correta.',
        '<strong>Aplicação de flúor e selantes:</strong> Proteção extra contra as cáries.',
        '<strong>Tratamento de cáries:</strong> Abordagem lúdica e sem traumas.',
        '<strong>Construindo confiança:</strong> Nosso objetivo é criar uma relação de amizade e cuidado.'
      ]
    },
    'endodontia': {
      title: 'Tratamento Endodôntico (Canal)',
      image: 'imagens/Atendimento domiciliar.jpg',
      description: 'O tratamento de canal é necessário quando a polpa do dente (o "nervo") inflama ou infecciona. Com tecnologia de ponta, como microscópios e instrumentos rotatórios, o procedimento se tornou rápido, preciso e indolor, permitindo salvar o dente e eliminar a dor de forma eficaz.',
      subtitle: 'Nossa tecnologia garante:',
      listItems: [
        '<strong>Microscopia operatória:</strong> Visualização ampliada para um tratamento mais preciso.',
        '<strong>Instrumentos rotatórios:</strong> Agilizam e tornam a limpeza do canal mais eficiente.',
        '<strong>Tratamento em sessão única:</strong> Na maioria dos casos, é possível finalizar em apenas uma consulta.',
        '<strong>Anestesia eficaz sem dor:</strong> Conforto total durante todo o procedimento.',
        '<strong>Preservação do dente:</strong> A melhor opção é sempre manter seu dente natural.'
      ]
    },
    'lentes': {
      title: 'Lentes de Porcelana ou de Resina',
      image: 'imagens/lentes.jpg',
      description: 'As lentes de contato dentais são facetas ultrafinas aplicadas sobre os dentes para corrigir cor, formato, tamanho e alinhamento, resultando em uma transformação completa do sorriso. Podem ser feitas de porcelana, para máxima durabilidade e estética, ou de resina, para resultados mais rápidos.',
      subtitle: 'Ideal para corrigir:',
      listItems: [
        '<strong>Manchas e descolorações:</strong> Dentes amarelados ou manchados.',
        '<strong>Pequenos desalinhamentos:</strong> Alternativa rápida à ortodontia em alguns casos.',
        '<strong>Espaços entre os dentes (diastemas):</strong> Fechamento de espaços indesejados.',
        '<strong>Dentes desgastados ou quebrados:</strong> Restaura o formato e a integridade do dente.',
        '<strong>Sorriso dos sonhos:</strong> Obtenha o sorriso que você sempre quis de forma rápida e duradoura.'
      ]
    },
    'ortodontia': {
      title: 'Tratamento Ortodôntico com Aparelhos Invisíveis',
      image: 'imagens/invisalign.jpg',
      description: 'Alinhe seus dentes de forma discreta, confortável e eficiente com os alinhadores invisíveis. Feitos sob medida, eles são removíveis, o que facilita a alimentação e a higiene. O tratamento é planejado digitalmente, permitindo visualizar o resultado final antes mesmo de começar.',
      subtitle: 'Vantagens dos Alinhadores Invisíveis:',
      listItems: [
        '<strong>Estética:</strong> Praticamente imperceptíveis durante o uso.',
        '<strong>Conforto:</strong> Sem fios ou bráquetes que possam machucar a boca.',
        '<strong>Higiene:</strong> Removíveis para escovação e uso do fio dental.',
        '<strong>Previsibilidade:</strong> O planejamento 3D mostra cada etapa do tratamento.',
        '<strong>Liberdade:</strong> Coma o que quiser sem restrições.'
      ]
    }
  };
  
  // Elementos do DOM do Modal
  const modal = document.getElementById('serviceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalDescription = document.getElementById('modalDescription');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalList = document.getElementById('modalList');
  
  // Função para abrir o modal e preencher com os dados
  function openModal(serviceId) {
    const data = modalData[serviceId];
    if (!data) return; // Se não encontrar dados, não faz nada
  
    modalTitle.textContent = data.title;
    modalImage.src = data.image;
    modalDescription.textContent = data.description;
    modalSubtitle.textContent = data.subtitle;
  
    // Limpa a lista anterior
    modalList.innerHTML = '';
    // Preenche a lista com os novos itens
    data.listItems.forEach(itemText => {
      const li = document.createElement('li');
      li.innerHTML = itemText; // innerHTML para permitir tags como <strong>
      modalList.appendChild(li);
    });
  
    modal.style.display = 'block';
  }
  
  // Função para fechar o modal
  function closeModal() {
    modal.style.display = 'none';
  }
  
  // Fecha o modal se o usuário clicar fora da área de conteúdo
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  }