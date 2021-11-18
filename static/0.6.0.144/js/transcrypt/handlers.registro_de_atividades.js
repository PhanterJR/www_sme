// Transcrypt'ed from Python, 2021-11-09 16:43:35
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
var __name__ = 'handlers.registro_de_atividades';
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
export var TBODY = helpers.XmlConstructor.tagger ('tbody');
export var LABEL = helpers.XmlConstructor.tagger ('label');
export var TEXTAREA = helpers.XmlConstructor.tagger ('textarea');
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var TABLE = helpers.XmlConstructor.tagger ('table');
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
		if (arg0 === null || arg0 === undefined) {
			var html = escolas.EscolherEscola (__kwargtrans__ ({id_target: '#content-registro_de_atividades', callback_link: (function __lambda__ (id_escola) {
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
				return '#_phanterpwa:/registro-de-atividades/{0}'.format (id_escola);
			})}));
		}
		else if (str (arg0).isdigit () && (arg1 === null || arg1 === undefined)) {
			var html = anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({id_target: '#content-registro_de_atividades', callback_link: (function __lambda__ (ano) {
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
				return '#_phanterpwa:/registro-de-atividades/{0}/{1}'.format (arg0, ano);
			})}));
		}
		else if (str (arg0).isdigit () && str (arg1).isdigit ()) {
			self.RegistroDeAtividades = RegistroDeAtividades (self, arg0, arg1, arg2, arg3, arg4);
		}
		if (window.PhanterPWA.Request.get_param ('retornar') === null) {
			var BackButton1 = left_bar.LeftBarButton ('back_registro_de_atividades', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('turmas', arg0, arg1), 'position': 'top', 'show_if_way_match': '^registro-de-atividades\\/[0-9]{1,}\\/[0-9]{1,}.*$'})));
		}
		else if (window.PhanterPWA.Request.get_param ('retornar') == 'turma-simples') {
			var BackButton1 = left_bar.LeftBarButton ('back_registro_de_atividades', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('turmas', arg0, arg1), 'position': 'top', 'show_if_way_match': '^registro-de-atividades\\/[0-9]{1,}\\/[0-9]{1,}.*$'})));
		}
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
	}));}
});
export var RegistroDeAtividades =  __class__ ('RegistroDeAtividades', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, escola, ano_letivo, turma, rotulo_mes_ano) {
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
		self.index_instance = index_instance;
		self._get_registro_de_atividades ();
		self.meses = dict ({'01': 'Janeiro', '02': 'Fevereiro', '03': 'Março', '04': 'Abril', '05': 'Maio', '06': 'Junho', '07': 'Julho', '08': 'Agosto', '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'});
		self.romanos = dict ({'0': 'Ano inteiro', '1': 'Unidade I', '2': 'Unidade II', '3': 'Unidade III', '4': 'Unidade IV', '5': 'Unidade V', '6': 'Unidade VI', '7': 'Unidade VII', '8': 'Unidade VIII'});
	});},
	get _get_registro_de_atividades () {return __get__ (this, function (self) {
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
		if (self.rotulo_mes_ano !== null && self.rotulo_mes_ano !== undefined) {
			window.PhanterPWA.GET ('api', 'registro-de-atividades', self.id_escola, self.ano_letivo, self.id_turma, self.rotulo_mes_ano, __kwargtrans__ ({onComplete: self.after_get}));
		}
		else {
			window.PhanterPWA.GET ('api', 'registro-de-atividades', self.id_escola, self.ano_letivo, self.id_turma, __kwargtrans__ ({onComplete: self.after_get}));
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
			var registro_de_atividades = json.data;
			self.disciplinas = json.data_disciplinas;
			self.anterior = json.anterior;
			self.proximo = json.proximo;
			self.mes_referencia = json.mes_referencia;
			self.meses_referencia = json.meses_referencia;
			self.dias_letivos = json.dias_letivos;
			self.total_de_dias = json.total_de_dias;
			self.turma = json.turma;
			self.periodo_unidades = json.periodo_unidades;
			self.processar_registro_de_atividades (registro_de_atividades);
		}
	});},
	get processar_registro_de_atividades () {return __get__ (this, function (self, registro_de_atividades) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'registro_de_atividades': var registro_de_atividades = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var xway_meses_referencia = [];
		for (var x of self.meses_referencia) {
			var xway = ['registro-de-atividades', self.id_escola, self.ano_letivo, self.id_turma, x];
			var op = widgets.MenuOption (x, __kwargtrans__ (dict ({'_class': 'botao_meses_referencia wave_on_click', '_href': window.PhanterPWA.XWAY (...xway)})));
			xway_meses_referencia.append (op);
		}
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('CONTROLE DE ATIVIDADES', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container extend'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-registro_de_atividades', _class: 'p-row card e-padding_auto'})), DIV (__kwargtrans__ ({_id: 'modal_registro_de_atividades_container'})), DIV (__kwargtrans__ ({_id: 'modal_estatisticas_unidades_registro_de_atividades'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container extend'})));
		html.html_to ('#main-container');
		if (self.disciplina !== null && self.disciplina !== undefined) {
			var html = DIV (H2 ('Controle de atividades da disciplina de ', self.disciplina, ' da turma ', self.turma), __kwargtrans__ ({_class: 'registro_de_atividades_container'}));
		}
		else {
			var html = DIV (H2 ('Controle de atividades da turma ', self.turma), __kwargtrans__ ({_class: 'registro_de_atividades_container'}));
		}
		var tabela = TABLE (TR (TH ('Nº', __kwargtrans__ ({_class: 'rotulo', _rowspan: 2})), TH ('NOME ALUNO(A)', __kwargtrans__ ({_class: 'rotulo cabecalho_aluno', _rowspan: 2})), TH ('DISCIPLINAS', __kwargtrans__ ({_class: 'rotulo', _rowspan: 2})), TH ('DIAS LETIVOS', __kwargtrans__ ({_colspan: self.total_de_dias, _class: 'rotulo'}))), TR (...(function () {
			var __accu0__ = [];
			for (var dat of self.dias_letivos) {
				__accu0__.append (TH (dat.__getslice__ (-(2), null, 1), __kwargtrans__ ({_class: 'rotulo'})));
			}
			return __accu0__;
		}) ()), __kwargtrans__ ({_class: 'tabela_registro_de_atividades'}));
		for (var x of registro_de_atividades) {
			var linha = TR (TH (x.numero, __kwargtrans__ ({_rowspan: x.tot_disciplinas})), TH (x.nome, __kwargtrans__ ({_rowspan: x.tot_disciplinas})));
			var body = TBODY (linha, __kwargtrans__ ({_class: 'tbody_regitro_de_atividades'}));
			var proximas_linhas = [];
			var cont = 0;
			for (var y of x.disciplinas) {
				cont++;
				if (cont == 1) {
					linha.append (TH (self.disciplinas [y [0]]));
					for (var dia of self.dias_letivos) {
						if (__in__ (dia, y [1])) {
							if (y [1] [dia] == 'NF') {
								linha.append (TD (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:red;'})), __kwargtrans__ ({_class: 'registro_de_atividades semana_par'})));
							}
							else if (y [1] [dia] == 'F') {
								linha.append (TD (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:green;'})), __kwargtrans__ ({_class: 'registro_de_atividades semana_par'})));
							}
							else if (y [1] [dia] == 'FP') {
								linha.append (TD (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:#d28a06;'})), __kwargtrans__ ({_class: 'registro_de_atividades semana_par'})));
							}
						}
						else {
							linha.append (TD (DIV (dia.__getslice__ (-(2), null, 1), __kwargtrans__ ({_class: 'apagadinho'})), __kwargtrans__ ({_class: 'registro_de_atividades semana_par'})));
						}
					}
				}
				else {
					var ld = TR (TH (self.disciplinas [y [0]]));
					for (var dia of self.dias_letivos) {
						if (__in__ (dia, y [1])) {
							if (y [1] [dia] == 'NF') {
								ld.append (TD (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:red;'})), __kwargtrans__ ({_class: 'registro_de_atividades semana_par'})));
							}
							else if (y [1] [dia] == 'F') {
								ld.append (TD (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:green;'})), __kwargtrans__ ({_class: 'registro_de_atividades semana_par'})));
							}
							else if (y [1] [dia] == 'FP') {
								ld.append (TD (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:#d28a06;'})), __kwargtrans__ ({_class: 'registro_de_atividades semana_par'})));
							}
						}
						else {
							ld.append (TD (DIV (dia.__getslice__ (-(2), null, 1), __kwargtrans__ ({_class: 'apagadinho'})), __kwargtrans__ ({_class: 'registro_de_atividades semana_par'})));
						}
					}
					body.append (ld);
				}
			}
			tabela.append (body);
		}
		var botao_mes_anterior = DIV (I (__kwargtrans__ ({_class: 'fas fa-angle-double-left'})), __kwargtrans__ (dict ({'_class': 'botao_mes_anterior icon_button', '_title': 'Diário do Aluno Anterior', '_disabled': 'disabled'})));
		var botao_proximo_mes = DIV (I (__kwargtrans__ ({_class: 'fas fa-angle-double-right'})), __kwargtrans__ (dict ({'_class': 'botao_proximo_mes icon_button', '_title': 'Diário do Próximo Aluno turma', '_disabled': 'disabled'})));
		var way = ['registro-de-atividades', self.id_escola, self.ano_letivo, self.id_turma];
		if (self.anterior !== null && self.anterior !== undefined) {
			var nway = list (way);
			nway.append (self.anterior);
			var botao_mes_anterior = A (I (__kwargtrans__ ({_class: 'fas fa-angle-double-left'})), __kwargtrans__ (dict ({'_class': 'botao_mes_anterior icon_button', '_title': 'Mês anterior', '_href': window.PhanterPWA.XWAY (...nway)})));
		}
		var botao_estatistica = A (I (__kwargtrans__ ({_class: 'fas fa-chart-pie'})), __kwargtrans__ (dict ({'_class': 'botao_estatistica icon_button', '_title': 'Estastíticas'})));
		if (self.proximo !== null && self.proximo !== undefined) {
			way.append (self.proximo);
			var botao_proximo_mes = A (I (__kwargtrans__ ({_class: 'fas fa-angle-double-right'})), __kwargtrans__ (dict ({'_class': 'botao_proximo_mes icon_button', '_title': 'Próximo mês', '_href': window.PhanterPWA.XWAY (...way)})));
		}
		var painel = DIV (LABEL (self.mes_referencia), DIV (DIV (DIV (DIV (DIV (DIV (tabela, __kwargtrans__ ({_class: 'diario-registro_de_atividades-container'})), __kwargtrans__ ({_class: 'diario-registro_de_atividades-wrapper'})), __kwargtrans__ ({_class: 'p-row e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (botao_mes_anterior, botao_proximo_mes, widgets.MenuBox ('drop_{0}'.format (x.id), I (__kwargtrans__ ({_class: 'fas fa-calendar-week'})), ...xway_meses_referencia), botao_estatistica, __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper has_buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control'}));
		html.append (painel);
		html.html_to ('#content-registro_de_atividades');
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
		$ ('.registro_de_atividades.celula_registro_de_atividades').off ('click.enviar_registro_de_atividades').on ('click.enviar_registro_de_atividades', (function __lambda__ () {
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
			return self.modal_confirmar_registro_de_atividades ($ (this));
		}));
		$ ('.botao_estatistica').off ('click.botao_estatistica').on ('click.botao_estatistica', (function __lambda__ () {
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
			return self.modal_estatisticas_unidades ();
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
	get iso_br () {return __get__ (this, function (self, data_iso) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data_iso': var data_iso = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var __left0__ = data_iso.py_split ('-');
		var ano = __left0__ [0];
		var mes = __left0__ [1];
		var dia = __left0__ [2];
		return '{0}/{1}/{2}'.format (dia, mes, ano);
	});},
	get modal_estatisticas_unidades () {return __get__ (this, function (self) {
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
		var unidades_disponiveis = DIV (__kwargtrans__ ({_class: 'unidades_disponiveis'}));
		for (var x of self.periodo_unidades) {
			unidades_disponiveis.append (DIV (A ('{0} - {1} à {2}'.format (self.romanos [str (x [0])], self.iso_br (x [1]), self.iso_br (x [2])), __kwargtrans__ ({_href: window.PhanterPWA.XWAY ('estatistica-registro-de-atividades', self.id_escola, self.ano_letivo, self.id_turma, str (x [0]), self.id_disciplina), _class: 'btn e-link'})), __kwargtrans__ ({_class: 'botao_estatistica_unidades'})));
		}
		unidades_disponiveis.append (DIV (A ('Todas as unidades', __kwargtrans__ ({_href: window.PhanterPWA.XWAY ('estatistica-registro-de-atividades', self.id_escola, self.ano_letivo, self.id_turma, '0', self.id_disciplina), _class: 'btn e-link'})), __kwargtrans__ ({_class: 'botao_estatistica_unidades'})));
		self.modal_estatisticas = modal.Modal ('#modal_estatisticas_unidades_registro_de_atividades', __kwargtrans__ (dict ({'title': 'Escolha a Unidade', 'content': unidades_disponiveis})));
		self.modal_estatisticas.open ();
		$ ('.botao_estatistica_unidades').off ('click.ests').on ('click.ests', (function __lambda__ () {
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
			return self.modal_estatisticas.close ();
		}));
	});}
});

//# sourceMappingURL=handlers.registro_de_atividades.map