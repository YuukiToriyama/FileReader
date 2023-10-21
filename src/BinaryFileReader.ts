import { IFileReader } from "./IFileReader"

export class BinaryFileReader implements IFileReader {
	fileReader: FileReader

	constructor() {
		this.fileReader = new FileReader()
	}

	read(file: File): void {
		this.fileReader.readAsArrayBuffer(file)
	}

	getResult(callback: (result: ArrayBuffer) => void): void {
		this.fileReader.onload = () => {
			callback(this.fileReader.result as ArrayBuffer)
		} 
	}
}