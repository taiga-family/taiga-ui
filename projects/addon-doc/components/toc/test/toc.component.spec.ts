import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';
import {TuiDocExample, TuiDocPage, TuiDocPageTabConnector} from '@taiga-ui/addon-doc';
import {provideTaiga} from '@taiga-ui/core';
import {provideHighlightOptions} from 'ngx-highlightjs';

describe('TuiDocToc', () => {
    @Component({
        imports: [TuiDocExample, TuiDocPage, TuiDocPageTabConnector],
        template: `
            <tui-doc-page>
                <ng-template pageTab>
                    <tui-doc-example heading="Basic" />
                    <tui-doc-example heading="Validation" />
                    <tui-doc-example heading="Format" />
                </ng-template>
            </tui-doc-page>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    let fixture: ComponentFixture<Test>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [
                provideTaiga(),
                provideRouter([]),
                provideHighlightOptions({
                    fullLibraryLoader: async () => import('highlight.js'),
                }),
            ],
        });

        fixture = TestBed.createComponent(Test);
    });

    function intersect(id: string, ...intersectionRatios: readonly number[]): void {
        const example = fixture.debugElement.query(By.css(`tui-doc-example#${id}`));
        const rect = example.nativeElement.getBoundingClientRect();
        const entries: IntersectionObserverEntry[] = intersectionRatios.map(
            (intersectionRatio) => ({
                target: example.nativeElement,
                intersectionRatio,
                isIntersecting: intersectionRatio > 0,
                boundingClientRect: rect,
                intersectionRect: rect,
                rootBounds: rect,
                time: 0,
            }),
        );

        example.triggerEventHandler('waIntersectionObservee', entries);
        fixture.detectChanges();
    }

    function activeHeading(): string {
        return fixture.nativeElement
            .querySelector('tui-doc-toc a._active')
            ?.textContent.trim();
    }

    it('ignores initial notifications for examples above the anchor', fakeAsync(() => {
        fixture.detectChanges();
        tick();
        fixture.detectChanges();

        intersect('basic', 0);
        intersect('validation', 1);
        intersect('format', 1);

        expect(activeHeading()).toBe('Validation');
    }));

    it('keeps the latest intersection state when the table of contents loads later', fakeAsync(() => {
        fixture.detectChanges();

        intersect('basic', 0);
        intersect('validation', 1);
        intersect('format', 1);
        tick();
        fixture.detectChanges();

        expect(activeHeading()).toBe('Validation');
    }));

    it('keeps an example active after repeated fully intersecting notifications', fakeAsync(() => {
        fixture.detectChanges();
        tick();
        fixture.detectChanges();

        intersect('basic', 0);
        intersect('validation', 1);
        intersect('format', 1);
        intersect('validation', 1);

        expect(activeHeading()).toBe('Validation');
    }));

    it('updates the active example when scrolling down and back up', fakeAsync(() => {
        fixture.detectChanges();
        tick();
        fixture.detectChanges();

        intersect('basic', 1);
        intersect('validation', 1);
        intersect('format', 1);
        intersect('basic', 0.5);

        expect(activeHeading()).toBe('Validation');

        intersect('basic', 1);

        expect(activeHeading()).toBe('Basic');
    }));

    it('uses the latest entry when intersection notifications are batched', fakeAsync(() => {
        fixture.detectChanges();
        tick();
        fixture.detectChanges();

        intersect('basic', 0);
        intersect('format', 1);
        intersect('validation', 0, 1);

        expect(activeHeading()).toBe('Validation');
    }));
});
