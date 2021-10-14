// Transcrypt'ed from Python, 2021-10-14 12:41:47
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
	get __init__ () {return __get__ (this, function (self, index_instance, escola, ano_letivo, turma, id_disciplina, rotulo_mes_ano) {
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
			if (self.rotulo_mes_ano !== null && self.rotulo_mes_ano !== undefined) {
				window.PhanterPWA.GET ('api', 'controle-de-atividades', self.id_escola, self.ano_letivo, self.id_turma, self.id_disciplina, self.rotulo_mes_ano, __kwargtrans__ ({onComplete: self.after_get}));
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
			var controle_de_atividades = json.form_registros;
			self.anterior = json.anterior;
			self.quant_dias = json.quant_dias;
			self.proximo = json.proximo;
			self.rotulo_mes_ano = json.rotulo_mes_ano;
			self.disciplina = json.disciplina;
			self.turma = json.turma;
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('CONTROLE DE ATIVIDADES', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container extend'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-controle_de_atividades', _class: 'p-row card e-padding_auto'})), DIV (__kwargtrans__ ({_id: 'modal_controle_de_atividades_container'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container extend'})));
		html.html_to ('#main-container');
		if (self.disciplina !== null && self.disciplina !== undefined) {
			var html = DIV (H2 ('Controle de atividades da disciplina de ', self.disciplina, ' da turma ', self.turma), __kwargtrans__ ({_class: 'controle_de_atividades_container'}));
		}
		else {
			var html = DIV (H2 ('Controle de atividades da turma ', self.turma), __kwargtrans__ ({_class: 'controle_de_atividades_container'}));
		}
		var tabela = TABLE (TR (TH ('Nº', __kwargtrans__ ({_class: 'rotulo', _rowspan: 2})), TH ('NOME ALUNO(A)', __kwargtrans__ ({_class: 'rotulo', _rowspan: 2})), TH ('DIAS LETIVOS', __kwargtrans__ ({_colspan: self.quant_dias, _class: 'rotulo'}))), __kwargtrans__ ({_class: 'tabela_controle_de_atividades'}));
		for (var x of controle_de_atividades) {
			var linha = TR ();
			for (var y of x) {
				if (y [1] ['tipo'] == 'cabecalho') {
					var celula = TH (DIV (y [0], __kwargtrans__ ({_class: 'controle_de_atividades_rotulo_dia'})), __kwargtrans__ (y [1]));
				}
				else if (y [1] ['tipo'] == 'botao') {
					if (y [1] ['_data-status'] == 'Não fez a atividade') {
						var bas_nas = I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:red;'}));
					}
					else if (y [1] ['_data-status'] == 'Fez toda a atividade') {
						var bas_nas = I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:green;'}));
					}
					else if (y [1] ['_data-status'] == 'Fez parcialmente a atividade') {
						var bas_nas = (y [0] === true || y [0] == 'true' ? I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:#d28a06;'})) : '');
					}
					else {
						var bas_nas = DIV (y [1] ['_placeholder'], __kwargtrans__ ({_class: 'apagadinho'}));
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
		var painel = DIV (LABEL (self.rotulo_mes_ano), DIV (DIV (DIV (DIV (DIV (DIV (tabela, __kwargtrans__ ({_class: 'diario-controle_de_atividades-container'})), __kwargtrans__ ({_class: 'diario-controle_de_atividades-wrapper'})), __kwargtrans__ ({_class: 'p-row e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (botao_mes_anterior, botao_proximo_mes, __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper has_buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control'}));
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
		console.log ('eitcha');
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
		var status = $ (el).attr ('data-status');
		var tem_atividade = $ (el).attr ('data-tem_atividade');
		var foi_parcial = $ (el).attr ('data-foi_parcial');
		var nome_aluno = $ (el).data ('nome_aluno');
		var data = $ (el).data ('data_atividade');
		var __left0__ = data.py_split ('-');
		var ano = __left0__ [0];
		var mes = __left0__ [1];
		var dia = __left0__ [2];
		var mes_ext = self.meses [mes];
		var data_ext = '{0} de {1} de {2}'.format (dia, mes_ext, ano);
		var id_disciplina = $ (el).data ('id_disciplina');
		console.log (tem_atividade, foi_parcial);
		if (id_disciplina === null || id_disciplina === undefined) {
			var id_disciplina = null;
		}
		var atividade = false;
		if (status == 'Não fez a atividade') {
			var complement = ' Atividade';
			var atividade = true;
			var content = DIV (P (STRONG ('O(A) presente aluno(a) fez a atividade proposta?')), P ('No registro consta que o(a) aluno(a) não fez a atividade em ', STRONG (data_ext), '. Se o(a) aluno(a) fez completamente ou de forma satisfatória, ', ' mude para ', STRONG ('FEZ', __kwargtrans__ ({_style: 'color: green'})), '. Caso tenha feito a atividade parcialmente, você pode mudar para ', STRONG ('FEZ PARCIALMENTE', __kwargtrans__ ({_style: 'color: #d28a06'})), '.'), __kwargtrans__ ({_class: 'p-row'}));
		}
		else if (status == 'Fez toda a atividade') {
			var complement = ' remoção da Atividade';
			var atividade = true;
			var content = DIV (P (STRONG ('O(A) presente aluno(a) fez a atividade proposta?')), P ('Pode-se observar que o(a) aluno(a) fez a atividade em ', STRONG (data_ext), ' completamente ou de forma satisfatória.', ' Se ele fez a atividade parcialmente, você pode mudar para ', STRONG ('FEZ PARCIALMENTE', __kwargtrans__ ({_style: 'color: #d28a06'})), '. Caso o(a) aluno(a) não tenha feito, é só mudar para ', STRONG ('NÃO FEZ', __kwargtrans__ ({_style: 'color: red'})), '.'), P ('Você também pode apagar qualquer registro, é có acessar a opção ', STRONG ('NÃO FEZ', __kwargtrans__ ({_style: 'color: blue'})), '.'), __kwargtrans__ ({_class: 'p-row'}));
		}
		else if (status == 'Fez parcialmente a atividade') {
			var complement = ' remoção da Atividade';
			var atividade = true;
			var content = DIV (P (STRONG ('O(A) presente aluno(a) fez a atividade proposta?')), P ('Pode-se observar que o(a) aluno(a) fez a atividade em ', STRONG (data_ext), ', porém ', STRONG ('parcialmente'), ', se ele fez completamente ou de forma satisfatória, você pode mudar para ', STRONG ('FEZ', __kwargtrans__ ({_style: 'color: green'})), '. Caso o(a) aluno(a) não tenha feito, é só mudar para ', STRONG ('NÃO FEZ', __kwargtrans__ ({_style: 'color: red'})), '.'), P ('Você também pode apagar qualquer registro, é có acessar a opção ', STRONG ('NÃO FEZ', __kwargtrans__ ({_style: 'color: blue'})), '.'), __kwargtrans__ ({_class: 'p-row'}));
		}
		else {
			var content = DIV (P (STRONG ('O(A) presente aluno(a) fez a atividade proposta?')), P ('Ainda não foi definido o status da atividade no dia ', STRONG (data_ext), '. Se ele fez completamente ou de forma satisfatória, você acessa a opção ', STRONG ('FEZ', __kwargtrans__ ({_style: 'color: green'})), ', se ele fez parcialmente, é só acessar a opção ', STRONG ('FEZ PARCIALMENTE', __kwargtrans__ ({_style: 'color: #d28a06'})), '. Caso o(a) aluno(a) não tenha feito, é só mudar para ', STRONG ('NÃO FEZ', __kwargtrans__ ({_style: 'color: red'})), '.'), P ('Você também pode apagar qualquer registro, é có acessar a opção ', STRONG ('NÃO FEZ', __kwargtrans__ ({_style: 'color: blue'})), '.'), __kwargtrans__ ({_class: 'p-row'}));
		}
		var footer = DIV ((status != 'Fez toda a atividade' ? forms.FormButton ('confirmar_atividade_fez', 'Fez', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})) : ''), (status != '' ? forms.FormButton ('confirmar_atividade_fez_parcialmente', 'Fez parcialmente', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})) : 'Fez parcialmente a atividade'), (status != 'Não fez a atividade' ? forms.FormButton ('confirmar_atividade_nao_fez', 'Não fez', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})) : ''), (atividade ? forms.FormButton ('apagar', 'Apagar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})) : ''), forms.FormButton ('cancelar', 'Cancelar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
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
				if (up [1] == 'Fez parcialmente a atividade') {
					$ ('#{0}'.format (up [0])).html (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:#d28a06;'})).jquery ());
					$ ('#{0}'.format (up [0])).attr ('data-status', up [1]);
				}
				else if (up [1] == 'Não fez a atividade') {
					$ ('#{0}'.format (up [0])).html (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:red;'})).jquery ());
					$ ('#{0}'.format (up [0])).attr ('data-status', up [1]);
				}
				else if (up [1] == 'Fez toda a atividade') {
					$ ('#{0}'.format (up [0])).html (I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:green;'})).jquery ());
					$ ('#{0}'.format (up [0])).attr ('data-status', up [1]);
				}
				else {
					$ ('#{0}'.format (up [0])).html (DIV (up [2], __kwargtrans__ ({_class: 'apagadinho'})).jquery ());
					$ ('#{0}'.format (up [0])).attr ('data-status', 'Não definido');
				}
			}
			self.diario_binds ();
		}
	});}
});

//# sourceMappingURL=handlers.controle_de_atividades.map