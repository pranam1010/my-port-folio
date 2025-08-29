import { SectionTitle } from "./section-title"

export function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-6 text-center">
      <SectionTitle title="ABOUT" />
      <p className="mt-4 text-pretty text-gray-300 leading-relaxed">
        I am an Information Science and Engineering student with a strong academic record (CGPA 8.6). I have gained
        hands-on experience in full-stack development, AI, and database management through projects and certifications.
      </p>
      <p className="mt-4 text-pretty text-gray-300 leading-relaxed">
        My work includes developing an Agriculture Management System that integrates vendor services and real-time
        weather updates, and a Deepfake Video Detection System powered by deep learning and computer vision.
      </p>
      <p className="mt-4 text-pretty text-gray-300 leading-relaxed">
        I am passionate about building scalable software solutions, exploring innovative ideas in technology, and
        contributing to impactful opportunities that solve real-world problems.
      </p>
    </div>
  )
}
