
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Settings, 
  User, 
  LogOut, 
  Rocket, 
  MessageSquare, 
  Star,
  ArrowRight,
  CheckCircle,
  X
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';

interface Booking {
  id: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  package: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  price: string;
  image: string;
}

interface TravelTip {
  id: string;
  tip: string;
  category: string;
}

const mockBookings: Booking[] = [
  {
    id: 'book-1',
    destination: 'Lunar Resort',
    departureDate: '2024-08-15T09:00:00Z',
    returnDate: '2024-08-22T16:00:00Z',
    package: 'Luxury Cabin',
    status: 'upcoming',
    price: '$899,000',
    image: 'https://images.unsplash.com/photo-1532198742530-4a3a36f90c089'
  },
  {
    id: 'book-2',
    destination: 'Mars Colony',
    departureDate: '2025-03-10T11:30:00Z',
    returnDate: '2025-03-25T14:15:00Z',
    package: 'Business Class',
    status: 'upcoming',
    price: '$399,000',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421ad2b40'
  },
  {
    id: 'book-3',
    destination: 'Orbital Hotel',
    departureDate: '2023-11-05T08:45:00Z',
    returnDate: '2023-11-08T19:30:00Z',
    package: 'Economy Shuttle',
    status: 'completed',
    price: '$199,000',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa'
  }
];

