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


async function enviarMensagemWhatsApp(mensagem) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://web.whatsapp.com');

  // Aguarde o usuário fazer o login manualmente no WhatsApp Web

  // Localize o campo de pesquisa e digite o número de telefone ou nome do contato
  const campoPesquisa = await page.$('div[role="combobox"]');
  await campoPesquisa.type('+556993817243');

  // Aguarde a lista de resultados de pesquisa aparecer
  await page.waitForSelector('div[role="option"]');

  // Selecione o primeiro resultado da pesquisa
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');

  // Espere o campo de entrada de mensagem aparecer
  await page.waitForSelector('div[contenteditable="true"][data-tab="6"]');

  // Digite a mensagem
  await page.type('div[contenteditable="true"][data-tab="6"]', mensagem);

  // Envie a mensagem pressionando Enter
  await page.keyboard.press('Enter');

  // Aguarde um curto período de tempo antes de fechar o navegador
  await page.waitForTimeout(2000);

  await browser.close();
}








