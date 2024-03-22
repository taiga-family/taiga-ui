import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiDocExampleOptionsProvider} from '@taiga-ui/addon-doc';
import type {TuiSizeL} from '@taiga-ui/core';

@Component({
    selector: 'example-tui-tabs',
    templateUrl: './tabs.template.html',
    changeDetection,
    providers: [tuiDocExampleOptionsProvider({fullsize: true})],
})
export class ExampleTuiTabsComponent {
    protected buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4'];

    protected readonly import = import('./examples/import/import.md?raw');
    protected readonly template = import('./examples/import/template.md?raw');

    protected readonly moreContentVariants = ['', 'And more'];

    protected moreContent = this.moreContentVariants[0];

    protected underline = true;

    protected activeItemIndex = 0;

    protected itemsLimit = 999;

    protected sizes: readonly TuiSizeL[] = ['m', 'l'];

    protected size = this.sizes[1];
}
