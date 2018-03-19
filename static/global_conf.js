const GlobalConfigs = {
  pageTitle: "AZINO777mobile",
  navigationType: ProjectConsts.allNavigationTypes.singlePage,  //can be hamburger, singlePage, listMenu
  useIFramesEverywhere: false,
  homeSitePageUrl: "https://azinomobile.net/?project=azino777&source=mobiversion",
  menuItems: [
    //{icon: 'home', text: 'Главная', url:"https://azinomobile.net/?project=azino777&source=mobiversion"},
    {
      icon: 'list', text: 'Видео',
      url: "https://azinomobile.net/?project=azino777&source=mobiversion", notLoadToIFrame: true
    },
    //{icon: 'photo', text: 'Игры',
    // url:"https://azinomobile.net/?project=azino777&source=mobiversion"},
    {
      icon: 'info', text: 'О нас',
      url: "https://azinomobile.net/?project=azino777&source=mobiversion"
    },
    {
      icon: 'mail', text: 'Контакты',
      url: "https://azinomobile.net/?project=azino777&source=mobiversion"
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



