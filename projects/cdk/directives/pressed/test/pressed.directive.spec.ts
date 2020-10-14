import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {configureTestSuite} from 'ng-bullet';
import {TuiPressedModule} from '../pressed.module';

describe('TuiPressed directive', () => {
    @Component({
        template: `
            <div class="wrapper" style="position: fixed; top: 0; left: 0; z-index: 1000">
                <div
                    class="inner"
                    style="position: absolute; left: 0; top: 0; height: 200px; width: 100px"
                    (tuiPressedChange)="pressed = $event"
                >
                    button
                </div>
                text
            </div>
        `,
    })
    class TestComponent {
        pressed = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let wrapperElement: DebugElement & {nativeElement: HTMLDivElement};
    let innerElement: DebugElement & {nativeElement: HTMLDivElement};
    let socket: WebSocket;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiPressedModule],
            declarations: [TestComponent],
        });
    });

    beforeAll(done => {
        fetch('http://localhost:9222/json')
            .then(response => response.json())
            .then(response => {
                socket = new WebSocket(response[0].webSocketDebuggerUrl);
                socket.onopen = done;
            });
    });

    afterAll(() => {
        socket.close();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        wrapperElement = fixture.debugElement.query(By.css('.wrapper'));
        innerElement = fixture.debugElement.query(By.css('.inner'));

        fixture.detectChanges();
    });

    describe('when pressed', () => {
        beforeEach(done => {
            socket.send(
                JSON.stringify({
                    id: 1,
                    method: 'Input.dispatchMouseEvent',
                    params: {
                        type: 'mousePressed',
                        button: 'left',
                        clickCount: 1,
                        x: 5,
                        y: 100,
                    },
                }),
            );

            setTimeout(done, 100);
        });

        it('emits "true"', () => {
            expect(testComponent.pressed).toBe(true);
        });

        describe('emits "false" after pressing stopped', () => {
            describe('on initial element via', () => {
                it('mouseup', () => {
                    innerElement.nativeElement.dispatchEvent(
                        new MouseEvent('mouseup', {bubbles: true}),
                    );
                    fixture.detectChanges();
                    expect(testComponent.pressed).toBe(false);
                });

                it('dragend', () => {
                    innerElement.nativeElement.dispatchEvent(
                        new MouseEvent('dragend', {bubbles: true}),
                    );
                    fixture.detectChanges();
                    expect(testComponent.pressed).toBe(false);
                });
            });

            describe('on other element via', () => {
                it('mouseup', () => {
                    wrapperElement.nativeElement.dispatchEvent(
                        new MouseEvent('mouseup', {bubbles: true}),
                    );
                    fixture.detectChanges();
                    expect(testComponent.pressed).toBe(false);
                });

                it('dragend', () => {
                    wrapperElement.nativeElement.dispatchEvent(
                        new MouseEvent('dragend', {bubbles: true}),
                    );
                    fixture.detectChanges();
                    expect(testComponent.pressed).toBe(false);
                });
            });
        });
    });
});
