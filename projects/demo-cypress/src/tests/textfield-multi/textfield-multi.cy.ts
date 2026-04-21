import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputChip, TuiTextfield],
    template: `
        <tui-textfield
            multi
            tuiTextfieldSize="l"
        >
            <label tuiLabel>Growing height L</label>

            <input
                placeholder="Enter"
                tuiInputChip
                [unique]="false"
                [(ngModel)]="value"
            />

            <tui-input-chip *tuiItem />
        </tui-textfield>

        <tui-textfield
            multi
            tuiTextfieldSize="m"
        >
            <label tuiLabel>Growing height M</label>

            <input
                placeholder="Enter"
                tuiInputChip
                [unique]="false"
                [(ngModel)]="value"
            />

            <tui-input-chip *tuiItem />
        </tui-textfield>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    protected value = ['I', 'love', 'Angular'];
}

describe('Textfield Multi', () => {
    beforeEach(() => cy.mount(Sandbox));

    it('should render correctly with sizes M and L with label and chip', () => {
        cy.get('tui-textfield[multi][tuiTextfieldSize="l"]').compareSnapshot(
            'textfield-multi-size-l',
        );

        cy.get('tui-textfield[multi][tuiTextfieldSize="m"]').compareSnapshot(
            'textfield-multi-size-m',
        );
    });
});
