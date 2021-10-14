// Transcrypt'ed from Python, 2021-08-20 01:39:00
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as anos_letivos from './handlers.anos_letivos.js';
import * as alunos from './handlers.alunos.js';
import * as escolas from './handlers.escolas.js';
import * as decorators from './phanterpwa.frontend.decorators.js';
import * as preloaders from './phanterpwa.frontend.preloaders.js';
import * as modal from './phanterpwa.frontend.components.modal.js';
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
export var TH = helpers.XmlConstructor.tagger ('th');
export var TD = helpers.XmlConstructor.tagger ('td');
export var TR = helpers.XmlConstructor.tagger ('tr');
export var LABEL = helpers.XmlConstructor.tagger ('label');
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var I18N = helpers.I18N;
export var HR = helpers.XmlConstructor.tagger ('hr', true);
export var XTABLE = widgets.Table;
export var XML = helpers.XML;
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
			var table = XTABLE ('tabela_dados_quant_matriculas_sme', XTRH ('tabela_dados_quant_matriculas_sme_tr', 'Logo', 'Escola', TH ('Matrículas', __kwargtrans__ ({_style: 'text-align: center;'})), TH ('Sem turma', __kwargtrans__ ({_style: 'text-align: center;'})), TH (__kwargtrans__ ({_style: 'width: 40px'}))));
			var anos = [];
			for (var x of json.dados) {
				var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, x.id_escola);
				if (!__in__ (x.ano_letivo, anos)) {
					anos.append (x.ano_letivo);
					table.append (TR (TD (x.ano_letivo, __kwargtrans__ ({_colspan: 5, _style: 'text-align: center; background-color: #d5d5d5;'}))));
				}
				table.append (XTRD ('tabela_dados_quant_matriculas_sme_td_{0}_ano_{1}'.format (x.id_escola, x.ano_letivo), TD (IMG (__kwargtrans__ ({_src: logo, _style: 'width: 40px; heigth: 40px; border-radius: 100%'})), __kwargtrans__ ({_style: 'width: 40px'})), x.escola, TD (x.quantidade, __kwargtrans__ ({_style: 'text-align: center;'})), TD (x.sem_turma, __kwargtrans__ ({_style: 'text-align: center;'})), DIV (widgets.MenuBox ('matriculas_escolas_por_ano_{0}_{1}'.format (x.id_escola, x.ano_letivo), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Detalhe', __kwargtrans__ (dict ({'_class': 'wave_on_click', '_href': window.PhanterPWA.XWAY ('matriculas', 'escola', x.id_escola)}))), widgets.MenuOption ('Turmas', __kwargtrans__ (dict ({'_class': 'wave_on_click', '_href': window.PhanterPWA.XWAY ('turmas', x.id_escola, x.ano_letivo)}))), widgets.MenuOption ('Matricular', __kwargtrans__ (dict ({'_class': 'wave_on_click', '_href': window.PhanterPWA.XWAY ('matriculas', 'matricular', x.id_escola, x.ano_letivo)})))), __kwargtrans__ ({_class: 'phanterpwa-xsection-menu_buttom'})), __kwargtrans__ (dict ({'drag_and_drop': false}))));
			}
			var card = CONCATENATE (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo_principal})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (H2 ('QUANTIDADE DE MATRÍCULAS DISTRIBUÍDAS POR ESCOLA SEPARADAS POR ANO.'), __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), table, DIV (__kwargtrans__ ({_id: 'modal_quantidade_matriculas_case'})));
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
			var table = XTABLE ('tabela_dados_quant_matriculas_sme', XTRH ('tabela_dados_quant_matriculas_sme_tr', 'Ano Letivo', TH ('Matrículas', __kwargtrans__ ({_style: 'text-align: center;'})), TH ('Sem turma', __kwargtrans__ ({_style: 'text-align: center;'})), TH (__kwargtrans__ ({_style: 'width: 40px'}))));
			for (var x of json.dados) {
				table.append (XTRD ('tabela_dados_quant_matriculas_sme_td_{0}'.format (x.id_escola), x.ano_letivo, TD (x.quantidade, __kwargtrans__ ({_style: 'text-align: center;'})), TD (x.sem_turma, __kwargtrans__ ({_style: 'text-align: center;'})), DIV (widgets.MenuBox ('matriculas_escolas_por_ano_detalhado_{0}_{1}'.format (x.id_escola, x.ano_letivo), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Matriculados', __kwargtrans__ (dict ({'_class': 'wave_on_click', '_href': window.PhanterPWA.XWAY ('matriculas', 'lista', x.id_escola, x.ano_letivo)}))), widgets.MenuOption ('Matricular', __kwargtrans__ (dict ({'_class': 'wave_on_click', '_href': window.PhanterPWA.XWAY ('matriculas', 'matricular', x.id_escola, x.ano_letivo)}))), HR (), widgets.MenuOption ('Turmas', __kwargtrans__ (dict ({'_class': 'wave_on_click', '_href': window.PhanterPWA.XWAY ('turmas', x.id_escola, x.ano_letivo)})))), __kwargtrans__ ({_class: 'phanterpwa-xsection-menu_buttom'})), __kwargtrans__ (dict ({'drag_and_drop': false}))));
			}
			var card = CONCATENATE (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo_principal})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (H2 ('QUANTIDADE DE MATRÍCULAS DA ESCOLA DISTRIBUÍDAS POR ANO.'), __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), table, DIV (__kwargtrans__ ({_id: 'modal_quantidade_matriculas_case'})));
			card.html_to ('#content-painel-matriculas');
		}
	});}
});

//# sourceMappingURL=handlers.matriculas.map