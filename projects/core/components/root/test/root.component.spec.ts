import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiRootComponent} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

describe('root', () => {
    let fixture: ComponentFixture<TuiRootComponent>;
    let root: HTMLElement;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TuiRootComponent, NoopAnimationsModule],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TuiRootComponent);
        root = fixture.nativeElement;

        fixture.detectChanges();
    });

    it('root has data-tui-version attribute', () => {
        expect(root.dataset.tuiVersion).toBeDefined();
    });

    it('There is some data-tui-version value', () => {
        expect(root.dataset.tuiVersion).not.toBe('undefined');
    });
});
