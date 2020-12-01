$(function (){

var dropDown = $('span.dropdown');


dropDown.hover(


    function (){
    // handler In

    $(this).children('ul.m_dropdown').removeClass('d_none');


    },

    function (){
    // handler Out

    $(this).children("ul.m_dropdown").addClass("d_none");

    }


)

});
