import postcssNested from "postcss-nested";
import postcssEach from "postcss-each";
import postcssFor from "postcss-for";
import postcssSimpleVars from "postcss-simple-vars";
import postcssColorMix from "postcss-color-mix";
export default {
  plugins: [
    postcssNested,
    postcssEach({
      plugins: {
        beforeEach: [postcssFor, postcssColorMix],
      },
    }),
    postcssSimpleVars,
  ],
};
