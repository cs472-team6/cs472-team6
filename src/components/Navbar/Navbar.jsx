import Icon from "../Icon/Icon";

export default function Navbar() {
    return (
        <nav className="flex h-14 bg-gray-200 items-center">
            <button className="py-2 px-4 bg-blue-400 ml-auto mr-4 rounded-lg">
                <Icon name="arrow-down-tray" />
            </button>
        </nav>
    )
}