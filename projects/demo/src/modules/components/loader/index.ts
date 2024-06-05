import {Component, ViewChild} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';
import {TuiLinkDirective, TuiLoaderComponent} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiLoaderComponent, TuiLinkDirective, RouterLink],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class PageComponent {
    @ViewChild('textTemplate')
    protected readonly textTemplate: PolymorpheusContent;

    protected readonly docRoutes = DemoRoute;

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
