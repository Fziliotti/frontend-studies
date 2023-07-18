const { format, compareAsc, isAfter  } = require('date-fns');

const date = new Date();

const formattedDate = format(date, 'MM/dd/yyyy');
const formattedDateWithTime = format(date, 'dd/MM/yyyy HH:mm:ss');

console.log(formattedDate);
console.log(formattedDateWithTime);


const sortedDates = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10)
].sort(compareAsc)

console.log(sortedDates)

const data1 = new Date(2023, 6, 15); // 15 de julho de 2023
const data2 = new Date(2023, 6, 20); // 20 de julho de 2023

if (isAfter(data2, data1)) {
  console.log('A data2 é mais atual do que a data1.');
} else {
  console.log('A data1 é mais atual do que a data2 ou elas são iguais.');
}