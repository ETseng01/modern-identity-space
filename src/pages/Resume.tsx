
export default function Resume() {
  return (
    <div className="min-h-screen p-8 lg:pl-72">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8 fade-in">
          <div>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Resume
            </span>
            <h1 className="mt-4 text-4xl font-display font-bold tracking-tight">
              Professional Experience
            </h1>
          </div>

          <div className="space-y-12">
            {/* Experience */}
            <section className="space-y-6 slide-up">
              <h2 className="text-2xl font-semibold">Work Experience</h2>
              <div className="space-y-6">
                <div className="glass rounded-lg p-6">
                  <h3 className="text-lg font-semibold">Senior Photographer</h3>
                  <p className="text-sm text-gray-600">
                    Creative Studios • 2020 - Present
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• Led major commercial photography projects</li>
                    <li>• Managed a team of junior photographers</li>
                    <li>• Developed innovative shooting techniques</li>
                  </ul>
                </div>

                <div className="glass rounded-lg p-6">
                  <h3 className="text-lg font-semibold">
                    Freelance Photographer
                  </h3>
                  <p className="text-sm text-gray-600">Self-Employed • 2018-2020</p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• Executed diverse photography projects</li>
                    <li>• Built and maintained client relationships</li>
                    <li>• Managed all aspects of business operations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="space-y-6 slide-up [animation-delay:200ms]">
              <h2 className="text-2xl font-semibold">Education</h2>
              <div className="glass rounded-lg p-6">
                <h3 className="text-lg font-semibold">
                  Bachelor of Fine Arts in Photography
                </h3>
                <p className="text-sm text-gray-600">
                  Art Institute • Graduated 2018
                </p>
                <p className="mt-4 text-gray-600">
                  Specialized in digital photography and post-processing techniques.
                  Graduated with honors.
                </p>
              </div>
            </section>

            {/* Skills */}
            <section className="space-y-6 slide-up [animation-delay:400ms]">
              <h2 className="text-2xl font-semibold">Skills</h2>
              <div className="glass rounded-lg p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold">Technical</h3>
                    <ul className="mt-2 space-y-1 text-gray-600">
                      <li>• Adobe Photoshop</li>
                      <li>• Lightroom</li>
                      <li>• Digital Photography</li>
                      <li>• Studio Lighting</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Soft Skills</h3>
                    <ul className="mt-2 space-y-1 text-gray-600">
                      <li>• Project Management</li>
                      <li>• Client Communication</li>
                      <li>• Team Leadership</li>
                      <li>• Problem Solving</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
