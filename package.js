Package.describe({
  summary: "pinterest badge: package for attaching Pinterest badges to images. See https://developers.pinterest.com/pin_it/"
});

Package.on_use(function (api, where) {
  api.add_files('widgets/pinit_main.js', ['client']);
});
