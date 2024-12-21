// tgs2json tools !

// Having the .tgs files, I initially thought about using an external tool to convert them into .json for my needs.
// But then I thought, why not write my own script?
// It's quite simple, and here it's: I built tgs2json!

import { inflate } from 'pako';
import fs from 'fs/promises';
import path from 'path';

// Write the decompressed tgs data into a JSON file with the same original name.
async function convertTgsToJson(tgsFilePath) {
    try {
        const fileBuffer = await fs.readFile(tgsFilePath);
        const decompressedData = inflate(fileBuffer, { to: 'string' });

        const fileName = path.basename(tgsFilePath, '.tgs');
        const jsonFilePath = path.join(__dirname, `./json/${fileName}.json`);

        await fs.writeFile(jsonFilePath, decompressedData, 'utf-8');
        console.log(`Converted file: ${jsonFilePath}`);
    } catch (error) {
        console.error('Error occur during the conversion from .tgs to .json:', error);
    }
}

// Retrieve all files with the .tgs extension in a given folder
async function getTgsFiles(directory) {
    try {
        const files = await fs.readdir(directory);
        return files.filter(file => path.extname(file) === '.tgs');
    } catch (error) {
        console.error('Error reading directory:', error);
        return [];
    }
}

// define the path to the directory containing .tgs files
const directoryPath = path.join(__dirname, './assets/tgs/');
const listFiles = await getTgsFiles(directoryPath);

// lùoop through each .tgs file and convert it to .json
for (const file of listFiles) {
    const tgsFilePath = path.join(directoryPath, file);
    await convertTgsToJson(tgsFilePath);
}
