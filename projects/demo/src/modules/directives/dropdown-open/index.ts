import {Component, forwardRef} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/abstract-props-accessor';

@Component({
    imports: [
        FormsModule,
        TuiButton,
        TuiDemo,
        TuiDocDropdown,
        TuiDropdown,
        TuiInputModule,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => PageComponent),
        },
    ],
})
export default class PageComponent {
    protected open = false;

    protected input = '';

    protected enabledVariants = [true, 'getter this.input.length > 2'];

    protected enabledSelected = this.enabledVariants[0]!;

    protected readonly contentVariants = ['Template', 'Custom string'];

    protected content = this.contentVariants[0]!;

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
