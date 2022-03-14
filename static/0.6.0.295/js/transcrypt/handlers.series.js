// Transcrypt'ed from Python, 2022-03-14 09:40:02
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
var __name__ = 'handlers.series';
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
export var P = helpers.XmlConstructor.tagger ('p');
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('SÉRIES', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-series', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})), DIV (__kwargtrans__ ({_id: 'modal_series_case'})));
		html.html_to ('#main-container');
		var arg0 = window.PhanterPWA.Request.get_arg (0);
		var arg1 = window.PhanterPWA.Request.get_arg (1);
		if (arg0 === null || arg0 === undefined) {
			var html = escolas.EscolherEscola (__kwargtrans__ ({id_target: '#content-series', callback_link: (function __lambda__ (id_escola) {
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
				return '#_phanterpwa:/series/{0}'.format (id_escola);
			})}));
		}
		else if (str (arg0).isdigit () && (arg1 === null || arg1 === undefined)) {
			var html = anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({id_target: '#content-series', callback_link: (function __lambda__ (ano) {
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
				return '#_phanterpwa:/series/{0}/{1}'.format (arg0, ano);
			})}));
		}
		else if (str (arg0).isdigit () && str (arg1).isdigit ()) {
			self.Series = Series (self, arg0, arg1);
		}
		var BackButton1 = left_bar.LeftBarButton ('back_series', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': '#_phanterpwa:/area-do-servidor', 'position': 'top', 'show_if': (function __lambda__ () {
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
			return (window.PhanterPWA.get_current_way () == 'series/{0}/{1}'.format (arg0, arg1) ? true : false);
		})})));
		var BackButton2 = left_bar.LeftBarButton ('back_series_lista', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': '#_phanterpwa:/series/{0}/{1}'.format (arg0, arg1), 'position': 'top', 'show_if': (function __lambda__ () {
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
			return (window.PhanterPWA.get_current_way () == 'series/{0}/{1}/lista'.format (arg0, arg1) ? true : false);
		})})));
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton2);
	}));}
});
export var Series =  __class__ ('Series', [helpers.XmlConstructor], {
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
		self.serie_anterior = window.PhanterPWA.Request.get_arg (2);
		helpers.XmlConstructor.__init__ (self, 'div', false, self.initial_xml (), __kwargtrans__ ({_class: 'lista_de_series'}));
		self._get_series ();
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('SÉRIES', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-series', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})), DIV (__kwargtrans__ ({_id: 'modal_series_case'})));
		html.html_to ('#main-container');
		return html;
	});},
	get lista_xml () {return __get__ (this, function (self, json) {
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
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.id_escola);
		var html = DIV (DIV (FORM (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (H3 ('NESTE PAINEL É POSSÍVEL MUDAR A ORDEM DE CADA SÉRIE E PERSONALIZAR', ' O NOME DA SÉRIE.'), P ('Tenha em mente que a personalização do nome da série irá afetar como a série será representada nos documentos. Para personalizar basta clicar em ', DIV (I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), __kwargtrans__ ({_style: 'display: inline-block; width: 30px; text-align:center;'})), '.'), P ('Para mudar a ordem basta arrastar à ordem desejada.'), __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'lista_de_series_para_ordenar'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), DIV (DIV (forms.SubmitButton ('ordenar-series', 'Confirmar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'})), __kwargtrans__ ({_class: 'input-field p-col w1p100'})), __kwargtrans__ (dict ({'_phanterpwa-form': 'ordenar-series', '_id': 'sme-ordenar-series', '_class': 'p-row', '_autocomplete': 'off'}))), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), __kwargtrans__ ({_class: 'series-container phanterpwa-card-container'}));
		html.html_to ('#content-series');
		var table = XTABLE ('series-table', XTRH ('series-table-head', 'Ordem', 'Série Personalizada', 'Série Base', 'Idade Base'));
		if (json.data.db !== undefined) {
			var cont = 0;
			for (var x of json.data.db) {
				cont++;
				var serie_base = '';
				if (x.equivalencia !== null && x.equivalencia !== undefined) {
					var serie_base = x.equivalencia.__getslice__ (4, null, 1);
				}
				table.append (XTRD ('series-table-data-{0}'.format (x.id), TD (cont, __kwargtrans__ ({_style: 'text-align: center;'})), TD (x.serie, __kwargtrans__ (dict ({'_id': 'serie_personalizada_{0}'.format (x.id)}))), TD (serie_base, __kwargtrans__ (dict ({'_id': 'serie_base_{0}'.format (x.id)}))), TD (x.idade_base, __kwargtrans__ ({_style: 'text-align: center;'})), widgets.MenuBox ('drop_{0}'.format (x.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Personalizar Série', __kwargtrans__ (dict ({'_class': 'botao_editar_serie wave_on_click', '_data-id_serie': '{0}'.format (x.id), '_data-serie_base': serie_base}))), __kwargtrans__ ({onOpen: (function __lambda__ () {
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
					return self.binds_personalizar_serie ();
				})})), __kwargtrans__ (dict ({'drag_and_drop': true, 'after_drop': self.after_drop, '_data-id_serie': x.id, '_data-serie': x.serie}))));
			}
		}
		table.html_to ('#lista_de_series_para_ordenar');
		self.binds_lista ();
	});},
	get binds_personalizar_serie () {return __get__ (this, function (self) {
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
		var el = $ ('.botao_editar_serie');
		var serie = el.data ('id_serie');
		console.log (serie);
		self.open_modal_personalizar_serie (serie);
	});},
	get open_modal_personalizar_serie () {return __get__ (this, function (self, serie) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'serie': var serie = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var serie_personalizada = $ ('#serie_personalizada_{0}'.format (serie)).text ();
		var serie_base = $ ('#serie_base_{0}'.format (serie)).text ();
		var content = DIV (P ('A série base é ', STRONG (serie_base), ', porem é possível personalizar como esta série base ', 'será exibida, mesmo assim, internamente, esta série será indentificada pela ', STRONG ('série base'), '.', __kwargtrans__ ({_style: 'color: red;'})), forms.FormWidget ('series', 'serie', __kwargtrans__ (dict ({'value': serie_personalizada, 'label': 'Personalizar', 'type': 'string', '_placeholder': 'Disciplina abreviada', '_class': 'p-col w1p100'}))), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.SubmitButton ('series', 'Confirmar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_personalizar_serie = modal.Modal ('#modal_series_case', __kwargtrans__ (dict ({'title': 'Personalizar nome da série', 'content': content, 'footer': footer, 'form': 'disciplina'})));
		self.modal_personalizar_serie.open ();
		$ ('#phanterpwa-widget-form-submit_button-series').off ('click.adicionar_series').on ('click.adicionar_series', (function __lambda__ () {
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
			return self._on_click_personalizar_serie (serie);
		}));
	});},
	get _on_click_personalizar_serie () {return __get__ (this, function (self, serie) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'serie': var serie = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var serie_atual = $ ('#phanterpwa-widget-input-input-series-serie').val ();
		if (serie_atual != '') {
			$ ('#serie_personalizada_{0}'.format (serie)).text (serie_atual);
			self.modal_personalizar_serie.close ();
		}
		else {
			var serie_personalizada = $ ('#serie_personalizada_{0}'.format (serie)).text ();
			if (serie_personalizada == '') {
				var serie_base = $ ('#serie_base_{0}'.format (serie)).text ();
				$ ('#phanterpwa-widget-input-input-series-serie').val (serie_base);
			}
			else {
				$ ('#phanterpwa-widget-input-input-series-serie').val (serie_personalizada);
			}
			$ ('#phanterpwa-widget-input-input-series-serie').focus ();
		}
	});},
	get binds_lista () {return __get__ (this, function (self) {
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
		forms.SignForm ('#sme-ordenar-series');
		$ ('#phanterpwa-widget-form-submit_button-ordenar-series').off ('click.confirmar_ordenar_series').on ('click.confirmar_ordenar_series', (function __lambda__ () {
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
			return self.submit_ordenar ();
		}));
	});},
	get escolha_de_series_xml () {return __get__ (this, function (self, json) {
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
		var series = json.data.series;
		var lista_de_series = json.data.lista_de_series;
		var fixed = json.data.series_fixas;
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.id_escola);
		var titulo = H2 ('ESCOLHA AS SÉRIES/ANOS QUE SÃO OFERTADAS PELA SUA UNIDADE ESCOLAR', ' NO ANO LETIVO DE ', STRONG (self.ano_letivo));
		if (window.PhanterPWA.Request.get_arg (2) == 'matricula') {
			var titulo = H2 (STRONG ('A MATRÍCULA TEVE QUE SER INTERROMPIDA TEMPORARIAMENTE.', __kwargtrans__ ({_style: 'color: red;'})), ' É NECESSÁRIO ADICIONAR SÉRIES ÀS QUAIS OS ALUNOS IRÃO SE MATRICULAR.');
		}
		var botao_extra = '';
		if (json.data.tem_series_anteriores === true && self.serie_anterior === null) {
			var botao_extra = P (STRONG ('Atenção!'), ' Você pode adicionar as séries do ano anterior clicando ', SPAN ('AQUI', __kwargtrans__ (__mergekwargtrans__ ({_class: 'btn btn-autoresize btn-inline link'}, dict ({'_phanterpwa-way': 'series/{0}/{1}/series-do-ano-anterior'.format (self.id_escola, self.ano_letivo)})))), '.');
		}
		var html = DIV (DIV (FORM (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (titulo, P ('As seleções em laranja (se houver) não podem ser modificadas, pois possivelmente', ' já há turmas ou matrículas com estes valores, sua exclusão', ' acarretaria na exclusão das turmas ou matrículas também. Caso sua exclusão seja realmente necessária, fale com o suporte.'), botao_extra, __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), DIV (widgets.ListString ('lista_de_series_escola_ano', __kwargtrans__ ({label: 'Seleção de Séries/Anos', placeholder: 'Escolha uma série/ano abaixo.', value: series, data_set: lista_de_series, editable: false, fixed: fixed})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), DIV (DIV (forms.SubmitButton ('series', 'Confirmar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'})), __kwargtrans__ ({_class: 'input-field p-col w1p100'})), __kwargtrans__ (dict ({'_phanterpwa-form': 'series', '_id': 'sme-series', '_class': 'p-row', '_autocomplete': 'off'}))), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), DIV (__kwargtrans__ ({_id: 'lista-series-subtitle', _class: 'phanterpwa-subtitle'})), DIV (__kwargtrans__ ({_id: 'lista-series-container', _class: 'phanterpwa_tables_container'})), __kwargtrans__ ({_class: 'series-container phanterpwa-card-container'}));
		html.html_to ('#content-series');
		self.binds_escolha_de_series ();
	});},
	get binds_escolha_de_series () {return __get__ (this, function (self) {
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
		forms.SignForm ('#sme-series');
		$ ('#phanterpwa-widget-form-submit_button-series').off ('click.confirmar_series').on ('click.confirmar_series', (function __lambda__ () {
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
			return self.submit ();
		}));
	});},
	get after_post () {return __get__ (this, function (self, data, ajax_status) {
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
			if (window.PhanterPWA.Request.get_arg (2) == 'matricula') {
				window.PhanterPWA.set_push_way ('series/{0}/{1}/lista/matricula/{2}'.format (window.PhanterPWA.Request.get_arg (0), window.PhanterPWA.Request.get_arg (1), window.PhanterPWA.Request.get_arg (3)));
			}
			else {
				window.PhanterPWA.set_push_way ('{0}/lista'.format (window.PhanterPWA.get_current_way ()));
			}
			self.lista_xml (json);
		}
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
		self.lista_ordem = list ();
		$ ('#lista_de_series_para_ordenar').find ('.phanterpwa-widget-table-data').each ((function __lambda__ () {
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
			return self.lista_ordem.append ([$ (this).data ('id_serie'), $ ('#serie_personalizada_{0}'.format ($ (this).data ('id_serie'))).text ()]);
		}));
		console.log (self.lista_ordem);
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
				self.escolha_de_series_xml (json);
			}
		}
	});},
	get after_ordenar () {return __get__ (this, function (self, data, ajax_status) {
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
			if (callable (self.prosseguir)) {
				self.prosseguir (data);
			}
			else if (isinstance (self.prosseguir, str) && self.prosseguir.startswith ('#_phanterpwa:')) {
				window.location = self.prosseguir;
			}
			else if (window.PhanterPWA.Request.get_arg (3) == 'matricula') {
				window.PhanterPWA.open_way ('matricula/{0}/{1}/{2}'.format (window.PhanterPWA.Request.get_arg (4), window.PhanterPWA.Request.get_arg (0), window.PhanterPWA.Request.get_arg (1)));
			}
			else {
				window.location = '#_phanterpwa:/area-do-servidor';
			}
		}
	});},
	get _get_series () {return __get__ (this, function (self) {
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
		var parametros = dict ({});
		if (self.serie_anterior !== null) {
			parametros ['_series_ano_anterior'] = true;
		}
		window.PhanterPWA.ApiServer.GET ('api', 'series', self.id_escola, self.ano_letivo, __kwargtrans__ (__mergekwargtrans__ ({onComplete: self.after_get}, parametros)));
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
		var csrf_token = $ ('#phanterpwa-widget-input-input-series-csrf_token').val ();
		formdata.append ('csrf_token', csrf_token);
		formdata.append ('series', JSON.stringify (window.PhanterPWA.Request.widgets ['lista_de_series_escola_ano'].value ()));
		window.PhanterPWA.ApiServer.POST (__kwargtrans__ (dict ({'url_args': ['api', 'series', self.id_escola, self.ano_letivo], 'form_data': formdata, 'onComplete': self.after_post})));
	});},
	get submit_ordenar () {return __get__ (this, function (self) {
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
		self.after_drop ();
		var formdata = new FormData ();
		var csrf_token = $ ('#phanterpwa-widget-input-input-ordenar-series-csrf_token').val ();
		formdata.append ('csrf_token', csrf_token);
		formdata.append ('ordem', JSON.stringify (self.lista_ordem));
		window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'series', self.id_escola, self.ano_letivo], 'form_data': formdata, 'onComplete': self.after_ordenar})));
	});}
});

//# sourceMappingURL=handlers.series.map