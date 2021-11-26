import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiSizeL, TuiSizeM} from '@taiga-ui/core';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Less} from '!!raw-loader!./examples/2/index.less';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Less} from '!!raw-loader!./examples/3/index.less';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example4Less} from '!!raw-loader!./examples/4/index.less';
import {default as example4Ts} from '!!raw-loader!./examples/4/index.ts';
import {default as example5Html} from '!!raw-loader!./examples/5/index.html';
import {default as example5Less} from '!!raw-loader!./examples/5/index.less';
import {default as example5Ts} from '!!raw-loader!./examples/5/index.ts';
import {default as exampleDeclareForm} from '!!raw-loader!./examples/import/declare-form.txt';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-text-area',
    templateUrl: './text-area.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiTextAreaComponent),
        },
    ],
})
export class ExampleTuiTextAreaComponent extends AbstractExampleTuiControl {
    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
        LESS: example2Less,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
        LESS: example3Less,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
        LESS: example4Less,
    };

    readonly example5: FrontEndExample = {
        TypeScript: example5Ts,
        HTML: example5Html,
        LESS: example5Less,
    };

    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;
    exampleDeclareForm = exampleDeclareForm;

    readonly maxLengthVariants: readonly number[] = [50, 100, 500];

    maxLength = null;

    readonly rowsVariants: readonly number[] = [8, 15, 30];

    rows: number = this.rowsVariants[0];

    expandable = false;

    control = new FormControl();

    readonly sizeVariants: ReadonlyArray<TuiSizeM | TuiSizeL> = ['m', 'l'];

    size: TuiSizeM | TuiSizeL = this.sizeVariants[1];
}
