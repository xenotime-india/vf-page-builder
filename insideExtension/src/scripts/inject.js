console.log('loading...');
var EnhanceLibIsLoaded = true;
(function() {
    var e = document.createElement('script');
    e.setAttribute('id', 'sb-script');
    e.setAttribute('mode', 'extension');
    e.setAttribute('src', 'https://xenotime-india.github.io/vf-page-builder/outsideExtension/dist/onload.bundle.js');
    document.body.appendChild(e);
})();