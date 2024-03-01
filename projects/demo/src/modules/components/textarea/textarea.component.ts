import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample, tuiDocExcludeProperties} from '@taiga-ui/addon-doc';
import {TuiSizeL, TuiSizeM} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-textarea',
    templateUrl: './textarea.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiTextareaComponent),
        },
        tuiDocExcludeProperties([
            'tuiTextfieldPrefix',
            'tuiTextfieldPostfix',
            'tuiTextfieldFiller',
        ]),
    ],
})
export class ExampleTuiTextareaComponent extends AbstractExampleTuiControl {
    public control = new FormControl('');

    public override readonly maxLengthVariants: readonly number[] = [50, 100, 500];

    public override maxLength: number | null = null;

    public override readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeM> = [
        'm',
        'l',
    ];

    public override size: TuiSizeL | TuiSizeM = this.sizeVariants[1];

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
    };

    protected readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/index.ts?raw'),
        HTML: import('./examples/6/index.html?raw'),
        LESS: import('./examples/6/index.less?raw'),
    };

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    protected readonly exampleForm = import('./examples/import/declare-form.md?raw');

    protected readonly iconVariants = ['', 'tuiIconSearchLarge', 'tuiIconCalendarLarge'];

    protected icon = this.iconVariants[0];

    protected readonly rowsVariants: readonly number[] = [8, 15, 30];

    protected rows: number = this.rowsVariants[0];

    protected expandable = false;

    protected placeholder = 'Placeholder';
}
