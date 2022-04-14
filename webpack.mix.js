const mix = require('laravel-mix');
const {InjectManifest} = require('workbox-webpack-plugin');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
    plugins: [
        new InjectManifest({
            swSrc: './resources/js/serviceWorkerConfiguration.js', // custom file to configurate service worker
            swDest: 'serviceworker.js', // the service-worker will automatically written to public, so no path is needed
            //precache all offline stuff
            additionalManifestEntries: [
                {url: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap', revision: null},
                {url: 'https://fonts.gstatic.com/s/nunito/v23/XRXV3I6Li01BKofINeaBTMnFcQ.woff2', revision: null },
                {url: 'img/offline.png', revision: '1'}
            ],
            //we dont need to precache our inline.css, we dont want to precache our fonts. ohterwise we would cache all fallback fonts
            exclude: ['css/inline.css', new RegExp('fonts/*')]
        })
    ],
    output: {
        //add this, otherwise workbox would look for example in http://js/app.js
        publicPath: ''
    }
})


mix.postCss('resources/css/first_site.css', 'public/css')
    .postCss('resources/css/second_site.css', 'public/css')
    .postCss('resources/css/offline.css', 'public/css')
    .postCss('resources/css/inline.css', 'public/css')
    .js('resources/js/serviceWorkerLoader.js', 'public/js/app.js')
    .copy('resources/img', 'public/img')
    .version()
