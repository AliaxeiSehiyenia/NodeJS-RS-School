import { Transform } from 'stream';

const transform = async () => {
    try {
        const transformStream = new Transform({
            transform(chunk, encoding, cb) {
                const array = chunk.toString().split('');
                const lastSymbol = array.pop();
                const reversedString = array.reverse().concat(lastSymbol).join('');

                cb(null, reversedString);
            }
        });

        process.stdin.pipe(transformStream).pipe(process.stdout);

    } catch (err) {
        throw Error('FS operation failed');
    }
};

await transform();