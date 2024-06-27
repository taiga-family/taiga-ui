import {Component, ElementRef, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TUI_TEXTFIELD_HOST} from '@taiga-ui/legacy';

import {TuiPrimitiveTextfieldModule} from '../primitive-textfield.module';

describe('Textfield', () => {
    @Component({
        standalone: true,
        imports: [TuiPrimitiveTextfieldModule],
        template: `
            <input
                #auto
                tuiTextfieldLegacy
            />
            <input
                #attr
                id="attr"
                tuiTextfieldLegacy
            />
            <input
                #bind
                tuiTextfieldLegacy
                [id]="value"
            />
        `,
    })
    class Test {
        @ViewChild('auto', {read: ElementRef})
        public readonly auto!: ElementRef<HTMLElement>;

        @ViewChild('attr', {read: ElementRef})
        public readonly attr!: ElementRef<HTMLElement>;

        @ViewChild('bind', {read: ElementRef})
        public readonly bind!: ElementRef<HTMLElement>;

        public value = 'bind';
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [
                {
                    provide: TUI_TEXTFIELD_HOST,
                    useValue: {
                        process: () => {},
                    },
                },
            ],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('id binding', () => {
        it('auto id generation works', () => {
            expect(testComponent.auto.nativeElement.id).toBeTruthy();
        });

        it('static id is not overridden', () => {
            expect(testComponent.attr.nativeElement.id).toBe('attr');
        });

        it('dynamic id binding works', () => {
            expect(testComponent.bind.nativeElement.id).toBe('bind');
        });
    });
});
