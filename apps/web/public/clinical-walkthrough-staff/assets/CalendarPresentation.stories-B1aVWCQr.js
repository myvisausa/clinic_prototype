import{a as Be,r as u,q as Ke,j as l,S as Je}from"./iframe-_Qq2oHDl.js";import{D as Qe,a as Ye,d as et,g as je}from"./dialog-BGbo1fpY.js";import{y as lt,X as dt,U as ct,B as mt}from"./x-sx8FvuPz.js";import{C as V,V as Fe,j as P,l as $,k as G,m as E}from"./PageHeader-CVrqDtZW.js";import{u as ut,a as pt}from"./zod-BAboPCny.js";import{i as gt}from"./businessDay-DalCO41i.js";import{f as vt,g as ht}from"./display-BDu_xnd1.js";import{f as tt}from"./transport-D8D9uGtB.js";import{C as xe,a as at,A as yt,Z as F,e as Tt,b as ft,E as Ct}from"./SendBookingLinkDialog-BVDuJFUd.js";import{e as It,g as wt}from"./index-DxAL4Y07.js";import{U as Re}from"./nullableSelectValue-DkW7PXSi.js";import{P as kt}from"./PermissionsContext-CdgIej51.js";import{S as bt}from"./SessionStateProvider-Btrx_e2r.js";import{d as Dt,P as St}from"./useLocale-Bo0bMoxb.js";import{p as nt}from"./providerBadgeColor-CTTbZdZb.js";import{g as Et}from"./AppointmentStatusPath-BCHyMl6B.js";import{w as $e}from"./MeetingTypesService-UwYvj2gi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BKzJLQi1.js";import"./index-BkpR5O6n.js";import"./combobox-DMDA5wQj.js";import"./index-BGKy9DBk.js";import"./popover-BgLSGVOB.js";import"./badge-Ch67BCby.js";import"./calendar-BsIicc47.js";import"./chevron-left-Ds2xlQ42.js";import"./chevron-right-CQCUSKiH.js";import"./separator-epMfzLva.js";import"./trash-2-DQCay3ZH.js";import"./pencil-tsdt8GLc.js";import"./DialogFooterActions-CnmubIAy.js";import"./SettingsResourceList-SfuC8tcc.js";import"./select-Cn70C04O.js";import"./index-D7NxwOUJ.js";import"./index-LygKcKyn.js";import"./textarea-BNJ18zEf.js";import"./SingleDatePicker-BlfliCff.js";import"./calendar-C4dvNL8f.js";import"./ContactsService-Bj_3vfrM.js";import"./SearchableVirtualTable-qetJE0KO.js";import"./index-DUnaSBFX.js";import"./columns-3-BKTv8Vsp.js";import"./tooltip-NNwQlqd7.js";import"./search-BA9QH2St.js";import"./funnel-CGyFb8uJ.js";import"./PaymentStatus-DZ3a_8jQ.js";import"./receiptStatus-jSx7F-UI.js";import"./ConversationType-DoEZIisK.js";import"./money-Dfkqzy1P.js";import"./PaymentCurrency-C2AK9lD6.js";import"./index-C2yW7Qto.js";import"./useDisplayPreferences-Bj5OjKlL.js";import"./useViewerTimeZone-BpucxFoB.js";import"./SessionState-DGnq2o5k.js";import"./loginResponse-BG7w08ub.js";import"./settingsFeaturePermissions-DWyJWqsP.js";import"./sessionPrefs-DV-C6AkP.js";import"./useAuth-BoY0_idu.js";import"./hooks-DVqIG8W6.js";import"./messageContentText-CWa_w80f.js";import"./toPermissionSet-B8OVEv7V.js";import"./circle-QWTC1lCb.js";import"./circle-check-Uxrg1cY4.js";import"./play-D6Tx2g8S.js";import"./user-check-D0ceK3ma.js";const Q=[{id:"isabel",name:"Isabel Quintero",canCreate:!0},{id:"natalia",name:"Natalia Vélez",canCreate:!0},{id:"mateo",name:"Mateo Beltrán",canCreate:!0},{id:"santiago",name:"Santiago Duque",canCreate:!0}].map(r=>({...r,color:nt(r.id)})),it=[{id:"1",title:"Implant consultation",contact:"Elena García",service:"Implant consultation",start:"2026-09-18T14:00:00Z",end:"2026-09-18T15:00:00Z",hostId:"isabel",kind:"appointment",status:"Scheduled"},{id:"2",title:"Follow-up",contact:"Luis Moreno",service:"Follow-up",start:"2026-09-18T15:00:00Z",end:"2026-09-18T15:30:00Z",hostId:"isabel",kind:"appointment",status:"Arrived"},{id:"3",title:"Crown fitting",contact:"Ana Ruiz",service:"Crown fitting",start:"2026-09-18T15:00:00Z",end:"2026-09-18T17:00:00Z",hostId:"natalia",kind:"appointment",status:"Confirmed"},{id:"4",title:"Implant placement",contact:"Marta Castro",service:"Implant placement",start:"2026-09-18T16:00:00Z",end:"2026-09-18T18:30:00Z",hostId:"mateo",kind:"appointment",status:"Scheduled"},{id:"5",title:"Team meeting",start:"2026-09-18T18:00:00Z",end:"2026-09-18T19:00:00Z",hostId:"santiago",kind:"block"},{id:"6",title:"Document review",contact:"Sofia Rojas",service:"Document review",start:"2026-09-19T14:00:00Z",end:"2026-09-19T14:45:00Z",hostId:"isabel",kind:"appointment",status:"Scheduled"},{id:"7",title:"Initial consultation",contact:"Valeria Torres",service:"Initial consultation",start:"2026-09-21T16:00:00Z",end:"2026-09-21T17:00:00Z",hostId:"natalia",kind:"appointment",status:"Confirmed"}],st={today:"Today",day:"Day",week:"Week",month:"Month",agenda:"Agenda",myCalendar:"My calendar",allTeam:"All team members",newEvent:"New event",blockTime:"Block time",openDay:"Open day",openEvent:"Open event",noAppointments:"No appointments",loading:"Loading…",failedToLoadEvents:"Could not load appointments",previous:"Previous",next:"Next",calendarDate:"Calendar date",teamMember:"Team member",more:"more",appointments:"appointments",events:"events",starts:"starts",continues:"Continues",retry:"Retry",monthNavigator:"Jump to date",createAt:"Create at",hoursLoading:"Checking working hours…",hoursUnavailable:"Working hours unavailable; open time is unconfirmed.",markArrived:"Mark arrived",minutesAbbr:"min",allDay:"All day",google:"Google",whatsapp:"WhatsApp",detailsUnavailable:"Some calendar details could not be loaded."},Pt={...st,today:"Hoy",day:"Día",week:"Semana",month:"Mes",agenda:"Agenda",myCalendar:"Mi calendario",allTeam:"Todo el equipo",newEvent:"Nuevo evento",blockTime:"Bloquear tiempo",openDay:"Abrir día",openEvent:"Abrir evento",noAppointments:"Sin eventos",previous:"Anterior",next:"Siguiente",calendarDate:"Fecha del calendario",teamMember:"Profesional",more:"más",appointments:"citas",events:"eventos",starts:"inicios",continues:"Continúa",monthNavigator:"Ir a fecha",createAt:"Crear a las",allDay:"Todo el día",minutesAbbr:"min",google:"Google",whatsapp:"WhatsApp",retry:"Reintentar",loading:"Cargando…",failedToLoadEvents:"No se pudieron cargar los eventos",hoursLoading:"Consultando horarios…",hoursUnavailable:"Horarios no disponibles",markArrived:"Registrar llegada",detailsUnavailable:"Algunos detalles no están disponibles"},At=[{id:"visa-1",title:"Initial consultation",contact:"Daniel Reyes",service:"Initial consultation",start:"2026-09-18T15:00:00Z",end:"2026-09-18T16:00:00Z",hostId:"isabel",kind:"appointment"},{id:"visa-2",title:"Document review",contact:"Lucía Peña",service:"Document review",start:"2026-09-18T16:00:00Z",end:"2026-09-18T16:30:00Z",hostId:"natalia",kind:"appointment"},{id:"generic-1",title:"Internal planning meeting",start:"2026-09-18T18:00:00Z",end:"2026-09-18T19:00:00Z",hostId:"mateo",kind:"appointment"}],Ze=[...it,{id:"overlap",title:"Urgent follow-up",contact:"Pablo Ríos",start:"2026-09-18T15:20:00Z",end:"2026-09-18T15:50:00Z",hostId:"isabel",kind:"appointment"},{id:"absence",title:"Time off",start:"2026-09-18T06:00:00Z",end:"2026-09-20T06:00:00Z",hostId:"santiago",kind:"block",allDay:!0},{id:"google",title:"External consultation",start:"2026-09-18T20:00:00Z",end:"2026-09-18T21:00:00Z",hostId:"natalia",kind:"appointment",source:"google"},{id:"unmatched:call",title:"Unmatched WhatsApp call",start:"2026-09-18T22:00:00Z",end:"2026-09-18T22:30:00Z",kind:"warning",source:"whatsapp"}];function O({initialView:r,initialPerson:s,initialDay:f="2026-09-18",fixtureNow:i="2026-09-18T16:00:00Z",fullDay:k=!1,fixtureEvents:A=it,theme:R=Be.Light,loading:e=!1,error:o=!1,locale:d="en",timeZone:x="America/Denver",narrow:H=!1,extendedHours:U=!1,delayedLoad:v=!1,contextual:p=!1}){u.useLayoutEffect(()=>{const n=document.documentElement,t=Ke(null,R).cssVariables;for(const[g,y]of Object.entries(t))n.style.setProperty(g,y);return()=>{for(const[g,y]of Object.entries(Ke(null,Be.Light).cssVariables))n.style.setProperty(g,y)}},[R]);const[h,I]=u.useState(r),[N,L]=u.useState(f),[b,M]=u.useState(s),[D,w]=u.useState(""),a=d.startsWith("es")?"En modo práctica, esta acción no crea nada aquí.":"In practice mode, this action does not create anything here.",[c,m]=u.useState(()=>new Set),[S,Z]=u.useState(!v),[j,Ve]=u.useState(new Date(`${N}T12:00:00Z`));u.useEffect(()=>{if(!v)return;const n=window.setTimeout(()=>Z(!0),800);return()=>window.clearTimeout(n)},[v]);const W=S?A:[],Le=W.filter(n=>b==="all"||n.hostId===b||!n.hostId),Me=new Map(xe.monthDays(tt(j)).map(n=>[n,xe.appointmentCount(Le,n,x)])),q=new Map(W.filter(n=>n.kind==="appointment").map(n=>[n.id,{event:{locationId:"walkthrough",eventId:n.id,meetingTypeId:"clinical-consultation",eventLocationId:"walkthrough",title:n.title,startTime:n.start,endTime:n.end,hostUserId:n.hostId??"isabel",participants:n.contact?[{id:`contact-${n.id}`,type:E.CONTACT,role:G.ATTENDEE,status:$.ACCEPTED}]:void 0,status:c.has(n.id)?P.ARRIVED:n.status==="Confirmed"?P.CONFIRMED:n.status==="Arrived"?P.ARRIVED:P.SCHEDULED,timezone:x,visibilityLevel:Fe.TEAM,isAllDay:n.allDay??!1,dateAdded:"2026-09-01T00:00:00Z",createdBy:"isabel",eventKind:V.APPOINTMENT},contact:n.contact?{name:n.contact,phone:"+57 300 555 0184"}:void 0,payerName:"Clínica Salud"}]));return l.jsx(Je,{lang:d,children:l.jsxs("div",{style:H?{width:375,height:700}:{height:780},children:[l.jsx(at,{view:h,enableAgendaView:p,day:N,selectedPerson:b==="all"?{kind:"all"}:{kind:"person",id:b},currentUserId:"isabel",resources:Q,events:W.map(n=>({...n,hostName:n.hostName??Q.find(t=>t.id===n.hostId)?.name,providerColor:Q.find(t=>t.id===n.hostId)?.color})),agendaDetails:q,agendaStatusLabels:{statusScheduled:d.startsWith("es")?"Programada":"Scheduled",statusConfirmed:d.startsWith("es")?"Confirmada":"Confirmed",statusArrived:d.startsWith("es")?"Llegó":"Arrived",statusInProgress:d.startsWith("es")?"En curso":"In progress",statusCompleted:d.startsWith("es")?"Completada":"Completed",statusNoShow:d.startsWith("es")?"No asistió":"No show",statusCancelled:d.startsWith("es")?"Cancelada":"Cancelled"},onMarkArrived:n=>m(t=>new Set(t).add(n)),availability:Q.map(n=>({hostId:n.id,day:N,startHour:k?0:U&&n.id==="isabel"?7:9,endHour:k?24:U&&n.id==="isabel"?21:17,ready:!0})),timeZone:x,now:i,calendarScopeKey:"calendar-presentation-story",navigatorMonth:j,navigatorCounts:Me,onNavigatorMonthChange:Ve,locale:d,startHour:k?0:7,endHour:k?24:19,copy:d.startsWith("es")?Pt:st,loading:e||!S,error:o,onViewChange:I,onDayChange:L,onPersonChange:n=>M(n.kind==="all"?"all":n.id),onEventClick:w,onSlotClick:n=>w(`Create ${n.startUtc} ${n.hostId??""}`),onNewEvent:()=>w(a),onBlockTime:()=>w(a)}),q.has(D)?l.jsx(Qe,{open:!0,onOpenChange:n=>!n&&w(""),children:l.jsxs(Ye,{children:[l.jsx(et,{children:l.jsx(je,{children:d.startsWith("es")?"Detalle de la cita":"Appointment details"})}),l.jsx(yt,{...q.get(D),displayTimeZone:x,displayLocale:d,allDayLabel:d.startsWith("es")?"Todo el día":"All day",onMarkArrived:n=>m(t=>new Set(t).add(n)),translations:{statusScheduled:d.startsWith("es")?"Programada":"Scheduled",statusConfirmed:d.startsWith("es")?"Confirmada":"Confirmed",statusArrived:d.startsWith("es")?"Llegó":"Arrived",statusInProgress:d.startsWith("es")?"En curso":"In progress",statusCompleted:d.startsWith("es")?"Completada":"Completed",statusNoShow:d.startsWith("es")?"No asistió":"No show",statusCancelled:d.startsWith("es")?"Cancelada":"Cancelled",markArrived:d.startsWith("es")?"Registrar llegada":"Mark arrived",minutesAbbr:"min"}})]})}):D&&l.jsxs("div",{role:"status",className:"fixed bottom-4 right-4 z-50 rounded-md border bg-card px-3 py-2 shadow-lg",children:[D," ",l.jsx("button",{type:"button",className:"ml-2 text-primary",onClick:()=>w(""),children:"Close"})]})]})})}const ja={title:"Scheduling/Calendar",component:O},Y={args:{initialView:"day",initialPerson:"all"}},ee={args:{initialView:"day",initialPerson:"isabel"}},te={args:{initialView:"day",initialPerson:"isabel",delayedLoad:!0,extendedHours:!0,fixtureEvents:Ze}},ae={args:{initialView:"day",initialPerson:"santiago",fixtureEvents:[{id:"all-day-1",title:"Training",start:"2026-09-18T06:00:00Z",end:"2026-09-19T06:00:00Z",hostId:"santiago",kind:"block",allDay:!0},{id:"all-day-2",title:"Conference",start:"2026-09-18T06:00:00Z",end:"2026-09-19T06:00:00Z",hostId:"santiago",kind:"block",allDay:!0},{id:"all-day-3",title:"Travel",start:"2026-09-18T06:00:00Z",end:"2026-09-19T06:00:00Z",hostId:"santiago",kind:"block",allDay:!0}]}},ne={args:{initialView:"day",initialPerson:"isabel",initialDay:"2026-03-08",fixtureNow:"2026-03-08T09:30:00Z",fullDay:!0,fixtureEvents:[{id:"spring-visit",title:"Post-transition visit",start:"2026-03-08T09:30:00Z",end:"2026-03-08T10:30:00Z",hostId:"isabel",kind:"appointment"}]}},ie={args:{initialView:"day",initialPerson:"isabel",initialDay:"2026-11-01",fixtureNow:"2026-11-01T08:30:00Z",fullDay:!0,fixtureEvents:[{id:"first-occurrence",title:"First occurrence",start:"2026-11-01T07:30:00Z",end:"2026-11-01T08:00:00Z",hostId:"isabel",kind:"appointment"},{id:"second-occurrence",title:"Second occurrence",start:"2026-11-01T08:30:00Z",end:"2026-11-01T09:00:00Z",hostId:"isabel",kind:"appointment"}]}},se={args:{initialView:"week",initialPerson:"all"}},re={args:{initialView:"week",initialPerson:"isabel"}},oe={args:{initialView:"month",initialPerson:"all"}},le={args:{initialView:"agenda",initialPerson:"all",contextual:!0}},de={args:{initialView:"agenda",initialPerson:"all",contextual:!0,locale:"es"}},z={args:{initialView:"agenda",initialPerson:"isabel",contextual:!0,initialDay:"2026-09-21",fixtureNow:"2026-09-21T15:00:00Z",timeZone:"America/Bogota",fixtureEvents:[{id:"valeria-visit",title:"Valeria Torres · Initial consultation",contact:"Valeria Torres",service:"Initial consultation",start:"2026-09-21T15:00:00Z",end:"2026-09-21T15:30:00Z",hostId:"isabel",hostName:"Alex Demo",kind:"appointment",status:"Scheduled"}]}},ce={args:{...z.args,locale:"es"}},me={args:{initialView:"day",initialPerson:"all",fixtureEvents:[]}},ue={args:{initialView:"day",initialPerson:"all",fixtureEvents:At}},pe={args:{initialView:"day",initialPerson:"all",fixtureEvents:Ze}},ge={args:{initialView:"month",initialPerson:"all",fixtureEvents:Ze}},ve={args:{initialView:"day",initialPerson:"all",fixtureEvents:[],loading:!0}},he={args:{initialView:"day",initialPerson:"all",fixtureEvents:[],error:!0}},ye={args:{initialView:"day",initialPerson:"all",theme:Be.Dark}},Te={args:{initialView:"week",initialPerson:"all",locale:"es"}},fe={args:{initialView:"day",initialPerson:"all",narrow:!0}},Ce={args:{initialView:"month",initialPerson:"all",timeZone:"Asia/Tokyo"}},Ie={args:{initialView:"month",initialPerson:"all",timeZone:"Pacific/Honolulu"}},we={args:{initialView:"day",initialPerson:"all",extendedHours:!0,fixtureEvents:Ze}},C="walkthrough",T="America/Bogota",rt="2026-09-21T14:30:00Z",Ue=[{id:"demo-provider",name:"Alex Demo",canCreate:!0},{id:"dr-ruiz",name:"Carolina Ruiz",canCreate:!0}].map(r=>({...r,color:nt(r.id)}));function Ge(r,s,f){return{locationId:C,userId:r,teamId:"walkthrough-team",accountId:"walkthrough-account",firstName:s,lastName:f,preferredName:s,email:`${r}@clinica.example`,phoneNumber:"",role:mt.USER,dateAdded:"2026-09-01T00:00:00Z",isActive:!0,laneAccess:ct.MIXED}}const We=[Ge("demo-provider","Alex","Demo"),Ge("dr-ruiz","Carolina","Ruiz")],Ne=new Map([["contact-mateo",{name:"Mateo Ramírez",phone:"+57 300 555 0142"}],["contact-sofia",{name:"Sofía Castro",phone:"+57 300 555 0163"}],["contact-valeria",{name:"Valeria Torres",phone:"+57 300 555 0184"}]]);function qe(r,s,f,i){return{locationId:C,meetingTypeId:r,name:s,slug:"",duration:f,bufferTime:0,color:i,isActive:!0,hostUserIds:["demo-provider","dr-ruiz"]}}const K=[qe("valoracion","Consulta de valoración",60,"var(--chart-1)"),qe("control","Control",30,"var(--chart-2)"),qe("higiene","Higiene y profilaxis",45,"var(--chart-3)")],ot=[{id:"clinica-salud",name:"Clínica Salud"},{id:"particular",name:"Particular"}];function Ae(r){return{locationId:C,eventId:r.eventId,meetingTypeId:r.meetingTypeId,eventLocationId:C,title:r.title,startTime:r.startTime,endTime:r.endTime,timezone:T,hostUserId:"demo-provider",participants:[{id:"demo-provider",type:E.USER,role:G.HOST,status:$.ACCEPTED},{id:r.contactId,type:E.CONTACT,role:G.ATTENDEE,status:$.PENDING}],visibilityLevel:Fe.TEAM,isAllDay:!1,dateAdded:"2026-09-14T00:00:00Z",createdBy:"demo-provider",status:r.status,eventKind:V.APPOINTMENT,payerId:r.payerId??"clinica-salud"}}const Oe=[Ae({eventId:"valeria-today",title:"Consulta de valoración",contactId:"contact-valeria",meetingTypeId:"valoracion",startTime:"2026-09-21T15:00:00Z",endTime:"2026-09-21T15:30:00Z",status:P.CONFIRMED}),Ae({eventId:"mateo-today",title:"Control",contactId:"contact-mateo",meetingTypeId:"control",startTime:"2026-09-21T16:00:00Z",endTime:"2026-09-21T16:30:00Z",status:P.SCHEDULED}),Ae({eventId:"sofia-today",title:"Higiene y profilaxis",contactId:"contact-sofia",meetingTypeId:"higiene",startTime:"2026-09-21T17:00:00Z",endTime:"2026-09-21T17:45:00Z",status:P.SCHEDULED})],_e={book:{day:"2026-09-21",events:[...Oe,Ae({eventId:"valeria-followup",title:"Control",contactId:"contact-valeria",meetingTypeId:"control",startTime:"2026-09-22T15:00:00Z",endTime:"2026-09-22T15:30:00Z",status:P.SCHEDULED})]},reschedule:{day:"2026-09-21",events:Oe},block:{day:"2026-09-21",events:Oe}};function Xe(r){return r.participants?.find(s=>s.type===E.CONTACT)?.id}function He(r){return r?ot.find(s=>s.id===r)?.name:void 0}function xt({dialog:r,event:s,text:f,locale:i,onClose:k,onSave:A,onDelete:R}){const e=f.calendarPageText,o=f.editEventModalText,d=r.mode==="create"?r.kind:null,x=r.mode==="create"?r.start:void 0,H=r.mode==="create"?r.end:void 0,U=r.mode==="create"?r.host:void 0,v=d!==null,p=d===V.BLOCK,[h,I]=u.useState(!1),[N,L]=u.useState(!1),b=v||h,M=t=>t?ht(t,T):"",D=u.useMemo(()=>Tt({titleRequired:o.titleRequired,startTimeRequired:o.startTimeRequired,endTimeRequired:o.endTimeRequired,meetingTypeRequired:o.clinicalMeetingTypeRequired,hostRequired:o.hostRequired},{requireMeetingType:!p}),[o,p]),w=U??s?.hostUserId??"demo-provider",a=v?p?[]:[{id:"contact-mateo",type:E.CONTACT,role:G.ATTENDEE,status:$.PENDING}]:s?.participants??[],c=ut({resolver:pt(D),mode:"onTouched",defaultValues:{title:v?p?e.blockTimeDefaultTitle:"":s?.title??"",startDatetime:M(x??s?.startTime),endDatetime:M(H??s?.endTime),allDay:v?!1:s?.isAllDay??!1,meetingTypeId:v?p?"":K[0].meetingTypeId:s?.meetingTypeId??"",hostUserId:w,visibilityLevel:s?.visibilityLevel??Fe.PERSONAL,description:s?.description??"",rrule:void 0,participants:$e(a,w),payerId:v?Re:s?.payerId??Re}}),m=c.watch("participants"),S=m.filter(t=>t.type===E.USER).map(t=>t.id),Z=new Map(We.map(t=>[t.userId,`${t.firstName} ${t.lastName}`.trim()])),j=new Map([...Ne].map(([t,g])=>[t,g.name])),Ve=new Map([...Ne].map(([t,g])=>[t,g.phone??""])),W=(t,g)=>{const y=c.getValues("participants"),_=y.filter(J=>J.type!==t),X=g.map(J=>y.find(ze=>ze.type===t&&ze.id===J)??{id:J,type:t,role:G.ATTENDEE,status:$.PENDING});c.setValue("participants",[..._,...X],{shouldDirty:!0})},Le=c.handleSubmit(t=>{const g=F.instants(t.startDatetime,T)[0],y=F.instants(t.endDatetime,T)[0];if(!g||!y){c.setError(g?"endDatetime":"startDatetime",{message:o.invalidLocalTime});return}const _=$e(t.participants,t.hostUserId),X=t.payerId&&t.payerId!==Re?t.payerId:null;if(d!==null){A({locationId:C,eventId:`practice-${g}-${t.hostUserId}`,meetingTypeId:t.meetingTypeId??"",eventLocationId:C,title:t.title,description:t.description,startTime:g,endTime:y,timezone:T,hostUserId:t.hostUserId,participants:_,visibilityLevel:t.visibilityLevel,isAllDay:t.allDay,dateAdded:rt,createdBy:"demo-provider",eventKind:d,...p?{}:{status:P.SCHEDULED,payerId:X}}),k();return}s&&(A({...s,title:t.title,description:t.description,startTime:g,endTime:y,hostUserId:t.hostUserId,meetingTypeId:t.meetingTypeId??s.meetingTypeId,participants:_,visibilityLevel:t.visibilityLevel,isAllDay:t.allDay,...s.eventKind===V.BLOCK?{}:{payerId:X}}),I(!1))}),Me=v?p?e.blockTime:o.clinicalCreateAppointment:h?o.clinicalEditAppointment:o.clinicalAppointmentDetails,q=(b?c.watch("startDatetime"):M(s?.startTime)).split("T")[0],n=q?vt(`${q}T12:00:00Z`,{locale:i,locationTz:"UTC",formatOptions:{weekday:"long",day:"numeric",month:"long",year:"numeric"}}):null;return l.jsxs("div",{className:"flex min-h-0 flex-1 flex-col overflow-hidden",children:[l.jsxs("div",{className:"flex shrink-0 items-center justify-between border-b px-4 py-3",children:[l.jsxs("div",{className:"min-w-0",children:[l.jsx(je,{className:"text-sm font-semibold text-foreground",children:Me}),n?l.jsx("p",{className:"text-xs text-muted-foreground",children:n}):null]}),l.jsx("button",{type:"button",onClick:k,"aria-label":o.close,className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-muted",children:l.jsx(dt,{className:"h-4 w-4"})})]}),l.jsx("div",{className:b?"flex min-h-0 flex-1 flex-col overflow-hidden":"min-h-0 flex-1 overflow-y-auto px-4 py-3",children:b?l.jsx(ft,{form:c,meetingTypes:K,hostOptions:We,participantUsers:We,participants:m,userParticipantIds:S,userNameById:Z,contactNameById:j,contactPhoneById:Ve,compactPatients:!p,onUserParticipantChange:t=>W(E.USER,t),onContactParticipantChange:t=>W(E.CONTACT,t),onRemoveParticipant:(t,g)=>c.setValue("participants",c.getValues("participants").filter(y=>!(y.type===t&&y.id===g)),{shouldDirty:!0}),onSubmit:Le,onCancel:()=>{v?k():I(!1)},loading:!1,isManager:!1,locationId:C,userId:"demo-provider",isCreating:v,isBlockMode:p,timeZone:T,resolvedStartInstant:F.instants(c.watch("startDatetime"),T)[0],resolvedEndInstant:F.instants(c.watch("endDatetime"),T)[0],locale:i,showPayer:!p,payerOptions:ot,translations:{title:o.clinicalTitle,startTime:e.startTime,endTime:e.endTime,allDay:e.allDay,meetingType:o.clinicalAppointmentType,host:o.clinicalProfessional,visibility:e.visibility,personal:e.personal,team:e.team,organizationWide:e.organizationWide,description:e.description,participants:e.participants,noParticipants:e.noParticipants,users:e.users,contacts:o.clinicalPatient,cancel:e.cancel,save:p?e.save:o.clinicalSaveAppointment,availableSlots:e.availableSlots,noAvailableSlots:e.noAvailableSlots,selectProfessionalForSlots:e.selectProfessionalForSlots,createContact:o.clinicalCreatePatient,contactName:e.contactName,contactPhone:e.contactPhone,contactCreate:e.contactCreate,contactCreateFailed:e.contactCreateFailed,contactNameRequired:e.contactNameRequired,insuranceCompany:e.insuranceCompany,insuranceNone:e.insuranceNone,advancedOptions:o.advancedOptions,additionalParticipants:o.additionalParticipants,removeParticipant:o.removeParticipant,participantHost:o.clinicalProfessional,participantAttendee:o.participantAttendee,unknownParticipant:o.unknownParticipant,accepted:e.accepted,declined:e.declined,pending:e.pending,searchContacts:o.clinicalSearchPatients,pickDate:o.pickDate,bookingDetails:p?e.blockTime:o.clinicalAppointmentDetails,durationLabel:o.durationLabel,durationMinutes:o.durationMinutes,addContact:o.addContact,changeContact:o.changeContact}}):s?l.jsx(Ct,{event:s,meetingType:K.find(t=>t.meetingTypeId===s.meetingTypeId),isRecurring:!1,isGoogleEvent:!1,showDeleteConfirm:N,syncing:!1,loading:!1,contactParticipants:(s.participants??[]).filter(t=>t.type===E.CONTACT),onEdit:()=>I(!0),onDelete:()=>L(!0),onDeleteConfirmed:()=>R(s.eventId),onDeleteCancel:()=>L(!1),onSendBookingLink:()=>{},onSyncNow:()=>{},userNameById:Z,contactNameById:j,locale:i,payerName:He(s.payerId),translations:{participantHost:o.clinicalProfessional,participantAttendee:o.participantAttendee,unknownParticipant:o.unknownParticipant,visibility:e.visibility,personal:e.personal,team:e.team,organizationWide:e.organizationWide,recurrence:e.recurrence,recurringBadge:e.recurringBadge,participants:e.participants,noParticipants:e.noParticipants,accepted:e.accepted,declined:e.declined,pending:e.pending,syncedFromGoogle:e.syncedFromGoogle,lastSynced:e.lastSynced,lastModifiedBy:e.lastModifiedBy,insuranceCompany:e.insuranceCompany,syncNow:e.syncNow,loading:e.loading,sendBookingLink:e.sendBookingLink,confirmDeleteMessage:e.confirmDeleteMessage,deleteEvent:e.deleteEvent,cancel:e.cancel,editEvent:e.editEvent,statusScheduled:e.statusScheduled,statusConfirmed:e.statusConfirmed,statusArrived:e.statusArrived,statusInProgress:e.statusInProgress,statusCompleted:e.statusCompleted,statusNoShow:e.statusNoShow,statusCancelled:e.statusCancelled,markNoShow:e.markNoShow,visitProgress:e.visitProgress,nextStepConfirm:e.nextStepConfirm,nextStepArrived:e.nextStepArrived,nextStepInProgress:e.nextStepInProgress,nextStepCompleted:e.nextStepCompleted,arrivedAtLabel:e.arrivedAtLabel,startedAtLabel:e.startedAtLabel,completedAtLabel:e.completedAtLabel}}):null})]})}function Nt({task:r,locale:s="es"}){const f=s==="es"?It:wt,i=f.calendarPageText,k=u.useMemo(()=>{const a={userId:"demo-provider",locationId:C,firstName:"Alex",lastName:"Demo",fullName:"Alex Demo",isActive:!0,timezone:T,permissions:[]},c={app:{locale:s},users:{currentUser:a,simulatedUser:null,simulatedPermissions:null,users:{"demo-provider":a},usersLoadedForLocationId:C,error:null},locations:{currentLocation:{id:C,slug:C,timezone:T}},employeeProfiles:{employeeProfiles:[{userId:"demo-provider",isBookable:!0},{userId:"dr-ruiz",isBookable:!0}],employeeProfilesLoadedForLocationId:C,error:null}};return Dt({reducer:()=>c})},[s]),[A,R]=u.useState(_e[r].day),[e,o]=u.useState(_e[r].events),[d,x]=u.useState("demo-provider"),[H,U]=u.useState("day"),[v,p]=u.useState(()=>new Date("2026-09-21T12:00:00Z")),[h,I]=u.useState(null),N={statusScheduled:i.statusScheduled,statusConfirmed:i.statusConfirmed,statusArrived:i.statusArrived,statusInProgress:i.statusInProgress,statusCompleted:i.statusCompleted,statusNoShow:i.statusNoShow,statusCancelled:i.statusCancelled},L=e.map(a=>{const c=Xe(a),m=a.eventKind===V.BLOCK,S=Ue.find(Z=>Z.id===a.hostUserId);return{id:a.eventId,title:a.title,contact:c?Ne.get(c)?.name:void 0,service:m?void 0:K.find(Z=>Z.meetingTypeId===a.meetingTypeId)?.name,payer:m?void 0:He(a.payerId),start:a.startTime,end:a.endTime,hostId:a.hostUserId,hostName:S?.name,providerColor:S?.color,kind:m?"block":"appointment",status:m?void 0:Et(a.status,N),allDay:a.isAllDay}}),b=new Map(e.map(a=>{const c=Xe(a);return[a.eventId,{event:a,contact:c?Ne.get(c):void 0,meetingType:K.find(m=>m.meetingTypeId===a.meetingTypeId),payerName:He(a.payerId)}]})),M=new Map(xe.monthDays(tt(v)).map(a=>[a,xe.appointmentCount(L,a,T)])),D=(a,c)=>{const m=c?.startUtc??F.instants(`${A}T09:00`,T)[0];if(!m)return;const S=c?.endUtc??new Date(Date.parse(m)+36e5).toISOString();I({mode:"create",kind:a,start:m,end:S,host:c?.hostId??(d==="all"?"demo-provider":d)})},w=h?.mode==="details"?e.find(a=>a.eventId===h.eventId)??null:null;return l.jsx(St,{store:k,children:l.jsx(bt,{children:l.jsx(kt,{children:l.jsx(lt,{locale:s,text:f,children:l.jsx(Je,{lang:s,children:l.jsxs("div",{style:{height:780},children:[l.jsx(at,{view:H,enableAgendaView:!0,day:A,selectedPerson:d==="all"?{kind:"all"}:{kind:"person",id:d},currentUserId:"demo-provider",resources:Ue,events:L,agendaDetails:b,agendaStatusLabels:N,availability:Ue.map(a=>({hostId:a.id,day:A,startHour:8,endHour:18,ready:!0})),timeZone:T,now:rt,calendarScopeKey:`booking-practice-${r}`,navigatorMonth:v,navigatorCounts:M,onNavigatorMonthChange:p,locale:s,startHour:7,endHour:19,copy:{today:i.today,day:i.day,week:i.week,month:i.month,agenda:i.agenda,myCalendar:i.myCalendar,allTeam:i.allTeam,newEvent:i.newEvent,blockTime:i.blockTime,openDay:i.openDay,openEvent:i.openEvent,noAppointments:i.noAppointments,loading:i.loading,failedToLoadEvents:i.failedToLoadEvents,previous:i.previous,next:i.next,calendarDate:i.calendarDate,teamMember:i.teamMember,more:i.more,appointments:i.appointments,events:i.events,starts:i.starts,continues:i.continues,retry:i.retry,monthNavigator:i.monthNavigator,createAt:i.createAt,hoursLoading:i.hoursLoading,hoursUnavailable:i.hoursUnavailable,markArrived:i.markArrived,minutesAbbr:i.minutesAbbr,allDay:i.allDay,google:i.google,whatsapp:i.whatsapp,detailsUnavailable:i.detailsUnavailable},editingEventId:h?.mode==="details"?h.eventId:null,onViewChange:U,onDayChange:a=>{R(a),p(gt(a))},onPersonChange:a=>x(a.kind==="all"?"all":a.id),onEventClick:a=>I({mode:"details",eventId:a}),onSlotClick:a=>D(V.APPOINTMENT,a),onNewEvent:()=>D(V.APPOINTMENT),onBlockTime:()=>D(V.BLOCK)}),l.jsx(Qe,{open:h!==null,onOpenChange:a=>{a||I(null)},children:l.jsxs(Ye,{className:"max-h-[90vh] w-[min(760px,calc(100vw-2rem))] max-w-none overflow-auto p-0",children:[l.jsx(et,{className:"sr-only",children:l.jsx(je,{children:i.eventDetails})}),h?l.jsx(xt,{dialog:h,event:w,text:f,locale:s,onClose:()=>I(null),onSave:a=>o(c=>c.some(m=>m.eventId===a.eventId)?c.map(m=>m.eventId===a.eventId?a:m):[...c,a]),onDelete:a=>{o(c=>c.filter(m=>m.eventId!==a)),I(null)}},h.mode==="create"?`create-${h.kind}-${h.start}`:h.eventId):null]})})]})})})})})})}const B=r=>({render:s=>l.jsx(Nt,{...s}),args:r}),ke=B({task:"book",locale:"es"}),be=B({task:"book",locale:"en"}),De=B({task:"reschedule",locale:"es"}),Se=B({task:"reschedule",locale:"en"}),Ee=B({task:"block",locale:"es"}),Pe=B({task:"block",locale:"en"});O.__docgenInfo={description:"",methods:[],displayName:"Fixture",props:{initialView:{required:!0,tsType:{name:"union",raw:"CalendarDisplayView | 'agenda'",elements:[{name:"union",raw:"'day' | 'week' | 'month'",elements:[{name:"literal",value:"'day'"},{name:"literal",value:"'week'"},{name:"literal",value:"'month'"}]},{name:"literal",value:"'agenda'"}]},description:""},initialPerson:{required:!0,tsType:{name:"string"},description:""},initialDay:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'2026-09-18'",computed:!1}},fixtureNow:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'2026-09-18T16:00:00Z'",computed:!1}},fullDay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fixtureEvents:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  title: string;
  start: string;
  end: string;
  hostId?: string;
  hostName?: string;
  contact?: string;
  service?: string;
  payer?: string;
  status?: string;
  canMarkArrived?: boolean;
  source?: 'google' | 'whatsapp';
  googleResponse?: GoogleResponseStatus;
  kind: 'appointment' | 'block' | 'warning';
  allDay?: boolean;
  color?: string;
  providerColor?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"start",value:{name:"string",required:!0}},{key:"end",value:{name:"string",required:!0}},{key:"hostId",value:{name:"string",required:!1}},{key:"hostName",value:{name:"string",required:!1}},{key:"contact",value:{name:"string",required:!1}},{key:"service",value:{name:"string",required:!1}},{key:"payer",value:{name:"string",required:!1}},{key:"status",value:{name:"string",required:!1}},{key:"canMarkArrived",value:{name:"boolean",required:!1}},{key:"source",value:{name:"union",raw:"'google' | 'whatsapp'",elements:[{name:"literal",value:"'google'"},{name:"literal",value:"'whatsapp'"}],required:!1}},{key:"googleResponse",value:{name:"GoogleResponseStatus",required:!1}},{key:"kind",value:{name:"union",raw:"'appointment' | 'block' | 'warning'",elements:[{name:"literal",value:"'appointment'"},{name:"literal",value:"'block'"},{name:"literal",value:"'warning'"}],required:!0}},{key:"allDay",value:{name:"boolean",required:!1}},{key:"color",value:{name:"string",required:!1}},{key:"providerColor",value:{name:"string",required:!1}}]}}],raw:"CalendarDisplayEvent[]"},description:"",defaultValue:{value:`[
  {
    id: '1',
    title: 'Implant consultation',
    contact: 'Elena García',
    service: 'Implant consultation',
    start: '2026-09-18T14:00:00Z',
    end: '2026-09-18T15:00:00Z',
    hostId: 'isabel',
    kind: 'appointment',
    status: 'Scheduled',
  },
  {
    id: '2',
    title: 'Follow-up',
    contact: 'Luis Moreno',
    service: 'Follow-up',
    start: '2026-09-18T15:00:00Z',
    end: '2026-09-18T15:30:00Z',
    hostId: 'isabel',
    kind: 'appointment',
    status: 'Arrived',
  },
  {
    id: '3',
    title: 'Crown fitting',
    contact: 'Ana Ruiz',
    service: 'Crown fitting',
    start: '2026-09-18T15:00:00Z',
    end: '2026-09-18T17:00:00Z',
    hostId: 'natalia',
    kind: 'appointment',
    status: 'Confirmed',
  },
  {
    id: '4',
    title: 'Implant placement',
    contact: 'Marta Castro',
    service: 'Implant placement',
    start: '2026-09-18T16:00:00Z',
    end: '2026-09-18T18:30:00Z',
    hostId: 'mateo',
    kind: 'appointment',
    status: 'Scheduled',
  },
  {
    id: '5',
    title: 'Team meeting',
    start: '2026-09-18T18:00:00Z',
    end: '2026-09-18T19:00:00Z',
    hostId: 'santiago',
    kind: 'block',
  },
  {
    id: '6',
    title: 'Document review',
    contact: 'Sofia Rojas',
    service: 'Document review',
    start: '2026-09-19T14:00:00Z',
    end: '2026-09-19T14:45:00Z',
    hostId: 'isabel',
    kind: 'appointment',
    status: 'Scheduled',
  },
  {
    id: '7',
    title: 'Initial consultation',
    contact: 'Valeria Torres',
    service: 'Initial consultation',
    start: '2026-09-21T16:00:00Z',
    end: '2026-09-21T17:00:00Z',
    hostId: 'natalia',
    kind: 'appointment',
    status: 'Confirmed',
  },
]`,computed:!1}},theme:{required:!1,tsType:{name:"CrmThemePreset"},description:"",defaultValue:{value:"CrmThemePreset.Light",computed:!0}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locale:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'en'",computed:!1}},timeZone:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'America/Denver'",computed:!1}},narrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},extendedHours:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},delayedLoad:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},contextual:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`function Fixture({
  initialView,
  initialPerson,
  initialDay = '2026-09-18',
  fixtureNow = '2026-09-18T16:00:00Z',
  fullDay = false,
  fixtureEvents = events,
  theme = CrmThemePreset.Light,
  loading = false,
  error = false,
  locale = 'en',
  timeZone = 'America/Denver',
  narrow = false,
  extendedHours = false,
  delayedLoad = false,
  contextual = false
}: {
  initialView: CalendarDisplayView | 'agenda';
  initialPerson: string;
  initialDay?: string;
  fixtureNow?: string;
  fullDay?: boolean;
  fixtureEvents?: CalendarDisplayEvent[];
  theme?: CrmThemePreset;
  loading?: boolean;
  error?: boolean;
  locale?: string;
  timeZone?: string;
  narrow?: boolean;
  extendedHours?: boolean;
  delayedLoad?: boolean;
  contextual?: boolean;
}) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const variables = resolveCrmTheme(null, theme).cssVariables;
    for (const [property, value] of Object.entries(variables)) root.style.setProperty(property, value);
    return () => {
      for (const [property, value] of Object.entries(resolveCrmTheme(null, CrmThemePreset.Light).cssVariables)) root.style.setProperty(property, value);
    };
  }, [theme]);
  const [view, setView] = useState(initialView);
  const [day, setDay] = useState(initialDay);
  const [person, setPerson] = useState(initialPerson);
  const [selected, setSelected] = useState('');
  const practiceActionNotice = locale.startsWith('es') ? 'En modo práctica, esta acción no crea nada aquí.' : 'In practice mode, this action does not create anything here.';
  const [arrivedEventIds, setArrivedEventIds] = useState<ReadonlySet<string>>(() => new Set());
  const [ready, setReady] = useState(!delayedLoad);
  const [navigatorMonth, setNavigatorMonth] = useState(new Date(\`\${day}T12:00:00Z\`));
  useEffect(() => {
    if (!delayedLoad) return;
    const timer = window.setTimeout(() => setReady(true), 800);
    return () => window.clearTimeout(timer);
  }, [delayedLoad]);
  const displayedEvents = ready ? fixtureEvents : [];
  const navigatorEvents = displayedEvents.filter(event => person === 'all' || event.hostId === person || !event.hostId);
  const navigatorCounts = new Map(CalendarDisplayModel.monthDays(formatDateInputToIsoDayUtc(navigatorMonth)).map(itemDay => [itemDay, CalendarDisplayModel.appointmentCount(navigatorEvents, itemDay, timeZone)]));
  const agendaDetails = new Map<string, CalendarAgendaDetails>(displayedEvents.filter(event => event.kind === 'appointment').map(event => [event.id, {
    event: {
      locationId: 'walkthrough',
      eventId: event.id,
      meetingTypeId: 'clinical-consultation',
      eventLocationId: 'walkthrough',
      title: event.title,
      startTime: event.start,
      endTime: event.end,
      hostUserId: event.hostId ?? 'isabel',
      participants: event.contact ? [{
        id: \`contact-\${event.id}\`,
        type: EventParticipantType.CONTACT,
        role: EventParticipantRoles.ATTENDEE,
        status: EventParticipantStatus.ACCEPTED
      }] : undefined,
      status: arrivedEventIds.has(event.id) ? AppointmentStatus.ARRIVED : event.status === 'Confirmed' ? AppointmentStatus.CONFIRMED : event.status === 'Arrived' ? AppointmentStatus.ARRIVED : AppointmentStatus.SCHEDULED,
      timezone: timeZone,
      visibilityLevel: VisibilityLevel.TEAM,
      isAllDay: event.allDay ?? false,
      dateAdded: '2026-09-01T00:00:00Z',
      createdBy: 'isabel',
      eventKind: CalendarEventKind.APPOINTMENT
    } satisfies CalendarEvent,
    contact: event.contact ? {
      name: event.contact,
      phone: '+57 300 555 0184'
    } : undefined,
    payerName: 'Clínica Salud'
  }]));
  return <SharedTranslationProvider lang={locale}>
      <div style={narrow ? {
      width: 375,
      height: 700
    } : {
      height: 780
    }}>
        <CalendarPresentation view={view} enableAgendaView={contextual} day={day} selectedPerson={person === 'all' ? {
        kind: 'all'
      } : {
        kind: 'person',
        id: person
      }} currentUserId="isabel" resources={resources} events={displayedEvents.map(event => ({
        ...event,
        hostName: event.hostName ?? resources.find(resource => resource.id === event.hostId)?.name,
        providerColor: resources.find(resource => resource.id === event.hostId)?.color
      }))} agendaDetails={agendaDetails} agendaStatusLabels={{
        statusScheduled: locale.startsWith('es') ? 'Programada' : 'Scheduled',
        statusConfirmed: locale.startsWith('es') ? 'Confirmada' : 'Confirmed',
        statusArrived: locale.startsWith('es') ? 'Llegó' : 'Arrived',
        statusInProgress: locale.startsWith('es') ? 'En curso' : 'In progress',
        statusCompleted: locale.startsWith('es') ? 'Completada' : 'Completed',
        statusNoShow: locale.startsWith('es') ? 'No asistió' : 'No show',
        statusCancelled: locale.startsWith('es') ? 'Cancelada' : 'Cancelled'
      }} onMarkArrived={id => setArrivedEventIds(current => new Set(current).add(id))} availability={resources.map(resource => ({
        hostId: resource.id,
        day,
        startHour: fullDay ? 0 : extendedHours && resource.id === 'isabel' ? 7 : 9,
        endHour: fullDay ? 24 : extendedHours && resource.id === 'isabel' ? 21 : 17,
        ready: true
      }))} timeZone={timeZone} now={fixtureNow} calendarScopeKey="calendar-presentation-story" navigatorMonth={navigatorMonth} navigatorCounts={navigatorCounts} onNavigatorMonthChange={setNavigatorMonth} locale={locale} startHour={fullDay ? 0 : 7} endHour={fullDay ? 24 : 19} copy={locale.startsWith('es') ? copyEs : copy} loading={loading || !ready} error={error} onViewChange={setView} onDayChange={setDay} onPersonChange={selection => setPerson(selection.kind === 'all' ? 'all' : selection.id)} onEventClick={setSelected} onSlotClick={intention => setSelected(\`Create \${intention.startUtc} \${intention.hostId ?? ''}\`)} onNewEvent={() => setSelected(practiceActionNotice)} onBlockTime={() => setSelected(practiceActionNotice)} />
        {agendaDetails.has(selected) ? <Dialog open onOpenChange={open => !open && setSelected('')}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {locale.startsWith('es') ? 'Detalle de la cita' : 'Appointment details'}
                </DialogTitle>
              </DialogHeader>
              <AgendaEventContent {...agendaDetails.get(selected)!} displayTimeZone={timeZone} displayLocale={locale} allDayLabel={locale.startsWith('es') ? 'Todo el día' : 'All day'} onMarkArrived={id => setArrivedEventIds(current => new Set(current).add(id))} translations={{
            statusScheduled: locale.startsWith('es') ? 'Programada' : 'Scheduled',
            statusConfirmed: locale.startsWith('es') ? 'Confirmada' : 'Confirmed',
            statusArrived: locale.startsWith('es') ? 'Llegó' : 'Arrived',
            statusInProgress: locale.startsWith('es') ? 'En curso' : 'In progress',
            statusCompleted: locale.startsWith('es') ? 'Completada' : 'Completed',
            statusNoShow: locale.startsWith('es') ? 'No asistió' : 'No show',
            statusCancelled: locale.startsWith('es') ? 'Cancelada' : 'Cancelled',
            markArrived: locale.startsWith('es') ? 'Registrar llegada' : 'Mark arrived',
            minutesAbbr: 'min'
          }} />
            </DialogContent>
          </Dialog> : selected && <div role="status" className="fixed bottom-4 right-4 z-50 rounded-md border bg-card px-3 py-2 shadow-lg">
              {selected}{' '}
              <button type="button" className="ml-2 text-primary" onClick={() => setSelected('')}>
                Close
              </button>
            </div>}
      </div>
    </SharedTranslationProvider>;
}`,...O.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'all'
  }
}`,...Y.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'isabel'
  }
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'isabel',
    delayedLoad: true,
    extendedHours: true,
    fixtureEvents: edgeEvents
  }
}`,...te.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'santiago',
    fixtureEvents: [{
      id: 'all-day-1',
      title: 'Training',
      start: '2026-09-18T06:00:00Z',
      end: '2026-09-19T06:00:00Z',
      hostId: 'santiago',
      kind: 'block',
      allDay: true
    }, {
      id: 'all-day-2',
      title: 'Conference',
      start: '2026-09-18T06:00:00Z',
      end: '2026-09-19T06:00:00Z',
      hostId: 'santiago',
      kind: 'block',
      allDay: true
    }, {
      id: 'all-day-3',
      title: 'Travel',
      start: '2026-09-18T06:00:00Z',
      end: '2026-09-19T06:00:00Z',
      hostId: 'santiago',
      kind: 'block',
      allDay: true
    }]
  }
}`,...ae.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'isabel',
    initialDay: '2026-03-08',
    fixtureNow: '2026-03-08T09:30:00Z',
    fullDay: true,
    fixtureEvents: [{
      id: 'spring-visit',
      title: 'Post-transition visit',
      start: '2026-03-08T09:30:00Z',
      end: '2026-03-08T10:30:00Z',
      hostId: 'isabel',
      kind: 'appointment'
    }]
  }
}`,...ne.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'isabel',
    initialDay: '2026-11-01',
    fixtureNow: '2026-11-01T08:30:00Z',
    fullDay: true,
    fixtureEvents: [{
      id: 'first-occurrence',
      title: 'First occurrence',
      start: '2026-11-01T07:30:00Z',
      end: '2026-11-01T08:00:00Z',
      hostId: 'isabel',
      kind: 'appointment'
    }, {
      id: 'second-occurrence',
      title: 'Second occurrence',
      start: '2026-11-01T08:30:00Z',
      end: '2026-11-01T09:00:00Z',
      hostId: 'isabel',
      kind: 'appointment'
    }]
  }
}`,...ie.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'week',
    initialPerson: 'all'
  }
}`,...se.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'week',
    initialPerson: 'isabel'
  }
}`,...re.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'month',
    initialPerson: 'all'
  }
}`,...oe.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'agenda',
    initialPerson: 'all',
    contextual: true
  }
}`,...le.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'agenda',
    initialPerson: 'all',
    contextual: true,
    locale: 'es'
  }
}`,...de.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'agenda',
    initialPerson: 'isabel',
    contextual: true,
    initialDay: '2026-09-21',
    fixtureNow: '2026-09-21T15:00:00Z',
    timeZone: 'America/Bogota',
    fixtureEvents: [{
      id: 'valeria-visit',
      title: 'Valeria Torres · Initial consultation',
      contact: 'Valeria Torres',
      service: 'Initial consultation',
      start: '2026-09-21T15:00:00Z',
      end: '2026-09-21T15:30:00Z',
      hostId: 'isabel',
      hostName: 'Alex Demo',
      kind: 'appointment',
      status: 'Scheduled'
    }]
  }
}`,...z.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  args: {
    ...TrainingEnglish.args,
    locale: 'es'
  }
}`,...ce.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'all',
    fixtureEvents: []
  }
}`,...me.parameters?.docs?.source}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'all',
    fixtureEvents: visaEvents
  }
}`,...ue.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'all',
    fixtureEvents: edgeEvents
  }
}`,...pe.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'month',
    initialPerson: 'all',
    fixtureEvents: edgeEvents
  }
}`,...ge.parameters?.docs?.source}}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'all',
    fixtureEvents: [],
    loading: true
  }
}`,...ve.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'all',
    fixtureEvents: [],
    error: true
  }
}`,...he.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'all',
    theme: CrmThemePreset.Dark
  }
}`,...ye.parameters?.docs?.source}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'week',
    initialPerson: 'all',
    locale: 'es'
  }
}`,...Te.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'all',
    narrow: true
  }
}`,...fe.parameters?.docs?.source}}};Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'month',
    initialPerson: 'all',
    timeZone: 'Asia/Tokyo'
  }
}`,...Ce.parameters?.docs?.source}}};Ie.parameters={...Ie.parameters,docs:{...Ie.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'month',
    initialPerson: 'all',
    timeZone: 'Pacific/Honolulu'
  }
}`,...Ie.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'all',
    extendedHours: true,
    fixtureEvents: edgeEvents
  }
}`,...we.parameters?.docs?.source}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`bookingStory({
  task: 'book',
  locale: 'es'
})`,...ke.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`bookingStory({
  task: 'book',
  locale: 'en'
})`,...be.parameters?.docs?.source}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`bookingStory({
  task: 'reschedule',
  locale: 'es'
})`,...De.parameters?.docs?.source}}};Se.parameters={...Se.parameters,docs:{...Se.parameters?.docs,source:{originalSource:`bookingStory({
  task: 'reschedule',
  locale: 'en'
})`,...Se.parameters?.docs?.source}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`bookingStory({
  task: 'block',
  locale: 'es'
})`,...Ee.parameters?.docs?.source}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`bookingStory({
  task: 'block',
  locale: 'en'
})`,...Pe.parameters?.docs?.source}}};const Fa=["Fixture","Day","IndividualDay","DelayedRangeAndSelection","AllDayOverflow","SpringDstDay","FallDstDay","TeamWeek","IndividualWeek","Month","ContextualAgenda","ContextualAgendaSpanish","TrainingEnglish","TrainingSpanish","Empty","VisaAndGeneric","DenseDay","DenseMonth","Loading","Failed","Dark","Spanish","Narrow","Tokyo","Honolulu","ExtendedHours","TrainingBookingSpanish","TrainingBookingEnglish","TrainingRescheduleSpanish","TrainingRescheduleEnglish","TrainingBlockTimeSpanish","TrainingBlockTimeEnglish"];export{ae as AllDayOverflow,le as ContextualAgenda,de as ContextualAgendaSpanish,ye as Dark,Y as Day,te as DelayedRangeAndSelection,pe as DenseDay,ge as DenseMonth,me as Empty,we as ExtendedHours,he as Failed,ie as FallDstDay,O as Fixture,Ie as Honolulu,ee as IndividualDay,re as IndividualWeek,ve as Loading,oe as Month,fe as Narrow,Te as Spanish,ne as SpringDstDay,se as TeamWeek,Ce as Tokyo,Pe as TrainingBlockTimeEnglish,Ee as TrainingBlockTimeSpanish,be as TrainingBookingEnglish,ke as TrainingBookingSpanish,z as TrainingEnglish,Se as TrainingRescheduleEnglish,De as TrainingRescheduleSpanish,ce as TrainingSpanish,ue as VisaAndGeneric,Fa as __namedExportsOrder,ja as default};
