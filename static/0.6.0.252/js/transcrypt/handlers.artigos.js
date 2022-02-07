// Transcrypt'ed from Python, 2022-02-07 17:41:41
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as codemirror from './plugins.codemirror.js';
import * as preloaders from './phanterpwa.frontend.preloaders.js';
import * as widgets from './phanterpwa.frontend.components.widgets.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
import * as gatehandler from './phanterpwa.frontend.gatehandler.js';
var __name__ = 'handlers.artigos';
export var CONCATENATE = helpers.CONCATENATE;
export var OPTION = helpers.XmlConstructor.tagger ('option');
export var SELECT = helpers.XmlConstructor.tagger ('select');
export var DIV = helpers.XmlConstructor.tagger ('div');
export var H2 = helpers.XmlConstructor.tagger ('h2');
export var A = helpers.XmlConstructor.tagger ('a');
export var SPAN = helpers.XmlConstructor.tagger ('span');
export var FORM = helpers.XmlConstructor.tagger ('form');
export var UL = helpers.XmlConstructor.tagger ('ul');
export var LI = helpers.XmlConstructor.tagger ('li');
export var STRONG = helpers.XmlConstructor.tagger ('strong');
export var IMG = helpers.XmlConstructor.tagger ('img', true);
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var I18N = helpers.I18N;
export var XTABLE = widgets.Table;
export var XML = helpers.XML;
export var XTRD = widgets.TableData;
export var XTRH = widgets.TableHead;
export var XFOOTER = widgets.TableFooterPagination;
export var PRE = helpers.XmlConstructor.tagger ('pre');
export var Index =  __class__ ('Index', [gatehandler.Handler], {
	__module__: __name__,
	get initialize () {return __get__ (this, function (self) {
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
		self.meses = dict ({'01': 'Janeiro', '02': 'Fevereiro', '03': 'Março', '04': 'Abril', '05': 'Maio', '06': 'Junho', '07': 'Julho', '08': 'Agosto', '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'});
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('ARTIGOS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-artigos', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		self.get_artigos ();
	});},
	get get_artigos () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'artigos', __kwargtrans__ ({onComplete: self._depois_de_pegar_artigos}));
	});},
	get codemirror_wrapper () {return __get__ (this, function (self, source, lang, _id) {
		if (typeof lang == 'undefined' || (lang != null && lang.hasOwnProperty ("__kwargtrans__"))) {;
			var lang = null;
		};
		if (typeof _id == 'undefined' || (_id != null && _id.hasOwnProperty ("__kwargtrans__"))) {;
			var _id = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'source': var source = __allkwargs0__ [__attrib0__]; break;
						case 'lang': var lang = __allkwargs0__ [__attrib0__]; break;
						case '_id': var _id = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (lang === null || lang === undefined || lang == '') {
			return '';
		}
		else {
			var lang = str (lang).strip ();
			var the_id = _id;
			if (_id === null || _id === undefined) {
				var the_id = window.PhanterPWA.get_id ();
			}
			if (__in__ (lang, dict (window.CodeMirror.modes).py_keys ())) {
				var code = PRE (codemirror.CodeMirrorHelper (the_id, __kwargtrans__ ({value: source, mode: lang, lineNumbers: true})), __kwargtrans__ ({_class: 'markdownit-codemirror_wrapper'})).xml ();
				return code;
			}
			else {
				var code = PRE (codemirror.CodeMirrorHelper (the_id, __kwargtrans__ ({value: source, mode: null, lineNumbers: true})), __kwargtrans__ ({_class: 'markdownit-codemirror_wrapper'})).xml ();
				return code;
			}
		}
	});},
	get _depois_de_pegar_artigos () {return __get__ (this, function (self, data, ajax_status) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'ajax_status': var ajax_status = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (ajax_status == 'success') {
			var json = data.responseJSON;
			if (json.data !== undefined && json.data !== null) {
				var html_artigos = DIV (__kwargtrans__ ({_class: 'artigos-wrapper'}));
				for (var x of json.data) {
					var __left0__ = x.postagem.py_split (' ');
					var data_pos = __left0__ [0];
					var hora = __left0__ [1];
					var __left0__ = data_pos.strip ().py_split ('-');
					var ano = __left0__ [0];
					var mes = __left0__ [1];
					var dia = __left0__ [2];
					var data_postagem = '{0} de {1} de {2} - {3}'.format (dia, self.meses [mes], ano, hora);
					var md = window.markdownit ('default', dict ({'html': true, 'linkify': true, 'typographer': true, 'highlight': (function __lambda__ (source, lang) {
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
								var __allkwargs0__ = arguments [__ilastarg0__--];
								for (var __attrib0__ in __allkwargs0__) {
									switch (__attrib0__) {
										case 'source': var source = __allkwargs0__ [__attrib0__]; break;
										case 'lang': var lang = __allkwargs0__ [__attrib0__]; break;
									}
								}
							}
						}
						else {
						}
						return self.codemirror_wrapper (source, lang);
					})}));
					md.use (window.markdownitAbbr);
					md.use (window.markdownitContainer);
					md.use (window.markdownitDeflist);
					md.use (window.markdownitEmoji);
					md.use (window.markdownitFootnote);
					md.use (window.markdownitIns);
					md.use (window.markdownitMark);
					md.use (window.markdownitSub);
					md.use (window.markdownitSup);
					md.enable ('replacements').enable ('smartquotes').enable ('image');
					var result = DIV (XML (md.render (x.texto)), __kwargtrans__ ({_class: 'phanterpwa-markdownit-wrapper'}));
					html_artigos.append (DIV (H2 (x.titulo), DIV (DIV (STRONG ('Autor: '), x.autor, __kwargtrans__ ({_class: 'p-col w1p50'})), DIV (STRONG ('Postagem: '), data_postagem, __kwargtrans__ ({_class: 'p-col w1p50'})), __kwargtrans__ ({_class: 'p-row'})), result, __kwargtrans__ ({_id: 'artigo-container-{0}'.format (x.id), _class: 'artigo-container'})));
				}
				html_artigos.html_to ('#content-artigos');
			}
		}
	});}
});

//# sourceMappingURL=handlers.artigos.map