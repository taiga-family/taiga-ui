import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    TuiDataListModule,
    TuiHintControllerModule,
    TuiRootModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TUI_ARROW_MODE, TuiDataListWrapperModule} from '@taiga-ui/kit/components';
import {PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';

import {TuiMultiSelectModule} from '../multi-select.module';
import {getArrow, MultiSelectTestComponent} from './multi-select.helpers';

describe('MultiSelect - arrow mode', () => {
    let fixture: ComponentFixture<MultiSelectTestComponent>;
    let testComponent: MultiSelectTestComponent;
    let pageObject: PageObject<MultiSelectTestComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                NoopAnimationsModule,
                TuiMultiSelectModule,
                TuiRootModule,
                TuiDataListModule,
                TuiDataListWrapperModule,
                TuiTextfieldControllerModule,
                TuiHintControllerModule,
            ],
            declarations: [MultiSelectTestComponent],
            providers: [
                {
                    provide: TUI_ARROW_MODE,
                    useValue: {interactive: '☆', disabled: '★'},
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MultiSelectTestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('switch arrow mode by disable or enable method', () => {
        testComponent.control.disable();
        fixture.detectChanges();

        expect(getArrow(pageObject)?.nativeElement.innerText).toEqual('★');

        testComponent.control.enable();
        fixture.detectChanges();

        expect(getArrow(pageObject)?.nativeElement.innerText).toEqual('☆');
    });
});
