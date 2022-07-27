import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDirection, TuiHintMode} from '@taiga-ui/core';

@Component({
    selector: `example-tui-hint-controller`,
    templateUrl: `./hint-controller.template.html`,
    changeDetection,
})
export class ExampleTuiHintControllerComponent {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly modeVariants: readonly TuiHintMode[] = [`error`];

    tuiHintContent = `Example hint content`;

    tuiHintMode: TuiHintMode | null = null;

    readonly directionVariants: readonly TuiDirection[] = [
        `left`,
        `right`,
        `bottom-left`,
        `bottom-right`,
        `bottom-middle`,
        `top-left`,
        `top-right`,
        `top-middle`,
    ];

    tuiHintDirection: TuiDirection = this.directionVariants[2];

    tuiHintShowDelay = 500;

    tuiHintHideDelay = 200;
}
