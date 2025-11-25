import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {type TuiCard, TuiInputCardGroup} from '@taiga-ui/addon-commerce';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiInput} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiInputChip, TuiTextarea} from '@taiga-ui/kit';
import {PolymorpheusComponent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    imports: [TuiInput],
    template: `
        <tui-textfield>
            <input
                tuiInput
                value="5678"
            />
        </tui-textfield>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class MyInputTextfield {}

@Component({
    imports: [FormsModule, TuiChevron, TuiDataListWrapper, TuiInput],
    template: `
        <tui-textfield tuiChevron>
            <input
                tuiInput
                [(ngModel)]="value"
            />
            <tui-data-list-wrapper
                *tuiDropdown
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
    imports: [TuiTextarea],
    template: `
        <tui-textfield>
            <textarea
                placeholder="Enter text..."
                tuiTextarea
            ></textarea>
        </tui-textfield>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class MyTextarea {}

@Component({
    imports: [FormsModule, TuiInputChip],
    template: `
        <tui-textfield multi>
            <input
                placeholder="Add chips..."
                tuiInputChip
                [ngModel]="chips"
            />
            <tui-input-chip *tuiItem />
        </tui-textfield>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class MyInputChip {
    protected readonly chips = ['Chip 1', 'Chip 2'];
}

@Component({
    imports: [FormsModule, TuiInputCardGroup],
    template: `
        <tui-input-card-group [ngModel]="card">Enter card details</tui-input-card-group>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class MyInputCardGroup {
    protected readonly card: TuiCard = {
        card: '1234567890123456',
        expire: '12/25',
        cvc: '123',
    };
}

@Component({
    imports: [PolymorpheusOutlet, TuiInput, TuiTable],
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
                                tuiInput
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
                <tr>
                    <td tuiTd>
                        <ng-container *polymorpheusOutlet="textarea as content">
                            {{ content }}
                        </ng-container>
                    </td>
                    <td tuiTd>
                        <ng-container *polymorpheusOutlet="inputChip as content">
                            {{ content }}
                        </ng-container>
                    </td>
                    <td tuiTd>
                        <ng-container *polymorpheusOutlet="inputCardGroup as content">
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
    protected readonly textarea = new PolymorpheusComponent(MyTextarea);
    protected readonly inputChip = new PolymorpheusComponent(MyInputChip);
    protected readonly inputCardGroup = new PolymorpheusComponent(MyInputCardGroup);
}

describe('TuiTable and TuiTextfield', () => {
    beforeEach(() => cy.mount(Test));

    it('should inherit table appearance inside tuiTable for textfield-like components', () => {
        cy.get('body').compareSnapshot('tui-table__1');
    });
});
