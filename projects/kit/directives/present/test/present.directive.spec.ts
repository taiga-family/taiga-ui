import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {provideTaiga} from '@taiga-ui/core';
import {TuiPresent} from '@taiga-ui/kit';

describe('TuiPresent directive', () => {
    @Component({
        imports: [TuiPresent],
        template: `
            <span
                id="css"
                [class.hidden]="!hovered()"
                (tuiPresent)="onCss($event)"
            >
                css
            </span>
            @if (hovered()) {
                <span
                    id="if"
                    (tuiPresent)="onIf($event)"
                >
                    if
                </span>
            }
        `,
        styles: `
            .hidden {
                display: none;
            }
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly hovered = signal(false);
        public counterCss = 0;
        public counterIf = 0;

        public onCss(visible: boolean): void {
            this.counterCss += visible ? 1 : -1;
        }

        public onIf(visible: boolean): void {
            this.counterIf += visible ? 1 : -1;
        }
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    function present(id: string, visible: boolean): void {
        const el = fixture.nativeElement.querySelector(`#${id}`);

        expect(el).toBeTruthy();
        el.dispatchEvent(new Event(visible ? 'animationstart' : 'animationcancel'));
        fixture.detectChanges();
    }

    it('css hide/show never goes negative', () => {
        testComponent.hovered.set(true);
        fixture.detectChanges();
        present('css', true);

        expect(testComponent.counterCss).toBe(1);

        present('css', false);
        testComponent.hovered.set(false);
        fixture.detectChanges();

        expect(testComponent.counterCss).toBe(0);
    });

    it('ngIf does not go negative when cancel and destroy both fire', () => {
        testComponent.hovered.set(true);
        fixture.detectChanges();
        present('if', true);

        expect(testComponent.counterIf).toBe(1);

        present('if', false);
        testComponent.hovered.set(false);
        fixture.detectChanges();

        expect(testComponent.counterIf).toBe(0);
    });

    it('ngIf reports disappearance when the view is destroyed without cancel', () => {
        testComponent.hovered.set(true);
        fixture.detectChanges();
        present('if', true);

        expect(testComponent.counterIf).toBe(1);

        testComponent.hovered.set(false);
        fixture.detectChanges();

        expect(testComponent.counterIf).toBe(0);
    });

    it('ngIf does not emit disappearance if it never appeared', () => {
        testComponent.hovered.set(true);
        fixture.detectChanges();
        testComponent.hovered.set(false);
        fixture.detectChanges();

        expect(testComponent.counterIf).toBe(0);
    });
});
