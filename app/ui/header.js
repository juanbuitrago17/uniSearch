
export default function Header() {
    return (
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
    )
}