import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update TuiScrollService warning', () => {
    async function migrate(component: string): Promise<string> {
        const {component: result} = await runMigration({
            component,
            collection,
        });

        return result;
    }

    it('adds TODO comment for TuiScrollService import', async () => {
        const result = await migrate(`
            import {Component} from '@angular/core';
            import {TuiScrollService} from '@taiga-ui/cdk';

            @Component({})
            export class TestComponent {
                constructor(private readonly scrollService: TuiScrollService) {}
            }
        `);

        expect(result).toContain(
            `// TODO: (Taiga UI migration) TuiScrollService has been removed. Use native scrolling APIs (window.scrollTo, Element.scrollTo, Element.scrollIntoView) instead`,
        );
        expect(result).toContain(`import {TuiScrollService} from '@taiga-ui/cdk';`);
    });

    afterEach(() => resetActiveProject());
});
