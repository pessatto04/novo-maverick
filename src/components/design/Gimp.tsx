import { usePageAnimation } from '../../hooks/usePageAnimation';

function Gimp() {
  const ref = usePageAnimation({ type: 'scaleIn', selector: '.anim', stagger: 0.1 });

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim">
        <h3><i className="bi bi-brush me-2 text-secondary" />GIMP</h3>
        <span className="badge bg-secondary fs-6 mb-3 px-3 py-2 rounded-pill">Editor de Imagem</span>
      </div>

      <div className="row g-4 align-items-center mt-2">
        <div className="col-lg-5 anim">
          <div className="card mv-card border-0 shadow-sm overflow-hidden">
            <img src="/img/Gimp.png" alt="GIMP Interface" className="img-fluid" style={{ objectFit: 'cover' }} />
          </div>
        </div>

        <div className="col-lg-7 anim">
          <h5 className="fw-bold mb-3">O editor de imagens livre mais poderoso do mundo</h5>
          <p className="text-secondary">
            O GIMP (GNU Image Manipulation Program) é um software livre e de código aberto para edição e manipulação de imagens. Amplamente utilizado como alternativa gratuita ao Adobe Photoshop, oferece um conjunto robusto de ferramentas para retoque fotográfico, composição de imagens e criação artística.
          </p>
          <p className="text-secondary">
            Suporta camadas, máscaras, filtros avançados, canais de cores e scripts personalizáveis (Script-Fu e Python-Fu). Sua arquitetura extensível por plugins permite expandir funcionalidades, tornando-o ideal tanto para uso acadêmico quanto profissional em projetos de design gráfico e web.
          </p>
          <a
            href="https://www.gimp.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary d-inline-flex align-items-center gap-2 mt-2"
          >
            Visitar site oficial
            <i className="bi bi-box-arrow-up-right" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Gimp;