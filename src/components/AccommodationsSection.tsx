
import { useState } from 'react';
import { Motion, spring } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

interface Accommodation {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  price: string;
  rating: number;
  amenities: string[];
}

const lunarAccommodations: Accommodation[] = [
  {
    id: 'lunar-palace',
    name: 'Lunar Palace Resort',
    location: 'Sea of Tranquility',
    description: 'Luxury accommodations with Earth-view suites and private regolith gardens.',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6',
    price: '$45,000/night',
    rating: 4.8,
    amenities: ['Artificial gravity zones', 'Hydroponic restaurant', 'Lunar spa', 'Observation dome']
  },
  {
    id: 'tranquility-base',
    name: 'Tranquility Base Hotel',
    location: 'Apollo 11 Landing Site',
    description: 'Historic accommodations at the site of humanity's first lunar landing.',
    image: 'https://images.unsplash.com/photo-1534329539061-64caeb388c42',
    price: '$38,000/night',
    rating: 4.5,
    amenities: ['Apollo museum', 'Lunar rover tours', 'Low-gravity gym', 'Crater view rooms']
  }
];

const marsAccommodations: Accommodation[] = [
  {
    id: 'olympus-heights',
    name: 'Olympus Heights',
    location: 'Olympus Mons Base',
    description: 'Luxury underground complex with stunning views of Mars' highest mountain.',
    image: 'https://images.unsplash.com/photo-1545156521-77bd85671d30',
    price: '$78,000/night',
    rating: 4.9,
    amenities: ['Pressurized garden dome', 'Martian cuisine', 'Dust storm shelters', 'Mountain treks']
  },
  {
    id: 'valles-marineris',
    name: 'Valles Marineris Resort',
    location: 'Valles Marineris Canyon',
    description: 'Carved into the walls of the solar system's largest canyon system.',
    image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031',
    price: '$65,000/night',
    rating: 4.7,
    amenities: ['Canyon overlook', 'Rock climbing', 'Ancient Mars exhibit', 'Radiation-shielded spa']
  }
];

const orbitAccommodations: Accommodation[] = [
  {
    id: 'elysium-station',
    name: 'Elysium Orbital Station',
    location: 'Earth Orbit, 400km altitude',
    description: 'Luxury orbital hotel with rotating sections for artificial gravity and zero-g zones.',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
    price: '$120,000/night',
    rating: 5.0,
    amenities: ['360° Earth views', 'Zero-gravity pool', 'Space walk activities', 'Gourmet restaurant']
  },
  {
    id: 'nova-gateway',
    name: 'Nova Gateway',
    location: 'L2 Lagrange Point',
    description: 'Located at a gravitationally stable point beyond the Moon, offering unparalleled views of both Earth and lunar surfaces.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    price: '$95,000/night',
    rating: 4.6,
    amenities: ['Astronomy lab', 'Deep space observation', 'Luxury suites', 'Interplanetary communication center']
  }
];

const AccommodationsSection = () => {
  const [activeTab, setActiveTab] = useState('lunar');
  
  const getAccommodations = () => {
    switch(activeTab) {
      case 'lunar':
        return lunarAccommodations;
      case 'mars':
        return marsAccommodations;
      case 'orbital':
        return orbitAccommodations;
      default:
        return lunarAccommodations;
    }
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">SPACE ACCOMMODATIONS</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover luxury accommodations across the solar system, from lunar resorts to Martian habitats.
          </p>
        </div>

        <Tabs defaultValue="lunar" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 max-w-xl mx-auto">
            <TabsTrigger value="lunar">Lunar</TabsTrigger>
            <TabsTrigger value="mars">Mars</TabsTrigger>
            <TabsTrigger value="orbital">Orbital</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {getAccommodations().map((accommodation) => (
                <Card key={accommodation.id} className="overflow-hidden border-border hover:border-cosmic-purple/50 transition-all duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={accommodation.image} 
                      alt={accommodation.name}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{accommodation.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {accommodation.location}
                        </CardDescription>
                      </div>
                      <div className="flex items-center bg-cosmic-purple/20 px-2 py-1 rounded">
                        <Star className="h-4 w-4 text-cosmic-purple fill-cosmic-purple mr-1" />
                        <span className="text-sm font-medium">{accommodation.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-400 mb-4">{accommodation.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {accommodation.amenities.map((amenity, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-secondary/50 text-white px-2 py-1 rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <div className="text-lg font-bold text-cosmic-purple">{accommodation.price}</div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">VIEW DETAILS</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AccommodationsSection;
