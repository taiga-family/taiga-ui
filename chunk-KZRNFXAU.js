import"./chunk-42JZD6NG.js";var e=`import {Component, inject, input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiDocDocumentation,
    TuiDocDocumentationPropertyConnector,
} from '@taiga-ui/addon-doc';
import {TUI_HINT_DIRECTIONS, type TuiHintDirection} from '@taiga-ui/core';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract-props-accessor';
import {AbstractExampleTuiControl} from '../control';
import {DropdownDocumentation} from '../dropdown-documentation';
import {AbstractExampleTuiHint} from '../hint';
import {HintControllerDocumentation} from '../hint-controller-documentation';
import {AbstractExampleTuiInteractive} from '../interactive';
import {type TuiSupportingDocumentationComponent} from '../supporting-documentation-component';
import {TextfieldControllerDocumentation} from '../textfield-controller-documentation';

@Component({
    selector: 'inherited-documentation',
    imports: [
        DropdownDocumentation,
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
    protected readonly directionVariants = [
        ...TUI_HINT_DIRECTIONS,
        ['bottom', 'left'] satisfies TuiHintDirection[],
    ];

    protected readonly appearanceVariants = ['', 'error', 'dark'];
    protected readonly documentedComponent = inject(ABSTRACT_PROPS_ACCESSOR);

    public readonly dropdown = input(false);

    public readonly withHint = input(true);

    public readonly withTextFieldController = input(true);

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
`;export{e as default};
