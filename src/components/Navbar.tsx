
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Rocket, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 glass-effect">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-cosmic-purple" />
            <span className="text-xl font-bold tracking-wider">COSMIC VOYAGE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm hover:text-cosmic-purple transition-colors">HOME</Link>
            <Link to="/destinations" className="text-sm hover:text-cosmic-purple transition-colors">DESTINATIONS</Link>
            <Link to="/packages" className="text-sm hover:text-cosmic-purple transition-colors">PACKAGES</Link>
            <Link to="/accommodations" className="text-sm hover:text-cosmic-purple transition-colors">ACCOMMODATIONS</Link>
            <Link to="/dashboard" className="flex items-center space-x-2 text-sm hover:text-cosmic-purple transition-colors">
              <User className="h-4 w-4" />
              <span>DASHBOARD</span>
            </Link>
            <Button className="bg-cosmic-purple hover:bg-cosmic-purple/80">BOOK NOW</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link to="/" className="block text-sm py-2 px-4 hover:bg-cosmic-purple/20 rounded-md transition-colors">HOME</Link>
            <Link to="/destinations" className="block text-sm py-2 px-4 hover:bg-cosmic-purple/20 rounded-md transition-colors">DESTINATIONS</Link>
            <Link to="/packages" className="block text-sm py-2 px-4 hover:bg-cosmic-purple/20 rounded-md transition-colors">PACKAGES</Link>
            <Link to="/accommodations" className="block text-sm py-2 px-4 hover:bg-cosmic-purple/20 rounded-md transition-colors">ACCOMMODATIONS</Link>
            <Link to="/dashboard" className="block text-sm py-2 px-4 hover:bg-cosmic-purple/20 rounded-md transition-colors">DASHBOARD</Link>
            <Button className="w-full bg-cosmic-purple hover:bg-cosmic-purple/80">BOOK NOW</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
