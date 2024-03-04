import {Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDataListModule} from '@taiga-ui/core';
import {
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiProjectClassModule,
} from '@taiga-ui/kit';
import {TuiNativeInputPO} from '@taiga-ui/testing';

describe('Directive TuiProjectClassDirective', () => {
    @Component({
        template: `
            <div
                id="parent"
                [tuiProjectClass]="classNames"
            >
                <div>
                    <tui-combo-box
                        id="predecessor"
                        [formControl]="control"
                    >
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
        public classNames = ['_focused'];
        public control = new FormControl();
        public items = [1, 2, 3];
    }

    let fixture: ComponentFixture<TestComponent>;
    let inputPO: TuiNativeInputPO;

    beforeEach(async () => {
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
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        inputPO = new TuiNativeInputPO(fixture, 'tui-primitive-textfield__native-input');
    });

    it('if the child does not have the required class, it is not on the host either', () => {
        expect(getParentElement().classList.contains('_focused')).toBe(false);
    });

    it('if a class appears on the child, it is projected to the host', () => {
        inputPO.focus();
        fixture.detectChanges();

        expect(getParentElement().classList.contains('_focused')).toBe(true);
    });

    function getParentElement(): HTMLElement {
        return document.getElementById('parent')!;
    }
});
