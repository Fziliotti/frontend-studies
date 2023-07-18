// Main concepts:
// A common approach is to store ISO Dates in the backend. 
// And the frontend will be responsible for formatting and displaying the date according to user preferences (locale and timezone) or localTime (localDate).

const date = new Date("2023-07-17T10:30:45.123Z");
const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
const formattedDate = dateFormatter.format(date);
console.log('Formatted Date:', formattedDate);


const timeFormatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});
const formattedTime = timeFormatter.format(date);
console.log('Formatted Time:', formattedTime);


// sometimes even the US needs 24-hour time
console.log(new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "America/Los_Angeles",
}).format(date));




