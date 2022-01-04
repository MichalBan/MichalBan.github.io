$(document).ready(function () {
    var allCivs = {};
    allCivs["Akkad"] = {enabled: true, vanilla: false};
    allCivs["Aksum"] = {enabled: true, vanilla: false};
    allCivs["America"] = {enabled: true, vanilla: false};
    allCivs["Arabia"] = {enabled: true, vanilla: true};
    allCivs["Argentina"] = {enabled: true, vanilla: false};
    allCivs["Armenia"] = {enabled: true, vanilla: false};
    allCivs["Assyria"] = {enabled: true, vanilla: true};
    allCivs["Australia"] = {enabled: true, vanilla: false};
    allCivs["Austria"] = {enabled: true, vanilla: true};
    allCivs["Ayyubids"] = {enabled: true, vanilla: false};
    allCivs["Aztec"] = {enabled: true, vanilla: true};
    allCivs["Babylon"] = {enabled: true, vanilla: true};
    allCivs["Belgium"] = {enabled: true, vanilla: false};
    allCivs["Boers"] = {enabled: true, vanilla: false};
    allCivs["Bolivia"] = {enabled: true, vanilla: false};
    allCivs["Brazil"] = {enabled: true, vanilla: true};
    allCivs["Bruneian"] = {enabled: true, vanilla: false};
    allCivs["Bulgaria"] = {enabled: true, vanilla: false};
    allCivs["Burma"] = {enabled: true, vanilla: false};
    allCivs["Byzantium"] = {enabled: true, vanilla: true};
    allCivs["Canada"] = {enabled: true, vanilla: false};
    allCivs["Carthage"] = {enabled: true, vanilla: true};
    allCivs["Celts"] = {enabled: true, vanilla: true};
    allCivs["Chile"] = {enabled: true, vanilla: false};
    allCivs["China"] = {enabled: true, vanilla: true};
    allCivs["Cuba"] = {enabled: true, vanilla: false};
    allCivs["Czech"] = {enabled: true, vanilla: false};
    allCivs["Denmark"] = {enabled: true, vanilla: true};
    allCivs["Egypt"] = {enabled: true, vanilla: true};
    allCivs["England"] = {enabled: true, vanilla: true};
    allCivs["Ethiopia"] = {enabled: true, vanilla: true};
    allCivs["Finland"] = {enabled: true, vanilla: false};
    allCivs["France"] = {enabled: true, vanilla: true};
    allCivs["Franks"] = {enabled: true, vanilla: false};
    allCivs["Gaul"] = {enabled: true, vanilla: false};
    allCivs["Germany"] = {enabled: true, vanilla: true};
    allCivs["Golden"] = {enabled: true, vanilla: false};
    allCivs["Goths"] = {enabled: true, vanilla: false};
    allCivs["Greece"] = {enabled: true, vanilla: true};
    allCivs["Hittites"] = {enabled: true, vanilla: false};
    allCivs["Hungary"] = {enabled: true, vanilla: false};
    allCivs["Huns"] = {enabled: true, vanilla: true};
    allCivs["Inca"] = {enabled: true, vanilla: true};
    allCivs["India"] = {enabled: true, vanilla: true};
    allCivs["Indonesia"] = {enabled: true, vanilla: true};
    allCivs["Ireland"] = {enabled: true, vanilla: false};
    allCivs["Iroquois"] = {enabled: true, vanilla: true};
    allCivs["Israel"] = {enabled: true, vanilla: false};
    allCivs["Italy"] = {enabled: true, vanilla: false};
    allCivs["Japan"] = {enabled: true, vanilla: true};
    allCivs["Jerusalem"] = {enabled: true, vanilla: false};
    allCivs["Khmer"] = {enabled: true, vanilla: false};
    allCivs["Kilwa"] = {enabled: true, vanilla: false};
    allCivs["Kongo"] = {enabled: true, vanilla: false};
    allCivs["Korea"] = {enabled: true, vanilla: true};
    allCivs["Lithuania"] = {enabled: true, vanilla: false};
    allCivs["Macedonian"] = {enabled: true, vanilla: false};
    allCivs["Malagasy"] = {enabled: true, vanilla: false};
    allCivs["Mali"] = {enabled: true, vanilla: false};
    allCivs["Manchuria"] = {enabled: true, vanilla: false};
    allCivs["Maori"] = {enabled: true, vanilla: false};
    allCivs["Maya"] = {enabled: true, vanilla: true};
    allCivs["Mexican"] = {enabled: true, vanilla: false};
    allCivs["Mongolia"] = {enabled: true, vanilla: true};
    allCivs["Mysore"] = {enabled: true, vanilla: false};
    allCivs["Cordoba"] = {enabled: true, vanilla: false};
    allCivs["Morocco"] = {enabled: true, vanilla: true};
    allCivs["Netherlands"] = {enabled: true, vanilla: true};
    allCivs["NewZealand"] = {enabled: true, vanilla: false};
    allCivs["Normandy"] = {enabled: true, vanilla: false};
    allCivs["Norway"] = {enabled: true, vanilla: false};
    allCivs["Nubia"] = {enabled: true, vanilla: false};
    allCivs["Oman"] = {enabled: true, vanilla: false};
    allCivs["Ottomans"] = {enabled: true, vanilla: true};
    allCivs["Persia"] = {enabled: true, vanilla: true};
    allCivs["Philipines"] = {enabled: true, vanilla: false};
    allCivs["Phoenician"] = {enabled: true, vanilla: false};
    allCivs["Poland"] = {enabled: true, vanilla: true};
    allCivs["Polynesia"] = {enabled: true, vanilla: true};
    allCivs["Portugal"] = {enabled: true, vanilla: true};
    allCivs["Prussian"] = {enabled: true, vanilla: false};
    allCivs["Romania"] = {enabled: true, vanilla: false};
    allCivs["Rome"] = {enabled: true, vanilla: true};
    allCivs["Russia"] = {enabled: true, vanilla: true};
    allCivs["Scotland"] = {enabled: true, vanilla: false};
    allCivs["Shoshone"] = {enabled: true, vanilla: true};
    allCivs["Siam"] = {enabled: true, vanilla: true};
    allCivs["Sioux"] = {enabled: true, vanilla: false};
    allCivs["Songhai"] = {enabled: true, vanilla: true};
    allCivs["Spain"] = {enabled: true, vanilla: true};
    allCivs["Sumeria"] = {enabled: true, vanilla: false};
    allCivs["Sweden"] = {enabled: true, vanilla: true};
    allCivs["Tibet"] = {enabled: true, vanilla: false};
    allCivs["Timurids"] = {enabled: true, vanilla: false};
    allCivs["Tonga"] = {enabled: true, vanilla: false};
    allCivs["Turkey"] = {enabled: true, vanilla: false};
    allCivs["Ukraine"] = {enabled: true, vanilla: false};
    allCivs["Vatican"] = {enabled: true, vanilla: false};
    allCivs["Venetian"] = {enabled: true, vanilla: true};
    allCivs["Vietnam"] = {enabled: true, vanilla: false};
    allCivs["Wales"] = {enabled: true, vanilla: false};
    allCivs["Zimbabwe"] = {enabled: true, vanilla: false};
    allCivs["Zulu"] = {enabled: true, vanilla: true};

    const maxModCivs = 103
    const maxVanillaCivs = 42

    var bannedCivs = 0;
    var totalCivs = maxModCivs;
    var titleHTML = "";
    var allclicked = false;

    vanillaCivsString = "";
    modCivsString = "";
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

    // toggle disable or enabled civ
    $(allCivsString).bind('click', toggleState)

    function toggleState(e) {        // function_tr
        if (!$(this).is(':animated')) {
            if ($(this).css('opacity') < 1) {
                $(this).css("text-decoration", "none");
                $(this).css("background-color", "#282828");
                $(this).fadeTo("slow", 1, function () {
                });
                allCivs[this.className].enabled = true;
                bannedCivs--;
            } else {
                $(this).css("background-color", "#1a1a1a");
                $(this).fadeTo("slow", 0.25, function () {
                    $(this).css("text-decoration", "line-through");
                });
                allCivs[this.className].enabled = false;
                bannedCivs++;
            }
        }

        updateBanned(totalCivs, bannedCivs);
    };

    //reset all to enabled
    $('#reset').click(function () {

        if ($('#slideThree').is(':checked')) {
            $(vanillaCivsString).css(
                {
                    "text-decoration": "none",
                    "background-color": "#282828"
                });

            $(vanillaCivsString).fadeTo("slow", 1, function () {
            });

            $.each(allCivs, function (index, value) {
                if (!value.vanilla) {
                    allCivs[index].enabled = false;
                } else {
                    allCivs[index].enabled = true;
                }
            });

            //update the title
            totalCivs = maxVanillaCivs;
            bannedCivs = 0;
            updateBanned(totalCivs, bannedCivs);

        } else {
            $(allCivsString).css(
                {
                    "text-decoration": "none",
                    "background-color": "#282828"
                });

            $(allCivsString).fadeTo("slow", 1, function () {
            });

            $.each(allCivs, function (index, value) {
                allCivs[index].enabled = true;
            });

            //update the title
            bannedCivs = 0;
            updateBanned(totalCivs, bannedCivs);
        }

        allclicked = false;
    });

    //set all to disabled
    $('#all').click(function () {
        $(allCivsString).fadeTo("slow", 0.25, function () {
            $(this).css({"text-decoration": "line-through", "background-color": "#1a1a1a"});
        });
        ;

        $.each(allCivs, function (index, value) {
            allCivs[index].enabled = false;
        });

        //update the title
        totalCivs = maxModCivs;
        bannedCivs = totalCivs;
        updateBanned(totalCivs, bannedCivs);

        allclicked = true;

    });

    //disable mod civs
    $('#slideThree').change(function () {
        if (this.checked) {
            if (allclicked == false) {
                $(modCivsString).fadeTo("slow", 0.25, function () {
                    $(this).css({"text-decoration": "line-through", "background-color": "#1a1a1a"});
                });
                ;

                $.each(allCivs, function (index, value) {
                    if (!value.vanilla) {
                        allCivs[index].enabled = false;
                    }
                });

                //update the title
                totalCivs = maxVanillaCivs;
                bannedCivs = 0;
                updateBanned(totalCivs, bannedCivs);
            }

            $(".slideThree label").css({"left": "43px"});
            $(this).prop("checked");
        } else {
            if (allclicked == false) {
                $(modCivsString).css({"text-decoration": "none", "background-color": "#282828"});


                $(modCivsString).fadeTo("slow", 1, function () {
                });

                $.each(allCivs, function (index, value) {
                    if (!value.vanilla) {
                        allCivs[index].enabled = true;
                    }
                });

                //update the title
                totalCivs = maxModCivs;
                bannedCivs = 0;
                updateBanned(totalCivs, bannedCivs);
            }

            $(".slideThree label").css({"left": "3px"});
            $(this).prop("unchecked");
        }
    });


    function updateBanned(totalAllowed, totalBanned) {
        var titleHTML = (totalAllowed - totalBanned) + " Allowed - " + totalBanned + " Banned";

        $(".selectorheadline").html(titleHTML);
    }

    // make the draft
    $('#create').click(function () {
        var players = $("#gameplayers option:selected").index() + 1;
        var rndpicks = $("#picks option:selected").index() + 1;
        var neededCivs = players * rndpicks;
        var enabledCivs = 0;
        var missingCivs = 0;
        var allowedCivs = [];
        var playerPicks = {};

        //clear any previous results
        $("#results").empty();

        //check how many civs are enabled
        $.each(allCivs, function (index, value) {
            if (allCivs[index].enabled == true) {
                allowedCivs[enabledCivs] = index;
                enabledCivs++;
            }
            ;
        });

        //check if the user is trying to pick more civs than avaliable
        if (neededCivs > maxModCivs) {
            $("#results").html("<p class='drawerror'>There are not enough civilizations for " + players + " players to have " + rndpicks + " picks each!</br>Select a different number of players or lower the number of random picks and try again!</p>");

            // check if we have enough enabled civs process the draft
        } else if (enabledCivs < neededCivs) {
            missingCivs = neededCivs - enabledCivs;
            $("#results").html("<p class='drawerror'>There are not enough available civilizations to make the draw!</br>Please unban at least another " + missingCivs + " civilizations and try again!</p>");

            // errors handled we can now make the draw
        } else {

            // pick 3 rand civs for each player
            var i;
            var k;
            var picksHTML = "<p class='rescopied'>Draft results have been copied to clipboard</p>";
            var resCopy = ""

            picksHTML = picksHTML + "<table class='drawresults'>";

            $("#results").css("text-align", "left");
            //loop thru each player
            for (i = 1; i <= players; i++) {

                //add this player to the results HTML
                picksHTML = picksHTML + "<tr><td>Player " + i + " choose from:</td>";
                resCopy = resCopy + "Player " + i + " choose from: - ";

                //loop however many picks are needed
                for (k = 1; k <= rndpicks; k++) {

                    //loop thru the avlaiable civs and pick 3 at random
                    var thisciv = Math.floor(Math.random() * allowedCivs.length);
                    picksHTML = picksHTML + "<td><img src='img/" + allowedCivs[thisciv].toLowerCase() + ".png'></img>" + allowedCivs[thisciv];

                    if (k < rndpicks) {
                        picksHTML = picksHTML + "<td>";
                        resCopy = resCopy + allowedCivs[thisciv] + " or ";
                    } else {
                        picksHTML = picksHTML + "<td>";
                        resCopy = resCopy + allowedCivs[thisciv] + "\r\n";
                    }

                    // remove this item from the array, create new temp array and then assign it to allowed civs
                    enabledCivs = 0;
                    var tmpCivs = [];

                    $.each(allowedCivs, function (index, value) {
                        if (index != thisciv) {
                            tmpCivs[enabledCivs] = value;
                            enabledCivs++;
                        }
                        ;
                    });

                    allowedCivs = tmpCivs.slice();
                }

                picksHTML = picksHTML + "</br>"
            }

            picksHTML = picksHTML + "</table>"
            picksHTML = picksHTML + "<div id='copyresults'><input class='submitbutton' name='copyres' id='copyres' type='button' value='Copy Results' /></div>"
            $("#results").html(picksHTML);

            $("#copyTarget").val(resCopy);

            document.getElementById("copyres").addEventListener("click", function () {
                copyToClipboard(document.getElementById("copyTarget"));
            });

            $("#copyres").click();

            function copyToClipboard(elem) {
                // create hidden text element, if it doesn't already exist
                var targetId = "_hiddenCopyText_";
                var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
                var origSelectionStart, origSelectionEnd;
                if (isInput) {
                    // can just use the original source element for the selection and copy
                    target = elem;
                    origSelectionStart = elem.selectionStart;
                    origSelectionEnd = elem.selectionEnd;
                } else {
                    // must use a temporary form element for the selection and copy
                    target = document.getElementById(targetId);
                    if (!target) {
                        var target = document.createElement("textarea");
                        target.style.position = "absolute";
                        target.style.left = "-9999px";
                        target.style.top = "0";
                        target.id = targetId;
                        document.body.appendChild(target);
                    }
                    target.textContent = elem.textContent;
                }
                // select the content
                var currentFocus = document.activeElement;
                target.focus();
                target.setSelectionRange(0, target.value.length);

                // copy the selection
                var succeed;
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
        }
    });
});				

