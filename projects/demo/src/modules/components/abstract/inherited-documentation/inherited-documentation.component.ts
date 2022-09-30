import {Component, Inject, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TUI_HINT_DIRECTIONS} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from '../control';
import {AbstractExampleTuiHint} from '../hint';
import {AbstractExampleTuiInteractive} from '../interactive';
import {ABSTRACT_PROPS_ACCESSOR} from './abstract-props-accessor';
import {TuiSupportingDocumentationComponent} from './supporting-documentation-component';

@Component({
    selector: `inherited-documentation`,
    templateUrl: `./inherited-documentation.template.html`,
    changeDetection,
})
export class InheritedDocumentationComponent {
    @Input()
    dropdown = false;

    readonly booleanVariants: readonly boolean[] = [false, true];

    readonly directionVariants = TUI_HINT_DIRECTIONS;

    readonly appearanceVariants = [``, `error`, `onDark`];

    constructor(
        @Inject(ABSTRACT_PROPS_ACCESSOR)
        readonly documentedComponent: TuiSupportingDocumentationComponent,
    ) {}

    isTuiReactiveControl(
        documentedComponent: TuiSupportingDocumentationComponent,
    ): documentedComponent is AbstractExampleTuiControl {
        return documentedComponent instanceof AbstractExampleTuiControl;
    }

    isTuiInteractive(
        documentedComponent: TuiSupportingDocumentationComponent,
    ): documentedComponent is AbstractExampleTuiInteractive {
        return documentedComponent instanceof AbstractExampleTuiInteractive;
    }

    isTuiHint(
        documentedComponent: TuiSupportingDocumentationComponent,
    ): documentedComponent is AbstractExampleTuiHint {
        return documentedComponent instanceof AbstractExampleTuiHint;
    }
}
