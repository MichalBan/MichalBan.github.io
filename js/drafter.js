class Civ {
    constructor(vanilla = false) {
        this.enabled = true;
        this.vanilla = vanilla;
    }
}

let allCivs = {};
allCivs["Akkad"] = new Civ();
allCivs["Aksum"] = new Civ();
allCivs["America"] = new Civ();
allCivs["Arabia"] = new Civ(true);
allCivs["Argentina"] = new Civ();
allCivs["Armenia"] = new Civ();
allCivs["Assyria"] = new Civ(true);
allCivs["Australia"] = new Civ();
allCivs["Austria"] = new Civ(true);
allCivs["Ayyubids"] = new Civ();
allCivs["Aztec"] = new Civ(true);
allCivs["Babylon"] = new Civ(true);
allCivs["Belgium"] = new Civ();
allCivs["Boers"] = new Civ();
allCivs["Bolivia"] = new Civ();
allCivs["Brazil"] = new Civ(true);
allCivs["Bruneian"] = new Civ();
allCivs["Bulgaria"] = new Civ();
allCivs["Burma"] = new Civ();
allCivs["Byzantium"] = new Civ(true);
allCivs["Canada"] = new Civ();
allCivs["Carthage"] = new Civ(true);
allCivs["Celts"] = new Civ(true);
allCivs["Chile"] = new Civ();
allCivs["China"] = new Civ(true);
allCivs["Cordoba"] = new Civ();
allCivs["Cuba"] = new Civ();
allCivs["Czech"] = new Civ();
allCivs["Denmark"] = new Civ(true);
allCivs["Egypt"] = new Civ(true);
allCivs["England"] = new Civ(true);
allCivs["Ethiopia"] = new Civ(true);
allCivs["Finland"] = new Civ();
allCivs["France"] = new Civ(true);
allCivs["Franks"] = new Civ();
allCivs["Gaul"] = new Civ();
allCivs["Georgia"] = new Civ();
allCivs["Germany"] = new Civ(true);
allCivs["Golden"] = new Civ();
allCivs["Goths"] = new Civ();
allCivs["Greece"] = new Civ(true);
allCivs["Hittites"] = new Civ();
allCivs["Hungary"] = new Civ();
allCivs["Huns"] = new Civ(true);
allCivs["Inca"] = new Civ(true);
allCivs["India"] = new Civ(true);
allCivs["Indonesia"] = new Civ(true);
allCivs["Ireland"] = new Civ();
allCivs["Iroquois"] = new Civ(true);
allCivs["Israel"] = new Civ();
allCivs["Italy"] = new Civ();
allCivs["Japan"] = new Civ(true);
allCivs["Jerusalem"] = new Civ();
allCivs["Khmer"] = new Civ();
allCivs["Kilwa"] = new Civ();
allCivs["Kongo"] = new Civ();
allCivs["Korea"] = new Civ(true);
allCivs["Lithuania"] = new Civ();
allCivs["Macedonian"] = new Civ();
allCivs["Malagasy"] = new Civ();
allCivs["Mali"] = new Civ();
allCivs["Manchuria"] = new Civ();
allCivs["Maori"] = new Civ();
allCivs["Maya"] = new Civ(true);
allCivs["Mexican"] = new Civ();
allCivs["Mongolia"] = new Civ(true);
allCivs["Mysore"] = new Civ();
allCivs["Morocco"] = new Civ(true);
allCivs["Netherlands"] = new Civ(true);
allCivs["NewZealand"] = new Civ();
allCivs["Normandy"] = new Civ();
allCivs["Norway"] = new Civ();
allCivs["Nubia"] = new Civ();
allCivs["Oman"] = new Civ();
allCivs["Ottomans"] = new Civ(true);
allCivs["Persia"] = new Civ(true);
allCivs["Philipines"] = new Civ();
allCivs["Phoenician"] = new Civ();
allCivs["Poland"] = new Civ(true);
allCivs["Polynesia"] = new Civ(true);
allCivs["Portugal"] = new Civ(true);
allCivs["Prussian"] = new Civ();
allCivs["Romania"] = new Civ();
allCivs["Rome"] = new Civ(true);
allCivs["Russia"] = new Civ(true);
allCivs["Scotland"] = new Civ();
allCivs["Shoshone"] = new Civ(true);
allCivs["Siam"] = new Civ(true);
allCivs["Sioux"] = new Civ();
allCivs["Songhai"] = new Civ(true);
allCivs["Spain"] = new Civ(true);
allCivs["Sumeria"] = new Civ();
allCivs["Sweden"] = new Civ(true);
allCivs["Tibet"] = new Civ();
allCivs["Timurids"] = new Civ();
allCivs["Tonga"] = new Civ();
allCivs["Turkey"] = new Civ();
allCivs["Ukraine"] = new Civ();
allCivs["Vatican"] = new Civ();
allCivs["Venetian"] = new Civ(true);
allCivs["Vietnam"] = new Civ();
allCivs["Wales"] = new Civ();
allCivs["Zimbabwe"] = new Civ();
allCivs["Zulu"] = new Civ(true);

