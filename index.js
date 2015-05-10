var _ = require("underscore");

module.exports = {
  website: {
    assets: "./book",
    js: [
      "script.js"
    ],
    css: [
      "style.css"
    ]
  },
  blocks: {
    modalYoutube: {
      process: function(blk) {
        var buttonHTML, modalHTML, string, parts, src, label, href;

        string = blk.body;
        parts = string.split(" ");
        src = parts[0];
        label = _.last(parts, parts.length - 1).join(" ") || "Video";
        href = this.generator !== "website" ?  src : "#";

        buttonHTML = "<a href=\"" + href + "\" class=\"button play\">" + label + "</a>";
        modalHTML =  "<div class=\"modal modal_video\">"            +
        "<div class=\"modal_content\"><ins class=\"close\"></ins>"  +
        "<div class=\"video\">"                                     +
        "<iframe width=\"560\" height=\"315\" src=\"" + src + "\" frameborder=\"0\" allowfullscreen=\"\"></iframe>" +
        "</div>" +
        "</div>" +
        "</div>";

        return buttonHTML + modalHTML;
      }
    }
  }
};
