document.addEventListener("DOMContentLoaded", function() {
  function formatarValor(valor) {
    var partes = valor.toFixed(2).split(".");
    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return partes.join(",");
  }

  function calcular() {
    var nome = document.getElementById("nome").value;
    var tarifa = parseFloat(document.getElementById("tarifa").value.replace(",", "."));
    var kwh = parseFloat(document.getElementById("kwh").value);
    var hsp = parseFloat(document.getElementById("hsp").value);

    if (nome === "") {
      alert("Por favor, digite um nome.");
      return;
    }

    if (isNaN(tarifa)) {
      alert("Por favor, preencha o campo 'Tarifa de Energia'.");
      return;
    }

    if (isNaN(kwh)) {
      alert("Por favor, preencha o campo 'Valor do kWh'.");
      return;
    }

    if (isNaN(hsp)) {
      alert("Por favor, preencha o campo 'HSP'.");
      return;
    }

    if (tarifa === 0) {
      alert("O campo 'Tarifa de Energia' não pode ser preenchido com 0.");
      return;
    }

    if (kwh === 0) {
      alert("O campo 'Valor do kwh' não pode ser preenchido com 0.");
      return;
    }

    if (hsp === 0) {
      alert("O campo 'HSP' não pode ser preenchido com 0.");
      return;
    }

    var hspajustado = hsp;

    var calculo1 = (tarifa / kwh / 30 / hspajustado * 2500);
    var resultado1 = (calculo1 * 1.30);
    var resultado2 = (resultado1 * 1.10);

    var resultadoElement = document.getElementById("resultado");
  var resultado = `Olá, ${nome}! O valor do projeto vai ficar entre: R$${formatarValor(resultado1)} e R$${formatarValor(resultado2)} já instalado (produto + instalação + projeto + homologação + mão de obra)`;
  resultadoElement.textContent = resultado;

  return resultado;
  }
  
  function enviarWhatsApp() {
    
    var tarifa = parseFloat(document.getElementById("tarifa").value.replace(",", "."));
    var kwh = parseFloat(document.getElementById("kwh").value);
    var hsp = parseFloat(document.getElementById("hsp").value);

    var calculo1 = (tarifa / kwh / 30 / hsp* 2500);
    var resultado1 = (calculo1 * 1.30);
    var resultado2 = (resultado1 * 1.10);


  var resultadopre = `Olá, Ronne! O valor do projeto vai ficar entre: R$${formatarValor(resultado1)} e R$${formatarValor(resultado2)} já instalado (produto + instalação + projeto + homologação + mão de obra)`;
 
    var resultado = resultadopre;
    var mensagem = encodeURIComponent(resultado);
    var link = "https://api.whatsapp.com/send?phone=556992474003&text=" + mensagem;
    window.open(link, "_blank");
  }

  document.getElementById("zap").addEventListener("click", function () {
    enviarWhatsApp();
    calcular();
  });

  
});


