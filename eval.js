var row = rowNum.value;
var col = colNum.value;
var operator = selectOperator.value;

function evaluation() {
    var tab = "<table>";
    tab += "<tr>";
    for (c = 1; c<= parseInt(col); c++) {
        tab += "<td>";
        for (r = 1; r <= parseInt(row); r++) {
            var evalValue =  (eval(c + operator + r));
            if (evalValue % 1 !==0){
                var evalValue = parseFloat(eval(c + operator + r)).toFixed(2)
            }
            
            tab += c + operator + r + "=" + evalValue + "<br>"
        }
        tab += "</td>";  
    }
    tab += "</tr>";

    tab+= "</table>"
    tableId.innerHTML = tab;
}