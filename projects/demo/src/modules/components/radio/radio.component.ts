import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TUI_DEFAULT_IDENTITY_MATCHER, TuiIdentityMatcher} from '@taiga-ui/cdk';
import {TuiSizeL} from '@taiga-ui/core';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as exampleForm} from '!!raw-loader!./examples/import/declare-form.txt';
import {default as exampleOptions} from '!!raw-loader!./examples/import/define-options.txt';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';
import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-radio',
    templateUrl: './radio.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiRadioComponent),
        },
    ],
})
export class ExampleTuiRadioComponent extends AbstractExampleTuiControl {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;
    readonly exampleForm = exampleForm;
    readonly exampleOptions = exampleOptions;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    items = [
        {
            id: 0,
            value: 'One',
        },
        {
            id: 1,
            value: 'Two',
        },
        {
            id: 2,
            value: 'Three',
        },
    ];

    readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    size: TuiSizeL = this.sizeVariants[0];

    pseudoDisabled = false;

    identityMatcherVariants: ReadonlyArray<
        TuiIdentityMatcher<{id: number; value: string}>
    > = [TUI_DEFAULT_IDENTITY_MATCHER, (item1, item2) => item1.id === item2.id];

    identityMatcher = this.identityMatcherVariants[0];

    control = new FormControl(this.items[1]);

    onClick(): void {
        this.control.setValue({id: 0, value: 'One'});
    }
}
