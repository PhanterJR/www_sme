// Transcrypt'ed from Python, 2022-04-05 08:18:12
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as alunos from './handlers.alunos.js';
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
var __name__ = 'handlers.matricular';
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('MATRICULAR ALUNO(A)', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-painel-matricular', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		if (arg0 === null || arg0 === undefined) {
			var html = escolas.EscolherEscola (__kwargtrans__ ({id_target: '#content-painel-matricular', callback_link: (function __lambda__ (id_escola) {
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
				return '#_phanterpwa:/matricular/{0}'.format (id_escola);
			})}));
		}
		else if (str (arg0).isdigit () && (arg1 === null || arg1 === undefined)) {
			var html = anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({id_target: '#content-painel-matricular', callback_link: (function __lambda__ (ano) {
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
				return '#_phanterpwa:/matricular/{0}/{1}'.format (arg0, ano);
			})}));
		}
		else if (str (arg0).isdigit () && str (arg1).isdigit ()) {
			if (str (arg2).isdigit ()) {
				self.matricula = Matricula (self, arg0, arg1, arg2);
			}
			else if (arg2 == 'aluno-conferido' && str (arg3).isdigit ()) {
				self.matricula = Matricula (self, arg0, arg1, arg2, arg3);
			}
			else {
				self.procurarAluno = ProcurarAluno (self, arg0, arg1);
			}
		}
	}));}
});
export var ProcurarAluno =  __class__ ('ProcurarAluno', [object], {
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
		self.id_escola = id_escola;
		self.ano_letivo = ano_letivo;
		self.index_instance = index_instance;
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.id_escola);
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('LOCALIZAR O REGISTRO DO(A) ALUNO(A)', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (P ('Para matricular um aluno, é necessário tentar localizar o registro dele pra aproveitar esses dados e evitar duplicação.', ' Você pode tentar localizar digitando parte do nome do aluno, porém aconselha-se a digitar o nome completo, pois se', ' o aluno não tiver cadastro algum com o nome adicionado um novo registro poderá ser criado já com o nome digitado.'), P ('Para pesquisar, depois de digitar o nome é só clicar em ', I (__kwargtrans__ ({_class: 'fab fa-sistrix'})), '.'), P ('Caso o aluno procurado não seja localizado aparecerá a opção de criar um novo registro.'), __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), DIV (H2 ('DIGITE O NOME COMPLETO DO(A) ALUNO(A)'), DIV (widgets.Autocomplete ('search_matriculas', __kwargtrans__ ({label: 'Nome do aluno completo', placeholder: 'Nome do aluno completo', ajax_data_set: 'api/aluno/autocomplete', icon: I (__kwargtrans__ ({_class: 'fab fa-sistrix'})), icon_on_click: (function __lambda__ () {
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
		})})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ ({_id: 'search_matriculas', _class: 'form-search_matriculas'})), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), DIV (__kwargtrans__ ({_id: 'lista-matriculas-subtitle', _class: 'phanterpwa-subtitle'})), DIV (__kwargtrans__ ({_id: 'lista-matriculas-container', _class: 'phanterpwa_tables_container'})), __kwargtrans__ ({_class: 'matriculas-container phanterpwa-card-container'})), __kwargtrans__ ({_id: 'content-localizar_registro_aluno', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		self.binds ();
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
		$ ('.escolher_aluno').off ('click.linha_matricular_matricula').on ('click.linha_matricular_matricula', (function __lambda__ () {
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
			return self._pre_clicagem (this);
		}));
		$ ('#phanterpwa-widget-autocomplete-input-search_matriculas').off ('keyup.search_matricula_matricula').on ('keyup.search_matricula_matricula', self._onkeyup);
		$ ('#phanterpwa-widget-search_matriculas').find ('.phanterpwa-widget-icon-wrapper').off ('click.search_matricula_matricula').on ('click.search_matricula_matricula', (function __lambda__ () {
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
		}));
	});},
	get _pre_clicagem () {return __get__ (this, function (self, el) {
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
		window.PhanterPWA.open_way ('matricula/{0}/{1}/{2}'.format ($ (el).parent ().data ('id_aluno'), self.id_escola, self.ano_letivo));
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
		if (key == 13 || key == 9) {
			var value = $ ('#phanterpwa-widget-autocomplete-input-search_matriculas').val ();
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
			if (json.matriculas === null) {
				window.PhanterPWA.open_way ('matriculas/novo');
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
		var sorted_field = widgets ['matriculas-table-head'].sorted_field ();
		self._get_data_search (__kwargtrans__ ({search: search, field: 'aluno', orderby: sorted_field [0], py_sort: sorted_field [1], page: page}));
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
		self._get_data_search (__kwargtrans__ ({search: search, field: 'aluno', orderby: sorted_field [0], py_sort: sorted_field [1], page: page}));
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
			var matriculas = json.alunos;
			var aluno_procurado = PhanterPWA.get_widget ('search_matriculas').value ();
			var params = '';
			if (aluno_procurado != '') {
				var jsdict = {'aluno': aluno_procurado};
				var params = '?{0}'.format ($.param (jsdict));
			}
			$ ('#lista-matriculas-subtitle').html (CONCATENATE (P ('FORAM LOCALIZADOS OS SEGUINTES REGISTROS ABAIXO, SE O ALUNO A SER MATRICULADO NÃO É NENHUM DOS REGISTROS ABAIXO ', A (BUTTON ('CLIQUE AQUI', __kwargtrans__ ({_class: 'btn btn-autoresize btn-inline'})), __kwargtrans__ ({_href: '#_phanterpwa:/alunos/novo/matricular/{0}/{1}{2}'.format (self.id_escola, self.ano_letivo, params)})), ' PARA FAZER UM NOVO REGISTRO. CASO ESTEJA LISTADO ABAIXO É SÓ', ' CLICAR SOBRE ELE.')).jquery ());
			var table = XTABLE ('matriculas-table', XTRH ('matriculas-table-head', ...matriculas.searcher.data_set, ['matriculas', 'Matrículas'], __kwargtrans__ ({sort_by: matriculas.searcher.sort_by, sort_order: matriculas.searcher.sort_order, sortable: matriculas.searcher.sortable, on_click_sortable: self._on_sort})));
			if (matriculas.data !== undefined) {
				for (var x of matriculas.data) {
					var data_de_nascimento_formated = '';
					if (x.data_nasc !== null && x.data_nasc !== undefined) {
						var data_de_nascimento_formated = validations.format_iso_date_datetime (x.data_nasc, 'dd/MM/yyyy', 'date');
					}
					var vars_matricula = {'matricula': x.aluno, 'nome_da_mae': x.nome_da_mae};
					var vars_serialized = $.param (vars_matricula);
					var bot_menus = [];
					for (var m of x.matriculas) {
						bot_menus.append (widgets.MenuOption ('{0} - {1}'.format (m.ano_letivo, m.abreviacao), __kwargtrans__ (dict ({'_class': 'botao_matriculas_aluno wave_on_click', '_title': m.nome_escola, '_href': '#_phanterpwa:/matricula/{0}/{1}/{2}/editar/{3}'.format (x.id, m.id_escola, m.ano_letivo, m.id)}))));
					}
					var html_menus = widgets.MenuBox ('quant_matris_{0}'.format (x.id), I (x.total_matriculas, __kwargtrans__ ({_class: 'phanterpwa-icon_numb'})), ...bot_menus, __kwargtrans__ (dict ({'_class': 'borda_color_botao_icone'})));
					table.append (XTRD ('matriculas-table-data-{0}'.format (x.id), TD (x.id, __kwargtrans__ ({_class: 'escolher_aluno'})), TD (x.aluno, __kwargtrans__ ({_class: 'escolher_aluno'})), TD (data_de_nascimento_formated, __kwargtrans__ ({_class: 'escolher_aluno'})), TD (x.nome_do_pai, __kwargtrans__ ({_class: 'escolher_aluno'})), TD (x.nome_da_mae, __kwargtrans__ ({_class: 'escolher_aluno'})), html_menus, __kwargtrans__ (dict ({'drag_and_drop': false, '_class': 'linha_matricular_matricula link', '_data-id_aluno': x.id}))));
				}
				table.append (XFOOTER ('matriculas-table-footer', __kwargtrans__ ({page: matriculas.searcher.page, total_pages: matriculas.searcher.total_pages, on_click_page: self._on_page})));
			}
			table.html_to ('#lista-matriculas-container');
			self.binds ();
		}
	});},
	get _get_data_search () {return __get__ (this, function (self, search, field, orderby, py_sort, page) {
		if (typeof search == 'undefined' || (search != null && search.hasOwnProperty ("__kwargtrans__"))) {;
			var search = '';
		};
		if (typeof field == 'undefined' || (field != null && field.hasOwnProperty ("__kwargtrans__"))) {;
			var field = 'matricula';
		};
		if (typeof orderby == 'undefined' || (orderby != null && orderby.hasOwnProperty ("__kwargtrans__"))) {;
			var orderby = 'matricula';
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
		window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'alunos'], 'url_vars': dict ({'search': search, 'field': field, 'orderby': orderby, 'sort': py_sort, 'page': page}), 'onComplete': self.after_get, 'get_cache': self.process_data})));
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
		self._get_data_search (__kwargtrans__ ({search: search, field: 'aluno', orderby: 'aluno', py_sort: 'asc', page: 1}));
	});}
});
export var Matricula =  __class__ ('Matricula', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, id_escola, ano_letivo, id_aluno_ou_action, id_aluno, arg4, arg5) {
		if (typeof id_aluno == 'undefined' || (id_aluno != null && id_aluno.hasOwnProperty ("__kwargtrans__"))) {;
			var id_aluno = null;
		};
		if (typeof arg4 == 'undefined' || (arg4 != null && arg4.hasOwnProperty ("__kwargtrans__"))) {;
			var arg4 = null;
		};
		if (typeof arg5 == 'undefined' || (arg5 != null && arg5.hasOwnProperty ("__kwargtrans__"))) {;
			var arg5 = null;
		};
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
						case 'id_aluno_ou_action': var id_aluno_ou_action = __allkwargs0__ [__attrib0__]; break;
						case 'id_aluno': var id_aluno = __allkwargs0__ [__attrib0__]; break;
						case 'arg4': var arg4 = __allkwargs0__ [__attrib0__]; break;
						case 'arg5': var arg5 = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.index_instance = index_instance;
		self.id_escola = id_escola;
		self.ano_letivo = ano_letivo;
		self.id_aluno_ou_action = id_aluno_ou_action;
		self.id_aluno = id_aluno;
		self.arg4 = arg4;
		self.arg5 = arg5;
		if (self.id_aluno_ou_action == 'editar' || self.id_aluno_ou_action == 'novo') {
			window.PhanterPWA.open_way ('alunos/novo/matricula');
		}
		else if (self.id_aluno_ou_action == 'aluno-conferido') {
			self.get_form_matricula ();
		}
		else if (self.id_aluno_ou_action == 'visualizar') {
			self.visualizar (id_matricula, index_instance.request.params);
		}
		else if (str (self.id_aluno_ou_action).isdigit () && str (self.id_escola).isdigit () && str (self.ano_letivo).isdigit ()) {
			self.id_aluno = self.id_aluno_ou_action;
			self.xml_editar_aluno ();
		}
	});},
	get xml_editar_aluno () {return __get__ (this, function (self) {
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
		if (self.arg1 == 'aluno-conferido') {
			self.get_form_matricula (self.arg4);
		}
		else {
			var html = DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (P ('ANTES DE PROSSEGUIR COM A MATRÍCULA DO ALUNO NESTA UNIDADE ESCOLAR ', ', É IMPORTANTE VERIFICAR SE ESTÁ TUDO EM ORDEM COM SEU CADASTRO.'), P ('É IMPORTANTE QUE ESTES DADOS SEJAM ATUALIZADOS, MUITOS DELES SÃO USADOS NA CONFECÇÃO DA DOCUMENTAÇÃO DO ALUNO.', ' JÁ OUTROS SERÃO USADOS EM LEVANTAMENTOS ESTATÍSTICOS.'), __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'formulario_editar_aluno'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ (dict ({'_id': 'matricula-editar-aluno', '_class': 'p-row'}))), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), __kwargtrans__ ({_class: 'series-container phanterpwa-card-container'}));
			html.html_to ('#content-painel-matricular');
			self.alunos = alunos.Aluno (self, self.id_aluno, 'editar', '#formulario_editar_aluno', self.process_data_put);
		}
	});},
	get visualizar () {return __get__ (this, function (self, id_matricula, params) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
						case 'params': var params = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var url_image = '{0}/api/matriculas/{1}/image'.format (window.PhanterPWA.get_api_address (), id_matricula);
		var matricula = params ['matricula'];
		var nome_da_mae = params ['nome_da_mae'];
		var matricula = params ['matricula'];
		var cpf = params ['cpf'];
		var qrcode = params ['qrcode'];
		var rg_string = params ['rg_string'];
		var data_de_nascimento = params ['data_de_nascimento'];
		self._carteira = DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: url_image})), __kwargtrans__ ({_class: 'carteira-image'})), DIV (DIV (DIV (DIV ('NOME', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (matricula, __kwargtrans__ ({_class: 'carteira-data-nome carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p100'})), DIV (DIV (DIV ('NOME DA MÃE', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (nome_da_mae, __kwargtrans__ ({_class: 'carteira-data-nome_da_mae carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p100'})), DIV (DIV (DIV ('MATRÍCULA', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (matricula, __kwargtrans__ ({_class: 'carteira-data-matricula carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p40'})), DIV (DIV (DIV ('CPF', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (cpf, __kwargtrans__ ({_class: 'carteira-data-cpf carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p60'})), DIV (DIV (DIV ('DATA DE NASCIMENTO', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (data_de_nascimento, __kwargtrans__ ({_class: 'carteira-data-data_de_nascimento carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p40'})), DIV (DIV (DIV ('RG', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (rg_string, __kwargtrans__ ({_class: 'carteira-data-rg_string carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p60'})), __kwargtrans__ ({_class: 'carteira-data-container p-row'})), __kwargtrans__ ({_class: 'p-col w1p30'})), DIV (DIV (__kwargtrans__ ({_class: 'carteira-logo'})), DIV (__kwargtrans__ ({_class: 'carteira-qrcode'})), __kwargtrans__ ({_class: 'p-col w1p70'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'carteira_containar'})), __kwargtrans__ ({_class: 'visualizar_matricula_container a4'})), __kwargtrans__ ({_class: 'phanterpwa-media-print'})), __kwargtrans__ ({_class: 'phanterpwa-media-print-container'}));
		self._carteira.html_to ('#content-painel-matricular');
		window.PhanterPWA.LOAD (__kwargtrans__ (dict ({'args': ['loads', 'svg_logo.html'], 'onComplete': (function __lambda__ (data) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return $ ('#content-painel-matricular').find ('.carteira-logo').html (data);
		})})));
		var url = '{0}/api/associado/{1}'.format (window.PhanterPWA.ApiServer.remote_address, qrcode);
		var qrcode = new QRCode ($ ('#content-painel-matricular').find ('.carteira-qrcode') [0], dict ({'text': url, 'width': 125, 'height': 125, 'colorDark': '#000000', 'colorLight': '#ffffff', 'correctLevel': QRCode.CorrectLevel.H}));
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
			if (data.status == 202) {
				if (json.razoes == 'faltam_series') {
					window.PhanterPWA.flash (__kwargtrans__ ({html: I18N ('ATENÇÃO! SUA ESCOLA AINDA NÃO TEM SÉRIES DEFINIDAS')}));
					window.PhanterPWA.open_way ('series/{0}/{1}/matricula/{2}'.format (self.id_escola, self.ano_letivo, self.id_aluno));
				}
			}
			else {
				var json = data.responseJSON;
				self.process_data (json);
			}
		}
	});},
	get process_data_put () {return __get__ (this, function (self, data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var retornar = window.PhanterPWA.Request.get_param ('retornar');
		if (retornar !== null) {
			window.PhanterPWA.open_way (retornar);
		}
		else {
			window.PhanterPWA.open_xway ('matricular', self.id_escola, self.ano_letivo, 'aluno-conferido', self.id_aluno);
		}
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
		self.nova_matricula = true;
		if (json.data.matricula.id !== undefined && json.data.matricula.id !== null) {
			self.nova_matricula = false;
		}
		var sexo = json.data.aluno.sexo;
		var nome_aluno = json.data.aluno.nome;
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.id_escola);
		var ano_letivo = self.ano_letivo;
		var P1 = 'O(A) ALUNO(A) ';
		if (sexo == '1' || sexo == 1 || sexo == 'Masculino') {
			var P1 = 'O ALUNO ';
		}
		else if (sexo == '2' || sexo == 2 || sexo == 'Feminino') {
			var P1 = 'A ALUNA ';
		}
		if (self.nova_matricula) {
			var texto = CONCATENATE (H3 ('Matricula de: ', STRONG (nome_aluno, __kwargtrans__ ({_style: 'color: orange;'}))), P ('AGORA VAMOS CRIAR UMA NOVA MATRÍCULA PARA ', P1, 'NO ANO LETIVO DE ', STRONG (ano_letivo), '.'), P ('OBSERVE QUE ALGUNS DADOS NÃO PODEM SER ALTERADOS (COMO NOME DO ALUNO POR EXEMPLO), PARA ALTERAR ', 'VOCÊ PODE EDITAR A MATRÍCULA POSTERIORMENTE OU VOLTAR A TELA ANTERIOR.'));
		}
		else {
			var texto = CONCATENATE (H3 ('Matricula de: ', STRONG (nome_aluno, __kwargtrans__ ({_style: 'color: orange;'}))), P (P1, 'POSSUI UMA MATRÍCULA NO ANO LETIVO DE ', STRONG (ano_letivo), ', PORTANTO É POSSÍVEL EDITÁ-LA.'), P ('OBSERVE QUE É POSSÍVEL EDITAR CAMPOS QUE ANTES NÃO ERAM POSSÍVEIS, COMO O NOME DO ALUNO, PORÉM', ' ESTA ALTERAÇÃO SÓ TERÁ EFEITO NA MATRÍCULA (ATAS, DIÁRIOS) DESTE ANO LETIVO, OU SEJA, NÃO IRÁ ALTERAR OS DADOS DOS ALUNOS.'));
		}
		var html = DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (texto, __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'formulario_matricula_aluno'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ (dict ({'_id': 'matricula-editar-aluno', '_class': 'p-row'}))), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), __kwargtrans__ ({_class: 'series-container phanterpwa-card-container'}));
		html.html_to ('#content-painel-matricular');
		self.form = forms.Form (json.data.matricula);
		self.form.html_to ('#formulario_matricula_aluno');
		self.binds ();
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
		forms.SignForm ('#form-matriculas', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-matriculas');
		})}));
		$ ('#phanterpwa-widget-form-submit_button-matriculas').off ('click.submit_matriculas_button').on ('click.submit_matriculas_button', (function __lambda__ () {
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
			return self.submit (this);
		}));
	});},
	get get_form_matricula () {return __get__ (this, function (self) {
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
		var id_aluno = self.id_aluno;
		var id_escola = self.id_escola;
		var ano_letivo = self.ano_letivo;
		window.PhanterPWA.GET ('api', 'matricula', id_aluno, id_escola, ano_letivo, __kwargtrans__ ({onComplete: self.after_get}));
	});},
	get submit () {return __get__ (this, function (self, el) {
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
		if ($ (el) [0].hasAttribute ('disabled')) {
			window.PhanterPWA.flash (__kwargtrans__ ({html: I18N ('The form has errors!')}));
		}
		else {
			var form_matricula = $ ('#form-matriculas') [0];
			var form_matricula = new FormData (form_matricula);
			var id_aluno = self.id_aluno;
			var id_escola = self.id_escola;
			var ano_letivo = self.ano_letivo;
			if (self.nova_matricula) {
				window.PhanterPWA.ApiServer.POST (__kwargtrans__ (dict ({'url_args': ['api', 'matricula', id_aluno, id_escola, ano_letivo], 'form_data': form_matricula, 'onComplete': self.after_submit})));
			}
			else {
				window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'matricula', id_aluno, id_escola, ano_letivo], 'form_data': form_matricula, 'onComplete': self.after_submit})));
			}
		}
	});},
	get after_submit () {return __get__ (this, function (self, data, ajax_status) {
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
		self.form.process_api_response (data);
		var json = data.responseJSON;
		if (data.status == 200 && self.nova_matricula) {
			window.PhanterPWA.open_way ('imprimir/matricula/{0}'.format (json.id_matricula));
		}
		else if (data.status == 200) {
			window.PhanterPWA.open_way ('imprimir/matricula/{0}'.format (json.id_matricula));
		}
		else if (data.status == 400) {
			forms.SignForm ('#form-matriculas');
		}
	});}
});

//# sourceMappingURL=handlers.matricular.map