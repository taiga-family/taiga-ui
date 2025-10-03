import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {provideTaiga} from '@taiga-ui/core';
import {TuiTagComponent, TuiTagModule, tuiTagOptionsProvider} from '@taiga-ui/legacy';

describe('Tag component options', () => {
    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    @Component({
        standalone: true,
        imports: [TuiTagModule],
        template: `
            <tui-tag />
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild(TuiTagComponent, {static: true})
        public component!: TuiTagComponent;
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TuiTagModule, Test],
            providers: [
                provideTaiga(),
                tuiTagOptionsProvider({
                    size: 'l',
                    status: 'error',
                    autoColor: true,
                }),
            ],
        });

        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('override by custom options', () => {
        expect(testComponent.component.size).toBe('l');
        expect(testComponent.component.status).toBe('error');
        expect(testComponent.component.autoColor).toBe(true);
    });
});
