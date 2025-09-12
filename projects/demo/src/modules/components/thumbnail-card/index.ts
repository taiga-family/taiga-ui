import {Component, inject} from '@angular/core';
import {TuiDocIcons} from '@demo/components/icons';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {
    TUI_PAYMENT_SYSTEM_ICONS,
    type TuiPaymentSystem,
    TuiThumbnailCard,
} from '@taiga-ui/addon-commerce';
import {TUI_TRUE_HANDLER, type TuiBooleanHandler} from '@taiga-ui/cdk';

@Component({
    imports: [TuiDemo, TuiDocIcons, TuiThumbnailCard],
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
