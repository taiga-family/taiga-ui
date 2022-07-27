import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiElasticStickyModule} from '@taiga-ui/addon-mobile';
import {TuiScrollbarModule} from '@taiga-ui/core';
import {configureTestSuite} from '@taiga-ui/testing';

describe(`TuiElasticStickyDirective`, () => {
    @Component({
        template: `
            <div
                id="scroll"
                style="position: relative; height: 100px; overflow: auto"
                tuiScrollRef
            >
                <div style="height: 50px">I'm header</div>
                <div
                    style="position: sticky; height: 50px; top: 0"
                    (tuiElasticSticky)="onElastic($event)"
                >
                    I'm sticky
                </div>
                <div style="height: 100px">I'm footer</div>
            </div>
        `,
    })
    class TestComponent {
        onElastic = jasmine.createSpy(`onElastic`);
    }

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiScrollbarModule, TuiElasticStickyModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`callback is not triggered initially`, () => {
        expect(component.onElastic).not.toHaveBeenCalled();
    });

    it(`callback is triggered with 0.5 when half of sticky would be hidden`, done => {
        fixture.debugElement.query(By.css(`#scroll`)).nativeElement.scrollTop = 75;
        fixture.detectChanges();

        setTimeout(() => {
            expect(component.onElastic).toHaveBeenCalledWith(0.5);
            done();
        }, 50);
    });

    it(`callback is triggered with 0 when sticky is fully hidden`, done => {
        fixture.debugElement.query(By.css(`#scroll`)).nativeElement.scrollTop = 100;
        fixture.detectChanges();

        setTimeout(() => {
            expect(component.onElastic).toHaveBeenCalledWith(0);
            done();
        }, 50);
    });
});
