import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    host: {
        class: 'tui-autofilled-styles',
    },
    template: '',
    styleUrls: ['./autofilled.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAutofilledStyleComponent {}
