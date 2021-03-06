// Transcrypt'ed from Python, 2022-03-14 09:15:13
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as preloaders from './phanterpwa.frontend.preloaders.js';
import * as decorators from './phanterpwa.frontend.decorators.js';
import * as modal from './phanterpwa.frontend.components.modal.js';
import * as validations from './phanterpwa.frontend.validations.js';
import * as forms from './phanterpwa.frontend.forms.js';
import * as widgets from './phanterpwa.frontend.components.widgets.js';
import * as snippets from './phanterpwa.frontend.components.snippets.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
import * as gatehandler from './phanterpwa.frontend.gatehandler.js';
var __name__ = 'handlers.acesso_aluno';
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
export var TH = helpers.XmlConstructor.tagger ('th');
export var TR = helpers.XmlConstructor.tagger ('tr');
export var TD = helpers.XmlConstructor.tagger ('td');
export var FORM = helpers.XmlConstructor.tagger ('form');
export var SPAN = helpers.XmlConstructor.tagger ('span');
export var BR = helpers.XmlConstructor.tagger ('br', true);
export var HR = helpers.XmlConstructor.tagger ('hr', true);
export var LABEL = helpers.XmlConstructor.tagger ('label');
export var I18N = helpers.I18N;
export var XML = helpers.XML;
export var CONCATENATE = helpers.CONCATENATE;
export var Index =  __class__ ('Index', [gatehandler.Handler], {
	__module__: __name__,
	get initialize () {return __get__ (this, function (self) {
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
		if (arg0 !== null) {
			self._check_codigo_de_acesso (arg0);
		}
		else {
			var dados_localstorage = localStorage.getItem ('aluno-identificado');
			console.log (dados_localstorage);
			if (dados_localstorage === null) {
				self.IdentificarAluno = IdentificarAluno (self);
			}
			else {
				self._check_codigo_de_acesso (dados_localstorage);
			}
		}
	});},
	get _check_codigo_de_acesso () {return __get__ (this, function (self, codigo) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'codigo': var codigo = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		localStorage.removeItem ('aluno-identificado');
		window.PhanterPWA.GET (__kwargtrans__ (dict ({'url_args': ['api', 'identificar-aluno', codigo], 'onComplete': self.resposta_check_codigo_de_acesso})));
	});},
	get resposta_check_codigo_de_acesso () {return __get__ (this, function (self, data, ajax_status) {
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
			self.DadosAluno = DadosAluno (self, json);
		}
		else {
			self.IdentificarAluno = IdentificarAluno (self);
		}
	});}
});
export var IdentificarAluno =  __class__ ('IdentificarAluno', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance) {
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
		self.config = window.PhanterPWA.CONFIG;
		self.url_image = null;
		self.nome_completo = null;
		self.sabe_codigo_de_acesso = null;
		self.codigo_de_acesso = null;
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
		var texto_inicial = DIV (H1 ('SISTEMA DE IDENTIFICA????O DO ALUNO', __kwargtrans__ ({_class: 'phanterpwa-the_title'})), H3 (P ('Bem vindo ao sistema de indentifica????o do aluno. Nele iremos precisar', ' dos seguintes dados: ', STRONG ('Nome completo, Data de Nascimento e Nome da m??e.'), ' ou o C??DIGO DE ACESSO localizado em seu comprovante de matr??cula.'), P ('Clique em ', STRONG ('Iniciar'), ' para darmos in??cio ao processo'), DIV (BUTTON ('Iniciar', __kwargtrans__ ({_id: 'iniciar_ava', _class: 'btn wave-on-click'})), __kwargtrans__ ({_class: 'button_container'})), __kwargtrans__ ({_class: 'phanterpwa-the_subtitle'})), __kwargtrans__ ({_id: 'text-inicio'}));
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
		var html = DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: '/static/{0}/images/perfil_robo-min.jpg'.format (self.config ['PROJECT'] ['versioning'])})), __kwargtrans__ ({_class: 'background-robo'})), __kwargtrans__ ({_class: 'head-questionario'})), DIV (texto_inicial, __kwargtrans__ ({_id: 'row_content', _class: 'row'})), DIV (__kwargtrans__ ({_class: 'footer-questionario'})), __kwargtrans__ ({_id: 'container-questionario', _class: 'container container-questionario'})), __kwargtrans__ ({_id: 'app-content-questionario', _class: 'app-content'}));
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
		self.binds ();
	});},
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
		var titulo = CONCATENATE (TABLE (TR (TD ('SISTEMA DE INDENTIFICA????O DO ALUNO')), __kwargtrans__ ({_id: 'nome_escola_chat'})), DIV (I (__kwargtrans__ ({_class: 'fas fa-expand'})), __kwargtrans__ ({_class: 'botao_expand'})));
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
			var msg_inicial = P ('Antes de continuar irei dar algumas instru????es... Algumas das respostas que voc?? der aqui poder??o ser', ' editadas, basta clicar no ??cone ', I (__kwargtrans__ ({_class: 'fas fa-edit'})), ' quando ele aparecer do lado esquerdo', ' de sua resposta. Dito isto, vamos dar in??cio ao processo.', __kwargtrans__ ({_class: 'remsc'}));
		}
		var nome_completo = (self.nome_completo !== null ? self.nome_completo : '');
		var codigo_de_acesso = (self.codigo_de_acesso !== null ? self.codigo_de_acesso : '');
		var data_de_nascimento = (self.data_de_nascimento_iso !== null ? '{0} 00:00:00'.format (self.data_de_nascimento_iso) : '');
		var nome_da_mae = (self.nome_da_mae !== null ? self.nome_da_mae : '');
		var num_cel = (self.numero_celularfunc !== null ? self.numero_celularfunc : '');
		var mensagem = DIV (msg_inicial, DIV (FORM (forms.FormWidget ('checkaluno', 'nome_completo', __kwargtrans__ (dict ({'type': 'string', 'value': nome_completo, '_class': 'e-display_hidden'}))), forms.FormWidget ('checkaluno', 'codigo_de_acesso', __kwargtrans__ (dict ({'type': 'string', 'value': codigo_de_acesso, '_class': 'e-display_hidden'}))), forms.FormWidget ('checkaluno', 'data_de_nascimento', __kwargtrans__ (dict ({'type': 'string', 'value': data_de_nascimento, '_class': 'e-display_hidden'}))), forms.FormWidget ('checkaluno', 'nome_da_mae', __kwargtrans__ (dict ({'type': 'string', 'value': nome_da_mae, '_class': 'e-display_hidden'}))), forms.FormWidget ('checkaluno', 'telefone_celular', __kwargtrans__ (dict ({'type': 'string', 'value': num_cel, '_class': 'e-display_hidden'}))), __kwargtrans__ (dict ({'_phanterpwa-form': 'checkaluno', '_id': 'form-checkaluno'}))), __kwargtrans__ ({_style: 'display: none;', _class: 'remsc'})), __kwargtrans__ ({_id: 'menssage_captcha', _class: 'mensagem', _style: 'display: none;'}));
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
			return tuple ([mensagem.html_to ('#row_content'), $ ('#menssage_captcha').fadeIn (), self._get_codigo_de_acesso ()]);
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
	get _get_codigo_de_acesso () {return __get__ (this, function (self, change) {
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
		if (self.sabe_codigo_de_acesso === null || change || self.fazer_alteracoes) {
			if (change || self.fazer_alteracoes) {
				var resp = CONCATENATE (P ('Quero tentar adicionar um ', STRONG ('C??DIGO DE ACESSO'), '.', __kwargtrans__ ({_class: 'rclient'})), P ('Tudo bem. Voc?? est?? pronto para adicionar o ', STRONG ('C??DIGO DE ACESSO'), '?.', __kwargtrans__ ({_class: 'remsc'})));
			}
			else {
				var resp = CONCATENATE (P ('Se vc souber o ', STRONG ('C??DIGO DE ACESSO'), ' a identifica????o ocorre rapidamente. Ao fazer a matr??cula na escola ?? fornecido um COMPROVANTE DE MATR??CULA', ' , se voc?? tem este documento, o ', STRONG ('C??DIGO DE ACESSO'), ' est?? logao abaixo do ', STRONG ('QRCODE'), '.', __kwargtrans__ ({_class: 'remsc'})));
			}
			var arbritary_id = window.PhanterPWA.get_id ();
			var mensagem = DIV (resp, __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			var choice = DIV (BUTTON ('EU TENHO O C??DIGO DE ACESSO', __kwargtrans__ ({_id: 'sim_codigo_de_acesso', _class: 'btn wave-on-click'})), BUTTON ('EU N??O TENHO O C??DIGO DE ACESSO', __kwargtrans__ ({_id: 'nao_codigo_de_acesso', _class: 'btn wave-on-click'})), __kwargtrans__ ({_class: 'buttons_choice'}));
			choice.html_to ('#container-questionario .footer-questionario');
			$ ('#sim_codigo_de_acesso').off ('click.sim_codigo_de_acesso').on ('click.sim_codigo_de_acesso', (function __lambda__ () {
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
				return self._sabe_codigo_de_acesso (__kwargtrans__ ({sabe: true}));
			}));
			$ ('#nao_codigo_de_acesso').off ('click.nao_codigo_de_acesso').on ('click.nao_codigo_de_acesso', (function __lambda__ () {
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
				return self._sabe_codigo_de_acesso (__kwargtrans__ ({sabe: false}));
			}));
		}
		else {
			self._sabe_codigo_de_acesso ();
		}
	});},
	get _sabe_codigo_de_acesso () {return __get__ (this, function (self, sabe, change) {
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
		self.sabe_codigo_de_acesso = sabe;
		if (self.sabe_codigo_de_acesso === true || change || self.fazer_alteracoes) {
			var resp = CONCATENATE (P ('Eu tenho o ', STRONG ('C??DIGO DE ACESSO'), '.', __kwargtrans__ ({_class: 'rclient'})), P ('Ok, adicione o seu ', STRONG ('C??DIGO DE ACESSO'), '.', __kwargtrans__ ({_class: 'remsc'})));
			var arbritary_id = window.PhanterPWA.get_id ();
			var mensagem = DIV (resp, __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			self.wd_cod_acesso = widgets.Input ('codigo_de_acesso', __kwargtrans__ ({icon: I (__kwargtrans__ ({_class: 'fab fa-telegram-plane'})), placeholder: 'C??digo de Acesso', wear: 'shadows', checker: false, value: (self.fazer_alteracoes && self.codigo_de_acesso !== null ? self.codigo_de_acesso : '')}));
			self.wd_cod_acesso.html_to ('#container-questionario .footer-questionario');
			self.binder_enter_key (self.wd_cod_acesso);
			$ ('#phanterpwa-widget-input-input-codigo_de_acesso').off ('keydown.codigo_de_acesso_input').on ('keydown.codigo_de_acesso_input', (function __lambda__ () {
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
				return self.wd_cod_acesso.del_message_error ();
			})).focus ();
			$ ('#phanterpwa-widget-codigo_de_acesso').find ('.phanterpwa-widget-icon-wrapper').off ('click.button_codigo_de_acesso').on ('click.button_codigo_de_acesso', (function __lambda__ () {
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
				return self._validate_codigo_de_acesso ();
			}));
		}
		else {
			var arbritary_id = window.PhanterPWA.get_id ();
			var arbritary_id_menu = window.PhanterPWA.get_id ();
			var arbritary_id_choice = window.PhanterPWA.get_id ();
			var botao_edit = widgets.MenuBox (arbritary_id_menu, I (__kwargtrans__ ({_class: 'fas fa-edit'})), DIV ('Quero mudar a matr??cula', __kwargtrans__ ({_id: arbritary_id_choice})), __kwargtrans__ (dict ({'_class': 'button_editar', 'z_index': 2001, 'onOpen': (function __lambda__ () {
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
				return $ ('#{0}'.format (arbritary_id_choice)).on ('click', (function __lambda__ () {
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
					return self._get_codigo_de_acesso (__kwargtrans__ ({change: true}));
				}));
			})})));
			var mensagem = DIV (P (SPAN (botao_edit), 'N??o tenho o ', STRONG ('C??DIGO DE ACESSO'), '.', __kwargtrans__ ({_class: 'rclient'})), P ('Ok, vamos pular esta parte e tentar outra alternativa.', __kwargtrans__ ({_class: 'remsc'})), __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			self._get_nome_completo ();
		}
	});},
	get _validate_codigo_de_acesso () {return __get__ (this, function (self) {
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
		var value = $ ('#phanterpwa-widget-input-input-codigo_de_acesso').val ();
		if (value !== null && value !== undefined && value != '' && value.length > 0) {
			self.codigo_de_acesso = value;
			$ ('#phanterpwa-widget-input-input-checkaluno-codigo_de_acesso').val (value);
			var arbritary_id = window.PhanterPWA.get_id ();
			var arbritary_id_menu = window.PhanterPWA.get_id ();
			var arbritary_id_choice = window.PhanterPWA.get_id ();
			var botao_edit = widgets.MenuBox (arbritary_id_menu, I (__kwargtrans__ ({_class: 'fas fa-edit'})), DIV ('Quero mudar o c??digo de acesso', __kwargtrans__ ({_id: arbritary_id_choice})), __kwargtrans__ (dict ({'_class': 'button_editar', 'z_index': 2001, 'onOpen': (function __lambda__ () {
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
					return self._get_codigo_de_acesso (__kwargtrans__ ({change: true}));
				}))]);
			})})));
			var mensagem = DIV (P (botao_edit, self.codigo_de_acesso, __kwargtrans__ ({_class: 'rclient'})), p ('Checando o c??digo digitado... Aguarde...'), __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			self._check_codigo_de_acesso (value);
		}
		else {
			self.wd_cod_acesso.set_message_error ('C??digo de acesso inv??lido!');
		}
	});},
	get _check_codigo_de_acesso () {return __get__ (this, function (self, codigo) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'codigo': var codigo = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.GET (__kwargtrans__ (dict ({'url_args': ['api', 'identificar-aluno', codigo], 'onComplete': self.resposta_check_codigo_de_acesso})));
	});},
	get resposta_check_codigo_de_acesso () {return __get__ (this, function (self, data, ajax_status) {
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
			self.index_instance.DadosAluno = DadosAluno (self.index_instance, json);
		}
		else {
			self._get_nome_completo (__kwargtrans__ ({change: false, codigo_invalido: true}));
		}
	});},
	get _get_nome_completo () {return __get__ (this, function (self, change, codigo_invalido) {
		if (typeof change == 'undefined' || (change != null && change.hasOwnProperty ("__kwargtrans__"))) {;
			var change = false;
		};
		if (typeof codigo_invalido == 'undefined' || (codigo_invalido != null && codigo_invalido.hasOwnProperty ("__kwargtrans__"))) {;
			var codigo_invalido = false;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'change': var change = __allkwargs0__ [__attrib0__]; break;
						case 'codigo_invalido': var codigo_invalido = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.nome_completo === null || change || self.fazer_alteracoes) {
			if (codigo_invalido === true) {
				var xml_ini = P ('O c??digo adicionado n??o foi reconhecido, vamos tentar outra alternativa. ', 'Digite agora seu nome completo. Lembrando que o nome deve ser digitado', ' exatamente como est?? na certid??o de nascimento.', __kwargtrans__ ({_class: 'remsc'}));
			}
			else {
				var xml_ini = P ('Me informe o seu nome completo. Lembrando que o nome deve ser digitado', 'exatamente como est?? na certid??o de nascimento.', __kwargtrans__ ({_class: 'remsc'}));
			}
			if (change || self.fazer_alteracoes) {
				var resp = CONCATENATE (P ('Quero mudar o nome completo.', __kwargtrans__ ({_class: 'rclient'})), P ('Tudo bem, digite agora seu nome completo. Lembrando que o nome deve ser digitado', ' exatamente como est?? na certid??o de nascimento.', __kwargtrans__ ({_class: 'remsc'})));
			}
			else {
				var resp = xml_ini;
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
			self._get_data_de_nascimento ();
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
			$ ('#phanterpwa-widget-input-input-checkaluno-nome_completo').val (value);
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
			self._get_data_de_nascimento ();
		}
		else {
			self.wd_nome_completo.set_message_error ('Nome inv??lido!');
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
				self.wd_data_de_nascimento.set_message_error ('Data de nascimento inv??lido!');
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
		$ ('#phanterpwa-widget-input-input-checkaluno-data_de_nascimento').val (data.iso);
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
				var resp = CONCATENATE (P ('Eu quero mudar o nome de minha m??e!', __kwargtrans__ ({_class: 'rclient'})), P ('Certo, ent??o digite o nome de sua m??e completo.', __kwargtrans__ ({_class: 'remsc'})));
			}
			else {
				var resp = CONCATENATE (P ('Estamos quase na reta final! Agora preciso do nome completo de sua m??e.', __kwargtrans__ ({_class: 'remsc'})));
			}
			var arbritary_id = window.PhanterPWA.get_id ();
			var mensagem = DIV (resp, __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			self.wd_nome_da_mae = widgets.Input ('nome_da_mae', __kwargtrans__ ({icon: I (__kwargtrans__ ({_class: 'fab fa-telegram-plane'})), placeholder: 'Nome completo da m??e', wear: 'shadows', checker: false, value: (self.fazer_alteracoes && self.nome_da_mae !== null ? self.nome_da_mae : '')}));
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
			var botao_edit = widgets.MenuBox (arbritary_id_menu, I (__kwargtrans__ ({_class: 'fas fa-edit'})), DIV ('Quero mudar o Nome da M??e', __kwargtrans__ ({_id: arbritary_id_choice})), __kwargtrans__ (dict ({'_class': 'button_editar', 'z_index': 2001, 'onOpen': (function __lambda__ () {
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
			var mensagem = DIV (P (botao_edit, value, __kwargtrans__ ({_class: 'rclient'})), P ('Blz! ??ltima etapa...', __kwargtrans__ ({_class: 'remsc'})), __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			self.nome_da_mae = value;
			$ ('#phanterpwa-widget-input-input-checkaluno-nome_da_mae').val (value);
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			self._get_numero_celularfunc ();
		}
		else {
			self.wd_nome_da_mae.set_message_error ('Nome inv??lido!');
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
				var resp = CONCATENATE (P ('Eu quero mudar o n??mero do celular!', __kwargtrans__ ({_class: 'rclient'})), P ('Certo, adicione o novo n??mero do celular.', __kwargtrans__ ({_class: 'remsc'})));
			}
			else {
				var resp = CONCATENATE (P ('?? importante por um n??mero de celular. Usaremos este n??mero para entrar em contato pelo ', 'Whatsapp se houver algo errado', __kwargtrans__ ({_class: 'remsc'})));
			}
			var arbritary_id = window.PhanterPWA.get_id ();
			var mensagem = DIV (resp, __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			self.wd_numero_celularfunc = widgets.Input ('numero_celularfunc', __kwargtrans__ ({icon: I (__kwargtrans__ ({_class: 'fab fa-telegram-plane'})), placeholder: 'N??mero de Celular', can_empty: true, mask: 'fone', wear: 'shadows', checker: false, value: (self.fazer_alteracoes && self.numero_celularfunc !== null ? self.numero_celularfunc : '')}));
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
			var botao_edit = widgets.MenuBox (arbritary_id_menu, I (__kwargtrans__ ({_class: 'fas fa-edit'})), DIV ('Quero mudar o n??mero do celular.', __kwargtrans__ ({_id: arbritary_id_choice})), __kwargtrans__ (dict ({'_class': 'button_editar', 'z_index': 2001, 'onOpen': (function __lambda__ () {
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
			$ ('#phanterpwa-widget-input-input-checkaluno-numero_celularfunc').val (value);
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			self._check_dados ();
		}
		else {
			self.wd_numero_celularfunc.set_message_error ('Celular inv??lido!');
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
		var formdata = new FormData ($ ('#form-checkaluno') [0]);
		window.PhanterPWA.POST (__kwargtrans__ (dict ({'url_args': ['api', 'identificar-aluno'], 'form_data': formdata, 'onComplete': self.after_submit2})));
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
			var codigo_de_acesso = SPAN ('Est?? codigo_de_acessod', artigo, ' no(a) ', STRONG (data.servidor.turma));
			var arbritary_id = window.PhanterPWA.get_id ();
			var mensagem = DIV (P ('Muito bem! J?? sei quem voc?? ??. ', 'Voc?? ?? ', STRONG (data.servidor.nome_completo), ' que nasceu em ', STRONG (data.servidor.data_de_nascimento), ' e ?? filh', artigo, ' de ', nome_pai, STRONG (data.servidor.nome_da_mae), '. ', codigo_de_acesso, '. Mora no seguinte endere??o: ', STRONG (data.servidor.endereco), '...', __kwargtrans__ ({_class: 'remsc'})), P ('Tudo bom com voc??, ', nome_abreviado, '?', ' Espero que sim...', __kwargtrans__ ({_class: 'remsc'})), __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
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
			var mensagem = DIV (P ('N??o consegui achar nenhum servidor com o n??mero de carteira que voc?? forneceu.', ' Tente novamente ou eu posso tentar te identificar utilizando dados fornecidos', ' por voc??. O que quer fazer?', __kwargtrans__ ({_class: 'remsc'})), __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
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
			var codigo_de_acesso = SPAN (' Possui CPF n?? ', STRONG (data.cpf), ' e Matr??cula');
			var mensagem = DIV (P ('Confirmei sua identidade ', nome_abreviado, '. Recapitulando...Voc?? ?? ', STRONG (data.nome_completo), ' que nasceu em ', STRONG (data.data_de_nascimento_formatado), ' e ?? filh', artigo, ' de ', nome_pai, STRONG (data.nome_da_mae), '.', codigo_de_acesso, __kwargtrans__ ({_class: 'remsc'})), P ('Sua conta foi vinculada ao seu cadastro, agora ?? poss??vel acessar a ', STRONG ('??rea do Servidor'), ' e utilizar os servi??os do SME, confira clicando abaixo.', __kwargtrans__ ({_class: 'remsc'})), __kwargtrans__ ({_id: 'identificado', _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#identificado').slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			$ ('.button_editar').fadeOut ();
			var choice = DIV (A ('??REA DO SERVIDOR', __kwargtrans__ ({_href: '#_phanterpwa:/area-do-servidor', _class: 'btn wave-on-click'})), A ('VOLTAR (P??GINA PRINCIPAL)', __kwargtrans__ ({_href: '#_phanterpwa:/home', _class: 'btn wave-on-click'})), __kwargtrans__ ({_class: 'buttons_choice'}));
			choice.html_to ('#container-questionario .footer-questionario');
			localStorage.setItem ('identificar-servidor', JSON.stringify (data));
			window.PhanterPWA.update_auth_user ();
		}
		else {
			var cod_msg = self.codigo_de_acesso;
			if (self.codigo_de_acesso == '' || self.codigo_de_acesso === null) {
				var cod_msg = 'N??o sei o c??digo de acesso';
			}
			var arbritary_id = window.PhanterPWA.get_id ();
			var mensagem = DIV (P ('N??o consegui te identificar com os dados que voc?? me deu...', __kwargtrans__ ({_class: 'remsc'})), P ('Nome completo: ', STRONG (self.nome_completo), BR (), 'C??digo de Acesso: ', STRONG (cod_msg), BR (), 'Data de Nascimento: ', STRONG (self.data_de_nascimento), BR (), 'Nome da m??e: ', STRONG (self.nome_da_mae), BR (), 'Celular: ', STRONG (self.numero_celularfunc), __kwargtrans__ ({_class: 'remsc'})), P ('Pode ser que voc?? tenha digitado algo errado!', ' Fa??a as altera????es necess??rias em ', STRONG ('CONSERTAR ALGO ERRADO'), ' que eu tento te identificar novamente.', ' Se voc?? tem certeza que os dados inseridos est??o corretos, o jeito ?? falar com algu??m da administra????o do SME', ' ou voc?? pode (op????o mais recomendada) deixar uma mensagem em ', STRONG ('MANDAR MENSAGEM'), __kwargtrans__ ({_class: 'remsc'})), __kwargtrans__ ({_id: arbritary_id, _style: 'display: none;'}));
			mensagem.append_to ('#row_content');
			$ ('#{0}'.format (arbritary_id)).slideDown (500);
			$ ('#row_content').animate (dict ({'scrollTop': 2000000}), 'slow');
			var choice = DIV (widgets.MenuBox ('alterar_dados', BUTTON ('CONSERTAR ALGO ERRADO', __kwargtrans__ ({_id: 'alterar_dados', _class: 'btn wave-on-click'})), DIV ('Quero tentar acessar usando o C??DIGO DE ACESSO', __kwargtrans__ ({_id: 'algo_errado_codigo_de_acesso'})), DIV ('Quero mudar o Nome Completo', __kwargtrans__ ({_id: 'algo_errado_nome_completo'})), DIV ('Quero mudar o CPF', __kwargtrans__ ({_id: 'algo_errado_cpf'})), DIV ('Quero mudar o Data de Nascimento', __kwargtrans__ ({_id: 'algo_errado_data_de_nascimento'})), DIV ('Quero mudar o Nome da M??e', __kwargtrans__ ({_id: 'algo_errado_nome_da_mae'})), DIV ('Quero mudar o N??mero Celular', __kwargtrans__ ({_id: 'algo_errado_numero_celular'})), __kwargtrans__ (dict ({'_class': 'button_editar', '_style': 'width: auto; display: inline-block;', 'z_index': 2001, 'onOpen': (function __lambda__ () {
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
				return tuple ([$ ('#{0}'.format ('algo_errado_codigo_de_acesso')).on ('click', (function __lambda__ () {
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
					return self._get_codigo_de_acesso (__kwargtrans__ ({change: true}));
				})), $ ('#{0}'.format ('algo_errado_nome_completo')).on ('click', (function __lambda__ () {
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
		self.Modal = ModalMensagem ('#modal-container', __kwargtrans__ (dict ({'nome_completo': self.nome_completo, 'cpf': self.cpf, 'codigo_de_acesso': self.codigo_de_acesso, 'data_de_nascimento': self.data_de_nascimento, 'nome_da_mae': self.nome_da_mae, 'celular': self.numero_celularfunc})));
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
		var codigo_de_acesso = parameters.py_get ('codigo_de_acesso', '');
		var celular = parameters.py_get ('celular', '');
		self.element_target = $ (target_element);
		var tcontent = DIV (P ('Em anexo ir??o as informa????es que foram coletadas.', ' Coloque um n??mero de contato que entraremos em contato. Caso seja celular, tentaremos', ' entrar em contato pelo Whatsapp. Em ??ltimo caso responderemos pelo seu email: ', STRONG (window.PhanterPWA.get_auth_user ().email), __kwargtrans__ ({_style: 'text-align: center; color: red;'})), DIV (forms.FormWidget ('mensagem', 'nome_completo', __kwargtrans__ (dict ({'type': 'string', 'label': 'Nome completo', 'value': nome_completo, '_class': 'e-display_hidden'}))), forms.FormWidget ('mensagem', 'cpf', __kwargtrans__ (dict ({'type': 'string', 'label': 'CPF', 'value': cpf, '_class': 'e-display_hidden'}))), forms.FormWidget ('mensagem', 'codigo_de_acesso', __kwargtrans__ (dict ({'type': 'string', 'label': 'Matr??cula', 'value': codigo_de_acesso, '_class': 'e-display_hidden'}))), forms.FormWidget ('mensagem', 'nome_da_mae', __kwargtrans__ (dict ({'type': 'string', 'label': 'Nome m??e', 'value': nome_da_mae, '_class': 'e-display_hidden'}))), forms.FormWidget ('mensagem', 'data_de_nascimento', __kwargtrans__ (dict ({'type': 'string', 'label': 'Data de nascimento', 'value': data_de_nascimento, '_class': 'e-display_hidden'}))), forms.FormWidget ('mensagem', 'celular', __kwargtrans__ (dict ({'type': 'string', 'label': 'Telefone/Celular', 'mask': 'fone', 'value': celular}))), forms.FormWidget ('mensagem', 'email', __kwargtrans__ (dict ({'type': 'string', 'label': 'Email', 'value': window.PhanterPWA.get_auth_user ().email, '_class': 'e-display_hidden'}))), forms.FormWidget ('mensagem', 'mensagem', __kwargtrans__ (dict ({'label': 'Mensagem (Opcional)', 'type': 'text'}))), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'mensagem-form-inputs'})).jquery ();
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
		formdata.append ('codigo_de_acesso', $ ('#phanterpwa-widget-input-input-mensagem-codigo_de_acesso').val ());
		formdata.append ('nome_da_mae', $ ('#phanterpwa-widget-input-input-mensagem-nome_da_mae').val ());
		formdata.append ('data_de_nascimento', $ ('#phanterpwa-widget-input-input-mensagem-data_de_nascimento').val ());
		formdata.append ('celular', $ ('#phanterpwa-widget-input-input-mensagem-celular').val ());
		formdata.append ('email', $ ('#phanterpwa-widget-input-input-mensagem-email').val ());
		formdata.append ('mensagem', $ ('#phanterpwa-widget-textarea-textarea-mensagem-mensagem').val ());
		window.PhanterPWA.POST (__kwargtrans__ (dict ({'url_args': ['api', 'mensagem'], 'form_data': formdata, 'onComplete': self.after_submit})));
	});}
});
export var DadosAluno =  __class__ ('DadosAluno', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, json) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
						case 'json': var json = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.index_instance = index_instance;
		self.json = json;
		var qr_code = json.data.qrcode;
		localStorage.setItem ('aluno-identificado', qr_code);
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('LISTA DE ALUNOS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-dados-aluno', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		var html_historico = DIV (DIV ('HIST??RICO ESCOLAR', __kwargtrans__ ({_class: 'p-col w1p100 phanterpwa-widget-form-separator'})), __kwargtrans__ ({_class: 'historicos-conteudo'}));
		if (json.data.historico !== null && json.data.historico !== undefined) {
			for (var x of json.data.historico) {
				var html_ficha = DIV (LABEL (x.ano_letivo, ' - ', x.serie, ' - ', x.escola), DIV (DIV (DIV (DIV ('N??o h?? ficha individual no ano letivo especificado apesar do aluno estar matriculado', __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control p-col w1p100'}));
				if (x.turma === null || x.turma === undefined) {
					var html_ficha = DIV (LABEL (x.ano_letivo, ' - ', x.serie, ' - ', x.escola), DIV (DIV (DIV (DIV ('O(A) aluno(a) n??o est?? numa turma, apesar de estar matriculado no ano letivo especificado', __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control p-col w1p100'}));
				}
				else if (x.ficha_individual !== null && x.ficha_individual !== undefined) {
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
						var html_ficha = DIV (LABEL (x.ano_letivo, ' - ', x.serie, ' - ', x.escola), DIV (DIV (DIV (DIV (H3 ('TURMA: ', x.turma), tabela, __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control p-col w1p100'}));
					}
				}
				html_historico.append (html_ficha);
			}
		}
		CONCATENATE (forms.Form (json.data.aluno), DIV (html_historico, __kwargtrans__ ({_class: 'p-row'}))).html_to ('#content-dados-aluno');
	});}
});

//# sourceMappingURL=handlers.acesso_aluno.map