(function(r,g,m,c,l,o,h,y){"use strict";const{ScrollView:p}=l.General,{FormSwitchRow:b,FormIcon:w}=l.Forms;function v(){return h.useProxy(o.storage),React.createElement(p,null,React.createElement(b,{label:"NSFW Warning",subLabel:"Warn when sending an NSFW image in a non NSFW channel.",leading:React.createElement(w,{source:y.getAssetIDByName("ic_warning_24px")}),value:o.storage.nsfwwarn,onValueChange:function(t){return o.storage.nsfwwarn=t}}))}const f=c.findByProps("sendMessage","receiveMessage"),F=c.findByProps("getLastSelectedChannelId"),_=c.findByProps("createBotMessage"),A=c.findByProps("BOT_AVATARS");function d(t,n,s){const i=t??F?.getChannelId?.(),e=_.createBotMessage({channelId:i,content:"",embeds:s});e.author.username="Astolfo",e.author.avatar="Astolfo",A.BOT_AVATARS.Astolfo="https://i.pinimg.com/736x/50/77/1f/50771f45b1c015cfbb8b0853ba7b8521.jpg",typeof n=="string"?e.content=n:Object.assign(e,n),f.receiveMessage(i,e)}let u=[];u.push(g.registerCommand({name:"femboy",displayName:"femboy",description:"Get an image of a femboy",displayDescription:"Get an image of a femboy",options:[{name:"nsfw",displayName:"nsfw",description:"Get the result from r/femboys instead of r/femboy (NSFW)",displayDescription:"Get the result from r/femboys instead of r/femboy (NSFW)",required:!1,type:5},{name:"silent",displayName:"silent",description:"Makes it so only you can see the message.",displayDescription:"Makes it so only you can see the message.",required:!1,type:5}],applicationId:"-1",inputType:1,type:1,execute:async function(t,n){try{const s=t.find(function(a){return a.name==="nsfw"})?.value,i=t.find(function(a){return a.name==="silent"})?.value;let e=await fetch("https://www.reddit.com/r/femboy.json").then(function(a){return a.json()});if(!n.channel.nsfw_&&s&&o.storage.nsfwwarn&&!(i??!0)){d(n.channel.id,`This channel is not marked as NSFW
(You can disable this check in plugin settings)`,[]);return}s&&(e=await fetch("https://www.reddit.com/r/femboys.json").then(function(a){return a.json()})),e=e.data?.children?.[Math.floor(Math.random()*e.data?.children?.length)]?.data;let B=String(e?.url_overridden_by_dest??e?.url);const R={type:"rich",title:e?.title,url:`https://reddit.com${e?.permalink}`,image:{proxy_url:e?.url_overridden_by_dest.replace(/.gifv$/g,".gif")??e?.url.replace(/.gifv$/g,".gif"),url:e?.url_overridden_by_dest.replace(/.gifv$/g,".gif")??e?.url.replace(/.gifv$/g,".gif"),width:e?.preview?.images?.[0]?.source?.width,height:e?.preview?.images?.[0]?.source?.height},footer:{text:`Posted by u/${e?.author} in r/${e?.subreddit}`},color:"0xff0069"};i??!0?d(n.channel.id,"",[R]):f.sendMessage(n.channel.id,{content:B})}catch(s){m.logger.log(s),d(n.channel.id,"ERROR !!!!!!!!!!!! \u{1F62D}\u{1F62D}\u{1F62D} Check debug logs!! \u{1F97A}\u{1F97A}\u{1F97A}",[])}}}));const S=v,M=function(){o.storage.nsfwwarn??=!0},N=function(){for(const t of u)t()};return r.onLoad=M,r.onUnload=N,r.settings=S,r})({},vendetta.commands,vendetta,vendetta.metro,vendetta.ui.components,vendetta.plugin,vendetta.storage,vendetta.ui.assets);