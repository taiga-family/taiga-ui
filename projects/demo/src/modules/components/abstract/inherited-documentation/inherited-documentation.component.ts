import {Component, Inject, Input} from '@angular/core';
import {TuiDirection, TuiHintMode} from '@taiga-ui/core';
import {changeDetection} from '../../../../change-detection-strategy';
import {AbstractExampleTuiField} from '../field';
import {AbstractExampleTuiHint} from '../hint';
import {AbstractExampleTuiReactiveField} from '../reactive-field';
import {ABSTRACT_PROPS_ACCESSOR} from './abstract-props-accessor';
import {supportingDocumentationComponent} from './supporting-documentation-component';

@Component({
    selector: 'inherited-documentation',
    templateUrl: './inherited-documentation.template.html',
    changeDetection,
})
export class InheritedDocumentationComponent {
    @Input()
    dropdown = false;

    readonly booleanVariants: ReadonlyArray<boolean> = [false, true];

    readonly directionVariants: ReadonlyArray<TuiDirection> = [
        'left',
        'right',
        'bottom-left',
        'bottom-right',
        'top-left',
        'top-right',
    ];

    readonly modeVariants: ReadonlyArray<TuiHintMode> = [
        TuiHintMode.Error,
        TuiHintMode.OnDark,
    ];

    constructor(
        @Inject(ABSTRACT_PROPS_ACCESSOR)
        readonly documentedComponent: supportingDocumentationComponent,
    ) {}

    isTuiReactiveControl(
        documentedComponent: supportingDocumentationComponent,
    ): documentedComponent is AbstractExampleTuiReactiveField {
        return documentedComponent instanceof AbstractExampleTuiReactiveField;
    }

    isTuiInteractive(
        documentedComponent: supportingDocumentationComponent,
    ): documentedComponent is AbstractExampleTuiField {
        return documentedComponent instanceof AbstractExampleTuiField;
    }

    isTuiHint(
        documentedComponent: supportingDocumentationComponent,
    ): documentedComponent is AbstractExampleTuiHint {
        return documentedComponent instanceof AbstractExampleTuiHint;
    }
}
