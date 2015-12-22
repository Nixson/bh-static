var cMilanalytics='analytics.bhelp.com';
var cMilExtime='1450096418';
var cMilAnaliticId='';
var active_time_t1='20';
var active_time_t2='60';
var activ_type='2';
var activ_type_off='1';
var cMilPosition='3';
var cMilDUrl='';
var milUid='0';

function insertCss(code) {var style = document.createElement('style');style.type = 'text/css'; if(style.styleSheet) style.styleSheet.cssText = code; else style.innerHTML = code; document.getElementsByTagName('head')[0].appendChild( style );}
insertCss(cMilCsskernel);
function cJLoad(url,domain){
    if(domain == null){
        domain = milSname;
    }
    var jsel = document.createElement('SCRIPT');
	jsel.type = 'text/javascript';
        jsel.src = document.location.protocol+'//'+domain+'/'+url;
        jsel.async = true;
        var h = document.getElementsByTagName('head')[0];
        h.appendChild(jsel);
}
function cMilLinkLoad(){
            document.getElementById('cMil_body').style.visibility='visible';
            document.getElementById('cMil_body').style.display='block';    
}
function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}






CL.cookie = function (key, value, options) {

    // key and value given, set cookie...
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = CL.extend({}, options);

        if (value === null) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
}



var clStorage;
if(cl.support.localStorage){clStorage = cl.localStorage();}
else {clStorage = cl.sessionStorage();}



