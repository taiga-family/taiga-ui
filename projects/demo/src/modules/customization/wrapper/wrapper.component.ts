import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `wrapper`,
    templateUrl: `./wrapper.template.html`,
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class WrapperComponent {
    readonly example1: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/1/index.html`),
        LESS: import(`!!raw-loader!./examples/1/index.less`),
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
    };

    readonly mixins = [
        `.wrapper-hover(@ruleset)`,
        `.wrapper-active(@ruleset)`,
        `.wrapper-readonly(@ruleset)`,
        `.wrapper-disabled(@ruleset)`,
        `.wrapper-focus(@ruleset)`,
        `.wrapper-invalid(@ruleset)`,
    ];
}
