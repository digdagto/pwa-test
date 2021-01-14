self.addEventListener('install', function(){
    console.log('Service Worker: Installed');
})

self.addEventListener('activate', function(){
    console.log("Service Worker: Activated");
})