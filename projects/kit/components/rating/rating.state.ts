export class TuiRatingState {
    private focused: number = 0;
    private current: number = 0;

    get currentRate() {
        return this.current;
    }

    get focusedRate() {
        return this.focused;
    }

    get selectedRate() {
        return this.focused || this.current;
    }

    toggleCurrentRate(rate: number) {
        this.current = this.current === rate ? 0 : rate;

        if (this.current === 0) {
            this.focused = 0;
        }
    }

    setCurrentRate(rate: number) {
        this.current = rate || 0;
    }

    setFocusedRate(rate: number) {
        this.focused = rate || 0;
    }
}
