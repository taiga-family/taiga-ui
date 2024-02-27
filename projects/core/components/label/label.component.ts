import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiContext} from '@taiga-ui/cdk';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import {TuiBrightness} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

@Component({
    selector: 'label[tuiLabel]',
    templateUrl: './label.template.html',
    styleUrls: ['./label.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiLabelComponent<T> {
    @Input()
    public tuiLabel: PolymorpheusContent<TuiContext<T | null>>;

    @Input()
    public context: TuiContext<T | null> = {
        $implicit: null,
    };

    @ContentChild(NgControl)
    @HostBinding('class._control')
    protected readonly control?: NgControl;

    protected readonly mode$ = inject<Observable<TuiBrightness | null>>(TUI_MODE);
}
