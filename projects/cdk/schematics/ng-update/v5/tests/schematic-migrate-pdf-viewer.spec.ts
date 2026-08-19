import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiPdfViewer migration', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'should migrate TuiPdfViewerComponent import from @taiga-ui/kit to @taiga-ui/legacy',
        migrate({
            component: /* TypeScript */ `
                import {TuiPdfViewerComponent} from '@taiga-ui/kit';

                @Component({
                    imports: [TuiPdfViewerComponent],
                })
                export class Test {}
            `,
        }),
    );

    it(
        'should migrate TuiPdfViewerDirective import from @taiga-ui/kit to @taiga-ui/legacy',
        migrate({
            component: /* TypeScript */ `
                import {TuiPdfViewerDirective} from '@taiga-ui/kit';

                @Component({
                    imports: [TuiPdfViewerDirective],
                })
                export class Test {}
            `,
        }),
    );

    it(
        'should migrate TUI_PDF_VIEWER_OPTIONS token import from @taiga-ui/kit to @taiga-ui/legacy',
        migrate({
            component: /* TypeScript */ `
                import {inject} from '@angular/core';
                import {TUI_PDF_VIEWER_OPTIONS} from '@taiga-ui/kit';

                @Component({})
                export class Test {
                    protected readonly options = inject(TUI_PDF_VIEWER_OPTIONS);
                }
            `,
        }),
    );

    it(
        'should migrate TuiPdfViewerComponent import from @taiga-ui/experimental to TuiPdfViewer in @taiga-ui/layout',
        migrate({
            component: /* TypeScript */ `
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
            component: /* TypeScript */ `
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
