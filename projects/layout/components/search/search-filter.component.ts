import {
    ChangeDetectionStrategy,
    Component,
    inject,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {
    tuiDropdown,
    TuiDropdownDirective,
    tuiDropdownOptionsProvider,
    TuiWithDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {TUI_ICON_START} from '@taiga-ui/core/tokens';
import {TUI_COMMON_ICONS} from '@taiga-ui/layout/tokens';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

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

    @ViewChild(TemplateRef)
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
    }
}
