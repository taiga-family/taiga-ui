import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiValidatorDirective} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

describe('TuiValidator directive', () => {
    @Component({
        standalone: true,
        imports: [NgIf, ReactiveFormsModule, TuiValidatorDirective],
        template: `
            <input
                *ngIf="show"
                [formControl]="control"
                [tuiValidator]="validator"
            />
        `,
    })
    class Test {
        public show = false;

        public readonly control = new FormControl();

        public readonly validator = Validators.required;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('adds validator', () => {
        it('valid initially', () => {
            expect(testComponent.control.valid).toBe(true);
        });

        it('becomes invalid', () => {
            testComponent.show = true;
            fixture.detectChanges();

            expect(testComponent.control.valid).toBe(false);
        });
    });
});
