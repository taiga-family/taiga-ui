import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {type TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TUI_ICON_END,
    TUI_ICON_START,
    tuiGetIconMode,
    tuiInjectIconResolver,
} from '@taiga-ui/core/tokens';

const OPT = {self: true, optional: true} as const;

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/icons.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-icons'},
})
class Styles {}

@Directive({
    host: {
        tuiIcons: '',
        '[style.--t-icon-start]': 'start()',
        '[style.--t-icon-end]': 'end()',
        '[attr.data-icon-start]': 'startMode()',
        '[attr.data-icon-end]': 'endMode()',
        'data-tui-version': TUI_VERSION,
    },
})
export class TuiIcons {
    private readonly resolver: TuiStringHandler<string> = tuiInjectIconResolver();

    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly start = computed(() => this.resolve(this.iconStart()));
    protected readonly end = computed(() => this.resolve(this.iconEnd()));
    protected readonly startMode = computed(() => tuiGetIconMode(this.iconStart()));
    protected readonly endMode = computed(() => tuiGetIconMode(this.iconEnd()));

    public readonly iconEnd = input(inject<string | undefined>(TUI_ICON_END, OPT));
    public readonly iconStart = input(inject<string | undefined>(TUI_ICON_START, OPT));

    public resolve(icon?: string | null): string | null {
        if (!icon) {
            return null;
        }

        return tuiGetIconMode(icon) === 'font'
            ? `'${this.resolver(icon)}'`
            : `url(${this.resolver(icon)})`;
    }
}
