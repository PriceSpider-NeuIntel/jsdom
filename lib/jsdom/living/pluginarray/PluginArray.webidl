// https://developer.mozilla.org/en-US/docs/Web/API/MimeTypeArray

[Constructor(object options, MimeTypeArray mimeTypeArray)]
interface PluginArray {
  readonly attribute unsigned long length;
  [WebIDL2JSValueAsUnsupported=null] getter Plugin? item(unsigned long index);
  [WebIDL2JSValueAsUnsupported=null] getter Plugin? namedItem(DOMString name);

  void refresh();
};