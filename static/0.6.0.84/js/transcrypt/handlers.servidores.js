// Transcrypt'ed from Python, 2021-08-23 00:02:46
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as servidor_sme from './plugins.servidor_sme.js';
import * as snippets from './phanterpwa.frontend.components.snippets.js';
import * as forms from './phanterpwa.frontend.forms.js';
import * as widgets from './phanterpwa.frontend.components.widgets.js';
import * as preloaders from './phanterpwa.frontend.preloaders.js';
import * as left_bar from './phanterpwa.frontend.components.left_bar.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
import * as decorators from './phanterpwa.frontend.decorators.js';
import * as gatehandler from './phanterpwa.frontend.gatehandler.js';
var __name__ = 'handlers.servidores';
export var DIV = helpers.XmlConstructor.tagger ('div');
export var I = helpers.XmlConstructor.tagger ('i');
export var H2 = helpers.XmlConstructor.tagger ('h2');
export var FORM = helpers.XmlConstructor.tagger ('form');
export var SPAN = helpers.XmlConstructor.tagger ('span');
export var STRONG = helpers.XmlConstructor.tagger ('strong');
export var IMG = helpers.XmlConstructor.tagger ('img', true);
export var UL = helpers.XmlConstructor.tagger ('ul');
export var LI = helpers.XmlConstructor.tagger ('li');
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var A = helpers.XmlConstructor.tagger ('A');
export var I18N = helpers.I18N;
export var CONCATENATE = helpers.CONCATENATE;
export var PromoOption = snippets.PromoOption;
export var OPTION = helpers.XmlConstructor.tagger ('option');
export var SELECT = helpers.XmlConstructor.tagger ('select');
export var XTABLE = widgets.Table;
export var XML = helpers.XML;
export var XTRD = widgets.TableData;
export var XTRH = widgets.TableHead;
export var XFOOTER = widgets.TableFooterPagination;
export var identificar_servidor = function (code, rq, rp) {
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'code': var code = __allkwargs0__ [__attrib0__]; break;
					case 'rq': var rq = __allkwargs0__ [__attrib0__]; break;
					case 'rp': var rp = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	if (str (code) == '403') {
		var dados_localstorage = localStorage.removeItem ('identificar-servidor');
		window.location = '#_phanterpwa:/identificar-servidor';
	}
	else {
		window.PhanterPWA.open_code_way (code, rq, rp);
	}
};
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
		sessionStorage.removeItem ('servidor_sme');
		sessionStorage.removeItem ('ano_letivo');
		sessionStorage.removeItem ('id_escola');
		self.arg0 = window.PhanterPWA.Request.get_arg (0);
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
			return AreaDoServidor (self, json);
		}), especifico: self.arg0}));
	});}
});
export var AreaDoServidor =  __class__ ('AreaDoServidor', [gatehandler.Handler], {
	__module__: __name__,
	get initialize () {return __get__ (this, decorators.check_authorization ((function __lambda__ () {
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
		return window.PhanterPWA.auth_user_has_role (['administrator', 'root', 'Administrador Master SME', 'Funcionário']);
	})) (function (self) {
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
		self.arg0 = window.PhanterPWA.Request.get_arg (0);
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('ÁREA DO SERVIDOR', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'area-do-servidor-opcoes', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		self.get_options ();
	}));},
	get after_get () {return __get__ (this, function (self, data, ajax_status) {
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
			var opcoes = DIV (__kwargtrans__ ({_class: 'opcoes-disponiveis-do-servidor'}));
			var json = json.servidor_sme;
			if (json.opcoes !== null && json.opcoes !== undefined) {
				if (json.opcoes.multiplas_funcoes !== undefined && json.opcoes.multiplas_funcoes !== null) {
					for (var x of list (json.opcoes.multiplas_funcoes)) {
						x [0] [1] = XML (x [0] [1]);
						opcoes.append (PromoOption (...x [0], __kwargtrans__ (x [1])));
					}
				}
				else {
					if (json.opcoes.funcionario !== undefined) {
						for (var x of list (json.opcoes.funcionario)) {
							x [0] [1] = XML (x [0] [1]);
							opcoes.append (PromoOption (...x [0], __kwargtrans__ (x [1])));
						}
					}
					if (json.opcoes.master_sme !== undefined && json.opcoes.master_sme !== null) {
						for (var x of list (json.opcoes.master_sme)) {
							x [0] [1] = XML (x [0] [1]);
							opcoes.append (PromoOption (...x [0], __kwargtrans__ (x [1])));
						}
					}
					else if (json.opcoes.master_escola !== undefined) {
						for (var x of list (json.opcoes.master_escola)) {
							x [0] [1] = XML (x [0] [1]);
							opcoes.append (PromoOption (...x [0], __kwargtrans__ (x [1])));
						}
					}
					if (json.opcoes.professor !== undefined && json.opcoes.professor !== null) {
						for (var x of list (json.opcoes.professor)) {
							x [0] [1] = XML (x [0] [1]);
							opcoes.append (PromoOption (...x [0], __kwargtrans__ (x [1])));
						}
					}
				}
			}
			opcoes.html_to ('#area-do-servidor-opcoes');
		}
	});},
	get get_servidor () {return __get__ (this, function (self, especifico) {
		if (typeof especifico == 'undefined' || (especifico != null && especifico.hasOwnProperty ("__kwargtrans__"))) {;
			var especifico = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'especifico': var especifico = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (especifico === null) {
			window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'area-do-servidor'], 'onComplete': self.after_get})));
		}
		else {
			window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'area-do-servidor', especifico], 'onComplete': self.after_get})));
		}
	});},
	get get_options () {return __get__ (this, function (self) {
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
		var opcoes = DIV (__kwargtrans__ ({_class: 'opcoes-disponiveis-do-servidor'}));
		var json = window.ServidorSME.get_servidor_sme ();
		if (json.opcoes !== null && json.opcoes !== undefined) {
			if (json.opcoes.multiplas_funcoes !== undefined && json.opcoes.multiplas_funcoes !== null) {
				for (var x of list (json.opcoes.multiplas_funcoes)) {
					x [0] [1] = XML (x [0] [1]);
					opcoes.append (PromoOption (...x [0], __kwargtrans__ (x [1])));
				}
			}
			else {
				if (json.opcoes.funcionario !== undefined) {
					var gates = ['home', 'admin', 'profile', 'two_factor', 'lock', 'area-do-servidor', 'professores'];
					for (var x of list (json.opcoes.funcionario)) {
						x [0] [1] = XML (x [0] [1]);
						opcoes.append (PromoOption (...x [0], __kwargtrans__ (x [1])));
						var BackButton1 = left_bar.LeftBarButton ('menu_{0}'.format (x [0] [0]), x [1] ['_title'], XML (x [0] [1]), __kwargtrans__ (dict ({'tag': 'a', '_href': x [1] ['_href'], '_title': x [1] ['_title'], 'position': 'bottom', 'show_if': (function __lambda__ () {
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
							return (!__in__ (window.PhanterPWA.get_current_gate (), gates) ? true : false);
						})})));
						window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
					}
				}
				if (json.opcoes.master_sme !== undefined && json.opcoes.master_sme !== null) {
					var gates = ['home', 'admin', 'profile', 'two_factor', 'lock', 'area-do-servidor', 'professores'];
					for (var x of list (json.opcoes.master_sme)) {
						x [0] [1] = XML (x [0] [1]);
						opcoes.append (PromoOption (...x [0], __kwargtrans__ (x [1])));
						var BackButton1 = left_bar.LeftBarButton ('menu_{0}'.format (x [0] [0]), x [1] ['_title'], XML (x [0] [1]), __kwargtrans__ (dict ({'tag': 'a', '_href': x [1] ['_href'], '_title': x [1] ['_title'], 'position': 'bottom', 'show_if': (function __lambda__ () {
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
							return (!__in__ (window.PhanterPWA.get_current_gate (), gates) ? true : false);
						})})));
						window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
					}
				}
				else if (json.opcoes.master_escola !== undefined) {
					var gates = ['home', 'admin', 'profile', 'two_factor', 'lock', 'area-do-servidor', 'professores'];
					for (var x of list (json.opcoes.master_escola)) {
						x [0] [1] = XML (x [0] [1]);
						opcoes.append (PromoOption (...x [0], __kwargtrans__ (x [1])));
						var BackButton1 = left_bar.LeftBarButton ('menu_{0}'.format (x [0] [0]), x [1] ['_title'], XML (x [0] [1]), __kwargtrans__ (dict ({'tag': 'a', '_href': x [1] ['_href'], '_title': x [1] ['_title'], 'position': 'bottom', 'show_if': (function __lambda__ () {
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
							return (!__in__ (window.PhanterPWA.get_current_gate (), gates) ? true : false);
						})})));
						window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
					}
				}
				if (json.opcoes.professor !== undefined && json.opcoes.professor !== null) {
					var gates = ['home', 'admin', 'profile', 'two_factor', 'lock', 'area-do-servidor'];
					for (var x of list (json.opcoes.professor)) {
						x [0] [1] = XML (x [0] [1]);
						opcoes.append (PromoOption (...x [0], __kwargtrans__ (x [1])));
						var BackButton1 = left_bar.LeftBarButton ('menu_{0}'.format (x [0] [0]), x [1] ['_title'], XML (x [0] [1]), __kwargtrans__ (dict ({'tag': 'a', '_href': x [1] ['_href'], '_title': x [1] ['_title'], 'position': 'bottom', 'show_if': (function __lambda__ () {
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
							return (!__in__ (window.PhanterPWA.get_current_gate (), gates) ? true : false);
						})})));
						window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
					}
				}
			}
		}
		opcoes.html_to ('#area-do-servidor-opcoes');
	});}
});

//# sourceMappingURL=handlers.servidores.map