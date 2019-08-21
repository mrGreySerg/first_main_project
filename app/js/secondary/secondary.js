
// console.log(jQuery('.active'));
// console.log($('.active'));
// $('.active').css('color', 'red');

// $(function(){}) - аналог реди, выполнение после загрузки страницы.
$(function(){
    if($('div').hasClass('active'))
        // console.log("we have .active class!!!")

        // $('div').removeClass('active');
        // $('div').addClass('first');

        $('div').removeClass('active')
                .addClass('first');
})