const GlobalConfigs = {
  pageTitle: "AZINO777mobile",
  navigationType: ProjectConsts.allNavigationTypes.singlePage,  //can be hamburger, singlePage, listMenu
  useIFramesEverywhere: false,
  homeSitePageUrl: "https://azinomobile.net/?project=azino777&author=newlyki-tlt&source=mobile&type=apps&roll=280218",
  menuItems: [
    //{icon: 'home', text: 'Главная', url:"https://azinomobile.net/?project=azino777&author=newlyki-tlt&source=mobile&type=apps&roll=280218"},
    {
      icon: 'list', text: 'Видео',
      url: "https://azinomobile.net/?project=azino777&author=newlyki-tlt&source=mobile&type=apps&roll=280218", notLoadToIFrame: true
    },
    //{icon: 'photo', text: 'Игры',
    // url:"https://azinomobile.net/?project=azino777&author=newlyki-tlt&source=mobile&type=apps&roll=280218"},
    {
      icon: 'info', text: 'О нас',
      url: "https://azinomobile.net/?project=azino777&author=newlyki-tlt&source=mobile&type=apps&roll=280218"
    },
    {
      icon: 'mail', text: 'Контакты',
      url: "https://azinomobile.net/?project=azino777&author=newlyki-tlt&source=mobile&type=apps&roll=280218"
    },
    {
      icon: 'group', text: 'О разработчике', url: "",
      onClick: function () {
        CSharp.AboutDeveloper();
      }
    }
  ],
  styling: {
    isDarkTheme: 0,
    menuColor: "deep-purple lighten-3", //from https://vuetifyjs.com/style/colors
    showLogo: false,
    showTitleInMenu: true,
    isMenuFlat: false
  }
}



