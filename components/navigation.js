import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
    const [open, setOpen] = useState(false)
    return (
        <header className="h-16 w-full p-2 border-b border-gray-400 border-opacity-75">
            <div className="max-w-2xl md:px-2 mx-auto flex justify-between items-center">
            <Link href="/">
                <a className="flex items-center h-12">
                <svg class="h-full mr-2" viewBox="52 -70 315 315" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M313.837 168.346c1.255 0 2.461-1.323 2.207-2.53L281.377 11.457c-.394-1.743-2.392-2.3-3.553-1.139L123.097 164.756c-1.28 1.338-.443 3.562 1.477 3.59h189.263zM206.097 72.957c.696-.696.835-2.066-.07-2.972l-59.479-59.596c-1.137-1.138-3.249-1.046-3.714 1.276L107.791 165.79c-.512 2.229 2.205 3.343 3.618 1.923l94.688-94.756z" class="fill-current" fill-rule="nonzero"/></svg>            
                <span className="text-gray-900 font-semibold uppercase text-lg">Academy Blog</span>
                </a>
            </Link>
            <nav className="flex space-x-4 hidden md:block">
                <Link href="/">Home</Link>
                <Link href="/podcast">Podcast</Link>
                <a target="_blank" href="https://mosaik-stuttgart.de" className="ml-3 hidden">
                    <span className="m-px border border-gray-400 bg-gray-300 font-medium text-xs text-gray-900 px-2 py-1 rounded leading-snug hover:cursor-pointer">
                        Mosaik Church
                        <svg className="inline ml-2 -mt-px text-gray-800" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 27" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg>
                    </span>
                </a>
            </nav>
            </div>
        </header>
    )
}