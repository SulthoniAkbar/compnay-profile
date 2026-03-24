import {
  FaUsers,
  FaCheckCircle,
  FaClock,
  FaCode,
  FaSmile,
  FaUserTie,
} from "react-icons/fa";

export default function FactsSection() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,107,74,0.12),_transparent_55%)]"></div>
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#0f766e]">
          By the Numbers
        </p>
        <h2 className="font-display text-3xl lg:text-5xl text-ink mt-3 mb-10">
          Our Facts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FaUsers />,
              value: "100+",
              label: "Clients & Partners",
            },
            {
              icon: <FaCheckCircle />,
              value: "50+",
              label: "Problems solved",
            },
            {
              icon: <FaClock />,
              value: "10+",
              label: "Years in the industry",
            },
            {
              icon: <FaCode />,
              value: "10B+",
              label: "Lines of code shipped",
            },
            {
              icon: <FaUserTie />,
              value: "100+",
              label: "DOT talents",
            },
            {
              icon: <FaSmile />,
              value: "Unlimited",
              label: "Client smiles",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="group glass-panel rounded-3xl p-6 text-left transition hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f766e]/10 text-2xl text-[#0f766e]">
                  {item.icon}
                </div>
                <div className="text-3xl font-semibold text-ink">{item.value}</div>
              </div>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#0f766e]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
