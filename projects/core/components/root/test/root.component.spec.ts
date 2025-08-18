import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiRoot} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

describe('root', () => {
    let fixture: ComponentFixture<TuiRoot>;
    let root: HTMLElement;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TuiRoot, NoopAnimationsModule],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TuiRoot);
        root = fixture.nativeElement;

        fixture.detectChanges();
    });

    it('root has data-tui-version attribute', () => {
        expect(root.dataset.tuiVersion).toBeDefined();
    });

    it('there is some data-tui-version value', () => {
        expect(root.dataset.tuiVersion).not.toBe('undefined');
    });
});
