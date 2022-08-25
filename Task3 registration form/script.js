var zor1 = [];
var pok = [];
var jack = [];
var fixx = [];
var i = 1;
var st = 0;
function AddRow(){
    var AddRow = document.getElementById('show');
    var newRow = AddRow.insertRow(i);
    
    zor1[st] = document.getElementById('rock').value ;
    pok[st] = document.getElementById('email').value ;
    jack[st] = document.getElementById('web').value ;
    fixx[st] = document.getElementById('gender').value ;
   
    if(!zor1[st] || !pok[st] || !jack[st] ||!fixx[st]){
        alert("Fill Details");
        return;
    }
    var k1 = newRow.insertCell(0);
    var k2 = newRow.insertCell(1);
    var k3 = newRow.insertCell(2);
    var k4 = newRow.insertCell(3);
   k1.innerHTML = zor1[st];
    k2.innerHTML = pok[st];
    k3.innerHTML = jack[st];
    k4.innerHTML = fixx[st];
   
    i++;
        st++;
}
