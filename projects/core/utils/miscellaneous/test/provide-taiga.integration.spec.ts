import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {TuiRoot} from '@taiga-ui/core/components/root';

import {provideTaiga} from '../provide-taiga';

@Component({
    standalone: true,
    selector: 'test-app',
    imports: [TuiRoot],
    template: `
        <tui-root>
            <div>Test content</div>
        </tui-root>
    `,
})
class TestApp {}

describe('provideTaiga integration', () => {
    it('should work with all options enabled in a real component', async () => {
        await TestBed.configureTestingModule({
            imports: [TestApp],
            providers: provideTaiga({
                automaticDarkMode: true,
                fontScaling: true,
                customGlobalScrollbar: true,
            }),
        }).compileComponents();

        const fixture = TestBed.createComponent(TestApp);
        
        expect(() => fixture.detectChanges()).not.toThrow();
        expect(fixture.componentInstance).toBeDefined();
    });

    it('should work with no options', async () => {
        await TestBed.configureTestingModule({
            imports: [TestApp],
            providers: provideTaiga(),
        }).compileComponents();

        const fixture = TestBed.createComponent(TestApp);
        
        expect(() => fixture.detectChanges()).not.toThrow();
        expect(fixture.componentInstance).toBeDefined();
    });

    it('should work with only font scaling enabled', async () => {
        await TestBed.configureTestingModule({
            imports: [TestApp],
            providers: provideTaiga({
                fontScaling: true,
            }),
        }).compileComponents();

        const fixture = TestBed.createComponent(TestApp);
        
        expect(() => fixture.detectChanges()).not.toThrow();
        expect(fixture.componentInstance).toBeDefined();
    });
});