import {ChangeDetectionStrategy, Component, TemplateRef, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {
    TuiSheetDialogComponent,
    type TuiSheetDialogContext,
    type TuiSheetDialogOptions,
    TuiSheetDialogService,
} from '@taiga-ui/addon-mobile';
import {provideTaiga, TuiRoot} from '@taiga-ui/core';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';

describe('TuiSheetDialogComponent scrollTo', () => {
    @Component({
        imports: [TuiRoot],
        template: '<tui-root />',
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    let fixture: ComponentFixture<Test>;
    let service: TuiSheetDialogService;
    let scrollTo: jest.Mock;

    beforeEach(() => {
        scrollTo = jest.fn();
    });

    async function setup(
        content: Parameters<TuiSheetDialogService['open']>[0] = 'content',
        options: Partial<TuiSheetDialogOptions> = {},
    ): Promise<void> {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        service = TestBed.inject(TuiSheetDialogService);
        fixture.detectChanges();
        service.open(content, {stops: ['100px', '200px'], ...options}).subscribe();
        fixture.detectChanges();
    }

    function sheet(): HTMLElement {
        return fixture.debugElement.query(By.directive(TuiSheetDialogComponent))
            .nativeElement as HTMLElement;
    }

    function component(): TuiSheetDialogComponent {
        return fixture.debugElement.query(By.directive(TuiSheetDialogComponent))
            .componentInstance as TuiSheetDialogComponent;
    }

    function context(): TuiSheetDialogContext {
        return component()['context'];
    }

    function stubLayout(
        offsets: readonly number[] = [100, 200],
        top = 500,
        height = 500,
    ): void {
        const host = sheet();
        const stops = host.querySelectorAll('.t-stop');

        offsets.forEach((offset, index) =>
            Object.defineProperty(stops[index], 'offsetTop', {
                configurable: true,
                value: offset,
            }),
        );
        Object.defineProperty(host.querySelector('.t-sheet'), 'offsetTop', {
            configurable: true,
            value: top,
        });
        Object.defineProperty(host, 'clientHeight', {
            configurable: true,
            value: height,
        });
        Object.defineProperty(host, 'scrollTo', {
            configurable: true,
            value: scrollTo,
        });
    }

    it('scrolls to a stop by index', async () => {
        await setup();
        stubLayout();

        context().scrollTo(1);

        expect(scrollTo).toHaveBeenLastCalledWith({behavior: 'smooth', top: 200});
    });

    it('scrolls to the top of the content when the index exceeds stops', async () => {
        await setup();
        stubLayout();

        context().scrollTo(2);

        expect(scrollTo).toHaveBeenLastCalledWith({behavior: 'smooth', top: 500});
    });

    it('accepts a custom scroll behavior', async () => {
        await setup();
        stubLayout();

        context().scrollTo(0, 'auto');

        expect(scrollTo).toHaveBeenLastCalledWith({behavior: 'auto', top: 100});
    });

    it('keeps the programmatic position when content resizes', async () => {
        await setup();
        stubLayout();

        component()['onResize']();
        expect(sheet().scrollTop).toBe(100);

        context().scrollTo(1);
        sheet().scrollTop = 123;

        // Writing scrollTop would cancel an ongoing smooth scroll (CSSOM View)
        const written = jest.spyOn(sheet(), 'scrollTop', 'set');

        component()['onResize']();

        expect(written).not.toHaveBeenCalled();
        expect(sheet().scrollTop).toBe(123);
    });

    it('pins to the content top when the initial index exceeds stops', async () => {
        await setup('content', {initial: 2});
        stubLayout();

        component()['onResize']();

        expect(sheet().scrollTop).toBe(500);
    });

    it('uses the sheet top, not the host height, as the content stop', async () => {
        await setup('content', {closable: false});
        stubLayout([100, 200], 0);

        context().scrollTo(2);

        expect(scrollTo).toHaveBeenLastCalledWith({behavior: 'smooth', top: 0});
    });

    it('exposes scrollTo to a content component', async () => {
        @Component({
            template: 'Content',
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Content {
            public readonly context = injectContext<TuiSheetDialogContext>();
        }

        await setup(new PolymorpheusComponent(Content));
        stubLayout();

        const content = fixture.debugElement.query(By.directive(Content))
            .componentInstance as Content;

        content.context.scrollTo(1);

        expect(scrollTo).toHaveBeenLastCalledWith({behavior: 'smooth', top: 200});
    });

    it('exposes scrollTo to the template context', async () => {
        @Component({
            imports: [TuiRoot],
            template: `
                <tui-root />
                <ng-template
                    #content
                    let-scrollTo="scrollTo"
                >
                    <button
                        type="button"
                        (click)="scrollTo(1)"
                    >
                        Second stop
                    </button>
                </ng-template>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Host {
            public readonly content = viewChild.required(TemplateRef);
        }

        TestBed.configureTestingModule({
            imports: [Host],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Host);
        fixture.detectChanges();

        const host = fixture.componentInstance as Host;
        const test = TestBed.inject(TuiSheetDialogService);

        test.open(host.content(), {stops: ['100px', '200px']}).subscribe();
        fixture.detectChanges();
        stubLayout();

        (
            fixture.debugElement.query(By.css('tui-sheet-dialog button'))
                .nativeElement as HTMLElement
        ).click();

        expect(scrollTo).toHaveBeenLastCalledWith({behavior: 'smooth', top: 200});
    });
});
