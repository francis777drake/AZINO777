const GlobalConfigs = {
  pageTitle: "AZINO777",
  navigationType: ProjectConsts.allNavigationTypes.singlePage,  //can be hamburger, singlePage, listMenu
  useIFramesEverywhere: false,
  homeSitePageUrl: "https://go3.azinogo.com/?project=azino777&author=newlyki-alex-tlt&source=mobile&type=app&roll=280218",
  menuItems: [
    //{icon: 'home', text: 'Главная', url:"https://go3.azinogo.com/?project=azino777&author=newlyki-alex-tlt&source=mobile&type=app&roll=280218"},
    {
      icon: 'list', text: 'Видео',
      url: "https://go3.azinogo.com/?project=azino777&author=newlyki-alex-tlt&source=mobile&type=app&roll=280218", notLoadToIFrame: true
    },
    //{icon: 'photo', text: 'Игры',
    // url:"https://go3.azinogo.com/?project=azino777&author=newlyki-alex-tlt&source=mobile&type=app&roll=280218"},
    {
      icon: 'info', text: 'О нас',
      url: "https://go3.azinogo.com/?project=azino777&author=newlyki-alex-tlt&source=mobile&type=app&roll=280218"
    },
    {
      icon: 'mail', text: 'Контакты',
      url: "https://go3.azinogo.com/?project=azino777&author=newlyki-alex-tlt&source=mobile&type=app&roll=280218"
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



