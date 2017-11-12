$(document).ready(function() {

	$(".cls-7").mouseenter(function() { 
		$(this).css("fill", "url(#Floral_Vines)"); 
	});

});

window.onload = function(){ 
    // Get the modal
    var modal = document.getElementById('instructionsModal');

    // Get the button that opens the modal
    var btn = document.getElementById("instructionsBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close-mycss")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // second modal ------------------------
    // Get the modal
    var modal2 = document.getElementById('infoModal');

    // Get the button that opens the modal
    var btn2 = document.getElementById("infoBtn");

    // Get the <span> element that closes the modal
    var span2 = document.getElementsByClassName("close2-mycss")[0];

    // When the user clicks on the button, open the modal 
    btn2.onclick = function() {
        modal2.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span2.onclick = function() {
        modal2.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }
};
