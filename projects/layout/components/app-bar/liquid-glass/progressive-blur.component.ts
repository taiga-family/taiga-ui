import {NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'tui-progressive-blur',
    imports: [NgForOf],
    template: `
        <span
            *ngFor="let step of steps"
            [style.--t-step]="step"
        ></span>
    `,
    styleUrls: ['./progressive-blur.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiProgressiveBlur {
    protected readonly steps = Array.from({length: 20}, (_, i) => i);
}
