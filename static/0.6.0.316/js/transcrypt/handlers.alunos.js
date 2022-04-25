// Transcrypt'ed from Python, 2022-04-20 11:07:26
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as matriculas from './handlers.views.matriculas.js';
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
		var arg0 = self.request.get_arg (0);
		var arg1 = self.request.get_arg (1);
		var arg2 = self.request.get_arg (2);
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('LISTA DE ALUNOS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-alunos', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		if (arg0 !== null) {
			if (arg1 == 'social') {
				self.Social = Social (self, arg0);
			}
			else {
				self.Aluno = Aluno (self, arg0, arg1);
			}
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
			var parametro_ordernar = window.PhanterPWA.Request.get_param ('ordernar', 'aluno');
			if (!__in__ (parametro_ordernar, campos)) {
				var parametro_ordernar = 'aluno';
			}
			var parametro_sentido = window.PhanterPWA.Request.get_param ('sentido', 'asc');
			if (!__in__ (parametro_sentido, ['asc', 'desc'])) {
				var parametro_sentido = 'asc';
			}
			self.Alunos._get_data_search (__kwargtrans__ ({search: str (parametro_valor), field: parametro_campo, orderby: parametro_ordernar, py_sort: parametro_sentido, page: parametro_pagina}));
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
		})})), __kwargtrans__ ({_id: 'search_alunos_container', _class: 'p-col w1p100 w3p50 w4p75'})), DIV (widgets.Select ('campos_alunos', __kwargtrans__ ({label: 'Campos à pesquisar', placeholder: 'Escolha o Campo', value: parametro_campo, data_set: [['id', 'ID'], ['aluno', 'Nome do(a) Aluno(a)'], ['data_nasc', 'Data de Nascimento'], ['nome_do_pai', 'Nome do Pai'], ['nome_da_mae', 'Nome da Mãe']]})), __kwargtrans__ ({_id: 'phanterpwa-input-search_field-alunos', _class: 'p-col w1p100 w3p50 w4p25'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ ({_action: '#', _id: 'search_alunos', _class: 'form-search_alunos', _enctype: 'multipart/form-data', _method: 'post', _autocomplete: 'off'})), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), DIV (__kwargtrans__ ({_id: 'lista-alunos-subtitle', _class: 'phanterpwa-subtitle'})), DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'lista-alunos-container', _class: 'phanterpwa_tables_container'})), DIV (__kwargtrans__ ({_id: 'modal_visualizar_aluno'})), DIV (__kwargtrans__ ({_id: 'modal_visualizar_matricula'})), DIV (__kwargtrans__ ({_id: 'modal_documentos'})), DIV (__kwargtrans__ ({_id: 'modal_deletar_matricula_detalhe_container'})), __kwargtrans__ ({_class: 'alunos-container phanterpwa-card-container'}));
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
						bot_menus.append (widgets.MenuOption (mat_info, __kwargtrans__ (dict ({'_class': 'botao_visualizar_matricula wave_on_click', '_title': m.nome_escola, '_data-id_matricula': m.id}))));
					}
					var html_menus = widgets.MenuBox ('quant_matris_{0}'.format (x.id), I (x.total_matriculas, __kwargtrans__ ({_class: 'phanterpwa-icon_numb'})), ...bot_menus, __kwargtrans__ (dict ({'_class': 'borda_color_botao_icone', 'onOpen': (function __lambda__ () {
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
						return self.binds_menu_matriculas ();
					})})));
					table.append (XTRD ('alunos-table-data-{0}'.format (x.id), x.id, x.aluno, data_de_nascimento_formated, x.nome_do_pai, x.nome_da_mae, html_menus, widgets.MenuBox ('drop_{0}'.format (x.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Visualizar', __kwargtrans__ (dict ({'_class': 'botao_visualizar_aluno wave_on_click', '_data-id_aluno': x.id}))), widgets.MenuOption ('Deletar', __kwargtrans__ (dict ({'_class': 'botao_deletar_aluno wave_on_click', '_data-id_aluno': x.id}))), __kwargtrans__ ({onOpen: (function __lambda__ () {
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
		window.PhanterPWA.set_push_way (window.PhanterPWA._xway ('alunos', __kwargtrans__ ({_valor: search, _campo: field, _pagina: page, _ordernar: orderby, _sentido: py_sort})));
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
			self.modal_visualizar = modal.Modal ('#modal_visualizar_aluno', __kwargtrans__ (dict ({'title': CONCATENATE (DIV ('Visualizar dados do aluno'), DIV (STRONG (json.data.nome))), 'buttons_panel': DIV (A (I (__kwargtrans__ ({_class: 'fas fa-edit'})), __kwargtrans__ ({_class: 'icon_button botao_editar_matricula', _title: 'Editar Dados do Aluno', _href: window.PhanterPWA.XWAY ('alunos', json.data.aluno.id, 'editar')})), A (I (DIV (DIV (SPAN (I (__kwargtrans__ ({_class: 'fas fa-user-graduate'})), __kwargtrans__ ({_class: 'icombine-container-first'})), SPAN (I (__kwargtrans__ ({_class: 'fas fa-edit'})), __kwargtrans__ ({_class: 'icombine-container-last'})), __kwargtrans__ ({_class: 'icombine-container'})), __kwargtrans__ ({_class: 'phanterpwa-snippet-icombine'}))), __kwargtrans__ ({_title: 'Editar Questionário Social', _class: 'icon_button', _href: window.PhanterPWA.XWAY ('alunos', json.data.aluno.id, 'social')}))), 'content': content})));
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
			var now = new Date ().getTime ();
			var card = DIV (matriculas.Visualizar (id_matricula, id_escola, ano_letivo, prof_pai, prof_mae, id_aluno, nome_do_aluno, sexo, data_de_nascimento, nome_do_pai, nome_da_mae, naturalidade, endereco, serie, nome_do_responsavel, data_mat, novato, admitido, unidade_admitido, ano_anterior, serie_ant, resultado_final, resultado_anterior, numero_aluno, turma));
			var botao_deletar_matricula = [];
			if (turma === null) {
				botao_deletar_matricula.append (DIV (I (DIV (DIV (SPAN (I (__kwargtrans__ ({_class: 'fas fa-user-graduate'})), __kwargtrans__ ({_class: 'icombine-container-first'})), SPAN (I (__kwargtrans__ ({_class: 'fas fa-eraser'})), __kwargtrans__ ({_class: 'icombine-container-last'})), __kwargtrans__ ({_class: 'icombine-container'})), __kwargtrans__ ({_class: 'phanterpwa-snippet-icombine'}))), __kwargtrans__ ({_title: 'Cancelar matrícula', _class: 'icon_button botao_deletar_matricula'})));
			}
			self.modal_visualizar_matricula = modal.Modal ('#modal_visualizar_matricula', __kwargtrans__ (dict ({'title': CONCATENATE (DIV ('Visualizar Matrícula ', STRONG (ano_letivo)), DIV (STRONG (json.data.nome_do_aluno))), 'content': card, 'buttons_panel': DIV (A (I (DIV (DIV (SPAN (I (__kwargtrans__ ({_class: 'fas fa-user-graduate'})), __kwargtrans__ ({_class: 'icombine-container-first'})), SPAN (I (__kwargtrans__ ({_class: 'fas fa-plus'})), __kwargtrans__ ({_class: 'icombine-container-last'})), __kwargtrans__ ({_class: 'icombine-container'})), __kwargtrans__ ({_class: 'phanterpwa-snippet-icombine'}))), __kwargtrans__ ({_class: 'icon_button botao_matricular', _title: 'Nova matrícula', _href: window.PhanterPWA.XWAY ('matricula', id_aluno)})), ...botao_deletar_matricula, A (I (__kwargtrans__ ({_class: 'fas fa-edit'})), __kwargtrans__ ({_class: 'icon_button botao_editar_matricula', _title: 'Editar Matrícula', _href: window.PhanterPWA.XWAY ('matricula', id_aluno, id_escola, ano_letivo, 'editar', id_matricula)})), A (I (__kwargtrans__ ({_class: 'fas fa-chalkboard'})), __kwargtrans__ ({_class: 'icon_button botao_turma_matriculado', _title: 'Turma do aluno', _href: window.PhanterPWA.XWAY ('turmas', id_escola, ano_letivo, 'especifico', id_turma)})), DIV (I (__kwargtrans__ ({_class: 'fas fa-print'})), __kwargtrans__ ({_title: 'Imprimir documentos', _class: 'icon_button botao_lista_de_documentos_disponiveis'})))})));
			self.modal_visualizar_matricula.open ();
			self.binds_menu_flutuante (id_escola, ano_letivo, id_turma, id_matricula, id_aluno, nome_do_aluno, resultado_final);
		}
		else {
			window.PhanterPWA.flash ('Não há alunos_visualizar matriculados para a série da turma');
		}
	});},
	get binds_menu_flutuante () {return __get__ (this, function (self, id_escola, ano_letivo, id_turma, id_matricula, id_aluno, nome_do_aluno, resultado_final) {
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
		window.PhanterPWA.DELETE ('api', 'matricula', 'deletar', id_escola, ano_letivo, id_matricula, __kwargtrans__ ({onComplete: self.search_inicial}));
		self.modal_deletar_matricula.close ();
	});},
	get search_inicial () {return __get__ (this, function (self) {
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
		var parametro_pagina = window.PhanterPWA.Request.get_param ('pagina', 1);
		if (!(str (parametro_pagina).isdigit ())) {
			var parametro_pagina = 1;
		}
		var parametro_ordernar = window.PhanterPWA.Request.get_param ('ordernar', 'aluno');
		if (!__in__ (parametro_ordernar, campos)) {
			var parametro_ordernar = 'aluno';
		}
		var parametro_sentido = window.PhanterPWA.Request.get_param ('sentido', 'asc');
		if (!__in__ (parametro_sentido, ['asc', 'desc'])) {
			var parametro_sentido = 'asc';
		}
		self._get_data_search (__kwargtrans__ ({search: str (parametro_valor), field: parametro_campo, orderby: parametro_ordernar, py_sort: parametro_sentido, page: parametro_pagina}));
	});},
	get abrir_modal_desistencia () {return __get__ (this, function (self, id_escola, ano_letivo, id_matricula, quant_unidades, nome_aluno, sexo, des_data) {
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
						case 'quant_unidades': var quant_unidades = __allkwargs0__ [__attrib0__]; break;
						case 'nome_aluno': var nome_aluno = __allkwargs0__ [__attrib0__]; break;
						case 'sexo': var sexo = __allkwargs0__ [__attrib0__]; break;
						case 'des_data': var des_data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
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
		for (var x = 0; x < int (quant_unidades); x++) {
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
			return self._on_click_confirmar_desistencia (id_escola, ano_letivo, id_matricula);
		}));
	});},
	get _on_click_confirmar_desistencia () {return __get__ (this, function (self, id_escola, ano_letivo, id_matricula) {
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
		var formdata = new FormData ();
		formdata.append ('quando_desistiu', $ ('#phanterpwa-widget-select-input-unidade_des').val ());
		window.PhanterPWA.PUT ('api', 'matricula', 'desistencia', id_escola, ano_letivo, id_matricula, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
		}
	});},
	get abrir_modal_transferencia () {return __get__ (this, function (self, id_escola, ano_letivo, id_matricula, quant_unidades, trans_data, nome_aluno, sexo) {
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
						case 'quant_unidades': var quant_unidades = __allkwargs0__ [__attrib0__]; break;
						case 'trans_data': var trans_data = __allkwargs0__ [__attrib0__]; break;
						case 'nome_aluno': var nome_aluno = __allkwargs0__ [__attrib0__]; break;
						case 'sexo': var sexo = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
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
		for (var x = 0; x < int (quant_unidades); x++) {
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
			return self._on_click_confirmar_transferencia (id_escola, ano_letivo, id_matricula);
		}));
	});},
	get _on_click_confirmar_transferencia () {return __get__ (this, function (self, id_escola, ano_letivo, id_matricula) {
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
		var lista_de_resultados_validos = ['Aprovado(a)', 'Reprovado(a)', 'Reprovado(a) - Falta a Recuperação', 'Aprovado(a) no Conselho', 'Reprovado(a) no Conselho', 'Desistente', 'Transferido(a)'];
		var html_botao_declaracao_de_transferencia = '';
		if (__in__ (resultado_final, lista_de_resultados_validos)) {
			var html_botao_declaracao_de_transferencia = A (DIV (I (__kwargtrans__ ({_class: 'fas fa-file-alt'})), __kwargtrans__ ({_class: 'icon_documentos_button'})), DIV ('Declaração de Transferência', __kwargtrans__ ({_class: 'descricao_documentos_button'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'p-col w4p33 w1p50 link'}, dict ({'_href': '/#_phanterpwa:/imprimir/declaracao-de-transferencia/{0}?_retornar=turmas/{1}/{2}/especifico/{3}'.format (id_matricula, id_escola, ano_letivo, id_turma)}))));
		}
		var html_documentos = DIV (A (DIV (I (__kwargtrans__ ({_class: 'fas fa-file-alt'})), __kwargtrans__ ({_class: 'icon_documentos_button'})), DIV ('Matrícula', __kwargtrans__ ({_class: 'descricao_documentos_button'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'p-col w4p33 w1p50 link'}, dict ({'_href': '/#_phanterpwa:/imprimir/matricula/{0}?_retornar=turmas/{1}/{2}/especifico/{3}'.format (id_matricula, id_escola, ano_letivo, id_turma)})))), A (DIV (I (__kwargtrans__ ({_class: 'fas fa-file-alt'})), __kwargtrans__ ({_class: 'icon_documentos_button'})), DIV ('Questionário Social', __kwargtrans__ ({_class: 'descricao_documentos_button'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'p-col w4p34 w1p50 link'}, dict ({'_href': '/#_phanterpwa:/imprimir/questionario-social/{0}/{1}/{2}?_retornar=turmas/{0}/{1}/especifico/{3}'.format (id_escola, ano_letivo, id_turma, id_aluno, id_turma)})))), A (DIV (I (__kwargtrans__ ({_class: 'fas fa-file-alt'})), __kwargtrans__ ({_class: 'icon_documentos_button'})), DIV ('Declaração de Matrícula', __kwargtrans__ ({_class: 'descricao_documentos_button'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'p-col w4p33 w1p50 link'}, dict ({'_href': '/#_phanterpwa:/imprimir/declaracao-de-matricula/{0}?_retornar=turmas/{1}/{2}/especifico/{3}'.format (id_matricula, id_escola, ano_letivo, id_turma)})))), html_botao_declaracao_de_transferencia, A (DIV (I (__kwargtrans__ ({_class: 'fas fa-file-alt'})), __kwargtrans__ ({_class: 'icon_documentos_button'})), DIV ('Ficha Individual', __kwargtrans__ ({_class: 'descricao_documentos_button'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'p-col w4p33 w1p50 link'}, dict ({'_href': '/#_phanterpwa:/imprimir/ficha-individual-do-aluno/{0}?_retornar=turmas/{1}/{2}/detalhado'.format (id_matricula, id_escola, ano_letivo)})))), __kwargtrans__ ({_class: 'p-row documentos_buttons_container'}));
		self.modal_documentos = modal.Modal ('#modal_documentos', __kwargtrans__ (dict ({'title': 'Documentos do(a) aluno(a) {0}'.format (nome_do_aluno), 'content': html_documentos})));
		self.modal_documentos.open ();
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
		self.eh_maior = null;
		self.responsaveis = set ();
		if (self.target == '#content-alunos') {
			var html = CONCATENATE (DIV (DIV (DIV (DIV ('DADOS ALUNO', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_id: 'breadcrumb-alunos', _class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-alunos', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
			html.html_to ('#main-container');
		}
		if (action == 'editar' || id_aluno == 'novo') {
			self.get_form_aluno (id_aluno);
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
	get check_eh_maior () {return __get__ (this, function (self, el) {
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
		var data = $ (el).val ();
		var nre = new RegExp ('[0-9]{2}\\/[0-9]{2}\\/[0-9]{4}');
		var result = str (data).match (nre);
		console.log (result);
		if (result !== null && result !== undefined) {
			var data = '{2}{1}{0}'.format (...data.py_split ('/'));
			window.PhanterPWA.GET ('api', 'aluno', 'eh-maior', data, __kwargtrans__ ({onComplete: self._resposta_se_eh_maior}));
		}
	});},
	get _resposta_se_eh_maior () {return __get__ (this, function (self, data, ajax_status) {
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
			if (data.status == 200) {
				self.eh_maior = true;
				window.PhanterPWA.flash ('O(A) Aluno(a) é maior de idade');
				self.update_responsaveis ();
			}
			else if (data.status == 202) {
				self.eh_maior = false;
			}
		}
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
			var acao = self.action;
			if (self.id_aluno == 'Novo') {
				var acao = 'Novo';
			}
			if (self.target == '#content-alunos') {
				DIV (DIV ('DADOS ALUNO', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV (acao, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})).html_to ('#breadcrumb-alunos');
			}
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
		var aluno = window.PhanterPWA.Request.get_param ('aluno');
		if (aluno !== null) {
			window.PhanterPWA.get_widget ('alunos-aluno').set_value (aluno);
		}
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
			return self.submit_aluno (this);
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
		$ ('#phanterpwa-widget-input-input-alunos-data_nasc').off ('change.data_nasc').on ('change.data_nasc', (function __lambda__ () {
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
			return self.check_eh_maior (this);
		}));
		window.PhanterPWA.get_widget ('alunos-naturalidades').set_on_click_new_button (self.modal_add_naturalidade);
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
		if (window.PhanterPWA.get_widget (target) !== null) {
			var value = $ (el).val ();
			if (__in__ ('Incompleto', str (value))) {
				window.PhanterPWA.get_widget (target).set_enabled ();
			}
			else {
				window.PhanterPWA.get_widget (target).set_disabled ();
			}
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
	get submit_aluno () {return __get__ (this, function (self, el) {
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
				else if (self.action == 'matricular') {
					var id_escola = window.PhanterPWA.Request.get_arg (2);
					var ano_letivo = window.PhanterPWA.Request.get_arg (3);
					window.PhanterPWA.open_way ('matricular/{0}/{1}/aluno-conferido/{2}'.format (id_escola, ano_letivo, json.data.alunos.id));
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
export var Social =  __class__ ('Social', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, id_aluno, target, on_submit) {
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
		self.eh_maior = null;
		self.responsaveis = set ();
		if (self.target == '#content-alunos') {
			var html = CONCATENATE (DIV (DIV (DIV (DIV ('QUESTIONÁRIO SOCIAL', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_id: 'breadcrumb-social', _class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-alunos', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
			html.html_to ('#main-container');
		}
		self.get_form_social (id_aluno);
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
	get check_eh_maior () {return __get__ (this, function (self, el) {
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
		var data = $ (el).val ();
		var nre = new RegExp ('[0-9]{2}\\/[0-9]{2}\\/[0-9]{4}');
		var result = str (data).match (nre);
		console.log (result);
		if (result !== null && result !== undefined) {
			var data = '{2}{1}{0}'.format (...data.py_split ('/'));
			window.PhanterPWA.GET ('api', 'aluno', 'eh-maior', data, __kwargtrans__ ({onComplete: self._resposta_se_eh_maior}));
		}
	});},
	get _resposta_se_eh_maior () {return __get__ (this, function (self, data, ajax_status) {
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
			if (data.status == 200) {
				self.eh_maior = true;
				window.PhanterPWA.flash ('O(A) Aluno(a) é maior de idade');
				self.update_responsaveis ();
			}
			else if (data.status == 202) {
				self.eh_maior = false;
			}
		}
	});},
	get update_responsaveis () {return __get__ (this, function (self) {
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
		self._responsaveis = set ();
		if (self.eh_maior === true) {
			self._responsaveis.add (PhanterPWA.get_widget ('alunos-aluno').value ());
		}
		var nome_do_pai = window.PhanterPWA.get_widget ('alunos-nome_do_pai').value ();
		if (nome_do_pai != '') {
			self._responsaveis.add (nome_do_pai);
		}
		var nome_da_mae = window.PhanterPWA.get_widget ('alunos-nome_da_mae').value ();
		if (nome_da_mae != '') {
			self._responsaveis.add (nome_da_mae);
		}
		self._responsaveis = list (self._responsaveis);
		window.PhanterPWA.get_widget ('alunos-responsavel_legal').set_new_data_set (self._responsaveis);
	});},
	get get_form_social () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'social', self.id_aluno, __kwargtrans__ ({onComplete: self.social}));
	});},
	get social () {return __get__ (this, function (self, data, ajax_status) {
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
			if (self.target == '#content-alunos') {
				DIV (DIV ('QUESTIONÁRIO SOCIAL', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV (json.data.nome_aluno, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})).html_to ('#breadcrumb-social');
			}
			self.process_data_social (json);
		}
	});},
	get process_data_social () {return __get__ (this, function (self, json) {
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
		self.form_social = forms.Form (json.data.social);
		self.form_social.html_to (self.target);
		self.binds_social ();
	});},
	get binds_social () {return __get__ (this, function (self) {
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
		forms.SignForm ('#form-social', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-social');
		})}));
		$ ('#phanterpwa-widget-form-submit_button-social').off ('click.submit_social_button').on ('click.submit_social_button', (function __lambda__ () {
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
			return self.submit_social (this);
		}));
		$ ('#phanterpwa-widget-select-input-social-acompanhamento_escolar').off ('change.se_tem_acompanhamento').on ('change.se_tem_acompanhamento', (function __lambda__ () {
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
		self._switch_sim_ou_nao ($ ('#phanterpwa-widget-select-input-social-acompanhamento_escolar'), '.acompanhamento_info');
		$ ('#phanterpwa-widget-select-input-social-escolaridade_acompanhamento').off ('change.escolaridade_incompleta_acompanhamento').on ('change.escolaridade_incompleta_acompanhamento', (function __lambda__ () {
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
			return self._switch_escolaridade (this, 'social-escolaridade_acompanhamento2');
		}));
		self._switch_escolaridade ($ ('#phanterpwa-widget-select-input-social-escolaridade_acompanhamento'), 'social-escolaridade_acompanhamento2');
		$ ('#phanterpwa-widget-select-input-social-alergia').off ('change.se_tem_alergia').on ('change.se_tem_alergia', (function __lambda__ () {
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
		self._switch_sim_ou_nao ($ ('#phanterpwa-widget-select-input-social-alergia'), '.alergia_info');
		$ ('#phanterpwa-widget-select-input-social-deficiencia').off ('change.se_tem_deficiencia').on ('change.se_tem_deficiencia', (function __lambda__ () {
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
			return tuple ([self._switch_sim_ou_nao (this, '.deficiencia_info'), self._switch_sim_ou_nao (this, '.precisa_acompanhante'), self._switch_sim_ou_nao ($ ('#phanterpwa-widget-select-input-social-precisa_acompanhante'), '.foto_parecer_deficiencia')]);
		}));
		$ ('#phanterpwa-widget-select-input-social-precisa_acompanhante').off ('change.se_tem_deficiencia-precisa_acompanhante').on ('change.se_tem_deficiencia-precisa_acompanhante', (function __lambda__ () {
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
			return self._switch_sim_ou_nao (this, '.foto_parecer_deficiencia');
		}));
		self._switch_sim_ou_nao ($ ('#phanterpwa-widget-select-input-social-deficiencia'), '.deficiencia_info');
		self._switch_sim_ou_nao ($ ('#phanterpwa-widget-select-input-social-deficiencia'), '.precisa_acompanhante');
		self._switch_sim_ou_nao ($ ('#phanterpwa-widget-select-input-social-precisa_acompanhante'), '.foto_parecer_deficiencia');
		$ ('#phanterpwa-widget-select-input-social-celular_aluno').off ('change.se_tem_celular_aluno').on ('change.se_tem_celular_aluno', (function __lambda__ () {
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
		self._switch_sim_ou_nao ($ ('#phanterpwa-widget-select-input-social-celular_aluno'), '.celular_aluno_info');
		$ ('#phanterpwa-widget-select-input-social-alergia').off ('change.se_tem_alergia').on ('change.se_tem_alergia', (function __lambda__ () {
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
		self._switch_sim_ou_nao ($ ('#phanterpwa-widget-select-input-social-alergia'), '.alergia_info');
		$ ('#phanterpwa-widget-checkbox-input-social-transporte_escolar').off ('change.transporte_escolar').on ('change.transporte_escolar', (function __lambda__ () {
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
			return self._switch_detalhe_transporte (this);
		}));
		if ($ ('#phanterpwa-widget-checkbox-input-social-transporte_escolar') [0].checked) {
			$ ('#phanterpwa-widget-wrapper-social-detalhe_transporte').slideDown ();
		}
		else {
			$ ('#phanterpwa-widget-wrapper-social-detalhe_transporte').slideUp ();
		}
		window.PhanterPWA.get_widget ('social-morada_outro').set_on_click_new_button (self.modal_add_morada);
	});},
	get _switch_detalhe_transporte () {return __get__ (this, function (self, el) {
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
		if ($ (el) [0].checked) {
			$ ('#phanterpwa-widget-wrapper-social-detalhe_transporte').slideDown ();
		}
		else {
			$ ('#phanterpwa-widget-wrapper-social-detalhe_transporte').slideUp ();
		}
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
		if (window.PhanterPWA.get_widget (target) !== null) {
			if (__in__ ('Incompleto', str (value))) {
				window.PhanterPWA.get_widget (target).set_enabled ();
			}
			else {
				window.PhanterPWA.get_widget (target).set_disabled ();
			}
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
			$ (target).slideDown ();
		}
		else {
			$ (target).slideUp ();
		}
	});},
	get submit_social () {return __get__ (this, function (self, el) {
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
			var form_social = $ ('#form-social') [0];
			var form_social = new FormData (form_social);
			window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'social', self.id_aluno], 'form_data': form_social, 'onComplete': self.after_submit_social})));
		}
	});},
	get after_submit_social () {return __get__ (this, function (self, data, ajax_status) {
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
		forms.SignForm ('#form-social');
		var json = data.responseJSON;
		if (ajax_status == 'success') {
			self.form_social.process_api_response (data);
			if (callable (self.on_submit)) {
				self.on_submit (data, ajax_status);
			}
			else if (data.status == 200 && self.id_aluno == 'novo') {
				if (self.action == 'matricula') {
					window.PhanterPWA.open_way ('matricula/{0}/aluno-conferido/'.format (json.data.alunos.id));
				}
				else if (self.action == 'matricular') {
					var id_escola = window.PhanterPWA.Request.get_arg (2);
					var ano_letivo = window.PhanterPWA.Request.get_arg (3);
					window.PhanterPWA.open_way ('matricular/{0}/{1}/aluno-conferido/{2}'.format (id_escola, ano_letivo, json.data.alunos.id));
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