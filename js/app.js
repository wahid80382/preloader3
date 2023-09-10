// document.getElementById(`nav`).addEventListener("scroll",function(){
//     document.getElementById(`nav`).classList.add()
// })
$(function(){
    $(window).on(`scroll`,function(){
let scroll_value = $(window).scrollTop();
if (scroll_value > 50)
        $(`#nav`).addClass(`fixed`);
    else{
        $(`#nav`).removeClass(`fixed`);
    }})


})

$(window).on(`load`,function(){
    $(`#preloader`).hide();
})
