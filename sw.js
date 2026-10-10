// Key Engineering report app — tiny helper that lets the app show notifications on iPad/phone.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type:'window', includeUncontrolled:true}).then(list => {
    for(const c of list){ if('focus' in c) return c.focus(); }
    return self.clients.openWindow('./');
  }));
});
