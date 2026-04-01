import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiDocAppearance} from '@demo/components/appearance';
import {TuiDocIcons} from '@demo/components/icons';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {type TuiSizeL, type TuiSizeS, TuiTitle} from '@taiga-ui/core';
import {TuiBlock, TuiSwitch} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiBlock,
        TuiDemo,
        TuiDocAppearance,
        TuiDocIcons,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly examples = ['Sizes', 'Groups', 'Custom'];
    protected readonly sizes: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];
    protected readonly appearances = ['outline-grayscale', 'secondary'];

    protected value = false;
    protected size = this.sizes[2]!;
}
`;export{i as default};
