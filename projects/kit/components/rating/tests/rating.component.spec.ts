import {Component, Directive, inject, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiRatingComponent, TuiRatingModule} from '@taiga-ui/kit';

describe('Rating', () => {
    let component: TuiRatingComponent;
    let testComponent: AbstractTuiTestComponent;

    @Directive()
    abstract class AbstractTuiTestComponent {
        public abstract rate: number;

        @ViewChild(TuiRatingComponent, {static: true})
        public component!: TuiRatingComponent;
    }

    describe('Template Driven', () => {
        let fixture: ComponentFixture<TestComponent>;

        @Component({
            template: `
                <tui-rating [(ngModel)]="rate"></tui-rating>
            `,
        })
        class TestComponent extends AbstractTuiTestComponent {
            public rate = 2;
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
        it('should be update value by setRate', () => {
            expect(testComponent.rate).toBe(2);
            expect(component.percent).toBe(40);
            expect(component.value).toBe(2);

            component.setRate(1);

            expect(component.percent).toBe(20);
            expect(testComponent.rate).toBe(1);
            expect(component.value).toBe(1);

            component.setRate(4);

            expect(component.percent).toBe(80);
            expect(testComponent.rate).toBe(4);
            expect(component.value).toBe(4);
        });

        // noinspection DuplicatedCode
        it('should be update value by setRateByReverseIndex', () => {
            expect(testComponent.rate).toBe(2);
            expect(component.percent).toBe(40);
            expect(component.value).toBe(2);

            component.setRateByReverseIndex(1);

            expect(component.percent).toBe(80);
            expect(component.value).toBe(4);
        });

        it('try set invalid value', () => {
            expect(testComponent.rate).toBe(2);
            expect(component.value).toBe(2);
            expect(component.percent).toBe(40);

            component.setRate(4.5);

            expect(testComponent.rate).toBe(4.5);
            expect(component.value).toBe(4.5);
            expect(component.percent).toBe(90);

            component.setRate(0.4);

            expect(testComponent.rate).toBe(0.4);
            expect(component.value).toBe(0.4);
            expect(component.percent).toBe(8);
        });
    });

    describe('Reactive forms', () => {
        let fixture: ComponentFixture<TestComponent>;

        @Component({
            template: `
                <ng-container [formGroup]="form">
                    <tui-rating formControlName="rating"></tui-rating>
                </ng-container>
            `,
        })
        class TestComponent extends AbstractTuiTestComponent {
            private readonly fb = inject(FormBuilder);
            public form = this.fb.group({rating: this.fb.control(0)});

            public get rate(): number {
                return this.form.get('rating')?.value ?? NaN;
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
        it('should be update value by setRate', () => {
            expect(testComponent.rate).toBe(0);
            expect(component.percent).toBe(0);
            expect(component.value).toBe(0);

            component.setRate(2);

            expect(component.percent).toBe(40);
            expect(component.value).toBe(2);

            component.setRate(3);
            fixture.detectChanges();

            expect(component.percent).toBe(60);
            expect(component.value).toBe(3);
        });

        // noinspection DuplicatedCode
        it('should be update value by setRateByReverseIndex', () => {
            expect(testComponent.rate).toBe(0);
            expect(component.percent).toBe(0);
            expect(component.value).toBe(0);

            component.setRateByReverseIndex(1);
            fixture.detectChanges();

            expect(testComponent.rate).toBe(4);
            expect(component.percent).toBe(80);
            expect(component.value).toBe(4);
        });

        it('try set invalid value', () => {
            expect(testComponent.rate).toBe(0);
            expect(component.value).toBe(0);
            expect(component.percent).toBe(0);

            component.setRate(100);
            fixture.detectChanges();

            expect(testComponent.rate).toBe(100);
            expect(component.value).toBe(100);
            expect(component.percent).toBe(100);

            component.setRate(-1);
            fixture.detectChanges();

            expect(testComponent.rate).toBe(-1);
            expect(component.value).toBe(-1);
            expect(component.percent).toBe(0);
        });
    });
});
