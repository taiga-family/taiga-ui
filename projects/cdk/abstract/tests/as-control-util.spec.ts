import {AbstractTuiControl, tuiAsControl} from '@taiga-ui/cdk';

describe('tuiAsControl', () => {
    it('is not assignable to control interface', () => {
        class MyNoControlComponent {}

        // @ts-expect-error
        expect(tuiAsControl(MyNoControlComponent)).toEqual({
            provide: AbstractTuiControl,
            useExisting: MyNoControlComponent,
            multi: false,
        });
    });

    it('implement control interface', () => {
        class MyControlComponent extends AbstractTuiControl<string> {
            public focused = false;

            public getFallbackValue(): string {
                return '';
            }
        }

        expect(tuiAsControl(MyControlComponent)).toEqual({
            provide: AbstractTuiControl,
            useExisting: MyControlComponent,
            multi: false,
        });
    });
});
