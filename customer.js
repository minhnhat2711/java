var arr = [];

function save(){
    var amount1 = frm.quantity.value*frm.price.value;
    var a = { 
      name :document.getElementById("name").value,
      id :document.getElementById("id").value,
      prodname :document.getElementById("prodname").value,
      quantity :document.getElementById("quantity").value,
      price :document.getElementById("price").value,
      amount:amount1,
    }
    console.log(a);
    arr.push(a)
}
function show(){
    var html ='';
    for (i in arr){
        var n = i;
        n++;
        html += "<tr>";
        html += "<td>"+(n)+"</td>";
        html += "<td>"+arr[i].name+"</td>";
        html += "<td>"+arr[i].id+"</td>";
        html += "<td>"+arr[i].prodname+"</td>";
        html += "<td>"+arr[i].quantity+"</td>";
        html += "<td>"+arr[i].price+"</td>"; 
        html += "<td>"+arr[i].amount+"</td>";
        html += "</tr>";
    }
    document.getElementById("tbl").innerHTML=html;
}
function reset(){
    document.getElementById("name").value="";
    document.getElementById("id").value="";
    document.getElementById("prodname").value="";
    document.getElementById("quantity").value="";
    document.getElementById("price").value="";
}