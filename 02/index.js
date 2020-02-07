let a = [{
    surname: 'Bespaly',
    name: 'Arthur',
    phone: 'xiomi',
    number: "+38091914443929129"
}]

function ch (a){
for (let test of a) {
    for (let attr in test) {
        if (attr != 'name' && attr != 'surname') {
            console.log(test[attr])
        }
    }
}
}