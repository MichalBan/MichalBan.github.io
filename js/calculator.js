$(document).ready(function () {
	$('.unit-in').click(selectAll);
	$('.calculate-button').click(calculateClick);
});

function calculateClick(){
	let [attackerStrength, attackerBaseDmg] = getCombatStats('attacker');
	let [defenderStrength, defenderBaseDmg] = getCombatStats('defender');

	let attackerDmg = getDamage(attackerStrength, defenderStrength, attackerBaseDmg);
	let defenderDmg = getDamage(defenderStrength, attackerStrength, defenderBaseDmg);

	$('#attackerDmg').text(getDamageString(attackerDmg));
	$('#defenderDmg').text(getDamageString(defenderDmg));

	$("#copyTarget").val(getResultString(attackerDmg, defenderDmg));
	copyToClipboard();
}

function getCombatStats(prefix) {
	let strength = getLimitedNumber('#' + prefix + 'Str');
	let modifier =  getLimitedNumber('#' + prefix + 'Mod', -90);
	let health =  getLimitedNumber('#' + prefix + 'Hp');
	let baseDmg = getBaseDamage(health);
	strength = applyModifier(strength, modifier);
	return [strength, baseDmg];
}

function getDamage(strength, opponentStrength, baseDamage){
	let strengthRatio = strength / opponentStrength;

	if(opponentStrength > strength)
	{
		strengthRatio = opponentStrength / strength;
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

function getResultString(attackerDmg, defenderDmg) {
	let str = "attacker damage: ";
	str += getDamageString(attackerDmg);
	str += "\ndefender damage: ";
	str += getDamageString(defenderDmg);
	return str;
}

function applyModifier(strength, modifier) {
	strength *= (100 + modifier) / 100;
	return strength;
}

function getBaseDamage(health) {
	return 30*(50 + health/2)/100;
}

function getLimitedNumber(elementName, bottom = 1, top = 1000){
	let num = parseFloat($(elementName).val());
	return capToLimit(num, bottom, top);
}

function getDamageString(damage) {
	let str = "" + Math.round(capToLimit(damage*0.8));
	str += "/" + Math.round(damage);
	str += "/" + Math.round(capToLimit(damage*1.2));
	return str;
}

function capToLimit(x, bottom = 1, top = 1000){
	if(x < bottom)
		return bottom;
	else if(x > top)
		return top;
	return x;
}

function selectAll(){
	this.setSelectionRange(0, this.value.length)
}
