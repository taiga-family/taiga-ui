import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'label[tuiProgressLabel]',
    templateUrl: './progress-label.template.html',
    styleUrls: ['./progress-label.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiProgressLabelComponent {
    @Input('tuiProgressLabel')
    @tuiDefaultProp()
    label: PolymorpheusContent = '';
}
