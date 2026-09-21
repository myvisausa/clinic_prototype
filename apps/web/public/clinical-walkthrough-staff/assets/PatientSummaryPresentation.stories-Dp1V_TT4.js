import{C as S}from"./clinicalNavigationVariant-B5CWoaox.js";import{P as h}from"./PatientSummaryFixture-DOtWO_PI.js";import"./iframe-kKXEeGnc.js";import"./preload-helper-PPVm8Dsz.js";import"./enums-spLnuVm3.js";import"./booking-CCVWZGa6.js";import"./dialog-BR0UkY8O.js";import"./index-I6XJj2C0.js";import"./index-CDHUGHxk.js";import"./index-CGEKrzXJ.js";import"./messageContentText-CFQwwtYm.js";import"./languageUtils-BQXO69VB.js";import"./select-By5HCmSM.js";import"./index-CH4gus5G.js";import"./tooltip-BOakxFdx.js";import"./useLocale-Ca5I1Baf.js";import"./createModuleTranslationContext-BvmjLAwA.js";import"./patientSummaryDemoData-BIno3LeJ.js";import"./calendar-OwgARZ65.js";import"./isSameMonth-D-tzWMx8.js";import"./popover-DrfyNZN4.js";import"./calendar-DMrzGX2t.js";import"./SettingsResourceList-GoDovBRm.js";import"./triangle-alert-6UtUxloy.js";import"./UnsavedNavigationGuard-B5-IL6tk.js";import"./ConfirmDialog-BrsCOMEL.js";import"./businessDay-Bs5yif6W.js";import"./DialogFooterActions-DqSpDxNb.js";const z={title:"Clinical/Patients/Summary",component:h},e={},a={args:{variant:S.Current}},o={args:{locale:"es"}},r={args:{onLessonNavigate:l=>window.parent.postMessage({type:"walkthrough:navigate",route:`/clinical/pacientes?contactId=fixture-patient&section=${l==="chart"?"chart":"evolutions"}`},window.location.origin)}},s={args:{...r.args,locale:"es"}},t={args:{mode:"empty"}},n={args:{mode:"loading"}},i={args:{mode:"error"}},c={args:{failedWrite:!0}},p={args:{failedRefresh:!0}},m={args:{readOnly:!0}},d={args:{restricted:!0}},u={args:{mode:"long",narrow:!0}},g={globals:{theme:"dark"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: ClinicalNavigationVariant.Current
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'es'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    onLessonNavigate: panel => window.parent.postMessage({
      type: 'walkthrough:navigate',
      route: \`/clinical/pacientes?contactId=fixture-patient&section=\${panel === 'chart' ? 'chart' : 'evolutions'}\`
    }, window.location.origin)
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...TrainingEnglish.args,
    locale: 'es'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'empty'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'loading'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'error'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    failedWrite: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    failedRefresh: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    restricted: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'long',
    narrow: true
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'dark'
  }
}`,...g.parameters?.docs?.source}}};const A=["Contextual","Current","Spanish","TrainingEnglish","TrainingSpanish","Empty","Loading","HistoryError","FailedWriteKeepsDraft","SavedButRefreshFailed","ReadOnly","Restricted","LongContentNarrow","Dark"];export{e as Contextual,a as Current,g as Dark,t as Empty,c as FailedWriteKeepsDraft,i as HistoryError,n as Loading,u as LongContentNarrow,m as ReadOnly,d as Restricted,p as SavedButRefreshFailed,o as Spanish,r as TrainingEnglish,s as TrainingSpanish,A as __namedExportsOrder,z as default};
