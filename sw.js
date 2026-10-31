'use strict';
const CACHE='taylor-budget-app-v1',BASE=new URL('./',self.location.href).href;
const SHELL=['./','./index.html','./manifest.webmanifest','./icon.svg'].map(p=>new URL(p,BASE).href);
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('taylor-budget-app-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET'||!e.request.url.startsWith(BASE))return;
 const url=new URL(e.request.url);
 if(e.request.mode!=='navigate'&&!SHELL.includes(url.href))return;
 e.respondWith(fetch(e.request).then(response=>{
  if(response.ok){const copy=response.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}
  return response;
 }).catch(async()=>{const cached=await caches.match(e.request);if(cached)return cached;if(e.request.mode==='navigate')return caches.match(BASE+'index.html');return Response.error();}));
});
