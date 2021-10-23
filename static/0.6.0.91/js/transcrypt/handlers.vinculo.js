// Transcrypt'ed from Python, 2021-06-10 10:10:26
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
var __name__ = 'handlers.vinculo';
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
export var H4 = helpers.XmlConstructor.tagger ('h4');
export var H5 = helpers.XmlConstructor.tagger ('h5');
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('VINCULAR', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-vinculo', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		var arg0 = window.PhanterPWA.Request.get_arg (0);
		var arg1 = window.PhanterPWA.Request.get_arg (1);
		var arg2 = window.PhanterPWA.Request.get_arg (2);
		if (self.request.get_arg (0) !== null) {
			self.Vinculo = Vinculo (self, arg0, arg1, arg2);
			var BackButton = left_bar.LeftBarButton ('back_localizar_vinculos', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'vinculos', 'position': 'top', 'ways': [(function __lambda__ (r) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'r': var r = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				return (r.startswith ('vinculos') || r.startswith ('vinculos/') ? true : false);
			})]})));
		}
		else {
			self.ProcurarAluno = ProcurarAluno (self);
			self.ProcurarAluno.html_to ('#content-vinculo');
			self.ProcurarAluno.binds ();
			var BackButton = left_bar.LeftBarButton ('back_localizar_vinculos', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'restrito', 'position': 'top', 'ways': [(function __lambda__ (r) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'r': var r = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				return (r.startswith ('vinculos') || r.startswith ('vinculos/') ? true : false);
			})]})));
		}
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
	}));}
});
export var Vinculo =  __class__ ('Vinculo', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, arg0, arg1, arg2) {
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
		var vars_serialized = '';
		if (self.index_instance.request.js_params !== null && self.index_instance.request.js_params !== undefined) {
			var vars_serialized = '?{0}'.format ($.param (self.index_instance.request.js_params));
		}
		if (arg1 == 'editar' || arg0 == 'novo') {
			self.get_form_vinculo (arg0);
		}
		else if (arg1 == 'visualizar') {
			self.visualizar (id_vinculo, index_instance.request.params);
		}
		else if (str (arg0).isdigit () && (arg1 === null || arg1 === undefined)) {
			var html = escolas.EscolherEscola (__kwargtrans__ ({callback_link: (function __lambda__ (id_escola) {
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
				return '#_phanterpwa:/vinculo/{0}/{1}{2}'.format (self.arg0, id_escola, vars_serialized);
			})}));
			html.html_to ('#content-vinculo');
		}
		else if (str (arg0).isdigit () && str (arg1).isdigit () && (arg2 === null || arg2 === undefined)) {
			var html = anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({callback_link: (function __lambda__ (ano) {
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
				return '#_phanterpwa:/vinculo/{0}/{1}/{2}?{3}'.format (self.arg0, self.arg1, ano, vars_serialized);
			})}));
			html.html_to ('#content-vinculo');
		}
		else if (str (arg0).isdigit () && str (arg1).isdigit () && str (arg2).isdigit ()) {
			self.get_form_vinculo (arg0, arg1, arg2);
		}
	});},
	get lista_de_vinculos () {return __get__ (this, function (self, json) {
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
		console.log (json);
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.arg1);
		var aviso = '';
		if (json.aviso !== null && json.aviso !== undefined) {
			var aviso = H5 (json.aviso, __kwargtrans__ ({_style: 'color:red;'}));
		}
		var table = XTABLE ('lista_de_vinculos-table', XTRH ('lista_de_vinculos-table-head', ...['Nome completo', 'Vinculo Escolar', 'Atribuição'], DIV (I (__kwargtrans__ ({_class: 'fas fa-plus'})), __kwargtrans__ (dict ({'_class': 'icon_button wave_on_click novo_vinculo', '_data-id_funcionario': self.arg0, '_data-id_escola': self.arg1, '_data-ano_letivo': self.arg2})))));
		if (json.data.vinculos !== undefined) {
			var cont_vinculos = 0;
			var cont_escola = 0;
			for (var x of json.data.vinculos) {
				cont_vinculos++;
				var botao_acao = DIV (I (__kwargtrans__ ({_class: 'fas fa-exclamation-circle'})), __kwargtrans__ (dict ({'_href': '#', '_class': 'icon_button wave_on_click', '_disabled': 'disabled'})));
				if (x.autorizado) {
					cont_escola++;
					var botao_acao = DIV (I (__kwargtrans__ ({_class: 'fas fa-edit'})), __kwargtrans__ (dict ({'_class': 'icon_button wave_on_click editar_vinculo_especifico', '_data-id_vinculo': x.id, '_data-id_funcionario': self.arg0, '_data-id_escola': self.arg1, '_data-ano_letivo': self.arg2})));
				}
				table.append (XTRD ('lista_de_vinculos-table-data-{0}'.format (x.id), x.nome_completo, x.nome_da_escola, x.nome_atribuicao, botao_acao, __kwargtrans__ (dict ({'drag_and_drop': false}))));
			}
		}
		if (cont_vinculos == 1 && cont_escola == 1) {
			var titulo = H3 ('O FUNCIONÁRIO JÁ POSSUI UM VÍNCULO NESTA UNIDADE DE ENSINO NO ANO LETIVO ESPECIFICADO.');
		}
		else if (cont_vinculos == 1) {
			var titulo = H3 ('O FUNCIONÁRIO POSSUI UM VÍNCULO EM OUTRA UNIDADE DE ENSINO ANO LETIVO ESPECIFICADO.', ' VOCÊ NÃO TEM AUTORIZAÇÃO DE EDITÁ-LO, PORÉM PODE ADICIONAR UM NOVO VINCULO EM SUA ESCOLA.');
		}
		else {
			var titulo = H3 ('O FUNCIONÁRIO POSSUI OUTROS VÍNCULOS EM OUTRA UNIDADE DE ENSINO NO ANO LETIVO ESPECIFICADO.', ' VOCÊ NÃO TEM AUTORIZAÇÃO DE EDITÁ-LOS, PORÉM PODE ADICIONAR UM NOVO VINCULO EM SUA ESCOLA.');
			if (cont_escola > 0) {
				var titulo = H3 ('O FUNCIONÁRIO POSSUI OUTROS VÍNCULOS EM OUTRA UNIDADE DE ENSINO NO ANO LETIVO ESPECIFICADO.', ' VOCÊ NÃO TEM AUTORIZAÇÃO DE EDITÁ-LOS, PORÉM PODE EDITAR OS VÍNCULOS EXISTENTES DE SUA UNIDADE', ' DE ENSINO OU ADICIONAR UM NOVO VINCULO EM SUA ESCOLA.');
				if (cont_escola == cont_vinculos) {
					var titulo = H3 ('O FUNCIONÁRIO JÁ POSSUI OUTROS VÍNCULOS EM SUA UNIDADE DE ENSINO NO ANO LETIVO ESPECIFICADO.', ' VOCÊ PODE EDITAR OS VÍNCULOS EXISTENTES OU ADICIONAR UM NOVO VINCULO.');
				}
			}
		}
		var html = DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (titulo, __kwargtrans__ ({_class: 'p-col w1p100 w4p70'})), __kwargtrans__ ({_class: 'p-row'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'lista_de_vinculos'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ (dict ({'_id': 'vinculo-funcionario-escola', '_class': 'p-row'}))), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), __kwargtrans__ ({_class: 'series-container phanterpwa-card-container'}));
		html.html_to ('#content-vinculo');
		table.html_to ('#lista_de_vinculos');
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
				self.lista_de_vinculos (json);
			}
			else {
				self.process_data (json);
			}
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
		self.form = forms.Form (json.data.vinculo);
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.arg1);
		var aviso = '';
		if (json.aviso !== null && json.aviso !== undefined) {
			var aviso = H5 (json.aviso, __kwargtrans__ ({_style: 'color:red;'}));
		}
		var titulo = H3 ('CRIANDO UM NOVO VÍNCULO DO FUNCIONÁRIO NESTA UNIDADE DE ENSINO.');
		self.id_vinculo = null;
		if (json.id_vinculo !== null && json.id_vinculo !== undefined) {
			self.id_vinculo = json.id_vinculo;
			var titulo = H3 ('O FUNCIONÁRIO JÁ POSSUI UM VÍNCULO NESTA UNIDADE DE ENSINO NO ANO LETIVO ESPECIFICADO.');
		}
		var html = DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (titulo, H5 ('OBSERVE QUE O VÍNCULO ESTÁ SENDO EFETUADO NO ANO LETIVO DE ', STRONG (self.arg2, __kwargtrans__ ({_style: 'text-style:bold'})), ', CASO ESTE NÃO', ' SEJA O ANO CORRETO ', A ('CLIQUE AQUI.', __kwargtrans__ ({_href: window.PhanterPWA.XWAY ('vinculo', self.arg0, self.arg1), _class: 'btn btn-inline'}))), aviso, __kwargtrans__ ({_class: 'p-col w1p100 w4p70'})), __kwargtrans__ ({_class: 'p-row'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'formulario_vinculo_funcionario'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ (dict ({'_id': 'vinculo-funcionario-escola', '_class': 'p-row'}))), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), __kwargtrans__ ({_class: 'series-container phanterpwa-card-container'}));
		html.html_to ('#content-vinculo');
		self.form.html_to ('#formulario_vinculo_funcionario');
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
		forms.SignForm ('#form-vinculos_funcionarios');
		forms.ValidateForm ('#form-vinculos_funcionarios');
		$ ('#phanterpwa-widget-form-submit_button-vinculos_funcionarios').off ('click.submit_vinculos_button').on ('click.submit_vinculos_button', (function __lambda__ () {
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
	get get_form_vinculo () {return __get__ (this, function (self, id_aluno, id_escola, ano_letivo) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_aluno': var id_aluno = __allkwargs0__ [__attrib0__]; break;
						case 'id_escola': var id_escola = __allkwargs0__ [__attrib0__]; break;
						case 'ano_letivo': var ano_letivo = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'vinculos', id_aluno, id_escola, ano_letivo], 'onComplete': self.after_get, 'get_cache': self.process_data})));
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
			var form_vinculo = $ ('#form-vinculos_funcionarios') [0];
			var form_vinculo = new FormData (form_vinculo);
			if (self.id_vinculo !== null) {
				window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'vinculos', self.arg0, self.arg1, self.arg2], 'form_data': form_vinculo, 'onComplete': self.after_submit})));
			}
			else if (self.arg0.isdigit ()) {
				window.PhanterPWA.ApiServer.POST (__kwargtrans__ (dict ({'url_args': ['api', 'vinculos', self.arg0, self.arg1, self.arg2], 'form_data': form_vinculo, 'onComplete': self.after_submit})));
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
		forms.SignForm ('#form-vinculos_funcionarios');
		self.form.process_api_response (data);
		if (data.status == 200) {
			window.PhanterPWA.open_way ('funcionarios/');
		}
	});}
});

//# sourceMappingURL=handlers.vinculo.map