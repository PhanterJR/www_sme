// Transcrypt'ed from Python, 2021-09-29 10:36:47
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as decorators from './phanterpwa.frontend.decorators.js';
import * as preloaders from './phanterpwa.frontend.preloaders.js';
import * as modal from './phanterpwa.frontend.components.modal.js';
import * as forms from './phanterpwa.frontend.forms.js';
import * as fmasks from './phanterpwa.frontend.fmasks.js';
import * as left_bar from './phanterpwa.frontend.components.left_bar.js';
import * as widgets from './phanterpwa.frontend.components.widgets.js';
import * as validations from './phanterpwa.frontend.validations.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
import * as gatehandler from './phanterpwa.frontend.gatehandler.js';
var __name__ = 'handlers.alunos';
export var CONCATENATE = helpers.CONCATENATE;
export var OPTION = helpers.XmlConstructor.tagger ('option');
export var SELECT = helpers.XmlConstructor.tagger ('select');
export var DIV = helpers.XmlConstructor.tagger ('div');
export var I = helpers.XmlConstructor.tagger ('i');
export var A = helpers.XmlConstructor.tagger ('a');
export var SPAN = helpers.XmlConstructor.tagger ('span');
export var FORM = helpers.XmlConstructor.tagger ('form');
export var UL = helpers.XmlConstructor.tagger ('ul');
export var LI = helpers.XmlConstructor.tagger ('li');
export var STRONG = helpers.XmlConstructor.tagger ('strong');
export var IMG = helpers.XmlConstructor.tagger ('img', true);
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var BR = helpers.XmlConstructor.tagger ('br', true);
export var LABEL = helpers.XmlConstructor.tagger ('label');
export var P = helpers.XmlConstructor.tagger ('p');
export var TH = helpers.XmlConstructor.tagger ('th');
export var TD = helpers.XmlConstructor.tagger ('td');
export var TR = helpers.XmlConstructor.tagger ('tr');
export var TABLE = helpers.XmlConstructor.tagger ('table');
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
		var arg0 = self.request.get_arg (0);
		var arg1 = self.request.get_arg (1);
		var arg2 = self.request.get_arg (2);
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('LISTA DE ALUNOS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-alunos', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		if (arg0 !== null) {
			self.Aluno = Aluno (self, arg0, arg1);
			var turma_detalhada = window.PhanterPWA.Request.get_param ('turmas-detalhadas');
			if (turma_detalhada === null) {
				var BackButton = left_bar.LeftBarButton ('back_localizar_alunos', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('alunos'), 'position': 'top', 'show_if_way_match': '^alunos\\/[0-9]{1,}\\/editar\\/.*$'})));
			}
			else {
				var BackButton = left_bar.LeftBarButton ('back_localizar_alunos', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': '/#_phanterpwa:{0}'.format (turma_detalhada), 'position': 'top', 'show_if_way_match': '^alunos\\/[0-9]{1,}\\/editar\\/.*$'})));
			}
		}
		else {
			self.Alunos = Alunos (self);
			self.Alunos.html_to ('#content-alunos');
			self.Alunos._get_data_search ();
			var BackButton = left_bar.LeftBarButton ('back_localizar_alunos', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': '/#_phanterpwa:/area-do-servidor', 'position': 'top', 'show_if': (function __lambda__ () {
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
				return (window.PhanterPWA.get_current_way () == 'alunos' ? true : false);
			})})));
		}
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
	}));}
});
export var Alunos =  __class__ ('Alunos', [helpers.XmlConstructor], {
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
		self.index_instance = index_instance;
		helpers.XmlConstructor.__init__ (self, 'div', false, self.initial_xml (), __kwargtrans__ ({_class: 'lista_de_alunos'}));
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
		var html = DIV (DIV (FORM (DIV (DIV (DIV (widgets.Input ('search_alunos', __kwargtrans__ ({label: 'Localizar Aluno(a)', placeholder: 'Nome ou parte do nome do aluno', icon: I (__kwargtrans__ ({_class: 'fab fa-sistrix'})), icon_on_click: (function __lambda__ () {
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
		})})), __kwargtrans__ ({_id: 'search_alunos_container', _class: 'p-col w1p100 w3p50 w4p75'})), DIV (widgets.Select ('campos_alunos', __kwargtrans__ ({label: 'Campos à pesquisar', placeholder: 'Escolha o Campo', value: 'aluno', data_set: [['id', 'ID'], ['aluno', 'Nome do(a) Aluno(a)'], ['data_nasc', 'Data de Nascimento'], ['nome_do_pai', 'Nome do Pai'], ['nome_da_mae', 'Nome da Mãe']]})), __kwargtrans__ ({_id: 'phanterpwa-input-search_field-alunos', _class: 'p-col w1p100 w3p50 w4p25'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ ({_action: '#', _id: 'search_alunos', _class: 'form-search_alunos', _enctype: 'multipart/form-data', _method: 'post', _autocomplete: 'off'})), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), DIV (__kwargtrans__ ({_id: 'lista-alunos-subtitle', _class: 'phanterpwa-subtitle'})), DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'lista-alunos-container', _class: 'phanterpwa_tables_container'})), DIV (__kwargtrans__ ({_id: 'modal_visualizar_aluno'})), __kwargtrans__ ({_class: 'alunos-container phanterpwa-card-container'}));
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
			console.log (nvalue);
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
		var page = widgets ['alunos-table-footer'].page ();
		var search = widgets ['search_alunos'].value ();
		var field = widgets ['campos_alunos'].value ();
		var sorted_field = widgets ['alunos-table-head'].sorted_field ();
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
		var page = widgets ['alunos-table-footer'].page ();
		var search = widgets ['search_alunos'].value ();
		var field = widgets ['campos_alunos'].value ();
		var sorted_field = widgets ['alunos-table-head'].sorted_field ();
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
			var table = XTABLE ('alunos-table', XTRH ('alunos-table-head', ...alunos.searcher.data_set, ['matriculas', 'Matrículas'], DIV (I (__kwargtrans__ ({_class: 'fas fa-plus'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'alunos/novo', '_class': 'icon_button wave_on_click'}))), __kwargtrans__ ({sort_by: alunos.searcher.sort_by, sort_order: alunos.searcher.sort_order, sortable: alunos.searcher.sortable, on_click_sortable: self._on_sort})));
			if (alunos.data !== undefined) {
				for (var x of alunos.data) {
					var data_de_nascimento_formated = '';
					if (x.data_nasc !== null && x.data_nasc !== undefined) {
						var data_de_nascimento_formated = validations.format_iso_date_datetime (x.data_nasc, 'dd/MM/yyyy', 'date');
					}
					var vars_aluno = {'aluno': x.aluno, 'data_de_nascimento': data_de_nascimento_formated, 'nome_do_pai': x.nome_do_pai, 'nome_da_mae': x.nome_da_mae};
					var vars_serialized = $.param (vars_aluno);
					var ano_letivo = '';
					var id_escola = '';
					if (self.ano_letivo !== null && self.ano_letivo !== undefined) {
						var ano_letivo = '/{0}'.format (self.ano_letivo);
					}
					if (self.escola !== null && self.escola !== undefined) {
						var id_escola = '/{0}'.format (self.escola ['id']);
					}
					var bot_menus = [widgets.MenuOption ('Nova Matricula', __kwargtrans__ (dict ({'_class': 'botao_matricular_aluno wave_on_click', '_title': 'Matricular o aluno', '_href': '#_phanterpwa:/matricula/{0}{1}{2}?{3}'.format (x.id, id_escola, ano_letivo, vars_serialized)})))];
					for (var m of x.matriculas) {
						var m_ano = m.ano_letivo;
						var m_abreviacao = ' - {0}'.format (m.abreviacao);
						var m_serie = '';
						var m_turma = '';
						if (m.serie !== null) {
							var m_serie = ' - {0}'.format (m.serie);
						}
						if (m.turma !== null) {
							var m_turma = ' ({0})'.format (m.turma);
						}
						var mat_info = '{0}{1}{2}{3}'.format (m_ano, m_serie, m_turma, m_abreviacao);
						bot_menus.append (widgets.MenuOption (mat_info, __kwargtrans__ (dict ({'_class': 'botao_matriculas_aluno wave_on_click', '_title': m.nome_escola, '_href': '#_phanterpwa:/matricula/{0}/aluno-conferido/{1}/{2}/'.format (x.id, m.id_escola, m.ano_letivo)}))));
					}
					var html_menus = widgets.MenuBox ('quant_matris_{0}'.format (x.id), I (x.total_matriculas, __kwargtrans__ ({_class: 'phanterpwa-icon_numb'})), ...bot_menus, __kwargtrans__ (dict ({'_class': 'borda_color_botao_icone'})));
					table.append (XTRD ('alunos-table-data-{0}'.format (x.id), x.id, x.aluno, data_de_nascimento_formated, x.nome_do_pai, x.nome_da_mae, html_menus, widgets.MenuBox ('drop_{0}'.format (x.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Visualizar', __kwargtrans__ (dict ({'_class': 'botao_visualizar_aluno wave_on_click', '_data-id_aluno': x.id}))), widgets.MenuOption ('Editar', __kwargtrans__ (dict ({'_class': 'botao_editar_aluno wave_on_click', '_href': '#_phanterpwa:/alunos/{0}/editar'.format (x.id)}))), widgets.MenuOption ('Deletar', __kwargtrans__ (dict ({'_class': 'botao_deletar_aluno wave_on_click', '_data-id_aluno': x.id}))), __kwargtrans__ ({onOpen: (function __lambda__ () {
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
				table.append (XFOOTER ('alunos-table-footer', __kwargtrans__ ({page: alunos.searcher.page, total_pages: alunos.searcher.total_pages, on_click_page: self._on_page})));
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
		$ ('.botao_deletar_aluno').off ('click.botao_deletar_aluno').on ('click.botao_deletar_aluno', (function __lambda__ () {
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
			return self.get_deletar_aluno (this);
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
			var orderby = 'aluno';
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
	get get_deletar_aluno () {return __get__ (this, function (self, widget_instance) {
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
		window.PhanterPWA.DELETE ('api', 'aluno', id_aluno, __kwargtrans__ ({onComplete: self.depois_de_deletar}));
	});},
	get depois_de_deletar () {return __get__ (this, function (self, data, ajax_status) {
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
			if (data.code == 202) {
				window.PhanterPWA.flash (json.message);
			}
			else {
				window.PhanterPWA.flash (json.message);
			}
			window.PhanterPWA.GET (__kwargtrans__ (dict ({'url_args': ['api', 'alunos'], 'url_vars': dict ({'search': self._search, 'field': self._field, 'orderby': self._orderby, 'sort': self._sort, 'page': self._page}), 'onComplete': self.after_get, 'get_cache': self.process_data})));
		}
		else {
			window.PhanterPWA.flash (json.message);
		}
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
	});}
});
export var Aluno =  __class__ ('Aluno', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, id_aluno, action, target, on_submit) {
		if (typeof action == 'undefined' || (action != null && action.hasOwnProperty ("__kwargtrans__"))) {;
			var action = null;
		};
		if (typeof target == 'undefined' || (target != null && target.hasOwnProperty ("__kwargtrans__"))) {;
			var target = '#content-alunos';
		};
		if (typeof on_submit == 'undefined' || (on_submit != null && on_submit.hasOwnProperty ("__kwargtrans__"))) {;
			var on_submit = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
						case 'id_aluno': var id_aluno = __allkwargs0__ [__attrib0__]; break;
						case 'action': var action = __allkwargs0__ [__attrib0__]; break;
						case 'target': var target = __allkwargs0__ [__attrib0__]; break;
						case 'on_submit': var on_submit = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.target = target;
		self.on_submit = on_submit;
		self.id_aluno = id_aluno;
		self.action = action;
		if (action == 'editar' || id_aluno == 'novo') {
			self.get_form_aluno (id_aluno);
		}
		else if (action == 'visualizar') {
			self.visualizar (id_aluno, index_instance.request.params);
		}
	});},
	get modal_add_naturalidade () {return __get__ (this, function (self, widget_instance) {
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
		var data_set = [[1, 'AC'], [2, 'AL'], [3, 'AM'], [4, 'AP'], [5, 'BA'], [6, 'CE'], [7, 'DF'], [8, 'ES'], [9, 'GO'], [10, 'MA'], [11, 'MG'], [12, 'MS'], [13, 'MT'], [14, 'PA'], [15, 'PB'], [16, 'PE'], [17, 'PI'], [18, 'PR'], [19, 'RJ'], [20, 'RN'], [21, 'RO'], [22, 'RR'], [23, 'RS'], [24, 'SC'], [25, 'SE'], [26, 'SP'], [27, 'TO']];
		var content = DIV (forms.FormWidget ('naturalidade', 'cidade', __kwargtrans__ (dict ({'value': '', 'label': 'Cidade', 'type': 'string', 'form': 'naturalidade', '_placeholder': 'Nome da cidade', '_class': 'p-col w1p100 w3p50 w4p75'}))), forms.FormWidget ('naturalidade', 'uf', __kwargtrans__ (dict ({'value': '', 'label': 'UF', 'type': 'select', 'form': 'naturalidade', 'data_set': data_set, '_class': 'p-col w1p100 w3p50 w4p25'}))), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.SubmitButton ('adicionar_naturalidade', 'Adicionar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_naturalidade = modal.Modal (widget_instance.target_selector, __kwargtrans__ (dict ({'title': 'Adicionar Naturalidade', 'content': content, 'footer': footer, 'form': 'naturalidade'})));
		self.modal_naturalidade.open ();
		$ ('#phanterpwa-widget-form-submit_button-adicionar_naturalidade').off ('click.adicionar_naturalidade').on ('click.adicionar_naturalidade', (function __lambda__ () {
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
			return self._on_click_add_naturalidade (widget_instance);
		}));
	});},
	get _on_click_add_naturalidade () {return __get__ (this, function (self, widget_instance) {
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
		var cidade = $ ('#phanterpwa-widget-input-input-naturalidade-cidade').val ();
		var uf = $ ('#phanterpwa-widget-select-input-naturalidade-uf').val ();
		if (cidade !== '' && uf !== '') {
			var value = '{0}/{1}'.format (str (cidade).strip (), str (uf).strip ());
			widget_instance.add_new_value (value);
		}
		self.modal_naturalidade.close ();
	});},
	get modal_add_morada () {return __get__ (this, function (self, widget_instance) {
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
		var content = DIV (forms.FormWidget ('form_morada', 'morada_outro_model', __kwargtrans__ (dict ({'value': '', 'label': 'Nome', 'type': 'string', 'form': 'form_morada', '_placeholder': 'Nome', '_class': 'p-col w1p100 w3p50 w4p75'}))), forms.FormWidget ('form_morada', 'parentesco', __kwargtrans__ (dict ({'value': '', 'label': 'Parentesco', 'type': 'string', 'form': 'form_morada', '_class': 'p-col w1p100 w3p50 w4p25'}))), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.SubmitButton ('confirmar_morada', 'Confirmar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_morada = modal.Modal (widget_instance.target_selector, __kwargtrans__ (dict ({'title': 'Com que o(a) aluno(a) mora?', 'content': content, 'footer': footer, 'form': 'form_morada'})));
		self.modal_morada.open ();
		$ ('#phanterpwa-widget-form-submit_button-confirmar_morada').off ('click.adicionar_morada').on ('click.adicionar_morada', (function __lambda__ () {
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
			return self._on_click_add_morada (widget_instance);
		}));
	});},
	get _on_click_add_morada () {return __get__ (this, function (self, widget_instance) {
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
		var morada_outro_model = $ ('#phanterpwa-widget-input-input-form_morada-morada_outro_model').val ();
		var parentesco = $ ('#phanterpwa-widget-input-input-form_morada-parentesco').val ();
		if (morada_outro_model !== '' && parentesco !== '') {
			var value = '{0} ({1})'.format (morada_outro_model, parentesco);
			widget_instance.add_new_value (value);
		}
		self.modal_morada.close ();
	});},
	get get_form_aluno () {return __get__ (this, function (self) {
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
		if (self.id_aluno == 'novo') {
			window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'aluno', 'novo'], 'onComplete': self.after_get})));
		}
		else if (self.action == 'visualizar') {
			window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'aluno', self.id_aluno, 'visualizar'], 'onComplete': self.visualizar})));
		}
		else {
			window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'aluno', self.id_aluno, 'editar'], 'onComplete': self.after_get})));
		}
	});},
	get visualizar () {return __get__ (this, function (self, id_aluno, params) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_aluno': var id_aluno = __allkwargs0__ [__attrib0__]; break;
						case 'params': var params = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var url_image = '{0}/api/alunos/{1}/image'.format (window.PhanterPWA.get_api_address (), id_aluno);
		var aluno = params ['aluno'];
		var nome_da_mae = params ['nome_da_mae'];
		var matricula = params ['matricula'];
		var cpf = params ['cpf'];
		var qrcode = params ['qrcode'];
		var rg_string = params ['rg_string'];
		var data_de_nascimento = params ['data_de_nascimento'];
		self._carteira = DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: url_image})), __kwargtrans__ ({_class: 'carteira-image'})), DIV (DIV (DIV (DIV ('NOME', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (aluno, __kwargtrans__ ({_class: 'carteira-data-nome carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p100'})), DIV (DIV (DIV ('NOME DA MÃE', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (nome_da_mae, __kwargtrans__ ({_class: 'carteira-data-nome_da_mae carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p100'})), DIV (DIV (DIV ('MATRÍCULA', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (matricula, __kwargtrans__ ({_class: 'carteira-data-matricula carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p40'})), DIV (DIV (DIV ('CPF', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (cpf, __kwargtrans__ ({_class: 'carteira-data-cpf carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p60'})), DIV (DIV (DIV ('DATA DE NASCIMENTO', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (data_de_nascimento, __kwargtrans__ ({_class: 'carteira-data-data_de_nascimento carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p40'})), DIV (DIV (DIV ('RG', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (rg_string, __kwargtrans__ ({_class: 'carteira-data-rg_string carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p60'})), __kwargtrans__ ({_class: 'carteira-data-container p-row'})), __kwargtrans__ ({_class: 'p-col w1p30'})), DIV (DIV (__kwargtrans__ ({_class: 'carteira-logo'})), DIV (__kwargtrans__ ({_class: 'carteira-qrcode'})), __kwargtrans__ ({_class: 'p-col w1p70'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'carteira_containar'})), __kwargtrans__ ({_class: 'visualizar_aluno_container a4'})), __kwargtrans__ ({_class: 'phanterpwa-media-print'})), __kwargtrans__ ({_class: 'phanterpwa-media-print-container'}));
		self._carteira.html_to ('#content-alunos');
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
			return $ ('#content-alunos').find ('.carteira-logo').html (data);
		})})));
		var url = '{0}/api/associado/{1}'.format (window.PhanterPWA.ApiServer.remote_address, qrcode);
		var qrcode = new QRCode ($ ('#content-alunos').find ('.carteira-qrcode') [0], dict ({'text': url, 'width': 125, 'height': 125, 'colorDark': '#000000', 'colorLight': '#ffffff', 'correctLevel': QRCode.CorrectLevel.H}));
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
			self.process_data (json);
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
		self.form = forms.Form (json.data.alunos);
		self.form.html_to (self.target);
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
		forms.SignForm ('#form-alunos', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-alunos');
		})}));
		$ ('#phanterpwa-widget-form-submit_button-alunos').off ('click.submit_alunos_button').on ('click.submit_alunos_button', (function __lambda__ () {
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
		$ ('#phanterpwa-widget-select-input-alunos-escolaridade_mae_ensino').off ('change.escolaridade_incompleta_mae').on ('change.escolaridade_incompleta_mae', (function __lambda__ () {
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
			return self._switch_escolaridade (this, 'alunos-escolaridade_mae_serie');
		}));
		self._switch_escolaridade ($ ('#phanterpwa-widget-select-input-alunos-escolaridade_mae_ensino'), 'alunos-escolaridade_mae_serie');
		$ ('#phanterpwa-widget-select-input-alunos-escolaridade_pai_ensino').off ('change.escolaridade_incompleta_pai').on ('change.escolaridade_incompleta_pai', (function __lambda__ () {
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
			return self._switch_escolaridade (this, 'alunos-escolaridade_pai_serie');
		}));
		self._switch_escolaridade ($ ('#phanterpwa-widget-select-input-alunos-escolaridade_pai_ensino'), 'alunos-escolaridade_pai_serie');
		$ ('#phanterpwa-widget-select-input-alunos-acompanhamento_escolar').off ('change.se_tem_acompanhamento').on ('change.se_tem_acompanhamento', (function __lambda__ () {
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
			return self._switch_sim_ou_nao (this, '.acompanhamento_info');
		}));
		self._switch_sim_ou_nao ($ ('#phanterpwa-widget-select-input-alunos-acompanhamento_escolar'), '.acompanhamento_info');
		$ ('#phanterpwa-widget-select-input-alunos-escolaridade_acompanhamento').off ('change.escolaridade_incompleta_acompanhamento').on ('change.escolaridade_incompleta_acompanhamento', (function __lambda__ () {
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
			return self._switch_escolaridade (this, 'alunos-escolaridade_acompanhamento2');
		}));
		self._switch_escolaridade ($ ('#phanterpwa-widget-select-input-alunos-escolaridade_acompanhamento'), 'alunos-escolaridade_acompanhamento2');
		$ ('#phanterpwa-widget-select-input-alunos-alergia').off ('change.se_tem_alergia').on ('change.se_tem_alergia', (function __lambda__ () {
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
			return self._switch_sim_ou_nao (this, '.alergia_info');
		}));
		self._switch_sim_ou_nao ($ ('#phanterpwa-widget-select-input-alunos-alergia'), '.alergia_info');
		$ ('#phanterpwa-widget-select-input-alunos-deficiencia').off ('change.se_tem_deficiencia').on ('change.se_tem_deficiencia', (function __lambda__ () {
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
			return self._switch_sim_ou_nao (this, '.deficiencia_info');
		}));
		self._switch_sim_ou_nao ($ ('#phanterpwa-widget-select-input-alunos-deficiencia'), '.deficiencia_info');
		$ ('#phanterpwa-widget-select-input-alunos-celular_aluno').off ('change.se_tem_celular_aluno').on ('change.se_tem_celular_aluno', (function __lambda__ () {
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
			return self._switch_sim_ou_nao (this, '.celular_aluno_info');
		}));
		self._switch_sim_ou_nao ($ ('#phanterpwa-widget-select-input-alunos-celular_aluno'), '.celular_aluno_info');
		window.PhanterPWA.get_widget ('alunos-naturalidades').set_on_click_new_button (self.modal_add_naturalidade);
		window.PhanterPWA.get_widget ('alunos-morada_outro').set_on_click_new_button (self.modal_add_morada);
	});},
	get _switch_escolaridade () {return __get__ (this, function (self, el, target) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
						case 'target': var target = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var value = $ (el).val ();
		if (__in__ ('Incompleto', str (value))) {
			window.PhanterPWA.get_widget (target).set_enabled ();
		}
		else {
			window.PhanterPWA.get_widget (target).set_disabled ();
		}
	});},
	get _switch_sim_ou_nao () {return __get__ (this, function (self, el, target) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
						case 'target': var target = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var value = $ (el).val ();
		if (value == 'Sim') {
			$ (target).find ('phanterpwa-widget').slideDown ();
		}
		else {
			$ (target).find ('phanterpwa-widget').slideUp ();
		}
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
			var form_aluno = $ ('#form-alunos') [0];
			var form_aluno = new FormData (form_aluno);
			if (self.id_aluno == 'novo') {
				window.PhanterPWA.ApiServer.POST (__kwargtrans__ (dict ({'url_args': ['api', 'aluno', self.id_aluno], 'form_data': form_aluno, 'onComplete': self.after_submit})));
			}
			else if (self.id_aluno.isdigit ()) {
				window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'aluno', self.id_aluno], 'form_data': form_aluno, 'onComplete': self.after_submit})));
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
		forms.SignForm ('#form-alunos');
		var json = data.responseJSON;
		if (ajax_status == 'success') {
			self.form.process_api_response (data);
			if (callable (self.on_submit)) {
				self.on_submit (data, ajax_status);
			}
			else if (data.status == 200 && self.id_aluno == 'novo') {
				if (self.action == 'matricula') {
					window.PhanterPWA.open_way ('matricula/{0}/aluno-conferido/'.format (json.data.alunos.id));
				}
				else {
					window.PhanterPWA.open_way ('alunos/novo');
				}
			}
			else if (data.status == 200) {
				var turma_detalhada = window.PhanterPWA.Request.get_param ('turmas-detalhadas');
				if (turma_detalhada === null) {
					window.PhanterPWA.open_way ('alunos');
				}
				else {
					window.PhanterPWA.open_way (turma_detalhada);
				}
			}
		}
	});}
});

//# sourceMappingURL=handlers.alunos.map