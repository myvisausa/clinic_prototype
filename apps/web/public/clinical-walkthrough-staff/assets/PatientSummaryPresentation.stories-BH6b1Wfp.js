import{C as S}from"./clinicalNavigationVariant-B5CWoaox.js";import{P as h}from"./PatientSummaryFixture-eyS1eOZZ.js";import"./iframe-C812RI-m.js";import"./preload-helper-PPVm8Dsz.js";import"./enums-spLnuVm3.js";import"./booking-7zhlFmS_.js";import"./dialog-B5kVYiLC.js";import"./index-DgQannX7.js";import"./index-BuQDuk1U.js";import"./index-Bj9Wd2ya.js";import"./messageContentText-CWa_w80f.js";import"./languageUtils-Dq1C--pt.js";import"./select-qJPDq8VG.js";import"./index-eDkfWtVo.js";import"./tooltip-DRTEg52c.js";import"./useLocale-DcO9ov69.js";import"./createModuleTranslationContext-BTqNB9nN.js";import"./patientSummaryDemoData-BWtXoaGI.js";import"./calendar-eWos2Vur.js";import"./isSameMonth-D-tzWMx8.js";import"./popover-CX7CPsoe.js";import"./calendar-DPSryyn8.js";import"./SettingsResourceList-mInCkFw8.js";import"./triangle-alert-Cw9ZzGl0.js";import"./UnsavedNavigationGuard-S9Juta3R.js";import"./ConfirmDialog-DYjNjMrh.js";import"./businessDay-B4bmBOty.js";import"./DialogFooterActions-1MOPc8As.js";const z={title:"Clinical/Patients/Summary",component:h},e={},a={args:{variant:S.Current}},o={args:{locale:"es"}},r={args:{onLessonNavigate:l=>window.parent.postMessage({type:"walkthrough:navigate",route:`/clinical/pacientes?contactId=fixture-patient&section=${l==="chart"?"chart":"evolutions"}`},window.location.origin)}},s={args:{...r.args,locale:"es"}},t={args:{mode:"empty"}},n={args:{mode:"loading"}},i={args:{mode:"error"}},c={args:{failedWrite:!0}},p={args:{failedRefresh:!0}},m={args:{readOnly:!0}},d={args:{restricted:!0}},u={args:{mode:"long",narrow:!0}},g={globals:{theme:"dark"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
