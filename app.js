
var nombres_dominios_1 = ['loren', 'ipsum'];
var nombres_dominios_2 = ['farma', 'blue'];
var nombres_dominios_3 = ['logia', 'ipso'];

for (var i = 0; i < nombres_dominios_1.length; i++) {
  for (var j = 0; j < nombres_dominios_2.length; j++) {
    for (var k = 0; k < nombres_dominios_3.length; k++) {
      var resultadoFinal = nombres_dominios_1[i] + nombres_dominios_2[j] + nombres_dominios_3[k] + '.com';
      console.log(resultadoFinal);
    }
  }
}