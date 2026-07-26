import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'tui-progressive-blur',
    template: `
        @for (_ of '-'.repeat(20); track $index) {
            <span [style.--t-step]="$index"></span>
        }
    `,
    styleUrl: './progressive-blur.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiProgressiveBlur {}
