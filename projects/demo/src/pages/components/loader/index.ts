import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiLoader, type TuiSizeXS, type TuiSizeXXL} from '@taiga-ui/core';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    imports: [TuiDemo, TuiLoader],
    templateUrl: './index.html',
    styleUrl: './index.less',
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

    protected size = this.sizeVariants[2]!;

    protected selectedTemplate = '';

    protected readonly textVariants: string[] = ['', 'template', 'string'];

    protected get template(): PolymorpheusContent {
        switch (this.selectedTemplate) {
            case 'string': {
                return 'string';
            }
            case 'template': {
                return this.textTemplate || '';
            }
            default: {
                return '';
            }
        }
    }

    protected readonly examples = [
        'With inherited background color',
        'With content overlay',
        'Options',
        'Custom stroke width',
    ];
}
