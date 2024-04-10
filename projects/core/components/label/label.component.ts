import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    HostBinding,
    Input,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import type {TuiContext} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'label[tuiLabel]',
    templateUrl: './label.template.html',
    styleUrls: ['./label.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
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
}
