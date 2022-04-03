registerPaint(
  "headerHighlight",
  class {
    static get contextOptions() {
      return { alpha: true };
    }

    paint(ctx) {
      ctx.fillStyle = "hsla(55,90%,60%,1.0)";
      ctx.fillRect(0, 15, 200, 20);
    }
  }
);
