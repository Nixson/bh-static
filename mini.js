(function(){
	function msieversion() {var ua = window.navigator.userAgent;var msie = ua.indexOf("MSIE ");	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));else return false;}
	var mv = msieversion();
	var _iframe=document.createElement("iframe");
	_iframe.setAttribute("id","cBh_frame");
	_iframe.setAttribute("frameBorder","0");
	_iframe.setAttribute("scrolling","no");
	_iframe.allowTransparency=true;
	_iframe.style.backgroundColor="transparent";
	window.document.body.appendChild(_iframe);
	var idocument;
	if(!mv || mv >8 ) idocument = _iframe.contentDocument;
	else idocument = _iframe.contentWindow;
	idocument.open();
	idocument.write("<!DOCTYPE html><html><head></head><body></body></html>");
	idocument.close();
	var jsel = document.createElement('SCRIPT');
	jsel.type = 'text/javascript';
	var html = "";
	console.log("static");
	if(!mv || mv>=8){html +='var bhelpVersion = localStorage.getItem("bhelp_version"); if(bhelpVersion==null || bhelpVersion != bhelpVer) bhelpLoad(ba,bl); else eval(localStorage.getItem(bl));';}else{html +="bhelpLoad(ba,bl);";}if(mv && mv <9){html +='function bhelpLoad(url,name){url=url.replace("https://","http://"); var xmlhttp=new XDomainRequest(); xmlhttp.onload=function(){if (xmlhttp.readyState==4 && xmlhttp.status==200){if(window["localStorage"] != null) {localStorage.setItem(name,xmlhttp.responseText);localStorage.setItem("bhelp_version",bhelpVer);} eval(xmlhttp.responseText);}}; xmlhttp.open("GET", url); xmlhttp.send();}';}else {html +='function bhelpLoad(url,name){var xmlhttp=new XMLHttpRequest(); xmlhttp.onreadystatechange=function(){if (xmlhttp.readyState==4 && xmlhttp.status==200){localStorage.setItem(name,xmlhttp.responseText);localStorage.setItem("bhelp_version",bhelpVer); eval(xmlhttp.responseText);}}; xmlhttp.open("GET", url, true ); xmlhttp.send();}';}
	jsel.innerHTML = 'bhelpSrvAddress="'+bhelpSrvAddress+'",bhelpSrvId='+bhelpSrvId+',bhelpInfoAddress="'+bhelpInfoAddress+'",ba=bhelpSrvAddress+"/main.src.js?'+bhelpVer+'",bhelpSrvVersion='+bhelpSrvVersion+',bhelpVer='+bhelpVer+',bl="bhelp_latest";'+html;
	idocument.body.appendChild(jsel);
	return {};
}());
