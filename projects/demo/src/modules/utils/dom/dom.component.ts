import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: `example-dom`,
    templateUrl: `./dom.template.html`,
    styleUrls: [`./dom.style.less`],
    changeDetection,
})
export class ExampleDomComponent {
    importComponentExample = import(`!!raw-loader!./examples/import/import-component.md`);
}
