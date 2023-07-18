const date = new Date(); // Get current date and time

const year = date.getFullYear();      // 4-digit year (e.g., 2023)
const month = date.getMonth();        // month (0-11, where 0 is January)
const day = date.getDate();           // day of the month (1-31)
const hours = date.getHours();        // hours (0-23)
const minutes = date.getMinutes();    // minutes (0-59)
const seconds = date.getSeconds();    // seconds (0-59)
const milliseconds = date.getMilliseconds();  // milliseconds (0-999)
const dayOfWeek = date.getDay();      // day of the week (0-6, where 0 is Sunday)

date.setDate(date.getDate() + 7);     // Add 7 days
date.setMonth(date.getMonth() - 1);   // Subtract 1 month
date.setFullYear(date.getFullYear() + 1);   // Add 1 year

//Run node ./Date.js
console.log(date)

console.log('Year:', year);

console.log('Month:', month);

console.log('Day:', day);

console.log('Hours:', hours);

console.log('Minutes:', minutes);

console.log('Seconds:', seconds);

console.log('Milliseconds:', milliseconds);

console.log('Day of the Week:', dayOfWeek);