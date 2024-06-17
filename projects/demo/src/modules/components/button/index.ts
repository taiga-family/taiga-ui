import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeL, TuiSizeXS} from '@taiga-ui/core';
import {TuiButton} from '@taiga-ui/core';
import {TuiButtonLoadingComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiButton, TuiButtonLoadingComponent],
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
    ];

    protected readonly sizes: ReadonlyArray<TuiSizeL | TuiSizeXS> = ['xs', 's', 'm', 'l'];

    protected size = this.sizes[3];

    protected readonly appearances = [
        'primary',
        'accent',
        'secondary',
        'destructive',
        'flat',
        'outline',
        'opposite',
        'glass',
        'floating',
    ];

    protected appearance = this.appearances[0];

    protected readonly icons = ['', '@tui.search', '@tui.chevron-down'];

    protected iconLeft = this.icons[0];
    protected iconRight = this.icons[0];

    protected loading = false;
}
