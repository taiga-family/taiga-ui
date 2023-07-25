import {tuiIsExpireValid} from '@taiga-ui/addon-commerce';

describe(`tuiIsExpireValid`, () => {
    const specs = {
        '12/22': [
            {today: `Jan 31, 2023`, valid: false},
            {today: `Feb 28, 2023`, valid: false},
            {today: `March 31, 2023`, valid: false},
            {today: `April 30, 2023`, valid: false},
            {today: `May 31, 2023`, valid: false},
            {today: `Jun 30, 2023`, valid: false},
            {today: `July 31, 2023`, valid: false},
            {today: `Aug 31, 2023`, valid: false},
            {today: `Sep 30, 2023`, valid: false},
            {today: `Oct 31, 2023`, valid: false},
            {today: `Nov 30, 2023`, valid: false},
            {today: `Dec 31, 2023`, valid: false},
        ],
        '06/23': [
            {today: `Jan 31, 2023`, valid: true},
            {today: `Feb 28, 2023`, valid: true},
            {today: `March 31, 2023`, valid: true},
            {today: `April 30, 2023`, valid: true},
            {today: `May 31, 2023`, valid: true},
            {today: `Jun 30, 2023`, valid: true},
            {today: `July 31, 2023`, valid: false},
            {today: `Aug 31, 2023`, valid: false},
            {today: `Sep 30, 2023`, valid: false},
            {today: `Oct 31, 2023`, valid: false},
            {today: `Nov 30, 2023`, valid: false},
            {today: `Dec 31, 2023`, valid: false},
        ],
        '01/24': [
            {today: `Jan 31, 2023`, valid: true},
            {today: `Feb 28, 2023`, valid: true},
            {today: `March 31, 2023`, valid: true},
            {today: `April 30, 2023`, valid: true},
            {today: `May 31, 2023`, valid: true},
            {today: `Jun 30, 2023`, valid: true},
            {today: `July 31, 2023`, valid: true},
            {today: `Aug 31, 2023`, valid: true},
            {today: `Sep 30, 2023`, valid: true},
            {today: `Oct 31, 2023`, valid: true},
            {today: `Nov 30, 2023`, valid: true},
            {today: `Dec 31, 2023`, valid: true},
        ],
    };

    for (const expire in specs) {
        describe(expire, () => {
            for (const {today, valid} of specs[expire as keyof typeof specs]) {
                it(`It's ${valid ? `valid` : `invalid`} when today is ${today}`, () =>
                    expect(tuiIsExpireValid(expire, new Date(today))).toBe(valid));
            }
        });
    }
});
