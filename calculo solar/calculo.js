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

  if ( isNaN(kwh)) {
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

  if (kwh === 0 ) {
    alert("O campo 'Valor do kwh' não pode ser preenchido com 0.");
    return;
  }

  if (hsp === 0) {
    alert("O campo 'HSP' não pode ser preenchido com 0.");
    return;
  }

  var hspajustado = hsp ;

  var calculo1 = (tarifa / kwh / 30 / hspajustado * 2500);
  var resultado1 = (calculo1 * 1.30);
  var resultado2 = (resultado1 * 1.10);

  var resultadoElement = document.getElementById("resultado");
  resultadoElement.textContent = `Olá, ${nome}! O valor do projeto vai ficar entre: R$${formatarValor(resultado1)} e R$${formatarValor(resultado2)} já instalado (produto + instalação + projeto + homologação + mão de obra)`;
}
function enviarMensagemWhatsApp(resultado) {
  // Substitua as credenciais do Nexmo pelas suas próprias
  const apiKey = '22b94111';
  const apiSecret = '7ZTnIxu7TWyXPlmF';
  const vonage = new Vonage({ apiKey, apiSecret });

  const mensagem = `Olá, ${nome}! O valor do projeto vai ficar entre: R$${formatarValor(resultado1)} e R$${formatarValor(resultado2)} já instalado (produto + instalação + projeto + homologação + mão de obra)`;

  // Substitua os números de telefone pelo remetente e destinatário reais
  const remetente = '+5569992474003';
  const destinatario = '+556993817243';

  vonage.channel.send(
    { "type": "whatsapp", "number": remetente },
    { "type": "whatsapp", "number": destinatario },
    {
      "content": {
        "type": "text",
        "text": mensagem
      }
    },
    (err, data) => {
      if (err) {
        console.error('Erro ao enviar mensagem:', err);
      } else {
        console.log('Mensagem enviada com sucesso:', data.message_uuid);
      }
    }
  );
}


  enviarMensagemWhatsApp(resultado1);










