import { subDays, addHours } from 'date-fns';

const sources = ['website', 'mobile', 'ads', 'other'];

export const generateTicketData = (days) => {
  const data = [];
  
  for (let i = 0; i < days; i++) {
    const date = subDays(new Date(), i);
    const entriesPerDay = 4 + Math.floor(Math.random() * 5);
    
    for (let j = 0; j < entriesPerDay; j++) {
      const source = sources[Math.floor(Math.random() * sources.length)];
      const status = Math.random() > 0.1 ? 'booked' : 'cancelled';
      
      data.push({
        date: addHours(date, Math.floor(Math.random() * 24)),
        count: Math.floor(Math.random() * 10) + 1,
        revenue: (Math.floor(Math.random() * 200) + 50) * 10,
        source,
        status
      });
    }
  }
  
  return data;
};