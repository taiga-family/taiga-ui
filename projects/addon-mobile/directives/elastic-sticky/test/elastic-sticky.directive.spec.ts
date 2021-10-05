import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiScrollbarModule} from '@taiga-ui/core';
import {TuiElasticStickyModule} from '../elastic-sticky.module';

describe('TuiElasticStickyDirective', () => {
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
        onElastic = jasmine.createSpy('onElastic');
    }

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TuiScrollbarModule, TuiElasticStickyModule],
            declarations: [TestComponent],
        });

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('callback is not triggered initially', done => {
        setTimeout(() => {
            expect(component.onElastic).not.toHaveBeenCalled();
            done();
        });
    });

    // TODO: fails sometimes
    xit('callback is triggered with 0.5 when half of sticky would be hidden', done => {
        fixture.debugElement.query(By.css('#scroll')).nativeElement.scrollTop = 75;
        fixture.detectChanges();

        setTimeout(() => {
            expect(component.onElastic).toHaveBeenCalledWith(0.5);
            done();
        });
    });

    it('callback is triggered with 0 when sticky is fully hidden', done => {
        fixture.debugElement.query(By.css('#scroll')).nativeElement.scrollTop = 100;
        fixture.detectChanges();

        setTimeout(() => {
            expect(component.onElastic).toHaveBeenCalledWith(0);
            done();
        }, 50);
    });
});
