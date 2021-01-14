if('serviceWorker' in navigator){
    window.addEventListener('load', function(){
        navigator.serviceWorker
        .register('sw_cached_pages.js')
        .then(reg => console.log('service worker registered' + reg))
        .catch(err => console.log(`Service Worker: Error: ${err}`))
    });
}