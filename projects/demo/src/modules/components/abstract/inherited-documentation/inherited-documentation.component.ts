import {Component, Inject, Input} from '@angular/core';
import {TuiDirection, TuiHintModeT} from '@taiga-ui/core';
import {changeDetection} from '../../../../change-detection-strategy';
import {AbstractExampleTuiControl} from '../control';
import {AbstractExampleTuiHint} from '../hint';
import {AbstractExampleTuiInteractive} from '../interactive';
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

    readonly booleanVariants: readonly boolean[] = [false, true];

    readonly directionVariants: ReadonlyArray<TuiDirection> = [
        'left',
        'right',
        'bottom-left',
        'bottom-right',
        'top-left',
        'top-right',
    ];

    readonly modeVariants: readonly TuiHintModeT[] = ['error', 'onDark'];

    constructor(
        @Inject(ABSTRACT_PROPS_ACCESSOR)
        readonly documentedComponent: supportingDocumentationComponent,
    ) {}

    isTuiReactiveControl(
        documentedComponent: supportingDocumentationComponent,
    ): documentedComponent is AbstractExampleTuiControl {
        return documentedComponent instanceof AbstractExampleTuiControl;
    }

    isTuiInteractive(
        documentedComponent: supportingDocumentationComponent,
    ): documentedComponent is AbstractExampleTuiInteractive {
        return documentedComponent instanceof AbstractExampleTuiInteractive;
    }

    isTuiHint(
        documentedComponent: supportingDocumentationComponent,
    ): documentedComponent is AbstractExampleTuiHint {
        return documentedComponent instanceof AbstractExampleTuiHint;
    }
}
