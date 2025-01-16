# tgs2json

`tgs2json` is a command-line tool to convert `.tgs` files into `.json` files quickly and easily.

---

## Installation

Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Install via NPM

To install globally, run:

```sh
npm install tgs2json-cli -g
```

### Clone the Repository

Alternatively, you can clone this repository and set it up locally:

```sh
git clone https://github.com/nullhq/tgs2json.git
cd tgs2json
```

To make the script globally executable, run:

```sh
npm link
npm install -g
```

---

## Usage

### Convert a Specific `.tgs` File

To convert a single `.tgs` file to `.json`, use:

```sh
tgs2json your_file.tgs
```

### Convert All `.tgs` Files in the Current Directory

To convert all `.tgs` files in the current folder, use:

```sh
tgs2json *
```

### Specify an Output Folder

You can specify an output folder for the `.json` files using the `-o` option:

```sh
tgs2json -o output_folder your_file.tgs
```

or:

```sh
tgs2json -o output_folder *
```

If the folder doesn’t exist, it'll be created automatically.

---

## Example

Suppose you've a file `example.tgs` in your current directory and want to convert it to a `.json` file in an `output` folder:

```sh
tgs2json -o output example.tgs
```

To convert all `.tgs` files in the current directory and place the `.json` files in the `output` folder:

```sh
tgs2json -o output *
```

---

## Dependencie

This project uses the following module:
- **`pako`**: For decompressing `.tgs` files.
---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to contribute or report any issues! 🛠️