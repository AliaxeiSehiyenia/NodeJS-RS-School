import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    try {
        const writeStream = fs.createWriteStream(filePath);
        process.stdin.pipe(writeStream);
    } catch (err) {
        throw Error('FS operation failed');
    }
};

await write();