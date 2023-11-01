import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {
    TuiApiHostService,
    TuiBindDocumentationTemplatesDirective,
    TuiDocumentationApiHostDirective,
} from '@taiga-ui/addon-doc';
import {BehaviorSubject, EMPTY, firstValueFrom} from 'rxjs';

describe('TuiBindDocumentationTemplatesDirective', () => {
    @Component({
        selector: 'test',
        template: `
            <div
                #host1="documentationApiHost"
                documentationApiHost
            ></div>
            <div
                #host2="documentationApiHost"
                documentationApiHost
            ></div>
            <div
                #mergedHost
                [bindDocumentationTemplates]="[host1, host2]"
            ></div>
        `,
    })
    class TestComponent {
        @ViewChild('host1', {read: TuiApiHostService})
        host1!: TuiApiHostService;

        @ViewChild('host2', {read: TuiApiHostService})
        host2!: TuiApiHostService;

        @ViewChild('mergedHost', {read: TuiApiHostService})
        mergedHost!: TuiApiHostService;
    }

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                TestComponent,
                TuiBindDocumentationTemplatesDirective,
                TuiDocumentationApiHostDirective,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        component.host1
            .setTemplate(
                new BehaviorSubject({
                    tagName: 'div',
                    baseProperties: {},
                }),
            )
            .subscribe();
        component.host2
            .setTemplate(
                new BehaviorSubject({
                    tagName: 'button',
                    baseProperties: {},
                }),
            )
            .subscribe();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should add property to both hosts', async () => {
        await expect(firstValueFrom(component.host1.code$)).resolves.toBe('<div></div>');
        await expect(firstValueFrom(component.host2.code$)).resolves.toBe(
            '<button></button>',
        );

        const subscription = component.mergedHost
            .setProperty('name', {
                type: null,
                value: 'test',
            })
            .subscribe();

        await expect(firstValueFrom(component.host1.code$)).resolves.toBe(
            '<div name="test"></div>',
        );
        await expect(firstValueFrom(component.host2.code$)).resolves.toBe(
            '<button name="test"></button>',
        );

        subscription.unsubscribe();

        await expect(firstValueFrom(component.host1.code$)).resolves.toBe('<div></div>');
        await expect(firstValueFrom(component.host2.code$)).resolves.toBe(
            '<button></button>',
        );
    });

    it('should throw error when call not implemented methods', () => {
        expect(() => component.mergedHost.setTemplate(EMPTY)).toThrow();
        expect(() => component.mergedHost.setContent(EMPTY)).toThrow();
    });
});
