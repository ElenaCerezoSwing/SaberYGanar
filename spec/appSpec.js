/* TO DO - list
*
*   velocidad de respuesta, acierto o fallo,
*
*      +Si acierto pregunta en menos de 2 segundos - sumo 2 puntos
*          (0 puntos, pregunta correcta, 1 segundo) -> 2 puntos
*          (1 punto, correcta, 1 segundo) -> 3 puntos
*      +Si fallo pregunta en mas de 10 segundos - resto 2 puntos
*      +Si acierto pregunta entre 2 y 10 segundos - sumo 1 punto
            (1 punto, correcta, 5 segundos) -> 2 puntos
*      +Si acierto y tardo mas de 10 segundos - 0 puntos
*      +Si fallo antes de 10 segundos - resto 1 punto
*      No se puede pasar sin responder
*      Si en 20 segundos no has respondido , pasa a siguiente pregunta y pierdes 3 punto
*
*
* */
describe('cálculo del marcador', function () {
    function recalcularAcertandoPregunta(marcador, tiempo) {
        if (tiempo <= 2) {
            return marcador + 2;
        }
        else if (tiempo <= 10) {
            return marcador + 1;
        }
        else if (tiempo > 10 && tiempo < 20) {
            return marcador;
        }

    }

    function recalcularFallandoPregunta(marcador, tiempo) {
        if (tiempo < 10) {
            return marcador - 1;
        }
        else if (tiempo >= 10 && tiempo < 20) {
            return marcador - 2;
        }

    }
    it("suma los puntos si acierta muy rápido", function () {

        expect(recalcularAcertandoPregunta(3, 1)).toBe(5);
    });

    it("suma los puntos si acierta  rápido", function () {
        expect(recalcularAcertandoPregunta(3, 10)).toBe(4);
    });

    it("suma los puntos si acierta lento", function () {
        expect(recalcularAcertandoPregunta(3, 17)).toBe(3);

    });
    it("resta los puntos si falla muy rápido", function () {

        expect(recalcularFallandoPregunta(3, 1)).toBe(2);

    });
    it("resta los puntos si falla rápido", function () {
        expect(recalcularFallandoPregunta(3, 10)).toBe(1);

    });


});


// describe('calculo de marcador', function () {
//     function recalcularMarcador(puntos, /*existeRespuesta,*/  esCorrecta, tiempo) {


//         if (/*existeRespuesta &&*/ esCorrecta && tiempo <= 2) {
//             return puntos + 2;
//         }
//         else if (/*existeRespuesta &&*/esCorrecta && tiempo <= 10) {
//             return puntos + 1;
//         }
//         else if (/*existeRespuesta &&*/esCorrecta && tiempo > 10 && tiempo < 20) {
//             return puntos;
//         }
//         else if (/*existeRespuesta &&*/!esCorrecta && tiempo < 10) {
//             return puntos - 1;
//         }
//         else if (/*existeRespuesta &&*/!esCorrecta && tiempo >= 10 && tiempo < 20) {
//             return puntos - 2;
//         }
//         else if (/*existeRespuesta &&*/ /*esCorrecta || !esCorrecta &&*/ tiempo >= 20) {
//             return puntos - 3;
//         }
//         // else if (/*existeRespuesta &&*/ tiempo >= 20) {
//         //     return puntos - 3;
//         // }
//     }

//     it("suma mas puntos si acierta muy rapido", function () {
//         expect(recalcularMarcador(0, /*true,*/ true, 1)).toBe(2);
//         expect(recalcularMarcador(2, /*true,*/ true, 1)).toBe(4);
//         expect(recalcularMarcador(2, /*true,*/true, 3)).toBe(3);
//         expect(recalcularMarcador(3, /*true,*/ true, 11)).toBe(3);
//     });
//     it("resta mas puntos si falla muy lento", function () {
//         expect(recalcularMarcador(3,/*true,*/ false, 1)).toBe(2);
//         expect(recalcularMarcador(3,/*true,*/ false, 11)).toBe(1);

//     });
//     it("resta mas si el tiempo es superior o igual a 20 segundos", function () {
//         expect(recalcularMarcador(3,/*true,*/ true, 20)).toBe(0);
//         expect(recalcularMarcador(3, /*true,*/ false, 20)).toBe(0);

//     });
//     it("no contestas en 20 segundos pasas de pregunta y pierdes tres puntos", function () {
//         expect(recalcularMarcador(4, /*true,*/ true, 21)).toBe(1);
//         expect(recalcularMarcador(4, /*true,*/ false, 21)).toBe(1);
//     });
// });