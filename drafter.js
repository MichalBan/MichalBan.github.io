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
allCivs["Cordoba"] = new Civ();
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
let allclicked = false;
let vanillaOnly = false;
let vanillaCivsString = "";
let modCivsString = "";
let allCivsString = "";

function createCivsStrings() {
    $.each(allCivs, function (index, value) {
        if (value.vanilla) {
            vanillaCivsString = vanillaCivsString + "." + index + ", ";
        } else {
            modCivsString = modCivsString + "." + index + ", ";
        }
    });
    vanillaCivsString = vanillaCivsString.slice(0, -2);
    modCivsString = modCivsString.slice(0, -2);
    allCivsString = vanillaCivsString + ", " + modCivsString;
}

function fadeToNormal(civTd){
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

function animationFinished(element){
    return !$(element).is(':animated');
}

function isDark(element) {
    return $(element).css('opacity') < 1
}

function civTdClick() {
    if (animationFinished(this)) {
        if(!vanillaOnly || allCivs[this.className].vanilla) {
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

function setCivsEnabled(enable, condition){
    $.each(allCivs, function (index) {
        if(condition(allCivs[index]))
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
    allclicked = false;
}

function allClick() {
    fadeToDark(allCivsString);
    setCivsEnabled(false, () => true);
    bannedCivs = totalCivs;
    updateBannedTitle();
    allclicked = true;
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

function copyToClipboard(elem) {
    // create hidden text element, if it doesn't already exist
    let targetId = "_hiddenCopyText_";
    let isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    let origSelectionStart, origSelectionEnd;
    let target;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    let currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);

    // copy the selection
    let succeed;
    try {
        succeed = document.execCommand("copy");
    } catch (e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }

    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
}

function createDraftClick() {
    let players = $("#gameplayers option:selected").index() + 1;
    let rndpicks = $("#picks option:selected").index() + 1;
    let neededCivs = players * rndpicks;
    let enabledCivs = 0;
    let missingCivs = 0;
    let allowedCivs = [];

    //clear any previous results
    let $results = $("#results");
    $results.empty();

    //check how many civs are enabled
    $.each(allCivs, function (index) {
        if (allCivs[index].enabled) {
            allowedCivs[enabledCivs] = index;
            enabledCivs++;
        }
    });

    //check if the user is trying to pick more civs than avaliable
    if (neededCivs > maxModCivs) {
        $results.html("<p class='drawerror'>There are not enough civilizations for " + players + " players to have " + rndpicks + " picks each!</br>Select a different number of players or lower the number of random picks and try again!</p>");

        // check if we have enough enabled civs process the draft
    } else if (enabledCivs < neededCivs) {
        missingCivs = neededCivs - enabledCivs;
        $results.html("<p class='drawerror'>There are not enough available civilizations to make the draw!</br>Please unban at least another " + missingCivs + " civilizations and try again!</p>");

        // errors handled we can now make the draw
    } else {

        // pick rand civs for each player
        let i;
        let k;
        let picksHTML = "<p class='rescopied'>Draft results have been copied to clipboard</p>";
        let resCopy = "";

        picksHTML = picksHTML + "<table class='drawresults'>";

        $results.css("text-align", "left");
        //loop thru each player
        for (i = 1; i <= players; i++) {

            //add this player to the results HTML
            picksHTML = picksHTML + "<tr><td>Player " + i + " choose from:</td>";
            resCopy = resCopy + "Player " + i + " choose from: - ";

            //loop however many picks are needed
            for (k = 1; k <= rndpicks; k++) {

                //loop thru the avlaiable civs and pick 3 at random
                let thisciv = Math.floor(Math.random() * allowedCivs.length);
                picksHTML = picksHTML + "<td><img src='img/" + allowedCivs[thisciv].toLowerCase() + ".png' alt=''/>" + allowedCivs[thisciv];

                if (k < rndpicks) {
                    picksHTML = picksHTML + "<td>";
                    resCopy = resCopy + allowedCivs[thisciv] + " or ";
                } else {
                    picksHTML = picksHTML + "<td>";
                    resCopy = resCopy + allowedCivs[thisciv] + "\r\n";
                }

                // remove this item from the array, create new temp array and then assign it to allowed civs
                enabledCivs = 0;
                let tmpCivs = [];

                $.each(allowedCivs, function (index, value) {
                    if (index !== thisciv) {
                        tmpCivs[enabledCivs] = value;
                        enabledCivs++;
                    }
                });

                allowedCivs = tmpCivs.slice();
            }

            picksHTML = picksHTML + "</br>"
        }

        picksHTML = picksHTML + "</table>";
        picksHTML = picksHTML + "<div id='copyresults'><input class='submitbutton' name='copyres' id='copyres' type='button' value='Copy Results' /></div>";
        $results.html(picksHTML);

        $("#copyTarget").val(resCopy);

        document.getElementById("copyres").addEventListener("click", function () {
            copyToClipboard(document.getElementById("copyTarget"));
        });

        $("#copyres").click();

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
        civHtml = civHtml + "<div class='" + index + "'><img src='img/" + imgName + ".png' alt=''>" + index + "</div>";
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
