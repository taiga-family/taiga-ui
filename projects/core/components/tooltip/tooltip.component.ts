import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {tuiDefaultProp, TuiDestroyService} from '@taiga-ui/cdk';
import {TuiBrightness, TuiHintMode} from '@taiga-ui/core/enums';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import {TuiDirection} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

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

    constructor(@Inject(TUI_MODE) mode$: Observable<TuiBrightness | null>) {
        mode$.subscribe(mode => {
            this.globalMode = mode;
        });
    }

    @HostBinding('attr.data-tui-host-mode')
    get computedMode(): TuiHintMode | TuiBrightness | null {
        return this.mode || (this.globalMode ? this.globalMode : null);
    }
}
