import { IFileReader } from "./IFileReader";

export class TextFileReader implements IFileReader {
	fileReader : FileReader

	constructor() {
		this.fileReader = new FileReader()
	}

	read(file: File): void {
		this.fileReader.readAsText(file)
	}
	getResult(callback: (result: string) => void): void {
		this.fileReader.onload = () => {
			callback(this.fileReader.result as string)
		}
	}
}