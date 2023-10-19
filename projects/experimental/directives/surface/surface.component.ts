import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    host: {
        class: 'tui-surface-styles',
    },
    template: '',
    styleUrls: ['./surface.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class TuiSurfaceComponent {}
