import {DOCUMENT} from '@angular/common';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TUI_DISABLE_CUSTOM_SCROLLBAR} from '@taiga-ui/core';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiRootComponent} from '../root.component';
import {TuiRootModule} from '../root.module';

describe('root', () => {
    let fixture: ComponentFixture<TuiRootComponent>;
    let testComponent: TuiRootComponent;
    let root: HTMLElement;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiRootModule, NoopAnimationsModule],
            providers: [
                {
                    provide: DOCUMENT,
                    useFactory: () => {
                        const mockDocument = document;

                        mockDocument.body.classList.add = jasmine.createSpy('add');
                        mockDocument.body.classList.remove = jasmine.createSpy('remove');

                        return mockDocument;
                    },
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TuiRootComponent);
        testComponent = fixture.componentInstance;
        root = fixture.nativeElement;

        fixture.detectChanges();
    });

    it('root has data-tui-version attribute', () => {
        expect(root.dataset.tuiVersion).toBeDefined();
    });

    it('There is some data-tui-version value', () => {
        expect(root.dataset.tuiVersion).not.toBe('undefined');
    });

    it('body.classList.add is called', () => {
        expect(document.body.classList.add).toHaveBeenCalled();
    });

    describe('TUI_DISABLE_CUSTOM_SCROLLBAR is true', () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [TuiRootModule, NoopAnimationsModule],
                providers: [
                    {
                        provide: TUI_DISABLE_CUSTOM_SCROLLBAR,
                        useValue: true,
                    },
                ],
            });
        });

        it('isScrollbarShown$ returns false', done => {
            testComponent.isScrollbarShown$.subscribe(v => {
                expect(v).toBe(false);
                done();
            });
        });

        it('body.classList.remove is called', () => {
            expect(document.body.classList.remove).toHaveBeenCalled();
        });
    });
});
