function loadXMLDoc(url) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
           if (xmlhttp.status == 200) {
                var response = xmlhttp.responseText,
		   res = JSON.parse(response),
		   i = 0,
		   nodes = res.user.media.nodes,
                   len = nodes.length,
                   img,
		   img_container_el;
	        for( i = 0; i < len; i++ ) {
		    if(nodes[i].caption.match(/Бизнес.ланч/)) {
			//alert(nodes[i].display_src);
		        img = document.createElement("img");
			img.src = nodes[i].display_src;
			img_container_el = document.getElementById('img');
			body.insertBefore(img, img_container_e:);

			return;
		    }
		}
           }
           else if (xmlhttp.status == 400) {
           }
           else {
           }
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

var a_el = document.createElement('a'),
    a_container_el = document.getElementById('href'),
    body = document.getElementById('body');
a_el.innerHTML = 'Что сегодня в "Прогнозе"?';
a_el.href="#";
a_el.addEventListener('click', function(){
    loadXMLDoc('https://www.instagram.com/prognozz/?__a=1');
    
    return false;
});
body.insertBefore(a_el, a_container_el);

