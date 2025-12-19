import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    type DoCheck,
    inject,
    input,
    type Signal,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {tuiSetSignal, tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import {
    tuiAppearanceOptionsProvider,
    tuiAppearanceState,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {
    TUI_HINT_OPTIONS,
    TuiHintDescribe,
    TuiHintDirective,
    TuiHintHover,
} from '@taiga-ui/core/portals/hint';
import {TUI_ICON_START} from '@taiga-ui/core/tokens';
import {type TuiSizeS} from '@taiga-ui/core/types';
import {map} from 'rxjs';

import {TUI_TOOLTIP_OPTIONS} from './tooltip.options';

@Component({
    template: '',
    styleUrl: './tooltip.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-tooltip'},
})
class Styles {}

@Directive({
    selector: 'tui-icon[tuiTooltip]',
    providers: [
        tuiAppearanceOptionsProvider(TUI_TOOLTIP_OPTIONS),
        {
            provide: TUI_ICON_START,
            useFactory: () =>
                inject(TUI_TOOLTIP_OPTIONS).icon || inject(TUI_HINT_OPTIONS).icon,
        },
    ],
    hostDirectives: [
        TuiWithAppearance,
        {
            directive: TuiHintDescribe,
            inputs: ['tuiHintDescribe: tuiTooltipDescribe'],
        },
        {
            directive: TuiHintDirective,
            inputs: ['tuiHint: tuiTooltip', 'tuiHintAppearance', 'tuiHintContext'],
        },
    ],
    host: {
        tuiTooltip: '',
        '[attr.data-size]': 'size()',
        '(click.prevent)': '0',
        '(mousedown)': 'onClick($event)',
    },
})
export class TuiTooltip implements DoCheck {
    private readonly textfield = inject(TuiTextfieldComponent, {optional: true});
    private readonly isMobile = inject(WA_IS_MOBILE);
    private readonly describe = inject(TuiHintDescribe);
    private readonly driver = inject(TuiHintHover);

    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly state: Signal<unknown> = tuiAppearanceState(
        toSignal(
            inject(TuiHintHover).pipe(
                map((hover) => (hover ? 'hover' : null)),
                tuiWatch(),
            ),
            {initialValue: null},
        ),
    );

    public readonly size = input<TuiSizeS>('m');

    public ngDoCheck(): void {
        if (this.textfield?.id) {
            tuiSetSignal(this.describe.id, this.textfield.id);
        }
    }

    protected onClick(event: MouseEvent): void {
        if (this.isMobile) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            this.driver.toggle();
        }
    }
}