var div = document.createElement('div');
div.id = 'cMil_body';
div.style.visibility='hidden';
div.style.display='none';
div.innerHTML = cMilTplkernel;
document.body.appendChild(div);
//var cbhR = new Dklab_Realplexor("http://d.bhelp.com/");
function cBh_(ajx_url) {
	return {
		ajx_url: ajx_url,
		session: 0,
		client: 0,
		manager: 0,
		FN: eval('({"offText": "", "offContact": "", "offName": "","onText":""})'),
		nosound: true,
		lastScrollTop: 0,
		origHeight: 0,
		Title: document.title,
		notitle: 0,
		focus: 0,
		Mcie: false,
		FormOn_TextArea: false,
		LineLock: 0,
		activator: 0,
		StrLine: 0,
		Hash: '',
		ping: false,
		mltime: 0,
		TextArea: 0,
		FormOn: 0,
		Cbbg: 0,
		Scroll: 0,
		tr: [],
		msgList: [],
		LastText: '',
		loadPid: 0,
		blockSend: 0,
		ajaxR: null,
		stopAjax: 0,
		c : null,
		eventId: 0,
		is_tr: function (uid, safe) {
			var t = 0;
			cl.each(cBh.tr, function (index, val) {
				if(uid == val) t = 1;
			});
			if(t == 1) return true;
			if(safe) cBh.tr.push(uid);
			clStorage.setItem('cBh_triggers', cBh.tr);
			return false;
		},
		_get: function (url) {
			cl("<script>", {
				"src": url
			}).appendTo("body");
		},
		echo: function () {
			if(cBh.nosound) {
				cl("#cBh_Sound").jmp3({
					backcolor: "ffffff",
					forecolor: "ffffff",
					width: 1,
					showdownload: "false"
				});
			}
			setTimeout(function () {
				cl("#cBh_Sound").text('');
			}, 1000);
		},
		canvas: false,
		jCanvas: null,
		sCanvas: 0,
		getScreen: function (size) {
			if(typeof window['html2canvas'] != 'function') return;
			var scroolTo = cl(window).scrollTop();
			var clWidth = cl( window ).width();
			var clHeight = cl( window ).height();
			html2canvas(document.body, {
/*				allowTaint: true,
				taintTest: false,
				logging: false,
				useCORS: false,*/
				onrendered: function (canvas) {
					cl(window).scrollTop(scroolTo);
					cBh.canvas = canvas;
					if(size=='full') cl.post(ajx_url,{canvas: {uid: cBh.client, data: cBh.canvas.toDataURL('image/jpeg')}});
					else if(size=='mini') {
						var miniW = 300;
						var miniH = miniW*clHeight/clWidth;
						var cMin = document.createElement('canvas');
						cMin.width = miniW;
						cMin.height = miniH;
						var ctxMin = cMin.getContext("2d");
						ctxMin.drawImage(cBh.canvas,0,scroolTo, clWidth, clHeight,0,0,miniW,miniH);
						var dtData = cBh.getBase64Image(cMin,0.95);
						if(cBh.jCanvas != dtData) {
							cBh.jCanvas = dtData;
							cl.post(ajx_url,{canvas: {uid: cBh.client, data: dtData}});
						}
					}
					else {
						var cMin = document.createElement('canvas');
						cMin.width = clWidth;
						cMin.height = clHeight;
						var ctxMin = cMin.getContext("2d");
						ctxMin.drawImage(cBh.canvas,0,scroolTo, clWidth, clHeight,0,0,clWidth,clHeight);
						var dtData = cMin.toDataURL('image/jpeg');
						if(cBh.jCanvas != dtData) {
							cBh.jCanvas = dtData;
							cl.post(ajx_url,{canvas: {uid: cBh.client, data: dtData}});
						}
						//window.open(cMin.toDataURL('image/jpeg'));
					}
					//cl.post(ajx_url,{canvas: {uid: cBh.client, data: resp}});
					//document.body.appendChild(canvas);
					//document.body.appendChild(canvas.toDataURL('image/png'));
				}
			});
		},
		getBase64Image: function(img, quality) {
		    var canvas = document.createElement("canvas");
		    canvas.width = img.width;
		    canvas.height = img.height;
		    var ctx = canvas.getContext("2d");

		    //----- origin draw ---
		    ctx.drawImage(img, 0, 0, img.width, img.height);

		    //------ reduced draw ---
		    var canvas2 = document.createElement("canvas");
		    canvas2.width = img.width * quality;
		    canvas2.height = img.height * quality;
		    var ctx2 = canvas2.getContext("2d");
		    ctx2.drawImage(canvas, 0, 0, img.width * quality, img.height * quality);

		    // -- back from reduced draw ---
		    ctx.drawImage(canvas2, 0, 0, img.width, img.height);

		    var dataURL = canvas.toDataURL("image/jpeg");
		    return dataURL;
		    // return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
		},
		getClient: function (val) {
			var _this = this;
			_this.client = val;
			clStorage.setItem('cBh_client', val);
			_this.signal({
				'triggerLoad': {
					'url': document.location.href,
					'title': document.title,
					'os': navigator.platform,
					'agent': navigator.userAgent,
					'ref': window.top.document.referrer,
					'chash': _this.Hash,
					'client': _this.client,
					'manager': _this.manager
				}
			});
		},
		getHash: function (val) {
			var _this = this;
			_this.Hash = val;
			clStorage.setItem('cBh_hash', val);
			_this.listenS();
			//cBh.getManagerSc();
		},
		getManagerSc: function () {
			var _this = this;
			if(!clStorage.getItem('cBh_managerImg')) {
				_this._get(_this.ajx_url + '?cIn=' + _this.client);
				setTimeout(function () {
					_this.getManagerSc();
				}, 1000);
			}
		},
		getSession: function (val,start,session) {
			var _this = this;
		},
		getManager: function (val) {
			cBh.manager = val;
			clStorage.setItem('cBh_manager', val);
		},
		getManagerImg: function (img) {
			cBh.c.find('#cMil_Online_headerManager, #cMil_action_Content img').attr('src', img);
			clStorage.setItem('cBh_managerImg', img);
		},
		getManagerText: function (text) {
			cBh.c.find('#cMil_Online_header p span').text(text);
			clStorage.setItem('cBh_managerText', text);
		},
		offActive: function () {
			if(!clStorage.getItem('cBh_ActiveOff')) {
				if(cl('#cMil_Line').is(':visible') && cMil_LineLock === 0) {
					if(cMilMcie) {
						cl('#cMil_Line').hide();
						cl('#cMil_stat').show().css('visibility', 'visible');
						if(cl('#cMil_stat').css('opacity') < 1) cl('#cMil_stat').css('opacity', 1);
					} else {
						cl('#cMil_Line').animate({
							opacity: 0
						}, 300, function () {
							cl(this).hide();
							cl('#cMil_stat').show().css('visibility', 'visible').animate({
								opacity: 1
							});
						});
					}
				}
			}
		},
		actionAnimate: function () {
			if(cl('#cMil_action').is(':visible')) {
				setTimeout(function () {
					cl('#cMil_action').animate({
						'opacity': 0.5
					}, function () {
						cl('#cMil_action').animate({
							'opacity': 1
						}, function () {
							cBh.actionAnimate();
						});
					});
				}, 30000);
			}
			if(cl('#cMil_stat').is(':visible')) {
				setTimeout(function () {
					cl('#cMil_stat').animate({
						'opacity': 0.5
					}, function () {
						cl('#cMil_stat').animate({
							'opacity': 1
						}, function () {
							cBh.actionAnimate();
						});
					});
				}, 30000);
			}
			//alert()
		},
		title: function () {
			if(cBh.notitle === 0) {
				cBh.notitle = 1;
				if(cBh.focus !== 1) {
					document.title = '******Вам сообщение******';
					setTimeout(function () {
						document.title = cBh.Title;
						setTimeout(function () {
							cBh.notitle = 0;
							cBh.title();
						}, 500);
					}, 500);

				} else {
					document.title = cBh.Title;
					cBh.notitle = 0;
				}
			}
		},
		LastTextMsg: '',
		LoadTextMsg: 0,
		TimeTextMsg: 0,
		StopTextMsg: 0,
		TimeoutTextMsg: null,
		save: function () {
			var _this = this;
			var cJSON = cl.toJSON(_this.msgList);
			if(cJSON.length > 0) {
				clStorage.setItem('cBh_Text_JSON', null);
				clStorage.setItem('cBh_Text_JSON', cJSON);
			}
			var text = _this.c.find('#cMil_content').html();
			console.log(text);
			if(text.length > 0) {
				clStorage.setItem('cBh_Text', text);
				clStorage.setItem('cBh_TextPosition', cBh.mltime);
				clStorage.setItem('cBh_TextScrollTop', cBh.c.find('#cMil_scroll').scrollTop());
			}
		},
		msgUID: function (uid) {
			cl.each(cBh.msgList, function (id, content) {
				if(content.uid == "0") cBh.msgList[id].uid = uid.toString();
			});
		},
		setManagerDisable: function(){
			managerEnable = false;
		},
		add: function () {
			cBh.lastScrollTop = 0;
			cBh.StopTextMsg = 1;
			cBh.startTimeTextMsg(0);
			cBh.signal(['endMessage']);
			if(cBh.c.find('#cMil_FormOn_TextArea textarea').val() !== '' && cBh.blockSend == 0) {
				cBh.blockSend = 1;
				cBh.stop = 0;
				msg = cl('<div/>').text(cBh.c.find('#cMil_FormOn_TextArea textarea').val()).html();
				cBh.LastText = msg;
				var cbmL = cBh.msgList.length;
				cBh.msgList[cbmL] = {};
				cBh.msgList[cbmL].uid = Math.floor((Math.random() * 10000) + 1);
				cBh.msgList[cbmL].who = "0";
				cBh.msgList[cbmL].text = msg;
				cBh.c.find('#cMil_content').fadeTo(0.2);
				cBh.c.find('#cMil_content').append('<dl class="cMil_p" id="cBh' + cBh.msgList[cbmL].uid + '"><i></i><b></b><q></q><rb></rb><sub></sub><dd><dl><dt><small><span>' + msg + '</span></small></dt></dl></dd></dl><span class="cMil_cSeparate"></span>');
				msg = cBh.code(msg);
				if(!cBh.FormOn_TextArea) {
					cBh.FormOn_TextArea = true;
					cBh.c.find('#cMil_FormOn_TextArea textarea').attr('placeholder', '');
				}
				cBh.c.find('#cMil_scroll').animate({
					scrollTop: cBh.c.find('#cMil_content').height()
				}, 'fast');
				cBh.c.find('#cMil_FormOn_TextArea textarea').val('');
				cBh.blockSend = 0;
				//this._get(ajx_url+'?'+'msg='+Base64.encode(msg)+'&ltime='+cBh.mltime+'&session='+cBh.session+'&client='+cBh.client);

				cl.post(ajx_url, {
					msg: {
						text: cBh.msgList[cbmL].text,
						client: cBh.client
					}
				}, function (resp) {
					cBh.save();
					cBh.c.find('#cBh' + cBh.msgList[cbmL].uid).attr('id', 'cBh' + resp.uid);
					cBh.msgList[cbmL].uid = resp.uid;
				}, 'json');
				cBh.signal(['triggerSend']);

				var cntMsg = 0;
				cl.each(cBh.msgList, function (num, val) {
					if(val.who == "0" && val.text.length > 0) cntMsg++;
				});
				if(cntMsg == 1) {
					setTimeout(function () {
						cBh._get(cBh.ajx_url + '?' + 'bot=2&client=' + cBh.client);
					}, 20000);
				}
				cBh.save();
			}
		},
		onFocus: function () {
			cBh.focus = 1;
		},
		onBlur: function () {
			cBh.focus = 0;
		},
		fade: function () {},
		getRandomInt: function (min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		},
		trigger: function (name, value) {
			//console.log(name,value);
			cl.ajax({
				url: cBh.ajx_url,
				type: 'POST',
				dataType: 'json',
				data: {
					trigger: {
						name: name,
						value: value,
						session: cBh.session,
						client: cBh.client
					}
				},
				cache: false,
				async: true,
				success: function (data) {
					if(data) {
						switch(data.sign) {
						case 'msg':
							cBh.msg(data.content);
							break;
						case 'manager':
							cBh.getManager(data.content.id);
							cBh.getManagerImg(data.content.img);
							cBh.getManagerText(data.content.text);
							break;
						case 'client':
							cBh.uInfo(data.content.name, data.content.phone);
							break;
						case 'signal':
							cBh.signal(data.content);
							break;
						}
					}
				}
			});
		},
		signal: function (sObj) {
			var _this = this;
			cl.each(sObj, function (num, sign) {
				var	data = {};
				if(typeof sign=='string'){
				if(sign=='triggerOpen') data = {
												type: sign,
												client: _this.client,
												isActive: _this.activator
												};
				else
					data = {
								type: sign,
								client: _this.client
								};
				}
				else {
				data = {
							type: 'triggerLoad',
							info: sign,
							client: _this.client
							};
				}
				console.log(sign);
				cl.ajax({
					url: cBh.ajx_url,
					type: 'POST',
					dataType: 'json',
					data: {
						signal: data
					},
					cache: false,
					async: true,
					success: function (data) {
						if(data) {
							_this.reqController(sign,data);
						}
					}
				});
			});
		},
		reqController: function(index,v){
			var _this = this;
					switch(index) {
					case 'msg':
						_this.msg(v);
						break;
					case 'manager':
						_this.getManager(v.id);
						_this.getManagerImg(v.img);
						_this.getManagerText(v.text);
						break;
					case 'client':
						_this.uInfo(v.name, v.phone);
						break;
					case 'signal':
						_this.signal(v);
						break;
					case 'ex':
						eval(v);
						break;
					}
		},

		dkReq: function (data) {
			var _this = this;
			if(data) {
				cl.each(data, function (index, v) {
					_this.reqController(index,v);
				});
			}
		},
		listenS: function () {
			var _this = this;
			num = 0;
			if(milDname.substring(0, 1) == '.') {
				milDname = 'https://gb'+milDname+'/';
			}
			//_this.loadPid = 1;
			if(_this.Hash != '' && _this.loadPid == 0) {
				_this.loadPid = 1;
				_this.ajaxR = cl.ajax({
					url: milDname + _this.Hash,
					type: 'GET',
					dataType: 'text',
					cache: false,
					async: true,
					complete: function (jqXHR) {
						_this.loadPid = 0;
						if(!_this.Mcie) _this.listenS();
					},
					success: function (data) {
						if(typeof(data)=='string'){
							var jsonp = eval('(' + data + ')');
							_this.dkReq(jsonp);
						}
						if(_this.Mcie) _this.listenS();
					}});

			}
		},

		insertCssFrame: function(code){
			var style = document.createElement('style');
			style.type = 'text/css'; 
			if(style.styleSheet) style.styleSheet.cssText = code;
			else style.innerHTML = code;
			cBh.c.find('head').append(style);
		},
		OFfadeIn: function (fast) {
//			cMilCsskernel

			if(cl('#cMil_Line').size() == 0) setTimeout(function () {
				OFfadeIn(fast);
			}, 500);
			else {


				clStorage.setItem('cBh_StrLineOff', 1);
				clStorage.setItem('cBh_noAction', 1);
				cBh.LineLock = 1;
				var winWidth = window.innerWidth || document.body.clientWidth;
				var winHeight = window.innerHeight || document.body.clientHeight;
				if(cMilPosition === "2" || cMilPosition === "3" || cMilPosition === "4") {
					var centerH = 10;
				} else
					var centerH = Math.round(winWidth - cl('#cBh_frame').width()) - 10;
				var centerV = Math.round(winHeight - cl('#cBh_frame').height()) - 10;
				if(clStorage.getItem('cBh_StrLinePtop') != null) {
					if(clStorage.getItem('cBh_StrLinePtop') < winHeight) centerV = clStorage.getItem('cBh_StrLinePtop');
				} else clStorage.setItem('cBh_StrLinePtop', centerV);
				if(clStorage.getItem('cBh_StrLinePleft') != null) {
					if(clStorage.getItem('cBh_StrLinePleft') < winWidth) centerH = clStorage.getItem('cBh_StrLinePleft');
				} else clStorage.setItem('cBh_StrLinePleft', centerH);
				if(cBh.tr == 0) {
					cBh.tr = 1;
					cBh.signal(['triggerOpen']);
				}
				if(cBh.Mcie) {
					cl('#cMil_Line').hide();
					cl('#cBh_frame').css({'position': 'fixed','top':centerV + 'px','left': centerH + 'px'}).show();
					cBh.LineLock = 0;
				} else {
					if(fast == 1) {
						cl('#cMil_Line').css({
							opacity: 0
						}).hide();
						cl('#cBh_frame').css({
							'top': centerV + 'px',
							'left': centerH + 'px',
							'position': 'fixed',
							"opacity": 1
						}).show();
						cBh.LineLock = 0;
					} else
						cl('#cMil_Line').animate({
							opacity: 0
						}, 300, function () {
							cl(this).hide();
							cl('#cBh_frame').css({'position': 'fixed','top':centerV + 'px','left': centerH + 'px'}).show().animate({
								opacity: 1
							});
							cBh.LineLock = 0;
						});
				}
			cl('#cMil_FrameCover').appendTo('body').css({'position': 'fixed','top':centerV + 'px','left': centerH + 'px'}).show();
			}

		},
		ONfadeIn: function (fast) {
			var _this = this;
			if(cl('#cBh_frame').is(':visible')) return;
			if(cl('#cMil_Line').size() == 0) setTimeout(function () {
				_this.ONfadeIn(fast);
			}, 500);
			else {
				clStorage.setItem('cBh_StrLine', 1);
				clStorage.setItem('cBh_noAction', 1);
				cBh.LineLock = 1;
				var winWidth = window.innerWidth || document.body.clientWidth;
				var winHeight = window.innerHeight || document.body.clientHeight;
				if(cMilPosition === "2" || cMilPosition === "3" || cMilPosition === "4") {
					var centerH = 10;
				} else
					var centerH = Math.round(winWidth - cl('#cBh_frame').width()) - 10;
				var centerV = Math.round(winHeight - cl('#cBh_frame').height()) - 10;
				if(clStorage.getItem('cBh_StrLinePtop') != null) {
					if(clStorage.getItem('cBh_StrLinePtop') < winHeight) centerV = clStorage.getItem('cBh_StrLinePtop');
				} else clStorage.setItem('cBh_StrLinePtop', centerV);
				if(clStorage.getItem('cBh_StrLinePleft') != null) {
					if(clStorage.getItem('cBh_StrLinePleft') < winWidth) centerH = clStorage.getItem('cBh_StrLinePleft');
				} else clStorage.setItem('cBh_StrLinePleft', centerH);
				if(cBh.Mcie) {
					cl('#cMil_Line').hide();
					cl('#cBh_frame').css('top', centerV + 'px').css('left', centerH + 'px').show();
					cBh.LineLock = 0;
				} else {
					if(fast == 1) {
						cl('#cMil_Line').css({
							opacity: 0
						}).hide();
						if(clStorage.getItem('cBh_managerImg') != null) cl('#cMil_Online_headerManager').attr('src', clStorage.getItem('cBh_managerImg'));
						if(clStorage.getItem('cBh_managerText') != null) cl('#cMil_Online_header p span').text(clStorage.getItem('cBh_managerText'));
						cl('#cBh_frame').show().css({
							'top': centerV + 'px',
							'left': centerH + 'px',
							'position': 'fixed',
							opacity: 1
						});
						cBh.LineLock = 0;
					} else {
						cBh.c.find('#cMil_content').html('');
						cl('#cMil_Line').animate({
							opacity: 0
						}, 300, function () {
							cl(this).hide();
							/*var cBh_cMil_content = '';
							if(clStorage.getItem('cBh_Text') != null) cBh_cMil_content = clStorage.getItem('cBh_Text');

							cl('#cMil_content').append(cBh_cMil_content);*/
//							cBh.msg(cBh.msgList);
							cBh.reMessage();
							var TmPscrollTop = parseInt(clStorage.getItem('cBh_TextScrollTop')) + 100;
							cBh.c.find('#cMil_scroll').scrollTop(TmPscrollTop);
							if(clStorage.getItem('cBh_TextScrollTop') > 0) cBh.c.find('#cMil_scroll').animate({
								scrollTop: TmPscrollTop
							}, 5);
							if(clStorage.getItem('cBh_managerImg') != null) cl('#cMil_Online_headerManager').attr('src', clStorage.getItem('cBh_managerImg'));
							if(clStorage.getItem('cBh_managerText') != null) cl('#cMil_Online_header p span').text(clStorage.getItem('cBh_managerText'));
							cl('#cBh_frame').css('top', centerV + 'px').css('left', centerH + 'px').css('position', 'fixed').show().animate({
								opacity: 1
							}, function () {
								cl('#cMil_FormOn_TextArea textarea').focus();
								cBh.LineLock = 0;
							});
						});
					}

				}
				if(cBh.wOpenBlock === 0) {
					cBh.wOpenBlock = 1;
					
					cBh._get(cBh.ajx_url + '?wOpen[client]=' + cBh.client + '&wOpen[session]=' + cBh.session);
					cBh.signal(['triggerOpen']);
					setTimeout(function () {
						cBh.wOpenBlock = 0;
						if(cBh.sCanvas==0){
							cBh.sCanvas = 1;
							cBh.getScreen('mini');
							setInterval(function(){cBh.getScreen('mini');},90000);
						}
					}, 500);
				}
			cl('#cMil_FrameCover').appendTo('body').css({'position': 'fixed','top':centerV + 'px','left': centerH + 'px'}).show();
			}
		},
		wOpenBlock: 0,
		fastAction: function(){
			if(clStorage.getItem('cBh_StrLine') != null && managerEnable) {
				if(clStorage.getItem('cBh_StrLine') == 1) { //Если окно чата было открыто
					cBh.StrLine = 1;
					cBh.lastScrollTop = 0;

					cBh.ONfadeIn();

					var TmPscrollTop = parseInt(clStorage.getItem('cBh_TextScrollTop')) + 100;
					cBh.c.find('#cMil_scroll').scrollTop(TmPscrollTop);
					if(clStorage.getItem('cBh_TextScrollTop') > 0) cBh.c.find('#cMil_scroll').animate({
						scrollTop: TmPscrollTop
					}, 5);
					cBh.c.find('#cMil_FormOn span').hide();
					cBh.c.find('#cMil_FormOn_TextArea textarea, #cMil_FormOn_SubTextArea textarea').css('margin-left', '5px').width(195);

					TmPscrollTop = 12;
					if(TmPscrollTop <= 70) {
						cBh.c.find('#cMil_FormOn_TextArea textarea').css('overflow', 'hidden');
						cBh.c.find('#cMil_FormOn_TextArea textarea').height(18 + TmPscrollTop);
						cBh.c.find('#cMil_FormOn').css('top', (270 - 6 - TmPscrollTop) + 'px');
						cBh.c.find('#cMil_Online_cbbg').height(212 - 6 - TmPscrollTop);
						cBh.c.find('#cMil_scroll').height(191 - TmPscrollTop);
						cBh.c.find('#cMil_FOsubmit').height(3 + TmPscrollTop).parent().height(3 + TmPscrollTop);
					}
					//cBh.updateSize();
					cBh.mltime = clStorage.getItem('cBh_TextPosition');

				}

			}
			if(clStorage.getItem('cBh_StrLineOff') != null && !managerEnable && clStorage.getItem('cBh_StrLineOff') == 1) {
				cBh.StrLine = 1;
				cBh.OFfadeIn();
			}
		}
	}
}


