function calculate(){
	let attackerStr = Number($('#attackerStr').val());
	let attackerMod =  Number($('#attackerMod').val());
	let attackerHp =  Number($('#attackerHp').val());

	let attackerBaseDmg = 30*(50 + attackerHp/2)/100;
	attackerStr = attackerStr * (100 + attackerMod)/100;

	$('#attackerDmg').text(2*attackerStr);
}

$(document).ready(function () {
	$('.calculate-button').click(calculate);
	$('#attackerDmg').text("100");
});