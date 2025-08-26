import sharp from 'sharp';

// noinspection JSUnusedGlobalSymbols
export async function tuiCombineSnapshots(
    inputs: string[],
    output: string,
): Promise<void> {
    const data: readonly sharp.Metadata[] = await Promise.all(
        inputs.map(async (img) => sharp(img).metadata()),
    );

    const totalWidth = data.reduce((sum, metadata) => sum + (metadata.width || 0), 0);
    const maxHeight = Math.max(...data.map((metadata) => metadata.height || 0));

    let currentX = 0;

    const composites = inputs.map((img, i) => {
        const left = currentX;

        currentX += data[i]?.width ?? 0;

        return {input: img, top: 0, left};
    });

    await sharp({
        create: {
            width: totalWidth,
            height: maxHeight,
            channels: 4,
            background: {r: 255, g: 255, b: 255, alpha: 1},
        },
    })
        .composite(composites)
        .toFile(output);
}
