// @ts-check

import CleanCSS from "clean-css";

export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src/");

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
}
