import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    HostListener,
    Inject,
    Input,
} from '@angular/core';
import {TUI_IS_MOBILE, tuiDefaultProp, TuiDestroyService} from '@taiga-ui/cdk';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import {TuiBrightness, TuiHintModeT} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {TooltipOptions, TUI_TOOLTIP_OPTIONS} from './tooltip-options';

@Component({
    selector: 'tui-tooltip',
    templateUrl: './tooltip.template.html',
    styleUrls: ['./tooltip.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, MODE_PROVIDER],
})
export class TuiTooltipComponent {
    private globalMode: TuiBrightness | null = null;

    @Input()
    @tuiDefaultProp()
    content: PolymorpheusContent = '';

    @Input()
    @tuiDefaultProp()
    mode: TooltipOptions['mode'] = this.options.mode;

    @Input()
    @tuiDefaultProp()
    direction: TooltipOptions['direction'] = this.options.direction;

    @Input()
    @tuiDefaultProp()
    showDelay: TooltipOptions['showDelay'] = this.options.showDelay;

    @Input()
    @tuiDefaultProp()
    hideDelay: TooltipOptions['hideDelay'] = this.options.hideDelay;

    @Input()
    @tuiDefaultProp()
    describeId = '';

    constructor(
        @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(TUI_MODE) mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(TUI_TOOLTIP_OPTIONS) private readonly options: TooltipOptions,
    ) {
        mode$.pipe(takeUntil(destroy$)).subscribe(mode => {
            this.globalMode = mode;
        });
    }

    // TODO: Simplify
    @HostBinding('attr.data-mode')
    get computedMode(): TuiHintModeT | TuiBrightness | null {
        return this.mode || this.globalMode;
    }

    @HostListener('mousedown', ['$event'])
    @HostListener('click', ['$event'])
    stopOnMobile(event: MouseEvent) {
        if (this.isMobile) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    get icon(): PolymorpheusContent {
        return this.options.icon;
    }
}
