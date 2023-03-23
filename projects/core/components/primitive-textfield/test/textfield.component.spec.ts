import {Component, ElementRef, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TUI_TEXTFIELD_HOST} from '@taiga-ui/core/tokens';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiPrimitiveTextfieldModule} from '../primitive-textfield.module';

describe(`Textfield`, () => {
    @Component({
        template: `
            <input
                #auto
                tuiTextfield
            />
            <input
                #attr
                id="attr"
                tuiTextfield
            />
            <input
                #bind
                tuiTextfield
                [id]="value"
            />
        `,
    })
    class TestComponent {
        @ViewChild(`auto`, {read: ElementRef})
        readonly auto!: ElementRef<HTMLElement>;

        @ViewChild(`attr`, {read: ElementRef})
        readonly attr!: ElementRef<HTMLElement>;

        @ViewChild(`bind`, {read: ElementRef})
        readonly bind!: ElementRef<HTMLElement>;

        value = `bind`;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiPrimitiveTextfieldModule],
            declarations: [TestComponent],
            providers: [
                {
                    provide: TUI_TEXTFIELD_HOST,
                    useValue: {
                        process: () => {},
                    },
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe(`id binding`, () => {
        it(`Auto id generation works`, () => {
            expect(testComponent.auto.nativeElement.id).toBeTruthy();
        });

        it(`Static id is not overridden`, () => {
            expect(testComponent.attr.nativeElement.id).toBe(`attr`);
        });

        it(`Dynamic id binding works`, () => {
            expect(testComponent.bind.nativeElement.id).toBe(`bind`);
        });
    });
});
