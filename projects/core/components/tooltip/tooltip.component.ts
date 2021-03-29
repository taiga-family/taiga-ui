import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {tuiDefaultProp, TuiDestroyService} from '@taiga-ui/cdk';
import {TuiHintMode} from '@taiga-ui/core/enums';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import {TuiBrightness, TuiDirection} from '@taiga-ui/core/types';
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
    @Input()
    @tuiDefaultProp()
    content: PolymorpheusContent = '';

    @Input()
    @tuiDefaultProp()
    mode: TuiHintMode | null = null;

    @Input()
    @tuiDefaultProp()
    direction: TuiDirection = 'bottom-left';

    @Input()
    @tuiDefaultProp()
    describeId = '';

    private globalMode: TuiBrightness | null = null;

    constructor(
        @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(TUI_MODE) mode$: Observable<TuiBrightness | null>,
    ) {
        mode$.pipe(takeUntil(destroy$)).subscribe(mode => {
            this.globalMode = mode;
        });
    }

    // TODO: Simplify
    @HostBinding('attr.data-mode')
    get computedMode(): TuiHintMode | TuiBrightness | null {
        return this.mode || (this.globalMode ? this.globalMode : null);
    }
}
