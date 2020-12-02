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

    it('не трогает корректный ввод', () => {
        inputPO.sendText('12/12');

        expect(testComponent.value).toBe('12/12');
        expect(inputPO.value).toBe('12/12');
    });

    describe('корректировка ввода', () => {
        it('заменяет 50/08 на 05/08', () => {
            inputPO.sendText('50/08');

            expect(testComponent.value).toBe('05/08');
            expect(inputPO.value).toBe('05/08');
        });

        it('заменяет 14/08 на 12/08', () => {
            inputPO.sendText('14/08');

            expect(testComponent.value).toBe('12/08');
            expect(inputPO.value).toBe('12/08');
        });

        it('заменяет 00/08 на 01/08', () => {
            inputPO.sendText('00/08');

            expect(testComponent.value).toBe('01/08');
            expect(inputPO.value).toBe('01/08');
        });
    });
});
