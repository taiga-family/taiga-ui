import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    template: '',
    styleUrls: ['./card.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-card',
    },
})
export class TuiCardComponent {}
