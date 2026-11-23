import { useState } from 'react'

const navigation = {
  es: [
    { label: 'Experiencias', href: '#experience' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
    { label: 'Sobre mí', href: '#about' },
  ],
  en: [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'About me', href: '#about' },
  ],
}

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.5 0-1.21.43-2.2 1.15-2.97-.12-.28-.5-1.4.11-2.92 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.52.23 2.64.11 2.92.72.77 1.15 1.76 1.15 2.97 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.12c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
        />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.96V9h2.97v9.45ZM6.45 7.71a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.74h-2.96v-4.6c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44v4.68H9.2V9h2.84v1.29h.04c.4-.74 1.36-1.52 2.8-1.52 3 0 3.57 1.97 3.57 4.53v5.15Z"
        />
      </svg>
    ),
  },
  {
    label: 'Reddit',
    href: 'https://www.reddit.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M14.4 3.3a1.7 1.7 0 1 1 2.91 1.2l-.03.03.61 2.85a8.8 8.8 0 0 1 3.06 1.5 1.9 1.9 0 1 1-1.13 1.28 7.07 7.07 0 0 0-1.74-.94c.25.56.39 1.18.39 1.83 0 3.25-2.88 5.88-6.44 5.88s-6.44-2.63-6.44-5.88c0-.65.14-1.27.39-1.83a7.07 7.07 0 0 0-1.74.94 1.9 1.9 0 1 1-1.13-1.28 8.8 8.8 0 0 1 3.06-1.5l.61-2.85a1.7 1.7 0 0 1 2.73 1.15c.8-.16 1.65-.25 2.52-.25.61 0 1.21.05 1.79.15l-.41-1.91a1.7 1.7 0 0 1-.99-.37Zm-4.9 8.64a1.07 1.07 0 1 0 0 2.14 1.07 1.07 0 0 0 0-2.14Zm5 3.68a3.62 3.62 0 0 1-5 0 .55.55 0 0 0-.78.78 4.72 4.72 0 0 0 6.56 0 .55.55 0 0 0-.78-.78Zm.07-3.68a1.07 1.07 0 1 0 0 2.14 1.07 1.07 0 0 0 0-2.14Z"
        />
      </svg>
    ),
  },
]

function Navbar({ language = 'es', onLanguageChange = () => {} }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeLanguage = language === 'en' ? 'en' : 'es'

  const selectLanguage = (nextLanguage) => {
    onLanguageChange(nextLanguage)
    setMenuOpen(false)
  }

  return (
    <header
      className="sticky top-0 z-10 w-full border-b border-[#e8e5df] bg-white/95 backdrop-blur-[14px]"
      id="top"
    >
      <div className="mx-auto flex min-h-[76px] w-full items-center justify-between gap-6 px-7 text-[#171717] max-[860px]:min-h-[68px] max-[860px]:px-5">
        <a
          className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap text-[15px] font-semibold tracking-[-0.035em] text-inherit no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
          href="#top"
          aria-label="FrancoLeone - ir al inicio"
          onClick={() => setMenuOpen(false)}
        >
          <img
            className="block size-[38px] rounded-full object-cover"
            src="/logo.png"
            alt=""
          />
          <span>FrancoLeone</span>
        </a>

        <button
          className="hidden size-[38px] shrink-0 cursor-pointer flex-col justify-center gap-[5px] rounded-lg border border-[#e8e5df] bg-transparent p-[9px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700 max-[860px]:flex"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="navbar-actions"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span className="h-[1.5px] w-full bg-[#171717]" />
          <span className="h-[1.5px] w-full bg-[#171717]" />
          <span className="h-[1.5px] w-full bg-[#171717]" />
        </button>

        <div
          className={`flex items-center gap-[clamp(18px,2.4vw,36px)] max-[860px]:absolute max-[860px]:left-0 max-[860px]:right-0 max-[860px]:top-[calc(100%+1px)] max-[860px]:items-start max-[860px]:flex-col max-[860px]:gap-5 max-[860px]:border-b max-[860px]:border-[#e8e5df] max-[860px]:bg-white max-[860px]:p-5 max-[860px]:shadow-[0_12px_20px_rgba(23,23,23,0.06)] ${menuOpen ? 'max-[860px]:flex' : 'max-[860px]:hidden'}`}
          id="navbar-actions"
        >
          <nav
            className="flex items-center gap-[clamp(14px,2vw,28px)] max-[860px]:w-full max-[860px]:items-start max-[860px]:flex-col max-[860px]:gap-[18px]"
            aria-label="Navegación principal"
          >
            {navigation[activeLanguage].map(({ label, href }) => (
            <a
              className="whitespace-nowrap text-[13px] font-medium text-[#4b4a47] no-underline transition-colors hover:text-[#a77c25] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700 motion-reduce:transition-none max-[860px]:text-sm"
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          </nav>

          <div className="flex items-center gap-[14px]" aria-label="Redes sociales">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              className="size-[19px] text-[#4b4a47] transition-[color,transform] hover:-translate-y-px hover:text-[#a77c25] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700 motion-reduce:transition-none"
              key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>

          <div
            className="flex items-center gap-[7px] border-l border-[#dedbd4] pl-[18px] max-[860px]:border-l-0 max-[860px]:border-t max-[860px]:border-[#dedbd4] max-[860px]:pl-0 max-[860px]:pt-4"
            aria-label="Seleccionar idioma"
          >
            {['es', 'en'].map((option) => (
              <button
                className={`cursor-pointer border-0 bg-transparent px-0.5 py-1 text-[11px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700 motion-reduce:transition-none ${activeLanguage === option ? 'text-[#171717]' : 'text-[#85827c] hover:text-[#171717]'}`}
                key={option}
                type="button"
                aria-pressed={activeLanguage === option}
                onClick={() => selectLanguage(option)}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar