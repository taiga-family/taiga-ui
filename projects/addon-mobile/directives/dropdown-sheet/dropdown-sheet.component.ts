import {
    ChangeDetectionStrategy,
    Component,
    EnvironmentInjector,
    inject,
    Injector,
    TemplateRef,
    viewChild,
} from '@angular/core';
import {takeUntilDestroyed, toObservable} from '@angular/core/rxjs-interop';
import {TuiSheetDialogService} from '@taiga-ui/addon-mobile/components/sheet-dialog';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {tuiIfMap} from '@taiga-ui/cdk/observables';
import {TuiDropdownDirective} from '@taiga-ui/core/portals/dropdown';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {finalize} from 'rxjs';

import {TuiDropdownSheet} from './dropdown-sheet.directive';

@Component({
    imports: [PolymorpheusOutlet],
    template: `
        <ng-template>
            <ng-container
                *polymorpheusOutlet="dropdown.content() as text; context: context"
            >
                {{ text }}
            </ng-container>
        </ng-template>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TuiSheetDialogService,
            // Only the active zone crosses over, portal host and options stay global
            useFactory: () =>
                Injector.create({
                    parent: inject(EnvironmentInjector),
                    providers: [
                        {provide: TuiActiveZone, useValue: inject(TuiActiveZone)},
                        TuiSheetDialogService,
                    ],
                }).get(TuiSheetDialogService),
        },
    ],
})
export class TuiDropdownSheetComponent {
    private readonly content = viewChild(TemplateRef);
    private readonly dialogs = inject(TuiSheetDialogService);
    private readonly directive = inject(TuiDropdownSheet);

    protected readonly dropdown = inject(TuiDropdownDirective);
    protected readonly context = {$implicit: (): void => this.dropdown.toggle(false)};

    protected readonly sub = toObservable(this.content)
        .pipe(
            tuiIfMap((content) =>
                this.dialogs
                    .open(content, this.directive.tuiDropdownSheet())
                    .pipe(finalize(() => this.dropdown.toggle(false))),
            ),
            takeUntilDestroyed(),
        )
        .subscribe();
}
