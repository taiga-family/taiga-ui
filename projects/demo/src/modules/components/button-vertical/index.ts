import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiButton} from '@taiga-ui/core';
import {TuiButtonLoadingComponent, TuiButtonVertical} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiButton, TuiButtonVertical, TuiButtonLoadingComponent],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly examples = ['Basic', 'Custom'];

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

    protected loading = false;
}
