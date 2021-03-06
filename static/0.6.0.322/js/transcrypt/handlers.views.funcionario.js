// Transcrypt'ed from Python, 2022-01-19 13:43:08
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as preloaders from './phanterpwa.frontend.preloaders.js';
import * as modal from './phanterpwa.frontend.components.modal.js';
import * as forms from './phanterpwa.frontend.forms.js';
import * as widgets from './phanterpwa.frontend.components.widgets.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
var __name__ = 'handlers.views.funcionario';
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
export var I18N = helpers.I18N;
export var XTABLE = widgets.Table;
export var XML = helpers.XML;
export var XTRD = widgets.TableData;
export var XTRH = widgets.TableHead;
export var XFOOTER = widgets.TableFooterPagination;
export var Funcionario =  __class__ ('Funcionario', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, id_funcionario, action) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
						case 'id_funcionario': var id_funcionario = __allkwargs0__ [__attrib0__]; break;
						case 'action': var action = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.id_funcionario = id_funcionario;
		self.action = action;
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('FUNCION??RIOS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('FUNCION??RIO', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-funcionarios', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		if (action == 'editar' || id_funcionario == 'novo') {
			self.get_form_funcionario (id_funcionario);
		}
		if (id_funcionario == 'meus-dados') {
			self.get_form_funcionario (id_funcionario);
		}
		else if (action == 'visualizar') {
			self.visualizar (id_funcionario, index_instance.request.params);
		}
	});},
	get visualizar () {return __get__ (this, function (self, id_funcionario, params) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_funcionario': var id_funcionario = __allkwargs0__ [__attrib0__]; break;
						case 'params': var params = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var url_image = '{0}/api/funcionarios/{1}/image'.format (window.PhanterPWA.get_api_address (), id_funcionario);
		var funcionario = params ['funcionario'];
		var nome_da_mae = params ['nome_da_mae'];
		var matricula = params ['matricula'];
		var cpf = params ['cpf'];
		var qrcode = params ['qrcode'];
		var rg_string = params ['rg_string'];
		var data_de_nascimento = params ['data_de_nascimento'];
		self._carteira = DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: url_image})), __kwargtrans__ ({_class: 'carteira-image'})), DIV (DIV (DIV (DIV ('NOME', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (funcionario, __kwargtrans__ ({_class: 'carteira-data-nome carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p100'})), DIV (DIV (DIV ('NOME DA M??E', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (nome_da_mae, __kwargtrans__ ({_class: 'carteira-data-nome_da_mae carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p100'})), DIV (DIV (DIV ('MATR??CULA', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (matricula, __kwargtrans__ ({_class: 'carteira-data-matricula carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p40'})), DIV (DIV (DIV ('CPF', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (cpf, __kwargtrans__ ({_class: 'carteira-data-cpf carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p60'})), DIV (DIV (DIV ('DATA DE NASCIMENTO', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (data_de_nascimento, __kwargtrans__ ({_class: 'carteira-data-data_de_nascimento carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p40'})), DIV (DIV (DIV ('RG', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (rg_string, __kwargtrans__ ({_class: 'carteira-data-rg_string carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p60'})), __kwargtrans__ ({_class: 'carteira-data-container p-row'})), __kwargtrans__ ({_class: 'p-col w1p30'})), DIV (DIV (__kwargtrans__ ({_class: 'carteira-logo'})), DIV (__kwargtrans__ ({_class: 'carteira-qrcode'})), __kwargtrans__ ({_class: 'p-col w1p70'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'carteira_containar'})), __kwargtrans__ ({_class: 'visualizar_funcionario_container a4'})), __kwargtrans__ ({_class: 'phanterpwa-media-print'})), __kwargtrans__ ({_class: 'phanterpwa-media-print-container'}));
		self._carteira.html_to ('#content-funcionarios');
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
			return $ ('#content-funcionarios').find ('.carteira-logo').html (data);
		})})));
		var url = '{0}/api/associado/{1}'.format (window.PhanterPWA.ApiServer.remote_address, qrcode);
		var qrcode = new QRCode ($ ('#content-funcionarios').find ('.carteira-qrcode') [0], dict ({'text': url, 'width': 125, 'height': 125, 'colorDark': '#000000', 'colorLight': '#ffffff', 'correctLevel': QRCode.CorrectLevel.H}));
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
	get after_get_meus_dados () {return __get__ (this, function (self, data, ajax_status) {
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
			var html = CONCATENATE (DIV (DIV (DIV (DIV ('??REA DO SERVIDOR', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('MEUS DADOS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-funcionarios', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
			html.html_to ('#main-container');
			self.form_meus_dados = forms.Form (json.data.funcionarios);
			self.form_meus_dados.html_to ('#content-funcionarios');
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
		self.form = forms.Form (json.data.funcionarios);
		self.form.html_to ('#content-funcionarios');
		self.binds ();
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
	get modal_add_cidade () {return __get__ (this, function (self, widget_instance) {
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
		var content = DIV (forms.FormWidget ('cidade', 'cidade', __kwargtrans__ (dict ({'value': '', 'label': 'Cidade', 'type': 'string', 'form': 'cidade', '_placeholder': 'Nome da cidade', '_class': 'p-col w1p100 w3p50 w4p75'}))), forms.FormWidget ('cidade', 'uf', __kwargtrans__ (dict ({'value': '', 'label': 'UF', 'type': 'select', 'form': 'cidade', 'data_set': data_set, '_class': 'p-col w1p100 w3p50 w4p25'}))), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.SubmitButton ('adicionar', 'Adicionar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_cidade = modal.Modal (widget_instance.target_selector, __kwargtrans__ (dict ({'title': 'Adicionar Cidade', 'content': content, 'footer': footer, 'form': 'cidade'})));
		self.modal_cidade.open ();
		$ ('#phanterpwa-widget-form-submit_button-adicionar').off ('click.adicionar_cidade').on ('click.adicionar_cidade', (function __lambda__ () {
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
			return self._on_click_add_cidade (widget_instance);
		}));
	});},
	get _on_click_add_cidade () {return __get__ (this, function (self, widget_instance) {
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
		var cidade = $ ('#phanterpwa-widget-input-input-cidade-cidade').val ();
		var uf = $ ('#phanterpwa-widget-select-input-cidade-uf').val ();
		if (cidade !== '' && uf !== '') {
			var value = '{0}/{1}'.format (str (cidade).strip (), str (uf).strip ());
			widget_instance.add_new_value (value);
		}
		self.modal_cidade.close ();
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
		forms.SignForm ('#form-funcionarios', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-funcionarios');
		})}));
		$ ('#phanterpwa-widget-form-submit_button-funcionarios').off ('click.submit_funcionarios_button').on ('click.submit_funcionarios_button', (function __lambda__ () {
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
		window.PhanterPWA.Request.widgets ['funcionarios-naturalidades'].set_on_click_new_button (self.modal_add_naturalidade);
		window.PhanterPWA.Request.widgets ['funcionarios-cidades'].set_on_click_new_button (self.modal_add_cidade);
	});},
	get get_form_funcionario () {return __get__ (this, function (self, id_funcionario) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_funcionario': var id_funcionario = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (id_funcionario == 'meus-dados') {
			window.PhanterPWA.GET ('api', 'funcionario', 'meus-dados', __kwargtrans__ ({onComplete: self.after_get_meus_dados}));
		}
		else {
			window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'funcionario', id_funcionario], 'onComplete': self.after_get, 'get_cache': self.process_data})));
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
			var form_funcionario = $ ('#form-funcionarios') [0];
			var form_funcionario = new FormData (form_funcionario);
			if (self.id_funcionario == 'novo') {
				window.PhanterPWA.ApiServer.POST (__kwargtrans__ (dict ({'url_args': ['api', 'funcionario', self.id_funcionario], 'form_data': form_funcionario, 'onComplete': self.after_submit})));
			}
			else if (self.id_funcionario.isdigit ()) {
				window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'funcionario', self.id_funcionario], 'form_data': form_funcionario, 'onComplete': self.after_submit})));
			}
		}
	});},
	get after_submit () {return __get__ (this, function (self, data) {
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
		forms.SignForm ('#form-funcionarios');
		self.form.process_api_response (data);
		if (data.status == 200 && self.id_funcionario == 'novo') {
			window.PhanterPWA.open_way ('funcionarios/novo');
		}
		else if (data.status == 200) {
			window.PhanterPWA.open_way ('funcionarios');
		}
	});}
});
export var MeusDados =  __class__ ('MeusDados', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, id_funcionario, action) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
						case 'id_funcionario': var id_funcionario = __allkwargs0__ [__attrib0__]; break;
						case 'action': var action = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('??REA DO SERVIDOR', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('MEUS DADOS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-meus-dados', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		self.get_form_funcionario ();
	});},
	get after_get_meus_dados () {return __get__ (this, function (self, data, ajax_status) {
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
			self.form_meus_dados = forms.Form (json.data.funcionarios);
			self.form_meus_dados.html_to ('#content-meus-dados');
		}
	});},
	get get_form_funcionario () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'funcionario', 'meus-dados', __kwargtrans__ ({onComplete: self.after_get_meus_dados}));
	});}
});

//# sourceMappingURL=handlers.views.funcionario.map