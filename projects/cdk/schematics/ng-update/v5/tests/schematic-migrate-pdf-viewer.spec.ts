import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update TuiPdfViewer migration', () => {
    async function migrate(source: string): Promise<string> {
        const {component} = await runMigration({
            component: source,
            collection,
        });

        return component;
    }

    it('should migrate TuiPdfViewer import from @taiga-ui/kit to @taiga-ui/legacy', async () => {
        const before = `
import {TuiPdfViewer} from '@taiga-ui/kit';

@Component({})
export class Test {
    constructor(private readonly pdfViewer: TuiPdfViewer) {}

    public show(): void {
        // some usage
    }
}
        `;

        const result = await migrate(before);

        expect(result).toContain('@taiga-ui/legacy');
        expect(result).not.toContain('@taiga-ui/kit');
        expect(result).toContain('TuiPdfViewer');
    });

    it('should migrate TuiPdfViewerComponent import from @taiga-ui/experimental to TuiPdfViewer in @taiga-ui/layout', async () => {
        const before = `
import {TuiPdfViewerComponent} from '@taiga-ui/experimental';

@Component({})
export class Test {
    constructor(private readonly pdfViewer: TuiPdfViewerComponent) {}

    public show(): void {
        // some usage
    }
}
        `;

        const result = await migrate(before);

        expect(result).toContain('@taiga-ui/layout');
        expect(result).not.toContain('@taiga-ui/experimental');
        expect(result).toContain('TuiPdfViewer');
        expect(result).not.toContain('TuiPdfViewerComponent');
    });

    afterEach(() => resetActiveProject());
});
