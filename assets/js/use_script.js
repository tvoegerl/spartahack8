document.getElementById("google").style.display = "none";
document.getElementById("zoom").style.display = "none";
document.getElementById("security").style.display = "none";
document.getElementById("back-top").style.display = "none";
document.getElementById("back-bottom").style.display = "none";
document.getElementById("back").style.display = "none";

// open top headings
function openGoogleSuite() {
    var x = document.getElementById("google");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("zoom").style.display = "none";
        document.getElementById("security").style.display = "none";
        
    } else {
        x.style.display = "none";
    }
}

function openZoom() {
    var x = document.getElementById("zoom");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("google").style.display = "none";
        document.getElementById("security").style.display = "none";
        
    } else {
        x.style.display = "none";
    }
}

function openSecurity() {
    var x = document.getElementById("security");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("google").style.display = "none";
        document.getElementById("zoom").style.display = "none";
        
    } else {
        x.style.display = "none";
    }
}

// open sub-headings
function openDocs() {
    document.getElementById("mail").style.display = "none";
    document.getElementById("slides").style.display = "none";
    document.getElementById("yt").style.display = "none";
    document.getElementById("cal").style.display = "none";
    // document.getElementById("sheets").style.display = "none";
    document.getElementById("back-top").style.display = "block";
}

function openMail() {
    document.getElementById("docs").style.display = "none";
    document.getElementById("slides").style.display = "none";
    document.getElementById("yt").style.display = "none";
    document.getElementById("cal").style.display = "none";
    // document.getElementById("sheets").style.display = "none";
    document.getElementById("back-top").style.display = "block";
}

function openSlides() {
    document.getElementById("docs").style.display = "none";
    document.getElementById("mail").style.display = "none";
    document.getElementById("yt").style.display = "none";
    document.getElementById("cal").style.display = "none";
    // document.getElementById("sheets").style.display = "none";
    document.getElementById("back-top").style.display = "block";
}

function openYT() {
    document.getElementById("docs").style.display = "none";
    document.getElementById("slides").style.display = "none";
    document.getElementById("mail").style.display = "none";
    document.getElementById("cal").style.display = "none";
    // document.getElementById("sheets").style.display = "none";
    document.getElementById("back-bottom").style.display = "block";
}

function openCal() {
    document.getElementById("docs").style.display = "none";
    document.getElementById("slides").style.display = "none";
    document.getElementById("yt").style.display = "none";
    document.getElementById("mail").style.display = "none";
    // document.getElementById("sheets").style.display = "none";
    document.getElementById("back-bottom").style.display = "block";
}

function openSheets() {
    document.getElementById("docs").style.display = "none";
    document.getElementById("slides").style.display = "none";
    document.getElementById("yt").style.display = "none";
    document.getElementById("cal").style.display = "none";
    document.getElementById("mail").style.display = "none";
    document.getElementById("back-bottom").style.display = "block";
}

function resetGoogle() {
    document.getElementById("mail").style.display = "block";
    document.getElementById("docs").style.display = "block";
    document.getElementById("slides").style.display = "block";
    document.getElementById("yt").style.display = "block";
    document.getElementById("cal").style.display = "block";
    // document.getElementById("sheets").style.display = "block";
    document.getElementById("back-top").style.display = "none";
    document.getElementById("back-bottom").style.display = "none";
}

function openPI() {
    document.getElementById("virus").style.display = "none";
    document.getElementById("pw").style.display = "none";
    document.getElementById("back").style.display = "block";
}

function openVirus() {
    document.getElementById("pi").style.display = "none";
    document.getElementById("pw").style.display = "none";
    document.getElementById("back").style.display = "block";
}

function openPW() {
    document.getElementById("pi").style.display = "none";
    document.getElementById("virus").style.display = "none";
    document.getElementById("back").style.display = "block";
}

function resetSecurity() {
    document.getElementById("pi").style.display = "block";
    document.getElementById("virus").style.display = "block";
    document.getElementById("pw").style.display = "block";
    document.getElementById("back").style.display = "none";
}

