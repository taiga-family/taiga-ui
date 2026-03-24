import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update onboarding-flow migration', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'replaces TuiOnboardingFlowDialog import with TuiResponsiveDialog',
        migrate({
            component: `
                import {TuiOnboardingFlowDialog} from '@taiga-ui/proprietary';

                @Component({
                    standalone: true,
                    imports: [TuiOnboardingFlowDialog],
                    template: '',
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'replaces TuiOnboardingFlowDialogService import with TuiResponsiveDialogService',
        migrate({
            component: `
                import {TuiOnboardingFlowDialogService} from '@taiga-ui/proprietary';

                @Component({standalone: true, template: ''})
                export class TestComponent {
                    constructor(private readonly dialogs: TuiOnboardingFlowDialogService) {}
                }
            `,
        }),
    );

    it(
        'replaces TuiOnboardingDialogDirective import with TuiResponsiveDialog',
        migrate({
            component: `
                import {TuiOnboardingDialogDirective} from '@taiga-ui/proprietary';

                @Component({
                    standalone: true,
                    imports: [TuiOnboardingDialogDirective],
                    template: '',
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'renames [(tuiOnboarding)] to [(tuiResponsiveDialog)]',
        migrate({
            template: '<ng-template [(tuiOnboarding)]="open">content</ng-template>',
        }),
    );

    it(
        'renames [tuiOnboardingOptions] to [tuiResponsiveDialogOptions]',
        migrate({
            template:
                '<ng-template [(tuiOnboarding)]="open" [tuiOnboardingOptions]="options">content</ng-template>',
        }),
    );

    it(
        'renames (tuiOnboardingChange) to (tuiResponsiveDialogChange)',
        migrate({
            template:
                '<ng-template [tuiOnboarding]="open" (tuiOnboardingChange)="onOpen($event)">content</ng-template>',
        }),
    );

    afterEach(() => resetActiveProject());
});
