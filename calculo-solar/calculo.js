document.addEventListener("DOMContentLoaded", function() {
  function formatarValor(valor) {
    var partes = valor.toFixed(2).split(".");
    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return partes.join(",");
  }

  function calcular() {
    var nome = document.getElementById("nome").value;
    var tarifa = parseFloat(document.getElementById("tarifa").value.replace(",", "."));
    var kwh = 0.84;
    var hsp = 4.4;

    if (nome === "") {
      alert("Por favor, digite um nome.");
      return;
    }

    if (isNaN(tarifa)) {
      alert("Por favor, preencha o campo 'Tarifa de Energia'.");
      return;
    }

    

    

    if (tarifa === 0) {
      alert("O campo 'Tarifa de Energia' não pode ser preenchido com 0.");
      return;
    }

    
    var hspajustado = hsp - (hsp * 0.10);

    var calculo1 = (tarifa / kwh / 30 / hspajustado * 3000);
    var resultado2 = (calculo1 * 1.30);
    var resultado1 = resultado2 - (resultado2 * 0.10);

    var resultadoElement = document.getElementById("resultado");
  var resultado = `Olá, ${nome}! O valor do projeto vai ficar entre: R$${formatarValor(resultado1)} e R$${formatarValor(resultado2)} já instalado (produto + instalação + projeto + homologação + mão de obra)`;
  resultadoElement.textContent = resultado;

  return resultado;
  }
  
  function enviarWhatsApp() {
    var nome = document.getElementById("nome").value;
    var tarifa = parseFloat(document.getElementById("tarifa").value.replace(",", "."));
    var kwh = 0.84;
    var hsp = 4.4;
  
    var hspajustado = hsp - (hsp * 0.10);

    var calculo1 = (tarifa / kwh / 30 / hspajustado * 3000);
    var resultado2 = (calculo1 * 1.30);
    var resultado1 = resultado2 - (resultado2 * 0.10);


  var resultadopre = `Olá eu me chamo ${nome}, eu utilizei a sua calculadora solar e o valor do meu projeto vai ficar entre: R$${formatarValor(resultado1)} e R$${formatarValor(resultado2)} já instalado (produto + instalação + projeto + homologação + mão de obra) 
  podemos conversar melhor?`;
 
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


