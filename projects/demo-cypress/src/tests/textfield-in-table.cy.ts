import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper} from '@taiga-ui/kit';
import {PolymorpheusComponent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [TuiTextfield],
    template: `
        <tui-textfield>
            <input
                tuiTextfield
                value="5678"
            />
        </tui-textfield>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class MyInputTextfield {}

@Component({
    standalone: true,
    imports: [FormsModule, TuiChevron, TuiDataListWrapper, TuiTextfield],
    template: `
        <tui-textfield tuiChevron>
            <select
                tuiTextfield
                [ngModel]="value"
            ></select>

            <tui-data-list-wrapper
                *tuiTextfieldDropdown
                [items]="items"
            />
        </tui-textfield>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class MySelectTextfield {
    protected readonly items = [1, 2, 3];
    protected value = this.items[0];
}

@Component({
    standalone: true,
    imports: [PolymorpheusOutlet, TuiTable, TuiTextfield],
    template: `
        <table
            style="inline-size: 100%"
            tuiTable
        >
            <tbody tuiTbody>
                <tr>
                    <td tuiTd>
                        <tui-textfield>
                            <input
                                tuiTextfield
                                value="1234"
                            />
                        </tui-textfield>
                    </td>
                    <td tuiTd>
                        <ng-container *polymorpheusOutlet="input as content">
                            {{ content }}
                        </ng-container>
                    </td>
                    <td tuiTd>
                        <ng-container *polymorpheusOutlet="select as content">
                            {{ content }}
                        </ng-container>
                    </td>
                </tr>
            </tbody>
        </table>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Test {
    protected readonly input = new PolymorpheusComponent(MyInputTextfield);
    protected readonly select = new PolymorpheusComponent(MySelectTextfield);
}

describe('TuiTable and TuiTextfield', () => {
    beforeEach(() => cy.mount(Test));

    it('should inherit table appearance inside tuiTable for textfield', () => {
        cy.get('body').compareSnapshot('tui-table__1');
    });
});
