import { SectionTitle } from "./section-title"

export function Certifications() {
  const certs = [
    {
      title: "SQL and Relational Databases 101",
      org: "IBM SkillsBuild",
      issued: "Aug 2025",
      info: "Fundamentals of SQL querying, schema design, normalization, and relational concepts with hands-on labs.",
      link: "https://drive.google.com/file/d/1U5d428xhpJJUqA-0L6ki28Bu9W1vuRa6/view",
    },
    {
      title: "AWS - Solutions Architecture Job Simulation",
      org: "Forage",
      issued: "Jul 2025",
      info: "Modeled cloud solutions with cost, performance, and reliability trade-offs; practiced architecture decision-making.",
      link: "https://drive.google.com/file/d/1sFWpMUSDFffw31XiLW9PQIiWurrgzkdF/view",
    },
  ]

  return (
    <div className="mx-auto max-w-5xl px-4 pb-6 text-center">
      <SectionTitle title="CERTIFICATIONS" />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {certs.map((c) => (
          <div
            key={c.title}
            className="rounded-lg border border-white/10 bg-white/5 p-5 hover:border-teal-500/40 transition-colors"
          >
            <h3 className="font-medium">{c.title}</h3>
            <p className="mt-1 text-gray-300">{c.org}</p>
            <p className="text-gray-400 text-sm">Issued {c.issued}</p>
            <p className="mt-3 text-gray-200 leading-relaxed">{c.info}</p>
            <div className="mt-4">
              <a
                className="px-4 py-2 inline-block rounded bg-teal-500 text-black hover:bg-teal-400 transition-colors"
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Credential
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
