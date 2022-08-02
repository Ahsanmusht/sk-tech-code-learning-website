
// for menu bar add

$(document).ready(function(){

    $('#menu').click(function(){

        $(this).toggleClass('fa-times');

        $('.navbar').toggleClass('nav-toggle');

    });
        // for login form add

    $('#login').click(function(){

        $('.login-form').addClass('popup');

    });
    // for login form remove

    $('.login-form .fa-times').click(function(){

        $('.login-form').removeClass('popup');

    });
    // for menu bar remove 

    $(window).on('load scroll', function(){

        $('#menu').removeClass('fa-times');

        $('.navbar').removeClass('nav-toggle');

        $('.login-form').removeClass('popup');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){

                $('.navbar ul li a').removeClass('active');

                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }



        });
    });
});




// console some work

// first function variables

var username = document.getElementById('username');
var password = document.getElementById('password');

// second function variables

var fullname = document.getElementById('fullname');
var email = document.getElementById('email');
var passwrd = document.getElementById('passwrd');
var number = document.getElementById('number');
var address = document.getElementById('address');

function abc1(){
    console.log("The username you entered is:"+username.value);
    console.log("The login password you entered is:"+password.value);
}


function abc2(){
    console.log("The fullname you entered is:"+fullname.value);
    console.log("The email you entered is:"+email.value);
    console.log("The second password you entered is:"+passwrd.value);
    console.log("The number you entered is:"+number.value);
    console.log("The address you entered is:"+address.value);
}
// console work ends