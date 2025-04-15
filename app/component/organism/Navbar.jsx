import Button from '../atoms/Button';
import Link from 'next/link';

const Navbar = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Help', href: '#help' }
  ];

  return (
    <nav className="container mx-auto px-6 py-8 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.jpg" alt="Logo" className="w-10 h-9 mr-2" />
        <span className="text-xl font-bold text-red-500">
          Lasles<b>VPN</b>
        </span>
      </div>
      
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <a className="text-gray-600 hover:text-gray-900 transition-colors">
              {item.name}
            </a>
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <Link href="#login">
          <a className="hidden md:block text-gray-600 hover:text-gray-900">
            Sign In
          </a>
        </Link>
        <Button variant="outline">Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;