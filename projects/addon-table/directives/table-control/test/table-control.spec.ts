import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {TuiTable, TuiTableControl} from '@taiga-ui/addon-table';
import {TuiCheckbox} from '@taiga-ui/core';

describe('TuiTableControl', () => {
    @Component({
        imports: [FormsModule, TuiCheckbox, TuiTable, TuiTableControl],
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
                    @for (item of items; track item) {
                        <tr>
                            <td tuiTd>
                                <input
                                    tuiCheckbox
                                    type="checkbox"
                                    [disabled]="disabled().includes(item)"
                                    [id]="item"
                                    [tuiCheckboxRow]="item"
                                />
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        protected readonly items = ['a', 'b', 'c'];

        public readonly disabled = signal<readonly string[]>([]);
        public selected: readonly string[] = [];
    }

    let fixture: ComponentFixture<unknown>;
    let component: Test;

    function getCheckbox(id: string): HTMLInputElement {
        return fixture.nativeElement.querySelector(`#${id}`);
    }

    async function stable(): Promise<void> {
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();
    }

    async function setup(
        disabled: readonly string[] = [],
        selected: readonly string[] = [],
    ): Promise<void> {
        const created = TestBed.createComponent(Test);

        fixture = created;
        component = created.componentInstance;
        component.disabled.set(disabled);
        component.selected = selected;

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

            expect(component.selected).toEqual(['b']);
            expect(getCheckbox('all').indeterminate).toBe(true);
        });

        it('selects all rows with header checkbox', async () => {
            await click('all');

            expect(component.selected).toEqual(['a', 'b', 'c']);
            expect(getCheckbox('all').checked).toBe(true);
        });

        it('clears all rows with header checkbox', async () => {
            await click('all');
            await click('all');

            expect(component.selected).toEqual([]);
            expect(getCheckbox('all').checked).toBe(false);
        });
    });

    describe('with disabled row', () => {
        it('renders disabled row as disabled', async () => {
            await setup(['b']);

            expect(getCheckbox('a').disabled).toBe(false);
            expect(getCheckbox('b').disabled).toBe(true);
            expect(getCheckbox('c').disabled).toBe(false);
        });

        it('does not select disabled row on click', async () => {
            await setup(['b']);
            await click('b');

            expect(component.selected).toEqual([]);
        });

        it('skips unselected disabled row when selecting all', async () => {
            await setup(['b']);
            await click('all');

            expect(component.selected).toEqual(['a', 'c']);
            expect(getCheckbox('b').checked).toBe(false);
        });

        it('marks header as checked when all enabled rows are selected', async () => {
            await setup(['b'], ['a', 'c']);

            expect(getCheckbox('all').checked).toBe(true);
            expect(getCheckbox('all').indeterminate).toBe(false);
        });

        it('keeps selected disabled row when selecting all', async () => {
            await setup(['b'], ['b']);
            await click('all');

            expect(component.selected).toEqual(['a', 'b', 'c']);
        });

        it('keeps table order when selecting all with selected disabled row', async () => {
            await setup(['b'], ['c', 'b']);
            await click('all');

            expect(component.selected).toEqual(['a', 'b', 'c']);
        });

        it('keeps selected disabled row when clearing all', async () => {
            await setup(['b'], ['a', 'b', 'c']);
            await click('all');

            expect(component.selected).toEqual(['b']);
            expect(getCheckbox('b').checked).toBe(true);
            expect(getCheckbox('all').checked).toBe(false);
        });

        it('marks header as indeterminate when only disabled row is selected', async () => {
            await setup(['b'], ['b']);

            expect(getCheckbox('all').checked).toBe(false);
            expect(getCheckbox('all').indeterminate).toBe(true);
        });

        it('does not mark header as checked when all rows are disabled', async () => {
            await setup(['a', 'b', 'c'], ['a', 'b', 'c']);

            expect(getCheckbox('all').checked).toBe(false);
        });

        it('enables row when disabled is turned off', async () => {
            await setup(['b']);

            component.disabled.set([]);
            await stable();

            expect(getCheckbox('b').disabled).toBe(false);

            await click('all');

            expect(component.selected).toEqual(['a', 'b', 'c']);
        });

        it('disables row when disabled is turned on', async () => {
            await setup();

            component.disabled.set(['b']);
            await stable();

            expect(getCheckbox('b').disabled).toBe(true);

            await click('all');

            expect(component.selected).toEqual(['a', 'c']);
        });
    });

    describe('with disabled attribute without value', () => {
        @Component({
            imports: [FormsModule, TuiCheckbox, TuiTable, TuiTableControl],
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
                        <tr>
                            <td tuiTd>
                                <input
                                    id="a"
                                    tuiCheckbox
                                    tuiCheckboxRow="a"
                                    type="checkbox"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td tuiTd>
                                <input
                                    disabled
                                    id="b"
                                    tuiCheckbox
                                    tuiCheckboxRow="b"
                                    type="checkbox"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class TestAttribute {
            public selected: readonly string[] = [];
        }

        it('disables the row and skips it when selecting all', async () => {
            const created = TestBed.createComponent(TestAttribute);

            fixture = created;
            await stable();

            expect(getCheckbox('b').disabled).toBe(true);

            await click('all');

            expect(created.componentInstance.selected).toEqual(['a']);
        });
    });
});
