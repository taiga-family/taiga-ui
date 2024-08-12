import {
    ChangeDetectionStrategy,
    Component,
    inject,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {
    TUI_ICON_START,
    tuiDropdown,
    TuiDropdownDirective,
    tuiDropdownOptionsProvider,
    TuiWithDropdownOpen,
} from '@taiga-ui/core';
import {TUI_COMMON_ICONS} from '@taiga-ui/layout/tokens';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector: 'button[tuiSearchFilter]',
    template: '<ng-template><ng-content /></ng-template>',
    providers: [
        tuiDropdownOptionsProvider({align: 'right'}),
        {
            provide: TUI_ICON_START,
            useFactory: () => inject(TUI_COMMON_ICONS).filter,
        },
    ],
    hostDirectives: [TuiDropdownDirective, TuiWithDropdownOpen],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSearchFilterComponent {
    private readonly dropdown = tuiDropdown(null);

    @ViewChild(TemplateRef)
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
    }
}
