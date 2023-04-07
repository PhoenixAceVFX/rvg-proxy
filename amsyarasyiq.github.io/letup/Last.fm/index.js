(function(c,b,y,a,f,P,u,R,_,C,m){"use strict";function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t,n){return t&&w(e.prototype,t),n&&w(e,n),e}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s={DEFAULT_APP_NAME:"Music",DEFAULT_TIME_INTERVAL:5,APPLICATION_ID:"1054951789318909972",LFM_API_KEY:"615322f0047e12aedbc610d9d71f7430",LFM_DEFAULT_COVER_HASHES:["2a96cbd8b46e442fc41c2b86b821562f","c6f59c1e5e7240a4c0d427abd71f3dbb"]},S=y.findByProps("getAssetIds"),k=y.findByStoreName("PresenceStore");var I;(function(e){e[e.PLAYING=0]="PLAYING",e[e.STREAMING=1]="STREAMING",e[e.LISTENING=2]="LISTENING",e[e.COMPETING=5]="COMPETING"})(I||(I={}));async function O(){const e=new URLSearchParams({method:"user.getrecenttracks",user:o.username,api_key:s.LFM_API_KEY,format:"json",limit:"1",extended:"1"}).toString(),t=await fetch(`https://ws.audioscrobbler.com/2.0/?${e}`);if(!t.ok)throw new Error(`Failed to fetch the latest scrobble: ${t.statusText}`);const n=await t.json(),r=n?.recenttracks?.track?.[0];if(!r)throw n;return{name:r.name,artist:r.artist.name,album:r.album["#text"],albumArt:await M(r.image[3]["#text"]),url:r.url,date:r.date?.["#text"]??"now",nowPlaying:!!r["@attr"]?.nowplaying,loved:r.loved==="1"}}async function M(e){return s.LFM_DEFAULT_COVER_HASHES.some(function(t){return e.includes(t)})?null:e}function d(){return i.lastActivity&&l("--> Clearing activity..."),L(null)}function L(e){i.pluginStopped&&(console.log("--> Plugin is unloaded, aborting..."),i.updateInterval&&clearInterval(i.updateInterval),e=null),i.lastActivity=e,a.FluxDispatcher.dispatch({type:"LOCAL_ACTIVITY_UPDATE",activity:e})}async function V(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:s.APPLICATION_ID;return e?typeof e=="string"?(await S.getAssetIds(t,[e]))[0]:await S.getAssetIds(t,e):null}async function N(){if(l("--> Fetching last track..."),!o.username)throw _.showToast("Last.fm username is not set!",u.getAssetIDByName("Small")),h(),new Error("Username is not set");if(o.ignoreSpotify){for(const n of k.getActivities(A.getCurrentUser().id))if(n?.type===I.LISTENING&&n.application_id!==s.APPLICATION_ID){l("--> Spotify is currently playing, aborting..."),d();return}}const e=await O().catch(async function(n){throw l("--> An error occurred while fetching the last track, aborting..."),d(),n});if(!e.nowPlaying){l("--> Last track is not currently playing, aborting..."),d();return}if(l("--> Track fetched!"),i.lastTrackUrl===e.url){l("--> Last track is the same as the previous one, aborting...");return}const t={name:o.appName||s.DEFAULT_APP_NAME,flags:0,type:o.listeningTo?2:0,details:e.name,state:`by ${e.artist}`,application_id:s.APPLICATION_ID};if(i.lastTrackUrl=e.url,t.name.includes("{{"))for(const n in e)t.name=t.name.replace(`{{${n}}}`,e[n]);o.showTimestamp&&(t.timestamps={start:Date.now()/1e3|0}),e.album&&(t.assets={large_image:await V(e.albumArt),large_text:`on ${e.album}`}),l("--> Setting activity..."),l(t);try{L(t)}catch(n){throw l("--> An error occurred while setting the activity"),d(),n}l("--> Successfully set activity!")}function h(){console.log("--> Flushing..."),i.lastActivity=null,i.lastTrackUrl=null,i.updateInterval&&clearInterval(i.updateInterval),d()}async function E(){if(console.log("--> Initializing..."),i.pluginStopped)throw new Error("Plugin is already stopped!");h();let e=0;await N().catch(function(t){console.error(t),e++}),i.updateInterval=setInterval(function(){return N().then(function(){e=0}).catch(function(t){console.error(t),++e>3&&(console.error("Failed to fetch/set activity 3 times, aborting..."),h())})},(Number(o.timeInterval)||s.DEFAULT_TIME_INTERVAL)*1e3)}const{FormInput:v,FormDivider:g,FormSwitchRow:p,FormText:B,FormIcon:T}=R.Forms;function x(){async function e(){for(const t in f.storage)(f.storage[t]===!1||f.storage[t])&&(o[t]=f.storage[t]);console.log("Applying settings..."),await E(),_.showToast("Settings updated!",u.getAssetIDByName("Check"))}return a.React.createElement(m.TouchableOpacity,{onPress:e},a.React.createElement(B,{style:{marginRight:12}},"UPDATE"))}function G(){const e=P.useProxy(f.storage),t=a.NavigationNative.useNavigation();return C.useEffect(function(){t.setOptions({title:"Last.fm Configuration",headerRight:x})},[]),a.React.createElement(m.ScrollView,null,a.React.createElement(v,{value:e.appName||void 0,onChangeText:function(n){return e.appName=n.trim()},title:"Discord Application Name",placeholder:s.DEFAULT_APP_NAME,returnKeyType:"done"}),a.React.createElement(g,null),a.React.createElement(v,{required:!0,value:e.username||void 0,onChangeText:function(n){return e.username=n.trim()},title:"Last.fm username",helpText:!e.username&&a.React.createElement(m.Text,{style:{color:"#FF0000"}},"This field is required!"),placeholder:"wumpus123",returnKeyType:"done"}),a.React.createElement(g,null),a.React.createElement(v,{value:e.timeInterval,onChangeText:function(n){return e.timeInterval=n},title:"Update interval (in seconds)",placeholder:s.DEFAULT_TIME_INTERVAL.toString(),keyboardType:"numeric",returnKeyType:"done"}),a.React.createElement(g,null),a.React.createElement(p,{label:"Show time elapsed",subLabel:"Show the time elapsed since the song started playing",leading:a.React.createElement(T,{source:u.getAssetIDByName("clock")}),value:e.showTimestamp,onValueChange:function(n){return e.showTimestamp=n}}),a.React.createElement(g,null),a.React.createElement(p,{label:"Set status as listening",subLabel:'Set your status as "Listening to" instead of "Playing"',leading:a.React.createElement(T,{source:u.getAssetIDByName("ic_headset_neutral")}),value:e.listeningTo,onValueChange:function(n){return e.listeningTo=n}}),a.React.createElement(g,null),a.React.createElement(p,{label:"Hide when Spotify is running",subLabel:"Hide the status when a Spotify activity is detected",leading:a.React.createElement(T,{source:u.getAssetIDByName("img_account_sync_spotify_light_and_dark")}),value:e.ignoreSpotify,onValueChange:function(n){return e.ignoreSpotify=n}}),a.React.createElement(g,null),a.React.createElement(p,{label:"Verbose logging",subLabel:"Log more information to the console for debugging purposes",leading:a.React.createElement(T,{source:u.getAssetIDByName("pencil")}),value:e.verboseLogging,onValueChange:function(n){return e.verboseLogging=n}}))}const i={};b.plugin.storage.ignoreSpotify??=!0;const o={...b.plugin.storage},A=y.findByStoreName("UserStore"),Y=y.findByProps("SET_ACTIVITY").SET_ACTIVITY,l=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return o.verboseLogging&&console.log(...t)};var $=new(function(){function e(){F(this,e),U(this,"settings",G)}return D(e,[{key:"onLoad",value:function(){console.log("Starting last.fm plugin.."),i.pluginStopped=!1,A.getCurrentUser()&&(console.log("User is already logged in, initializing..."),E().catch(console.error)),a.FluxDispatcher.subscribe("CONNECTION_OPEN",function(){E().catch(console.error)})}},{key:"onUnload",value:function(){console.log("Stopping last.fm..."),i.pluginStopped=!0,h()}}]),e}());return c.SET_ACTIVITY=Y,c.UserStore=A,c.currentSettings=o,c.default=$,c.global=i,c.verboseLog=l,Object.defineProperty(c,"__esModule",{value:!0}),c})({},vendetta,vendetta.metro,vendetta.metro.common,vendetta.plugin,vendetta.storage,vendetta.ui.assets,vendetta.ui.components,vendetta.ui.toasts,window.React,vendetta.metro.common.ReactNative);
