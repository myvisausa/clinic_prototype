import{a as S}from"./patientSummaryDemoData-DpEQoRe-.js";import{P as h}from"./PatientSummaryFixture-NoxD3UFB.js";import"./iframe-eRWCDrzS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5vlBC5F.js";import"./index-Go1lqJSN.js";import"./calendar-BGUWi_rq.js";import"./isSameMonth-D-tzWMx8.js";import"./popover-7wSzxd9B.js";import"./enums-CwWXyEJD.js";import"./SettingsResourceList-C62Rh79N.js";import"./select-B6CY0bhQ.js";import"./booking-0kekz-0K.js";import"./tooltip-CrwmIoF6.js";import"./useLocale-C98eL8qG.js";import"./messageContentText-CFQwwtYm.js";import"./createModuleTranslationContext-RLSyD_Jk.js";import"./triangle-alert-CwDO4WgH.js";import"./businessDay-CKloMIlC.js";import"./DialogFooterActions-DcynrcES.js";const I={title:"Clinical/Patients/Summary",component:h},e={},a={args:{variant:S.Current}},s={args:{locale:"es"}},r={args:{onLessonNavigate:l=>window.parent.postMessage({type:"walkthrough:navigate",route:`/clinical/pacientes?contactId=fixture-patient&section=${l==="chart"?"chart":"evolutions"}`},window.location.origin)}},o={args:{...r.args,locale:"es"}},t={args:{mode:"empty"}},n={args:{mode:"loading"}},i={args:{mode:"error"}},c={args:{failedWrite:!0}},p={args:{failedRefresh:!0}},m={args:{readOnly:!0}},d={args:{restricted:!0}},u={args:{mode:"long",narrow:!0}},g={globals:{theme:"dark"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: ClinicalNavigationVariant.Current
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'es'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    onLessonNavigate: panel => window.parent.postMessage({
      type: 'walkthrough:navigate',
      route: \`/clinical/pacientes?contactId=fixture-patient&section=\${panel === 'chart' ? 'chart' : 'evolutions'}\`
    }, window.location.origin)
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...TrainingEnglish.args,
    locale: 'es'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const K=["Contextual","Current","Spanish","TrainingEnglish","TrainingSpanish","Empty","Loading","HistoryError","FailedWriteKeepsDraft","SavedButRefreshFailed","ReadOnly","Restricted","LongContentNarrow","Dark"];export{e as Contextual,a as Current,g as Dark,t as Empty,c as FailedWriteKeepsDraft,i as HistoryError,n as Loading,u as LongContentNarrow,m as ReadOnly,d as Restricted,p as SavedButRefreshFailed,s as Spanish,r as TrainingEnglish,o as TrainingSpanish,K as __namedExportsOrder,I as default};
