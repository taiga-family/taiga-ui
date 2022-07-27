import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `lists`,
    templateUrl: `./lists.template.html`,
    changeDetection,
})
export class ListsComponent {
    readonly example1: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    readonly example2: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/2/index.html`),
    };

    readonly example3: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/3/index.html`),
    };

    readonly example4: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/4/index.html`),
    };

    readonly example5: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/5/index.html`),
    };

    readonly example6: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/6/index.html`),
    };

    readonly example7: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/7/index.html`),
    };
}
