import {tuiGetWordRange} from '@taiga-ui/core/utils/dom';

describe('tuiGetWordRange', () => {
    it.each([
        ['hello\nworld\nagain', 'hello'],
        ['hello\n\nagain', 'hello'],
        ['hello world\nagain', 'hello'],
    ])('stops at the nearest word boundary in %j', (value, expected) => {
        const node = document.createTextNode(value);

        document.body.append(node);

        try {
            const range = document.createRange();

            range.setStart(node, 2);
            range.collapse(true);

            expect(tuiGetWordRange(range).toString()).toBe(expected);
        } finally {
            node.remove();
        }
    });
});
