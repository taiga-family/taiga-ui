import {
    ChangeDetectionStrategy,
    Component,
    type DoCheck,
    effect,
    inject,
    TemplateRef,
    viewChild,
} from '@angular/core';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';
import {tuiSetSignal} from '@taiga-ui/cdk/utils/miscellaneous';
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
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    imports: [PolymorpheusOutlet, TuiScrollbar],
    template: `
        <tui-scrollbar [style.height.%]="100">
            <ng-container *polymorpheusOutlet="directive._content()" />
        </tui-scrollbar>
    `,
    styleUrl: './drawer.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiActiveZone, TuiAnimated],
    host: {
        tuiTheme: 'dark',
        '[style.inset-block-start.px]': 'top',
    },
})
class TuiDrawerComponent {
    protected readonly directive = inject(TuiDropdownDirective);
    protected readonly animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    protected readonly top =
        tuiIsHTMLElement(this.directive.el.offsetParent) &&
        tuiIsHTMLElement(this.directive.el.offsetParent.offsetParent)
            ? this.directive.el.offsetParent.getBoundingClientRect().bottom -
              Math.max(
                  this.directive.el.offsetParent.offsetParent.getBoundingClientRect().top,
                  0,
              )
            : 0;
}

@Component({
    standalone: true,
    // TODO: move to host directives
    selector: '[tuiIconButton][tuiNavigationDrawer]',
    template: '<ng-template><ng-content /></ng-template>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider({appearance: 'secondary-grayscale'}),
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

    protected readonly template = viewChild(TemplateRef);
    protected readonly ef = effect(() => this.dropdown.set(this.template()));

    public ngDoCheck(): void {
        // TODO: Refactor to tuiDirectiveBinding
        tuiSetSignal(this.icons.iconStart, this.open.tuiDropdownOpen() ? this.x : '');
    }
}
