document.getElementById("sources").style.display = "none";
document.getElementById("ettiquette").style.display = "none";

// Open top headings
function openSources() {
    var x = document.getElementById("sources");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("ettiquette").style.display = "none";
        
    } else {
        x.style.display = "none";
    }
}

function openEttiquette() {
    var x = document.getElementById("ettiquette");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("sources").style.display = "none";
        
    } else {
        x.style.display = "none";
    }
}
