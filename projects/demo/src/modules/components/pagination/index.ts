import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core';
import {TuiPagination} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiPagination],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected focusable = true;
    protected index = 0;
    protected length = 8;
    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];
    protected size = this.sizeVariants[2]!;
    protected activePadding = 1;
    protected sidePadding = 1;
}
