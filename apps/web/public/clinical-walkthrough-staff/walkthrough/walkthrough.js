const lang =
  new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'es';
const isStaffWalkthrough = location.pathname.includes('/walkthrough/staff/');
const lessonPath = isStaffWalkthrough
  ? '../staff-chapters.json'
  : 'chapters.json';
const iframePath = isStaffWalkthrough ? '../../iframe.html' : '../iframe.html';
const buildPath = isStaffWalkthrough ? '../build.json' : 'build.json';
const developerMode =
  new URLSearchParams(location.search).get('developer') === '1';
const copy = {
  en: {
    title: isStaffWalkthrough ? 'Staff task guide' : 'A guided clinical visit',
    previous: 'Previous chapter',
    next: 'Next chapter',
    reset: isStaffWalkthrough ? 'Start over' : 'Reset this demonstration',
    full: isStaffWalkthrough ? 'Full screen' : 'Open full screen',
    collapse: 'Exit full screen',
    build: 'Built',
    click: 'Where to click',
    say: 'What to say',
    result: 'What to look for',
    live: 'Interactive application view',
    section: 'Guide section',
    orientation: 'Orientation',
    task: 'Task',
    scenario: 'Scenario',
    steps: 'Steps',
    outcome: 'Result',
    tips: 'Tips',
    check: 'Check yourself',
    answer: 'Show the answer',
    appMenu: 'Application menu',
    optionalOrientation: 'Optional orientation',
    step: 'Step',
    simulation: isStaffWalkthrough
      ? 'Practice mode: the patients are fictional and nothing you do here is saved.'
      : 'Training with fictional data. Each panel is independent. Follow the instructions below; supported edits are simulated in memory. No clinic records are changed.',
    archive: isStaffWalkthrough
      ? 'Staff reference guide'
      : 'Original pilot walkthrough and dated findings',
    loadError: 'The lesson could not load. Reload this page to try again.',
  },
  es: {
    title: isStaffWalkthrough
      ? 'Guía de tareas del personal'
      : 'Una visita clínica guiada',
    previous: 'Capítulo anterior',
    next: 'Capítulo siguiente',
    reset: isStaffWalkthrough
      ? 'Empezar de nuevo'
      : 'Reiniciar esta demostración',
    full: isStaffWalkthrough ? 'Pantalla completa' : 'Abrir pantalla completa',
    collapse: 'Salir de pantalla completa',
    build: 'Compilado',
    click: 'Dónde hacer clic',
    say: 'Qué decir',
    result: 'Qué observar',
    live: 'Vista interactiva de la aplicación',
    section: 'Sección de la guía',
    orientation: 'Orientación',
    task: 'Tarea',
    scenario: 'Situación',
    steps: 'Pasos',
    outcome: 'Resultado',
    tips: 'Consejos',
    check: 'Compruebe',
    answer: 'Ver la respuesta',
    appMenu: 'Menú de la aplicación',
    optionalOrientation: 'Orientación opcional',
    step: 'Paso',
    simulation: isStaffWalkthrough
      ? 'Modo práctica: los pacientes son ficticios y nada de lo que haga aquí se guarda.'
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
if (isStaffWalkthrough && !developerMode)
  document.getElementById('storybook').hidden = true;

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
        // Several panels can practise on the same screen; the first one is
        // the lesson a sidebar click opens.
        if (panel.route && !panelsByRoute.has(panel.route))
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
      const sectionLabel = panel.steps
        ? panel.layout === 'orientation'
          ? copy.orientation
          : copy.task
        : isStaffWalkthrough
          ? copy.section
          : copy.step;
      heading.textContent = `${sectionLabel} ${index + 1}.${step + 1} — ${panel.title[lang]}`;
      article.append(heading);
      if (isStaffWalkthrough) {
        article.classList.add(`section-${panel.type}`);
        if (panel.layout) article.classList.add(`guide-${panel.layout}`);
        if (panel.steps) {
          const task = document.createElement('div');
          task.className = 'task-copy';
          const scenario = document.createElement('section');
          scenario.className = 'task-scenario';
          const scenarioLabel = document.createElement('h4');
          scenarioLabel.textContent = copy.scenario;
          const scenarioText = document.createElement('p');
          scenarioText.textContent = panel.scenario[lang];
          scenario.append(scenarioLabel, scenarioText);
          const stepsLabel = document.createElement('h4');
          stepsLabel.textContent = copy.steps;
          const steps = document.createElement('ol');
          steps.className = 'task-steps';
          for (const item of panel.steps) {
            const entry = document.createElement('li');
            entry.dataset.stepId = item.id;
            entry.textContent = item.text[lang];
            steps.append(entry);
          }
          const result = document.createElement('section');
          result.className = 'task-result';
          const resultLabel = document.createElement('h4');
          resultLabel.textContent = copy.outcome;
          const resultText = document.createElement('p');
          resultText.textContent = panel.result[lang];
          result.append(resultLabel, resultText);
          const stepGroup = document.createElement('section');
          stepGroup.className = 'task-step-group';
          stepGroup.append(stepsLabel, steps);
          task.append(scenario, stepGroup, result);
          if (panel.check) {
            const check = document.createElement('details');
            check.className = 'task-check';
            const question = document.createElement('summary');
            question.textContent = `${copy.check}: ${panel.check.question[lang]}`;
            const answer = document.createElement('p');
            answer.textContent = panel.check.answer[lang];
            answer.setAttribute('aria-label', copy.answer);
            check.append(question, answer);
            task.append(check);
          }
          if (panel.tips?.length) {
            const tips = document.createElement('section');
            tips.className = 'task-tips';
            const tipsLabel = document.createElement('h4');
            tipsLabel.textContent = copy.tips;
            const list = document.createElement('ul');
            for (const tip of panel.tips) {
              const entry = document.createElement('li');
              entry.textContent = tip[lang];
              list.append(entry);
            }
            tips.append(tipsLabel, list);
            task.append(tips);
          }
          const demonstration = createDemonstration(panel, step, article);
          if (panel.layout === 'orientation') {
            const details = document.createElement('details');
            details.className = 'orientation-details';
            const summary = document.createElement('summary');
            summary.textContent = copy.optionalOrientation;
            details.append(summary, task, demonstration);
            article.append(details);
          } else article.append(task, demonstration);
          panels.append(article);
          return;
        }
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
        const demonstration = createDemonstration(panel, step, article);
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
      const demonstration = createDemonstration(panel, step, article);
      pair.append(script, demonstration);
      article.append(pair);
      panels.append(article);
    });
    function createDemonstration(panel, step, article) {
      const demonstration = document.createElement('div');
      demonstration.className = 'demonstration';
      const actions = document.createElement('div');
      actions.className = 'demo-actions';
      const badge = document.createElement('span');
      badge.textContent = copy.live;
      const reset = document.createElement('button');
      reset.textContent = copy.reset;
      const full = document.createElement(isStaffWalkthrough ? 'button' : 'a');
      full.textContent = copy.full;
      const frame = document.createElement('iframe');
      frame.title = panel.title[lang];
      frame.loading = step === 0 ? 'eager' : 'lazy';
      frame.setAttribute(
        'sandbox',
        'allow-scripts allow-same-origin allow-downloads allow-modals'
      );
      frame.src = `${iframePath}?id=${encodeURIComponent(panel.story[lang])}&viewMode=story`;
      if (isStaffWalkthrough) {
        full.onclick = () => {
          const expanded = article.classList.toggle('preview-expanded');
          full.textContent = expanded ? copy.collapse : copy.full;
        };
      } else {
        full.target = '_blank';
        full.rel = 'noopener';
        full.href = frame.src;
      }
      reset.onclick = () => {
        frame.src = frame.src;
      };
      actions.append(...(isStaffWalkthrough ? [] : [badge]), reset, full);
      if (!isStaffWalkthrough || !panel.sidebarRoute) {
        demonstration.append(actions, frame);
        return demonstration;
      }
      // The application menu sits beside the practice screen in its own frame,
      // so dialogs inside the screen never cover it and full screen keeps it.
      const menu = document.createElement('iframe');
      menu.className = 'practice-menu';
      menu.title = copy.appMenu;
      menu.loading = frame.loading;
      menu.setAttribute('sandbox', 'allow-scripts allow-same-origin');
      menu.src = `${iframePath}?id=walkthrough-practice-sidebar--default&viewMode=story&practiceLocale=${lang}&practiceRoute=${encodeURIComponent(panel.sidebarRoute)}`;
      const stage = document.createElement('div');
      stage.className = 'practice-stage';
      stage.append(menu, frame);
      reset.onclick = () => {
        frame.src = frame.src;
        menu.src = menu.src;
      };
      demonstration.append(actions, stage);
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
    if (pathname === '/dashboard') canonical = '/dashboard';
    else if (pathname === '/clinical/schedule') {
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
if (!isStaffWalkthrough || developerMode)
  fetch(buildPath)
    .then((response) => response.json())
    .then((build) => {
      document.getElementById('build').textContent =
        `${copy.build}: ${build.date} · ${build.commit}${build.dirty ? ' (local changes)' : ''}`;
    })
    .catch(() => {
      document.getElementById('build').textContent = 'Local preview';
    });
