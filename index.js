var _ = require("underscore");

/**
 * Parses the string and finds the parts of it depending how it is created
 *
 * @param {String} string
 * @returns {Object} object which contains parts href, label, header and buttonHref
 */
var getParts = function (string) {
  var hasHeader, parts, label, href, header;

  hasHeader = false;
  parts = string.split("|");

  if (parts.length > 1) {
    hasHeader = true;
  } else {
    parts = string.split(" ");
  }
  //Get video href
  href = parts[0];
  href = href.replace("watch?v=", "v/");
  //Get button label
  if (hasHeader) {
    label = parts[1];
  } else {
    label = _.last(parts, parts.length - 1).join(" ");
  }

  if (_.isString(label) === false || label.length === 0) {
    label = "Video";
  }
  //Get header
  header = hasHeader ? parts[2] : "";

  if (_.isString(header) === false || header.length === "") {
    header = "";
  }

  return {
    href        : href,
    label       : label,
    header      : header,
    buttonHref  : this.generator != "website" ? "#" : href
  };

};

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
        parts = getParts(string);

        buttonHTML = "<a href=\"" + parts.buttonHref + "\" class=\"button play\">" + parts.label + "</a>";
        modalHTML =  "<div class=\"modal modal_video\">"            +
        "<div class=\"modal_content\"><div class=\"modal_header\">" + parts.header + "</div><ins class=\"close\"></ins>"  +
        "<div class=\"video\">"                                     +
        "<iframe width=\"560\" height=\"315\" src=\"" + parts.href + "\" frameborder=\"0\" allowfullscreen=\"\"></iframe>" +
        "</div>" +
        "</div>" +
        "</div>";

        return "<div class=\"modal_parent\">" + buttonHTML + modalHTML + "</div>";
      }
    }
  }
};
