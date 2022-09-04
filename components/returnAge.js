import DateDiff from 'date-diff'
let dob = new Date(2004, 10, 21)
let currentDate = new Date()
let age = new DateDiff(currentDate, dob);
export default age.years()