import cv, { Mat } from "../opencv"

export const rotateWithTranspose = (src: Mat, angle: number): Mat => {
  let dest = new cv.Mat()
  switch (angle) {
  case 90: {
    cv.transpose(src, dest)
    cv.flip(dest, dest, -1)
    break
  }
  case -90: {
    cv.transpose(src, dest)
    cv.flip(dest, dest, 1)
    break
  }
  case 180: {
    cv.flip(src, dest, -1)
    break
  }
  default:
    dest = src
    break
  }

  return dest
}