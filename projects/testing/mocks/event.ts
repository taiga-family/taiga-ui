export class TuiMockEvent<T> extends Event {
    constructor(type: string, options: CustomEventInit<T> & Record<string, any> = {}) {
        super(type, options);

        const event = new Event(type);

        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                Object.defineProperty(event, key, {value: options[key]});
            }
        }

        // @ts-ignore
        return event;
    }
}
