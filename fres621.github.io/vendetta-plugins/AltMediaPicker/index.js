(function(i,t,l){"use strict";const h=t.findByStoreName("SelectedChannelStore");function c(n){t.findByProps("launchImageLibrary").launchImageLibrary({mediaType:"photo"},function(d){let{assets:a}=d;a&&(a=a.slice(0,10),a.forEach(function(e){t.findByProps("handleAttachFile").handleSelectKeyboardItem(n,{node:{image:{playableDuration:0,height:e.height,filename:e.fileName,width:e.width,mimeType:e.type,uri:e.uri},type:"ALAssetTypePhoto"}},!1,{target:0},void 0)}))})}function r(){return l.instead("handleAttachFile",t.findByProps("handleAttachFile"),function(n,d){c(h.getChannelId())})}let o=[];var u={onLoad:function(){o.push(r())},onUnload:function(){for(const n of o)n()}};return i.default=u,Object.defineProperty(i,"__esModule",{value:!0}),i})({},vendetta.metro,vendetta.patcher);
