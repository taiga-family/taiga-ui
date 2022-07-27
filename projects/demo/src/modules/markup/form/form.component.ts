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
        TypeScript: import(`./example/index.ts?raw`),
        HTML: import(`./example/index.html?raw`),
        LESS: import(`./example/index.style.less?raw`),
    };
}
