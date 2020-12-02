import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    HostBinding,
    Input,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiContextWithImplicit, tuiDefaultProp} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'label[tuiLabel]',
    templateUrl: './label.template.html',
    styleUrls: ['./label.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLabelComponent<T> {
    @Input()
    @tuiDefaultProp()
    label: PolymorpheusContent = '';

    @Input()
    @tuiDefaultProp()
    context: TuiContextWithImplicit<T | null> = {
        $implicit: null,
    };

    @ContentChild(NgControl)
    @HostBinding('class._control')
    readonly control?: NgControl;
}
