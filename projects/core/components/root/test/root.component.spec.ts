import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {provideTaiga, TuiDialogService, TuiRoot} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Component({
    template: '<video controls></video>',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class VideoContentComponent {}

@Component({
    imports: [TuiRoot],
    template: '<tui-root><tui-root><video></video></tui-root></tui-root>',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class NestedRootsComponent {}

describe('root', () => {
    let fixture: ComponentFixture<TuiRoot>;
    let root: HTMLElement;
    let fullscreen: Element | null;
    let descriptor: PropertyDescriptor | undefined;

    beforeEach(async () => {
        fullscreen = null;
        descriptor = Object.getOwnPropertyDescriptor(document, 'fullscreenElement');
        Object.defineProperty(document, 'fullscreenElement', {
            configurable: true,
            get: () => fullscreen,
        });

        TestBed.configureTestingModule({
            imports: [TuiRoot],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TuiRoot);
        root = fixture.nativeElement;

        fixture.detectChanges();
    });

    afterEach(() => {
        if (descriptor) {
            Object.defineProperty(document, 'fullscreenElement', descriptor);
        } else {
            Reflect.deleteProperty(document, 'fullscreenElement');
        }
    });

    it('root has data-tui-version attribute', () => {
        expect(root.dataset.tuiVersion).toBeDefined();
    });

    it('there is some data-tui-version value', () => {
        expect(root.dataset.tuiVersion).not.toBe('undefined');
    });

    it('preserves dialog content when its native video enters fullscreen', () => {
        const completed = jest.fn();

        TestBed.inject(TuiDialogService)
            .open(new PolymorpheusComponent(VideoContentComponent))
            .subscribe({complete: completed});
        fixture.detectChanges();

        const video = root.querySelector('tui-dialog video');

        expect(video).not.toBeNull();

        fullscreen = video;
        document.dispatchEvent(new Event('fullscreenchange'));
        fixture.detectChanges();

        expect(root.querySelector('tui-dialog video')).toBe(video);
        expect(completed).not.toHaveBeenCalled();

        fullscreen = null;
        document.dispatchEvent(new Event('fullscreenchange'));
        fixture.detectChanges();

        expect(root.querySelector('tui-dialog video')).toBe(video);
    });

    it('keeps popups when the root itself enters fullscreen', () => {
        fullscreen = root;
        document.dispatchEvent(new Event('fullscreenchange'));
        fixture.detectChanges();

        expect(root.querySelector('tui-popups')).not.toBeNull();
    });

    it('keeps popups in the nearest root when a nested video enters fullscreen', () => {
        const nested = TestBed.createComponent(NestedRootsComponent);

        nested.detectChanges();

        const [outer, inner] = nested.nativeElement.querySelectorAll('tui-root');

        fullscreen = inner.querySelector('video');
        document.dispatchEvent(new Event('fullscreenchange'));
        fixture.detectChanges();
        nested.detectChanges();

        expect(outer.querySelector(':scope > tui-popups')).toBeNull();
        expect(inner.querySelector(':scope > tui-popups')).not.toBeNull();
    });

    it('restores popups when fullscreen ends outside the root', () => {
        fullscreen = document.createElement('video');
        document.dispatchEvent(new Event('fullscreenchange'));
        fixture.detectChanges();

        expect(root.querySelector('tui-popups')).toBeNull();

        fullscreen = null;
        document.dispatchEvent(new Event('fullscreenchange'));
        fixture.detectChanges();

        expect(root.querySelector('tui-popups')).not.toBeNull();
    });
});
