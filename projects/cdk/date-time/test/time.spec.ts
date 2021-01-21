import {TuiTime} from '../time';

describe('TuiTime', () => {
    describe('static method', () => {
        describe('isValidTime returns', () => {
            it('true for valid time', () => {
                expect(TuiTime.isValidTime(2, 37)).toBe(true);
            });

            it('true for valid time with seconds', () => {
                expect(TuiTime.isValidTime(2, 37, 12)).toBe(true);
            });

            it('true for valid time with ms', () => {
                expect(TuiTime.isValidTime(2, 37, 2, 900)).toBe(true);
            });

            it('false if hours are above 23', () => {
                expect(TuiTime.isValidTime(24, 45)).toBe(false);
            });

            it('false if minutes are above 59', () => {
                expect(TuiTime.isValidTime(1, 94)).toBe(false);
            });

            it('false if seconds are above 59', () => {
                expect(TuiTime.isValidTime(1, 1, 94)).toBe(false);
            });

            it('false if ms are above 999', () => {
                expect(TuiTime.isValidTime(1, 1, 1, 1000)).toBe(false);
            });

            it('false if minutes are below 0', () => {
                expect(TuiTime.isValidTime(2, -37)).toBe(false);
            });

            it('false if hours are below 0', () => {
                expect(TuiTime.isValidTime(-2, 37)).toBe(false);
            });

            it('false for floating hours', () => {
                expect(TuiTime.isValidTime(2, 0.37)).toBe(false);
            });

            it('false for floating minutes', () => {
                expect(TuiTime.isValidTime(0.2, 37)).toBe(false);
            });
        });

        describe('fromAbsoluteMilliseconds returns', () => {
            it('00:00 for 0', () => {
                expect(TuiTime.fromAbsoluteMilliseconds(0).toString()).toBe('00:00');
            });

            it('23:59 for 86340000', () => {
                expect(TuiTime.fromAbsoluteMilliseconds(86340000).toString()).toBe(
                    '23:59',
                );
            });

            it('23:59:59.999 for 86399999', () => {
                expect(TuiTime.fromAbsoluteMilliseconds(86399999).toString()).toBe(
                    '23:59:59.999',
                );
            });

            it('0:0:0.001 for 1', () => {
                expect(TuiTime.fromAbsoluteMilliseconds(1).toString()).toBe(
                    '00:00:00.001',
                );
            });

            it('0:0:1.001 for 1001', () => {
                expect(TuiTime.fromAbsoluteMilliseconds(1001).toString()).toBe(
                    '00:00:01.001',
                );
            });

            it('0:1:1.001 for 61001', () => {
                expect(TuiTime.fromAbsoluteMilliseconds(61001).toString()).toBe(
                    '00:01:01.001',
                );
            });

            it('0:1:0.001 for 60001 (no seconds, with ms)', () => {
                expect(TuiTime.fromAbsoluteMilliseconds(60001).toString()).toBe(
                    '00:01:00.001',
                );
            });

            it('1:1:1.555 for 3601555', () => {
                expect(TuiTime.fromAbsoluteMilliseconds(3601555).toString()).toBe(
                    '01:00:01.555',
                );
            });
        });

        describe('fromString returns', () => {
            it('from 00:00', () => {
                const time = TuiTime.fromString('00:00');

                expect(time.hours).toBe(0);
                expect(time.minutes).toBe(0);
            });

            it('from 23:59', () => {
                const time = TuiTime.fromString('23:59');

                expect(time.hours).toBe(23);
                expect(time.minutes).toBe(59);
            });

            it('from 23:59:01', () => {
                const time = TuiTime.fromString('23:59:01');

                expect(time.hours).toBe(23);
                expect(time.minutes).toBe(59);
                expect(time.seconds).toBe(1);
            });

            it('from 23:59:0.888', () => {
                const time = TuiTime.fromString('23:59:00.888');

                expect(time.hours).toBe(23);
                expect(time.minutes).toBe(59);
                expect(time.seconds).toBe(0);
                expect(time.ms).toBe(888);
            });
        });

        describe('current', () => {
            it('returns valid tuiDay', () => {
                const time = TuiTime.current();

                expect(time.hours).not.toBeNaN();
                expect(time.minutes).not.toBeNaN();
                expect(time.seconds).not.toBeNaN();
                expect(time.ms).not.toBeNaN();
            });
        });

        describe('currentLocal', () => {
            it('returns valid tuiDay', () => {
                const time = TuiTime.currentLocal();

                expect(time.hours).not.toBeNaN();
                expect(time.minutes).not.toBeNaN();
                expect(time.seconds).not.toBeNaN();
                expect(time.ms).not.toBeNaN();
            });
        });
    });

    describe('prototype method toAbsoluteMilliseconds returns', () => {
        it('0 for TuiTime(00:00)', () => {
            expect(new TuiTime(0, 0).toAbsoluteMilliseconds()).toBe(0);
        });

        it('86340000 for TuiTime(23:59)', () => {
            expect(new TuiTime(23, 59).toAbsoluteMilliseconds()).toBe(86340000);
        });

        it('1', () => {
            expect(new TuiTime(0, 0, 0, 1).toAbsoluteMilliseconds()).toBe(1);
        });

        it('1 001', () => {
            expect(new TuiTime(0, 0, 1, 1).toAbsoluteMilliseconds()).toBe(1001);
        });

        it('61 001', () => {
            expect(new TuiTime(0, 1, 1, 1).toAbsoluteMilliseconds()).toBe(61001);
        });

        it('60 001', () => {
            expect(new TuiTime(0, 1, 0, 1).toAbsoluteMilliseconds()).toBe(60001);
        });

        it('3601555', () => {
            expect(new TuiTime(1, 0, 1, 555).toAbsoluteMilliseconds()).toBe(3601555);
        });
    });

    describe('shift method', () => {
        it('hours are properly increased', () => {
            const time = new TuiTime(6, 36);
            const increasedTime = time.shift({hours: 5});

            expect(increasedTime.toString()).toBe('11:36');
        });

        it('minutes are properly increased', () => {
            const time = new TuiTime(6, 36);
            const increasedTime = time.shift({minutes: 5});

            expect(increasedTime.toString()).toBe('06:41');
        });

        it('hours are properly decreased', () => {
            const time = new TuiTime(6, 36);
            const increasedTime = time.shift({hours: -5});

            expect(increasedTime.toString()).toBe('01:36');
        });

        it('minutes are properly decreased', () => {
            const time = new TuiTime(6, 36);
            const increasedTime = time.shift({minutes: -5});

            expect(increasedTime.toString()).toBe('06:31');
        });

        it('hours are properly looped if shifted value is above 24 hours', () => {
            const time = new TuiTime(6, 36);
            const increasedTime = time.shift({hours: 25});

            expect(increasedTime.toString()).toBe('07:36');
        });

        it('hours are properly looped if shifted value is less than -24 hours', () => {
            const time = new TuiTime(6, 36);
            const increasedTime = time.shift({hours: -25});

            expect(increasedTime.toString()).toBe('05:36');
        });

        it('hours and minutes are properly added if shifted value is above 60', () => {
            const time = new TuiTime(6, 36);
            const increasedTime = time.shift({minutes: 65});

            expect(increasedTime.toString()).toBe('07:41');
        });

        it('hours and minutes are properly decreased if shifted value is less than -60', () => {
            const time = new TuiTime(6, 36);
            const increasedTime = time.shift({minutes: -65});

            expect(increasedTime.toString()).toBe('05:31');
        });

        it('hours and minutes are properly added if shifted value is above 60 * 24', () => {
            const time = new TuiTime(6, 36);
            const increasedTime = time.shift({minutes: 60 * 24 + 1});

            expect(increasedTime.toString()).toBe('06:37');
        });

        it('simple hours, minutes, seconds adding', () => {
            const time = new TuiTime(6, 36, 1);
            const increasedTime = time.shift({
                hours: 1,
                minutes: 1,
                seconds: 1,
            });

            expect(increasedTime.toString()).toBe('07:37:02');
        });

        it('simple hours, minutes, seconds decreasing', () => {
            const time = new TuiTime(6, 36, 1);
            const increasedTime = time.shift({
                hours: -1,
                minutes: -1,
                seconds: -1,
            });

            expect(increasedTime.toString()).toBe('05:35');
        });

        it('simple hours, minutes, seconds, ms adding', () => {
            const time = new TuiTime(6, 36, 1);
            const increasedTime = time.shift({
                hours: 1,
                minutes: 1,
                seconds: 1,
                ms: 10,
            });

            expect(increasedTime.toString()).toBe('07:37:02.010');
        });

        it('simple hours, minutes, seconds, ms decreasing', () => {
            const time = new TuiTime(6, 36, 1, 20);
            const increasedTime = time.shift({
                hours: -1,
                minutes: -1,
                seconds: -1,
                ms: -10,
            });

            expect(increasedTime.toString()).toBe('05:35:00.010');
        });

        it('with big ms number adding', () => {
            const time = new TuiTime(6, 36, 1);
            const increasedTime = time.shift({
                ms: 1000 * 60 * 60 + 1000 * 60 + 1000 + 10,
            });

            expect(increasedTime.toString()).toBe('07:37:02.010');
        });

        it('with big seconds and ms number adding', () => {
            const time = new TuiTime(6, 36, 1);
            const increasedTime = time.shift({
                seconds: 60 * 10 + 5,
                ms: 1000 * 60 * 60 + 1000 * 60 + 1000 + 10,
            });

            expect(increasedTime.toString()).toBe('07:47:07.010');
        });

        it('with big minutes, seconds and ms number adding', () => {
            const time = new TuiTime(6, 36, 1);
            const increasedTime = time.shift({
                minutes: 60 * 2 + 2,
                seconds: 60 * 10 + 5,
                ms: 1000 * 60 * 60 + 1000 * 60 + 1000 + 10,
            });

            expect(increasedTime.toString()).toBe('09:49:07.010');
        });

        it('with big minutes, seconds and ms number decreasing', () => {
            const time = new TuiTime(6, 36, 1);
            const increasedTime = time.shift({
                minutes: -60 * 2 - 2,
                seconds: -60 * 10 - 5,
                ms: -1000 * 60 * 60 - 1000 * 60 - 1000 - 10,
            });

            expect(increasedTime.toString()).toBe('03:23:55.990');
        });
    });

    it('stringify', () => {
        const time = new TuiTime(6, 36, 1, 1);

        expect(time.toString()).toBe('06:36:01.001');
    });

    it('stringify and fill zeros for seconds', () => {
        const time = new TuiTime(6, 36, 0, 0);

        expect(time.toString('HH:MM:SS')).toBe('06:36:00');
    });

    it('stringify and fill zeros for seconds and ms', () => {
        const time = new TuiTime(6, 36, 0, 0);

        expect(time.toString('HH:MM:SS.MSS')).toBe('06:36:00.000');
    });
});
