"use strict";

exports.implementation = class NavigatorPluginsImpl {
  javaEnabled() {
    return false;
  }

  getPlugins() {
    return this.plugins;
  }

  getMimeTypes() {
    return this.mimeTypes;
  }
};
