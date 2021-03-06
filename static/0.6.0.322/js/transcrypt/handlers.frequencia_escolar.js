// Transcrypt'ed from Python, 2022-04-25 18:18:07
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
var __name__ = 'handlers.frequencia_escolar';
export var CONCATENATE = helpers.CONCATENATE;
export var OPTION = helpers.XmlConstructor.tagger ('option');
export var SELECT = helpers.XmlConstructor.tagger ('select');
export var DIV = helpers.XmlConstructor.tagger ('div');
export var BUTTON = helpers.XmlConstructor.tagger ('button');
export var I = helpers.XmlConstructor.tagger ('i');
export var A = helpers.XmlConstructor.tagger ('a');
export var SPAN = helpers.XmlConstructor.tagger ('span');
export var FORM = helpers.XmlConstructor.tagger ('form');
var OPTION = helpers.XmlConstructor.tagger ('option');
var SELECT = helpers.XmlConstructor.tagger ('select');
export var UL = helpers.XmlConstructor.tagger ('ul');
export var LI = helpers.XmlConstructor.tagger ('li');
export var STRONG = helpers.XmlConstructor.tagger ('strong');
export var IMG = helpers.XmlConstructor.tagger ('img', true);
export var H2 = helpers.XmlConstructor.tagger ('h2');
export var H3 = helpers.XmlConstructor.tagger ('h3');
export var H5 = helpers.XmlConstructor.tagger ('h5');
export var TR = helpers.XmlConstructor.tagger ('tr');
export var P = helpers.XmlConstructor.tagger ('p');
export var TH = helpers.XmlConstructor.tagger ('th');
export var TD = helpers.XmlConstructor.tagger ('td');
export var LABEL = helpers.XmlConstructor.tagger ('label');
export var TEXTAREA = helpers.XmlConstructor.tagger ('textarea');
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var TABLE = helpers.XmlConstructor.tagger ('table');
export var TBODY = helpers.XmlConstructor.tagger ('tbody');
var TR = helpers.XmlConstructor.tagger ('tr');
var TH = helpers.XmlConstructor.tagger ('th');
var TD = helpers.XmlConstructor.tagger ('td');
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
		return window.PhanterPWA.auth_user_has_role (['administrator', 'root', 'Administrador Master SME', 'Administrador Master Escola', 'Professor(a)']);
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
		var mes = window.PhanterPWA.Request.get_param ('mes');
		if (arg1 === null || arg1 === undefined) {
			escolas.EscolherEscola (__kwargtrans__ ({id_target: '#content-registro_de_faltas', callback_link: (function __lambda__ (id_escola) {
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
				return '#_phanterpwa:/frequencia/{0}/{1}'.format (arg0, id_escola);
			})}));
		}
		else if (str (arg1).isdigit () && (arg2 === null || arg2 === undefined)) {
			anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({id_target: '#content-registro_de_faltas', callback_link: (function __lambda__ (ano) {
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
				return '#_phanterpwa:/frequencia/{0}/{1}/{2}'.format (arg0, arg1, ano);
			})}));
		}
		else if (str (arg1).isdigit () && str (arg2).isdigit ()) {
			if (arg0 == 'registro') {
				self.RegistroDeFaltas = RegistroDeFaltas (self, arg1, arg2, arg3, arg4, mes);
			}
			else if (arg0 == 'total-de-faltas') {
				self.TotalDeFaltas = TotalDeFaltas (self, arg1, arg2, arg3, mes);
			}
			else if (arg0 == 'total-detalhado') {
				self.TotalDetalhado = TotalDetalhado (self, arg1, arg2, arg3, mes);
			}
		}
	}));}
});
export var RegistroDeFaltas =  __class__ ('RegistroDeFaltas', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, escola, ano_letivo, turma, id_disciplina, rotulo_mes_ano) {
		if (typeof id_disciplina == 'undefined' || (id_disciplina != null && id_disciplina.hasOwnProperty ("__kwargtrans__"))) {;
			var id_disciplina = null;
		};
		if (typeof rotulo_mes_ano == 'undefined' || (rotulo_mes_ano != null && rotulo_mes_ano.hasOwnProperty ("__kwargtrans__"))) {;
			var rotulo_mes_ano = null;
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
						case 'turma': var turma = __allkwargs0__ [__attrib0__]; break;
						case 'id_disciplina': var id_disciplina = __allkwargs0__ [__attrib0__]; break;
						case 'rotulo_mes_ano': var rotulo_mes_ano = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.id_escola = escola;
		self.ano_letivo = ano_letivo;
		self.id_turma = turma;
		self.rotulo_mes_ano = rotulo_mes_ano;
		self.id_disciplina = id_disciplina;
		self.index_instance = index_instance;
		self._get_registro_de_faltas ();
		self.meses = dict ({'01': 'Janeiro', '02': 'Fevereiro', '03': 'Mar??o', '04': 'Abril', '05': 'Maio', '06': 'Junho', '07': 'Julho', '08': 'Agosto', '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'});
	});},
	get _get_registro_de_faltas () {return __get__ (this, function (self) {
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
		var args = ['api', 'registro-de-faltas', self.id_escola, self.ano_letivo, self.id_turma];
		var params = dict ({'onComplete': self.after_get});
		if (self.id_disciplina !== null && self.id_disciplina !== undefined) {
			args.append (self.id_disciplina);
		}
		if (self.rotulo_mes_ano !== null && self.rotulo_mes_ano !== undefined) {
			params ['_mes'] = self.rotulo_mes_ano;
		}
		window.PhanterPWA.GET (...args, __kwargtrans__ (params));
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
			var registro_de_faltas = json.form_registros;
			self.anterior = json.anterior;
			self.quant_dias = json.quant_dias;
			self.proximo = json.proximo;
			self.rotulo_mes_ano = json.rotulo_mes_ano;
			self.disciplina = json.disciplina;
			self.turma = json.turma;
			self.meses_referencia = json.meses_referencia;
			self.processar_registro_de_faltas (registro_de_faltas);
		}
	});},
	get processar_registro_de_faltas () {return __get__ (this, function (self, registro_de_faltas) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'registro_de_faltas': var registro_de_faltas = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var xway_meses_referencia = [];
		for (var x of self.meses_referencia) {
			var xway = ['registro-de-faltas', self.id_escola, self.ano_letivo, self.id_turma];
			if (self.id_disciplina !== null) {
				xway.append (self.id_disciplina);
			}
			var dict_way = dict ({'_mes': x.py_split (' - ') [1]});
			var op = widgets.MenuOption (x, __kwargtrans__ (dict ({'_class': 'botao_meses_referencia wave_on_click', '_href': window.PhanterPWA.XWAY (...xway, __kwargtrans__ (dict_way))})));
			xway_meses_referencia.append (op);
		}
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('FREQU??NCIA', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('REGISTRO DE FALTAS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container extend'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-registro_de_faltas', _class: 'p-row card e-padding_auto'})), DIV (__kwargtrans__ ({_id: 'modal_faltas_container'})), DIV (__kwargtrans__ ({_id: 'modal_justificar_container'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container extend'})));
		html.html_to ('#main-container');
		if (self.disciplina !== null && self.disciplina !== undefined) {
			var html = DIV (H2 ('Registro de faltas da disciplina de ', self.disciplina, ' da turma ', self.turma), __kwargtrans__ ({_class: 'registro_de_faltas_container'}));
		}
		else {
			var html = DIV (H2 ('Registro de faltas da turma ', self.turma), __kwargtrans__ ({_class: 'registro_de_faltas_container'}));
		}
		var tabela = TABLE (TR (TH ('N??', __kwargtrans__ ({_class: 'rotulo', _rowspan: 2})), TH ('NOME ALUNO(A)', __kwargtrans__ ({_class: 'rotulo', _rowspan: 2})), TH ('DIAS LETIVOS', __kwargtrans__ ({_colspan: self.quant_dias, _class: 'rotulo'}))), __kwargtrans__ ({_class: 'tabela_registro_de_faltas'}));
		self.mapa_justificativas = dict ({});
		for (var x of registro_de_faltas) {
			var linha = TR (__kwargtrans__ ({_class: 'linha_registro_de_faltas'}));
			for (var y of x) {
				if (y [1] ['tipo'] == 'cabecalho') {
					var celula = TH (DIV (y [0], __kwargtrans__ ({_class: 'registro_de_faltas_rotulo_dia'})), __kwargtrans__ (y [1]));
				}
				else if (y [1] ['tipo'] == 'botao') {
					var fal = y [0];
					if (fal == 'false' || fal == false) {
						var bas_nas = DIV (y [1] ['_data-data_falta'].__getslice__ (-(2), null, 1), __kwargtrans__ ({_class: 'apagadinho'}));
					}
					else if (fal == 'J') {
						var key_mapa_jus = y [1] ['_id'];
						self.mapa_justificativas [key_mapa_jus] = y [1] ['just'];
						var bas_nas = I (y [0], __kwargtrans__ ({_class: 'faltas_justificadas'}));
					}
					else {
						var bas_nas = I (y [0], __kwargtrans__ ({_class: 'numero_de_faltas'}));
					}
					var celula = TD (bas_nas, __kwargtrans__ (y [1]));
				}
				else {
					var celula = TD (y [0], __kwargtrans__ (y [1]));
				}
				linha.append (celula);
			}
			tabela.append (linha);
		}
		var botao_mes_anterior = DIV (I (__kwargtrans__ ({_class: 'fas fa-angle-double-left'})), __kwargtrans__ (dict ({'_class': 'botao_mes_anterior icon_button', '_title': 'Di??rio do Aluno Anterior', '_disabled': 'disabled'})));
		var botao_proximo_mes = DIV (I (__kwargtrans__ ({_class: 'fas fa-angle-double-right'})), __kwargtrans__ (dict ({'_class': 'botao_proximo_mes icon_button', '_title': 'Di??rio do Pr??ximo Aluno turma', '_disabled': 'disabled'})));
		var way = ['registro-de-faltas', self.id_escola, self.ano_letivo, self.id_turma];
		if (self.id_disciplina !== null) {
			way.append (self.id_disciplina);
		}
		if (self.anterior !== null && self.anterior !== undefined) {
			var dict_mes_ant = dict ({'_mes': self.anterior.py_split (' - ') [1]});
			var nway = list (way);
			var botao_mes_anterior = A (I (__kwargtrans__ ({_class: 'fas fa-angle-double-left'})), __kwargtrans__ (dict ({'_class': 'botao_mes_anterior icon_button', '_title': 'M??s anterior', '_href': window.PhanterPWA.XWAY (...nway, __kwargtrans__ (dict_mes_ant))})));
		}
		if (self.proximo !== null && self.proximo !== undefined) {
			var dict_mes_pro = dict ({'_mes': self.proximo.py_split (' - ') [1]});
			var botao_proximo_mes = A (I (__kwargtrans__ ({_class: 'fas fa-angle-double-right'})), __kwargtrans__ (dict ({'_class': 'botao_proximo_mes icon_button', '_title': 'Pr??ximo m??s', '_href': window.PhanterPWA.XWAY (...way, __kwargtrans__ (dict_mes_pro))})));
		}
		var painel = DIV (LABEL (self.rotulo_mes_ano), DIV (DIV (DIV (DIV (DIV (DIV (tabela, __kwargtrans__ ({_class: 'diario-registro_de_faltas-container'})), __kwargtrans__ ({_class: 'diario-registro_de_faltas-wrapper'})), __kwargtrans__ ({_class: 'p-row e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (botao_mes_anterior, botao_proximo_mes, widgets.MenuBox ('drop_{0}_{0}'.format (self.id_turma, self.id_disciplina), I (__kwargtrans__ ({_class: 'fas fa-calendar-week'})), ...xway_meses_referencia), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper has_buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control'}));
		html.append (painel);
		html.html_to ('#content-registro_de_faltas');
		self.diario_binds ();
	});},
	get diario_binds () {return __get__ (this, function (self) {
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
		$ ('.faltas.celula_registro_faltas').off ('click.enviar_faltas').off ('click.enviar_faltas_rg_jus').on ('click.enviar_faltas', (function __lambda__ () {
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
			return self.modal_confirmar_faltas ($ (this));
		}));
		$ ('.faltas.celula_registro_justificadas').off ('click.enviar_faltas_rg_jus').off ('click.enviar_faltas').on ('click.enviar_faltas_rg_jus', (function __lambda__ () {
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
			return self.abrir_modal_justificar ($ (this), self.mapa_justificativas.py_get ($ (this).attr ('id'), ''));
		}));
	});},
	get abrir_diario () {return __get__ (this, function (self, url) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'url': var url = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.location = url;
	});},
	get modal_confirmar_faltas () {return __get__ (this, function (self, el) {
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
		var tem_falta = $ (el).attr ('data-tem_falta');
		var nome_aluno = $ (el).data ('nome_aluno');
		var eh_educacao_infantil = $ (el).data ('eh_educacao_infantil');
		console.log (eh_educacao_infantil);
		var data = $ (el).data ('data_falta');
		var __left0__ = data.py_split ('-');
		var ano = __left0__ [0];
		var mes = __left0__ [1];
		var dia = __left0__ [2];
		var mes_ext = self.meses [mes];
		var data_ext = '{0} de {1} de {2}'.format (dia, mes_ext, ano);
		var id_disciplina = $ (el).data ('id_disciplina');
		if (id_disciplina === null || id_disciplina === undefined) {
			var id_disciplina = null;
		}
		if (tem_falta === false || tem_falta == 'false') {
			var complement = ' Falta';
			var falta = true;
			if (str (eh_educacao_infantil).lower () == 'true') {
				var content = DIV (P ('Confirme a inser????o de ', STRONG ('FALTA', __kwargtrans__ ({_style: 'color: red;'})), ' no presente aluno no dia de ', STRONG (data_ext), '.'), DIV (widgets.Input ('quanti_faltas', __kwargtrans__ ({value: '1'})), __kwargtrans__ ({_style: 'margin:auto; width: 100px; display: none;'})), __kwargtrans__ ({_class: 'p-row'}));
			}
			else {
				var content = DIV (P ('Confirme a inser????o de ', STRONG ('FALTA', __kwargtrans__ ({_style: 'color: red;'})), ' no presente aluno no dia de ', STRONG (data_ext), '.'), P ('Escolha a quantidade de faltas abaixo'), DIV (widgets.Select ('quanti_faltas', __kwargtrans__ ({value: '1', data_set: [['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'], ['6', '6'], ['7', '7'], ['8', '8'], ['9', '9'], ['10', '10']]})), __kwargtrans__ ({_style: 'margin:auto; width: 100px;'})), __kwargtrans__ ({_class: 'p-row'}));
			}
			var footer = DIV (forms.FormButton ('confirmar_falta', 'Confirmar{0}'.format (complement), __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), forms.FormButton ('confirmar_falta_e_justificar', 'Confirmar falta e Justificar'.format (complement), __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), forms.FormButton ('cancelar', 'Cancelar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		}
		else {
			var complement = ' remo????o da Falta';
			var falta = false;
			var content = DIV (P ('O(A) aluno(a) possui ', STRONG (tem_falta, (str (tem_falta) == '1' ? ' FALTA' : ' FALTAS'), __kwargtrans__ ({_style: 'color: orange'})), ' em ', STRONG (data_ext), '. Voc?? pode Justificar ou Remover estas faltas.'), __kwargtrans__ ({_class: 'p-row'}));
			var footer = DIV (forms.FormButton ('justificar_falta_novo', 'Justificar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), forms.FormButton ('confirmar_falta', 'Remover Falta(s)', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), forms.FormButton ('cancelar', 'Cancelar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		}
		self.modal_faltas = modal.Modal ('#modal_faltas_container', __kwargtrans__ (dict ({'title': nome_aluno, 'content': content, 'footer': footer, 'form': 'faltas'})));
		self.modal_faltas.open ();
		$ ('#phanterpwa-widget-form-form_button-justificar_falta_novo').off ('click.adicionar_justificar_novo').on ('click.adicionar_justificar_novo', (function __lambda__ () {
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
			return self.abrir_modal_justificar (el);
		}));
		$ ('#phanterpwa-widget-form-form_button-confirmar_falta').off ('click.adicionar_faltas_sim').on ('click.adicionar_faltas_sim', (function __lambda__ () {
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
			return self._on_click_faltas (id_matricula, id_disciplina, falta, data);
		}));
		$ ('#phanterpwa-widget-form-form_button-confirmar_falta_e_justificar').off ('click.adicionar_faltas_e_just').on ('click.adicionar_faltas_e_just', (function __lambda__ () {
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
			return self._on_click_faltas (id_matricula, id_disciplina, falta, data, __kwargtrans__ ({justificar: true}));
		}));
		$ ('#phanterpwa-widget-form-form_button-cancelar').off ('click.cancelar_falta').on ('click.cancelar_falta', (function __lambda__ () {
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
			return self.modal_faltas.close ();
		}));
	});},
	get _on_click_faltas () {return __get__ (this, function (self, id_matricula, id_disciplina, falta, data, justificar) {
		if (typeof justificar == 'undefined' || (justificar != null && justificar.hasOwnProperty ("__kwargtrans__"))) {;
			var justificar = false;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
						case 'id_disciplina': var id_disciplina = __allkwargs0__ [__attrib0__]; break;
						case 'falta': var falta = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'justificar': var justificar = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var formdata = new FormData ();
		formdata.append ('falta', falta);
		if (window.PhanterPWA.get_widget ('quanti_faltas') === null) {
			var quantidade = '';
		}
		else {
			var quantidade = window.PhanterPWA.get_widget ('quanti_faltas').value ();
		}
		formdata.append ('quantidade_de_faltas', quantidade);
		formdata.append ('data', data);
		if (self.id_disciplina !== null && self.id_disciplina !== undefined) {
			window.PhanterPWA.PUT ('api', 'registro-de-faltas', self.id_escola, self.ano_letivo, id_matricula, id_disciplina, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
				return self.depois_de_enviar_registro (data, ajax_status, justificar);
			})}));
		}
		else {
			window.PhanterPWA.PUT ('api', 'registro-de-faltas', self.id_escola, self.ano_letivo, id_matricula, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
				return self.depois_de_enviar_registro (data, ajax_status, justificar);
			})}));
		}
		self.modal_faltas.close ();
	});},
	get depois_de_enviar_registro () {return __get__ (this, function (self, data, ajax_status, justificar) {
		if (typeof justificar == 'undefined' || (justificar != null && justificar.hasOwnProperty ("__kwargtrans__"))) {;
			var justificar = false;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'ajax_status': var ajax_status = __allkwargs0__ [__attrib0__]; break;
						case 'justificar': var justificar = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (ajax_status == 'success') {
			var json = data.responseJSON;
			json.celula_update;
			if (json.celula_update !== null && json.celula_update !== undefined) {
				if (json.celula_update [1] === false || json.celula_update [1] == 'false') {
					$ ('#{0}'.format (json.celula_update [0])).html (DIV (json.celula_update [0].__getslice__ (8, 10, 1), __kwargtrans__ ({_class: 'apagadinho'})).jquery ());
					$ ('#{0}'.format (json.celula_update [0])).attr ('data-tem_falta', 'false');
				}
				else {
					var valor = json.celula_update [2];
					var bas_nas = I (valor, __kwargtrans__ ({_class: 'numero_de_faltas'})).jquery ();
					$ ('#{0}'.format (json.celula_update [0])).html (bas_nas);
					$ ('#{0}'.format (json.celula_update [0])).attr ('data-tem_falta', str (valor));
				}
			}
			self.diario_binds ();
			if (justificar === true) {
				self.abrir_modal_justificar ($ ('#{0}'.format (json.celula_update [0])));
			}
		}
	});},
	get abrir_modal_justificar () {return __get__ (this, function (self, el, justificativa) {
		if (typeof justificativa == 'undefined' || (justificativa != null && justificativa.hasOwnProperty ("__kwargtrans__"))) {;
			var justificativa = '';
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
						case 'justificativa': var justificativa = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self.modal_faltas !== undefined) {
			self.modal_faltas.close ();
		}
		var id_matricula = $ (el).data ('id_matricula');
		var tem_falta = $ (el).attr ('data-tem_falta');
		var nome_aluno = $ (el).data ('nome_aluno');
		var data = $ (el).data ('data_falta');
		var __left0__ = data.py_split ('-');
		var ano = __left0__ [0];
		var mes = __left0__ [1];
		var dia = __left0__ [2];
		var mes_ext = self.meses [mes];
		var data_ext = '{0} de {1} de {2}'.format (dia, mes_ext, ano);
		var id_disciplina = $ (el).data ('id_disciplina');
		if (id_disciplina === null || id_disciplina === undefined) {
			var id_disciplina = null;
		}
		var falta = false;
		var extra_btn = [];
		if (tem_falta == 'J') {
			var extra_btn = [forms.FormButton ('remover_justificativa', 'Remover Justificativa', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'}))];
			var just_text = P ('O(A) aluno(a) justificou a(s) falta(s) em ', STRONG (data_ext), '. Voc?? pode editar a justificativa ou excluir a mesma.');
		}
		else {
			var just_text = P ('O(A) aluno(a) possui ', STRONG (tem_falta, (str (tem_falta) == '1' ? ' FALTA' : ' FALTAS'), __kwargtrans__ ({_style: 'color: orange'})), ' em ', STRONG (data_ext), '. Adicione abaixo a justificativa desta(s) falta(s).');
		}
		var content = DIV (just_text, DIV (DIV (widgets.Textarea ('justificativa', __kwargtrans__ ({label: 'Digite aqui a justificativa da falta', value: justificativa}))), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.FormButton ('submit_justificar_falta', 'Justificar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), ...extra_btn, forms.FormButton ('cancelar_just', 'Cancelar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_justificar = modal.Modal ('#modal_justificar_container', __kwargtrans__ (dict ({'title': nome_aluno, 'content': content, 'footer': footer, 'form': 'justificar'})));
		self.modal_justificar.open ();
		$ ('#phanterpwa-widget-form-form_button-submit_justificar_falta').off ('click.adicionar_justificar').on ('click.adicionar_justificar', (function __lambda__ () {
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
			return self._on_click_justificar (id_matricula, id_disciplina, data);
		}));
		$ ('#phanterpwa-widget-form-form_button-remover_justificativa').off ('click.adicionar_justificar_remover').on ('click.adicionar_justificar_remover', (function __lambda__ () {
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
			return self._on_click_remover_justificativa (id_matricula, id_disciplina, data);
		}));
		$ ('#phanterpwa-widget-form-form_button-cancelar_just').off ('click.cancelar_just').on ('click.cancelar_just', (function __lambda__ () {
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
			return self.modal_justificar.close ();
		}));
	});},
	get _on_click_justificar () {return __get__ (this, function (self, id_matricula, id_disciplina, data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
						case 'id_disciplina': var id_disciplina = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var justificativa = $ ('#phanterpwa-widget-textarea-textarea-justificativa').val ();
		var formdata = new FormData ();
		formdata.append ('justificativa', justificativa);
		formdata.append ('data', data);
		if (self.id_disciplina !== null && self.id_disciplina !== undefined) {
			window.PhanterPWA.PUT ('api', 'justificar-faltas', self.id_escola, self.ano_letivo, id_matricula, id_disciplina, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
				return self.depois_de_enviar_justificativa (data, ajax_status);
			})}));
		}
		else {
			window.PhanterPWA.PUT ('api', 'justificar-faltas', self.id_escola, self.ano_letivo, id_matricula, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
				return self.depois_de_enviar_justificativa (data, ajax_status);
			})}));
		}
	});},
	get _on_click_remover_justificativa () {return __get__ (this, function (self, id_matricula, id_disciplina, data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
						case 'id_disciplina': var id_disciplina = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var justificativa = $ ('#phanterpwa-widget-textarea-textarea-justificativa').val ();
		var formdata = new FormData ();
		formdata.append ('justificativa', justificativa);
		formdata.append ('deletar_justificativa', true);
		formdata.append ('data', data);
		if (self.id_disciplina !== null && self.id_disciplina !== undefined) {
			window.PhanterPWA.PUT ('api', 'justificar-faltas', self.id_escola, self.ano_letivo, id_matricula, id_disciplina, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
				return self.depois_de_enviar_justificativa (data, ajax_status);
			})}));
		}
		else {
			window.PhanterPWA.PUT ('api', 'justificar-faltas', self.id_escola, self.ano_letivo, id_matricula, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
				return self.depois_de_enviar_justificativa (data, ajax_status);
			})}));
		}
	});},
	get depois_de_enviar_justificativa () {return __get__ (this, function (self, data, ajax_status) {
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
			self.modal_justificar.close ();
			var json = data.responseJSON;
			json.celula_update;
			if (json.celula_update !== null && json.celula_update !== undefined) {
				if (json.celula_update [1] == 'J') {
					var bas_nas = I ('J', __kwargtrans__ ({_class: 'faltas_justificadas'})).jquery ();
					$ ('#{0}'.format (json.celula_update [0])).html (bas_nas).removeClass ('celula_registro_faltas').addClass ('celula_registro_justificadas');
					$ ('#{0}'.format (json.celula_update [0])).attr ('data-tem_falta', 'J');
					self.mapa_justificativas [json.celula_update [0]] = json.celula_update [3];
				}
				else {
					var valor = json.celula_update [2];
					var bas_nas = I (valor, __kwargtrans__ ({_class: 'numero_de_faltas'})).jquery ();
					$ ('#{0}'.format (json.celula_update [0])).html (bas_nas).addClass ('celula_registro_faltas').removeClass ('celula_registro_justificadas');
					$ ('#{0}'.format (json.celula_update [0])).attr ('data-tem_falta', str (valor));
					delete self.mapa_justificativas [json.celula_update [0]];
				}
			}
			self.diario_binds ();
		}
	});}
});
export var TotalDetalhado =  __class__ ('TotalDetalhado', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, id_escola, ano_letivo, id_turma, mes) {
		if (typeof id_turma == 'undefined' || (id_turma != null && id_turma.hasOwnProperty ("__kwargtrans__"))) {;
			var id_turma = null;
		};
		if (typeof mes == 'undefined' || (mes != null && mes.hasOwnProperty ("__kwargtrans__"))) {;
			var mes = null;
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
						case 'id_turma': var id_turma = __allkwargs0__ [__attrib0__]; break;
						case 'mes': var mes = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.index_instance = index_instance;
		self.id_escola = id_escola;
		self.ano_letivo = ano_letivo;
		self.id_turma = id_turma;
		self.mes = mes;
		self.meses = dict ({'01': 'Janeiro', '02': 'Fevereiro', '03': 'Mar??o', '04': 'Abril', '05': 'Maio', '06': 'Junho', '07': 'Julho', '08': 'Agosto', '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'});
		if (document.getElementById ('content-total_detalhado') === null) {
			var botoes_float = [widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-print'})), __kwargtrans__ ({_title: 'Imprimir documento', _class: 'botao_imprimir_diario_de_notas', _onclick: 'print();'}))];
			if (self.id_turma !== null) {
				botoes_float.insert (0, widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-calculator'})), __kwargtrans__ ({_class: 'botao_alternar_faltas', _title: 'C??lculo das faltas dos Alunos', _href: window.PhanterPWA.XWAY ('frequencia', 'total-de-faltas', self.id_escola, self.ano_letivo, self.id_turma)})));
				botoes_float.insert (0, widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-list-alt'})), __kwargtrans__ ({_class: 'botao_turmas', _title: 'Turma detalhada', _href: window.PhanterPWA.XWAY ('turmas', self.id_escola, self.ano_letivo, 'especifico', self.id_turma)})));
			}
			else {
				botoes_float.insert (0, widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-calculator'})), __kwargtrans__ ({_class: 'botao_alternar_faltas', _title: 'C??lculo das faltas dos Alunos', _href: window.PhanterPWA.XWAY ('frequencia', 'total-de-faltas', self.id_escola, self.ano_letivo)})));
			}
			botoes_float.insert (0, widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-chalkboard'})), __kwargtrans__ ({_class: 'botao_turmas', _title: 'Lista de turmas', _href: window.PhanterPWA.XWAY ('turmas', self.id_escola, self.ano_letivo)})));
			var html_float = widgets.FloatMenu ('menu_impressao', I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), ...botoes_float);
			var html = CONCATENATE (DIV (DIV (DIV (DIV ('FREQU??NCIA', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('TOTAL DE FALTAS DETALHADO', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container extend'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_class: 'p-row card e-padding_auto'})), __kwargtrans__ ({_id: 'content-total_detalhado', _class: 'phanterpwa-container p-container extend'})), html_float);
			html.html_to ('#main-container');
		}
		self.get_dados ();
	});},
	get py_update () {return __get__ (this, function (self) {
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
		self.mes = window.PhanterPWA.Request.get_param ('mes');
		self.id_turma = window.PhanterPWA.Request.get_arg (3);
		self.get_dados ();
	});},
	get get_dados () {return __get__ (this, function (self) {
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
		if (self.id_turma !== null && self.id_turma !== undefined) {
			window.PhanterPWA.GET ('api', 'faltas-alunos', self.id_escola, self.ano_letivo, self.id_turma, __kwargtrans__ ({_mes: self.mes, onComplete: self.depois_de_pegar_os_dados}));
		}
		else {
			window.PhanterPWA.GET ('api', 'faltas-alunos', self.id_escola, self.ano_letivo, __kwargtrans__ ({_mes: self.mes, onComplete: self.depois_de_pegar_os_dados}));
		}
	});},
	get depois_de_pegar_os_dados () {return __get__ (this, function (self, data, ajax_status) {
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
			self.dados_faltas = json;
			var html = DIV (__kwargtrans__ ({_class: 'meses_do_ano media-print-visible'}));
			for (var x of json.meses) {
				var tabela_html = TABLE (__kwargtrans__ ({_class: 'tabela_mes_faltas_aluno tabela_impressao'}));
				var html_mes = DIV (DIV (x, __kwargtrans__ ({_class: 'titulo_mes card-title'})), tabela_html, __kwargtrans__ ({_class: 'mes_do_ano tabela_impressao_void_container p-row card e-padding_auto e-margin_bottom_20'}));
				var linha_um = false;
				for (var alu of json.alunos) {
					if (alu.mes == x) {
						var linhas = [];
						if (!(linha_um)) {
							var linha_um = true;
							linhas.append (TR (TH ('Nome Aluno(a)', __kwargtrans__ ({_rowspan: 2})), TH ('Disciplinas (Fundamental)', __kwargtrans__ ({_rowspan: 2})), TH ('DATAS DAS FALTAS', __kwargtrans__ ({_colspan: len (json.datas_por_meses [x])})), TH ('TOTAL', __kwargtrans__ ({_rowspan: 2}))));
							var colunas_meses = [];
							for (var dias_meses of json.datas_por_meses [x]) {
								colunas_meses.append (TH (dias_meses.__getslice__ (8, 10, 1)));
							}
							linhas.append (TR (...colunas_meses));
						}
						var id_mat_aluno = alu.id;
						var nome_aluno = alu.nome_aluno;
						var total_faltas = alu.total_faltas;
						var cont_dis = 0;
						for (var dis of json.disciplinas) {
							if (json.data [x] [id_mat_aluno] [dis] !== undefined) {
								cont_dis++;
								if (cont_dis == 1) {
									var fatas_datas = [];
									for (var data_fal of json.datas_por_meses [x]) {
										if (json.data [x] [id_mat_aluno] [dis] [data_fal] !== undefined) {
											fatas_datas.append (TD ((json.data [x] [id_mat_aluno] [dis] [data_fal] ['falta_justificada'] === true ? 'J' : json.data [x] [id_mat_aluno] [dis] [data_fal] ['faltas']), __kwargtrans__ ({_class: 'e-text_align_center'})));
										}
										else {
											fatas_datas.append (TD ('', __kwargtrans__ ({_class: 'e-text_align_center'})));
										}
									}
									fatas_datas.append (TD (total_faltas, __kwargtrans__ ({_rowspan: len (dict (json.data [x] [id_mat_aluno]).py_keys ()), _class: 'e-text_align_center'})));
									linhas.append (TR (TD (nome_aluno, __kwargtrans__ ({_rowspan: len (dict (json.data [x] [id_mat_aluno]).py_keys ())})), TD ((dis == 'Educa????o Infantil' ? '-' : dis), __kwargtrans__ ({_class: 'e-text_align_center'})), ...fatas_datas));
								}
								else {
									var fatas_datas = [];
									for (var data_fal of json.datas_por_meses [x]) {
										if (json.data [x] [id_mat_aluno] [dis] [data_fal] !== undefined) {
											fatas_datas.append (TD ((json.data [x] [id_mat_aluno] [dis] [data_fal] ['falta_justificada'] === true ? 'J' : json.data [x] [id_mat_aluno] [dis] [data_fal] ['faltas']), __kwargtrans__ ({_class: 'e-text_align_center'})));
										}
										else {
											fatas_datas.append (TD ('', __kwargtrans__ ({_class: 'e-text_align_center'})));
										}
									}
									linhas.append (TR (TD ((dis == 'Educa????o Infantil' ? '-' : dis), __kwargtrans__ ({_class: 'e-text_align_center'})), ...fatas_datas));
								}
							}
						}
						tabela_html.append (TBODY (...linhas, __kwargtrans__ ({_class: 'body_mes_faltas_alunos'})));
					}
				}
				html.append (html_mes);
			}
			DIV (html, __kwargtrans__ ({_class: 'phanterpwa-simple-media-print'})).html_to ('#content-total_detalhado');
		}
	});}
});
export var TotalDeFaltas =  __class__ ('TotalDeFaltas', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, id_escola, ano_letivo, id_turma, mes) {
		if (typeof id_turma == 'undefined' || (id_turma != null && id_turma.hasOwnProperty ("__kwargtrans__"))) {;
			var id_turma = null;
		};
		if (typeof mes == 'undefined' || (mes != null && mes.hasOwnProperty ("__kwargtrans__"))) {;
			var mes = null;
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
						case 'id_turma': var id_turma = __allkwargs0__ [__attrib0__]; break;
						case 'mes': var mes = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.index_instance = index_instance;
		self.id_escola = id_escola;
		self.ano_letivo = ano_letivo;
		self.id_turma = id_turma;
		self.mes = mes;
		self.meses = dict ({'01': 'Janeiro', '02': 'Fevereiro', '03': 'Mar??o', '04': 'Abril', '05': 'Maio', '06': 'Junho', '07': 'Julho', '08': 'Agosto', '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'});
		if (document.getElementById ('content-total_de_faltas') === null) {
			var botoes_float = [widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-print'})), __kwargtrans__ ({_title: 'Imprimir documento', _class: 'botao_imprimir_diario_de_notas', _onclick: 'print();'}))];
			if (self.id_turma !== null) {
				botoes_float.insert (0, widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-list-ol'})), __kwargtrans__ ({_class: 'botao_alternar_faltas', _title: 'Faltas dos alunos detalhado', _href: window.PhanterPWA.XWAY ('frequencia', 'total-detalhado', self.id_escola, self.ano_letivo, self.id_turma)})));
				botoes_float.insert (0, widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-list-alt'})), __kwargtrans__ ({_class: 'botao_turmas', _title: 'Turma detalhada', _href: window.PhanterPWA.XWAY ('turmas', self.id_escola, self.ano_letivo, 'especifico', self.id_turma)})));
			}
			else {
				botoes_float.insert (0, widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-list-ol'})), __kwargtrans__ ({_class: 'botao_alternar_faltas', _title: 'Faltas dos alunos detalhado', _href: window.PhanterPWA.XWAY ('frequencia', 'total-detalhado', self.id_escola, self.ano_letivo)})));
			}
			botoes_float.insert (0, widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-chalkboard'})), __kwargtrans__ ({_class: 'botao_turmas', _title: 'Lista de turmas', _href: window.PhanterPWA.XWAY ('turmas', self.id_escola, self.ano_letivo)})));
			var html_float = widgets.FloatMenu ('menu_impressao', I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), ...botoes_float);
			var html = CONCATENATE (DIV (DIV (DIV (DIV ('FREQU??NCIA', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('C??LCULOS DAS FALTAS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container extend'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_class: 'p-row card e-padding_auto'})), __kwargtrans__ ({_id: 'content-total_de_faltas', _class: 'phanterpwa-container p-container extend'})), html_float);
			html.html_to ('#main-container');
		}
		self.get_dados ();
	});},
	get py_update () {return __get__ (this, function (self) {
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
		self.mes = window.PhanterPWA.Request.get_param ('mes');
		self.id_turma = window.PhanterPWA.Request.get_arg (3);
		self.get_dados ();
	});},
	get get_dados () {return __get__ (this, function (self) {
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
		if (self.id_turma !== null && self.id_turma !== undefined) {
			window.PhanterPWA.GET ('api', 'faltas-alunos', self.id_escola, self.ano_letivo, self.id_turma, __kwargtrans__ ({_mes: self.mes, onComplete: self.depois_de_pegar_os_dados}));
		}
		else {
			window.PhanterPWA.GET ('api', 'faltas-alunos', self.id_escola, self.ano_letivo, __kwargtrans__ ({_mes: self.mes, onComplete: self.depois_de_pegar_os_dados}));
		}
	});},
	get depois_de_pegar_os_dados () {return __get__ (this, function (self, data, ajax_status) {
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
			self.dados_faltas = json;
			var html = DIV (__kwargtrans__ ({_class: 'meses_do_ano media-print-visible'}));
			for (var x of json.meses) {
				var tabela_html = TABLE (__kwargtrans__ ({_class: 'tabela_mes_faltas_aluno tabela_impressao'}));
				var html_mes = DIV (DIV (x, __kwargtrans__ ({_class: 'titulo_mes card-title'})), tabela_html, __kwargtrans__ ({_class: 'mes_do_ano tabela_impressao_void_container p-row card e-padding_auto e-margin_bottom_20'}));
				var linha_um = false;
				for (var alu of json.alunos) {
					if (alu.mes == x) {
						var linhas = [];
						if (!(linha_um)) {
							var linha_um = true;
							linhas.append (TR (TH ('NOME DO(A) ALUNO(A)'), TH ('TURMA'), TH ('S??RIE'), TH ('CPF'), TH ('NIS'), TH ('TOTAL'), TH ('FREQU??NCIA')));
						}
						var id_mat_aluno = alu.id;
						var nome_aluno = alu.nome_aluno;
						var total_faltas = alu.total_faltas;
						var turma = alu.turma;
						var serie = alu.serie;
						var calc_faltas = alu.calc_faltas;
						var CPF = alu.CPF;
						var nis = alu.nis;
						var frequencia = alu.frequencia;
						var dias_letivos = alu.dias_letivos;
						var title = 'Educa????o Infantil cada falta corresponde 1 dia';
						if (alu.ensino == 'Ensino Fundamental II') {
							var title = '{0}/5 = {1}'.format (total_faltas, calc_faltas);
						}
						else if (alu.ensino == 'Ensino Fundamental I') {
							var title = '{0}/4 = {1}'.format (total_faltas, calc_faltas);
						}
						var title_calc = '100 - (({0}/{1}) x 100)'.format (calc_faltas, dias_letivos);
						var cont_dis = 0;
						linhas.append (TR (TD (nome_aluno), TD (turma, __kwargtrans__ ({_class: 'e-text_align_center'})), TD (serie, __kwargtrans__ ({_class: 'e-text_align_center'})), TD (CPF, __kwargtrans__ ({_class: 'e-text_align_center'})), TD (nis, __kwargtrans__ ({_class: 'e-text_align_center'})), TD (calc_faltas, __kwargtrans__ ({_title: title, _class: 'e-text_align_center'})), TD (frequencia, '%', __kwargtrans__ ({_title: title_calc, _class: 'e-text_align_center'})), __kwargtrans__ ({_title: (total_faltas == 0 ? 'O(a) aluno(a) teve faltas, por??m todas elas foram justificadas.' : null), _class: (total_faltas == 0 ? 'linha_aluno_faltas justificada' : 'linha_aluno_faltas')})));
						tabela_html.append (TBODY (...linhas, __kwargtrans__ ({_class: 'body_mes_faltas_alunos'})));
					}
				}
				html.append (html_mes);
			}
			DIV (html, __kwargtrans__ ({_class: 'phanterpwa-simple-media-print'})).html_to ('#content-total_de_faltas');
		}
	});}
});

//# sourceMappingURL=handlers.frequencia_escolar.map