const travelTips: TravelTip[] = [
  {
    id: 'tip-1',
    tip: 'Pack light, breathable clothing for zero-gravity environments to maximize comfort.',
    category: 'Packing'
  },
  {
    id: 'tip-2',
    tip: 'Practice anti-nausea techniques before your journey to minimize space adaptation syndrome.',
    category: 'Health'
  },
  {
    id: 'tip-3',
    tip: 'Bring a camera with manual focus settings - autofocus can struggle in space lighting conditions.',
    category: 'Photography'
  },
  {
    id: 'tip-4',
    tip: 'Schedule your sleep cycle adjustment 2 weeks before departure to match your destination\'s cycle.',
    category: 'Health'
  },
  {
    id: 'tip-5',
    tip: 'Try the hydroponic salad at the Lunar Palace Resort - it\'s freshly grown on-site!',
    category: 'Dining'
  }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Calculate countdown for next trip
  useEffect(() => {
    const upcomingBookings = mockBookings.filter(booking => booking.status === 'upcoming');
    if (upcomingBookings.length === 0) return;
    
    const nextTrip = new Date(upcomingBookings[0].departureDate);
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = nextTrip.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(interval);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-cosmic-dark text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Sarah Connor</CardTitle>
                    <CardDescription>Space Explorer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Membership Level</span>
                  <span className="flex items-center text-sm text-cosmic-purple">
                    <Star className="h-4 w-4 mr-1 fill-cosmic-purple" />
                    Platinum
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Travel Points</span>
                  <span className="text-sm">48,250 pts</span>
                </div>
              </CardContent>
              <CardFooter className="border-t border-border pt-4">
                <Button variant="outline" className="w-full">
                  <User className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Navigation</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-col">
                  <Link 
                    to="/dashboard" 
                    className="flex items-center py-3 px-6 border-l-2 border-cosmic-purple bg-cosmic-purple/10"
                  >
                    <Rocket className="h-4 w-4 mr-3" />
                    <span>My Bookings</span>
                  </Link>
                  <Link 
                    to="#" 
                    className="flex items-center py-3 px-6 border-l-2 border-transparent hover:bg-cosmic-purple/5 transition-colors"
                  >
                    <MessageSquare className="h-4 w-4 mr-3" />
                    <span>Messages</span>
                  </Link>
                  <Link 
                    to="#" 
                    className="flex items-center py-3 px-6 border-l-2 border-transparent hover:bg-cosmic-purple/5 transition-colors"
                  >
                    <Calendar className="h-4 w-4 mr-3" />
                    <span>Schedule</span>
                  </Link>
                  <Link 
                    to="#" 
                    className="flex items-center py-3 px-6 border-l-2 border-transparent hover:bg-cosmic-purple/5 transition-colors"
                  >
                    <Settings className="h-4 w-4 mr-3" />
                    <span>Settings</span>
                  </Link>
                  <Link 
                    to="/" 
                    className="flex items-center py-3 px-6 border-l-2 border-transparent hover:bg-cosmic-purple/5 transition-colors"
                  >
                    <LogOut className="h-4 w-4 mr-3" />
                    <span>Sign Out</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Next Launch Countdown */}
            <Card className="mt-6 bg-gradient-to-br from-cosmic-purple/20 to-cosmic-blue/20 border-cosmic-purple/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Next Launch Countdown
                </CardTitle>
                <CardDescription>Lunar Resort - Luxury Cabin</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-2 text-center py-4">
                  <div className="bg-cosmic-black/50 rounded-md p-3">
                    <div className="text-2xl font-bold">{countdown.days}</div>
                    <div className="text-xs text-gray-400">Days</div>
                  </div>
                  <div className="bg-cosmic-black/50 rounded-md p-3">
                    <div className="text-2xl font-bold">{countdown.hours}</div>
                    <div className="text-xs text-gray-400">Hours</div>
                  </div>
                  <div className="bg-cosmic-black/50 rounded-md p-3">
                    <div className="text-2xl font-bold">{countdown.minutes}</div>
                    <div className="text-xs text-gray-400">Mins</div>
                  </div>
                  <div className="bg-cosmic-black/50 rounded-md p-3">
                    <div className="text-2xl font-bold">{countdown.seconds}</div>
                    <div className="text-xs text-gray-400">Secs</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-cosmic-purple/50 text-cosmic-purple hover:bg-cosmic-purple/20">
                  View Flight Details
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-6">My Dashboard</h1>
            
            {/* Bookings */}
            <div className="mb-8">
              <Tabs defaultValue="upcoming" onValueChange={setActiveTab}>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">My Bookings</h2>
                  <TabsList>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="upcoming" className="mt-0">
                  {mockBookings
                    .filter(booking => booking.status === 'upcoming')
                    .map(booking => (
                      <Card key={booking.id} className="mb-4 overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="w-full md:w-1/3 h-48 md:h-auto">
                            <img 
                              src={booking.image} 
                              alt={booking.destination}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 p-6">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">{booking.destination}</h3>
                                <p className="text-sm text-gray-400">{booking.package}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-cosmic-purple">{booking.price}</div>
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Confirmed
                                </span>
                              </div>
                            </div>
                            
                            <div className="mt-4 grid grid-cols-2 gap-4">
                              <div>
                                <div className="text-xs text-gray-400 mb-1">Departure</div>
                                <div className="text-sm">{new Date(booking.departureDate).toLocaleDateString()} - {new Date(booking.departureDate).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                              </div>
                              <div>
                                <div className="text-xs text-gray-400 mb-1">Return</div>
                                <div className="text-sm">{new Date(booking.returnDate).toLocaleDateString()} - {new Date(booking.returnDate).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                              </div>
                            </div>
                            
                            <div className="mt-6 flex justify-end">
                              <Button variant="outline" className="mr-2">Modify</Button>
                              <Button>View Details</Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                </TabsContent>
                
                <TabsContent value="completed" className="mt-0">
                  {mockBookings
                    .filter(booking => booking.status === 'completed')
                    .map(booking => (
                      <Card key={booking.id} className="mb-4 overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="w-full md:w-1/3 h-48 md:h-auto opacity-70">
                            <img 
                              src={booking.image} 
                              alt={booking.destination}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 p-6">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">{booking.destination}</h3>
                                <p className="text-sm text-gray-400">{booking.package}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-gray-400">{booking.price}</div>
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-500/20 text-gray-400">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Completed
                                </span>
                              </div>
                            </div>
                            
                            <div className="mt-4 grid grid-cols-2 gap-4">
                              <div>
                                <div className="text-xs text-gray-400 mb-1">Departure</div>
                                <div className="text-sm">{new Date(booking.departureDate).toLocaleDateString()} - {new Date(booking.departureDate).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                              </div>
                              <div>
                                <div className="text-xs text-gray-400 mb-1">Return</div>
                                <div className="text-sm">{new Date(booking.returnDate).toLocaleDateString()} - {new Date(booking.returnDate).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                              </div>
                            </div>
                            
                            <div className="mt-6 flex justify-end">
                              <Button>View Trip Memories</Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                </TabsContent>
              </Tabs>
            </div>
            
            {/* AI Travel Tips */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">AI Travel Tips</h2>
                <Button variant="outline" size="sm">
                  View All
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              
              <div className="space-y-4">
                {travelTips.slice(0, 3).map(tip => (
                  <Card key={tip.id}>
                    <CardContent className="pt-6">
                      <div className="flex">
                        <div className="h-8 w-8 rounded-full bg-cosmic-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                          <Star className="h-4 w-4 text-cosmic-purple" />
                        </div>
                        <div>
                          <p className="mb-2">{tip.tip}</p>
                          <div className="text-xs text-gray-400">Category: {tip.category}</div>
                        </div>
                        <button className="ml-auto flex-shrink-0">
                          <X className="h-4 w-4 text-gray-500 hover:text-white transition-colors" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
