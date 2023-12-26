function convertCurrency() {
  var inputCurrency = parseFloat(document.getElementById('inputCurrency').value);
  var selectValas = document.getElementById('selectValas');
  var valasValue;

  switch (selectValas.value) {
      case 'usd':
          valasValue = 9915;
          break;
      case 'sgd':
          valasValue = 13472;
          break;
      case 'myr':
          valasValue = 874;
          break;
      case 'jpy':
          valasValue = 120;
          break;
      case 'eur':
          valasValue = 15888;
          break;
      case 'sar':
          valasValue = 3592;
          break;
      default:
          valasValue = 1;
          break;
  }

  var result = inputCurrency * valasValue;

  document.getElementById('result').innerHTML = "Hasil Konversi: " + result.toFixed(2) + " Rupiah";
}
