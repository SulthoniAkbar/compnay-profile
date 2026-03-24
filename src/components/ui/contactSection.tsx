export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(140deg,_rgba(15,31,46,0.95),_rgba(17,24,39,0.92))]"></div>
      <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[#0f766e]/15 blur-3xl"></div>
      <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-[#0f766e]/15 blur-3xl"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            Collaborate
          </p>
          <h2 className="font-display text-4xl md:text-5xl mt-3 mb-4">
            Let's Meet & Collaborate
          </h2>
          <p className="text-base text-white/80 mb-8">
            Have a question in mind? Come tell us what you need!
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-xl">&#9993;</span>
              <a
                href="mailto:partner@sulapp.co.id"
                className="text-white underline decoration-white/40 underline-offset-4 hover:text-[#0f766e]"
              >
                partner@sulapp.co.id
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl">&#9742;</span>
              <a
                href="https://wa.me/628999992111"
                className="text-white underline decoration-white/40 underline-offset-4 hover:text-[#0f766e]"
              >
                +628999992111 (WA)
              </a>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-8 text-ink">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-[0.2em] text-ink/70"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition focus:border-black/40 focus:ring-2 focus:ring-black/10"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-[0.2em] text-ink/70"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition focus:border-black/40 focus:ring-2 focus:ring-black/10"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs uppercase tracking-[0.2em] text-ink/70"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="+62 8xx xxxx xxxx"
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition focus:border-black/40 focus:ring-2 focus:ring-black/10"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-[0.2em] text-ink/70"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition focus:border-black/40 focus:ring-2 focus:ring-black/10"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="rounded-full bg-[#0f766e] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#138577]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
