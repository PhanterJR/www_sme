// Transcrypt'ed from Python, 2022-01-19 13:42:49
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as servidor_sme from './plugins.servidor_sme.js';
import * as decorators from './phanterpwa.frontend.decorators.js';
import * as preloaders from './phanterpwa.frontend.preloaders.js';
import * as modal from './phanterpwa.frontend.components.modal.js';
import * as forms from './phanterpwa.frontend.forms.js';
import * as left_bar from './phanterpwa.frontend.components.left_bar.js';
import * as widgets from './phanterpwa.frontend.components.widgets.js';
import * as validations from './phanterpwa.frontend.validations.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
import * as gatehandler from './phanterpwa.frontend.gatehandler.js';
var __name__ = 'handlers.anos_letivos';
export var CONCATENATE = helpers.CONCATENATE;
export var OPTION = helpers.XmlConstructor.tagger ('option');
export var SELECT = helpers.XmlConstructor.tagger ('select');
export var DIV = helpers.XmlConstructor.tagger ('div');
export var I = helpers.XmlConstructor.tagger ('i');
export var A = helpers.XmlConstructor.tagger ('a');
export var SPAN = helpers.XmlConstructor.tagger ('span');
export var FORM = helpers.XmlConstructor.tagger ('form');
export var UL = helpers.XmlConstructor.tagger ('ul');
export var LI = helpers.XmlConstructor.tagger ('li');
export var HR = helpers.XmlConstructor.tagger ('hr', true);
export var STRONG = helpers.XmlConstructor.tagger ('strong');
export var IMG = helpers.XmlConstructor.tagger ('img', true);
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var I18N = helpers.I18N;
export var XTABLE = widgets.Table;
export var XML = helpers.XML;
export var XTRD = widgets.TableData;
export var XTRH = widgets.TableHead;
export var XFOOTER = widgets.TableFooterPagination;
export var XSECTION = helpers.XSECTION;
export var TD = helpers.XmlConstructor.tagger ('td');
export var TR = helpers.XmlConstructor.tagger ('tr');
export var EscolherAnoLetivo =  __class__ ('EscolherAnoLetivo', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, id_target, callback_link) {
		if (typeof id_target == 'undefined' || (id_target != null && id_target.hasOwnProperty ("__kwargtrans__"))) {;
			var id_target = null;
		};
		if (typeof callback_link == 'undefined' || (callback_link != null && callback_link.hasOwnProperty ("__kwargtrans__"))) {;
			var callback_link = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_target': var id_target = __allkwargs0__ [__attrib0__]; break;
						case 'callback_link': var callback_link = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var html = '';
		self.callback_link = callback_link;
		if (window.ServidorSME !== undefined) {
			self.lista_de_anos_letivos = window.ServidorSME.get_anos_letivos ();
			var html = self.xml_anos_letivos ();
			if (id_target !== null) {
				if ($ (id_target).length == 1) {
					DIV (self.xml_anos_letivos ()).html_to (id_target);
				}
				else {
					var __except0__ = ValueError ('O id "{0}"do destino n??o existe ou n??o ?? ??nico.'.format (id_target));
					__except0__.__cause__ = null;
					throw __except0__;
				}
			}
		}
		else {
			servidor_sme.ServidorSME (__kwargtrans__ ({on_success: (function __lambda__ (json) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'json': var json = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				return EscolherAnoLetivo (__kwargtrans__ ({id_target: id_target, callback_link: callback_link}));
			})}));
		}
		helpers.XmlConstructor.__init__ (self, 'div', false, html);
	});},
	get xml_anos_letivos () {return __get__ (this, function (self) {
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
		var html = DIV (__kwargtrans__ ({_class: 'p-row'}));
		for (var x of self.lista_de_anos_letivos) {
			var link = '#';
			if (callable (self.callback_link)) {
				var link = self.callback_link (x.ano);
			}
			var esc = DIV (DIV (A (DIV ('{0}'.format (x.ano), __kwargtrans__ ({_class: 'botao-ano'})), __kwargtrans__ ({_href: link, _style: 'text-decoration: none;'})), __kwargtrans__ ({_class: 'anos_letivos-container-abreviacao p-col w1p100'})), __kwargtrans__ ({_class: 'p-col  w1p50 w2p33 w3p25 w4p10'}));
			html.append (esc);
		}
		return DIV (DIV ('ANTES DE CONTINUAR ESCOLHA O ANO LETIVO', __kwargtrans__ ({_class: 'card-title'})), html);
	});}
});

//# sourceMappingURL=handlers.anos_letivos.map