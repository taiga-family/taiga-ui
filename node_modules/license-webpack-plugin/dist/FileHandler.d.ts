import { Module } from './Module';
interface FileHandler {
    getModule(filename: string | null | undefined): Module | null;
}
export { FileHandler };
