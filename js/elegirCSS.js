function elegirCSS(alojamiento) {
        		
	var css;
	
	if (alojamiento) {
		css = 'css/camping.css';
	}
	else {
		css = 'css/refugio.css';
	}
	var head = document.getElementsByTagName('head')[0];
	alert(head);
	var link  = $.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = css;
    link.media = 'all';
    head.appendChild(link);
    
}