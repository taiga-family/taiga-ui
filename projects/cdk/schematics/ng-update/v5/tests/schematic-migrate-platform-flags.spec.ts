import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update migrate platform browser flags', () => {
    async function migrate(source: string): Promise<string> {
        const {component} = await runMigration({
            component: source,
            collection,
        });

        return component;
    }

    it('migrates browser flags from @taiga-ui/cdk to @ng-web-apis/platform', async () => {
        const result = await migrate(`
            import {tuiIsEdge, tuiIsFirefox, tuiIsSafari} from '@taiga-ui/cdk';

            export const flags = [tuiIsEdge, tuiIsFirefox, tuiIsSafari];
        `);

        expect(result).toContain('@ng-web-apis/platform');
        expect(result).toContain('isEdge');
        expect(result).toContain('isFirefox');
        expect(result).toContain('isSafari');
        expect(result).toContain('export const flags = [isEdge, isFirefox, isSafari];');
        expect(result).not.toContain('tuiIsEdge');
        expect(result).not.toContain('tuiIsFirefox');
        expect(result).not.toContain('tuiIsSafari');
    });

    afterEach(() => resetActiveProject());
});
