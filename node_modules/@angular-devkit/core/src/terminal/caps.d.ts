/// <reference types="node" />
import Socket = NodeJS.Socket;
export interface StreamCapabilities {
    readable: boolean;
    writable: boolean;
    /**
     * Supports text. This should be true for any streams.
     */
    text: boolean;
    /**
     * Supports colors (16 colors).
     */
    colors: boolean;
    /**
     * Supports 256 colors.
     */
    color256: boolean;
    /**
     * Supports 16 millions (3x8-bit channels) colors.
     */
    color16m: boolean;
    /**
     * Height of the terminal. If the stream is not tied to a terminal, will be null.
     */
    rows: number | null;
    /**
     * Width of the terminal. If the stream is not tied to a terminal, will be null.
     */
    columns: number | null;
}
export declare function getCapabilities(stream: Socket, isTerminalStream?: boolean): StreamCapabilities;
