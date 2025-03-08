
import { Facebook, Twitter, Instagram, Youtube, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cosmic-black border-t border-cosmic-purple/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Rocket className="h-6 w-6 text-cosmic-purple" />
              <span className="text-xl font-bold tracking-wider">COSMIC VOYAGE</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Pioneering the future of space tourism, making the cosmos accessible for adventurous travelers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Destinations</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-cosmic-purple text-sm transition-colors">Lunar Resort</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cosmic-purple text-sm transition-colors">Mars Colony</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cosmic-purple text-sm transition-colors">Europa Station</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cosmic-purple text-sm transition-colors">Titan Outpost</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cosmic-purple text-sm transition-colors">Orbital Hotels</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Packages</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-cosmic-purple text-sm transition-colors">Economy Shuttle</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cosmic-purple text-sm transition-colors">Business Class</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cosmic-purple text-sm transition-colors">Luxury Cabin</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cosmic-purple text-sm transition-colors">VIP Experience</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cosmic-purple text-sm transition-colors">Family Packages</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-cosmic-purple text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cosmic-purple text-sm transition-colors">Safety</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cosmic-purple text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cosmic-purple text-sm transition-colors">Contact</a></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-cosmic-purple text-sm transition-colors">Dashboard</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Cosmic Voyage Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
