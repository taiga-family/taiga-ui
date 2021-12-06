import {Component} from '@angular/core';

import {default as importComponentExample} from '!!raw-loader!./examples/import/import-component.txt';

import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-dom',
    templateUrl: './dom.template.html',
    styleUrls: ['./dom.style.less'],
    changeDetection,
})
export class ExampleDomComponent {
    importComponentExample = importComponentExample;
}
