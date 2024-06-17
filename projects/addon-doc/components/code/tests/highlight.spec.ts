import type {DebugElement} from '@angular/core';
import {Component, Input} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import hljs from 'highlight.js';
import type {HighlightLibrary} from 'ngx-highlightjs';
import {Highlight, HighlightLoader} from 'ngx-highlightjs';
import {BehaviorSubject} from 'rxjs';

describe('Highlight Directive', () => {
    let highlightedCode: string | undefined;
    let component: Test;
    let directiveElement: DebugElement;
    let directiveInstance: Highlight;
    let fixture: ComponentFixture<Test>;
    let loader: HighlightLoader;
    const testJsCode = 'console.log(&quot;test&quot;)';
    const testHtmlCode = '<div class=&quot;my-class&quot;></div>';

    @Component({
        standalone: true,
        imports: [Highlight],
        template: `
            <code [highlight]="code || ''"></code>
        `,
    })
    class Test {
        @Input()
        public code?: string | null;
    }

    beforeEach(waitForAsync(async () => {
        await TestBed.configureTestingModule({
            imports: [Test],
            providers: [
                {
                    provide: HighlightLoader,
                    useValue: {
                        ready: new BehaviorSubject(hljs),
                    },
                },
            ],
        }).compileComponents();

        loader = TestBed.inject(HighlightLoader);
        fixture = TestBed.createComponent(Test);
        component = fixture.componentInstance;
        directiveElement = fixture.debugElement.query(By.directive(Highlight));
        directiveInstance = directiveElement.injector.get(Highlight);
        fixture.detectChanges();
    }));

    it('should create highlight directive', () => {
        expect(directiveInstance).not.toBeNull();
    });

    it('should add hljs class', () => {
        expect(directiveElement.nativeElement.classList.contains('hljs')).toBeTruthy();
    });

    it('should highlight given text', fakeAsync(() => {
        component.code = testJsCode;
        fixture.detectChanges();
        loader.ready.subscribe((lib: HighlightLibrary) => {
            highlightedCode = lib.highlightAuto(
                testJsCode,
                // note: enable auto detect language mode
                null as unknown as string[],
            ).value;
        });
        tick(500);
        expect(directiveElement.nativeElement.innerHTML).toBe(highlightedCode);
    }));

    it('should reset text if empty string was passed', () => {
        component.code = '';
        fixture.detectChanges();
        expect(directiveElement.nativeElement.innerHTML).toBe('');
    });

    it('should not highlight if code is undefined', () => {
        jest.spyOn(directiveInstance, 'highlightElement');
        component.code = null;
        fixture.detectChanges();
        expect(directiveInstance.highlightElement).not.toHaveBeenCalled();
    });

    it('should highlight given text and highlight another text when change', fakeAsync(() => {
        component.code = testJsCode;
        fixture.detectChanges();
        loader.ready.subscribe((lib: HighlightLibrary) => {
            highlightedCode = lib.highlightAuto(
                testJsCode,
                // note: enable auto detect language mode
                null as unknown as string[],
            ).value;
        });
        tick(500);
        expect(directiveElement.nativeElement.innerHTML).toBe(highlightedCode);

        component.code = testHtmlCode;
        fixture.detectChanges();
        loader.ready.subscribe((lib: HighlightLibrary) => {
            highlightedCode = lib.highlightAuto(
                testHtmlCode,
                // note: enable auto detect language mode
                null as unknown as string[],
            ).value;
        });
        tick(500);
        expect(directiveElement.nativeElement.innerHTML).toBe(highlightedCode);

        component.code = '';
        fixture.detectChanges();
        tick(300);
        expect(directiveElement.nativeElement.innerHTML).toBe('');

        component.code = null;
        fixture.detectChanges();
        tick(300);
        expect(directiveElement.nativeElement.innerHTML).toBe('');
    }));
});
