// https://developer.mozilla.org/en-US/docs/Web/API/MimeTypeArray

[Constructor(object mimeTypeData, PluginArray plugins)]
interface MimeType {
  readonly attribute DOMString type;
  readonly attribute DOMString description;
  readonly attribute DOMString suffixes;
  readonly attribute Plugin enabledPlugin;
};