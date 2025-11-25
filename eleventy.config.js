// @ts-check

import CleanCSS from "clean-css";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src/");

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: (data) => (data.draft ? false : data.permalink),
  });
}
