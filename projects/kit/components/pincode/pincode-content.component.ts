import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';

import {TuiPincodeComponent} from './pincode.component';

@Component({
    selector: 'tui-pincode-content',
    templateUrl: './pincode-content.template.html',
    styleUrl: './pincode.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'aria-hidden': 'true',
        '[style.--t-length]': 'pincode.maxLength()',
        '(animationend)': 'pincode.onAnimationEnd($event)',
        '(animationstart)': 'pincode.onAnimationStart($event)',
    },
})
export class TuiPincodeContent {
    protected readonly pincode = inject(TuiPincodeComponent);
}
