import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(process.stdout);
    } catch (err) {
        throw Error('FS operation failed');
    }
};

await read();