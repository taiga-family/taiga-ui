import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    template: '',
    styleUrls: ['./button-vertical.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-button-vertical-styles',
    },
})
export class TuiButtonVerticalComponent {}
