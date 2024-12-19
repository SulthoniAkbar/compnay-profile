export default function ContactSection() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Let’s Meet & Collaborate</h2>
          <p className="text-lg mb-8">
            Have a question in mind? Come tell us what you need!
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-xl">&#9993;</span>
              <a
                href="mailto:partner@sulapp.co.id"
                className="text-white underline hover:text-gray-300"
              >
                partner@sulapp.co.id
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl">&#9742;</span>
              <a
                href="https://wa.me/628999992111"
                className="text-white underline hover:text-gray-300"
              >
                +628999992111(WA)
              </a>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 w-full bg-transparent border-b border-gray-400 focus:border-white outline-none text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full bg-transparent border-b border-gray-400 focus:border-white outline-none text-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 w-full bg-transparent border-b border-gray-400 focus:border-white outline-none text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 w-full bg-transparent border-b border-gray-400 focus:border-white outline-none text-white"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-blue-950 transition"
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