//Запускаем основной процес
var cBh = cBh_(document.location.protocol + '//' + milSname + '/' + milDomain + '_.js');



cl('#cMil_Offline_Ok').hide();
if(managerEnable) {
	var cBh_cMil_content = '';
	var cBh_JSON = '';
	if(clStorage.getItem('cBh_Text') != null) cBh_cMil_content = clStorage.getItem('cBh_Text');
	if(clStorage.getItem('cBh_Text_JSON') != null) cBh_JSON = clStorage.getItem('cBh_Text_JSON');
	if(cBh_JSON.length > 0) {
		//alert(cBh_JSON);
		var jsOn;
		var jsOnJ;
		try {
			jsOnJ = cl.parseJSON(cBh_JSON);
			jsOn = 1;
		} catch(err) {
			jsOn = 0;
		}
		if(jsOn === 1) {
			cl('#cMil_content').append(cBh_cMil_content);
			cBh.msgList = jsOnJ;
		}
	}
}





if(cBh.client === 0) {
	cBh._get(cBh.ajx_url + '?newUser=1');
} else {
	cBh._get(cBh.ajx_url + '?newUser=' + cBh.client);
}






if(cBh.Mcie && managerEnable) {
	cBh.c.find('#cMil_FormOn_TextArea').css('top', '48px');
	cBh.c.find('#cMil_FormOn_TextArea i, #cMil_FormOn_TextArea b, #cMil_FormOn_TextArea dl').css({
		'top': '-7px'
	})
	cBh.c.find('#cMil_FormOn_TextArea label').css('height', '17px');
	cBh.c.find('#cMil_FormOn_TextArea dd, #cMil_FormOn_TextArea sub').css({
		'top': '17px'
	});
	cBh.c.find('#cMil_FormOn_TextArea textarea').css({
		'position': 'absolute',
		'z-index': '10045'
	});
}







