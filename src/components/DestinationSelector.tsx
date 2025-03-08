
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  distance: string;
  travelTime: string;
}

const destinations: Destination[] = [
  {
    id: 'moon',
    name: 'Lunar Resort',
    description: 'Experience Earth\'s closest neighbor with stunning views and low-gravity recreation.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    distance: '384,400 km',
    travelTime: '3 days'
  },
  {
    id: 'mars',
    name: 'Mars Colony',
    description: 'Visit the thriving Mars Colony and experience the frontier of human settlement.',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421ad2b40',
    distance: '225 million km',
    travelTime: '7 months'
  },
  {
    id: 'europa',
    name: 'Europa Station',
    description: 'Discover the mysterious ocean world of Jupiter\'s icy moon at our deep-sea research station.',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
    distance: '628 million km',
    travelTime: '13 months'
  },
  {
    id: 'titan',
    name: 'Titan Outpost',
    description: 'Explore Saturn\'s largest moon with its thick atmosphere and hydrocarbon lakes.',
    image: 'https://images.unsplash.com/photo-1614314107768-6018061ae61e',
    distance: '1.4 billion km',
    travelTime: '6 years'
  },
];

const DestinationSelector = () => {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-space">SELECT YOUR DESTINATION</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-space">
            Choose from our selection of premium cosmic destinations, each offering a unique space experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card 
                className={`h-full transition-all duration-300 overflow-hidden ${
                  selectedDestination === destination.id 
                    ? 'border-cosmic-purple ring-2 ring-cosmic-purple' 
                    : 'border-border hover:border-cosmic-purple/50'
                }`}
                onClick={() => setSelectedDestination(destination.id)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-space">{destination.name}</CardTitle>
                  <CardDescription>
                    <div className="flex justify-between text-xs mt-1">
                      <span>Distance: {destination.distance}</span>
                      <span>Travel time: {destination.travelTime}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400">{destination.description}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant={selectedDestination === destination.id ? "default" : "outline"} 
                    className={`${selectedDestination === destination.id ? "bg-cosmic-purple w-full" : "w-full"} font-space`}
                  >
                    {selectedDestination === destination.id ? "SELECTED" : "SELECT"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationSelector;
