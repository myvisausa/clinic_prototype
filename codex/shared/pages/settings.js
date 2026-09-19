import { gettingStarted, profile, organization, tags, taskTemplates } from '../widgets/settings/account.js';
import { fiscal, prices } from '../widgets/settings/finance.js';
import { teamSettings, salesGoals } from '../widgets/settings/team.js';
import { integrations, legal, automation } from '../widgets/settings/integrations.js';
export function settings(page, tab = '', sub = '') {
  const selected = page || 'get-started';
  const body = {
    'get-started': gettingStarted,
    profile,
    organization,
    tags,
    'task-templates': () => taskTemplates(tab || 'Contact'),
    fiscal,
    prices: () => prices(tab || 'Products'),
    team: teamSettings,
    'sales-goals': salesGoals,
    integrations,
    legal,
    automation: () => automation(tab || 'Assignment'),
  }[selected];
  return `<div class="settings-content" data-settings-page="${selected}">${body ? body() : gettingStarted()}</div>`;
}
