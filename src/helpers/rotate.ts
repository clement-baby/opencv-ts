import cv, { Mat } from "../opencv"

export const rotate = (img: Mat, angle: number): Mat => {
  let dest = new cv.Mat()
  switch (angle) {
  case 90: {
    cv.transpose(img, dest)
    cv.flip(dest, dest, -1)
    break
  }
  case -90: {
    cv.transpose(img, dest)
    cv.flip(dest, dest, 1)
    break
  }
  case 180: {
    cv.flip(img, dest, -1)
    break
  }
  default:
    dest = img
    break
  }

  return dest
}