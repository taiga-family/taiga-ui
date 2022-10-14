import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {TUI_SANITIZER, TuiSvgModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';
import {configureTestSuite} from '@taiga-ui/testing';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

import {TuiLayoutTestModule} from './layout/layout.module';
import {TuiTestComponent, TuiTestUser} from './test.component';

describe(`SVG + TuiInputComponent`, () => {
    let component: TuiTestComponent;
    let fixture: ComponentFixture<TuiTestComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            declarations: [TuiTestComponent],
            imports: [
                TuiLayoutTestModule,
                TuiInputModule,
                TuiSvgModule,
                ReactiveFormsModule,
            ],
            providers: [
                {
                    provide: TUI_SANITIZER,
                    useClass: NgDompurifySanitizer,
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TuiTestComponent);
        component = fixture.componentInstance;

        component.user = new TuiTestUser();

        fixture.detectChanges();
    });

    it(`should create`, () => {
        expect(component).toBeTruthy();
    });

    it(`icons should correctly rendered in DOM`, () => {
        expect(
            fixture.debugElement
                ?.query(By.css(`.layout-form > button use`))
                ?.nativeElement?.getAttribute(`xlink:href`),
        ).toEqual(`assets/taiga-ui/icons/tuiIconCloseLarge.svg#tuiIconCloseLarge`);

        expect(
            fixture.debugElement
                .query(By.css(`.copyright > tui-svg svg g`))
                ?.nativeElement?.getAttribute(`id`),
        ).toEqual(`tuiIconMaestro`);
    });
});
