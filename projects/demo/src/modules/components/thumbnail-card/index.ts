import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiThumbnailCard],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected examples = ['Sizes', 'A cool one', 'Backgrounds'];
    protected iconVariants = ['', '@tui.lock', '@tui.cloud', '@tui.user'];
    protected iconStart = this.iconVariants[0];
    protected iconEnd = this.iconVariants[0];

    protected paymentSystemVariants: readonly TuiPaymentSystem[] = [
        'amex',
        'dinersclub',
        'discover',
        'electron',
        'humo',
        'jcb',
        'maestro',
        'mastercard',
        'mir',
        'rupay',
        'unionpay',
        'uzcard',
        'verve',
        'visa',
    ];

    protected sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];
    protected size = this.sizeVariants[1];

    protected paymentSystem: TuiPaymentSystem | null = null;
}
