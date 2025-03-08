
import { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, UsersIcon, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

const BookingForm = () => {
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [passengers, setPassengers] = useState<string>("1");
  const [classType, setClassType] = useState<string>("");

  const handleBookNow = () => {
    console.log({
      departureDate,
      returnDate,
      passengers,
      classType
    });
    
    // In a real app, we would submit this data to a server
    alert('Your cosmic journey has been booked! Check your dashboard for details.');
  };

  return (
    <section className="py-16 relative">
      <div 
        className="absolute inset-0 bg-cosmic-pattern opacity-10 z-0"
        style={{ 
          backgroundSize: '100% 100%',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-effect rounded-xl p-8 border border-cosmic-purple/20">
          <h2 className="text-3xl font-bold mb-6 text-center">BOOK YOUR COSMIC JOURNEY</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Departure Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Departure Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !departureDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {departureDate ? format(departureDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                  <Calendar
                    mode="single"
                    selected={departureDate}
                    onSelect={setDepartureDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            {/* Return Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Return Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !returnDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {returnDate ? format(returnDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                  <Calendar
                    mode="single"
                    selected={returnDate}
                    onSelect={setReturnDate}
                    initialFocus
                    disabled={(date) => 
                      date < new Date() || (departureDate && date < departureDate)
                    }
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            {/* Passengers */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Passengers</label>
              <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select number of passengers">
                    <div className="flex items-center">
                      <UsersIcon className="mr-2 h-4 w-4" />
                      {passengers ? `${passengers} Passenger${parseInt(passengers) > 1 ? 's' : ''}` : 'Select passengers'}
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} Passenger{num > 1 ? 's' : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Class */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Cabin Class</label>
              <Select value={classType} onValueChange={setClassType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select cabin class">
                    <div className="flex items-center">
                      <ChevronDown className="mr-2 h-4 w-4" />
                      {classType || 'Select cabin class'}
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="economy">Economy Shuttle</SelectItem>
                  <SelectItem value="business">Business Class</SelectItem>
                  <SelectItem value="luxurycabin">Luxury Cabin</SelectItem>
                  <SelectItem value="vipzero">VIP Zero-Gravity Suite</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button 
            onClick={handleBookNow}
            className="w-full bg-cosmic-purple hover:bg-cosmic-purple/80 py-6 text-lg"
            disabled={!departureDate || !returnDate || !passengers || !classType}
          >
            BOOK NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
