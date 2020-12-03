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

    describe('закрыт по умолчанию', () => {
        beforeEach(() => {
            testComponent.expanded = false;
            fixture.detectChanges();
        });

        it('содержимое не обрабатывается', () => {
            expect(testComponent.content).not.toBeDefined();
        });

        describe('после этого expanded меняется на true', () => {
            beforeEach(() => {
                testComponent.expanded = true;
                fixture.detectChanges();
            });

            it('и содержимое появляется сразу же', () => {
                expect(testComponent.content).toBeDefined();
            });

            it('и после конца анимации содержимое остаётся', done => {
                setTimeout(() => {
                    expect(testComponent.content).toBeDefined();
                    done();
                }, ANIMATION_DELAY);
            });
        });
    });

    describe('открыт по умолчанию', () => {
        beforeEach(() => {
            testComponent.expanded = true;
            fixture.detectChanges();
        });

        it('содержимое обрабатывается', () => {
            expect(testComponent.content).toBeDefined();
        });

        describe('после этого expanded меняется на false', () => {
            beforeEach(done => {
                setTimeout(() => {
                    testComponent.expanded = false;
                    fixture.detectChanges();
                    done();
                }, 100);
            });

            it('и содержимое не пропадает сразу же', () => {
                expect(testComponent.content).toBeDefined();
            });

            it('и после конца анимации содержимое пропадает', done => {
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

        it('содержимое обрабатывается', () => {
            expect(testComponent.content).toBeDefined();
        });

        it('виден лоадер', done => {
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(pageObject.getByAutomationId('tui-loader__loader')).not.toBeNull();
                done();
            });
        });

        it('после события TUI_EXPAND_LOADED лоадер скрыт', fakeAsync(() => {
            const event = tuiCustomEvent(TUI_EXPAND_LOADED, {bubbles: true}, document);

            testComponent.content.nativeElement.dispatchEvent(event);
            fixture.detectChanges();
            tick(1000 / 60);
            fixture.detectChanges();

            expect(pageObject.getByAutomationId('tui-loader__loader')).toBeNull();
        }));
    });
});
