import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: "#EFBD48",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./logo.png",
    fullDecal: "./logo.png",
    texture: null, 
    // texture: "./prod1.jpg"
})

export default state;