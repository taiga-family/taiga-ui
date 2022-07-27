import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

// TODO: Update to use new scroll$
@Component({
    selector: `example-tui-scrollbar`,
    templateUrl: `./scroll.template.html`,
    styleUrls: [`./scroll.style.less`],
    changeDetection,
})
export class ExampleTuiScrollComponent {
    readonly exampleScroll = import(`!!raw-loader!./examples/import/scroll.md`);
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleInjectService = import(
        `!!raw-loader!./examples/import/inject-service.md`
    );

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
        LESS: import(`!!raw-loader!./examples/1/index.less`),
    };
}
