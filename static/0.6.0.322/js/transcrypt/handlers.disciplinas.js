// Transcrypt'ed from Python, 2022-04-05 08:18:09
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
var __name__ = 'handlers.disciplinas';
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
export var LABEL = helpers.XmlConstructor.tagger ('label');
export var P = helpers.XmlConstructor.tagger ('p');
export var TH = helpers.XmlConstructor.tagger ('th');
export var TD = helpers.XmlConstructor.tagger ('td');
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var I18N = helpers.I18N;
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
		return window.PhanterPWA.auth_user_has_role (['administrator', 'root', 'Administrador Master SME', 'Administrador Master Escola', 'Coordena????o SME']);
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('DISCIPLINAS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-disciplinas', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		var arg0 = window.PhanterPWA.Request.get_arg (0);
		var arg1 = window.PhanterPWA.Request.get_arg (1);
		if (arg0 === null || arg0 === undefined) {
			var html = escolas.EscolherEscola (__kwargtrans__ ({id_target: '#content-disciplinas', callback_link: (function __lambda__ (id_escola) {
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
				return '#_phanterpwa:/disciplinas/{0}'.format (id_escola);
			})}));
		}
		else if (str (arg0).isdigit () && (arg1 === null || arg1 === undefined)) {
			var html = anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({id_target: '#content-disciplinas', callback_link: (function __lambda__ (ano) {
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
				return '#_phanterpwa:/disciplinas/{0}/{1}'.format (arg0, ano);
			})}));
		}
		else if (str (arg0).isdigit () && str (arg1).isdigit ()) {
			self.Disciplinas = Disciplinas (self, arg0, arg1);
		}
		var BackButton1 = left_bar.LeftBarButton ('back_disciplinas', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': '#_phanterpwa:/area-do-servidor', 'position': 'top', 'show_if': (function __lambda__ () {
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
			return (window.PhanterPWA.get_current_way () == 'disciplinas/{0}/{1}'.format (arg0, arg1) ? true : false);
		})})));
		var BackButton2 = left_bar.LeftBarButton ('back_disciplinas_lista', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': '#_phanterpwa:/disciplinas/{0}/{1}'.format (arg0, arg1), 'position': 'top', 'show_if': (function __lambda__ () {
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
			return (window.PhanterPWA.get_current_way () == 'disciplinas/{0}/{1}/lista'.format (arg0, arg1) ? true : false);
		})})));
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton2);
	}));}
});
export var Disciplinas =  __class__ ('Disciplinas', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, escola, ano_letivo, prosseguir) {
		if (typeof prosseguir == 'undefined' || (prosseguir != null && prosseguir.hasOwnProperty ("__kwargtrans__"))) {;
			var prosseguir = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
						case 'escola': var escola = __allkwargs0__ [__attrib0__]; break;
						case 'ano_letivo': var ano_letivo = __allkwargs0__ [__attrib0__]; break;
						case 'prosseguir': var prosseguir = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.prosseguir = prosseguir;
		self.id_escola = escola;
		self.ano_letivo = ano_letivo;
		self.index_instance = index_instance;
		helpers.XmlConstructor.__init__ (self, 'div', false, self.initial_xml (), __kwargtrans__ ({_class: 'lista_de_disciplinas'}));
		self._get_disciplinas ();
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('DISCIPLINAS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-disciplinas', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		return html;
	});},
	get escolha_de_disciplinas_xml () {return __get__ (this, function (self) {
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
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.id_escola);
		var html = DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (H2 ('ADICIONE EM CADA S??RIE AS DISCIPLINAS OFERTADAS PELA SUA UNIDADE DE ENSINO', ' NO ANO LETIVO DE ', STRONG (self.ano_letivo)), P ('Para adicionar uma nova disciplina, basta clicar no bot??o ', I (__kwargtrans__ ({_class: 'fas fa-plus'})), '. Para mudar a ordem basta arrastar a disciplina na posi????o desejada.'), P ('Muitas s??ries possuem disciplinas id??nticas, voc?? pode copiar e colar todas as disciplinas', ' utilizando os bot??es ', I (__kwargtrans__ ({_class: 'fas fa-copy'})), ' (para copiar) e ', I (__kwargtrans__ ({_class: 'fas fa-paste'})), ' (para colar).'), __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_disciplinas'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'series-disciplinas-container'}));
		if (self.lista_de_series !== undefined) {
			for (var s of self.lista_de_series) {
				html.append (DIV (self.xml_card (s), __kwargtrans__ ({_id: 'serie_e_disciplinas_{0}'.format (s.id)})));
			}
			html.html_to ('#content-disciplinas');
			self.binds_escolha_de_disciplinas ();
		}
	});},
	get xml_card () {return __get__ (this, function (self, data_serie) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data_serie': var data_serie = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var table = XTABLE ('disciplinas-table', XTRH ('disciplinas-table-head', 'Disciplina', TH ('Abrevia????o', __kwargtrans__ ({_style: 'text-align: center;'})), TH ('Carga Hor??ria', __kwargtrans__ ({_style: 'text-align: center;'})), TH ('Di??rio de Notas?', __kwargtrans__ ({_style: 'text-align: center;'})), TH ('Base Nacional Comum?', __kwargtrans__ ({_style: 'text-align: center;'})), TH (__kwargtrans__ ({_style: 'width: 40px;'}))));
		var cont_disc = 0;
		for (var x of data_serie.disciplinas) {
			cont_disc++;
			var bas_nas = (x.base_nacional === true ? I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:green;'})) : I (__kwargtrans__ ({_class: 'fas fa-times-circle', _style: 'color: red;'})));
			var diario_de_notas = (x.diario_de_notas === true ? I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:green;'})) : I (__kwargtrans__ ({_class: 'fas fa-times-circle', _style: 'color: red;'})));
			table.append (XTRD ('disciplina-table-data-{0}'.format (x.id), x.disciplina, TD (x.abreviacao, __kwargtrans__ ({_style: 'text-align: center;'})), TD (x.cargahoraria, __kwargtrans__ ({_style: 'text-align: center;'})), TD (diario_de_notas, __kwargtrans__ ({_style: 'text-align: center;'})), TD (bas_nas, __kwargtrans__ ({_style: 'text-align: center;'})), widgets.MenuBox ('drop_{0}'.format (x.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Editar', __kwargtrans__ (dict ({'_class': 'botao_editar_disciplina wave_on_click', '_data-id_disciplina': x.id, '_data-disciplina': x.disciplina, '_data-abreviacao': x.abreviacao, '_data-cargahoraria': x.cargahoraria, '_data-diariodenotas': x.diario_de_notas, '_data-basenacionalcomum': x.base_nacional, '_data-id_serie': data_serie.id}))), widgets.MenuOption ('Deletar', __kwargtrans__ (dict ({'_class': 'botao_deletar_disciplina wave_on_click', '_data-id_disciplina': x.id, '_data-id_serie': data_serie.id}))), __kwargtrans__ (dict ({'onOpen': (function __lambda__ () {
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
				return self.binds_escolha_de_disciplinas ();
			})}))), __kwargtrans__ (dict ({'drag_and_drop': true, 'after_drop': self.after_drop, '_class': 'linha_serie_disciplina', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_serie': x.series, '_data-id_disciplina': x.id}))));
		}
		var disciplinas_copiadas = sessionStorage.getItem ('disciplinas_copiadas');
		var disabled = 'disabled';
		if (disciplinas_copiadas !== undefined && disciplinas_copiadas !== null) {
			var disabled = null;
		}
		if (cont_disc == 0) {
			var table = DIV ('N??O H?? DISCIPLINAS CADASTRADAS NESTA TURMA', __kwargtrans__ ({_style: 'color: red; padding: 50px 0; text-align: center;'}));
		}
		var card = DIV (LABEL (data_serie.serie, __kwargtrans__ ({_for: 'phanterpwa-card-panel-control-{0}'.format (data_serie.id)})), DIV (DIV (DIV (DIV (table, __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-plus'})), __kwargtrans__ (dict ({'_class': 'botao_nova_serie icon_button', '_title': 'Adicione uma nova disciplina', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_serie': data_serie.id}))), DIV (I (__kwargtrans__ ({_class: 'fas fa-copy'})), __kwargtrans__ (dict ({'_class': 'botao_copiar icon_button', '_title': 'Copie as disciplinas', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_serie': data_serie.id}))), DIV (I (__kwargtrans__ ({_class: 'fas fa-paste'})), __kwargtrans__ (dict ({'_class': 'botao_colar icon_button', '_title': 'Cole as disciplinas copiadas', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_serie': data_serie.id, '_disabled': disabled}))), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper has_buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), DIV (__kwargtrans__ ({_id: 'modal_disciplina_case'})), __kwargtrans__ ({_id: 'phanterpwa-card-panel-control-{0}'.format (data_serie.id), _class: 'phanterpwa-card-panel-control'}));
		return card;
	});},
	get binds_escolha_de_disciplinas () {return __get__ (this, function (self) {
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
		$ ('.botao_nova_serie').off ('click.nova_disciplinas').on ('click.nova_disciplinas', (function __lambda__ () {
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
			return self.modal_add_disciplina (this, 'novo');
		}));
		$ ('.botao_editar_disciplina').off ('click.editar_disciplinas').on ('click.editar_disciplinas', (function __lambda__ () {
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
			return self.modal_add_disciplina (this, 'editar');
		}));
		$ ('.botao_deletar_disciplina').off ('click.deletar_disciplinas').on ('click.deletar_disciplinas', (function __lambda__ () {
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
			return self.deletar_disciplina (this);
		}));
		$ ('.linha_serie_disciplina');
		$ ('.botao_copiar').off ('click.copiar_disciplinas').on ('click.copiar_disciplinas', (function __lambda__ () {
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
			return self.copiar_dados (this);
		}));
		$ ('.botao_colar').off ('click.colar_disciplinas').on ('click.colar_disciplinas', (function __lambda__ () {
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
			return self.colar_dados (this);
		}));
	});},
	get deletar_disciplina () {return __get__ (this, function (self, widget_instance) {
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
		var id_serie = $ (widget_instance).data ('id_serie');
		var id_disciplina = $ (widget_instance).data ('id_disciplina');
		window.PhanterPWA.ApiServer.DELETE (__kwargtrans__ (dict ({'url_args': ['api', 'disciplinas', self.id_escola, self.ano_letivo, 'disciplina', id_disciplina], 'onComplete': (function __lambda__ (data, ajax_status) {
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
			return self.update_serie (data, ajax_status, id_serie);
		})})));
	});},
	get modal_add_disciplina () {return __get__ (this, function (self, widget_instance, action) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'widget_instance': var widget_instance = __allkwargs0__ [__attrib0__]; break;
						case 'action': var action = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var id_serie = $ (widget_instance).data ('id_serie');
		var data_set = self.data_set_disciplinas;
		var extra_field = '';
		var disciplina_field = forms.FormWidget ('disciplina', 'nome_disciplina', __kwargtrans__ (dict ({'value': disciplina, 'default': disciplina, 'label': 'Disciplina', 'type': 'select', 'validators': ['IS_NOT_EMPTY'], 'editable': true, 'form': 'disciplina', 'data_set': data_set, '_class': 'p-col w1p100'})));
		var disciplina = '';
		var abreviacao = '';
		var cargahoraria = '';
		var basenacionalcomum = false;
		var label_sub = 'Adicionar';
		var titulo_mod = 'Adicionar Nova Disciplina';
		if (action == 'editar') {
			var label_sub = 'Salvar Altera????o';
			var id_disciplina = $ (widget_instance).data ('id_disciplina');
			var disciplina = $ (widget_instance).data ('disciplina');
			var abreviacao = $ (widget_instance).data ('abreviacao');
			var cargahoraria = $ (widget_instance).data ('cargahoraria');
			var diariodenotas = $ (widget_instance).data ('diariodenotas');
			var basenacionalcomum = $ (widget_instance).data ('basenacionalcomum');
			var titulo_mod = 'Editar Disciplina "{0}"'.format (disciplina);
			if (basenacionalcomum == 'true' || basenacionalcomum === true) {
				var basenacionalcomum = true;
			}
			else {
				var basenacionalcomum = false;
			}
			if (diariodenotas == 'true' || diariodenotas === true) {
				var diariodenotas = true;
			}
			else {
				var diariodenotas = false;
			}
			var extra_field = forms.FormWidget ('disciplina', 'id', __kwargtrans__ (dict ({'value': id_disciplina, 'label': 'id', 'type': 'string', 'kind': 'hidden', 'form': 'disciplina', '_placeholder': 'id', '_class': 'p-col w1p100 w3p50 e-display_hidden'})));
			var disciplina_field = forms.FormWidget ('disciplina', 'nome_disciplina', __kwargtrans__ (dict ({'value': disciplina, 'default': disciplina, 'label': 'Disciplina', 'type': 'string', 'validators': ['IS_NOT_EMPTY'], 'form': 'disciplina', '_class': 'p-col w1p100'})));
		}
		var content = DIV (extra_field, disciplina_field, forms.FormWidget ('disciplina', 'abreviacao', __kwargtrans__ (dict ({'value': abreviacao, 'label': 'Abrevia????o', 'type': 'string', 'form': 'disciplina', '_placeholder': 'Disciplina abreviada', '_class': 'p-col w1p100 w3p50'}))), forms.FormWidget ('disciplina', 'carga_horaria', __kwargtrans__ (dict ({'value': cargahoraria, 'label': 'Carga Hor??ria', 'type': 'string', 'form': 'disciplina', '_placeholder': 'Carga Hor??ria', '_class': 'p-col w1p100 w3p50'}))), forms.FormWidget ('disciplina', 'diario_de_notas', __kwargtrans__ (dict ({'label': 'Faz parte do di??rio de notas?', 'type': 'boolean', 'value': diariodenotas, 'form': 'disciplina', '_class': 'p-col w1p100 w3p50'}))), forms.FormWidget ('disciplina', 'base_nacional_comum', __kwargtrans__ (dict ({'label': 'Base Nascional Comum?', 'type': 'boolean', 'value': basenacionalcomum, 'form': 'disciplina', '_class': 'p-col w1p100 w3p50'}))), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.SubmitButton ('disciplina', label_sub, __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_disciplina = modal.Modal ('#modal_disciplina_case', __kwargtrans__ (dict ({'title': titulo_mod, 'content': content, 'footer': footer, 'form': 'disciplina'})));
		self.modal_disciplina.open ();
		$ ('#phanterpwa-widget-form-submit_button-disciplina').off ('click.adicionar_disciplina').on ('click.adicionar_disciplina', (function __lambda__ () {
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
			return self._on_click_add_disciplina (widget_instance, action);
		}));
		forms.SignForm ('#form-disciplina', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-disciplina');
		})}));
	});},
	get _on_click_add_disciplina () {return __get__ (this, function (self, widget_instance, action) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'widget_instance': var widget_instance = __allkwargs0__ [__attrib0__]; break;
						case 'action': var action = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var id_serie = $ (widget_instance).data ('id_serie');
		var form_disciplina = $ ('#form-disciplina') [0];
		var form_disciplina = new FormData (form_disciplina);
		if (action == 'editar') {
			window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'disciplinas', self.id_escola, self.ano_letivo, 'editar', id_serie], 'form_data': form_disciplina, 'onComplete': (function __lambda__ (data, ajax_status) {
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
				return self.update_serie (data, ajax_status, id_serie);
			})})));
		}
		else {
			window.PhanterPWA.ApiServer.POST (__kwargtrans__ (dict ({'url_args': ['api', 'disciplinas', self.id_escola, self.ano_letivo, 'novo', id_serie], 'form_data': form_disciplina, 'onComplete': (function __lambda__ (data, ajax_status) {
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
				return self.update_serie (data, ajax_status, id_serie);
			})})));
		}
		self.modal_disciplina.close ();
	});},
	get after_drop () {return __get__ (this, function (self, ev, el) {
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
		var lista_ordem = list ();
		var id_serie = $ (el).data ('id_serie');
		$ ('#serie_e_disciplinas_{0}'.format (id_serie)).find ('.phanterpwa-widget-table-data').each ((function __lambda__ () {
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
			return lista_ordem.append ($ (this).data ('id_disciplina'));
		}));
		window.PhanterPWA.GET ('api', 'signforms', 'phanterpwa-form-disciplina', __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.depois_de_assinar_ordenacao (data, ajax_status, id_serie, lista_ordem);
		})}));
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
			if (window.PhanterPWA.Request.get_arg (2) == 'lista') {
				self.lista_xml (json);
			}
			else {
				self.lista_de_series = json.data.lista_de_series;
				self.data_set_disciplinas = json.data.data_set_disciplinas;
				self.escolha_de_disciplinas_xml ();
			}
		}
	});},
	get _get_disciplinas () {return __get__ (this, function (self) {
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
		window.PhanterPWA.ApiServer.GET ('api', 'disciplinas', self.id_escola, self.ano_letivo, __kwargtrans__ ({onComplete: self.after_get}));
	});},
	get submit () {return __get__ (this, function (self) {
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
		var formdata = new FormData ();
		var csrf_token = $ ('#phanterpwa-widget-input-input-disciplinas-csrf_token').val ();
		formdata.append ('csrf_token', csrf_token);
		formdata.append ('disciplinas', JSON.stringify (window.PhanterPWA.Request.widgets ['lista_de_disciplinas_escola_ano'].value ()));
		window.PhanterPWA.ApiServer.POST (__kwargtrans__ (dict ({'url_args': ['api', 'disciplinas', self.id_escola, self.ano_letivo], 'form_data': formdata, 'onComplete': self.after_post})));
	});},
	get copiar_dados () {return __get__ (this, function (self, el) {
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
		var id_serie = $ (el).data ('id_serie');
		var dados = [];
		var linhas = $ ("tr[data-id_serie='{0}']".format (id_serie)).each ((function __lambda__ () {
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
			return dados.append ($ (this).data ('id_disciplina'));
		}));
		$ ('.botao_colar').removeAttr ('disabled');
		sessionStorage.setItem ('disciplinas_copiadas', JSON.stringify (dados));
		window.PhanterPWA.flash (__kwargtrans__ ({html: STRONG ('Disciplinas copiadas!')}));
	});},
	get colar_dados () {return __get__ (this, function (self, el) {
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
		var id_serie = $ (el).data ('id_serie');
		if (!($ (el) [0].hasAttribute ('disabled'))) {
			var disciplinas_copiadas = sessionStorage.getItem ('disciplinas_copiadas');
			if (disciplinas_copiadas !== undefined && disciplinas_copiadas !== null) {
				window.PhanterPWA.GET ('api', 'signforms', 'phanterpwa-form-disciplina', __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
					return self.depois_de_assinar (data, ajax_status, id_serie, disciplinas_copiadas);
				})}));
			}
		}
	});},
	get update_serie () {return __get__ (this, function (self, data, ajax_status, id_serie, json) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'ajax_status': var ajax_status = __allkwargs0__ [__attrib0__]; break;
						case 'id_serie': var id_serie = __allkwargs0__ [__attrib0__]; break;
						case 'json': var json = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var json = data.responseJSON;
		if (ajax_status == 'success') {
			var card = self.xml_card (json.data_serie);
			card.html_to ('#serie_e_disciplinas_{0}'.format (id_serie));
			self.binds_escolha_de_disciplinas ();
		}
	});},
	get depois_de_assinar () {return __get__ (this, function (self, data, ajax_status, id_serie, disciplinas_copiadas) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'ajax_status': var ajax_status = __allkwargs0__ [__attrib0__]; break;
						case 'id_serie': var id_serie = __allkwargs0__ [__attrib0__]; break;
						case 'disciplinas_copiadas': var disciplinas_copiadas = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var json = data.responseJSON;
		if (ajax_status == 'success') {
			var formdata = new FormData ();
			formdata.append ('csrf_token', json.csrf);
			formdata.append ('disciplinas', JSON.stringify (disciplinas_copiadas));
			window.PhanterPWA.ApiServer.POST (__kwargtrans__ (dict ({'url_args': ['api', 'disciplinas', self.id_escola, self.ano_letivo, 'colar', id_serie], 'form_data': formdata, 'onComplete': (function __lambda__ (data, ajax_status) {
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
				return self.update_serie (data, ajax_status, id_serie);
			})})));
		}
	});},
	get depois_de_assinar_ordenacao () {return __get__ (this, function (self, data, ajax_status, id_serie, disciplinas_copiadas) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'ajax_status': var ajax_status = __allkwargs0__ [__attrib0__]; break;
						case 'id_serie': var id_serie = __allkwargs0__ [__attrib0__]; break;
						case 'disciplinas_copiadas': var disciplinas_copiadas = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var json = data.responseJSON;
		if (ajax_status == 'success') {
			var formdata = new FormData ();
			formdata.append ('csrf_token', json.csrf);
			formdata.append ('disciplinas', JSON.stringify (disciplinas_copiadas));
			window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'disciplinas', self.id_escola, self.ano_letivo, 'ordenar', id_serie], 'form_data': formdata, 'onComplete': (function __lambda__ (data, ajax_status) {
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
				return self.update_serie (data, ajax_status, id_serie);
			})})));
		}
	});}
});

//# sourceMappingURL=handlers.disciplinas.map