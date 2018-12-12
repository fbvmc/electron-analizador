$(function(){


  
    





});

function analysis(texto) {

    console.log('click button!!!!!');
    $("#records_table").find("tr:gt(0)").remove();

    $.get('http://data.cervantesvirtual.com/NLPServlet?inputText='+texto, function(response){

        var data = $(response);

        $.each(data, function(i, item) {

            $('#records_table > tbody:last-child').append(
                '<tr>'// need to change closing tag to an opening `<tr>` tag.
                +'<td>'+item.word+'</td>'
                +'<td>'+item.pos+'</td>'
                +'<td>'+getDescription(item.pos)+'</td>'
                +'</tr>');
            
         });
    });
}


    function getDescription(pos) {
         switch (pos) {
              case 'ao0000':
                  return "Adjetivo (ordinal). Ejemplo: primera, segundo, últimos";
                  break;
              case 'aq0000':
                  return "Adjetivo (descriptivo). Ejemplo: populares, elegido, emocionada, andaluz";
                  break;
              case 'cc':
                  return "Conjunción (coordinación). Ejemplo: y, o, pero";
                  break;
              case 'cs':
                  return "Conjunción (subordinada). Ejemplo: que, como, mientras";
                  break;
              case 'da0000':
                  return "Artículo (definido). Ejemplo: el, la, los, las";
                  break;
              case 'dd0000':
                  return "Demostrativo. Ejemplo: este, esta, esos";
                  break;
              case 'de0000':
                  return "Exclamativo. Ejemplo: qué (¡Qué pobre!)";
                  break;
              case 'di0000':
                  return "Artículo (indefinido). Ejemplo: un, muchos, todos, otros";
                  break;
              case 'dn0000':
                  return "Numeral. Ejemplo: tres, doscientas";
                  break;
              case 'dp0000':
                  return "Posesivo. Ejemplo: sus, mi";
                  break;
              case 'dt0000':
                  return "Interrogativo. Ejemplo: cuántos, qué, cuál";
                  break;
              case 'f0':
                  return "Otro. Ejemplo: &, @";
                  break;
              case 'faa':
                  return "Signo exclamación invertida (¡)";
                  break;
              case 'faa':
                  return "Signo exclamación invertida (¡)";
                  break;
              case 'fat':
                  return "Signo exclamación (!)";
                  break;
              case 'fc':
                  return "Comma (,)";
                  break;
              case 'fd':
                  return "Colon (:)";
                  break;
              case 'fe':
                  return "Doble coma (\")";
                  break;
              case 'fg':
                  return "Guión (-)";
                  break;
              case 'fh':
                  return "Barra (/)";
                  break;
              case 'fia':
                  return "Signo interrogación invertido (¿)";
                  break;
              case 'fit':
                  return "Signo interrogación (?)";
                  break;
              case 'fp':
                  return "Punto (.)";
                  break;
              case 'fpa':
                  return "Paréntesis izquierdo (";
                  break;
              case 'fpt':
                  return "Paréntesis derecho )";
                  break;
              case 'fs':
                  return "Puntos suspensivos (..., etcétera)";
                  break;
              case 'ft':
                  return "Signo porcentaje (%)";
                  break;
              case 'fx':
                  return "Punto y coma (;)";
                  break;
              case 'fz':
                  return "Coma simple (')";
                  break;
              case 'i':
                  return "Interjección (ay, ojalá, hola)";
                  break;
              case 'nc00000':
                  return "Nombre común desconocido (neologismo, palabra herededa de otro idioma). Ejemplos: minidisc, hooligans, re-flotamiento";
                  break;
              case 'nc0n000':
                  return "Nombre común (número invariable). Ejemplos: hipótesis, campus, golf";
                  break;
              case 'nc0p000':
                  return "Nombre común (plural). Ejemplos: años, elecciones";
                  break;
              case 'nc0s000':
                  return "Nombre común (singular). Ejemplos: lista, hotel, partido";
                  break;
              case 'np00000':
                  return "Nombre propio. Ejemplos: Málaga, Parlamento, UFINSA";
                  break;
              case 'p0000000':
                  return "Impersonal se";
                  break;
              case 'pd000000':
                  return "Pronombre demostrativo. Ejemplos: éste, eso, aquellas";
                  break;
              case 'pe000000':
                  return "Pronombre exclamativo. Ejemplos: qué";
                  break;
              case 'pi000000':
                  return "Pronombre indefinido.    Ejemplos: muchos, uno, tanto, nadie";
                  break;
              case 'pn000000':
                  return "Pronombre numeral. Ejemplos (dos miles, ambos)";
                  break;
              case 'pp000000':
                  return "Pronombre personal. Ejemplos: ellos, lo, la, nos";
                  break;
              case 'pr000000':
                  return "Pronombre relativo. Ejemplos: que, quien, donde, cuales";
                  break;
              case 'pt000000':
                  return "Pronombre interrogativo. Ejemplos: cómo, cuánto, qué";
                  break;
              case 'px000000':
                  return "Pronombre posesivo. Ejemplos: tuyo, nuestra";
                  break;
              case 'pr000000':
                  return "Pronombre relativo. Ejemplos: que, quien, donde, cuales";
                  break;
              case 'rg':
                  return "Adverbio (general). Ejemplos: siempre, más, personalmente";
                  break;
              case 'rn':
                  return "Adverbio (negativo). Ejemplos: no";
                  break;
              case 'sp000':
                  return "Preposición. Ejemplos: en, de, entre";
                  break;
              case 'vag0000':
                  return "Verbo (auxiliar, gerundio). Ejemplos: habiendo";
                  break;
              case 'vaic000':
                  return "Verbo (auxiliar, indicativo, condicional). Ejemplos: habría, habríamos";
                  break;
              case 'vaif000':
                  return "Verbo (auxiliar, indicativo, futuro). Ejemplos: habrá, habremos";
                  break;
              case 'vaii000':
                  return "Verbo (auxiliar, indicativo, imperfecto). Ejemplos: había, habíamos";
                  break;
              case 'vaip000':
                  return "Verbo (auxiliar, indicativo, presente). Ejemplos: ha, hemos";
                  break;
              case 'vais000':
                  return "Verbo (auxiliar, indicativo, pretérito). Ejemplos: hubo, hubimos";
                  break;
              case 'vam0000':
                  return "Verbo (auxiliar, imperativo). Ejemplos: haya";
                  break;
              case 'van0000':
                  return "Verbo (auxiliar, infinitivo). Ejemplos: haber";
                  break;
              case 'vap0000':
                  return "Verbo (auxiliar, participio). Ejemplos: habido";
                  break;
              case 'vasi000':
                  return "Verbo (auxiliar, subjuntivo, imperfecto). Ejemplos: hubiera, hubiéramos, hubiese";
                  break;
              case 'vasp000':
                  return "Verbo (auxiliar, subjuntivo, presente). Ejemplos: haya, hayamos";
                  break;
              case 'vmg0000':
                  return "Verbo (principal, gerundio). Ejemplos: dando, trabajando";
                  break;     
              case 'vmic000':
                  return "Verbo (principal, indicativo, condicional). Ejemplos: daría, trabajaríamos";
                  break;     
              case 'vmif000':
                  return "Verbo (principal, indicativo, futuro). Ejemplos: dará, trabajaremos";
                  break; 
              case 'vmii000':
                  return "Verbo (principal, indicativo, imperfecto). Ejemplos: daba, trabajábamos";
                  break;
              case 'vmip000':
                  return "Verbo (principal, indicativo, presente). Ejemplos: da, trabajamos";
                  break;
              case 'vmis000':
                  return "Verbo (principal, indicativo, pretérito). Ejemplos: dio, trabajamos";
                  break;
              case 'vmm0000':
                  return "Verbo (principal, imperativo). Ejemplos: da, dé, trabaja, trabajes, trabajemos";
                  break;
              case 'vmn0000':
                  return "Verbo (principal, infinitivo). Ejemplos: dar, trabjar";
                  break;
              case 'vmp0000':
                  return "Verbo (principal, participio). Ejemplos: dado, trabajado";
                  break;
              case 'vmsi000':
                  return "Verbo (principal, subjuntivo, imperfecto). Ejemplos: diera, diese, trabajáramos, trabajésemos";
                  break;
              case 'vmsp000':
                  return "Verbo (principal, subjuntivo, presente). Ejemplos: dé, trabajemos";
                  break;
              case 'vsg0000':
                  return "Verbo (semiauxiliar, gerundio). Ejemplos: siendo";
                  break;
              case 'vsic000':
                  return "Verbo (semiauxiliar, indicativo, condicional). Ejemplos: sería, serían";
                  break;
              case 'vsif000':
                  return "Verbo (semiauxiliar, indicativo, futuro). Ejemplos: será, seremos";
                  break;
              case 'vsii000':
                  return "Verbo (semiauxiliar, indicativo, imperfecto). Ejemplos: era, éramos";
                  break;     
              case 'vsip000':
                  return "Verbo (semiauxiliar, indicativo, presente). Ejemplos: es, son";
                  break;
              case 'vsis000':
                  return "Verbo (semiauxiliar, indicativo, pretérito). Ejemplos: fue, fuiste";
                  break;
              case 'vsm0000':
                  return "Verbo (semiauxiliar, imperativo). Ejemplos: sea, sé";
                  break;
              case 'vsn0000':
                  return "Verbo (semiauxiliar, infinitivo). Ejemplos: ser";
                  break;
              case 'vsp0000':
                  return "Verbo (semiauxiliar, participio). Ejemplos: sido";
                  break;
              case 'vssf000':
                  return "Verbo (semiauxiliar, subjuntivo, futuro). Ejemplos: fuere";
                  break;
              case 'vssi000':
                  return "Verbo (semiauxiliar, subjuntivo, imperfecto). Ejemplos: fuera, fuese, fuéramos";
                  break;
              case 'vssp000':
                  return "Verbo (semiauxiliar, subjuntivo, presente). Ejemplos: sea, seamos";
                  break;
              case 'w':
                  return "Fecha. Ejemplos: octubre, jueves, 2002";
                  break;                   
              case 'z0':
                  return "Número. Ejemplos: 547.000, 04, 52,52";
                  break;     
              case 'zm':
                  return "Moneda. Ejemplos: dólares, euros";
                  break;     
              case 'zu':
                  return "Otras unidades. Ejemplos: km, cc";
                  break;     
              default:
         }
    }



