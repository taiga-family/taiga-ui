import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiChevron,
        TuiRoot,
        TuiSelect,
        TuiTextfield,
    ],
    template: `
        <tui-root>
            <tui-textfield
                tuiChevron
                [content]="content"
                [formGroup]="form"
            >
                <input
                    formControlName="test"
                    placeholder="Placeholder"
                    tuiSelect
                />

                <ng-template
                    #content
                    let-data
                >
                    {{ data }}
                </ng-template>
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    protected readonly form = new FormGroup({test: new FormControl('')});

    constructor() {
        setTimeout(() => {
            const control = this.form.get('test');

            control?.setValue('Text');
            control?.disable();
        }, 500);
    }
}

describe('Select', () => {
    beforeEach(() => cy.viewport(200, 150));

    it('show selected value after disabled', () => {
        cy.mount(Sandbox).wait(1_000);

        cy.get('tui-textfield input').should('be.disabled');
        cy.get('tui-textfield').compareSnapshot('tui-textfield-disabled');
    });
});
