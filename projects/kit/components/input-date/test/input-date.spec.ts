import {ChangeDetectionStrategy, Component, type OnInit} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';
import {provideTaiga, TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDate} from '@taiga-ui/kit';

describe('TuiInputDateDirective', () => {
    @Component({
        standalone: true,
        imports: [ReactiveFormsModule, TuiInputDate, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <tui-textfield>
                    <input
                        tuiInputDate
                        [formControl]="control"
                    />
                    <tui-calendar *tuiDropdown />
                </tui-textfield>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test implements OnInit {
        public emissions: unknown[] = [];
        public control = new FormControl<TuiDay | null>(null);

        public ngOnInit(): void {
            this.control.valueChanges.subscribe((value) => {
                this.emissions.push(value);
            });
        }
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test], providers: [provideTaiga()]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should not emit valueChanges on initialization', () => {
        expect(testComponent.emissions).toEqual([]);
    });

    it('should emit valueChanges when value is changed programmatically', () => {
        const newDay = new TuiDay(2025, 5, 10);

        testComponent.control.setValue(newDay);

        expect(testComponent.emissions.length).toBe(1);
        expect((testComponent.emissions[0] as TuiDay).daySame(newDay)).toBe(true);
    });
});
