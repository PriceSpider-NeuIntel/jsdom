// https://developer.mozilla.org/en-US/docs/Web/API/MimeTypeArray

[Constructor]
interface MimeTypeArray {
  readonly attribute unsigned long length;
  [WebIDL2JSValueAsUnsupported=null] getter MimeType? item(unsigned long index);
  [WebIDL2JSValueAsUnsupported=null] getter MimeType? namedItem(DOMString name);

  void addMimeTypes(object options, PluginArray plugins);
};