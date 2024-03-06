import type {TemplateRef} from '@angular/core';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'example-tui-label',
    templateUrl: './label.template.html',
    changeDetection,
})
export class ExampleTuiLabelComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
    };

    protected readonly labelVariants = ['No default value', 'Template'];

    protected label = this.labelVariants[0];

    protected getLabel(
        directive: TemplateRef<Record<string, unknown>>,
    ): PolymorpheusContent {
        return this.label === this.labelVariants[1] ? directive : this.label;
    }
}
