import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiLazyLoadingModule} from '@taiga-ui/kit/directives';
import {configureTestSuite} from 'ng-bullet';
import {fromEvent} from 'rxjs';

describe('TuiLazyLoading directive', () => {
    @Component({
        template: `<img id="image" loading="lazy" src="https://picsum.photos/1/1" />`,
    })
    class TestComponent {}

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiLazyLoadingModule],
            declarations: [TestComponent],
        });
    });

    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);

        fixture.detectChanges();
    });

    it('Image has background color', () => {
        expect(
            (document.querySelector('#image')! as HTMLImageElement).style.backgroundColor,
        ).toBe('rgba(0, 0, 0, 0.16)');
    });

    it('Loading animation is shown', () => {
        expect(
            (document.querySelector('#image')! as HTMLImageElement).style.animationName,
        ).toContain('tuiSkeletonVibe');
    });

    it('Loading animation is cancelled after image load', done => {
        fromEvent(
            document.querySelector('#image')! as HTMLImageElement,
            'load',
        ).subscribe(() => {
            fixture.detectChanges();
            expect(
                (document.querySelector('#image')! as HTMLImageElement).style
                    .animationName,
            ).toBe('');
            done();
        });
    });
});
