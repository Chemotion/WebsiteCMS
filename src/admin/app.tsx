import type { StrapiApp } from "@strapi/strapi/admin";
import Logo from "./extensions/icon.png";

export default {
  config: {
    auth: { logo: Logo },
    menu: { logo: Logo },
    translations: {
      en: {
        "Auth.form.welcome.title": "Chemotion",
        "Auth.form.welcome.subtitle": "Log in to Chemotion CMS",
        "Auth.form.email.placeholder": "e.g. user@kit.edu",
        "app.components.LeftMenu.navbrand.title": "Chemotion Dashboard",
        "HomePage.head.title": "Chemotion",
        "HomePage.header.subtitle": "Welcome to your chemotion.net admin panel",
      },
    },
    tutorials: false,
    notifications: { releases: false },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
