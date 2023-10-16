import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    host: {
        class: 'tui-fade-styles',
    },
    template: '',
    styleUrls: ['./fade.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class TuiFadeComponent {}
