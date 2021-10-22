// Transcrypt'ed from Python, 2021-08-16 10:08:39
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as preloaders from './phanterpwa.frontend.preloaders.js';
import * as modal from './phanterpwa.frontend.components.modal.js';
import * as forms from './phanterpwa.frontend.forms.js';
import * as decorators from './phanterpwa.frontend.decorators.js';
import * as left_bar from './phanterpwa.frontend.components.left_bar.js';
import * as widgets from './phanterpwa.frontend.components.widgets.js';
import * as validations from './phanterpwa.frontend.validations.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
import * as gatehandler from './phanterpwa.frontend.gatehandler.js';
var __name__ = 'handlers.excepcional';
export var CONCATENATE = helpers.CONCATENATE;
export var OPTION = helpers.XmlConstructor.tagger ('option');
export var SELECT = helpers.XmlConstructor.tagger ('select');
export var DIV = helpers.XmlConstructor.tagger ('div');
export var I = helpers.XmlConstructor.tagger ('i');
export var SPAN = helpers.XmlConstructor.tagger ('span');
export var P = helpers.XmlConstructor.tagger ('p');
export var H2 = helpers.XmlConstructor.tagger ('h2');
export var H3 = helpers.XmlConstructor.tagger ('h3');
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
		return window.PhanterPWA.logged ();
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
		self.requires_login = true;
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('ACESSO EXCEPCIONAL', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-excepcional', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		self.arg0 = self.request.get_arg (0);
		self.arg1 = self.request.get_arg (1);
		self.arg2 = self.request.get_arg (2);
		if (str (self.arg0).isdigit () && str (self.arg1).isdigit () && window.PhanterPWA.logged ()) {
			self.checar_conta ();
		}
	}));},
	get checar_conta () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'excepcional', 'checagem-inicial', __kwargtrans__ ({onComplete: self.depois_da_checagem_inicial}));
	});},
	get depois_da_checagem_inicial () {return __get__ (this, function (self, data, ajax_status) {
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
			if (data.status == 202) {
				window.PhanterPWA.update_auth_user ();
			}
		}
		var logo_principal = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.arg0);
		self.form_excepcional = forms.Form (data.responseJSON.funcionarios);
		var html = DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo_principal})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (H2 ('LINK DE VINCULAÇÃO EXCEPCIONAL DE PROFESSORES'), P ('Senhor(a) professor(a), este link irá tentar vincular esta sua conta', STRONG (' (', window.PhanterPWA.get_auth_user ().email, ')'), '  com o cadastro de funcionários, então é de suma importância', ' seu preenchimento com as devidas informações solicitadas.'), P ('O preenchimento de alguns campos são obrigatórios, se o campo apresentar a indicação ', I (__kwargtrans__ ({_class: 'fas fa-check'})), ' na cor verde, significa que o presente dado é válido, mesmo estando vazio, se estiver na cor cinza', ' significa que é necessário preencher com um dado válido.'), __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_excepcional'})), __kwargtrans__ ({_class: 'p-row'})), self.form_excepcional, __kwargtrans__ ({_class: 'p-row'}));
		html.html_to ('#content-excepcional');
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
		var botao = $ ('#phanterpwa-widget-form-submit_button-funcionarios');
		botao.off ('click.enviar_pre_excepcional').on ('click.enviar_pre_excepcional', (function __lambda__ () {
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
			return self.submit_nome_e_cpf (this);
		}));
		window.PhanterPWA.Request.widgets ['funcionarios-naturalidades'].set_on_click_new_button (self.modal_add_naturalidade);
	});},
	get submit_nome_e_cpf () {return __get__ (this, function (self, el) {
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
		if (!($ (el) [0].hasAttribute ('disabled'))) {
			var form_funcionario = $ ('#form-funcionarios') [0];
			var form_funcionario = new FormData (form_funcionario);
			window.PhanterPWA.POST ('api', 'excepcional', 'formulario', self.arg0, self.arg1, __kwargtrans__ ({form_data: form_funcionario, onComplete: self.depois_de_enviar_nome_e_cpf}));
		}
	});},
	get depois_de_enviar_nome_e_cpf () {return __get__ (this, function (self, data, ajax_status) {
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
			self.id_funcionario = 'novo';
			if (str (data.responseJSON.data.funcionarios.id).isdigit ()) {
				self.id_funcionario = data.responseJSON.data.funcionarios.id;
			}
			self.form_meus_dados = forms.Form (data.responseJSON.data.funcionarios, __kwargtrans__ ({label_submit: 'Atualizar dados'}));
			self.form_meus_dados.extra_button ('deixar_pra_depois', 'Deixar pra depois');
			var logo_principal = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.arg0);
			var html = DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo_principal})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (H2 ('ATUALIZAÇÃO/COMPLEMENTAÇÃO DO DADOS'), P ('Senhor(a) professor(a), estes dados serão adicionadas em sua ficha funcional, porém se desejar', ' deixar seu preenchimento para depois é só clicar lá na parte inferior em ', STRONG ('Deixar pra depois')), __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_excepcional'})), __kwargtrans__ ({_class: 'p-row'})), self.form_meus_dados, __kwargtrans__ ({_class: 'p-row'}));
			html.html_to ('#content-excepcional');
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
			self.binds ();
		}
		else if (data.status == 400) {
			if (data.responseJSON.errors !== undefined) {
				console.log (data.responseJSON.errors);
				var errors = dict (data.responseJSON.errors);
				for (var x of errors.py_keys ()) {
					var target = $ ('#phanterpwa-widget-nome_e_cpf-{0}'.format (x));
					target.find ('.phanterpwa-widget-message_error').text (data.responseJSON.errors [x]);
					target.find ('.phanterpwa-widget-wrapper').addClass ('has_error');
				}
			}
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
		$ ('#phanterpwa-widget-form-form_button-deixar_pra_depois').off ('click.deixar_pra_depois_funcionarios_').on ('click.deixar_pra_depois_funcionarios_', (function __lambda__ () {
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
			return window.PhanterPWA.open_way ('area-do-servidor');
		}));
		window.PhanterPWA.Request.widgets ['funcionarios-naturalidades'].set_on_click_new_button (self.modal_add_naturalidade);
		window.PhanterPWA.Request.widgets ['funcionarios-cidades'].set_on_click_new_button (self.modal_add_cidade);
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
				window.PhanterPWA.ApiServer.POST (__kwargtrans__ (dict ({'url_args': ['api', 'excepcional', self.arg0, self.arg1], 'form_data': form_funcionario, 'onComplete': self.after_submit})));
			}
			else if (str (self.id_funcionario).isdigit ()) {
				window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'excepcional', self.arg0, self.arg1, self.id_funcionario], 'form_data': form_funcionario, 'onComplete': self.after_submit})));
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
		self.form_meus_dados.process_api_response (data);
		if (ajax_status == 'success') {
			window.PhanterPWA.open_way ('area-do-servidor');
		}
		else {
			forms.SignForm ('#form-funcionarios');
		}
	});}
});

//# sourceMappingURL=handlers.excepcional.map