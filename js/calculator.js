function getLimitedNumber(elementName){
	let num = Number($(elementName).val());
	return capToLimit(num);
}

function calculate(){
	let attackerStr = getLimitedNumber('#attackerStr');
	let attackerMod =  getLimitedNumber('#attackerMod');
	let attackerHp =  getLimitedNumber('#attackerHp');
	let attackerBaseDmg = 30*(50 + attackerHp/2)/100;
	attackerStr *= (100 + attackerMod)/100;

	let defenderStr = getLimitedNumber('#defenderStr');
	let defenderMod =  getLimitedNumber('#defenderMod');
	let defenderHp =  getLimitedNumber('#defenderHp');
	let defenderBaseDmg = 30*(50 + defenderHp/2)/100;
	defenderStr *= (100 + defenderMod)/100;

	let attackerDmg = getDamage(attackerStr, defenderStr, attackerBaseDmg);
	let defenderDmg = getDamage(defenderStr, attackerStr, defenderBaseDmg);
	
	$('#attackerDmg').text(getDamageString(attackerDmg));
	$('#defenderDmg').text(getDamageString(defenderDmg));
}

function getDamageString(damage) {
	let str = "" + Math.round(capToLimit(damage*0.8));
	str += "/" + Math.round(damage);
	str += "/" + Math.round(capToLimit(damage*1.2));
	return str;
}

function capToLimit(x){
	if(x < 1)
		x = 1;
	else if(x > 1000)
		x = 1000;
	return x;
}

function getDamage(strength, opponentStrength, baseDamage){
	let strengthRatio = ((strength) / opponentStrength);

	if(opponentStrength > strength)
	{
		strengthRatio = ((opponentStrength) / strength);
	}

	strengthRatio = (strengthRatio + 3) / 4;
	strengthRatio = Math.pow(strengthRatio, 4.0);
	strengthRatio = (strengthRatio + 1) / 2;

	if(opponentStrength > strength)
	{
		strengthRatio = 1 / strengthRatio;
	}

	return capToLimit(baseDamage * strengthRatio);
}

function selectAll(){
	this.setSelectionRange(0, this.value.length)
}

$(document).ready(function () {
	calculate();
	$('.unit-in').click(selectAll);
	$('.calculate-button').click(calculate);
});