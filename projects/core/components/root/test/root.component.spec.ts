import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiRootComponent} from '../root.component';
import {TuiRootModule} from '../root.module';

describe(`root`, () => {
    let fixture: ComponentFixture<TuiRootComponent>;
    let root: HTMLElement;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiRootModule, NoopAnimationsModule],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TuiRootComponent);
        root = fixture.nativeElement;

        fixture.detectChanges();
    });

    it(`root has data-tui-version attribute`, () => {
        expect(root.dataset.tuiVersion).toBeDefined();
    });

    it(`There is some data-tui-version value`, () => {
        expect(root.dataset.tuiVersion).not.toBe(`undefined`);
    });
});
