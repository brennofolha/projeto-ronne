var valorTarifaEnergia = 600;
var valorKwhRegiao = 0.78;
var hspRegiao = 4;

var hspAjustado = hspRegiao - (hspRegiao * 0.10);
var calculo1 = ((valorTarifaEnergia / valorKwhRegiao / 30 / hspAjustado * 2500 ));
var calculo2 = calculo1 + (calculo1 * 0.30)
var calculo3 = calculo2 + (calculo2 * 0.10)
var resultado1 = calculo2.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
var resultado2 = calculo3.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\B(?=(\d{3})+(?!\d))/g, ".");


console.log(`A média de custo varia entre: R$${resultado1} e R$${resultado2}`);