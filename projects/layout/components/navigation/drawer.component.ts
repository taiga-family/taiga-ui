import type {DoCheck} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {tuiSlideInLeft} from '@taiga-ui/core/animations';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiScrollbar} from '@taiga-ui/core/components/scrollbar';
import {
    TUI_DROPDOWN_COMPONENT,
    tuiDropdown,
    TuiDropdownDirective,
    TuiDropdownOpen,
    TuiWithDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {TuiIcons} from '@taiga-ui/core/directives/icons';
import {
    TUI_ANIMATIONS_SPEED,
    TUI_COMMON_ICONS,
    TUI_ICON_END,
} from '@taiga-ui/core/tokens';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils/miscellaneous';
import {TUI_LAYOUT_ICONS} from '@taiga-ui/layout/tokens';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [PolymorpheusOutlet, TuiScrollbar],
    template: `
        <tui-scrollbar [style.height.%]="100">
            <ng-container *polymorpheusOutlet="directive.content" />
        </tui-scrollbar>
    `,
    styleUrls: ['./drawer.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInLeft],
    hostDirectives: [TuiActiveZone],
    host: {
        tuiTheme: 'dark',
        '[@tuiSlideInLeft]': 'animation',
    },
})
class TuiDrawerComponent {
    protected readonly directive = inject(TuiDropdownDirective);
    protected readonly animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
}

@Component({
    standalone: true,
    selector: '[tuiIconButton][tuiNavigationDrawer]',
    template: '<ng-template><ng-content /></ng-template>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider({appearance: 'secondary'}),
        {
            provide: TUI_ICON_END,
            useFactory: () => inject(TUI_LAYOUT_ICONS).grid,
        },
        {
            provide: TUI_DROPDOWN_COMPONENT,
            useValue: TuiDrawerComponent,
        },
    ],
    hostDirectives: [TuiDropdownDirective, TuiWithDropdownOpen],
})
export class TuiDrawerDirective implements DoCheck {
    private readonly x = inject(TUI_COMMON_ICONS).close;
    private readonly icons = inject(TuiIcons);
    private readonly dropdown = tuiDropdown(null);
    private readonly open = inject(TuiDropdownOpen);

    public ngDoCheck(): void {
        this.icons.iconStart = this.open.tuiDropdownOpen ? this.x : '';
    }

    @ViewChild(TemplateRef)
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
    }
}
