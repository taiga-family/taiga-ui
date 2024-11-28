import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {TUI_TRUE_HANDLER} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiThumbnailCard],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly examples = [
        'Sizes',
        'A cool one',
        'Backgrounds',
        'External colored icon',
        'Textfield',
    ];

    protected readonly iconVariants = [
        '',
        '@tui.lock',
        '@tui.cloud',
        '@tui.user',
        '@tui.snowflake',
    ];

    protected iconStart = this.iconVariants[0]!;
    protected iconEnd = this.iconVariants[0]!;

    protected readonly paymentSystemVariants: readonly TuiPaymentSystem[] = [
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

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];
    protected size = this.sizeVariants[1]!;

    protected readonly monoHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiPaymentSystem>
    > = [(ps) => ps === 'mir' || ps === 'visa' || ps === 'electron', TUI_TRUE_HANDLER];

    protected monoHandler = this.monoHandlerVariants[0]!;

    protected paymentSystem: TuiPaymentSystem | null = null;

    protected contentProjection = '1234';
    protected background =
        '#2b9aff linear-gradient(110deg, transparent 70%, #0780ff 71%, #db028b 100%)';
}
