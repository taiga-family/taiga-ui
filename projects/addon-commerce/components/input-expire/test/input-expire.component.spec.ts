import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {NativeInputPO} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiInputExpireComponent} from '../input-expire.component';
import {TuiInputExpireModule} from '../input-expire.module';

describe('InputExpire', () => {
    @Component({
        template: ` <tui-input-expire [(ngModel)]="value"></tui-input-expire> `,
    })
    class TestComponent {
        @ViewChild(TuiInputExpireComponent)
        input: TuiInputExpireComponent;

        value = '';
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let inputPO: NativeInputPO;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, TuiInputExpireModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(done => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        inputPO = new NativeInputPO(fixture, 'tui-primitive-textfield__native-input');

        fixture.whenStable().then(() => {
            done();
        });
    });

    it('does not change the correct input', () => {
        inputPO.sendText('12/12');

        expect(testComponent.value).toBe('12/12');
        expect(inputPO.value).toBe('12/12');
    });

    describe('Input correction', () => {
        it('replaces 50/08 with 05/08', () => {
            inputPO.sendText('50/08');

            expect(testComponent.value).toBe('05/08');
            expect(inputPO.value).toBe('05/08');
        });

        it('replaces 14/08 with 12/08', () => {
            inputPO.sendText('14/08');

            expect(testComponent.value).toBe('12/08');
            expect(inputPO.value).toBe('12/08');
        });

        it('replaces 00/08 with 01/08', () => {
            inputPO.sendText('00/08');

            expect(testComponent.value).toBe('01/08');
            expect(inputPO.value).toBe('01/08');
        });
    });
});
