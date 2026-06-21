import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Design() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("h3", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    tl.from("img", {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    }, "-=0.3");

    tl.from("h4, p, ul", {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: "power1.out",
    }, "-=0.4");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
      <h3>Design Gráfico</h3>
      
      <img src="/img/Gimp.png" style={{ width: '450px', maxWidth: '100%' }} alt="Interface do GIMP" />
      
      <h4>Ementa</h4>
      <p style={{ lineHeight: '1.6' }}>
        Princípios da comunicação visual aplicados ao meio digital. Tipografia. Cor. Imagem digital: dimensão, resolução e formatos. Construção de imagens e composições.
        Uso de software para design gráfico e edição de imagens digitais.
      </p>
      
      <h4>Duração</h4>
      <p>30h</p>

      <h4>Objetivos de Aprendizagem</h4>
      <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: '1.6' }}>
        <li>Capacitar os alunos a utilizar ferramentas de prototipagem e design gráfico para criar projetos visuais.</li>
        <li>Compreender e aplicar os princípios fundamentais da comunicação visual e do design responsivo em projetos práticos de layout.</li>
        <li>Manipular imagens digitais controlando suas dimensões, resoluções, formatos e ajustes fundamentais como brilho e contraste.</li>
        <li>Desenvolver interfaces e protótipos de layouts criativos e inovadores para aplicações móveis e desktop, combinando de forma harmônica tipografia, cores e elementos gráficos.</li>
      </ul>

      <h4>Conteúdos:</h4>
      <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: '1.6' }}>
        <li>
          <strong>Princípios de Comunicação Visual:</strong> Elementos fundamentais do design (linhas, formas, cores, texturas e tipografia).
          Aplicação prática de conceitos de equilíbrio, contraste, hierarquia, proporção, unidade e ênfase em layouts.
        </li>
        <li>
          <strong>Imagem Digital e Edição:</strong> Conceitos de dimensão, resolução e formatos de imagens digitais. Apresentação e uso de software de
          edição de imagens com suas ferramentas de seleção, corte, redimensionamento, ajuste de brilho e contraste.
        </li>
        <li>
          <strong>Prototipagem e Interação:</strong> Introdução à prototipagem de interfaces e criação de protótipos-layout. Configuração de ferramentas
          específicas e uso da paleta de componentes para o desenvolvimento de páginas Web e interfaces de dispositivos móveis.
          Criação de transições, efeitos para usabilidade e práticas de trabalho colaborativo em equipe (compartilhamento, comentários e revisões).
        </li>
      </ul>

      <h4>Ferramentas e Tecnologias</h4>
      <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: '1.6' }}>
        <li><strong>Software de Edição de Imagens Digitais</strong>: Ferramenta dedicada ao tratamento, corte, ajuste e manipulação técnica de elementos visuais e composições.</li>
        <li><strong>Ferramenta de Prototipação</strong>: Plataforma digital voltada à construção de componentes, desenho de layouts responsivos para web/mobile e criação de interações e transições.</li>
      </ul>
    </div>
  );
}

export default Design;