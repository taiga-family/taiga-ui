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

    it.each([
        {value: 'hello world again', start: 0, end: 5, expected: 'hello'},
        {value: 'hello world again', start: 0, end: 4, expected: 'hello'},
        {value: 'hello world again', start: 6, end: 11, expected: 'world'},
        {value: 'hello\nworld again', start: 0, end: 5, expected: 'hello'},
        {value: 'hello\u00A0world again', start: 0, end: 5, expected: 'hello'},
        {value: 'hello\u200Bworld again', start: 0, end: 5, expected: 'hello'},
        {value: 'hello @user again', start: 5, end: 5, expected: ''},
        {value: 'hello @user again', start: 7, end: 7, expected: '@user'},
    ])(
        'stops at the selection boundary in $value with offsets [$start, $end)',
        ({value, start, end, expected}) => {
            const node = document.createTextNode(value);

            document.body.append(node);

            try {
                const range = document.createRange();

                range.setStart(node, start);
                range.setEnd(node, end);

                expect(tuiGetWordRange(range).toString()).toBe(expected);
            } finally {
                node.remove();
            }
        },
    );
});
