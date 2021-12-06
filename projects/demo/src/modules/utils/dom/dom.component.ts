import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {default as importComponentExample} from '!!raw-loader!./examples/import/import-component.txt';

@Component({
    selector: 'example-dom',
    templateUrl: './dom.template.html',
    styleUrls: ['./dom.style.less'],
    changeDetection,
})
export class ExampleDomComponent {
    importComponentExample = importComponentExample;
}
