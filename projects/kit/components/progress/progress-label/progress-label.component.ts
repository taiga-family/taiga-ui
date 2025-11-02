import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'label[tuiProgressLabel]',
    templateUrl: './progress-label.template.html',
    styleUrl: './progress-label.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiProgressLabel {}
