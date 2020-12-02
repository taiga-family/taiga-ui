export declare type PromiseCallback<T> = (err: Error, value?: T) => void;
export declare function promisify<T>(resolver: (resolveOrReject: PromiseCallback<T>) => void): Promise<T>;
