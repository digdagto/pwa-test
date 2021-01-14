if('serviceWorker' in navigator){
    window.addEventListener('load', function(){
        navigator.serviceWorker
        .register('../pwa/sw_cached_pages.js?v=1')
        .then(reg => console.log('service worker registered' + reg))
        .catch(err => console.log(`Service Worker: Error: ${err}`))
    });
}