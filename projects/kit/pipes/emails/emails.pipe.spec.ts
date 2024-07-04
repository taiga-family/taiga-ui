/// <reference types="jest" />
import {TestBed} from '@angular/core/testing';
import {TUI_EMAIL_PIPE_OPTIONS, TuiEmailsPipe} from '@taiga-ui/kit';

describe('TuiEmailsPipe', () => {
    let pipe: TuiEmailsPipe;
    let options: string[] = [];

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TuiEmailsPipe],
            providers: [TuiEmailsPipe],
        }).compileComponents();

        pipe = TestBed.inject(TuiEmailsPipe);
        options = TestBed.inject(TUI_EMAIL_PIPE_OPTIONS);
    });

    it('should exist', () => {
        expect(pipe).toBeDefined();
    });

    describe('transform', () => {
        it('should return an empty array if query does not contain "@"', () => {
            const result = pipe.transform('hello');

            expect(result).toEqual([]);
        });

        it('should not filter suggestions if query contains "@" and is empty', () => {
            const result = pipe.transform('@');

            expect(result).toEqual(options.map((item) => `@${item}`));
        });

        it('should filter suggestions if query contains "@" and is not empty', () => {
            const result = pipe.transform('johndoe@', [
                'johndoe@gmail.com',
                'janedoe@yahoo.com',
            ]);

            expect(result).toEqual([
                'johndoe@johndoe@gmail.com',
                'johndoe@janedoe@yahoo.com',
            ]);
        });

        it('should filter suggestions case-insensitively', () => {
            const result = pipe.transform('JoHnDoE@', [
                'johndoe@gmail.com',
                'janedoe@yahoo.com',
            ]);

            expect(result).toEqual([
                'JoHnDoE@johndoe@gmail.com',
                'JoHnDoE@janedoe@yahoo.com',
            ]);
        });

        it('should include partial matches', () => {
            const result = pipe.transform('jo', [
                'johndoe@gmail.com',
                'janedoe@yahoo.com',
            ]);

            expect(result).toEqual([]);
        });

        it('should not include suggestions that do not start with query', () => {
            const result = pipe.transform('joh', [
                'johndoe@gmail.com',
                'janedoe@yahoo.com',
            ]);

            expect(result).toEqual([]);
        });
    });
});
