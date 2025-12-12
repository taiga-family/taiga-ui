import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiPreview, TuiPreviewPagination} from '@taiga-ui/kit';

describe('PreviewPagination', () => {
    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    @Component({
        imports: [TuiPreview],
        template: `
            <tui-preview-pagination
                [length]="length"
                [(index)]="index"
            />
        `,
        // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
        changeDetection: ChangeDetectionStrategy.Default,
    })
    class Test {
        public readonly component = viewChild.required(TuiPreviewPagination);

        public index = 0;
        public length = 11;
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Preview pagination', () => {
        it('0 switching to 1', () => {
            testComponent.component().onArrowClick(1);
            fixture.detectChanges();

            expect(testComponent.index).toBe(1);
        });

        it('left arrow disabled', () => {
            const arrowLeft = getLeftArrow();

            expect(arrowLeft.hasAttribute('disabled')).toBe(true);
        });

        it('left arrow enabled', () => {
            testComponent.index = 1;
            fixture.detectChanges();

            const arrowLeft = getLeftArrow();

            expect(arrowLeft.hasAttribute('disabled')).toBe(false);
        });

        it('right arrow disabled', () => {
            testComponent.index = 10;
            fixture.detectChanges();

            const arrowRight = getRightArrow();

            expect(arrowRight.hasAttribute('disabled')).toBe(true);
        });

        it('right arrow enabled', () => {
            const arrowRight = getRightArrow();

            expect(arrowRight.hasAttribute('disabled')).toBe(false);
        });
    });

    function getLeftArrow(): HTMLElement {
        return fixture.debugElement.query(By.css('.t-arrow_left')).nativeElement;
    }

    function getRightArrow(): HTMLElement {
        return fixture.debugElement.query(By.css('.t-arrow_right')).nativeElement;
    }
});
