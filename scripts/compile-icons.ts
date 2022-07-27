import {
    convertAllCompileFileToAllFile,
    deleteAllToCompileFile,
    postPrettierFormat,
    prepareAllToCompileFile,
} from '../projects/icons/scripts';

(async function main(): Promise<void> {
    const projectPath = process.argv[2] || `projects/icons`;
    const iconsSrc = `${projectPath}/src/`;
    const allToCompilePath = `${projectPath}/all-to-compile.ts`;
    const resultAllFile = `${projectPath}/all.ts`;

    prepareAllToCompileFile(iconsSrc, allToCompilePath);
    await convertAllCompileFileToAllFile({
        from: allToCompilePath,
        to: resultAllFile,
    });
    postPrettierFormat(resultAllFile);
    deleteAllToCompileFile(allToCompilePath);
})();
