export function SectionTitle({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-12 md:pt-16 text-center">
      <h2 className="text-balance text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? <p className="mt-2 text-pretty text-gray-300 leading-relaxed">{subtitle}</p> : null}
    </div>
  )
}
