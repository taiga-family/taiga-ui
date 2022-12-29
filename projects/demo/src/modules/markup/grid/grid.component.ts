import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'grid',
    templateUrl: './grid.template.html',
    styleUrls: ['./grid.style.less'],
    changeDetection,
})
export class GridComponent {
    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };
}
