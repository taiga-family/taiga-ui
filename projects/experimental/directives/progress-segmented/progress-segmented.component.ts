import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    host: {class: 'tui-progress-segmented'},
    template: '',
    styleUrls: ['./progress-segmented.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class TuiProgressSegmentedComponent {}
