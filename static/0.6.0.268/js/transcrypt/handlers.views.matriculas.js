// Transcrypt'ed from Python, 2022-02-20 02:17:31
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as preloaders from './phanterpwa.frontend.preloaders.js';
import * as modal from './phanterpwa.frontend.components.modal.js';
import * as forms from './phanterpwa.frontend.forms.js';
import * as widgets from './phanterpwa.frontend.components.widgets.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
var __name__ = 'handlers.views.matriculas';
export var CONCATENATE = helpers.CONCATENATE;
export var OPTION = helpers.XmlConstructor.tagger ('option');
export var SELECT = helpers.XmlConstructor.tagger ('select');
export var DIV = helpers.XmlConstructor.tagger ('div');
export var I = helpers.XmlConstructor.tagger ('i');
export var A = helpers.XmlConstructor.tagger ('a');
export var SPAN = helpers.XmlConstructor.tagger ('span');
export var FORM = helpers.XmlConstructor.tagger ('form');
export var UL = helpers.XmlConstructor.tagger ('ul');
export var H3 = helpers.XmlConstructor.tagger ('h3');
export var P = helpers.XmlConstructor.tagger ('p');
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
export var LABEL = helpers.XmlConstructor.tagger ('label');
export var XSECTION = helpers.XSECTION;
export var TD = helpers.XmlConstructor.tagger ('td');
export var TR = helpers.XmlConstructor.tagger ('tr');
export var BR = helpers.XmlConstructor.tagger ('br', true);
export var Visualizar =  __class__ ('Visualizar', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, id_matricula, id_escola, ano_letivo, prof_pai, prof_mae, id_aluno, nome_do_aluno, sexo, data_de_nascimento, nome_do_pai, nome_da_mae, naturalidade, endereco, serie, nome_do_responsavel, data_mat, novato, admitido, unidade_admitido, ano_anterior, serie_ant, resultado_final, resultado_anterior, numero_aluno, turma) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
						case 'id_escola': var id_escola = __allkwargs0__ [__attrib0__]; break;
						case 'ano_letivo': var ano_letivo = __allkwargs0__ [__attrib0__]; break;
						case 'prof_pai': var prof_pai = __allkwargs0__ [__attrib0__]; break;
						case 'prof_mae': var prof_mae = __allkwargs0__ [__attrib0__]; break;
						case 'id_aluno': var id_aluno = __allkwargs0__ [__attrib0__]; break;
						case 'nome_do_aluno': var nome_do_aluno = __allkwargs0__ [__attrib0__]; break;
						case 'sexo': var sexo = __allkwargs0__ [__attrib0__]; break;
						case 'data_de_nascimento': var data_de_nascimento = __allkwargs0__ [__attrib0__]; break;
						case 'nome_do_pai': var nome_do_pai = __allkwargs0__ [__attrib0__]; break;
						case 'nome_da_mae': var nome_da_mae = __allkwargs0__ [__attrib0__]; break;
						case 'naturalidade': var naturalidade = __allkwargs0__ [__attrib0__]; break;
						case 'endereco': var endereco = __allkwargs0__ [__attrib0__]; break;
						case 'serie': var serie = __allkwargs0__ [__attrib0__]; break;
						case 'nome_do_responsavel': var nome_do_responsavel = __allkwargs0__ [__attrib0__]; break;
						case 'data_mat': var data_mat = __allkwargs0__ [__attrib0__]; break;
						case 'novato': var novato = __allkwargs0__ [__attrib0__]; break;
						case 'admitido': var admitido = __allkwargs0__ [__attrib0__]; break;
						case 'unidade_admitido': var unidade_admitido = __allkwargs0__ [__attrib0__]; break;
						case 'ano_anterior': var ano_anterior = __allkwargs0__ [__attrib0__]; break;
						case 'serie_ant': var serie_ant = __allkwargs0__ [__attrib0__]; break;
						case 'resultado_final': var resultado_final = __allkwargs0__ [__attrib0__]; break;
						case 'resultado_anterior': var resultado_anterior = __allkwargs0__ [__attrib0__]; break;
						case 'numero_aluno': var numero_aluno = __allkwargs0__ [__attrib0__]; break;
						case 'turma': var turma = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, id_escola);
		if (data_de_nascimento !== null) {
			var __left0__ = data_de_nascimento.py_split ('-');
			var ano = __left0__ [0];
			var mes = __left0__ [1];
			var dia = __left0__ [2];
			var data_de_nascimento = '{0}/{1}/{2}'.format (dia, mes, ano);
		}
		else {
			var data_de_nascimento = STRONG ('Não definido!', __kwargtrans__ ({_style: 'color: red;'}));
		}
		if (nome_do_responsavel === null) {
			var nome_do_responsavel = STRONG ('Não definido!', __kwargtrans__ ({_style: 'color: red;'}));
		}
		if (data_mat !== null) {
			var __left0__ = data_mat.py_split ('-');
			var ano = __left0__ [0];
			var mes = __left0__ [1];
			var dia = __left0__ [2];
			var data_mat = '{0}/{1}/{2}'.format (dia, mes, ano);
		}
		else {
			var data_mat = STRONG ('Não definido!', __kwargtrans__ ({_style: 'color: red;'}));
		}
		if (sexo == '1' || sexo == 1) {
			var l_o_aluno = 'O aluno';
			var label_nome_do_aluno = 'Nome do aluno: ';
			var l_dados_do_aluno = 'Dados do Aluno';
			var novato = 'novato';
			var admitido = 'admitido';
		}
		else if (sexo == '2' || sexo == 2) {
			var l_o_aluno = 'A aluna';
			var label_nome_do_aluno = 'Nome da aluna: ';
			var l_dados_do_aluno = 'Dados da Aluna';
			var novato = 'novata';
			var admitido = 'admitida';
		}
		else {
			var l_o_aluno = 'O(A) aluno(a)';
			var label_nome_do_aluno = 'Nome do(a) aluno(a): ';
			var l_dados_do_aluno = 'Dados do(a) Aluno(a)';
			var novato = 'novato(a)';
			var admitido = 'admitido(a)';
		}
		var xml_endereco = TR (TD (DIV (STRONG ('Endereço: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (STRONG ('Não definido!', __kwargtrans__ ({_style: 'color: red;'})), __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_colspan: 2, _class: 'label_e_campo_wrapper'})));
		if (endereco !== null && endereco != '') {
			var xml_endereco = TR (TD (DIV (STRONG ('Endereço: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (endereco, __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_colspan: 2, _class: 'label_e_campo_wrapper'})));
		}
		var xml_naturalidade = TD (DIV (STRONG ('Naturalidade: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (STRONG ('Não definido!', __kwargtrans__ ({_style: 'color: red;'})), __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper'}));
		var xml_turma_atual = TR (TD (DIV (STRONG (l_o_aluno, ' não está em uma turma ainda!', __kwargtrans__ ({_style: 'color: red;'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_colspan: 2, _class: 'label_e_campo_wrapper'})));
		if (turma !== null) {
			if (str (numero_aluno).isdigit ()) {
				var xml_turma_atual = TR (TD (DIV (STRONG ('Turma: '), turma, __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_colspan: 2, _class: 'label_e_campo_wrapper'})), TD (DIV (STRONG ('Número: '), numero_aluno, __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_colspan: 2, _class: 'label_e_campo_wrapper'})));
			}
			else {
				var xml_turma_atual = TR (TD (DIV (STRONG ('Turma : '), turma, __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_colspan: 3, _class: 'label_e_campo_wrapper'})));
			}
		}
		var xml_ano_anterior = '';
		if (serie_ant !== null) {
			if (ano_anterior === null) {
				var ano_anterior = STRONG ('Não definido!', __kwargtrans__ ({_style: 'color: red;'}));
			}
			if (resultado_anterior === null) {
				var resultado_anterior = STRONG ('Não definido!', __kwargtrans__ ({_style: 'color: red;'}));
			}
			var xml_ano_anterior = XSECTION (LABEL ('Sobre o resultado anterior'), DIV (XTABLE ('tabela_turma_aluno_{0}'.format (id_matricula), TR (TD (DIV (STRONG ('Ano Letivo: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (ano_anterior, __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper'})), TD (DIV (STRONG ('Serie anterior: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (serie_ant, __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper'})), TD (DIV (STRONG ('Resultado Final: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (resultado_anterior, __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper'})), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data phanterpwa-widget'}))), __kwargtrans__ ({_class: 'modal_dados_dos_aluno_matricula e-padding_20'})));
		}
		if (naturalidade !== null) {
			var xml_naturalidade = TD (DIV (STRONG ('Naturalidade: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (naturalidade, __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper'}));
		}
		var xml_nome_do_pai = '';
		if (nome_do_pai !== null && nome_do_pai != '') {
			var xml_nome_do_pai = TR (TD (DIV (STRONG ('Nome do Pai: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (nome_do_pai, __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper', _colspan: 2})));
			if (prof_pai !== null) {
				var xml_nome_do_pai = TR (TD (DIV (STRONG ('Nome do Pai: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (nome_do_pai, __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper'})), TD (DIV (STRONG ('Profissão: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (prof_pai, __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper'})));
			}
		}
		var xml_nome_da_mae = TR (TD (DIV (STRONG ('Nome da Mãe: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (STRONG ('Não definido!', __kwargtrans__ ({_style: 'color: red;'})), __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper', _colspan: 2})), __kwargtrans__ ({_class: 'p-row'}));
		if (nome_da_mae !== null && nome_da_mae != '') {
			var xml_nome_da_mae = TR (TD (DIV (STRONG ('Nome da Mãe: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (nome_da_mae, __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper', _colspan: 2})));
			if (prof_mae !== null) {
				var xml_nome_da_mae = TR (TD (DIV (STRONG ('Nome da Mãe: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (nome_da_mae, __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper'})), TD (DIV (STRONG ('Profissão: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (prof_mae, __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper'})));
			}
		}
		var xml_novato_admitido = '';
		var admi_no = ['Unidade I Completada', 'Unidade II Completada', 'Unidade III Completada', 'Unidade IV Completada'];
		var admi_com = 'Início do Ano';
		if (admitido === true && novato === true) {
			var xml_admi = SPAN (', porém ', STRONG ('não foi possível determinar quando.', __kwargtrans__ ({_style: 'red'})));
			if (unidade_admitido == admi_com) {
				var xml_admi = SPAN (' no ', STRONG ('início do ano'), '.');
			}
			else if (__in__ (unidade_admitido, admi_no)) {
				var xml_admi = SPAN (' com a ', STRONG (unidade_admitido, __kwargtrans__ ({_style: 'text-transform: lowercase;'})), '.');
			}
			var xml_novato_admitido = TR (TD (DIV (l_o_aluno, ' é ', STRONG (novato), ' e foi ', admitido, xml_admi, __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper', _style: 'text-align: center; color: orange;', _colspan: 3})));
		}
		else if (novato === true) {
			var xml_novato_admitido = TR (TD (DIV (l_o_aluno, ' é ', STRONG (novato), '.', __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper', _style: 'text-align: center; color: orange;', _colspan: 3})));
		}
		else if (admitido === true) {
			var xml_admi = SPAN (', porém ', STRONG ('não foi possível determinar quando.', __kwargtrans__ ({_style: 'red'})));
			if (unidade_admitido == admi_com) {
				var xml_admi = SPAN (' no ', STRONG ('início do ano'), '.');
			}
			else if (__in__ (unidade_admitido, admi_no)) {
				var xml_admi = SPAN (' com a ', STRONG (unidade_admitido, __kwargtrans__ ({_style: 'text-transform: lowercase;'})), '.');
			}
			var xml_novato_admitido = TR (TD (DIV (l_o_aluno, ' foi ', admitido, xml_admi, __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper', _style: 'text-align: center; color: orange;', _colspan: 3})));
		}
		var card = DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (XSECTION (LABEL (l_dados_do_aluno), DIV (XTABLE ('tabela_dados_aluno_{0}'.format (id_matricula), TR (TD (DIV (STRONG (label_nome_do_aluno, __kwargtrans__ ({_class: 'rotulo'})), SPAN (nome_do_aluno, __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_colspan: '2', _class: 'label_e_campo_wrapper'})), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data phanterpwa-widget'})), TR (TD (DIV (STRONG ('Data de nascimento: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (data_de_nascimento, __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper'})), xml_naturalidade, __kwargtrans__ ({_class: 'phanterpwa-widget-table-data phanterpwa-widget'})), xml_nome_do_pai, xml_nome_da_mae, xml_endereco), __kwargtrans__ ({_class: 'modal_dados_dos_aluno_matricula e-padding_20'}))), BR (), __kwargtrans__ ({_class: 'p-col w1p100 w4p70'})), DIV (XSECTION (LABEL ('Sobre a Matrícula'), DIV (XTABLE ('tabela_dados_matricula_{0}'.format (id_matricula), TR (TD (DIV (STRONG ('ID matrícula: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (id_matricula, __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper'})), TD (DIV (STRONG ('Ano Letivo: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (ano_letivo, __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper'})), TD (DIV (STRONG ('Data de matrícula: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (data_mat, __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper'})), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data phanterpwa-widget'})), TR (TD (DIV (STRONG ('Série: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (serie, __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper', _colspan: 3})), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data phanterpwa-widget'})), TR (TD (DIV (STRONG ('Nome do Responsável: ', __kwargtrans__ ({_class: 'rotulo'})), SPAN (nome_do_responsavel, __kwargtrans__ ({_class: 'dado'})), __kwargtrans__ ({_class: 'label_e_campo'})), __kwargtrans__ ({_class: 'label_e_campo_wrapper', _colspan: 3})), __kwargtrans__ ({_class: 'phanterpwa-widget-table-data phanterpwa-widget'})), xml_novato_admitido, xml_turma_atual), __kwargtrans__ ({_class: 'modal_dados_dos_aluno_matricula e-padding_20'}))), __kwargtrans__ ({_class: 'p-col w1p100'})), xml_ano_anterior, __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'card-de-matricula'})));
		helpers.XmlConstructor.__init__ (self, 'div', false, card, __kwargtrans__ ({_class: 'painel-visualizar-matricula'}));
	});}
});
export var Matricula =  __class__ ('Matricula', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, target, ano_letivo, id_escola, id_aluno, id_matricula) {
		if (typeof id_matricula == 'undefined' || (id_matricula != null && id_matricula.hasOwnProperty ("__kwargtrans__"))) {;
			var id_matricula = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
						case 'target': var target = __allkwargs0__ [__attrib0__]; break;
						case 'ano_letivo': var ano_letivo = __allkwargs0__ [__attrib0__]; break;
						case 'id_escola': var id_escola = __allkwargs0__ [__attrib0__]; break;
						case 'id_aluno': var id_aluno = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.index_instance = index_instance;
		self.ano_letivo = ano_letivo;
		self.id_escola = id_escola;
		self.id_aluno = id_aluno;
		self.id_matricula = id_matricula;
		self.id_ = window.PhanterPWA.get_id ();
		var html = DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_id: self.id_}));
		html.html_to (target);
		self.get_form_matricula ();
	});},
	get get_form_matricula () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'matricular', self.ano_letivo, self.id_escola, self.id_aluno, self.id_matricula, __kwargtrans__ ({onComplete: self.after_get}));
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
				if (json.razoes == 'faltam_series') {
					window.PhanterPWA.open_way ('series/{0}/{1}/matricula/{2}'.format (self.arg1, self.arg2, self.arg0));
				}
			}
			else {
				var json = data.responseJSON;
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
		self.nova_matricula = true;
		if (json.data.matricula.id !== undefined && json.data.matricula.id !== null) {
			self.nova_matricula = false;
		}
		var sexo = json.data.aluno.sexo;
		var nome_aluno = json.data.aluno.nome;
		if (self.arg1 == 'aluno-conferido') {
			var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.arg2);
			var ano_letivo = self.arg3;
		}
		else {
			var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.arg1);
			var ano_letivo = self.arg2;
		}
		var P1 = 'O(A) ALUNO(A) ';
		if (sexo == '1' || sexo == 1 || sexo == 'Masculino') {
			var P1 = 'O ALUNO ';
		}
		else if (sexo == '2' || sexo == 2 || sexo == 'Feminino') {
			var P1 = 'A ALUNA ';
		}
		if (self.nova_matricula) {
			var texto = CONCATENATE (H3 ('Matricula de: ', STRONG (nome_aluno, __kwargtrans__ ({_style: 'color: orange;'}))), P ('AGORA VAMOS CRIAR UMA NOVA MATRÍCULA PARA ', P1, 'NO ANO LETIVO DE ', STRONG (ano_letivo), '.'), P ('OBSERVE QUE ALGUNS DADOS NÃO PODEM SER ALTERADOS (COMO NOME DO ALUNO POR EXEMPLO), PARA ALTERAR ', 'VOCÊ PODE EDITAR A MATRÍCULA POSTERIORMENTE OU VOLTAR A TELA ANTERIOR.'));
		}
		else {
			var texto = CONCATENATE (H3 ('Matricula de: ', STRONG (nome_aluno, __kwargtrans__ ({_style: 'color: orange;'}))), P (P1, 'POSSUI UMA MATRÍCULA NO ANO LETIVO DE ', STRONG (ano_letivo), ', PORTANTO É POSSÍVEL EDITÁ-LA.'), P ('OBSERVE QUE É POSSÍVEL EDITAR CAMPOS QUE ANTES NÃO ERAM POSSÍVEIS, COMO O NOME DO ALUNO, PORÉM', ' ESTA ALTERAÇÃO SÓ TERÁ EFEITO NA MATRÍCULA (ATAS, DIÁRIOS) DESTE ANO LETIVO, OU SEJA, NÃO IRÁ ALTERAR OS DADOS DOS ALUNOS.'));
		}
		var html = DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (texto, __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'formulario_matricula_aluno'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ (dict ({'_id': 'matricula-editar-aluno', '_class': 'p-row'}))), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), __kwargtrans__ ({_class: 'series-container phanterpwa-card-container'}));
		html.html_to ('#{0}'.format (self.id_));
		self.form = forms.Form (json.data.matricula);
		self.form.html_to ('#formulario_matricula_aluno');
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
		forms.SignForm ('#form-matriculas', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-matriculas');
		})}));
		$ ('#phanterpwa-widget-form-submit_button-matriculas').off ('click.submit_matriculas_button').on ('click.submit_matriculas_button', (function __lambda__ () {
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
			var form_matricula = $ ('#form-matriculas') [0];
			var form_matricula = new FormData (form_matricula);
			var id_aluno = self.arg0;
			var id_escola = self.arg1;
			var ano_letivo = self.arg2;
			if (self.arg1 == 'aluno-conferido') {
				var id_escola = self.arg2;
				var ano_letivo = self.arg3;
			}
			if (self.nova_matricula) {
				window.PhanterPWA.ApiServer.POST (__kwargtrans__ (dict ({'url_args': ['api', 'matricula', id_aluno, id_escola, ano_letivo], 'form_data': form_matricula, 'onComplete': self.after_submit})));
			}
			else {
				window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'matricula', id_aluno, id_escola, ano_letivo], 'form_data': form_matricula, 'onComplete': self.after_submit})));
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
		self.form.process_api_response (data);
		var retornar = window.PhanterPWA.Request.get_param ('retornar');
		var json = data.responseJSON;
		if (data.status == 200 && retornar !== null) {
			window.PhanterPWA.open_way (retornar);
		}
		else if (data.status == 200 && self.nova_matricula) {
			window.PhanterPWA.open_way ('imprimir/matricula/{0}'.format (json.id_matricula));
		}
		else if (data.status == 200) {
			window.PhanterPWA.open_way ('imprimir/matricula/{0}'.format (json.id_matricula));
		}
		else if (data.status == 400) {
			forms.SignForm ('#form-matriculas');
		}
	});}
});

//# sourceMappingURL=handlers.views.matriculas.map