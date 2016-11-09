var animate = function (doc, window) {
	var self = {bhId:"bhStyle"};
	if(doc.getElementById(self.bhId) == null) {
		var style = doc.createElement('style');
		style.type = 'text/css';
		style.id = self.bhId;
		doc.body.appendChild(style);
	}
	for(var el = 0; el < doc.styleSheets.length; el++){
		var elNode = doc.styleSheets[el].ownerNode ? doc.styleSheets[el].ownerNode : doc.styleSheets[el].owningElement;
		if(elNode.id && elNode.id == self.bhId) {
			self.styleLinkRules = doc.styleSheets[el].cssRules ? doc.styleSheets[el].cssRules : doc.styleSheets[el].rules;
			self.styleLink = doc.styleSheets[el];
		}
	}
	self.rules = {};
	self.length = 0;
	self.addRule = function(hash,callback){
		var content = 'transition: all 1s;';
		self.styleLink.insertRule(hash+" {"+content+"}",self.styleLinkRules.length);
		setTimeout(function(){
			if(typeof callback == 'function')
				callback();
		},10);
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
	self.id = function(uid){return doc.getElementById(uid);};
	self.hide = function(uid,direction,callback){
		self.rmRule(uid);
		var id = self.id(uid);
		if(id == null)
			return;
		var top = 0;
		var left = 0;
		id.style.position = 'fixed';
		id.style.top = id.offsetTop+"px";
		id.style.left = id.offsetLeft+"px";
		id.style.opacity = 1;
		self.history[uid] = {top:id.offsetTop, left: id.offsetLeft};
		var windowSize = {width: window.innerWidth, height: window.innerHeight};
		switch(direction){
			case 'downLeft': top = windowSize.height+20; left = 20; break;
			case 'downRight': top = windowSize.height+20; left = windowSize.width - id.clientWidth-20; break;
			case 'left': top = (windowSize.height - id.clientHeight)/2; left = 0-id.clientWidth - 20; break;
			case 'right': top = (windowSize.height - id.clientHeight)/2; left = windowSize.width + 20; break;
			case 'upLeft': top = 0 - 20 - id.clientHeight; left = 10; break;
			case 'upRight': top = 0 - 20 - id.clientHeight; left = windowSize.width - id.clientWidth-20; break;
		}
		self.addRule(uid, function(){
			id.style.top = top+"px";
			id.style.left = left+"px";
			id.style.opacity = 0;
		});
		setTimeout(function(){
			self.rmRule(uid);
			id.style.opacity = 1;
			if(typeof callback == 'function')
				callback();
		},1100);
	};
	self.show = function(uid,callback,position){
		var id = self.id(uid);
		if(id == null)
			return;
		self.rmRule(uid);
		id.style.opacity = 1;
		if(self.history[uid]==undefined){
			self.history[uid] = {top:id.offsetTop, left: id.offsetLeft};
		}
		if( position!= undefined && typeof position.top != 'undefined') {
			self.history[uid].top = position.top;
		}
		if( position!= undefined && typeof position.left != 'undefined') {
			self.history[uid].left = position.left;
		}
		var windowSize = {width: window.innerWidth, height: window.innerHeight};
		if(windowSize.width < self.history[uid].left+id.clientWidth)
			self.history[uid].left = windowSize.width - id.clientWidth - 20;
		if(windowSize.height < self.history[uid].top+id.clientHeight)
			self.history[uid].top = windowSize.height - id.clientHeight - 20;
		self.addRule(uid, function(){
			id.style.top = self.history[uid].top+"px";
			id.style.left = self.history[uid].left+"px";
			id.style.opacity = 1;
		});
		setTimeout(function(){
			self.rmRule(uid);
			if(typeof callback == 'function')
				callback();
		},1100);


	};
	return self;
};

var animateTop = animate(document,window);

setTimeout(function(){
	animateTop.hide("cMil_Line","upLeft",function(){
		setTimeout(function(){
			animateTop.show("cMil_Line");
		});
	});
},1000);

setTimeout(function(){
	animateTop.hide("cMil_Line","upRight",function(){
		setTimeout(function(){
			animateTop.show("cMil_Line");
		});
	});
},6000);


setTimeout(function(){
	animateTop.hide("cMil_Line","left",function(){
		setTimeout(function(){
			animateTop.show("cMil_Line");
		});
	});
},12000);


setTimeout(function(){
	animateTop.hide("cMil_Line","right",function(){
		setTimeout(function(){
			animateTop.show("cMil_Line");
		});
	});
},18000);

setTimeout(function(){
	animateTop.hide("cMil_Line","downLeft",function(){
		setTimeout(function(){
			animateTop.show("cMil_Line");
		});
	});
},24000);

setTimeout(function(){
	animateTop.hide("cMil_Line","downRight",function(){
		setTimeout(function(){
			animateTop.show("cMil_Line");
		});
	});
},30000);



