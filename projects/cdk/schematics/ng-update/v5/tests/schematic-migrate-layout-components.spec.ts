import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update layout components from kit to layout', () => {
    async function migrate(source: string): Promise<string> {
        const {component} = await runMigration({
            component: source,
            collection,
        });

        return component;
    }

    it('migrates TuiSlides import from @taiga-ui/kit to @taiga-ui/layout', async () => {
        const before = `
import {TuiSlides} from '@taiga-ui/kit';

@Component({})
export class Test {
    slides = ['Slide 1', 'Slide 2'];
}
        `;

        const result = await migrate(before);

        expect(result).toContain('import { TuiSlides } from "@taiga-ui/layout";');
        expect(result).not.toContain('@taiga-ui/kit');
    });

    it('migrates TuiElasticContainer import from @taiga-ui/kit to @taiga-ui/layout', async () => {
        const before = `
import {TuiElasticContainer} from '@taiga-ui/kit';

@Component({})
export class Test {
    elastic = true;
}
        `;

        const result = await migrate(before);

        expect(result).toContain(
            'import { TuiElasticContainer } from "@taiga-ui/layout";',
        );
        expect(result).not.toContain('@taiga-ui/kit');
    });

    it('migrates TuiFloatingContainer import from @taiga-ui/kit to @taiga-ui/layout', async () => {
        const before = `
import {TuiFloatingContainer} from '@taiga-ui/kit';

@Component({})
export class Test {
    floating = false;
}
        `;

        const result = await migrate(before);

        expect(result).toContain(
            'import { TuiFloatingContainer } from "@taiga-ui/layout";',
        );
        expect(result).not.toContain('@taiga-ui/kit');
    });

    afterEach(() => resetActiveProject());
});
