import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiPaymentSystem} from '@taiga-ui/addon-commerce';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeS} from '@taiga-ui/core';

const BRAND_LOGOS = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14">
        <path fill="#424242" d="M4.7.3c-.5.4-.8 1.1-.2 1.9-1.7 1.2-2 2.7-2 4 0 1.4-.3 1.2.1 2.6 0 .1 0 .1-.1.1C.8 7.7-.2 4 2.6 2c.1-.1 0-.1-.2 0C0 3.4-.2 5.9.2 7.7c.2.8-.1 1 .2 2.1.7 2.3 1.3 2.5 2.2 2.5 1.6 0 .5-.9.6-2 0-.1.1-.1.1 0 .9 2 1.5 3.9 3.7 3.7 1.3-.2.6-.9.5-1.2-1-3.3 1.4-4.1.7-.9-.4 1.9.9 1.7 1.9 1 1-.7 2.3-5.2 1.5-7.7 0-.2-.1-.1-.1 0 0 1.6-.9 3.3-2.8 3.3-.5 0-.3.8-1.2.4-.2-.3-.5-.2-.7-.2-.2.1-.5.2-.8-.4-.1-.3-.2-.4-.4-.4-1.9-.5-2.5-3.3-.8-5.5.3.2.5.2.8-.1.2-.2.5-.4.7-.4.4-.2.6-.3.3-1.1-.3-.6-.7-.8-1-.8-.4 0-.7.2-.9.3m1.8 8.6c.5.1 1 .2 1.3.2 0 .3-.3.4-.5.4-.4 0-.8-.2-.8-.6m3.2-7.6c-.3.5-.2.8.1 1 .2.1.6.4.8.7.4.6 1.1 0 1.3-.5.2-.4.1-.9-.4-1.4-.2-.2-.5-.3-.8-.4-.4 0-.7.2-1 .6M5.8 4.6c-1 .6-1 1.8-.4 2.1.7.3 1-.6 1.4-1v-.1c0-.6-.2-1.2-.7-1.2-.1.1-.2.2-.3.2m3.3.4c-.4 0-.6.4-.8.9V6c.4.4.4 1.8 1.4 1.2.6-.3.6-1.7-.2-2.1-.1-.1-.2-.1-.4-.1M6.9 7.5c-.5.1-.5.5-.3.5.2.1.4.1.6.4.2.3.1-.1.7-.2.4 0 .3-.4 0-.5-.4-.1-.7-.2-1-.2"/>
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
        <path fill="#1A9F29" d="M0 6.7v-.4l4.2 2.4 9-5.2c.5 1 .8 2.1.8 3.2 0 3.9-3.1 7.1-7 7.1s-7-3.2-7-7.1zm4.2 1.1L.1 5.5c.1-.3.1-.5.2-.8l3.9 2.2 8.1-4.7c.2.2.3.4.5.6l-8.6 5zm0-1.8L.6 4c.1-.2.2-.5.3-.7l3.3 1.9 7-4.1c.2.2.4.3.6.5L4.2 6zm0-1.8L1.3 2.6c.2-.2.3-.4.5-.6l2.4 1.4L9.7.2c.3.1.5.3.8.4L4.2 4.2z"/>
    </svg>`,
];

@Component({
    selector: `example-tui-card`,
    templateUrl: `./card.template.html`,
    styleUrls: [`card.style.less`],
    changeDetection,
})
export class ExampleTuiCardComponent {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);
    readonly exampleCustomizeStyles = import(`./examples/import/customize-styles.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
        LESS: import(`./examples/1/index.less?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
        LESS: import(`./examples/2/index.less?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
        LESS: import(`./examples/3/index.less?raw`),
    };

    paymentSystemVariants: readonly TuiPaymentSystem[] = [
        `visa`,
        `maestro`,
        `mastercard`,
        `mir`,
    ];

    brandLogoVariants = [``, ...BRAND_LOGOS];

    sizeVariants: readonly TuiSizeS[] = [`s`, `m`];

    active = false;
    brandLogo = this.brandLogoVariants[0];
    cardNumber = `9999`;
    paymentSystem: TuiPaymentSystem | null = null;
    size: TuiSizeS = `m`;
}
