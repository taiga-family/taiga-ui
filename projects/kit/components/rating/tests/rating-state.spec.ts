import {TuiRatingState} from '../rating.state';

describe('TuiRatingState', () => {
    it('focused value is primary', () => {
        const state = new TuiRatingState();

        expect(state.currentRate).toEqual(0);
        expect(state.focusedRate).toEqual(0);
        expect(state.selectedRate).toEqual(0);

        state.setFocusedRate(4);

        expect(state.currentRate).toEqual(0);
        expect(state.focusedRate).toEqual(4);
        expect(state.selectedRate).toEqual(4);

        state.setCurrentRate(5);

        expect(state.currentRate).toEqual(5);
        expect(state.focusedRate).toEqual(4);
        expect(state.selectedRate).toEqual(4);
    });

    it('toggle rate', () => {
        const state = new TuiRatingState();

        expect(state.currentRate).toEqual(0);
        expect(state.selectedRate).toEqual(0);

        state.toggleCurrentRate(3);

        expect(state.currentRate).toEqual(3);
        expect(state.selectedRate).toEqual(3);

        state.toggleCurrentRate(3);

        expect(state.currentRate).toEqual(0);
        expect(state.selectedRate).toEqual(0);
    });
});
