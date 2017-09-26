!function(){function h(a,b,c){"addEventListener" in window?a.addEventListener(b,c,!1):"attachEvent" in window&&a.attachEvent("on"+b,c)}function B(){var a,b=["moz","webkit","o","ms"];for(a=0;a<b.length&&!A;a+=1){A=window[b[a]+"RequestAnimationFrame"]}A||f(" RequestAnimationFrame not supported")}function C(a){var b=D+"[",c,e="Host page";c=(window.top!==window.self&&(e=window.parentIFrame?window.parentIFrame.getId():"Nested host page"),e);return b+c+"]"+a}function f(a){x&&"object"==typeof window.console&&console.log(C(a))}function q(a){"object"==typeof window.console&&console.warn(C(a))}function u(r){function I(){y("Height");y("Width");d(function(){b(k);t();e[p].resizedCallback(k)},k,"resetPage")}function c(a){var b=a.id;f(" Removing iFrame: "+b);a.parentNode.removeChild(a);e[b].closedCallback(b);delete e[b];f(" --")}function L(){var a=v.substr(J).split(":");return{iframe:document.getElementById(a[0]),id:a[0],height:a[1],width:a[2],type:a[3]}}function y(a){var b=Number(e[p]["max"+a]),c=Number(e[p]["min"+a]),d=a.toLowerCase(),r=Number(k[d]);if(c>b){throw Error("Value for min"+a+" can not be greater than max"+a)}f(" Checking "+d+" is in range "+c+"-"+b);c>r&&(r=c,f(" Set "+d+" to min value"));r>b&&(r=b,f(" Set "+d+" to max value"));k[d]=""+r}function g(){var a=r.origin,b=e[p].checkOrigin,c=k.iframe.src.split("/").slice(0,3).join("/"),d;if(d=b&&"null"!=""+a){if(b.constructor===Array){a:{f(" Checking connection is from allowed list of origins: "+b);for(c=0;c<b.length;c++){if(b[c]===a){b=!0;break a}}b=!1}}else{b=(f(" Checking connection is from: "+c),a===c)}d=!b}if(d){throw Error("Unexpected message received from: "+a+" for "+k.iframe.id+". Message was: "+r.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.")}return !0}function l(){var a=k.type in {"true":1,"false":1,undefined:1};return a&&f(" Ignoring init message from meta parent page"),a}function m(a){f(" MessageCallback passed: {iframe: "+k.iframe.id+", message: "+a+"}");e[p].messageCallback({iframe:k.iframe,message:JSON.parse(a)});f(" --")}function h(a){a=a.getBoundingClientRect();return E(),{x:parseInt(a.left,10)+parseInt(n.x,10),y:parseInt(a.top,10)+parseInt(n.y,10)}}function z(a){var b=a?h(k.iframe):{x:0,y:0},c={x:Number(k.width)+b.x,y:Number(k.height)+b.y};f(" Reposition requested from iFrame (offset x:"+b.x+" y:"+b.y+")");window.top!==window.self?window.parentIFrame?a?window.parentIFrame.scrollToOffset(c.x,c.y):window.parentIFrame.scrollTo(k.width,k.height):q(" Unable to scroll to requested position, window.parentIFrame not found"):(n=c,!1!==e[p].scrollCallback(n)&&t(),f(" --"))}function u(a){a=a.split("#")[1]||"";var b=decodeURIComponent(a),b=document.getElementById(b)||document.getElementsByName(b)[0];window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(a):f(" In page link #"+a+" not found and window.parentIFrame not found"):b?(b=h(b),f(" Moving to in page link (#"+a+") at x: "+b.x+" y: "+b.y),n={x:b.x,y:b.y},!1!==e[p].scrollCallback(n)&&t(),f(" --")):f(" In page link #"+a+" not found")}function w(a){var b=!0;return e[a]||(b=!1,q(k.type+" No settings for "+a+". Message was: "+v)),b}var v=r.data,k={},p=null;if(D===(""+v).substr(0,J)&&(k=L(),p=k.id,!l()&&w(p)&&(x=e[p].log,f(" Received: "+v),(null===k.iframe?(q(" IFrame ("+k.id+") not found"),!1):1)&&g()))){switch(e[p].firstRun=!1,k.type){case"close":c(k.iframe);break;case"message":m(v.substr(v.indexOf(":")+K+6));break;case"scrollTo":z(!1);break;case"scrollToOffset":z(!0);break;case"inPageLink":u(v.substr(v.indexOf(":")+K+9));break;case"reset":a(k);break;case"init":I();e[p].initCallback(k.iframe);break;default:I()}}}function E(){null===n&&(n={x:void 0!==window.pageXOffset?window.pageXOffset:document.documentElement.scrollLeft,y:void 0!==window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop},f(" Get page position: "+n.x+","+n.y))}function t(){null!==n&&(window.scrollTo(n.x,n.y),f(" Set page position: "+n.x+","+n.y),n=null)}function a(a){f(" Size reset requested by "+("init"===a.type?"host page":"iFrame"));E();d(function(){b(a);y("reset","reset",a.iframe,a.id)},a,"init")}function b(a){function b(e){a.iframe.style[e]=a[e]+"px";f(" IFrame ("+c+") "+e+" set to "+a[e]+"px")}var c=a.iframe.id;e[c].sizeHeight&&b("height");e[c].sizeWidth&&b("width")}function d(a,b,c){c!==b.type&&A?(f(" Requesting animation frame"),A(a)):a()}function y(a,b,c,d){c&&c.contentWindow?(f("["+a+"] Sending msg to iframe ("+b+")"),c.contentWindow.postMessage(D+b,"*")):(q("["+a+"] IFrame not found"),e[d]&&delete e[d])}function g(b){var d=this,c=function(a){return""===a&&(d.id=a="iFrameResizer"+M++,x=(b||{}).log,f(" Added missing iframe ID: "+a+" ("+d.src+")")),a}(d.id);(function(a){a=a||{};e[c]={firstRun:!0};if("object"!=typeof a){throw new TypeError("Options is not an object.")}for(var b in G){G.hasOwnProperty(b)&&(e[c][b]=a.hasOwnProperty(b)?a[b]:G[b])}x=e[c].log})(b);f(" IFrame scrolling "+(e[c].scrolling?"enabled":"disabled")+" for "+c);
    d.style.overflow=!1===e[c].scrolling?"hidden":"auto";d.scrolling=!1===e[c].scrolling?"no":"yes";(function(){function a(b){1/0!==e[c][b]&&0!==e[c][b]&&(d.style[b]=e[c][b]+"px",f(" Set "+b+" \x3d "+e[c][b]+"px"))}a("maxHeight");a("minHeight");a("maxWidth");a("minWidth")})();("number"==typeof e[c].bodyMargin||"0"===e[c].bodyMargin)&&(e[c].bodyMarginV1=e[c].bodyMargin,e[c].bodyMargin=""+e[c].bodyMargin+"px");(function(b){h(d,"load",function(){var f=e[c].firstRun;y("iFrame.onload",b,d);!f&&e[c].heightCalculationMethod in N&&a({iframe:d,height:0,width:0,type:"init"})});y("init",b,d)})(c+":"+e[c].bodyMarginV1+":"+e[c].sizeWidth+":"+e[c].log+":"+e[c].interval+":"+e[c].enablePublicMethods+":"+e[c].autoResize+":"+e[c].bodyMargin+":"+e[c].heightCalculationMethod+":"+e[c].bodyBackground+":"+e[c].bodyPadding+":"+e[c].tolerance+":"+e[c].enableInPageLinks+":"+e[c].resizeFrom)}function m(a,b){null===H&&(H=setTimeout(function(){H=null;a()},b))}function l(){m(function(){for(var a in e){"parent"===e[a].resizeFrom&&e[a].autoResize&&!e[a].firstRun&&y("Window resize","resize",document.getElementById(a),a)}},66)}function z(){function a(b,c){if(!b.tagName){throw new TypeError("Object is not a valid DOM element")}if("IFRAME"!==b.tagName.toUpperCase()){throw new TypeError("Expected \x3cIFRAME\x3e tag, found \x3c"+b.tagName+"\x3e.")}g.call(b,c)}return B(),h(window,"message",u),h(window,"resize",l),function(b,c){switch(typeof c){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(c||"iframe"),function(c){a(c,b)});break;case"object":a(c,b);break;default:throw new TypeError("Unexpected data type ("+typeof c+").")}}}function w(a){a.fn.iFrameResize=function(a){return this.filter("iframe").each(function(b,d){g.call(d,a)}).end()}}var M=0,x=!1,K=7,D="[iFrameSizer]",J=D.length,n=null,A=window.requestAnimationFrame,N={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},e={},H=null,G={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,enableInPageLinks:!1,enablePublicMethods:!1,heightCalculationMethod:"offset",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:400,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,tolerance:0,closedCallback:function(){},initCallback:function(){},messageCallback:function(){},resizedCallback:function(){},scrollCallback:function(){return !0}};window.jQuery&&w(jQuery);"function"==typeof define&&define.amd?define([],z):"object"==typeof module&&"object"==typeof module.exports?module.exports=z():window.iFrameResize=window.iFrameResize||z()}();(function(h){function B(){var a=this.handlers={};u(h,"message",function(b){b=b||h.event;var d=b.data;if(d&&"string"===typeof d){b={};for(var f=d.split("\x26"),g=0,m=f?f.length:0;g<m;g++){d=f[g].split("\x3d"),b[d[0]]=d[1]}}else{b={}}if((d=b.id)&&a[d]){a[d](b)}})}function C(a,b,d){function f(){g.postMessage('{"id":"'+m+'","command":"getBodySize"}',"*")}if(a&&a.nodeName&&"IFRAME"===a.nodeName.toUpperCase()&&"function"===typeof b){var g=a.contentWindow,m=a.getAttribute("fid");g&&g.postMessage&&(m||(m="iframe-"+q++,a.setAttribute("fid",m)),E.registerHandler(m,b),d?setInterval(f,d):f())}}function show(a){var b,d,f,g,m,l,h,dp,op;b=a.top;d=a.TR_Width||800;f=a.TR_Height||800;dp=a.TR_DefaultPath||"";op=a.TR_OtherPath||"";800<f&&(f=800);m=a.TR_Params.toString().replace(/(^\s*)|(\s*$)/g,"");var w=a.follow;a=t.offset(w).left;var w=w.clientWidth,q=t.winSize().width;a=a<q/2?d>q-a?q-d:a:d>a?0:a-d+w;l=document.createElement("div");l.id="trDialog_"+m;l.setAttribute("name","iframe_trackMynumber");l.className="trDialog";l.style.outDivIndex=99999;l.style.position="absolute";l.style.width=d+"px";l.style.height=f+"px";l.style.left=a+"px";l.style.top=b+"px";l.style.background="#fff";l.style.boxShadow="0 1px 5px 3px rgba(0,0,0,.24)";l.style.display="none";overBgColor="#BDBDBD";outBgColor="#e3e3e3";l.innerHTML='\x3ca class\x3d"trFrameClose" onmouseover\x3d"this.style.backgroundColor\x3d\''+overBgColor+"'\" onmouseout\x3d\"this.style.backgroundColor\x3d'"+outBgColor+'\'"  style\x3d"position: absolute; right: 0px; top: -28px; width:28px; height:28px; line-height:28px; background:#e3e3e3; color: #212121; font-sioutDive: 24px; text-align:center; font-family: Arial,Helvetica,sans-senif; z-index: 100; cursor: pointer;"\x3eX\x3c/a\x3e';b=document.createElement("iframe");b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.setAttribute("width","100%");b.setAttribute("height","100%");b.setAttribute("frameBorder",0);h&&0!=h?b.setAttribute("src",dp+"?q="+m):b.setAttribute("src",op+"?q="+m);l.appendChild(b);document.body.appendChild(l);l.style.display="block";g=t.byClass("trFrameClose",l)[0];u(g,"click",function(){l.style.display="none"});var x=null;C(b,function(a){a.height&&x!==a.height&&(l.style.height=a.height+"px",x=a.height)},1000);iFrameResize()}var q=1,u=function(){return document.addEventListener?function(a,b,d){if(a.length&&a!==h){for(var f=0;f<a.length;f++){u(a[f],b,d)}}else{a.addEventListener(b,d,!1)
}}:function(a,b,d){if(a.length&&a!==h){for(var f=0;f<a.length;f++){u(a[f],b,d)}}else{a.attachEvent("on"+b,function(){return d.call(a,h.event)})}}}();B.prototype={registerHandler:function(a,b){this.handlers[a]=b}};var E=new B,t={byClass:function(a,b){if(b.getElementsByClass){return(b||document).getElementsByClass(a)}for(var d=[],f=new RegExp("(^| )"+a+"( |$)"),g=this.byTagName("*",b),m=0;m<g.length;m++){f.test(g[m].className)&&d.push(g[m])}return d},byId:function(a){return a&&a.tagName?a:document.getElementById(a)},byName:function(a){return document.getElementsByName(a)},byTagName:function(a,b){return(b||document).getElementsByTagName(a)},offset:function(a){var b=a.offsetLeft,d=a.offsetTop;for(a=a.offsetParent;null!==a;){b+=a.offsetLeft,d+=a.offsetTop,a=a.offsetParent}return{left:b,top:d}},winSize:function(){var a,b;h.innerWidth?(a=h.innerWidth,b=h.innerHeight):document.body&&document.body.clientWidth&&(a=document.body.clientWidth,b=document.body.clientHeight);document.documentElement&&document.documentElement.clientWidth&&document.documentElement.clientHeight&&(a=document.documentElement.clientWidth,b=document.documentElement.clientHeight);return{width:a,height:b}},hasClass:function(a,b){return a.className.match(new RegExp("(\\s|^)"+b+"(\\s|$)"))},addClass:function(a,b){this.hasClass(a,b)||(a.className+=" "+b)},removeClass:function(a,b){this.hasClass(a,b)&&(a.className=a.className.replace(new RegExp("(\\s|^)"+b+"(\\s|$)")," "))}};h.SHOWDIV={showFrame:function(a){var b=t.byId(a.TR_ElementId);if(b){var d=t.offset(b).top+b.offsetHeight+20,g=a.TR_Params;g?show({top:d,TR_Width:a.TR_Width,TR_Height:a.TR_Height,TR_Params:g,TR_DefaultPath:a.TR_DefaultPath||"",TR_OtherPath:a.TR_OtherPath||"",follow:b}):alert("Please Enter Params")}}}})(window);