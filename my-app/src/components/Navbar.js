import { Link } from "react-router-dom"

export default function Navbar({toggle}) {
    return (
        <nav className="flex justify-between items-center h-16 bg-black text-white relative shadow-sm text-xl">
            <Link to='/' className="pl-8 ">Bruh</Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="p-4" to="/">Home</Link>
                <Link className="p-4" to="/Menu">Menu</Link>
                <Link className="p-4" to="/About">About</Link>
                <Link className="p-4" to="/Contact">Contact</Link>
            </div>
        </nav>
    )
}