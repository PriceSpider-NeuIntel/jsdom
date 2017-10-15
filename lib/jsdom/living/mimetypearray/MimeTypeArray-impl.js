"use strict";

const idlUtils = require("../generated/utils.js");
const MimeType = require("../generated/MimeType");

exports.implementation = class MimeTypeArrayImpl {
  constructor() {
    this._mimeTypes = [];
  }
  get length() {
    return this._mimeTypes.length;
  }
  item(index) {
    return this._mimeTypes[index] || null;
  }
  namedItem(key) {
    if (key === "") {
      return null;
    }
    for (let i = 0; i < this._mimeTypes.length; i++) {
      const mimeType = this._mimeTypes[i];
      if (mimeType.name === key) {
        return mimeType;
      }
    }
    return null;
  }
  addMimeTypes(options, plugins) {
    this._mimeTypes = [];

    for (let i = 0; i < options.mimeTypes.length; i++) {
      const mimeType = options.mimeTypes[i];
      const pluginName = this.getPluginNameForMimeType(options.plugins, mimeType.type);
      this._mimeTypes.push(MimeType.create(mimeType, plugins.namedItem(pluginName)));
    }
  }

  getPluginNameForMimeType(plugins, mimeType) {
    for (let k = 0; k < plugins.length; k++) {
      const currentPluginInfo = plugins[k];

      for (let j = 0; j < currentPluginInfo.mimeTypes.length; j++) {
        const currentMimeType = currentPluginInfo.mimeTypes[j];

        if (currentMimeType === mimeType) {
          return currentPluginInfo.name;
        }
      }
    }

    return null;
  }

  get [idlUtils.supportedPropertyIndices]() {
    return this._mimeTypes.keys();
  }
  get [idlUtils.supportedPropertyNames]() {
    return [];
  }

  // Inherit some useful functions from Array.
  [Symbol.iterator]() {
    return this._mimeTypes[Symbol.iterator]();
  }
  entries() {
    return this._mimeTypes.entries();
  }
  filter(...args) {
    return this._mimeTypes.filter(...args);
  }
  map(...args) {
    return this._mimeTypes.map(...args);
  }
  indexOf(...args) {
    return this._mimeTypes.indexOf(...args);
  }
};
