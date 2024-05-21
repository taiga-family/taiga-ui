import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {TuiInputExpireComponent} from '@taiga-ui/addon-commerce';

describe('InputExpire', () => {
    @Component({
        template: `
            <tui-input-expire [(ngModel)]="value"></tui-input-expire>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputExpireComponent)
        public input!: TuiInputExpireComponent;

        public value = '';
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let input: HTMLInputElement;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [FormsModule, TuiInputExpireComponent],
            declarations: [TestComponent],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        input = fixture.debugElement.query(By.css('input')).nativeElement;

        await fixture.whenStable();
    });

    it('does not change the correct input', () => {
        input.value = '12/12';
        input.dispatchEvent(new Event('input', {bubbles: true}));

        expect(testComponent.value).toBe('12/12');
        expect(input.value).toBe('12/12');
    });
});
