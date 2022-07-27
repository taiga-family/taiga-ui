import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-tui-pure`,
    templateUrl: `./pure.template.html`,
    changeDetection,
})
export class ExampleTuiPureComponent {
    readonly exampleDecorator = import(`!!raw-loader!./import/example-decorator.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./pure-getter.component.ts`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./pure-function.component.ts`),
    };
}
