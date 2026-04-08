import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update input[tuiSlider][keySteps][max]', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'ignores [max] without [keySteps]',
        migrate({
            template: /* HTML */ `
                <input
                    tuiSlider
                    type="range"
                    [formControl]="formControl"
                    [max]="100"
                    [segments]="segments"
                    [step]="20"
                />
            `,
        }),
    );

    it(
        'add TODO if Slider uses both [max] and [keySteps]',
        migrate({
            template: /* HTML */ `
                <input
                    tuiSlider
                    type="range"
                    [formControl]="formControl"
                    [keySteps]="keySteps"
                    [max]="10 * segments"
                    [segments]="segments"
                />
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
