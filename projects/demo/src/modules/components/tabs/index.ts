import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiDocExampleOptionsProvider} from '@taiga-ui/addon-doc';
import {TuiItemDirective} from '@taiga-ui/cdk';
import type {TuiSizeL} from '@taiga-ui/core';
import {TuiNotificationComponent} from '@taiga-ui/core';
import {TuiTabDirective, TuiTabsWithMoreComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiNotificationComponent,
        TuiTabsWithMoreComponent,
        TuiItemDirective,
        TuiTabDirective,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiDocExampleOptionsProvider({fullsize: true})],
})
export default class PageComponent {
    protected buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4'];

    protected readonly moreContentVariants = ['', 'And more'];

    protected moreContent = this.moreContentVariants[0];

    protected underline = true;

    protected activeItemIndex = 0;

    protected itemsLimit = 999;

    protected sizes: readonly TuiSizeL[] = ['m', 'l'];

    protected size = this.sizes[1];
}
