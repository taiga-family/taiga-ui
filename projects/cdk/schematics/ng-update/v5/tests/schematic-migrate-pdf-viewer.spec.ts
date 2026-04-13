import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiPdfViewer migration', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'should migrate TuiPdfViewer import from @taiga-ui/kit to @taiga-ui/legacy',
        migrate({
            component: `
                import {TuiPdfViewer} from '@taiga-ui/kit';

                @Component({})
                export class Test {
                    constructor(private readonly pdfViewer: TuiPdfViewer) {}

                    public show(): void {
                        // some usage
                    }
                }
        `,
        }),
    );

    it(
        'should migrate TuiPdfViewerComponent import from @taiga-ui/experimental to TuiPdfViewer in @taiga-ui/layout',
        migrate({
            component: `
                import {TuiPdfViewerComponent} from '@taiga-ui/experimental';

                @Component({})
                export class Test {
                    constructor(private readonly pdfViewer: TuiPdfViewerComponent) {}

                    public show(): void {
                        // some usage
                    }
                }
            `,
        }),
    );

    it(
        'should migrate TuiPdfViewerService import from @taiga-ui/kit to @taiga-ui/legacy',
        migrate({
            component: `
                import {inject} from '@angular/core';
                import {TuiPdfViewerService} from '@taiga-ui/kit';

                @Component({})
                export class Test {
                    private readonly pdfViewerService = inject(TuiPdfViewerService);
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
