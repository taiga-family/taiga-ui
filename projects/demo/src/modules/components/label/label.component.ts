import type {TemplateRef} from '@angular/core';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: `example-tui-label`,
    templateUrl: `./label.template.html`,
    changeDetection,
})
export class ExampleTuiLabelComponent {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
    };

    readonly example3: TuiDocExample = {
        HTML: import(`./examples/3/index.html?raw`),
    };

    readonly labelVariants = [`No default value`, `Template`];

    label = this.labelVariants[0];

    getLabel(directive: TemplateRef<Record<string, unknown>>): PolymorpheusContent {
        return this.label === this.labelVariants[1] ? directive : this.label;
    }
}
