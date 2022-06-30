const isDateValid = require('./isDateValid')

test('should output "/steps"', () => {
const result = isDateValid({ 
    'date-day': '3',
    'date-month': '4',
    'date-year': '2021'
 })
 expect(result).toBe("/steps")
})

test('should output "/date-err"', () => {
const result = isDateValid({ 
    'date-day': '3',
    'date-month': '4',
    'date-year': '2023'
 })
 expect(result).toBe("/date-err")
})

test('should output "/date-invalid"', () => {
const result = isDateValid({ 
    'date-day': '',
    'date-month': '4',
    'date-year': '2023'
 })
 expect(result).toBe("/date-invalid")
})