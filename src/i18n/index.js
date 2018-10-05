import I18n from 'react-native-i18n';
import en from './en';
import settings from 'app/config/settings';

// import moment translation files:

//import moment from 'moment';
//import 'moment/locale/uk';


I18n.translations = {
  en,
};

// I18n.availableLocales = Object.keys(I18n.translations);

I18n.missingBehaviour='guess';

const extension = {
  availableLocales: Object.keys(I18n.translations),
  fallbacks: true,
  setLanguage(language){
    I18n.locale = language;
    //moment.locale(language);
  },
}

Object.assign(I18n, extension);

let language = settings.defaultLanguage;
I18n.setLanguage(language);

export default I18n; 