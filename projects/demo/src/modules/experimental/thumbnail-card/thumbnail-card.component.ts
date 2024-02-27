import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiPaymentSystem} from '@taiga-ui/addon-commerce';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'example-tui-thumbnail-card',
    templateUrl: './thumbnail-card.template.html',
    changeDetection,
})
export class ExampleTuiThumbnailCardComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    protected readonly exampleCustomizeStyles = import(
        './examples/import/customize-styles.md?raw'
    );

    protected readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    protected readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    protected iconVariants = ['', 'tuiIconLock', 'tuiIconCloud', 'tuiIconUser'];
    protected iconLeft = this.iconVariants[0];
    protected iconRight = this.iconVariants[0];

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
