let $buttons = $('#buttons > button')
let $images = $('#images')
let $img = $images.children('img')
let current = 0

makeFakeSlides()
$images.css({transform:'translateX(-300px)'})
bindEvents()
$(next).on('click', function(){
  goToSlide(current+1)
})
$(previous).on('click', function(){
  goToSlide(current-1)
})

let timer = setInterval(function(){
  goToSlide(current+1)
},2000)
$('.container').on('mouseenter', function(){
  window.clearInterval(timer)
}).on('mouseleave', function(){
  timer = setInterval(function(){
    goToSlide(current+1)
  },2000)
})

function bindEvents(){
  $('#buttons ').on('click', 'button', function(e){
    let $button = $(e.currentTarget) 
    let index = $button.index()
    goToSlide(index)
  })
}

//previous next 
function goToSlide(index){
  if(index > $buttons.length-1){
    index = 0
  }else if(index <0){
    index = $buttons.length - 1
  }
  console.log('current', 'index')
  console.log(current, index)
  if(current === $buttons.length -1 && index === 0){
    // 最后一张到第一张
    console.log('here')
    $images.css({transform:`translateX(${-($buttons.length + 1) * 300}px)`})
      .one('transitionend', function(){
        $images.hide()
        $images.offset() // .offset() 可以触发 re-layout
        $images.css({transform:`translateX(${-(index+1)*300}px)`}).show()
      })

  }else if(current === 0 && index === $buttons.length - 1){
    // 第一张到最后一张
    $images.css({transform:`translateX(0px)`})
      .one('transitionend', function(){
        $images.hide().offset()
        $images.css({transform:`translateX(${-(index+1)*300}px)`}).show()
      })

  }else{
    $images.css({transform:`translateX(${- (index+1) * 300}px)`})
  }
  current = index
}

function makeFakeSlides(){
    let $firstCopy = $img.eq(0).clone(true)
    let $lastCopy = $img.eq($img.length-1).clone(true)
    $images.append($firstCopy)
    $images.prepend($lastCopy)
}