import { Mat } from "../opencv";

declare module AddLib {
    interface RotateWithTranspose {
        rotateWithTranspose(src: Mat, angle: number): Mat
    }
}

export = AddLib