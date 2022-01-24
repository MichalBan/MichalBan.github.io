function executeCopy() {
    try {
        if (document.execCommand("copy")) {
            $(".rescopied").text("Results have been copied to clipboard");
        } else {
            $(".rescopied").text("Failed to copy to clipboard");
        }
    } catch (e) {
        $(".rescopied").text("Failed to copy to clipboard");
    }
}

function copyToClipboard() {
    let target = document.getElementById("copyTarget");
    let origFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);
    executeCopy();
    origFocus.focus();
}

