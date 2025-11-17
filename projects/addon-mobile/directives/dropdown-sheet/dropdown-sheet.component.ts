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
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiDropdownSheet} from './dropdown-sheet.directive';

@Component({
    imports: [PolymorpheusOutlet],
    template: `
        <ng-template>
            <ng-container
                *polymorpheusOutlet="dropdown._content() as text; context: context"
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

    protected readonly dropdown = inject(TuiDropdownDirective);
    protected readonly context = {$implicit: (): void => this.dropdown.toggle(false)};
    protected readonly sub = toObservable(this.content)
        .pipe(
            tuiIfMap((content) =>
                this.dialogs.open(content, {label: this.directive.tuiDropdownSheet()}),
            ),
            takeUntilDestroyed(),
        )
        .subscribe({complete: () => this.dropdown.toggle(false)});
}
