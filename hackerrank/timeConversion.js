/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    let sections = s.split(':')
    if(sections[0] === '12')
        sections[0] = '0'
    let period = sections[2].slice(sections[2].length - 2)
    let hourNum = period === 'AM' ? parseInt(sections[0]) : (parseInt(sections[0]) + 12) % 24
    let hour = hourNum.toString().padStart(2, '0')
    let minute = sections[1]
    let second = sections[2].slice(0, 2)
    return `${hour}:${minute}:${second}`
}

let res = timeConversion('07:05:45PM')
console.log(res)