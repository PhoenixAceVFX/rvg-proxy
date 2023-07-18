(function(w,p,S,d,M,R,a,L,m,G,b){"use strict";const{Text:V}=M.General,U=d.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:k}}=d.findByProps("colors","meta"),j=d.findByStoreName("UserStore"),$=d.findByStoreName("RelationshipStore"),F=d.findByStoreName("GuildMemberStore"),O=d.findByProps("TYPING_WRAPPER_HEIGHT");function H(){return S.after("default",O,function(e,i){let[{channel:o}]=e;if(!i||a.storage.hideTyping)return;const t=i.props?.children,l=k(U.theme,R.semanticColors.HEADER_SECONDARY),u=S.after("type",t,function(f,g){p.React.useEffect(function(){return function(){u()}},[]);const c=g?.props?.children?.[0]?.props?.children?.[1]?.props;if(!c||!c.children||c.children==="Several people are typing...")return;const n=O.useTypingUserIds(o.id).map(function(r){const s=F.getMember(o.guild_id,r),N=j.getUser(r),y=s?.nick||$.getNickname(r)||N.globalName||N.username,I=s?.colorString||l;return{displayName:y,displayColor:I}});function h(r){return p.React.createElement(V,{style:{color:r.displayColor,fontFamily:p.constants.Fonts.DISPLAY_BOLD}},r.displayName)}!n||n.length<1||(c.children=n.length===1?[h(n[0])," is typing..."]:[...n.slice(0,n.length-1).flatMap(function(r,s){return[h(r),s<n.length-2?", ":" and "]}),h(n[n.length-1])," are typing..."])})})}const Y=d.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:W}}=d.findByProps("colors","meta"),K=d.findByName("RowManager"),x=d.findByStoreName("GuildMemberStore");d.findByStoreName("SelectedChannelStore");const X=d.findByStoreName("ChannelStore");function C(e,i,o,t){if(e)return t=Object.assign([],t),t?t.push(e):t=[e],Array.isArray(e.content)?e.content.forEach(function(l,u){return e.content[u]=C(l,i,o,t)}):e.items?e.items.forEach(function(l,u){return e.items[u]=C(l,i,o,t)}):Array.isArray(e)&&e.forEach(function(l,u){return e[u]=C(l,i,o,t)}),e.type&&i.forEach(function(l){e=l(e,o,t)||e}),e}function z(e,i,o){const t=function(c){return c.match(/\w\w/g).map(function(n){return parseInt(n,16)})},l=function(c){return"#"+c.map(function(n){return n.toString(16).padStart(2,"0")}).join("")},u=t(e),f=t(i),g=u.map(function(c,n){return Math.round(c+(f[n]-c)*o)});return l(g)}function q(){return S.after("generate",K.prototype,function(e,i){let[o]=e,{message:t}=i;if((!a.storage.chatInterpolation||a.storage.chatInterpolation<=0)&&a.storage.noMention||o.rowType!=1||!t?.content)return;const l=t.channelId,u=X.getChannel(l);if(!u?.guild_id)return;const f=function(h){if(h.type!="mention"||!h.userId)return;const r=x.getMember(u.guild_id,h.userId)?.colorString;if(!r)return;const s=parseInt(r.slice(1),16);return{...h,roleColor:s,color:s,colorString:r}},g=W(Y.theme,R.semanticColors.TEXT_NORMAL),c=function(h,r,s){let[N]=r,y=s?.map(function(T){return T.type});if(y?.includes("mention")||y?.includes("channelMention")||y?.includes("roleMention")||y?.includes("commandMention")||y?.includes("link")||h.type!="text")return;const I=x.getMember(t.guildId,N);if(!(!I||!I.colorString))return{content:[h],target:"usernameOnClick",context:{username:1,usernameOnClick:{action:"0",userId:"0",linkColor:p.ReactNative.processColor(z(g,I.colorString,a.storage.chatInterpolation/100)),messageChannelId:"0"},medium:!0},type:"link"}};let n=[];a.storage.chatInterpolation>0&&n.push(c),a.storage.noMention||n.push(f),C({content:t.content},n,[t.authorId]),t.referencedMessage?.message?.content&&C({content:t.referencedMessage.message.content},n,[t.referencedMessage.message.authorId])})}const Q=d.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:J}}=d.findByProps("colors","meta");function Z(){return S.after("default",d.findByName("VoiceUserConnected",!1),function(e,i){let[o]=e;if(a.storage.noVoice)return;const t=S.after("render",i.type.prototype,function(l,u){t();let f=u.props?.children?.[1]?.props;f&&(f.style.color=o?.member?.colorString||J(Q.theme,R.semanticColors.CHANNELS_DEFAULT))})})}const{View:ee}=p.ReactNative,te=d.findByStoreName("GuildStore");console.log("Started");function ne(){return S.after("render",ee,function(e,i){if(a.storage.noRole)return;const o=L.findInReactTree(i,function(l){return l?.props?.roleId});if(!o||isNaN(o.props.roleId))return;let t={type:Object.assign({},o.type)};S.after("type",t.type,function(l,u){let f={type:Object.assign({},u.props.children[1].type)};S.after("render",f.type,function(g,c){let n=te.getGuild(o.props.guildId)?.roles?.[o.props.roleId];n.colorString&&c.props.style.push({color:n.colorString})}),u.props.children[1].type=f.type}),o.type=t.type})}function B(){return B=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},B.apply(this,arguments)}function oe(){return B.apply(this,arguments)}const{StyleSheet:re,PanResponder:ae}=p.ReactNative,_=d.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:P}}=d.findByProps("colors","meta"),{View:D}=M.General,{useState:ie,useRef:ce}=p.React,A={sliderOff:P(_.theme,R.semanticColors.DEPRECATED_QUICKSWITCHER_INPUT_BACKGROUND),sliderOn:P(_.theme,R.semanticColors.REDESIGN_BUTTON_PRIMARY_BACKGROUND),thumb:P(_.theme,R.semanticColors.MENTION_FOREGROUND)},se=function(e){let{onSlide:i,value:o}=e;const t=o||0,[l,u]=ie(0),f=ce(null);function g(r){f.current&&f.current.measure(function(s,N,y,I,T,Re){let ye=(r-T)/(y-T)*100;const Se=Math.min(Math.max(0,ye),100);i&&i(Se)})}const c=p.React.useRef(ae.create({onStartShouldSetPanResponder:function(r,s){return!0},onStartShouldSetPanResponderCapture:function(r,s){return!0},onMoveShouldSetPanResponder:function(r,s){return!0},onMoveShouldSetPanResponderCapture:function(r,s){return!0},onPanResponderGrant:function(r,s){g(s.x0)},onPanResponderMove:function(r,s){g(s.moveX)},onPanResponderTerminationRequest:function(r,s){return!0},onPanResponderRelease:function(r,s){},onPanResponderTerminate:function(r,s){},onShouldBlockNativeResponder:function(r,s){return!0}})).current;function n(r){u(r.nativeEvent.layout.width)}const h=re.create({container:{marginLeft:"5%",width:"90%",height:20,borderRadius:25,backgroundColor:A.sliderOff,marginBottom:25},slid:{width:t+"%",height:"100%",borderTopLeftRadius:25,borderBottomLeftRadius:25,borderRadius:t===100?25:0,backgroundColor:A.sliderOn,justifyContent:"center"},thumb:{height:"150%",aspectRatio:1,alignSelf:"flex-end",right:-(l/2),borderRadius:100,backgroundColor:A.thumb}});return p.React.createElement(D,oe({style:h.container},c.panHandlers,{ref:f}),p.React.createElement(D,{style:h.slid},p.React.createElement(D,{style:h.thumb,onLayout:n})))},{Text:le,View:ue}=M.General,de=d.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:fe}}=d.findByProps("colors","meta"),v={Typing:b.getAssetIDByName("ic_messages"),Mention:b.getAssetIDByName("ic_mention_user"),Text:b.getAssetIDByName("ic_add_text"),Voice:b.getAssetIDByName("ic_voice_channel_24px"),Role:b.getAssetIDByName("ic_person_shield")},he={text:fe(de.theme,R.semanticColors.TEXT_NORMAL)};function pe(e,i,o){const t=function(c){return c.match(/\w\w/g).map(function(n){return parseInt(n,16)})},l=function(c){return"#"+c.map(function(n){return n.toString(16).padStart(2,"0")}).join("")},u=t(e),f=t(i),g=u.map(function(c,n){return Math.round(c+(f[n]-c)*o)});return l(g)}function me(){return G.useProxy(a.storage),a.storage.chatInterpolation??=0,React.createElement(p.ReactNative.ScrollView,{style:{flex:1}},React.createElement(m.FormSection,{title:"Where to show the top role color?",titleStyleType:"no_border"},React.createElement(m.FormSwitchRow,{label:"Show in typing",subLabel:"Display the top role color in the typing bar.",leading:React.createElement(m.FormIcon,{source:v.Typing}),value:!a.storage.hideTyping,onValueChange:function(e){return a.storage.hideTyping=!e}}),React.createElement(m.FormSwitchRow,{label:"Show in mentions",subLabel:"Display the top role color in mentions in the chat.",leading:React.createElement(m.FormIcon,{source:v.Mention}),value:!a.storage.noMention,onValueChange:function(e){return a.storage.noMention=!e}}),React.createElement(m.FormSwitchRow,{label:"Show in member list",subLabel:"Display the top role color in the member list role section headers.",leading:React.createElement(m.FormIcon,{source:v.Role}),value:!a.storage.noRole,onValueChange:function(e){return a.storage.noRole=!e}}),React.createElement(ue,{style:{marginHorizontal:10,marginBottom:2}},React.createElement(M.HelpMessage,{messageType:0},"(Regarding option below) - Limitations cause text coloring to prevent interaction with the text. Instead, you'll have to press anywhere else in the message to open the context menu or use gestures.")),React.createElement(m.FormSwitchRow,{label:"Show in chat text",subLabel:"Display the top role color in the chat text... Why would you want this?",leading:React.createElement(m.FormIcon,{source:v.Text}),value:a.storage.chatInterpolation>0,onValueChange:function(e){a.storage.chatInterpolation=e?100:0}}),React.createElement(le,{style:{marginLeft:"5%",color:pe(he.text,"#ff0000",a.storage.chatInterpolation/100),fontFamily:p.constants.Fonts.DISPLAY_MEDIUM,fontSize:16,marginBottom:5,marginTop:-5}},"Color interpolation (for chat text):"),React.createElement(se,{onSlide:function(e){a.storage.chatInterpolation=e},value:a.storage.chatInterpolation,style:{marginBottom:0}}),React.createElement(m.FormSwitchRow,{label:"Show in voice channel member list",subLabel:"Display the top role color in the voice channel member list.",leading:React.createElement(m.FormIcon,{source:v.Voice}),value:!a.storage.noVoice,onValueChange:function(e){a.storage.noVoice=!e}})))}let E=[];var ge={onLoad:function(){E.push(H()),E.push(q()),E.push(Z()),E.push(ne())},onUnload:function(){for(const e of E)e()},settings:me};return w.default=ge,Object.defineProperty(w,"__esModule",{value:!0}),w})({},vendetta.metro.common,vendetta.patcher,vendetta.metro,vendetta.ui.components,vendetta.ui,vendetta.plugin,vendetta.utils,vendetta.ui.components.Forms,vendetta.storage,vendetta.ui.assets);
