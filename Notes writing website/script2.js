var viewpart = document.getElementsByClassName("viewpart")[0];
var createpart = document.getElementsByClassName("createpart")[0];
var tickmark = document.getElementById("tickmark");
var crossmark = document.getElementById("crossmark");
var notes = document.getElementById("notes");
var i = 0,
    j = 0;



function writeNotes() {

    notes.value = "";


    if (createpart.style.display == "none") {
        createpart.style.display = "block";
    } else {
        createpart.style.display = "none";

    }
}

function showNotes() {
    // trimming data to eradicate null data showing.
    var typeddataold = notes.value;
    var typeddata = typeddataold.trim();

    if (typeddata.length == 0) {

        alert("please write something!");

        return;
    } else {

        var root = document.createElement("div");
        var child1 = document.createElement("textarea");
        child1.setAttribute("class", "runtimecode");
        root.setAttribute("class", "eachnode");
        allvalues = setAll();

        child1.style.margin = allvalues[0];
        child1.style.transform = allvalues[1];
        child1.style.background = allvalues[2];


        child1.innerHTML = typeddata;
        root.appendChild(child1);

        viewpart.insertAdjacentElement("beforeend", root);
        createpart.style.display = "none";

        root.addEventListener("mouseenter", function() {
            root.style.transform = "scale(1.15)";

        })

        root.addEventListener("mouseleave", function() {
            root.style.transform = "scale(1)";

        })


        root.addEventListener("dblclick", function() {

            root.remove();

        })

        //clear data from notes 

        notes.value = "";

    }
}

function setAll() {

    //code for shape
    var s = ["5px", "-5px", "3px", "-8px", "3px", "-2px", "-6px", "15px", "-8px", "+8px", "-3px", "+4px"];
    var len = s.length;
    var shapeIndex = Math.floor(Math.random() * len);
    //code for rotate

    var r = ["rotate(-2deg)", "rotate(2deg)", "rotate(-2deg)", "rotate(+2deg)", "rotate(-1deg)", "rotate(1deg),rotate(-2deg),rotate(1deg)rotate(-1deg)rotate(2deg)rotate(-2deg)"];

    if (j > r.length - 1)
        j = 0;
    //code for color

    var c = ["blue", "green", "red", "orange", "pink", "yellow", "#00ffcc", "#cc66ff", "#99ff66", "#ff00bf", "#ffcc00", "#c60073", "violet,"];

    if (i > c.length - 1)
        i = 0;


    return [s[shapeIndex], r[j++], c[i++]];


}