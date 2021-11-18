// Transcrypt'ed from Python, 2021-11-03 19:37:52
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as anos_letivos from './handlers.anos_letivos.js';
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
var __name__ = 'handlers.calendarios';
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
export var H5 = helpers.XmlConstructor.tagger ('h5');
export var P = helpers.XmlConstructor.tagger ('p');
export var TH = helpers.XmlConstructor.tagger ('th');
export var TD = helpers.XmlConstructor.tagger ('td');
export var TR = helpers.XmlConstructor.tagger ('tr');
export var TABLE = helpers.XmlConstructor.tagger ('table');
export var LABEL = helpers.XmlConstructor.tagger ('label');
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var I18N = helpers.I18N;
export var XTABLE = widgets.Table;
export var XML = helpers.XML;
export var XTRD = widgets.TableData;
export var XTRH = widgets.TableHead;
export var XFOOTER = widgets.TableFooterPagination;
export var XSECTION = helpers.XSECTION;
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
		return window.PhanterPWA.auth_user_has_role (['administrator', 'root', 'Administrador Master SME', 'Administrador Master Escola', 'Professor(a)']);
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
		var ano_ht = '';
		if (arg1 !== null) {
			var ano_ht = DIV (arg1, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'}));
		}
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('CALENDÁRIO', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), ano_ht, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-calendario', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		if (arg0 == 'calendario-base') {
			if (arg1 === null || arg1 === undefined) {
				var BackButton1 = left_bar.LeftBarButton ('back_calendario', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('area-do-servidor'), 'position': 'top', 'show_if_way_match': '^calendarios\\/calendario-base\\/?(\\?.*)?$'})));
				window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
				var html = anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({id_target: '#content-calendario', callback_link: (function __lambda__ (ano) {
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
					return '#_phanterpwa:/calendarios/calendario-base/{0}'.format (ano);
				})}));
			}
			else if (str (arg1).isdigit ()) {
				if (arg2 == 'editar') {
					self.EditarCalendario = EditarCalendario (self, arg1, null);
					var BackButton1 = left_bar.LeftBarButton ('back_calendario', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('calendarios', arg0, arg1), 'position': 'top', 'show_if_way_match': '^calendarios\\/calendario-base\\/[0-9]{1,}\\/[0-9]{4}\\/editar\\/?(\\?.*)?$'})));
					window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
				}
				else {
					self.Calendario = Calendario (self, arg1, null);
					var BackButton1 = left_bar.LeftBarButton ('back_calendario', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('calendarios', 'calendario-base'), 'position': 'top', 'show_if_way_match': '^calendarios\\/calendario-base\\/[0-9]{1,}\\/?(\\?.*)?$'})));
					window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
				}
			}
		}
		else if (arg0 === null || arg0 === undefined) {
			var html = escolas.EscolherEscola (__kwargtrans__ ({id_target: '#content-calendario', callback_link: (function __lambda__ (id_escola) {
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
				return '#_phanterpwa:/calendarios/{0}'.format (id_escola);
			})}));
		}
		else if (str (arg0).isdigit () && (arg1 === null || arg1 === undefined)) {
			var html = anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({id_target: '#content-calendario', callback_link: (function __lambda__ (ano) {
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
				return '#_phanterpwa:/calendarios/{0}/{1}'.format (arg0, ano);
			})}));
		}
		else if (str (arg0).isdigit () && str (arg1).isdigit ()) {
			if (arg2 == 'editar' && window.PhanterPWA.auth_user_has_role (['administrator', 'root', 'Administrador Master SME', 'Administrador Master Escola'])) {
				self.EditarCalendario = EditarCalendario (self, arg1, arg0);
				var BackButton1 = left_bar.LeftBarButton ('back_calendario', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('calendarios', arg0, arg1), 'position': 'top', 'show_if_way_match': '^calendarios\\/[0-9]{1,}\\/[0-9]{4}\\/editar\\/?(\\?.*)?$'})));
				window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
			}
			else {
				self.Calendario = Calendario (self, arg1, arg0);
				var BackButton1 = left_bar.LeftBarButton ('back_calendario', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('area-do-servidor'), 'position': 'top', 'show_if_way_match': '^calendarios\\/[0-9]{1,}\\/[0-9]{4}\\/?(\\?.*)?$'})));
				window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
			}
		}
	}));}
});
export var Calendario =  __class__ ('Calendario', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, ano_letivo, escola) {
		if (typeof escola == 'undefined' || (escola != null && escola.hasOwnProperty ("__kwargtrans__"))) {;
			var escola = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
						case 'ano_letivo': var ano_letivo = __allkwargs0__ [__attrib0__]; break;
						case 'escola': var escola = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.id_escola = escola;
		self.ano_letivo = ano_letivo;
		self.index_instance = index_instance;
		self.initial_xml ();
		self._get_calendario ();
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('CALENDARIO', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV (self.ano_letivo, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-calendario', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})), DIV (__kwargtrans__ ({_id: 'modais_calendario'})));
		html.html_to ('#main-container');
		return html;
	});},
	get _get_calendario () {return __get__ (this, function (self) {
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
		if (self.id_escola === null || self.id_escola === undefined) {
			window.PhanterPWA.GET ('api', 'calendario', self.ano_letivo, __kwargtrans__ ({onComplete: self.after_get}));
		}
		else {
			window.PhanterPWA.GET ('api', 'calendario', self.ano_letivo, self.id_escola, __kwargtrans__ ({onComplete: self.after_get}));
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
			var dias_letivos = json.total_dias_letivos;
			window.PhanterPWA.flash ('{0} Dias Letivos'.format (dias_letivos));
			if (self.id_escola === null || self.id_escola === undefined) {
				var logo_principal = '{0}/api/escolas/12/image'.format (window.PhanterPWA.ApiServer.remote_address);
				var botao_editar = A (I (__kwargtrans__ ({_class: 'fas fa-edit'})), __kwargtrans__ (dict ({'_class': 'botao_editar_calendario icon_button', '_title': 'Editar Calendario', '_href': window.PhanterPWA.XWAY ('calendarios', 'calendario-base', self.ano_letivo, 'editar')})));
				var botao_calendario_escola = A (I (__kwargtrans__ ({_class: 'fas fa-calendar-plus'})), __kwargtrans__ (dict ({'_class': 'botao_celendario_escola icon_button', '_title': 'Calendários das escolas', '_href': window.PhanterPWA.XWAY ('calendarios')})));
				var titulo = CONCATENATE (H2 ('CALENDÁRIO BASE ', self.ano_letivo), P ('O seguinte calendário será usado como base para cada escolar', ' desenvolver seu próprio calendário.'), P ('Para editá-lo acesse o botão ', I (__kwargtrans__ ({_class: 'fas fa-edit'})), '. Para visualizar os calendários escolares acesse o botão ', I (__kwargtrans__ ({_class: 'fas fa-calendar-plus'})), '.'));
			}
			else {
				var logo_principal = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.id_escola);
				var botao_calendario_escola = '';
				var botao_editar = A (I (__kwargtrans__ ({_class: 'fas fa-edit'})), __kwargtrans__ (dict ({'_class': 'botao_editar_calendario icon_button', '_title': 'Editar Calendario', '_href': window.PhanterPWA.XWAY ('calendarios', self.id_escola, self.ano_letivo, 'editar')})));
				if (window.PhanterPWA.auth_user_has_role (['administrator', 'root', 'Administrador Master SME', 'Administrador Master Escola'])) {
					var titulo = CONCATENATE (H2 ('CALENDÁRIO ESCOLAR ', self.ano_letivo), P ('O seguinte calendário irá definir os dias letivos que serão ', 'utilizados no registro de aulas ou faltas.'), P ('Para editá-lo acesse o botão ', I (__kwargtrans__ ({_class: 'fas fa-edit'})), '.'));
				}
				else {
					var titulo = CONCATENATE (H2 ('CALENDÁRIO ESCOLAR ', self.ano_letivo), P ('O calendário abaixo é usado em seu registro de aulas e faltas dos alunos.', 'Aparecerão apenas os dias letivos nesses registros. É importante ', 'consultar a diretoria para ter certeza de que este é o calendário definitivo.'));
				}
			}
			var html = DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo_principal})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (titulo, __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_id: 'logo_e_calendario'}));
			var html_content = DIV (__kwargtrans__ ({_class: 'calendario_content p-row'}));
			for (var m of json.calendario) {
				var html_mes = TABLE ();
				for (var lin of m) {
					var html_lin = TR ();
					for (var col of lin) {
						if (col [1] ['tipo'] == 'cabecalho') {
							html_lin.append (TH (DIV (col [0]), __kwargtrans__ (col [1])));
						}
						else {
							html_lin.append (TD (DIV (col [0]), __kwargtrans__ (col [1])));
						}
					}
					html_mes.append (html_lin);
				}
				html_content.append (DIV (DIV (html_mes, __kwargtrans__ ({_class: 'calendario_mes_content'})), __kwargtrans__ ({_class: 'p-col w1p100  w5p50  w7p33  w8p25'})));
			}
			if (window.PhanterPWA.auth_user_has_role (['administrator', 'root', 'Administrador Master SME', 'Administrador Master Escola'])) {
				var add_class = ' has_buttons';
			}
			else {
				var add_class = '';
				var botao_editar = '';
				var botao_calendario_escola = '';
			}
			var html_legenda = DIV (__kwargtrans__ ({_class: 'calendario_legenda p-row'}));
			for (var x of json.legenda) {
				html_legenda.append (DIV (DIV (DIV (DIV ('#', __kwargtrans__ ({_class: 'hashtag_legenda'})), SPAN (x [0]), __kwargtrans__ (x [1])), __kwargtrans__ ({_class: 'linha_legenda'})), __kwargtrans__ ({_class: 'p-col w1p100 w5p50'})));
			}
			html.append (DIV (LABEL ('Calendário Escolar - {0} Dias Letivos'.format (dias_letivos)), DIV (DIV (DIV (DIV (DIV (DIV (DIV (html_content, __kwargtrans__ ({_class: 'calendario_wrapper'})), __kwargtrans__ ({_class: 'diario-ficha_avaliativa-container'})), __kwargtrans__ ({_class: 'diario-ficha_avaliativa-wrapper'})), __kwargtrans__ ({_class: 'p-row e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (botao_editar, botao_calendario_escola, __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper{0}'.format (add_class)})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), DIV (DIV ('LEGENDA', __kwargtrans__ ({_class: 'titulo_legenda'})), html_legenda, __kwargtrans__ ({_class: 'legenda_container'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control'})));
			html.html_to ('#content-calendario');
		}
	});}
});
export var EditarCalendario =  __class__ ('EditarCalendario', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, ano_letivo, escola) {
		if (typeof escola == 'undefined' || (escola != null && escola.hasOwnProperty ("__kwargtrans__"))) {;
			var escola = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
						case 'ano_letivo': var ano_letivo = __allkwargs0__ [__attrib0__]; break;
						case 'escola': var escola = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.id_escola = escola;
		self.ano_letivo = ano_letivo;
		self.index_instance = index_instance;
		self.initial_xml ();
		self._get_calendario ();
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('CALENDARIO', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV (self.ano_letivo, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('Editar', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-calendario', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})), DIV (__kwargtrans__ ({_id: 'modais_calendario'})));
		html.html_to ('#main-container');
		return html;
	});},
	get _get_calendario () {return __get__ (this, function (self) {
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
		if (self.id_escola === null || self.id_escola === undefined) {
			window.PhanterPWA.GET ('api', 'calendario', self.ano_letivo, __kwargtrans__ ({onComplete: self.after_get}));
		}
		else {
			window.PhanterPWA.GET ('api', 'calendario', self.ano_letivo, self.id_escola, __kwargtrans__ ({onComplete: self.after_get}));
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
			var dias_letivos = json.total_dias_letivos;
			window.PhanterPWA.flash ('{0} Dias Letivos'.format (dias_letivos));
			self.data_inicial = json.data_inicial;
			self.data_final = json.data_final;
			self.periodo_unidades = json.periodo_unidades;
			self.quant_unidades = json.quant_unidades;
			if (self.id_escola === null || self.id_escola === undefined) {
				var logo_principal = '{0}/api/escolas/12/image'.format (window.PhanterPWA.ApiServer.remote_address);
				var titulo = CONCATENATE (H2 ('EDITAR CALENDÁRIO BASE ', self.ano_letivo), P ('O seguinte calendário será usado como base para cada escola', ' desenvolver seu próprio calendário.'), P ('É necessário definir a data inicial e a data final nos respectivos botões: ', I (__kwargtrans__ ({_class: 'fas fa-calendar'})), ' e ', I (__kwargtrans__ ({_class: 'fas fa-calendar-alt'})), '. Para outros eventos, como definir se o dia é letivo ou não letivo é só acessar os dias.'));
			}
			else {
				var logo_principal = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.id_escola);
				var titulo = CONCATENATE (H2 ('EDITAR CALENDÁRIO DA ESCOLA ', self.ano_letivo), P ('Editando o calendário irá definir os dias letivos ou não que serão ', 'utilizados no registro de aulas e no registro de faltas.'), P ('É necessário definir a data inicial e a data final nos respectivos botões: ', I (__kwargtrans__ ({_class: 'fas fa-calendar'})), ' e ', I (__kwargtrans__ ({_class: 'fas fa-calendar-alt'})), '. Para outros eventos, como definir se o dia é letivo ou não letivo é só acessar os dias.'));
			}
			var html = DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo_principal})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (titulo, __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_id: 'logo_e_calendario'}));
			var html_content = DIV (__kwargtrans__ ({_class: 'calendario_content p-row'}));
			for (var m of json.calendario) {
				var html_mes = TABLE ();
				for (var lin of m) {
					var html_lin = TR ();
					for (var col of lin) {
						if (col [1] ['tipo'] == 'cabecalho') {
							html_lin.append (TH (DIV (col [0]), __kwargtrans__ (col [1])));
						}
						else {
							html_lin.append (TD (DIV (col [0]), __kwargtrans__ (col [1])));
						}
					}
					html_mes.append (html_lin);
				}
				html_content.append (DIV (DIV (html_mes, __kwargtrans__ ({_class: 'calendario_mes_content editar'})), __kwargtrans__ ({_class: 'p-col w1p100  w5p50  w7p33  w8p25'})));
			}
			var botao_data_inicial = DIV (I (__kwargtrans__ ({_class: 'fas fa-calendar'})), __kwargtrans__ (dict ({'_class': 'definir_data_inicial icon_button', '_title': 'Definir data inicial das aulas'})));
			var botao_data_final = DIV (I (__kwargtrans__ ({_class: 'fas fa-calendar-alt'})), __kwargtrans__ (dict ({'_class': 'definir_data_final icon_button', '_title': 'Definir data final das aulas'})));
			var botao_data_unidades = DIV (I (__kwargtrans__ ({_class: 'fab fa-delicious'})), __kwargtrans__ (dict ({'_class': 'definir_datas_unidades icon_button', '_title': 'Definir inícios das unidades das aulas'})));
			var html_legenda = DIV (__kwargtrans__ ({_class: 'calendario_legenda p-row'}));
			for (var x of json.legenda) {
				html_legenda.append (DIV (DIV (DIV (DIV ('#', __kwargtrans__ ({_class: 'hashtag_legenda'})), SPAN (x [0]), __kwargtrans__ (x [1])), __kwargtrans__ ({_class: 'linha_legenda'})), __kwargtrans__ ({_class: 'p-col w1p100 w5p50'})));
			}
			html.append (DIV (LABEL ('Calendário Escolar - {0} Dias Letivos'.format (dias_letivos)), DIV (DIV (DIV (DIV (DIV (DIV (DIV (html_content, __kwargtrans__ ({_class: 'calendario_wrapper editar'})), __kwargtrans__ ({_class: 'diario-ficha_avaliativa-container'})), __kwargtrans__ ({_class: 'diario-ficha_avaliativa-wrapper'})), __kwargtrans__ ({_class: 'p-row e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (botao_data_inicial, botao_data_final, botao_data_unidades, __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper has_buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), DIV (DIV ('LEGENDA', __kwargtrans__ ({_class: 'titulo_legenda'})), html_legenda, __kwargtrans__ ({_class: 'legenda_container'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control'})));
			html.html_to ('#content-calendario');
			self.binds ();
		}
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
		$ ('.definir_data_inicial').off ('click.definir_data_inicial').on ('click.definir_data_inicial', (function __lambda__ () {
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
			return self.modal_data_inicial_e_final ('data_inicial');
		}));
		$ ('.definir_data_final').off ('click.definir_data_final').on ('click.definir_data_final', (function __lambda__ () {
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
			return self.modal_data_inicial_e_final ('data_final');
		}));
		$ ('.definir_datas_unidades').off ('click.definir_datas_unidades').on ('click.definir_datas_unidades', (function __lambda__ () {
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
			return self.modal_data_unidades ();
		}));
		$ ('.celula_dias').off ('click.celula_dias').on ('click.celula_dias', (function __lambda__ () {
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
			return self.modal_data_eventos (this);
		}));
	});},
	get modal_data_inicial_e_final () {return __get__ (this, function (self, tipo_de_data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'tipo_de_data': var tipo_de_data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (tipo_de_data == 'data_inicial') {
			var value = self.data_inicial;
			var label = 'Data Inicial';
		}
		else if (tipo_de_data == 'data_final') {
			var value = self.data_final;
			var label = 'Data Final';
		}
		var content = DIV (forms.FormWidget ('calendario', tipo_de_data, __kwargtrans__ (dict ({'value': value, 'label': label, 'type': 'date', 'validators': ['IS_EMPTY_OR', 'IS_DATE:dd/MM/yyyy'], 'validator_format': '%d/%m/%Y', 'mask': 'dd/MM/yyyy', 'format': 'dd/MM/yyyy', '_placeholder': label, '_class': 'p-col w1p100'}))), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.SubmitButton ('adicionar_{0}'.format (tipo_de_data), 'Definir {0}'.format (label), __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_inicial_e_final = modal.Modal ('#modais_calendario', __kwargtrans__ (dict ({'title': 'Definir {0}'.format (label), 'content': content, 'footer': footer, 'form': 'calendario'})));
		self.modal_inicial_e_final.open ();
		$ ('#phanterpwa-widget-form-submit_button-adicionar_{0}'.format (tipo_de_data)).off ('click.adicionar_{0}'.format (tipo_de_data)).on ('click.adicionar_{0}'.format (tipo_de_data), (function __lambda__ () {
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
			return self._definir_data (tipo_de_data);
		}));
	});},
	get _definir_data () {return __get__ (this, function (self, tipo_de_data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'tipo_de_data': var tipo_de_data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var t_data = $ ('#phanterpwa-widget-input-input-calendario-{0}'.format (tipo_de_data)).val ();
		var formdata = new FormData ();
		formdata.append (tipo_de_data, t_data);
		if (self.id_escola === null || self.id_escola === undefined) {
			window.PhanterPWA.PUT ('api', 'calendario', self.ano_letivo, __kwargtrans__ ({form_data: formdata, onComplete: self.after_get}));
		}
		else {
			window.PhanterPWA.PUT ('api', 'calendario', self.ano_letivo, self.id_escola, __kwargtrans__ ({form_data: formdata, onComplete: self.after_get}));
		}
		self.modal_inicial_e_final.close ();
	});},
	get modal_data_eventos () {return __get__ (this, function (self, el) {
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
		var eventos = element.data ('eventos');
		var data = element.data ('data');
		var descricao = element.data ('descricao');
		var __left0__ = data.py_split ('-');
		var ano = __left0__ [0];
		var mes = __left0__ [1];
		var dia = __left0__ [2];
		var resposta = element.data ('resposta');
		var campos = [];
		var meses = dict ({'01': 'Janeiro', '02': 'Fevereiro', '03': 'Março', '04': 'Abril', '05': 'Maio', '06': 'Junho', '07': 'Julho', '08': 'Agosto', '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'});
		var data_ext = '{0} de {1} de {2}'.format (dia, meses [mes], ano);
		var id_data = 'data_{0}_{1}_{2}'.format (dia, mes, ano);
		var labels = dict ({'feriado': 'Feriado', 'atividade_complementar': 'Atividade Complementar', 'jornada_pedagogica': 'Jornada Pedagógica', 'jornada_dirigentes': 'Jornada de Dirigentes', 'recuperacao_final': 'Recuperação Final', 'recesso': 'Recesso', 'dia_letivo': 'Dia Letivo', 'dia_nao_letivo': 'Dia Não Letivo'});
		var data_set = [];
		for (var x of eventos) {
			data_set.append ([x, labels [x]]);
		}
		var value = '';
		if (__in__ (resposta, eventos)) {
			var value = resposta;
		}
		campos.append (forms.FormWidget ('calendario', 'evento', __kwargtrans__ (dict ({'value': value, 'label': 'Evento', 'type': 'select', 'data_set': data_set, 'can_empty': true, '_class': 'p-col w1p100'}))));
		campos.append (forms.FormWidget ('calendario', 'descricao', __kwargtrans__ (dict ({'value': descricao, 'label': 'Descricao', 'type': 'string', '_class': 'p-col w1p100'}))));
		campos.append (forms.FormWidget ('calendario', 'data', __kwargtrans__ (dict ({'value': data, 'label': 'Data', 'type': 'string', '_class': 'e-display_hidden'}))));
		var content = DIV (...campos, __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.SubmitButton ('adicionar_{0}'.format (id_data), 'Definir Evento', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_eventos = modal.Modal ('#modais_calendario', __kwargtrans__ (dict ({'title': 'Eventos de {0}'.format (data_ext), 'content': content, 'footer': footer, 'form': 'calendario'})));
		self.modal_eventos.open ();
		$ ('#phanterpwa-widget-form-submit_button-adicionar_{0}'.format (id_data)).off ('click.adicionar_{0}'.format (id_data)).on ('click.adicionar_{0}'.format (id_data), (function __lambda__ () {
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
			return self._definir_evento (eventos);
		}));
	});},
	get _definir_evento () {return __get__ (this, function (self, eventos) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'eventos': var eventos = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var formdata = new FormData ();
		var t_evento = $ ('#phanterpwa-widget-select-input-calendario-evento').val ();
		formdata.append ('evento', t_evento);
		var t_descricao = $ ('#phanterpwa-widget-input-input-calendario-descricao').val ();
		formdata.append ('descricao', t_descricao);
		var t_data = $ ('#phanterpwa-widget-input-input-calendario-data').val ();
		formdata.append ('data', t_data);
		if (self.id_escola === null || self.id_escola === undefined) {
			window.PhanterPWA.PUT ('api', 'calendario', self.ano_letivo, __kwargtrans__ ({form_data: formdata, onComplete: self.after_get}));
		}
		else {
			window.PhanterPWA.PUT ('api', 'calendario', self.ano_letivo, self.id_escola, __kwargtrans__ ({form_data: formdata, onComplete: self.after_get}));
		}
		self.modal_eventos.close ();
	});},
	get iso_br () {return __get__ (this, function (self, data_iso) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data_iso': var data_iso = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var __left0__ = data_iso.py_split ('-');
		var ano = __left0__ [0];
		var mes = __left0__ [1];
		var dia = __left0__ [2];
		return '{0}/{1}/{2}'.format (dia, mes, ano);
	});},
	get xml_modal_unidade () {return __get__ (this, function (self) {
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
		var tabela = TABLE (TR (TH ('Unidade'), TH ('Data Inicial'), TH ('Data Final (auto)')), __kwargtrans__ ({_style: 'margin: auto;'}));
		var romanos = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
		var dict_periodo_unidades = (function () {
			var __accu0__ = [];
			for (var x of self.periodo_unidades) {
				__accu0__.append ([x [0], x]);
			}
			return dict (__accu0__);
		}) ();
		var proximo_key = 2;
		for (var x = 0; x < self.quant_unidades; x++) {
			var key = x + 1;
			console.log (key, dict_periodo_unidades.py_keys (), __in__ (key, dict_periodo_unidades.py_keys ()));
			if (__in__ (str (key), dict_periodo_unidades.py_keys ())) {
				if (x == 0) {
					var input_data = widgets.Inert ('df_unidade_{0}'.format (x + 1), __kwargtrans__ (dict ({'value': self.iso_br (dict_periodo_unidades [x + 1] [1])})));
				}
				else {
					var proximo_key = x + 2;
					var input_data = forms.FormWidget ('calendario_unidade', 'unidade_{0}'.format (x + 1), __kwargtrans__ (dict ({'value': dict_periodo_unidades [x + 1] [1], 'label': 'Data Inicial', 'type': 'date', 'validators': ['IS_EMPTY_OR', 'IS_DATE:dd/MM/yyyy'], 'validator_format': '%d/%m/%Y', 'mask': 'dd/MM/yyyy', 'format': 'dd/MM/yyyy', '_placeholder': 'Data Inicial', '_class': 'p-col w1p100 input_data_unidade', '_data-unidade': x + 1})));
				}
				var linha = TR (TH ('Unidade {0}'.format (romanos [x])), TD (input_data), TD (widgets.Inert ('df_unidade_{0}'.format (x + 1), __kwargtrans__ (dict ({'value': self.iso_br (dict_periodo_unidades [x + 1] [2])})))));
			}
			else {
				if (x == 0) {
					var input_data = widgets.Inert ('df_unidade_{0}'.format (x + 1), __kwargtrans__ (dict ({'value': ''})));
				}
				else if (proximo_key == x + 1) {
					var input_data = forms.FormWidget ('calendario_unidade', 'unidade_{0}'.format (x + 1), __kwargtrans__ (dict ({'value': '', 'label': 'Data Inicial', 'type': 'date', 'validators': ['IS_EMPTY_OR', 'IS_DATE:dd/MM/yyyy'], 'validator_format': '%d/%m/%Y', 'mask': 'dd/MM/yyyy', 'format': 'dd/MM/yyyy', '_placeholder': 'Data Inicial', '_class': 'p-col w1p100 input_data_unidade', '_data-unidade': x + 1})));
				}
				else {
					var input_data = widgets.Inert ('df_unidade_{0}'.format (x + 1), __kwargtrans__ (dict ({'value': ''})));
				}
				var linha = TR (TH ('Unidade {0}'.format (romanos [x])), TD (input_data), TD (widgets.Inert ('df_unidade_{0}'.format (x + 1), __kwargtrans__ (dict ({'value': ''})))));
			}
			tabela.append (linha);
		}
		tabela.html_to ('#content_modal_unidades');
		$ ('.input_data_unidade').find ('input').off ('change.input_data_unidade').on ('change.input_data_unidade', (function __lambda__ () {
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
			return tuple ([self._definir_unidade (this), console.log (this)]);
		}));
	});},
	get modal_data_unidades () {return __get__ (this, function (self) {
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
		var footer = DIV (forms.SubmitButton ('fechar', 'Fechar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_periodo_unidades = modal.Modal ('#modais_calendario', __kwargtrans__ (dict ({'title': 'Periodo das Unidades', 'content': DIV (__kwargtrans__ ({_id: 'content_modal_unidades'})), 'form': 'calendario_unidade', 'footer': footer})));
		self.modal_periodo_unidades.open ();
		self.xml_modal_unidade ();
		$ ('#phanterpwa-widget-form-submit_button-fechar').off ('click.fechar_modal_unidades').on ('click.fechar_modal_unidades', (function __lambda__ () {
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
			return self.modal_periodo_unidades.close ();
		}));
	});},
	get _definir_unidade () {return __get__ (this, function (self, el) {
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
		var unidade = element.parent ().parent ().parent ().data ('unidade');
		var nova_data = element.val ();
		var formdata = new FormData ();
		formdata.append ('data_inicial', nova_data);
		formdata.append ('unidade', unidade);
		if (self.id_escola === null || self.id_escola === undefined) {
			window.PhanterPWA.PUT ('api', 'calendario', 'unidade', self.ano_letivo, __kwargtrans__ ({form_data: formdata, onComplete: self.after_get_definir_unidade}));
		}
		else {
			window.PhanterPWA.PUT ('api', 'calendario', 'unidade', self.ano_letivo, self.id_escola, __kwargtrans__ ({form_data: formdata, onComplete: self.after_get_definir_unidade}));
		}
	});},
	get after_get_definir_unidade () {return __get__ (this, function (self, data, ajax_status) {
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
			self.periodo_unidades = json.periodo_unidades;
			self.xml_modal_unidade ();
		}
	});}
});

//# sourceMappingURL=handlers.calendarios.map