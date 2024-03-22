import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./header.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-header',
    },
})
export class TuiHeaderStylesComponent {}
