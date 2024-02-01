import fs from 'fs';
import path from 'path';
import {createUnzip} from 'zlib';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const archiveFilePath = path.join(__dirname, 'files', 'archive.gz');

const decompress = async () => {
    try {
        const readStream = fs.createReadStream(archiveFilePath);
        const writeStream = fs.createWriteStream(filePath);
        const unzip = createUnzip();

        readStream.pipe(unzip).pipe(writeStream);

    } catch (err) {
        throw Error('FS operation failed');
    }
};

await decompress();