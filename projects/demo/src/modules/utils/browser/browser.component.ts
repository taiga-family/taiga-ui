import {Component} from '@angular/core';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as importComponentExample} from '!!raw-loader!./examples/import/import-component.txt';

import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-browser',
    templateUrl: './browser.template.html',
    changeDetection,
})
export class ExampleBrowserComponent {
    readonly importComponentExample = importComponentExample;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };
}
