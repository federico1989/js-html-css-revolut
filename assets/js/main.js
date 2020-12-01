$(function (){

var dropDown = $('span');
var list = $("m_dropdown");

dropDown.hover(


    function (){
    // handler In

    list.removeClass('d_none');


    },

    function (){
    // handler Out

    list.addClass("d_none");

    }


)

});
