export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center relative">
          <span className="relative z-10">About Me</span>
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-6xl text-blue-500/10 font-bold z-0">
            ABOUT
          </span>
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-slide-in-left">
              <div className="w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-xl relative">
                <img
                  src="/work.jpg"
                  alt="Hussain working at desk with laptop and monitor"
                  className="w-full h-full object-cover"
                />

                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-500 animate-float"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-blue-500 animate-float delay-200"></div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <p className="text-lg mb-6">
                Hello! I'm Hussain, a third-year computer science student at the
                University of Guelph. I enjoy learning new things and building
                cool projects. I'm passionate about software development and
                research.
              </p>

              <p className="text-lg mb-6">
                Outside of coding, I enjoy going to the gym, improving my
                fashion, and meeting new people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
