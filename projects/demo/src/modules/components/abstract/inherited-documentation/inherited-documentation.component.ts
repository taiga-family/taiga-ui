import {Component, inject, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TUI_HINT_DIRECTIONS} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from '../control';
import {AbstractExampleTuiHint} from '../hint';
import {AbstractExampleTuiInteractive} from '../interactive';
import {ABSTRACT_PROPS_ACCESSOR} from './abstract-props-accessor';
import {TuiSupportingDocumentationComponent} from './supporting-documentation-component';

@Component({
    selector: 'inherited-documentation',
    templateUrl: './inherited-documentation.template.html',
    changeDetection,
})
export class InheritedDocumentationComponent {
    @Input()
    public dropdown = false;

    @Input()
    public withHint = true;

    @Input()
    public withTextFieldController = true;

    protected readonly booleanVariants: readonly boolean[] = [false, true];

    protected readonly directionVariants = TUI_HINT_DIRECTIONS;

    protected readonly appearanceVariants = ['', 'error', 'onDark'];

    protected readonly documentedComponent = inject(ABSTRACT_PROPS_ACCESSOR);

    protected isTuiReactiveControl(
        documentedComponent: TuiSupportingDocumentationComponent,
    ): documentedComponent is AbstractExampleTuiControl {
        return documentedComponent instanceof AbstractExampleTuiControl;
    }

    protected isTuiInteractive(
        documentedComponent: TuiSupportingDocumentationComponent,
    ): documentedComponent is AbstractExampleTuiInteractive {
        return documentedComponent instanceof AbstractExampleTuiInteractive;
    }

    protected isTuiHint(
        documentedComponent: TuiSupportingDocumentationComponent,
    ): documentedComponent is AbstractExampleTuiHint {
        return documentedComponent instanceof AbstractExampleTuiHint;
    }
}
