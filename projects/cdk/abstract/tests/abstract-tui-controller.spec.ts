import {Component, Input, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {AbstractTuiController} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

describe('AbstractTuiController', () => {
    @Component({
        selector: 'my-element',
        template: '',
    })
    class MyElementComponent extends AbstractTuiController {
        @Input()
        public message = '';
    }

    @Component({
        template: `
            <my-element [message]="message"></my-element>
        `,
    })
    class TestComponent {
        @ViewChild(MyElementComponent)
        public element!: MyElementComponent;

        public message = 'hello';
    }

    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, MyElementComponent],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        fixture.autoDetectChanges();
    });

    it('triggered ngOnChanges in control', () => {
        const changeSpy = jest.spyOn(fixture.componentInstance.element.change$, 'next');

        expect(changeSpy).not.toHaveBeenCalled();

        fixture.componentInstance.message = 'world';
        fixture.detectChanges();

        expect(changeSpy).toHaveBeenCalled();

        expect(fixture.componentInstance.element.message).toBe('world');
    });
});
