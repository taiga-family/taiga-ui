import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';

import {TuiPincodeComponent} from './pincode.component';

@Component({
    templateUrl: './pincode-content.template.html',
    styleUrl: './pincode.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-length]': 'pincode.maxLength()',
        '[style.display]': '"contents"',
        '(animationend)': 'pincode.onAnimationEnd($event)',
        '(animationstart)': 'pincode.onAnimationStart($event)',
    },
})
export class TuiPincodeContent {
    protected readonly pincode = inject(TuiPincodeComponent);
}