const maxModCivs = Object.keys(allCivs).length;
const maxVanillaCivs = 42;

let bannedCivs = 0;
let totalCivs = maxModCivs;
let vanillaOnly = false;

let vanillaCivsString = "";
let modCivsString = "";
let allCivsString = "";

let resultHTML = "";
let resultString = "";

let players = 0;
let rndpicks = 0;

function createCivsStrings() {
    $.each(allCivs, function (index, value) {
        if (value.vanilla) {
            vanillaCivsString += "." + index + ", ";
        } else {
            modCivsString += "." + index + ", ";
        }
    });
    vanillaCivsString = vanillaCivsString.slice(0, -2);
    modCivsString = modCivsString.slice(0, -2);
    allCivsString = vanillaCivsString + ", " + modCivsString;
}

function fadeToNormal(civTd) {
    $(civTd).css("text-decoration", "none");
    $(civTd).css("background-color", "#282828");
    $(civTd).fadeTo("slow", 1, function () {
    });
}

function fadeToDark(civTd) {
    $(civTd).css("background-color", "#1a1a1a");
    $(civTd).fadeTo("slow", 0.25, function () {
        $(civTd).css("text-decoration", "line-through");
    });
}

function animationFinished(element) {
    return !$(element).is(':animated');
}

function isDark(element) {
    return $(element).css('opacity') < 1
}

function civTdClick() {
    if (animationFinished(this)) {
        if (!vanillaOnly || allCivs[this.className].vanilla) {
            if (isDark(this)) {
                fadeToNormal(this);
                allCivs[this.className].enabled = true;
                bannedCivs--;
            } else {
                fadeToDark(this);
                allCivs[this.className].enabled = false;
                bannedCivs++;
            }
            updateBannedTitle();
        }
    }
}

function setCivsEnabled(enable, condition) {
    $.each(allCivs, function (index) {
        if (condition(allCivs[index]))
            allCivs[index].enabled = enable;
    });
}

function resetClick() {
    if (vanillaOnly) {
        fadeToNormal(vanillaCivsString);
        setCivsEnabled(true, civ => civ.vanilla);
    } else {
        fadeToNormal(allCivsString);
        setCivsEnabled(true, () => true);
    }
    bannedCivs = 0;
    updateBannedTitle();
}

function allClick() {
    fadeToDark(allCivsString);
    setCivsEnabled(false, () => true);
    bannedCivs = totalCivs;
    updateBannedTitle();
}

function removeModCivs() {
    fadeToDark(modCivsString);
    setCivsEnabled(false, civ => !civ.vanilla);
    totalCivs = maxVanillaCivs;
    bannedCivs = 0;
    updateBannedTitle();
}

function addModCivs() {
    fadeToNormal(modCivsString);
    setCivsEnabled(true, civ => !civ.vanilla);
    totalCivs = maxModCivs;
    bannedCivs = 0;
    updateBannedTitle();
}

