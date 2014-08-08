Package.describe({
  summary: "pinterest badge: package for attaching Pinterest badges to images. See https://developers.pinterest.com/pin_it/"
});

Package.on_use(function (api, where) {
  if(api.export) {
    api.export('pinterestBadge');
  }
  api.add_files('widget/pinit_main.js', ['client']);
});
