




let a =[ {
    surname: 'Bespaly',
    name: 'Arthur',
    phone: 'xiomi',
    number: "+38091914443929129"
}]
let str = "<style> table:hover {font-size: 100px; color: #ffe;margin-top: 100px ; transform: rotate(15deg); background-color: #5488af;} </style><table border='1'><tr><th>ИМЯ</th><th>ФАМИЛИЯ</th></tr>"
for (let i in a){
    str += `<tr><td>${a[i].name}</td><td>${a[i].surname}</td></tr>`
}
str += "</table>"
document.write(str)
