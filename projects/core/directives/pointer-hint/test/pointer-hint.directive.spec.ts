import {Component, ElementRef, ViewChild} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiRootModule} from '../../../components/root/root.module';
import {TuiPointerHintDirective} from '../pointer-hint.directive';
import {TuiPointerHintModule} from '../pointer-hint.module';

describe(`PointerHint`, () => {
    @Component({
        template: `
            <tui-root>
                <div
                    #hintHost
                    id="hint-host"
                    tuiHintDirection="top"
                    class="host"
                    [tuiPointerHint]="hint"
                >
                    Tooltip host
                </div>
            </tui-root>
        `,
        styles: [
            `
                .host {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                }
            `,
        ],
    })
    class TestComponent {
        @ViewChild(TuiPointerHintDirective, {static: true})
        directive!: TuiPointerHintDirective;

        @ViewChild(`hintHost`, {static: true})
        host!: ElementRef<HTMLElement>;

        hint = `Tooltip text`;
    }

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;
    let hostElement: HTMLElement;
    let directive: TuiPointerHintDirective;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiPointerHintModule, TuiRootModule, NoopAnimationsModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        document.body.style.margin = `0`;
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        hostElement = component.host.nativeElement;
        directive = component.directive;
        fixture.detectChanges();
    });

    it(`is not shown by default`, fakeAsync(() => {
        expect(getTooltip()).toBeNull();
    }));

    it(`has default clientRect`, fakeAsync(() => {
        const clientRect = directive.getElementClientRect();

        expect(clientRect.left).toBe(0);
        expect(clientRect.top).toBe(0);
    }));

    it(`recalculates clientRect from user mouse moving`, fakeAsync(() => {
        const hoverEvent = new MouseEvent(`hover`);

        hostElement.dispatchEvent(hoverEvent);

        component.host.nativeElement.dispatchEvent(
            new MouseEvent(`mousemove`, {
                clientX: 10,
                clientY: 10,
            }),
        );

        const clientRect = directive.getElementClientRect();

        expect(clientRect.left).toBe(10);
        expect(clientRect.top).toBe(10);
    }));

    function getTooltip(): Element | null {
        return document.querySelector(`[automation-id=tui-hint-box__tooltip]`);
    }
});
