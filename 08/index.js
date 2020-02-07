let predictArr = {}
let history = "0000"

function predict() {
    while (true) {
        let predict = predictArr[history]
        if (! (history in predictArr)) {
            predict = Math.round(Math.random())
        }
       
        let userEnter = prompt("введите число 1 или 0");
        if (userEnter == "0" || userEnter == '1') {
            predictArr[history] = userEnter
            history = history.substr(1)+userEnter
            alert("My predict:"+predict+ "you say:" + userEnter)
        } else if (userEnter == null){
            break
        } else {
            alert("введите 1 или 0")
            continue;
        }
    }
    return true;
}