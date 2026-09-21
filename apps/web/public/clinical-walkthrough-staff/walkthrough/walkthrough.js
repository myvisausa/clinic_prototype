const lang =
  new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'es';
const isStaffWalkthrough = location.pathname.includes('/walkthrough/staff/');
const lessonPath = isStaffWalkthrough ? 'staff-chapters.json' : 'chapters.json';
const iframePath = isStaffWalkthrough ? '../../iframe.html' : '../iframe.html';
const buildPath = isStaffWalkthrough ? '../build.json' : 'build.json';
const copy = {
  en: {
    title: isStaffWalkthrough
      ? 'Clinical workspace guide'
      : 'A guided clinical visit',
    previous: 'Previous chapter',
    next: 'Next chapter',
    reset: isStaffWalkthrough ? 'Reset preview' : 'Reset this demonstration',
    full: isStaffWalkthrough ? 'Expand preview' : 'Open full screen',
    build: 'Built',
    click: 'Where to click',
    say: 'What to say',
    result: 'What to look for',
    live: 'Interactive application view',
    section: 'Guide section',
    step: 'Step',
    simulation: isStaffWalkthrough
      ? 'Interactive previews use sample data. Changes are temporary and reset separately in each preview.'
      : 'Training with fictional data. Each panel is independent. Follow the instructions below; supported edits are simulated in memory. No clinic records are changed.',
    archive: isStaffWalkthrough
      ? 'Staff reference guide'
      : 'Original pilot walkthrough and dated findings',
    loadError: 'The lesson could not load. Reload this page to try again.',
  },
  es: {
    title: isStaffWalkthrough
      ? 'Guía del espacio clínico'
      : 'Una visita clínica guiada',
    previous: 'Capítulo anterior',
    next: 'Capítulo siguiente',
    reset: isStaffWalkthrough
      ? 'Reiniciar vista previa'
      : 'Reiniciar esta demostración',
    full: isStaffWalkthrough
      ? 'Ampliar vista previa'
      : 'Abrir pantalla completa',
    build: 'Compilado',
    click: 'Dónde hacer clic',
    say: 'Qué decir',
    result: 'Qué observar',
    live: 'Vista interactiva de la aplicación',
    section: 'Sección de la guía',
    step: 'Paso',
    simulation: isStaffWalkthrough
      ? 'Las vistas previas interactivas usan datos de muestra. Los cambios son temporales y se reinician por separado en cada vista previa.'
      : 'Capacitación con datos ficticios. Cada panel es independiente. Siga las instrucciones; las ediciones compatibles se simulan en memoria. No se modifican registros de la clínica.',
    archive: isStaffWalkthrough
      ? 'Guía de referencia para el personal'
      : 'Recorrido piloto original y hallazgos de esa fecha',
    loadError:
      'No se pudo cargar la lección. Recargue esta página para intentarlo de nuevo.',
  },
}[lang];
document.documentElement.lang = lang;
document.title = copy.title;
for (const id of ['title', 'simulation', 'previous', 'next'])
  document.getElementById(id).textContent = copy[id];
const archive = document.getElementById('archive');
archive.textContent = copy.archive;
archive.href = isStaffWalkthrough
  ? `../../reference/index${lang === 'en' ? '-en' : ''}.html`
  : `https://myvisausa.github.io/clinic_prototype/codex/reference-captures/2026-09-20-walkthrough/index${lang === 'en' ? '-en' : ''}.html`;

