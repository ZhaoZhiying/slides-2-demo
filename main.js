let n
初始化()
setInterval(()=>{
    makeLeave($(`#images > img:nth-child(${x(n)})`)) //ES6 ``
        .one('transitionend', function(x){
            makeEnter($(x.currentTarget))
        })
    makeCurrent(getImage(n+1))
    n += 1
},3000)

function x(n){
    if(n>3){ 
        n = n%3
        if (n === 0){
            n = 3 
        }
    } // n 的值永远是 1 2 3
    return n
}

function 初始化(){
    n = 1
    $(`#images > img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
}

function makeCurrent($node){
    $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
    $node.removeClass('current enter').addClass('leave')
    return $node //*
}
function makeEnter($node){
    $node.removeClass('current leave').addClass('enter')
}

function getImage(n){
    return $(`#images > img:nth-child(${x(n)})`)
}
