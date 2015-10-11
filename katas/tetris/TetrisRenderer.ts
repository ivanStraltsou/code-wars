module Tetris {
  export interface Renderer {
    canvas: any;

    render(): Renderer;
    clean(): Renderer;
  }
}
