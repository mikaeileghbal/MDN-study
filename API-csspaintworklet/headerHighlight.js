registerPaint(
  "headerHighlight",
  class {
    static get contextOptions() {
      return { alpha: true };
    }

    paint(ctx, size) {
      ctx.fillStyle = "hsla(55, 90%, 60%, 1.0)";
      //ctx.fillRect(0, size.height / 2, size.width * 0.4, size.height * 0.6);
      ctx.fillRect(0, size.height / 2, 150, 20);
    }
  }
);
