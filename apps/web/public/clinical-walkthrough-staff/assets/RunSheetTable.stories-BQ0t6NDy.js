import{j as a,r as g}from"./iframe-eRWCDrzS.js";import{C as p,c as S}from"./booking-0kekz-0K.js";import{R as l,e as c,a as C}from"./es-Cxk24BcI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5vlBC5F.js";import"./index-Go1lqJSN.js";import"./dropdown-menu-D0Jfqep8.js";import"./tooltip-CrwmIoF6.js";import"./index-BgwLwyQH.js";import"./chevron-right-BFXxOnWq.js";import"./table-Dq0Rq0M5.js";import"./table-interactions-DDukP2El.js";import"./popover-7wSzxd9B.js";import"./ellipsis-DKUQSY4-.js";import"./SettingsResourceList-C62Rh79N.js";import"./select-B6CY0bhQ.js";import"./AppointmentStatusPath-CfQtSkjz.js";import"./locationsSlice-DDDVtTg7.js";import"./settingsFeaturePermissions-S6ljqtad.js";import"./badge-c3iBdbjB.js";import"./tabs-BnJAs8D1.js";import"./appointmentStatusUi-D0-aSYtY.js";import"./providerBadgeColor-CTTbZdZb.js";import"./switch-QR6xDubT.js";import"./index-DiHqDPVA.js";import"./enums-CwWXyEJD.js";const m={statusScheduled:"Scheduled",statusConfirmed:"Confirmed",statusArrived:"Arrived",statusInProgress:"In progress",statusCompleted:"Completed",statusNoShow:"No show",statusCancelled:"Cancelled"},h={statusScheduled:"Programada",statusConfirmed:"Confirmada",statusArrived:"Llegó",statusInProgress:"En atención",statusCompleted:"Completada",statusNoShow:"No asistió",statusCancelled:"Cancelada"},u=Array.from({length:10},(r,e)=>({kind:"row",row:{kind:p.APPOINTMENT,eventId:`fixture-${e}`,startTime:`2026-09-15T${String(13+e).padStart(2,"0")}:00:00.000Z`,endTime:`2026-09-15T${String(13+e).padStart(2,"0")}:30:00.000Z`,timezone:"America/Bogota",durationMinutes:30,status:S.SCHEDULED,patientName:e===0?"Alexandria Longitudinal Patient Name That Needs Inspection":`Fixture patient ${e+1}`,hostUserId:"dr-ruiz",providerName:"Ruiz",providerInitials:"CR",title:"Consulta",event:{eventId:`fixture-${e}`,eventKind:p.APPOINTMENT},isLate:!1}}));function f({variant:r="dashboard",locale:e="en"}){const t=e==="es"?C:c;return a.jsx(l,{variant:r,lines:u,selectedEventId:null,onSelect:()=>{},onCancel:()=>{},onCreateAt:()=>{},loading:!1,translations:t,statusLabels:e==="es"?h:m,timeZone:"America/Bogota"})}const q={title:"Clinical/Agenda table",component:f},s={},o={args:{variant:"schedule"}},n={render:()=>a.jsx(l,{variant:"dashboard",lines:[],selectedEventId:null,onSelect:()=>{},onCancel:()=>{},onCreateAt:()=>{},loading:!1,translations:c,statusLabels:m,timeZone:"America/Bogota"})},i={args:{locale:"es"},parameters:{layout:"fullscreen"},globals:{viewport:{value:"iphone5",isRotated:!1}}},d={render:()=>a.jsx(E,{})};function E(){const[r,e]=g.useState("fixture-0");return a.jsx(l,{variant:"dashboard",lines:u,selectedEventId:r,onSelect:t=>e(t.eventId),onCancel:()=>{},onCreateAt:()=>{},loading:!1,translations:c,statusLabels:m,timeZone:"America/Bogota",inlineDetail:{content:a.jsx("div",{className:"p-3",children:"Fixture appointment detail"}),onToggle:t=>e(v=>v===t.eventId?null:t.eventId)}})}s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'schedule'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <RunSheetTable variant="dashboard" lines={[]} selectedEventId={null} onSelect={() => undefined} onCancel={() => undefined} onCreateAt={() => undefined} loading={false} translations={en} statusLabels={statusLabels} timeZone="America/Bogota" />
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'es'
  },
  parameters: {
    layout: 'fullscreen'
  },
  globals: {
    viewport: {
      value: 'iphone5',
      isRotated: false
    }
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableFixture />
}`,...d.parameters?.docs?.source}}};const G=["CompactLongList","ScheduleVariant","Empty","SpanishNarrowShort","ExpandedDetails"];export{s as CompactLongList,n as Empty,d as ExpandedDetails,o as ScheduleVariant,i as SpanishNarrowShort,G as __namedExportsOrder,q as default};
