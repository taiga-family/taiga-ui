import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    inject,
    TemplateRef,
    viewChild,
} from '@angular/core';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiScrollbar} from '@taiga-ui/core/components/scrollbar';
import {
    TUI_DROPDOWN_COMPONENT,
    tuiDropdown,
    TuiDropdownDirective,
    tuiDropdownOpen,
    TuiWithDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {tuiIconEnd} from '@taiga-ui/core/directives/icons';
import {TUI_COMMON_ICONS, TUI_ICON_END} from '@taiga-ui/core/tokens';
import {TUI_LAYOUT_ICONS} from '@taiga-ui/layout/tokens';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    imports: [PolymorpheusOutlet, TuiScrollbar],
    template: `
        <tui-scrollbar [style.height.%]="100">
            <ng-container *polymorpheusOutlet="directive.content()" />
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
export class TuiDrawerDirective {
    private readonly x = inject(TUI_COMMON_ICONS).close;
    private readonly dropdown = tuiDropdown(null);
    private readonly open = tuiDropdownOpen();

    protected readonly template = viewChild(TemplateRef);
    protected readonly ef = effect(() => this.dropdown.set(this.template()));
    protected readonly icon = tuiIconEnd(computed(() => (this.open() ? this.x : '')));
}
