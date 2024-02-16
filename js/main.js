// var arr = ['olma', 'anor', 'ananas', 'banan', 'kivi', 'nok', 'apelsin']
// // console.log('salom');
// arr.forEach((item)=> {
//     if(item.includes('a' && item.length(4))){
//         console.log(item);
//     }
// })

var elBox1 = document.querySelector('.box1')
var elBox2 = document.querySelector('.box2')
var elBox3 = document.querySelector('.box3')
var elBoxOne = document.querySelector('.box__one')
var elBoxTwo = document.querySelector('.box__two')
var elTimer = document.querySelector('.timer')
var count = 0
setInterval(()=>{
    count = count + 1
    if(count >= 1 && count <= 3){
        elBox1.classList.add('red')
        elBox2.classList.remove('yellow')   //qizil
        elBox3.classList.remove('green')
        elBoxOne.classList.remove('red')
        elBoxTwo.classList.remove('green')
    }
    if(count == 3 && count <= 6){
        elBoxOne.classList.remove('red')
        elBoxTwo.classList.add('green')
    }
    if(count == 6 || count == 8){
        elBox1.classList.remove('red')
        elBox2.classList.add('yellow')     // sariq
        elBox3.classList.remove('green')
        elBoxOne.classList.remove('red')
        elBoxTwo.classList.remove('green')
    }
    if(count >= 8 && count <= 10){
        elBox1.classList.remove('red')
        elBox2.classList.remove('yellow')
        elBox3.classList.add('green')    // yashil
    }
    if(count == 10 && count <= 13){
        elBoxOne.classList.add('red')
        elBoxTwo.classList.remove('green')
    }
    if(count >= 13){
        count = 0
    }
    console.log(count);
}, 1000)


// setInterval(()=>{
//     count1 = count1 - 1
//     var date = new Date
//     elTimer.textContent = date.getSeconds()
// }, 1000)