import Head from 'next/head';


// Features Data
const features = [
  {
    title: "Search for Celestial Objects",
    description: "Find detailed information about planets, moons, and constellations.",
  },
  {
    title: "Organized Data",
    description: "View data that is well-organized and easy to navigate.",
  },
  {
    title: "Stunning Visuals",
    description: "Browse breathtaking images of celestial objects in high quality.",
  },
];

// Feature Card Component
function FeatureCard({ title, description }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h4 className="text-xl font-semibold mb-4">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Unisearch - Explore the Universe</title>
        <meta name="description" content="Discover planets, moons, and constellations with Unisearch." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-gray-900 text-gray-100 min-h-screen">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700">
          <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <h1 className="text-3xl font-bold text-white">Unisearch</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="#features" className="text-gray-300 hover:text-white">Features</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gray-800 py-20 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Explore the Universe with Unisearch</h2>
            <p className="text-lg text-gray-300 mb-8">Discover planets, moons, constellations, and more—all in one place.</p>
            <form action="#" method="GET" className="max-w-3xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  name="query"
                  placeholder="Search for planets, moons, or constellations..."
                  className="w-full py-3 px-4 text-gray-900 rounded-lg outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8">Key Features</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-800 py-16">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">About Unisearch</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Unisearch is your gateway to exploring the universe. Whether you're searching for information about planets, moons, or constellations, Unisearch provides an organized and visually engaging experience.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 py-6">
          <div className="container mx-auto text-center">
            <p className="text-gray-400">© 2024 Unisearch. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
