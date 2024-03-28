import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    standalone: true,
    host: {class: 'tui-progress-segmented'},
    template: '',
    styleUrls: ['./progress-segmented.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiProgressSegmentedComponent {}
