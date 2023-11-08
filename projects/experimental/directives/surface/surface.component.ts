import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    template: '',
    styleUrls: ['./surface.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-surface-styles',
    },
})
export class TuiSurfaceComponent {}
