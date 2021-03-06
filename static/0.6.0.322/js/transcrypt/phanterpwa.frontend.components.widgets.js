// Transcrypt'ed from Python, 2022-04-05 08:17:56
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as datetimepicker from './phanterpwa.frontend.components.datetimepicker.js';
import * as masks from './phanterpwa.frontend.fmasks.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
var __name__ = 'phanterpwa.frontend.components.widgets';
export var I18N = helpers.I18N;
export var XML = helpers.XML;
export var CONCATENATE = helpers.CONCATENATE;
export var FORM = helpers.XmlConstructor.tagger ('form', false);
export var SPAN = helpers.XmlConstructor.tagger ('span', false);
export var DIV = helpers.XmlConstructor.tagger ('div', false);
export var I = helpers.XmlConstructor.tagger ('i', false);
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var HR = helpers.XmlConstructor.tagger ('hr', true);
export var LABEL = helpers.XmlConstructor.tagger ('label', false);
export var TEXTAREA = helpers.XmlConstructor.tagger ('textarea', false);
export var SELECT = helpers.XmlConstructor.tagger ('select', false);
export var OPTION = helpers.XmlConstructor.tagger ('option', false);
export var UL = helpers.XmlConstructor.tagger ('ul', false);
export var LI = helpers.XmlConstructor.tagger ('li', false);
export var TH = helpers.XmlConstructor.tagger ('th', false);
export var TD = helpers.XmlConstructor.tagger ('td', false);
export var TR = helpers.XmlConstructor.tagger ('tr', false);
export var SCRIPT = helpers.XmlConstructor.tagger ('script', false);
export var TABLE = helpers.XmlConstructor.tagger ('table', false);
export var STRONG = helpers.XmlConstructor.tagger ('strong', false);
export var Widget =  __class__ ('Widget', [helpers.XmlConstructor], {
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
		self.actived = false;
		self.identifier = identifier;
		if (self.identifier === undefined || self.identifier === null) {
			var __except0__ = ValueError ('The identifier is invalid!');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._identifier = window.PhanterPWA.get_id (identifier);
		attributes ['_id'] = 'phanterpwa-widget-{0}'.format (self.identifier);
		attributes ['_phanterpwa-widget'] = self.identifier;
		if (__in__ ('_class', attributes)) {
			attributes ['_class'] = '{0}{1}'.format (attributes ['_class'], ' phanterpwa-widget');
		}
		else {
			attributes ['_class'] = 'phanterpwa-widget';
		}
		window.PhanterPWA._thewidgets [self._identifier] = self;
		content.append (SCRIPT ("window.PhanterPWA._thewidgets['{0}'].start()".format (self._identifier), __kwargtrans__ ({_type: 'text/javascript'})));
		helpers.XmlConstructor.__init__ (self, 'phanterpwa-widget', false, ...content, __kwargtrans__ (attributes));
		self.target_selector = '#phanterpwa-widget-{0}'.format (self.identifier);
		window.PhanterPWA.Request.add_widget (self);
	});},
	get _reload () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(window.PhanterPWA.check_event_namespace ($ (self.target_selector), 'phanterpwa_widget', self.identifier))) {
			$ (self.target_selector).off ('phanterpwa_widget.{0}'.format (self.identifier)).on ('phanterpwa_widget.{0}'.format (self.identifier), (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self.reload ();
			}));
			$ (self.target_selector).trigger ('phanterpwa_widget');
		}
	});},
	get get_message_error () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._message_error !== null) {
			return self._message_error;
		}
		else {
			return '';
		}
	});},
	get set_message_error () {return __get__ (this, function (self, message_error) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'message_error': var message_error = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (message_error !== null) {
			$ (self.target_selector).find ('.phanterpwa-widget-message_error').html (message_error);
			$ (self.target_selector).find ('.phanterpwa-widget-wrapper').addClass ('has_error');
		}
		self._message_error = message_error;
	});},
	get del_message_error () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.set_message_error (null);
		$ (self.target_selector).find ('.phanterpwa-widget-wrapper').removeClass ('has_error');
	});},
	get reload () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (window.PhanterPWA.DEBUG) {
			console.info ('the reload not used');
		}
	});},
	get start () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (window.PhanterPWA.DEBUG) {
			console.info ('the start not used');
		}
	});}
});
export var Input =  __class__ ('Input', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self._label = parameters.py_get ('label', null);
		self._placeholder = parameters.py_get ('placeholder', null);
		self._name = parameters.py_get ('name', null);
		self._value = parameters.py_get ('value', '');
		self._icon = parameters.py_get ('icon', null);
		self._message_error = parameters.py_get ('message_error', null);
		self._can_empty = parameters.py_get ('can_empty', false);
		self._validator = parameters.py_get ('validators', null);
		self._wear = parameters.py_get ('wear', 'material');
		self._kind = parameters.py_get ('kind', 'text');
		self._mask = parameters.py_get ('mask', '');
		self._form = parameters.py_get ('form', null);
		self._format = parameters.py_get ('format', null);
		self._icon_on_click = parameters.py_get ('icon_on_click', null);
		self._onload = parameters.py_get ('onLoad', null);
		self._checker = parameters.py_get ('checker', true);
		self._disabled = parameters.py_get ('disabled', null);
		self._on_date_datetime_choice = parameters.py_get ('onDateorDatetimeChoice', null);
		var wrapper_attr = dict ({'_class': 'phanterpwa-widget-wrapper phanterpwa-widget-input-wrapper phanterpwa-widget-wear-{0}'.format (self._wear)});
		parameters ['_id'] = identifier;
		if (__in__ ('_class', parameters)) {
			parameters ['_class'] = '{0}{1}'.format (parameters ['_class'], ' phanterpwa-widget-input');
		}
		else {
			parameters ['_class'] = 'phanterpwa-widget-input';
		}
		var n_type = ['date', 'datetime', 'password', 'hidden'];
		if (__in__ (self._kind, n_type)) {
			if (self._kind == 'datetime') {
				self._type = 'text';
				if (self._format === null) {
					self._format = 'yyyy-MM-dd HH:ss:mm';
				}
				self._mask = masks.date_and_datetime_to_maks (self._format);
			}
			else if (self._kind == 'date') {
				self._type = 'text';
				if (self._format === null) {
					self._format = 'yyyy-MM-dd';
				}
				self._mask = masks.date_and_datetime_to_maks (self._format);
			}
			else if (self._kind == 'password') {
				self._type = 'password';
			}
			else if (self._kind == 'hidden') {
				parameters ['_class'] = '{0}{1}'.format (parameters ['_class'], ' e-display_hidden');
			}
		}
		else {
			self._type = 'text';
		}
		if (self._mask == 'fone') {
			self._maks = masks.maskFone (self._value);
		}
		var label = '';
		if (self._label !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_label');
			var label = LABEL (self._label, __kwargtrans__ ({_for: 'phanterpwa-widget-input-input-{0}'.format (identifier)}));
		}
		if (self._message_error !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_error');
		}
		var xml_icon = '';
		if (self._icon !== null) {
			var xml_icon = DIV (self._icon, __kwargtrans__ ({_class: 'phanterpwa-widget-icon-wrapper icon_button wave_on_click'}));
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_icon');
		}
		if (self._value !== '') {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_value');
		}
		if (self._mask !== '' && self._mask !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_mask');
		}
		var checker = '';
		if (self._checker) {
			var checker = DIV (I (__kwargtrans__ ({_class: 'fas fa-check'})), __kwargtrans__ ({_class: 'phanterpwa-widget-check'}));
			if (self._disabled !== null) {
				var checker = DIV (I (__kwargtrans__ ({_class: 'fas fa-lock'})), __kwargtrans__ ({_class: 'phanterpwa-widget-check'}));
			}
		}
		var html = DIV (INPUT (__kwargtrans__ (dict ({'_id': 'phanterpwa-widget-input-input-{0}'.format (identifier), '_class': 'phanterpwa-widget-input-input', '_name': self._name, '_value': self._value, '_placeholder': self._placeholder, '_disabled': self._disabled, '_type': self._type, '_data-validators': JSON.stringify (self._validator), '_data-form': self._form}))), label, checker, xml_icon, DIV (self.get_message_error (), __kwargtrans__ ({_class: 'phanterpwa-widget-message_error phanterpwa-widget-input-message_error'})), __kwargtrans__ (wrapper_attr));
		Widget.__init__ (self, identifier, html, __kwargtrans__ (parameters));
	});},
	get get_message_error () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._message_error !== null) {
			return self._message_error;
		}
		else {
			return '';
		}
	});},
	get set_message_error () {return __get__ (this, function (self, message_error) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'message_error': var message_error = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (message_error !== null) {
			$ (self.target_selector).find ('.phanterpwa-widget-message_error').html (message_error);
			$ (self.target_selector).find ('.phanterpwa-widget-wrapper').addClass ('has_error');
		}
		self._message_error = message_error;
	});},
	get del_message_error () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.set_message_error (null);
		$ (self.target_selector).find ('.phanterpwa-widget-wrapper').removeClass ('has_error');
	});},
	get validate () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (callable (self._validator)) {
			self._validator (self);
		}
	});},
	get _add_div_animation () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var wrapper = el.find ('.phanterpwa-widget-wrapper');
		if (wrapper.hasClass ('phanterpwa-widget-wear-material')) {
			if (wrapper.find ('.material-widgets-animation-onfocus').length == 0) {
				wrapper.find ('input').after (CONCATENATE (HR (__kwargtrans__ ({_class: 'material-widgets-animation-offfocus'})), DIV (__kwargtrans__ ({_class: 'material-widgets-animation-onfocus'}))).jquery ());
			}
		}
	});},
	get _check_value () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		if (el.val () !== '') {
			p.addClass ('has_value').trigger ('keyup');
		}
		else {
			p.removeClass ('has_value');
		}
	});},
	get _on_click_icon () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (callable (self._icon_on_click)) {
			self._icon_on_click (el);
		}
		else if (self._kind == 'date') {
			self._datetimepicker = datetimepicker.Datepickers (self.target_selector, __kwargtrans__ (dict ({'date_type': 'date', 'format': self._format, 'onChoice': self._on_date_datetime_choice, 'id_input_target': $ (self.target_selector).find ('input')})));
			self._datetimepicker.start ();
		}
		else if (self._kind == 'datetime') {
			self._datetimepicker = datetimepicker.Datepickers (self.target_selector, __kwargtrans__ (dict ({'date_type': 'datetime', 'format': self._format, 'onChoice': self._on_date_datetime_choice, 'id_input_target': $ (self.target_selector).find ('input')})));
			self._datetimepicker.start ();
		}
		else if (self._kind == 'password') {
			var el = $ ('#phanterpwa-widget-input-input-{0}'.format (self.identifier));
			if (el.attr ('type') == 'password') {
				el.attr ('type', 'text');
			}
			else {
				el.attr ('type', 'password');
			}
		}
	});},
	get _on_click_label () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		if (!(p.hasClass ('focus'))) {
			p.find ('input').focus ().trigger ('focus');
		}
	});},
	get _switch_focus () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		p.removeClass ('has_error');
		if (el.is (':focus')) {
			$ ('.phanterpwa-widget-wrapper').removeClass ('focus').removeClass ('pre_focus');
			p.addClass ('focus');
		}
		else {
			p.removeClass ('focus');
		}
		self._check_value (el);
	});},
	get _remove_focus () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		if (el.is (':focus')) {
			p.addClass ('focus');
		}
		else {
			p.removeClass ('focus');
		}
		self._check_value (el);
	});},
	get reload () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.start ();
	});},
	get _binds () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var target = $ (self.target_selector);
		self._add_div_animation (target);
		target.find ('input').off ('focus.phanterpwa-event-input_materialize').on ('focus.phanterpwa-event-input_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._switch_focus (this);
		}));
		target.find ('input').off ('focusout.phanterpwa-event-input_materialize').on ('focusout.phanterpwa-event-input_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._switch_focus (this);
		}));
		target.find ('input').off ('change.phanterpwa-event-input_materialize').on ('change.phanterpwa-event-input_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._check_value (this);
		}));
		target.find ('label').off ('click.phanterpwa-event-input_materialize, touchstart.phanterpwa-event-input_materialize').on ('click.phanterpwa-event-input_materialize, touchstart.phanterpwa-event-input_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._on_click_label (this);
		}));
		if (self._mask !== '' && self._mask !== null) {
			if (self._mask == 'fone') {
				masks.Mask (target.find ('input') ['selector'], (function __lambda__ (val) {
					if (arguments.length) {
						var __ilastarg0__ = arguments.length - 1;
						if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
							var __allkwargs0__ = arguments [__ilastarg0__--];
							for (var __attrib0__ in __allkwargs0__) {
								switch (__attrib0__) {
									case 'val': var val = __allkwargs0__ [__attrib0__]; break;
								}
							}
						}
					}
					else {
					}
					return masks.maskFone (val);
				}));
			}
			else {
				masks.Mask (target.find ('input') ['selector'], (function __lambda__ (val) {
					if (arguments.length) {
						var __ilastarg0__ = arguments.length - 1;
						if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
							var __allkwargs0__ = arguments [__ilastarg0__--];
							for (var __attrib0__ in __allkwargs0__) {
								switch (__attrib0__) {
									case 'val': var val = __allkwargs0__ [__attrib0__]; break;
								}
							}
						}
					}
					else {
					}
					return masks.baseCustom (val, self._mask);
				}));
			}
		}
		if (self._icon !== null) {
			target.find ('.phanterpwa-widget-icon-wrapper').off ('click.phanterpwa-widget-icon-wrapper').on ('click.phanterpwa-widget-icon-wrapper', (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self._on_click_icon (this);
			}));
		}
		if (callable (self._onload)) {
			self._onload (target);
		}
	});},
	get set_disabled () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		$ ('#phanterpwa-widget-input-input-{0}'.format (self.identifier)).attr ('disabled', 'disabled').prop ('disabled');
		self._disabled = 'disabled';
		if (self._checker) {
			$ ('#phanterpwa-widget-input-input-{0}'.format (self.identifier)).parent ().find ('.phanterpwa-widget-check').html (I (__kwargtrans__ ({_class: 'fas fa-lock'})).jquery ());
		}
	});},
	get set_enabled () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		$ ('#phanterpwa-widget-input-input-{0}'.format (self.identifier)).removeAttr ('disabled');
		self._disabled = null;
		if (self._checker) {
			$ ('#phanterpwa-widget-input-input-{0}'.format (self.identifier)).parent ().find ('.phanterpwa-widget-check').html (I (__kwargtrans__ ({_class: 'fas fa-check'})).jquery ());
		}
	});},
	get start () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._binds ();
	});},
	get set_value () {return __get__ (this, function (self, value) {
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
		var el = $ ('#phanterpwa-widget-input-input-{0}'.format (self.identifier)).val (value);
		self._value = value;
		self._check_value (el);
		self.reload ();
	});},
	get value () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._value = $ ('#phanterpwa-widget-input-input-{0}'.format (self.identifier)).val ();
		return self._value;
	});}
});
export var Select =  __class__ ('Select', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self.identifier = identifier;
		self._alias_value = '';
		self._value = parameters.py_get ('value', '');
		self._data_set (parameters.py_get ('data_set', []));
		self._label = parameters.py_get ('label', null);
		self._placeholder = parameters.py_get ('placeholder', null);
		self._name = parameters.py_get ('name', null);
		self._editable = parameters.py_get ('editable', false);
		self._icon = parameters.py_get ('icon', null);
		self._message_error = parameters.py_get ('message_error', null);
		self._can_empty = parameters.py_get ('can_empty', false);
		self._validator = parameters.py_get ('validators', null);
		self._wear = parameters.py_get ('wear', 'material');
		self._form = parameters.py_get ('form', null);
		self._icon_option = parameters.py_get ('icon_option', I (__kwargtrans__ ({_class: 'far fa-circle'})));
		self._icon_option_selected = parameters.py_get ('icon_option_selected', I (__kwargtrans__ ({_class: 'far fa-dot-circle'})));
		self._icon_plus = parameters.py_get ('icon_plus', I (__kwargtrans__ ({_class: 'fas fa-plus'})));
		self._icon_confirm = parameters.py_get ('icon_confirm', I (__kwargtrans__ ({_class: 'fas fa-check'})));
		self._icon_check = parameters.py_get ('icon_check', I (__kwargtrans__ ({_class: 'fas fa-check'})));
		self._on_click_new = parameters.py_get ('on_click_new_button', null);
		self.set_z_index (parameters.py_get ('z_index', null));
		self.set_recalc_on_scroll (parameters.py_get ('recalc_on_scroll', true));
		var xml_icon = '';
		if (self._icon !== '') {
			var xml_icon = DIV (self._icon, __kwargtrans__ ({_class: 'phanterpwa-widget-icon-wrapper'}));
		}
		var wrapper_attr = dict ({'_class': 'phanterpwa-widget-wrapper phanterpwa-widget-select-wrapper phanterpwa-widget-wear-{0}'.format (self._wear)});
		parameters ['_id'] = identifier;
		if (__in__ ('_class', parameters)) {
			parameters ['_class'] = '{0}{1}'.format (parameters ['_class'], ' phanterpwa-widget-select');
		}
		else {
			parameters ['_class'] = 'phanterpwa-widget-select';
		}
		var label = '';
		if (self._label !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_label');
			var label = LABEL (self._label, __kwargtrans__ ({_for: 'phanterpwa-widget-select-input-{0}'.format (identifier), _class: 'phanterpwa-widget-select-label'}));
		}
		if (self._message_error !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_error');
		}
		if (self._icon !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_icon');
		}
		if (self._value !== '') {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_value');
		}
		var select = SELECT (__kwargtrans__ ({_class: 'phanterpwa-widget-select-select', _name: self._name}));
		var table = TABLE (__kwargtrans__ ({_class: 'phanterpwa-widget-select-options-wrapper'}));
		self._xml_modal = table;
		self._xml_select = select;
		self._create_xml_select ();
		self._create_xml_modal ();
		var html = DIV (INPUT (__kwargtrans__ (dict ({'_id': 'phanterpwa-widget-select-input-{0}'.format (identifier), '_value': self._alias_value, '_placeholder': self._placeholder, '_disabled': 'disabled', '_data-validators': JSON.stringify (self._validator), '_data-form': self._form, '_name': self._name}))), label, DIV (I (__kwargtrans__ ({_class: 'fas fa-angle-down'})), __kwargtrans__ ({_class: 'phanterpwa-widget-select-caret'})), xml_icon, DIV (I (__kwargtrans__ ({_class: 'fas fa-check'})), __kwargtrans__ ({_class: 'phanterpwa-widget-check'})), DIV (__kwargtrans__ ({_class: 'phanterpwa-widget-select-touchpad', _tabindex: '0'})), self._xml_select, DIV (self.get_message_error (), __kwargtrans__ ({_class: 'phanterpwa-widget-message_error phanterpwa-widget-select-message_error'})), __kwargtrans__ (wrapper_attr));
		Widget.__init__ (self, identifier, html, __kwargtrans__ (parameters));
	});},
	get set_recalc_on_scroll () {return __get__ (this, function (self, value) {
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
		if (isinstance (value, bool)) {
			self._recalc_on_scroll = value;
		}
		else {
			console.error ('The recalc_on_scroll must be boolean!');
		}
	});},
	get set_z_index () {return __get__ (this, function (self, value) {
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
		if (str (value).isdigit ()) {
			self._z_index = value;
		}
		else if (value === null) {
			self._z_index = null;
		}
		else {
			self._z_index = null;
			console.error ('The z_index must be integer or None!');
		}
	});},
	get _data_set () {return __get__ (this, function (self, data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var valid_data = true;
		self._data = [];
		self._data_dict = dict ({});
		if (isinstance (data, list)) {
			var new_data = [];
			for (var vdata of data) {
				if (isinstance (vdata, str)) {
					if (self._value == vdata) {
						self._alias_value = vdata;
					}
					self._data_dict [vdata] = vdata;
					new_data.append ([vdata, vdata]);
				}
				else if (len (vdata) !== 2) {
					var valid_data = false;
				}
				else {
					if (self._value == vdata [0]) {
						self._alias_value = vdata [1];
					}
					self._data_dict [vdata [0]] = vdata [1];
					new_data.append ([vdata [0], vdata [1]]);
				}
			}
			if (!(valid_data)) {
				var __except0__ = ValueError ('The data parameter of widget "{0}" is invalid!'.format (self.identifier));
				__except0__.__cause__ = null;
				throw __except0__;
			}
			else {
				self._data = new_data;
			}
		}
		else if (isinstance (data, dict)) {
			var new_data = [];
			for (var vdata of data.py_keys ()) {
				new_data.append ([vdata, data [vdata]]);
				if (self._value == vdata) {
					self._alias_value = data [vdata];
				}
			}
			self._data = new_data;
			self._data_dict = data;
		}
	});},
	get set_new_data_set () {return __get__ (this, function (self, data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._data_set (data);
		self._create_xml_select ();
		self._create_xml_modal ();
	});},
	get _create_xml_select () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var has_default = false;
		var select = SELECT (__kwargtrans__ (dict ({'_class': 'phanterpwa-widget-select-select', '_name': self._name})));
		if (self._data !== []) {
			for (var vdata of self._data) {
				if (self._value !== '') {
					if (vdata [0] == self._value) {
						var has_default = true;
						select.append (OPTION (vdata [1], __kwargtrans__ ({_value: vdata [0], _selected: 'selected'})));
					}
					else {
						select.append (OPTION (vdata [1], __kwargtrans__ ({_value: vdata [0]})));
					}
				}
				else {
					select.append (OPTION (vdata [1], __kwargtrans__ ({_value: vdata [0]})));
				}
			}
			if (self._can_empty) {
				if (self._placeholder !== null) {
					select.insert (0, OPTION (self._placeholder, __kwargtrans__ ({_value: '', _selected: (!(has_default) ? 'selected' : null)})));
				}
				else {
					select.insert (0, OPTION ('', __kwargtrans__ ({_value: '', _selected: (!(has_default) ? 'selected' : null)})));
				}
			}
		}
		self._xml_select = select;
	});},
	get _create_xml_modal () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var table = TABLE (__kwargtrans__ ({_class: 'phanterpwa-widget-select-options-wrapper'}));
		if (self._data !== []) {
			if (self._can_empty) {
				if (self._value === '') {
					var icon_empty = DIV (self._icon_option_selected, __kwargtrans__ ({_class: 'phanterpwa-widget-select-li-icon'}));
				}
				else {
					var icon_empty = DIV (self._icon_option, __kwargtrans__ ({_class: 'phanterpwa-widget-select-li-icon'}));
				}
				table.append (TR (TD (SPAN (I18N ('Empty')), icon_empty, __kwargtrans__ (dict ({'_data-value': '', '_data-target': 'phanterpwa-widget-select-input-{0}'.format (self.identifier), '_data-text': '', '_class': 'phanterpwa-widget-select-li-option empty'})))));
			}
			for (var vdata of self._data) {
				if (self._value !== '') {
					if (vdata [0] == self._value) {
						table.append (TR (TD (SPAN (vdata [1]), DIV (self._icon_option_selected, __kwargtrans__ ({_class: 'phanterpwa-widget-select-li-icon'})), __kwargtrans__ (dict ({'_data-value': vdata [0], '_data-text': vdata [1], '_data-target': 'phanterpwa-widget-select-input-{0}'.format (self.identifier), '_class': 'phanterpwa-widget-select-li-option selected'})))));
					}
					else {
						table.append (TR (TD (SPAN (vdata [1]), DIV (self._icon_option, __kwargtrans__ ({_class: 'phanterpwa-widget-select-li-icon'})), __kwargtrans__ (dict ({'_data-value': vdata [0], '_data-text': vdata [1], '_data-target': 'phanterpwa-widget-select-input-{0}'.format (self.identifier), '_class': 'phanterpwa-widget-select-li-option'})))));
					}
				}
				else {
					table.append (TR (TD (SPAN (vdata [1]), DIV (self._icon_option, __kwargtrans__ ({_class: 'phanterpwa-widget-select-li-icon'})), __kwargtrans__ (dict ({'_data-value': vdata [0], '_data-text': vdata [1], '_data-target': 'phanterpwa-widget-select-input-{0}'.format (self.identifier), '_class': 'phanterpwa-widget-select-li-option'})))));
				}
			}
			var icon_placeholder = DIV (DIV (DIV (self._icon_plus, __kwargtrans__ ({_class: 'link phanterpwa-widget-select-li-icon_plus'})), DIV (INPUT (__kwargtrans__ ({_class: 'phanterpwa-widget-select-li-input'})), DIV (self._icon_confirm, __kwargtrans__ ({_class: 'phanterpwa-widget-select-li-icon_confirm link'})), __kwargtrans__ ({_class: 'phanterpwa-widget-select-li-input-editable'})), __kwargtrans__ ({_class: 'phanterpwa-widget-select-li-input-editable-wrapper'})), __kwargtrans__ ({_class: 'phanterpwa-widget-select-li-icon_plus-wrapper'}));
			if (self._placeholder !== null) {
				if (self._editable) {
					table.insert (0, TR (TD (SPAN (self._placeholder, __kwargtrans__ ({_class: 'phanterpwa-widget-select-placeholder'})), icon_placeholder, __kwargtrans__ (dict ({'_data-value': '', '_data-target': 'phanterpwa-widget-select-input-{0}'.format (self.identifier), '_data-text': '', '_class': 'phanterpwa-widget-select-li-title has_editable'})))));
				}
				else {
					table.insert (0, TR (TD (SPAN (self._placeholder, __kwargtrans__ ({_class: 'phanterpwa-widget-select-placeholder'})), '', __kwargtrans__ (dict ({'_data-value': '', '_data-target': 'phanterpwa-widget-select-input-{0}'.format (self.identifier), '_data-text': '', '_class': 'phanterpwa-widget-select-li-title'})))));
				}
			}
			else if (self._editable) {
				table.insert (0, TR (TD (SPAN (self._placeholder, __kwargtrans__ ({_class: 'phanterpwa-widget-select-placeholder'})), icon_placeholder, __kwargtrans__ (dict ({'_data-value': '', '_data-target': 'phanterpwa-widget-select-input-{0}'.format (self.identifier), '_data-text': '', '_class': 'phanterpwa-widget-select-li-title has_editable'})))));
			}
		}
		self._xml_modal = table;
	});},
	get validate () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (callable (self._validator)) {
			self._validator (self);
		}
		self.focus = false;
		self.has_val = null;
	});},
	get _add_div_animation () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var wrapper = el.find ('.phanterpwa-widget-wrapper');
		if (wrapper.hasClass ('phanterpwa-widget-wear-material')) {
			if (wrapper.find ('.material-widgets-animation-onfocus').length == 0) {
				wrapper.find ('input').after (CONCATENATE (HR (__kwargtrans__ ({_class: 'material-widgets-animation-offfocus'})), DIV (__kwargtrans__ ({_class: 'material-widgets-animation-onfocus'}))).jquery ());
			}
		}
	});},
	get _check_value () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		if (p.find ('input').val () !== '') {
			p.addClass ('has_value');
		}
		else {
			p.removeClass ('has_value');
		}
		p.find ('input').trigger ('keyup');
	});},
	get _on_click_label () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		self._switch_focus (el);
	});},
	get _after_modal_close () {return __get__ (this, function (self, p) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'p': var p = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var parent = $ (p).removeClass ('focus');
		self._check_value (parent.find ('input'));
	});},
	get _switch_pre_focus () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		p.removeClass ('has_error');
		if (p.hasClass ('pre_focus')) {
			p.removeClass ('pre_focus');
		}
		else {
			$ ('.phanterpwa-widget-select-wrapper').removeClass ('pre_focus');
			p.addClass ('pre_focus');
		}
	});},
	get open_modal () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.modal = PseudoModal ('#phanterpwa-widget-select-input-{0}'.format (self.identifier), self._xml_modal, __kwargtrans__ ({on_close: (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._after_modal_close (el);
		}), width: '100%', z_index: self._z_index, recalc_on_scroll: self._recalc_on_scroll}));
		self.modal.start ();
		self._binds_modal_content ();
	});},
	get _switch_focus () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		var stat_modal = $ ('#phanterpwa-widget-select-input-{0}'.format (self.identifier)).attr ('phanterpwa-widget-pseudomodal');
		if (p.hasClass ('focus')) {
			p.removeClass ('focus');
			p.removeClass ('pre_focus');
			if (self.modal !== null && self.modal !== undefined) {
				if (callable (self.modal.close)) {
					self.modal.close ();
				}
			}
		}
		else if (stat_modal != 'enabled') {
			$ ('.phanterpwa-widget-select-wrapper').removeClass ('focus').removeClass ('pre_focus');
			p.addClass ('focus');
			setTimeout ((function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self.open_modal (p);
			}), 30);
		}
		self._check_value (el);
	});},
	get _remove_focus () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		if (el.is (':focus')) {
			p.addClass ('focus');
		}
		else {
			p.removeClass ('focus');
		}
		self._check_value (el);
	});},
	get reload () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.start ();
	});},
	get add_new_value () {return __get__ (this, function (self, value) {
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
		var new_value = value;
		if (new_value !== '') {
			var has_value = false;
			for (var vdata of self._data) {
				if (vdata [1] == new_value) {
					var has_value = true;
					break;
				}
			}
			if (!(has_value)) {
				var new_key = '${0}:{1}'.format (new Date ().getTime (), new_value);
				self._data.append ([new_key, new_value]);
				self._value = new_key;
				self._alias_value = new_value;
				$ ('#phanterpwa-widget-select-input-{0}'.format (self.identifier)).val (new_value);
				$ ('#phanterpwa-widget-select-input-{0}'.format (self.identifier)).trigger ('change');
				var target = $ (self.target_selector);
				target.find ('select.phanterpwa-widget-select-select').find ('option').removeAttr ('selected');
				target.find ('select.phanterpwa-widget-select-select').append (OPTION (new_value, __kwargtrans__ ({_value: new_key, _selected: 'selected'})).jquery ());
				target.find ('select.phanterpwa-widget-select-select').find ("option[value='{0}']".format (new_key)).attr ('selected', 'selected').prop ('selected', true).text (new_value);
				self._create_xml_modal ();
				self._check_value ();
			}
		}
		else if (self._can_empty) {
			var target = $ (self.target_selector);
			target.find ('select.phanterpwa-widget-select-select').find ('option').removeAttr ('selected');
			target.find ('select.phanterpwa-widget-select-select').find ("option[value='']").attr ('selected', 'selected').prop ('selected', true);
		}
	});},
	get _add_new_option () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var inp = $ (el).parent ().find ('input');
		var new_value = $ (inp).val ();
		self.add_new_value (new_value);
		self.modal.close ();
	});},
	get _process_option () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var p = $ (el).parent ();
		p.find ('.phanterpwa-widget-select-li-icon').html (XML (self._icon_option).jquery ());
		$ (el).find ('.phanterpwa-widget-select-li-icon').html (XML (self._icon_option_selected).jquery ());
		var t = $ (el).data ('target');
		var v = $ (el).data ('value');
		var h = $ (el).data ('text');
		var target = $ (self.target_selector);
		var dkeys = (function () {
			var __accu0__ = [];
			for (var k of self._data) {
				__accu0__.append ([str (k [0]), k [1]]);
			}
			return dict (__accu0__);
		}) ();
		if (__in__ (str (v), dkeys.py_keys ())) {
			self._value = v;
			target.find ('select.phanterpwa-widget-select-select').find ('option').removeAttr ('selected');
			target.find ('select.phanterpwa-widget-select-select').find ("option[value='{0}']".format (v)).attr ('selected', 'selected').prop ('selected', true);
			$ ('#{0}'.format (t)).val (h);
			self._alias_value = h;
		}
		else if (v !== '') {
			target.find ('select.phanterpwa-widget-select-select').find ('option').removeAttr ('selected');
			dkeys [v] = h;
			target.find ('select.phanterpwa-widget-select-select').append (OPTION (h, __kwargtrans__ ({_value: v, _selected: 'selected'})).jquery ());
			target.find ('select.phanterpwa-widget-select-select').find ("option[value='{0}']".format (v)).attr ('selected', 'selected').prop ('selected', true);
			$ ('#{0}'.format (t)).val (h);
			self._value = v;
			self._alias_value = h;
		}
		else if (self._can_empty) {
			target.find ('select.phanterpwa-widget-select-select').find ('option').removeAttr ('selected');
			target.find ('select.phanterpwa-widget-select-select').find ("option[value='']").attr ('selected', 'selected').prop ('selected', true);
			self._value = '';
			$ ('#{0}'.format (t)).val ('');
			self._alias_value = '';
		}
		if (self.modal !== null && self.modal !== undefined) {
			if (callable (self.modal.close)) {
				self.modal.close ();
			}
		}
		self._create_xml_modal ();
		self._check_value ();
		$ ('#{0}'.format (t)).trigger ('change');
	});},
	get _binds () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var target = $ (self.target_selector);
		self._add_div_animation (target);
		target.find ('.phanterpwa-widget-select-touchpad').off ('click.phanterpwa-event-input_materialize').on ('click.phanterpwa-event-input_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._switch_focus (this);
		}));
		target.find ('.phanterpwa-widget-select-touchpad').off ('focus.phanterpwa-event-input_materialize').on ('focus.phanterpwa-event-input_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._switch_pre_focus (this);
		}));
		target.find ('.phanterpwa-widget-select-touchpad').off ('focusout.phanterpwa-event-input_materialize').on ('focusout.phanterpwa-event-input_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._switch_pre_focus (this);
		}));
		target.find ('input').off ('change.phanterpwa-event-input_materialize').on ('change.phanterpwa-event-input_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._check_value (this);
		}));
		target.find ('label').off ('click.phanterpwa-event-input_materialize').on ('click.phanterpwa-event-input_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return target.find ('.phanterpwa-widget-select-touchpad').trigger ('click');
		}));
		target.find ('.phanterpwa-widget-select-touchpad').off ('keydown.open_by_key').on ('keydown.open_by_key', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self._open_by_key (event, this);
		}));
	});},
	get _open_by_key () {return __get__ (this, function (self, event, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var code = event.keyCode || event.which;
		var p = $ (el).parent ();
		var stat_modal = $ ('#phanterpwa-widget-select-input-{0}'.format (self.identifier)).attr ('phanterpwa-widget-pseudomodal');
		if (code == 40) {
			event.preventDefault ();
			if (stat_modal != 'enabled') {
				$ ('.phanterpwa-widget-select-wrapper').removeClass ('focus').removeClass ('pre_focus');
				p.addClass ('focus');
				setTimeout ((function __lambda__ () {
					if (arguments.length) {
						var __ilastarg0__ = arguments.length - 1;
						if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
							var __allkwargs0__ = arguments [__ilastarg0__--];
							for (var __attrib0__ in __allkwargs0__) {
							}
						}
					}
					else {
					}
					return self.open_modal (p);
				}), 30);
			}
		}
		else if (code == 27) {
			p.addClass ('pre_focus');
			if (self.modal !== null && self.modal !== undefined) {
				if (callable (self.modal.close)) {
					self.modal.close ();
				}
			}
		}
		else if (code == 9) {
			p.removeClass ('focus');
			p.removeClass ('pre_focus');
			if (self.modal !== null && self.modal !== undefined) {
				if (callable (self.modal.close)) {
					self.modal.close ();
				}
			}
		}
		self._check_value (el);
	});},
	get set_on_click_new_button () {return __get__ (this, function (self, value) {
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
		if (callable (value)) {
			self._on_click_new = value;
		}
		else {
			console.error ("The 'on_click_new_butto' value must be callable.");
		}
	});},
	get _switch_editable () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (callable (self._on_click_new)) {
			self._on_click_new (self);
		}
		else {
			var p = $ (el).parent ().parent ();
			var pp = p.parent ();
			if (p.hasClass ('enabled')) {
				p.removeClass ('enabled');
				pp.removeClass ('editable_enabled');
			}
			else {
				$ (el).parent ().find ('input').focus ();
				p.addClass ('enabled');
				pp.addClass ('editable_enabled');
			}
		}
	});},
	get _binds_modal_content () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		$ ('.phanterpwa-component-pseudomodal-content').find ('.phanterpwa-widget-select-li-option').off ('click.option_select_modal_content').on ('click.option_select_modal_content', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._process_option (this);
		}));
		if (self._editable) {
			$ ('.phanterpwa-component-pseudomodal-content').find ('.phanterpwa-widget-select-li-icon_plus').off ('click.option_select_modal_content').on ('click.option_select_modal_content', (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self._switch_editable (this);
			}));
			$ ('.phanterpwa-component-pseudomodal-content').find ('.phanterpwa-widget-select-li-icon_confirm').off ('click.option_select_modal_content').on ('click.option_select_modal_content', (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self._add_new_option (this);
			}));
		}
	});},
	get start () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._binds ();
	});},
	get value () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return self._value;
	});},
	get alias_value () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return self._alias_value;
	});}
});
export var Autocomplete =  __class__ ('Autocomplete', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self.identifier = identifier;
		self._alias_value = '';
		self._value = parameters.py_get ('value', '');
		self._data_set (parameters.py_get ('data_set', []));
		self._label = parameters.py_get ('label', null);
		self._placeholder = parameters.py_get ('placeholder', null);
		self._name = parameters.py_get ('name', null);
		self._editable = parameters.py_get ('editable', false);
		self._icon = parameters.py_get ('icon', null);
		self._message_error = parameters.py_get ('message_error', null);
		self._can_empty = parameters.py_get ('can_empty', false);
		self._ajax_url = parameters.py_get ('ajax_data_set', false);
		self._validator = parameters.py_get ('validators', null);
		self._wear = parameters.py_get ('wear', 'material');
		self._form = parameters.py_get ('form', null);
		self._icon_option = parameters.py_get ('icon_option', I (__kwargtrans__ ({_class: 'far fa-circle'})));
		self._icon_option_selected = parameters.py_get ('icon_option_selected', I (__kwargtrans__ ({_class: 'far fa-dot-circle'})));
		self._icon_plus = parameters.py_get ('icon_plus', I (__kwargtrans__ ({_class: 'fas fa-plus'})));
		self._icon_confirm = parameters.py_get ('icon_confirm', I (__kwargtrans__ ({_class: 'fas fa-check'})));
		self._icon_check = parameters.py_get ('icon_check', I (__kwargtrans__ ({_class: 'fas fa-check'})));
		self._on_click_new = parameters.py_get ('on_click_new_button', null);
		self.set_z_index (parameters.py_get ('z_index', null));
		self.set_recalc_on_scroll (parameters.py_get ('recalc_on_scroll', true));
		var xml_icon = '';
		if (self._icon !== '') {
			var xml_icon = DIV (self._icon, __kwargtrans__ ({_class: 'phanterpwa-widget-icon-wrapper'}));
		}
		var wrapper_attr = dict ({'_class': 'phanterpwa-widget-wrapper phanterpwa-widget-autocomplete-wrapper phanterpwa-widget-wear-{0}'.format (self._wear)});
		parameters ['_id'] = identifier;
		if (__in__ ('_class', parameters)) {
			parameters ['_class'] = '{0}{1}'.format (parameters ['_class'], ' phanterpwa-widget-autocomplete');
		}
		else {
			parameters ['_class'] = 'phanterpwa-widget-autocomplete';
		}
		var label = '';
		if (self._label !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_label');
			var label = LABEL (self._label, __kwargtrans__ ({_for: 'phanterpwa-widget-autocomplete-input-{0}'.format (identifier), _class: 'phanterpwa-widget-autocomplete-label'}));
		}
		if (self._message_error !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_error');
		}
		if (self._icon !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_icon');
		}
		if (self._value !== '') {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_value');
		}
		var table = TABLE (__kwargtrans__ ({_class: 'phanterpwa-widget-autocomplete-options-wrapper'}));
		self._xml_modal = table;
		var html = DIV (INPUT (__kwargtrans__ (dict ({'_id': 'phanterpwa-widget-autocomplete-input-{0}'.format (identifier), '_value': self._alias_value, '_placeholder': self._placeholder, '_data-validators': JSON.stringify (self._validator), '_data-form': self._form, '_name': self._name, '_tabindex': '0'}))), label, DIV (I (__kwargtrans__ ({_class: 'fab fa-sistrix'})), __kwargtrans__ ({_class: 'phanterpwa-widget-autocomplete-caret'})), xml_icon, DIV (I (__kwargtrans__ ({_class: 'fas fa-check'})), __kwargtrans__ ({_class: 'phanterpwa-widget-check'})), DIV (self.get_message_error (), __kwargtrans__ ({_class: 'phanterpwa-widget-message_error phanterpwa-widget-autocomplete-message_error'})), __kwargtrans__ (wrapper_attr));
		Widget.__init__ (self, identifier, html, __kwargtrans__ (parameters));
	});},
	get set_recalc_on_scroll () {return __get__ (this, function (self, value) {
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
		if (isinstance (value, bool)) {
			self._recalc_on_scroll = value;
		}
		else {
			console.error ('The recalc_on_scroll must be boolean!');
		}
	});},
	get set_z_index () {return __get__ (this, function (self, value) {
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
		if (str (value).isdigit ()) {
			self._z_index = value;
		}
		else if (value === null) {
			self._z_index = null;
		}
		else {
			self._z_index = null;
			console.error ('The z_index must be integer or None!');
		}
	});},
	get _data_set () {return __get__ (this, function (self, data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var valid_data = true;
		self._data = [];
		self._data_dict = dict ({});
		if (isinstance (data, list)) {
			var new_data = [];
			for (var vdata of data) {
				if (isinstance (vdata, str)) {
					if (self._value == vdata) {
						self._alias_value = vdata;
					}
					self._data_dict [vdata] = vdata;
					new_data.append ([vdata, vdata]);
				}
				else if (len (vdata) !== 2) {
					var valid_data = false;
				}
				else {
					if (self._value == vdata [0]) {
						self._alias_value = vdata [1];
					}
					self._data_dict [vdata [0]] = vdata [1];
					new_data.append ([vdata [0], vdata [1]]);
				}
			}
			if (!(valid_data)) {
				var __except0__ = ValueError ('The data parameter of widget "{0}" is invalid!'.format (self.identifier));
				__except0__.__cause__ = null;
				throw __except0__;
			}
			else {
				self._data = new_data;
			}
		}
		else if (isinstance (data, dict)) {
			var new_data = [];
			for (var vdata of data.py_keys ()) {
				new_data.append ([vdata, data [vdata]]);
				if (self._value == vdata) {
					self._alias_value = data [vdata];
				}
			}
			self._data = new_data;
			self._data_dict = data;
		}
	});},
	get set_new_data_set () {return __get__ (this, function (self, data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._data_set (data);
	});},
	get _create_xml_modal () {return __get__ (this, function (self, value) {
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
		var table = TABLE (__kwargtrans__ ({_class: 'phanterpwa-widget-autocomplete-options-wrapper'}));
		self._value = value;
		self._first_value = '';
		if (self._data !== []) {
			if (value !== undefined) {
				for (var vdata of self._data) {
					if (str (vdata [1]).upper ().startswith (value.upper ()) && value != '') {
						var plain_value = str (vdata [1]).__getslice__ (len (value), null, 1);
						var strongest_value = SPAN (STRONG (str (vdata [1]).__getslice__ (0, len (value), 1)), plain_value);
						if (self._first_value == '') {
							self._first_value = vdata [1];
						}
						if (self._value !== '') {
							if (vdata [1] == self._value) {
								table.append (TR (TD (strongest_value, DIV (self._icon_option_selected, __kwargtrans__ ({_class: 'phanterpwa-widget-autocomplete-li-icon'})), __kwargtrans__ (dict ({'_data-value': vdata [0], '_data-text': vdata [1], '_data-target': 'phanterpwa-widget-autocomplete-input-{0}'.format (self.identifier), '_tabindex': '0', '_class': 'phanterpwa-widget-autocomplete-li-option selected'})))));
							}
							else {
								table.append (TR (TD (strongest_value, DIV (self._icon_option, __kwargtrans__ ({_class: 'phanterpwa-widget-autocomplete-li-icon'})), __kwargtrans__ (dict ({'_data-value': vdata [0], '_data-text': vdata [1], '_data-target': 'phanterpwa-widget-autocomplete-input-{0}'.format (self.identifier), '_tabindex': '0', '_class': 'phanterpwa-widget-autocomplete-li-option'})))));
							}
						}
						else {
							table.append (TR (TD (strongest_value, DIV (self._icon_option, __kwargtrans__ ({_class: 'phanterpwa-widget-autocomplete-li-icon'})), __kwargtrans__ (dict ({'_data-value': vdata [0], '_data-text': vdata [1], '_data-target': 'phanterpwa-widget-autocomplete-input-{0}'.format (self.identifier), '_tabindex': '0', '_class': 'phanterpwa-widget-autocomplete-li-option'})))));
						}
					}
				}
			}
		}
		self._xml_modal = table;
	});},
	get validate () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (callable (self._validator)) {
			self._validator (self);
		}
		self.focus = false;
		self.has_val = null;
	});},
	get _add_div_animation () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var wrapper = el.find ('.phanterpwa-widget-wrapper');
		if (wrapper.hasClass ('phanterpwa-widget-wear-material')) {
			if (wrapper.find ('.material-widgets-animation-onfocus').length == 0) {
				wrapper.find ('input').after (CONCATENATE (HR (__kwargtrans__ ({_class: 'material-widgets-animation-offfocus'})), DIV (__kwargtrans__ ({_class: 'material-widgets-animation-onfocus'}))).jquery ());
			}
		}
	});},
	get _check_value () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		if (p.find ('input').val () !== '') {
			p.addClass ('has_value');
		}
		else {
			p.removeClass ('has_value');
		}
	});},
	get _on_click_label () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		self._switch_focus (el);
	});},
	get _after_modal_close () {return __get__ (this, function (self, p) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'p': var p = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var parent = $ (p).removeClass ('focus');
		self._check_value (parent.find ('input'));
	});},
	get _switch_pre_focus () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		p.removeClass ('has_error');
		if (p.hasClass ('pre_focus')) {
			p.removeClass ('pre_focus');
		}
		else {
			$ ('.phanterpwa-widget-autocomplete-wrapper').removeClass ('pre_focus');
			p.addClass ('pre_focus');
		}
	});},
	get open_modal () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var value = $ (el).val ();
		if (value !== undefined && value != '') {
			self._create_xml_modal ($ (el).val ());
			self.modal = PseudoModal ('#phanterpwa-widget-autocomplete-input-{0}'.format (self.identifier), self._xml_modal, __kwargtrans__ ({on_close: (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self._after_modal_close (el);
			}), width: '100%', z_index: self._z_index, recalc_on_scroll: self._recalc_on_scroll}));
			self.modal.start ();
			self._binds_modal_content ();
		}
		else if (self.modal !== undefined) {
			self.modal.close ();
		}
	});},
	get _switch_focus () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		var stat_modal = $ ('#phanterpwa-widget-autocomplete-input-{0}'.format (self.identifier)).attr ('phanterpwa-widget-pseudomodal');
		p.removeClass ('has_error');
		if (el.is (':focus')) {
			if (stat_modal != 'enabled') {
				$ ('.phanterpwa-widget-wrapper').removeClass ('focus').removeClass ('pre_focus');
				p.addClass ('focus');
			}
		}
		else {
			p.removeClass ('focus');
		}
		self._check_value (el);
	});},
	get _remove_focus () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		if (el.is (':focus')) {
			p.addClass ('focus');
		}
		else {
			p.removeClass ('focus');
		}
		self._check_value (el);
	});},
	get reload () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.start ();
	});},
	get add_new_value () {return __get__ (this, function (self, value) {
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
		var new_value = value;
		if (new_value !== '') {
			var has_value = false;
			for (var vdata of self._data) {
				if (vdata [1] == new_value) {
					var has_value = true;
					break;
				}
			}
			if (!(has_value)) {
				var new_key = '${0}:{1}'.format (new Date ().getTime (), new_value);
				self._data.append ([new_key, new_value]);
				self._value = new_key;
				self._alias_value = new_value;
				$ ('#phanterpwa-widget-autocomplete-input-{0}'.format (self.identifier)).val (new_value);
				$ ('#phanterpwa-widget-autocomplete-input-{0}'.format (self.identifier)).trigger ('change');
				var target = $ (self.target_selector);
				target.find ('select.phanterpwa-widget-autocomplete-select').find ('option').removeAttr ('selected');
				target.find ('select.phanterpwa-widget-autocomplete-select').append (OPTION (new_value, __kwargtrans__ ({_value: new_key, _selected: 'selected'})).jquery ());
				target.find ('select.phanterpwa-widget-autocomplete-select').find ("option[value='{0}']".format (new_key)).attr ('selected', 'selected').prop ('selected', true).text (new_value);
				self._create_xml_modal ();
				self._check_value ();
			}
		}
		else if (self._can_empty) {
			var target = $ (self.target_selector);
			target.find ('select.phanterpwa-widget-autocomplete-select').find ('option').removeAttr ('selected');
			target.find ('select.phanterpwa-widget-autocomplete-select').find ("option[value='']").attr ('selected', 'selected').prop ('selected', true);
		}
	});},
	get _add_new_option () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var inp = $ (el).parent ().find ('input');
		var new_value = $ (inp).val ();
		self.add_new_value (new_value);
		self.modal.close ();
	});},
	get _process_option () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var p = $ (el).parent ();
		p.find ('.phanterpwa-widget-autocomplete-li-icon').html (XML (self._icon_option).jquery ());
		$ (el).find ('.phanterpwa-widget-autocomplete-li-icon').html (XML (self._icon_option_selected).jquery ());
		var t = $ (el).data ('target');
		var v = $ (el).data ('value');
		var h = $ (el).data ('text');
		var target = $ (self.target_selector);
		var dkeys = (function () {
			var __accu0__ = [];
			for (var k of self._data) {
				__accu0__.append ([str (k [0]), k [1]]);
			}
			return dict (__accu0__);
		}) ();
		if (__in__ (str (v), dkeys.py_keys ())) {
			self._value = v;
			target.find ('select.phanterpwa-widget-autocomplete-select').find ('option').removeAttr ('selected');
			target.find ('select.phanterpwa-widget-autocomplete-select').find ("option[value='{0}']".format (v)).attr ('selected', 'selected').prop ('selected', true);
			$ ('#{0}'.format (t)).val (h);
			self._alias_value = h;
		}
		else if (v !== '') {
			target.find ('select.phanterpwa-widget-autocomplete-select').find ('option').removeAttr ('selected');
			dkeys [v] = h;
			target.find ('select.phanterpwa-widget-autocomplete-select').append (OPTION (h, __kwargtrans__ ({_value: v, _selected: 'selected'})).jquery ());
			target.find ('select.phanterpwa-widget-autocomplete-select').find ("option[value='{0}']".format (v)).attr ('selected', 'selected').prop ('selected', true);
			$ ('#{0}'.format (t)).val (h);
			self._value = v;
			self._alias_value = h;
		}
		else if (self._can_empty) {
			target.find ('select.phanterpwa-widget-autocomplete-select').find ('option').removeAttr ('selected');
			target.find ('select.phanterpwa-widget-autocomplete-select').find ("option[value='']").attr ('selected', 'selected').prop ('selected', true);
			self._value = '';
			$ ('#{0}'.format (t)).val ('');
			self._alias_value = '';
		}
		if (self.modal !== null && self.modal !== undefined) {
			if (callable (self.modal.close)) {
				self.modal.close ();
			}
		}
		self._create_xml_modal ();
		self._check_value ();
		$ ('#{0}'.format (t)).trigger ('change');
	});},
	get _binds () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var target = $ (self.target_selector);
		self._add_div_animation (target);
		target.find ('input').off ('focus.phanterpwa-event-input_materialize').on ('focus.phanterpwa-event-input_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._switch_focus (this);
		}));
		target.find ('input').off ('focusout.phanterpwa-event-input_materialize').on ('focusout.phanterpwa-event-input_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._switch_focus (this);
		}));
		target.find ('input').off ('change.phanterpwa-event-input_materialize').on ('change.phanterpwa-event-input_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._check_value (this);
		}));
		target.find ('input').off ('keyup.open_by_keyup').on ('keyup.open_by_keyup', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self._open_by_keyup (event, this);
		}));
		target.find ('input').off ('keydown.open_by_keydown').on ('keydown.open_by_keydown', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self._open_by_keydown (event, this);
		}));
	});},
	get _open_by_keyup () {return __get__ (this, function (self, event, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var code = event.keyCode || event.which;
		var p = $ (el).parent ();
		p.addClass ('focus');
		if (self._ajax_url !== false) {
			var formdata = new FormData ();
			formdata.append ('startswith', self.value ());
			window.PhanterPWA.POST (self._ajax_url, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'data': var data = __allkwargs0__ [__attrib0__]; break;
								case 'ajax_status': var ajax_status = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				return self._data_set_from_ajax (data, ajax_status, el);
			})}));
		}
		else {
			setTimeout ((function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self.open_modal (el);
			}), 30);
		}
	});},
	get _data_set_from_ajax () {return __get__ (this, function (self, data, ajax_status, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'ajax_status': var ajax_status = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (ajax_status == 'success') {
			var json = data.responseJSON;
			var data = json.data_set;
			if (data !== undefined) {
				var data = list (data);
				self.set_new_data_set (data);
				self.open_modal (el);
			}
		}
	});},
	get _open_by_keydown () {return __get__ (this, function (self, event, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var code = event.keyCode || event.which;
		var p = $ (el).parent ();
		if (code == 9) {
			self._create_xml_modal ($ (el).val ());
			if (self._first_value == '') {
				if (!(self._editable)) {
					$ (el).val ('');
				}
			}
			else {
				$ (el).val (self._first_value);
				if (self.modal !== undefined) {
					self.modal.close ();
				}
			}
		}
	});},
	get set_on_click_new_button () {return __get__ (this, function (self, value) {
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
		if (callable (value)) {
			self._on_click_new = value;
		}
		else {
			console.error ("The 'on_click_new_butto' value must be callable.");
		}
	});},
	get _switch_editable () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (callable (self._on_click_new)) {
			self._on_click_new (self);
		}
		else {
			var p = $ (el).parent ().parent ();
			var pp = p.parent ();
			if (p.hasClass ('enabled')) {
				p.removeClass ('enabled');
				pp.removeClass ('editable_enabled');
			}
			else {
				$ (el).parent ().find ('input').focus ();
				p.addClass ('enabled');
				pp.addClass ('editable_enabled');
			}
		}
	});},
	get _binds_modal_content () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		$ ('.phanterpwa-component-pseudomodal-content').find ('.phanterpwa-widget-autocomplete-li-option').off ('click.option_select_modal_content').on ('click.option_select_modal_content', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._process_option (this);
		}));
		if (self._editable) {
			$ ('.phanterpwa-component-pseudomodal-content').find ('.phanterpwa-widget-autocomplete-li-icon_plus').off ('click.option_select_modal_content').on ('click.option_select_modal_content', (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self._switch_editable (this);
			}));
			$ ('.phanterpwa-component-pseudomodal-content').find ('.phanterpwa-widget-autocomplete-li-icon_confirm').off ('click.option_select_modal_content').on ('click.option_select_modal_content', (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self._add_new_option (this);
			}));
		}
	});},
	get start () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._binds ();
	});},
	get value () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._value = $ ('#phanterpwa-widget-autocomplete-input-{0}'.format (self.identifier)).val ();
		return self._value;
	});}
});
export var MultSelect =  __class__ ('MultSelect', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self.identifier = identifier;
		self._alias_value = '';
		self._value = parameters.py_get ('value', []);
		self._filter_value ();
		self._data_set (parameters.py_get ('data_set', []));
		self._label = parameters.py_get ('label', null);
		self._placeholder = parameters.py_get ('placeholder', null);
		self._name = parameters.py_get ('name', null);
		self._editable = parameters.py_get ('editable', false);
		self._icon = parameters.py_get ('icon', null);
		self._message_error = parameters.py_get ('message_error', null);
		self._can_empty = parameters.py_get ('can_empty', false);
		self._validator = parameters.py_get ('validators', null);
		self._wear = parameters.py_get ('wear', 'material');
		self._form = parameters.py_get ('form', null);
		self._icon_option = parameters.py_get ('icon_option', I (__kwargtrans__ ({_class: 'far fa-square'})));
		self._icon_option_selected = parameters.py_get ('icon_option_selected', I (__kwargtrans__ ({_class: 'far fa-check-square'})));
		self._icon_plus = parameters.py_get ('icon_plus', I (__kwargtrans__ ({_class: 'fas fa-plus'})));
		self._icon_confirm = parameters.py_get ('icon_confirm', I (__kwargtrans__ ({_class: 'fas fa-check'})));
		self._icon_check = parameters.py_get ('icon_check', I (__kwargtrans__ ({_class: 'fas fa-check'})));
		self._on_click_new = parameters.py_get ('on_click_new_button', null);
		self.set_z_index (parameters.py_get ('z_index', null));
		self.set_recalc_on_scroll (parameters.py_get ('recalc_on_scroll', true));
		var xml_icon = '';
		if (self._icon !== '') {
			var xml_icon = DIV (self._icon, __kwargtrans__ ({_class: 'phanterpwa-widget-icon-wrapper'}));
		}
		var wrapper_attr = dict ({'_class': 'phanterpwa-widget-wrapper phanterpwa-widget-wear-{0}{1}'.format (self._wear, ' phanterpwa-widget-multselect-wrapper')});
		parameters ['_id'] = identifier;
		if (__in__ ('_class', parameters)) {
			parameters ['_class'] = '{0}{1}'.format (parameters ['_class'], ' phanterpwa-widget-multselect');
		}
		else {
			parameters ['_class'] = 'phanterpwa-widget-multselect';
		}
		var label = '';
		if (self._label !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_label');
			var label = LABEL (self._label, __kwargtrans__ ({_for: 'phanterpwa-widget-multselect-value-{0}'.format (identifier), _class: 'phanterpwa-widget-multselect-label'}));
		}
		if (self._message_error !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_error');
		}
		if (self._icon !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_icon');
		}
		if (len (self._value) > 0) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_value');
		}
		var select = SELECT (__kwargtrans__ ({_class: 'phanterpwa-widget-multselect-select', _name: 'name_select_{0}'.format (self._name)}));
		var table = TABLE (__kwargtrans__ ({_class: 'phanterpwa-widget-multselect-options-wrapper'}));
		self._xml_modal = table;
		self._xml_select = select;
		self._create_xml_select ();
		self._create_xml_modal ();
		self._create_xml_values ();
		var html = DIV (DIV (__kwargtrans__ ({_class: 'phanterpwa-widget-multselect-touchpad', _tabindex: '0'})), DIV (self._xml_values, __kwargtrans__ (dict ({'_id': 'phanterpwa-widget-multselect-value-{0}'.format (self.identifier), '_class': 'phanterpwa-widget-multselect-values'}))), INPUT (__kwargtrans__ (dict ({'_id': 'phanterpwa-widget-multselect-input-{0}'.format (identifier), '_class': 'phanterpwa-widget-multselect-input', '_name': self._name, '_value': JSON.stringify (self._value), '_placeholder': self._placeholder, '_type': 'hidden', '_data-validators': JSON.stringify (self._validator), '_data-form': self._form}))), label, DIV (I (__kwargtrans__ ({_class: 'fas fa-angle-down'})), __kwargtrans__ ({_class: 'phanterpwa-widget-multselect-caret'})), xml_icon, DIV (I (__kwargtrans__ ({_class: 'fas fa-check'})), __kwargtrans__ ({_class: 'phanterpwa-widget-check'})), self._xml_select, DIV (self.get_message_error (), __kwargtrans__ ({_class: 'phanterpwa-widget-message_error phanterpwa-widget-multselect-message_error'})), __kwargtrans__ (wrapper_attr));
		Widget.__init__ (self, identifier, html, __kwargtrans__ (parameters));
	});},
	get _filter_value () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var v = [];
		if (Array.isArray (self._value) || isinstance (self._value, list)) {
			for (var x of self._value) {
				v.append (str (x));
			}
			self._value = v;
		}
		else {
			self._value = [str (self._value)];
		}
	});},
	get set_recalc_on_scroll () {return __get__ (this, function (self, value) {
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
		if (isinstance (value, bool)) {
			self._recalc_on_scroll = value;
		}
		else {
			console.error ('The recalc_on_scroll must be boolean!');
		}
	});},
	get set_z_index () {return __get__ (this, function (self, value) {
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
		if (str (value).isdigit ()) {
			self._z_index = value;
		}
		else if (value === null) {
			self._z_index = null;
		}
		else {
			self._z_index = null;
			console.error ('The z_index must be integer or None!');
		}
	});},
	get _data_set () {return __get__ (this, function (self, data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var valid_data = true;
		self._data = [];
		self._order_in = [];
		self._data_dict = dict ({});
		self._alias_value = dict ({});
		if (isinstance (data, list)) {
			for (var vdata of data) {
				if (len (vdata) !== 2) {
					var valid_data = false;
				}
				else if (__in__ (str (vdata [0]), self._value)) {
					self._alias_value [str (vdata [0])] = vdata [1];
				}
				self._data_dict [str (vdata [0])] = vdata [1];
				if (!__in__ (str (vdata [0]), self._order_in)) {
					self._order_in.append (str (vdata [0]));
				}
			}
			if (!(valid_data)) {
				var __except0__ = ValueError ('The data parameter of widget "{0}" is invalid!'.format (self.identifier));
				__except0__.__cause__ = null;
				throw __except0__;
			}
			else {
				self._data = data;
			}
		}
		else if (isinstance (data, dict)) {
			self._order_in = [];
			var new_data = [];
			for (var vdata of data.py_keys ()) {
				if (!__in__ (str (vdata), self._order_in)) {
					self._order_in.append (str (vdata));
				}
				new_data.append ([str (vdata), data [vdata]]);
				if (__in__ (str (vdata), self._value)) {
					self._alias_value [str (vdata)] = data [vdata];
				}
			}
			self._data = new_data;
			self._data_dict = data;
		}
	});},
	get set_new_data_set () {return __get__ (this, function (self, data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._data_set (data);
		self._create_xml_values ();
		self._create_xml_modal ();
		self._create_xml_values ();
	});},
	get _create_xml_values () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var values_op = CONCATENATE ();
		if (len (self._data_dict.py_keys ()) > 0) {
			for (var vdata of self._order_in) {
				var vdata = str (vdata);
				if (len (self._value) > 0) {
					if (__in__ (vdata, self._value)) {
						values_op.append (DIV (DIV (self._data_dict [vdata], __kwargtrans__ ({_class: 'phanterpwa-widget-multselect-value'})), DIV (I (__kwargtrans__ ({_class: 'fas fa-times'})), __kwargtrans__ ({_class: 'phanterpwa-widget-multselect-value-icon_close icon_button wave_on_click'})), __kwargtrans__ (dict ({'_data-value': vdata, '_class': 'phanterpwa-widget-multselect-value-content', '_tabindex': '0'}))));
					}
				}
			}
		}
		self._xml_values = values_op;
	});},
	get _create_xml_select () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var select = SELECT (__kwargtrans__ (dict ({'_class': 'phanterpwa-widget-multselect-select', '_name': 'name_select_{0}'.format (self._name), '_multiple': true})));
		if (len (self._data_dict.py_keys ()) > 0) {
			for (var vdata of self._order_in) {
				var vdata = str (vdata);
				if (len (self._value) > 0) {
					if (__in__ (vdata, self._value)) {
						select.append (OPTION (self._data_dict [vdata], __kwargtrans__ ({_value: vdata, _selected: 'selected'})));
					}
					else {
						select.append (OPTION (self._data_dict [vdata], __kwargtrans__ ({_value: vdata})));
					}
				}
				else {
					select.append (OPTION (self._data_dict [vdata], __kwargtrans__ ({_value: vdata})));
				}
			}
		}
		self._xml_select = select;
	});},
	get _create_xml_modal () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var ul = TABLE (__kwargtrans__ ({_class: 'phanterpwa-widget-multselect-options-wrapper'}));
		if (len (self._order_in) > 0) {
			for (var vdata of self._order_in) {
				var vdata = str (vdata);
				if (len (self._value) > 0) {
					if (__in__ (vdata, self._value)) {
						ul.append (TR (TD (SPAN (self._data_dict [vdata]), DIV (self._icon_option_selected, __kwargtrans__ ({_class: 'phanterpwa-widget-multselect-li-icon'})), __kwargtrans__ (dict ({'_data-value': vdata, '_data-text': self._data_dict [vdata], '_data-target': 'phanterpwa-widget-multselect-value-{0}'.format (self.identifier), '_class': 'phanterpwa-widget-multselect-li-option selected', '_phanterpwa-widget-multiselect-status': 'enabled'})))));
					}
					else {
						ul.append (TR (TD (SPAN (self._data_dict [vdata]), DIV (self._icon_option, __kwargtrans__ ({_class: 'phanterpwa-widget-multselect-li-icon'})), __kwargtrans__ (dict ({'_data-value': vdata, '_data-text': self._data_dict [vdata], '_data-target': 'phanterpwa-widget-multselect-value-{0}'.format (self.identifier), '_class': 'phanterpwa-widget-multselect-li-option'})))));
					}
				}
				else {
					ul.append (TR (TD (SPAN (self._data_dict [vdata]), DIV (self._icon_option, __kwargtrans__ ({_class: 'phanterpwa-widget-multselect-li-icon'})), __kwargtrans__ (dict ({'_data-value': vdata, '_data-text': self._data_dict [vdata], '_data-target': 'phanterpwa-widget-multselect-value-{0}'.format (self.identifier), '_class': 'phanterpwa-widget-multselect-li-option'})))));
				}
			}
			var icon_placeholder = DIV (DIV (DIV (self._icon_plus, __kwargtrans__ ({_class: 'link phanterpwa-widget-multselect-li-icon_plus'})), DIV (INPUT (__kwargtrans__ ({_class: 'phanterpwa-widget-multselect-li-input'})), DIV (self._icon_confirm, __kwargtrans__ ({_class: 'phanterpwa-widget-multselect-li-icon_confirm link'})), __kwargtrans__ ({_class: 'phanterpwa-widget-multselect-li-input-editable'})), __kwargtrans__ ({_class: 'phanterpwa-widget-multselect-li-input-editable-wrapper'})), __kwargtrans__ ({_class: 'phanterpwa-widget-multselect-li-icon_plus-wrapper'}));
			if (self._placeholder !== null) {
				if (self._editable) {
					ul.insert (0, TR (TD (SPAN (self._placeholder, __kwargtrans__ ({_class: 'phanterpwa-widget-multselect-placeholder'})), icon_placeholder, __kwargtrans__ (dict ({'_data-value': '', '_data-target': 'phanterpwa-widget-multselect-value-{0}'.format (self.identifier), '_data-text': '', '_class': 'phanterpwa-widget-multselect-li-title has_editable'})))));
				}
				else {
					ul.insert (0, TR (TD (SPAN (self._placeholder, __kwargtrans__ ({_class: 'phanterpwa-widget-multselect-placeholder'})), '', __kwargtrans__ (dict ({'_data-value': '', '_data-target': 'phanterpwa-widget-multselect-value-{0}'.format (self.identifier), '_data-text': '', '_class': 'phanterpwa-widget-multselect-li-title'})))));
				}
			}
			else if (self._editable) {
				ul.insert (0, TR (TD (SPAN (self._placeholder, __kwargtrans__ ({_class: 'phanterpwa-widget-multselect-placeholder'})), icon_placeholder, __kwargtrans__ (dict ({'_data-value': '', '_data-target': 'phanterpwa-widget-multselect-value-{0}'.format (self.identifier), '_data-text': '', '_class': 'phanterpwa-widget-multselect-li-title has_editable'})))));
			}
		}
		self._xml_modal = ul;
	});},
	get validate () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (callable (self._validator)) {
			self._validator (self);
		}
		self.focus = false;
		self.has_val = null;
	});},
	get _add_div_animation () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var wrapper = el.find ('.phanterpwa-widget-wrapper');
		if (wrapper.hasClass ('phanterpwa-widget-wear-material')) {
			if (wrapper.find ('.material-widgets-animation-onfocus').length == 0) {
				wrapper.find ('input').after (CONCATENATE (HR (__kwargtrans__ ({_class: 'material-widgets-animation-offfocus'})), DIV (__kwargtrans__ ({_class: 'material-widgets-animation-onfocus'}))).jquery ());
			}
		}
	});},
	get _check_value () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ ('#phanterpwa-widget-multselect-input-{0}'.format (self.identifier));
		var p = el.parent ();
		if (el.val () == '' || el.val () == '[]') {
			p.removeClass ('has_value');
		}
		else {
			p.addClass ('has_value');
		}
		el.trigger ('keyup');
	});},
	get _on_click_label () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		self._switch_focus (el);
	});},
	get _after_modal_close () {return __get__ (this, function (self, p) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'p': var p = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		$ (p).removeClass ('focus');
		self._check_value ();
	});},
	get _switch_pre_focus () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		p.removeClass ('has_error');
		if (p.hasClass ('pre_focus')) {
			p.removeClass ('pre_focus');
		}
		else {
			$ ('.phanterpwa-widget-multselect-wrapper').removeClass ('pre_focus');
			p.addClass ('pre_focus');
		}
	});},
	get open_modal () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.modal = PseudoModal ('#phanterpwa-widget-multselect-value-{0}'.format (self.identifier), self._xml_modal, __kwargtrans__ ({on_close: (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._after_modal_close (el);
		}), width: '100%', z_index: self._z_index, recalc_on_scroll: self._recalc_on_scroll}));
		self.modal.start ();
		self._binds_modal_content ();
	});},
	get _switch_focus () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		var stat_modal = $ ('#phanterpwa-widget-multselect-value-{0}'.format (self.identifier)).attr ('phanterpwa-widget-pseudomodal');
		if (p.hasClass ('focus')) {
			p.removeClass ('focus');
			p.removeClass ('pre_focus');
			if (self.modal !== null && self.modal !== undefined) {
				if (callable (self.modal.close)) {
					self.modal.close ();
				}
			}
		}
		else if (stat_modal != 'enabled') {
			$ ('.phanterpwa-widget-multselect-wrapper').removeClass ('focus').removeClass ('pre_focus');
			p.addClass ('focus');
			setTimeout ((function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self.open_modal (p);
			}), 30);
		}
		self._check_value ();
	});},
	get _remove_focus () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		if (el.is (':focus')) {
			p.addClass ('focus');
		}
		else {
			p.removeClass ('focus');
		}
		self._check_value ();
	});},
	get reload () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.start ();
	});},
	get add_new_value () {return __get__ (this, function (self, value) {
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
		var new_value = value;
		if (new_value !== '') {
			var has_value = false;
			var key_find = null;
			for (var vdata of self._data_dict.py_keys ()) {
				if (self._data_dict [vdata] == new_value) {
					self._alias_value [vdata] = new_value;
					var key_find = vdata;
					var has_value = true;
					break;
				}
			}
			if (!(has_value)) {
				var new_key = '${0}:{1}'.format (new Date ().getTime (), new_value);
				self._order_in.append (new_key);
				self._data.append ([new_key, new_value]);
				self._data_dict [new_key] = new_value;
				self._value.append (new_key);
				self._alias_value [new_key] = new_value;
				$ ('#phanterpwa-widget-multselect-input-{0}'.format (self.identifier)).val (JSON.stringify (self._value));
				var target = $ (self.target_selector);
				target.find ('select.phanterpwa-widget-multselect-select').append (OPTION (new_value, __kwargtrans__ ({_value: new_key, _selected: 'selected'})).jquery ());
				target.find ('select.phanterpwa-widget-multselect-select').find ("option[value='{0}']".format (new_key)).attr ('selected', 'selected').prop ('selected', true).text (new_value);
				self._create_xml_modal ();
				self._create_xml_values ();
				self._xml_values.html_to ('#phanterpwa-widget-multselect-value-{0}'.format (self.identifier));
				self._binds_values_content ();
				self._check_value ();
			}
			else {
				if (key_find !== null && !__in__ (key_find, self._value)) {
					self._value.append (key_find);
				}
				var target = $ (self.target_selector);
				target.find ('select.phanterpwa-widget-multselect-select').find ("option[value='{0}']".format (key_find)).attr ('selected', 'selected').prop ('selected', true).text (new_value);
				$ ('#phanterpwa-widget-multselect-input-{0}'.format (self.identifier)).val (JSON.stringify (self._value));
				self._create_xml_modal ();
				self._create_xml_values ();
				self._xml_values.html_to ('#phanterpwa-widget-multselect-value-{0}'.format (self.identifier));
				self._binds_values_content ();
				self._check_value ();
			}
		}
		else {
			self._binds_values_content ();
		}
	});},
	get _add_new_option () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var inp = $ (el).parent ().find ('input');
		var new_value = $ (inp).val ();
		self.add_new_value (new_value);
		self.modal.close ();
	});},
	get _on_enter_key_press_to_new_input () {return __get__ (this, function (self, event, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var code = event.keyCode || event.which;
		if (code == 13) {
			var inp = $ (el);
			var new_value = $ (inp).val ();
			self.add_new_value (new_value);
			self.modal.close ();
		}
		else if (code == 27) {
			self.modal.close ();
		}
	});},
	get _switch_option () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var op = $ (el).find ('.phanterpwa-widget-multselect-li-icon');
		var t = $ (el).data ('target');
		var v = str ($ (el).data ('value'));
		var h = $ (el).data ('text');
		var target = $ (self.target_selector);
		var stat = $ (el).attr ('phanterpwa-widget-multiselect-status');
		if (stat == 'enabled') {
			$ (el).attr ('phanterpwa-widget-multiselect-status', 'disabled').removeClass ('selected');
			op.html (XML (self._icon_option).jquery ());
			var t_op = target.find ('select.phanterpwa-widget-multselect-select').find ("option[value='{0}']".format (v));
			t_op.prop ('selected', false);
			t_op.removeAttr ('selected');
			if (__in__ (v, self._alias_value)) {
				delete self._alias_value [v];
				self._value = (function () {
					var __accu0__ = [];
					for (var x of self._alias_value.py_keys ()) {
						__accu0__.append (str (x));
					}
					return __accu0__;
				}) ();
			}
		}
		else {
			op.html (XML (self._icon_option_selected).jquery ());
			$ (el).attr ('phanterpwa-widget-multiselect-status', 'enabled').addClass ('selected');
			target.find ('select.phanterpwa-widget-multselect-select').find ("option[value='{0}']".format (v)).attr ('selected', 'selected').prop ('selected', true);
			self._alias_value [v] = h;
			self._value = (function () {
				var __accu0__ = [];
				for (var x of self._alias_value.py_keys ()) {
					__accu0__.append (str (x));
				}
				return __accu0__;
			}) ();
		}
		$ ('#phanterpwa-widget-multselect-input-{0}'.format (self.identifier)).val (JSON.stringify (self._value));
		self._create_xml_modal ();
		self._create_xml_values ();
		self._xml_values.html_to ('#phanterpwa-widget-multselect-value-{0}'.format (self.identifier));
		self._binds_values_content ();
		self._check_value ();
	});},
	get _binds () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var target = $ (self.target_selector);
		self._add_div_animation (target);
		target.find ('.phanterpwa-widget-multselect-touchpad').off ('click.phanterpwa-event-input_materialize').on ('click.phanterpwa-event-input_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._switch_focus (this);
		}));
		target.find ('.phanterpwa-widget-multselect-touchpad').off ('focus.phanterpwa-event-input_materialize').on ('focus.phanterpwa-event-input_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._switch_pre_focus (this);
		}));
		target.find ('.phanterpwa-widget-multselect-touchpad').off ('focusout.phanterpwa-event-input_materialize').on ('focusout.phanterpwa-event-input_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._switch_pre_focus (this);
		}));
		target.find ('input').off ('change.phanterpwa-event-input_materialize').on ('change.phanterpwa-event-input_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._check_value ();
		}));
		target.find ('label').off ('click.phanterpwa-event-input_materialize').on ('click.phanterpwa-event-input_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return target.find ('.phanterpwa-widget-multselect-touchpad').trigger ('click');
		}));
		target.find ('.phanterpwa-widget-multselect-caret, .phanterpwa-widget-check').off ('click.phanterpwa-event-input_materialize').on ('click.phanterpwa-event-input_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return target.find ('.phanterpwa-widget-multselect-touchpad').trigger ('click');
		}));
		target.find ('.phanterpwa-widget-multselect-touchpad').off ('keydown.open_by_key').on ('keydown.open_by_key', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self._open_by_key (event, this);
		}));
		self._binds_values_content ();
	});},
	get _open_by_key () {return __get__ (this, function (self, event, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var code = event.keyCode || event.which;
		var p = $ (el).parent ();
		var stat_modal = $ ('#phanterpwa-widget-multselect-value-{0}'.format (self.identifier)).attr ('phanterpwa-widget-pseudomodal');
		if (code == 40) {
			event.preventDefault ();
			if (stat_modal != 'enabled') {
				$ ('.phanterpwa-widget-multselect-wrapper').removeClass ('focus').removeClass ('pre_focus');
				p.addClass ('focus');
				setTimeout ((function __lambda__ () {
					if (arguments.length) {
						var __ilastarg0__ = arguments.length - 1;
						if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
							var __allkwargs0__ = arguments [__ilastarg0__--];
							for (var __attrib0__ in __allkwargs0__) {
							}
						}
					}
					else {
					}
					return self.open_modal (p);
				}), 30);
			}
		}
		else if (code == 27) {
			p.addClass ('pre_focus');
			if (self.modal !== null && self.modal !== undefined) {
				if (callable (self.modal.close)) {
					self.modal.close ();
				}
			}
		}
		else if (code == 9) {
			p.removeClass ('focus');
			p.removeClass ('pre_focus');
			if (self.modal !== null && self.modal !== undefined) {
				if (callable (self.modal.close)) {
					self.modal.close ();
				}
			}
		}
		self._check_value ();
	});},
	get set_on_click_new_button () {return __get__ (this, function (self, value) {
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
		if (callable (value)) {
			self._on_click_new = value;
		}
		else {
			console.error ("The 'on_click_new_butto' value must be callable.");
		}
	});},
	get _switch_editable () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (callable (self._on_click_new)) {
			self._on_click_new (self);
		}
		else {
			var p = $ (el).parent ().parent ();
			var pp = p.parent ();
			if (p.hasClass ('enabled')) {
				p.removeClass ('enabled');
				pp.removeClass ('editable_enabled');
			}
			else {
				$ (el).parent ().find ('input').focus ();
				p.addClass ('enabled');
				pp.addClass ('editable_enabled');
			}
		}
	});},
	get _del_value () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var p = $ (el).parent ();
		var v = p.data ('value');
		if (__in__ (str (v), self._alias_value.py_keys ())) {
			delete self._alias_value [str (v)];
			self._value = (function () {
				var __accu0__ = [];
				for (var x of self._alias_value.py_keys ()) {
					__accu0__.append (str (x));
				}
				return __accu0__;
			}) ();
			$ ('#phanterpwa-widget-multselect-input-{0}'.format (self.identifier)).val (JSON.stringify (self._value));
			self._create_xml_modal ();
			self._create_xml_values ();
			self._xml_values.html_to ('#phanterpwa-widget-multselect-value-{0}'.format (self.identifier));
			self._binds_values_content ();
			self._check_value ();
		}
	});},
	get _binds_values_content () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		$ (self.target_selector).find ('.phanterpwa-widget-multselect-value-icon_close').off ('click.del_value_multselect').on ('click.del_value_multselect', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._del_value (this);
		}));
	});},
	get _binds_modal_content () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		$ ('.phanterpwa-component-pseudomodal-content').find ('.phanterpwa-widget-multselect-li-option').off ('click.option_select_modal_content').on ('click.option_select_modal_content', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._switch_option (this);
		}));
		if (self._editable) {
			$ ('.phanterpwa-component-pseudomodal-content').find ('.phanterpwa-widget-multselect-li-icon_plus').off ('click.option_select_modal_content').on ('click.option_select_modal_content', (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self._switch_editable (this);
			}));
			$ ('.phanterpwa-component-pseudomodal-content').find ('.phanterpwa-widget-multselect-li-icon_confirm').off ('click.option_select_modal_content').on ('click.option_select_modal_content', (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self._add_new_option (this);
			}));
			$ ('.phanterpwa-component-pseudomodal-content').find ('.phanterpwa-widget-multselect-li-input').off ('keydown.key_option_select_modal_content').on ('keydown.key_option_select_modal_content', (function __lambda__ (event) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'event': var event = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				return self._on_enter_key_press_to_new_input (event, this);
			}));
		}
	});},
	get start () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._binds ();
	});},
	get value () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return self._value;
	});},
	get alias_value () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return self._alias_value;
	});}
});
export var ListString =  __class__ ('ListString', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self._label = parameters.py_get ('label', null);
		self._placeholder = parameters.py_get ('placeholder', null);
		self._editable = parameters.py_get ('editable', true);
		self._name = parameters.py_get ('name', null);
		self._value = parameters.py_get ('value', []);
		self._data_set (parameters.py_get ('data_set', []));
		self._fixed = parameters.py_get ('fixed', []);
		self._icon = parameters.py_get ('icon', null);
		self._message_error = parameters.py_get ('message_error', null);
		self._can_empty = parameters.py_get ('can_empty', false);
		self._validator = parameters.py_get ('validators', null);
		self._wear = parameters.py_get ('wear', 'material');
		self._kind = parameters.py_get ('kind', 'text');
		self._form = parameters.py_get ('form', null);
		self._on_click_new = parameters.py_get ('on_click_new_button', null);
		self._xml_list_string = '';
		self._input_value = [];
		var wrapper_attr = dict ({'_class': 'phanterpwa-widget-wrapper {0} phanterpwa-widget-wear-{1}'.format ('phanterpwa-widget-list_string-wrapper', self._wear)});
		parameters ['_id'] = identifier;
		if (__in__ ('_class', parameters)) {
			parameters ['_class'] = '{0}{1}'.format (parameters ['_class'], ' phanterpwa-widget-list_string');
		}
		else {
			parameters ['_class'] = 'phanterpwa-widget-list_string';
		}
		var label = '';
		if (self._label !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_label');
			var label = LABEL (self._label, __kwargtrans__ ({_for: 'phanterpwa-widget-list_string-input-{0}'.format (identifier)}));
		}
		if (self._message_error !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_error');
		}
		var xml_icon = '';
		if (self._icon !== null) {
			var xml_icon = DIV (self._icon, __kwargtrans__ ({_class: 'phanterpwa-widget-icon-wrapper icon_button wave_on_click'}));
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_icon');
		}
		if (isinstance (self._value, tuple ([list, tuple, dict]))) {
			if (len (self._value) > 0) {
				wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_value');
			}
		}
		else {
			console.error ('The list_string value must be list, tuple or dict');
		}
		if (self._mask !== '' && self._mask !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_mask');
		}
		self._process_list_string ();
		self._process_list_predefinition_string ();
		var html = DIV (DIV (self._xml_list_string, __kwargtrans__ ({_id: 'phanterpwa-widget-list_string-list_values-{0}'.format (identifier), _class: 'phanterpwa-widget-list_string-list_values', _tabindex: 0})), INPUT (__kwargtrans__ (dict ({'_id': 'phanterpwa-widget-list_string-input-{0}'.format (identifier), '_class': 'phanterpwa-widget-list_string-input', '_name': self._name, '_value': JSON.stringify (self._input_value), '_placeholder': self._placeholder, '_type': 'hidden', '_data-validators': JSON.stringify (self._validator), '_data-form': self._form}))), label, DIV (self._xml_list_predefinition_string, __kwargtrans__ ({_class: 'phanterpwa-widget-list_string-list_predefinitions_values'})), DIV (I (__kwargtrans__ ({_class: 'fas fa-check'})), __kwargtrans__ ({_class: 'phanterpwa-widget-check'})), xml_icon, DIV (self.get_message_error (), __kwargtrans__ ({_class: 'phanterpwa-widget-message_error phanterpwa-widget-list_string-message_error'})), __kwargtrans__ (wrapper_attr));
		Widget.__init__ (self, identifier, html, __kwargtrans__ (parameters));
	});},
	get _process_list_string () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var new_value = [];
		self._input_value = [];
		self._dict_input_value = dict ({});
		if (isinstance (self._value, tuple ([list, tuple, dict]))) {
			if (isinstance (self._value, tuple ([list, tuple]))) {
				var xml = CONCATENATE ();
				for (var x of self._value) {
					if (isinstance (x, tuple ([list, tuple])) && len (x) == 2) {
						self._input_value.append (str (x [0]));
						self._dict_input_value [str (x [0])] = x [1];
						new_value.append ([str (x [0]), x [1]]);
						xml.append (DIV (x [1], (!__in__ (x [1], self._fixed) ? DIV (I (__kwargtrans__ ({_class: 'fas fa-times'})), __kwargtrans__ ({_class: 'phanterpwa-widget-list_string-value-icon_close icon_button wave_on_click'})) : ''), __kwargtrans__ (dict ({'_data-value': str (x [0]), '_class': 'phanterpwa-widget-list_string-value-content{0}'.format ((!__in__ (x [1], self._fixed) ? '' : ' widget-liststring-fixed')), '_tabindex': '0'}))));
					}
					else {
						self._input_value.append (x);
						self._dict_input_value [str (x)] = x;
						new_value.append ([str (x), x]);
						xml.append (DIV (x, (!__in__ (x, self._fixed) ? DIV (I (__kwargtrans__ ({_class: 'fas fa-times'})), __kwargtrans__ ({_class: 'phanterpwa-widget-list_string-value-icon_close icon_button wave_on_click'})) : ''), __kwargtrans__ (dict ({'_data-value': x, '_class': 'phanterpwa-widget-list_string-value-content{0}'.format ((!__in__ (x, self._fixed) ? '' : ' widget-liststring-fixed')), '_tabindex': '0'}))));
					}
				}
			}
			else if (isinstance (self._value, dict)) {
				for (var x of self._value.py_keys ()) {
					self._input_value.append (str (x));
					new_value.append ([str (x), self._value [str (x)]]);
					self._dict_input_value [str (x)] = self._value [str (x)];
					xml.append (DIV (self._value [str (x)], (!__in__ (self._value [str (x)], self._fixed) ? DIV (I (__kwargtrans__ ({_class: 'fas fa-times'})), __kwargtrans__ ({_class: 'phanterpwa-widget-list_string-value-icon_close icon_button wave_on_click'})) : ''), __kwargtrans__ (dict ({'_data-value': x, '_class': 'phanterpwa-widget-list_string-value-content{0}'.format ((!__in__ (self._value [str (x)], self._fixed) ? '' : ' widget-liststring-fixed')), '_tabindex': '0'}))));
				}
			}
			if (self._editable) {
				xml.append (DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-plus'})), __kwargtrans__ ({_class: 'icon_button wave_on_click phanterpwa-widget-list_string-value-icon_plus'})), __kwargtrans__ ({_class: 'phanterpwa-widget-list_string-plus_icon-container', _tabindex: 0})));
			}
			self._xml_list_string = xml;
		}
		else {
			self._input_value = [];
			if (self._editable) {
				self._xml_list_string = DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-plus'})), __kwargtrans__ ({_class: 'icon_button wave_on_click phanterpwa-widget-list_string-value-icon_plus'})), __kwargtrans__ ({_class: 'phanterpwa-widget-list_string-plus_icon-container', _tabindex: 0}));
			}
			else {
				self._xml_list_string = CONCATENATE ();
			}
		}
		self._value = new_value;
	});},
	get _data_set () {return __get__ (this, function (self, data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var valid_data = true;
		self._data = [];
		self._data_dict = dict ({});
		if (isinstance (data, list)) {
			var new_data = [];
			for (var vdata of data) {
				if (isinstance (vdata, list) && len (vdata) == 2) {
					self._data_dict [str (vdata [0])] = vdata [1];
					new_data.append ([str (vdata [0]), vdata [1]]);
				}
				else {
					self._data_dict [str (vdata)] = vdata;
					new_data.append ([str (vdata), vdata]);
				}
				self._data = new_data;
			}
		}
		else if (isinstance (data, dict)) {
			var new_data = [];
			for (var vdata of data.py_keys ()) {
				new_data.append ([str (vdata), data [str (vdata)]]);
				if (self._value == str (vdata)) {
					self._alias_value = data [str (vdata)];
				}
			}
			self._data = new_data;
			self._data_dict = data;
		}
	});},
	get _process_list_predefinition_string () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var xml = CONCATENATE ();
		var data_dict_keys = self._data_dict.py_keys ();
		for (var x of self._input_value) {
			if (!__in__ (str (x), data_dict_keys)) {
				self._data_dict [str (x)] = self._dict_input_value [str (x)];
				self._data.append ([str (x), self._dict_input_value [x]]);
			}
		}
		var data_dict_keys = self._data_dict.py_keys ();
		for (var x of data_dict_keys) {
			if (!__in__ (str (x), self._input_value)) {
				xml.append (DIV (self._data_dict [str (x)], DIV (I (__kwargtrans__ ({_class: 'fas fa-plus'})), __kwargtrans__ ({_class: 'phanterpwa-widget-list_string-value-icon_plus_predifinition icon_button wave_on_click'})), __kwargtrans__ (dict ({'_data-value': x, '_class': 'phanterpwa-widget-list_string-value-predefinition-content', '_tabindex': '0'}))));
			}
		}
		self._xml_list_predefinition_string = xml;
	});},
	get _add_value_predefinition () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var p = $ (el).parent ();
		var val = p.data ('value');
		var alias_val = p.text ();
		delete self._data_dict [val];
		self.add_new_value ([val, alias_val]);
	});},
	get get_message_error () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._message_error !== null) {
			return self._message_error;
		}
		else {
			return '';
		}
	});},
	get set_on_click_new_button () {return __get__ (this, function (self, value) {
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
		if (callable (value)) {
			self._on_click_new = value;
		}
		else {
			console.error ("The 'on_click_new_butto' value must be callable.");
		}
	});},
	get set_message_error () {return __get__ (this, function (self, message_error) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'message_error': var message_error = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		$ ('#phanterpwa-widget-{0}'.format (self.identifier)).find ('.phanterpwa-widget-message_error').html (message_error);
		$ ('#phanterpwa-widget-{0}'.format (self.identifier)).addClass ('has_error');
		self._message_error;
	});},
	get del_message_error () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.set_message_error ('');
		$ ('#phanterpwa-widget-{0}'.format (self.identifier)).removeClass ('has_error');
	});},
	get validate () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (callable (self._validator)) {
			self._validator (self);
		}
	});},
	get add_new_value () {return __get__ (this, function (self, value) {
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
		if (isinstance (value, tuple ([list, tuple]))) {
			if (len (value) == 2) {
				self._value.append (value);
			}
			else {
				console.error ('New value must be list, tuple (length == 2) or string');
			}
		}
		else if (isinstance (value, str)) {
			self._value.append (['${0}:{1}'.format (new Date ().getTime (), value), value]);
		}
		self._process_list_string ();
		self._process_list_predefinition_string ();
		var target = $ (self.target_selector);
		self._xml_list_predefinition_string.html_to (target.find ('.phanterpwa-widget-list_string-list_predefinitions_values'));
		target.find ('.phanterpwa-widget-list_string-value-predefinition-content').find ('.phanterpwa-widget-list_string-value-icon_plus_predifinition').off ('click.plus_predefinition_liststring').on ('click.plus_predefinition_liststring', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._add_value_predefinition (this);
		}));
		$ ('#phanterpwa-widget-list_string-input-{0}'.format (self.identifier)).val (JSON.stringify (JSON.stringify (self._input_value)));
		$ ('#phanterpwa-widget-list_string-list_values-{0}'.format (self.identifier)).html (self._xml_list_string.jquery ()).find ('.phanterpwa-widget-list_string-plus_icon-container').find ('.phanterpwa-widget-list_string-value-icon_plus').off ('click.icon_plus_lstr').on ('click.icon_plus_lstr', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._on_click_icon_plus (this);
		}));
		$ ('#phanterpwa-widget-list_string-list_values-{0}'.format (self.identifier)).find ('.phanterpwa-widget-list_string-value-icon_close').off ('click.remove_lstr_item').on ('click.remove_lstr_item', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._on_click_remove (this);
		}));
		self._check_value ();
	});},
	get _add_div_animation () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var wrapper = el.find ('.phanterpwa-widget-wrapper');
		if (wrapper.hasClass ('phanterpwa-widget-wear-material')) {
			if (wrapper.find ('.material-widgets-animation-onfocus').length == 0) {
				wrapper.find ('input').after (CONCATENATE (HR (__kwargtrans__ ({_class: 'material-widgets-animation-offfocus'})), DIV (__kwargtrans__ ({_class: 'material-widgets-animation-onfocus'}))).jquery ());
			}
		}
	});},
	get _check_value () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var target = $ (self.target_selector);
		if (len (self._value) > 0) {
			target.find ('.phanterpwa-widget-list_string-wrapper').addClass ('has_value');
		}
		else {
			target.find ('.phanterpwa-widget-list_string-wrapper').removeClass ('has_value');
		}
	});},
	get _save_new () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		$ ('body').off ('click.close_input_plus_lstr');
		var target = $ (self.target_selector);
		var val = target.find ('.phanterpwa-widget-list_string-new_value-container').find ('input').val ();
		if (val !== '') {
			var key_value = '${0}:{1}'.format (new Date ().getTime (), val);
			var new_value = val;
			self._value.append ([key_value, new_value]);
		}
		self._process_list_string ();
		$ ('#phanterpwa-widget-list_string-input-{0}'.format (self.identifier)).val (JSON.stringify (self._input_value));
		$ ('#phanterpwa-widget-list_string-list_values-{0}'.format (self.identifier)).html (self._xml_list_string.jquery ()).find ('.phanterpwa-widget-list_string-plus_icon-container').find ('.phanterpwa-widget-list_string-value-icon_plus').off ('click.icon_plus_lstr').on ('click.icon_plus_lstr', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._on_click_icon_plus (this);
		}));
		$ ('#phanterpwa-widget-list_string-list_values-{0}'.format (self.identifier)).find ('.phanterpwa-widget-list_string-value-icon_close').off ('click.remove_lstr_item').on ('click.remove_lstr_item', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._on_click_remove (this);
		}));
		self._check_value ();
	});},
	get _on_click_icon_save () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._save_new ();
	});},
	get _on_enter_key_press () {return __get__ (this, function (self, event, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var code = event.keyCode || event.which;
		if (code == 13) {
			self._save_new ();
		}
	});},
	get _on_click_remove () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var p = $ (el).parent ();
		var val = str (p.data ('value'));
		var new_value = [];
		self._dict_input_value = dict ({});
		for (var x of self._value) {
			if (x [0] !== val) {
				self._dict_input_value [str (x [0])] = x [1];
				new_value.append ([str (x [0]), x [1]]);
			}
			else {
				self._data_dict [str (x [0])] = x [1];
			}
		}
		self._value = new_value;
		self._process_list_string ();
		self._process_list_predefinition_string ();
		var target = $ (self.target_selector);
		self._xml_list_predefinition_string.html_to (target.find ('.phanterpwa-widget-list_string-list_predefinitions_values'));
		target.find ('.phanterpwa-widget-list_string-value-predefinition-content').find ('.phanterpwa-widget-list_string-value-icon_plus_predifinition').off ('click.plus_predefinition_liststring').on ('click.plus_predefinition_liststring', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._add_value_predefinition (this);
		}));
		$ ('#phanterpwa-widget-list_string-input-{0}'.format (self.identifier)).val (JSON.stringify (self._input_value));
		$ ('#phanterpwa-widget-list_string-list_values-{0}'.format (self.identifier)).html (self._xml_list_string.jquery ()).find ('.phanterpwa-widget-list_string-plus_icon-container').find ('.phanterpwa-widget-list_string-value-icon_plus').off ('click.icon_plus_lstr').on ('click.icon_plus_lstr', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._on_click_icon_plus (this);
		}));
		$ ('#phanterpwa-widget-list_string-list_values-{0}'.format (self.identifier)).find ('.phanterpwa-widget-list_string-value-icon_close').off ('click.remove_lstr_item').on ('click.remove_lstr_item', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._on_click_remove (this);
		}));
		self._check_value ();
	});},
	get _on_click_icon_plus () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (callable (self._on_click_new)) {
			self._on_click_new (self);
		}
		else {
			var target = $ (self.target_selector);
			var p_cont = target.find ('.phanterpwa-widget-list_string-plus_icon-container').addClass ('has_input');
			p_cont.html (CONCATENATE (DIV (INPUT (), __kwargtrans__ ({_class: 'phanterpwa-widget-list_string-new_value-container'})), DIV (I (__kwargtrans__ ({_class: 'fas fa-check'})), __kwargtrans__ ({_class: 'icon_button wave_on_click phanterpwa-widget-list_string-value-save'}))).jquery ());
			p_cont.find ('.phanterpwa-widget-list_string-value-save').off ('click.on_icon_save_lstr').on ('click.on_icon_save_lstr', (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self._on_click_icon_save (this);
			}));
			p_cont.find ('input').focus ().off ('keypress.map_enter_lstr').on ('keypress.map_enter_lstr', (function __lambda__ (event) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'event': var event = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				return self._on_enter_key_press (event, this);
			}));
			setTimeout ((function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return $ ('body').off ('click.close_input_plus_lstr').on ('click.close_input_plus_lstr', (function __lambda__ (ev) {
					if (arguments.length) {
						var __ilastarg0__ = arguments.length - 1;
						if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
							var __allkwargs0__ = arguments [__ilastarg0__--];
							for (var __attrib0__ in __allkwargs0__) {
								switch (__attrib0__) {
									case 'ev': var ev = __allkwargs0__ [__attrib0__]; break;
								}
							}
						}
					}
					else {
					}
					return self._close_on_click_out (ev, this);
				}));
			}), 300);
		}
	});},
	get _on_click_label () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		if (!(p.hasClass ('focus'))) {
			p.find ('input').focus ().trigger ('focus');
		}
	});},
	get _switch_focus () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		p.removeClass ('has_error');
		if (el.is (':focus')) {
			$ ('.phanterpwa-widget-wrapper').removeClass ('focus').removeClass ('pre_focus');
			p.addClass ('focus');
		}
		self._check_value (el);
	});},
	get reload () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.start ();
	});},
	get _close_on_click_out () {return __get__ (this, function (self, event, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var target = $ (self.target_selector);
		if ($ (event.target).closest ('.phanterpwa-widget-list_string-plus_icon-container').length == 0) {
			target.find ('.phanterpwa-widget-list_string-plus_icon-container').html (DIV (I (__kwargtrans__ ({_class: 'fas fa-plus'})), __kwargtrans__ ({_class: 'icon_button wave_on_click phanterpwa-widget-list_string-value-icon_plus'})).jquery ());
			$ ('body').off ('click.close_input_plus_lstr');
			target.find ('.phanterpwa-widget-list_string-plus_icon-container').removeClass ('has_input').find ('.phanterpwa-widget-list_string-value-icon_plus').off ('click.icon_plus_lstr').on ('click.icon_plus_lstr', (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self._on_click_icon_plus (this);
			}));
		}
	});},
	get _binds () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var target = $ (self.target_selector);
		self._add_div_animation (target);
		target.find ('.phanterpwa-widget-list_string-list_values').off ('focusin.list_string_vals').on ('focusin.list_string_vals', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._switch_focus (this);
		}));
		target.find ('.phanterpwa-widget-list_string-list_values').off ('focusout.list_string_vals').on ('focusout.list_string_vals', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._switch_focus (this);
		}));
		target.find ('.phanterpwa-widget-list_string-plus_icon-container').find ('.icon_button').off ('click.icon_plus_lstr').on ('click.icon_plus_lstr', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._on_click_icon_plus (this);
		}));
		target.find ('label').off ('click.phanterpwa-event-input_materialize').on ('click.phanterpwa-event-input_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return target.find ('.phanterpwa-widget-list_string-list_values').focus ();
		}));
		$ ('#phanterpwa-widget-list_string-list_values-{0}'.format (self.identifier)).find ('.phanterpwa-widget-list_string-value-icon_close').off ('click.remove_lstr_item').on ('click.remove_lstr_item', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._on_click_remove (this);
		}));
		target.find ('.phanterpwa-widget-list_string-value-predefinition-content').find ('.phanterpwa-widget-list_string-value-icon_plus_predifinition').off ('click.plus_predefinition_liststring').on ('click.plus_predefinition_liststring', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._add_value_predefinition (this);
		}));
	});},
	get start () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var target = $ (self.target_selector);
		self._add_div_animation (target);
		self._binds ();
	});},
	get value () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return self._value;
	});}
});
export var Textarea =  __class__ ('Textarea', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self._label = parameters.py_get ('label', null);
		self._placeholder = parameters.py_get ('placeholder', null);
		self._name = parameters.py_get ('name', null);
		self._value = parameters.py_get ('value', '');
		self._icon = parameters.py_get ('icon', null);
		self._message_error = parameters.py_get ('message_error', null);
		self._can_empty = parameters.py_get ('can_empty', false);
		self._validator = parameters.py_get ('validators', null);
		self._wear = parameters.py_get ('wear', 'material');
		self._form = parameters.py_get ('form', null);
		var wrapper_attr = dict ({'_class': 'phanterpwa-widget-wrapper phanterpwa-widget-textarea-wrapper phanterpwa-widget-wear-{0}'.format (self._wear)});
		parameters ['_id'] = identifier;
		if (__in__ ('_class', parameters)) {
			parameters ['_class'] = '{0}{1}'.format (parameters ['_class'], ' phanterpwa-widget-textarea');
		}
		else {
			parameters ['_class'] = 'phanterpwa-widget-textarea';
		}
		var label = '';
		if (self._label !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_label');
			var label = LABEL (self._label, __kwargtrans__ ({_for: 'phanterpwa-widget-textarea-textarea-{0}'.format (identifier)}));
		}
		if (self._message_error !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_error');
		}
		if (self._icon !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_icon');
		}
		if (self._value !== '') {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_value');
		}
		var html = DIV (TEXTAREA (self._value, __kwargtrans__ (dict ({'_id': 'phanterpwa-widget-textarea-textarea-{0}'.format (identifier), '_class': 'phanterpwa-widget-textarea-textarea', '_name': self._name, '_placeholder': self._placeholder, '_data-validators': JSON.stringify (self._validator), '_data-form': self._form}))), label, DIV (I (__kwargtrans__ ({_class: 'fas fa-check'})), __kwargtrans__ ({_class: 'phanterpwa-widget-check'})), DIV (self.get_message_error (), __kwargtrans__ ({_class: 'phanterpwa-widget-message_error phanterpwa-widget-textarea-message_error'})), __kwargtrans__ (wrapper_attr));
		Widget.__init__ (self, identifier, html, __kwargtrans__ (parameters));
	});},
	get get_message_error () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._message_error !== null) {
			return self._message_error;
		}
		else {
			return '';
		}
	});},
	get set_message_error () {return __get__ (this, function (self, message_error) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'message_error': var message_error = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		$ ('#phanterpwa-widget-{0}'.format (self.identifier)).find ('.phanterpwa-widget-message_error').html (message_error);
		$ ('#phanterpwa-widget-{0}'.format (self.identifier)).addClass ('has_error');
		self._message_error;
	});},
	get del_message_error () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.set_message_error ('');
		$ ('#phanterpwa-widget-{0}'.format (self.identifier)).removeClass ('has_error');
	});},
	get validate () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (callable (self._validator)) {
			self._validator (self);
		}
	});},
	get _add_div_animation () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var wrapper = el.find ('.phanterpwa-widget-wrapper');
		if (wrapper.hasClass ('phanterpwa-widget-wear-material')) {
			if (wrapper.find ('.material-widgets-animation-onfocus').length == 0) {
				wrapper.find ('textarea').after (CONCATENATE (HR (__kwargtrans__ ({_class: 'material-widgets-animation-offfocus'})), DIV (__kwargtrans__ ({_class: 'material-widgets-animation-onfocus'}))).jquery ());
			}
		}
	});},
	get _check_value () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		if (el.val () !== '') {
			p.addClass ('has_value');
		}
		else {
			p.removeClass ('has_value');
		}
	});},
	get _on_click_label () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		if (!(p.hasClass ('focus'))) {
			p.find ('textarea').focus ().trigger ('focus');
		}
	});},
	get _switch_focus () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		p.removeClass ('has_error');
		if (el.is (':focus')) {
			$ ('.phanterpwa-widget-wrapper').removeClass ('focus').removeClass ('pre_focus');
			p.addClass ('focus');
		}
		else {
			p.removeClass ('focus');
		}
		self._check_value (el);
	});},
	get _remove_focus () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		if (el.is (':focus')) {
			p.addClass ('focus');
		}
		else {
			p.removeClass ('focus');
		}
		self._check_value (el);
	});},
	get reload () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.start ();
	});},
	get _autoresize () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var h = $ (el).prop ('scrollHeight');
		var text = $ (el).val ();
		var split_ = text.py_split ('\n');
		if (text == '') {
			$ (el).css ('height', 34);
		}
		else if (len (split_) == 2) {
			var s = 50;
			if ($ (el).prop ('scrollHeight') > s) {
				$ (el).css ('height', $ (el).prop ('scrollHeight'));
			}
			else {
				$ (el).css ('height', 50);
			}
		}
		else if (len (split_) > 2) {
			$ (el).css ('height', 'auto').css ('height', $ (el).prop ('scrollHeight'));
		}
		else {
			$ (el).css ('height', $ (el).prop ('scrollHeight'));
		}
	});},
	get _binds () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var target = $ (self.target_selector);
		self._add_div_animation (target);
		target.find ('textarea').off ('focus.phanterpwa-event-textarea_materialize').on ('focus.phanterpwa-event-textarea_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._switch_focus (this);
		}));
		target.find ('textarea').off ('focusout.phanterpwa-event-textarea_materialize').on ('focusout.phanterpwa-event-textarea_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._switch_focus (this);
		}));
		target.find ('textarea').off ('change.phanterpwa-event-textarea_materialize').on ('change.phanterpwa-event-textarea_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._check_value (this);
		}));
		target.off ('click.phanterpwa-event-textarea_materialize').on ('click.phanterpwa-event-textarea_materialize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._on_click_label (this);
		}));
		target.find ('textarea').attr ('style', 'height: auto; overflow-y:hidden').off ('input.textarea_autoresize').on ('input.textarea_autoresize', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._autoresize (this);
		}));
		var size = target.find ('textarea').css ('height', 31).prop ('scrollHeight');
		target.find ('textarea').css ('height', size);
	});},
	get start () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._binds ();
	});}
});
export var Inert =  __class__ ('Inert', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self._label = parameters.py_get ('label', null);
		self._name = parameters.py_get ('name', null);
		self._value = parameters.py_get ('value', '');
		self._wear = parameters.py_get ('wear', 'material');
		self._form = parameters.py_get ('form', null);
		var wrapper_attr = dict ({'_class': 'phanterpwa-widget-wrapper its_disabled phanterpwa-widget-wear-{0} {1}'.format (self._wear, 'phanterpwa-widget-inert-wrapper')});
		parameters ['_id'] = identifier;
		if (__in__ ('_class', parameters)) {
			parameters ['_class'] = '{0}{1}'.format (parameters ['_class'], ' phanterpwa-widget-inert');
		}
		else {
			parameters ['_class'] = 'phanterpwa-widget-inert';
		}
		var label = '';
		if (self._label !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_label');
			var label = LABEL (self._label, __kwargtrans__ ({_for: 'phanterpwa-widget-inert-inert-{0}'.format (identifier)}));
		}
		if (self._value !== '') {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_value');
		}
		var html = DIV (INPUT (__kwargtrans__ (dict ({'_id': 'phanterpwa-widget-inert-input-{0}'.format (identifier), '_class': 'phanterpwa-widget-inert-input', '_name': self._name, '_value': self._value, '_data-form': self._form, '_disabled': 'disabled'}))), HR (__kwargtrans__ ({_class: 'material-widgets-animation-offfocus'})), label, __kwargtrans__ (wrapper_attr));
		Widget.__init__ (self, identifier, html, __kwargtrans__ (parameters));
	});}
});
export var CheckBox =  __class__ ('CheckBox', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self._label = parameters.py_get ('label', null);
		self._name = parameters.py_get ('name', null);
		self._value = parameters.py_get ('value', false);
		self._can_empty = parameters.py_get ('can_empty', false);
		self._wear = parameters.py_get ('wear', 'material');
		self._form = parameters.py_get ('form', null);
		self._disabled = parameters.py_get ('disabled', false);
		var wrapper_attr = dict ({'_class': 'phanterpwa-widget-wrapper phanterpwa-widget-checkbox-wrapper phanterpwa-widget-wear-{0}'.format (self._wear)});
		parameters ['_id'] = identifier;
		if (__in__ ('_class', parameters)) {
			parameters ['_class'] = '{0}{1}'.format (parameters ['_class'], ' phanterpwa-widget-checkbox');
		}
		else {
			parameters ['_class'] = 'phanterpwa-widget-checkbox';
		}
		var label = '';
		if (self._label !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_label');
			var label = LABEL (self._label, __kwargtrans__ ({_for: 'phanterpwa-widget-checkbox-input-{0}'.format (identifier)}));
		}
		if (self._disabled === true) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' disabled');
		}
		var _checked = null;
		if (self._value === true || self._Value === 'true') {
			var _checked = 'checked';
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_true');
		}
		var html = DIV (INPUT (__kwargtrans__ (dict ({'_id': 'phanterpwa-widget-checkbox-input-{0}'.format (identifier), '_class': 'phanterpwa-widget-checkbox-input', '_name': self._name, '_value': self._value, '_placeholder': self._placeholder, '_type': 'checkbox', '_checked': _checked, '_data-form': self._form}))), DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-check'})), __kwargtrans__ ({_class: 'phanterpwa-widget-checkbox-true'})), DIV (__kwargtrans__ ({_class: 'phanterpwa-widget-checkbox-option-container'})), __kwargtrans__ ({_class: 'phanterpwa-widget-checkbox-checkbox', _tabindex: 0})), label, __kwargtrans__ (wrapper_attr));
		Widget.__init__ (self, identifier, html, __kwargtrans__ (parameters));
	});},
	get set_value () {return __get__ (this, function (self, value) {
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
		if (!(self._disabled)) {
			if (value) {
				self._value = true;
				$ (self.target_selector).find ('.phanterpwa-widget-checkbox-wrapper').addClass ('has_true');
			}
			else {
				self._value = false;
				$ (self.target_selector).find ('.phanterpwa-widget-checkbox-wrapper').removeClass ('has_true');
			}
			$ (self.target_selector).find ('input').prop ('checked', self._value).val (self._value).trigger ('change');
		}
	});},
	get _on_check_change () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(self._disabled)) {
			if ($ (el) [0].checked) {
				self._value = true;
				$ (self.target_selector).find ('.phanterpwa-widget-checkbox-wrapper').addClass ('has_true');
			}
			else {
				self._value = false;
				$ (self.target_selector).find ('.phanterpwa-widget-checkbox-wrapper').removeClass ('has_true');
			}
		}
		else {
			$ (self.target_selector).find ('input').prop ('checked', self._value).val (self._value);
		}
	});},
	get set_disabled () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._disabled = true;
		$ (self.target_selector).find ('.phanterpwa-widget-wrapper').addClass ('disabled');
	});},
	get set_enabled () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._disabled = false;
		$ (self.target_selector).find ('.phanterpwa-widget-wrapper').removeClass ('disabled');
	});},
	get _switch_value () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(self._disabled)) {
			var el = $ (el);
			var p = el.parent ();
			if (p.hasClass ('has_true')) {
				p.removeClass ('has_true');
				self._value = false;
			}
			else {
				p.addClass ('has_true');
				self._value = true;
			}
			p.find ('input').prop ('checked', self._value).val (self._value).trigger ('change');
		}
	});},
	get _switch_focus () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		if (el.is (':focus')) {
			$ ('.phanterpwa-widget-wrapper').removeClass ('focus').removeClass ('pre_focus');
			p.addClass ('focus');
		}
		else {
			p.removeClass ('focus');
		}
	});},
	get reload () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.start ();
	});},
	get _binds () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var target = $ (self.target_selector);
		target.find ('.phanterpwa-widget-checkbox-checkbox').off ('click.phanterpwa-event-checkbox-switch').on ('click.phanterpwa-event-checkbox-switch', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._switch_value (this);
		}));
		target.find ('.phanterpwa-widget-checkbox-checkbox').off ('focusin.phanterpwa-event-checkbox-focus').on ('focusin.phanterpwa-event-checkbox-focus', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._switch_focus (this);
		}));
		target.find ('.phanterpwa-widget-checkbox-checkbox').off ('focusout.phanterpwa-event-checkbox-focus').on ('focusout.phanterpwa-event-checkbox-focus', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._switch_focus (this);
		}));
		$ (self.target_selector).find ('input').off ('change.phanterpwa-event-checkbox-change').on ('change.phanterpwa-event-checkbox-change', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._on_check_change (this);
		}));
	});},
	get start () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._binds ();
		if ($ ('#phanterpwa-widget-checkbox-input-{0}'.format (self.identifier)).prop ('checked')) {
			$ (self.target_selector).find ('.phanterpwa-widget-checkbox-wrapper').addClass ('has_true');
		}
	});}
});
export var RadioBox =  __class__ ('RadioBox', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self._label = parameters.py_get ('label', null);
		self._name = parameters.py_get ('name', null);
		self._value = parameters.py_get ('value', false);
		self._can_empty = parameters.py_get ('can_empty', false);
		self._wear = parameters.py_get ('wear', 'material');
		self._form = parameters.py_get ('form', null);
		self._group = parameters.py_get ('group', null);
		var wrapper_attr = dict ({'_class': 'phanterpwa-widget-wrapper phanterpwa-widget-radio-wrapper phanterpwa-widget-wear-{0}'.format (self._wear)});
		parameters ['_id'] = identifier;
		if (__in__ ('_class', parameters)) {
			parameters ['_class'] = '{0}{1}'.format (parameters ['_class'], ' phanterpwa-widget-radio');
		}
		else {
			parameters ['_class'] = 'phanterpwa-widget-radio';
		}
		var label = '';
		if (self._label !== null) {
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_label');
			var label = LABEL (self._label, __kwargtrans__ ({_for: 'phanterpwa-widget-radio-input-{0}'.format (identifier)}));
		}
		var _checked = null;
		if (self._value === true || self._Value === 'true') {
			var _checked = 'checked';
			wrapper_attr ['_class'] = '{0}{1}'.format (wrapper_attr ['_class'], ' has_true');
		}
		var html = DIV (INPUT (__kwargtrans__ (dict ({'_id': 'phanterpwa-widget-radio-input-{0}'.format (identifier), '_class': 'phanterpwa-widget-radio-input', '_name': self._name, '_value': self._value, '_placeholder': self._placeholder, '_type': 'radio', '_checked': _checked, '_data-instance': self.identifier, '_data-form': self._form}))), DIV (DIV (self._xml_radio (), __kwargtrans__ ({_class: 'phanterpwa-widget-radio-option-container'})), __kwargtrans__ ({_class: 'phanterpwa-widget-radio-radio', _tabindex: 0})), label, __kwargtrans__ (wrapper_attr));
		Widget.__init__ (self, identifier, html, __kwargtrans__ (parameters));
	});},
	get _change_xml_radio () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ ('#phanterpwa-widget-radio-input-{0}'.format (self.identifier));
		var value = el.prop ('checked');
		var p = el.parent ();
		if (value === true) {
			p.addClass ('has_true');
			$ ('#phanterpwa-widget-radio-input-{0}'.format (self.identifier)).val (value);
			self._value = true;
		}
		else {
			p.removeClass ('has_true');
			$ ('#phanterpwa-widget-radio-input-{0}'.format (self.identifier)).val (value);
			self._value = false;
		}
		self._xml_radio ().html_to ($ (self.target_selector).find ('.phanterpwa-widget-radio-option-container'));
	});},
	get _xml_radio () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._value === true) {
			return DIV (I (__kwargtrans__ ({_class: 'far fa-dot-circle'})), __kwargtrans__ ({_class: 'phanterpwa-widget-radio-true'}));
		}
		return DIV (I (__kwargtrans__ ({_class: 'far fa-circle'})), __kwargtrans__ ({_class: 'phanterpwa-widget-radio-false'}));
	});},
	get _set_radio_value () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		p.addClass ('has_true');
		$ ('.phanterpwa-widget-wrapper').removeClass ('focus').removeClass ('pre_focus');
		p.addClass ('focus');
		self._value = true;
		p.find ('input').prop ('checked', self._value).val (self._value);
		$ ('.phanterpwa-widget-radio-input').trigger ('change');
	});},
	get _switch_focus () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		if (el.is (':focus')) {
			$ ('.phanterpwa-widget-wrapper').removeClass ('focus').removeClass ('pre_focus');
			p.addClass ('focus');
		}
		else {
			p.removeClass ('focus');
		}
	});},
	get reload () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.start ();
	});},
	get _binds () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var target = $ (self.target_selector);
		target.find ('.phanterpwa-widget-radio-radio').off ('click.phanterpwa-event-radio-switch').on ('click.phanterpwa-event-radio-switch', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._set_radio_value (this);
		}));
		target.find ('label').off ('click.phanterpwa-event-radio-switch').on ('click.phanterpwa-event-radio-switch', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._set_radio_value (this);
		}));
		target.find ('input').off ('change.phanterpwa-event-radio-switch').on ('change.phanterpwa-event-radio-switch', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._change_xml_radio ();
		}));
	});},
	get start () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._binds ();
	});}
});
export var MenuBox =  __class__ ('MenuBox', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier, button) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						case 'button': var button = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
			var options = tuple ([].slice.apply (arguments).slice (3, __ilastarg0__ + 1));
		}
		else {
			var options = tuple ();
		}
		var class_button = '';
		if (button === undefined || button === null) {
			self._button = I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'}));
			var class_button = ' icon_button';
		}
		else {
			if (isinstance (button, helpers.XmlConstructor) && button.tag.upper () == 'I') {
				var class_button = ' icon_button';
			}
			self._button = button;
		}
		self._custom_menu = parameters.py_get ('custom_menu', null);
		self._xml_menu = [];
		self._onreload = parameters.py_get ('onReload', null);
		self._onopen = parameters.py_get ('onOpen', null);
		self._options = options;
		for (var x of self._options) {
			self.add_option (x);
		}
		self.set_z_index (parameters.py_get ('z_index', null));
		self._close_after_click_in = parameters.py_get ('close_after_click_in', true);
		self.set_recalc_on_scroll (parameters.py_get ('recalc_on_scroll', true));
		self._width = parameters.py_get ('width', null);
		var html = DIV (self._button, __kwargtrans__ ({_class: 'phanterpwa-widget-menubox-button{0}'.format (class_button), _phanterpwa_dowpdown_target: 'drop_{0}'.format (identifier)}));
		if (__in__ ('_class', parameters)) {
			parameters ['_class'] = '{0}{1}'.format (parameters ['_class'], ' phanterpwa-widget-menubox');
		}
		else {
			parameters ['_class'] = 'phanterpwa-widget-menubox';
		}
		Widget.__init__ (self, identifier, html, __kwargtrans__ (parameters));
	});},
	get add_option () {return __get__ (this, function (self, option) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'option': var option = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (isinstance (option, MenuOption)) {
			self._xml_menu.append (option);
		}
		else if (isinstance (option, helpers.XmlConstructor) && option.tag.upper () == 'HR') {
			self._xml_menu.append (option);
		}
		else {
			self._xml_menu.append (DIV (option, __kwargtrans__ ({_class: 'phanterpwa-widget-menubox-option wave_on_click'})));
		}
	});},
	get _on_click () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._custom_menu === null) {
			var content = self._xml_menu;
		}
		else {
			var content = [self._custom_menu];
		}
		self.modal = PseudoModal (self.target_selector, DIV (...content, __kwargtrans__ ({_id: 'phanterpwa-widget-menubox-options-content-{0}'.format (self.identifier), _class: 'phanterpwa-widget-menubox-options-content', _style: (self._width === null ? null : 'width: {0}px'.format (self._width))})), __kwargtrans__ ({vertical: true, width: self._width, z_index: self._z_index, recalc_on_scroll: self._recalc_on_scroll, on_open: self._onopen}));
		self.modal.start ();
		if (self._close_after_click_in === true) {
			$ ('#phanterpwa-widget-menubox-options-content-{0}'.format (self.identifier)).find ('.phanterpwa-widget-menubox-option').off ('click.close_pseudo_modal').on ('click.close_pseudo_modal', (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self.modal.close ();
			}));
			$ ('#phanterpwa-widget-menubox-options-content-{0}'.format (self.identifier)).find ('ul>li').off ('click.close_pseudo_modal').on ('click.close_pseudo_modal', (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self.modal.close ();
			}));
			$ ('#phanterpwa-widget-menubox-options-content-{0}'.format (self.identifier)).find ('ul>span').off ('click.close_pseudo_modal').on ('click.close_pseudo_modal', (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self.modal.close ();
			}));
		}
	});},
	get set_recalc_on_scroll () {return __get__ (this, function (self, value) {
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
		if (isinstance (value, bool)) {
			self._recalc_on_scroll = value;
		}
		else {
			console.error ('The recalc_on_scroll must be boolean!');
		}
	});},
	get set_z_index () {return __get__ (this, function (self, value) {
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
		if (str (value).isdigit ()) {
			self._z_index = value;
		}
		else if (value === null) {
			self._z_index = null;
		}
		else {
			self._z_index = null;
			console.error ('The z_index must be integer or None!');
		}
	});},
	get reload () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.start ();
	});},
	get start () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var target = $ (self.target_selector);
		target.off ('click.open_menu_phanterpwa').on ('click.open_menu_phanterpwa', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._on_click (this);
		}));
		if (callable (self._onreload)) {
			self._onreload (target);
		}
	});}
});
export var MenuOption =  __class__ ('MenuOption', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		var attributes = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: attributes [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete attributes.__kwargtrans__;
			}
			var content = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var content = tuple ();
		}
		if (__in__ ('_class', attributes)) {
			attributes ['_class'] = 'phanterpwa-widget-menubox-option {0}'.format (attributes ['_class']);
		}
		else {
			attributes ['_class'] = 'phanterpwa-widget-menubox-option';
		}
		var tag = 'div';
		if (__in__ ('_href', attributes)) {
			var tag = 'a';
		}
		helpers.XmlConstructor.__init__ (self, tag, false, ...content, __kwargtrans__ (attributes));
	});}
});
export var PseudoModal =  __class__ ('PseudoModal', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, source_selector, xml) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'source_selector': var source_selector = __allkwargs0__ [__attrib0__]; break;
						case 'xml': var xml = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self.source_selector = source_selector;
		self._xml = xml;
		self._identifier = window.PhanterPWA.get_id ('pseudomodal');
		self.pX = parameters.py_get ('pX', 0);
		self.pY = parameters.py_get ('pY', 0);
		self.data = parameters.py_get ('data', null);
		self.value = parameters.py_get ('value', null);
		self.on_close = parameters.py_get ('on_close', null);
		self._width = parameters.py_get ('width', 'auto');
		self.placeholder = parameters.py_get ('placeholder', null);
		self._is_select = parameters.py_get ('is_select', false);
		self._to_top = false;
		self._to_left = false;
		self._vertical_position = parameters.py_get ('vertical', false);
		self._z_index = parameters.py_get ('z_index', null);
		self._recalc_on_scroll = parameters.py_get ('recalc_on_scroll', false);
		self.on_open = parameters.py_get ('on_open', null);
	});},
	get close () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		$ ('#{0}'.format (self._identifier)).fadeOut ();
		var target = $ (self.source_selector);
		target.attr ('phanterpwa-widget-pseudomodal', 'disabled');
		if (!(window.PhanterPWA.DEBUG)) {
			setTimeout ((function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return $ ('#{0}'.format (self._identifier)).remove ();
			}), 3000);
		}
		if (self.on_close !== null && callable (self.on_close)) {
			self.on_close ();
		}
	});},
	get _close_on_click_out () {return __get__ (this, function (self, event) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if ($ (event.target).closest ('.phanterpwa-component-pseudomodal-content').length == 0) {
			if ($ (event.target).closest (self.source_selector).length == 0) {
				if ($ (event.target).parent ().length > 0) {
					self.close ();
				}
			}
		}
	});},
	get _get_source_dimentions () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.viewport = [$ (window).width (), $ (window).height ()];
		self.document_size = [$ (document).width (), $ (document).height ()];
		self.scroll_top = $ (document).scrollTop ();
		self.scroll_left = $ (document).scrollLeft ();
		self.theight = $ (self.source_selector).height ();
		self.twidth = $ (self.source_selector).width ();
		self.toffset = $ (self.source_selector).offset ();
		self.space_bottom = ((self.viewport [1] - self.toffset ['top']) - self.theight) + self.scroll_top;
		self.space_top = self.toffset ['top'] - self.scroll_top;
		if (self._vertical_position) {
			self.space_right = ((self.viewport [0] - self.toffset ['left']) - self.twidth) + self.scroll_left;
			self.space_left = self.toffset ['left'] - self.scroll_left;
		}
	});},
	get _get_wside_show () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.space_left > self.space_right) {
			self._to_left = true;
		}
		else {
			self._to_left = false;
		}
	});},
	get _get_side_show () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.space_top > self.space_bottom) {
			self._to_top = true;
		}
		else {
			self._to_top = false;
		}
	});},
	get _calc_position () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if ($ (self.source_selector).length == 0) {
			$ (document).off ('scroll.recalc_on_scroll{0}'.format (self._identifier));
			$ (window).off ('resize.recalc_on_resize{0}'.format (self._identifier));
		}
		else {
			self._get_source_dimentions ();
			self._get_side_show ();
			self._get_wside_show ();
			if (self._vertical_position) {
				$ ('#{0}-wrapper'.format (self._identifier)).css ('left', self.toffset ['left']).css ('top', self.toffset ['top']).css ('width', self.twidth);
				if (self._to_top && self._to_left) {
					$ ('#{0}-wrapper'.format (self._identifier)).find ('.phanterpwa-component-pseudomodal-content-wrapper').css ('bottom', 0).css ('top', 'auto').css ('margin-top', 'auto').css ('margin-bottom', self.theight / -(2)).css ('right', 0).css ('left', 'auto').css ('margin-left', 'auto').css ('margin-right', self.twidth / 2).css ('width', self._width).parent ().addClass ('to_top').removeClass ('to_bottom').addClass ('to_left').removeClass ('to_right');
				}
				else if (self._to_top) {
					$ ('#{0}-wrapper'.format (self._identifier)).find ('.phanterpwa-component-pseudomodal-content-wrapper').css ('bottom', 0).css ('top', 'auto').css ('margin-top', 'auto').css ('margin-bottom', self.theight / -(2)).css ('right', 'auto').css ('left', 0).css ('margin-left', self.twidth / 2).css ('width', self._width).parent ().addClass ('to_top').removeClass ('to_bottom').addClass ('to_right').removeClass ('to_left');
				}
				else if (self._to_left) {
					$ ('#{0}-wrapper'.format (self._identifier)).find ('.phanterpwa-component-pseudomodal-content-wrapper').css ('bottom', 'auto').css ('top', 0).css ('margin-top', self.theight / 2).css ('right', 0).css ('left', 'auto').css ('margin-left', 'auto').css ('margin-right', self.twidth / 2).css ('width', self._width).parent ().addClass ('to_bottom').removeClass ('to_top').addClass ('to_left').removeClass ('to_right');
				}
				else {
					$ ('#{0}-wrapper'.format (self._identifier)).find ('.phanterpwa-component-pseudomodal-content-wrapper').css ('bottom', 'auto').css ('top', 0).css ('margin-top', self.theight / 2).css ('right', 'auto').css ('left', 0).css ('margin-left', self.twidth / 2).css ('width', self._width).parent ().addClass ('to_bottom').removeClass ('to_top').addClass ('to_right').removeClass ('to_left');
				}
			}
			else {
				$ ('#{0}-wrapper'.format (self._identifier)).css ('left', self.toffset ['left']).css ('top', self.toffset ['top']).css ('width', self.twidth);
				if (self._to_top) {
					$ ('#{0}-wrapper'.format (self._identifier)).find ('.phanterpwa-component-pseudomodal-content-wrapper').css ('bottom', 0).css ('top', 'auto').css ('margin-top', 'auto').css ('width', self._width).parent ().addClass ('to_top').removeClass ('to_bottom');
				}
				else {
					$ ('#{0}-wrapper'.format (self._identifier)).find ('.phanterpwa-component-pseudomodal-content-wrapper').css ('bottom', 'auto').css ('top', 0).css ('margin-top', self.theight).css ('width', self._width).parent ().addClass ('to_bottom').removeClass ('to_top');
				}
			}
		}
	});},
	get start () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var style = 'display: none;';
		if (self._z_index !== null) {
			var style = 'display: none; z-index: {0} !important;'.format (self._z_index);
		}
		var html = DIV (DIV (DIV (DIV (self._xml, __kwargtrans__ ({_class: 'phanterpwa-component-pseudomodal-content'})), __kwargtrans__ ({_class: 'phanterpwa-component-pseudomodal-content-wrapper'})), __kwargtrans__ ({_id: '{0}-wrapper'.format (self._identifier), _class: 'phanterpwa-component-pseudomodal-wrapper'})), __kwargtrans__ ({_id: self._identifier, _class: 'phanterpwa-component-pseudomodal-container', _style: style}));
		$ ('.phanterpwa-component-pseudomodal-container').remove ();
		html.append_to ('body');
		$ ('#{0}'.format (self._identifier)).fadeIn ();
		self._calc_position ();
		if (self._recalc_on_scroll !== false) {
			$ (document).off ('scroll.recalc_on_scroll{0}'.format (self._identifier)).on ('scroll.recalc_on_scroll{0}'.format (self._identifier), self._calc_position);
		}
		$ (window).off ('resize.recalc_on_resize{0}'.format (self._identifier)).on ('resize.recalc_on_resize{0}'.format (self._identifier));
		$ (document).off ('click.close_pseudomodal').on ('click.close_pseudomodal', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self._close_on_click_out (event);
		}));
		var target = $ (self.source_selector);
		target.attr ('phanterpwa-widget-pseudomodal', 'enabled');
		if (callable (self.on_open)) {
			self.on_open ($ ('#{0}'.format (self._identifier)));
		}
	});}
});
export var FloatButton =  __class__ ('FloatButton', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		var attributes = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: attributes [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete attributes.__kwargtrans__;
			}
			var content = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var content = tuple ();
		}
		if (__in__ ('_class', attributes)) {
			attributes ['_class'] = 'wave_on_click phanterpwa-widget-floatbutton {0}'.format (attributes ['_class']);
		}
		else {
			attributes ['_class'] = 'wave_on_click phanterpwa-widget-floatbutton';
		}
		if (len (content) == 1 && isinstance (content [0], helpers.XmlConstructor) && content [0].tag.upper () == 'I') {
			attributes ['_class'] = 'icon_button {0}'.format (attributes ['_class']);
		}
		var tag = 'div';
		if (__in__ ('_href', attributes)) {
			var tag = 'a';
		}
		helpers.XmlConstructor.__init__ (self, tag, false, ...content, __kwargtrans__ (attributes));
	});}
});
export var FloatMenu =  __class__ ('FloatMenu', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier, button) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						case 'button': var button = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
			var options = tuple ([].slice.apply (arguments).slice (3, __ilastarg0__ + 1));
		}
		else {
			var options = tuple ();
		}
		var class_button = '';
		if (button === undefined || button === null) {
			self._button = I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'}));
			var class_button = ' icon_button';
		}
		else {
			if (isinstance (button, helpers.XmlConstructor) && button.tag.upper () == 'I') {
				var class_button = ' icon_button';
			}
			self._button = button;
		}
		self._xml_menu = DIV (__kwargtrans__ ({_id: 'phanterpwa-widget-floatmenu-options-content-{0}'.format (identifier), _class: 'phanterpwa-widget-floatmenu-options-wrapper'}));
		self._onopen = parameters.py_get ('onOpen', null);
		self._options = options;
		self._total_options = 0;
		for (var x of self._options) {
			self._total_options++;
			self.add_option (x);
		}
		var html = DIV (DIV (self._button, __kwargtrans__ ({_class: 'phanterpwa-widget-floatmenu-button{0}'.format (class_button)})), DIV (self._xml_menu, __kwargtrans__ ({_class: 'phanterpwa-widget-floatmenu-options-content'})), __kwargtrans__ ({_class: 'phanterpwa-widget-floatmenu-wrapper'}));
		if (__in__ ('_class', parameters)) {
			parameters ['_class'] = '{0}{1}'.format (parameters ['_class'], ' phanterpwa-widget-floatmenu');
		}
		else {
			parameters ['_class'] = 'phanterpwa-widget-floatmenu';
		}
		Widget.__init__ (self, identifier, html, __kwargtrans__ (parameters));
	});},
	get add_option () {return __get__ (this, function (self, option) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'option': var option = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (isinstance (option, FloatButton)) {
			self._xml_menu.append (option);
		}
		else if (isinstance (option, helpers.XmlConstructor) && option.tag.upper () == 'I') {
			self._xml_menu.append (DIV (option, __kwargtrans__ ({_class: 'phanterpwa-widget-floatbutton icon_button wave_on_click'})));
		}
		else {
			self._xml_menu.append (DIV (option, __kwargtrans__ ({_class: 'phanterpwa-widget-floatbutton wave_on_click'})));
		}
	});},
	get _on_click () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var target = $ (self.target_selector);
		target.find ('.phanterpwa-widget-floatmenu-wrapper');
		var element = target.find ('.phanterpwa-widget-floatmenu-wrapper');
		if (element.hasClass ('enabled')) {
			element.removeClass ('enabled');
		}
		else {
			element.addClass ('enabled');
			if (callable (self._onopen)) {
				self._onopen (self);
			}
		}
	});},
	get reload () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.start ();
	});},
	get start () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var target = $ (self.target_selector);
		target.find ('.phanterpwa-widget-floatmenu-options-content').html (self._xml_menu.jquery ());
		target.off ('click.open_floatmenu_phanterpwa').on ('click.open_floatmenu_phanterpwa', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._on_click (this);
		}));
		if (callable (self._onreload)) {
			self._onreload (target);
		}
	});}
});
export var Preloaders =  __class__ ('Preloaders', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		var plist = ['android'];
		var preloader = parameters.py_get ('preloader', 'android');
		if (!__in__ (preloader, plist)) {
			self._preloader = 'android';
			if (window.PhanterPWA.DEBUG) {
				console.error ("The preload '{0}' not exist! 'Android used'".format (preloader));
			}
		}
		else {
			self._preloader = preloader;
		}
		Widget.__init__ (self, identifier, self ['_{0}'.format (self._preloader)] (), __kwargtrans__ (parameters));
	});},
	get _android () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var android = DIV (DIV (DIV (DIV (DIV (DIV (DIV (__kwargtrans__ ({_class: 'phanterpwa_circle'})), __kwargtrans__ ({_class: 'phanterpwa_circle_clipper left'})), DIV (DIV (__kwargtrans__ ({_class: 'phanterpwa_circle'})), __kwargtrans__ ({_class: 'phanterpwa_gap-patch'})), DIV (DIV (__kwargtrans__ ({_class: 'phanterpwa_circle'})), __kwargtrans__ ({_class: 'phanterpwa_circle_clipper right'})), __kwargtrans__ ({_class: 'spinner-layer spinner-one'})), DIV (DIV (DIV (__kwargtrans__ ({_class: 'phanterpwa_circle'})), __kwargtrans__ ({_class: 'phanterpwa_circle_clipper left'})), DIV (DIV (__kwargtrans__ ({_class: 'phanterpwa_circle'})), __kwargtrans__ ({_class: 'phanterpwa_gap-patch'})), DIV (DIV (__kwargtrans__ ({_class: 'phanterpwa_circle'})), __kwargtrans__ ({_class: 'phanterpwa_circle_clipper right'})), __kwargtrans__ ({_class: 'spinner-layer spinner-two'})), DIV (DIV (DIV (__kwargtrans__ ({_class: 'phanterpwa_circle'})), __kwargtrans__ ({_class: 'phanterpwa_circle_clipper left'})), DIV (DIV (__kwargtrans__ ({_class: 'phanterpwa_circle'})), __kwargtrans__ ({_class: 'phanterpwa_gap-patch'})), DIV (DIV (__kwargtrans__ ({_class: 'phanterpwa_circle'})), __kwargtrans__ ({_class: 'phanterpwa_circle_clipper right'})), __kwargtrans__ ({_class: 'spinner-layer spinner-three'})), DIV (DIV (DIV (__kwargtrans__ ({_class: 'phanterpwa_circle'})), __kwargtrans__ ({_class: 'phanterpwa_circle_clipper left'})), DIV (DIV (__kwargtrans__ ({_class: 'phanterpwa_circle'})), __kwargtrans__ ({_class: 'phanterpwa_gap-patch'})), DIV (DIV (__kwargtrans__ ({_class: 'phanterpwa_circle'})), __kwargtrans__ ({_class: 'phanterpwa_circle_clipper right'})), __kwargtrans__ ({_class: 'spinner-layer spinner-four'})), __kwargtrans__ ({_class: 'phanterpwa_android'})), __kwargtrans__ ({_class: 'preloader-wrapper enabled'})), __kwargtrans__ ({_class: 'preload-wrapper'})), __kwargtrans__ ({_class: 'phanterpwa-components-preloaders-android'})).jquery ();
		return android;
	});}
});
export var Table =  __class__ ('Table', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
			var content = tuple ([].slice.apply (arguments).slice (2, __ilastarg0__ + 1));
		}
		else {
			var content = tuple ();
		}
		self._head = null;
		if (__in__ ('_class', parameters)) {
			parameters ['_class'] = '{0}{1}'.format (parameters ['_class'], ' phanterpwa-widget-table-container');
		}
		else {
			parameters ['_class'] = 'phanterpwa-widget-table-container';
		}
		for (var c of content) {
			if (isinstance (c, TableHead)) {
				self._head = c;
				c._table = self;
			}
			else if (isinstance (c, TableData)) {
				c._table = self;
			}
			else if (isinstance (c, TableFooterPagination)) {
				c._table = self;
				if (self._head !== null) {
					var colspan = self._head.len_head ();
					c._colspan = colspan;
					c._create_footer ();
				}
				self._footer = c;
			}
		}
		self.__child_html = TABLE (...content, __kwargtrans__ ({_class: 'phanterpwa-widget-table p-row'}));
		Widget.__init__ (self, identifier, self.__child_html, __kwargtrans__ (parameters));
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
		if (isinstance (value, tuple ([TableHead, TableData, TableFooterPagination]))) {
			value._table = self;
			if (isinstance (value, TableHead)) {
				self._head = value;
			}
			else if (isinstance (value, TableFooterPagination)) {
				if (self._head !== null) {
					var colspan = self._head.len_head ();
					value._colspan = colspan;
					value._create_footer ();
				}
				self._footer = value;
			}
		}
		self.__child_html.content.append (value);
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
		if (isinstance (value, tuple ([TableHead, TableData, TableFooterPagination]))) {
			value._table = self;
			if (isinstance (value, TableHead)) {
				self._head = value;
			}
			else if (isinstance (value, TableFooterPagination)) {
				if (self._head !== null) {
					var colspan = self._head.len_head ();
					value._colspan = colspan;
					value._create_footer ();
				}
				self._footer = value;
			}
		}
		self.__child_html.content.insert (pos, value);
	});},
	get sorted_field () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._head !== null) {
			return self._head.sorted_field ();
		}
		else {
			console.error ('The table not have TableHead instance!');
		}
	});}
});
export var TableHead =  __class__ ('TableHead', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
			var content = tuple ([].slice.apply (arguments).slice (2, __ilastarg0__ + 1));
		}
		else {
			var content = tuple ();
		}
		self._table = null;
		self._count_th = 0;
		self._sortable = parameters.py_get ('sortable', []);
		self._sort_by = parameters.py_get ('sort_by', null);
		self._sort_order = parameters.py_get ('sort_order', 'asc');
		self._on_click_sortable = parameters.py_get ('on_click_sortable', null);
		if (__in__ ('_class', parameters)) {
			parameters ['_class'] = '{0}{1}'.format (parameters ['_class'], ' phanterpwa-widget-table-head');
		}
		else {
			parameters ['_class'] = 'phanterpwa-widget-table-head';
		}
		self._create_head (content);
		Widget.__init__ (self, identifier, self.__child_html, __kwargtrans__ (parameters));
		self.tag = 'tr';
	});},
	get _create_head () {return __get__ (this, function (self, content) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'content': var content = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.__child_html = CONCATENATE ();
		self._count_th = len (content);
		if (isinstance (self._sortable, list) && len (self._sortable) > 0) {
			if (self._sort_order == 'desc') {
				var sort_order = 'desc';
			}
			else {
				var sort_order = 'asc';
			}
			for (var x of content) {
				if (isinstance (x, str)) {
					if (__in__ (x, self._sortable)) {
						if (self._sort_by == x) {
							self.__child_html.append (TH (DIV (x, __kwargtrans__ (dict ({'_class': 'phanterpwa-widget-table-head-th-sortable', '_data-value': x}))), __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th enabled {0}'.format (sort_order)})));
						}
						else {
							self.__child_html.append (TH (DIV (x, __kwargtrans__ (dict ({'_class': 'phanterpwa-widget-table-head-th-sortable', '_data-value': x}))), __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th'})));
						}
					}
					else {
						self.__child_html.append (TH (x, __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th'})));
					}
				}
				else if (isinstance (x, helpers.XmlConstructor) && (str (x._tag).upper () == 'TD' || str (x._tag).upper () == 'TH')) {
					if (str (x._tag).upper () == 'TH') {
						var class_base = 'phanterpwa-widget-table-head-th';
					}
					else {
						var class_base = 'phanterpwa-widget-table-head-td';
					}
					if (__in__ ('_class', x.attributes)) {
						if (!__in__ (class_base, x.attributes ['_class'])) {
							x.attributes ['_class'] = '{0} {1}'.format (x.attributes ['_class'], class_base);
						}
					}
					else {
						x.attributes ['_class'] = class_base;
						self.__child_html.append (x);
					}
				}
				else if (isinstance (x, tuple ([list, tuple]))) {
					if (__in__ (x [0], self._sortable)) {
						if (self._sort_by == x [0]) {
							self.__child_html.append (TH (DIV (x [1], __kwargtrans__ (dict ({'_class': 'phanterpwa-widget-table-head-th-sortable', '_data-value': x [0]}))), __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th enabled {0}'.format (sort_order)})));
						}
						else {
							self.__child_html.append (TH (DIV (x [1], __kwargtrans__ (dict ({'_class': 'phanterpwa-widget-table-head-th-sortable', '_data-value': x [0]}))), __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th'})));
						}
					}
					else {
						self.__child_html.append (TH (x [1], __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th'})));
					}
				}
				else {
					self.__child_html.append (TH (x, __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th'})));
				}
			}
		}
		else {
			for (var x of content) {
				if (isinstance (x, helpers.XmlConstructor) && (str (x._tag).upper () == 'TD' || str (x._tag).upper () == 'TH')) {
					if (str (x._tag).upper () == 'TH') {
						var class_base = 'phanterpwa-widget-table-head-th';
					}
					else {
						var class_base = 'phanterpwa-widget-table-head-td';
					}
					if (__in__ ('_class', x.attributes)) {
						if (!__in__ (class_base, x.attributes ['_class'])) {
							x.attributes ['_class'] = '{0} {1}'.format (x.attributes ['_class'], class_base);
						}
					}
					else {
						x.attributes ['_class'] = class_base;
					}
					self.__child_html.append (x);
				}
				else {
					self.__child_html.append (TH (x, __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th'})));
				}
			}
		}
	});},
	get len_head () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return self._count_th;
	});},
	get sorted_field () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var target = $ (self.target_selector);
		var enabled = target.find ('.phanterpwa-widget-table-head-th.enabled');
		var container = enabled.find ('.phanterpwa-widget-table-head-th-sortable');
		var py_sort = 'asc';
		if (enabled.hasClass ('desc')) {
			var py_sort = 'desc';
		}
		return [container.data ('value'), py_sort];
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
		self.__child_html.content.append (TH (value, __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th'})));
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
		self.__child_html.content.insert (pos, TH (value, __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th'})));
	});},
	get _after_click_sortable () {return __get__ (this, function (self, ev, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'ev': var ev = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var el = $ (el);
		var p = el.parent ();
		if (p.hasClass ('asc')) {
			$ (self.target_selector).find ('.phanterpwa-widget-table-head-th').removeClass ('asc');
			p.addClass ('desc');
		}
		else if (p.hasClass ('desc')) {
			$ (self.target_selector).find ('.phanterpwa-widget-table-head-th').removeClass ('desc');
			p.addClass ('asc');
		}
		else {
			$ (self.target_selector).find ('.phanterpwa-widget-table-head-th').removeClass ('asc').removeClass ('desc').removeClass ('enabled');
			p.addClass ('asc').addClass ('enabled');
		}
		if (callable (self._on_click_sortable)) {
			self._on_click_sortable (self);
		}
	});},
	get reload () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.start ();
	});},
	get start () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var target = $ (self.target_selector);
		var container = target.find ('.phanterpwa-widget-table-head-th').find ('.phanterpwa-widget-table-head-th-sortable');
		container.off ('click.widget-table-sortable').on ('click.widget-table-sortable', (function __lambda__ (ev) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'ev': var ev = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self._after_click_sortable (ev, this);
		}));
	});}
});
export var TableData =  __class__ ('TableData', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
			var content = tuple ([].slice.apply (arguments).slice (2, __ilastarg0__ + 1));
		}
		else {
			var content = tuple ();
		}
		self.__dropable = parameters.py_get ('drag_and_drop', true);
		self._after_drop = parameters.py_get ('after_drop', null);
		self._drop_if = parameters.py_get ('drop_if', null);
		if (self.__dropable) {
			parameters ['_draggable'] = 'true';
		}
		if (__in__ ('_class', parameters)) {
			parameters ['_class'] = '{0}{1}'.format (parameters ['_class'], ' phanterpwa-widget-table-data');
		}
		else {
			parameters ['_class'] = 'phanterpwa-widget-table-data';
		}
		self.__child_html = CONCATENATE ();
		for (var x of content) {
			if (isinstance (x, helpers.XmlConstructor) && (str (x._tag).upper () == 'TD' || str (x._tag).upper () == 'TH')) {
				if (str (x._tag).upper () == 'TH') {
					var class_base = 'phanterpwa-widget-table-data-th';
				}
				else {
					var class_base = 'phanterpwa-widget-table-data-td';
				}
				if (__in__ ('_class', x.attributes)) {
					if (!__in__ (class_base, x.attributes ['_class'])) {
						x.attributes ['_class'] = '{0} {1}'.format (x.attributes ['_class'], class_base);
					}
				}
				else {
					x.attributes ['_class'] = class_base;
				}
				self.__child_html.append (x);
			}
			else {
				self.__child_html.append (TD (x, __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td'})));
			}
		}
		Widget.__init__ (self, identifier, self.__child_html, __kwargtrans__ (parameters));
		self.tag = 'tr';
	});},
	get _ondrop () {return __get__ (this, function (self, ev, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'ev': var ev = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var can_drop = true;
		if (callable (self._drop_if)) {
			if (!(self._drop_if (window.PhanterPWA.drag ['el'], el))) {
				var can_drop = false;
			}
		}
		if (can_drop) {
			var posY = ev.screenY;
			if (posY !== undefined && posY > window.PhanterPWA.drag ['posY']) {
				$ (window.PhanterPWA.drag ['el']).insertAfter (el);
			}
			else {
				$ (window.PhanterPWA.drag ['el']).insertBefore (el);
			}
			if (callable (self._after_drop)) {
				self._after_drop (ev, el);
			}
		}
	});},
	get _ondragstart () {return __get__ (this, function (self, ev, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'ev': var ev = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.drag = dict ({'el': el, 'posY': ev.screenY});
	});},
	get reload () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.start ();
	});},
	get start () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var target = $ (self.target_selector);
		target.off ('drop.widget-table-drop').on ('drop.widget-table-drop', (function __lambda__ (ev) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'ev': var ev = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self._ondrop (ev, this);
		}));
		target.off ('dragstart.widget-table-dragstart').on ('dragstart.widget-table-dragstart', (function __lambda__ (ev) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'ev': var ev = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self._ondragstart (ev, this);
		}));
		target.off ('dragover.widget-table-dropover').on ('dragover.widget-table-dropover', (function __lambda__ (ev) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'ev': var ev = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return ev.preventDefault ();
		}));
	});}
});
export var TableFooterPagination =  __class__ ('TableFooterPagination', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
			var content = tuple ([].slice.apply (arguments).slice (2, __ilastarg0__ + 1));
		}
		else {
			var content = tuple ();
		}
		self.identifier = identifier;
		self._table = null;
		self._page = parameters.py_get ('page', 1);
		self._total_pages = parameters.py_get ('total_pages', 1);
		self._colspan = parameters.py_get ('colspan', 1);
		self._on_click_page = parameters.py_get ('on_click_page', null);
		self._modal = null;
		self.set_z_index (parameters.py_get ('z_index', null));
		self.set_recalc_on_scroll (parameters.py_get ('recalc_on_scroll', true));
		if (str (self._page).isdigit ()) {
			self._page = int (self._page);
		}
		else {
			self._page = 1;
		}
		if (str (self._total_pages).isdigit ()) {
			self._total_pages = int (self._total_pages);
		}
		else {
			self._total_pages = 1;
		}
		if (__in__ ('_class', parameters)) {
			parameters ['_class'] = '{0}{1}'.format (parameters ['_class'], ' phanterpwa-widget-table-pagination');
		}
		else {
			parameters ['_class'] = 'phanterpwa-widget-table-pagination';
		}
		self._create_footer (content);
		Widget.__init__ (self, identifier, self.__child_html, __kwargtrans__ (parameters));
		self.tag = 'tr';
	});},
	get _create_footer () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var first_button = DIV (I (__kwargtrans__ ({_class: 'fas fa-angle-double-left'})), __kwargtrans__ (dict ({'_data-page': 1, '_class': 'phanterpwa-widget-pagination-first_button{0}'.format ((self._page == 1 ? ' disabled' : ''))})));
		var previous_button = DIV (I (__kwargtrans__ ({_class: 'fas fa-angle-left'})), __kwargtrans__ (dict ({'_data-page': self._page - 1, '_class': 'phanterpwa-widget-pagination-previous_button{0}'.format ((self._page == 1 ? ' disabled' : ''))})));
		var status_button = DIV (I18N ('Page '), self._page, I18N (' of '), self._total_pages, __kwargtrans__ (dict ({'_id': 'phanterpwa-widget-pagination-status_button-{0}'.format (self.identifier), '_class': 'phanterpwa-widget-pagination-status_button'})));
		var next_button = DIV (I (__kwargtrans__ ({_class: 'fas fa-angle-right'})), __kwargtrans__ (dict ({'_data-page': self._page + 1, '_class': 'phanterpwa-widget-pagination-next_button{0}'.format ((self._page == self._total_pages ? ' disabled' : ''))})));
		var last_button = DIV (I (__kwargtrans__ ({_class: 'fas fa-angle-double-right'})), __kwargtrans__ (dict ({'_data-page': self._total_pages, '_class': 'phanterpwa-widget-pagination-last_button{0}'.format ((self._page == self._total_pages ? ' disabled' : ''))})));
		self.__child_html = TD (DIV (first_button, previous_button, status_button, next_button, last_button, __kwargtrans__ ({_id: 'phanterpwa-widget-pagination-container-{0}'.format (self.identifier), _class: 'phanterpwa-widget-pagination-container'})), __kwargtrans__ ({_id: 'phanterpwa-widget-table-pagination-td-{0}'.format (self.identifier), _colspan: self._colspan}));
	});},
	get set_recalc_on_scroll () {return __get__ (this, function (self, value) {
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
		if (isinstance (value, bool)) {
			self._recalc_on_scroll = value;
		}
		else {
			console.error ('The recalc_on_scroll must be boolean!');
		}
	});},
	get set_z_index () {return __get__ (this, function (self, value) {
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
		if (str (value).isdigit ()) {
			self._z_index = value;
		}
		else if (value === null) {
			self._z_index = null;
		}
		else {
			self._z_index = null;
			console.error ('The z_index must be integer or None!');
		}
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
		self.__child_html.content.append (TH (value, __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th'})));
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
		self.__child_html.content.insert (pos, TH (value, __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th'})));
	});},
	get _pages_panel () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var pages_panel = DIV (__kwargtrans__ ({_class: 'phanterpwa-widget-pagination-pages_panel p-row'}));
		var mid = 13;
		if (self.page > mid) {
			if (self.page < Math.floor (self._total_pages / 2) || self.page + 12 < self._total_pages) {
				for (var x = self.page - 13; x < self.page - 1; x++) {
					var buttom_page = x + 1;
					pages_panel.append (DIV (DIV (buttom_page, __kwargtrans__ (dict ({'_class': 'icon_button wave_on_click', '_data-page': buttom_page}))), __kwargtrans__ ({_class: 'p-col w1p20'})));
				}
				var buttom_page = self.page;
				pages_panel.append (DIV (DIV (buttom_page, __kwargtrans__ (dict ({'_class': 'icon_button wave_on_click', '_data-page': buttom_page}))), __kwargtrans__ ({_class: 'p-col w1p20 current_page'})));
				if (self._total_pages > self.page + 12) {
					for (var z = self.page; z < self.page + 12; z++) {
						var buttom_page = z + 1;
						pages_panel.append (DIV (DIV (buttom_page, __kwargtrans__ (dict ({'_class': 'icon_button wave_on_click', '_data-page': buttom_page}))), __kwargtrans__ ({_class: 'p-col w1p20'})));
					}
				}
				else {
					for (var z = self.page; z < self._total_pages; z++) {
						var buttom_page = z + 1;
						pages_panel.append (DIV (DIV (buttom_page, __kwargtrans__ (dict ({'_class': 'icon_button wave_on_click', '_data-page': buttom_page}))), __kwargtrans__ ({_class: 'p-col w1p20'})));
					}
				}
			}
			else if (self._total_pages >= 25) {
				for (var x = self._total_pages - 24; x < self._total_pages + 1; x++) {
					var buttom_page = x;
					if (x == self.page) {
						pages_panel.append (DIV (DIV (buttom_page, __kwargtrans__ (dict ({'_class': 'icon_button wave_on_click', '_data-page': buttom_page}))), __kwargtrans__ ({_class: 'p-col w1p20 current_page'})));
					}
					else {
						pages_panel.append (DIV (DIV (buttom_page, __kwargtrans__ (dict ({'_class': 'icon_button wave_on_click', '_data-page': buttom_page}))), __kwargtrans__ ({_class: 'p-col w1p20'})));
					}
				}
			}
			else {
				for (var x = 1; x < self._total_pages; x++) {
					var buttom_page = x;
					if (x == self.page) {
						pages_panel.append (DIV (DIV (buttom_page, __kwargtrans__ (dict ({'_class': 'icon_button wave_on_click', '_data-page': buttom_page}))), __kwargtrans__ ({_class: 'p-col w1p20 current_page'})));
					}
					else {
						pages_panel.append (DIV (DIV (buttom_page, __kwargtrans__ (dict ({'_class': 'icon_button wave_on_click', '_data-page': buttom_page}))), __kwargtrans__ ({_class: 'p-col w1p20'})));
					}
				}
			}
		}
		else {
			for (var z = 0; z < 25; z++) {
				if (z < self._total_pages) {
					var buttom_page = z + 1;
					if (z + 1 == self.page) {
						pages_panel.append (DIV (DIV (buttom_page, __kwargtrans__ (dict ({'_class': 'icon_button wave_on_click', '_data-page': buttom_page}))), __kwargtrans__ ({_class: 'p-col w1p20 current_page'})));
					}
					else {
						pages_panel.append (DIV (DIV (buttom_page, __kwargtrans__ (dict ({'_class': 'icon_button wave_on_click', '_data-page': buttom_page}))), __kwargtrans__ ({_class: 'p-col w1p20'})));
					}
				}
			}
		}
		self._modal = PseudoModal ('#phanterpwa-widget-pagination-container-{0}'.format (self.identifier), pages_panel, __kwargtrans__ ({z_index: self._z_index, recalc_on_scroll: self._recalc_on_scroll}));
		self._modal.start ();
		self._bind_panel_pages ();
	});},
	get _bind_panel_pages () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var target = $ ('#{0}'.format (self._modal._identifier));
		target.find ('.icon_button').off ('click.icon_buttom_pagination').on ('click.icon_buttom_pagination', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return tuple ([self._on_click_buttom_page (this), self._modal.close ()]);
		}));
	});},
	get _open_panel_pages () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var p = $ (el).parent ();
		p.addClass ('enabled');
		self._pages_panel ();
	});},
	get _on_click_buttom_page () {return __get__ (this, function (self, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var page = $ (el).data ('page');
		self._page = page;
		if (callable (self._on_click_page)) {
			self._on_click_page (self);
		}
	});},
	get page () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return self._page;
	});},
	get reload () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.start ();
	});},
	get start () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var target = $ (self.target_selector);
		var container = target.find ('.phanterpwa-widget-table-head-th').find ('.phanterpwa-widget-table-head-th-sortable');
		container.off ('click.widget-table-sortable').on ('click.widget-table-sortable', (function __lambda__ (ev) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'ev': var ev = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self._after_click_sortable (ev, this);
		}));
		$ ('#phanterpwa-widget-table-pagination-td-{0}'.format (self.identifier)).attr ('colspan', self._colspan);
		target.find ('#phanterpwa-widget-pagination-status_button-{0}'.format (self.identifier)).off ('click.table_pagination').on ('click.table_pagination', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._open_panel_pages (this);
		}));
		var pre = target.find ('.phanterpwa-widget-pagination-previous_button');
		if (!(pre.hasClass ('disabled'))) {
			pre.off ('click.btn_pagination').on ('click.btn_pagination', (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self._on_click_buttom_page (this);
			}));
		}
		var nex = target.find ('.phanterpwa-widget-pagination-next_button');
		if (!(nex.hasClass ('disabled'))) {
			nex.off ('click.btn_pagination').on ('click.btn_pagination', (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self._on_click_buttom_page (this);
			}));
		}
		var fir = target.find ('.phanterpwa-widget-pagination-first_button');
		if (!(fir.hasClass ('disabled'))) {
			fir.off ('click.btn_pagination').on ('click.btn_pagination', (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self._on_click_buttom_page (this);
			}));
		}
		var las = target.find ('.phanterpwa-widget-pagination-last_button');
		if (!(las.hasClass ('disabled'))) {
			las.off ('click.btn_pagination').on ('click.btn_pagination', (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self._on_click_buttom_page (this);
			}));
		}
	});}
});
export var Image =  __class__ ('Image', [Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self._name = parameters.py_get ('name', null);
		self._value = parameters.py_get ('value', null);
		self._icon = parameters.py_get ('icon', null);
		self._form = parameters.py_get ('form', null);
		self._cutter = parameters.py_get ('cutter', false);
		self._nocache = parameters.py_get ('nocache', false);
		self._width = parameters.py_get ('width', 190);
		self._height = parameters.py_get ('height', 200);
		self._data_view = parameters.py_get ('data_view', false);
		self.identifier = identifier;
		self.__child_html = DIV (__kwargtrans__ ({_id: 'phanterpwa-widget-image-wrapper-{0}'.format (identifier), _class: 'phanterpwa-widget-image-wrapper'}));
		self.iniciate = false;
		if (__in__ ('_class', parameters)) {
			parameters ['_class'] = '{0}{1}'.format (parameters ['_class'], ' phanterpwa-widget-image');
		}
		else {
			parameters ['_class'] = 'phanterpwa-widget-image';
		}
		if (self._nocache && (self._value !== '' && self._value !== null)) {
			var now = new Date ().getTime ();
			self._value = '{0}?nocache={1}'.format (self._value, now);
		}
		Widget.__init__ (self, identifier, self.__child_html, __kwargtrans__ (parameters));
	});},
	get _binds () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		GalleryInput ('#phanterpwa-widget-image-wrapper-{0}'.format (self.identifier), __kwargtrans__ (dict ({'name': self._name, 'cutter': self._cutter, 'current_image': self._value, 'img_name': 'Image_{0}'.format (self.identifier), 'width': self._width, 'height': self._height, 'data_view': self._data_view})));
	});},
	get reload () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (!(self.iniciate)) {
			self.iniciate = true;
			self.start ();
		}
	});},
	get start () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._binds ();
	});}
});
export var GalleryInput =  __class__ ('GalleryInput', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, target_selector) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'target_selector': var target_selector = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self.target_selector = target_selector;
		self.config = parameters;
		self.namespace = window.PhanterPWA.get_id ('namespace');
		self.conf_default = dict ({'name': null, 'button-upload': I (__kwargtrans__ ({_class: 'fas fa-cloud-upload-alt'})).xml (), 'width': 190, 'height': 200, 'view-width': null, 'view-height': null, 'cutter': false, 'z-index': 1005, 'current_image': null, 'put_in_form': true, 'img_name': 'PhanterpwaGalleryFile', 'hammerconf': dict ({'inputClass': (Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput)}), 'onError': null, 'beforeCut': null, 'afterCut': null, 'data_view': false});
		if (self.config === undefined) {
			self.config = dict ();
		}
		for (var d of self.conf_default.py_keys ()) {
			if (!__in__ (d, self.config)) {
				self.config [d] = self.conf_default [d];
			}
		}
		self.config ['namespace'] = self.namespace;
		self.config ['element'] = $ (self.target_selector);
		if (self.config ['view-width'] === null || self.config ['view-width'] === undefined) {
			self.config ['view-width'] = self.config ['width'];
		}
		if (self.config ['view-height'] === null || self.config ['view-height'] === undefined) {
			self.config ['view-height'] = self.config ['height'];
		}
		self._data_view = self.config.py_get ('data_view', false);
		self.addInputPanel ();
	});},
	get getNewImage () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var inputChange = function (el) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'el': var el = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			var is_to_cut = self.config ['cutter'];
			var blob = $ (el) [0].files;
			var fileslength = blob.length;
			for (var i = 0; i < fileslength; i++) {
				var img_type = blob [i] ['type'];
				var img_name = blob [i] ['name'];
				self.config ['img_type'] = img_type;
				self.config ['img_name'] = img_name;
				if (img_type == 'image/png' || img_type == 'image/bmp' || img_type == 'image/gif' || img_type == 'image/jpeg') {
					var onloadend = function (reader, img_name, img_type) {
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
								var __allkwargs0__ = arguments [__ilastarg0__--];
								for (var __attrib0__ in __allkwargs0__) {
									switch (__attrib0__) {
										case 'reader': var reader = __allkwargs0__ [__attrib0__]; break;
										case 'img_name': var img_name = __allkwargs0__ [__attrib0__]; break;
										case 'img_type': var img_type = __allkwargs0__ [__attrib0__]; break;
									}
								}
							}
						}
						else {
						}
						var base64data = reader.result;
						var img1 = document.createElement ('IMG');
						img1.src = base64data;
						img1.alt = ((img_name + ' (') + img_type) + ')';
						if (is_to_cut) {
							var onImageLoad = function (img) {
								if (arguments.length) {
									var __ilastarg0__ = arguments.length - 1;
									if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
										var __allkwargs0__ = arguments [__ilastarg0__--];
										for (var __attrib0__ in __allkwargs0__) {
											switch (__attrib0__) {
												case 'img': var img = __allkwargs0__ [__attrib0__]; break;
											}
										}
									}
								}
								else {
								}
								if (window.PhanterPWA.DEBUG) {
									console.info (img.width, img.height);
								}
							};
							img1.onload = (function __lambda__ () {
								if (arguments.length) {
									var __ilastarg0__ = arguments.length - 1;
									if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
										var __allkwargs0__ = arguments [__ilastarg0__--];
										for (var __attrib0__ in __allkwargs0__) {
										}
									}
								}
								else {
								}
								return onImageLoad (this);
							});
							new GalleryCutter (base64data, self);
						}
						else {
							self.simpleView (base64data);
						}
					};
					var reader = new FileReader ();
					reader.readAsDataURL (blob [0]);
					reader.onloadend = (function __lambda__ () {
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
								var __allkwargs0__ = arguments [__ilastarg0__--];
								for (var __attrib0__ in __allkwargs0__) {
								}
							}
						}
						else {
						}
						return onloadend (reader, img_name, img_type);
					});
				}
				else {
					console.error ('The file has invalid type. It must be png, bmp, gif, jpeg type.');
				}
			}
		};
		var el_input = $ ('#phanterpwa-gallery-input-file-{0}'.format (self.namespace));
		el_input.trigger ('click').off ('change.phanterpwa_gallery_input_{0}'.format (self.namespace)).on ('change.phanterpwa_gallery_input_{0}'.format (self.namespace), (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return inputChange (this, self.config);
		}));
	});},
	get _afterRead () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.config ['current_image'] !== null && self.config ['current_image'] !== undefined) {
			self.simpleView (self.config ['current_image']);
		}
		else {
			$ ('#phanterpwa-gallery-upload-image-button-{0}'.format (self.namespace)).on ('click', (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self.getNewImage ();
			}));
		}
	});},
	get addInputPanel () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var other_inputs = '';
		var py_name = '';
		var x_name = self.config.py_get ('name', null);
		if (x_name !== null) {
			var py_name = '-{0}'.format (str (x_name));
		}
		if (self.config ['cutter']) {
			var cutter_vars = [INPUT (__kwargtrans__ ({_id: 'phanterpwa-gallery-input-cutterSizeX{0}'.format (self.namespace), _name: 'phanterpwa-gallery-input-cutterSizeX{0}'.format (py_name), _value: '', _type: 'text'})), INPUT (__kwargtrans__ ({_id: 'phanterpwa-gallery-input-cutterSizeY{0}'.format (self.namespace), _name: 'phanterpwa-gallery-input-cutterSizeY{0}'.format (py_name), _value: '', _type: 'text'})), INPUT (__kwargtrans__ ({_id: 'phanterpwa-gallery-input-positionX{0}'.format (self.namespace), _name: 'phanterpwa-gallery-input-positionX{0}'.format (py_name), _value: '', _type: 'text'})), INPUT (__kwargtrans__ ({_id: 'phanterpwa-gallery-input-positionY{0}'.format (self.namespace), _name: 'phanterpwa-gallery-input-positionY{0}'.format (py_name), _value: '', _type: 'text'})), INPUT (__kwargtrans__ ({_id: 'phanterpwa-gallery-input-newSizeX{0}'.format (self.namespace), _name: 'phanterpwa-gallery-input-newSizeX{0}'.format (py_name), _value: '', _type: 'text'})), INPUT (__kwargtrans__ ({_id: 'phanterpwa-gallery-input-newSizeY{0}'.format (self.namespace), _name: 'phanterpwa-gallery-input-newSizeY{0}'.format (py_name), _value: '', _type: 'text'})), INPUT (__kwargtrans__ ({_id: 'phanterpwa-gallery-input-rotation{0}'.format (self.namespace), _name: 'phanterpwa-gallery-input-rotation{0}'.format (py_name), _value: '', _type: 'text'}))];
			var other_inputs = DIV (...cutter_vars, __kwargtrans__ ({_class: 'phanterpwa-gallery-inputs-container-{0}'.format (self.namespace), _style: 'display: none'}));
		}
		var input_gallery = DIV (DIV (DIV (XML (self.config ['button-upload']), __kwargtrans__ ({_id: 'phanterpwa-gallery-upload-image-button-{0}'.format (self.namespace), _class: 'phanterpwa-gallery-upload-image-button link', _phanterpwa_input: 'phanterpwa-gallery-input-file-{0}'.format (self.namespace)})), __kwargtrans__ ({_id: 'phanterpwa-gallery-upload-image-default-{0}'.format (self.namespace), _class: 'phanterpwa-gallery-upload-image-default'})), INPUT (__kwargtrans__ ({_accept: 'image/png, image/jpeg, image/gif, image/bmp', _class: 'phanterpwa-gallery-upload-input-file', _type: 'file', _id: 'phanterpwa-gallery-input-file-{0}'.format (self.namespace), _name: 'phanterpwa-gallery-file-input{0}'.format (py_name)})), __kwargtrans__ ({_id: 'phanterpwa-gallery-input-container-{0}'.format (self.namespace), _class: 'phanterpwa-gallery-input-container'}));
		var wrapper_gallery = DIV (input_gallery, other_inputs, __kwargtrans__ ({_id: 'phanterpwa-gallery-wrapper-{0}'.format (self.namespace), _class: 'phanterpwa-gallery-wrapper'}));
		var html = DIV (DIV (DIV (DIV (wrapper_gallery, __kwargtrans__ ({_class: 'phanterpwa-centralizer-center'})), __kwargtrans__ ({_class: 'phanterpwa-centralizer-horizontal'})), __kwargtrans__ ({_class: 'phanterpwa-centralizer-vertical'})), __kwargtrans__ ({_class: 'phanterpwa-centralizer-wrapper', _style: 'width: {0}px; height: {1}px;'.format (self.config ['view-width'], self.config ['view-height'])}));
		$ (self.target_selector).html (html.xml ()).promise ().then ((function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self._afterRead ();
		}));
	});},
	get simpleView () {return __get__ (this, function (self, url) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'url': var url = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var namespace = self.config ['namespace'];
		var width = self.config ['width'];
		var height = self.config ['height'];
		var img_name = self.config ['img_name'];
		var cutted_img = document.createElement ('IMG');
		cutted_img.src = url;
		cutted_img.alt = img_name;
		var onImageLoad = function (img, namespace, width, height) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'img': var img = __allkwargs0__ [__attrib0__]; break;
							case 'namespace': var namespace = __allkwargs0__ [__attrib0__]; break;
							case 'width': var width = __allkwargs0__ [__attrib0__]; break;
							case 'height': var height = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			var width_view = width;
			var height_view = height;
			if (width_view == height_view) {
				if (img.width > img.height) {
					$ ('#phanterpwa-gallery-upload-image-simple-view-{0}'.format (namespace)).css ('background-size', '100% auto');
				}
				else {
					$ ('#phanterpwa-gallery-upload-image-simple-view-{0}'.format (namespace)).css ('background-size', 'auto 100%');
				}
			}
			else if (width_view > height_view) {
				if (img.width > img.height) {
					var rate = float (height_view) / img.height;
					var width = img.width * rate;
					if (width < width_view) {
						$ ('#phanterpwa-gallery-upload-image-simple-view-{0}'.format (namespace)).css ('background-size', '100% auto');
					}
					else {
						$ ('#phanterpwa-gallery-upload-image-simple-view-{0}'.format (namespace)).css ('background-size', 'auto 100%');
					}
				}
				else {
					$ ('#phanterpwa-gallery-upload-image-simple-view-{0}'.format (namespace)).css ('background-size', '100% auto');
				}
			}
			else if (width_view < height_view) {
				if (img.width < img.height) {
					var rate = float (height_view) / img.height;
					var width = img.width * rate;
					if (width > width_view) {
						$ ('#phanterpwa-gallery-upload-image-simple-view-{0}'.format (namespace)).css ('background-size', 'auto 100%');
					}
					else {
						$ ('#phanterpwa-gallery-upload-image-simple-view-{0}'.format (namespace)).css ('background-size', '100% auto');
					}
				}
				else {
					$ ('#phanterpwa-gallery-upload-image-simple-view-{0}'.format (namespace)).css ('background-size', 'auto 100%');
				}
			}
		};
		cutted_img.onload = (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return onImageLoad (this, namespace, width, height);
		});
		var xml_icons_view = '';
		if (!(self._data_view)) {
			var xml_icons_view = DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-sync'})), __kwargtrans__ ({_id: 'phanterpwa-gallery-upload-image-simple-view-button-reload-{0}'.format (namespace), _class: 'phanterpwa-gallery-upload-image-simple-view-button {0}'.format ('phanterpwa-gallery-upload-image-simple-view-button-reload')})), DIV (I (__kwargtrans__ ({_class: 'fas fa-trash-alt'})), __kwargtrans__ ({_id: 'phanterpwa-gallery-upload-image-simple-view-button-delete-{0}'.format (namespace), _class: 'phanterpwa-gallery-upload-image-simple-view-button {0}'.format ('phanterpwa-gallery-upload-image-simple-view-button-delete')})), __kwargtrans__ ({_class: 'phanterpwa-gallery-upload-image-simple-view-buttons'}));
		}
		var html_simple_view = DIV (xml_icons_view, __kwargtrans__ ({_id: 'phanterpwa-gallery-upload-image-simple-view-{0}'.format (namespace), _class: 'phanterpwa-gallery-upload-image-simple-view', _alt: img_name, _style: "width: {0}px; height: {1}px; background-image: url('{2}'); {3}".format (width, height, url, 'background-position: center; overflow: hidden;')}));
		var activeButtonsView = function () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			$ ('#phanterpwa-gallery-upload-image-simple-view-button-reload-{0}'.format (namespace)).off ('click.button-reload-view').on ('click.button-reload-view', (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self.getNewImage ();
			}));
			$ ('#phanterpwa-gallery-upload-image-simple-view-button-delete-{0}'.format (namespace)).off ('click.button-reload-view').on ('click.button-reload-view', (function __lambda__ () {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
						}
					}
				}
				else {
				}
				return self.resetInputPanel ();
			}));
		};
		$ ('#phanterpwa-gallery-upload-image-default-{0}'.format (namespace)).html (html_simple_view.xml ()).promise ().then ((function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return activeButtonsView ();
		}));
	});},
	get resetInputPanel () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.config ['current_image'] = null;
		self.addInputPanel ();
	});}
});
export var GalleryCutter =  __class__ ('GalleryCutter', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, base64data, galleryinput) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'base64data': var base64data = __allkwargs0__ [__attrib0__]; break;
						case 'galleryinput': var galleryinput = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.base64data = base64data;
		if (isinstance (galleryinput, GalleryInput)) {
			self.galleryinput = galleryinput;
		}
		else {
			var __except0__ = ValueError ('The galleryinput must be GalleryInput instance');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self.config = galleryinput.config;
		self.hammerconf = {};
		if (self.config ['hammerconf'] !== null || self.config ['hammerconf'] !== undefined) {
			for (var x of self.config ['hammerconf'].py_keys ()) {
				self.hammerconf [x] = self.config ['hammerconf'] [x];
			}
		}
		self.namespace = self.galleryinput.namespace;
		self.cutterSizeX = self.config ['width'];
		self.cutterSizeY = self.config ['height'];
		self.originalWidthImg = 0;
		self.originalHeightImg = 0;
		self.widthImg = 0;
		self.heightImg = 0;
		self.widthScreen = 0;
		self.heightScreen = 0;
		self.widthCutter = 0;
		self.heightCutter = 0;
		self.inicialPositionXBackground = 0;
		self.inicialPositionYBackground = 0;
		self.inicialPositionXImgToCut = 0;
		self.inicialPositionYImgToCut = 0;
		self.deslocationPositionXBackground = 0;
		self.deslocationPositionYBackground = 0;
		self.deslocationPositionXImgToCut = 0;
		self.deslocationPositionYImgToCut = 0;
		self.deslocationPositionZoom = 0;
		self.positionDefaultZoom = 89.0;
		self.widthImgAfterZoom = 0;
		self.heightImgAfterZoom = 0;
		self.positionXAfterZoom = 0;
		self.positionYAfterZoom = 0;
		self.activeViewImage = false;
		self.addCutterPanel ();
	});},
	get addCutterPanel () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var z_index = self.config ['z-index'];
		var cutter_panel = DIV (DIV (__kwargtrans__ ({_id: 'phanterpwa-gallery-cutter-background-{0}'.format (self.namespace), _class: 'phanterpwa-gallery-cutter-background'})), DIV (__kwargtrans__ ({_id: 'phanterpwa-gallery-cutter-shadow-{0}'.format (self.namespace), _class: 'phanterpwa-gallery-cutter-shadow'})), DIV (DIV (DIV (__kwargtrans__ ({_class: 'phanterpwa-gallery-panel-cutter-image', _id: 'phanterpwa-gallery-panel-cutter-image-{0}'.format (self.namespace)})), __kwargtrans__ ({_style: 'overflow: hidden; width: {0}px; height: {1}px;'.format (self.cutterSizeX, self.cutterSizeY), _id: 'phanterpwa-gallery-panel-cutter-size-container-{0}'.format (self.namespace), _class: 'phanterpwa-gallery-panel-cutter-size-container'})), __kwargtrans__ ({_class: 'phanterpwa-gallery-panel-cutter'})), DIV (__kwargtrans__ ({_id: 'phanterpwa-gallery-cutter-pad-{0}'.format (self.namespace), _class: 'phanterpwa-gallery-cutter-pad'})), DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-times-circle close-circle'})), __kwargtrans__ ({_id: 'phanterpwa-gallery-cutter-control-close-{0}'.format (self.namespace), _class: 'phanterpwa-gallery-cutter-control'})), DIV (I (__kwargtrans__ ({_class: 'fas fa-eye image-view'})), __kwargtrans__ ({_id: 'phanterpwa-gallery-cutter-control-view-{0}'.format (self.namespace), _class: 'phanterpwa-gallery-cutter-control'})), DIV (I (__kwargtrans__ ({_class: 'fas fa-cut image-cut'})), __kwargtrans__ ({_id: 'phanterpwa-gallery-cutter-control-cut-{0}'.format (self.namespace), _class: 'phanterpwa-gallery-cutter-control'})), __kwargtrans__ ({_class: 'phanterpwa-gallery-cutter-controls-container'})), DIV (DIV (I (__kwargtrans__ ({_class: 'far fa-image image-decrease'})), DIV (DIV (__kwargtrans__ ({_id: 'phanterpwa-gallery-cutter-zoom-control-{0}'.format (self.namespace), _class: 'phanterpwa-gallery-cutter-zoom-control'})), __kwargtrans__ ({_id: 'phanterpwa-gallery-cutter-zoom-control-container-{0}'.format (self.namespace), _class: 'phanterpwa-gallery-cutter-zoom-control-container'})), I (__kwargtrans__ ({_class: 'far fa-image image-increase'})), __kwargtrans__ ({_class: 'phanterpwa-gallery-cutter-zoom-controls'})), __kwargtrans__ ({_class: 'phanterpwa-gallery-cutter-zoom-container'})), __kwargtrans__ ({_id: 'phanterpwa-gallery-panel-cutter-container-{0}'.format (self.namespace), _class: 'phanterpwa-gallery-panel-cutter-container', _style: 'z-index: {0};'.format (z_index)}));
		$ ('#phanterpwa-gallery-wrapper-{0}'.format (self.namespace)).append (cutter_panel.xml ()).promise ().then (self._chargeEvents);
	});},
	get _chargeEvents () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.img1 = document.createElement ('IMG');
		self.img2 = document.createElement ('IMG');
		self.img1.onload = (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self.onLoadImage (self.img1);
		});
		self.img1.src = self.base64data;
		self.img2.src = self.base64data;
		self.img1.onerror = (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self.setError (true);
		});
	});},
	get prepareGestureMove () {return __get__ (this, function (self, event) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		event.preventDefault ();
		$ ('#phanterpwa-gallery-cutter-pad-{0}'.format (self.namespace)).on ('panmove.phanterpwa-gallery-moving', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self.gestureMoving (event);
		}));
		$ ('#phanterpwa-gallery-cutter-pad-{0}'.format (self.namespace)).on ('panend.phanterpwa-gallery-moving', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self.stopGestureMove (event);
		}));
	});},
	get gestureMoving () {return __get__ (this, function (self, event) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.deslocationPositionXBackground = event.gesture.deltaX * -(1);
		self.deslocationPositionYBackground = event.gesture.deltaY * -(1);
		self.deslocationPositionXImgToCut = event.gesture.deltaX * -(1);
		self.deslocationPositionYImgToCut = event.gesture.deltaY * -(1);
		self.calcPosition ();
	});},
	get stopGestureMove () {return __get__ (this, function (self, event) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		event.preventDefault ();
		$ ('#phanterpwa-gallery-cutter-pad-{0}'.format (self.namespace)).off ('panmove.phanterpwa-gallery-moving');
		self.saveinicialPosition ();
	});},
	get gestureSizing () {return __get__ (this, function (self, event, inicialPosition, width, height) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						case 'inicialPosition': var inicialPosition = __allkwargs0__ [__attrib0__]; break;
						case 'width': var width = __allkwargs0__ [__attrib0__]; break;
						case 'height': var height = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		event.preventDefault ();
		var xDeslocamento = event.gesture.deltaX;
		if (inicialPosition + xDeslocamento > 0 && inicialPosition + xDeslocamento < 179) {
			self.movecutterZoom (xDeslocamento, inicialPosition, width, height);
		}
	});},
	get stopGestureSize () {return __get__ (this, function (self, event) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		event.preventDefault ();
		self.savePositionZoom ();
		$ ('#phanterpwa-gallery-cutter-zoom-control-{0}'.format (self.namespace)).off ('panmove.phanterpwa-gallery-sizing');
	});},
	get prepareGestureSize () {return __get__ (this, function (self, event) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		event.preventDefault ();
		var inicialPosition = self.positionDefaultZoom;
		var width = self.widthImg;
		var height = self.heightImg;
		$ ('#phanterpwa-gallery-cutter-zoom-control-{0}'.format (self.namespace)).on ('panmove.phanterpwa-gallery-sizing', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self.gestureSizing (event, inicialPosition, width, height);
		}));
		$ ('#phanterpwa-gallery-cutter-zoom-control-{0}'.format (self.namespace)).on ('panend.phanterpwa-gallery-sizing', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self.stopGestureSize (event);
		}));
	});},
	get calcMidPosition () {return __get__ (this, function (self, sizeContainer, sizeContent, positionContent) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'sizeContainer': var sizeContainer = __allkwargs0__ [__attrib0__]; break;
						case 'sizeContent': var sizeContent = __allkwargs0__ [__attrib0__]; break;
						case 'positionContent': var positionContent = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var midsize1 = sizeContainer / 2.0;
		var midsize2 = sizeContent / 2.0;
		var relativeposition = midsize1 - midsize2;
		var finalPosition = relativeposition - positionContent;
		return finalPosition;
	});},
	get moveImage () {return __get__ (this, function (self, x, y) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
						case 'y': var y = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.deslocationPositionXBackground = x * -(1);
		self.deslocationPositionYBackground = y * -(1);
		self.deslocationPositionXImgToCut = x * -(1);
		self.deslocationPositionYImgToCut = y * -(1);
		self.calcPosition ();
	});},
	get viewImage () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.activeViewImage) {
			self.activeViewImage = false;
			$ ('#phanterpwa-gallery-cutter-control-view-{0}'.format (self.namespace)).removeClass ('enable');
			$ ('#phanterpwa-gallery-cutter-shadow-{0}'.format (self.namespace)).removeClass ('enable');
		}
		else {
			self.activeViewImage = true;
			$ ('#phanterpwa-gallery-cutter-control-view-{0}'.format (self.namespace)).addClass ('enable');
			$ ('#phanterpwa-gallery-cutter-shadow-{0}'.format (self.namespace)).addClass ('enable');
		}
	});},
	get closeImage () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		$ ('#phanterpwa-gallery-panel-cutter-container-{0}'.format (self.namespace)).removeClass ('enable');
		$ ('#phanterpwa-gallery-panel-cutter-container-{0}'.format (self.namespace)).addClass ('close');
	});},
	get cutImage () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		$ ('#phanterpwa-gallery-panel-cutter-container-{0}'.format (self.namespace)).removeClass ('enable');
		$ ('#phanterpwa-gallery-panel-cutter-container-{0}'.format (self.namespace)).addClass ('close');
		var canvas = document.createElement ('CANVAS');
		canvas.width = self.widthCutter;
		canvas.height = self.heightCutter;
		var ctx = canvas.getContext ('2d');
		var ratio = self.originalWidthImg / float (self.widthImgAfterZoom);
		var positionX = (self.positionXAfterZoom * -(1)) * ratio;
		var positionY = (self.positionYAfterZoom * -(1)) * ratio;
		var wX = self.cutterSizeX * ratio;
		var wY = self.cutterSizeY * ratio;
		$ ('#phanterpwa-gallery-input-cutterSizeX{0}'.format (self.namespace)).val (self.widthCutter);
		$ ('#phanterpwa-gallery-input-cutterSizeY{0}'.format (self.namespace)).val (self.heightCutter);
		$ ('#phanterpwa-gallery-input-positionX{0}'.format (self.namespace)).val (positionX);
		$ ('#phanterpwa-gallery-input-positionY{0}'.format (self.namespace)).val (positionY);
		$ ('#phanterpwa-gallery-input-newSizeX{0}'.format (self.namespace)).val (wX);
		$ ('#phanterpwa-gallery-input-newSizeY{0}'.format (self.namespace)).val (wY);
		ctx.clearRect (0, 0, canvas.width, canvas.height);
		ctx.drawImage (self.img1, positionX, positionY, wX, wY, 0, 0, self.widthCutter, self.heightCutter);
		self.config ['current_image'] = canvas.toDataURL ();
		self.galleryinput.config = self.config;
		self.galleryinput.simpleView (self.config ['current_image']);
	});},
	get movecutterZoom () {return __get__ (this, function (self, x, zoominicial, width, height) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
						case 'zoominicial': var zoominicial = __allkwargs0__ [__attrib0__]; break;
						case 'width': var width = __allkwargs0__ [__attrib0__]; break;
						case 'height': var height = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.deslocationPositionZoom = x * -(1);
		self.calcZoomPosition (zoominicial, width, height);
	});},
	get changeSizeImage () {return __get__ (this, function (self, ratio, width, height) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'ratio': var ratio = __allkwargs0__ [__attrib0__]; break;
						case 'width': var width = __allkwargs0__ [__attrib0__]; break;
						case 'height': var height = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var width = float (width) * ratio;
		var height = float (height) * ratio;
		self.img1.style.width = width + 'px';
		self.img1.style.height = height + 'px';
		self.img2.style.width = width + 'px';
		self.img2.style.height = height + 'px';
		self.widthImg = width;
		self.heightImg = height;
		self.widthImgAfterZoom = width;
		self.heightImgAfterZoom = height;
		self.calcPosition ();
	});},
	get calcZoomPosition () {return __get__ (this, function (self, zoominicial, width, height) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'zoominicial': var zoominicial = __allkwargs0__ [__attrib0__]; break;
						case 'width': var width = __allkwargs0__ [__attrib0__]; break;
						case 'height': var height = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var position = self.positionDefaultZoom - self.deslocationPositionZoom;
		var ratio = position / zoominicial;
		self.changeSizeImage (ratio, width, height);
		$ ('#phanterpwa-gallery-cutter-zoom-control-{0}'.format (self.namespace)).css ('left', position + 'px');
	});},
	get calcPosition () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var widthImg = self.widthImg;
		var heightImg = self.heightImg;
		var widthScreen = window.innerWidth;
		var heightScreen = window.innerHeight;
		var widthCutter = self.widthCutter;
		var heightCutter = self.heightCutter;
		if (widthImg > 0 && heightImg > 0 && widthScreen > 0 && heightScreen > 0) {
			var fCalc = self.calcMidPosition;
			var iPXB = self.inicialPositionXBackground + self.deslocationPositionXBackground;
			var iPYB = self.inicialPositionYBackground + self.deslocationPositionYBackground;
			var iPXITC = self.inicialPositionXImgToCut + self.deslocationPositionXImgToCut;
			var iPYITC = self.inicialPositionYImgToCut + self.deslocationPositionYImgToCut;
			var relativePositionXBackground = fCalc (widthScreen, widthImg, iPXB);
			var relativePositionYBackground = fCalc (heightScreen, heightImg, iPYB);
			var relativePositionXImgToCut = fCalc (widthCutter, widthImg, iPXITC);
			var relativePositionYImgToCut = fCalc (heightCutter, heightImg, iPYITC);
			$ ('#phanterpwa-gallery-panel-cutter-size-container-{0}'.format (self.namespace)).css ('left', fCalc (widthScreen, widthCutter, 0) + 'px');
			$ ('#phanterpwa-gallery-panel-cutter-size-container-{0}'.format (self.namespace)).css ('top', fCalc (heightScreen, heightCutter, 0) + 'px');
			$ ('#phanterpwa-gallery-cutter-background-{0}'.format (self.namespace)).css ('left', relativePositionXBackground + 'px');
			$ ('#phanterpwa-gallery-cutter-background-{0}'.format (self.namespace)).css ('top', relativePositionYBackground + 'px');
			$ ('#phanterpwa-gallery-panel-cutter-image-{0}'.format (self.namespace)).css ('left', relativePositionXImgToCut + 'px');
			$ ('#phanterpwa-gallery-panel-cutter-image-{0}'.format (self.namespace)).css ('top', relativePositionYImgToCut + 'px');
			self.positionXAfterZoom = relativePositionXImgToCut;
			self.positionYAfterZoom = relativePositionYImgToCut;
		}
	});},
	get saveinicialPosition () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.inicialPositionXBackground += self.deslocationPositionXBackground;
		self.inicialPositionYBackground += self.deslocationPositionYBackground;
		self.inicialPositionXImgToCut += self.deslocationPositionXImgToCut;
		self.inicialPositionYImgToCut += self.deslocationPositionYImgToCut;
		self.deslocationPositionXBackground = 0;
		self.deslocationPositionYBackground = 0;
		self.deslocationPositionXImgToCut = 0;
		self.deslocationPositionYImgToCut = 0;
	});},
	get savePositionZoom () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.positionDefaultZoom -= self.deslocationPositionZoom;
		self.deslocationPositionZoom = 0;
	});},
	get setBase64 () {return __get__ (this, function (self, value) {
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
		self.setBase64 = value;
	});},
	get onLoadImage () {return __get__ (this, function (self, img) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'img': var img = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		$ ('#phanterpwa-gallery-cutter-background-{0}'.format (self.namespace)).html (self.img1);
		$ ('#phanterpwa-gallery-panel-cutter-image-{0}'.format (self.namespace)).html (self.img2);
		$ ('#phanterpwa-gallery-cutter-control-view-{0}'.format (self.namespace)).removeClass ('enable');
		$ ('#phanterpwa-gallery-cutter-shadow-{0}'.format (self.namespace)).removeClass ('enable');
		$ ('#phanterpwa-gallery-cutter-zoom-control-{0}'.format (self.namespace)).css ('left', '89px');
		$ ('#phanterpwa-gallery-cutter-control-view-{0}'.format (self.namespace)).on ('click', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self.viewImage ();
		}));
		$ ('#phanterpwa-gallery-cutter-control-close-{0}'.format (self.namespace)).on ('click', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self.closeImage ();
		}));
		$ ('#phanterpwa-gallery-cutter-control-cut-{0}'.format (self.namespace)).on ('click', (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self.cutImage ();
		}));
		$ (window).off ('resize.phanterpwa-gallery-{0}'.format (self.namespace)).on ('resize.phanterpwa-gallery-{0}'.format (self.namespace), (function __lambda__ () {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
					}
				}
			}
			else {
			}
			return self.calcPosition ();
		}));
		$ ('#phanterpwa-gallery-cutter-pad-{0}'.format (self.namespace)).on ('mousedown.phanterpwa-gallery-moving', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self.prepareMove (event);
		}));
		$ ('#phanterpwa-gallery-cutter-pad-{0}'.format (self.namespace)).hammer (self.hammerconf).on ('touchstart.phanterpwa-gallery-moving', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self.prepareGestureMove (event);
		}));
		$ ('#phanterpwa-gallery-cutter-zoom-control-{0}'.format (self.namespace)).hammer (self.hammerconf).on ('touchstart.phanterpwa-gallery-sizing', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self.prepareGestureSize (event);
		}));
		$ ('#phanterpwa-gallery-cutter-zoom-control-{0}'.format (self.namespace)).on ('mousedown.phanterpwa-gallery-sizing', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self.prepareSize (event);
		}));
		var imgWidth = img.width;
		var imgHeight = img.height;
		self.widthImg = imgWidth;
		self.heightImg = imgHeight;
		self.originalWidthImg = imgWidth;
		self.originalHeightImg = imgHeight;
		self.widthImgAfterZoom = imgWidth;
		self.heightImgAfterZoom = imgHeight;
		self.widthCutter = float (self.cutterSizeX);
		self.heightCutter = float (self.cutterSizeY);
		if (self.error) {
			console.error ('has Error');
		}
		else {
			self.calcPosition ();
			$ ('#phanterpwa-gallery-panel-cutter-container-{0}'.format (self.namespace)).removeClass ('close');
			$ ('#phanterpwa-gallery-panel-cutter-container-{0}'.format (self.namespace)).addClass ('enable');
		}
	});},
	get setError () {return __get__ (this, function (self, bo) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'bo': var bo = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.error = bo;
		if (self.config ['onError'] !== null || self.config ['onError'] !== undefined) {
			self.config ['onError'] ();
		}
	});},
	get moving () {return __get__ (this, function (self, event, xInicial, yInicial) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						case 'xInicial': var xInicial = __allkwargs0__ [__attrib0__]; break;
						case 'yInicial': var yInicial = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var xDeslocamento = event.clientX - xInicial;
		var yDeslocamento = event.clientY - yInicial;
		self.moveImage (xDeslocamento, yDeslocamento);
	});},
	get stopMove () {return __get__ (this, function (self, event) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.saveinicialPosition ();
		$ ('#phanterpwa-gallery-cutter-pad-{0}'.format (self.namespace)).off ('mousemove.phanterpwa-gallery-moving');
		$ ('#phanterpwa-gallery-cutter-pad-{0}'.format (self.namespace)).off ('mouseleave.phanterpwa-gallery-moving');
	});},
	get prepareMove () {return __get__ (this, function (self, event) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var xInicial = event.clientX;
		var yInicial = event.clientY;
		$ ('#phanterpwa-gallery-cutter-pad-{0}'.format (self.namespace)).on ('mousemove.phanterpwa-gallery-moving', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self.moving (event, xInicial, yInicial);
		}));
		$ ('#phanterpwa-gallery-cutter-pad-{0}'.format (self.namespace)).on ('mouseup.phanterpwa-gallery-moving', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self.stopMove (event);
		}));
		$ ('#phanterpwa-gallery-cutter-pad-{0}'.format (self.namespace)).on ('mouseleave.phanterpwa-gallery-moving', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self.stopMove (event);
		}));
	});},
	get sizing () {return __get__ (this, function (self, event, xInicial, inicialPosition, width, height) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						case 'xInicial': var xInicial = __allkwargs0__ [__attrib0__]; break;
						case 'inicialPosition': var inicialPosition = __allkwargs0__ [__attrib0__]; break;
						case 'width': var width = __allkwargs0__ [__attrib0__]; break;
						case 'height': var height = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var xDeslocamento = event.clientX - xInicial;
		if (inicialPosition + xDeslocamento > 0 && inicialPosition + xDeslocamento < 179) {
			self.movecutterZoom (xDeslocamento, inicialPosition, width, height);
		}
	});},
	get stopSize () {return __get__ (this, function (self, event) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.savePositionZoom ();
		$ ('#phanterpwa-gallery-cutter-zoom-control-{0}'.format (self.namespace)).off ('mousemove.phanterpwa-gallery-sizing');
		$ ('#phanterpwa-gallery-cutter-zoom-control-{0}'.format (self.namespace)).off ('mouseleave.phanterpwa-gallery-sizing');
	});},
	get prepareSize () {return __get__ (this, function (self, event) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var xInicial = event.clientX;
		var inicialPosition = self.positionDefaultZoom;
		var width = self.widthImg;
		var height = self.heightImg;
		$ ('#phanterpwa-gallery-cutter-zoom-control-{0}'.format (self.namespace)).on ('mousemove.phanterpwa-gallery-sizing', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self.sizing (event, xInicial, inicialPosition, width, height);
		}));
		$ ('#phanterpwa-gallery-cutter-zoom-control-{0}'.format (self.namespace)).on ('mouseup.phanterpwa-gallery-sizing', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self.stopSize (event);
		}));
		$ ('#phanterpwa-gallery-cutter-zoom-control-{0}'.format (self.namespace)).on ('mouseleave.phanterpwa-gallery-sizing', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self.stopSize (event);
		}));
	});}
});

//# sourceMappingURL=phanterpwa.frontend.components.widgets.map