Session.setDefault('backgroundColor', 'green');
Session.setDefault("backgroundImgSrc", 'forest1.jpg');

Session.setDefault('isOpaque', 'opaque');
Session.setDefault('foregroundTheme', 'light');

Template.themingCard.helpers({
  getOpacityLevel: function (){
    return Session.get("glassOpacity");
  },
  imagesAreRegistered: function(){
    var theme = Session.get('ThemeConfig');
    if (theme && theme.background && theme.background.images && (theme.background.images.length > 0)) {
      return true;
    } else {
      return false;
    }
  },
  backgroundImages: function(){
    var theme = Session.get('ThemeConfig');
    if (theme && theme.background && theme.background.images && (theme.background.images.length > 0)) {
      return theme.background.images;
    } else {
      return [];
    }
  },
  getBackgroundImgSrcInput: function(){
    return Session.get('backgroundImgSrc');
  },
  navbarVisibleIsSelected: function(value){
    //var theme = Session.get('ThemeConfig')
    if (Session.get('showNavbars')) {
      return "background-color: " + Theme.getBackgroundColor('colorA') + "; color: " + Theme.getPaletteColor('colorE') + ";";
    } else {
      return "";
    }
  },
  navbarHiddenIsSelected: function(value){
    //var theme = Session.get('ThemeConfig')
    if (Session.get('showNavbars')) {
      return "";
    } else {
      return "background-color: " + Theme.getBackgroundColor('colorA') + "; color: " + Theme.getPaletteColor('colorE') + ";";
    }
  }
});


Template.themingCard.events({
  'click .visibleNavbarBtn': function(){
    Session.set('showNavbars', true);
  },
  'click .hiddenNavbarBtn': function(){
    Session.set('showNavbars', false);
  },
  'click .backgroundImageBtn': function(){
    Session.set('backgroundImgSrc', this.url);
    Theme.setBackgroundColor('image');
    Theme.setBackgroundUrl(this.url);
    Theme.paintBackgroundColor();
  },
  'click .cardWidthBtn': function (){
    Session.set('pageIsWide', false);
    Session.set('pageLeftToWestRule', false);
  },
  'click .pageWidthBtn': function (){
    Session.set('pageIsWide', true);
    Session.set('pageLeftToWestRule', true);
  },
  'keyup #appTitleInput': function (){
    Session.set('appTitle', $('#appTitleInput').val());
    Theme.setAppTitle($('#appTitleInput').val());
  },
  'change #appTitleInput': function (){
    Session.set('appTitle', $('#appTitleInput').val());
    Theme.setAppTitle($('#appTitleInput').val());
  },
  'click .fullNavBtn': function (){
    Session.set('navIsFullscreen', true);
  },
  'click .narrowNavBtn': function (){
    Session.set('navIsFullscreen', false);
  },
  'change #backgroundImgSrcInput': function (){
    Session.set('backgroundImgSrc', $('#backgroundImgSrcInput').val());
    Theme.setBackgroundUrl($('#backgroundImgSrcInput').val());
  },
  'click #lightBtn': function (){
    Session.set('foregroundTheme', 'light');
  },
  'click #darkBtn': function (){
    Session.set('foregroundTheme', 'dark');
  },

  'click #medbookBtn': function (){
    // $('body').attr("style", "background-size: auto !important; background-repeat: repeat; background-image: url('data:image/png;base64,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');");
    Theme.setBackgroundColor('medbook');
  },
  'click #gradientBtn': function (){
    // $('body').attr("style", "background-image: -webkit-linear-gradient(top, #555555, #aaaaaa 100%); background-image: -moz-linear-gradient(top, #555555, #aaaaaa 100%); background-image: -o-linear-gradient(top, #555555, #aaaaaa 100%); -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-repeat: no-repeat; background-attachment: fixed; -moz-user-select: none; -khtml-user-select: none;");
    Theme.setBackgroundColor('gradient');
  },

  'click #redBtn': function (){
    //Session.set('backgroundColor', 'red');
    //$('body').attr('style', "background-color: #A64C4C;  ");
    Theme.setBackgroundColor('maroon');
  },
  'click #blueBtn': function (){
    //Session.set('backgroundColor', 'blue');
    // $('body').attr('style', "background-color: #89cff0;  ");
    Theme.setBackgroundColor('blue');
  },
  'click #greenBtn': function (){
    // $('body').attr('style', "background-color: #AEC9A8;  ");
    //Session.set('backgroundColor', 'green');
    Theme.setBackgroundColor('green');
  },
  'click #whiteBtn': function (){
    // $('body').attr('style', "background-color: #ffffff;  ");
    //Session.set('backgroundColor', 'white');
    Theme.setBackgroundColor('white');
  },
  'click #grayBtn': function (){
    // $('body').attr('style', "background-color: #999999;  ");
    //Session.set('backgroundColor', 'white');
    Theme.setBackgroundColor('gray');
  },
  'click #lightGrayBtn': function (){
    // $('body').attr('style', "background-color: #cccccc;  ");
    //Session.set('backgroundColor', 'white');
    Theme.setBackgroundColor('lightgray');
  },
  'click #backgroundBtn': function () {
    //Session.toggle('show_background');
    if (Session.get('show_background')) {
      // $('body').addClass('forestBackground');
      // $('body').removeClass('greenBackground');
      $('body').attr('style', "background-color: #AEC9A8;  ");
    } else {
      // $('body').addClass('greenBackground');
      // $('body').removeClass('forestBackground');
      $('body').attr('style', "background: url('/forest1.jpg') no-repeat center center fixed; background-color: none;");
    }
    Session.toggle("show_background");
  },
  'click #opacityBtn': function () {
    if (Session.equals('isOpaque', 'opaque')) {
      Session.set("glassOpacity", 1.00);
      Session.set('isOpaque', 'high');
    } else if (Session.equals('isOpaque', 'high')) {
      Session.set("glassOpacity", 0.9);
      Session.set('isOpaque', 'low');
    } else if (Session.equals('isOpaque', 'low')) {
      Session.set("glassOpacity", 0.3);
      Session.set('isOpaque', 'opaque');
    }
  }
});
