import {NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {TuiTable, TuiTableControl} from '@taiga-ui/addon-table';
import {TuiCheckbox} from '@taiga-ui/kit';

describe('TuiTableControl', () => {
    @Component({
        standalone: true,
        imports: [FormsModule, NgForOf, TuiCheckbox, TuiTable, TuiTableControl],
        template: `
            <table
                tuiTable
                [(ngModel)]="selected"
            >
                <thead>
                    <tr>
                        <th tuiTh>
                            <input
                                id="all"
                                tuiCheckbox
                                tuiCheckboxTable
                                type="checkbox"
                            />
                        </th>
                    </tr>
                </thead>
                <tbody tuiTbody>
                    <tr *ngFor="let item of items">
                        <td tuiTd>
                            <input
                                tuiCheckbox
                                type="checkbox"
                                [disabled]="disabled.includes(item)"
                                [id]="item"
                                [tuiCheckboxRow]="item"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        `,
        // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
        changeDetection: ChangeDetectionStrategy.Default,
    })
    class Test {
        public readonly items = ['a', 'b', 'c'];

        public disabled: readonly string[] = [];
        public selected: readonly string[] = [];
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    function getCheckbox(id: string): HTMLInputElement {
        return fixture.nativeElement.querySelector(`#${id}`);
    }

    async function stable(): Promise<void> {
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();
    }

    async function setup(
        state: Partial<Pick<Test, 'disabled' | 'selected'>> = {},
    ): Promise<void> {
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        Object.assign(testComponent, state);

        await stable();
    }

    async function click(id: string): Promise<void> {
        getCheckbox(id).click();

        await stable();
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();
    });

    describe('without disabled rows', () => {
        beforeEach(async () => setup());

        it('renders all rows enabled', () => {
            expect(getCheckbox('a').disabled).toBe(false);
            expect(getCheckbox('b').disabled).toBe(false);
            expect(getCheckbox('c').disabled).toBe(false);
        });

        it('selects a row on click', async () => {
            await click('b');

            expect(testComponent.selected).toEqual(['b']);
            expect(getCheckbox('all').indeterminate).toBe(true);
        });

        it('selects all rows with header checkbox', async () => {
            await click('all');

            expect(testComponent.selected).toEqual(['a', 'b', 'c']);
            expect(getCheckbox('all').checked).toBe(true);
        });

        it('clears all rows with header checkbox', async () => {
            await click('all');
            await click('all');

            expect(testComponent.selected).toEqual([]);
            expect(getCheckbox('all').checked).toBe(false);
        });
    });

    describe('with disabled row', () => {
        it('renders disabled row as disabled', async () => {
            await setup({disabled: ['b']});

            expect(getCheckbox('a').disabled).toBe(false);
            expect(getCheckbox('b').disabled).toBe(true);
            expect(getCheckbox('c').disabled).toBe(false);
        });

        it('does not select disabled row on click', async () => {
            await setup({disabled: ['b']});
            await click('b');

            expect(testComponent.selected).toEqual([]);
        });

        it('skips unselected disabled row when selecting all', async () => {
            await setup({disabled: ['b']});
            await click('all');

            expect(testComponent.selected).toEqual(['a', 'c']);
            expect(getCheckbox('b').checked).toBe(false);
        });

        it('marks header as checked when all enabled rows are selected', async () => {
            await setup({disabled: ['b'], selected: ['a', 'c']});

            expect(getCheckbox('all').checked).toBe(true);
            expect(getCheckbox('all').indeterminate).toBe(false);
        });

        it('keeps selected disabled row when selecting all', async () => {
            await setup({disabled: ['b'], selected: ['b']});
            await click('all');

            expect([...testComponent.selected].sort()).toEqual(['a', 'b', 'c']);
        });

        it('keeps selected disabled row when clearing all', async () => {
            await setup({disabled: ['b'], selected: ['a', 'b', 'c']});
            await click('all');

            expect(testComponent.selected).toEqual(['b']);
            expect(getCheckbox('b').checked).toBe(true);
            expect(getCheckbox('all').checked).toBe(false);
        });

        it('marks header as indeterminate when only disabled row is selected', async () => {
            await setup({disabled: ['b'], selected: ['b']});

            expect(getCheckbox('all').checked).toBe(false);
            expect(getCheckbox('all').indeterminate).toBe(true);
        });

        it('does not mark header as checked when all rows are disabled', async () => {
            await setup({disabled: ['a', 'b', 'c'], selected: ['a', 'b', 'c']});

            expect(getCheckbox('all').checked).toBe(false);
        });

        it('enables row when disabled is turned off', async () => {
            await setup({disabled: ['b']});

            testComponent.disabled = [];
            await stable();

            expect(getCheckbox('b').disabled).toBe(false);

            await click('all');

            expect(testComponent.selected).toEqual(['a', 'b', 'c']);
        });

        it('disables row when disabled is turned on', async () => {
            await setup();

            testComponent.disabled = ['b'];
            await stable();

            expect(getCheckbox('b').disabled).toBe(true);

            await click('all');

            expect(testComponent.selected).toEqual(['a', 'c']);
        });
    });
});
