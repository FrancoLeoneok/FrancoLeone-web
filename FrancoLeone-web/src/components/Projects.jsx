const content = {
  es: {
    eyebrow: 'Open source',
    title: 'Proyectos seleccionados',
  },
  en: {
    eyebrow: 'Open source',
    title: 'Selected projects',
  },
}

function Projects({ language = 'es' }) {
  const text = content[language === 'en' ? 'en' : 'es']

  return (
    <section
      className="scroll-mt-24 border-t border-[#e5e4e7] px-5 py-14 sm:px-10 sm:py-16"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto w-full max-w-[980px] text-left">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#92713a] sm:text-xs">
          {text.eyebrow}
        </p>
        <h2
          className="m-0 text-2xl font-medium tracking-[-0.035em] text-[#171717] sm:text-[28px]"
          id="projects-title"
        >
          {text.title}
        </h2>
      </div>
    </section>
  )
}

export default Projects
