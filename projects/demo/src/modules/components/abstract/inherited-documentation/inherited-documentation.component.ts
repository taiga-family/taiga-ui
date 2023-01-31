import {Component, Inject, Input, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocDocumentationPropertyConnectorDirective} from '@taiga-ui/addon-doc';
import {TUI_HINT_DIRECTIONS} from '@taiga-ui/core';

// eslint-disable-next-line import/no-cycle
import {AbstractExampleTuiControl} from '../control';
import {DropdownDocumentationComponent} from '../dropdown-documentation/dropdown-documentation.component';
import {AbstractExampleTuiHint} from '../hint';
import {AbstractExampleTuiInteractive} from '../interactive';
import {ABSTRACT_PROPS_ACCESSOR} from './abstract-props-accessor';
import type {TuiSupportingDocumentationComponent} from './supporting-documentation-component';

@Component({
    selector: 'inherited-documentation',
    templateUrl: './inherited-documentation.template.html',
    changeDetection,
})
export class InheritedDocumentationComponent {
    @ViewChild(DropdownDocumentationComponent)
    readonly dropdownDocumentation?: DropdownDocumentationComponent;

    @Input()
    dropdown = false;

    readonly booleanVariants: readonly boolean[] = [false, true];

    readonly directionVariants = TUI_HINT_DIRECTIONS;

    readonly appearanceVariants = ['', 'error', 'onDark'];

    constructor(
        @Inject(ABSTRACT_PROPS_ACCESSOR)
        readonly documentedComponent: TuiSupportingDocumentationComponent,
    ) {}

    get manualChange(): TuiDocDocumentationPropertyConnectorDirective<boolean> | null {
        return this.dropdownDocumentation?.manualChange ?? null;
    }

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
