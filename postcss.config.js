import postcssNested from "postcss-nested";
import postcssEach from "postcss-each";
import postcssFor from "postcss-for";
import postcssSimpleVars from "postcss-simple-vars";
export default {
  plugins: [postcssNested, postcssEach, postcssFor, postcssSimpleVars],
};
