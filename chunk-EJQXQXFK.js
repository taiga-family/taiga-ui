import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiDocExampleOptionsProvider} from '@taiga-ui/addon-doc';
import {type TuiSizeL} from '@taiga-ui/core';
import {TuiTabs} from '@taiga-ui/kit';

@Component({
    imports: [TuiDemo, TuiTabs],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiDocExampleOptionsProvider({fullsize: true})],
})
export default class Page {
    protected readonly examples = [
        'Basic',
        'TabsWithMore',
        'Complex',
        'Stepper',
        'Closing',
        'Vertical',
        'Styles',
    ];

    protected buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4'];

    protected readonly moreContentVariants = ['', 'And more'];

    protected moreContent = this.moreContentVariants[0]!;

    protected underline = true;

    protected activeItemIndex = 0;

    protected itemsLimit = 999;

    protected sizes: readonly TuiSizeL[] = ['m', 'l'];

    protected size = this.sizes[1]!;
}
`;export{o as default};
