import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDataListModule} from '@taiga-ui/core';
import {TuiDataListWrapperModule} from '@taiga-ui/kit/components';
import {NativeInputPO} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiComboBoxModule} from '../../../components/combo-box/combo-box.module';
import {TuiProjectClassModule} from '../project-class.module';

describe('Директива TuiProjectClassDirective', () => {
    @Component({
        template: `
            <div id="parent" [tuiProjectClass]="classNames">
                <div>
                    <tui-combo-box id="predecessor" [formControl]="control">
                        <tui-data-list-wrapper
                            *tuiDataList
                            [items]="items"
                        ></tui-data-list-wrapper>
                    </tui-combo-box>
                </div>
            </div>
        `,
    })
    class TestComponent {
        classNames = ['_focused'];
        control = new FormControl();
        items = [1, 2, 3];
    }

    let fixture: ComponentFixture<TestComponent>;
    let inputPO: NativeInputPO;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                TuiProjectClassModule,
                TuiComboBoxModule,
                TuiDataListModule,
                TuiDataListWrapperModule,
                ReactiveFormsModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        inputPO = new NativeInputPO(fixture, `tui-primitive-textfield__native-input`);
    });

    it('если на потомке нет нужного класса, его нет и на хосте', () => {
        expect(getParentElement().classList.contains('_focused')).toBe(false);
    });

    it('если на потомке появляется класс, он проецируется хосту', () => {
        inputPO.focus();
        fixture.detectChanges();

        expect(getParentElement().classList.contains('_focused')).toBe(true);
    });

    function getParentElement(): HTMLElement {
        return document.getElementById('parent')!;
    }
});
