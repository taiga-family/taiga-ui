import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    host: {
        class: 'tui-sensitive-styles',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '',
    styleUrls: ['./sensitive.style.less'],
    encapsulation: ViewEncapsulation.None,
})
export class TuiSensitiveComponent {}
