import { SectionTitle } from "./section-title"

export function Education() {
  const items = [
    {
      title: "Bachelor of Engineering in Information Science",
      meta: "Sahyadri College of Engineering and Management, Mangaluru",
      detail: "CGPA: 8.6",
    },
    {
      title: "Pre-University PCMC",
      meta: "SDM Pre-University College, Dakshina Kannada",
      detail: "86.5%",
    },
  ]
  return (
    <div className="mx-auto max-w-5xl px-4 pb-6 text-center">
      <SectionTitle title="EDUCATION" />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-lg border border-white/10 bg-white/5 p-5 hover:border-teal-500/40 transition-colors"
          >
            <h3 className="font-medium">{it.title}</h3>
            <p className="mt-1 text-gray-300">{it.meta}</p>
            <p className="mt-2 text-gray-200">{it.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
