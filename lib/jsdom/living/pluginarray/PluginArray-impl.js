"use strict";

const idlUtils = require("../generated/utils.js");
const Plugin = require("../generated/Plugin.js");

exports.implementation = class PluginArrayImpl {
  constructor(options, mimeTypeArray) {
    this._plugins = [];

    for (let i = 0; i < options.plugins.length; i++) {
      const plugin = options.plugins[i];
      this._plugins.push(Plugin.create(plugin, mimeTypeArray));
    }
  }
  get length() {
    return this._plugins.length;
  }
  item(index) {
    return this._plugins[index] || null;
  }
  namedItem(key) {
    if (key === "") {
      return null;
    }
    for (const plugin of this._plugins) {
      if (plugin.name === key) {
        return plugin;
      }
    }
    return null;
  }
  refresh() {
    // do nothing, list won't change.
  }

  get [idlUtils.supportedPropertyIndices]() {
    return this._plugins.keys();
  }
  get [idlUtils.supportedPropertyNames]() {
    return [];
  }

  // Inherit some useful functions from Array.
  [Symbol.iterator]() {
    return this._plugins[Symbol.iterator]();
  }
  entries() {
    return this._plugins.entries();
  }
  filter(...args) {
    return this._plugins.filter(...args);
  }
  map(...args) {
    return this._plugins.map(...args);
  }
  indexOf(...args) {
    return this._plugins.indexOf(...args);
  }
};
