import {TuiTextfieldComponent} from '../textfield.component';

interface CleanerContext {
    readonly dropdown: {content(): unknown};
    readonly open: {
        readonly nativeElement: HTMLElement;
        toggle(open: boolean): void;
    };

    accessor(): {setValue(value: unknown): void} | undefined;
}

const onCleanerClick = (
    TuiTextfieldComponent.prototype as unknown as {
        onCleanerClick(this: CleanerContext, value: unknown): void;
    }
).onCleanerClick;

describe('TuiTextfieldComponent cleaner', () => {
    it('forwards the cleaner value and opens an editable dropdown with content', () => {
        const setValue = jest.fn();
        const toggle = jest.fn();
        const value: unknown[] = [];

        onCleanerClick.call(
            {
                accessor: () => ({setValue}),
                dropdown: {content: () => 'content'},
                open: {nativeElement: document.createElement('input'), toggle},
            },
            value,
        );

        expect(setValue).toHaveBeenCalledWith(value);
        expect(toggle).toHaveBeenCalledWith(true);
    });

    it('does not open when dropdown content is absent', () => {
        const toggle = jest.fn();

        onCleanerClick.call(
            {
                accessor: () => ({setValue: jest.fn()}),
                dropdown: {content: () => null},
                open: {nativeElement: document.createElement('input'), toggle},
            },
            null,
        );

        expect(toggle).not.toHaveBeenCalled();
    });

    it('does not open for a readonly dropdown host', () => {
        const input = document.createElement('input');
        const toggle = jest.fn();

        input.readOnly = true;
        onCleanerClick.call(
            {
                accessor: () => ({setValue: jest.fn()}),
                dropdown: {content: () => 'content'},
                open: {nativeElement: input, toggle},
            },
            null,
        );

        expect(toggle).not.toHaveBeenCalled();
    });
});
