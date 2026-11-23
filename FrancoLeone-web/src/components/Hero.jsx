const content = {
  es: {
    eyebrow: 'Desarrollo web · Diseño · Tecnología',
    description:
      'Desarrollo soluciones web cuidando tanto la experiencia como cada detalle técnico.',
    projectLink: 'Ver proyectos',
    aboutLink: 'Sobre mí',
    contactLink: 'Hablemos',
    invitation: 'Conocé mi trabajo o escribime para charlar.',
  },
  en: {
    eyebrow: 'Web development · Design · Technology',
    description:
      'I build web solutions with care for both the experience and every technical detail.',
    projectLink: 'View projects',
    aboutLink: 'About me',
    contactLink: "Let's talk",
    invitation: 'Explore my work or get in touch.',
  },
}

function Hero({ language = 'es' }) {
  const text = content[language === 'en' ? 'en' : 'es']

  return (
    <main className="flex-1 px-4 pb-8 pt-4 sm:px-7 sm:pt-6">
      <section
        className="flex min-h-[400px] flex-col items-center justify-center rounded-[28px] border border-[#e5e4e7] px-5 py-14 text-center sm:min-h-[470px] sm:px-10"
        aria-labelledby="hero-title"
      >
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#92713a] sm:text-xs">
          {text.eyebrow}
        </p>
        <h1
          className="m-0 text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[1.05] tracking-[-0.065em] text-[#171717]"
          id="hero-title"
        >
          Franco López Leone
        </h1>
        <p className="mt-5 max-w-[570px] text-sm leading-7 text-[#6b6375] sm:text-base">
          {text.description}
        </p>

        <div className="mt-9 flex w-full max-w-[520px] flex-col items-center gap-4 rounded-2xl bg-[#101112] p-5 text-white sm:flex-row sm:justify-between sm:px-6 sm:py-5">
          <p className="text-sm text-white/70">{text.invitation}</p>
          <div className="flex shrink-0 items-center gap-2">
            <a
              className="rounded-md bg-[#c4a66a] px-3 py-2 text-xs font-semibold text-[#171717] no-underline transition-colors hover:bg-[#d2b77f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
              href="#projects"
            >
              {text.projectLink}
            </a>
            <a
              className="rounded-md border border-white/20 px-3 py-2 text-xs font-medium text-white no-underline transition-colors hover:border-white/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
              href="#contact"
            >
              {text.contactLink}
            </a>
          </div>
        </div>

        <a
          className="mt-5 text-xs text-[#6b6375] underline decoration-[#c4a66a] underline-offset-4 transition-colors hover:text-[#171717] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700 motion-reduce:transition-none"
          href="#about"
        >
          {text.aboutLink}
        </a>
      </section>
    </main>
  )
}

export default Hero
