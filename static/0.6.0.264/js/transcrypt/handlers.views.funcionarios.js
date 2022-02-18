// Transcrypt'ed from Python, 2022-01-19 13:43:08
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as forms from './phanterpwa.frontend.forms.js';
import * as modal from './phanterpwa.frontend.components.modal.js';
import * as validations from './phanterpwa.frontend.validations.js';
import * as preloaders from './phanterpwa.frontend.preloaders.js';
import * as widgets from './phanterpwa.frontend.components.widgets.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
var __name__ = 'handlers.views.funcionarios';
export var CONCATENATE = helpers.CONCATENATE;
export var DIV = helpers.XmlConstructor.tagger ('div');
export var I = helpers.XmlConstructor.tagger ('i');
export var A = helpers.XmlConstructor.tagger ('a');
export var FORM = helpers.XmlConstructor.tagger ('form');
export var TD = helpers.XmlConstructor.tagger ('td');
export var P = helpers.XmlConstructor.tagger ('p');
export var STRONG = helpers.XmlConstructor.tagger ('strong');
export var XTABLE = widgets.Table;
export var XTRD = widgets.TableData;
export var XTRH = widgets.TableHead;
export var XFOOTER = widgets.TableFooterPagination;
export var Lista =  __class__ ('Lista', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance) {
		if (typeof index_instance == 'undefined' || (index_instance != null && index_instance.hasOwnProperty ("__kwargtrans__"))) {;
			var index_instance = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('LISTA DE FUNCIONÁRIOS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (FORM (DIV (DIV (DIV (widgets.Input ('search_funcionarios', __kwargtrans__ ({label: 'Localizar funcionario', placeholder: 'Nome ou parte do nome do funcionario', icon: I (__kwargtrans__ ({_class: 'fab fa-sistrix'})), icon_on_click: (function __lambda__ () {
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
		})})), __kwargtrans__ ({_class: 'p-col w1p100 w3p50 w4p75'})), DIV (widgets.Select ('campos_funcionarios', __kwargtrans__ ({label: 'Campos à pesquisar', placeholder: 'Escolha o Campo', value: 'nome_completo', data_set: [['id', 'id'], ['nome_completo', 'Nome do Funcionario'], ['matricula', 'Matrícula'], ['cpf', 'CPF'], ['nome_do_pai', 'Nome do pai'], ['nome_da_mae', 'Nome da mãe']]})), __kwargtrans__ ({_id: 'phanterpwa-input-search_field-funcionarios', _class: 'p-col w1p100 w3p50 w4p25'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ ({_action: '#', _id: 'search_funcionarios', _class: 'form-search_funcionarios', _enctype: 'multipart/form-data', _method: 'post', _autocomplete: 'off'})), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), DIV (__kwargtrans__ ({_id: 'lista-funcionarios-subtitle', _class: 'phanterpwa-subtitle'})), DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'lista-funcionarios-container', _class: 'phanterpwa_tables_container'})), __kwargtrans__ ({_class: 'funcionarios-container phanterpwa-card-container'})), __kwargtrans__ ({_id: 'content-funcionarios', _class: 'p-row card e-padding_20'})), DIV (__kwargtrans__ ({_id: 'modal_visualizar_funcionario'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container expand'})));
		html.html_to ('#main-container');
		self._get_data_search ();
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
		$ ('#phanterpwa-widget-input-input-search_funcionarios').off ('keyup.search_funcionario_vinculo').on ('keyup.search_funcionario_vinculo', self._onkeyup);
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
		if (key == 13) {
			var value = $ ('#phanterpwa-widget-input-input-search_funcionarios').val ();
			if (value !== '') {
				self.search ();
			}
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
			if (json.funcionarios === null) {
				window.PhanterPWA.open_way ('funcionarios/novo');
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
		var page = widgets ['funcionarios-table-footer'].page ();
		var search = widgets ['search_funcionarios'].value ();
		var field = widgets ['campos_funcionarios'].value ();
		var sorted_field = widgets ['funcionarios-table-head'].sorted_field ();
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
		var page = widgets ['funcionarios-table-footer'].page ();
		var search = widgets ['search_funcionarios'].value ();
		var field = widgets ['campos_funcionarios'].value ();
		var sorted_field = widgets ['funcionarios-table-head'].sorted_field ();
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
			var funcionarios = json.funcionarios;
			$ ('#lista-funcionarios-subtitle').text (json.message);
			var new_select_widget = widgets.Select ('campos_funcionarios', __kwargtrans__ ({label: funcionarios.search_fields.label, placeholder: 'Escolha o Campo', value: funcionarios.search_fields.value, data_set: funcionarios.search_fields.data_set}));
			new_select_widget.html_to ('#phanterpwa-input-search_field-funcionarios');
			new_select_widget.reload ();
			var table = XTABLE ('funcionarios-table', XTRH ('funcionarios-table-head', ...funcionarios.searcher.data_set, ['auth_user', 'Tem Conta?'], ['vinculos', 'Vínculos'], DIV (I (__kwargtrans__ ({_class: 'fas fa-plus'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'funcionarios/novo', '_class': 'icon_button wave_on_click'}))), __kwargtrans__ ({sort_by: funcionarios.searcher.sort_by, sort_order: funcionarios.searcher.sort_order, sortable: funcionarios.searcher.sortable, on_click_sortable: self._on_sort})));
			if (funcionarios.data !== undefined) {
				for (var x of funcionarios.data) {
					var html_menus = widgets.MenuBox ('quant_vinculos_{0}'.format (x.id), I ('0', __kwargtrans__ ({_class: 'phanterpwa-icon_numb'})), widgets.MenuOption ('Novo Vínculo', __kwargtrans__ (dict ({'_class': 'botao_vincular_funcionario wave_on_click', '_href': '#_phanterpwa:/vinculos/novo/{0}'.format (x.id)}))), __kwargtrans__ (dict ({'_class': 'borda_color_botao_icone'})));
					if (x.total_vinculos) {
						var bot_menus = [widgets.MenuOption ('Novo Vínculo', __kwargtrans__ (dict ({'_class': 'botao_vincular_funcionario wave_on_click', '_href': '#_phanterpwa:/vinculos/novo/{0}'.format (x.id)})))];
						for (var m of x.vinculos) {
							bot_menus.append (widgets.MenuOption ('{0} - {1}'.format (m.ano_letivo, m.abreviacao_escola), __kwargtrans__ (dict ({'_class': 'botao_vinculos_funcionarios wave_on_click', '_title': '{0} - {1}'.format (m.atribuicoes, m.nome_escola), '_href': '#_phanterpwa:/vinculos/editar/{0}/'.format (m.id_vinculo)}))));
						}
						var html_menus = widgets.MenuBox ('quant_vinculos_{0}'.format (x.id), I (x.total_vinculos, __kwargtrans__ ({_class: 'phanterpwa-icon_numb'})), ...bot_menus, __kwargtrans__ (dict ({'_class': 'borda_color_botao_icone'})));
					}
					var data_de_nascimento_formated = '';
					if (x.data_de_nascimento !== null && x.data_de_nascimento !== undefined) {
						var data_de_nascimento_formated = validations.format_iso_date_datetime (x.data_de_nascimento, 'dd/MM/yyyy', 'date');
					}
					var vars_funcionario = {'funcionario': x.funcionario, 'data_de_nascimento': data_de_nascimento_formated, 'nome_do_pai': x.nome_do_pai, 'nome_da_mae': x.nome_da_mae};
					var vars_serialized = $.param (vars_funcionario);
					var ano_letivo = '';
					var id_escola = '';
					if (self.ano_letivo !== null && self.ano_letivo !== undefined) {
						var ano_letivo = '/{0}'.format (self.ano_letivo);
					}
					if (self.escola !== null && self.escola !== undefined) {
						var id_escola = '/{0}'.format (self.escola ['id']);
					}
					var tem_conta = TD (I (__kwargtrans__ ({_class: 'fas fa-times-circle', _style: 'color: red;'})), __kwargtrans__ ({_style: 'text-align: center;'}));
					if (x.auth_user !== null && x.auth_user !== undefined) {
						var tem_conta = TD (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:green;'})), __kwargtrans__ ({_style: 'text-align: center;'}));
					}
					table.append (XTRD ('funcionarios-table-data-{0}'.format (x.id), x.id, x.nome_completo, data_de_nascimento_formated, x.matricula, x.cpf, x.nome_do_pai, x.nome_da_mae, tem_conta, html_menus, widgets.MenuBox ('drop_{0}'.format (x.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Visualizar', __kwargtrans__ (dict ({'_class': 'botao_visualizar_funcionario wave_on_click', '_data-id_funcionario': x.id}))), widgets.MenuOption ('Editar', __kwargtrans__ (dict ({'_class': 'botao_editar_funcionario wave_on_click', '_href': '#_phanterpwa:/funcionarios/{0}/editar'.format (x.id)}))), __kwargtrans__ ({onOpen: (function __lambda__ () {
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
						return self.binds_menu_funcionario ();
					})})), __kwargtrans__ (dict ({'drag_and_drop': false}))));
				}
				table.append (XFOOTER ('funcionarios-table-footer', __kwargtrans__ ({page: funcionarios.searcher.page, total_pages: funcionarios.searcher.total_pages, on_click_page: self._on_page})));
			}
			table.html_to ('#lista-funcionarios-container');
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
	get binds_menu_funcionario () {return __get__ (this, function (self) {
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
		$ ('.botao_visualizar_funcionario').off ('click.botao_visualizar_funcionario').on ('click.botao_visualizar_funcionario', (function __lambda__ () {
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
			return self.get_visualizar_funcionario (this);
		}));
	});},
	get _get_data_search () {return __get__ (this, function (self, search, field, orderby, py_sort, page) {
		if (typeof search == 'undefined' || (search != null && search.hasOwnProperty ("__kwargtrans__"))) {;
			var search = '';
		};
		if (typeof field == 'undefined' || (field != null && field.hasOwnProperty ("__kwargtrans__"))) {;
			var field = 'nome_completo';
		};
		if (typeof orderby == 'undefined' || (orderby != null && orderby.hasOwnProperty ("__kwargtrans__"))) {;
			var orderby = 'nome_completo';
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
		window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'funcionarios'], 'url_vars': dict ({'search': search, 'field': field, 'orderby': orderby, 'sort': py_sort, 'page': page}), 'onComplete': self.after_get, 'get_cache': self.process_data})));
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
		var search = widgets ['search_funcionarios'].value ();
		var field = widgets ['campos_funcionarios'].value ();
		self._get_data_search (__kwargtrans__ ({search: search, field: field, orderby: field, py_sort: 'asc', page: 1}));
	});},
	get get_visualizar_funcionario () {return __get__ (this, function (self, widget_instance) {
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
		var id_funcionario = $ (widget_instance).data ('id_funcionario');
		window.PhanterPWA.GET ('api', 'funcionario', 'visualizar', id_funcionario, __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.modal_add_funcinario_visualizar (data, ajax_status);
		})}));
	});},
	get modal_add_funcinario_visualizar () {return __get__ (this, function (self, data, ajax_status) {
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
			var html_vinculos = DIV (DIV ('VÍNCULOS DO FUNCIONÁRIO', __kwargtrans__ ({_class: 'p-col w1p100 phanterpwa-widget-form-separator'})), P ('O Funcionário não possui vínculos'), __kwargtrans__ ({_class: 'vinculos-conteudo'}));
			if (json.data.vinculos !== null && json.data.vinculos !== undefined) {
				var html_vinculos = DIV (DIV ('VÍNCULOS DO FUNCIONÁRIO', __kwargtrans__ ({_class: 'p-col w1p100 phanterpwa-widget-form-separator'})), __kwargtrans__ ({_class: 'vinculos-conteudo'}));
				var tabela = XTABLE ('tabela_ficha_individual', XTRH ('tabela_ficha_individual_head', 'Ano Letivo', 'Escola', 'Atribuições', 'Data Limite', 'Autorização'));
				for (var x of json.data.vinculos) {
					var data_limite = '31/12/{0}'.format (x.anos_letivo.ano);
					if (x.vinculos_funcionarios.data_limite !== null && x.vinculos_funcionarios.data_limite !== undefined) {
						var data_limite = validations.format_iso_date_datetime (x.vinculos_funcionarios.data_limite, 'dd/MM/yyyy', 'date');
					}
					tabela.append (XTRD ('tabela_ficha_individual_linhas_{0}'.format (x.vinculos_funcionarios.id), x.anos_letivo.ano, x.escolas.nome, x.profissoes.profissao, data_limite, x.vinculos_funcionarios.autorizacao, __kwargtrans__ (dict ({'drag_and_drop': false}))));
				}
				html_vinculos.append (tabela);
			}
			var content = DIV (forms.Form (json.data.funcionario), html_vinculos, __kwargtrans__ ({_class: 'p-row'}));
			self.modal_visualizar_funcionario = modal.Modal ('#modal_visualizar_funcionario', __kwargtrans__ (dict ({'title': CONCATENATE (DIV ('Visualizar dados do funcionário'), DIV (STRONG (json.data.nome))), 'content': content})));
			self.modal_visualizar_funcionario.open ();
		}
		else {
			window.PhanterPWA.flash ('Não há alunos_visualizar matriculados para a série da turma');
		}
	});}
});

//# sourceMappingURL=handlers.views.funcionarios.map