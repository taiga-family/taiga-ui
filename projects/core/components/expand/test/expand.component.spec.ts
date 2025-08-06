import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import {type ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {TUI_EXPAND_LOADED, TuiExpand, type TuiExpandComponent} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiPageObject} from '@taiga-ui/testing';

const ANIMATION_DELAY = 900;

describe('expand', () => {
    @Component({
        standalone: true,
        imports: [TuiExpand],
        template: `
            <tui-expand
                #expand
                [async]="async"
                [expanded]="expanded"
            >
                <ng-template tuiExpandContent>
                    <div #content>content</div>
                </ng-template>
            </tui-expand>
        `,
        // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
        changeDetection: ChangeDetectionStrategy.Default,
    })
    class Test {
        @ViewChild('content')
        public content!: ElementRef<HTMLDivElement>;

        @ViewChild('expand', {read: ElementRef})
        public expandElement!: ElementRef<HTMLElement>;

        @ViewChild('expand')
        public expandComponent!: TuiExpandComponent;

        public expanded = false;

        public async = false;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let pageObject: TuiPageObject<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
    });

    describe('closed by default', () => {
        beforeEach(() => {
            testComponent.expanded = false;
            fixture.detectChanges();
        });

        it('content is not processed', () => {
            expect(testComponent.content).toBeUndefined();
        });

        describe('after that expanded changes to true', () => {
            beforeEach(() => {
                testComponent.expanded = true;
                fixture.detectChanges();
            });

            it('and the content appears immediately', () => {
                expect(testComponent.content).toBeDefined();
            });

            it('and after the end of the animation, the content remains', fakeAsync(() => {
                tick(ANIMATION_DELAY);

                expect(testComponent.content).toBeDefined();
            }));
        });
    });

    describe('open by default', () => {
        beforeEach(() => {
            testComponent.expanded = true;
            fixture.detectChanges();
        });

        it('content is being processed', () => {
            expect(testComponent.content).toBeDefined();
        });

        describe('after that expanded changes to false', () => {
            it('and the content does not disappear immediately', () => {
                expect(testComponent.content).toBeDefined();
            });

            it('and after the end of the animation, the content disappears', fakeAsync(() => {
                expect(testComponent.expandComponent.contentVisible).toBeTruthy();
                expect(testComponent.content).toBeDefined();

                testComponent.expanded = false;
                fixture.detectChanges();

                tick(ANIMATION_DELAY);
                transitionend();

                expect(testComponent.expandComponent.contentVisible).toBeFalsy();
                expect(testComponent.content).toBeUndefined();
            }));
        });
    });

    describe('async', () => {
        beforeEach(() => {
            testComponent.async = true;
            testComponent.expanded = false;
            fixture.detectChanges();
            testComponent.expanded = true;
            fixture.detectChanges();
        });

        it('content is being processed', () => {
            expect(testComponent.content).toBeDefined();
        });

        it('visible loader', async () => {
            await fixture.whenStable();
            fixture.detectChanges();

            expect(pageObject.getByAutomationId('tui-loader__loader')).not.toBeNull();
        });

        it('after the TUI_EXPAND_LOADED event, the loader is hidden', fakeAsync(() => {
            const event = new CustomEvent(TUI_EXPAND_LOADED, {bubbles: true});

            testComponent.content.nativeElement.dispatchEvent(event);
            fixture.detectChanges();
            tick(1000 / 60);
            fixture.detectChanges();

            expect(pageObject.getByAutomationId('tui-loader__loader')).toBeNull();
        }));
    });

    /**
     * @note:
     * JSDOM doesn't support native transitionend
     */
    function transitionend(): void {
        const event = new Event('transitionend');

        (event as any).propertyName = 'opacity';
        testComponent.expandElement.nativeElement.dispatchEvent(event);
        fixture.detectChanges();
    }
});
