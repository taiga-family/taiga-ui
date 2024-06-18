import {NgIf} from '@angular/common';
import {Component, inject, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiDocDocumentation,
    TuiDocDocumentationPropertyConnector,
} from '@taiga-ui/addon-doc';
import {TUI_HINT_DIRECTIONS} from '@taiga-ui/core';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract-props-accessor';
import {AbstractExampleTuiControl} from '../control';
import {DropdownDocumentation} from '../dropdown-documentation';
import {AbstractExampleTuiHint} from '../hint';
import {HintControllerDocumentation} from '../hint-controller-documentation';
import {AbstractExampleTuiInteractive} from '../interactive';
import {AbstractExampleTuiNumberFormat} from '../number-format';
import {NumberFormatDocumentation} from '../number-format-documentation';
import type {TuiSupportingDocumentationComponent} from '../supporting-documentation-component';
import {TextfieldControllerDocumentation} from '../textfield-controller-documentation';

@Component({
    standalone: true,
    selector: 'inherited-documentation',
    imports: [
        DropdownDocumentation,
        NgIf,
        NumberFormatDocumentation,
        HintControllerDocumentation,
        TextfieldControllerDocumentation,
        TuiDocDocumentation,
        TuiDocDocumentationPropertyConnector,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export class InheritedDocumentation {
    protected readonly booleanVariants: readonly boolean[] = [false, true];
    protected readonly directionVariants = TUI_HINT_DIRECTIONS;
    protected readonly appearanceVariants = ['', 'error', 'dark'];
    protected readonly documentedComponent = inject(ABSTRACT_PROPS_ACCESSOR);

    @Input()
    public dropdown = false;

    @Input()
    public withHint = true;

    @Input()
    public withTextFieldController = true;

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

    protected isTuiFormatNumber(
        documentedComponent: TuiSupportingDocumentationComponent,
    ): documentedComponent is AbstractExampleTuiHint {
        return documentedComponent instanceof AbstractExampleTuiNumberFormat;
    }
}
