const content = {
  es: {
    eyebrow: 'Experiencia',
    title: 'Trayectoria personal',
  },
  en: {
    eyebrow: 'Experience',
    title: 'Professional journey',
  },
}

function Experience({ language = 'es' }) {
  const text = content[language === 'en' ? 'en' : 'es']

  return (
    <section
      className="scroll-mt-24 border-t border-[#302d28] px-5 py-14 sm:px-10 sm:py-16"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto w-full max-w-[980px] text-left">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d6b66f] sm:text-xs">
          {text.eyebrow}
        </p>
        <h2
          className="m-0 text-2xl font-medium tracking-[-0.035em] text-[#f3f0e8] sm:text-[28px]"
          id="experience-title"
        >
          {text.title}
        </h2>
      </div>
    </section>
  )
}

export default Experience
