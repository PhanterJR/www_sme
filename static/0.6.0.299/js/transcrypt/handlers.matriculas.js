// Transcrypt'ed from Python, 2022-03-14 09:40:05
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as matriculas from './handlers.views.matriculas.js';
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
		return window.PhanterPWA.auth_user_has_role (['administrator', 'root', 'Administrador Master SME', 'Administrador Master Escola', 'Coordenação SME']);
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
export var Matriculas =  __class__ ('Matriculas', [helpers.XmlConstructor], {
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
		helpers.XmlConstructor.__init__ (self, 'div', false, self.initial_xml (), __kwargtrans__ ({_class: 'lista_de_alunos'}));
		self.html_to ('#content-painel-matriculas');
		var campos = ['id', 'aluno', 'data_nasc', 'nome_do_pai', 'nome_da_mae'];
		var parametro_valor = window.PhanterPWA.Request.get_param ('valor', '');
		var parametro_campo = window.PhanterPWA.Request.get_param ('campo', 'aluno');
		if (!__in__ (parametro_campo, campos)) {
			var parametro_campo = 'aluno';
		}
		var parametro_pagina = window.PhanterPWA.Request.get_param ('pagina', 1);
		if (!(str (parametro_pagina).isdigit ())) {
			var parametro_pagina = 1;
		}
		var parametro_ordernar = window.PhanterPWA.Request.get_param ('ordernar', 'turma');
		if (!__in__ (parametro_ordernar, campos)) {
			var parametro_ordernar = 'turma';
		}
		var parametro_sentido = window.PhanterPWA.Request.get_param ('sentido', 'asc');
		if (!__in__ (parametro_sentido, ['asc', 'desc'])) {
			var parametro_sentido = 'asc';
		}
		self._get_data_search (__kwargtrans__ ({search: str (parametro_valor), field: parametro_campo, orderby: parametro_ordernar, py_sort: parametro_sentido, page: parametro_pagina}));
	});},
	get initial_xml () {return __get__ (this, function (self) {
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
		var campos = ['id', 'aluno', 'data_nasc', 'nome_do_pai', 'nome_da_mae'];
		var parametro_valor = window.PhanterPWA.Request.get_param ('valor', '');
		var parametro_campo = window.PhanterPWA.Request.get_param ('campo', 'aluno');
		if (!__in__ (parametro_campo, campos)) {
			var parametro_campo = 'aluno';
		}
		if (parametro_campo == 'aluno') {
			var label = 'Localizar Aluno(a)';
			var placeholder = 'Nome ou parte do nome do aluno';
		}
		else if (parametro_campo == 'nome_do_pai') {
			var label = 'Localizar Pai';
			var placeholder = 'Nome ou parte do nome do pai';
		}
		else if (parametro_campo == 'nome_da_mae') {
			var label = 'Localizar Mãe';
			var placeholder = 'Nome ou parte do nome da mãe';
		}
		else if (parametro_campo == 'id') {
			var label = 'Localizar pelo ID';
			var placeholder = 'Digite o id do(a) aluno(a)';
		}
		else if (parametro_campo == 'data_nasc') {
			var label = 'Filtrar pela Data de Nascimento';
			var placeholder = 'Digite a data de nascimento';
		}
		var html = DIV (DIV (FORM (DIV (DIV (DIV (widgets.Input ('search_alunos', __kwargtrans__ ({label: label, value: str (parametro_valor), placeholder: placeholder, icon: I (__kwargtrans__ ({_class: 'fab fa-sistrix'})), icon_on_click: (function __lambda__ () {
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
		})})), __kwargtrans__ ({_id: 'search_alunos_container', _class: 'p-col w1p100 w3p50 w4p75'})), DIV (widgets.Select ('campos_alunos', __kwargtrans__ ({label: 'Campos à pesquisar', placeholder: 'Escolha o Campo', value: parametro_campo, data_set: [['id', 'ID'], ['aluno', 'Nome do(a) Aluno(a)'], ['data_nasc', 'Data de Nascimento'], ['nome_do_pai', 'Nome do Pai'], ['nome_da_mae', 'Nome da Mãe']]})), __kwargtrans__ ({_id: 'phanterpwa-input-search_field-alunos', _class: 'p-col w1p100 w3p50 w4p25'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ ({_action: '#', _id: 'search_alunos', _class: 'form-search_alunos', _enctype: 'multipart/form-data', _method: 'post', _autocomplete: 'off'})), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), DIV (__kwargtrans__ ({_id: 'lista-alunos-subtitle', _class: 'phanterpwa-subtitle'})), DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'lista-alunos-container', _class: 'phanterpwa_tables_container'})), DIV (__kwargtrans__ ({_id: 'modal_visualizar_aluno'})), DIV (__kwargtrans__ ({_id: 'modal_visualizar_matricula'})), DIV (__kwargtrans__ ({_id: 'modal_documentos'})), DIV (__kwargtrans__ ({_id: 'modal_adicionar_aluno_turma'})), DIV (__kwargtrans__ ({_id: 'modal_deletar_matricula_detalhe_container'})), __kwargtrans__ ({_class: 'alunos-container phanterpwa-card-container'}));
		return html;
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
		$ ('#phanterpwa-widget-input-input-search_alunos').off ('keydown.search_aluno_matricula').on ('keydown.search_aluno_matricula', self._onkeydown);
		$ ('#phanterpwa-widget-input-input-search_alunos').off ('keyup.search_aluno_matricula').on ('keyup.search_aluno_matricula', self._onkeyup);
		$ ('#phanterpwa-widget-input-input-search_alunos').off ('keypress.search_aluno_matricula').on ('keypress.search_aluno_matricula', self._onkeypress);
		$ ('#phanterpwa-widget-select-input-campos_alunos').off ('change.search_field-alunos').on ('change.search_field-alunos', (function __lambda__ () {
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
		$ ('#phanterpwa-widget-input-input-search_alunos').val ('');
		if (campo == 'Nome do(a) Aluno(a)') {
			$ ('#search_alunos_container').find ('label').text ('Localizar Aluno(a)');
			$ ('#phanterpwa-widget-input-input-search_alunos').attr ('placeholder', 'Nome ou parte do nome do aluno');
		}
		else if (campo == 'Nome do Pai') {
			$ ('#search_alunos_container').find ('label').text ('Localizar Pai');
			$ ('#phanterpwa-widget-input-input-search_alunos').attr ('placeholder', 'Nome ou parte do nome do pai');
		}
		else if (campo == 'Nome da Mãe') {
			$ ('#search_alunos_container').find ('label').text ('Localizar Mãe');
			$ ('#phanterpwa-widget-input-input-search_alunos').attr ('placeholder', 'Nome ou parte do nome da mãe');
		}
		else if (campo == 'ID') {
			$ ('#search_alunos_container').find ('label').text ('Localizar pelo ID');
			$ ('#phanterpwa-widget-input-input-search_alunos').attr ('placeholder', 'Digite o id do(a) aluno(a)');
		}
		else if (campo == 'Data de Nascimento') {
			$ ('#search_alunos_container').find ('label').text ('Filtrar pela Data de Nascimento');
			$ ('#phanterpwa-widget-input-input-search_alunos').attr ('placeholder', 'Digite a data de nascimento');
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
		var element = $ ('#phanterpwa-widget-input-input-search_alunos');
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
		var element = $ ('#phanterpwa-widget-input-input-search_alunos');
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
		var element = $ ('#phanterpwa-widget-input-input-search_alunos');
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
			if (json.alunos === null) {
				window.PhanterPWA.open_way ('alunos/novo');
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
		var page = widgets ['alunos-matricula-table-footer'].page ();
		var search = widgets ['search_alunos'].value ();
		var field = widgets ['campos_alunos'].value ();
		var sorted_field = widgets ['alunos-matricula-table-head'].sorted_field ();
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
		var page = widgets ['alunos-matricula-table-footer'].page ();
		var search = widgets ['search_alunos'].value ();
		var field = widgets ['campos_alunos'].value ();
		var sorted_field = widgets ['alunos-matricula-table-head'].sorted_field ();
		self._get_data_search (__kwargtrans__ ({search: search, field: field, orderby: sorted_field [0], py_sort: sorted_field [1], page: page}));
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
		if (self.current_hash !== json.hash) {
			self.current_hash = json.hash;
			var alunos = json.alunos;
			$ ('#lista-alunos-subtitle').text (json.message);
			var new_select_widget = widgets.Select ('campos_alunos', __kwargtrans__ ({label: alunos.search_fields.label, placeholder: 'Escolha o Campo', value: alunos.search_fields.value, data_set: alunos.search_fields.data_set}));
			new_select_widget.html_to ('#phanterpwa-input-search_field-alunos');
			new_select_widget.reload ();
			var table = XTABLE ('alunos-matricula-table', XTRH ('alunos-matricula-table-head', ...alunos.searcher.data_set, ['serie', 'Serie'], ['turma', 'Turma'], ' ', __kwargtrans__ ({sort_by: alunos.searcher.sort_by, sort_order: alunos.searcher.sort_order, sortable: alunos.searcher.sortable, on_click_sortable: self._on_sort})));
			if (alunos.data !== undefined) {
				for (var x of alunos.data) {
					var data_de_nascimento_formated = '';
					if (x.alunos.data_nasc !== null && x.alunos.data_nasc !== undefined) {
						var data_de_nascimento_formated = validations.format_iso_date_datetime (x.alunos.data_nasc, 'dd/MM/yyyy', 'date');
					}
					table.append (XTRD ('alunos-matricula-table-data-{0}'.format (x.matriculas.id), x.matriculas.id, x.matriculas.nome_do_aluno, data_de_nascimento_formated, x.matriculas.nome_do_pai, x.matriculas.nome_da_mae, x.series.serie, (x.turmas.turma !== null ? x.turmas.turma : TD ('Sem Turma', __kwargtrans__ ({_style: 'color: red;'}))), widgets.MenuBox ('drop_{0}'.format (x.matriculas.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Detalhes da Matrícula', __kwargtrans__ (dict ({'_class': 'botao_visualizar_matricula wave_on_click', '_title': 'Visualizar matrícula do aluno', '_data-id_matricula': x.matriculas.id}))), widgets.MenuOption ('Visualizar dados do aluno', __kwargtrans__ (dict ({'_class': 'botao_visualizar_aluno wave_on_click', '_data-id_aluno': x.alunos.id}))), __kwargtrans__ ({onOpen: (function __lambda__ () {
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
					})})), __kwargtrans__ (dict ({'drag_and_drop': false}))));
				}
				table.append (XFOOTER ('alunos-matricula-table-footer', __kwargtrans__ ({page: alunos.searcher.page, total_pages: alunos.searcher.total_pages, on_click_page: self._on_page})));
			}
			table.html_to ('#lista-alunos-container');
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
		$ ('.botao_visualizar_matricula').off ('click.botao_visualizar_matricula').on ('click.botao_visualizar_matricula', (function __lambda__ () {
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
			return self.get_visualizar_matricula (this);
		}));
	});},
	get binds_menu_matriculas () {return __get__ (this, function (self) {
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
		$ ('.botao_visualizar_matricula').off ('click.botao_visualizar_matricula').on ('click.botao_visualizar_matricula', (function __lambda__ () {
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
			return self.get_visualizar_matricula (this);
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
			var py_sort = 'desc';
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
		window.PhanterPWA.set_push_way (window.PhanterPWA._xway ('matriculas', 'lista', self.id_escola, self.ano_letivo, __kwargtrans__ ({_valor: search, _campo: field, _pagina: page, _ordernar: orderby, _sentido: py_sort})));
		self._search = search;
		self._field = field;
		self._orderby = orderby;
		self._sort = py_sort;
		self._page = page;
		window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'matriculas', 'pesquisar', self.id_escola, self.ano_letivo], 'url_vars': dict ({'search': search, 'field': field, 'orderby': orderby, 'sort': py_sort, 'page': page}), 'onComplete': self.after_get})));
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
		var search = widgets ['search_alunos'].value ();
		var field = widgets ['campos_alunos'].value ();
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
			return self.modal_add_alunos_visualizar (data, ajax_status);
		})}));
	});},
	get modal_add_alunos_visualizar () {return __get__ (this, function (self, data, ajax_status) {
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
			window.PhanterPWA.flash ('Não há alunos_visualizar matriculados para a série da turma');
		}
	});},
	get get_visualizar_matricula () {return __get__ (this, function (self, el) {
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
		window.PhanterPWA.GET ('api', 'matricula', 'visualizar', id_matricula, __kwargtrans__ ({onComplete: self.abrir_modal_visualizar}));
	});},
	get abrir_modal_visualizar () {return __get__ (this, function (self, data, ajax_status) {
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
			var id_matricula = json.data.id;
			var id_escola = json.data.id_escola;
			var ano_letivo = json.data.ano_letivo;
			var prof_pai = json.data.prof_pai;
			var prof_mae = json.data.prof_mae;
			var id_aluno = json.data.id_aluno;
			var sexo = json.data.sexo;
			var nome_do_aluno = json.data.nome_do_aluno;
			var data_de_nascimento = json.data.data_de_nascimento;
			var nome_do_pai = json.data.nome_do_pai;
			var nome_da_mae = json.data.nome_da_mae;
			var naturalidade = json.data.naturalidade;
			var endereco = json.data.endereco;
			var serie = json.data.serie;
			var nome_do_responsavel = json.data.nome_do_responsavel;
			var data_mat = json.data.data_mat;
			var novato = json.data.novato;
			var admitido = json.data.admitido;
			var unidade_admitido = json.data.unidade_admitido;
			var ano_anterior = json.data.ano_anterior;
			var serie_ant = json.data.serie_ant;
			var resultado_final = json.data.resultado_final;
			var resultado_anterior = json.data.resultado_anterior;
			var numero_aluno = json.data.numero_aluno;
			var turma = json.data.turma;
			var id_turma = json.data.id_turma;
			var turmas_disponiveis = json.data.turmas_disponiveis;
			var now = new Date ().getTime ();
			var card = DIV (matriculas.Visualizar (id_matricula, id_escola, ano_letivo, prof_pai, prof_mae, id_aluno, nome_do_aluno, sexo, data_de_nascimento, nome_do_pai, nome_da_mae, naturalidade, endereco, serie, nome_do_responsavel, data_mat, novato, admitido, unidade_admitido, ano_anterior, serie_ant, resultado_final, resultado_anterior, numero_aluno, turma));
			var xml_btn_turma_aluno = '';
			if (str (id_turma).isdigit ()) {
				var xml_btn_turma_aluno = A (I (__kwargtrans__ ({_class: 'fas fa-chalkboard'})), __kwargtrans__ ({_class: 'icon_button botao_turma_matriculado', _title: 'Turma do aluno', _href: window.PhanterPWA.XWAY ('turmas', id_escola, ano_letivo, 'especifico', id_turma)}));
			}
			var xml_btn_turma_rema_aluno = '';
			if (turmas_disponiveis !== null) {
				var tl_btn = 'Alterar turma do aluno';
				if (id_turma === null) {
					var tl_btn = 'Adicionar o aluno numa turma';
				}
				var xml_btn_turma_rema_aluno = DIV (I (DIV (DIV (SPAN (I (__kwargtrans__ ({_class: 'fas fa-user-graduate'})), __kwargtrans__ ({_class: 'icombine-container-first'})), SPAN (I (__kwargtrans__ ({_class: 'fas fa-chalkboard'})), __kwargtrans__ ({_class: 'icombine-container-last'})), __kwargtrans__ ({_class: 'icombine-container'})), __kwargtrans__ ({_class: 'phanterpwa-snippet-icombine'}))), __kwargtrans__ ({_class: 'icon_button add_aluno_turma', _title: tl_btn}));
			}
			self.modal_visualizar_matricula = modal.Modal ('#modal_visualizar_matricula', __kwargtrans__ (dict ({'title': CONCATENATE (DIV ('Visualizar Matrícula ', STRONG (ano_letivo)), DIV (STRONG (json.data.nome_do_aluno))), 'content': card, 'buttons_panel': DIV (A (I (DIV (DIV (SPAN (I (__kwargtrans__ ({_class: 'fas fa-user-graduate'})), __kwargtrans__ ({_class: 'icombine-container-first'})), SPAN (I (__kwargtrans__ ({_class: 'fas fa-plus'})), __kwargtrans__ ({_class: 'icombine-container-last'})), __kwargtrans__ ({_class: 'icombine-container'})), __kwargtrans__ ({_class: 'phanterpwa-snippet-icombine'}))), __kwargtrans__ ({_class: 'icon_button botao_matricular', _title: 'Nova matrícula', _href: window.PhanterPWA.XWAY ('matricula', id_aluno)})), A (I (__kwargtrans__ ({_class: 'fas fa-edit'})), __kwargtrans__ ({_class: 'icon_button botao_editar_matricula', _title: 'Editar Matrícula', _href: window.PhanterPWA.XWAY ('matricula', id_aluno, id_escola, ano_letivo, 'editar', id_matricula)})), DIV (I (DIV (DIV (SPAN (I (__kwargtrans__ ({_class: 'fas fa-user-graduate'})), __kwargtrans__ ({_class: 'icombine-container-first'})), SPAN (I (__kwargtrans__ ({_class: 'fas fa-eraser'})), __kwargtrans__ ({_class: 'icombine-container-last'})), __kwargtrans__ ({_class: 'icombine-container'})), __kwargtrans__ ({_class: 'phanterpwa-snippet-icombine'}))), __kwargtrans__ ({_title: 'Cancelar matrícula', _class: 'icon_button botao_deletar_matricula'})), xml_btn_turma_aluno, xml_btn_turma_rema_aluno, DIV (I (__kwargtrans__ ({_class: 'fas fa-print'})), __kwargtrans__ ({_title: 'Imprimir documentos', _class: 'icon_button botao_lista_de_documentos_disponiveis'})))})));
			self.modal_visualizar_matricula.open ();
			self.binds_menu_flutuante (id_escola, ano_letivo, id_turma, id_matricula, id_aluno, nome_do_aluno, resultado_final, turmas_disponiveis);
		}
		else {
			window.PhanterPWA.flash ('Não há alunos_visualizar matriculados para a série da turma');
		}
	});},
	get binds_menu_flutuante () {return __get__ (this, function (self, id_escola, ano_letivo, id_turma, id_matricula, id_aluno, nome_do_aluno, resultado_final, turmas_disponiveis) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_escola': var id_escola = __allkwargs0__ [__attrib0__]; break;
						case 'ano_letivo': var ano_letivo = __allkwargs0__ [__attrib0__]; break;
						case 'id_turma': var id_turma = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
						case 'id_aluno': var id_aluno = __allkwargs0__ [__attrib0__]; break;
						case 'nome_do_aluno': var nome_do_aluno = __allkwargs0__ [__attrib0__]; break;
						case 'resultado_final': var resultado_final = __allkwargs0__ [__attrib0__]; break;
						case 'turmas_disponiveis': var turmas_disponiveis = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		$ ('.botao_lista_de_documentos_disponiveis').off ('click.botao_lista_de_documentos_disponiveis').on ('click.botao_lista_de_documentos_disponiveis', (function __lambda__ () {
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
			return self.abrir_modal_documentos (id_escola, ano_letivo, id_turma, id_matricula, id_aluno, nome_do_aluno, resultado_final);
		}));
		$ ('.add_aluno_turma').off ('click.add_aluno_turma').on ('click.add_aluno_turma', (function __lambda__ () {
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
			return self.abrir_modal_add_aluno_turma (id_escola, ano_letivo, id_turma, id_matricula, nome_do_aluno, turmas_disponiveis, id_turma);
		}));
		$ ('.botao_deletar_matricula').off ('click.botao_deletar_matricula').on ('click.botao_deletar_matricula', (function __lambda__ () {
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
			return self.modal_confirmar_deletar_matricula (id_escola, ano_letivo, id_matricula, nome_do_aluno);
		}));
	});},
	get modal_confirmar_deletar_matricula () {return __get__ (this, function (self, id_escola, ano_letivo, id_matricula, nome_do_aluno) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_escola': var id_escola = __allkwargs0__ [__attrib0__]; break;
						case 'ano_letivo': var ano_letivo = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
						case 'nome_do_aluno': var nome_do_aluno = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.modal_visualizar_matricula.close ();
		var content = DIV (P ('Atenção, a matrícula do aluno será deletada permanentemente, se ', 'o mesmo possuir notas, faltas, ficha individual, boletim, etc. Tudo isto será perdido, inclusive o mesmo sairá da turma permanentemente.'), P ('Tem certeza que deseja deletar esta matrícula?'), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.FormButton ('deletar_matricula_sim', 'Sim', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), forms.FormButton ('deletar_matricula_nao', 'Não', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_deletar_matricula = modal.Modal ('#modal_deletar_matricula_detalhe_container', __kwargtrans__ (dict ({'title': 'Deletar Matrícula do(a) aluno(a) {0}'.format (nome_do_aluno), 'content': content, 'footer': footer, 'footer_height': 65, 'form': 'deletar_matricula'})));
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
			return self._on_click_deletar_matricula (id_escola, ano_letivo, id_matricula);
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
	get _on_click_deletar_matricula () {return __get__ (this, function (self, id_escola, ano_letivo, id_matricula) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_escola': var id_escola = __allkwargs0__ [__attrib0__]; break;
						case 'ano_letivo': var ano_letivo = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.DELETE ('api', 'matricula', 'deletar', id_escola, ano_letivo, id_matricula, __kwargtrans__ ({onComplete: self.depois_de_revogar_matricula}));
		self.modal_deletar_matricula.close ();
	});},
	get depois_de_revogar_matricula () {return __get__ (this, function (self, data, ajax_status) {
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
			self.modal_deletar_matricula.close ();
			window.PhanterPWA.flash ('Matrícula cancelada com sucesso!');
			window.location.reload ();
		}
	});},
	get abrir_modal_documentos () {return __get__ (this, function (self, id_escola, ano_letivo, id_turma, id_matricula, id_aluno, nome_do_aluno, resultado_final) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_escola': var id_escola = __allkwargs0__ [__attrib0__]; break;
						case 'ano_letivo': var ano_letivo = __allkwargs0__ [__attrib0__]; break;
						case 'id_turma': var id_turma = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
						case 'id_aluno': var id_aluno = __allkwargs0__ [__attrib0__]; break;
						case 'nome_do_aluno': var nome_do_aluno = __allkwargs0__ [__attrib0__]; break;
						case 'resultado_final': var resultado_final = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.modal_visualizar_matricula.close ();
		var lista_de_resultados_validos = ['Aprovado(a)', 'Reprovado(a)', 'Reprovado(a) - Falta a Recuperação', 'Aprovado(a) no Conselho', 'Reprovado(a) no Conselho', 'Desistente'];
		var html_botao_declaracao_de_transferencia = '';
		if (__in__ (resultado_final, lista_de_resultados_validos)) {
			var html_botao_declaracao_de_transferencia = A (DIV (I (__kwargtrans__ ({_class: 'fas fa-file-alt'})), __kwargtrans__ ({_class: 'icon_documentos_button'})), DIV ('Declaração de Transferência', __kwargtrans__ ({_class: 'descricao_documentos_button'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'p-col w4p33 w1p50 link'}, dict ({'_href': '/#_phanterpwa:/imprimir/declaracao-de-transferencia/{0}?_retornar=turmas/{1}/{2}/especifico/{3}'.format (id_matricula, id_escola, ano_letivo, id_turma)}))));
		}
		var html_documentos = DIV (A (DIV (I (__kwargtrans__ ({_class: 'fas fa-file-alt'})), __kwargtrans__ ({_class: 'icon_documentos_button'})), DIV ('Matrícula', __kwargtrans__ ({_class: 'descricao_documentos_button'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'p-col w4p33 w1p50 link'}, dict ({'_href': '/#_phanterpwa:/imprimir/matricula/{0}?_retornar=turmas/{1}/{2}/especifico/{3}'.format (id_matricula, id_escola, ano_letivo, id_turma)})))), A (DIV (I (__kwargtrans__ ({_class: 'fas fa-file-alt'})), __kwargtrans__ ({_class: 'icon_documentos_button'})), DIV ('Questionário Social', __kwargtrans__ ({_class: 'descricao_documentos_button'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'p-col w4p34 w1p50 link'}, dict ({'_href': '/#_phanterpwa:/imprimir/questionario-social/{0}/{1}/{2}?_retornar=turmas/{0}/{1}/especifico/{3}'.format (id_escola, ano_letivo, id_turma, id_aluno, id_turma)})))), A (DIV (I (__kwargtrans__ ({_class: 'fas fa-file-alt'})), __kwargtrans__ ({_class: 'icon_documentos_button'})), DIV ('Declaração de Matrícula', __kwargtrans__ ({_class: 'descricao_documentos_button'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'p-col w4p33 w1p50 link'}, dict ({'_href': '/#_phanterpwa:/imprimir/declaracao-de-matricula/{0}?_retornar=turmas/{1}/{2}/especifico/{3}'.format (id_matricula, id_escola, ano_letivo, id_turma)})))), html_botao_declaracao_de_transferencia, A (DIV (I (__kwargtrans__ ({_class: 'fas fa-file-alt'})), __kwargtrans__ ({_class: 'icon_documentos_button'})), DIV ('Ficha Individual', __kwargtrans__ ({_class: 'descricao_documentos_button'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'p-col w4p33 w1p50 link'}, dict ({'_href': '/#_phanterpwa:/imprimir/ficha-individual-do-aluno/{0}?_retornar=turmas/{1}/{2}/detalhado'.format (id_matricula, id_escola, ano_letivo)})))), __kwargtrans__ ({_class: 'p-row documentos_buttons_container'}));
		self.modal_documentos = modal.Modal ('#modal_documentos', __kwargtrans__ (dict ({'title': 'Documentos do(a) aluno(a) {0}'.format (nome_do_aluno), 'content': html_documentos})));
		self.modal_documentos.open ();
	});},
	get abrir_modal_add_aluno_turma () {return __get__ (this, function (self, id_escola, ano_letivo, id_turma, id_matricula, nome_do_aluno, turmas_disponiveis, id_turma_atual) {
		if (typeof id_turma_atual == 'undefined' || (id_turma_atual != null && id_turma_atual.hasOwnProperty ("__kwargtrans__"))) {;
			var id_turma_atual = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_escola': var id_escola = __allkwargs0__ [__attrib0__]; break;
						case 'ano_letivo': var ano_letivo = __allkwargs0__ [__attrib0__]; break;
						case 'id_turma': var id_turma = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
						case 'nome_do_aluno': var nome_do_aluno = __allkwargs0__ [__attrib0__]; break;
						case 'turmas_disponiveis': var turmas_disponiveis = __allkwargs0__ [__attrib0__]; break;
						case 'id_turma_atual': var id_turma_atual = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.modal_visualizar_matricula.close ();
		var html_turmas_disponiveis = XTABLE ('tabela_turmas_disponiveis_aluno', TR (TH ('Escolha a turma a qual o aluno irá ingressar', __kwargtrans__ ({_style: 'text-align: center;'}))));
		var aluno_na_turma = false;
		for (var x of turmas_disponiveis) {
			var _class_tur = '';
			console.log (x [0], id_turma_atual);
			if (id_turma_atual == x [0]) {
				var aluno_na_turma = true;
				var _class_tur = ' turma_atual_do_aluno';
			}
			html_turmas_disponiveis.append (TR (TD (x [1], __kwargtrans__ ({_style: 'text-align: center;'})), __kwargtrans__ (dict ({'_data-id_matricula': id_matricula, '_data-id_escola': id_escola, '_data-ano_letivo': ano_letivo, '_data-id_turma': x [0], '_class': 'link turma_disponiveis_para_o_aluno{0}'.format (_class_tur)}))));
		}
		if (aluno_na_turma) {
			html_turmas_disponiveis.append (TR (TD ('Retirar o(a) aluno(a) da turma', __kwargtrans__ ({_style: 'text-align: center; color: red;'})), __kwargtrans__ (dict ({'_data-id_matricula': id_matricula, '_data-id_escola': id_escola, '_data-ano_letivo': ano_letivo, '_data-id_turma': x [0], '_class': 'link retirar_aluno_da_turma'}))));
		}
		var titu = 'Adicionar o(a) aluno(a) {0} em uma turma.'.format (nome_do_aluno);
		if (aluno_na_turma) {
			var titu = 'Alterar turma do(a) aluno(a) {0}'.format (nome_do_aluno);
		}
		self.modal_adicionar_aluno_turma = modal.Modal ('#modal_adicionar_aluno_turma', __kwargtrans__ (dict ({'title': titu, 'content': html_turmas_disponiveis})));
		self.modal_adicionar_aluno_turma.open ();
		$ ('.turma_disponiveis_para_o_aluno').off ('click.turma_disponiveis_para_o_aluno').on ('click.turma_disponiveis_para_o_aluno', (function __lambda__ () {
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
			return self._adicionar_aluno_na_turma (this);
		}));
		$ ('.retirar_aluno_da_turma').off ('click.retirar_aluno_da_turma').on ('click.retirar_aluno_da_turma', (function __lambda__ () {
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
			return self._remover_aluno_na_turma (this);
		}));
	});},
	get _adicionar_aluno_na_turma () {return __get__ (this, function (self, el) {
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
		var id_escola = $ (el).data ('id_escola');
		var ano_letivo = $ (el).data ('ano_letivo');
		var id_turma = $ (el).data ('id_turma');
		var formdata = new FormData ();
		formdata.append ('id_matricula', id_matricula);
		formdata.append ('id_turma', id_turma);
		window.PhanterPWA.PUT ('api', 'turma', id_escola, ano_letivo, 'remanejar', id_turma, id_matricula, __kwargtrans__ ({onComplete: self._depois_de_adicionar_a_turma, form_data: formdata}));
	});},
	get _depois_de_adicionar_a_turma () {return __get__ (this, function (self, data, ajax_status) {
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
			self.modal_adicionar_aluno_turma.close ();
			window.PhanterPWA.flash ('Edição da turma do(a) aluno(a) realizada com sucesso!');
			window.location.reload ();
		}
	});},
	get _remover_aluno_na_turma () {return __get__ (this, function (self, el) {
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
		var id_escola = $ (el).data ('id_escola');
		var ano_letivo = $ (el).data ('ano_letivo');
		var id_turma = $ (el).data ('id_turma');
		var formdata = new FormData ();
		formdata.append ('id_matricula', id_matricula);
		formdata.append ('id_turma', id_turma);
		window.PhanterPWA.PUT ('api', 'matricula', 'remover-da-turma', id_escola, ano_letivo, id_matricula, __kwargtrans__ ({onComplete: self._depois_de_remover_da_turma}));
	});},
	get _depois_de_remover_da_turma () {return __get__ (this, function (self, data, ajax_status) {
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
			self.modal_adicionar_aluno_turma.close ();
			window.PhanterPWA.flash ('Aluno(a) retirado(a) da turma');
			window.location.reload ();
		}
	});}
});

//# sourceMappingURL=handlers.matriculas.map