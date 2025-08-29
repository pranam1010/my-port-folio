import { SectionTitle } from "./section-title"

export function Skills() {
  const categories = [
    { label: "Programming", items: ["Java", "Python", "C", "C++"] },
    { label: "Web", items: ["HTML", "CSS"] },
    { label: "Databases", items: ["MongoDB", "MySQL"] },
    { label: "Tools", items: ["VS Code", "Git", "Excel"] },
    { label: "Languages Known", items: ["English", "Kannada", "Hindi"] },
  ]

  return (
    <div className="mx-auto max-w-5xl px-4 pb-6 text-center">
      <SectionTitle title="SKILLS" />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {categories.map((cat) => {
          const isLanguages = cat.label === "Languages Known"
          return (
            <div
              key={cat.label}
              className={`rounded-lg border border-white/10 bg-white/5 p-5 transition-all hover:border-teal-500/40 hover:shadow-[0_0_0_1px_rgba(20,184,166,0.25)] hover:-translate-y-0.5 ${isLanguages ? "md:col-span-2 max-w-2xl mx-auto" : ""}`}
            >
              <h3 className="font-medium tracking-wide">{cat.label}</h3>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm rounded px-2.5 py-1.5 bg-white/8 border border-white/10 text-gray-200 hover:bg-white/12 hover:border-teal-500/30 hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
