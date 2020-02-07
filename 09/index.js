let persons = [{
    surname: 'Bespaly',
    name: 'Arthur',
    phone: 'xiaomi',
    number: "+38091914443929129"
},
{
    surname: 'shvaic',
    name: 'maxim',
    phone: 'apple',
    number: "+380914491929129",
    sex: "male"
},

{
    surname: 'Ivanova',
    name: 'Irina',
    phone: 'blackberry',
    number: "+38091191929129",
    room: '134'
}]


// let arra = ["as", 'as', 'ui']
// const a = arra.filter((item, index) =>  arra.indexOf(item) == index)
// console.log(a)

var header = {}
for (let person of persons) {
  header = { ...header, ...person };
}
header = Object.keys(header)

table = "<table border = '1'><tr bgcolor = 'orange'>";
for (let key of header) {
  table += `<th>${key}</th>`
}
table += `</tr>`
  var i = 0
for (person of persons) {
   if (i % 2) {
      table += `<tr bgcolor = 'gree'>`;
    } else {
        table += `<tr bgcolor = 'yellow'>`;
    }
  i++;
    for (let k of header) {
    if (person[k]) {
      table += `<td>${person[k]}</td>`;
    } else {
      table += `<td>${'-'}</td>`
    }
  }
  table += `</tr>`
}
table += "</tr></table>"

document.write(table)