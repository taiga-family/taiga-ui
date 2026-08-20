import {TuiTextfieldComponent} from '../textfield.component';

interface CleanerContext {
    readonly accessor: () => {setValue(value: null): void} | undefined;
    readonly dropdown: {content(): unknown};
    readonly open: {
        readonly nativeElement: HTMLElement;
        toggle(open: boolean): void;
    };
}

const onCleanerClick = (
    TuiTextfieldComponent.prototype as unknown as {
        onCleanerClick(this: CleanerContext): void;
    }
).onCleanerClick;

describe('TuiTextfieldComponent cleaner', () => {
    it('clears the value and opens an editable dropdown with content', () => {
        const setValue = jest.fn();
        const toggle = jest.fn();

        onCleanerClick.call({
            accessor: () => ({setValue}),
            dropdown: {content: () => 'content'},
            open: {nativeElement: document.createElement('input'), toggle},
        });

        expect(setValue).toHaveBeenCalledWith(null);
        expect(toggle).toHaveBeenCalledWith(true);
    });

    it('does not open when dropdown content is absent', () => {
        const toggle = jest.fn();

        onCleanerClick.call({
            accessor: () => ({setValue: jest.fn()}),
            dropdown: {content: () => null},
            open: {nativeElement: document.createElement('input'), toggle},
        });

        expect(toggle).not.toHaveBeenCalled();
    });

    it('does not open for a readonly dropdown host', () => {
        const input = document.createElement('input');
        const toggle = jest.fn();

        input.readOnly = true;
        onCleanerClick.call({
            accessor: () => ({setValue: jest.fn()}),
            dropdown: {content: () => 'content'},
            open: {nativeElement: input, toggle},
        });

        expect(toggle).not.toHaveBeenCalled();
    });
});
