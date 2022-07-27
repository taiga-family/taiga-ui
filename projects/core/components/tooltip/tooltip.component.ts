import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    HostListener,
    Inject,
    Input,
} from '@angular/core';
import {TUI_IS_MOBILE, tuiDefaultProp, TuiDestroyService} from '@taiga-ui/cdk';
import {TUI_HINT_OPTIONS, TuiHintOptions} from '@taiga-ui/core/directives';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import {TuiBrightness, TuiHintMode} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

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
    mode: TuiHintOptions['mode'] = this.options.mode;

    @Input()
    @tuiDefaultProp()
    direction: TuiHintOptions['direction'] = this.options.direction;

    @Input()
    @tuiDefaultProp()
    showDelay: TuiHintOptions['tuiHintShowDelay'] = this.options.tuiHintShowDelay;

    @Input()
    @tuiDefaultProp()
    hideDelay: TuiHintOptions['tuiHintHideDelay'] = this.options.tuiHintHideDelay;

    @Input()
    @tuiDefaultProp()
    describeId = '';

    constructor(
        @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(TUI_MODE) mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(TUI_HINT_OPTIONS) private readonly options: TuiHintOptions,
    ) {
        mode$.pipe(takeUntil(destroy$)).subscribe(mode => {
            this.globalMode = mode;
        });
    }

    // TODO: Simplify
    @HostBinding('attr.data-mode')
    get computedMode(): TuiHintMode | null {
        return this.mode || (this.globalMode === 'onDark' ? 'onDark' : null);
    }

    @HostListener('mousedown', ['$event'])
    @HostListener('click', ['$event'])
    stopOnMobile(event: MouseEvent): void {
        if (this.isMobile) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    get icon(): PolymorpheusContent {
        return this.options.tooltipIcon;
    }
}
