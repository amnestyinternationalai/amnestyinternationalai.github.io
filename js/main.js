// You can get your username and user key from your Developer Portal
// You must have already created and compiled a bot before you can talk to it
var pb = new Pandorabot("aiaas.pandorabots.com", "1409613012069", "amnestyinternationalai", "df96bf42bfabe7dafa02223e5470c101");

function printOut() {
    var output = document.getElementById("yousay").value;
  	document.getElementById("printer").innerHTML = output;
  	console.log(output);
}

/*function spellCheck() {
	var input = document.getElemenyById("yousay").value;
	var url = 

} */

function doTalk() {
  var input = document.getElementById("yousay").value;
  document.getElementById("yousay").value = "";
  pb.talk(input, function(data) {
    var response = data["responses"];
    document.getElementById("response").innerHTML = response;
    console.log(response);
  });
}


