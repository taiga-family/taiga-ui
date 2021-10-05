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

    describe('FormControl state', () => {
        beforeEach(() => {
            fixture = context.fixture;
            testComponent = context.testComponent;
            inputPO = context.inputPO;

            fixture.detectChanges();
        });

        it('After initializing control dirty === false', () => {
            expect(testComponent.control.dirty).toBe(false);
        });

        it('After control initialization touched === false', () => {
            expect(testComponent.control.touched).toBe(false);
        });

        it('After setting value from outside dirty === false', () => {
            testComponent.control.setValue('123');
            fixture.detectChanges();

            expect(testComponent.control.dirty).toBe(false);
        });

        it('After entering the value dirty === true', () => {
            inputPO.sendText('123');

            expect(testComponent.control.dirty).toBe(true);
        });

        it('After setting and de-focusing touched === true', done => {
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
