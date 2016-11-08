var ob = function (document, window) {
	var self = {};
	self.bhId = "bhStyle";
	if(document.getElementById(bhId) == null) {
		var style = document.createElement('style');
		style.type = 'text/css';
		style.id = bhId;
		document.body.appendChild(style);
	}
	for(var el = 0; el < document.styleSheets.length; el++){
		var elNode = document.styleSheets[el].ownerNode ? document.styleSheets[el].ownerNode : document.styleSheets[el].owningElement;
		if(elNode.id && elNode.id == bhId) {
			self.styleLinkRules = document.styleSheets[el].cssRules ? document.styleSheets[el].cssRules : document.styleSheets[el].rules;
			self.styleLink = document.styleSheets[el];
		}
	}
	self.rules = {};
	self.length = 0;
	self.addRule = function(hash,content){
		if(content == '')
			content = 'transition: all 1s;';
		self.styleLink.insertRule(hash+" {"+content+"}",self.styleLinkRules.length);
	};
	self.rmRule = function(hash){
		for( var num = 0; num < self.styleLinkRules.length; num++){
			if(self.styleLinkRules[num].selectorText == hash) {
				self.styleLink.deleteRule(num);
				break;
			}
		}
	}
	self.history = {};
	self.id = function(uid){return document.getElementById(uid);};
	self.hide = function(uid,direction){
		var top = 0;
		var left = 0;
		self.history[uid] = {top:self.id(uid).offsetTop, left: self.id(uid).offsetLeft};
		var windowSize = {width: window.innerWidth, height: window.innerHeight};
		switch(direction){
			case 'downLeft': top = windowSize.height+10; left = 0; break;
			case 'downRight': top = windowSize.height+10; left = windowSize.width - self.id(uid).innerWidth; break;
			case 'left': top = (windowSize.height - self.id(uid).innerHeight)/2; left = 0-self.id(uid).innerWidth - 10; break;
			case 'right': top = (windowSize.height - self.id(uid).innerHeight)/2; left = windowSize.width + 10; break;
			case 'upLeft': top = -10; left = 0; break;
			case 'upRight': top = -10; left = windowSize.width - self.id(uid).innerWidth; break;
		}
		self.addRule('#'+uid);
		self.id(uid).style.top = top;
		self.id(uid).style.left = left;
		setTimeout(function(){
			self.rmRule('#'+uid);
		},2000);
	}
	return self;
}
