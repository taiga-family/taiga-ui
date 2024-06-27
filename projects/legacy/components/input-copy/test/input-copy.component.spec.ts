import type {DebugElement} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {
    TuiInputCopyComponent,
    TuiInputCopyModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import {TuiPageObject} from '@taiga-ui/testing';

describe('InputCopy', () => {
    @Component({
        standalone: true,
        imports: [TuiInputCopyModule, ReactiveFormsModule, TuiTextfieldControllerModule],
        template: `
            <tui-input-copy
                [formControl]="control"
                [readOnly]="readOnly"
                [tuiTextfieldSize]="size"
            ></tui-input-copy>
        `,
    })
    class Test {
        @ViewChild(TuiInputCopyComponent, {static: true})
        public component!: TuiInputCopyComponent;

        public control = new FormControl();
        public readOnly = false;
        public size: TuiSizeL | TuiSizeS = 'm';
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let pageObject: TuiPageObject<Test>;

    function getIcon(): DebugElement | null {
        return pageObject.getByAutomationId('tui-copy__icon');
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;

        fixture.detectChanges();
    });

    describe('Copy icon visibility', () => {
        it('icon is still available in readonly mode', () => {
            testComponent.readOnly = true;
            fixture.detectChanges();

            expect(getIcon()).not.toBeNull();
        });

        it('there is no icon in disabled mode', () => {
            testComponent.control.disable();
            fixture.detectChanges();

            expect(getIcon()).toBeNull();
        });
    });

    describe('Behavior when clicking on the icon', () => {
        it('when you click on the "Copy" icon, copy command is executed', () => {
            const func = jest.spyOn(document, 'execCommand');

            getIcon()!.nativeElement.click();

            expect(func).toHaveBeenCalledWith('copy');
        });
    });
});
