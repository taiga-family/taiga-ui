import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update migrateI18nLanguageSignal', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'replaces of(TUI_CHINESE_LANGUAGE) with signal(TUI_CHINESE_LANGUAGE) and adds signal import',
        migrate({
            component: `
import {TUI_LANGUAGE, TUI_CHINESE_LANGUAGE} from '@taiga-ui/i18n';
import {of} from 'rxjs';

bootstrapApplication(App, {
  providers: [
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_CHINESE_LANGUAGE),
    },
  ],
}).catch((err: unknown) => console.error(err));
`,
        }),
    );

    it(
        'replaces of(TUI_ENGLISH_LANGUAGE) with signal(TUI_ENGLISH_LANGUAGE)',
        migrate({
            component: `
import {TUI_LANGUAGE, TUI_ENGLISH_LANGUAGE} from '@taiga-ui/i18n';
import {of} from 'rxjs';

bootstrapApplication(App, {
  providers: [
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_ENGLISH_LANGUAGE),
    },
  ],
});
`,
        }),
    );

    it(
        'does not add signal import if already present',
        migrate({
            component: `
import {signal} from '@angular/core';
import {TUI_LANGUAGE, TUI_CHINESE_LANGUAGE} from '@taiga-ui/i18n';
import {of} from 'rxjs';

bootstrapApplication(App, {
  providers: [
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_CHINESE_LANGUAGE),
    },
  ],
});
`,
        }),
    );

    it(
        'does not touch TUI_DEFAULT_LANGUAGE with plain value',
        migrate({
            component: `
import {TUI_DEFAULT_LANGUAGE, TUI_RUSSIAN_LANGUAGE} from '@taiga-ui/i18n';

bootstrapApplication(App, {
  providers: [
    {
      provide: TUI_DEFAULT_LANGUAGE,
      useValue: TUI_RUSSIAN_LANGUAGE,
    },
  ],
});
`,
        }),
    );

    afterEach(() => resetActiveProject());
});
