Package.describe({
  name: 'clinical:theming-ui',
  version: '0.3.1',
  summary: 'Theming component for ClinicalFramework.',
  git: 'https://github.com/clinical-meteor/clinical-theming-ui',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('grove:less@0.1.1');
  api.use('session');

  api.use('clinical:theming@0.4.10');
  api.use('clinical:fonts@1.0.0')
  api.use("clinical:barcode@3.0.0");
  api.use('clinical:glass-ui@1.3.9');
  api.use('clinical:router@2.0.17');

  api.imply('clinical:glass-ui');

  api.addFiles('client/components/themingCard/themingCard.html', 'client');
  api.addFiles('client/components/themingCard/themingCard.js', 'client');
  api.addFiles('client/components/themingCard/themingCard.less', 'client');

  api.addFiles('client/components/themingPage/themingPage.html', 'client');
  api.addFiles('client/components/themingPage/themingPage.js', 'client');

  api.addFiles('client/components/themingActionButtons/themingActionButtons.html', 'client');
  //api.addFiles('client/components/themingActionButtons/themingActionButtons.js', 'client');

  api.imply('clinical:theming');
});



Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:theming-ui');
});
