import {Component, TemplateRef, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiInputCardComponent, TuiInputCardModule} from '@taiga-ui/addon-commerce';
import {configureTestSuite} from '@taiga-ui/testing';

describe(`InputCard`, () => {
    @Component({
        template: `
            <tui-input-card
                [formControl]="control"
                (binChange)="onBinChange($event)"
            ></tui-input-card>

            <ng-template #customIconTemplateRef>
                <tui-svg src="tuiIconMastercard"></tui-svg>
            </ng-template>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputCardComponent, {static: true})
        component!: TuiInputCardComponent;

        @ViewChild(`customIconTemplateRef`, {read: TemplateRef})
        customIconTemplateRef!: TemplateRef<any>;

        control = new FormControl(``);

        onBinChange = jest.fn();
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

    describe(`autocomplete`, () => {
        it(`enabled`, () => {
            testComponent.component.autocompleteEnabled = true;

            expect(testComponent.component.autocompleteCard).toEqual(`cc-number`);
        });

        it(`disabled`, () => {
            testComponent.component.autocompleteEnabled = false;

            expect(testComponent.component.autocompleteCard).toEqual(`off`);
        });
    });

    describe(`focusable`, () => {
        it(`touched`, () => {
            testComponent.component.onFocused(true);

            expect(testComponent.component.control?.touched).toEqual(false);

            testComponent.component.onFocused(false);

            expect(testComponent.component.control?.touched).toEqual(true);
        });
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

        it(`trigger onBinChange only when bin has changed`, () => {
            testComponent.component.onValueChange(`1234 5678 1111 2222`);

            expect(testComponent.onBinChange).toHaveBeenCalledWith(`123456`);
            expect(testComponent.component.value).toEqual(`1234567811112222`);
            expect(testComponent.component.bin).toEqual(`123456`);

            testComponent.component.onValueChange(`2222 4444 5555 6666`);
            expect(testComponent.onBinChange).toHaveBeenCalledTimes(2);

            testComponent.component.onValueChange(`2222 4444 5555 6666`);
            expect(testComponent.onBinChange).toHaveBeenCalledTimes(2);
        });

        it(`The value has changed, the first 6 characters are unchanged`, () => {
            testComponent.control.setValue(`123456789`);
            testComponent.onBinChange.mockClear();
            testComponent.control.setValue(`123456987`);

            expect(testComponent.onBinChange).not.toHaveBeenCalled();
        });

        it(`The value has changed, the first 6 characters have changed`, () => {
            testComponent.control.setValue(`123456789`);
            testComponent.onBinChange.mockClear();
            testComponent.control.setValue(`654321789`);

            expect(testComponent.onBinChange).toHaveBeenCalledWith(`654321`);
        });

        it(`The value has changed to less than 6 characters`, () => {
            testComponent.control.setValue(`123456789`);
            testComponent.onBinChange.mockClear();
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

    describe(`customIconSource`, () => {
        beforeEach(() => testComponent.control.setValue(`4111 1111 1111 1111`));

        it(`input-card component has a default icon`, () => {
            expect(testComponent.control.valid).toEqual(true);
            expect(testComponent.component.icon).toEqual(`tuiIconVisa`);
            expect(testComponent.control.value).toEqual(`4111 1111 1111 1111`);
        });

        it(`input-card component has a tuiIconElectron icon`, () => {
            testComponent.component.cardSrc = `tuiIconElectron`;
            expect(testComponent.control.valid).toEqual(true);
            expect(testComponent.component.icon).toEqual(`tuiIconElectron`);
            expect(testComponent.control.value).toEqual(`4111 1111 1111 1111`);
        });

        it(`input-card component has an icon source as TemplateRef`, () => {
            testComponent.component.cardSrc =
                fixture.componentInstance.customIconTemplateRef;
            expect(testComponent.control.valid).toEqual(true);
            expect(testComponent.component.icon).toBeInstanceOf(TemplateRef);
            expect(testComponent.control.value).toEqual(`4111 1111 1111 1111`);
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
        return testComponent.component.nativeFocusableElement?.value || ``;
    }
});
