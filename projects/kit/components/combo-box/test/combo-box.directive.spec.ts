import {ChangeDetectionStrategy, Component, input, output, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {provideTaiga, TuiDataList, TuiRoot} from '@taiga-ui/core';
import {TuiComboBox} from '@taiga-ui/kit';

describe('TuiComboBoxDirective', () => {
    /**
     * A trivial wrapper around <tui-data-list> that re-exposes the selected item
     * as an output() -- a very common shape for a shared "generic option list".
     */
    @Component({
        selector: 'app-data-list',
        imports: [TuiDataList],
        template: `
            <tui-data-list>
                @for (item of items(); track item) {
                    <button
                        tuiOption
                        [value]="item"
                        (click)="picked.emit(item)"
                    >
                        {{ item }}
                    </button>
                }
            </tui-data-list>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class DataListComponent {
        public readonly items = input<readonly string[]>([]);
        public readonly picked = output<string>();
    }

    @Component({
        imports: [DataListComponent, FormsModule, TuiComboBox, TuiRoot],
        template: `
            <tui-root>
                <tui-textfield [open]="true">
                    <input
                        tuiComboBox
                        [(ngModel)]="value"
                    />
                    <app-data-list
                        *tuiDropdown
                        [items]="brands"
                        (picked)="onPicked($event)"
                    />
                </tui-textfield>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public value = '';
        public brands = ['Audi', 'BMW', 'Volkswagen'];
        public onPicked = jest.fn();
    }

    it('nested click listeners work', async () => {
        TestBed.configureTestingModule({imports: [Test], providers: [provideTaiga()]});
        await TestBed.compileComponents();

        const fixture = TestBed.createComponent(Test);

        fixture.detectChanges();
        fixture.debugElement.query(By.css('[tuiOption]')).nativeElement.click();
        fixture.detectChanges();

        expect(fixture.componentInstance.value).toBe('Audi');
        expect(fixture.componentInstance.onPicked).toHaveBeenCalledWith('Audi');
    });

    describe('single option selection', () => {
        type Option = boolean | number;

        @Component({
            imports: [ReactiveFormsModule, TuiComboBox, TuiDataList, TuiRoot],
            template: `
                <tui-root>
                    <tui-textfield
                        [open]="true"
                        [stringify]="stringify"
                    >
                        <input
                            tuiComboBox
                            [formControl]="control"
                        />
                        <tui-data-list *tuiDropdown>
                            <button
                                tuiOption
                                [value]="option()"
                            >
                                {{ stringify(option()) }}
                            </button>
                        </tui-data-list>
                    </tui-textfield>
                </tui-root>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            public readonly control = new FormControl<Option | null>(null);
            public readonly option = signal<Option>(1);
            public readonly stringify = (value: Option): string => `Option ${value}`;
        }

        let fixture: ComponentFixture<Test>;

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [provideTaiga()],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(Test);
            fixture.detectChanges();
        });

        it.each([1, 0, false])('selects the only option (%s) on Enter', (value) => {
            const {control, option} = fixture.componentInstance;

            option.set(value);
            fixture.detectChanges();

            const input: HTMLInputElement = fixture.debugElement.query(
                By.css('input'),
            ).nativeElement;

            input.focus();
            input.value = 'Option';
            input.dispatchEvent(new Event('input', {bubbles: true}));
            fixture.detectChanges();

            const options = fixture.debugElement.queryAll(By.css('[tuiOption]'));

            expect(options).toHaveLength(1);
            expect(options[0]?.nativeElement.textContent.trim()).toBe(`Option ${value}`);
            expect(control.value).toBeNull();

            input.dispatchEvent(
                new KeyboardEvent('keydown', {
                    key: 'Enter',
                    bubbles: true,
                    cancelable: true,
                }),
            );
            fixture.detectChanges();

            expect(control.value).toBe(value);
        });

        it('selects the only option (0) on click', () => {
            const {control, option} = fixture.componentInstance;

            option.set(0);
            fixture.detectChanges();
            fixture.debugElement.query(By.css('[tuiOption]')).nativeElement.click();
            fixture.detectChanges();

            expect(control.value).toBe(0);
        });
    });
});
