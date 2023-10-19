import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    host: {
        class: 'tui-group-styles',
    },
    template: '',
    styleUrls: ['./group.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiGroupStylesComponent {}
