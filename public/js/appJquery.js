$(document).ready(function(){

    /** Ajax */
    // $( ".ajax" ).click(function() {
    //     $( "#apply-jquery" ).load( "test-ajax.html" );
    // });

    let btnEnviar = $("#enviar");
    btnEnviar.click(function(){
        let login = $('#login').val();
        $.ajax({
            method: "GET",
            url: "https://viacep.com.br/ws/04849-270/json/",
            data: { userlogin: login}
        })
        .done(function( msg ) {
            console.log(msg);
            $("#apply-jquery").html(msg);
        });
    });
    

    


    let div = $('#apply-jquery');

    /*
    div.click(function () {
        console.log('ola você clicou na div');
    });
    div.mouseover(function() {
        console.log('ola você passou o mouse na div');
    });
    div.on('mouseout', function(){
        console.log('ola você tirou o mouse na div');
    });
    */
    div.css('background-color','red');
    div.on({
        click: function () {
            $(this).css('background-color','blue');
            console.log('ola você clicou na div');
        },
        mouseover: function () {
            console.log('ola você passou o mouse na div');
        },
        mouseout: function () {
            console.log('ola você tirou o mouse na div');
        },
        mouseenter:function() {
            $(this).css('background-color','#999');
            console.log('ola você entrou na div');
        }
    });

    /* calcular */
    let bot1 = $('.bot-01');
    let bot2 = $('.bot-02');
    let total = $('.resultado');
    let soma = $('.soma');
    
    let resultado = 0;

    total.click(function(){
        $(soma).text(resultado);
    });

    bot1.click(function(){
        resultado += Number($(this).text());
    });

    bot2.click(function(){
        resultado += +$(this).text();
    });

    //$(this).hide();
    //$(this).show();
    //$(this).toggle();

    let botaoHide = $('.bot-hide');
    let textoDoBotao = botaoHide.text();
    botaoHide.click(function(){
        $('#apply-jquery').slideUp('slow'); //hide() //fideOut()
    });

    let botaoShow = $('.bot-show');
    botaoShow.click(function(){
        $('#apply-jquery').css({
            color: 'blue',
            backgroundColor: 'black',
            fontSize: '30px',
        })
        .slideDown('slow') //show() fideIn() fadeToggle
        .html('<strong>Novo texto</strong>');
    });
    
    // let botao = $('button'); // [button, button]
    // botao.each(function(contator){   
    //     // $(this).click(function(){
    //     //     $('#apply-jquery').css('color','blue');   
    //     // });
    //     if(contator === 1) {
    //         $(this).css('background-color','blue');
    //     }
    // });


});
