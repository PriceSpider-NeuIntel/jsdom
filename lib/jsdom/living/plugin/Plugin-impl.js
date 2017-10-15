"use strict";

const idlUtils = require("../generated/utils.js");

exports.implementation = class PluginImpl {
  constructor(plugin, mimeTypeArray) {
    this._description = plugin.description;
    this._filename = plugin.filename;
    this._name = plugin.name;
    this._version = plugin.version;
    this._mimeTypes = plugin.mimeTypes;

    // There is a recursive reference, this array will be passed in empty then populated before use
    this._mimeTypeArray = mimeTypeArray;
  }

  get description() {
    return this._description;
  }
  get filename() {
    return this._filename;
  }
  get name() {
    return this._name;
  }
  get version() {
    return this._version;
  }

  item(index) {
    const mimeTypeName = this._mimeTypes[index];
    return this._mimeTypeArray.namedItem(mimeTypeName);
  }
  namedItem(key) {
    if (key === "") {
      return null;
    }
    for (const mimeType of this._mimeTypes) {
      if (mimeType.name === key) {
        return this._mimeTypeArray.namedItem(mimeType);
      }
    }
    return null;
  }

  get [idlUtils.supportedPropertyIndices]() {
    return this._mimeTypeArray.keys();
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
