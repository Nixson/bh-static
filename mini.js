bHelp = (function(){
	var _iframe=document.createElement("iframe");
	_iframe.setAttribute("id","cBh_frame");
	_iframe.setAttribute("frameBorder","0");
	_iframe.setAttribute("scrolling","no");
	_iframe.allowTransparency=true;
	_iframe.style.backgroundColor="transparent";
	window.document.body.appendChild(_iframe);
	var idocument = _iframe.contentDocument;
	idocument.open();
	idocument.write("<!DOCTYPE html><html><head></head><body></body></html>");
	idocument.close();
	var jsel = document.createElement('SCRIPT');
	jsel.type = 'text/javascript';
	jsel.innerHTML = 'bhelpSrvAddress="'+bhelpSrvAddress+'/main.js",bhelpSrvVersion='+bhelpSrvVersion+';if(window["localStorage"] === null){ var bhelpVersion = localStorage.getItem("bhelp_version"), bl="bhelp_latest"; if(bhelpVersion==null || bhelpVersion != bhelpSrvVersion) bhelpLoad(bhelpSrvAddress,bl); else eval(localStorage.getItem(bl));} else bhelpLoad(bhelpSrvAddress,bl); function bhelpLoad(url,name){ if (window.XMLHttpRequest) xmlhttp=new XMLHttpRequest(); else xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); xmlhttp.onreadystatechange=function(){if (xmlhttp.readyState==4 && xmlhttp.status==200){if(window["localStorage"] === null) {localStorage.setItem(name,xmlhttp.responseText);} eval(xmlhttp.responseText);}}; xmlhttp.open("GET", url, false ); xmlhttp.send();}';
	idocument.body.appendChild(jsel);
	return {}
}());
