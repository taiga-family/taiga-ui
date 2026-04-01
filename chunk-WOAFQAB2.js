import"./chunk-HU6DUUP4.js";var o=`import {Component, inject} from '@angular/core';
import {TuiDocIcons} from '@demo/components/icons';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {
    TUI_PAYMENT_SYSTEM_ICONS,
    type TuiPaymentSystem,
    TuiThumbnailCard,
} from '@taiga-ui/addon-commerce';
import {type TuiSizeL, type TuiSizeXS} from '@taiga-ui/core';

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

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeXS> = [
        'l',
        'm',
        's',
        'xs',
    ];

    protected size = this.sizeVariants[0]!;
    protected paymentSystem = this.paymentSystemVariants[0]!;
    protected contentProjection = '1234';
    protected background =
        '#2b9aff linear-gradient(110deg, transparent 70%, #0780ff 71%, #db028b 100%)';
}
`;export{o as default};
