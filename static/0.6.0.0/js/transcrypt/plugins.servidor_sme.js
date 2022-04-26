// Transcrypt'ed from Python, 2022-04-26 16:30:36
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as left_bar from './phanterpwa.frontend.components.left_bar.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
var __name__ = 'plugins.servidor_sme';
export var XML = helpers.XML;
export var ServidorSME =  __class__ ('ServidorSME', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, on_success, on_error, especifico) {
		if (typeof on_success == 'undefined' || (on_success != null && on_success.hasOwnProperty ("__kwargtrans__"))) {;
			var on_success = null;
		};
		if (typeof on_error == 'undefined' || (on_error != null && on_error.hasOwnProperty ("__kwargtrans__"))) {;
			var on_error = null;
		};
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
						case 'on_success': var on_success = __allkwargs0__ [__attrib0__]; break;
						case 'on_error': var on_error = __allkwargs0__ [__attrib0__]; break;
						case 'especifico': var especifico = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.ServidorSME = self;
		self.on_error = on_error;
		self.on_success = on_success;
		self.especifico = especifico;
		self.reload ();
	});},
	get _servidor_sme () {return __get__ (this, function (self) {
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
		if (self.especifico === null || self.especifico === undefined) {
			window.PhanterPWA.GET ('api', 'area-do-servidor', __kwargtrans__ ({onComplete: self._on_complete}));
		}
		else {
			window.PhanterPWA.GET ('api', 'area-do-servidor', self.especifico, __kwargtrans__ ({onComplete: self._on_complete}));
		}
	});},
	get _on_complete () {return __get__ (this, function (self, data, ajax_status) {
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
			self.set_servidor_sme (json.servidor_sme);
			if (callable (self.on_success)) {
				self.on_success (json);
			}
		}
		else if (data.status == 403) {
			window.location = '#_phanterpwa:/identificar-servidor';
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
		self._servidor_sme ();
	});},
	get get_servidor_sme () {return function () {
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
		var servidor_sme = sessionStorage.getItem ('servidor_sme');
		if (servidor_sme === null || servidor_sme === undefined) {
			return null;
		}
		else {
			var servidor_sme = JSON.parse (servidor_sme);
			return servidor_sme;
		}
	};},
	get get_left_bar_buttons () {return function () {
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
		var json = ServidorSME.get_servidor_sme ();
		if (json !== null) {
			if (json.opcoes.funcionario !== undefined) {
				var gates = ['home', 'admin', 'profile', 'two_factor', 'lock', 'area-do-servidor', 'professores'];
				for (var x of list (json.opcoes.funcionario)) {
					var BackButton1 = left_bar.LeftBarButton ('menu_{0}'.format (x [0] [0]), x [1] ['_title'], XML (x [0] [1]), __kwargtrans__ (dict ([['tag', 'a'], ['_href', x [1] ['_href']], ['_title', x [1] ['_title']], ['position', 'bottom'], ['show_if', (function __lambda__ () {
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
					})]])));
					window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
				}
			}
			if (json.opcoes.master_sme !== undefined && json.opcoes.master_sme !== null) {
				var gates = ['home', 'admin', 'profile', 'two_factor', 'lock', 'area-do-servidor', 'professores'];
				for (var x of list (json.opcoes.master_sme)) {
					var BackButton1 = left_bar.LeftBarButton ('menu_{0}'.format (x [0] [0]), x [1] ['_title'], XML (x [0] [1]), __kwargtrans__ (dict ([['tag', 'a'], ['_href', x [1] ['_href']], ['_title', x [1] ['_title']], ['position', 'bottom'], ['show_if', (function __lambda__ () {
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
					})]])));
					window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
				}
			}
			else if (json.opcoes.coordenacao_sme !== undefined && json.opcoes.coordenacao_sme !== null) {
				var gates = ['home', 'admin', 'profile', 'two_factor', 'lock', 'area-do-servidor', 'professores'];
				for (var x of list (json.opcoes.coordenacao_sme)) {
					var BackButton1 = left_bar.LeftBarButton ('menu_{0}'.format (x [0] [0]), x [1] ['_title'], XML (x [0] [1]), __kwargtrans__ (dict ([['tag', 'a'], ['_href', x [1] ['_href']], ['_title', x [1] ['_title']], ['position', 'bottom'], ['show_if', (function __lambda__ () {
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
					})]])));
					window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
				}
			}
			else if (json.opcoes.master_escola !== undefined) {
				var gates = ['home', 'admin', 'profile', 'two_factor', 'lock', 'area-do-servidor', 'professores'];
				for (var x of list (json.opcoes.master_escola)) {
					var BackButton1 = left_bar.LeftBarButton ('menu_{0}'.format (x [0] [0]), x [1] ['_title'], XML (x [0] [1]), __kwargtrans__ (dict ([['tag', 'a'], ['_href', x [1] ['_href']], ['_title', x [1] ['_title']], ['position', 'bottom'], ['show_if', (function __lambda__ () {
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
					})]])));
					window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
				}
			}
			if (json.opcoes.professor !== undefined && json.opcoes.professor !== null) {
				var gates = ['home', 'admin', 'profile', 'two_factor', 'lock', 'area-do-servidor'];
				for (var x of list (json.opcoes.professor)) {
					var BackButton1 = left_bar.LeftBarButton ('menu_{0}'.format (x [0] [0]), x [1] ['_title'], XML (x [0] [1]), __kwargtrans__ (dict ([['tag', 'a'], ['_href', x [1] ['_href']], ['_title', x [1] ['_title']], ['position', 'bottom'], ['show_if', (function __lambda__ () {
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
					})]])));
					window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
				}
			}
		}
	};},
	get get_ano_letivo () {return __get__ (this, function (self) {
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
		var servidor_sme = self.get_servidor_sme ();
		if (servidor_sme !== null) {
			var ano_letivo = servidor_sme.ano_letivo;
			if (ano_letivo === undefined) {
				return null;
			}
			return ano_letivo;
		}
		return null;
	});},
	get get_anos_letivos () {return __get__ (this, function (self) {
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
		var servidor_sme = self.get_servidor_sme ();
		if (servidor_sme !== null) {
			var anos_letivos = list (servidor_sme.anos_letivos);
			return anos_letivos;
		}
		return list ();
	});},
	get get_escola () {return __get__ (this, function (self) {
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
		var escolas = self.get_escolas ();
		if (isinstance (escolas, list) && len (escolas) == 1) {
			return escolas [0];
		}
		var servidor_sme = self.get_servidor_sme ();
		if (servidor_sme !== null) {
			var escola = servidor_sme.escola;
			if (escola === undefined || escola === null) {
				return null;
			}
			return escola;
		}
		return null;
	});},
	get get_total_escolas () {return __get__ (this, function (self) {
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
		var servidor_sme = self.get_servidor_sme ();
		if (servidor_sme !== null) {
			var total_escolas = servidor_sme.total_escolas;
			return total_escolas;
		}
		return 0;
	});},
	get get_escolas () {return __get__ (this, function (self) {
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
		var servidor_sme = self.get_servidor_sme ();
		if (servidor_sme !== null) {
			var escolas = list (servidor_sme.escolas);
			return escolas;
		}
		return list ();
	});},
	get set_servidor_sme () {return __get__ (this, function (self, value) {
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
		if (value !== null && value !== undefined) {
			sessionStorage.setItem ('servidor_sme', JSON.stringify (value));
		}
	});},
	get set_escola () {return __get__ (this, function (self, value) {
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
		var escolas = self.get_escolas ();
		var servidor_sme = self.get_servidor_sme ();
		if (escolas !== null) {
			var escolha = null;
			for (var x of escolas) {
				if (int (value) == x.id) {
					var escolha = x;
				}
			}
		}
		if (escolha !== null && servidor_sme !== null) {
			servidor_sme.escola = escolha;
			self.set_servidor_sme (servidor_sme);
		}
	});},
	get set_ano_letivo () {return __get__ (this, function (self, value) {
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
		var anos_letivos = self.get_anos_letivos ();
		var servidor_sme = self.get_servidor_sme ();
		if (anos_letivos !== null) {
			var escolha = null;
			for (var x of anos_letivos) {
				if (int (value) == x.ano) {
					var escolha = x.ano;
				}
			}
		}
		if (escolha !== null && servidor_sme !== null) {
			servidor_sme.ano_letivo = escolha;
			self.set_servidor_sme (servidor_sme);
		}
	});}
});

//# sourceMappingURL=plugins.servidor_sme.map