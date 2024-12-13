import React, { useState } from 'react';
import './Menu.css';

type LinkType = {
  title: string;
  id: string;
}

const links: LinkType[] = [
  {
    title: 'Strona główna',
    id: 'home',
  },
  {
    title: 'O mnie',
    id: 'about',
  },
  {
    title: 'Galeria',
    id: 'gallery',
  },
  {
    title: 'Kontakt',
    id: 'contact',
  }
];


const Menu: React.FC = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
      >
        <nav className="absolute top-0 right-0 p-6">
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-lg font-courgette text-gray-100">
            {links.map((link: LinkType) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="hover:text-white text-black-light transition-colors"
                  id={link.id}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <h1 className="text-6xl md:text-7xl font-courgette text-center px-4 drop-shadow-lg">
          Welcome to Our Website
        </h1>
      </div>
    </>
  );
};

export default Menu;
