import {Component, ElementRef, ViewChild} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {tuiCustomEvent} from '@taiga-ui/cdk';
import {PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TUI_EXPAND_LOADED} from '../../../constants/events';
import {TuiExpandModule} from '../expand.module';

const ANIMATION_DELAY = 900;

describe('expand', () => {
    @Component({
        template: `
            <tui-expand [async]="async" [expanded]="expanded">
                <ng-template tuiExpandContent>
                    <div #content>content</div>
                </ng-template>
            </tui-expand>
        `,
    })
    class TestComponent {
        expanded = false;

        async = false;

        @ViewChild('content')
        content: ElementRef<HTMLDivElement>;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiExpandModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
    });

    describe('closed by default', () => {
        beforeEach(() => {
            testComponent.expanded = false;
            fixture.detectChanges();
        });

        it('content is not processed', () => {
            expect(testComponent.content).not.toBeDefined();
        });

        describe('after that expanded changes to true', () => {
            beforeEach(() => {
                testComponent.expanded = true;
                fixture.detectChanges();
            });

            it('and the content appears immediately', () => {
                expect(testComponent.content).toBeDefined();
            });

            it('and after the end of the animation, the content remains', done => {
                setTimeout(() => {
                    expect(testComponent.content).toBeDefined();
                    done();
                }, ANIMATION_DELAY);
            });
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
            beforeEach(done => {
                setTimeout(() => {
                    testComponent.expanded = false;
                    fixture.detectChanges();
                    done();
                }, 100);
            });

            it('and the content does not disappear immediately', () => {
                expect(testComponent.content).toBeDefined();
            });

            it('and after the end of the animation, the content disappears', done => {
                setTimeout(() => {
                    fixture.detectChanges();
                    expect(testComponent.content).not.toBeDefined();
                    done();
                }, ANIMATION_DELAY);
            });
        });
    });

    describe('async', () => {
        beforeEach(done => {
            testComponent.async = true;
            testComponent.expanded = false;
            fixture.detectChanges();
            testComponent.expanded = true;
            fixture.detectChanges();

            fixture.whenStable().then(() => {
                done();
            });
        });

        it('content is being processed', () => {
            expect(testComponent.content).toBeDefined();
        });

        it('visible loader', done => {
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(pageObject.getByAutomationId('tui-loader__loader')).not.toBeNull();
                done();
            });
        });

        it('after the TUI_EXPAND_LOADED event, the loader is hidden', fakeAsync(() => {
            const event = tuiCustomEvent(TUI_EXPAND_LOADED, {bubbles: true}, document);

            testComponent.content.nativeElement.dispatchEvent(event);
            fixture.detectChanges();
            tick(1000 / 60);
            fixture.detectChanges();

            expect(pageObject.getByAutomationId('tui-loader__loader')).toBeNull();
        }));
    });
});
