import { Mat } from './Mat'
import { Size } from './Size'

declare module CLAHE {
  interface CLAHE {
    new(inputParam: number, tileGridSize: Size): CLAHE
    apply(src: Mat, dst: Mat): void
    collectGarbage(): void
    getClipLimit(): number
    getTilesGridSize(): Size
    setClipLimit(clipLimit: number): void
    setTilesGridSize(tileGridSize: Size): void
  }
}

export = CLAHE
