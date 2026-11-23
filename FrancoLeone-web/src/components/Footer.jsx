const content = {
  es: {
    backToTop: 'Volver arriba',
    backToTopLabel: 'Volver al inicio de la página',
  },
  en: {
    backToTop: 'Back to top',
    backToTopLabel: 'Back to the top of the page',
  },
}

function Footer({ language = 'es' }) {
  const text = content[language === 'en' ? 'en' : 'es']
  const year = new Date().getFullYear()

  return (
    <footer className="px-5 pb-5 pt-4 sm:px-10 sm:pb-7">
      <div className="mx-auto flex w-full max-w-[980px] items-center justify-between gap-4 border-t border-[#e5e4e7] pt-5 text-left">
        <p className="text-xs text-[#6b6375]">
          © {year} Franco López Leone
        </p>
        <a
          className="inline-flex items-center gap-2 text-xs text-[#4b4a47] no-underline transition-colors hover:text-[#92713a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700 motion-reduce:transition-none"
          href="#top"
          aria-label={text.backToTopLabel}
        >
          {text.backToTop}
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 19V5m0 0L6.5 10.5M12 5l5.5 5.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer