const iconPath = '../../assets/icons';
const extension = '.png';

export const icons = {
  LOCATION: require(`${iconPath}/location${extension}`),
  CALENDAR: require(`${iconPath}/CalendarBlank${extension}`),
  BUILDINGS: require(`${iconPath}/Buildings${extension}`),
};

export const Appcolors = {
  PRIMARY: '#38274C',
  LIGHT_PRIMARY: 'rgba(56,39,76,.25)',
  WHITE: '#ffffff',
  DARK_GREY: '#090909',
  LIGHT_GREY: '#707070',
  GREEN: '#58B258',
  LIGHT_GREEN: 'rgba(88,178,88,.25)',
  BLACK: 'black',
  WARNING: '#FF8B00',
  LIGHT_WARNING: 'rgba(255,139,0,.25)',
  DANGER: '#FB5252',
};
export const Appfonts = {
  BLACK: 'AirbnbCerealBlack', // 900
  BOLD: 'AirbnbCerealBold', // 700
  BOOK: 'AirbnbCerealBook',
  EXTRABOLD: 'AirbnbCerealExtraBold', // 600
  LIGHT: 'AirbnbCerealLight', // 300
  MEDIUM: 'AirbnbCerealMedium',
};
