/* Your Code Here */
function createEmployeeRecord(array){
    const employeeRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord;
}

function createEmployeeRecords(arrayOfArrays){
    const arrayOfObjects = [];
    arrayOfArrays.map(nestedArray => {arrayOfObjects.push(createEmployeeRecord(nestedArray))});

    return arrayOfObjects;
}

function createTimeInEvent(dateStamp){
    this.timeInEvents.push({
        type: "TimeIn",
        hour: Number.parseInt(dateStamp.slice(11)),
        date: dateStamp.slice(0, 10)
    })
    return this
}

function createTimeOutEvent(dateStamp){
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: Number.parseInt(dateStamp.slice(11)),
        date: dateStamp.slice(0, 10)
    })
    return this
}

function hoursWorkedOnDate(date){
    for(let i in this.timeInEvents){
        if(this.timeInEvents[i].date === date){
            return (this.timeOutEvents[i].hour - this.timeInEvents[i].hour)/100
        }
    }
}

function wagesEarnedOnDate(date){
    const payOwed = hoursWorkedOnDate.call(this, date) * this.payPerHour;
    return payOwed;
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(record => {return record.firstName === firstName});
}

function calculatePayroll(arrayOfEmployees){
    const reducer = (accumulator, employee) => {
        let totalWages = allWagesFor.call(employee);
        return accumulator += totalWages;
    }
   return arrayOfEmployees.reduce(reducer, 0)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

