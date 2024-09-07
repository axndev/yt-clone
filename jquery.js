$(document).ready(function(){
    $('.menuIcon').click(function(){
        $(this).hide();
        $('.clsmenuIcon').show();
        $('.sidenav').addClass('sidenavactive');
        $('.sidenav div').css({
            'flex-direction':'row',
            'padding': '7px 60px 7px 0px',
            'gap': '14px'
        }            
        );
        $('.sidenav div p').css({
            'font-size': '15px'
        });
    });
    $('.clsmenuIcon').click(function(){
        $(this).hide();
        $('.menuIcon').show();
        $('.sidenav').removeClass('sidenavactive');
        $('.sidenav div').css({
            'flex-direction':'column',
            'padding': '8px',
            'gap': '0'
        }            
        );
        $('.sidenav div p').css({
            'font-size': '10px'
        });
    });
});