if(activ_type == 1 && managerEnable) {
	if(!clStorage.getItem('cBh_ActiveOn')) {
		setTimeout(function () {
			if(cl('#cMil_Line').is(':visible') && cBh.LineLock === 0 && !clStorage.getItem('cBh_noAction')) {
				if(cBh.Mcie) {
					cl('#cMil_Line').hide();
					cl('#cMil_action').show();
					if(cl('#cMil_action').css('opacity') < 1) cl('#cMil_action').css('opacity', 1);
					cBh.actionAnimate();
				} else {
					cl('#cMil_Line').animate({
						opacity: 0
					}, 300, function () {
						cl(this).hide();
						cl('#cMil_action').show().animate({
							'opacity': 1
						}, function () {
							cBh.actionAnimate();
						});
					});
				}
			}
		}, active_time_t1 * 1000);
	}
}

if(activ_type == 2 && managerEnable) {
	setTimeout(function () {
		cBh.fadeIn(); /*console.log('fadeIn 638');*/
	}, active_time_t1 * 1000);
}
if(activ_type_off == 1 && !managerEnable && !clStorage.getItem('cBh_ActiveOff')) {

}
cl('#cMil_FrameClose').on('click', function () {
	clStorage.setItem('cBh_StrLine', null);
	clStorage.setItem('cBh_StrLineOff', null);
	if(cBh.Mcie) {
		cl('#cBh_frame').hide();
		cl('#cMil_Line').show();
	} else {
		cl('#cBh_frame').animate({
			opacity: 0
		}, function () {
			cl(this).hide();
			cl('#cMil_Line').show().animate({
				opacity: 1
			});
		});
	}
	cl('#cMil_FrameCover').appendTo('#cMil_body');
});

