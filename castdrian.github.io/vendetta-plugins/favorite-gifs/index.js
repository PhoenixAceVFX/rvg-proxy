(setImmediate(async function(){let t="https://bunny-mod.github.io/plugins-proxy/"+"castdrian.github.io/discord-plugins/FavoriteGifs/",p=vendetta.plugin.id,s=vendetta.plugins,m=nativeModuleProxy.MMKVManager,o=(await m.getItem(p))??"{}";await m.setItem(t,o);s.removePlugin(p);s.installPlugin(t)}),({onUnload(){}}));