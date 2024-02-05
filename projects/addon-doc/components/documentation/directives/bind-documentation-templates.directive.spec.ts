import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {
    TuiApiHostService,
    TuiBindDocumentationTemplatesDirective,
    TuiDocumentationApiHostDirective,
} from '@taiga-ui/addon-doc';
import {firstValueFrom} from 'rxjs';

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

        component.host1.setTemplate('div', {});
        component.host2.setTemplate('button', {});
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should add property to both hosts', async () => {
        await expect(firstValueFrom(component.host1.code$)).resolves.toBe('<div></div>');
        await expect(firstValueFrom(component.host2.code$)).resolves.toBe(
            '<button></button>',
        );

        component.mergedHost.setProperty('name', {
            type: null,
            value: 'test',
        });

        await expect(firstValueFrom(component.host1.code$)).resolves.toBe(
            '<div name="test"></div>',
        );
        await expect(firstValueFrom(component.host2.code$)).resolves.toBe(
            '<button name="test"></button>',
        );

        component.mergedHost.deleteProperty('name');

        await expect(firstValueFrom(component.host1.code$)).resolves.toBe('<div></div>');
        await expect(firstValueFrom(component.host2.code$)).resolves.toBe(
            '<button></button>',
        );
    });

    it('should throw error when call not implemented methods', () => {
        expect(() => component.mergedHost.setTemplate('', {})).toThrow();
        expect(() => component.mergedHost.setContent('')).toThrow();
        expect(() => component.mergedHost.deleteContent(0)).toThrow();
    });
});
