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

export default function feature() {
    return (
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
    )
}
