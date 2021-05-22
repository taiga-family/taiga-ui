import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiPluralize, TuiSizeL} from '@taiga-ui/core';
import {TuiKeySteps} from '@taiga-ui/kit';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-input-range',
    templateUrl: './input-range.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputRangeComponent),
        },
    ],
})
export class ExampleTuiInputRangeComponent extends AbstractExampleTuiControl {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    control = new FormControl();

    minVariants: readonly number[] = [0, 5, 7.77, -10];

    min = this.minVariants[0];

    maxVariants: readonly number[] = [10, 100, 10000];

    max = this.maxVariants[0];

    segmentsVariants: readonly number[] = [0, 1, 5, 13];

    segments = this.segmentsVariants[0];

    stepsVariants: readonly number[] = [0, 4, 10];

    steps = this.stepsVariants[0];

    quantumVariants: readonly number[] = [1, 10, 100];

    quantum = this.quantumVariants[0];

    sizeVariants: ReadonlyArray<TuiSizeL> = ['m', 'l'];

    size = this.sizeVariants[1];

    readonly pluralizeVariants: ReadonlyArray<TuiPluralize> = [
        ['year', 'years', 'years'],
        ['thing', 'things', 'things'],
        ['year', 'years', 'years'],
    ];

    pluralize = null;

    segmentsPluralize = null;

    minLabelVariants: readonly string[] = ['', 'Nothing'];

    minLabel = this.minLabelVariants[0];

    maxLabelVariants: readonly string[] = ['', 'Everything'];

    maxLabel = this.maxLabelVariants[0];

    keyStepsVariants: ReadonlyArray<TuiKeySteps> = [[[50, 1000]]];

    keySteps = null;
}
