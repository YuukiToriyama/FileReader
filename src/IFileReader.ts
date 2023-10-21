export interface IFileReader {
	read(file: File): void
	getResult(callback: (result: string | ArrayBuffer) => void): void
}