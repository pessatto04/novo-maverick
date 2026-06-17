function Heuristica() {
  return (
    <>
      <h3>Avaliação Heurística</h3>

      <p>
        A Avaliação Heurística é um método de inspeção de usabilidade que ajuda a identificar problemas de usabilidade na interface do usuário. Ela é realizada por avaliadores especialistas que analisam a interface e julgam sua conformidade com princípios de usabilidade reconhecidos (as chamadas "heurísticas").
      </p>

      <h4>Por que realizar a Avaliação Heurística?</h4>
      <ul>
        <li>Pode ser realizada logo no início do projeto, inclusive com esboços ou protótipos de baixa fidelidade.</li>
        <li>Ajuda a garantir que a interface siga padrões consolidados de design e comportamento esperado do usuário.</li>
        <li>Permite corrigir problemas de usabilidade graves antes de conduzir testes mais caros com usuários reais.</li>
      </ul>

      <h4>As 10 Heurísticas de Usabilidade de Jakob Nielsen</h4>
      <p>
        Desenvolvidas por Jakob Nielsen e Rolf Molich, essas 10 diretrizes gerais de design de interface de usuário são amplamente utilizadas para avaliar a qualidade de sistemas interativos:
      </p>

      <ol style={{ paddingLeft: '20px', listStyleType: 'decimal', margin: '16px 0' }}>
        <li style={{ marginBottom: '12px' }}>
          <strong>Visibilidade do status do sistema:</strong> O sistema deve sempre manter os usuários informados sobre o que está acontecendo por meio de feedback apropriado no tempo certo.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong>Compatibilidade entre o sistema e o mundo real:</strong> O sistema deve falar a linguagem do usuário, usando palavras, frases e conceitos familiares ao usuário, em vez de jargões técnicos do sistema.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong>Controle e liberdade do usuário:</strong> Os usuários frequentemente realizam ações por engano. O sistema deve oferecer uma "saída de emergência" clara para retornar ao estado anterior sem complicações (como desfazer e refazer).
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong>Consistência e padrões:</strong> O usuário não deve ter dúvidas se diferentes termos, situações ou ações significam a mesma coisa. O design deve seguir as convenções da plataforma e do próprio sistema.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong>Prevenção de erros:</strong> Melhor do que projetar ótimas mensagens de erro é evitar que os erros ocorram. Remova opções propensas a erro ou exiba uma confirmação antes de executar ações críticas.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong>Reconhecimento em vez de memorização:</strong> Reduza a carga cognitiva do usuário tornando objetos, ações e opções visíveis. O usuário não deve precisar lembrar de informações de uma tela para outra.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong>Flexibilidade e eficiência de uso:</strong> O sistema deve acomodar tanto usuários inexperientes quanto experientes. Atalhos de teclado ou aceleradores (invisíveis aos novatos) tornam a interação de usuários avançados muito mais rápida.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong>Design estético e minimalista:</strong> Interfaces não devem conter informações irrelevantes ou raramente necessárias. Informação extra concorre com a informação essencial, reduzindo sua visibilidade.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong>Suporte para diagnóstico e recuperação de erros:</strong> Mensagens de erro devem ser expressas em linguagem clara (sem códigos obscuros), apontar precisamente o problema e sugerir uma solução construtiva.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong>Ajuda e documentação:</strong> Embora seja melhor que o sistema funcione sem manuais, pode ser necessário fornecer ajuda. Ela deve ser fácil de buscar, focada nas tarefas do usuário e detalhar passos objetivos.
        </li>
      </ol>
    </>
  );
}

export default Heuristica;