function visualizeSliderCheck() {
    $(".slideThree label").css({"left": "43px"});
    $('#slideThree').prop("checked");
}

function visualizeSliderUncheck() {
    $(".slideThree label").css({"left": "3px"});
    $('#slideThree').prop("unchecked");
}

function sliderChange() {
    if (this.checked) {
        removeModCivs();
        visualizeSliderCheck();
        vanillaOnly = true;
    } else {
        addModCivs();
        visualizeSliderUncheck();
        vanillaOnly = false;
    }
}

function createAllowedCivsList() {
    let allowedCivsList = [];
    $.each(allCivs, function (index) {
        if (allCivs[index].enabled) {
            allowedCivsList.push(index);
        }
    });
    return allowedCivsList;
}

function enoughCivs() {
    let neededCivs = players * rndpicks;
    let enabledCivs = totalCivs - bannedCivs;
    if (neededCivs > totalCivs) {
        $("#results").html("<p class='drawerror'>There are not enough civilizations for given number of picks and players!</p>");
        return false;
    } else if (enabledCivs < neededCivs) {
        $("#results").html("<p class='drawerror'>There are not enough available civilizations to make the draw!</br>Please unban at least another " + (neededCivs - enabledCivs).toString() + " civilizations and try again!</p>");
        return false;
    }
    return true;
}

function pickPlayerCivs(allowedCivsList) {
    for (let k = 1; k <= rndpicks; k++) {
        let thisciv = Math.floor(Math.random() * allowedCivsList.length);
        resultHTML += "<td><img src='img/" + allowedCivsList[thisciv].toLowerCase() + ".png' alt=''/>" + allowedCivsList[thisciv] + "<td>";
        resultString += allowedCivsList[thisciv] + " or ";
        allowedCivsList.splice(thisciv, 1);
    }
}

function pickCivs(allowedCivsList) {
    for (let i = 1; i <= players; i++) {
        resultHTML += "<tr><td>Player " + i + " choose from:</td>";
        resultString += "Player " + i + " choose from: - ";
        pickPlayerCivs(allowedCivsList);
        resultString = resultString.slice(0, -4) + "\r\n";
        resultHTML += "</br>"
    }
}

function draft($results, allowedCivsList) {
    resultHTML = "<p class='rescopied'></p><table class='drawresults'>";
    resultString = "";
    $results.css("text-align", "left");
    pickCivs(allowedCivsList);
    resultHTML += "</table><div id='copyresults'><input class='submitbutton' name='copyres' id='copyres' type='button' value='Copy Results' /></div>";
    resultHTML += "<div id='credits'><label>Based on Hellblazer's Civilization 5 Drafter</label></div>";

    $results.html(resultHTML);

    $("#copyTarget").val(resultString);
    $('#copyres').click(copyToClipboard);
    copyToClipboard();

    $('html,body').animate({scrollTop: $("#credits").offset().top},'fast');
}

function createDraftClick() {
    let allowedCivsList = createAllowedCivsList();
    players = $("#gameplayers option:selected").index() + 1;
    rndpicks = $("#picks option:selected").index() + 1;

    let $results = $("#results");
    $results.empty();

    if(enoughCivs()){
        draft($results, allowedCivsList);
    }
}

function updateBannedTitle() {
    const titleHTML = (totalCivs - bannedCivs) + " Allowed - " + bannedCivs + " Banned";
    $(".selectorheadline").html(titleHTML);
}

function createCivsTd() {
    let civHtml = "";
    $.each(allCivs, function (index) {
        let imgName = index.toLowerCase();
        civHtml += "<div class='" + index + "'><img src='img/" + imgName + ".png' alt=''>" + index + "</div>";
    });
    $('#civilizations').html(civHtml);
}

$(document).ready(function () {
    updateBannedTitle();
    createCivsStrings();
    createCivsTd();

    $(allCivsString).bind('click', civTdClick);

    $('#slideThree').change(sliderChange);

    $('#create').click(createDraftClick);

    $('#reset').click(resetClick);

    $('#all').click(allClick);
});
