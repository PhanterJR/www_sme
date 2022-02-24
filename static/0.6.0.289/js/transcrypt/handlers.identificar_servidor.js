// Transcrypt'ed from Python, 2022-01-19 13:43:12
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as decorators from './phanterpwa.frontend.decorators.js';
import * as modal from './phanterpwa.frontend.components.modal.js';
import * as validations from './phanterpwa.frontend.validations.js';
import * as forms from './phanterpwa.frontend.forms.js';
import * as widgets from './phanterpwa.frontend.components.widgets.js';
import * as snippets from './phanterpwa.frontend.components.snippets.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
import * as gatehandler from './phanterpwa.frontend.gatehandler.js';
var __name__ = 'handlers.identificar_servidor';
export var DIV = helpers.XmlConstructor.tagger ('div');
export var I = helpers.XmlConstructor.tagger ('i');
export var H1 = helpers.XmlConstructor.tagger ('h1');
export var H2 = helpers.XmlConstructor.tagger ('h2');
export var H3 = helpers.XmlConstructor.tagger ('h3');
export var P = helpers.XmlConstructor.tagger ('p');
export var A = helpers.XmlConstructor.tagger ('a');
export var IMG = helpers.XmlConstructor.tagger ('img');
export var BUTTON = helpers.XmlConstructor.tagger ('button');
export var STRONG = helpers.XmlConstructor.tagger ('strong');
export var TABLE = helpers.XmlConstructor.tagger ('table');
export var TR = helpers.XmlConstructor.tagger ('tr');
export var TD = helpers.XmlConstructor.tagger ('td');
export var FORM = helpers.XmlConstructor.tagger ('form');
export var SPAN = helpers.XmlConstructor.tagger ('span');
export var BR = helpers.XmlConstructor.tagger ('br', true);
export var HR = helpers.XmlConstructor.tagger ('hr', true);
export var I18N = helpers.I18N;
export var XML = helpers.XML;
export var CONCATENATE = helpers.CONCATENATE;
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
		self.url_image = null;
		self.nome_completo = null;
		self.cpf = null;
		self.sabe_matricula = null;
		self.matricula = null;
		self.data_de_nascimento = null;
		self.data_de_nascimento_iso = null;
		self.nome_da_mae = null;
		self.fazer_alteracoes = false;
		self.fazer_alteracoes2 = false;
		self.telefone_celular = null;
		self.numero_celularfunc = null;
		self.has_whatsapp = false;
		self.nome_usuario = '{0} {1}'.format (window.PhanterPWA.get_auth_user ().first_name, window.PhanterPWA.get_auth_user ().last_name);
		self.foi_identificado = false;
		var texto_inicial = DIV (H1 ('SISTEMA DE IDENTIFICAÇÃO DO SERVIDOR', __kwargtrans__ ({_class: 'phanterpwa-the_title'})), H3 (P ('Bem vindo ao sistema de indentificação do servidor. Nele iremos vincular esta conta ', 'ao seu cadastro de servidor, desta forma poderá acessar seus dados e serviços vinculados ', 'ao seu cadastro. Então para o procedimento alguns dados terão que ser fornecidos, são ', 'eles: ', STRONG ('Nome completo, Data de Nascimento, CPF, Matrícula e Nome da mãe.')), P ('Clique em ', STRONG ('Iniciar'), ' para darmos início ao processo'), DIV (BUTTON ('Iniciar', __kwargtrans__ ({_id: 'iniciar_ava', _class: 'btn wave-on-click'})), __kwargtrans__ ({_class: 'button_container'})), __kwargtrans__ ({_class: 'phanterpwa-the_subtitle'})), __kwargtrans__ ({_id: 'text-inicio'}));
		var dados_localstorage = localStorage.getItem ('identificar-servidor');
		try {
			var dados_localstorage = JSON.parse (dados_localstorage);
		}
		catch (__except0__) {
			var dados_localstorage = null;
		}
		if (dados_localstorage !== undefined && dados_localstorage !== null && window.PhanterPWA.auth_user_has_role (['servidor'])) {
			if (int (dados_localstorage.auth_user) == int (window.PhanterPWA.get_auth_user ().id)) {
				self.foi_identificado = true;
				self.nome_completo = dados_localstorage.nome_completo;
				self.cpf = dados_localstorage.cpf;
				self.sabe_matricula = dados_localstorage.sabe_matricula;
				self.matricula = dados_localstorage.matricula;
				self.data_de_nascimento_iso = dados_localstorage.data_de_nascimento;
				self.data_de_nascimento = dados_localstorage.data_de_nascimento_formatado;
				self.nome_da_mae = dados_localstorage.nome_da_mae;
			}
			else {
				localStorage.removeItem ('identificar-servidor');
				var dados_localstorage = null;
			}
		}
		self.imagem_usuario = $ ('#url_image_user').attr ('src');
		var arbritary_id_menu = window.PhanterPWA.get_id ();
		var arbritary_id_choice = window.PhanterPWA.get_id ();
		var botao_sair = widgets.MenuBox (arbritary_id_menu, I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), DIV ('Sair', __kwargtrans__ ({_id: arbritary_id_choice})), __kwargtrans__ (dict ({'_class': 'icon_button button_sair', 'z_index': 2001, 'onOpen': (function __lambda__ () {
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
			return tuple ([$ ('#{0}'.format (arbritary_id_choice)).on ('click', (function __lambda__ () {
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
				return self._sair ();
			}))]);
		})})));
		var html = DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: '/static/{0}/images/perfil_robo-min.jpg'.format (self.config ['PROJECT'] ['versioning'])})), __kwargtrans__ ({_class: 'background-robo'})), __kwargtrans__ ({_class: 'head-questionario'})), DIV (texto_inicial, __kwargtrans__ ({_id: 'row_content', _class: 'row'})), DIV (__kwargtrans__ ({_class: 'footer-questionario'})), DIV (HR (__kwargtrans__ ({_class: 'separador_servidor'})), DIV (TABLE (TR (TD (SPAN (DIV (IMG (__kwargtrans__ ({_src: self.imagem_usuario})), __kwargtrans__ ({_class: 'servidor_image'})))), TD (SPAN (self.nome_usuario, __kwargtrans__ ({_class: 'servidor_nome'})), __kwargtrans__ ({_id: 'nome_servidor_chat'})), TD (botao_sair))), __kwargtrans__ ({_class: 'servidor_atual_wrapper'})), __kwargtrans__ ({_class: 'servidor_atual'})), __kwargtrans__ ({_id: 'container-questionario', _class: 'container container-questionario'})), __kwargtrans__ ({_id: 'app-content-questionario', _class: 'app-content'}));
		$ ('#app-content-questionario').removeClass ('has_servidor');
		$ ('#main-container').removeClass ('iniciar');
		html.html_to ('#main-container');
		var xml = $ ('#row_content');
		xml.height ($ (window).height () - 280).css ('width', '100%');
		$ (window).resize ((function __lambda__ () {
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
			return xml.css ('min-height', $ (window).height () - 280).css ('width', '100%');
		}));
		self._check_token ();
	}));},
	get _sair () {return __get__ (this, function (self) {
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
		window.PhanterPWA.logout ();
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
		$ ('#iniciar_ava').off ('click.iniciar').on ('click.iniciar', (function __lambda__ () {
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
			return self.etapa1 ();
		}));
	});},
	get _check_token () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET (__kwargtrans__ (dict ({'url_args': ['api', 'auth-servidor'], 'onComplete': self._on_check_token})));
	});},
	get _on_check_token () {return __get__ (this, function (self, data, ajax_status) {
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
				window.PhanterPWA.open_way ('home');
			}
			else if (self.foi_identificado) {
				self.etapa1 ();
			}
			else {
				self.binds ();
			}
		}
		else if (self.foi_identificado) {
			self.etapa1 ();
		}
		else {
			self.binds ();
		}
	});},
	get etapa1 () {return __get__ (this, function (self) {
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
		$ ('#app-content-questionario').removeClass ('etapa2');
		$ ('#text-inicio').fadeOut (500);
		$ ('#main-container').addClass ('iniciar');
		var titulo = CONCATENATE (TABLE (TR (TD ('SISTEMA DE INDENTIFICAÇÃO DE SERVIDORES')), __kwargtrans__ ({_id: 'nome_escola_chat'})), DIV (I (__kwargtrans__ ({_class: 'fas fa-expand'})), __kwargtrans__ ({_class: 'botao_expand'})));
		titulo.append_to ('#container-questionario .head-questionario');
		$ ('#main-container').find ('.botao_expand').off ('click.expand').on ('click.expand', self._expand);
		localStorage.removeItem ('servidor-token');
		self._comeco ();
	});},
	get _expand () {return __get__ (this, function (self) {
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
		var el = $ ('#main-container');
		if (el.hasClass ('expand')) {
			el.removeClass ('expand');
			el.find ('.botao_expand').find ('i').addClass ('fa-expand').removeClass ('fa-compress');
		}
		else {
			el.find ('.botao_expand').find ('i').addClass ('fa-compress').removeClass ('fa-expand');
			el.addClass ('expand');
		}
	});},
	get abreviar_nome () {return __get__ (this, function (self, nome) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'nome': var nome = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var n = nome;
		var n = n.py_split (' ');
		var nome_abreviado = nome;
		if (len (n) > 2) {
			if (len (n [1]) > 3) {
				var nome_abreviado = ' '.join (n.__getslice__ (0, 2, 1));
			}
			else {
				var nome_abreviado = ' '.join (n.__getslice__ (0, 3, 1));
			}
		}
		return nome_abreviado;
	});},
	get _comeco () {return __get__ (this, function (self, alteracao) {
		if (typeof alteracao == 'undefined' || (alteracao != null && alteracao.hasOwnProperty ("__kwargtrans__"))) {;
			var alteracao = false;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'alteracao': var alteracao = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		$ ('#app-content-questionario').addClass ('has_servidor');
		if (self.foi_identificado) {
			var msg_inicial = P ('Confirmando Identidade... Aguarde...', __kwargtrans__ ({_class: 'remsc'}));
		}
		else {
			var msg_inicial = P ('Antes de continuar irei dar algumas instruções... Algumas das respostas que você der aqui poderão ser', ' editadas, basta clicar no ícone ', I (__kwargtrans__ ({_class: 'fas fa-edit'})), ' quando ele aparecer do lado esquerdo', ' de sua resposta. Dito isto, vamos dar início ao processo.', __kwargtrans__ ({_class: 'remsc'}));
		}
		var nome_completo = (self.nome_completo !== null ? self.nome_completo : '');
		var cpf = (self.cpf !== null ? self.cpf : '');
		var matricula = (self.matricula !== null ? self.matricula : '');
		var data_de_nascimento = (self.data_de_nascimento_iso !== null ? '{0} 00:00:00'.format (self.data_de_nascimento_iso) : '');
		var nome_da_mae = (self.nome_da_mae !== null ? self.nome_da_mae : '');
		var num_cel = (self.numero_celularfunc !== null ? self.numero_celularfunc : '');
		var mensagem = DIV (msg_inicial, DIV (FORM (forms.FormWidget ('checkservidor_funcionario', 'nome_completo', __kwargtrans__ (dict ({'type': 'string', 'value': nome_completo, '_class': 'e-display_hidden'}))), forms.FormWidget ('checkservidor_funcionario', 'cpf', __kwargtrans__ (dict ({'type': 'string', 'value': cpf, '_class': 'e-display_hidden'}))), forms.FormWidget ('checkservidor_funcionario', 'matricula', __kwargtrans__ (dict ({'type': 'string', 'value': matricula, '_class': 'e-display_hidden'}))), forms.FormWidget ('checkservidor_funcionario', 'data_de_nascimento', __kwargtrans__ (dict ({'type': 'string', 'value': data_de_nascimento, '_class': 'e-display_hidden'}))), forms.FormWidget ('checkservidor_funcionario', 'nome_da_mae', __kwargtrans__ (dict ({'type': 'string', 'value': nome_da_mae, '_class': 'e-display_hidden'}))), forms.FormWidget ('checkservidor_funcionario', 'telefone_celular', __kwargtrans__ (dict ({'type': 'string', 'value': num_cel, '_class': 'e-display_hidden'}))), __kwargtrans__ (dict ({'_phanterpwa-form': 'checkservidor_funcionario', '_id': 'form-checkservidor_funcionario'}))), __kwargtrans__ ({_style: 'display: none;', _class: 'remsc'})), __kwargtrans__ ({_id: 'menssage_captcha', _class: 'mensagem', _style: 'display: none;'}));
		setTimeout ((function __lambda__ () {
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
			return tuple ([mensagem.html_to ('#row_content'), $ ('#menssage_captcha').fadeIn (), self._get_nome_completo ()]);
		}), 1000);
	});},
	get binder_enter_key () {return __get__ (this, function (self, widget) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'widget': var widget = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var p = $ (widget.target_selector);
		var inp = p.find ('input');
		inp.off ('keyup.enter_key').on ('keyup.enter_key', (function __lambda__ (event) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return (event.keyCode == 13 ? p.find ('.phanterpwa-widget-icon-wrapper').trigger ('click') : null);
		}));
	});},
	get _get_nome_completo () {return __get__ (this, function (self, change) {
		if (typeof change == 'undefined' || (change != null && change.hasOwnProperty ("__kwargtrans__"))) {;
			var change = false;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'change': var change = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.nome_completo === null || change || self.fazer_alteracoes) {
			if (change || self.fazer_alteracoes) {
				var resp = CONCATENATE (P ('Quero mudar o nome completo.', __kwargtrans__ ({_class: 'rclient'})), P ('Tudo bem, digite agora seu nome completo.', __kwargtrans__ ({_class: 'remsc'})));
			}
			else {
				var resp = P ('Me informe o seu nome completo.', __kwargtrans__ ({_class: 'remsc'}));
			}
			var arbritary_id = window.PhanterPWA.get_id ();
			var mensagem = DIV (resp, __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			self.wd_nome_completo = widgets.Input ('nome_completo', __kwargtrans__ ({icon: I (__kwargtrans__ ({_class: 'fab fa-telegram-plane'})), placeholder: 'Nome completo', wear: 'shadows', checker: false, value: (self.fazer_alteracoes && self.nome_completo !== null ? self.nome_completo : '')}));
			self.wd_nome_completo.html_to ('#container-questionario .footer-questionario');
			self.binder_enter_key (self.wd_nome_completo);
			$ ('#phanterpwa-widget-input-input-nome_completo').off ('keydown.nome_completo_input').on ('keydown.nome_completo_input', (function __lambda__ () {
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
				return self.wd_nome_completo.del_message_error ();
			})).focus ();
			$ ('#phanterpwa-widget-nome_completo').find ('.phanterpwa-widget-icon-wrapper').off ('click.button_nome_completo').on ('click.button_nome_completo', (function __lambda__ () {
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
				return self._validate_nome_completo ();
			}));
		}
		else {
			self._get_cpf ();
		}
	});},
	get _validate_nome_completo () {return __get__ (this, function (self) {
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
		var value = $ ('#phanterpwa-widget-input-input-nome_completo').val ();
		if (value !== null && value !== undefined && value != '' && value.length > 5) {
			self.nome_completo = value;
			$ ('#phanterpwa-widget-input-input-checkservidor_funcionario-nome_completo').val (value);
			var arbritary_id = window.PhanterPWA.get_id ();
			var arbritary_id_menu = window.PhanterPWA.get_id ();
			var arbritary_id_choice = window.PhanterPWA.get_id ();
			var botao_edit = widgets.MenuBox (arbritary_id_menu, I (__kwargtrans__ ({_class: 'fas fa-edit'})), DIV ('Quero mudar o nome', __kwargtrans__ ({_id: arbritary_id_choice})), __kwargtrans__ (dict ({'_class': 'button_editar', 'z_index': 2001, 'onOpen': (function __lambda__ () {
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
				return tuple ([$ ('#{0}'.format (arbritary_id_choice)).on ('click', (function __lambda__ () {
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
					return self._get_nome_completo (__kwargtrans__ ({change: true}));
				}))]);
			})})));
			var mensagem = DIV (P (botao_edit, self.nome_completo, __kwargtrans__ ({_class: 'rclient'})), __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			self._get_cpf ();
		}
		else {
			self.wd_nome_completo.set_message_error ('Nome inválido!');
		}
	});},
	get _get_cpf () {return __get__ (this, function (self, change) {
		if (typeof change == 'undefined' || (change != null && change.hasOwnProperty ("__kwargtrans__"))) {;
			var change = false;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'change': var change = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.cpf === null || change || self.fazer_alteracoes) {
			if (change || self.fazer_alteracoes) {
				var resp = CONCATENATE (P ('Quero mudar o CPF.', __kwargtrans__ ({_class: 'rclient'})), P ('Tudo bem, digite agora seu CPF.', __kwargtrans__ ({_class: 'remsc'})));
			}
			else {
				var resp = P ('Me informe o seu CPF.', __kwargtrans__ ({_class: 'remsc'}));
			}
			var arbritary_id = window.PhanterPWA.get_id ();
			var mensagem = DIV (resp, __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			self.wd_cpf = widgets.Input ('cpf', __kwargtrans__ ({icon: I (__kwargtrans__ ({_class: 'fab fa-telegram-plane'})), placeholder: 'CPF', wear: 'shadows', mask: '###.###.###-##', checker: false, value: (self.fazer_alteracoes && self.cpf !== null ? self.cpf : '')}));
			self.wd_cpf.html_to ('#container-questionario .footer-questionario');
			self.binder_enter_key (self.wd_cpf);
			$ ('#phanterpwa-widget-input-input-cpf').off ('keydown.cpf_input').on ('keydown.cpf_input', (function __lambda__ () {
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
				return self.wd_cpf.del_message_error ();
			})).focus ();
			$ ('#phanterpwa-widget-cpf').find ('.phanterpwa-widget-icon-wrapper').off ('click.button_cpf').on ('click.button_cpf', (function __lambda__ () {
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
				return self._validate_cpf ();
			}));
		}
		else {
			self._get_matricula ();
		}
	});},
	get _validate_cpf () {return __get__ (this, function (self) {
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
		var value = $ ('#phanterpwa-widget-input-input-cpf').val ();
		if (value !== null && value !== undefined && value != '' && value.length > 5) {
			self.cpf = value;
			$ ('#phanterpwa-widget-input-input-checkservidor_funcionario-cpf').val (value);
			var arbritary_id = window.PhanterPWA.get_id ();
			var arbritary_id_menu = window.PhanterPWA.get_id ();
			var arbritary_id_choice = window.PhanterPWA.get_id ();
			var botao_edit = widgets.MenuBox (arbritary_id_menu, I (__kwargtrans__ ({_class: 'fas fa-edit'})), DIV ('Quero mudar o CPF', __kwargtrans__ ({_id: arbritary_id_choice})), __kwargtrans__ (dict ({'_class': 'button_editar', 'z_index': 2001, 'onOpen': (function __lambda__ () {
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
				return tuple ([$ ('#{0}'.format (arbritary_id_choice)).on ('click', (function __lambda__ () {
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
					return self._get_cpf (__kwargtrans__ ({change: true}));
				}))]);
			})})));
			var mensagem = DIV (P (botao_edit, self.cpf, __kwargtrans__ ({_class: 'rclient'})), __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			self._get_matricula ();
		}
		else {
			self.wd_cpf.set_message_error ('CPF inválido!');
		}
	});},
	get _get_matricula () {return __get__ (this, function (self, change) {
		if (typeof change == 'undefined' || (change != null && change.hasOwnProperty ("__kwargtrans__"))) {;
			var change = false;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'change': var change = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.sabe_matricula === null || change || self.fazer_alteracoes) {
			if (change || self.fazer_alteracoes) {
				var resp = CONCATENATE (P ('Quero mudar a matrícula.', __kwargtrans__ ({_class: 'rclient'})), P ('Tudo bem. Você sabe o número de sua matrícula?.', __kwargtrans__ ({_class: 'remsc'})));
			}
			else {
				var resp = CONCATENATE (P ('Para uma localização mais precisa, quanto mais informações tivermos, melhor.', ' Você sabe o número de sua matrícula? Esta informação pode ser encontrada em seu conta-cheque', '. Vou mostrar...', __kwargtrans__ ({_class: 'remsc'})), P (IMG (__kwargtrans__ ({_src: '/static/{0}/images/contra_cheque.jpg'.format (window.PhanterPWA.VERSIONING), _style: 'height: auto; width: 300px;'})), __kwargtrans__ ({_class: 'remsc'})));
			}
			var arbritary_id = window.PhanterPWA.get_id ();
			var mensagem = DIV (resp, __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			var choice = DIV (BUTTON ('SEI A MATRÍCULA', __kwargtrans__ ({_id: 'sim_matricula', _class: 'btn wave-on-click'})), BUTTON ('NÃO TENHO ACESSO A MATRÍCULA', __kwargtrans__ ({_id: 'nao_matricula', _class: 'btn wave-on-click'})), __kwargtrans__ ({_class: 'buttons_choice'}));
			choice.html_to ('#container-questionario .footer-questionario');
			$ ('#sim_matricula').off ('click.sim_matricula').on ('click.sim_matricula', (function __lambda__ () {
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
				return self._sabe_matricula (__kwargtrans__ ({sabe: true}));
			}));
			$ ('#nao_matricula').off ('click.nao_matricula').on ('click.nao_matricula', (function __lambda__ () {
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
				return self._sabe_matricula (__kwargtrans__ ({sabe: false}));
			}));
		}
		else {
			self._sabe_matricula ();
		}
	});},
	get _sabe_matricula () {return __get__ (this, function (self, sabe, change) {
		if (typeof sabe == 'undefined' || (sabe != null && sabe.hasOwnProperty ("__kwargtrans__"))) {;
			var sabe = null;
		};
		if (typeof change == 'undefined' || (change != null && change.hasOwnProperty ("__kwargtrans__"))) {;
			var change = false;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'sabe': var sabe = __allkwargs0__ [__attrib0__]; break;
						case 'change': var change = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.sabe_matricula = sabe;
		if (self.sabe_matricula === true || change || self.fazer_alteracoes) {
			var resp = CONCATENATE (P ('Sei minha Matrícula.', __kwargtrans__ ({_class: 'rclient'})), P ('Ok, adicione a sua matrícula.', __kwargtrans__ ({_class: 'remsc'})));
			var arbritary_id = window.PhanterPWA.get_id ();
			var mensagem = DIV (resp, __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			self.wd_matricula = widgets.Input ('matricula', __kwargtrans__ ({icon: I (__kwargtrans__ ({_class: 'fab fa-telegram-plane'})), placeholder: 'Matrícula', wear: 'shadows', checker: false, value: (self.fazer_alteracoes && self.matricula !== null ? self.matricula : '')}));
			self.wd_matricula.html_to ('#container-questionario .footer-questionario');
			self.binder_enter_key (self.wd_matricula);
			$ ('#phanterpwa-widget-input-input-matricula').off ('keydown.matricula_input').on ('keydown.matricula_input', (function __lambda__ () {
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
				return self.wd_matricula.del_message_error ();
			})).focus ();
			$ ('#phanterpwa-widget-matricula').find ('.phanterpwa-widget-icon-wrapper').off ('click.button_matricula').on ('click.button_matricula', (function __lambda__ () {
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
				return self._validate_matricula ();
			}));
		}
		else {
			var arbritary_id = window.PhanterPWA.get_id ();
			var arbritary_id_menu = window.PhanterPWA.get_id ();
			var arbritary_id_choice = window.PhanterPWA.get_id ();
			var botao_edit = widgets.MenuBox (arbritary_id_menu, I (__kwargtrans__ ({_class: 'fas fa-edit'})), DIV ('Quero mudar a matrícula', __kwargtrans__ ({_id: arbritary_id_choice})), __kwargtrans__ (dict ({'_class': 'button_editar', 'z_index': 2001, 'onOpen': (function __lambda__ () {
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
				return tuple ([$ ('#{0}'.format (arbritary_id_choice)).on ('click', (function __lambda__ () {
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
					return self._get_matricula (__kwargtrans__ ({change: true}));
				}))]);
			})})));
			var resp = CONCATENATE (P (botao_edit, 'Não sei minha Matrícula.', __kwargtrans__ ({_class: 'rclient'})), P ('Ok, vamos pular esta parte.', __kwargtrans__ ({_class: 'remsc'})));
			var mensagem = DIV (resp, __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			self._get_data_de_nascimento ();
		}
	});},
	get _validate_matricula () {return __get__ (this, function (self) {
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
		var value = $ ('#phanterpwa-widget-input-input-matricula').val ();
		if (value !== null && value !== undefined && value != '' && value.length > 0) {
			self.matricula = value;
			$ ('#phanterpwa-widget-input-input-checkservidor_funcionario-matricula').val (value);
			var arbritary_id = window.PhanterPWA.get_id ();
			var arbritary_id_menu = window.PhanterPWA.get_id ();
			var arbritary_id_choice = window.PhanterPWA.get_id ();
			var botao_edit = widgets.MenuBox (arbritary_id_menu, I (__kwargtrans__ ({_class: 'fas fa-edit'})), DIV ('Quero mudar a matrícula', __kwargtrans__ ({_id: arbritary_id_choice})), __kwargtrans__ (dict ({'_class': 'button_editar', 'z_index': 2001, 'onOpen': (function __lambda__ () {
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
				return tuple ([$ ('#{0}'.format (arbritary_id_choice)).on ('click', (function __lambda__ () {
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
					return self._get_matricula (__kwargtrans__ ({change: true}));
				}))]);
			})})));
			var mensagem = DIV (P (botao_edit, self.matricula, __kwargtrans__ ({_class: 'rclient'})), __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			self._get_data_de_nascimento ();
		}
		else {
			self.wd_matricula.set_message_error ('Matrícula inválida!');
		}
	});},
	get _get_data_de_nascimento () {return __get__ (this, function (self, change) {
		if (typeof change == 'undefined' || (change != null && change.hasOwnProperty ("__kwargtrans__"))) {;
			var change = false;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'change': var change = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.data_de_nascimento === null || change || self.fazer_alteracoes) {
			var nome_abreviado = self.abreviar_nome (self.nome_completo);
			if (change || self.fazer_alteracoes) {
				var resp = CONCATENATE (P ('Tenho que mudar a data de nascimento', __kwargtrans__ ({_class: 'rclient'})), P ('Certo ', nome_abreviado, ', adicione sua data de nascimento, ficarei no aguado...', __kwargtrans__ ({_class: 'remsc'})));
			}
			else {
				var resp = CONCATENATE (P ('Muito bem ', nome_abreviado, ', ', 'agora preciso de sua data de nascimento...', __kwargtrans__ ({_class: 'remsc'})));
			}
			var arbritary_id = window.PhanterPWA.get_id ();
			var mensagem = DIV (resp, __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			self.wd_data_de_nascimento = widgets.Input ('data_de_nascimento', __kwargtrans__ ({kind: 'date', icon: I (__kwargtrans__ ({_class: 'far fa-calendar-alt'})), format: 'dd/MM/yyyy', placeholder: 'Data de nascimento', wear: 'shadows', checker: false, onDateorDatetimeChoice: self._on_data_de_nascimento, value: (self.fazer_alteracoes && self.data_de_nascimento !== null ? self.data_de_nascimento : '')}));
			self.wd_data_de_nascimento.html_to ('#container-questionario .footer-questionario');
			$ ('#phanterpwa-widget-input-input-data_de_nascimento').focus ();
			$ ('#phanterpwa-widget-input-input-data_de_nascimento').off ('keyup.enter_key_date').on ('keyup.enter_key_date', (function __lambda__ (event) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'event': var event = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				return self._valid_data_de_nascimento_manual (event);
			}));
		}
		else {
			self._get_nome_da_mae ();
		}
	});},
	get _valid_data_de_nascimento_manual () {return __get__ (this, function (self, event) {
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
		if (event.keyCode == 13) {
			var value = $ ('#phanterpwa-widget-input-input-data_de_nascimento').val ();
			var valider = validations.Valider (value, ['IS_DATE:dd/MM/yyyy']);
			if (valider.validate ()) {
				var data = dict ({'formated': value, 'iso': '{0}-{1}-{2} 00:00:00'.format (value.__getslice__ (-(4), null, 1), value.__getslice__ (3, 5, 1), value.__getslice__ (0, 2, 1))});
				self._on_data_de_nascimento (data);
			}
			else {
				self.wd_data_de_nascimento.set_message_error ('Data de nascimento inválido!');
			}
		}
		else {
			self.wd_data_de_nascimento.del_message_error ();
		}
	});},
	get _on_data_de_nascimento () {return __get__ (this, function (self, data) {
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
		var arbritary_id = window.PhanterPWA.get_id ();
		var arbritary_id_menu = window.PhanterPWA.get_id ();
		var arbritary_id_choice = window.PhanterPWA.get_id ();
		var botao_edit = widgets.MenuBox (arbritary_id_menu, I (__kwargtrans__ ({_class: 'fas fa-edit'})), DIV ('Quero mudar a Data de Nascimento', __kwargtrans__ ({_id: arbritary_id_choice})), __kwargtrans__ (dict ({'_class': 'button_editar', 'z_index': 2001, 'onOpen': (function __lambda__ () {
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
			return tuple ([$ ('#{0}'.format (arbritary_id_choice)).on ('click', (function __lambda__ () {
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
				return self._get_data_de_nascimento (__kwargtrans__ ({change: true}));
			}))]);
		})})));
		var mensagem = DIV (P (botao_edit, data.formated, __kwargtrans__ ({_class: 'rclient'})), __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
		$ ('#phanterpwa-widget-input-input-checkservidor_funcionario-data_de_nascimento').val (data.iso);
		self.data_de_nascimento = data.formated;
		mensagem.append_to ('#row_content');
		$ ('#{0}'.format (arbritary_id)).slideDown (500);
		$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
		self._get_nome_da_mae ();
	});},
	get _get_nome_da_mae () {return __get__ (this, function (self, change) {
		if (typeof change == 'undefined' || (change != null && change.hasOwnProperty ("__kwargtrans__"))) {;
			var change = false;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'change': var change = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.nome_da_mae === null || change || self.fazer_alteracoes) {
			if (change || self.fazer_alteracoes) {
				var resp = CONCATENATE (P ('Eu quero mudar o nome de minha mãe!', __kwargtrans__ ({_class: 'rclient'})), P ('Certo, então digite o nome de sua mãe completo.', __kwargtrans__ ({_class: 'remsc'})));
			}
			else {
				var resp = CONCATENATE (P ('Estamos quase na reta final! Agora preciso do nome completo de sua mãe.', __kwargtrans__ ({_class: 'remsc'})));
			}
			var arbritary_id = window.PhanterPWA.get_id ();
			var mensagem = DIV (resp, __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			self.wd_nome_da_mae = widgets.Input ('nome_da_mae', __kwargtrans__ ({icon: I (__kwargtrans__ ({_class: 'fab fa-telegram-plane'})), placeholder: 'Nome completo da mãe', wear: 'shadows', checker: false, value: (self.fazer_alteracoes && self.nome_da_mae !== null ? self.nome_da_mae : '')}));
			self.wd_nome_da_mae.html_to ('#container-questionario .footer-questionario');
			self.binder_enter_key (self.wd_nome_da_mae);
			$ ('#phanterpwa-widget-input-input-nome_da_mae').off ('keydown.nome_da_mae_input').on ('keydown.nome_da_mae_input', (function __lambda__ () {
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
				return self.wd_nome_da_mae.del_message_error ();
			})).focus ();
			$ ('#phanterpwa-widget-nome_da_mae').find ('.phanterpwa-widget-icon-wrapper').off ('click.button_nome_da_mae').on ('click.button_nome_da_mae', (function __lambda__ () {
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
				return self._validate_nome_da_mae ();
			}));
		}
		else {
			self._get_numero_celularfunc ();
		}
	});},
	get _validate_nome_da_mae () {return __get__ (this, function (self) {
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
		var value = $ ('#phanterpwa-widget-input-input-nome_da_mae').val ();
		if (value !== null && value !== undefined && value != '' && value.length > 5) {
			var arbritary_id = window.PhanterPWA.get_id ();
			var arbritary_id_menu = window.PhanterPWA.get_id ();
			var arbritary_id_choice = window.PhanterPWA.get_id ();
			var botao_edit = widgets.MenuBox (arbritary_id_menu, I (__kwargtrans__ ({_class: 'fas fa-edit'})), DIV ('Quero mudar o Nome da Mãe', __kwargtrans__ ({_id: arbritary_id_choice})), __kwargtrans__ (dict ({'_class': 'button_editar', 'z_index': 2001, 'onOpen': (function __lambda__ () {
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
				return tuple ([$ ('#{0}'.format (arbritary_id_choice)).on ('click', (function __lambda__ () {
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
					return self._get_nome_da_mae (__kwargtrans__ ({change: true}));
				}))]);
			})})));
			var mensagem = DIV (P (botao_edit, value, __kwargtrans__ ({_class: 'rclient'})), P ('Blz! Última etapa...', __kwargtrans__ ({_class: 'remsc'})), __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			self.nome_da_mae = value;
			$ ('#phanterpwa-widget-input-input-checkservidor_funcionario-nome_da_mae').val (value);
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			self._get_numero_celularfunc ();
		}
		else {
			self.wd_nome_da_mae.set_message_error ('Nome inválido!');
		}
	});},
	get _get_numero_celularfunc () {return __get__ (this, function (self, change) {
		if (typeof change == 'undefined' || (change != null && change.hasOwnProperty ("__kwargtrans__"))) {;
			var change = false;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'change': var change = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.numero_celularfunc === null || change || self.fazer_alteracoes) {
			if (change || self.fazer_alteracoes) {
				var resp = CONCATENATE (P ('Eu quero mudar o número do celular!', __kwargtrans__ ({_class: 'rclient'})), P ('Certo, adicione o novo número do celular.', __kwargtrans__ ({_class: 'remsc'})));
			}
			else {
				var resp = CONCATENATE (P ('É importante por um número de celular. Usaremos este número para entrar em contato pelo ', 'Whatsapp se houver algo errado', __kwargtrans__ ({_class: 'remsc'})));
			}
			var arbritary_id = window.PhanterPWA.get_id ();
			var mensagem = DIV (resp, __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			self.wd_numero_celularfunc = widgets.Input ('numero_celularfunc', __kwargtrans__ ({icon: I (__kwargtrans__ ({_class: 'fab fa-telegram-plane'})), placeholder: 'Número de Celular', can_empty: true, mask: 'fone', wear: 'shadows', checker: false, value: (self.fazer_alteracoes && self.numero_celularfunc !== null ? self.numero_celularfunc : '')}));
			self.wd_numero_celularfunc.html_to ('#container-questionario .footer-questionario');
			self.binder_enter_key (self.wd_numero_celularfunc);
			$ ('#phanterpwa-widget-input-input-numero_celularfunc').off ('keydown.numero_celularfunc_input').on ('keydown.numero_celularfunc_input', (function __lambda__ () {
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
				return self.wd_numero_celularfunc.del_message_error ();
			})).focus ();
			$ ('#phanterpwa-widget-numero_celularfunc').find ('.phanterpwa-widget-icon-wrapper').off ('click.button_numero_celularfunc').on ('click.button_numero_celularfunc', (function __lambda__ () {
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
				return self._validate_numero_celularfunc ();
			}));
		}
		else {
			self._check_dados ();
		}
	});},
	get _validate_numero_celularfunc () {return __get__ (this, function (self) {
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
		var value = $ ('#phanterpwa-widget-input-input-numero_celularfunc').val ();
		if (value == '' || value.length > 14) {
			var arbritary_id = window.PhanterPWA.get_id ();
			var arbritary_id_menu = window.PhanterPWA.get_id ();
			var arbritary_id_choice = window.PhanterPWA.get_id ();
			var botao_edit = widgets.MenuBox (arbritary_id_menu, I (__kwargtrans__ ({_class: 'fas fa-edit'})), DIV ('Quero mudar o número do celular.', __kwargtrans__ ({_id: arbritary_id_choice})), __kwargtrans__ (dict ({'_class': 'button_editar', 'z_index': 2001, 'onOpen': (function __lambda__ () {
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
				return tuple ([$ ('#{0}'.format (arbritary_id_choice)).on ('click', (function __lambda__ () {
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
					return self._get_numero_celularfunc (__kwargtrans__ ({change: true}));
				}))]);
			})})));
			var mensagem = DIV (P (botao_edit, value, __kwargtrans__ ({_class: 'rclient'})), P ('Ok! Vou tentar te identificar agora, aguarde um pouquinho...', __kwargtrans__ ({_class: 'remsc'})), __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			self.numero_celularfunc = value;
			$ ('#phanterpwa-widget-input-input-checkservidor_funcionario-numero_celularfunc').val (value);
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			self._check_dados ();
		}
		else {
			self.wd_numero_celularfunc.set_message_error ('Celular inválido!');
		}
	});},
	get _check_dados () {return __get__ (this, function (self) {
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
		var formdata = new FormData ($ ('#form-checkservidor_funcionario') [0]);
		window.PhanterPWA.POST (__kwargtrans__ (dict ({'url_args': ['api', 'identificar-servidor'], 'form_data': formdata, 'onComplete': self.after_submit2})));
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
		if (ajax_status == 'success') {
			var data = data.responseJSON;
			var nome_abreviado = self.abreviar_nome (data.servidor.nome_completo);
			var artigo = 'o(a)';
			if (data.servidor.sexo == 'Masculino') {
				var artigo = 'o';
			}
			else if (data.servidor.sexo == 'Feminino') {
				var artigo = 'a';
			}
			var nome_pai = '';
			if (data.servidor.nome_do_pai !== null && data.servidor.nome_do_pai !== undefined && data.servidor.nome_do_pai != '') {
				var nome_pai = SPAN (STRONG (data.servidor.nome_do_pai), ' e ');
			}
			var matricula = SPAN ('Está matriculad', artigo, ' no(a) ', STRONG (data.servidor.turma));
			var arbritary_id = window.PhanterPWA.get_id ();
			var mensagem = DIV (P ('Muito bem! Já sei quem você é. ', 'Você é ', STRONG (data.servidor.nome_completo), ' que nasceu em ', STRONG (data.servidor.data_de_nascimento), ' e é filh', artigo, ' de ', nome_pai, STRONG (data.servidor.nome_da_mae), '. ', matricula, '. Mora no seguinte endereço: ', STRONG (data.servidor.endereco), '...', __kwargtrans__ ({_class: 'remsc'})), P ('Tudo bom com você, ', nome_abreviado, '?', ' Espero que sim...', __kwargtrans__ ({_class: 'remsc'})), __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			$ ('.button_editar').fadeOut ();
			localStorage.setItem ('servidor-token', data.servidor.token);
			self.token = data.servidor.token;
			$ ('#nome_servidor_chat').html (data.servidor.nome_completo);
			$ ('#app-content-questionario').addClass ('has_servidor');
			self._area_do_servidor (__kwargtrans__ ({inicio: true}));
		}
		else {
			var arbritary_id = window.PhanterPWA.get_id ();
			var mensagem = DIV (P ('Não consegui achar nenhum servidor com o número de carteira que você forneceu.', ' Tente novamente ou eu posso tentar te identificar utilizando dados fornecidos', ' por você. O que quer fazer?', __kwargtrans__ ({_class: 'remsc'})), __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			var choice = DIV (BUTTON ('TENTAR NOVAMENTE', __kwargtrans__ ({_id: 'sim_carteirinha', _class: 'btn wave-on-click'})), BUTTON ('FORNECER DADOS', __kwargtrans__ ({_id: 'nao_carteirinha', _class: 'btn wave-on-click'})), __kwargtrans__ ({_class: 'buttons_choice'}));
			choice.html_to ('#container-questionario .footer-questionario');
			$ ('#sim_carteirinha').off ('click.carteirinha_sim').on ('click.carteirinha_sim', (function __lambda__ () {
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
				return self._tem_carteirinha (true, __kwargtrans__ ({change: true}));
			}));
			$ ('#nao_carteirinha').off ('click.carteirinha_nao').on ('click.carteirinha_nao', (function __lambda__ () {
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
				return self._tem_carteirinha (false, __kwargtrans__ ({change: true}));
			}));
		}
	});},
	get after_submit2 () {return __get__ (this, function (self, data, ajax_status) {
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
			var data = data.responseJSON;
			var nome_abreviado = self.abreviar_nome (data.nome_completo);
			var artigo = 'o(a)';
			if (data.sexo == 'Masculino') {
				var artigo = 'o';
			}
			else if (data.sexo == 'Feminino') {
				var artigo = 'a';
			}
			var nome_pai = '';
			if (data.nome_do_pai !== null && data.nome_do_pai !== undefined && data.nome_do_pai != '') {
				var nome_pai = SPAN (STRONG (data.nome_do_pai), ' e ');
			}
			var matricula = SPAN (' Possui CPF nº ', STRONG (data.cpf), ' e Matrícula');
			var mensagem = DIV (P ('Confirmei sua identidade ', nome_abreviado, '. Recapitulando...Você é ', STRONG (data.nome_completo), ' que nasceu em ', STRONG (data.data_de_nascimento_formatado), ' e é filh', artigo, ' de ', nome_pai, STRONG (data.nome_da_mae), '.', matricula, __kwargtrans__ ({_class: 'remsc'})), P ('Sua conta foi vinculada ao seu cadastro, agora é possível acessar a ', STRONG ('Área do Servidor'), ' e utilizar os serviços do SME, confira clicando abaixo.', __kwargtrans__ ({_class: 'remsc'})), __kwargtrans__ ({_id: 'identificado', _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#identificado').slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			$ ('.button_editar').fadeOut ();
			var choice = DIV (A ('ÁREA DO SERVIDOR', __kwargtrans__ ({_href: '#_phanterpwa:/area-do-servidor', _class: 'btn wave-on-click'})), A ('VOLTAR (PÁGINA PRINCIPAL)', __kwargtrans__ ({_href: '#_phanterpwa:/home', _class: 'btn wave-on-click'})), __kwargtrans__ ({_class: 'buttons_choice'}));
			choice.html_to ('#container-questionario .footer-questionario');
			localStorage.setItem ('identificar-servidor', JSON.stringify (data));
			window.PhanterPWA.update_auth_user ();
		}
		else {
			var arbritary_id = window.PhanterPWA.get_id ();
			var mensagem = DIV (P ('Não consegui te identificar com os dados que você me deu...', __kwargtrans__ ({_class: 'remsc'})), P ('Nome completo: ', STRONG (self.nome_completo), BR (), 'CPF: ', STRONG (self.cpf), BR (), 'Marícula: ', STRONG (self.matricula), BR (), 'Data de Nascimento: ', STRONG (self.data_de_nascimento), BR (), 'Nome da mãe: ', STRONG (self.nome_da_mae), BR (), 'Celular: ', STRONG (self.numero_celularfunc), __kwargtrans__ ({_class: 'remsc'})), P ('Pode ser que você tenha digitado algo errado!', ' Faça as alterações necessárias em ', STRONG ('CONSERTAR ALGO ERRADO'), ' que eu tento te identificar novamente.', ' Se você tem certeza que os dados inseridos estão corretos, o jeito é falar com alguém da administração do SME', ' ou você pode (opção mais recomendada) deixar uma mensagem em ', STRONG ('MANDAR MENSAGEM'), __kwargtrans__ ({_class: 'remsc'})), __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			var choice = DIV (widgets.MenuBox ('alterar_dados', BUTTON ('CONSERTAR ALGO ERRADO', __kwargtrans__ ({_id: 'alterar_dados', _class: 'btn wave-on-click'})), DIV ('Quero mudar o Nome Completo', __kwargtrans__ ({_id: 'algo_errado_nome_completo'})), DIV ('Quero mudar o CPF', __kwargtrans__ ({_id: 'algo_errado_cpf'})), DIV ('Quero mudar a Matrícula', __kwargtrans__ ({_id: 'algo_errado_matricula'})), DIV ('Quero mudar o Data de Nascimento', __kwargtrans__ ({_id: 'algo_errado_data_de_nascimento'})), DIV ('Quero mudar o Nome da Mãe', __kwargtrans__ ({_id: 'algo_errado_nome_da_mae'})), DIV ('Quero mudar o Número Celular', __kwargtrans__ ({_id: 'algo_errado_numero_celular'})), __kwargtrans__ (dict ({'_class': 'button_editar', '_style': 'width: auto; display: inline-block;', 'z_index': 2001, 'onOpen': (function __lambda__ () {
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
				return tuple ([$ ('#{0}'.format ('algo_errado_nome_completo')).on ('click', (function __lambda__ () {
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
					return self._get_nome_completo (__kwargtrans__ ({change: true}));
				})), $ ('#{0}'.format ('algo_errado_cpf')).on ('click', (function __lambda__ () {
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
					return self._get_cpf (__kwargtrans__ ({change: true}));
				})), $ ('#{0}'.format ('algo_errado_matricula')).on ('click', (function __lambda__ () {
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
					return self._get_matricula (__kwargtrans__ ({change: true}));
				})), $ ('#{0}'.format ('algo_errado_data_de_nascimento')).on ('click', (function __lambda__ () {
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
					return self._get_data_de_nascimento (__kwargtrans__ ({change: true}));
				})), $ ('#{0}'.format ('algo_errado_nome_da_mae')).on ('click', (function __lambda__ () {
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
					return self._get_nome_da_mae (__kwargtrans__ ({change: true}));
				})), $ ('#{0}'.format ('algo_errado_numero_celular')).on ('click', (function __lambda__ () {
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
					return self._get_numero_celularfunc (__kwargtrans__ ({change: true}));
				}))]);
			})}))), BUTTON ('MANDAR MENSAGEM', __kwargtrans__ ({_id: 'mandar_mensagem', _class: 'btn wave-on-click'})), __kwargtrans__ ({_class: 'buttons_choice'}));
			choice.html_to ('#container-questionario .footer-questionario');
			$ ('#mandar_mensagem').off ('click.mandar_mensagem').on ('click.mandar_mensagem', (function __lambda__ () {
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
				return self._mandar_mensagem ();
			}));
		}
	});},
	get _mandar_mensagem () {return __get__ (this, function (self) {
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
		self.Modal = ModalMensagem ('#modal-container', __kwargtrans__ (dict ({'nome_completo': self.nome_completo, 'cpf': self.cpf, 'matricula': self.matricula, 'data_de_nascimento': self.data_de_nascimento, 'nome_da_mae': self.nome_da_mae, 'celular': self.numero_celularfunc})));
		self.Modal.open ();
		forms.SignForm ('#form-mensagem', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-mensagem');
		})}));
	});}
});
export var ModalMensagem =  __class__ ('ModalMensagem', [modal.Modal], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, target_element) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'target_element': var target_element = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		var nome_completo = parameters.py_get ('nome_completo', '');
		var nome_da_mae = parameters.py_get ('nome_da_mae', '');
		var data_de_nascimento = parameters.py_get ('data_de_nascimento', '');
		var cpf = parameters.py_get ('cpf', '');
		var matricula = parameters.py_get ('matricula', '');
		var celular = parameters.py_get ('celular', '');
		self.element_target = $ (target_element);
		var tcontent = DIV (P ('Em anexo irão as informações que foram coletadas.', ' Coloque um número de contato que entraremos em contato. Caso seja celular, tentaremos', ' entrar em contato pelo Whatsapp. Em último caso responderemos pelo seu email: ', STRONG (window.PhanterPWA.get_auth_user ().email), __kwargtrans__ ({_style: 'text-align: center; color: red;'})), DIV (forms.FormWidget ('mensagem', 'nome_completo', __kwargtrans__ (dict ({'type': 'string', 'label': 'Nome completo', 'value': nome_completo, '_class': 'e-display_hidden'}))), forms.FormWidget ('mensagem', 'cpf', __kwargtrans__ (dict ({'type': 'string', 'label': 'CPF', 'value': cpf, '_class': 'e-display_hidden'}))), forms.FormWidget ('mensagem', 'matricula', __kwargtrans__ (dict ({'type': 'string', 'label': 'Matrícula', 'value': matricula, '_class': 'e-display_hidden'}))), forms.FormWidget ('mensagem', 'nome_da_mae', __kwargtrans__ (dict ({'type': 'string', 'label': 'Nome mãe', 'value': nome_da_mae, '_class': 'e-display_hidden'}))), forms.FormWidget ('mensagem', 'data_de_nascimento', __kwargtrans__ (dict ({'type': 'string', 'label': 'Data de nascimento', 'value': data_de_nascimento, '_class': 'e-display_hidden'}))), forms.FormWidget ('mensagem', 'celular', __kwargtrans__ (dict ({'type': 'string', 'label': 'Telefone/Celular', 'mask': 'fone', 'value': celular}))), forms.FormWidget ('mensagem', 'email', __kwargtrans__ (dict ({'type': 'string', 'label': 'Email', 'value': window.PhanterPWA.get_auth_user ().email, '_class': 'e-display_hidden'}))), forms.FormWidget ('mensagem', 'mensagem', __kwargtrans__ (dict ({'label': 'Mensagem (Opcional)', 'type': 'text'}))), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'mensagem-form-inputs'})).jquery ();
		var tfooter = DIV (DIV (forms.SubmitButton ('mensagem', 'Enviar mensagem', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'})), __kwargtrans__ ({_class: 'p-col w1p100'})).jquery ();
		modal.Modal.__init__ (self, self.element_target, __kwargtrans__ (dict ({'_phanterpwa-form': 'mensagem', '_id': 'form-mensagem', 'header_height': 50, 'footer_height': 80, 'title': 'Enviar Mensagem', 'content': tcontent, 'footer': tfooter, 'after_open': self.binds, 'z_index': 2002})));
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
		self.element_target.find ('#phanterpwa-widget-form-submit_button-mensagem').off ('click.modal_submit_mensagem').on ('click.modal_submit_mensagem', (function __lambda__ () {
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
		forms.SignForm ('#form-mensagem', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-mensagem');
		})}));
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
		if (ajax_status == 'success') {
			var json = data.responseJSON;
			self.close ();
			window.PhanterPWA.flash ('Mensagem enviada com sucesso');
		}
		else if (data.status == 400) {
			var json = data.responseJSON;
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': json.message})));
			forms.SignForm ('#form-mensagem');
		}
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
		formdata.append ('csrf_token', $ ('#phanterpwa-widget-input-mensagem-csrf_token').val ());
		formdata.append ('nome_completo', $ ('#phanterpwa-widget-input-input-mensagem-nome_completo').val ());
		formdata.append ('cpf', $ ('#phanterpwa-widget-input-input-mensagem-cpf').val ());
		formdata.append ('matricula', $ ('#phanterpwa-widget-input-input-mensagem-matricula').val ());
		formdata.append ('nome_da_mae', $ ('#phanterpwa-widget-input-input-mensagem-nome_da_mae').val ());
		formdata.append ('data_de_nascimento', $ ('#phanterpwa-widget-input-input-mensagem-data_de_nascimento').val ());
		formdata.append ('celular', $ ('#phanterpwa-widget-input-input-mensagem-celular').val ());
		formdata.append ('email', $ ('#phanterpwa-widget-input-input-mensagem-email').val ());
		formdata.append ('mensagem', $ ('#phanterpwa-widget-textarea-textarea-mensagem-mensagem').val ());
		window.PhanterPWA.POST (__kwargtrans__ (dict ({'url_args': ['api', 'mensagem'], 'form_data': formdata, 'onComplete': self.after_submit})));
	});}
});

//# sourceMappingURL=handlers.identificar_servidor.map