import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiInputCardComponent} from '../input-card.component';
import {TuiInputCardModule} from '../input-card.module';

describe(`InputCard`, () => {
    @Component({
        template: `
            <tui-input-card
                [formControl]="control"
                (binChange)="onBinChange($event)"
            ></tui-input-card>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputCardComponent, {static: true})
        component!: TuiInputCardComponent;

        control = new FormControl(``);

        onBinChange = jasmine.createSpy(`bin`);
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiInputCardModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe(`binChange`, () => {
        it(`Less than 6 characters`, () => {
            testComponent.control.setValue(`12345`);

            expect(testComponent.onBinChange).not.toHaveBeenCalled();
        });

        it(`6 and more characters`, () => {
            testComponent.control.setValue(`123456789`);

            expect(testComponent.onBinChange).toHaveBeenCalledWith(`123456`);
        });

        it(`The value has changed, the first 6 characters are unchanged`, () => {
            testComponent.control.setValue(`123456789`);
            testComponent.onBinChange.calls.reset();
            testComponent.control.setValue(`123456987`);

            expect(testComponent.onBinChange).not.toHaveBeenCalled();
        });

        it(`The value has changed, the first 6 characters have changed`, () => {
            testComponent.control.setValue(`123456789`);
            testComponent.onBinChange.calls.reset();
            testComponent.control.setValue(`654321789`);

            expect(testComponent.onBinChange).toHaveBeenCalledWith(`654321`);
        });

        it(`The value has changed to less than 6 characters`, () => {
            testComponent.control.setValue(`123456789`);
            testComponent.onBinChange.calls.reset();
            testComponent.control.setValue(`123`);

            expect(testComponent.onBinChange).toHaveBeenCalledWith(null);
        });
    });

    describe(`paymentSystem`, () => {
        it(`visa`, () => {
            testComponent.control.setValue(`4111 1111 1111 1111`);

            expect(testComponent.component.paymentSystem).toBe(`visa`);
        });

        it(`electron`, () => {
            testComponent.control.setValue(`4917300800000000`);

            expect(testComponent.component.paymentSystem).toBe(`electron`);
        });

        it(`mir`, () => {
            testComponent.control.setValue(`2200654321000000`);

            expect(testComponent.component.paymentSystem).toBe(`mir`);
        });

        it(`mastercard`, () => {
            testComponent.control.setValue(`5500 0000 0000 0004`);

            expect(testComponent.component.paymentSystem).toBe(`mastercard`);
        });

        it(`maestro`, () => {
            testComponent.control.setValue(`6759649826438453`);

            expect(testComponent.component.paymentSystem).toBe(`maestro`);
        });
    });

    describe(`Formatting`, () => {
        it(`13`, async () => {
            await testFormat(`4000000000000`, `4000 0000 0000 0`);
        });

        it(`14`, async () => {
            await testFormat(`40000000000000`, `4000 0000 0000 00`);
        });

        it(`15`, async () => {
            await testFormat(`400000000000000`, `4000 0000 0000 000`);
        });

        it(`16`, async () => {
            await testFormat(`4000000000000000`, `4000 0000 0000 0000`);
        });

        it(`17`, async () => {
            await testFormat(`40000000000000000`, `4000 0000 0000 0000 0`);
        });

        it(`18`, async () => {
            await testFormat(`400000000000000000`, `4000 0000 0000 0000 00`);
        });

        it(`19`, async () => {
            await testFormat(`4000000000000000000`, `4000 0000 0000 0000 000`);
        });
    });

    async function testFormat(value: string, formatted: string): Promise<void> {
        testComponent.control.setValue(value);
        fixture.detectChanges();

        await fixture.whenStable();

        fixture.detectChanges();

        await fixture.whenStable();

        fixture.detectChanges();
        expect(getValue()).toBe(formatted);
    }

    function getValue(): string {
        return testComponent.component.nativeFocusableElement!.value;
    }
});
