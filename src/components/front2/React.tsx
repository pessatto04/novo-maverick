import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function ReactComponent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("h3", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    tl.from("h4, p, ul", {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: "power1.out",
    }, "-=0.3");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
      <h3>React JS</h3>

      <p style={{ lineHeight: '1.6' }}>
        O <strong>React</strong> é uma biblioteca JavaScript para a criação de interfaces de usuário interativas e reutilizáveis.
        Ele permite construir aplicações web de forma eficiente por meio de componentes, facilitando a organização
        e a manutenção do código.
      </p>

      <h4>Características Principais:</h4>
      <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: '1.6' }}>
        <li>
          <strong>Componentização:</strong> Permite dividir a interface em componentes reutilizáveis e independentes.
        </li>
        <li>
          <strong>Virtual DOM:</strong> Atualiza na tela apenas o que mudou de fato, otimizando o render e tornando a aplicação muito mais rápida.
        </li>
        <li>
          <strong>Fluxo de Dados Unidirecional:</strong> Os dados fluem de forma organizada dos componentes pais para os filhos, tornando o comportamento previsível.
        </li>
        <li>
          <strong>JSX:</strong> Combina JavaScript e HTML em uma sintaxe simples e intuitiva para criar as interfaces.
        </li>
      </ul>
    </div>
  );
}

export default ReactComponent;