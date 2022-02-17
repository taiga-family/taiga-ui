import {Component, ElementRef, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiSliderModule} from '../slider.module';

describe('Slider', () => {
    @Component({
        template: `
            <input
                #controller
                tuiSlider
                type="range"
                [max]="max"
                [min]="min"
                [formControl]="formController"
            />
            <input
                #model
                tuiSlider
                type="range"
                [max]="max"
                [min]="min"
                [(ngModel)]="ngModelValue"
            />
        `,
    })
    class TestComponent {
        @ViewChild('controller', {static: true, read: ElementRef})
        formControllerComponent!: ElementRef<HTMLInputElement>;

        @ViewChild('model', {static: true, read: ElementRef})
        ngModelComponent!: ElementRef<HTMLInputElement>;

        ngModelValue = 5;
        formController = new FormControl(5);

        max = 11;
        min = 0;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule, TuiSliderModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(async () => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();

        return fixture.whenStable();
    });

    it('has initial value of "number"-type', () => {
        expect(typeof testComponent.formController.value).toBe('number');
        expect(typeof testComponent.ngModelValue).toBe('number');
    });

    it('returns "number"-type value on input', async () => {
        expect(testComponent.formController.value).toBe(5);
        expect(testComponent.ngModelValue).toBe(5);

        changeSliderValue(testComponent.formControllerComponent.nativeElement, '3');
        changeSliderValue(testComponent.ngModelComponent.nativeElement, '3');

        fixture.detectChanges();
        await fixture.whenStable();

        expect(testComponent.formController.value).toBe(3);
        expect(testComponent.ngModelValue).toBe(3);
    });

    function changeSliderValue(el: HTMLInputElement, newValue: string) {
        el.value = newValue;
        el.dispatchEvent(new Event('input'));
    }
});
