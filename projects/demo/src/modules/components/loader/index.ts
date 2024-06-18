import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';
import {TuiLoader} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiLoader],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    @ViewChild('textTemplate')
    protected readonly textTemplate: PolymorpheusContent;

    protected readonly routes = DemoRoute;

    protected showLoader = true;

    protected inheritColor = false;

    protected overlay = false;

    protected readonly sizeVariants: ReadonlyArray<TuiSizeXS | TuiSizeXXL> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
    ];

    protected size = this.sizeVariants[2];

    protected selectedTemplate = '';

    protected readonly textVariants: string[] = ['', 'template', 'string'];

    protected get template(): PolymorpheusContent {
        switch (this.selectedTemplate) {
            case 'template': {
                return this.textTemplate || '';
            }
            case 'string': {
                return 'string';
            }
            default: {
                return '';
            }
        }
    }
}
