import{j as o,r as t}from"./iframe-_Qq2oHDl.js";const n=t.createContext(void 0),a=({children:e,locale:r,text:s})=>o.jsx(n.Provider,{value:{locale:r,text:s},children:e}),u=()=>{const e=t.useContext(n);if(!e)throw new Error("useSettingsTranslation must be used within a SettingsTranslationProvider");return e};a.__docgenInfo={description:"",methods:[],displayName:"SettingsTranslationProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},locale:{required:!0,tsType:{name:"Extract",elements:[{name:"SupportedLanguage"},{name:"unknown[number]",raw:"(typeof settingsLocales)[number]"}],raw:`Extract<
  SupportedLanguage,
  (typeof settingsLocales)[number]
>`},description:""},text:{required:!0,tsType:{name:"SettingsText"},description:""}}};export{a as S,u};
