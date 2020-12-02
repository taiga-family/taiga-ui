import {ComponentFixture} from '@angular/core/testing';
import {FormControl} from '@angular/forms';
import {NativeInputPO} from '../native-input.page-object';

interface TestParams {
    fixture: ComponentFixture<any>;
    testComponent: TestComponent;
    inputPO: NativeInputPO;
}

interface TestComponent {
    control: FormControl;
}

export function testFormControlState(context: TestParams) {
    let fixture: ComponentFixture<any>;
    let testComponent: TestComponent;
    let inputPO: NativeInputPO;

    describe('Состояние FormControl', () => {
        beforeEach(() => {
            fixture = context.fixture;
            testComponent = context.testComponent;
            inputPO = context.inputPO;

            fixture.detectChanges();
        });

        it('После инициализации контрола dirty === false', () => {
            expect(testComponent.control.dirty).toBe(false);
        });

        it('После инициализации контрола touched === false', () => {
            expect(testComponent.control.touched).toBe(false);
        });

        it('После установки значения извне dirty === false', () => {
            testComponent.control.setValue('123');
            fixture.detectChanges();

            expect(testComponent.control.dirty).toBe(false);
        });

        it('После ввода значения dirty === true', () => {
            inputPO.sendText('123');

            expect(testComponent.control.dirty).toBe(true);
        });

        it('После установки и снятия фокуса touched === true', done => {
            inputPO.focus();
            inputPO.blur();

            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(testComponent.control.touched).toBe(true);
                done();
            });
        });
    });
}
