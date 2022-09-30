import {Component, Directive, Inject, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiRatingComponent, TuiRatingModule} from '@taiga-ui/kit/components';

describe(`Rating`, () => {
    let component: TuiRatingComponent;
    let testComponent: AbstractTuiTestComponent;

    @Directive()
    abstract class AbstractTuiTestComponent {
        abstract rate: number;

        @ViewChild(TuiRatingComponent, {static: true})
        component!: TuiRatingComponent;
    }

    describe(`Template Driven`, () => {
        let fixture: ComponentFixture<TestComponent>;

        @Component({
            template: `
                <tui-rating [(ngModel)]="rate"></tui-rating>
            `,
        })
        class TestComponent extends AbstractTuiTestComponent {
            rate = 2;
        }

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [FormsModule, TuiRatingModule],
                declarations: [TestComponent],
            });

            fixture = TestBed.createComponent(TestComponent);
            testComponent = fixture.componentInstance;
            component = testComponent.component;
            fixture.autoDetectChanges();
        });

        // noinspection DuplicatedCode
        it(`should be update value by setRate`, () => {
            expect(testComponent.rate).toEqual(2);
            expect(component.percent).toEqual(40);
            expect(component.value).toEqual(2);

            component.setRate(1);

            expect(component.percent).toEqual(20);
            expect(testComponent.rate).toEqual(1);
            expect(component.value).toEqual(1);

            component.setRate(4);

            expect(component.percent).toEqual(80);
            expect(testComponent.rate).toEqual(4);
            expect(component.value).toEqual(4);
        });

        // noinspection DuplicatedCode
        it(`should be update value by setRateByReverseIndex`, () => {
            expect(testComponent.rate).toEqual(2);
            expect(component.percent).toEqual(40);
            expect(component.value).toEqual(2);

            component.setRateByReverseIndex(1);

            expect(component.percent).toEqual(80);
            expect(component.value).toEqual(4);
        });

        it(`try set invalid value`, () => {
            expect(testComponent.rate).toEqual(2);
            expect(component.value).toEqual(2);
            expect(component.percent).toEqual(40);

            component.setRate(4.5);

            expect(testComponent.rate).toEqual(4.5);
            expect(component.value).toEqual(4.5);
            expect(component.percent).toEqual(90);

            component.setRate(0.4);

            expect(testComponent.rate).toEqual(0.4);
            expect(component.value).toEqual(0.4);
            expect(component.percent).toEqual(8);
        });
    });

    describe(`Reactive forms`, () => {
        let fixture: ComponentFixture<TestComponent>;

        @Component({
            template: `
                <ng-container [formGroup]="form">
                    <tui-rating formControlName="rating"></tui-rating>
                </ng-container>
            `,
        })
        class TestComponent extends AbstractTuiTestComponent {
            form = this.fb.group({rating: this.fb.control(0)});

            constructor(@Inject(FormBuilder) private readonly fb: FormBuilder) {
                super();
            }

            get rate(): number {
                return this.form.get(`rating`)?.value;
            }
        }

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ReactiveFormsModule, TuiRatingModule],
                declarations: [TestComponent],
            });

            fixture = TestBed.createComponent(TestComponent);
            testComponent = fixture.componentInstance;
            component = testComponent.component;
            fixture.autoDetectChanges();
        });

        // noinspection DuplicatedCode
        it(`should be update value by setRate`, () => {
            expect(testComponent.rate).toEqual(0);
            expect(component.percent).toEqual(0);
            expect(component.value).toEqual(0);

            component.setRate(2);

            expect(component.percent).toEqual(40);
            expect(component.value).toEqual(2);

            component.setRate(3);
            fixture.detectChanges();

            expect(component.percent).toEqual(60);
            expect(component.value).toEqual(3);
        });

        // noinspection DuplicatedCode
        it(`should be update value by setRateByReverseIndex`, () => {
            expect(testComponent.rate).toEqual(0);
            expect(component.percent).toEqual(0);
            expect(component.value).toEqual(0);

            component.setRateByReverseIndex(1);
            fixture.detectChanges();

            expect(testComponent.rate).toEqual(4);
            expect(component.percent).toEqual(80);
            expect(component.value).toEqual(4);
        });

        it(`try set invalid value`, () => {
            expect(testComponent.rate).toEqual(0);
            expect(component.value).toEqual(0);
            expect(component.percent).toEqual(0);

            component.setRate(100);
            fixture.detectChanges();

            expect(testComponent.rate).toEqual(100);
            expect(component.value).toEqual(100);
            expect(component.percent).toEqual(2000);

            component.setRate(-1);
            fixture.detectChanges();

            expect(testComponent.rate).toEqual(-1);
            expect(component.value).toEqual(-1);
            expect(component.percent).toEqual(-20);
        });
    });
});
