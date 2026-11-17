import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiCarousel, TuiCarouselComponent} from '@taiga-ui/core';

describe('Carousel', () => {
    @Component({
        imports: [TuiCarousel],
        template: `
            <div [attr.dir]="parentDir">
                <tui-carousel
                    [max]="5"
                    [min]="0"
                    [(index)]="index"
                    [attr.dir]="carouselDir"
                >
                    <ng-container *tuiItem="let i">{{ i }}</ng-container>
                </tui-carousel>
            </div>
        `,
        // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
        changeDetection: ChangeDetectionStrategy.Default,
    })
    class Test {
        public readonly carousel = viewChild.required(TuiCarouselComponent);
        public parentDir: string | null = null;
        public carouselDir: string | null = null;
        public index = 0;
    }

    let fixture: ComponentFixture<Test>;
    let test: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();

        fixture = TestBed.createComponent(Test);
        test = fixture.componentInstance;
        fixture.detectChanges();
    });

    function nextScrollLeft(): number | undefined {
        const el = fixture.nativeElement.querySelector('tui-carousel') as HTMLElement;

        // jsdom reports no layout sizes and has no Element.scrollTo
        Object.defineProperty(el, 'scrollWidth', {value: 1000, configurable: true});

        const scrollTo = jest.fn();

        el.scrollTo = scrollTo;
        test.carousel().next();

        return scrollTo.mock.calls[0]?.[0]?.left;
    }

    it('next() scrolls backwards when dir="rtl" is set on the carousel', () => {
        test.carouselDir = 'rtl';
        fixture.detectChanges();

        expect(nextScrollLeft()).toBe(-1000);
    });

    it('next() scrolls forwards when dir="ltr" is set on the carousel inside an RTL parent', () => {
        test.parentDir = 'rtl';
        test.carouselDir = 'ltr';
        fixture.detectChanges();

        expect(nextScrollLeft()).toBe(1000);
    });

    it('next() scrolls backwards when RTL is inherited from the parent', () => {
        test.parentDir = 'rtl';
        fixture.detectChanges();

        expect(nextScrollLeft()).toBe(-1000);
    });
});
