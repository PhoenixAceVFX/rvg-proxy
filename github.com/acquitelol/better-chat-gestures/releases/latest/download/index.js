(function(D,c,e,_,a,I,Y,t,h,H){"use strict";var C={Failed:t.getAssetIDByName("Small"),Delete:t.getAssetIDByName("ic_message_delete"),Copy:t.getAssetIDByName("toast_copy_link"),Open:t.getAssetIDByName("ic_leave_stage"),Clipboard:t.getAssetIDByName("pending-alert"),Clock:t.getAssetIDByName("clock"),Forum:t.getAssetIDByName("ic_forum_channel"),Settings:{Toasts:{Settings:t.getAssetIDByName("ic_selection_checked_24px"),Failed:t.getAssetIDByName("ic_close_circle_24px")},Initial:t.getAssetIDByName("coffee"),Update:t.getAssetIDByName("discover"),Locale:t.getAssetIDByName("ic_locale_24px"),External:t.getAssetIDByName("ic_raised_hand_list"),Edit:t.getAssetIDByName("ic_edit_24px"),Reply:t.getAssetIDByName("ic_reply_24px")}},L={shadow:(r=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:r,shadowRadius:4.65,elevation:8}),displayToast:(r,s)=>{e.toasts.open({content:s=="clipboard"?`Copied ${r} to clipboard.`:r,source:s=="clipboard"?C.Clipboard:C.Settings.Initial})}},P={plugin:{source:"https://github.com/acquitelol/better-chat-gestures"},author:{profile:{"Rosie<3":"https://github.com/acquitelol"}}};const{TouchableOpacity:S,View:B,Image:G,Text:N,Animated:b}=I.General,M=c.findByProps("transitionToGuild"),O=c.findByStoreName("UserStore"),W=c.findByProps("showUserProfile"),p=e.stylesheet.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",...L.shadow()},image:{width:75,height:75,borderRadius:10,...L.shadow()},mainText:{opacity:.975,letterSpacing:.25},header:{color:h.semanticColors.HEADER_PRIMARY,fontFamily:e.constants.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:h.semanticColors.HEADER_SECONDARY,fontSize:12.75}});var q=({name:r,authors:s})=>{const n=e.React.useRef(new b.Value(1)).current,i=()=>b.spring(n,{toValue:1.1,duration:10,useNativeDriver:!0}).start(),l=()=>b.spring(n,{toValue:1,duration:250,useNativeDriver:!0}).start(),y=()=>W.showUserProfile({userId:O.getCurrentUser().id}),d={transform:[{scale:n}]};return e.React.createElement(e.React.Fragment,null,e.React.createElement(B,{style:p.container},e.React.createElement(S,{onPress:y,onPressIn:i,onPressOut:l},e.React.createElement(b.View,{style:d},e.React.createElement(G,{style:[p.image],source:{uri:O?.getCurrentUser()?.getAvatarURL()?.replace("webp","png")}}))),e.React.createElement(B,{style:p.textContainer},e.React.createElement(S,{onPress:()=>M.openURL(P.plugin.source)},e.React.createElement(N,{style:[p.mainText,p.header]},r)),e.React.createElement(B,{style:{flexDirection:"row"}},e.React.createElement(N,{style:[p.mainText,p.subHeader]},"A project by"),s.map((f,o,E)=>e.React.createElement(S,{onPress:()=>M.openURL(P.author.profile[f.name]??"https://github.com/")},e.React.createElement(N,{style:[p.mainText,p.subHeader,{paddingLeft:4,fontFamily:e.constants.Fonts.DISPLAY_BOLD,flexDirection:"row"}]},f.name,o<E.length-1?",":null)))))))};const{View:j,Text:z}=I.General,$=e.stylesheet.createThemedStyleSheet({text:{color:h.semanticColors.HEADER_SECONDARY,paddingLeft:"5.5%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:e.constants.Fonts.PRIMARY_BOLD,fontSize:12}});var U=({label:r,children:s})=>e.React.createElement(j,{style:{marginTop:10}},e.React.createElement(z,{style:[$.text,$.optionText]},r.toUpperCase()),s),g={Failed:t.getAssetIDByName("Small"),Delete:t.getAssetIDByName("ic_message_delete"),Copy:t.getAssetIDByName("toast_copy_link"),Open:t.getAssetIDByName("ic_leave_stage"),Clipboard:t.getAssetIDByName("pending-alert"),Clock:t.getAssetIDByName("clock"),Forum:t.getAssetIDByName("ic_forum_channel"),Settings:{Toasts:{Settings:t.getAssetIDByName("ic_selection_checked_24px"),Failed:t.getAssetIDByName("ic_close_circle_24px")},Initial:t.getAssetIDByName("coffee"),Update:t.getAssetIDByName("discover"),Locale:t.getAssetIDByName("ic_locale_24px"),External:t.getAssetIDByName("ic_raised_hand_list"),Edit:t.getAssetIDByName("ic_edit_24px"),Reply:t.getAssetIDByName("ic_reply_24px")}},m={shadow:(r=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:r,shadowRadius:4.65,elevation:8}),displayToast:(r,s)=>{e.toasts.open({content:s=="clipboard"?`Copied ${r} to clipboard.`:r,source:s=="clipboard"?g.Clipboard:g.Settings.Initial})}},K={plugin:{source:"https://github.com/acquitelol/better-chat-gestures"},author:{profile:{"Rosie<3":"https://github.com/acquitelol"}}};const{FormRow:u,FormSwitch:v,FormDivider:T,FormInput:X,FormText:J}=I.Forms,{ScrollView:Q,View:w,Text:Z}=I.General,A=parseInt(H.getDebugInfo()?.discord?.version.split(".")[0])>163?15:0,ee=c.findByProps("transitionToGuild","openURL"),R=e.stylesheet.createThemedStyleSheet({icon:{color:h.semanticColors.INTERACTIVE_NORMAL},item:{color:h.semanticColors.TEXT_MUTED,fontFamily:e.constants.Fonts.PRIMARY_MEDIUM},container:{width:"90%",marginLeft:"5%",borderRadius:10,backgroundColor:h.semanticColors.BACKGROUND_MOBILE_SECONDARY,...m.shadow()},subheaderText:{color:h.semanticColors.HEADER_SECONDARY,textAlign:"center",margin:10,marginBottom:50,letterSpacing:.25,fontFamily:e.constants.Fonts.PRIMARY_BOLD,fontSize:14},image:{width:"100%",maxWidth:350,borderRadius:10}});var te=()=>{Y.useProxy(a.storage);const[r,s]=e.React.useState(a.storage.tapUsernameMention),[n,i]=e.React.useState(a.storage.reply),[l,y]=e.React.useState(a.storage.userEdit),[d,f]=e.React.useState(a.storage.delay),o=e.ReactNative.Platform.OS==="android";return e.React.createElement(Q,null,e.React.createElement(q,{name:a.manifest.name,authors:a.manifest.authors}),e.React.createElement(w,{style:{marginTop:20}},e.React.createElement(U,{label:"Preferences"},e.React.createElement(w,{style:[R.container]},e.React.createElement(u,{label:"Tap Username to Mention",subLabel:`Allows you to tap on a username to mention them instead of opening their profile.${o?"This option is disabled on Android.":""}`,onLongPress:()=>m.displayToast("By default, Discord opens a profile when tapping on a username in chat. With this, it now mentions them, like on Android.","tooltip"),leading:e.React.createElement(u.Icon,{style:R.icon,source:r?g.Forum:g.Failed}),trailing:e.React.createElement(v,{style:{marginLeft:-A},value:o?!1:r,onValueChange:()=>{o||(a.storage.tapUsernameMention=!a.storage.tapUsernameMention,s(a.storage.tapUsernameMention))}}),disabled:o}),e.React.createElement(T,null),e.React.createElement(u,{label:`Double Tap To ${n?"Reply":"Edit"}`,subLabel:`Allows you to tap double tap on any messages to ${n?"reply to":"edit"} them.`,onLongPress:()=>m.displayToast("When double tapping on any messages, you can now start an edit!","tooltip"),leading:e.React.createElement(u.Icon,{style:R.icon,source:n?g.Settings.Reply:g.Settings.Edit}),trailing:e.React.createElement(v,{style:{marginLeft:-A},value:n,onValueChange:()=>{a.storage.reply=!a.storage.reply,i(a.storage.reply)}})}),e.React.createElement(T,null),e.React.createElement(u,{label:`${l?"Editing":"Replying"} to your own messages`,subLabel:`Allows you to tap double tap on any of your own messages to ${l?"reply to":"edit"} them.`,onLongPress:()=>m.displayToast(`When double tapping on any of your own messages, you can now ${l?"start an edit!":"reply to them!"}`,"tooltip"),leading:e.React.createElement(u.Icon,{style:R.icon,source:l?g.Settings.Edit:g.Settings.Reply}),trailing:e.React.createElement(v,{style:{marginLeft:-A},value:l,onValueChange:()=>{a.storage.userEdit=!a.storage.userEdit,y(a.storage.userEdit)}})}),e.React.createElement(T,null),e.React.createElement(X,{value:d,onChange:E=>{a.storage.delay=E==""?300:Number(E),f(d)},placeholder:"300",title:"Maximum Delay"}),e.React.createElement(T,null),e.React.createElement(J,{style:{padding:10}},"The maximum delay between taps until the double tap event is cancelled. This is 300ms by default."))),e.React.createElement(U,{label:"Source"},e.React.createElement(w,{style:R.container},e.React.createElement(u,{label:"Source",subLabel:`Open the repository of ${a.manifest.name} externally.`,onLongPress:()=>m.displayToast(`Opens the repository of ${a.manifest.name} on GitHub in an external page to view any source code of the plugin.`,"tooltip"),leading:e.React.createElement(u.Icon,{style:R.icon,source:g.Open}),trailing:()=>e.React.createElement(u.Arrow,{style:{marginLeft:-A}}),onPress:()=>ee.openURL(K.plugin.source)})))),e.React.createElement(Z,{style:R.subheaderText},`Build: (${a.manifest.hash.substring(0,8)})`))};const ae=c.findByName("Chat"),x=c.findByProps("insertText"),re=c.findByStoreName("ChannelStore"),F=c.findByStoreName("MessageStore"),V=c.findByStoreName("UserStore"),se=c.findByProps("sendMessage","startEditMessage"),k=c.findByProps("createPendingReply"),ne={unpatchChat:null,currentTapIndex:0,doubleTapState({state:r="UNKNOWN",nativeEvent:s}){const n={state:r,data:s};return r=="INCOMPLETE"&&Object.assign(n,{reason:{required:{taps:2,isAuthor:!0},received:{taps:n.data.taps,isAuthor:n.data.isAuthor}}}),console.log("DoubleTapState",n)},onLoad(){a.storage.tapUsernameMention??=e.ReactNative.Platform.select({android:!1,ios:!0,default:!0}),a.storage.reply??=!1,a.storage.delay??=300,this.unpatchChat=_.after("render",ae.prototype,(r,s)=>{Boolean(s.props?.onTapUsername)&&e.ReactNative.Platform.OS!=="android"&&_.instead("onTapUsername",s?.props,(n,i)=>{if(!a.storage.tapUsernameMention)return i.apply(this,n);const l=x.refs[0].current,{messageId:y}=n[0].nativeEvent,d=F.getMessage(l.props?.channel?.id,y);d&&x.insertText(`@${d.author.username}#${d.author.discriminator}`)}),Boolean(s.props?.onTapMessage)&&_.after("onTapMessage",s?.props,n=>{const{nativeEvent:i}=n[0],l=i.channelId,y=i.messageId;this.currentTapIndex++;let d=setTimeout(()=>{this.currentTapIndex=0},a.storage.delay);const f=re.getChannel(l),o=F.getMessage(l,y);if(Object.assign(i,{taps:this.currentTapIndex,content:o?.content,authorId:o?.author?.id,isAuthor:o?.author?.id===V.getCurrentUser()?.id}),this.currentTapIndex!==2)return this.doubleTapState({state:"INCOMPLETE",nativeEvent:i});if(clearTimeout(d),i?.authorId===V.getCurrentUser()?.id){if(a.storage.userEdit){const E=i.content;se.startEditMessage(l,y,E),x.focus()}else k.createPendingReply({channel:f,message:o,shouldMention:!0});return}a.storage.reply&&k.createPendingReply({channel:f,message:o,shouldMention:!0}),this.currentTapIndex=0,this.doubleTapState({state:"COMPLETE",nativeEvent:i})})})},onUnload(){this.unpatchChat?.()},settings:te};return D.default=ne,Object.defineProperty(D,"__esModule",{value:!0}),D})({},vendetta.metro,vendetta.metro.common,vendetta.patcher,vendetta.plugin,vendetta.ui.components,vendetta.storage,vendetta.ui.assets,vendetta.ui,vendetta.debug);
