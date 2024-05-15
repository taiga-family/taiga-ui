import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiButtonLoadingComponent, TuiButtonVerticalDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiButtonDirective,
        TuiButtonVerticalDirective,
        TuiButtonLoadingComponent,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
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

    protected readonly icons = ['', 'tuiIconSearch', 'tuiIconChevronDown'];

    protected iconLeft = this.icons[0];

    protected loading = false;
}
