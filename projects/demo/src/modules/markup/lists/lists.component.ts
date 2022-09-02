import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `lists`,
    templateUrl: `./lists.template.html`,
    changeDetection,
})
export class ListsComponent {
    readonly example1: TuiDocExample = {
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly example2: TuiDocExample = {
        HTML: import(`./examples/2/index.html?raw`),
    };

    readonly example3: TuiDocExample = {
        HTML: import(`./examples/3/index.html?raw`),
    };

    readonly example4: TuiDocExample = {
        HTML: import(`./examples/4/index.html?raw`),
    };

    readonly example5: TuiDocExample = {
        HTML: import(`./examples/5/index.html?raw`),
    };

    readonly example6: TuiDocExample = {
        HTML: import(`./examples/6/index.html?raw`),
    };

    readonly example7: TuiDocExample = {
        HTML: import(`./examples/7/index.html?raw`),
    };
}
