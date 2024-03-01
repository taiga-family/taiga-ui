import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TUI_DEFAULT_IDENTITY_MATCHER, TuiIdentityMatcher} from '@taiga-ui/cdk';
import {TuiSizeL} from '@taiga-ui/core';

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
    public items = [
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

    public override readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    public override size: TuiSizeL = this.sizeVariants[0];

    public control = new FormControl(this.items[1]);

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    protected readonly exampleForm = import('./examples/import/declare-form.md?raw');
    protected readonly exampleOptions = import('./examples/import/define-options.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected pseudoDisabled = false;

    protected identityMatcherVariants: ReadonlyArray<
        TuiIdentityMatcher<{id: number; value: string}>
    > = [TUI_DEFAULT_IDENTITY_MATCHER, (item1, item2) => item1.id === item2.id];

    protected identityMatcher = this.identityMatcherVariants[0];

    protected onClick(): void {
        this.control.setValue({id: 0, value: 'One'});
    }
}
