import{a as $,r as i,i as Y,j as a,S as we}from"./iframe-C812RI-m.js";import{C as Ce,V as De,c as p,e as be,E as ke,f as Ee}from"./booking-7zhlFmS_.js";import{f as Se}from"./badge-z79zfrWY.js";import{b as Ie,c as Ae,f as Pe,i as Ze}from"./dialog-B5kVYiLC.js";import{p as Ve}from"./providerBadgeColor-CTTbZdZb.js";import{C as ee,a as xe,A as Ne}from"./CalendarPresentation-DbnWYb3n.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DgQannX7.js";import"./index-BuQDuk1U.js";import"./businessDay-B4bmBOty.js";import"./combobox-C8RsbaJI.js";import"./index-3L2etSw5.js";import"./popover-CX7CPsoe.js";import"./appointmentStatusUi-DKu3PjPD.js";import"./isSameMonth-D-tzWMx8.js";import"./chevron-left-BLAnmWWV.js";import"./chevron-right-Uw5L8IR1.js";import"./plus-M7lBYfBP.js";const g=[{id:"isabel",name:"Isabel Quintero",canCreate:!0},{id:"natalia",name:"Natalia Vélez",canCreate:!0},{id:"mateo",name:"Mateo Beltrán",canCreate:!0},{id:"santiago",name:"Santiago Duque",canCreate:!0}].map(l=>({...l,color:Ve(l.id)})),te=[{id:"1",title:"Implant consultation",contact:"Elena García",service:"Implant consultation",start:"2026-09-18T14:00:00Z",end:"2026-09-18T15:00:00Z",hostId:"isabel",kind:"appointment",status:"Scheduled"},{id:"2",title:"Follow-up",contact:"Luis Moreno",service:"Follow-up",start:"2026-09-18T15:00:00Z",end:"2026-09-18T15:30:00Z",hostId:"isabel",kind:"appointment",status:"Arrived"},{id:"3",title:"Crown fitting",contact:"Ana Ruiz",service:"Crown fitting",start:"2026-09-18T15:00:00Z",end:"2026-09-18T17:00:00Z",hostId:"natalia",kind:"appointment",status:"Confirmed"},{id:"4",title:"Implant placement",contact:"Marta Castro",service:"Implant placement",start:"2026-09-18T16:00:00Z",end:"2026-09-18T18:30:00Z",hostId:"mateo",kind:"appointment",status:"Scheduled"},{id:"5",title:"Team meeting",start:"2026-09-18T18:00:00Z",end:"2026-09-18T19:00:00Z",hostId:"santiago",kind:"block"},{id:"6",title:"Document review",contact:"Sofia Rojas",service:"Document review",start:"2026-09-19T14:00:00Z",end:"2026-09-19T14:45:00Z",hostId:"isabel",kind:"appointment",status:"Scheduled"},{id:"7",title:"Initial consultation",contact:"Valeria Torres",service:"Initial consultation",start:"2026-09-21T16:00:00Z",end:"2026-09-21T17:00:00Z",hostId:"natalia",kind:"appointment",status:"Confirmed"}],ae={today:"Today",day:"Day",week:"Week",month:"Month",agenda:"Agenda",myCalendar:"My calendar",allTeam:"All team members",newEvent:"New event",blockTime:"Block time",openDay:"Open day",openEvent:"Open event",noAppointments:"No appointments",loading:"Loading…",failedToLoadEvents:"Could not load appointments",previous:"Previous",next:"Next",calendarDate:"Calendar date",teamMember:"Team member",more:"more",appointments:"appointments",events:"events",starts:"starts",continues:"Continues",retry:"Retry",monthNavigator:"Jump to date",createAt:"Create at",hoursLoading:"Checking working hours…",hoursUnavailable:"Working hours unavailable; open time is unconfirmed.",markArrived:"Mark arrived",minutesAbbr:"min",allDay:"All day",google:"Google",whatsapp:"WhatsApp",detailsUnavailable:"Some calendar details could not be loaded."},Me={...ae,today:"Hoy",day:"Día",week:"Semana",month:"Mes",agenda:"Agenda",myCalendar:"Mi calendario",allTeam:"Todo el equipo",newEvent:"Nuevo evento",blockTime:"Bloquear tiempo",openDay:"Abrir día",openEvent:"Abrir evento",noAppointments:"Sin eventos",previous:"Anterior",next:"Siguiente",calendarDate:"Fecha del calendario",teamMember:"Profesional",more:"más",appointments:"citas",events:"eventos",starts:"inicios",continues:"Continúa",monthNavigator:"Ir a fecha",createAt:"Crear a las",allDay:"Todo el día",minutesAbbr:"min",google:"Google",whatsapp:"WhatsApp",retry:"Reintentar",loading:"Cargando…",failedToLoadEvents:"No se pudieron cargar los eventos",hoursLoading:"Consultando horarios…",hoursUnavailable:"Horarios no disponibles",markArrived:"Registrar llegada",detailsUnavailable:"Algunos detalles no están disponibles"},We=[{id:"visa-1",title:"Initial consultation",contact:"Daniel Reyes",service:"Initial consultation",start:"2026-09-18T15:00:00Z",end:"2026-09-18T16:00:00Z",hostId:"isabel",kind:"appointment"},{id:"visa-2",title:"Document review",contact:"Lucía Peña",service:"Document review",start:"2026-09-18T16:00:00Z",end:"2026-09-18T16:30:00Z",hostId:"natalia",kind:"appointment"},{id:"generic-1",title:"Internal planning meeting",start:"2026-09-18T18:00:00Z",end:"2026-09-18T19:00:00Z",hostId:"mateo",kind:"appointment"}],H=[...te,{id:"overlap",title:"Urgent follow-up",contact:"Pablo Ríos",start:"2026-09-18T15:20:00Z",end:"2026-09-18T15:50:00Z",hostId:"isabel",kind:"appointment"},{id:"absence",title:"Time off",start:"2026-09-18T06:00:00Z",end:"2026-09-20T06:00:00Z",hostId:"santiago",kind:"block",allDay:!0},{id:"google",title:"External consultation",start:"2026-09-18T20:00:00Z",end:"2026-09-18T21:00:00Z",hostId:"natalia",kind:"appointment",source:"google"},{id:"unmatched:call",title:"Unmatched WhatsApp call",start:"2026-09-18T22:00:00Z",end:"2026-09-18T22:30:00Z",kind:"warning",source:"whatsapp"}];function r({initialView:l,initialPerson:ne,initialDay:ie="2026-09-18",fixtureNow:se="2026-09-18T16:00:00Z",fullDay:d=!1,fixtureEvents:re=te,theme:z=$.Light,loading:oe=!1,error:le=!1,locale:t="en",timeZone:c="America/Denver",narrow:de=!1,extendedHours:K=!1,delayedLoad:j=!1,contextual:ce=!1}){i.useLayoutEffect(()=>{const e=document.documentElement,n=Y(null,z).cssVariables;for(const[B,G]of Object.entries(n))e.style.setProperty(B,G);return()=>{for(const[B,G]of Object.entries(Y(null,$.Light).cssVariables))e.style.setProperty(B,G)}},[z]);const[ue,me]=i.useState(l),[F,pe]=i.useState(ie),[u,ge]=i.useState(ne),[m,s]=i.useState(""),_=t.startsWith("es")?"En modo práctica, esta acción no crea nada aquí.":"In practice mode, this action does not create anything here.",[ve,J]=i.useState(()=>new Set),[Q,he]=i.useState(!j),[X,ye]=i.useState(new Date(`${F}T12:00:00Z`));i.useEffect(()=>{if(!j)return;const e=window.setTimeout(()=>he(!0),800);return()=>window.clearTimeout(e)},[j]);const O=Q?re:[],fe=O.filter(e=>u==="all"||e.hostId===u||!e.hostId),Te=new Map(ee.monthDays(Se(X)).map(e=>[e,ee.appointmentCount(fe,e,c)])),U=new Map(O.filter(e=>e.kind==="appointment").map(e=>[e.id,{event:{locationId:"walkthrough",eventId:e.id,meetingTypeId:"clinical-consultation",eventLocationId:"walkthrough",title:e.title,startTime:e.start,endTime:e.end,hostUserId:e.hostId??"isabel",participants:e.contact?[{id:`contact-${e.id}`,type:Ee.CONTACT,role:ke.ATTENDEE,status:be.ACCEPTED}]:void 0,status:ve.has(e.id)?p.ARRIVED:e.status==="Confirmed"?p.CONFIRMED:e.status==="Arrived"?p.ARRIVED:p.SCHEDULED,timezone:c,visibilityLevel:De.TEAM,isAllDay:e.allDay??!1,dateAdded:"2026-09-01T00:00:00Z",createdBy:"isabel",eventKind:Ce.APPOINTMENT},contact:e.contact?{name:e.contact,phone:"+57 300 555 0184"}:void 0,payerName:"Clínica Salud"}]));return a.jsx(we,{lang:t,children:a.jsxs("div",{style:de?{width:375,height:700}:{height:780},children:[a.jsx(xe,{view:ue,enableAgendaView:ce,day:F,selectedPerson:u==="all"?{kind:"all"}:{kind:"person",id:u},currentUserId:"isabel",resources:g,events:O.map(e=>({...e,hostName:e.hostName??g.find(n=>n.id===e.hostId)?.name,providerColor:g.find(n=>n.id===e.hostId)?.color})),agendaDetails:U,agendaStatusLabels:{statusScheduled:t.startsWith("es")?"Programada":"Scheduled",statusConfirmed:t.startsWith("es")?"Confirmada":"Confirmed",statusArrived:t.startsWith("es")?"Llegó":"Arrived",statusInProgress:t.startsWith("es")?"En curso":"In progress",statusCompleted:t.startsWith("es")?"Completada":"Completed",statusNoShow:t.startsWith("es")?"No asistió":"No show",statusCancelled:t.startsWith("es")?"Cancelada":"Cancelled"},onMarkArrived:e=>J(n=>new Set(n).add(e)),availability:g.map(e=>({hostId:e.id,day:F,startHour:d?0:K&&e.id==="isabel"?7:9,endHour:d?24:K&&e.id==="isabel"?21:17,ready:!0})),timeZone:c,now:se,calendarScopeKey:"calendar-presentation-story",navigatorMonth:X,navigatorCounts:Te,onNavigatorMonthChange:ye,locale:t,startHour:d?0:7,endHour:d?24:19,copy:t.startsWith("es")?Me:ae,loading:oe||!Q,error:le,onViewChange:me,onDayChange:pe,onPersonChange:e=>ge(e.kind==="all"?"all":e.id),onEventClick:s,onSlotClick:e=>s(`Create ${e.startUtc} ${e.hostId??""}`),onNewEvent:()=>s(_),onBlockTime:()=>s(_)}),U.has(m)?a.jsx(Ie,{open:!0,onOpenChange:e=>!e&&s(""),children:a.jsxs(Ae,{children:[a.jsx(Pe,{children:a.jsx(Ze,{children:t.startsWith("es")?"Detalle de la cita":"Appointment details"})}),a.jsx(Ne,{...U.get(m),displayTimeZone:c,displayLocale:t,allDayLabel:t.startsWith("es")?"Todo el día":"All day",onMarkArrived:e=>J(n=>new Set(n).add(e)),translations:{statusScheduled:t.startsWith("es")?"Programada":"Scheduled",statusConfirmed:t.startsWith("es")?"Confirmada":"Confirmed",statusArrived:t.startsWith("es")?"Llegó":"Arrived",statusInProgress:t.startsWith("es")?"En curso":"In progress",statusCompleted:t.startsWith("es")?"Completada":"Completed",statusNoShow:t.startsWith("es")?"No asistió":"No show",statusCancelled:t.startsWith("es")?"Cancelada":"Cancelled",markArrived:t.startsWith("es")?"Registrar llegada":"Mark arrived",minutesAbbr:"min"}})]})}):m&&a.jsxs("div",{role:"status",className:"fixed bottom-4 right-4 z-50 rounded-md border bg-card px-3 py-2 shadow-lg",children:[m," ",a.jsx("button",{type:"button",className:"ml-2 text-primary",onClick:()=>s(""),children:"Close"})]})]})})}const et={title:"Scheduling/Calendar",component:r},v={args:{initialView:"day",initialPerson:"all"}},h={args:{initialView:"day",initialPerson:"isabel"}},y={args:{initialView:"day",initialPerson:"isabel",delayedLoad:!0,extendedHours:!0,fixtureEvents:H}},f={args:{initialView:"day",initialPerson:"santiago",fixtureEvents:[{id:"all-day-1",title:"Training",start:"2026-09-18T06:00:00Z",end:"2026-09-19T06:00:00Z",hostId:"santiago",kind:"block",allDay:!0},{id:"all-day-2",title:"Conference",start:"2026-09-18T06:00:00Z",end:"2026-09-19T06:00:00Z",hostId:"santiago",kind:"block",allDay:!0},{id:"all-day-3",title:"Travel",start:"2026-09-18T06:00:00Z",end:"2026-09-19T06:00:00Z",hostId:"santiago",kind:"block",allDay:!0}]}},T={args:{initialView:"day",initialPerson:"isabel",initialDay:"2026-03-08",fixtureNow:"2026-03-08T09:30:00Z",fullDay:!0,fixtureEvents:[{id:"spring-visit",title:"Post-transition visit",start:"2026-03-08T09:30:00Z",end:"2026-03-08T10:30:00Z",hostId:"isabel",kind:"appointment"}]}},w={args:{initialView:"day",initialPerson:"isabel",initialDay:"2026-11-01",fixtureNow:"2026-11-01T08:30:00Z",fullDay:!0,fixtureEvents:[{id:"first-occurrence",title:"First occurrence",start:"2026-11-01T07:30:00Z",end:"2026-11-01T08:00:00Z",hostId:"isabel",kind:"appointment"},{id:"second-occurrence",title:"Second occurrence",start:"2026-11-01T08:30:00Z",end:"2026-11-01T09:00:00Z",hostId:"isabel",kind:"appointment"}]}},C={args:{initialView:"week",initialPerson:"all"}},D={args:{initialView:"week",initialPerson:"isabel"}},b={args:{initialView:"month",initialPerson:"all"}},k={args:{initialView:"agenda",initialPerson:"all",contextual:!0}},E={args:{initialView:"agenda",initialPerson:"all",contextual:!0,locale:"es"}},o={args:{initialView:"agenda",initialPerson:"isabel",contextual:!0,initialDay:"2026-09-21",fixtureNow:"2026-09-21T15:00:00Z",timeZone:"America/Bogota",fixtureEvents:[{id:"valeria-visit",title:"Valeria Torres · Initial consultation",contact:"Valeria Torres",service:"Initial consultation",start:"2026-09-21T15:00:00Z",end:"2026-09-21T15:30:00Z",hostId:"isabel",hostName:"Alex Demo",kind:"appointment",status:"Scheduled"}]}},S={args:{...o.args,locale:"es"}},I={args:{initialView:"day",initialPerson:"all",fixtureEvents:[]}},A={args:{initialView:"day",initialPerson:"all",fixtureEvents:We}},P={args:{initialView:"day",initialPerson:"all",fixtureEvents:H}},Z={args:{initialView:"month",initialPerson:"all",fixtureEvents:H}},V={args:{initialView:"day",initialPerson:"all",fixtureEvents:[],loading:!0}},x={args:{initialView:"day",initialPerson:"all",fixtureEvents:[],error:!0}},N={args:{initialView:"day",initialPerson:"all",theme:$.Dark}},M={args:{initialView:"week",initialPerson:"all",locale:"es"}},W={args:{initialView:"day",initialPerson:"all",narrow:!0}},L={args:{initialView:"month",initialPerson:"all",timeZone:"Asia/Tokyo"}},q={args:{initialView:"month",initialPerson:"all",timeZone:"Pacific/Honolulu"}},R={args:{initialView:"day",initialPerson:"all",extendedHours:!0,fixtureEvents:H}};r.__docgenInfo={description:"",methods:[],displayName:"Fixture",props:{initialView:{required:!0,tsType:{name:"union",raw:"CalendarDisplayView | 'agenda'",elements:[{name:"union",raw:"'day' | 'week' | 'month'",elements:[{name:"literal",value:"'day'"},{name:"literal",value:"'week'"},{name:"literal",value:"'month'"}]},{name:"literal",value:"'agenda'"}]},description:""},initialPerson:{required:!0,tsType:{name:"string"},description:""},initialDay:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'2026-09-18'",computed:!1}},fixtureNow:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'2026-09-18T16:00:00Z'",computed:!1}},fullDay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fixtureEvents:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
]`,computed:!1}},theme:{required:!1,tsType:{name:"CrmThemePreset"},description:"",defaultValue:{value:"CrmThemePreset.Light",computed:!0}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locale:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'en'",computed:!1}},timeZone:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'America/Denver'",computed:!1}},narrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},extendedHours:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},delayedLoad:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},contextual:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`function Fixture({
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
}`,...r.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'all'
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'isabel'
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'isabel',
    delayedLoad: true,
    extendedHours: true,
    fixtureEvents: edgeEvents
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'week',
    initialPerson: 'all'
  }
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'week',
    initialPerson: 'isabel'
  }
}`,...D.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'month',
    initialPerson: 'all'
  }
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'agenda',
    initialPerson: 'all',
    contextual: true
  }
}`,...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'agenda',
    initialPerson: 'all',
    contextual: true,
    locale: 'es'
  }
}`,...E.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...TrainingEnglish.args,
    locale: 'es'
  }
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'all',
    fixtureEvents: []
  }
}`,...I.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'all',
    fixtureEvents: visaEvents
  }
}`,...A.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'all',
    fixtureEvents: edgeEvents
  }
}`,...P.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'month',
    initialPerson: 'all',
    fixtureEvents: edgeEvents
  }
}`,...Z.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'all',
    fixtureEvents: [],
    loading: true
  }
}`,...V.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'all',
    fixtureEvents: [],
    error: true
  }
}`,...x.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'all',
    theme: CrmThemePreset.Dark
  }
}`,...N.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'week',
    initialPerson: 'all',
    locale: 'es'
  }
}`,...M.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'all',
    narrow: true
  }
}`,...W.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'month',
    initialPerson: 'all',
    timeZone: 'Asia/Tokyo'
  }
}`,...L.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'month',
    initialPerson: 'all',
    timeZone: 'Pacific/Honolulu'
  }
}`,...q.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    initialView: 'day',
    initialPerson: 'all',
    extendedHours: true,
    fixtureEvents: edgeEvents
  }
}`,...R.parameters?.docs?.source}}};const tt=["Fixture","Day","IndividualDay","DelayedRangeAndSelection","AllDayOverflow","SpringDstDay","FallDstDay","TeamWeek","IndividualWeek","Month","ContextualAgenda","ContextualAgendaSpanish","TrainingEnglish","TrainingSpanish","Empty","VisaAndGeneric","DenseDay","DenseMonth","Loading","Failed","Dark","Spanish","Narrow","Tokyo","Honolulu","ExtendedHours"];export{f as AllDayOverflow,k as ContextualAgenda,E as ContextualAgendaSpanish,N as Dark,v as Day,y as DelayedRangeAndSelection,P as DenseDay,Z as DenseMonth,I as Empty,R as ExtendedHours,x as Failed,w as FallDstDay,r as Fixture,q as Honolulu,h as IndividualDay,D as IndividualWeek,V as Loading,b as Month,W as Narrow,M as Spanish,T as SpringDstDay,C as TeamWeek,L as Tokyo,o as TrainingEnglish,S as TrainingSpanish,A as VisaAndGeneric,tt as __namedExportsOrder,et as default};
