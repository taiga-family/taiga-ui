import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {provideTaiga, TuiRoot} from '@taiga-ui/core';
import {TUI_DEFAULT_LANGUAGE, TUI_RUSSIAN_LANGUAGE} from '@taiga-ui/i18n';

import {TuiToastService} from '../toast.service';

describe('Toast', () => {
    @Component({
        imports: [TuiRoot],
        template: `
            <tui-root />
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    let fixture: ComponentFixture<Test>;
    let toasts: TuiToastService;

    function getCloseButton(): HTMLElement | null {
        return fixture.nativeElement.querySelector('tui-toast button[tuiButtonX]');
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [
                provideTaiga(),
                {provide: WA_IS_MOBILE, useValue: false},
                {provide: TUI_DEFAULT_LANGUAGE, useValue: TUI_RUSSIAN_LANGUAGE},
            ],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        toasts = TestBed.inject(TuiToastService);
        fixture.detectChanges();
    });

    it('localizes the accessible name of the close button', () => {
        toasts.open('Test').subscribe();
        fixture.detectChanges();

        expect(getCloseButton()?.textContent?.trim()).toBe(TUI_RUSSIAN_LANGUAGE.close);
    });
});
