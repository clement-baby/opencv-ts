import { Mat } from './Mat'
import { Size } from './Size'

declare module CLAHE {
  interface CLAHE {
    new(inputParam: number, tileFridSize: Size): CLAHE
    apply(src: Mat, dst: Mat): void
  }
}

export = CLAHE
