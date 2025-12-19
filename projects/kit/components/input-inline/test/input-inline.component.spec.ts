import {
    ChangeDetectionStrategy,
    Component,
    type DebugElement,
    viewChild,
} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {provideTaiga} from '@taiga-ui/core';
import {TuiPageObject} from '@taiga-ui/testing';

import {TuiInputInline} from '../input-inline.component';

describe('InputInline', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiInputInline],
        template: `
            <tui-input-inline>
                <input
                    automation-id="tui-input-inline__native"
                    [formControl]="control"
                />
            </tui-input-inline>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly component = viewChild.required(TuiInputInline);

        public control = new FormControl('');
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let pageObject: TuiPageObject<Test>;
    const testContext = {
        get prefix() {
            return 'tui-input-inline__';
        },
    };

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        pageObject = new TuiPageObject(fixture);
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

        it('not editable if locked', async () => {
            testComponent.control.disable();
            fixture.detectChanges();

            await fixture.whenStable();

            expect(getNative()?.nativeElement.disabled).toBe(true);
        });
    });

    function getPlaceholder(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}placeholder`);
    }

    function getNative(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}native`);
    }
});
