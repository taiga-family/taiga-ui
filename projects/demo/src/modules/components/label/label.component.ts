import {Component, TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: `example-tui-label`,
    templateUrl: `./label.template.html`,
    changeDetection,
})
export class ExampleTuiLabelComponent {
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
    };

    readonly example3: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/3/index.html`),
    };

    readonly labelVariants = [`No default value`, `Template`];

    label = this.labelVariants[0];

    getLabel(directive: TemplateRef<Record<string, unknown>>): PolymorpheusContent {
        return this.label === this.labelVariants[1] ? directive : this.label;
    }
}
