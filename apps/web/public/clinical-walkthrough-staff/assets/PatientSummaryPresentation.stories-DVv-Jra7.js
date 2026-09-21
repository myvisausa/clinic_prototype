import{a as S}from"./patientSummaryDemoData-Bk6VwbJn.js";import{P as h}from"./PatientSummaryFixture-C09FVTfc.js";import"./iframe-CYpDSHvy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cpuic7qo.js";import"./index-BUaUHCjB.js";import"./calendar-DCiv9SFc.js";import"./isSameMonth-D-tzWMx8.js";import"./popover-JILixuuP.js";import"./enums-agdC3-Ro.js";import"./SettingsResourceList-BK3B9AFP.js";import"./tooltip-COaH6-eL.js";import"./createModuleTranslationContext-DYE5m3Qo.js";import"./triangle-alert-CxPNYFjy.js";import"./businessDay-SWQTHDzY.js";import"./DialogFooterActions-D-MWxQlb.js";const P={title:"Clinical/Patients/Summary",component:h},e={},a={args:{variant:S.Current}},s={args:{locale:"es"}},r={args:{onLessonNavigate:l=>window.parent.postMessage({type:"walkthrough:navigate",route:`/clinical/pacientes?contactId=fixture-patient&section=${l==="chart"?"chart":"evolutions"}`},window.location.origin)}},o={args:{...r.args,locale:"es"}},t={args:{mode:"empty"}},n={args:{mode:"loading"}},c={args:{mode:"error"}},i={args:{failedWrite:!0}},p={args:{failedRefresh:!0}},m={args:{readOnly:!0}},d={args:{restricted:!0}},u={args:{mode:"long",narrow:!0}},g={globals:{theme:"dark"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'error'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    failedWrite: true
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const b=["Contextual","Current","Spanish","TrainingEnglish","TrainingSpanish","Empty","Loading","HistoryError","FailedWriteKeepsDraft","SavedButRefreshFailed","ReadOnly","Restricted","LongContentNarrow","Dark"];export{e as Contextual,a as Current,g as Dark,t as Empty,i as FailedWriteKeepsDraft,c as HistoryError,n as Loading,u as LongContentNarrow,m as ReadOnly,d as Restricted,p as SavedButRefreshFailed,s as Spanish,r as TrainingEnglish,o as TrainingSpanish,b as __namedExportsOrder,P as default};
