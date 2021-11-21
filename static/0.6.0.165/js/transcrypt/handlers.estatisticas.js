// Transcrypt'ed from Python, 2021-11-21 18:55:41
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as highcharts from './plugins.highcharts.js';
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
var __name__ = 'handlers.estatisticas';
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
export var BR = helpers.XmlConstructor.tagger ('br', true);
export var THEAD = helpers.XmlConstructor.tagger ('thead');
export var TFOOT = helpers.XmlConstructor.tagger ('tfoot');
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
			var BackButton1 = left_bar.LeftBarButton ('back_estatistica_controle_de_atividades', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('controle-de-atividades', arg0, arg1, arg2, arg4), 'position': 'top', 'show_if_way_match': '^estatistica-controle-de-atividades\\/[0-9]{1,}\\/[0-9]{1,}\\/[0-9]{1,}\\/[0-9]{1,}.*$'})));
		}
		else {
			var BackButton1 = left_bar.LeftBarButton ('back_estatistica_controle_de_atividades', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.Request.get_param ('retornar'), 'position': 'top', 'show_if_way_match': '^estatistica-controle-de-atividades\\/[0-9]{1,}\\/[0-9]{1,}\\/[0-9]{1,}\\/[0-9]{1,}.*$'})));
		}
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
	}));}
});
export var ControleDeAtividades =  __class__ ('ControleDeAtividades', [gatehandler.Handler], {
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
		self.id_escola = arg0;
		self.ano_letivo = arg1;
		self.id_turma = arg2;
		self.unidade = arg3;
		self.id_disciplina = arg4;
		self.romanos = dict ({'0': 'Ano inteiro', '1': 'Unidade I', '2': 'Unidade II', '3': 'Unidade III', '4': 'Unidade IV', '5': 'Unidade V', '6': 'Unidade VI', '7': 'Unidade VII', '8': 'Unidade VIII'});
		self.meses = dict ({'01': 'Janeiro', '02': 'Fevereiro', '03': 'Março', '04': 'Abril', '05': 'Maio', '06': 'Junho', '07': 'Julho', '08': 'Agosto', '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'});
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
			self._get_estatistica_controle_de_atividades ();
		}
		if (window.PhanterPWA.Request.get_param ('retornar') === null) {
			var BackButton1 = left_bar.LeftBarButton ('back_estatistica_controle_de_atividades', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('controle-de-atividades', arg0, arg1, arg2, arg4), 'position': 'top', 'show_if_way_match': '^estatistica-controle-de-atividades\\/[0-9]{1,}\\/[0-9]{1,}\\/[0-9]{1,}\\/[0-9]{1,}.*$'})));
		}
		else {
			var BackButton1 = left_bar.LeftBarButton ('back_estatistica_controle_de_atividades', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.Request.get_param ('retornar'), 'position': 'top', 'show_if_way_match': '^estatistica-controle-de-atividades\\/[0-9]{1,}\\/[0-9]{1,}\\/[0-9]{1,}\\/[0-9]{1,}.*$'})));
		}
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
	}));},
	get _get_estatistica_controle_de_atividades () {return __get__ (this, function (self) {
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
			window.PhanterPWA.GET ('api', 'estatisticas', 'controle-de-atividades', self.id_escola, self.ano_letivo, self.id_turma, self.unidade, self.id_disciplina, __kwargtrans__ ({onComplete: self.after_get}));
		}
		else {
			window.PhanterPWA.GET ('api', 'estatisticas', 'controle-de-atividades', self.id_escola, self.ano_letivo, self.id_turma, self.unidade, __kwargtrans__ ({onComplete: self.after_get}));
		}
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
			self.estatistica_por_aluno = json.data;
			self.unidade = json.unidade;
			self.data_inicial = json.data_inicial;
			self.data_final = json.data_final;
			self.eh_multisseriado = json.eh_multisseriado;
			self.turma = json.turma;
			self.disciplina = json.disciplina;
			self.estatistica_da_turma = json.totais_turma;
			self.criar_estatisticas ();
		}
	});},
	get porcentagem () {return __get__ (this, function (self, valor, total) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'valor': var valor = __allkwargs0__ [__attrib0__]; break;
						case 'total': var total = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (str (valor).isdigit () && str (total).isdigit ()) {
			var valor = int (valor);
			var total = int (total);
			if (valor == 0) {
				return ' (0%)';
			}
			else {
				return ' ({0}%)'.format (((valor / total) * 100).toFixed (2));
			}
		}
		return '';
	});},
	get criar_estatisticas () {return __get__ (this, function (self) {
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('ESTATÍSTICAS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('CONTROLE DE ATIVIDADES', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV (self.romanos [str (self.unidade)], __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container extend'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-controle_de_atividades', _class: 'p-row card e-padding_auto'})), DIV (__kwargtrans__ ({_id: 'modal_controle_de_atividades_container'})), DIV (__kwargtrans__ ({_id: 'modal_dia_controle_de_atividades_container'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container extend'})));
		html.html_to ('#main-container');
		var titulo_painel = '{0} - Período de {1} à {2}'.format (self.romanos [str (self.unidade)], self.iso_br (self.data_inicial), self.iso_br (self.data_final));
		if (self.disciplina !== null && self.disciplina !== undefined) {
			var html = DIV (H2 ('Estatísticas do Controle de atividades da disciplina de ', self.disciplina, ' da turma ', self.turma), H2 (titulo_painel), __kwargtrans__ ({_class: 'controle_de_atividades_container'}));
		}
		else {
			var html = DIV (H2 ('Estatísticas do Controle de atividades da turma ', self.turma), H2 (titulo_painel), __kwargtrans__ ({_class: 'controle_de_atividades_container'}));
		}
		var tabela_geral = TABLE (TR (TH ('NOME', __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th'})), TH ('FEZ (%)', __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th centralizado'})), TH ('FEZ PARCIALMENTE (%)', __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th centralizado'})), TH ('NÃO FEZ (%)', __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th centralizado'})), TH ('TOTAL (100%)', __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th centralizado'})), __kwargtrans__ ({_class: 'phanterpwa-widget-table-head phanterpwa-widget'})), __kwargtrans__ ({_class: 'phanterpwa-widget-table p-row'}));
		var tabela_tur = TABLE (TR (TH ('FEZ'), TH ('FEZ PARCIALMENTE'), TH ('NÃO FEZ'), TH ('TOTAL')), TR (TD (self.estatistica_da_turma ['F']), TD (self.estatistica_da_turma ['FP']), TD (self.estatistica_da_turma ['NF']), TD (self.estatistica_da_turma ['T'])));
		var chart_turma = highcharts.Pie ('grafico_turma', __kwargtrans__ ({title: self.turma}));
		chart_turma.add_serie ('Fez', self.estatistica_da_turma ['F'], __kwargtrans__ ({color: 'green'}));
		chart_turma.add_serie ('Fez Parcialmente', self.estatistica_da_turma ['FP'], __kwargtrans__ ({color: '#d28a06'}));
		chart_turma.add_serie ('Não Fez', self.estatistica_da_turma ['NF'], __kwargtrans__ ({color: 'red'}));
		var chats_alunos = CONCATENATE ();
		var painel_turma = DIV (LABEL ('Gráfico da Turma'), DIV (DIV (DIV (DIV (DIV (DIV (chart_turma, tabela_tur, __kwargtrans__ ({_class: 'estatisticas-turma-container'})), __kwargtrans__ ({_class: 'estatisticas-turma-wrapper'})), __kwargtrans__ ({_class: 'p-row e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (__kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control'}));
		var painel_alunos = DIV (LABEL ('Gráficos dos Alunos'), DIV (DIV (DIV (DIV (chats_alunos, __kwargtrans__ ({_class: 'p-row e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (__kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control'}));
		var painel_geral = DIV (LABEL ('Resumo'), DIV (DIV (DIV (DIV (DIV (DIV (tabela_geral, __kwargtrans__ ({_class: 'estatisticas-geral-container phanterpwa-widget-table-container phanterpwa-widget'})), __kwargtrans__ ({_class: 'estatisticas-geral-wrapper'})), __kwargtrans__ ({_class: 'p-row e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (__kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control'}));
		var html_estatisticas = CONCATENATE (painel_geral, painel_turma, painel_alunos);
		for (var aln of self.estatistica_por_aluno) {
			tabela_geral.append (TR (TD (STRONG (aln.nome), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td'})), TD (aln ['atividades'] ['F'], self.porcentagem (aln ['atividades'] ['F'], aln ['atividades'] ['T']), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (aln ['atividades'] ['FP'], self.porcentagem (aln ['atividades'] ['FP'], aln ['atividades'] ['T']), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (aln ['atividades'] ['NF'], self.porcentagem (aln ['atividades'] ['NF'], aln ['atividades'] ['T']), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (aln ['atividades'] ['T'], __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data phanterpwa-widget'})));
			var tabela_aln = TABLE (TR (TH ('FEZ'), TH ('FEZ PARCIALMENTE'), TH ('NÃO FEZ'), TH ('TOTAL')), TR (TD (aln ['atividades'] ['F']), TD (aln ['atividades'] ['FP']), TD (aln ['atividades'] ['NF']), TD (aln ['atividades'] ['T'])));
			var chart_aluno = highcharts.Pie ('grafico_aluno_{0}'.format (aln.id), __kwargtrans__ ({title: aln.nome}));
			chart_aluno.add_serie ('Fez', aln ['atividades'] ['F'], __kwargtrans__ ({color: 'green'}));
			chart_aluno.add_serie ('Fez Parcialmente', aln ['atividades'] ['FP'], __kwargtrans__ ({color: '#d28a06'}));
			chart_aluno.add_serie ('Não Fez', aln ['atividades'] ['NF'], __kwargtrans__ ({color: 'red'}));
			var html_chart_aluno = DIV (DIV (chart_aluno, tabela_aln, __kwargtrans__ ({_class: 'estatisticas-alunos-container'})), __kwargtrans__ ({_class: 'estatisticas-alunos-wrapper p-col w1p100  w5p50  w7p33  w8p25'}));
			chats_alunos.append (html_chart_aluno);
		}
		tabela_geral.append (TR (TD (STRONG ('TOTAL TURMA'), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td'})), TD (STRONG (self.estatistica_da_turma ['F'], self.porcentagem (self.estatistica_da_turma ['F'], self.estatistica_da_turma ['T'])), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (STRONG (self.estatistica_da_turma ['FP'], self.porcentagem (self.estatistica_da_turma ['FP'], self.estatistica_da_turma ['T'])), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (STRONG (self.estatistica_da_turma ['NF'], self.porcentagem (self.estatistica_da_turma ['NF'], self.estatistica_da_turma ['T'])), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (STRONG (self.estatistica_da_turma ['T']), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data'})));
		html.append (html_estatisticas);
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
export var RegistroDeAtividadesTurma =  __class__ ('RegistroDeAtividadesTurma', [gatehandler.Handler], {
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
		self.id_escola = arg0;
		self.ano_letivo = arg1;
		self.id_turma = arg2;
		self.unidade = arg3;
		self.id_disciplina = arg4;
		self.romanos = dict ({'0': 'Ano inteiro', '1': 'Unidade I', '2': 'Unidade II', '3': 'Unidade III', '4': 'Unidade IV', '5': 'Unidade V', '6': 'Unidade VI', '7': 'Unidade VII', '8': 'Unidade VIII'});
		self.meses = dict ({'01': 'Janeiro', '02': 'Fevereiro', '03': 'Março', '04': 'Abril', '05': 'Maio', '06': 'Junho', '07': 'Julho', '08': 'Agosto', '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'});
		if (str (arg0).isdigit () && str (arg1).isdigit ()) {
			self._get_estatistica_registro_de_atividades ();
		}
		var BackButton1 = left_bar.LeftBarButton ('back_estatistica_registro_de_atividades_turma', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('registro-de-atividades', arg0, arg1, arg2), 'position': 'top', 'show_if_way_match': '^estatistica-registro-de-atividades-turma\\/[0-9]{1,}\\/[0-9]{1,}\\/[0-9]{1,}\\/[0-9]{1,}.*$'})));
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
	}));},
	get _get_estatistica_registro_de_atividades () {return __get__ (this, function (self) {
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
			window.PhanterPWA.GET ('api', 'estatisticas', 'registro-de-atividades', self.id_escola, self.ano_letivo, self.id_turma, self.unidade, self.id_disciplina, __kwargtrans__ ({onComplete: self.after_get}));
		}
		else {
			window.PhanterPWA.GET ('api', 'estatisticas', 'registro-de-atividades', self.id_escola, self.ano_letivo, self.id_turma, self.unidade, __kwargtrans__ ({onComplete: self.after_get}));
		}
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
			self.estatistica_por_aluno = json.data;
			self.unidade = json.unidade;
			self.data_inicial = json.data_inicial;
			self.data_final = json.data_final;
			self.eh_multisseriado = json.eh_multisseriado;
			self.turma = json.turma;
			self.disciplina = json.disciplina;
			self.estatistica_da_turma = json.totais_turma;
			self.data_disciplinas = json.data_disciplinas;
			self.criar_estatisticas ();
		}
	});},
	get porcentagem () {return __get__ (this, function (self, valor, total) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'valor': var valor = __allkwargs0__ [__attrib0__]; break;
						case 'total': var total = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (str (valor).isdigit () && str (total).isdigit ()) {
			var valor = int (valor);
			var total = int (total);
			if (valor == 0) {
				return ' (0%)';
			}
			else {
				return ' ({0}%)'.format (((valor / total) * 100).toFixed (2));
			}
		}
		return '';
	});},
	get criar_estatisticas () {return __get__ (this, function (self) {
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('ESTATÍSTICAS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('CONTROLE DE ATIVIDADES', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV (self.romanos [str (self.unidade)], __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container extend'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-registro_de_atividades', _class: 'p-row card e-padding_auto'})), DIV (__kwargtrans__ ({_id: 'modal_registro_de_atividades_container'})), DIV (__kwargtrans__ ({_id: 'modal_dia_registro_de_atividades_container'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container extend'})));
		html.html_to ('#main-container');
		var titulo_painel = '{0} - Período de {1} à {2}'.format (self.romanos [str (self.unidade)], self.iso_br (self.data_inicial), self.iso_br (self.data_final));
		if (self.disciplina !== null && self.disciplina !== undefined) {
			var html = DIV (H2 ('Estatísticas do Controle de atividades da disciplina de ', self.disciplina, ' da turma ', self.turma), H2 (titulo_painel), __kwargtrans__ ({_class: 'registro_de_atividades_container'}));
		}
		else {
			var html = DIV (H2 ('Estatísticas do Controle de atividades da turma ', self.turma), H2 (titulo_painel), __kwargtrans__ ({_class: 'registro_de_atividades_container'}));
		}
		var tabela_geral = TABLE (TR (TH ('NOME', __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th'})), TH ('FEZ (%)', __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th centralizado'})), TH ('FEZ PARCIALMENTE (%)', __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th centralizado'})), TH ('NÃO FEZ (%)', __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th centralizado'})), TH ('TOTAL (100%)', __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th centralizado'})), __kwargtrans__ ({_class: 'phanterpwa-widget-table-head phanterpwa-widget'})), __kwargtrans__ ({_class: 'phanterpwa-widget-table p-row'}));
		var tabela_disciplinas = TABLE (TR (TH ('NOME', __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th centralizado'})), TH ('DISCIPLINAS', __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th centralizado'})), TH ('FEZ (%)', __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th centralizado'})), TH ('FEZ PARCIALMENTE (%)', __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th centralizado'})), TH ('NÃO FEZ (%)', __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th centralizado'})), TH ('TOTAL (100%)', __kwargtrans__ ({_class: 'phanterpwa-widget-table-head-th centralizado'})), __kwargtrans__ ({_class: 'phanterpwa-widget-table-head phanterpwa-widget'})), __kwargtrans__ ({_class: 'phanterpwa-widget-table p-row'}));
		var tabela_tur = TABLE (TR (TH ('FEZ'), TH ('FEZ PARCIALMENTE'), TH ('NÃO FEZ'), TH ('TOTAL')), TR (TD (self.estatistica_da_turma ['F']), TD (self.estatistica_da_turma ['FP']), TD (self.estatistica_da_turma ['NF']), TD (self.estatistica_da_turma ['T'])));
		var chart_turma = highcharts.Pie ('grafico_turma', __kwargtrans__ ({title: self.turma}));
		chart_turma.add_serie ('Fez', self.estatistica_da_turma ['F'], __kwargtrans__ ({color: 'green'}));
		chart_turma.add_serie ('Fez Parcialmente', self.estatistica_da_turma ['FP'], __kwargtrans__ ({color: '#d28a06'}));
		chart_turma.add_serie ('Não Fez', self.estatistica_da_turma ['NF'], __kwargtrans__ ({color: 'red'}));
		var chats_alunos = CONCATENATE ();
		var chats_disciplinas_turma = CONCATENATE ();
		var painel_turma = DIV (LABEL ('Gráfico da Turma'), DIV (DIV (DIV (DIV (DIV (DIV (chart_turma, tabela_tur, chats_disciplinas_turma, __kwargtrans__ ({_class: 'estatisticas-turma-container'})), __kwargtrans__ ({_class: 'estatisticas-turma-wrapper'})), __kwargtrans__ ({_class: 'p-row e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (__kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control'}));
		var painel_alunos = DIV (LABEL ('Gráficos dos Alunos'), DIV (DIV (DIV (DIV (chats_alunos, __kwargtrans__ ({_class: 'p-row e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (__kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control'}));
		var painel_geral = DIV (LABEL ('Resumo'), DIV (DIV (DIV (DIV (DIV (DIV (tabela_geral, __kwargtrans__ ({_class: 'estatisticas-geral-container phanterpwa-widget-table-container phanterpwa-widget'})), __kwargtrans__ ({_class: 'estatisticas-geral-wrapper'})), __kwargtrans__ ({_class: 'p-row e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (__kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control'}));
		var painel_disciplinas = DIV (LABEL ('Dados distribuídos pelas disciplinas'), DIV (DIV (DIV (DIV (DIV (DIV (tabela_disciplinas, __kwargtrans__ ({_class: 'estatisticas-geral-container phanterpwa-widget-table-container phanterpwa-widget'})), __kwargtrans__ ({_class: 'estatisticas-geral-wrapper'})), __kwargtrans__ ({_class: 'p-row e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (__kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control'}));
		var html_estatisticas = CONCATENATE (painel_geral, painel_disciplinas, painel_turma, painel_alunos);
		var disciplinas_ordem = [];
		var disciplinas_data = dict ();
		for (var aln of self.estatistica_por_aluno) {
			tabela_geral.append (TR (TD (STRONG (aln.nome), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td '})), TD (aln ['atividades'] ['F'], self.porcentagem (aln ['atividades'] ['F'], aln ['atividades'] ['T']), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (aln ['atividades'] ['FP'], self.porcentagem (aln ['atividades'] ['FP'], aln ['atividades'] ['T']), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (aln ['atividades'] ['NF'], self.porcentagem (aln ['atividades'] ['NF'], aln ['atividades'] ['T']), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (aln ['atividades'] ['T'], __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data phanterpwa-widget'})));
			var tbody = TBODY (__kwargtrans__ ({_style: 'border: 2px solid #d2d2d2 !important;'}));
			var cont_dis = 0;
			var chart_disciplinas = highcharts.BarStacked ('grafico_disciplinas_aluno_{0}'.format (aln.id), ...(function () {
				var __accu0__ = [];
				for (var ndis of aln ['disciplinas']) {
					__accu0__.append (self.data_disciplinas [ndis [0]]);
				}
				return __accu0__;
			}) (), __kwargtrans__ ({title: 'Distribuido pelas disciplinas'}));
			var cf = [];
			var cfp = [];
			var cnf = [];
			for (var dis of aln ['disciplinas']) {
				if (!__in__ (self.data_disciplinas [dis [0]], disciplinas_ordem)) {
					disciplinas_ordem.append (self.data_disciplinas [dis [0]]);
				}
				if (__in__ (self.data_disciplinas [dis [0]], disciplinas_data)) {
					disciplinas_data [self.data_disciplinas [dis [0]]] ['T'] += dis [1] ['T'];
					disciplinas_data [self.data_disciplinas [dis [0]]] ['F'] += dis [1] ['F'];
					disciplinas_data [self.data_disciplinas [dis [0]]] ['FP'] += dis [1] ['FP'];
					disciplinas_data [self.data_disciplinas [dis [0]]] ['NF'] += dis [1] ['NF'];
				}
				else {
					disciplinas_data [self.data_disciplinas [dis [0]]] = dict ({'T': dis [1] ['T'], 'F': dis [1] ['F'], 'FP': dis [1] ['FP'], 'NF': dis [1] ['NF']});
				}
				cont_dis++;
				cf.append (dis [1] ['F']);
				cfp.append (dis [1] ['FP']);
				cnf.append (dis [1] ['NF']);
				if (cont_dis == 1) {
					var tr_disciplinas = TR (TD (STRONG (aln.nome), __kwargtrans__ ({_rowspan: len (aln ['disciplinas']), _class: 'phanterpwa-widget-table-data-td', _style: 'border: 1px solid #C1C1C1;text-align: center;'})), TD (self.data_disciplinas [dis [0]], __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (dis [1] ['F'], self.porcentagem (dis [1] ['F'], dis [1] ['T']), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (dis [1] ['FP'], self.porcentagem (dis [1] ['FP'], dis [1] ['T']), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (dis [1] ['NF'], self.porcentagem (dis [1] ['NF'], dis [1] ['T']), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (dis [1] ['T'], __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data phanterpwa-widget'}));
				}
				else {
					var tr_disciplinas = TR (TD (self.data_disciplinas [dis [0]], __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (dis [1] ['F'], self.porcentagem (dis [1] ['F'], dis [1] ['T']), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (dis [1] ['FP'], self.porcentagem (dis [1] ['FP'], dis [1] ['T']), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (dis [1] ['NF'], self.porcentagem (dis [1] ['NF'], dis [1] ['T']), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (dis [1] ['T'], __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data phanterpwa-widget'}));
				}
				tbody.append (tr_disciplinas);
			}
			chart_disciplinas.add_serie ('Fez', ...cf, __kwargtrans__ ({color: 'green'}));
			chart_disciplinas.add_serie ('Fez Parcialmente', ...cfp, __kwargtrans__ ({color: '#d28a06'}));
			chart_disciplinas.add_serie ('Não Fez', ...cnf, __kwargtrans__ ({color: 'red'}));
			tabela_disciplinas.append (tbody);
			var tabela_aln = TABLE (TR (TH ('FEZ'), TH ('FEZ PARCIALMENTE'), TH ('NÃO FEZ'), TH ('TOTAL')), TR (TD (aln ['atividades'] ['F']), TD (aln ['atividades'] ['FP']), TD (aln ['atividades'] ['NF']), TD (aln ['atividades'] ['T'])));
			var chart_aluno = highcharts.Pie ('grafico_aluno_{0}'.format (aln.id), __kwargtrans__ ({title: aln.nome}));
			chart_aluno.add_serie ('Fez', aln ['atividades'] ['F'], __kwargtrans__ ({color: 'green'}));
			chart_aluno.add_serie ('Fez Parcialmente', aln ['atividades'] ['FP'], __kwargtrans__ ({color: '#d28a06'}));
			chart_aluno.add_serie ('Não Fez', aln ['atividades'] ['NF'], __kwargtrans__ ({color: 'red'}));
			var html_chart_aluno = DIV (DIV (chart_aluno, chart_disciplinas, tabela_aln, __kwargtrans__ ({_class: 'estatisticas-alunos-container', _style: 'background-color: white !important;'})), __kwargtrans__ ({_class: 'estatisticas-alunos-wrapper p-col w1p100  w5p50  w7p33  w8p25'}));
			chats_alunos.append (html_chart_aluno);
		}
		var chart_disciplinas_turma = highcharts.BarStacked ('grafico_disciplinas_turma_{0}'.format (self.id_turma), ...disciplinas_ordem, __kwargtrans__ ({title: 'Distribuido pelas disciplinas'}));
		chart_disciplinas_turma.add_serie ('Fez', ...(function () {
			var __accu0__ = [];
			for (var x of disciplinas_ordem) {
				__accu0__.append (disciplinas_data [x] ['F']);
			}
			return __accu0__;
		}) (), __kwargtrans__ ({color: 'green'}));
		chart_disciplinas_turma.add_serie ('Fez Parcialmente', ...(function () {
			var __accu0__ = [];
			for (var x of disciplinas_ordem) {
				__accu0__.append (disciplinas_data [x] ['FP']);
			}
			return __accu0__;
		}) (), __kwargtrans__ ({color: '#d28a06'}));
		chart_disciplinas_turma.add_serie ('Não Fez', ...(function () {
			var __accu0__ = [];
			for (var x of disciplinas_ordem) {
				__accu0__.append (disciplinas_data [x] ['NF']);
			}
			return __accu0__;
		}) (), __kwargtrans__ ({color: 'red'}));
		chats_disciplinas_turma.append (chart_disciplinas_turma);
		tabela_geral.append (TR (TD (STRONG ('TOTAL TURMA'), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td'})), TD (STRONG (self.estatistica_da_turma ['F'], self.porcentagem (self.estatistica_da_turma ['F'], self.estatistica_da_turma ['T'])), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (STRONG (self.estatistica_da_turma ['FP'], self.porcentagem (self.estatistica_da_turma ['FP'], self.estatistica_da_turma ['T'])), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (STRONG (self.estatistica_da_turma ['NF'], self.porcentagem (self.estatistica_da_turma ['NF'], self.estatistica_da_turma ['T'])), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (STRONG (self.estatistica_da_turma ['T']), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data'})));
		html.append (html_estatisticas);
		html.html_to ('#content-registro_de_atividades');
	});}
});
export var RegistroDeAtividades =  __class__ ('RegistroDeAtividades', [gatehandler.Handler], {
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
		self.totF = 0;
		self.totFP = 0;
		self.totNF = 0;
		self.totT = 0;
		self.totalTurmas = 0;
		self.totalAlunos = 0;
		self.totalAlnNF = 0;
		self.id_escola = arg0;
		self.ano_letivo = arg1;
		self.unidade = arg2;
		self.romanos = dict ({'0': 'Ano inteiro', '1': 'Unidade I', '2': 'Unidade II', '3': 'Unidade III', '4': 'Unidade IV', '5': 'Unidade V', '6': 'Unidade VI', '7': 'Unidade VII', '8': 'Unidade VIII'});
		self.meses = dict ({'01': 'Janeiro', '02': 'Fevereiro', '03': 'Março', '04': 'Abril', '05': 'Maio', '06': 'Junho', '07': 'Julho', '08': 'Agosto', '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'});
		if (str (arg0).isdigit () && str (arg1).isdigit ()) {
			self._get_turmas ();
		}
		var BackButton1 = left_bar.LeftBarButton ('back_estatistica_registro_de_atividades', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('turmas', arg0, arg1), 'position': 'top', 'show_if_way_match': '^estatistica-registro-de-atividades\\/[0-9]{1,}\\/[0-9]{1,}\\/[0-9]{1,}.*$'})));
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
	}));},
	get porcentagem () {return __get__ (this, function (self, valor, total) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'valor': var valor = __allkwargs0__ [__attrib0__]; break;
						case 'total': var total = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (str (valor).isdigit () && str (total).isdigit ()) {
			var valor = int (valor);
			var total = int (total);
			if (valor == 0) {
				return ' (0%)';
			}
			else {
				return ' ({0}%)'.format (((valor / total) * 100).toFixed (2));
			}
		}
		return '';
	});},
	get _get_turmas () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'turmas', self.id_escola, self.ano_letivo, __kwargtrans__ ({onComplete: self.after_get_turma}));
	});},
	get after_get_turma () {return __get__ (this, function (self, data, ajax_status) {
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
			self.turmas = json.data.turmas;
			self.unidades = json.unidades;
			self.processar_turmas ();
		}
	});},
	get processar_turmas () {return __get__ (this, function (self) {
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
		var tr_inicial = TBODY (TR (TH ('TURMA'), TH ('QUANT. ALUNOS', __kwargtrans__ ({_class: 'centralizado'})), TH ('TURNO', __kwargtrans__ ({_class: 'centralizado'})), TH ('FEZ (%)', __kwargtrans__ ({_class: 'centralizado'})), TH ('FEZ PARCIALMENTE (%)', __kwargtrans__ ({_class: 'centralizado'})), TH ('NÃO FEZ (%)', __kwargtrans__ ({_class: 'centralizado'})), TH ('TOTAL (100%)', __kwargtrans__ ({_class: 'centralizado'})), TH ('QUANT. ALUNOS NÃO ENTREGARAM', __kwargtrans__ ({_class: 'centralizado'})), __kwargtrans__ ({_class: 'rotulo_estat_registro_de_atividades phanterpwa-widget-table-head phanterpwa-widget'})), __kwargtrans__ ({_class: 'tbody-estat_registro_de_atividades-container'}));
		self.html_tabela = TABLE (THEAD (TR (TD (BR (), __kwargtrans__ ({_class: 'thead_estat_registro_de_atividades'})))), TFOOT (TR (TD (BR (), __kwargtrans__ ({_class: 'tfoot_estat_registro_de_atividades'})))), tr_inicial, __kwargtrans__ ({_class: 'tabela_estat_registro_de_atividades_container1 phanterpwa-widget-table p-row'}));
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('ESTATÍSTICAS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('CONTROLE DE ATIVIDADES', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV (self.romanos [str (self.unidade)], __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container extend'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (DIV (__kwargtrans__ ({_id: 'titulo_periodo'})), DIV (self.html_tabela, __kwargtrans__ ({_class: 'phanterpwa-widget-table-container phanterpwa-widget'})), __kwargtrans__ ({_id: 'content-estat_registro_de_atividades', _class: 'p-row e-padding_auto continuos'})), __kwargtrans__ ({_class: 'phanterpwa-media-print-container'})), __kwargtrans__ ({_class: 'card'})), DIV (__kwargtrans__ ({_id: 'modal_cmp_curriculares_container'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container extend'})));
		for (var x of self.turmas) {
			self.totalTurmas++;
			self.html_tabela.append (TBODY (TR (TD (STRONG (x.turma), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td'})), TD (DIV (preloaders.run_points), __kwargtrans__ ({_colspan: 7, _style: 'text-align: center;', _class: 'phanterpwa-widget-table-data-td'})), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data'})), __kwargtrans__ ({_id: 'tbody_est_tur_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
		}
		self.html_tabela.append (TBODY (TR (TD (STRONG ('TOTAL FINAL'), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td'})), TD (DIV (preloaders.run_points), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td', _colspan: 7, _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data'})), __kwargtrans__ ({_id: 'tbody_est_total_final', _class: 'tbody-indicador-container'})));
		html.html_to ('#main-container');
		self.posicao = 0;
		self._get_estatistica_registro_de_atividades (self.turmas [self.posicao].id);
	});},
	get _get_estatistica_registro_de_atividades () {return __get__ (this, function (self, id_turma) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_turma': var id_turma = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.posicao++;
		if (self.posicao <= len (self.turmas)) {
			window.PhanterPWA.GET ('api', 'estatisticas', 'registro-de-atividades', self.id_escola, self.ano_letivo, id_turma, self.unidade, 'turmas', __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
				return tuple ([self.criar_estatisticas (id_turma, data, ajax_status), (self.turmas [self.posicao] !== undefined ? self._get_estatistica_registro_de_atividades (self.turmas [self.posicao].id) : '')]);
			})}));
		}
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
	get criar_estatisticas () {return __get__ (this, function (self, id_turma, data, ajax_status) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_turma': var id_turma = __allkwargs0__ [__attrib0__]; break;
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
			var titulo_painel = '{0} - Período de {1} à {2}'.format (self.romanos [str (json.unidade)], self.iso_br (json.data_inicial), self.iso_br (json.data_final));
			var html_titulo = DIV (H2 ('Estatísticas do Controle de Atividades da Escola'), H2 (titulo_painel), __kwargtrans__ ({_class: 'registro_de_atividades_container'}));
			html_titulo.html_to ('#titulo_periodo');
			self.totF += json.totais_turma ['F'];
			self.totFP += json.totais_turma ['FP'];
			self.totNF += json.totais_turma ['NF'];
			self.totT += json.totais_turma ['T'];
			var html_linha_turma = TR (TD (STRONG (json.turma), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td'})), TD (json.total_alunos, __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (json.turno, __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD ('{0} {1}'.format (json.totais_turma ['F'], self.porcentagem (json.totais_turma ['F'], json.totais_turma ['T'])), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD ('{0} {1}'.format (json.totais_turma ['FP'], self.porcentagem (json.totais_turma ['FP'], json.totais_turma ['T'])), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD ('{0} {1}'.format (json.totais_turma ['NF'], self.porcentagem (json.totais_turma ['NF'], json.totais_turma ['T'])), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (json.totais_turma ['T'], __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (json.total_alunos_nf, __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data phanterpwa-widget'}));
			html_linha_turma.html_to ('#tbody_est_tur_{0}'.format (id_turma));
			self.totalTurmas--;
			self.totalAlunos += int (json.total_alunos);
			self.totalAlnNF += int (json.total_alunos_nf);
			if (self.totalTurmas == 0) {
				TR (TD (STRONG ('TOTAL FINAL'), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td'})), TD (STRONG (self.totalAlunos), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (STRONG ('-'), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (STRONG ('{0} {1}'.format (self.totF, self.porcentagem (self.totF, self.totT))), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (STRONG ('{0} {1}'.format (self.totFP, self.porcentagem (self.totFP, self.totT))), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (STRONG ('{0} {1}'.format (self.totNF, self.porcentagem (self.totNF, self.totT))), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (STRONG (self.totT), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), TD (STRONG (self.totalAlnNF), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data-td centralizado'})), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data'})).html_to ('#tbody_est_total_final');
			}
		}
	});}
});

//# sourceMappingURL=handlers.estatisticas.map