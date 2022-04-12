// Transcrypt'ed from Python, 2022-04-10 17:38:36
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
var __name__ = 'handlers.diario_integrado';
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
export var CAPTION = helpers.XmlConstructor.tagger ('caption');
export var XTABLE = widgets.Table;
export var XML = helpers.XML;
export var XTRD = widgets.TableData;
export var XTRH = widgets.TableHead;
export var XFOOTER = widgets.TableFooterPagination;
export var XSECTION = helpers.XSECTION;
export var THEAD = helpers.XmlConstructor.tagger ('thead');
export var TFOOT = helpers.XmlConstructor.tagger ('tfoot');
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
		var turma = window.PhanterPWA.Request.get_param ('turma');
		var tur = '';
		if (turma !== null) {
			var tur = DIV (turma, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'}));
		}
		var arg0 = window.PhanterPWA.Request.get_arg (0);
		var arg1 = window.PhanterPWA.Request.get_arg (1);
		var arg2 = window.PhanterPWA.Request.get_arg (2);
		var arg3 = window.PhanterPWA.Request.get_arg (3);
		var arg4 = window.PhanterPWA.Request.get_arg (4);
		if (arg0 === null || arg0 === undefined) {
			var html = CONCATENATE (DIV (DIV (DIV (DIV ('DIÁRIO DE AULAS INTEGRADO', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), tur, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container extend'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-diario_integrado', _class: 'p-row card e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container extend'})));
			html.html_to ('#main-container');
			var html = escolas.EscolherEscola (__kwargtrans__ ({id_target: '#content-diario_integrado', callback_link: (function __lambda__ (id_escola) {
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
				return '#_phanterpwa:/diario-integrado/{0}'.format (id_escola);
			})}));
		}
		else if (str (arg0).isdigit () && (arg1 === null || arg1 === undefined)) {
			var html = CONCATENATE (DIV (DIV (DIV (DIV ('DIÁRIO DE AULAS INTEGRADO', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), tur, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container extend'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-diario_integrado', _class: 'p-row card e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container extend'})));
			html.html_to ('#main-container');
			var html = anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({id_target: '#content-diario_integrado', callback_link: (function __lambda__ (ano) {
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
				return '#_phanterpwa:/diario-integrado/{0}/{1}'.format (arg0, ano);
			})}));
		}
		else if (str (arg0).isdigit () && str (arg1).isdigit ()) {
			self.RegistroDeAulas = DiarioRegistroDeAulas (self, arg0, arg1, arg2, arg3);
		}
		var BackButton1 = left_bar.LeftBarButton ('back_registro_de_aulas', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.Request.get_param ('retornar'), 'position': 'top', 'show_if_way_match': '^diario-integrado\\/[0-9]{1,}\\/[0-9]{1,}.*$'})));
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
	}));}
});
export var RegistroDeAulas =  __class__ ('RegistroDeAulas', [object], {
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
		self.meses = dict ({'01': 'Janeiro', '02': 'Fevereiro', '03': 'Março', '04': 'Abril', '05': 'Maio', '06': 'Junho', '07': 'Julho', '08': 'Agosto', '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'});
		self._get_registro_de_aulas ();
	});},
	get _get_registro_de_aulas () {return __get__ (this, function (self) {
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
			window.PhanterPWA.GET ('api', 'diario-integrado', 'registro-de-aulas', self.id_escola, self.ano_letivo, self.id_turma, self.rotulo_mes_ano, __kwargtrans__ ({onComplete: self.after_get}));
		}
		else {
			window.PhanterPWA.GET ('api', 'diario-integrado', 'registro-de-aulas', self.id_escola, self.ano_letivo, self.id_turma, __kwargtrans__ ({onComplete: self.after_get}));
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
			var registro_de_aulas = json.form_registros;
			self.anterior = json.anterior;
			self.proximo = json.proximo;
			self.rotulo_mes_ano = json.rotulo_mes_ano;
			self.carga_horaria = json.carga_horaria;
			self.carga_horaria_dada = json.carga_horaria_dada;
			self.disciplinas = json.disciplinas;
			self.turma = json.turma;
			self.eh_educacao_infantil = json.eh_educacao_infantil;
			self.processar_registro_de_aulas (registro_de_aulas);
		}
	});},
	get calc_dias_dados () {return __get__ (this, function (self) {
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
		if (self.eh_educacao_infantil == 'True' || self.eh_educacao_infantil === true) {
			return '';
		}
		var ch = '';
		if (str (self.carga_horaria).isdigit () && str (self.carga_horaria_dada).isdigit ()) {
			if (self.carga_horaria > self.carga_horaria_dada) {
				var falta = self.carga_horaria - self.carga_horaria_dada;
				var pluf = ['m', 's'];
				var pluchd = 's';
				if (falta == 1) {
					var pluf = ['', ''];
				}
				if (self.carga_horaria_dada == 1) {
					var pluchd = '';
				}
				var ch = ' - {0} aula{1} de {2}. Falta{3} {4} aula{5}'.format (self.carga_horaria_dada, pluchd, self.carga_horaria, pluf [0], falta, pluf [1]);
			}
			else if (self.carga_horaria == self.carga_horaria_dada) {
				var ch = 'Todas as {0} aulas foram dadas'.format (self.carga_horaria);
			}
			else if (self.carga_horaria < self.carga_horaria_dada) {
				var extra = self.carga_horaria_dada - self.carga_horaria;
				var ch = 'Você deu {0} aulas extras. {1} de {2}.'.format (extra, self.carga_horaria_dada, self.carga_horaria);
			}
		}
		return ch;
	});},
	get processar_registro_de_aulas () {return __get__ (this, function (self, registro_de_aulas) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'registro_de_aulas': var registro_de_aulas = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('DIÁRIO DE AULAS INTEGRADO', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container extend'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-diario_integrado', _class: 'p-row card e-padding_auto'})), DIV (__kwargtrans__ ({_id: 'modal_cmp_curriculares_container'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container extend'})));
		html.html_to ('#main-container');
		if (self.disciplina !== null && self.disciplina !== undefined) {
			var html = DIV (H2 ('Registro de aulas da disciplina de ', self.disciplina, ' da turma ', self.turma), __kwargtrans__ ({_class: 'registro_de_aulas_container'}));
		}
		else {
			var html = DIV (H2 ('Registro de aulas da turma ', self.turma), __kwargtrans__ ({_class: 'registro_de_aulas_container'}));
		}
		if (self.eh_educacao_infantil) {
			var tabela = TABLE (TR (TH ('DIA'), TH ('QUANT.'), TH ('COMPONENTES CURRICULARES TRABALHADOS'), TH ('CONTEÚDO TRABALHADO E ESTRATÉGIAS APLICADAS')), __kwargtrans__ ({_class: 'tabela_registro_de_aulas'}));
		}
		else {
			var tabela = TABLE (TR (TH ('DIA'), TH ('DISCIPLINA'), TH ('QUANT.'), TH ('CONTEÚDO TRABALHADO')), __kwargtrans__ ({_class: 'tabela_registro_de_aulas'}));
		}
		for (var x of registro_de_aulas) {
			var data = x [0] [0];
			var __left0__ = data.py_split ('-');
			var ano = __left0__ [0];
			var mes = __left0__ [1];
			var dia = __left0__ [2];
			var mes_ext = self.meses [mes];
			var data_ext = '{0} de {1} de {2}'.format (dia, mes_ext, ano);
			var linha = TR (__kwargtrans__ ({_title: data_ext}));
			for (var y of x) {
				if (y [1] ['tipo'] == 'cabecalho') {
					var celula = TH (DIV ('{0}'.format (y [0].__getslice__ (8, null, 1)), __kwargtrans__ ({_class: 'registro_de_aulas_rotulo_dia'})), __kwargtrans__ (y [1]));
				}
				else if (y [1] ['tipo'] == 'select') {
					var ht_sele = SELECT (OPTION (__kwargtrans__ ({_selected: 'selected'})));
					for (var z of y [1] ['data_set']) {
						if (str (z) == str (y [0])) {
							var ht_op = OPTION (z, __kwargtrans__ ({_value: z, _selected: 'selected'}));
						}
						else {
							var ht_op = OPTION (z, __kwargtrans__ ({_value: z}));
						}
						ht_sele.append (ht_op);
					}
					var celula = TD (DIV (ht_sele, __kwargtrans__ (dict ({'_class': 'registro_de_aulas_select', '_data-data': x [0] [0], '_data-campo': 'quantidade'}))), DIV (I (__kwargtrans__ ({_class: 'fas fa-cloud-upload-alt'})), __kwargtrans__ ({_class: 'botao_enviar_registro'})), __kwargtrans__ (y [1]));
				}
				else if (y [1] ['tipo'] == 'texto') {
					var celula = TD (DIV (TEXTAREA (y [0]), __kwargtrans__ (dict ({'_class': 'registro_de_aulas_textarea', '_data-data': x [0] [0], '_data-campo': 'conteudo'}))), DIV (I (__kwargtrans__ ({_class: 'fas fa-cloud-upload-alt'})), __kwargtrans__ ({_class: 'botao_enviar_registro'})), __kwargtrans__ (y [1]));
				}
				else if (y [1] ['tipo'] == 'multselect') {
					var celula = TD (DIV (XML (y [0]), __kwargtrans__ (dict ({'_class': 'registro_de_aulas_cmp_curriculares', '_data-data': x [0] [0], '_data-campo': 'conteudo'}))), DIV (I (__kwargtrans__ ({_class: 'fas fa-cloud-upload-alt'})), __kwargtrans__ ({_class: 'botao_enviar_registro'})), __kwargtrans__ (y [1]));
				}
				else {
					var celula = TD (y [0], __kwargtrans__ (y [1]));
				}
				linha.append (celula);
			}
			tabela.append (linha);
		}
		var botao_mes_anterior = DIV (I (__kwargtrans__ ({_class: 'fas fa-angle-double-left'})), __kwargtrans__ (dict ({'_class': 'botao_mes_anterior icon_button', '_title': 'Diário do Aluno Anterior', '_disabled': 'disabled'})));
		var botao_proximo_mes = DIV (I (__kwargtrans__ ({_class: 'fas fa-angle-double-right'})), __kwargtrans__ (dict ({'_class': 'botao_proximo_mes icon_button', '_title': 'Diário do Próximo Aluno turma', '_disabled': 'disabled'})));
		var way = ['diario-integrado', self.id_escola, self.ano_letivo, self.id_turma];
		if (self.anterior !== null && self.anterior !== undefined) {
			var nway = list (way);
			nway.append (self.anterior);
			var botao_mes_anterior = A (I (__kwargtrans__ ({_class: 'fas fa-angle-double-left'})), __kwargtrans__ (dict ({'_class': 'botao_mes_anterior icon_button', '_title': 'Mês anterior', '_href': window.PhanterPWA.XWAY (...nway)})));
		}
		if (self.proximo !== null && self.proximo !== undefined) {
			way.append (self.proximo);
			var botao_proximo_mes = A (I (__kwargtrans__ ({_class: 'fas fa-angle-double-right'})), __kwargtrans__ (dict ({'_class': 'botao_proximo_mes icon_button', '_title': 'Próximo mês', '_href': window.PhanterPWA.XWAY (...way)})));
		}
		var ch = '';
		if (str (self.carga_horaria).isdigit () && str (self.carga_horaria_dada).isdigit ()) {
			if (self.carga_horaria > self.carga_horaria_dada) {
				var falta = self.carga_horaria - self.carga_horaria_dada;
				var pluf = ['m', 's'];
				var pluchd = 's';
				if (falta == 1) {
					var pluf = ['', ''];
				}
				if (self.carga_horaria_dada == 1) {
					var pluchd = '';
				}
				var ch = ' - {0} aula{1} de {2}. Falta{3} {4} aula{5}'.format (self.carga_horaria_dada, pluchd, self.carga_horaria, pluf [0], falta, pluf [1]);
			}
			else if (self.carga_horaria == self.carga_horaria_dada) {
				var ch = 'Todas as {0} aulas foram dadas'.format (self.carga_horaria);
			}
			else if (self.carga_horaria < self.carga_horaria_dada) {
				var extra = self.carga_horaria_dada - self.carga_horaria;
				var ch = 'Você deu {0} aulas extras. {1} de {2}.'.format (extra, self.carga_horaria_dada, self.carga_horaria);
			}
		}
		var painel = DIV (LABEL (self.rotulo_mes_ano), DIV (DIV (DIV (DIV (DIV (DIV (tabela, __kwargtrans__ ({_class: 'diario-registro_de_aulas-container'})), __kwargtrans__ ({_class: 'diario-registro_de_aulas-wrapper'})), __kwargtrans__ ({_class: 'p-row e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (botao_mes_anterior, botao_proximo_mes, __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper has_buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control'}));
		html.append (painel);
		html.html_to ('#content-diario_integrado');
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
		$ ('.registro_de_aulas_select').find ('select').off ('change.registro_de_aulas_select').on ('change.registro_de_aulas_select', (function __lambda__ () {
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
			return self._enviar_registro ($ (this).parent ());
		}));
		$ ('.texto_reg_aula').find ('textarea').off ('change.nota_diario').on ('change.nota_diario', (function __lambda__ () {
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
			return self._enviar_registro ($ (this).parent ());
		}));
		$ ('.botao_enviar_registro').off ('click.enviar_registro').on ('click.enviar_registro', (function __lambda__ () {
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
			return self._enviar_registro ($ (this).parent ());
		}));
		$ ('.celula_cmp_curriculares').off ('click.celula_cmp_curriculares').on ('click.celula_cmp_curriculares', (function __lambda__ () {
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
			return self.modal_componentes_curriculares (this);
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
	get _enviar_registro () {return __get__ (this, function (self, el) {
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
		var elemento = $ (el);
		elemento.parent ().find ('.botao_enviar_registro').fadeIn ();
		var campo = elemento.data ('campo');
		var data = elemento.data ('data');
		var formdata = new FormData ();
		if (campo == 'conteudo') {
			var valor = elemento.find ('textarea').val ();
			formdata.append ('texto', valor);
		}
		else if (campo == 'quantidade') {
			var valor = elemento.find ('select').val ();
			formdata.append ('quantidade_de_aulas', valor);
		}
		formdata.append ('data', data);
		window.PhanterPWA.PUT ('api', 'diario-integrado', 'registro-de-aulas', self.id_escola, self.ano_letivo, self.id_turma, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.depois_de_enviar_registro (data, ajax_status, elemento);
		})}));
	});},
	get depois_de_enviar_registro () {return __get__ (this, function (self, data, ajax_status, elemento) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'ajax_status': var ajax_status = __allkwargs0__ [__attrib0__]; break;
						case 'elemento': var elemento = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (ajax_status == 'success') {
			elemento.parent ().find ('.botao_enviar_registro').fadeOut ();
			var json = data.responseJSON;
			self.carga_horaria = json.carga_horaria;
			self.carga_horaria_dada = json.carga_horaria_dada;
			self.diario_binds ();
		}
	});},
	get modal_componentes_curriculares () {return __get__ (this, function (self, el) {
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
		var value = $ (el).attr ('data-value');
		var value = JSON.parse (value);
		var data = $ (el).attr ('data-data');
		var __left0__ = data.py_split ('-');
		var ano = __left0__ [0];
		var mes = __left0__ [1];
		var dia = __left0__ [2];
		var mes_ext = self.meses [mes];
		var data_ext = '{0} de {1} de {2}'.format (dia, mes_ext, ano);
		var content = DIV (P ('Acesse o combox abaixo em ', I (__kwargtrans__ ({_class: 'fas fa-angle-down'})), ' e escolha os compenentes curriculares trabalhados e depois confirme.', ' Para retirar algum componente basta clicar no ', I (__kwargtrans__ ({_class: 'fas fa-times'})), ' no final do', ' nome do componente.'), DIV (widgets.MultSelect ('quanti_cmp', __kwargtrans__ ({value: value, data_set: (function () {
			var __accu0__ = [];
			for (var x of self.disciplinas) {
				__accu0__.append ([x, x]);
			}
			return __accu0__;
		}) ()})), __kwargtrans__ ({_style: 'margin:auto; width: 90%;'})), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.FormButton ('confirmar', 'Confirmar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), forms.FormButton ('cancelar', 'Cancelar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_cmp_curriculares = modal.Modal ('#modal_cmp_curriculares_container', __kwargtrans__ (dict ({'title': 'Componentes Curriculares do dia {0}'.format (data_ext), 'content': content, 'footer': footer, 'form': 'cmp_curriculares'})));
		self.modal_cmp_curriculares.open ();
		$ ('#phanterpwa-widget-form-form_button-confirmar').off ('click.adicionar_cmp_curriculares').on ('click.adicionar_cmp_curriculares', (function __lambda__ () {
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
			return self._on_click_add_cmp_curriculares (el, data);
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
			return self.modal_cmp_curriculares.close ();
		}));
	});},
	get _on_click_add_cmp_curriculares () {return __get__ (this, function (self, elemento, data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'elemento': var elemento = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var componentes = $ ('#phanterpwa-widget-multselect-input-quanti_cmp').val ();
		var formdata = new FormData ();
		formdata.append ('componentes_curriculares', componentes);
		formdata.append ('data', data);
		window.PhanterPWA.PUT ('api', 'diario-integrado', 'registro-de-aulas', self.id_escola, self.ano_letivo, self.id_turma, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.depois_de_enviar_componentes_curriculares (data, ajax_status, elemento);
		})}));
	});},
	get depois_de_enviar_componentes_curriculares () {return __get__ (this, function (self, data, ajax_status, elemento) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'ajax_status': var ajax_status = __allkwargs0__ [__attrib0__]; break;
						case 'elemento': var elemento = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (ajax_status == 'success') {
			self.modal_cmp_curriculares.close ();
			var json = data.responseJSON;
			$ (elemento).find ('.registro_de_aulas_cmp_curriculares').html (json.valor_extenso);
			self.diario_binds ();
		}
	});}
});
export var DiarioRegistroDeAulas =  __class__ ('DiarioRegistroDeAulas', [object], {
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
		self.meses = dict ({'01': 'Janeiro', '02': 'Fevereiro', '03': 'Março', '04': 'Abril', '05': 'Maio', '06': 'Junho', '07': 'Julho', '08': 'Agosto', '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'});
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('DIÁRIO DE AULAS INTEGRADO', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container extend'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-diario_integrado', _class: 'p-row card e-padding_auto'})), DIV (__kwargtrans__ ({_id: 'modal_cmp_curriculares_container'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container extend'})));
		html.html_to ('#main-container');
		self._get_calendario ();
	});},
	get _get_calendario () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'calendario', self.ano_letivo, self.id_escola, __kwargtrans__ ({onComplete: self.depois_de_pegar_calendario}));
	});},
	get depois_de_pegar_calendario () {return __get__ (this, function (self, data, ajax_status) {
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
		self.conta_aulas_fundamental = dict ();
		self.meses_processados = [];
		self.conta_aulas_educacao_infantil = 0;
		self.cargas_horarias = dict ();
		if (ajax_status == 'success') {
			self.datas_processadas = list ();
			self.lista_de_datas = list ();
			self._pos_index = 0;
			self.lista_dias_letivos = json.lista_dias_letivos;
			var tem_dia_letivo = false;
			var content = CONCATENATE ();
			for (var x of self.lista_dias_letivos) {
				var tabela = TABLE (THEAD (TR (TD (XML ('&#160;'), __kwargtrans__ ({_class: 'espacador_diario_de_registro_de_aulas cabecalho', _colspan: '2'})))), TFOOT (TR (TD (XML ('&#160;'), __kwargtrans__ ({_class: 'espacador_diario_de_registro_de_aulas rodape', _colspan: '2'})))), __kwargtrans__ ({_class: 'tabela_diario_registo_de_aulas'}));
				for (var y of x [1]) {
					self.lista_de_datas.append (y);
					var tem_dia_letivo = true;
					tabela.append (TBODY (__kwargtrans__ ({_id: 'tbody_{0}'.format (str (y).py_replace ('-', '_')), _class: 'conteudo_registro_de_aulas_diario'})));
				}
				content.append (tabela);
			}
			if (tem_dia_letivo) {
				self.datas_processadas.append (self.lista_de_datas [0]);
				self._get_registro_de_aulas ();
				var xml_registro_de_aulas = DIV (DIV (DIV (DIV (DIV (DIV (DIV (H2 ('REGISTRO DE AULAS DA TURMA ', window.PhanterPWA.Request.get_param ('turma')), __kwargtrans__ ({_class: 'sme_cabecalho_titulo_documento'})), DIV (content, __kwargtrans__ ({_class: 'sme_documento_conteudo'})), __kwargtrans__ ({_id: 'pagina_{0}_matricula'.format (self.id_matricula), _class: 'p-row'})), __kwargtrans__ ({_class: 'imprimir_matricula_wrapper imprimir_documentos_wrapper'})), __kwargtrans__ ({_class: 'imprimir_diario_de_aulas'}))), __kwargtrans__ ({_class: 'media-print-visible'})), __kwargtrans__ ({_class: 'folhas_para_imprimir phanterpwa-simple-media-print'}));
				xml_registro_de_aulas.html_to ('#content-diario_integrado');
			}
		}
	});},
	get _get_registro_de_aulas () {return __get__ (this, function (self) {
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
		if (self._pos_index < len (self.lista_de_datas)) {
			var data_atual = self.lista_de_datas [self._pos_index];
			var __left0__ = str (data_atual).py_split ('-');
			var ano = __left0__ [0];
			var mes = __left0__ [1];
			var dia = __left0__ [2];
			var data_ext = '{0}{1}{2}'.format (dia, mes, ano);
			var id_target = '#tbody_{0}_{1}_{2}'.format (ano, mes, dia);
			var prelo = TR (TD (DIV (preloaders.run_points, __kwargtrans__ ({_style: 'text-align: center;'})), __kwargtrans__ ({_colspan: '2'})));
			prelo.html_to (id_target);
			self._pos_index++;
			window.PhanterPWA.GET ('api', 'registro-de-aulas', 'diario', self.id_escola, self.ano_letivo, self.id_turma, data_ext, __kwargtrans__ ({onComplete: self.after_get}));
		}
		else {
			var md = window.markdownit ('default', dict ({'html': true}));
			md.use (window.markdownitDeflist).use (window.markdownItAttrs);
			var result1 = DIV (XML (md.render (self.resumo_contagem ())), __kwargtrans__ ({_class: 'phanterpwa-markdownit-wrapper'}));
			result1.html_to ('#resumo_carga_horaria');
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
			self.eh_multisseriado = json.eh_multisseriado;
			self.ordem_series = json.ordem_series;
			var tot_aulas_educacao_infantil = json.conta_aulas_educacao_infantil;
			self.calc_cargas_horarias (json.cargas_horarias);
			if (str (tot_aulas_educacao_infantil).isdigit ()) {
				self.conta_aulas_educacao_infantil += tot_aulas_educacao_infantil;
			}
			var tot_aulas_ensino_fundamental = json.conta_aulas_ensino_fundamental;
			if (tot_aulas_ensino_fundamental !== null) {
				self.conta_aulas (tot_aulas_ensino_fundamental);
			}
			var __left0__ = json.data_aula.py_split ('/');
			var dia = __left0__ [0];
			var mes = __left0__ [1];
			var ano = __left0__ [2];
			var id_target = '#tbody_{0}_{1}_{2}'.format (ano, mes, dia);
			var mes_ext = self.meses [mes];
			if (json.conteudo_educacao_infantil !== null && json.conteudo_ensino_fundamental !== null) {
				if (!__in__ (mes_ext, self.meses_processados)) {
					self.meses_processados.append (mes_ext);
					var linha = CONCATENATE (TR (TH ('Mês de ', mes_ext, __kwargtrans__ ({_colspan: '2', _class: 'diario_aulas_titulo_mes'}))));
				}
				else {
					var linha = CONCATENATE ();
				}
				var md = window.markdownit ('default', dict ({'html': true}));
				md.use (window.markdownitDeflist).use (window.markdownItAttrs);
				var result1 = DIV (XML (md.render (json.conteudo_educacao_infantil)), __kwargtrans__ ({_class: 'phanterpwa-markdownit-wrapper'}));
				var result2 = DIV (XML (md.render (json.conteudo_ensino_fundamental)), __kwargtrans__ ({_class: 'phanterpwa-markdownit-wrapper'}));
				linha.append (TR (TH (DIV (json.data_aula), DIV (json.dia_da_semana, __kwargtrans__ ({_class: 'diario_aulas_dia_da_semana'})), __kwargtrans__ ({_rowspan: '2'})), TD (result1)));
				linha.append (TR (TD (result2)));
				linha.html_to (id_target);
			}
			else if (json.conteudo_educacao_infantil !== null) {
				if (!__in__ (mes_ext, self.meses_processados)) {
					self.meses_processados.append (mes_ext);
					var linha = CONCATENATE (TR (TH ('Mês de ', mes_ext, __kwargtrans__ ({_colspan: '2', _class: 'diario_aulas_titulo_mes'}))));
				}
				else {
					var linha = CONCATENATE ();
				}
				var md = window.markdownit ('default', dict ({'html': true}));
				md.use (window.markdownitDeflist).use (window.markdownItAttrs);
				var result1 = DIV (XML (md.render (json.conteudo_educacao_infantil)), __kwargtrans__ ({_class: 'phanterpwa-markdownit-wrapper'}));
				linha.append (TR (TH (DIV (json.data_aula), DIV (json.dia_da_semana, __kwargtrans__ ({_class: 'diario_aulas_dia_da_semana'}))), TD (result1)));
				linha.html_to (id_target);
			}
			else if (json.conteudo_ensino_fundamental !== null) {
				if (!__in__ (mes_ext, self.meses_processados)) {
					self.meses_processados.append (mes_ext);
					var linha = CONCATENATE (TR (TH ('Mês de ', mes_ext, __kwargtrans__ ({_colspan: '2', _class: 'diario_aulas_titulo_mes'}))));
				}
				else {
					var linha = CONCATENATE ();
				}
				var md = window.markdownit ('default', dict ({'html': true}));
				md.use (window.markdownitDeflist).use (window.markdownItAttrs);
				var result1 = DIV (XML (md.render (json.conteudo_ensino_fundamental)), __kwargtrans__ ({_class: 'phanterpwa-markdownit-wrapper'}));
				linha.append (TR (TH (DIV (json.data_aula), DIV (json.dia_da_semana, __kwargtrans__ ({_class: 'diario_aulas_dia_da_semana'}))), TD (result1)));
				linha.html_to (id_target);
			}
			else {
				console.log (json);
				$ (id_target).remove ();
			}
		}
		self._get_registro_de_aulas ();
	});},
	get conta_aulas () {return __get__ (this, function (self, dados) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'dados': var dados = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var dict_dados = dict (dados);
		for (var x of dict_dados.py_keys ()) {
			if (!__in__ (x, self.conta_aulas_fundamental)) {
				self.conta_aulas_fundamental [x] = dict (dict_dados [x]);
			}
			else {
				for (var y of dict (dict_dados [x]).py_keys ()) {
					if (__in__ (y, self.conta_aulas_fundamental [x])) {
						self.conta_aulas_fundamental [x] [y] += dict_dados [x] [y];
					}
					else {
						self.conta_aulas_fundamental [x] [y] = dict_dados [x] [y];
					}
				}
			}
		}
	});},
	get calc_cargas_horarias () {return __get__ (this, function (self, dados) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'dados': var dados = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var dict_dados = dict (dados);
		for (var x of dict_dados.py_keys ()) {
			if (!__in__ (x, self.cargas_horarias)) {
				self.cargas_horarias [x] = dict_dados [x];
			}
			else {
				for (var y of dict (dict_dados [x]).py_keys ()) {
					if (!__in__ (y, self.cargas_horarias [x])) {
						self.cargas_horarias [x] [y] = dict_dados [x] [y];
					}
				}
			}
		}
	});},
	get resumo_contagem () {return __get__ (this, function (self) {
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
		var lista_series = [];
		var linhas_series = [];
		var texto_resumo_carga_horaria = '';
		for (var x of self.ordem_series) {
			if (__in__ (x [0], self.conta_aulas_fundamental) && __in__ (x [0], self.cargas_horarias)) {
				var texto_linha = '**{0}**\n\n'.format (x [1]);
				for (var dis of self.conta_aulas_fundamental [x [0]].py_keys ()) {
					var tot = self.conta_aulas_fundamental [x [0]] [dis];
					var ch = self.cargas_horarias [x [0]] [dis];
					var texto_dis = '+  **{0}:**'.format (dis);
					if (tot == ch) {
						texto_dis += ' Todas as {0} aulas foram dadas.\n'.format (tot);
					}
					else if (tot > ch) {
						texto_dis += ' {0} aulas registradas. Foram dadas {1} aulas extras das {2} necessárias.\n'.format (tot, tot - ch, ch);
					}
					else if (tot < ch) {
						texto_dis += ' {0} aulas registradas. Faltam {1} aulas das {2} necessárias.\n'.format (tot, ch - tot, ch);
					}
					texto_linha += texto_dis;
				}
				texto_resumo_carga_horaria += texto_linha;
				texto_resumo_carga_horaria += '\n';
			}
		}
		return texto_resumo_carga_horaria;
	});}
});

//# sourceMappingURL=handlers.diario_integrado.map