// Transcrypt'ed from Python, 2022-04-05 08:17:55
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
var __name__ = 'phanterpwa.frontend.components.snippets';
export var DIV = helpers.XmlConstructor.tagger ('div');
export var SPAN = helpers.XmlConstructor.tagger ('span');
export var I = helpers.XmlConstructor.tagger ('i');
export var H2 = helpers.XmlConstructor.tagger ('h2');
export var Centralizer =  __class__ ('Centralizer', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier) {
		var attributes = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						default: attributes [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete attributes.__kwargtrans__;
			}
			var content = tuple ([].slice.apply (arguments).slice (2, __ilastarg0__ + 1));
		}
		else {
			var content = tuple ();
		}
		attributes ['_id'] = 'phanterpwa-snippet-{0}'.format (identifier);
		if (__in__ ('_class', attributes)) {
			attributes ['_class'] = '{0}{1}'.format (attributes ['_class'], ' phanterpwa-snippet-centralizer');
		}
		else {
			attributes ['_class'] = 'phanterpwa-snippet-centralizer';
		}
		self._default_height = attributes.py_get ('default_height', 20);
		if (!__in__ ('_style', attributes)) {
			attributes ['_style'] = 'height:{0}px; min-height: {0}px;'.format (self._default_height);
		}
		self._centralizer_html = DIV (DIV (DIV (DIV (...content, __kwargtrans__ ({_class: 'phanterpwa-centralizer-center'})), __kwargtrans__ ({_class: 'phanterpwa-centralizer-horizontal'})), __kwargtrans__ ({_class: 'phanterpwa-centralizer-vertical'})), __kwargtrans__ ({_class: 'phanterpwa-centralizer-wrapper'}));
		helpers.XmlConstructor.__init__ (self, 'div', false, self._centralizer_html, __kwargtrans__ (attributes));
	});},
	get append () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._centralizer_html.append (value);
	});},
	get insert () {return __get__ (this, function (self, pos, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'pos': var pos = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._centralizer_html.insert (pos, value);
	});}
});
export var PromoOption =  __class__ ('PromoOption', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier, icon, title, description) {
		if (typeof description == 'undefined' || (description != null && description.hasOwnProperty ("__kwargtrans__"))) {;
			var description = null;
		};
		var attributes = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						case 'icon': var icon = __allkwargs0__ [__attrib0__]; break;
						case 'title': var title = __allkwargs0__ [__attrib0__]; break;
						case 'description': var description = __allkwargs0__ [__attrib0__]; break;
						default: attributes [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete attributes.__kwargtrans__;
			}
		}
		else {
		}
		attributes ['_id'] = 'phanterpwa-snippet-{0}'.format (identifier);
		if (__in__ ('_class', attributes)) {
			attributes ['_class'] = '{0}{1}'.format (attributes ['_class'], ' phanterpwa-snippet-promooption link p-col w1p100');
		}
		else {
			attributes ['_class'] = 'phanterpwa-snippet-promooption link p-col w1p100';
		}
		var html = DIV (DIV (icon, H2 (title, __kwargtrans__ ({_class: 'promo-title'})), __kwargtrans__ ({_class: 'promo-icon_and_title'})), __kwargtrans__ (dict ({'_class': 'promo-container'})));
		if (isinstance (description, helpers.XmlConstructor)) {
			html.append (DIV (description, __kwargtrans__ ({_class: 'promo-content'})));
		}
		else if (!(description === null || description == '')) {
			html.append (DIV (description, __kwargtrans__ ({_class: 'promo-content'})));
		}
		var tag = 'div';
		if (__in__ ('_href', attributes)) {
			var tag = 'a';
		}
		helpers.XmlConstructor.__init__ (self, tag, false, html, __kwargtrans__ (attributes));
	});}
});
export var ICombine =  __class__ ('ICombine', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier, icon1, icon2) {
		var attributes = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						case 'icon1': var icon1 = __allkwargs0__ [__attrib0__]; break;
						case 'icon2': var icon2 = __allkwargs0__ [__attrib0__]; break;
						default: attributes [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete attributes.__kwargtrans__;
			}
		}
		else {
		}
		attributes ['_id'] = 'phanterpwa-snippet-{0}'.format (identifier);
		if (__in__ ('_class', attributes)) {
			attributes ['_class'] = '{0}{1}'.format (attributes ['_class'], ' phanterpwa-snippet-icombine');
		}
		else {
			attributes ['_class'] = 'phanterpwa-snippet-icombine';
		}
		if (isinstance (icon1, I) && isinstance (icon2, I)) {
			var html = DIV (SPAN (icon1, __kwargtrans__ ({_class: 'icombine-container-first'})), SPAN (icon2, __kwargtrans__ ({_class: 'icombine-container-last'})), __kwargtrans__ (dict ({'_class': 'icombine-container'})));
		}
		else {
			var html = DIV ('', __kwargtrans__ (dict ({'_class': 'icombine-container'})));
			if (window.PhanterPWA.DEBUG) {
				console.erro ('The icon1 and icon2 must be I instance');
			}
		}
		var tag = 'div';
		if (__in__ ('_href', attributes)) {
			var tag = 'a';
		}
		helpers.XmlConstructor.__init__ (self, tag, false, html, __kwargtrans__ (attributes));
	});}
});

//# sourceMappingURL=phanterpwa.frontend.components.snippets.map