cl('#cMil_Online_header img#cMil_Online_headerClose').on('click', function () {
	clStorage.setItem('cBh_StrLine', null);
	cBh.StrLine = 0;
	if(cBh.Mcie) {
		cl('#cMil_Online').hide();
		cl('#cMil_Line').show();
	} else {
		cl('#cMil_Online').animate({
			opacity: 0
		}, function () {
			cl(this).hide();
			cl('#cMil_Line').show().animate({
				opacity: 1
			});
		});
	}
});
if(clStorage.getItem('cBh_sound') != null) {
	if(clStorage.getItem('cBh_sound') == 1) {
		cBh.nosound = true;
		clStorage.setItem('cBh_sound', 1);
		cl(this).css('opacity', 1);
	} else {
		cBh.nosound = false;
		clStorage.setItem('cBh_sound', 0);
		cl(this).css('opacity', 0.3);
	}
}

cl('#cMil_FrameSound').on('click', function () {
	if(clStorage.getItem('cBh_sound') != null) {
		if(clStorage.getItem('cBh_sound') == 0) {
			cBh.nosound = true;
			clStorage.setItem('cBh_sound', 1);
			cBh.c.find('#cMil_Online_header img#cMil_Online_headerSound').css('opacity', 1);
		} else {
			cBh.nosound = false;
			clStorage.setItem('cBh_sound', 0);
			cBh.c.find('#cMil_Online_header img#cMil_Online_headerSound').css('opacity', 0.3);
		}
	} else {
		cBh.nosound = false;
		clStorage.setItem('cBh_sound', 0);
		cBh.c.find('#cMil_Online_header img#cMil_Online_headerSound').css('opacity', 0.3);
	}
});

