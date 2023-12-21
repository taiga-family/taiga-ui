import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./label.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-label-styles',
    },
})
export class TuiLabelComponent {}
