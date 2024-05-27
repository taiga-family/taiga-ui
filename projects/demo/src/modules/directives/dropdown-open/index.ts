import {Component, forwardRef} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {
    TuiButtonDirective,
    TuiDropdownDirective,
    TuiDropdownOpenDirective,
    TuiDropdownOptionsDirective,
} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

import {AbstractExampleTuiDropdown} from '../../components/abstract/dropdown';
import {DropdownDocumentationModule} from '../../components/abstract/dropdown-documentation/dropdown-documentation.module';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiInputModule,
        FormsModule,
        TuiDropdownDirective,
        TuiDropdownOptionsDirective,
        TuiDropdownOpenDirective,
        TuiButtonDirective,
        DropdownDocumentationModule,
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

    protected enabledVariants = [true, 'getter this.input.length > 2'];

    protected enabledSelected = this.enabledVariants[0];

    protected readonly contentVariants = ['Template', 'Custom string'];

    protected content = this.contentVariants[0];

    protected get template(): boolean {
        return this.content === 'Template';
    }

    protected get enabled(): boolean {
        return this.enabledSelected === true || this.input.length > 2;
    }

    protected onInput(input: string): void {
        this.input = input;
        this.open = this.enabled;
    }

    protected onClick(): void {
        this.open = false;
    }
}
