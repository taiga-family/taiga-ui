import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-form`,
    templateUrl: `form.template.html`,
    changeDetection,
})
export class FormComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./example/index.ts`),
        HTML: import(`!!raw-loader!./example/index.html`),
        LESS: import(`!!raw-loader!./example/index.style.less`),
    };
}
