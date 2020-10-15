window.addEventListener("load", function() {
    // Dummy array
    var data = ["first", "second", "third", "forth", "five", "sixth", "seventh", "eight", "nine", "ten"];

    // Draw HTML Table
    var html = "<table><tr>";
    var perrow = 1; // 2 cells per row

    // Loop through array, add cells
    for (var i = 0; i < data.length; i++) {
        html += "<td>" + data[i] + "</td>";

        // Break row
        var next = i + 1;
        if (next % perrow == 0 && next != data.length) {
            html += "</tr><tr>";
        }
    }
    html += "</tr></table>";

    // HTML string to <div>
    document.getElementById("container").innerHTML = html;
});