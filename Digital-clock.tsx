"use client";
import { useState, useEffect, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';


const DigitalClock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [is24Hour, setIs24Hour] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false); // Check if component is mounted

  useEffect(() => {
    setMounted(true); // Set to true once the component has mounted
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = useMemo<string>(() => {
    const hours = is24Hour
      ? time.getHours().toString().padStart(2, "0")
      : (time.getHours() % 12 || 12).toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }, [time, is24Hour]);

  if (!mounted) {
    // Return nothing or a loading state until the component is mounted on the client
    return null;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-pink-300" >
      <Card className="p-8 shadow-lg rounded-2xl">
        <div className="flex flex-col items-center justify-center">
          <div className="text-2xl font-bold tracking-tight">Digital Clock</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Display current time in hours, minutes, and seconds.
            <div style={{ backgroundColor: 'black', padding: '20px',textAlign: 'center' , color: 'white-400'}}>
              `Every Second Counts`</div>
          </div>
          <div className="text-6xl font-bold tracking-tight">
            {formattedTime}
          </div>
          <div className="mt-4 flex items-center">
            <Button
              variant={is24Hour ? "default" : "outline"}
              onClick={() => setIs24Hour(true)}
              className="mr-2 font-bold"
            >
              24-Hour Format
            </Button>
            <Button
              variant={!is24Hour ? "default" : "outline"}
              onClick={() => setIs24Hour(false)}
              className="mr-2 font-bold"
            >
              12-Hour Format
            </Button>
            
          </div>
        </div>
        <div className="mt-4 text-center text-xl italic text-gray-600">
              `Time is what we want most, but what we use worst`
              <FontAwesomeIcon icon={faClock} />
              </div>
      </Card>
    </div>
  );
};

export default DigitalClock;

// const DigitalClock: React.FC = () => {
//   const [time, setTime] = useState<Date>(new Date());
//   const [is24Hour, setIs24Hour] = useState<boolean>(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const formattedTime = useMemo<string>(() => {
//     const hours = is24Hour
//       ? time.getHours().toString().padStart(2, "0")
//       : (time.getHours() % 12 || 12).toString().padStart(2, "0");
//     const minutes = time.getMinutes().toString().padStart(2, "0");
//     const seconds = time.getSeconds().toString().padStart(2, "0");
//     return `${hours}:${minutes}:${seconds}`;
//   }, [time, is24Hour]);

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <Card className="p-8 shadow-lg rounded-2xl">
//         <div className="flex flex-col items-center justify-center">
//           <div className="text-2xl font-bold tracking-tight">Digital Clock</div>
//           <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
//             Display current time in hours, minutes, and seconds.
//           </div>
//           <div className="text-6xl font-bold tracking-tight">
//             {formattedTime}
//           </div>
//           <div className="mt-4 flex items-center">
//             <Button
//               variant={is24Hour ? "default" : "outline"}
//               onClick={() => setIs24Hour(true)}
//               className="mr-2 font-bold"
//             >
//               24-Hour Format
//             </Button>
//             <Button
//               variant={!is24Hour ? "default" : "outline"}
//               onClick={() => setIs24Hour(false)}
//               className="mr-2 font-bold"
//             >
//               12-Hour Format
//             </Button>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default DigitalClock;


