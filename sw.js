const C='nixora-v19-fps-instancing-gizmo-20261011',F=['./','index.html','style.css','script.js','manifest.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)).catch(()=>{})));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('nixora-')&&k!==C).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{if(r&&r.ok){const x=r.clone();caches.open(C).then(c=>c.put(e.request,x)).catch(()=>{})}return r}).catch(()=>caches.match(e.request)))});
