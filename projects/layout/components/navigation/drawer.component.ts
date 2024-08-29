import {
    ChangeDetectionStrategy,
    Component,
    type DoCheck,
    inject,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {TuiActiveZone} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_SPEED,
    TUI_COMMON_ICONS,
    TUI_DROPDOWN_COMPONENT,
    TUI_ICON_END,
    tuiButtonOptionsProvider,
    tuiDropdown,
    TuiDropdownDirective,
    TuiDropdownOpen,
    TuiIcons,
    TuiScrollbar,
    tuiSlideInLeft,
    tuiToAnimationOptions,
    TuiWithDropdownOpen,
} from '@taiga-ui/core';
import {TUI_LAYOUT_ICONS} from '@taiga-ui/layout/tokens';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    template: `
        <tui-scrollbar [style.height.%]="100">
            <ng-container *polymorpheusOutlet="directive.content" />
        </tui-scrollbar>
    `,
    styleUrls: ['./drawer.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PolymorpheusOutlet, TuiScrollbar],
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
    selector: '[tuiIconButton][tuiDrawer]',
    template: '<ng-template><ng-content /></ng-template>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiDropdownDirective, TuiWithDropdownOpen],
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
})
export class TuiDrawer implements DoCheck {
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
