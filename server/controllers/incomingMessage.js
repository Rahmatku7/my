const _0x874496=_0x22cb;function _0x22cb(_0x431254,_0x3f300f){const _0x4464d2=_0x4464();return _0x22cb=function(_0x22cbe7,_0x1f8cab){_0x22cbe7=_0x22cbe7-0xfe;let _0x574c6c=_0x4464d2[_0x22cbe7];return _0x574c6c;},_0x22cb(_0x431254,_0x3f300f);}(function(_0x2e7033,_0x4197e5){const _0x23d160=_0x22cb,_0x286419=_0x2e7033();while(!![]){try{const _0x4a4536=parseInt(_0x23d160(0x111))/0x1+-parseInt(_0x23d160(0x11f))/0x2*(-parseInt(_0x23d160(0x116))/0x3)+parseInt(_0x23d160(0x118))/0x4+parseInt(_0x23d160(0x10c))/0x5*(-parseInt(_0x23d160(0x10e))/0x6)+parseInt(_0x23d160(0x109))/0x7*(-parseInt(_0x23d160(0x11a))/0x8)+parseInt(_0x23d160(0x10b))/0x9*(parseInt(_0x23d160(0x121))/0xa)+-parseInt(_0x23d160(0x122))/0xb;if(_0x4a4536===_0x4197e5)break;else _0x286419['push'](_0x286419['shift']());}catch(_0x20631f){_0x286419['push'](_0x286419['shift']());}}}(_0x4464,0xbfa7c));const {dbQuery}=require('../database/index'),{parseIncomingMessage}=require('../lib/helper');function _0x4464(){const _0x8c04a6=['object','pushName','Personal','../database/model','user','285845wOjpTh','application/json;\x20charset=utf-8','3123KOSbQt','4724095IlQpgq','reply_when','6GdEyAY','reply','data','433201HjyOMA','error\x20send\x20webhook','status@broadcast','includes','log','5379OdRZXf','parse','4961784HoELYM','config','104okpkfd','env','remoteJid','length','quoted','1418WZmKAZ','Group','9730NktYXK','11240031yRKPGC','messages','key','replace','stringify','is_quoted','@g.us'];_0x4464=function(){return _0x8c04a6;};return _0x4464();}require('dotenv')[_0x874496(0x119)]();const axios=require('axios'),{isExistsEqualCommand,isExistsContainCommand,getUrlWebhook}=require(_0x874496(0x107)),IncomingMessage=async(_0x1f20a0,_0x52dd4a)=>{const _0xf92fa5=_0x874496;try{let _0x406e25=![];if(!_0x1f20a0[_0xf92fa5(0xfe)])return;_0x1f20a0=_0x1f20a0['messages'][0x0];const _0x357af7=_0x1f20a0?.[_0xf92fa5(0x105)]||'';if(_0x1f20a0[_0xf92fa5(0xff)]['fromMe']===!![])return;if(_0x1f20a0[_0xf92fa5(0xff)]['remoteJid']===_0xf92fa5(0x113))return;const {command:_0x71d7b7,bufferImage:_0x212791,from:_0x23143c}=await parseIncomingMessage(_0x1f20a0);let _0x3a8121,_0x2624c9;const _0xb73c49=_0x52dd4a[_0xf92fa5(0x108)]['id']['split'](':')[0x0],_0x1b0ee1=await isExistsEqualCommand(_0x71d7b7,_0xb73c49);_0x1b0ee1['length']>0x0?_0x2624c9=_0x1b0ee1:_0x2624c9=await isExistsContainCommand(_0x71d7b7,_0xb73c49);if(_0x2624c9[_0xf92fa5(0x11d)]===0x0){const _0x27da60=await getUrlWebhook(_0xb73c49);if(_0x27da60==null)return;const _0x1ecca4=await sendWebhook({'command':_0x71d7b7,'bufferImage':_0x212791,'from':_0x23143c,'url':_0x27da60});if(_0x1ecca4===![])return;if(_0x1ecca4===undefined)return;if(typeof _0x1ecca4!=_0xf92fa5(0x104))return;_0x406e25=_0x1ecca4?.[_0xf92fa5(0x11e)]?!![]:![],_0x3a8121=JSON[_0xf92fa5(0x101)](_0x1ecca4);}else{replyorno=_0x2624c9[0x0][_0xf92fa5(0x10d)]=='All'?!![]:_0x2624c9[0x0][_0xf92fa5(0x10d)]==_0xf92fa5(0x120)&&_0x1f20a0[_0xf92fa5(0xff)]['remoteJid'][_0xf92fa5(0x114)](_0xf92fa5(0x103))?!![]:_0x2624c9[0x0]['reply_when']==_0xf92fa5(0x106)&&!_0x1f20a0[_0xf92fa5(0xff)]['remoteJid'][_0xf92fa5(0x114)]('@g.us')?!![]:![];if(replyorno===![])return;_0x406e25=_0x2624c9[0x0][_0xf92fa5(0x102)]?!![]:![],_0x3a8121=process[_0xf92fa5(0x11b)]['TYPE_SERVER']==='hosting'?_0x2624c9[0x0]['reply']:JSON['stringify'](_0x2624c9[0x0][_0xf92fa5(0x10f)]);}return _0x3a8121=_0x3a8121[_0xf92fa5(0x100)](/{name}/g,_0x357af7),await _0x52dd4a['sendMessage'](_0x1f20a0['key'][_0xf92fa5(0x11c)],JSON[_0xf92fa5(0x117)](_0x3a8121),{'quoted':_0x406e25?_0x1f20a0:null})['catch'](_0x5ba400=>{const _0x2f86db=_0xf92fa5;console[_0x2f86db(0x115)](_0x5ba400);}),!![];}catch(_0x2e0086){console[_0xf92fa5(0x115)](_0x2e0086);}};async function sendWebhook({command:_0x12f7a1,bufferImage:_0x1d3f26,from:_0x28c156,url:_0x254b2f}){const _0x4e6b55=_0x874496;try{const _0x9a3967={'message':_0x12f7a1,'bufferImage':_0x1d3f26==undefined?null:_0x1d3f26,'from':_0x28c156},_0x157144={'Content-Type':_0x4e6b55(0x10a)},_0xa4a588=await axios['post'](_0x254b2f,_0x9a3967,_0x157144)['catch'](()=>{return![];});return _0xa4a588[_0x4e6b55(0x110)];}catch(_0x48f002){return console[_0x4e6b55(0x115)](_0x4e6b55(0x112),_0x48f002),![];}}module['exports']={'IncomingMessage':IncomingMessage};