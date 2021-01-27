import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiInputInlineComponent} from '../input-inline.component';
import {TuiInputInlineModule} from '../input-inline.module';

describe('InputInline', () => {
    @Component({
        template: ` <tui-input-inline [formControl]="control"></tui-input-inline> `,
    })
    class TestComponent {
        @ViewChild(TuiInputInlineComponent, {static: true})
        component: TuiInputInlineComponent;

        control = new FormControl('');
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    const testContext = {
        get prefix() {
            return 'tui-input-inline__';
        },
    };

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiInputInlineModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('placeholder', () => {
        it('displayed if no value', () => {
            expect(getPlaceholder()).not.toBeNull();
        });

        it('not displayed if there is a value', () => {
            testComponent.control.setValue('123');
            fixture.detectChanges();
            expect(getPlaceholder()).toBeNull();
        });
    });

    describe('entry field', () => {
        it('editable if not locked', () => {
            expect(getNative()!.nativeElement.disabled).toBe(false);
        });

        it('not editable if locked', done => {
            testComponent.control.disable();
            fixture.detectChanges();

            fixture.whenStable().then(() => {
                expect(getNative()!.nativeElement.disabled).toBe(true);
                done();
            });
        });
    });

    function getPlaceholder(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}placeholder`);
    }

    function getNative(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}native`);
    }
});
