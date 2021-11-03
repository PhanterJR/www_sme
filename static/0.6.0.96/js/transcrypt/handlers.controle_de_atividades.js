// Transcrypt'ed from Python, 2021-11-03 19:37:51
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
var __name__ = 'handlers.controle_de_atividades';
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
			var html = escolas.EscolherEscola (__kwargtrans__ ({id_target: '#content-controle_de_atividades', callback_link: (function __lambda__ (id_escola) {
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
				return '#_phanterpwa:/controle-de-atividades/{0}'.format (id_escola);
			})}));
		}
		else if (str (arg0).isdigit () && (arg1 === null || arg1 === undefined)) {
			var html = anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({id_target: '#content-controle_de_atividades', callback_link: (function __lambda__ (ano) {
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
				return '#_phanterpwa:/controle-de-atividades/{0}/{1}'.format (arg0, ano);
			})}));
		}
		else if (str (arg0).isdigit () && str (arg1).isdigit ()) {
			self.ControleDeAtividades = ControleDeAtividades (self, arg0, arg1, arg2, arg3, arg4);
		}
		if (window.PhanterPWA.Request.get_param ('retornar') === null) {
			var BackButton1 = left_bar.LeftBarButton ('back_controle_de_atividades', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('professores', 'turmas', arg0, arg1), 'position': 'top', 'show_if_way_match': '^controle-de-atividades\\/[0-9]{1,}\\/[0-9]{1,}.*$'})));
		}
		else {
			var BackButton1 = left_bar.LeftBarButton ('back_controle_de_atividades', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.Request.get_param ('retornar'), 'position': 'top', 'show_if_way_match': '^controle-de-atividades\\/[0-9]{1,}\\/[0-9]{1,}.*$'})));
		}
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
	}));}
});
export var ControleDeAtividades =  __class__ ('ControleDeAtividades', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, escola, ano_letivo, turma, id_disciplina, mes_referencia) {
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
						case 'mes_referencia': var mes_referencia = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.id_escola = escola;
		self.ano_letivo = ano_letivo;
		self.id_turma = turma;
		self.mes_referencia = mes_referencia;
		self.id_disciplina = id_disciplina;
		self.index_instance = index_instance;
		self._get_controle_de_atividades ();
		self.meses = dict ({'01': 'Janeiro', '02': 'Fevereiro', '03': 'Março', '04': 'Abril', '05': 'Maio', '06': 'Junho', '07': 'Julho', '08': 'Agosto', '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'});
	});},
	get _get_controle_de_atividades () {return __get__ (this, function (self) {
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
		if (self.id_disciplina !== null && self.id_disciplina !== undefined) {
			if (self.mes_referencia !== null && self.mes_referencia !== undefined) {
				window.PhanterPWA.GET ('api', 'controle-de-atividades', self.id_escola, self.ano_letivo, self.id_turma, self.id_disciplina, self.mes_referencia, __kwargtrans__ ({onComplete: self.after_get}));
			}
			else {
				window.PhanterPWA.GET ('api', 'controle-de-atividades', self.id_escola, self.ano_letivo, self.id_turma, self.id_disciplina, __kwargtrans__ ({onComplete: self.after_get}));
			}
		}
		else {
			window.PhanterPWA.GET ('api', 'controle-de-atividades', self.id_escola, self.ano_letivo, self.id_turma, __kwargtrans__ ({onComplete: self.after_get}));
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
			var controle_de_atividades = json.data;
			self.disciplinas = json.data_disciplinas;
			self.anterior = json.anterior;
			self.quant_dias = json.quant_dias;
			self.proximo = json.proximo;
			self.mes_referencia = json.mes_referencia;
			self.disciplina = json.disciplina;
			self.meses_referencia = json.meses_referencia;
			self.dias_letivos = json.dias_letivos;
			self.total_de_dias = json.total_de_dias;
			self.turma = json.turma;
			self.eh_multisseriado = json.eh_multisseriado;
			self.meses_calendario = json.meses_calendario;
			self.processar_controle_de_atividades (controle_de_atividades);
		}
	});},
	get processar_controle_de_atividades () {return __get__ (this, function (self, controle_de_atividades) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'controle_de_atividades': var controle_de_atividades = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var xway_meses_referencia = [];
		for (var x of self.meses_referencia) {
			var xway = ['controle-de-atividades', self.id_escola, self.ano_letivo, self.id_turma, self.id_disciplina, x];
			var op = widgets.MenuOption (x, __kwargtrans__ (dict ({'_class': 'botao_meses_referencia wave_on_click', '_href': window.PhanterPWA.XWAY (...xway)})));
			xway_meses_referencia.append (op);
		}
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('CONTROLE DE ATIVIDADES', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container extend'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-controle_de_atividades', _class: 'p-row card e-padding_auto'})), DIV (__kwargtrans__ ({_id: 'modal_controle_de_atividades_container'})), DIV (__kwargtrans__ ({_id: 'modal_dia_controle_de_atividades_container'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container extend'})));
		html.html_to ('#main-container');
		if (self.disciplina !== null && self.disciplina !== undefined) {
			var html = DIV (H2 ('Controle de atividades da disciplina de ', self.disciplina, ' da turma ', self.turma), __kwargtrans__ ({_class: 'controle_de_atividades_container'}));
		}
		else {
			var html = DIV (H2 ('Controle de atividades da turma ', self.turma), __kwargtrans__ ({_class: 'controle_de_atividades_container'}));
		}
		var tabela = TABLE (TR (TH ('Nº', __kwargtrans__ ({_class: 'rotulo', _rowspan: 2})), TH ('NOME ALUNO(A)', __kwargtrans__ ({_class: 'rotulo cabecalho_aluno', _rowspan: 2})), TH ('DIAS LETIVOS', __kwargtrans__ ({_colspan: self.total_de_dias, _class: 'rotulo'}))), TR (...(function () {
			var __accu0__ = [];
			for (var dat of self.dias_letivos) {
				__accu0__.append (TH (DIV (dat.__getslice__ (-(2), null, 1), __kwargtrans__ ({_class: 'modal_dia_control'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'rotulo tabela_coluna_modal'}, dict ({'_data-dia_mes_e_ano': dat})))));
			}
			return __accu0__;
		}) ()), __kwargtrans__ ({_class: 'tabela_controle_de_atividades'}));
		self.data_controle_de_atividades_keys = [];
		self.data_controle_de_atividades = dict ({});
		var l_series = [];
		for (var x of controle_de_atividades) {
			if (self.eh_multisseriado && !__in__ (x.serie, l_series)) {
				l_series.append (x.serie);
				tabela.append (TBODY (TR (TH (x.serie, __kwargtrans__ ({_colspan: 2 + len (self.dias_letivos)}))), __kwargtrans__ ({_style: 'background-color: #dfbf84'})));
			}
			var linha = TR (TH (x.numero, __kwargtrans__ ({_rowspan: x.tot_disciplinas, _class: 'rotulo'})), TH (x.nome, __kwargtrans__ ({_rowspan: x.tot_disciplinas, _class: 'rotulo'})));
			var body = TBODY (linha, __kwargtrans__ ({_class: 'tbody_controle_de_atividades'}));
			var proximas_linhas = [];
			var cont = 0;
			self.data_controle_de_atividades [x.id] = x;
			self.data_controle_de_atividades_keys.append (x.id);
			for (var y of x.disciplinas) {
				cont++;
				if (cont == 1) {
					for (var dia of self.dias_letivos) {
						if (__in__ (dia, y [1])) {
							if (y [1] [dia] == 'NF') {
								linha.append (TD (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:red;'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'controle_de_atividades celula_controle_de_atividades semana_par', _id: '{0}-{1}'.format (str (dia).py_replace ('-', '_'), x.id)}, dict ({'_data-id_matricula': x.id, '_data-dia': dia})))));
							}
							else if (y [1] [dia] == 'F') {
								linha.append (TD (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:green;'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'controle_de_atividades celula_controle_de_atividades semana_par', _id: '{0}-{1}'.format (str (dia).py_replace ('-', '_'), x.id)}, dict ({'_data-id_matricula': x.id, '_data-dia': dia})))));
							}
							else if (y [1] [dia] == 'FP') {
								linha.append (TD (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:#d28a06;'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'controle_de_atividades celula_controle_de_atividades semana_par', _id: '{0}-{1}'.format (str (dia).py_replace ('-', '_'), x.id)}, dict ({'_data-id_matricula': x.id, '_data-dia': dia})))));
							}
						}
						else {
							linha.append (TD (DIV (dia.__getslice__ (-(2), null, 1), __kwargtrans__ ({_class: 'apagadinho'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'controle_de_atividades celula_controle_de_atividades semana_par', _id: '{0}-{1}'.format (str (dia).py_replace ('-', '_'), x.id)}, dict ({'_data-id_matricula': x.id, '_data-dia': dia})))));
						}
					}
				}
				else {
					var ld = TR ();
					for (var dia of self.dias_letivos) {
						if (__in__ (dia, y [1])) {
							if (y [1] [dia] == 'NF') {
								ld.append (TD (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:red;'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'controle_de_atividades celula_controle_de_atividades semana_par', _id: '{0}-{1}'.format (str (dia).py_replace ('-', '_'), x.id)}, dict ({'_data-id_matricula': x.id, '_data-dia': dia})))));
							}
							else if (y [1] [dia] == 'F') {
								ld.append (TD (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:green;'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'controle_de_atividades celula_controle_de_atividades semana_par', _id: '{0}-{1}'.format (str (dia).py_replace ('-', '_'), x.id)}, dict ({'_data-id_matricula': x.id, '_data-dia': dia})))));
							}
							else if (y [1] [dia] == 'FP') {
								ld.append (TD (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:#d28a06;'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'controle_de_atividades celula_controle_de_atividades semana_par', _id: '{0}-{1}'.format (str (dia).py_replace ('-', '_'), x.id)}, dict ({'_data-id_matricula': x.id, '_data-dia': dia})))));
							}
						}
						else {
							ld.append (TD (DIV (dia.__getslice__ (-(2), null, 1), __kwargtrans__ ({_class: 'apagadinho'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'controle_de_atividades celula_controle_de_atividades semana_par', _id: '{0}-{1}'.format (str (dia).py_replace ('-', '_'), x.id)}, dict ({'_data-id_matricula': x.id, '_data-dia': dia})))));
						}
					}
					body.append (ld);
				}
			}
			tabela.append (body);
		}
		var botao_mes_anterior = DIV (I (__kwargtrans__ ({_class: 'fas fa-angle-double-left'})), __kwargtrans__ (dict ({'_class': 'botao_mes_anterior icon_button', '_title': 'Diário do Aluno Anterior', '_disabled': 'disabled'})));
		var botao_proximo_mes = DIV (I (__kwargtrans__ ({_class: 'fas fa-angle-double-right'})), __kwargtrans__ (dict ({'_class': 'botao_proximo_mes icon_button', '_title': 'Diário do Próximo Aluno turma', '_disabled': 'disabled'})));
		var way = ['controle-de-atividades', self.id_escola, self.ano_letivo, self.id_turma, self.id_disciplina];
		if (self.anterior !== null && self.anterior !== undefined) {
			var nway = list (way);
			nway.append (self.anterior);
			var botao_mes_anterior = A (I (__kwargtrans__ ({_class: 'fas fa-angle-double-left'})), __kwargtrans__ (dict ({'_class': 'botao_mes_anterior icon_button', '_title': 'Mês anterior', '_href': window.PhanterPWA.XWAY (...nway)})));
		}
		if (self.proximo !== null && self.proximo !== undefined) {
			way.append (self.proximo);
			var botao_proximo_mes = A (I (__kwargtrans__ ({_class: 'fas fa-angle-double-right'})), __kwargtrans__ (dict ({'_class': 'botao_proximo_mes icon_button', '_title': 'Próximo mês', '_href': window.PhanterPWA.XWAY (...way)})));
		}
		var painel = DIV (LABEL (self.mes_referencia), DIV (DIV (DIV (DIV (DIV (DIV (tabela, __kwargtrans__ ({_class: 'diario-controle_de_atividades-container'})), __kwargtrans__ ({_class: 'diario-controle_de_atividades-wrapper'})), __kwargtrans__ ({_class: 'p-row e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (botao_mes_anterior, botao_proximo_mes, widgets.MenuBox ('drop_{0}_{0}'.format (self.id_turma, self.id_disciplina), I (__kwargtrans__ ({_class: 'fas fa-calendar-week'})), ...xway_meses_referencia), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper has_buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control'}));
		html.append (painel);
		html.html_to ('#content-controle_de_atividades');
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
		$ ('.controle_de_atividades.celula_controle_de_atividades').off ('click.enviar_controle_de_atividades').on ('click.enviar_controle_de_atividades', (function __lambda__ () {
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
			return self.modal_confirmar_controle_de_atividades ($ (this));
		}));
		$ ('.tabela_coluna_modal').off ('click.tabela_coluna_modal').on ('click.tabela_coluna_modal', (function __lambda__ () {
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
			return self.modal_controle_de_atividades_por_dia (this);
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
	get modal_confirmar_controle_de_atividades () {return __get__ (this, function (self, el) {
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
		var data = $ (el).data ('dia');
		var __left0__ = data.py_split ('-');
		var ano = __left0__ [0];
		var mes = __left0__ [1];
		var dia = __left0__ [2];
		var mes_ext = self.meses [mes];
		var data_ext = '{0} de {1} de {2}'.format (dia, mes_ext, ano);
		var id_disciplina = self.id_disciplina;
		if (id_disciplina === null || id_disciplina === undefined) {
			var id_disciplina = null;
		}
		var atividade = false;
		var nome_aluno = self.data_controle_de_atividades [int (id_matricula)] ['nome'];
		var status = self.data_controle_de_atividades [int (id_matricula)] ['atividades'] [data];
		if (status == 'NF') {
			var complement = ' Atividade';
			var atividade = true;
			var content = DIV (P (STRONG ('O(A) presente aluno(a) fez a atividade proposta?')), P ('No registro consta que o(a) aluno(a) não fez a atividade em ', STRONG (data_ext), '. Se o(a) aluno(a) fez completamente ou de forma satisfatória, ', ' mude para ', STRONG ('FEZ', __kwargtrans__ ({_style: 'color: green'})), '. Caso tenha feito a atividade parcialmente, você pode mudar para ', STRONG ('FEZ PARCIALMENTE', __kwargtrans__ ({_style: 'color: #d28a06'})), '.'), __kwargtrans__ ({_class: 'p-row'}));
		}
		else if (status == 'F') {
			var complement = ' remoção da Atividade';
			var atividade = true;
			var content = DIV (P (STRONG ('O(A) presente aluno(a) fez a atividade proposta?')), P ('Pode-se observar que o(a) aluno(a) fez a atividade em ', STRONG (data_ext), ' completamente ou de forma satisfatória.', ' Se ele fez a atividade parcialmente, você pode mudar para ', STRONG ('FEZ PARCIALMENTE', __kwargtrans__ ({_style: 'color: #d28a06'})), '. Caso o(a) aluno(a) não tenha feito, é só mudar para ', STRONG ('NÃO FEZ', __kwargtrans__ ({_style: 'color: red'})), '.'), P ('Você também pode apagar qualquer registro, é có acessar a opção ', STRONG ('NÃO FEZ', __kwargtrans__ ({_style: 'color: blue'})), '.'), __kwargtrans__ ({_class: 'p-row'}));
		}
		else if (status == 'FP') {
			var complement = ' remoção da Atividade';
			var atividade = true;
			var content = DIV (P (STRONG ('O(A) presente aluno(a) fez a atividade proposta?')), P ('Pode-se observar que o(a) aluno(a) fez a atividade em ', STRONG (data_ext), ', porém ', STRONG ('parcialmente'), ', se ele fez completamente ou de forma satisfatória, você pode mudar para ', STRONG ('FEZ', __kwargtrans__ ({_style: 'color: green'})), '. Caso o(a) aluno(a) não tenha feito, é só mudar para ', STRONG ('NÃO FEZ', __kwargtrans__ ({_style: 'color: red'})), '.'), P ('Você também pode apagar qualquer registro, é có acessar a opção ', STRONG ('NÃO FEZ', __kwargtrans__ ({_style: 'color: blue'})), '.'), __kwargtrans__ ({_class: 'p-row'}));
		}
		else {
			var content = DIV (P (STRONG ('O(A) presente aluno(a) fez a atividade proposta?')), P ('Ainda não foi definido o status da atividade no dia ', STRONG (data_ext), '. Se ele fez completamente ou de forma satisfatória, você acessa a opção ', STRONG ('FEZ', __kwargtrans__ ({_style: 'color: green'})), ', se ele fez parcialmente, é só acessar a opção ', STRONG ('FEZ PARCIALMENTE', __kwargtrans__ ({_style: 'color: #d28a06'})), '. Caso o(a) aluno(a) não tenha feito, é só mudar para ', STRONG ('NÃO FEZ', __kwargtrans__ ({_style: 'color: red'})), '.'), P ('Você também pode apagar qualquer registro, é có acessar a opção ', STRONG ('NÃO FEZ', __kwargtrans__ ({_style: 'color: blue'})), '.'), __kwargtrans__ ({_class: 'p-row'}));
		}
		var footer = DIV ((status != 'F' ? forms.FormButton ('confirmar_atividade_fez', 'Fez', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})) : ''), (status != 'FP' ? forms.FormButton ('confirmar_atividade_fez_parcialmente', 'Fez parcialmente', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})) : ''), (status != 'NF' ? forms.FormButton ('confirmar_atividade_nao_fez', 'Não fez', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})) : ''), (atividade ? forms.FormButton ('apagar', 'Apagar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})) : ''), forms.FormButton ('cancelar', 'Cancelar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_controle_de_atividades = modal.Modal ('#modal_controle_de_atividades_container', __kwargtrans__ (dict ({'title': nome_aluno, 'content': content, 'footer': footer, 'form': 'controle_de_atividades'})));
		self.modal_controle_de_atividades.open ();
		$ ('#phanterpwa-widget-form-form_button-confirmar_atividade_nao_fez').off ('click.adicionar_controle_de_atividades_fez_parcialmente').on ('click.adicionar_controle_de_atividades_fez_parcialmente', (function __lambda__ () {
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
			return self._on_click_controle_de_atividades (id_matricula, id_disciplina, 'Não fez a atividade', data);
		}));
		$ ('#phanterpwa-widget-form-form_button-confirmar_atividade_fez').off ('click.adicionar_controle_de_atividades_fez').on ('click.adicionar_controle_de_atividades_fez', (function __lambda__ () {
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
			return self._on_click_controle_de_atividades (id_matricula, id_disciplina, 'Fez toda a atividade', data);
		}));
		$ ('#phanterpwa-widget-form-form_button-confirmar_atividade_fez_parcialmente').off ('click.adicionar_controle_de_atividades_nao_fez').on ('click.adicionar_controle_de_atividades_nao_fez', (function __lambda__ () {
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
			return self._on_click_controle_de_atividades (id_matricula, id_disciplina, 'Fez parcialmente a atividade', data);
		}));
		$ ('#phanterpwa-widget-form-form_button-apagar').off ('click.adicionar_controle_de_atividades_nao').on ('click.adicionar_controle_de_atividades_nao', (function __lambda__ () {
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
			return self._on_click_controle_de_atividades (id_matricula, id_disciplina, 'Apagar', data);
		}));
		$ ('#phanterpwa-widget-form-form_button-cancelar').off ('click.adicionar_controle_de_atividades_nao').on ('click.adicionar_controle_de_atividades_nao', (function __lambda__ () {
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
			return self.modal_controle_de_atividades.close ();
		}));
	});},
	get _on_click_controle_de_atividades () {return __get__ (this, function (self, id_matricula, id_disciplina, novo_status, data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
						case 'id_disciplina': var id_disciplina = __allkwargs0__ [__attrib0__]; break;
						case 'novo_status': var novo_status = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var formdata = new FormData ();
		formdata.append ('data', data);
		formdata.append ('status', novo_status);
		if (self.id_disciplina !== null && self.id_disciplina !== undefined) {
			window.PhanterPWA.PUT ('api', 'controle-de-atividades', self.id_escola, self.ano_letivo, id_matricula, id_disciplina, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
				return self.depois_de_enviar_registro (data, ajax_status);
			})}));
		}
		else {
			window.PhanterPWA.PUT ('api', 'controle-de-atividades', self.id_escola, self.ano_letivo, id_matricula, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
				return self.depois_de_enviar_registro (data, ajax_status);
			})}));
		}
		self.modal_controle_de_atividades.close ();
	});},
	get depois_de_enviar_registro () {return __get__ (this, function (self, data, ajax_status) {
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
			var up = json.celula_update;
			if (up !== null && up !== undefined) {
				var __left0__ = up [0].py_split ('-');
				var data = __left0__ [0];
				var id_matricula = __left0__ [1];
				if (up [1] == 'Fez parcialmente a atividade') {
					$ ('#{0}'.format (up [0])).html (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:#d28a06;'})).jquery ());
					self.data_controle_de_atividades [int (id_matricula)] ['atividades'] [str (data).py_replace ('_', '-')] = 'FP';
				}
				else if (up [1] == 'Não fez a atividade') {
					$ ('#{0}'.format (up [0])).html (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:red;'})).jquery ());
					self.data_controle_de_atividades [int (id_matricula)] ['atividades'] [str (data).py_replace ('_', '-')] = 'NF';
				}
				else if (up [1] == 'Fez toda a atividade') {
					$ ('#{0}'.format (up [0])).html (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:green;'})).jquery ());
					self.data_controle_de_atividades [int (id_matricula)] ['atividades'] [str (data).py_replace ('_', '-')] = 'F';
				}
				else {
					$ ('#{0}'.format (up [0])).html (DIV (up [2], __kwargtrans__ ({_class: 'apagadinho'})).jquery ());
					delete self.data_controle_de_atividades [int (id_matricula)] ['atividades'] [str (data).py_replace ('_', '-')];
				}
			}
			self.diario_binds ();
		}
	});},
	get modal_controle_de_atividades_por_dia () {return __get__ (this, function (self, el) {
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
		var dia_mes_e_ano = $ (el).data ('dia_mes_e_ano');
		var __left0__ = dia_mes_e_ano.py_split ('-');
		var ano = __left0__ [0];
		var mes = __left0__ [1];
		var _dia = __left0__ [2];
		var mes_ext = self.meses [mes];
		var data_ext = '{0} de {1} de {2}'.format (_dia, mes_ext, ano);
		var tabela = TABLE (TR (TH ('Nº', __kwargtrans__ ({_class: 'rotulo', _rowspan: 2})), TH ('NOME ALUNO(A)', __kwargtrans__ ({_class: 'rotulo cabecalho_aluno', _rowspan: 2})), TH ('OPÇÕES', __kwargtrans__ ({_class: 'rotulo', _colspan: 3})), TH ('A', __kwargtrans__ ({_title: 'Apagar', _class: 'rotulo', _rowspan: 2}))), TR (TH ('F', __kwargtrans__ ({_title: 'Fez', _class: 'rotulo'})), TH ('FP', __kwargtrans__ ({_title: 'Fez Parcialmente', _class: 'rotulo'})), TH ('NF', __kwargtrans__ ({_title: 'Não Fez', _class: 'rotulo'}))), __kwargtrans__ ({_class: 'tabela_modal_controle_de_atividades'}));
		self.data_temp = dict ({});
		for (var v of self.data_controle_de_atividades_keys) {
			var x = self.data_controle_de_atividades [v];
			self.data_temp [v] = [v, dia_mes_e_ano];
			var linha = TR (TH (x.numero, __kwargtrans__ ({_rowspan: x.tot_disciplinas})), TH (x.nome, __kwargtrans__ ({_rowspan: x.tot_disciplinas})));
			var body = TBODY (linha, __kwargtrans__ ({_class: 'tbody_controle_de_atividades'}));
			var proximas_linhas = [];
			var cont = 0;
			var _class_f = '';
			var _class_fp = '';
			var _class_nf = '';
			var _class_a = '';
			if (__in__ (dia_mes_e_ano, dict (x.atividades).py_keys ())) {
				if (x.atividades [dia_mes_e_ano] == 'F') {
					var _class_f = ' ativado';
					self.data_temp [v].append ('F');
				}
				else if (x.atividades [dia_mes_e_ano] == 'FP') {
					var _class_fp = ' ativado';
					self.data_temp [v].append ('FP');
				}
				else if (x.atividades [dia_mes_e_ano] == 'NF') {
					var _class_nf = ' ativado';
					self.data_temp [v].append ('NF');
				}
				else {
					var _class_a = ' ativado';
				}
			}
			else {
				var _class_a = ' ativado';
				self.data_temp [v].append ('');
			}
			linha.append (TD (I (__kwargtrans__ ({_class: 'fas fa-check-circle'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'modal_controle_de_atividades modal_controle_de_atividades{0} modal_controle_de_atividades{1} valorf'.format (x.id, _class_f), _id: '{0}-{1}-f'.format (str (dia_mes_e_ano).py_replace ('-', '_'), x.id)}, dict ({'_data-id_matricula': x.id, '_data-dia_mes_e_ano': dia_mes_e_ano, '_data-valor': 'F'})))));
			linha.append (TD (I (__kwargtrans__ ({_class: 'fas fa-check-circle'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'modal_controle_de_atividades modal_controle_de_atividades{0} modal_controle_de_atividades{1} valorfp'.format (x.id, _class_fp), _id: '{0}-{1}-fp'.format (str (dia_mes_e_ano).py_replace ('-', '_'), x.id)}, dict ({'_data-id_matricula': x.id, '_data-dia_mes_e_ano': dia_mes_e_ano, '_data-valor': 'FP'})))));
			linha.append (TD (I (__kwargtrans__ ({_class: 'fas fa-check-circle'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'modal_controle_de_atividades modal_controle_de_atividades{0} modal_controle_de_atividades{1} valornf'.format (x.id, _class_nf), _id: '{0}-{1}-nf'.format (str (dia_mes_e_ano).py_replace ('-', '_'), x.id)}, dict ({'_data-id_matricula': x.id, '_data-dia_mes_e_ano': dia_mes_e_ano, '_data-valor': 'NF'})))));
			linha.append (TD (I (__kwargtrans__ ({_class: 'fas fa-eraser'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'modal_controle_de_atividades modal_controle_de_atividades{0} modal_controle_de_atividades{1} valora'.format (x.id, _class_a), _id: '{0}-{1}-nf'.format (str (dia_mes_e_ano).py_replace ('-', '_'), x.id)}, dict ({'_data-id_matricula': x.id, '_data-dia_mes_e_ano': dia_mes_e_ano, '_data-valor': 'A'})))));
			tabela.append (body);
		}
		var titulo_modal = 'Atividades do dia {0}'.format (data_ext);
		var footer = DIV (forms.FormButton ('confirmar_atividades', 'Salvar Alterações', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_dia_controle_de_atividades = modal.Modal ('#modal_dia_controle_de_atividades_container', __kwargtrans__ (dict ({'title': titulo_modal, 'content': tabela, 'footer': footer})));
		self.modal_dia_controle_de_atividades.open ();
		self.diario_modal_binds ();
	});},
	get diario_modal_binds () {return __get__ (this, function (self) {
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
		$ ('.modal_controle_de_atividades').off ('click.mod_contr').on ('click.mod_contr', (function __lambda__ () {
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
			return self.add_opcoes (this);
		}));
		$ ('#phanterpwa-widget-form-form_button-confirmar_atividades').off ('click.mod_contr_conf').on ('click.mod_contr_conf', (function __lambda__ () {
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
			return self.confirmar_modal_atividades ();
		}));
	});},
	get add_opcoes () {return __get__ (this, function (self, el) {
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
		var id_matricula = int (element.data ('id_matricula'));
		var dia_mes_e_ano = element.data ('dia_mes_e_ano');
		var valor = element.data ('valor');
		if (element.hasClass ('ativado')) {
			if (!(element.hasClass ('valora'))) {
				element.removeClass ('ativado');
				if (__in__ (id_matricula, self.data_temp.py_keys ())) {
					self.data_temp [id_matricula] [2] = '';
				}
				else {
					self.data_temp [id_matricula] = [id_matricula, dia_mes_e_ano, ''];
				}
				$ ('.modal_controle_de_atividades{0}.valora'.format (id_matricula)).addClass ('ativado');
			}
		}
		else {
			if (valor == 'A') {
				var valor = '';
			}
			$ ('.modal_controle_de_atividades{0}'.format (id_matricula)).removeClass ('ativado');
			element.addClass ('ativado');
			if (__in__ (id_matricula, self.data_temp.py_keys ())) {
				self.data_temp [id_matricula] [2] = valor;
			}
			else {
				self.data_temp [id_matricula] = [id_matricula, dia_mes_e_ano, valor];
			}
		}
	});},
	get confirmar_modal_atividades () {return __get__ (this, function (self) {
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
		formdata.append ('atividades', JSON.stringify ((function () {
			var __accu0__ = [];
			for (var x of self.data_temp.py_keys ()) {
				__accu0__.append (self.data_temp [x]);
			}
			return __accu0__;
		}) ()));
		if (self.id_disciplina !== null && self.id_disciplina !== undefined) {
			window.PhanterPWA.PUT ('api', 'controle-de-atividades', self.id_escola, self.ano_letivo, self.id_turma, 'atividades', self.id_disciplina, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
				return self.depois_de_enviar_registro_modal (data, ajax_status);
			})}));
		}
		else {
			window.PhanterPWA.PUT ('api', 'controle-de-atividades', self.id_escola, self.ano_letivo, 'atividades', __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
				return self.depois_de_enviar_registro_modal (data, ajax_status);
			})}));
		}
		self.modal_dia_controle_de_atividades.close ();
	});},
	get depois_de_enviar_registro_modal () {return __get__ (this, function (self, data, ajax_status) {
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
			var atividades = json.atividades;
			if (atividades !== null && atividades !== undefined) {
				for (var up of atividades) {
					var id_matricula = up [0];
					var data = up [1];
					var element_id = '{0}-{1}'.format (str (data).py_replace ('-', '_'), id_matricula);
					if (up [2] == 'FP') {
						$ ('#{0}'.format (element_id)).html (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:#d28a06;'})).jquery ());
						self.data_controle_de_atividades [int (id_matricula)] ['atividades'] [str (data)] = 'FP';
					}
					else if (up [2] == 'NF') {
						$ ('#{0}'.format (element_id)).html (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:red;'})).jquery ());
						self.data_controle_de_atividades [int (id_matricula)] ['atividades'] [str (data)] = 'NF';
					}
					else if (up [2] == 'F') {
						$ ('#{0}'.format (element_id)).html (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:green;'})).jquery ());
						self.data_controle_de_atividades [int (id_matricula)] ['atividades'] [str (data)] = 'F';
					}
					else {
						$ ('#{0}'.format (element_id)).html (DIV (str (data).__getslice__ (-(2), null, 1), __kwargtrans__ ({_class: 'apagadinho'})).jquery ());
						delete self.data_controle_de_atividades [int (id_matricula)] ['atividades'] [str (data)];
					}
				}
				self.diario_binds ();
			}
		}
	});}
});

//# sourceMappingURL=handlers.controle_de_atividades.map