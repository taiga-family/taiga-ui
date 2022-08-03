import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TUI_HINT_DIRECTIONS} from '@taiga-ui/core';

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

    readonly appearanceVariants = [``, `error`];

    tuiHintContent = `Example hint content`;

    tuiHintAppearance = this.appearanceVariants[0];

    readonly directionVariants = TUI_HINT_DIRECTIONS;

    tuiHintDirection = this.directionVariants[0];

    tuiHintShowDelay = 500;

    tuiHintHideDelay = 200;
}
