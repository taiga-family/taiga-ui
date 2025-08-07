import {type ComponentFixture} from '@angular/core/testing';
import {type FormControl} from '@angular/forms';

import {type TuiNativeInputPO} from '../native-input.page-object';

interface TestParams {
    fixture: ComponentFixture<unknown>;
    inputPO: TuiNativeInputPO;
    testComponent: Test;
}

interface Test {
    control: FormControl;
}

export function tuiTestFormControlState(context: TestParams): void {
    let fixture: ComponentFixture<unknown>;
    let testComponent: Test;
    let inputPO: TuiNativeInputPO;

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

        it('After setting and de-focusing touched === true', async () => {
            inputPO.focus();
            inputPO.blur();

            await fixture.whenStable();

            fixture.detectChanges();
            expect(testComponent.control.touched).toBe(true);
        });
    });
}
