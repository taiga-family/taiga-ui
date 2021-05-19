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
    selector: 'example-tui-input-slider',
    templateUrl: './input-slider.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputSliderComponent),
        },
    ],
})
export class ExampleTuiInputSliderComponent extends AbstractExampleTuiControl {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly control = new FormControl();

    readonly minVariants: readonly number[] = [0, 1, 5, 7.77, -10];

    min = this.minVariants[0];

    readonly maxVariants: readonly number[] = [10, 100, 10000];

    max = this.maxVariants[0];

    readonly segmentsVariants: readonly number[] = [0, 1, 5, 13];

    segments = this.segmentsVariants[0];

    readonly stepsVariants: readonly number[] = [0, 4, 10];

    steps = this.stepsVariants[0];

    readonly quantumVariants: readonly number[] = [1, 0.01, 10, 100];

    quantum = this.quantumVariants[0];

    readonly sizeVariants: ReadonlyArray<TuiSizeL> = ['m', 'l'];

    size = this.sizeVariants[1];

    readonly pluralizeVariants: ReadonlyArray<TuiPluralize> = [
        ['year', 'years', 'years'],
        ['thing', 'things', 'things'],
        ['year', 'years', 'years'],
    ];

    pluralize = null;

    segmentsPluralize = null;

    readonly secondaryVariants: readonly string[] = ['getter of percent', 'Something'];

    secondarySelected = null;

    readonly minLabelVariants: readonly string[] = ['', 'Nothing'];

    minLabel = this.minLabelVariants[0];

    readonly maxLabelVariants: readonly string[] = ['', 'Everything'];

    maxLabel = this.maxLabelVariants[0];

    readonly keyStepsVariants: ReadonlyArray<TuiKeySteps> = [[[50, 1000]]];

    keySteps = null;

    get secondary(): string | null {
        return this.secondarySelected === this.secondaryVariants[0]
            ? Math.round((this.control.value / this.max) * 100) + '%'
            : this.secondarySelected;
    }
}
