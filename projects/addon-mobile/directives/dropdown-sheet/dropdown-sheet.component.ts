import {
    ChangeDetectionStrategy,
    Component,
    inject,
    TemplateRef,
    viewChild,
} from '@angular/core';
import {takeUntilDestroyed, toObservable} from '@angular/core/rxjs-interop';
import {TuiSheetDialogService} from '@taiga-ui/addon-mobile/components/sheet-dialog';
import {tuiIfMap} from '@taiga-ui/cdk/observables';
import {tuiSetSignal} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiDropdownDirective, TuiDropdownOpen} from '@taiga-ui/core/portals/dropdown';
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
})
export class TuiDropdownSheetComponent {
    private readonly content = viewChild(TemplateRef);
    private readonly dialogs = inject(TuiSheetDialogService);
    private readonly directive = inject(TuiDropdownSheet);
    private readonly open = inject(TuiDropdownOpen);

    protected readonly dropdown = inject(TuiDropdownDirective);
    protected readonly context = {$implicit: (): void => this.dropdown.toggle(false)};

    protected readonly sub = toObservable(this.content)
        .pipe(
            tuiIfMap((content) => {
                const enabled = this.open.enabled();

                tuiSetSignal(this.open.enabled, false);

                return this.dialogs
                    .open(content, this.directive.tuiDropdownSheet())
                    .pipe(
                        finalize(() => {
                            tuiSetSignal(this.open.enabled, enabled);
                            this.dropdown.toggle(false);
                        }),
                    );
            }),
            takeUntilDestroyed(),
        )
        .subscribe();
}