async function loadLessons() {
  const response = await fetch(lessonPath);
  if (!response.ok) throw new Error(copy.loadError);
  const chapters = await response.json();
  let chapter = Math.max(
    0,
    Math.min(
      chapters.length - 1,
      Number.parseInt(location.hash.slice(1), 10) || 0
    )
  );
  const buttons = chapters.map((lesson, index) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = `${index + 1}. ${lesson.title[lang]}`;
    button.onclick = () => show(index);
    li.append(button);
    document.getElementById('chapters').append(li);
    return button;
  });
  const panelsByRoute = new Map();
  const sectionsById = new Map();
  chapters.forEach((lesson, chapterIndex) =>
    (isStaffWalkthrough ? lesson.sections : lesson.panels).forEach(
      (panel, panelIndex) => {
        sectionsById.set(panel.id, { chapterIndex, panelIndex });
        if (panel.route)
          panelsByRoute.set(panel.route, { chapterIndex, panelIndex });
      }
    )
  );
  function show(index) {
    chapter = index;
    const lesson = chapters[index];
    document.getElementById('heading').textContent =
      `${index + 1}. ${lesson.title[lang]}`;
    document.getElementById('description').textContent = lesson.intro[lang];
    const panels = document.getElementById('panels');
    panels.replaceChildren();
    const lessonSections = isStaffWalkthrough ? lesson.sections : lesson.panels;
    lessonSections.forEach((panel, step) => {
      const article = document.createElement('article');
      article.id = `panel-${panel.id}`;
      article.tabIndex = -1;
      article.className = 'lesson-step';
      const heading = document.createElement('h3');
      heading.textContent = `${isStaffWalkthrough ? copy.section : copy.step} ${index + 1}.${step + 1} — ${panel.title[lang]}`;
      article.append(heading);
      if (isStaffWalkthrough) {
        article.classList.add(`section-${panel.type}`);
        const content = document.createElement('div');
        content.className = 'guide-content';
        for (const item of panel.content ?? []) {
          const section = document.createElement('section');
          section.className = 'guide-detail';
          const label = document.createElement('h4');
          label.textContent = item.heading[lang];
          const paragraph = document.createElement('p');
          paragraph.textContent = item.body[lang];
          section.append(label, paragraph);
          content.append(section);
        }
        if (panel.type === 'checklist') {
          const list = document.createElement('ul');
          for (const item of panel.items) {
            const entry = document.createElement('li');
            entry.textContent = item[lang];
            list.append(entry);
          }
          content.append(list);
        } else if (panel.type === 'illustrated') {
          const image = document.createElement('img');
          image.src = panel.image;
          image.alt = panel.alt[lang];
          content.append(image);
        } else if (panel.type === 'link') {
          const link = document.createElement('a');
          link.href = `#section-${panel.targetId}`;
          link.textContent = panel.label[lang];
          link.onclick = (event) => {
            event.preventDefault();
            const destination = sectionsById.get(panel.targetId);
            if (!destination) return;
            show(destination.chapterIndex);
            requestAnimationFrame(() => {
              const target = document.getElementById(`panel-${panel.targetId}`);
              target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              target?.focus({ preventScroll: true });
            });
          };
          content.append(link);
        }
        if (panel.type !== 'interactive') {
          article.append(content);
          panels.append(article);
          return;
        }
        const pair = document.createElement('div');
        pair.className = 'lesson-pair guide-pair';
        content.classList.add('narration');
        const demonstration = createDemonstration(panel, step);
        pair.append(content, demonstration);
        article.append(pair);
        panels.append(article);
        return;
      }
      const pair = document.createElement('div');
      pair.className = 'lesson-pair';
      const script = document.createElement('div');
      script.className = 'narration';
      for (const field of ['click', 'say', 'result']) {
        const section = document.createElement('section');
        section.className = `instruction instruction-${field}`;
        const label = document.createElement('h4');
        label.textContent = copy[field];
        const paragraph = document.createElement(
          field === 'say' ? 'blockquote' : 'p'
        );
        paragraph.textContent = panel[field][lang];
        section.append(label, paragraph);
        script.append(section);
      }
      const demonstration = createDemonstration(panel, step);
      pair.append(script, demonstration);
      article.append(pair);
      panels.append(article);
    });
    function createDemonstration(panel, step) {
      const demonstration = document.createElement('div');
      demonstration.className = 'demonstration';
      const actions = document.createElement('div');
      actions.className = 'demo-actions';
      const badge = document.createElement('span');
      badge.textContent = copy.live;
      const reset = document.createElement('button');
      reset.textContent = copy.reset;
      const full = document.createElement('a');
      full.textContent = copy.full;
      full.target = '_blank';
      full.rel = 'noopener';
      const frame = document.createElement('iframe');
      frame.title = panel.title[lang];
      frame.loading = step === 0 ? 'eager' : 'lazy';
      frame.setAttribute(
        'sandbox',
        'allow-scripts allow-same-origin allow-downloads allow-modals'
      );
      frame.src = `${iframePath}?id=${encodeURIComponent(panel.story[lang])}&viewMode=story`;
      full.href = frame.src;
      reset.onclick = () => {
        frame.src = frame.src;
      };
      actions.append(badge, reset, full);
      demonstration.append(actions, frame);
      return demonstration;
    }
    document.getElementById('previous').disabled = index === 0;
    document.getElementById('next').disabled = index === chapters.length - 1;
    buttons.forEach((button, i) => {
      if (i === index) button.setAttribute('aria-current', 'step');
      else button.removeAttribute('aria-current');
    });
    history.replaceState(null, '', `?lang=${lang}#${index}`);
    document.querySelectorAll('nav a').forEach((link) => {
      link.hash = String(index);
    });
    document.getElementById('heading').focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
  document.getElementById('previous').onclick = () => show(chapter - 1);
  document.getElementById('next').onclick = () => show(chapter + 1);
  window.addEventListener('message', (event) => {
    if (
      event.origin !== location.origin ||
      !event.data ||
      event.data.type !== 'walkthrough:navigate'
    )
      return;
    const frame = [...document.querySelectorAll('iframe')].find(
      (candidate) => candidate.contentWindow === event.source
    );
    if (!frame || typeof event.data.route !== 'string') return;
    let route;
    try {
      route = new URL(event.data.route, location.origin);
    } catch {
      return;
    }
    if (route.origin !== location.origin) return;
    const pathname = route.pathname.replace(/^\/(en|es)(?=\/)/, '');
    let canonical;
    if (pathname === '/clinical/schedule') {
      const view = route.searchParams.get('view');
      canonical =
        view === 'grid' && route.searchParams.get('calendarView') === 'day'
          ? '/clinical/schedule?view=grid&calendarView=day'
          : view === 'day'
            ? '/clinical/schedule?view=day'
            : undefined;
    } else if (pathname === '/clinical/pacientes') {
      const section = route.searchParams.get('section');
      const hasContact = route.searchParams.has('contactId');
      const declared = `${pathname}${route.search}`;
      canonical = panelsByRoute.has(declared)
        ? declared
        : !hasContact
          ? undefined
          : section === 'treatments' &&
              route.searchParams.get('view') === 'plans'
            ? '/clinical/pacientes?section=treatments&view=plans'
            : section === 'chart'
              ? '/clinical/pacientes?section=chart'
              : section === 'evolutions'
                ? '/clinical/pacientes?section=evolutions'
                : section === 'summary'
                  ? '/clinical/pacientes?section=summary'
                  : undefined;
    }
    const destination = panelsByRoute.get(canonical);
    if (!destination) return;
    show(destination.chapterIndex);
    requestAnimationFrame(() => {
      const panel = document.getElementById(
        `panel-${(isStaffWalkthrough ? chapters[destination.chapterIndex].sections : chapters[destination.chapterIndex].panels)[destination.panelIndex].id}`
      );
      panel?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      panel?.focus({ preventScroll: true });
    });
  });
  show(chapter);
}
loadLessons().catch(() => {
  document.getElementById('description').textContent = copy.loadError;
});
fetch(buildPath)
  .then((response) => response.json())
  .then((build) => {
    document.getElementById('build').textContent =
      `${copy.build}: ${build.date} · ${build.commit}${build.dirty ? ' (local changes)' : ''}`;
  })
  .catch(() => {
    document.getElementById('build').textContent = 'Local preview';
  });
