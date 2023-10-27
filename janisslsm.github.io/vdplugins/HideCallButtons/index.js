(function(d,u,r,l,m,e,g,D,R){"use strict";const{FormDivider:P,FormIcon:v,FormSwitchRow:y}=D.Forms;function M(){return R.useProxy(e.storage),React.createElement(g.ReactNative.ScrollView,null,React.createElement(y,{label:"Hide from user profile",subLabel:"Hide call buttons from user profile",leading:React.createElement(v,{source:l.getAssetIDByName("ic_profile_24px")}),onValueChange:function(o){e.storage.hideUserProfile=o},value:e.storage.hideUserProfile}),React.createElement(P,null),React.createElement(y,{label:"Hide from DM",subLabel:"Hide call buttons from DM title bar",leading:React.createElement(v,{source:l.getAssetIDByName("ic_dm")}),onValueChange:function(o){return e.storage.hideDMTitlebar=o},value:e.storage.hideDMTitlebar}))}let c=[];var _={onLoad:function(){e.storage.hideUserProfile??=!0,e.storage.hideDMTitlebar??=!1;const o=u.findByName("UserProfileActions",!1),B=u.findByName("ChannelActions",!1),N=l.getAssetIDByName("ic_video"),T=u.findByName("Header",!1);c.push(r.after("default",o,function(b,n){if(!e.storage.hideUserProfile)return;const t=m.findInReactTree(n,function(i){return i?.props?.children[1]?.props?.icon==N})?.props?.children;if(t!==void 0)return delete t[0],delete t[1],[n]})),c.push(r.after("default",B,function(b,n){if(!e.storage.hideDMTitlebar)return;const t=n?.props?.children?.type;if(t?.type?.name!=="PrivateChannelButtons")return;const i=r.after("type",t,function(f,s){const a=s?.props?.children;a!==void 0&&(delete a[0],delete a[1],i())});return[n]})),c.push(r.after("default",T,function(b,n){if(!e.storage.hideDMTitlebar)return;const t=m.findInReactTree(n,function(f){return f?.type?.name=="_default"});if(t===void 0)return;const i=r.after("type",t,function(f,s){if(s?.type===void 0)return;const a=r.after("type",s,function(A,p){if(p?.type===void 0)return;const U=r.after("type",p,function(E,h){delete h?.props?.buttons[0],delete h?.props?.buttons[1],U()});a()});i()});return[n]}))},onUnload:function(){for(const o of c)o()},settings:M};return d.default=_,Object.defineProperty(d,"__esModule",{value:!0}),d})({},vendetta.metro,vendetta.patcher,vendetta.ui.assets,vendetta.utils,vendetta.plugin,vendetta.metro.common,vendetta.ui.components,vendetta.storage);
