import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example5Html} from '!!raw-loader!./examples/5/index.html';
import {default as example6Html} from '!!raw-loader!./examples/6/index.html';
import {default as example7Html} from '!!raw-loader!./examples/7/index.html';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'lists',
    templateUrl: './lists.template.html',
    changeDetection,
})
export class ListsComponent {
    readonly example1: FrontEndExample = {
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        HTML: example2Html,
    };

    readonly example3: FrontEndExample = {
        HTML: example3Html,
    };

    readonly example4: FrontEndExample = {
        HTML: example4Html,
    };

    readonly example5: FrontEndExample = {
        HTML: example5Html,
    };

    readonly example6: FrontEndExample = {
        HTML: example6Html,
    };

    readonly example7: FrontEndExample = {
        HTML: example7Html,
    };
}
