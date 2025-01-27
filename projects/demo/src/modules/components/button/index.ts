import {Component} from '@angular/core';
import {TuiDocAppearance} from '@demo/components/appearance';
import {TuiDocIcons} from '@demo/components/icons';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeL, TuiSizeXS} from '@taiga-ui/core';
import {TuiButton} from '@taiga-ui/core';
import {TuiButtonLoading} from '@taiga-ui/kit';

@Component({
    standalone: true,
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
}
