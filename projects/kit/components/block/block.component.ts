import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./block.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-block',
    },
})
export class TuiBlockComponent {}
