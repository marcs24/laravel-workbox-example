import {precacheAndRoute} from 'workbox-precaching';
import {offlineFallback} from 'workbox-recipes';
import {setDefaultHandler, registerRoute } from 'workbox-routing';
import {NetworkOnly, CacheFirst} from 'workbox-strategies';

//offline fallback, try to get document, if it fails, call precached offline page
setDefaultHandler(new NetworkOnly())
offlineFallback({
    pageFallback: '/offline'
})

//i guess its better to add fonts manually if they needed. if you wouldnt do that, you would download all fallback fonts.
registerRoute(
    new RegExp(`/fonts/bubbler-.*`),
    new CacheFirst({
        cacheName: 'fonts',
    })
);

precacheAndRoute(self.__WB_MANIFEST, {ignoreURLParametersMatching: [/.*/]});

