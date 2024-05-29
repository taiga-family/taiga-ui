import {Component, forwardRef} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiButtonDirective, TuiHostedDropdownModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiDropdown} from '../abstract/dropdown';
import {DropdownDocumentationComponent} from '../abstract/dropdown-documentation';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiHostedDropdownModule,
        TuiInputModule,
        FormsModule,
        TuiButtonDirective,
        DropdownDocumentationComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => PageComponent),
        },
    ],
})
export default class PageComponent extends AbstractExampleTuiDropdown {
    protected open = false;

    protected sided = false;

    protected input = '';

    protected canOpenVariants = [true, 'getter this.input.length > 2'];

    protected canOpenSelected = this.canOpenVariants[0];

    protected readonly contentVariants = ['Template', 'Custom string'];

    protected content = this.contentVariants[0];

    protected get template(): boolean {
        return this.content === 'Template';
    }

    protected get canOpen(): boolean {
        return this.canOpenSelected === true || this.input.length > 2;
    }

    protected onInput(input: string): void {
        this.input = input;
        this.open = this.canOpen;
    }

    protected onClick(): void {
        this.open = false;
    }
}
