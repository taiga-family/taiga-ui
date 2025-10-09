import {NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    type OnInit,
    type TemplateRef,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiSheetDialogService} from '@taiga-ui/addon-mobile/components/sheet-dialog';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiDropdownMobileComponent} from './dropdown-mobile.component';
import {TuiDropdownMobile} from './dropdown-mobile.directive';

@Component({
    standalone: true,
    imports: [NgTemplateOutlet, PolymorpheusOutlet, TuiDropdownMobileComponent],
    templateUrl: './dropdown-mobile-wrapper.template.html',
    styleUrl: './dropdown-mobile-wrapper.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiActiveZone, TuiAnimated],
})
export class TuiDropdownMobileWrapperComponent implements OnInit {
    @ViewChild('content', {static: true})
    private readonly content?: TemplateRef<unknown>;

    protected readonly destroyRef = inject(DestroyRef);
    protected readonly dialogs = inject(TuiSheetDialogService);
    protected readonly directive = inject(TuiDropdownMobile);
    protected readonly dropdown = inject(TuiDropdownDirective);
    protected readonly context = {
        $implicit: (): void => this.dropdown.toggle(false),
    };

    public ngOnInit(): void {
        if (this.directive.tuiDropdownMobile) {
            this.dialogs
                .open(this.content, {label: this.directive.tuiDropdownMobile})
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe({complete: () => this.dropdown.toggle(false)});
        }
    }
}
