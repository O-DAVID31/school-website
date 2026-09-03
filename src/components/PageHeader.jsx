function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-gradient-to-b from-primary to-[#13293A] text-white text-center py-10 sm:py-14 px-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h1>
      {subtitle && <p className="text-secondary mt-2 text-sm sm:text-base">{subtitle}</p>}
    </section>
  )
}

export default PageHeader