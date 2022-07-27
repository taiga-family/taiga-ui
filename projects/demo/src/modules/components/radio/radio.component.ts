import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TUI_DEFAULT_IDENTITY_MATCHER, TuiIdentityMatcher} from '@taiga-ui/cdk';
import {TuiSizeL} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: `example-tui-radio`,
    templateUrl: `./radio.template.html`,
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiRadioComponent),
        },
    ],
})
export class ExampleTuiRadioComponent extends AbstractExampleTuiControl {
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);
    readonly exampleForm = import(`!!raw-loader!./examples/import/declare-form.md`);
    readonly exampleOptions = import(`!!raw-loader!./examples/import/define-options.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
    };

    items = [
        {
            id: 0,
            value: `One`,
        },
        {
            id: 1,
            value: `Two`,
        },
        {
            id: 2,
            value: `Three`,
        },
    ];

    readonly sizeVariants: readonly TuiSizeL[] = [`m`, `l`];

    size: TuiSizeL = this.sizeVariants[0];

    pseudoDisabled = false;

    identityMatcherVariants: ReadonlyArray<
        TuiIdentityMatcher<{id: number; value: string}>
    > = [TUI_DEFAULT_IDENTITY_MATCHER, (item1, item2) => item1.id === item2.id];

    identityMatcher = this.identityMatcherVariants[0];

    control = new FormControl(this.items[1]);

    onClick(): void {
        this.control.setValue({id: 0, value: `One`});
    }
}
