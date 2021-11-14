let testArray =['Sketch', 'Vallarino', 'The Cat', 2]
let testArray2 =[['Sketch', 'Vallarino', 'The Cat', 0], ['Zach', 'Vallarino', 'The Guy', 0]]
let testTime = "2021-08-18 1230"
let testObject = {
  name:"We testing",
  timeInEvents:[]
}

function createEmployeeRecord (arrayZ){
return {
    firstName:arrayZ[0],
    familyName:arrayZ[1],
    title:arrayZ[2],
    payPerHour:arrayZ[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords (arrayAs){
  let employeeRecords = arrayAs.map((element)=>createEmployeeRecord(element))
 
  return employeeRecords
}

function createTimeInEvent(objectZ,time){
  let [date, hour] = time.split(' ')
  objectZ.timeInEvents.push({
    type:"TimeIn",
    hour: parseInt(hour),
    date: date
  })
  
  return objectZ
}

function createTimeOutEvent(objectz,time){
  let[date, hour] = time.split(" ")
  objectz.timeOutEvents.push({
    type:"TimeOut",
    hour:parseFloat(hour),
    date: date
  })
  return objectz
}

function hoursWorkedOnDate(objectz,date){
  let TimeIn = objectz.timeInEvents[0].hour
  let TimeOut = objectz.timeOutEvents[0].hour
  let hoursWorked = (TimeOut-TimeIn)/100
  return hoursWorked
}

function wagesEarnedOnDate(objectz,date){
  let pay = objectz.payPerHour
  let amountOfHours = hoursWorkedOnDate(objectz,date)
  let totalPay = pay * amountOfHours
  return totalPay
}



function Helper(arrayZack){
  let sketch = createEmployeeRecord(arrayZack)
  let sketchTimeIn = createTimeInEvent(sketch,"2014-02-28 1400") 
  let sketchTimeOut = createTimeOutEvent(sketchTimeIn,"2014-02-28 2000" )
  let sketchTimeIn2 = createTimeInEvent(sketchTimeOut,"2020-08-18 1000") 
  let sketchTimeOut2 = createTimeOutEvent(sketchTimeIn2,"2020-08-18  2000" )
  console.log(sketchTimeOut2)

}

console.log(Helper(testArray))

