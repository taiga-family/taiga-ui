import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {TuiDocAppearance} from '@demo/components/appearance';
import {TuiDocIcons} from '@demo/components/icons';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiButton, type TuiSizeL, type TuiSizeXS} from '@taiga-ui/core';
import {TuiButtonLoading} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiButtonLoading, TuiDemo, TuiDocAppearance, TuiDocIcons],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly examples = [
        'Sizes',
        'Appearance',
        'Icons',
        'Loading',
        'Options with DI',
        'Vertical',
        'Two labels',
    ];

    protected readonly sizes: ReadonlyArray<TuiSizeL | TuiSizeXS> = ['xs', 's', 'm', 'l'];
    protected size = this.sizes[3]!;
    protected loading = false;
    protected readonly routes = DemoRoute;
}
`;export{t as default};
