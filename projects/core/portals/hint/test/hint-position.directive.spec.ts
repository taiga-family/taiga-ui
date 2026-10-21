import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk';
import {
    provideTaiga,
    TUI_VIEWPORT,
    TuiHint,
    type TuiHintDirection,
    TuiHintPosition,
    TuiRoot,
} from '@taiga-ui/core';

describe('Hint position', () => {
    @Component({
        imports: [TuiHint, TuiRoot],
        template: `
            <tui-root>
                <span
                    id="hint-host"
                    tuiHint="Hint"
                    [tuiHintCentered]="centered()"
                    [tuiHintDirection]="direction()"
                >
                    Host
                </span>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly centered = signal(true);
        public readonly direction = signal<TuiHintDirection>('start-top');
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [
                provideTaiga(),
                {
                    provide: TUI_VIEWPORT,
                    useValue: {
                        getClientRect: () => ({
                            ...EMPTY_CLIENT_RECT,
                            right: 1000,
                            bottom: 1000,
                        }),
                    },
                },
            ],
        });
        await TestBed.compileComponents();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it.each([
        {centered: true, height: 80, top: 262, bottom: 318},
        {centered: false, height: 80, top: 300, bottom: 280},
        {centered: false, height: 20, top: 288, bottom: 232},
    ])(
        'positions side hints when centered=$centered and host height=$height',
        ({centered, height, top, bottom}) => {
            const fixture = TestBed.createComponent(Test);
            const component = fixture.componentInstance;

            component.centered.set(centered);
            fixture.detectChanges();

            const debugElement = fixture.debugElement.query(By.css('#hint-host'));
            const element = debugElement.nativeElement as HTMLElement;
            const position = debugElement.injector.get(TuiHintPosition);

            jest.spyOn(element, 'getBoundingClientRect').mockReturnValue({
                ...EMPTY_CLIENT_RECT,
                left: 300,
                top: 300,
                right: 380,
                bottom: 300 + height,
                width: 80,
                height,
            });

            for (const direction of [
                'start-top',
                'start-bottom',
                'end-top',
                'end-bottom',
            ] as const) {
                component.direction.set(direction);
                fixture.detectChanges();

                const hintRect = {...EMPTY_CLIENT_RECT, width: 100, height: 100};
                const expectedTop = direction.endsWith('top') ? top : bottom;
                const [, actualTop] = position.getPosition(hintRect);

                expect(actualTop).toBe(expectedTop);
            }
        },
    );
});
