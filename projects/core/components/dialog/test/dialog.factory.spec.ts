/* eslint-disable rxjs/no-ignored-observable */
import type {tuiDialog, TuiDialogContext} from '@taiga-ui/core';
import {EMPTY} from 'rxjs';

const tuiDialogMock: typeof tuiDialog = jest.fn(() => jest.fn(() => EMPTY));

{
    // empty component
    class TestComponent {}

    const dialog = tuiDialogMock(TestComponent);

    dialog().subscribe((_value: void) => {});
    dialog(undefined).subscribe((_value: void) => {});
    // @ts-expect-error TS2345: Argument of type `string` is not assignable to parameter of type `void`
    dialog('test').subscribe((_value: void) => {});
    // @ts-expect-error TS2769: Type `void` is not assignable to type `string`
    dialog().subscribe((_value: string) => {});
}

{
    // component with context
    class TestComponent {
        public readonly someContextProp!: TuiDialogContext<string, number>;
    }

    const dialog = tuiDialogMock(TestComponent);

    dialog(123).subscribe((_value: string) => {});
    // @ts-expect-error TS2554: Expected 1 arguments, but got 0
    dialog();
    // @ts-expect-error TS2345: Argument of type `string` is not assignable to parameter of type `number`
    dialog('');
    // @ts-expect-error TS2345: Argument of type `string` is not assignable to parameter of type `number`
    dialog(123).subscribe((_value: number) => {});
}

{
    // component with context and some other property
    class TestComponent {
        public readonly someContextProp!: TuiDialogContext<string, number>;

        public readonly someOtherProperty!: string;
    }

    const dialog = tuiDialogMock(TestComponent);

    dialog(123).subscribe((_value: string) => {});
    // @ts-expect-error TS2554: Expected 1 arguments, but got 0
    dialog();
    // @ts-expect-error TS2345: Argument of type `string` is not assignable to parameter of type `number`
    dialog('');
    // @ts-expect-error TS2345: Argument of type `string` is not assignable to parameter of type `number`
    dialog(123).subscribe((_value: number) => {});
}

{
    // component with context and some other property that any
    class TestComponent {
        public readonly someContextProp!: TuiDialogContext<string, number>;

        public readonly someOtherProperty!: any;
    }

    const dialog = tuiDialogMock(TestComponent);

    dialog(123).subscribe((_value: string) => {});
    // @ts-expect-error TS2554: Expected 1 arguments, but got 0
    dialog();
    // @ts-expect-error TS2345: Argument of type `string` is not assignable to parameter of type `number`
    dialog('');
    // @ts-expect-error TS2345: Argument of type `string` is not assignable to parameter of type `number`
    dialog(123).subscribe((_value: number) => {});
}

{
    // component with multiple context
    class TestComponent {
        public readonly someContextProp!: TuiDialogContext<string, number>;
        public readonly someContextProp2!: TuiDialogContext<number, string>;
    }

    // @ts-expect-error
    tuiDialogMock(TestComponent);
}

{
    // component with context with union
    class TestComponent {
        public readonly someContextProp!: TuiDialogContext<
            boolean | object,
            number | string
        >;
    }

    const dialog = tuiDialogMock(TestComponent);

    dialog(123);
    dialog('test');
}

describe('tuiDialog', () => {
    it('stub', () => {
        expect(true).toBeTruthy();
    });
});
