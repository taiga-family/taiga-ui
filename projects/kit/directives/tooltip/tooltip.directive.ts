import type {DoCheck, Signal} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
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
} from '@taiga-ui/core/directives/hint';
import {TUI_ICON_START} from '@taiga-ui/core/tokens';
import type {TuiSizeS} from '@taiga-ui/core/types';
import {map} from 'rxjs';

import {TUI_TOOLTIP_OPTIONS} from './tooltip.options';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./tooltip.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-tooltip',
    },
})
class TuiTooltipStyles {}

@Directive({
    standalone: true,
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
        '[attr.data-size]': 'size',
        '(click.prevent)': '0',
        '(pointerdown)': 'onClick($event)',
    },
})
export class TuiTooltip implements DoCheck {
    private readonly textfield = inject(TuiTextfieldComponent, {optional: true});
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly describe = inject(TuiHintDescribe);
    private readonly driver = inject(TuiHintHover);

    protected readonly nothing = tuiWithStyles(TuiTooltipStyles);
    protected readonly state: Signal<unknown> = tuiAppearanceState(
        toSignal(
            inject(TuiHintHover).pipe(
                map((hover) => (hover ? 'hover' : null)),
                tuiWatch(),
            ),
            {initialValue: null},
        ),
    );

    @Input()
    public size: TuiSizeS = 'm';

    public ngDoCheck(): void {
        if (this.textfield?.id) {
            this.describe.tuiHintDescribe = this.textfield.id;
        }
    }

    protected onClick(event: PointerEvent): void {
        if (this.isMobile) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            this.driver.toggle();
        }
    }
}
