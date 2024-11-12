export default function WebpageItem({ webpage }) {
    return (
        <li className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition">
            <img src={webpage.image} alt={webpage.name} className="w-16 h-16 rounded mr-4 object-cover" />
            <div>
                <a href={webpage.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:underline">
                {webpage.name}
                </a>
                <p className="text-gray-600">{webpage.description}</p>
                <p className="text-sm text-gray-400 mt-1">
                {webpage.primaryCategory} · {webpage.tags.join(', ')}
                </p>
            </div>
        </li>
    );
}