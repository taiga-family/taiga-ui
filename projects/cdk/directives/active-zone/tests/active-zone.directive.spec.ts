import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {configureTestSuite} from '@taiga-ui/testing';

describe(`TuiActiveZoneDirective`, () => {
    @Component({
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
    class TestComponent {
        readonly control = new FormControl();

        childActive = false;

        parentActive = false;

        onParentActiveZone(active: boolean): void {
            this.parentActive = active;
        }

        onChildActiveZone(active: boolean): void {
            this.childActive = active;
        }

        onClick(element: HTMLInputElement): void {
            element?.focus();
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let el: HTMLElement;

    function getZoneInfo(selector: string): string {
        return el.querySelector(selector)?.innerHTML ?? ``;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule, TuiActiveZoneModule, ReactiveFormsModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        fixture.autoDetectChanges();

        el = fixture.debugElement.nativeElement;
    });

    it(`initial composite zone`, () => {
        expect(getZoneInfo(`#parent-info`)).toEqual(`Parent zone: false`);
        expect(getZoneInfo(`#child-info`)).toEqual(`Child zone: false`);
    });

    it(`mark parent zone when click on button inside zone`, () => {
        el.querySelector<HTMLButtonElement>(`#button-inside-zone`)?.focus();

        expect(getZoneInfo(`#parent-info`)).toEqual(`Parent zone: true`);
        expect(getZoneInfo(`#child-info`)).toEqual(`Child zone: false`);
    });

    it(`mark parent and child zone when focus on input inside zone`, () => {
        el.querySelector<HTMLInputElement>(`#input-inside-zone`)?.focus();

        expect(getZoneInfo(`#parent-info`)).toEqual(`Parent zone: true`);
        expect(getZoneInfo(`#child-info`)).toEqual(`Child zone: true`);
    });

    it(`manual mark parent and child zone`, () => {
        el.querySelector<HTMLButtonElement>(`#focus-input-inside`)?.click();

        expect(getZoneInfo(`#parent-info`)).toEqual(`Parent zone: true`);
        expect(getZoneInfo(`#child-info`)).toEqual(`Child zone: true`);
    });

    it(`not affected when focus input outside zone`, () => {
        el.querySelector<HTMLInputElement>(`#input-outside-zone`)?.focus();

        expect(getZoneInfo(`#parent-info`)).toEqual(`Parent zone: false`);
        expect(getZoneInfo(`#child-info`)).toEqual(`Child zone: false`);
    });

    it(`not affected when click button outside zone`, () => {
        el.querySelector<HTMLButtonElement>(`#button-outside-zone`)?.focus();

        expect(getZoneInfo(`#parent-info`)).toEqual(`Parent zone: false`);
        expect(getZoneInfo(`#child-info`)).toEqual(`Child zone: false`);
    });
});
