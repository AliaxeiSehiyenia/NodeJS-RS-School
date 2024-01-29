import * as fs from 'node:fs';
import path from 'path';
import {fileURLToPath} from 'url';
import {createHash} from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    try {
        const nodeReadStream = fs.createReadStream(filePath, {encoding: 'utf-8'});
        const hash = createHash('sha256').setEncoding('hex');

        hash.on('finish', () => console.log(hash.read()));

        nodeReadStream.pipe(hash);
    } catch (err) {
        throw Error('FS operation failed');
    }
};

await calculateHash();