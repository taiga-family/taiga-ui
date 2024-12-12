import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce';
import {TUI_PAYMENT_SYSTEM_ICONS, TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {TUI_TRUE_HANDLER} from '@taiga-ui/cdk';

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

    protected readonly paymentSystemVariants = Object.keys(
        inject(TUI_PAYMENT_SYSTEM_ICONS),
    ) as readonly TuiPaymentSystem[];

    protected readonly sizeVariants: ReadonlyArray<TuiThumbnailCard['size']> = [
        'l',
        'm',
        's',
        'xs',
    ];

    protected size = this.sizeVariants[0]!;

    protected readonly monoHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiPaymentSystem>
    > = [(ps) => ps === 'mir' || ps === 'visa' || ps === 'electron', TUI_TRUE_HANDLER];

    protected monoHandler = this.monoHandlerVariants[0]!;

    protected paymentSystem = this.paymentSystemVariants[0]!;

    protected contentProjection = '1234';
    protected background =
        '#2b9aff linear-gradient(110deg, transparent 70%, #0780ff 71%, #db028b 100%)';
}
