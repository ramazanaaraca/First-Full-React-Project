import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources =  {
    tr : {
        translation : {
          HeroText : "Never stop learning.Life never stops teaching!"
        }
    } ,

    en : {
        translation : {
          HeroText : "Öğrenmeyi asla bırakma. Hayat öğretmeyi asla bırakmaz!"
        }
    }
} 

i18n 
.use(initReactI18next)
.use(Backend)
.use(LanguageDetector)
 .init({
    lng:"En",
 })

 export default i18n