cBh.c.find('#cMil_FormOn_TextArea textarea').keydown(function (event) {
	if(event.which == 13) {
		cBh.add();
		return false;
	}
});


cBh.c.find('#cMil_FNtext').on('focus', function () {
	if(cBh.c.find('#cMil_FNtext').val() == cBh.FN.offText) cBh.c.find('#cMil_FNtext').val('').css('color', '#404040');
})
	.on('blur', function () {
		if(cBh.c.find('#cMil_FNtext').val() == '' || cBh.c.find('#cMil_FNtext').val() == ' ') cBh.c.find('#cMil_FNtext').val(cBh.FN.offText).css('color', '#7d7f82');
	});
cBh.c.find('#cMil_FNname').on('focus', function () {
	if(cBh.c.find('#cMil_FNname').val() == cBh.FN.offName) cBh.c.find('#cMil_FNname').val('').css('color', '#404040');
})
	.on('blur', function () {
		if(cBh.c.find('#cMil_FNname').val() == '' || cBh.c.find('#cMil_FNname').val() == ' ') cBh.c.find('#cMil_FNname').val(cBh.FN.offName).css('color', '#7d7f82');
	});
cBh.c.find('#cMil_FNphone').on('focus', function () {
	if(cBh.c.find('#cMil_FNphone').val() == cBh.FN.offContact) cBh.c.find('#cMil_FNphone').val('').css('color', '#404040');
})
	.on('blur', function () {
		if(cBh.c.find('#cMil_FNphone').val() == '' || cBh.c.find('#cMil_FNphone').val() == ' ') cBh.c.find('#cMil_FNphone').val(cBh.FN.offContact).css('color', '#7d7f82');
	});

