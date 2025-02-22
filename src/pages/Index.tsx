
export default function Home() {
  return (
    <div className="min-h-screen p-8 lg:pl-72">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8 fade-in">
          <div className="slide-up">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Welcome
            </span>
            <h1 className="mt-4 text-4xl font-display font-bold tracking-tight">
              Hi, I'm John Doe
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              I'm a creative professional based in San Francisco, specializing in
              photography and digital design. With over 8 years of experience, I
              bring a unique perspective to every project, combining technical
              expertise with artistic vision.
            </p>
          </div>

          <div className="grid gap-6 slide-up [animation-delay:200ms]">
            <div className="p-6 rounded-xl glass">
              <h2 className="text-xl font-semibold">My Approach</h2>
              <p className="mt-2 text-gray-600">
                I believe in creating work that not only looks beautiful but also
                tells a compelling story. Every project is an opportunity to create
                something unique and meaningful.
              </p>
            </div>

            <div className="p-6 rounded-xl glass">
              <h2 className="text-xl font-semibold">Let's Connect</h2>
              <p className="mt-2 text-gray-600">
                I'm always open to discussing new projects and opportunities.
                Whether you have a specific project in mind or just want to chat,
                feel free to reach out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
