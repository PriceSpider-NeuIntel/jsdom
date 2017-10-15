"use strict";

exports.implementation = class MimeTypeImpl {
  constructor(mimeType, plugin) {
    this._type = mimeType.type;
    this._description = mimeType.description;
    this._suffixes = mimeType.suffixes;
    this._enabledPlugin = plugin;
  }

  get type() {
    return this._type;
  }
  get description() {
    return this._description;
  }
  get suffixes() {
    return this._suffixes;
  }
  get enabledPlugin() {
    return this._enabledPlugin;
  }
};
