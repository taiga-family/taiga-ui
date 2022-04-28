import {Component, TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-label',
    templateUrl: './label.template.html',
    changeDetection,
})
export class ExampleTuiLabelComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;
    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly example3: FrontEndExample = {
        HTML: example3Html,
    };

    readonly labelVariants = ['No default value', 'Template'];

    label = this.labelVariants[0];

    getLabel(directive: TemplateRef<Record<string, unknown>>): PolymorpheusContent {
        return this.label === this.labelVariants[1] ? directive : this.label;
    }
}
