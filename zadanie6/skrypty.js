function show(x) {
	element=document.getElementById(x);
	element.style.display="block";
}
function hide(x) {
	element=document.getElementById(x);
	element.style.display="none";
}

function load(co,gdzie) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById(gdzie).innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", co, true);
	xhttp.send();
}


/*
$(function() {
    var $menu = $('#menu'), 
        $content = $('#content');

    $menu.on('click', '> a', function(event) {
        var $this = $(this);
        event.preventDefault();
        $content.load($this.attr('href'));
    });
});*/

function showRmenu() {
	rmenu=document.getElementById("rmenu");
	content=document.getElementById("content");
	rmenu.style.display="block";
	content.classList.remove("col-4");
	content.classList.remove("cols-5");
	content.classList.add("col-3");
	content.classList.add("cols-3");
}

function hideRmenu() {
	rmenu=document.getElementById("rmenu");
	content=document.getElementById("content");
	rmenu.style.display="none";
	content.classList.remove("col-3");
	content.classList.remove("cols-3");
	content.classList.add("col-4");
	content.classList.add("cols-5");	
}
function setlay(x) {
	main=document.getElementById("main");
    main.classList.remove("lay1");
    main.classList.remove("lay2");
    main.classList.remove("lay3");
    main.classList.remove("lay4");
    main.classList.add("lay"+x);
}
