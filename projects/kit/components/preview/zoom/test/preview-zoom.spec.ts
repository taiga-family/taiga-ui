import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiPreviewZoom} from '@taiga-ui/kit';

describe('PreviewZoom', () => {
    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    @Component({
        imports: [TuiPreviewZoom],
        template: `
            <tui-preview-zoom [(value)]="value" />
        `,
        // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
        changeDetection: ChangeDetectionStrategy.Default,
    })
    class Test {
        @ViewChild(TuiPreviewZoom, {static: true})
        public component!: TuiPreviewZoom;

        public value = 1;
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('formats zoom value as percentage', () => {
        testComponent.value = 1.25;
        fixture.detectChanges();

        const input = fixture.debugElement.query(By.css('input[type="range"]'));

        expect(input.attributes['aria-valuetext']).toBe('125%');
    });

    it('clamps and emits zoom changes via ngModelChange', () => {
        const input = fixture.debugElement.query(By.css('input[type="range"]'));

        input.triggerEventHandler('ngModelChange', 3);
        fixture.detectChanges();

        expect(testComponent.value).toBe(testComponent.component.max());
    });
});
