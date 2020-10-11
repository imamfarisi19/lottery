window.addEventListener("load", function() {
    // Dummy array
    var data = ["first", "second", "third", "forth", "fifth", "sixth", "seventh", "eighth", "nineth", "tenth"];
    console.log(data);
    var table = document.createElement("table"),
        row = table.insertRow();

    // Loop as usual
    var perrow = 3; // 2 cells per row
    var count = 0;
    for (var i of data) {
        var cell = row.insertCell();
        cell.innerHTML = i;

        // Break into new row
        count++;
        if (count % perrow == 0) {
            row = table.insertRow();
        }
    }

    // Attach table to HTML <div>
    document.getElementById("container").appendChild(table);
});