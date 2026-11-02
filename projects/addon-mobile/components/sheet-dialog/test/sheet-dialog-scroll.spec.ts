import {
    ChangeDetectionStrategy,
    Component,
    inject,
    TemplateRef,
    viewChild,
} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiSheetDialogComponent, TuiSheetDialogService} from '@taiga-ui/addon-mobile';
import {provideTaiga, TuiRoot} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

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
    ): Promise<void> {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        service = TestBed.inject(TuiSheetDialogService);
        fixture.detectChanges();
        service.open(content, {stops: ['100px', '200px']}).subscribe();
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

    function stubLayout(offsets: readonly number[] = [100, 200], height = 500): void {
        const host = sheet();
        const stops = host.querySelectorAll('.t-stop');

        offsets.forEach((offset, index) =>
            Object.defineProperty(stops[index], 'offsetTop', {
                configurable: true,
                value: offset,
            }),
        );
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

        component().scrollTo(1);

        expect(scrollTo).toHaveBeenLastCalledWith({behavior: 'smooth', top: 200});
    });

    it('scrolls to the top of the content when the index exceeds stops', async () => {
        await setup();
        stubLayout();

        component().scrollTo(2);

        expect(scrollTo).toHaveBeenLastCalledWith({behavior: 'smooth', top: 500});
    });

    it('accepts a custom scroll behavior', async () => {
        await setup();
        stubLayout();

        component().scrollTo(0, 'auto');

        expect(scrollTo).toHaveBeenLastCalledWith({behavior: 'auto', top: 100});
    });

    it('keeps the programmatic position when content resizes', async () => {
        await setup();
        stubLayout();

        // Without a programmatic scroll the sheet is re-pinned to the initial stop
        component()['onResize']();
        expect(sheet().scrollTop).toBe(100);

        component().scrollTo(1);
        sheet().scrollTop = 123;
        component()['onResize']();

        expect(sheet().scrollTop).toBe(123);
    });

    it('is injectable from the content component', async () => {
        @Component({
            template: 'Content',
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Content {
            public readonly sheet = inject(TuiSheetDialogComponent);
        }

        await setup(new PolymorpheusComponent(Content));

        const content = fixture.debugElement.query(By.directive(Content))
            .componentInstance as Content;

        expect(content.sheet).toBe(component());
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
