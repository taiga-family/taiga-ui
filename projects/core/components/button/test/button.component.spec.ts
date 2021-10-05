import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiButtonModule} from '../button.module';

describe('Button', () => {
    @Component({
        template: `
            <button id="button" tuiButton type="button" [showLoader]="true">
                My button
            </button>
        `,
    })
    class TestComponent {}

    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TuiButtonModule],
            declarations: [TestComponent],
        });

        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
    });

    it('When loader is shown, native button is disabled', () => {
        expect(fixture.debugElement.query(By.css('#button')).nativeElement.disabled).toBe(
            true,
        );
    });
});
