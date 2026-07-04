import { NavLink } from "react-router";
import { useState, useRef, useEffect } from "react";
import Menu from "./Menu";
import ThemeToggle from "./ThemeToggle";
import text from "../constants/text";

interface SidebarProps {
  tema: 'claro' | 'escuro';
  toggleTema: () => void;
}

const disciplinas = [
  {
    key: 'slides',
    label: 'Slides',
    icon: 'bi-presentation-play',
    path: 'slides',
    tags: ['slides'],
    subitens: [],
  },
  {
    key: 'front1',
    label: 'Front-End 1',
    icon: '',
    path: 'front1',
    tags: ['front', 'front1', 'html', 'css', 'bootstrap', 'tailwind', 'imagem'],
    subitens: [
      { label: 'HTML',             icon: 'bi-filetype-html', path: 'front1/html',      tags: ['html'] },
      { label: 'CSS',              icon: 'bi-filetype-css',  path: 'front1/css',       tags: ['css'] },
      { label: 'Bootstrap',        icon: 'bi-bootstrap',     path: 'front1/bootstrap', tags: ['bootstrap'] },
      { label: 'Tailwind CSS',     icon: 'bi-wind',          path: 'front1/tailwind',  tags: ['tailwind', 'css'] },
      { label: 'Edição de Imagem', icon: 'bi-image',         path: 'front1/img',       tags: ['imagem', 'img'] },
    ],
  },
  {
    key: 'front2',
    label: 'Front-End 2',
    icon: '',
    path: 'front2',
    tags: ['front', 'front2', 'javascript', 'js', 'gsap', 'react'],
    subitens: [
      { label: 'JavaScript', icon: 'bi-filetype-js',      path: 'front2/js',    tags: ['javascript', 'js'] },
      { label: 'GSAP',       icon: 'bi-lightning-charge', path: 'front2/gsap',  tags: ['gsap', 'animacao'] },
      { label: 'React',      icon: 'bi-diagram-3',        path: 'front2/react', tags: ['react'] },
    ],
  },
  {
    key: 'design',
    label: 'Design Gráfico',
    icon: '',
    path: 'design',
    tags: ['design', 'figma', 'pencil', 'gimp'],
    subitens: [
      { label: 'Figma',  icon: 'bi-vector-pen', path: 'design/figma',  tags: ['figma'] },
      { label: 'Pencil', icon: 'bi-pencil',     path: 'design/pencil', tags: ['pencil'] },
      { label: 'GIMP',   icon: 'bi-brush',      path: 'design/gimp',   tags: ['gimp'] },
    ],
  },
  {
    key: 'ihc',
    label: 'IHC',
    icon: '',
    path: 'ihc',
    tags: ['ihc', 'teoria', 'teste', 'heuristica', 'usabilidade', 'interacao'],
    subitens: [
      { label: 'Teoria',               icon: 'bi-book',         path: 'ihc/teoria',     tags: ['teoria', 'interacao'] },
      { label: 'Teste de Usabilidade', icon: 'bi-person-check', path: 'ihc/teste',      tags: ['teste', 'usabilidade'] },
      { label: 'Avaliação Heurística', icon: 'bi-list-check',   path: 'ihc/heuristica', tags: ['heuristica'] },
    ],
  },
];

export default function Sidebar({ tema, toggleTema }: SidebarProps) {
  const [busca, setBusca] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const filtro = busca.trim().toLowerCase();

  const bate = (tags: string[]) =>
    filtro === '' || tags.some(t => t.includes(filtro));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <aside className="mv-sidebar">
      <img src="/img/logoUTFPR.png" alt="Logo UTFPR" className="mv-logo" />

      <NavLink to="/" className="mv-site-title">{text.title}</NavLink>
      <p className="mv-site-subtitle">{text.subtitle}</p>

      <ThemeToggle theme={tema} onToggle={toggleTema} />

      <Menu />

      <div className="mv-search-wrapper">
        <i className="bi bi-search mv-search-icon" />
        <input
          ref={inputRef}
          type="text"
          className="mv-search-input"
          placeholder="Buscar disciplina..."
          value={busca}
          onChange={e => setBusca(e.target.value)}
          aria-label="Buscar disciplina"
        />
        {busca && (
          <button
            className="mv-search-clear"
            onClick={() => { setBusca(''); inputRef.current?.focus(); }}
            aria-label="Limpar busca"
          >
            <i className="bi bi-x" />
          </button>
        )}
        <span className="mv-search-hint">Ctrl+K</span>
      </div>

      <nav className="mv-disciplines">
        {disciplinas.map(disc => {
          const subcsBatendo = disc.subitens.filter(s => bate(s.tags));
          const discBate = bate(disc.tags) || subcsBatendo.length > 0;
          if (!discBate) return null;

          return (
            <div key={disc.key} className={`mv-discipline ${disc.key}`}>
              <h3>
                <NavLink to={disc.path}>
                  {disc.icon && <i className={`bi ${disc.icon} me-2 text-primary`} />}
                  {disc.label}
                </NavLink>
              </h3>

              {disc.subitens.length > 0 && (
                <ul>
                  {disc.subitens
                    .filter(s => filtro === '' || bate(s.tags))
                    .map(sub => (
                      <li key={sub.path}>
                        <NavLink to={sub.path}>
                          <i className={`bi ${sub.icon} me-1`} />
                          {sub.label}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          );
        })}

        {disciplinas.every(d => {
          const subcsBatendo = d.subitens.filter(s => bate(s.tags));
          return !bate(d.tags) && subcsBatendo.length === 0;
        }) && (
          <p className="mv-search-empty">
            <i className="bi bi-emoji-frown me-1" />
            Nenhum resultado para "<strong>{busca}</strong>"
          </p>
        )}
      </nav>
    </aside>
  );
}