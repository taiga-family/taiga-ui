import {ChangeDetectionStrategy, Component, type OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TUI_ANIMATIONS_SPEED, TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiSelect} from '@taiga-ui/kit';
import {delay, of} from 'rxjs';

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
    providers: [{provide: TUI_ANIMATIONS_SPEED, useValue: 0}],
})
export class TestTextfield implements OnInit {
    protected readonly form = new FormGroup({
        test: new FormControl(''),
    });

    public ngOnInit(): void {
        of('Text')
            .pipe(delay(1_000))
            .subscribe((text) => {
                const control = this.form.get('test');

                control?.setValue(text);
                control?.disable();
            });
    }
}

describe('Textfield and tuiSelect', () => {
    beforeEach(() => cy.viewport(200, 150));

    it('show selected value after disabled', () => {
        cy.mount(TestTextfield);
        cy.wait(1_000);
        cy.get('tui-textfield').compareSnapshot('tui-textfield-disabled');
    });
});
