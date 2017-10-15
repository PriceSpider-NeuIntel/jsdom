// https://developer.mozilla.org/en-US/docs/Web/API/MimeTypeArray

[Constructor(object plugin, MimeTypeArray mimeTypeArray)]
interface Plugin {
  readonly attribute DOMString description;
  readonly attribute DOMString filename;
  readonly attribute DOMString name;
  readonly attribute DOMString version;

  [WebIDL2JSValueAsUnsupported=null] getter MimeType? item(unsigned long index);
  [WebIDL2JSValueAsUnsupported=null] getter MimeType? namedItem(DOMString name);
};