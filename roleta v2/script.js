var degree = 1800;
var clicks = 0;
var girando = false;

$(document).ready(function(){
    $('#spin').click(function(){
        if (!girando) {
            girando = true;
            clicks++;
            if (clicks <= 4) {
                var newDegree = degree * clicks;
                var totalDegree = newDegree + (90 * (clicks - 1));

                $('#roleta .sec').each(function(index){
                    var t = $(this);

                    setTimeout(function(){
                        var aoY = t.offset().top;

                        if(aoY < 23.83){
                            $('#spin').addClass('spin');
                            setTimeout(function(){
                                $('#spin').removeClass('spin');
                                girando = false; // Permite girar novamente após a animação
                            },100);
                        }
                    }, index * 100);

                    $('#interno-roleta').css({
                        'transform': 'rotate(' + totalDegree + 'deg)'
                    });
                });

                // Desabilita o botão por 8 segundos
                $('#spin').prop('disabled', true);
                setTimeout(function(){
                    $('#spin').prop('disabled', false);
                    girando = false; // Permite girar novamente após os 8 segundos
                    executarOpcao(clicks); // Chama a nova função após 8 segundos
                }, 6600);
            } else {
                $('#aviso').css('display', 'block');
                $('#spin').prop('disabled', true);
                $('#spin').addClass('disabled');
            }
        }
    });
});

function executarOpcao(opcao) {
    switch (opcao) {
        case 1:
            $('#resultado').text('Opção 1 selecionada');
            break;
        case 2:
            $('#resultado').text('Opção 2 selecionada');
            break;
        case 3:
            $('#resultado').text('Opção 3 selecionada');
            break;
        case 4:
            $('#resultado').text('Opção 4 selecionada');
            break;
        default:
            break;
    }
}
