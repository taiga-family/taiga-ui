import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

describe('TuiActiveZoneDirective', () => {
    @Component({
        standalone: true,
        imports: [TuiActiveZoneDirective, ReactiveFormsModule],
        template: `
            <p id="parent-info">Parent zone: {{ parentActive }}</p>
            <p id="child-info">Child zone: {{ childActive }}</p>

            <div
                #parent="tuiActiveZone"
                class="active-zone"
                [class.active-zone_active]="parentActive"
                (tuiActiveZoneChange)="onParentActiveZone($event)"
            >
                <h2>Parent zone</h2>
                <button
                    id="button-inside-zone"
                    type="button"
                >
                    A button inside zone
                </button>
            </div>

            <div>
                <button
                    id="button-outside-zone"
                    type="button"
                >
                    A button outside of zone
                </button>
            </div>

            <div
                class="active-zone"
                [class.active-zone_active]="childActive"
                [tuiActiveZoneParent]="parent"
                (tuiActiveZoneChange)="onChildActiveZone($event)"
            >
                <h2>Child zone</h2>
                <input
                    #input
                    id="input-inside-zone"
                    placeholder="Input inside zone"
                    [formControl]="control"
                />

                <p>
                    You can bind different elements with
                    <code>[tuiActiveZoneParent]</code>
                    directive
                </p>
            </div>

            <div>
                <input
                    id="input-outside-zone"
                    placeholder="input outside zone"
                />
                <button
                    id="focus-input-inside"
                    type="button"
                    (click)="onClick(input)"
                >
                    Focus input in zone
                </button>
            </div>
        `,
    })
    class Test {
        public readonly control = new FormControl();

        public childActive = false;

        public parentActive = false;

        public onParentActiveZone(active: boolean): void {
            this.parentActive = active;
        }

        public onChildActiveZone(active: boolean): void {
            this.childActive = active;
        }

        public onClick(element: HTMLInputElement): void {
            element?.focus();
        }
    }

    let fixture: ComponentFixture<Test>;
    let el: HTMLElement;

    function getZoneInfo(selector: string): string {
        return el.querySelector(selector)?.innerHTML ?? '';
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        fixture.autoDetectChanges();

        el = fixture.debugElement.nativeElement;
    });

    it('initial composite zone', () => {
        expect(getZoneInfo('#parent-info')).toBe('Parent zone: false');
        expect(getZoneInfo('#child-info')).toBe('Child zone: false');
    });

    it('mark parent zone when click on button inside zone', () => {
        el.querySelector<HTMLButtonElement>('#button-inside-zone')?.focus();

        expect(getZoneInfo('#parent-info')).toBe('Parent zone: true');
        expect(getZoneInfo('#child-info')).toBe('Child zone: false');
    });

    it('mark parent and child zone when focus on input inside zone', () => {
        el.querySelector<HTMLInputElement>('#input-inside-zone')?.focus();

        expect(getZoneInfo('#parent-info')).toBe('Parent zone: true');
        expect(getZoneInfo('#child-info')).toBe('Child zone: true');
    });

    it('manual mark parent and child zone', () => {
        el.querySelector<HTMLButtonElement>('#focus-input-inside')?.click();

        expect(getZoneInfo('#parent-info')).toBe('Parent zone: true');
        expect(getZoneInfo('#child-info')).toBe('Child zone: true');
    });

    it('not affected when focus input outside zone', () => {
        el.querySelector<HTMLInputElement>('#input-outside-zone')?.focus();

        expect(getZoneInfo('#parent-info')).toBe('Parent zone: false');
        expect(getZoneInfo('#child-info')).toBe('Child zone: false');
    });

    it('not affected when click button outside zone', () => {
        el.querySelector<HTMLButtonElement>('#button-outside-zone')?.focus();

        expect(getZoneInfo('#parent-info')).toBe('Parent zone: false');
        expect(getZoneInfo('#child-info')).toBe('Child zone: false');
    });
});
