import {
    ChangeDetectionStrategy,
    Component,
    effect,
    inject,
    TemplateRef,
    viewChild,
} from '@angular/core';
import {
    tuiDropdown,
    TuiDropdownDirective,
    tuiDropdownOptionsProvider,
    TuiWithDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {TUI_ICON_START} from '@taiga-ui/core/tokens';
import {TUI_COMMON_ICONS} from '@taiga-ui/layout/tokens';

@Component({
    standalone: true,
    selector: 'button[tuiSearchFilter]',
    template: '<ng-template><ng-content /></ng-template>filters',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiDropdownOptionsProvider({align: 'right'}),
        {
            provide: TUI_ICON_START,
            useFactory: () => inject(TUI_COMMON_ICONS).filter,
        },
    ],
    hostDirectives: [TuiDropdownDirective, TuiWithDropdownOpen],
})
export class TuiSearchFilterComponent {
    private readonly dropdown = tuiDropdown(null);
    protected readonly template = viewChild(TemplateRef);
    protected readonly ef = effect(() => this.dropdown.set(this.template()));
}
