function Img() {
  return (
    <>
      <h3>Edição de Imagens</h3>
      <img src="../../public/img/Gimp2.png" style={{ width: '300px', maxWidth: '100%' }} />
      <p>
        A edição de imagens é o processo de modificar, otimizar e transformar fotografias e gráficos 
        digitais. No contexto do desenvolvimento web e de interfaces, ela é fundamental para ajustar 
        resoluções, tratar imagens e criar ativos gráficos que compõem o design visual de uma aplicação. 
        Para essa finalidade, utilizamos o <strong>GIMP (GNU Image Manipulation Program)</strong>, um 
        editor de gráficos rasterizados gratuito e de código aberto (<strong>open-source</strong>). Ele é 
        amplamente utilizado para retoque de fotos, composição de imagens e criação de texturas, 
        destacando-se na comunidade acadêmica e profissional como uma das principais e mais robustas 
        alternativas ao Adobe Photoshop. Saiba mais no{' '}
        <a 
          href="https://www.gimp.org/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          site oficial do GIMP
        </a>.
      </p>
    </>
  );
}

export default Img;