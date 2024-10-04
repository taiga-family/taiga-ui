import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TUI_ANIMATIONS_SPEED, TuiRoot, TuiTextfield} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiRoot, TuiTextfield],
    template: `
        <tui-root>
            <tui-textfield [filler]="filler">
                <input
                    tuiTextfield
                    [formControl]="control"
                />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: TUI_ANIMATIONS_SPEED, useValue: 0}],
})
export class TestTextfield {
    @Input()
    public control = new FormControl('', {nonNullable: true});

    @Input()
    public filler = '';
}

describe('Textfield', () => {
    describe('[filler] property', () => {
        beforeEach(() => cy.viewport(200, 150));

        describe('with initial value', () => {
            ['2', '23', '23:', '23:5', '23:59'].forEach((initialValue) => {
                it(initialValue, () => {
                    cy.mount(TestTextfield, {
                        componentProperties: {
                            control: new FormControl(initialValue, {nonNullable: true}),
                            filler: 'HH:MM',
                        },
                    });

                    cy.get('input[tuiTextfield]').focus();
                    cy.get('tui-textfield').compareSnapshot(
                        `[filler]-initial-value_${initialValue}`,
                    );
                });
            });
        });

        describe('programmatic patch of form control', () => {
            let control!: FormControl<string>;

            beforeEach(() => {
                control = new FormControl('', {nonNullable: true});

                cy.mount(TestTextfield, {
                    componentProperties: {
                        control,
                        filler: 'HH:MM',
                    },
                });

                cy.get('input[tuiTextfield]').focus();
            });

            ['2', '23', '23:', '23:5', '23:59'].forEach((value) => {
                it(value, () => {
                    control.patchValue(value);

                    cy.get('tui-textfield').compareSnapshot(
                        `[filler]-patch-value_${value}`,
                    );
                });
            });
        });

        describe('user types new value', () => {
            beforeEach(() => {
                cy.mount(TestTextfield, {
                    componentProperties: {
                        filler: 'HH:MM',
                    },
                });

                cy.get('input[tuiTextfield]').focus();
            });

            ['2', '23', '23:', '23:5', '23:59'].forEach((value) => {
                it(value, () => {
                    cy.get('input[tuiTextfield]').type(value);

                    cy.get('tui-textfield').compareSnapshot(
                        `[filler]-user-types_${value}`,
                    );
                });
            });
        });
    });
});