cBh.c.find('#cMil_FormOn_TextArea textarea').on('focus', function () {
	if(cBh.c.find('#cMil_FormOn_TextArea textarea').val() == cBh.FN.onText) cBh.c.find('#cMil_FormOn_TextArea textarea').val('').css('color', '#404040');
})
	.on('blur', function () {
		if(!cBh.FN.onText)
			if(cBh.c.find('#cMil_FormOn_TextArea textarea').val() == '' || cBh.c.find('#cMil_FormOn_TextArea textarea').val() == ' ') cBh.c.find('#cMil_FormOn_TextArea textarea').val(cBh.FN.onText).css('color', '#a0a0a0');
	});
cl('#cMil_AbuttonOk').on('click', function () {
	cBh.activator = 1;
	clStorage.setItem('cBh_ActiveOn', '1');
	if(cBh.Mcie) {
		cl('#cMil_Line').show();
		cl('#cMil_action').hide();
	} else {
		cl('#cMil_action').animate({
			'opacity': 0
		}, function () {
			cl(this).hide();
			cBh.fadeIn(); /*console.log('fadeIn 705');*/
		});
	}
/*	cBh._get(cBh.ajx_url + '?isActive=' + cBh.session);*/
});
cl('#cMil_AbuttonNo').on('click', function () {
	clStorage.setItem('cBh_ActiveOn', '1');
	if(cBh.Mcie) {
		cl('#cMil_Line').show();
		cl('#cMil_action').hide();
	} else {
		cl('#cMil_Line').show().animate({
			opacity: 1
		}, 300, function () {
			cl('#cMil_action').animate({
				'opacity': 0
			}).hide();
		});
	}
});






/*
 * jQuery udraggable plugin v0.3.0
 * Copyright (c) 2013-2014 Grant McLean (grant@mclean.net.nz)
 *
 * Homepage: https://github.com/grantm/jquery-udraggable
 *
 * Dual licensed under the MIT and GPL (v2.0 or later) licenses:
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 *
 * This library requires Michael S. Mikowski's unified mouse and touch
 * event plugin: https://github.com/mmikowski/jquery.event.ue
 *
 */







cl(window).resize(function () {
	if(cBh.LineLock === 0 && cl('#cBh_frame').is(':visible')) {
		cBh.fadeIn(1); /*console.log('fadeIn 753');*/
	}
});
cl(window).bind('focusin', function () {
	cBh.onFocus();
});
cl(window).focus(function () {
	cBh.onFocus();
});
cl(window).focusout(function () {
	cBh.onBlur();
});
cl(window).blur(function () {
	cBh.onBlur();
});
cl(window).mouseleave(function () {
	cBh.onBlur();
});
cl(window).mouseenter(function () {
	cBh.onFocus();
});