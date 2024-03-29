    function upload(event) {
            validateFileUpload(file);
            var file = document.getElementById("fileUpload").files[0];
            var reader = new FileReader();
            const limit = document.getElementById("jumlahpemenang").value;
            validateFileUpload(file);

            reader.onload = function(e) {
                var ar = e.target.result.split("\n");
                ar.shift();
                var shuffleData = acak(ar);
                var rowData = shuffleData.splice(0, limit);

                var table = document.createElement("table");
                var header = table.createTHead();
                var tHeadRow = header.insertRow();
                var tHeadCell1 = tHeadRow.insertCell();
                var tHeadCell2 = tHeadRow.insertCell();
                var tHeadCell3 = tHeadRow.insertCell();
                var td = ["Email", "nama", "WhatsApp"];
                tHeadCell1.innerHTML = td[0];
                tHeadCell2.innerHTML = td[1];
                tHeadCell3.innerHTML = td[2];

                for (var i = 0; i < rowData.length; i++) {
                    var cells = rowData[i].split(",");
                    // avoid blank data
                    if (cells.length > 1) {
                        var row = table.insertRow(-1);
                        // get  mail,name and phone
                        [1, 2, 5].map(i => {
                            cellData = cells[i].split('"')[1];
                            row.insertCell(-1).innerHTML = cellData;
                        })
                    }
                }
                var resultContainer = document.getElementById('result');
                resultContainer.appendChild(table);
                table.style.border = "1px solid black";
            };
            reader.readAsText(file);
        }

        function acak(ar) {
            var ctr = ar.length,
                temp, index;
            // while there are elements in the array
            while (ctr > 0) {
                // pick a random index
                index = Math.floor(Math.random() * ctr);
                // Decrease ctr by 1
                ctr--;
                // and swap the last element with it
                temp = ar[ctr];
                ar[ctr] = ar[index];
                ar[index] = temp;
            }
            return ar;
        }

        function validateFileUpload() {
            var f = document.getElementById("fileUpload").value;
            console.log(f);
            if (f == "" || f == null) {
                alert("File upload can't empty");
                return false;
            }
        }


