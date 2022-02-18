// Transcrypt'ed from Python, 2022-02-17 23:36:34
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as anos_letivos from './handlers.anos_letivos.js';
import * as escolas from './handlers.escolas.js';
import * as decorators from './phanterpwa.frontend.decorators.js';
import * as preloaders from './phanterpwa.frontend.preloaders.js';
import * as modal from './phanterpwa.frontend.components.modal.js';
import * as fmasks from './phanterpwa.frontend.fmasks.js';
import * as forms from './phanterpwa.frontend.forms.js';
import * as left_bar from './phanterpwa.frontend.components.left_bar.js';
import * as widgets from './phanterpwa.frontend.components.widgets.js';
import * as validations from './phanterpwa.frontend.validations.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
import * as gatehandler from './phanterpwa.frontend.gatehandler.js';
var __name__ = 'handlers.matriculas';
export var CONCATENATE = helpers.CONCATENATE;
export var OPTION = helpers.XmlConstructor.tagger ('option');
export var SELECT = helpers.XmlConstructor.tagger ('select');
export var DIV = helpers.XmlConstructor.tagger ('div');
export var BUTTON = helpers.XmlConstructor.tagger ('button');
export var I = helpers.XmlConstructor.tagger ('i');
export var A = helpers.XmlConstructor.tagger ('a');
export var SPAN = helpers.XmlConstructor.tagger ('span');
export var FORM = helpers.XmlConstructor.tagger ('form');
export var UL = helpers.XmlConstructor.tagger ('ul');
export var LI = helpers.XmlConstructor.tagger ('li');
export var STRONG = helpers.XmlConstructor.tagger ('strong');
export var IMG = helpers.XmlConstructor.tagger ('img', true);
export var H2 = helpers.XmlConstructor.tagger ('h2');
export var H3 = helpers.XmlConstructor.tagger ('h3');
export var TABLE = helpers.XmlConstructor.tagger ('table');
export var TH = helpers.XmlConstructor.tagger ('th');
export var TD = helpers.XmlConstructor.tagger ('td');
export var P = helpers.XmlConstructor.tagger ('p');
export var TR = helpers.XmlConstructor.tagger ('tr');
export var LABEL = helpers.XmlConstructor.tagger ('label');
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var I18N = helpers.I18N;
export var HR = helpers.XmlConstructor.tagger ('hr', true);
export var XTABLE = widgets.Table;
export var XML = helpers.XML;
export var THEAD = helpers.XmlConstructor.tagger ('thead');
export var TFOOT = helpers.XmlConstructor.tagger ('tfoot');
export var XTRD = widgets.TableData;
export var XTRH = widgets.TableHead;
export var XFOOTER = widgets.TableFooterPagination;
export var Index =  __class__ ('Index', [gatehandler.Handler], {
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
		return window.PhanterPWA.auth_user_has_role (['administrator', 'root', 'Administrador Master SME', 'Administrador Master Escola']);
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
		var arg0 = window.PhanterPWA.Request.get_arg (0);
		var arg1 = window.PhanterPWA.Request.get_arg (1);
		var arg2 = window.PhanterPWA.Request.get_arg (2);
		var arg3 = window.PhanterPWA.Request.get_arg (3);
		var arg4 = window.PhanterPWA.Request.get_arg (4);
		var arg5 = window.PhanterPWA.Request.get_arg (5);
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('MATRICULAS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-painel-matriculas', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		if (window.PhanterPWA.auth_user_has_role (['administrator', 'root', 'Administrador Master SME'])) {
			if (arg0 == 'escola') {
				if (arg1 === null || arg1 === undefined) {
					var html = escolas.EscolherEscola (__kwargtrans__ ({id_target: '#content-painel-matriculas', callback_link: (function __lambda__ (id_escola) {
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
								var __allkwargs0__ = arguments [__ilastarg0__--];
								for (var __attrib0__ in __allkwargs0__) {
									switch (__attrib0__) {
										case 'id_escola': var id_escola = __allkwargs0__ [__attrib0__]; break;
									}
								}
							}
						}
						else {
						}
						return '#_phanterpwa:/matriculas/escola/{0}'.format (id_escola);
					})}));
				}
				else {
					self.painel = PainelAdministradorMasterEscola (self, arg0, arg1, arg2, arg3, arg4, arg5);
				}
				var BackButton = left_bar.LeftBarButton ('back_matriculas_sme', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': '#_phanterpwa:/matriculas', 'position': 'top', 'show_if_way_match': '^matriculas\\/escola\\/[0-9]{1,}\\/?$'})));
			}
			else if (arg0 == 'lista') {
				if (arg1 === null || arg1 === undefined) {
					var html = escolas.EscolherEscola (__kwargtrans__ ({id_target: '#content-painel-matriculas', callback_link: (function __lambda__ (id_escola) {
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
								var __allkwargs0__ = arguments [__ilastarg0__--];
								for (var __attrib0__ in __allkwargs0__) {
									switch (__attrib0__) {
										case 'id_escola': var id_escola = __allkwargs0__ [__attrib0__]; break;
									}
								}
							}
						}
						else {
						}
						return '#_phanterpwa:/matriculas/lista/{0}'.format (id_escola);
					})}));
				}
				else if (str (arg1).isdigit () && (arg2 === null || arg2 === undefined)) {
					var html = anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({id_target: '#content-diario_de_notas', callback_link: (function __lambda__ (ano) {
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
								var __allkwargs0__ = arguments [__ilastarg0__--];
								for (var __attrib0__ in __allkwargs0__) {
									switch (__attrib0__) {
										case 'ano': var ano = __allkwargs0__ [__attrib0__]; break;
									}
								}
							}
						}
						else {
						}
						return '#_phanterpwa:/matriculas/lista/{0}/{1}'.format (arg1, ano);
					})}));
				}
				else if (str (arg1).isdigit () && str (arg2).isdigit ()) {
					self.Matriculas = Matriculas (self, arg1, arg2);
				}
			}
			else {
				self.painel = PainelAdministradorMasterSME (self, arg0, arg1, arg2, arg3, arg4, arg5);
				var BackButton = left_bar.LeftBarButton ('back_matriculas_sme_escola', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': '#_phanterpwa:/area-do-servidor', 'position': 'top', 'show_if_way_match': '^matriculas\\/?$'})));
			}
		}
		else if (arg0 == 'escola' && (arg1 === null || arg1 === undefined)) {
			var html = escolas.EscolherEscola (__kwargtrans__ ({id_target: '#content-painel-matriculas', callback_link: (function __lambda__ (id_escola) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'id_escola': var id_escola = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				return '#_phanterpwa:/matriculas/escola/{0}'.format (id_escola);
			})}));
		}
		else if (arg0 == 'lista') {
			if (arg1 === null || arg1 === undefined) {
				var html = escolas.EscolherEscola (__kwargtrans__ ({id_target: '#content-painel-matriculas', callback_link: (function __lambda__ (id_escola) {
					if (arguments.length) {
						var __ilastarg0__ = arguments.length - 1;
						if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
							var __allkwargs0__ = arguments [__ilastarg0__--];
							for (var __attrib0__ in __allkwargs0__) {
								switch (__attrib0__) {
									case 'id_escola': var id_escola = __allkwargs0__ [__attrib0__]; break;
								}
							}
						}
					}
					else {
					}
					return '#_phanterpwa:/matriculas/lista/{0}'.format (id_escola);
				})}));
			}
			else if (str (arg1).isdigit () && (arg2 === null || arg2 === undefined)) {
				var html = anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({id_target: '#content-diario_de_notas', callback_link: (function __lambda__ (ano) {
					if (arguments.length) {
						var __ilastarg0__ = arguments.length - 1;
						if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
							var __allkwargs0__ = arguments [__ilastarg0__--];
							for (var __attrib0__ in __allkwargs0__) {
								switch (__attrib0__) {
									case 'ano': var ano = __allkwargs0__ [__attrib0__]; break;
								}
							}
						}
					}
					else {
					}
					return '#_phanterpwa:/matriculas/lista/{0}/{1}'.format (arg1, ano);
				})}));
			}
			else if (str (arg1).isdigit () && str (arg2).isdigit ()) {
				self.Matriculas = Matriculas (self, arg1, arg2);
			}
		}
		else {
			var BackButton = left_bar.LeftBarButton ('back_matriculas_paineis_escolas', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': '#_phanterpwa:/area-do-servidor', 'position': 'top', 'show_if_way_match': '^matriculas\\/escola\\/[0-9]{1,}\\/?$'})));
			self.painel = PainelAdministradorMasterEscola (self, arg0, arg1, arg2, arg3, arg4, arg5);
		}
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
	}));}
});
export var PainelAdministradorMasterSME =  __class__ ('PainelAdministradorMasterSME', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, arg0, arg1, arg2, arg3, arg4, arg5) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
						case 'arg0': var arg0 = __allkwargs0__ [__attrib0__]; break;
						case 'arg1': var arg1 = __allkwargs0__ [__attrib0__]; break;
						case 'arg2': var arg2 = __allkwargs0__ [__attrib0__]; break;
						case 'arg3': var arg3 = __allkwargs0__ [__attrib0__]; break;
						case 'arg4': var arg4 = __allkwargs0__ [__attrib0__]; break;
						case 'arg5': var arg5 = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.index_instance = index_instance;
		self.arg0 = arg0;
		self.arg1 = arg1;
		self.arg2 = arg2;
		self.arg3 = arg3;
		self.arg4 = arg4;
		self.arg5 = arg5;
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('MATRICULAS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-painel-matriculas', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		self.obter_dados_sme ();
	});},
	get obter_dados_sme () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'matriculas', 'sme', __kwargtrans__ ({onComplete: self.depois_de_obter_dados_sme}));
	});},
	get depois_de_obter_dados_sme () {return __get__ (this, function (sef, data, ajax_status) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'sef': var sef = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'ajax_status': var ajax_status = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (ajax_status == 'success') {
			var logo_principal = '{0}/api/escolas/12/image'.format (window.PhanterPWA.ApiServer.remote_address);
			var json = data.responseJSON;
			var xmls = [];
			var table = XTABLE ('tabela_dados_quant_matriculas_sme');
			var anos = [];
			for (var x of json.dados) {
				var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, x.id_escola);
				if (!__in__ (x.ano_letivo, anos)) {
					anos.append (x.ano_letivo);
					var table = XTABLE ('tabela_dados_quant_matriculas_sme_{0}'.format (x.anos_letivo), TR (TD (x.ano_letivo, __kwargtrans__ ({_colspan: 8, _style: 'text-align: center; background-color: #d5d5d5;'}))), XTRH ('tabela_dados_quant_matriculas_sme_tr_{0}_ano_{1}'.format (x.id_escola, x.ano_letivo), 'Logo', 'Escola', TH ('Matrículas efetuadas', __kwargtrans__ ({_style: 'text-align: center;'})), TH ('Transferidos', __kwargtrans__ ({_style: 'text-align: center;'})), TH ('Desistentes', __kwargtrans__ ({_style: 'text-align: center;'})), TH ('Sem turma', __kwargtrans__ ({_style: 'text-align: center;'})), TH ('Matrículas efetivas', __kwargtrans__ ({_style: 'text-align: center;'})), TH (__kwargtrans__ ({_style: 'width: 40px'}))));
					xmls.append (table);
				}
				table.append (XTRD ('tabela_dados_quant_matriculas_sme_td_{0}_ano_{1}'.format (x.id_escola, x.ano_letivo), TD (IMG (__kwargtrans__ ({_src: logo, _style: 'width: 40px; heigth: 40px; border-radius: 100%'})), __kwargtrans__ ({_style: 'width: 40px'})), x.escola, TD (x.quantidade_inicial, __kwargtrans__ ({_style: 'text-align: center;'})), TD (x.transferidos, __kwargtrans__ ({_style: 'text-align: center; color: orange;'})), TD (x.desistentes, __kwargtrans__ ({_style: 'text-align: center; color: red;'})), TD (x.sem_turma, __kwargtrans__ ({_style: 'text-align: center; color: blue;'})), TD (STRONG (x.quantidade_final), __kwargtrans__ ({_style: 'text-align: center; color: green;'})), DIV (widgets.MenuBox ('matriculas_escolas_por_ano_{0}_{1}'.format (x.id_escola, x.ano_letivo), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Detalhe', __kwargtrans__ (dict ({'_class': 'wave_on_click', '_href': window.PhanterPWA.XWAY ('matriculas', 'escola', x.id_escola)}))), widgets.MenuOption ('Turmas', __kwargtrans__ (dict ({'_class': 'wave_on_click', '_href': window.PhanterPWA.XWAY ('turmas', x.id_escola, x.ano_letivo)}))), widgets.MenuOption ('Matricular', __kwargtrans__ (dict ({'_class': 'wave_on_click', '_href': window.PhanterPWA.XWAY ('matriculas', 'matricular', x.id_escola, x.ano_letivo)})))), __kwargtrans__ ({_class: 'phanterpwa-xsection-menu_buttom'})), __kwargtrans__ (dict ({'drag_and_drop': false}))));
			}
			var card = CONCATENATE (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo_principal})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (H2 ('QUANTIDADE DE MATRÍCULAS DISTRIBUÍDAS POR ESCOLA SEPARADAS POR ANO.'), __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), ...xmls, DIV (__kwargtrans__ ({_id: 'modal_quantidade_matriculas_case'})));
			card.html_to ('#content-painel-matriculas');
		}
	});}
});
export var PainelAdministradorMasterEscola =  __class__ ('PainelAdministradorMasterEscola', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, arg0, arg1, arg2, arg3, arg4, arg5) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
						case 'arg0': var arg0 = __allkwargs0__ [__attrib0__]; break;
						case 'arg1': var arg1 = __allkwargs0__ [__attrib0__]; break;
						case 'arg2': var arg2 = __allkwargs0__ [__attrib0__]; break;
						case 'arg3': var arg3 = __allkwargs0__ [__attrib0__]; break;
						case 'arg4': var arg4 = __allkwargs0__ [__attrib0__]; break;
						case 'arg5': var arg5 = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.index_instance = index_instance;
		self.arg0 = arg0;
		self.arg1 = arg1;
		self.arg2 = arg2;
		self.arg3 = arg3;
		self.arg4 = arg4;
		self.arg5 = arg5;
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('MATRICULAS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-painel-matriculas', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		self.obter_dados_escola (arg1);
	});},
	get obter_dados_escola () {return __get__ (this, function (self, id_escola) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_escola': var id_escola = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.GET ('api', 'matriculas', 'escola', id_escola, __kwargtrans__ ({onComplete: self.depois_de_obter_dados_escola}));
	});},
	get depois_de_obter_dados_escola () {return __get__ (this, function (self, data, ajax_status) {
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
			var logo_principal = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.arg1);
			var table = XTABLE ('tabela_dados_quant_matriculas_sme', XTRH ('tabela_dados_quant_matriculas_sme_tr', 'Ano Letivo', TH ('Matrículas efetuadas', __kwargtrans__ ({_style: 'text-align: center;'})), TH ('Transferidos', __kwargtrans__ ({_style: 'text-align: center;'})), TH ('Desistentes', __kwargtrans__ ({_style: 'text-align: center;'})), TH ('Sem turma', __kwargtrans__ ({_style: 'text-align: center;'})), TH ('Matrículas efetivas', __kwargtrans__ ({_style: 'text-align: center;'})), TH (__kwargtrans__ ({_style: 'width: 40px'}))));
			for (var x of json.dados) {
				table.append (XTRD ('tabela_dados_quant_matriculas_sme_td_{0}'.format (x.id_escola), x.ano_letivo, TD (x.quantidade_inicial, __kwargtrans__ ({_style: 'text-align: center;'})), TD (x.transferidos, __kwargtrans__ ({_style: 'text-align: center; color: orange;'})), TD (x.desistentes, __kwargtrans__ ({_style: 'text-align: center; color: red;'})), TD (x.sem_turma, __kwargtrans__ ({_style: 'text-align: center; color: blue;'})), TD (STRONG (x.quantidade_final), __kwargtrans__ ({_style: 'text-align: center; color: green;'})), DIV (widgets.MenuBox ('matriculas_escolas_por_ano_detalhado_{0}_{1}'.format (x.id_escola, x.ano_letivo), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Matriculados', __kwargtrans__ (dict ({'_class': 'wave_on_click', '_href': window.PhanterPWA.XWAY ('matriculas', 'lista', x.id_escola, x.ano_letivo)}))), widgets.MenuOption ('Matricular', __kwargtrans__ (dict ({'_class': 'wave_on_click', '_href': window.PhanterPWA.XWAY ('matriculas', 'matricular', x.id_escola, x.ano_letivo)}))), HR (), widgets.MenuOption ('Turmas', __kwargtrans__ (dict ({'_class': 'wave_on_click', '_href': window.PhanterPWA.XWAY ('turmas', x.id_escola, x.ano_letivo)})))), __kwargtrans__ ({_class: 'phanterpwa-xsection-menu_buttom'})), __kwargtrans__ (dict ({'drag_and_drop': false}))));
			}
			var card = CONCATENATE (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo_principal})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (H2 ('QUANTIDADE DE MATRÍCULAS DA ESCOLA DISTRIBUÍDAS POR ANO.'), __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), table, DIV (__kwargtrans__ ({_id: 'modal_quantidade_matriculas_case'})));
			card.html_to ('#content-painel-matriculas');
		}
	});}
});
export var Matriculas =  __class__ ('Matriculas', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, id_escola, ano_letivo) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
						case 'id_escola': var id_escola = __allkwargs0__ [__attrib0__]; break;
						case 'ano_letivo': var ano_letivo = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.index_instance = index_instance;
		self.id_escola = id_escola;
		self.ano_letivo = ano_letivo;
		var html = DIV (DIV (FORM (DIV (DIV (DIV (widgets.Input ('search_matriculas', __kwargtrans__ ({label: 'Localizar Aluno(a)', placeholder: 'Nome ou parte do nome do aluno', icon: I (__kwargtrans__ ({_class: 'fab fa-sistrix'})), icon_on_click: (function __lambda__ () {
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
			return self.search ();
		})})), __kwargtrans__ ({_id: 'search_matriculas_container', _class: 'p-col w1p100 w3p50 w4p75'})), DIV (widgets.Select ('campos_matriculas', __kwargtrans__ ({label: 'Campos à pesquisar', placeholder: 'Escolha o Campo', value: 'aluno', data_set: [['id', 'ID'], ['aluno', 'Nome do(a) Aluno(a)'], ['data_nasc', 'Data de Nascimento'], ['nome_do_pai', 'Nome do Pai'], ['nome_da_mae', 'Nome da Mãe']]})), __kwargtrans__ ({_id: 'phanterpwa-input-search_field-matriculas', _class: 'p-col w1p100 w3p50 w4p25'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ ({_action: '#', _id: 'search_matriculas', _class: 'form-search_matriculas', _enctype: 'multipart/form-data', _method: 'post', _autocomplete: 'off'})), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), DIV (__kwargtrans__ ({_id: 'lista-matriculas-subtitle', _class: 'phanterpwa-subtitle'})), DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'lista-matriculas-container', _class: 'phanterpwa_tables_container'})), DIV (__kwargtrans__ ({_id: 'modal_visualizar_aluno'})), DIV (__kwargtrans__ ({_id: 'modal_matricula_aluno'})), DIV (__kwargtrans__ ({_id: 'modal_desistencia_aluno'})), DIV (__kwargtrans__ ({_id: 'modal_transferencia_aluno'})), DIV (__kwargtrans__ ({_id: 'modal_deletar_matricula_container'})), DIV (__kwargtrans__ ({_id: 'modal_documentos'})), DIV (I (__kwargtrans__ ({_class: 'fas fa-print'})), __kwargtrans__ ({_class: 'imprimir fixed_button', _title: 'Imprimir lista de alunos matriculados por turma'})), __kwargtrans__ ({_class: 'matriculas-container phanterpwa-card-container'}));
		html.html_to ('#content-painel-matriculas');
		self.search ();
	});},
	get binds () {return __get__ (this, function (self) {
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
		$ ('#phanterpwa-widget-input-input-search_matriculas').off ('keydown.search_aluno_matricula').on ('keydown.search_aluno_matricula', self._onkeydown);
		$ ('#phanterpwa-widget-input-input-search_matriculas').off ('keyup.search_aluno_matricula').on ('keyup.search_aluno_matricula', self._onkeyup);
		$ ('#phanterpwa-widget-input-input-search_matriculas').off ('keypress.search_aluno_matricula').on ('keypress.search_aluno_matricula', self._onkeypress);
		$ ('#phanterpwa-widget-select-input-campos_matriculas').off ('change.search_field-matriculas').on ('change.search_field-matriculas', (function __lambda__ () {
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
			return self.mudar_input_search (this);
		}));
		$ ('.imprimir.fixed_button').off ('click.imprimir_matriculas').on ('click.simprimir_matriculas', (function __lambda__ () {
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
			return setTimeout (window.print (), 500);
		}));
	});},
	get mudar_input_search () {return __get__ (this, function (self, el) {
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
		var element = $ (el);
		var campo = element.val ();
		$ ('#phanterpwa-widget-input-input-search_matriculas').val ('');
		if (campo == 'Nome do(a) Aluno(a)') {
			$ ('#search_matriculas_container').find ('label').text ('Localizar Aluno(a)');
			$ ('#phanterpwa-widget-input-input-search_matriculas').attr ('placeholder', 'Nome ou parte do nome do aluno');
		}
		else if (campo == 'Nome do Pai') {
			$ ('#search_matriculas_container').find ('label').text ('Localizar Pai');
			$ ('#phanterpwa-widget-input-input-search_matriculas').attr ('placeholder', 'Nome ou parte do nome do pai');
		}
		else if (campo == 'Nome da Mãe') {
			$ ('#search_matriculas_container').find ('label').text ('Localizar Mãe');
			$ ('#phanterpwa-widget-input-input-search_matriculas').attr ('placeholder', 'Nome ou parte do nome da mãe');
		}
		else if (campo == 'ID') {
			$ ('#search_matriculas_container').find ('label').text ('Localizar pelo ID');
			$ ('#phanterpwa-widget-input-input-search_matriculas').attr ('placeholder', 'Digite o id do(a) aluno(a)');
		}
		else if (campo == 'Data de Nascimento') {
			$ ('#search_matriculas_container').find ('label').text ('Filtrar pela Data de Nascimento');
			$ ('#phanterpwa-widget-input-input-search_matriculas').attr ('placeholder', 'Digite a data de nascimento');
		}
	});},
	get _onkeydown () {return __get__ (this, function (self, event) {
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
		var element = $ ('#phanterpwa-widget-input-input-search_matriculas');
		self.valor_atual = '';
		var valores = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
		if (__in__ (str (event.key), valores)) {
			var value = element.val ();
			var nvalue = fmasks.stringFilter (value);
		}
	});},
	get _onkeypress () {return __get__ (this, function (self, event) {
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
		var element = $ ('#phanterpwa-widget-input-input-search_matriculas');
		var label = element.parent ().find ('label').text ();
		self.valor_atual = '';
		var valores = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
		if (label == 'Filtrar pela Data de Nascimento') {
			event.preventDefault ();
			if (__in__ (str (event.key), valores)) {
				var value = str (element.val ());
				value += event.key;
				var nvalue = fmasks.stringFilter (value);
				var __left0__ = fmasks.maskDate (nvalue);
				var nvalue = __left0__ [0];
				var pos = __left0__ [1];
				var con = 0;
				element.val (nvalue);
				for (var x of str (nvalue)) {
					con++;
					if (str (x).isdigit ()) {
						var pos = con;
					}
				}
				element [0].selectionStart = pos;
				element [0].selectionEnd = pos;
			}
		}
		else if (label == 'Localizar pelo ID') {
			event.preventDefault ();
			if (__in__ (str (event.key), valores)) {
				var value = element.val ();
				value += event.key;
				var nvalue = fmasks.stringFilter (value);
				element.val (nvalue);
			}
		}
	});},
	get _onkeyup () {return __get__ (this, function (self, event) {
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
		var key = event.which || event.keyCode;
		var element = $ ('#phanterpwa-widget-input-input-search_matriculas');
		var label = element.parent ().find ('label').text ();
		if (key == 13) {
			var value = element.val ();
			if (value !== '') {
				self.search ();
			}
		}
		else if (label == 'Filtrar pela Data de Nascimento') {
			var value = element.val ();
			var nvalue = fmasks.stringFilter (value);
			var __left0__ = fmasks.maskDate (nvalue);
			var nvalue = __left0__ [0];
			var pos = __left0__ [1];
			var con = 0;
			element.val (nvalue);
			for (var x of str (nvalue)) {
				con++;
				if (str (x).isdigit ()) {
					var pos = con;
				}
			}
			element [0].selectionStart = pos;
			element [0].selectionEnd = pos;
		}
		else if (label == 'Localizar pelo ID') {
			var value = element.val ();
			var nvalue = fmasks.stringFilter (value);
			element.val (nvalue);
		}
	});},
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
			if (json.matriculas === null) {
				window.PhanterPWA.open_way ('matricula/novo');
			}
			else {
				self.process_data (json);
			}
		}
	});},
	get _on_sort () {return __get__ (this, function (self, table_head_instance) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'table_head_instance': var table_head_instance = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var widgets = window.PhanterPWA.Request.widgets;
		var page = widgets ['matriculas-table-footer'].page ();
		var search = widgets ['search_matriculas'].value ();
		var field = widgets ['campos_matriculas'].value ();
		var sorted_field = widgets ['matriculas-table-head'].sorted_field ();
		self._get_data_search (__kwargtrans__ ({search: search, field: field, orderby: sorted_field [0], py_sort: sorted_field [1], page: page}));
	});},
	get _on_page () {return __get__ (this, function (self, table_pagination_instance) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'table_pagination_instance': var table_pagination_instance = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var widgets = window.PhanterPWA.Request.widgets;
		var page = widgets ['matriculas-table-footer'].page ();
		var search = widgets ['search_matriculas'].value ();
		var field = widgets ['campos_matriculas'].value ();
		var sorted_field = widgets ['matriculas-table-head'].sorted_field ();
		self._get_data_search (__kwargtrans__ ({search: search, field: field, orderby: sorted_field [0], py_sort: sorted_field [1], page: page}));
	});},
	get _class_resultados () {return __get__ (this, function (self, resultados) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'resultados': var resultados = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var _class = '';
		var resultados_permitidos = ['Início do Ano'];
		var corres_romanos = ['I', 'II', 'III', 'IV', 'V', 'VI'];
		for (var x = 0; x < self.quant_unidades; x++) {
			resultados_permitidos.append ('Unidade {0} Completada'.format (corres_romanos [x]));
		}
		if (resultados !== null && resultados !== undefined) {
			if (resultados.desistente === true) {
				var _class = ' eh_desistente';
			}
			else if (resultados.transferido === true && __in__ (resultados.unidade_trans, resultados_permitidos)) {
				var _class = ' eh_transferido';
			}
		}
		return 'linha_matriculado{0}'.format (_class);
	});},
	get process_data () {return __get__ (this, function (self, json) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'json': var json = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.matriculas = dict ({});
		if (self.current_hash !== json.hash) {
			self.current_hash = json.hash;
			self.quant_unidades = json.quant_unidades;
			var matriculas = json.dados_matriculas;
			var matriculas_sem_turma = json.dados_matriculas_sem_turma;
			$ ('#lista-matriculas-subtitle').text (json.message);
			var html_tabelas = CONCATENATE ();
			var nao_eh_pesquisa = true;
			var tem_aluno_sem_turma = false;
			if (matriculas_sem_turma !== undefined) {
				var cont_sem_turma = 0;
				for (var x of matriculas_sem_turma) {
					cont_sem_turma++;
					var tem_aluno_sem_turma = true;
					var lista_de_serie = [];
					var ordem = 0;
					if (cont_sem_turma == 1) {
						var table = XTABLE ('matriculas-table-sem_turma', THEAD (TR (TH (XML ('&#160;'), __kwargtrans__ ({_colspan: 8, _style: 'border-top: hidden; border-left: hidden; border-right: hidden;'})))), TFOOT (TR (TH (XML ('&#160;'), __kwargtrans__ ({_colspan: 8, _style: 'border-bottom: hidden; border-left: hidden; border-right: hidden;'})))), TR (TH ('ALUNOS MATRICULADOS SEM TURMA', __kwargtrans__ ({_colspan: 8, _style: 'text-align: center; color: white; background-color: red;'}))), XTRH ('matriculas-table-head-sem_turma', 'Aluno(a)', 'Data Nascimento', 'Nome do Pai', 'Nome da Mãe', 'Série da Matrícula', TH (DIV (I (__kwargtrans__ ({_class: 'fas fa-plus'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'matricular/{0}/{1}'.format (self.id_escola, self.ano_letivo), '_class': 'icon_button wave_on_click'}))), __kwargtrans__ ({_class: 'nao_imprimir'}))));
						html_tabelas.append (table);
					}
					var data_de_nascimento_formated = '';
					if (x.data_nasc !== null && x.data_nasc !== undefined) {
						var data_de_nascimento_formated = validations.format_iso_date_datetime (x.data_nasc, 'dd/MM/yyyy', 'date');
					}
					var vars_aluno = dict ({'aluno': x.aluno, 'data_de_nascimento': data_de_nascimento_formated, 'nome_do_pai': x.nome_do_pai, 'nome_da_mae': x.nome_da_mae});
					self.matriculas [x.id] = x;
					var vars_serialized = $.param (vars_aluno);
					var ano_letivo = '';
					var id_escola = '';
					if (self.ano_letivo !== null && self.ano_letivo !== undefined) {
						var ano_letivo = '/{0}'.format (self.ano_letivo);
					}
					if (self.escola !== null && self.escola !== undefined) {
						var id_escola = '/{0}'.format (self.escola ['id']);
					}
					ordem++;
					x ['numero_aluno'] = ordem;
					var resultado = 'Em aberto';
					if (x.resultados !== null) {
						if (x.resultados.resultado_final !== null) {
							var resultado = x.resultados.resultado_final;
						}
					}
					table.append (XTRD ('matriculas-table-data-{0}'.format (x.id), x.aluno, data_de_nascimento_formated, x.nome_do_pai, x.nome_da_mae, x.serie, TD (widgets.MenuBox ('drop_{0}'.format (x.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Dados do Aluno', __kwargtrans__ (dict ({'_class': 'botao_visualizar_aluno wave_on_click', '_data-id_aluno': x.id_aluno}))), widgets.MenuOption ('Documentos', __kwargtrans__ (dict ({'_class': 'botao_documentos wave_on_click', '_data-id_matricula': x.id, '_data-id_aluno': x.id_aluno, '_data-nome_aluno': x.aluno}))), widgets.MenuOption ('Editar Matrícula', __kwargtrans__ (dict ({'_class': 'botao_editar_aluno wave_on_click', '_href': window.PhanterPWA.XWAY ('matricula', x.id_aluno, 'aluno-conferido', self.id_escola, self.ano_letivo, __kwargtrans__ (dict ({'_retornar': window.PhanterPWA.get_current_way ()})))}))), widgets.MenuOption ('Cancelar Matrícula', __kwargtrans__ (dict ({'_class': 'botao_deletar_matricula wave_on_click', '_data-id_matricula': x.id}))), widgets.MenuOption ('Adicionar na Turma', __kwargtrans__ (dict ({'_class': 'botao_aluno_enturmar wave_on_click', '_data-id_matricula': x.id}))), __kwargtrans__ ({onOpen: (function __lambda__ () {
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
						return self.binds_menu_aluno_sem_turma ();
					})})), __kwargtrans__ ({_class: 'nao_imprimir'})), __kwargtrans__ (dict ({'drag_and_drop': false, '_data-id_matricula': x.id}))));
				}
			}
			if (tem_aluno_sem_turma && nao_eh_pesquisa) {
				html_tabelas.append (HR ());
				html_tabelas.append (H3 ('Lista de Alunos por Turma'));
			}
			if (matriculas !== undefined) {
				var lista_de_turma = [];
				var lista_de_serie = [];
				var ordem = 0;
				for (var x of matriculas) {
					if (!__in__ (x.turma, lista_de_turma)) {
						lista_de_turma.append (x.turma);
						var lista_de_serie = [];
						var ordem = 0;
						var table = XTABLE ('matriculas-table-{0}'.format (x.id_turma), THEAD (TR (TH (XML ('&#160;'), __kwargtrans__ ({_colspan: 8, _style: 'border-top: hidden; border-left: hidden; border-right: hidden;'})))), TFOOT (TR (TH (XML ('&#160;'), __kwargtrans__ ({_colspan: 8, _style: 'border-bottom: hidden; border-left: hidden; border-right: hidden;'})))), TR (TH (x.turma, __kwargtrans__ ({_colspan: 8, _style: 'text-align: center; color: white; background-color: grey;'}))), XTRH ('matriculas-table-head-{0}'.format (x.id_turma), 'Nº', 'Aluno(a)', 'Data Nascimento', 'Nome do Pai', 'Nome da Mãe', 'Endereço', 'Resultado', TH (DIV (I (__kwargtrans__ ({_class: 'fas fa-plus'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'matricula/novo', '_class': 'icon_button wave_on_click'}))), __kwargtrans__ ({_class: 'nao_imprimir'}))));
						html_tabelas.append (table);
					}
					if (x.eh_multisseriado) {
						if (!__in__ (x.serie, lista_de_serie)) {
							lista_de_serie.append (x.serie);
							table.append (TR (TH (x.serie, __kwargtrans__ ({_colspan: 8, _style: 'text-align: center; color: orange;'})), __kwargtrans__ ({_style: 'background-color: #f7f7f7;border-top: solid 1px rgba(51, 51, 51, 0.12);'})));
						}
					}
					var data_de_nascimento_formated = '';
					if (x.data_nasc !== null && x.data_nasc !== undefined) {
						var data_de_nascimento_formated = validations.format_iso_date_datetime (x.data_nasc, 'dd/MM/yyyy', 'date');
					}
					var vars_aluno = dict ({'aluno': x.aluno, 'data_de_nascimento': data_de_nascimento_formated, 'nome_do_pai': x.nome_do_pai, 'nome_da_mae': x.nome_da_mae});
					self.matriculas [x.id] = x;
					var vars_serialized = $.param (vars_aluno);
					var ano_letivo = '';
					var id_escola = '';
					if (self.ano_letivo !== null && self.ano_letivo !== undefined) {
						var ano_letivo = '/{0}'.format (self.ano_letivo);
					}
					if (self.escola !== null && self.escola !== undefined) {
						var id_escola = '/{0}'.format (self.escola ['id']);
					}
					ordem++;
					x ['numero_aluno'] = ordem;
					var resultado = 'Em aberto';
					if (x.resultados !== null) {
						if (x.resultados.resultado_final !== null) {
							var resultado = x.resultados.resultado_final;
						}
					}
					table.append (XTRD ('matriculas-table-data-{0}'.format (x.id), ordem, x.aluno, data_de_nascimento_formated, x.nome_do_pai, x.nome_da_mae, x.endereco, resultado, TD (widgets.MenuBox ('drop_{0}'.format (x.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Dados do Aluno', __kwargtrans__ (dict ({'_class': 'botao_visualizar_aluno wave_on_click', '_data-id_aluno': x.id_aluno}))), widgets.MenuOption ('Documentos', __kwargtrans__ (dict ({'_class': 'botao_documentos wave_on_click', '_data-id_matricula': x.id, '_data-id_aluno': x.id_aluno, '_data-nome_aluno': x.aluno, '_data-resultado': resultado}))), widgets.MenuOption ('Visualizar Matrícula', __kwargtrans__ (dict ({'_class': 'botao_visualizar_matricula wave_on_click', '_data-id_matricula': x.id}))), widgets.MenuOption ('Desistência', __kwargtrans__ (dict ({'_class': 'botao_aluno_desistente wave_on_click', '_data-id_matricula': x.id}))), widgets.MenuOption ('Transferência', __kwargtrans__ (dict ({'_class': 'botao_transferir_aluno wave_on_click', '_data-id_matricula': x.id}))), __kwargtrans__ ({onOpen: (function __lambda__ () {
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
						return self.binds_menu_aluno ();
					})})), __kwargtrans__ ({_class: 'nao_imprimir'})), __kwargtrans__ (dict ({'drag_and_drop': false, '_class': self._class_resultados (x.resultados), '_data-id_matricula': x.id}))));
				}
			}
			var html_turmas = DIV (DIV (html_tabelas, __kwargtrans__ ({_class: 'p-row card e-padding_auto continuos'})), __kwargtrans__ ({_class: 'phanterpwa-media-print-container'}));
			html_turmas.html_to ('#lista-matriculas-container');
			self.binds ();
			var change_attr_drop = function (el) {
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
				var targ = $ (el).attr ('phanterpwa_dowpdown_target');
				$ (el).attr ('data-target', targ);
			};
			$ ('[phanterpwa_dowpdown_target]').each ((function __lambda__ () {
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
				return change_attr_drop (this);
			}));
		}
	});},
	get binds_menu_aluno_sem_turma () {return __get__ (this, function (self) {
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
		$ ('.botao_deletar_matricula').off ('click.botao_revogar_matricula').on ('click.botao_revogar_matricula', (function __lambda__ () {
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
			return self.modal_confirmar_deletar_matricula (this);
		}));
		$ ('.botao_visualizar_aluno').off ('click.botao_visualizar_aluno').on ('click.botao_visualizar_aluno', (function __lambda__ () {
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
			return self.get_visualizar_aluno (this);
		}));
		$ ('.botao_documentos').off ('click.botao_documentos').on ('click.botao_documentos', (function __lambda__ () {
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
			return self.abrir_modal_documentos (this);
		}));
	});},
	get binds_menu_aluno () {return __get__ (this, function (self) {
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
		$ ('.botao_visualizar_aluno').off ('click.botao_visualizar_aluno').on ('click.botao_visualizar_aluno', (function __lambda__ () {
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
			return self.get_visualizar_aluno (this);
		}));
		$ ('.botao_aluno_desistente').off ('click.botao_aluno_desistente').on ('click.botao_aluno_desistente', (function __lambda__ () {
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
			return self.abrir_modal_desistencia (this);
		}));
		$ ('.botao_transferir_aluno').off ('click.botao_transferir_aluno').on ('click.botao_transferir_aluno', (function __lambda__ () {
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
			return self.abrir_modal_transferencia (this);
		}));
		$ ('.botao_documentos').off ('click.botao_documentos').on ('click.botao_documentos', (function __lambda__ () {
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
			return self.abrir_modal_documentos (this);
		}));
	});},
	get _get_data_search () {return __get__ (this, function (self, search, field, orderby, py_sort, page) {
		if (typeof search == 'undefined' || (search != null && search.hasOwnProperty ("__kwargtrans__"))) {;
			var search = '';
		};
		if (typeof field == 'undefined' || (field != null && field.hasOwnProperty ("__kwargtrans__"))) {;
			var field = 'aluno';
		};
		if (typeof orderby == 'undefined' || (orderby != null && orderby.hasOwnProperty ("__kwargtrans__"))) {;
			var orderby = 'turma';
		};
		if (typeof py_sort == 'undefined' || (py_sort != null && py_sort.hasOwnProperty ("__kwargtrans__"))) {;
			var py_sort = 'asc';
		};
		if (typeof page == 'undefined' || (page != null && page.hasOwnProperty ("__kwargtrans__"))) {;
			var page = 1;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'search': var search = __allkwargs0__ [__attrib0__]; break;
						case 'field': var field = __allkwargs0__ [__attrib0__]; break;
						case 'orderby': var orderby = __allkwargs0__ [__attrib0__]; break;
						case 'py_sort': var py_sort = __allkwargs0__ [__attrib0__]; break;
						case 'page': var page = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._search = search;
		self._field = field;
		self._orderby = orderby;
		self._sort = py_sort;
		self._page = page;
		window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'matriculas', 'lista', self.id_escola, self.ano_letivo], 'url_vars': dict ({'search': search, 'field': field, 'orderby': orderby, 'sort': py_sort, 'page': page}), 'onComplete': self.after_get, 'get_cache': self.process_data})));
	});},
	get search () {return __get__ (this, function (self) {
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
		var widgets = window.PhanterPWA.Request.widgets;
		var search = widgets ['search_matriculas'].value ();
		var field = widgets ['campos_matriculas'].value ();
		self._get_data_search (__kwargtrans__ ({search: search, field: field, orderby: field, py_sort: 'asc', page: 1}));
	});},
	get get_visualizar_aluno () {return __get__ (this, function (self, widget_instance) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'widget_instance': var widget_instance = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var id_aluno = $ (widget_instance).data ('id_aluno');
		window.PhanterPWA.GET ('api', 'aluno', id_aluno, 'visualizar', __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.modal_add_matriculas_visualizar (data, ajax_status);
		})}));
	});},
	get modal_add_matriculas_visualizar () {return __get__ (this, function (self, data, ajax_status) {
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
		var json = data.responseJSON;
		if (ajax_status == 'success') {
			var html_historico = DIV (DIV ('HISTÓRICO ESCOLAR', __kwargtrans__ ({_class: 'p-col w1p100 phanterpwa-widget-form-separator'})), __kwargtrans__ ({_class: 'historicos-conteudo'}));
			if (json.data.historico !== null && json.data.historico !== undefined) {
				for (var x of json.data.historico) {
					var html_ficha = P ('Não há ficha individual no ano de ', STRONG (x.ano_letivo), ' da serie ', STRONG (x.serie), ' na escola ', STRONG (x.escola), '.');
					if (x.ficha_individual !== null && x.ficha_individual !== undefined) {
						var tabela = TABLE (__kwargtrans__ ({_class: 'tabela_ficha_individual'}));
						for (var y of x.ficha_individual) {
							var linha = TR ();
							for (var c of y) {
								if (c [1] ['tipo'] == 'cabecalho') {
									linha.append (TH (c [0], __kwargtrans__ (dict (c [1]))));
								}
								else if (c [1] ['tipo'] == 'cabecalho_rotate') {
									linha.append (TH (DIV (c [0], __kwargtrans__ ({_class: 'rotate'})), __kwargtrans__ (dict (c [1]))));
								}
								else {
									linha.append (TD (c [0], __kwargtrans__ (dict (c [1]))));
								}
							}
							tabela.append (linha);
						}
						var html_ficha = DIV (LABEL (x.ano_letivo, ' - ', x.serie, ' - ', x.escola), DIV (DIV (DIV (DIV (tabela, __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control p-col w1p100'}));
					}
					html_historico.append (html_ficha);
				}
			}
			var content = CONCATENATE (forms.Form (json.data.aluno), DIV (html_historico, __kwargtrans__ ({_class: 'p-row'})));
			self.modal_visualizar = modal.Modal ('#modal_visualizar_aluno', __kwargtrans__ (dict ({'title': CONCATENATE (DIV ('Visualizar dados do aluno'), DIV (STRONG (json.data.nome))), 'content': content})));
			self.modal_visualizar.open ();
		}
		else {
			window.PhanterPWA.flash ('Não há matriculas_visualizar matriculados para a série da turma');
		}
	});},
	get abrir_modal_desistencia () {return __get__ (this, function (self, el) {
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
		var id_matricula = $ (el).data ('id_matricula');
		var nome_aluno = self.matriculas [int (id_matricula)].aluno;
		var des_data = self.matriculas [int (id_matricula)].resultados.unidade_des || '';
		var sexo = self.matriculas [int (id_matricula)].sexo;
		var texto1 = P ('Informa abaixo quando o(a) aluno(a) ', STRONG (nome_aluno), ' desistiu, ', 'com esta informação poderemos fazer o levantamento do indicador de desempenho.');
		var texto2 = P ('Se o(a) aluno(a) não desistiu, ', 'escolha a opção vazia.', __kwargtrans__ ({_style: 'color: red;'}));
		if (sexo == 1) {
			var texto1 = P ('Informa abaixo quando o aluno ', STRONG (nome_aluno), ' desistiu, ', 'com esta informação poderemos fazer o levantamento do indicador de desempenho.');
			var texto2 = P ('Se o aluno não desistiu, ', 'escolha a opção vazia.', __kwargtrans__ ({_style: 'color: red;'}));
		}
		else if (sexo == 2) {
			var texto1 = P ('Informa abaixo quando a aluna ', STRONG (nome_aluno), ' desistiu, ', 'com esta informação poderemos fazer o levantamento do indicador de desempenho.');
			var texto2 = P ('Se a aluna não desistiu, ', 'escolha a opção vazia.', __kwargtrans__ ({_style: 'color: red;'}));
		}
		var data_set = ['Início do Ano'];
		var corres_romanos = ['I', 'II', 'III', 'IV', 'V', 'VI'];
		for (var x = 0; x < self.quant_unidades; x++) {
			data_set.append ('Unidade {0} Completada'.format (corres_romanos [x]));
		}
		data_set.append ('Fim de Curso');
		var content = CONCATENATE (texto1, texto2, DIV (widgets.Select ('unidade_des', __kwargtrans__ ({label: 'Quando desistiu?', value: des_data, can_empty: true, data_set: data_set})), __kwargtrans__ ({_id: 'phanterpwa-input-search_field-matriculas', _class: 'p-col w1p100'})));
		var footer = DIV (forms.FormButton ('confirmar_desistencia', 'Confirmar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_desistencia = modal.Modal ('#modal_desistencia_aluno', __kwargtrans__ (dict ({'title': 'Desistência de {0}'.format (nome_aluno), 'content': content, 'footer': footer})));
		self.modal_desistencia.open ();
		$ ('#phanterpwa-widget-form-form_button-confirmar_desistencia').off ('click.confirmar_desistencia').on ('click.confirmar_desistencia', (function __lambda__ () {
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
			return self._on_click_confirmar_desistencia (id_matricula);
		}));
	});},
	get _on_click_confirmar_desistencia () {return __get__ (this, function (self, id_matricula) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var formdata = new FormData ();
		formdata.append ('quando_desistiu', $ ('#phanterpwa-widget-select-input-unidade_des').val ());
		window.PhanterPWA.PUT ('api', 'matricula', 'desistencia', self.id_escola, self.ano_letivo, id_matricula, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.depois_de_confirmar_desistencia (data, ajax_status);
		})}));
	});},
	get depois_de_confirmar_desistencia () {return __get__ (this, function (self, data, ajax_status) {
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
			self.modal_desistencia.close ();
			var json = data.responseJSON;
			var data_de_nascimento_formated = '';
			var numero_aluno = self.matriculas [json.data_matricula.id] ['numero_aluno'];
			self.matriculas [json.data_matricula.id] = json.data_matricula;
			if (json.data_matricula.data_nasc !== null && json.data_matricula.data_nasc !== undefined) {
				var data_de_nascimento_formated = validations.format_iso_date_datetime (json.data_matricula.data_nasc, 'dd/MM/yyyy', 'date');
			}
			var resultado = 'Em aberto';
			if (json.data_matricula.resultados !== null) {
				if (json.data_matricula.resultados.resultado_final !== null) {
					var resultado = json.data_matricula.resultados.resultado_final;
				}
			}
			var html_xd = XTRD ('matriculas-table-data-{0}'.format (json.data_matricula.id), numero_aluno, json.data_matricula.aluno, data_de_nascimento_formated, json.data_matricula.nome_do_pai, json.data_matricula.nome_da_mae, json.data_matricula.endereco, resultado, TD (widgets.MenuBox ('drop_{0}'.format (json.data_matricula.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Dados do Aluno', __kwargtrans__ (dict ({'_class': 'botao_visualizar_aluno wave_on_click', '_data-id_aluno': json.data_matricula.id_aluno}))), widgets.MenuOption ('Visualizar Matrícula', __kwargtrans__ (dict ({'_class': 'botao_visualizar_matricula wave_on_click', '_data-id_matricula': json.data_matricula.id}))), widgets.MenuOption ('Desistência', __kwargtrans__ (dict ({'_class': 'botao_aluno_desistente wave_on_click', '_data-id_matricula': json.data_matricula.id}))), widgets.MenuOption ('Transferência', __kwargtrans__ (dict ({'_class': 'botao_transferir_aluno wave_on_click', '_data-id_matricula': json.data_matricula.id}))), __kwargtrans__ ({onOpen: (function __lambda__ () {
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
				return self.binds_menu_aluno ();
			})})), __kwargtrans__ ({_class: 'nao_imprimir'})), __kwargtrans__ (dict ({'drag_and_drop': false, '_class': self._class_resultados (json.data_matricula.resultados), '_data-id_matricula': json.data_matricula.id})));
			$ ('#phanterpwa-widget-matriculas-table-data-{0}'.format (json.data_matricula.id)).replaceWith (html_xd.jquery ());
			self.binds ();
		}
	});},
	get abrir_modal_transferencia () {return __get__ (this, function (self, el) {
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
		var id_matricula = $ (el).data ('id_matricula');
		var trans_data = self.matriculas [int (id_matricula)].resultados.unidade_trans || '';
		var nome_aluno = self.matriculas [int (id_matricula)].aluno;
		var sexo = self.matriculas [int (id_matricula)].sexo;
		var texto1 = P ('Informa abaixo quando o(a) aluno(a) ', STRONG (nome_aluno), ' foi transferido(a), ', 'com esta informação poderemos fazer o levantamento do indicador de desempenho.', ' Caso a transferencia seja no final do curso não haverá indicativo visual de que ', ' foi transferido(a).');
		var texto2 = P ('Se o(a) aluno(a) não foi transferido(a), ', 'escolha a opção vazia.', __kwargtrans__ ({_style: 'color: red;'}));
		if (sexo == 1) {
			var texto1 = P ('Informa abaixo quando o aluno ', STRONG (nome_aluno), ' foi transferido, ', 'com esta informação poderemos fazer o levantamento do indicador de desempenho.', ' Caso a transferencia seja no final do curso não haverá indicativo visual de que ', ' foi transferido.');
			var texto2 = P ('Se o aluno não foi transferido, ', 'escolha a opção vazia.', __kwargtrans__ ({_style: 'color: red;'}));
		}
		else if (sexo == 2) {
			var texto1 = P ('Informa abaixo quando a aluna ', STRONG (nome_aluno), ' foi transferida, ', 'com esta informação poderemos fazer o levantamento do indicador de desempenho.', ' Caso a transferencia seja no final do curso não haverá indicativo visual de que ', ' foi transferida.');
			var texto2 = P ('Se a aluna não foi transferida, ', 'escolha a opção vazia.', __kwargtrans__ ({_style: 'color: red;'}));
		}
		var data_set = ['Início do Ano'];
		var corres_romanos = ['I', 'II', 'III', 'IV', 'V', 'VI'];
		for (var x = 0; x < self.quant_unidades; x++) {
			data_set.append ('Unidade {0} Completada'.format (corres_romanos [x]));
		}
		data_set.append ('Fim de Curso');
		var content = CONCATENATE (texto1, texto2, DIV (widgets.Select ('unidade_trams', __kwargtrans__ ({label: 'Quando foi a Transferência?', value: trans_data, can_empty: true, data_set: data_set})), __kwargtrans__ ({_id: 'phanterpwa-input-search_field-matriculas', _class: 'p-col w1p100'})));
		var footer = DIV (forms.FormButton ('confirmar_transferencia', 'Confirmar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_transferencia = modal.Modal ('#modal_transferencia_aluno', __kwargtrans__ (dict ({'title': 'Transferência de {0}'.format (nome_aluno), 'content': content, 'footer': footer})));
		self.modal_transferencia.open ();
		$ ('#phanterpwa-widget-form-form_button-confirmar_transferencia').off ('click.confirmar_transferencia').on ('click.confirmar_transferencia', (function __lambda__ () {
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
			return self._on_click_confirmar_transferencia (id_matricula);
		}));
	});},
	get _on_click_confirmar_transferencia () {return __get__ (this, function (self, id_matricula) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var formdata = new FormData ();
		formdata.append ('quando_transferiu', $ ('#phanterpwa-widget-select-input-unidade_trams').val ());
		window.PhanterPWA.PUT ('api', 'matricula', 'transferencia', self.id_escola, self.ano_letivo, id_matricula, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.depois_de_confirmar_transferencia (data, ajax_status);
		})}));
	});},
	get depois_de_confirmar_transferencia () {return __get__ (this, function (self, data, ajax_status) {
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
			self.modal_transferencia.close ();
			var json = data.responseJSON;
			var data_de_nascimento_formated = '';
			var numero_aluno = self.matriculas [json.data_matricula.id] ['numero_aluno'];
			self.matriculas [json.data_matricula.id] = json.data_matricula;
			if (json.data_matricula.data_nasc !== null && json.data_matricula.data_nasc !== undefined) {
				var data_de_nascimento_formated = validations.format_iso_date_datetime (json.data_matricula.data_nasc, 'dd/MM/yyyy', 'date');
			}
			var resultado = 'Em aberto';
			if (json.data_matricula.resultados !== null) {
				if (json.data_matricula.resultados.resultado_final !== null) {
					var resultado = json.data_matricula.resultados.resultado_final;
				}
			}
			var html_xd = XTRD ('matriculas-table-data-{0}'.format (json.data_matricula.id), numero_aluno, json.data_matricula.aluno, data_de_nascimento_formated, json.data_matricula.nome_do_pai, json.data_matricula.nome_da_mae, json.data_matricula.endereco, resultado, TD (widgets.MenuBox ('drop_{0}'.format (json.data_matricula.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Dados do Aluno', __kwargtrans__ (dict ({'_class': 'botao_visualizar_aluno wave_on_click', '_data-id_aluno': json.data_matricula.id_aluno}))), widgets.MenuOption ('Visualizar Matrícula', __kwargtrans__ (dict ({'_class': 'botao_visualizar_matricula wave_on_click', '_data-id_matricula': json.data_matricula.id}))), widgets.MenuOption ('Desistência', __kwargtrans__ (dict ({'_class': 'botao_aluno_desistente wave_on_click', '_data-id_matricula': json.data_matricula.id}))), widgets.MenuOption ('Transferência', __kwargtrans__ (dict ({'_class': 'botao_transferir_aluno wave_on_click', '_data-id_matricula': json.data_matricula.id}))), __kwargtrans__ ({onOpen: (function __lambda__ () {
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
				return self.binds_menu_aluno ();
			})})), __kwargtrans__ ({_class: 'nao_imprimir'})), __kwargtrans__ (dict ({'drag_and_drop': false, '_class': self._class_resultados (json.data_matricula.resultados), '_data-id_matricula': json.data_matricula.id})));
			$ ('#phanterpwa-widget-matriculas-table-data-{0}'.format (json.data_matricula.id)).replaceWith (html_xd.jquery ());
			self.binds ();
		}
	});},
	get modal_confirmar_deletar_matricula () {return __get__ (this, function (self, el) {
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
		var id_matricula = $ (el).data ('id_matricula');
		var content = DIV (P ('Atenção, a matrícula do  aluno será deletada permanentemente, se ', 'o mesmo possuir notas, faltas, ficha individual, boletim, etc. Tudo isto será perdido, inclusive o mesmo sairá da turma permanentemente.'), P ('Tem certeza que deseja deletar esta matrícula?'), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.FormButton ('deletar_matricula_sim', 'Sim', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), forms.FormButton ('deletar_matricula_nao', 'Não', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_deletar_matricula = modal.Modal ('#modal_deletar_matricula_container', __kwargtrans__ (dict ({'title': 'Deletar Matrícula do(a) aluno(a)', 'content': content, 'footer': footer, 'form': 'deletar_matricula'})));
		self.modal_deletar_matricula.open ();
		$ ('#phanterpwa-widget-form-form_button-deletar_matricula_sim').off ('click.adicionar_deletar_matricula_sim').on ('click.adicionar_deletar_matricula_sim', (function __lambda__ () {
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
			return self._on_click_deletar_matricula (id_matricula);
		}));
		$ ('#phanterpwa-widget-form-form_button-deletar_matricula_nao').off ('click.adicionar_deletar_matricula_nao').on ('click.adicionar_deletar_matricula_nao', (function __lambda__ () {
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
			return self.modal_deletar_matricula.close ();
		}));
	});},
	get _on_click_deletar_matricula () {return __get__ (this, function (self, id_matricula) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.DELETE ('api', 'matricula', 'deletar', self.id_escola, self.ano_letivo, id_matricula, __kwargtrans__ ({onComplete: self.depois_de_deletar_ou_retirar}));
		self.modal_deletar_matricula.close ();
	});},
	get depois_de_deletar_ou_retirar () {return __get__ (this, function (self, data, ajax_status) {
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
			self.search ();
		}
	});},
	get abrir_modal_documentos () {return __get__ (this, function (self, el) {
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
		var id_matricula = $ (el).data ('id_matricula');
		var id_aluno = $ (el).data ('id_aluno');
		var nome_aluno = $ (el).data ('nome_aluno');
		var resultado = $ (el).data ('resultado');
		var lista_de_resultados_validos = ['Aprovado(a)', 'Reprovado(a)', 'Reprovado(a) - Falta a Recuperação', 'Aprovado(a) no Conselho', 'Reprovado(a) no Conselho', 'Desistente'];
		var html_botao_declaracao_de_transferencia = '';
		if (__in__ (resultado, lista_de_resultados_validos)) {
			var html_botao_declaracao_de_transferencia = DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-file-alt'})), __kwargtrans__ ({_class: 'icon_documentos_button'})), DIV ('Declaração de Transferência', __kwargtrans__ ({_class: 'descricao_documentos_button'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'p-col w4p33 w1p50 link'}, dict ({'_phanterpwa-way': 'imprimir/declaracao-de-transferencia/{0}?_retornar=matriculas/lista/{1}/{2}/'.format (id_matricula, self.id_escola, self.ano_letivo)}))));
		}
		var html_documentos = DIV (DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-file-alt'})), __kwargtrans__ ({_class: 'icon_documentos_button'})), DIV ('Matrícula', __kwargtrans__ ({_class: 'descricao_documentos_button'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'p-col w4p33 w1p50 link'}, dict ({'_phanterpwa-way': 'imprimir/matricula/{0}?_retornar=matriculas/lista/{1}/{2}/'.format (id_matricula, self.id_escola, self.ano_letivo)})))), DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-file-alt'})), __kwargtrans__ ({_class: 'icon_documentos_button'})), DIV ('Questionário Social', __kwargtrans__ ({_class: 'descricao_documentos_button'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'p-col w4p34 w1p50 link'}, dict ({'_phanterpwa-way': 'imprimir/questionario-social/{0}/{1}/{2}?_retornar=matriculas/lista/{0}/{1}/'.format (self.id_escola, self.ano_letivo, id_aluno)})))), DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-file-alt'})), __kwargtrans__ ({_class: 'icon_documentos_button'})), DIV ('Declaração de Matrícula', __kwargtrans__ ({_class: 'descricao_documentos_button'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'p-col w4p33 w1p50 link'}, dict ({'_phanterpwa-way': 'imprimir/declaracao-de-matricula/{0}?_retornar=matriculas/lista/{1}/{2}/'.format (id_matricula, self.id_escola, self.ano_letivo)})))), html_botao_declaracao_de_transferencia, __kwargtrans__ ({_class: 'p-row documentos_buttons_container'}));
		self.modal_documentos = modal.Modal ('#modal_documentos', __kwargtrans__ (dict ({'title': 'Documentos do(a) aluno(a) {0}'.format (nome_aluno), 'content': html_documentos})));
		self.modal_documentos.open ();
	});}
});

//# sourceMappingURL=handlers.matriculas.map