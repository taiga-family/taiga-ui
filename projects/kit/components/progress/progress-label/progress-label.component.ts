import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'label[tuiProgressLabel]',
    templateUrl: './progress-label.template.html',
    styleUrls: ['./progress-label.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiProgressLabel {}
