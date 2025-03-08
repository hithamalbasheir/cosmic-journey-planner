
import { useState } from 'react';
import { CheckIcon, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
}

const packages: Package[] = [
  {
    id: 'economy',
    name: 'Economy Shuttle',
    price: '$199,000',
    description: 'A comfortable journey with all the essential amenities for space travel.',
    features: [
      'Standard space suit',
      'Shared cabin space',
      'Basic meals and hydration',
      '1 guided moonwalk',
      'Personal storage locker'
    ],
    popular: false
  },
  {
    id: 'business',
    name: 'Business Class',
    price: '$399,000',
    description: 'Enhanced comfort with premium amenities for the discerning space traveler.',
    features: [
      'Premium space suit',
      'Private sleeping quarters',
      'Gourmet meals prepared by our space chef',
      '2 guided moonwalks',
      'Extended zero-gravity recreation',
      'Priority boarding and departure'
    ],
    popular: true
  },
  {
    id: 'luxury',
    name: 'Luxury Cabin',
    price: '$899,000',
    description: 'The ultimate in luxury space travel with exclusive amenities and services.',
    features: [
      'Custom-fitted space suit',
      'Luxury private suite with Earth view',
      'Personal butler service',
      'Unlimited guided excursions',
      'Private zero-gravity lounge access',
      'Cosmic cocktail bar',
      'Priority on all activities and experiences'
    ],
    popular: false
  },
  {
    id: 'vip',
    name: 'VIP Zero-Gravity Experience',
    price: '$1,999,000',
    description: 'A completely customized journey for those who demand the extraordinary.',
    features: [
      'Custom spacecraft interiors',
      'Private departure windows',
      'Exclusive access to restricted areas',
      'Personal space photographer',
      'Dedicated crew members',
      'Custom menu design with celebrity space chef',
      'Souvenir meteorite collection',
      'Lifetime membership to Space Travelers Club'
    ],
    popular: false
  }
];

const PackagesSection = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-space">TRAVEL PACKAGES</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the perfect package for your cosmic adventure, from economical shuttles to VIP zero-gravity experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Add top padding to the entire grid to make room for the badge */}
          <div className="absolute h-4 w-full top-0 left-0"></div>
          
          {packages.map((pkg) => (
            <div key={pkg.id} className={`relative ${pkg.popular ? 'pt-4' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cosmic-purple text-white text-xs font-bold py-1 px-4 rounded-full flex items-center z-10">
                  <Star className="h-3 w-3 mr-1 fill-white" />
                  MOST POPULAR
                </div>
              )}
              <Card 
                className={`h-full transition-all duration-300 cursor-pointer ${
                  selectedPackage === pkg.id 
                    ? 'border-cosmic-purple ring-2 ring-cosmic-purple'
                    : 'border-border hover:border-cosmic-purple/50'
                }`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-space">{pkg.name}</CardTitle>
                  <CardDescription>
                    <span className="text-2xl font-bold text-white block mt-2 font-space">{pkg.price}</span>
                    <span className="text-xs">per person</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400 mb-4">{pkg.description}</p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-cosmic-purple mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full font-space ${selectedPackage === pkg.id ? 'bg-cosmic-purple hover:bg-cosmic-purple/80' : ''}`}
                    variant={selectedPackage === pkg.id ? "default" : "outline"}
                  >
                    {selectedPackage === pkg.id ? "SELECTED" : "SELECT PACKAGE"}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
