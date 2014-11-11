Package.describe({
  name: 'pchiappetti:mapboxgl',
  summary: 'Wrapper for MapboxGL JS Library',
  version: '0.4.0',
  git: 'https://github.com/p4bloch/mapboxgl.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('css/mapbox-gl.v0.4.0.css', 'client');
  api.addFiles('js/mapbox-gl.v0.4.0.js', 'client');
});