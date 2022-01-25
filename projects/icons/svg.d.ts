/**
 * @caretaker note:
 * needed to compile files, where source code has:
 * `import tuiIconAddRowLarge from './src/tuiIconAddRowLarge.svg';`
 */
declare module '*.svg' {
    const content: any;
    export default content;
}
