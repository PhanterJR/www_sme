// Transcrypt'ed from Python, 2022-02-17 23:36:31
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
var __name__ = 'handlers.indicadores_de_desempenho';
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
export var BR = helpers.XmlConstructor.tagger ('br', true);
export var TABLE = helpers.XmlConstructor.tagger ('table');
export var THEAD = helpers.XmlConstructor.tagger ('thead');
export var TFOOT = helpers.XmlConstructor.tagger ('tfoot');
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
		if (str (arg0).isdigit () && str (arg1).isdigit ()) {
			self.IndicadoresDeDesempenho = IndicadoresDeDesempenho (self, arg0, arg1);
		}
		var BackButton1 = left_bar.LeftBarButton ('back_conselho_de_classe', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('turmas', arg0, arg1), 'position': 'top', 'show_if_way_match': '^indicadores-de-desempenho\\/[0-9]{1,}\\/[0-9]{1,}.*$'})));
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
	}));}
});
export var IndicadoresDeDesempenho =  __class__ ('IndicadoresDeDesempenho', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, id_escola, ano_letivo) {
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
					}
				}
			}
		}
		else {
		}
		self.index_instance = index_instance;
		self.id_escola = id_escola;
		self.ano_letivo = ano_letivo;
		self.total_multi_inicial_1 = 0;
		self.total_multi_admitidos_1 = 0;
		self.total_multi_transferidos_1 = 0;
		self.total_multi_desistentes_1 = 0;
		self.total_multi_aprovados_1 = 0;
		self.total_multi_reprovados_1 = 0;
		self.total_multi_final_1 = 0;
		self.total_multi_inicial_2 = 0;
		self.total_multi_admitidos_2 = 0;
		self.total_multi_transferidos_2 = 0;
		self.total_multi_desistentes_2 = 0;
		self.total_multi_aprovados_2 = 0;
		self.total_multi_reprovados_2 = 0;
		self.total_multi_final_2 = 0;
		self.total_multi_inicial_3 = 0;
		self.total_multi_admitidos_3 = 0;
		self.total_multi_transferidos_3 = 0;
		self.total_multi_desistentes_3 = 0;
		self.total_multi_aprovados_3 = 0;
		self.total_multi_reprovados_3 = 0;
		self.total_multi_final_3 = 0;
		self.total_multi_inicial_4 = 0;
		self.total_multi_admitidos_4 = 0;
		self.total_multi_transferidos_4 = 0;
		self.total_multi_desistentes_4 = 0;
		self.total_multi_aprovados_4 = 0;
		self.total_multi_reprovados_4 = 0;
		self.total_multi_final_4 = 0;
		self.total_multi_inicial_f = 0;
		self.total_multi_admitidos_f = 0;
		self.total_multi_transferidos_f = 0;
		self.total_multi_desistentes_f = 0;
		self.total_multi_aprovados_f = 0;
		self.total_multi_reprovados_f = 0;
		self.total_multi_final_f = 0;
		self.total_inicial_1 = 0;
		self.total_admitidos_1 = 0;
		self.total_transferidos_1 = 0;
		self.total_desistentes_1 = 0;
		self.total_aprovados_1 = 0;
		self.total_reprovados_1 = 0;
		self.total_final_1 = 0;
		self.total_inicial_2 = 0;
		self.total_admitidos_2 = 0;
		self.total_transferidos_2 = 0;
		self.total_desistentes_2 = 0;
		self.total_aprovados_2 = 0;
		self.total_reprovados_2 = 0;
		self.total_final_2 = 0;
		self.total_inicial_3 = 0;
		self.total_admitidos_3 = 0;
		self.total_transferidos_3 = 0;
		self.total_desistentes_3 = 0;
		self.total_aprovados_3 = 0;
		self.total_reprovados_3 = 0;
		self.total_final_3 = 0;
		self.total_inicial_4 = 0;
		self.total_admitidos_4 = 0;
		self.total_transferidos_4 = 0;
		self.total_desistentes_4 = 0;
		self.total_aprovados_4 = 0;
		self.total_reprovados_4 = 0;
		self.total_final_4 = 0;
		self.total_inicial_f = 0;
		self.total_admitidos_f = 0;
		self.total_transferidos_f = 0;
		self.total_desistentes_f = 0;
		self.total_aprovados_f = 0;
		self.total_reprovados_f = 0;
		self.total_final_f = 0;
		self.serie_ordem = 0;
		self.multisseriado_por_disciplina_ordem = [];
		self.multisseriado_por_disciplina = dict ({'ids': dict ({}), 'ordem': [], 'unid1': dict ({}), 'unid2': dict ({}), 'unid3': dict ({}), 'unid4': dict ({}), 'unidf': dict ({})});
		self._get_turmas ();
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
				return ' 0%';
			}
			else {
				return ' {0}%'.format (((valor / total) * 100).toFixed (2));
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
		var tr_inicial = TBODY (TR (TH ('TURMA'), TH ('MAT. INICIAL'), TH ('ADM'), TH ('TRANS'), TH ('APRO'), TH ('REP'), TH ('ABAN'), TH ('BASE. CALC'), TH ('APRO %'), TH ('REP %'), TH ('ABAN %'), TH ('TOT. FINAL'), __kwargtrans__ ({_class: 'rotulo_indicador'})), __kwargtrans__ ({_class: 'tbody-indicador-container'}));
		self.html_tabela_uni1 = TABLE (THEAD (TR (TD (BR (), __kwargtrans__ ({_class: 'thead_indicador'})))), TFOOT (TR (TD (BR (), __kwargtrans__ ({_class: 'tfoot_indicador'})))), tr_inicial, __kwargtrans__ ({_class: 'tabela_indicador_desempenho_container tabela_indicador_desempenho_container_uni1'}));
		self.html_tabela_uni2 = TABLE (THEAD (TR (TD (BR (), __kwargtrans__ ({_class: 'thead_indicador'})))), TFOOT (TR (TD (BR (), __kwargtrans__ ({_class: 'tfoot_indicador'})))), tr_inicial, __kwargtrans__ ({_class: 'tabela_indicador_desempenho_container tabela_indicador_desempenho_container_uni2'}));
		self.html_tabela_uni3 = TABLE (THEAD (TR (TD (BR (), __kwargtrans__ ({_class: 'thead_indicador'})))), TFOOT (TR (TD (BR (), __kwargtrans__ ({_class: 'tfoot_indicador'})))), tr_inicial, __kwargtrans__ ({_class: 'tabela_indicador_desempenho_container tabela_indicador_desempenho_container_uni3'}));
		self.html_tabela_uni4 = TABLE (THEAD (TR (TD (BR (), __kwargtrans__ ({_class: 'thead_indicador'})))), TFOOT (TR (TD (BR (), __kwargtrans__ ({_class: 'tfoot_indicador'})))), tr_inicial, __kwargtrans__ ({_class: 'tabela_indicador_desempenho_container tabela_indicador_desempenho_container_uni4'}));
		self.html_tabela_unif = TABLE (THEAD (TR (TD (BR (), __kwargtrans__ ({_class: 'thead_indicador'})))), TFOOT (TR (TD (BR (), __kwargtrans__ ({_class: 'tfoot_indicador'})))), tr_inicial, __kwargtrans__ ({_class: 'tabela_indicador_desempenho_container tabela_indicador_desempenho_container_unif'}));
		var tr_inicial_multi = TBODY (TR (TH ('TURMA'), TH ('S??RIE'), TH ('MAT. INICIAL'), TH ('ADM'), TH ('TRANS'), TH ('APRO'), TH ('REP'), TH ('ABAN'), TH ('BASE. CALC'), TH ('APRO %'), TH ('REP %'), TH ('ABAN %'), TH ('TOT. FINAL'), __kwargtrans__ ({_class: 'rotulo_indicador'})), __kwargtrans__ ({_class: 'tbody-indicador-container'}));
		var tr_inicial_multi_por_disciplina = TBODY (TR (TH ('S??RIE'), TH ('MAT. INICIAL'), TH ('ADM'), TH ('TRANS'), TH ('APRO'), TH ('REP'), TH ('ABAN'), TH ('BASE. CALC'), TH ('APRO %'), TH ('REP %'), TH ('ABAN %'), TH ('TOT. FINAL'), __kwargtrans__ ({_class: 'rotulo_indicador'})), __kwargtrans__ ({_class: 'tbody-indicador-container'}));
		self.html_tabela_multi_uni1 = TABLE (THEAD (TR (TD (BR (), __kwargtrans__ ({_class: 'thead_indicador'})))), TFOOT (TR (TD (BR (), __kwargtrans__ ({_class: 'tfoot_indicador'})))), tr_inicial_multi, __kwargtrans__ ({_class: 'tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_uni1'}));
		self.html_tabela_multi_uni2 = TABLE (THEAD (TR (TD (BR (), __kwargtrans__ ({_class: 'thead_indicador'})))), TFOOT (TR (TD (BR (), __kwargtrans__ ({_class: 'tfoot_indicador'})))), tr_inicial_multi, __kwargtrans__ ({_class: 'tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_uni2'}));
		self.html_tabela_multi_uni3 = TABLE (THEAD (TR (TD (BR (), __kwargtrans__ ({_class: 'thead_indicador'})))), TFOOT (TR (TD (BR (), __kwargtrans__ ({_class: 'tfoot_indicador'})))), tr_inicial_multi, __kwargtrans__ ({_class: 'tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_uni3'}));
		self.html_tabela_multi_uni4 = TABLE (THEAD (TR (TD (BR (), __kwargtrans__ ({_class: 'thead_indicador'})))), TFOOT (TR (TD (BR (), __kwargtrans__ ({_class: 'tfoot_indicador'})))), tr_inicial_multi, __kwargtrans__ ({_class: 'tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_uni4'}));
		self.html_tabela_multi_unif = TABLE (THEAD (TR (TD (BR (), __kwargtrans__ ({_class: 'thead_indicador'})))), TFOOT (TR (TD (BR (), __kwargtrans__ ({_class: 'tfoot_indicador'})))), tr_inicial_multi, __kwargtrans__ ({_class: 'tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_unif'}));
		self.html_tabela_multi_por_disciplina_uni1 = TABLE (THEAD (TR (TD (BR (), __kwargtrans__ ({_class: 'thead_indicador'})))), TFOOT (TR (TD (BR (), __kwargtrans__ ({_class: 'tfoot_indicador'})))), tr_inicial_multi_por_disciplina, __kwargtrans__ ({_id: 'tabela_indicador_multi_serie_1', _class: 'tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_uni1'}));
		self.html_tabela_multi_por_disciplina_uni2 = TABLE (THEAD (TR (TD (BR (), __kwargtrans__ ({_class: 'thead_indicador'})))), TFOOT (TR (TD (BR (), __kwargtrans__ ({_class: 'tfoot_indicador'})))), tr_inicial_multi_por_disciplina, __kwargtrans__ ({_id: 'tabela_indicador_multi_serie_2', _class: 'tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_uni2'}));
		self.html_tabela_multi_por_disciplina_uni3 = TABLE (THEAD (TR (TD (BR (), __kwargtrans__ ({_class: 'thead_indicador'})))), TFOOT (TR (TD (BR (), __kwargtrans__ ({_class: 'tfoot_indicador'})))), tr_inicial_multi_por_disciplina, __kwargtrans__ ({_id: 'tabela_indicador_multi_serie_3', _class: 'tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_uni3'}));
		self.html_tabela_multi_por_disciplina_uni4 = TABLE (THEAD (TR (TD (BR (), __kwargtrans__ ({_class: 'thead_indicador'})))), TFOOT (TR (TD (BR (), __kwargtrans__ ({_class: 'tfoot_indicador'})))), tr_inicial_multi_por_disciplina, __kwargtrans__ ({_id: 'tabela_indicador_multi_serie_4', _class: 'tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_uni4'}));
		self.html_tabela_multi_por_disciplina_unif = TABLE (THEAD (TR (TD (BR (), __kwargtrans__ ({_class: 'thead_indicador'})))), TFOOT (TR (TD (BR (), __kwargtrans__ ({_class: 'tfoot_indicador'})))), tr_inicial_multi_por_disciplina, __kwargtrans__ ({_id: 'tabela_indicador_multi_serie_f', _class: 'tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_unif'}));
		self.html_indicador_uni1 = DIV (H3 ('Indicadores de Desempenho - Unidade I'), self.html_tabela_uni1, __kwargtrans__ ({_class: 'indicador_desempenho_container indicador_desempenho_container_uni1'}));
		self.html_indicador_uni2 = DIV (H3 ('Indicadores de Desempenho - Unidade II'), self.html_tabela_uni2, __kwargtrans__ ({_class: 'indicador_desempenho_container indicador_desempenho_container_uni2'}));
		self.html_indicador_uni3 = DIV (H3 ('Indicadores de Desempenho - Unidade III'), self.html_tabela_uni3, __kwargtrans__ ({_class: 'indicador_desempenho_container indicador_desempenho_container_uni3'}));
		self.html_indicador_uni4 = DIV (H3 ('Indicadores de Desempenho - Unidade IV'), self.html_tabela_uni4, __kwargtrans__ ({_class: 'indicador_desempenho_container indicador_desempenho_container_uni4'}));
		self.html_indicador_unif = DIV (H3 ('Indicadores de Desempenho - Final'), self.html_tabela_unif, __kwargtrans__ ({_class: 'indicador_desempenho_container indicador_desempenho_container_unif'}));
		self.html_indicador_multi_uni1 = DIV (H3 ('Indicadores de Desempenho - Multisseriado - Unidade I'), self.html_tabela_multi_uni1, __kwargtrans__ ({_class: 'indicador_desempenho_container indicador_desempenho_container_mult_uni1'}));
		self.html_indicador_multi_uni2 = DIV (H3 ('Indicadores de Desempenho - Multisseriado - Unidade II'), self.html_tabela_multi_uni2, __kwargtrans__ ({_class: 'indicador_desempenho_container indicador_desempenho_container_mult_uni2'}));
		self.html_indicador_multi_uni3 = DIV (H3 ('Indicadores de Desempenho - Multisseriado - Unidade III'), self.html_tabela_multi_uni3, __kwargtrans__ ({_class: 'indicador_desempenho_container indicador_desempenho_container_mult_uni3'}));
		self.html_indicador_multi_uni4 = DIV (H3 ('Indicadores de Desempenho - Multisseriado - Unidade IV'), self.html_tabela_multi_uni4, __kwargtrans__ ({_class: 'indicador_desempenho_container indicador_desempenho_container_mult_uni4'}));
		self.html_indicador_multi_unif = DIV (H3 ('Indicadores de Desempenho - Multisseriado - Final'), self.html_tabela_multi_unif, __kwargtrans__ ({_class: 'indicador_desempenho_container indicador_desempenho_container_mult_unif'}));
		self.html_indicador_multi_por_disciplina_uni1 = DIV (H3 ('Indicadores de Desempenho - Multisseriado por S??rie - Unidade I'), self.html_tabela_multi_por_disciplina_uni1, __kwargtrans__ ({_class: 'indicador_desempenho_container indicador_desempenho_container_mult_uni1'}));
		self.html_indicador_multi_por_disciplina_uni2 = DIV (H3 ('Indicadores de Desempenho - Multisseriado por S??rie - Unidade II'), self.html_tabela_multi_por_disciplina_uni2, __kwargtrans__ ({_class: 'indicador_desempenho_container indicador_desempenho_container_mult_uni2'}));
		self.html_indicador_multi_por_disciplina_uni3 = DIV (H3 ('Indicadores de Desempenho - Multisseriado por S??rie - Unidade III'), self.html_tabela_multi_por_disciplina_uni3, __kwargtrans__ ({_class: 'indicador_desempenho_container indicador_desempenho_container_mult_uni3'}));
		self.html_indicador_multi_por_disciplina_uni4 = DIV (H3 ('Indicadores de Desempenho - Multisseriado por S??rie - Unidade IV'), self.html_tabela_multi_por_disciplina_uni4, __kwargtrans__ ({_class: 'indicador_desempenho_container indicador_desempenho_container_mult_uni4'}));
		self.html_indicador_multi_por_disciplina_unif = DIV (H3 ('Indicadores de Desempenho - Multisseriado por S??rie - Final'), self.html_tabela_multi_por_disciplina_unif, __kwargtrans__ ({_class: 'indicador_desempenho_container indicador_desempenho_container_mult_unif'}));
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('INDICADORES DE DESEMPENHO', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container extend'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (DIV (self.html_indicador_uni1, self.html_indicador_uni2, self.html_indicador_uni3, (self.unidades == 4 ? self.html_indicador_uni4 : ''), self.html_indicador_unif, __kwargtrans__ ({_class: 'indicador_simples'})), DIV (self.html_indicador_multi_uni1, self.html_indicador_multi_uni2, self.html_indicador_multi_uni3, (self.unidades == 4 ? self.html_indicador_multi_uni4 : ''), self.html_indicador_multi_unif, __kwargtrans__ ({_class: 'indicador_multi'})), DIV (self.html_indicador_multi_por_disciplina_uni1, self.html_indicador_multi_por_disciplina_uni2, self.html_indicador_multi_por_disciplina_uni3, (self.unidades == 4 ? self.html_indicador_multi_por_disciplina_uni4 : ''), self.html_indicador_multi_por_disciplina_unif, __kwargtrans__ ({_class: 'indicador_multi_serie'})), __kwargtrans__ ({_id: 'content-indicadores_de_desempenho', _class: 'p-row e-padding_auto continuos'})), __kwargtrans__ ({_class: 'phanterpwa-media-print-container'})), __kwargtrans__ ({_class: 'card'})), DIV (__kwargtrans__ ({_id: 'modal_cmp_curriculares_container'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container extend'})));
		var tem_multisseriado = false;
		var tem_regular = false;
		for (var x of self.turmas) {
			if (x.multisseriado) {
				var tem_multisseriado = true;
				self.html_tabela_multi_uni1.append (TBODY (TR (TH (x.turma), TD (DIV (preloaders.run_points), __kwargtrans__ ({_colspan: 13, _style: 'text-align: center;'}))), __kwargtrans__ ({_id: 'tbody_ind_uni1_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
				self.html_tabela_multi_uni2.append (TBODY (TR (TH (x.turma), TD (DIV (preloaders.run_points), __kwargtrans__ ({_colspan: 13, _style: 'text-align: center;'}))), __kwargtrans__ ({_id: 'tbody_ind_uni2_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
				self.html_tabela_multi_uni3.append (TBODY (TR (TH (x.turma), TD (DIV (preloaders.run_points), __kwargtrans__ ({_colspan: 13, _style: 'text-align: center;'}))), __kwargtrans__ ({_id: 'tbody_ind_uni3_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
				if (self.unidades == 4) {
					self.html_tabela_multi_uni4.append (TBODY (TR (TH (x.turma), TD (DIV (preloaders.run_points), __kwargtrans__ ({_colspan: 13, _style: 'text-align: center;'}))), __kwargtrans__ ({_id: 'tbody_ind_uni4_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
				}
				self.html_tabela_multi_unif.append (TBODY (TR (TH (x.turma), TD (DIV (preloaders.run_points), __kwargtrans__ ({_colspan: 13, _style: 'text-align: center;'}))), __kwargtrans__ ({_id: 'tbody_ind_unif_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
			}
			else {
				var tem_regular = true;
				self.html_tabela_uni1.append (TBODY (TR (TH (x.turma), TD (DIV (preloaders.run_points), __kwargtrans__ ({_colspan: 12, _style: 'text-align: center;'}))), __kwargtrans__ ({_id: 'tbody_ind_uni1_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
				self.html_tabela_uni2.append (TBODY (TR (TH (x.turma), TD (DIV (preloaders.run_points), __kwargtrans__ ({_colspan: 12, _style: 'text-align: center;'}))), __kwargtrans__ ({_id: 'tbody_ind_uni2_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
				self.html_tabela_uni3.append (TBODY (TR (TH (x.turma), TD (DIV (preloaders.run_points), __kwargtrans__ ({_colspan: 12, _style: 'text-align: center;'}))), __kwargtrans__ ({_id: 'tbody_ind_uni3_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
				if (self.unidades == 4) {
					self.html_tabela_uni4.append (TBODY (TR (TH (x.turma), TD (DIV (preloaders.run_points), __kwargtrans__ ({_colspan: 12, _style: 'text-align: center;'}))), __kwargtrans__ ({_id: 'tbody_ind_uni4_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
				}
				self.html_tabela_unif.append (TBODY (TR (TH (x.turma), TD (DIV (preloaders.run_points), __kwargtrans__ ({_colspan: 12, _style: 'text-align: center;'}))), __kwargtrans__ ({_id: 'tbody_ind_unif_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
			}
		}
		self.html_tabela_multi_uni1.append (TBODY (TR (TH ('Total', __kwargtrans__ ({_colspan: 2})), TH (__kwargtrans__ ({_id: 'total_multi_mat_inicial_unid1'})), TH (__kwargtrans__ ({_id: 'total_multi_adm_unid1'})), TH (__kwargtrans__ ({_id: 'total_multi_trans_unid1'})), TH (__kwargtrans__ ({_id: 'total_multi_apro_unid1'})), TH (__kwargtrans__ ({_id: 'total_multi_rep_unid1'})), TH (__kwargtrans__ ({_id: 'total_multi_aban_unid1'})), TH (__kwargtrans__ ({_id: 'total_multi_base_calc_unid1'})), TH (__kwargtrans__ ({_id: 'total_multi_porc_apro_unid1'})), TH (__kwargtrans__ ({_id: 'total_multi_porc_rep_unid1'})), TH (__kwargtrans__ ({_id: 'total_multi_porc_aban_unid1'})), TH (__kwargtrans__ ({_id: 'total_multi_final_unid1'}))), __kwargtrans__ ({_id: 'tbody-total_multi_ind_uni1_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
		self.html_tabela_multi_uni2.append (TBODY (TR (TH ('Total', __kwargtrans__ ({_colspan: 2})), TH (__kwargtrans__ ({_id: 'total_multi_mat_inicial_unid2'})), TH (__kwargtrans__ ({_id: 'total_multi_adm_unid2'})), TH (__kwargtrans__ ({_id: 'total_multi_trans_unid2'})), TH (__kwargtrans__ ({_id: 'total_multi_apro_unid2'})), TH (__kwargtrans__ ({_id: 'total_multi_rep_unid2'})), TH (__kwargtrans__ ({_id: 'total_multi_aban_unid2'})), TH (__kwargtrans__ ({_id: 'total_multi_base_calc_unid2'})), TH (__kwargtrans__ ({_id: 'total_multi_porc_apro_unid2'})), TH (__kwargtrans__ ({_id: 'total_multi_porc_rep_unid2'})), TH (__kwargtrans__ ({_id: 'total_multi_porc_aban_unid2'})), TH (__kwargtrans__ ({_id: 'total_multi_final_unid2'}))), __kwargtrans__ ({_id: 'tbody-total_multi_ind_uni2_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
		self.html_tabela_multi_uni3.append (TBODY (TR (TH ('Total', __kwargtrans__ ({_colspan: 2})), TH (__kwargtrans__ ({_id: 'total_multi_mat_inicial_unid3'})), TH (__kwargtrans__ ({_id: 'total_multi_adm_unid3'})), TH (__kwargtrans__ ({_id: 'total_multi_trans_unid3'})), TH (__kwargtrans__ ({_id: 'total_multi_apro_unid3'})), TH (__kwargtrans__ ({_id: 'total_multi_rep_unid3'})), TH (__kwargtrans__ ({_id: 'total_multi_aban_unid3'})), TH (__kwargtrans__ ({_id: 'total_multi_base_calc_unid3'})), TH (__kwargtrans__ ({_id: 'total_multi_porc_apro_unid3'})), TH (__kwargtrans__ ({_id: 'total_multi_porc_rep_unid3'})), TH (__kwargtrans__ ({_id: 'total_multi_porc_aban_unid3'})), TH (__kwargtrans__ ({_id: 'total_multi_final_unid3'}))), __kwargtrans__ ({_id: 'tbody-total_multi_ind_uni3_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
		if (self.unidades == 4) {
			self.html_tabela_multi_uni4.append (TBODY (TR (TH ('Total', __kwargtrans__ ({_colspan: 2})), TH (__kwargtrans__ ({_id: 'total_multi_mat_inicial_unid4'})), TH (__kwargtrans__ ({_id: 'total_multi_adm_unid4'})), TH (__kwargtrans__ ({_id: 'total_multi_trans_unid4'})), TH (__kwargtrans__ ({_id: 'total_multi_apro_unid4'})), TH (__kwargtrans__ ({_id: 'total_multi_rep_unid4'})), TH (__kwargtrans__ ({_id: 'total_multi_aban_unid4'})), TH (__kwargtrans__ ({_id: 'total_multi_base_calc_unid4'})), TH (__kwargtrans__ ({_id: 'total_multi_porc_apro_unid4'})), TH (__kwargtrans__ ({_id: 'total_multi_porc_rep_unid4'})), TH (__kwargtrans__ ({_id: 'total_multi_porc_aban_unid4'})), TH (__kwargtrans__ ({_id: 'total_multi_final_unid4'}))), __kwargtrans__ ({_id: 'tbody-total_multi_ind_uni4_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
		}
		self.html_tabela_multi_unif.append (TBODY (TR (TH ('Total', __kwargtrans__ ({_colspan: 2})), TH (__kwargtrans__ ({_id: 'total_multi_mat_inicial_unidf'})), TH (__kwargtrans__ ({_id: 'total_multi_adm_unidf'})), TH (__kwargtrans__ ({_id: 'total_multi_trans_unidf'})), TH (__kwargtrans__ ({_id: 'total_multi_apro_unidf'})), TH (__kwargtrans__ ({_id: 'total_multi_rep_unidf'})), TH (__kwargtrans__ ({_id: 'total_multi_aban_unidf'})), TH (__kwargtrans__ ({_id: 'total_multi_base_calc_unidf'})), TH (__kwargtrans__ ({_id: 'total_multi_porc_apro_unidf'})), TH (__kwargtrans__ ({_id: 'total_multi_porc_rep_unidf'})), TH (__kwargtrans__ ({_id: 'total_multi_porc_aban_unidf'})), TH (__kwargtrans__ ({_id: 'total_multi_final_unidf'}))), __kwargtrans__ ({_id: 'tbody-total_multi_ind_unif_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
		self.html_tabela_uni1.append (TBODY (TR (TH ('Total'), TH (__kwargtrans__ ({_id: 'total_mat_inicial_unid1'})), TH (__kwargtrans__ ({_id: 'total_adm_unid1'})), TH (__kwargtrans__ ({_id: 'total_trans_unid1'})), TH (__kwargtrans__ ({_id: 'total_apro_unid1'})), TH (__kwargtrans__ ({_id: 'total_rep_unid1'})), TH (__kwargtrans__ ({_id: 'total_aban_unid1'})), TH (__kwargtrans__ ({_id: 'total_base_calc_unid1'})), TH (__kwargtrans__ ({_id: 'total_porc_apro_unid1'})), TH (__kwargtrans__ ({_id: 'total_porc_rep_unid1'})), TH (__kwargtrans__ ({_id: 'total_porc_aban_unid1'})), TH (__kwargtrans__ ({_id: 'total_final_unid1'}))), __kwargtrans__ ({_id: 'tbody-total_ind_uni1_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
		self.html_tabela_uni2.append (TBODY (TR (TH ('Total'), TH (__kwargtrans__ ({_id: 'total_mat_inicial_unid2'})), TH (__kwargtrans__ ({_id: 'total_adm_unid2'})), TH (__kwargtrans__ ({_id: 'total_trans_unid2'})), TH (__kwargtrans__ ({_id: 'total_apro_unid2'})), TH (__kwargtrans__ ({_id: 'total_rep_unid2'})), TH (__kwargtrans__ ({_id: 'total_aban_unid2'})), TH (__kwargtrans__ ({_id: 'total_base_calc_unid2'})), TH (__kwargtrans__ ({_id: 'total_porc_apro_unid2'})), TH (__kwargtrans__ ({_id: 'total_porc_rep_unid2'})), TH (__kwargtrans__ ({_id: 'total_porc_aban_unid2'})), TH (__kwargtrans__ ({_id: 'total_final_unid2'}))), __kwargtrans__ ({_id: 'tbody-total_ind_uni2_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
		self.html_tabela_uni3.append (TBODY (TR (TH ('Total'), TH (__kwargtrans__ ({_id: 'total_mat_inicial_unid3'})), TH (__kwargtrans__ ({_id: 'total_adm_unid3'})), TH (__kwargtrans__ ({_id: 'total_trans_unid3'})), TH (__kwargtrans__ ({_id: 'total_apro_unid3'})), TH (__kwargtrans__ ({_id: 'total_rep_unid3'})), TH (__kwargtrans__ ({_id: 'total_aban_unid3'})), TH (__kwargtrans__ ({_id: 'total_base_calc_unid3'})), TH (__kwargtrans__ ({_id: 'total_porc_apro_unid3'})), TH (__kwargtrans__ ({_id: 'total_porc_rep_unid3'})), TH (__kwargtrans__ ({_id: 'total_porc_aban_unid3'})), TH (__kwargtrans__ ({_id: 'total_final_unid3'}))), __kwargtrans__ ({_id: 'tbody-total_ind_uni3_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
		if (self.unidades == 4) {
			self.html_tabela_uni4.append (TBODY (TR (TH ('Total'), TH (__kwargtrans__ ({_id: 'total_mat_inicial_unid4'})), TH (__kwargtrans__ ({_id: 'total_adm_unid4'})), TH (__kwargtrans__ ({_id: 'total_trans_unid4'})), TH (__kwargtrans__ ({_id: 'total_apro_unid4'})), TH (__kwargtrans__ ({_id: 'total_rep_unid4'})), TH (__kwargtrans__ ({_id: 'total_aban_unid4'})), TH (__kwargtrans__ ({_id: 'total_base_calc_unid4'})), TH (__kwargtrans__ ({_id: 'total_porc_apro_unid4'})), TH (__kwargtrans__ ({_id: 'total_porc_rep_unid4'})), TH (__kwargtrans__ ({_id: 'total_porc_aban_unid4'})), TH (__kwargtrans__ ({_id: 'total_final_unid4'}))), __kwargtrans__ ({_id: 'tbody-total_ind_uni4_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
		}
		self.html_tabela_unif.append (TBODY (TR (TH ('Total'), TH (__kwargtrans__ ({_id: 'total_mat_inicial_unidf'})), TH (__kwargtrans__ ({_id: 'total_adm_unidf'})), TH (__kwargtrans__ ({_id: 'total_trans_unidf'})), TH (__kwargtrans__ ({_id: 'total_apro_unidf'})), TH (__kwargtrans__ ({_id: 'total_rep_unidf'})), TH (__kwargtrans__ ({_id: 'total_aban_unidf'})), TH (__kwargtrans__ ({_id: 'total_base_calc_unidf'})), TH (__kwargtrans__ ({_id: 'total_porc_apro_unidf'})), TH (__kwargtrans__ ({_id: 'total_porc_rep_unidf'})), TH (__kwargtrans__ ({_id: 'total_porc_aban_unidf'})), TH (__kwargtrans__ ({_id: 'total_final_unidf'}))), __kwargtrans__ ({_id: 'tbody-total_ind_unif_{0}'.format (x.id), _class: 'tbody-indicador-container'})));
		html.html_to ('#main-container');
		if (!(tem_multisseriado)) {
			$ ('.indicador_multi').fadeOut ();
		}
		if (!(tem_regular)) {
			$ ('.indicador_simples').fadeOut ();
		}
		self.posicao = 0;
		self.get_indicador (self.turmas [self.posicao].id);
	});},
	get get_indicador () {return __get__ (this, function (self, id_turma) {
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
			window.PhanterPWA.GET ('api', 'indicador-de-desempenho', self.id_escola, self.ano_letivo, id_turma, __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
				return tuple ([self.after_get_indicador (id_turma, data, ajax_status), (self.turmas [self.posicao] !== undefined ? self.get_indicador (self.turmas [self.posicao].id) : '')]);
			})}));
		}
	});},
	get after_get_indicador () {return __get__ (this, function (self, id_turma, data, ajax_status) {
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
			var json = data.responseJSON.data;
			if (json.multisseriado) {
				var tem_indicador = false;
				var trhtml1 = CONCATENATE (TR (TH (json.turma, __kwargtrans__ ({_rowspan: len (json.indicadores) + 1}))));
				var trhtml2 = CONCATENATE (TR (TH (json.turma, __kwargtrans__ ({_rowspan: len (json.indicadores) + 1}))));
				var trhtml3 = CONCATENATE (TR (TH (json.turma, __kwargtrans__ ({_rowspan: len (json.indicadores) + 1}))));
				if (self.unidades == 4) {
					var trhtml4 = CONCATENATE (TR (TH (json.turma, __kwargtrans__ ({_rowspan: len (json.indicadores) + 1}))));
				}
				var trhtmlf = CONCATENATE (TR (TH (json.turma, __kwargtrans__ ({_rowspan: len (json.indicadores) + 1}))));
				for (var x of json.indicadores) {
					var tem_indicador = true;
					var base1 = x [1] ['II'] ['Total'] + x [1] ['I'] ['Desistente'];
					self.total_multi_inicial_1 += x [1] ['I'] ['Total'];
					self.total_multi_admitidos_1 += x [1] ['I'] ['Admitido'];
					self.total_multi_transferidos_1 += x [1] ['I'] ['Transferido'];
					self.total_multi_desistentes_1 += x [1] ['I'] ['Desistente'];
					self.total_multi_aprovados_1 += x [1] ['I'] ['Aprovado'];
					self.total_multi_reprovados_1 += x [1] ['I'] ['Reprovado'];
					self.total_multi_final_1 += x [1] ['II'] ['Total'];
					var total_base = self.total_multi_final_1 + self.total_multi_desistentes_1;
					$ ('#total_multi_mat_inicial_unid1').text (self.total_multi_inicial_1);
					$ ('#total_multi_adm_unid1').text (self.total_multi_admitidos_1);
					$ ('#total_multi_trans_unid1').text (self.total_multi_transferidos_1);
					$ ('#total_multi_apro_unid1').text (self.total_multi_aprovados_1);
					$ ('#total_multi_rep_unid1').text (self.total_multi_reprovados_1);
					$ ('#total_multi_aban_unid1').text (self.total_multi_desistentes_1);
					$ ('#total_multi_base_calc_unid1').text (total_base);
					$ ('#total_multi_porc_apro_unid1').text (self.porcentagem (self.total_multi_aprovados_1, total_base));
					$ ('#total_multi_porc_rep_unid1').text (self.porcentagem (self.total_multi_reprovados_1, total_base));
					$ ('#total_multi_porc_aban_unid1').text (self.porcentagem (self.total_multi_desistentes_1, total_base));
					$ ('#total_multi_final_unid1').text (self.total_multi_final_1);
					trhtml1.append (TR (TH (x [0]), TD (x [1] ['I'] ['Total']), TD (x [1] ['I'] ['Admitido']), TD (x [1] ['I'] ['Transferido']), TD (x [1] ['I'] ['Aprovado']), TD (x [1] ['I'] ['Reprovado']), TD (x [1] ['I'] ['Desistente']), TD (base1), TD (self.porcentagem (x [1] ['I'] ['Aprovado'], base1)), TD (self.porcentagem (x [1] ['I'] ['Reprovado'], base1)), TD (self.porcentagem (x [1] ['I'] ['Desistente'], base1)), TD (x [1] ['II'] ['Total'])));
					$ ('#ind_uni1_{0}'.format (id_turma)).fadeOut ();
					$ ('.tabela_indicador_desempenho_container_mult_uni1').addClass ('enabled');
					var base2 = x [1] ['III'] ['Total'] + x [1] ['II'] ['Desistente'];
					self.total_multi_inicial_2 += x [1] ['II'] ['Total'];
					self.total_multi_admitidos_2 += x [1] ['II'] ['Admitido'];
					self.total_multi_transferidos_2 += x [1] ['II'] ['Transferido'];
					self.total_multi_desistentes_2 += x [1] ['II'] ['Desistente'];
					self.total_multi_aprovados_2 += x [1] ['II'] ['Aprovado'];
					self.total_multi_reprovados_2 += x [1] ['II'] ['Reprovado'];
					self.total_multi_final_2 += x [1] ['III'] ['Total'];
					var total_base = self.total_multi_final_2 + self.total_multi_desistentes_2;
					$ ('#total_multi_mat_inicial_unid2').text (self.total_multi_inicial_2);
					$ ('#total_multi_adm_unid2').text (self.total_multi_admitidos_2);
					$ ('#total_multi_trans_unid2').text (self.total_multi_transferidos_2);
					$ ('#total_multi_apro_unid2').text (self.total_multi_aprovados_2);
					$ ('#total_multi_rep_unid2').text (self.total_multi_reprovados_2);
					$ ('#total_multi_aban_unid2').text (self.total_multi_desistentes_2);
					$ ('#total_multi_base_calc_unid2').text (total_base);
					$ ('#total_multi_porc_apro_unid2').text (self.porcentagem (self.total_multi_aprovados_2, total_base));
					$ ('#total_multi_porc_rep_unid2').text (self.porcentagem (self.total_multi_reprovados_2, total_base));
					$ ('#total_multi_porc_aban_unid2').text (self.porcentagem (self.total_multi_desistentes_2, total_base));
					$ ('#total_multi_final_unid2').text (self.total_multi_final_2);
					trhtml2.append (TR (TH (x [0]), TD (x [1] ['II'] ['Total']), TD (x [1] ['II'] ['Admitido']), TD (x [1] ['II'] ['Transferido']), TD (x [1] ['II'] ['Aprovado']), TD (x [1] ['II'] ['Reprovado']), TD (x [1] ['II'] ['Desistente']), TD (base2), TD (self.porcentagem (x [1] ['II'] ['Aprovado'], base2)), TD (self.porcentagem (x [1] ['II'] ['Reprovado'], base2)), TD (self.porcentagem (x [1] ['II'] ['Desistente'], base2)), TD (x [1] ['III'] ['Total'])));
					$ ('#ind_uni2_{0}'.format (id_turma)).fadeOut ();
					$ ('.tabela_indicador_desempenho_container_mult_uni2').addClass ('enabled');
					if (self.unidades == 4) {
						var tot = x [1] ['IV'] ['Total'];
					}
					else {
						var tot = x [1] ['III'] ['Aprovado'] + x [1] ['III'] ['Reprovado'];
					}
					var base3 = tot + x [1] ['III'] ['Desistente'];
					self.total_multi_inicial_3 += x [1] ['III'] ['Total'];
					self.total_multi_admitidos_3 += x [1] ['III'] ['Admitido'];
					self.total_multi_transferidos_3 += x [1] ['III'] ['Transferido'];
					self.total_multi_desistentes_3 += x [1] ['III'] ['Desistente'];
					self.total_multi_aprovados_3 += x [1] ['III'] ['Aprovado'];
					self.total_multi_reprovados_3 += x [1] ['III'] ['Reprovado'];
					if (self.unidades == 4) {
						self.total_multi_final_3 += x [1] ['IV'] ['Total'];
					}
					else {
						self.total_multi_final_3 = self.total_multi_aprovados_3 + self.total_multi_reprovados_3;
					}
					var total_base = self.total_multi_final_3 + self.total_multi_desistentes_3;
					$ ('#total_multi_mat_inicial_unid3').text (self.total_multi_inicial_3);
					$ ('#total_multi_adm_unid3').text (self.total_multi_admitidos_3);
					$ ('#total_multi_trans_unid3').text (self.total_multi_transferidos_3);
					$ ('#total_multi_apro_unid3').text (self.total_multi_aprovados_3);
					$ ('#total_multi_rep_unid3').text (self.total_multi_reprovados_3);
					$ ('#total_multi_aban_unid3').text (self.total_multi_desistentes_3);
					$ ('#total_multi_base_calc_unid3').text (total_base);
					$ ('#total_multi_porc_apro_unid3').text (self.porcentagem (self.total_multi_aprovados_3, total_base));
					$ ('#total_multi_porc_rep_unid3').text (self.porcentagem (self.total_multi_reprovados_3, total_base));
					$ ('#total_multi_porc_aban_unid3').text (self.porcentagem (self.total_multi_desistentes_3, total_base));
					$ ('#total_multi_final_unid3').text (self.total_multi_final_3);
					trhtml3.append (TR (TH (x [0]), TD (x [1] ['III'] ['Total']), TD (x [1] ['III'] ['Admitido']), TD (x [1] ['III'] ['Transferido']), TD (x [1] ['III'] ['Aprovado']), TD (x [1] ['III'] ['Reprovado']), TD (x [1] ['III'] ['Desistente']), TD (base3), TD (self.porcentagem (x [1] ['III'] ['Aprovado'], base3)), TD (self.porcentagem (x [1] ['III'] ['Reprovado'], base3)), TD (self.porcentagem (x [1] ['III'] ['Desistente'], base3)), TD (tot)));
					$ ('#ind_uni3_{0}'.format (id_turma)).fadeOut ();
					$ ('.tabela_indicador_desempenho_container_mult_uni3').addClass ('enabled');
					if (self.unidades == 4) {
						var base4 = (x [1] ['IV'] ['Aprovado'] + x [1] ['IV'] ['Reprovado']) + x [1] ['IV'] ['Desistente'];
						self.total_multi_inicial_4 += x [1] ['IV'] ['Total'];
						self.total_multi_admitidos_4 += x [1] ['IV'] ['Admitido'];
						self.total_multi_transferidos_4 += x [1] ['IV'] ['Transferido'];
						self.total_multi_desistentes_4 += x [1] ['IV'] ['Desistente'];
						self.total_multi_aprovados_4 += x [1] ['IV'] ['Aprovado'];
						self.total_multi_reprovados_4 += x [1] ['IV'] ['Reprovado'];
						self.total_multi_final_4 = self.total_multi_aprovados_4 + self.total_multi_reprovados_4;
						var total_base = self.total_multi_final_4 + self.total_multi_desistentes_4;
						$ ('#total_multi_mat_inicial_unid4').text (self.total_multi_inicial_4);
						$ ('#total_multi_adm_unid4').text (self.total_multi_admitidos_4);
						$ ('#total_multi_trans_unid4').text (self.total_multi_transferidos_4);
						$ ('#total_multi_apro_unid4').text (self.total_multi_aprovados_4);
						$ ('#total_multi_rep_unid4').text (self.total_multi_reprovados_4);
						$ ('#total_multi_aban_unid4').text (self.total_multi_desistentes_4);
						$ ('#total_multi_base_calc_unid4').text (total_base);
						$ ('#total_multi_porc_apro_unid4').text (self.porcentagem (self.total_multi_aprovados_4, total_base));
						$ ('#total_multi_porc_rep_unid4').text (self.porcentagem (self.total_multi_reprovados_4, total_base));
						$ ('#total_multi_porc_aban_unid4').text (self.porcentagem (self.total_multi_desistentes_4, total_base));
						$ ('#total_multi_final_unid4').text (self.total_multi_final_4);
						trhtml4.append (TR (TH (x [0]), TD (x [1] ['IV'] ['Total']), TD (x [1] ['IV'] ['Admitido']), TD (x [1] ['IV'] ['Transferido']), TD (x [1] ['IV'] ['Aprovado']), TD (x [1] ['IV'] ['Reprovado']), TD (x [1] ['IV'] ['Desistente']), TD (base4), TD (self.porcentagem (x [1] ['IV'] ['Aprovado'], base4)), TD (self.porcentagem (x [1] ['IV'] ['Reprovado'], base4)), TD (self.porcentagem (x [1] ['IV'] ['Desistente'], base4)), TD (base4 - x [1] ['IV'] ['Desistente'])));
						$ ('#ind_uni4_{0}'.format (id_turma)).fadeOut ();
						$ ('.tabela_indicador_desempenho_container_mult_uni4').addClass ('enabled');
					}
					var basef = x [1] ['F'] ['Total'] + x [1] ['F'] ['Desistente'];
					self.total_multi_inicial_f += x [1] ['I'] ['Total'];
					self.total_multi_admitidos_f += x [1] ['F'] ['Admitido'];
					self.total_multi_transferidos_f += x [1] ['F'] ['Transferido'];
					self.total_multi_desistentes_f += x [1] ['F'] ['Desistente'];
					self.total_multi_aprovados_f += x [1] ['F'] ['Aprovado'];
					self.total_multi_reprovados_f += x [1] ['F'] ['Reprovado'];
					self.total_multi_final_f += x [1] ['F'] ['Total'];
					var total_base = self.total_multi_final_f + self.total_multi_desistentes_f;
					$ ('#total_multi_mat_inicial_unidf').text (self.total_multi_inicial_f);
					$ ('#total_multi_adm_unidf').text (self.total_multi_admitidos_f);
					$ ('#total_multi_trans_unidf').text (self.total_multi_transferidos_f);
					$ ('#total_multi_apro_unidf').text (self.total_multi_aprovados_f);
					$ ('#total_multi_rep_unidf').text (self.total_multi_reprovados_f);
					$ ('#total_multi_aban_unidf').text (self.total_multi_desistentes_f);
					$ ('#total_multi_base_calc_unidf').text (total_base);
					$ ('#total_multi_porc_apro_unidf').text (self.porcentagem (self.total_multi_aprovados_f, total_base));
					$ ('#total_multi_porc_rep_unidf').text (self.porcentagem (self.total_multi_reprovados_f, total_base));
					$ ('#total_multi_porc_aban_unidf').text (self.porcentagem (self.total_multi_desistentes_f, total_base));
					$ ('#total_multi_final_unidf').text (self.total_multi_final_f);
					trhtmlf.append (TR (TH (x [0]), TD (x [1] ['I'] ['Total']), TD (x [1] ['F'] ['Admitido']), TD (x [1] ['F'] ['Transferido']), TD (x [1] ['F'] ['Aprovado']), TD (x [1] ['F'] ['Reprovado']), TD (x [1] ['F'] ['Desistente']), TD (basef), TD (self.porcentagem (x [1] ['F'] ['Aprovado'], basef)), TD (self.porcentagem (x [1] ['F'] ['Reprovado'], basef)), TD (self.porcentagem (x [1] ['F'] ['Desistente'], basef)), TD (x [1] ['F'] ['Total'])));
					$ ('#ind_unif_{0}'.format (id_turma)).fadeOut ();
					$ ('.tabela_indicador_desempenho_container_mult_unif').addClass ('enabled');
					if (!__in__ (x [0], self.multisseriado_por_disciplina ['ordem'])) {
						self.serie_ordem++;
						self.multisseriado_por_disciplina ['ordem'].append (x [0]);
						self.multisseriado_por_disciplina ['ids'] [x [0]] = self.serie_ordem;
						self.multisseriado_por_disciplina ['unid1'] [x [0]] = dict ({'S??RIE': x [0], 'MAT. INICIAL': x [1] ['I'] ['Total'], 'ADM': x [1] ['I'] ['Admitido'], 'TRANS': x [1] ['I'] ['Transferido'], 'APRO': x [1] ['I'] ['Aprovado'], 'REP': x [1] ['I'] ['Reprovado'], 'ABAN': x [1] ['I'] ['Desistente'], 'BASE. CALC': base1, 'APRO %': self.porcentagem (x [1] ['I'] ['Aprovado'], base1), 'REP %': self.porcentagem (x [1] ['I'] ['Reprovado'], base1), 'ABAN %': self.porcentagem (x [1] ['I'] ['Desistente'], base1), 'TOT. FINAL': x [1] ['II'] ['Total']});
						self.multisseriado_por_disciplina ['unid2'] [x [0]] = dict ({'S??RIE': x [0], 'MAT. INICIAL': x [1] ['II'] ['Total'], 'ADM': x [1] ['II'] ['Admitido'], 'TRANS': x [1] ['II'] ['Transferido'], 'APRO': x [1] ['II'] ['Aprovado'], 'REP': x [1] ['II'] ['Reprovado'], 'ABAN': x [1] ['II'] ['Desistente'], 'BASE. CALC': base2, 'APRO %': self.porcentagem (x [1] ['II'] ['Aprovado'], base2), 'REP %': self.porcentagem (x [1] ['II'] ['Reprovado'], base2), 'ABAN %': self.porcentagem (x [1] ['II'] ['Desistente'], base2), 'TOT. FINAL': x [1] ['III'] ['Total']});
						self.multisseriado_por_disciplina ['unid3'] [x [0]] = dict ({'S??RIE': x [0], 'MAT. INICIAL': x [1] ['III'] ['Total'], 'ADM': x [1] ['III'] ['Admitido'], 'TRANS': x [1] ['III'] ['Transferido'], 'APRO': x [1] ['III'] ['Aprovado'], 'REP': x [1] ['III'] ['Reprovado'], 'ABAN': x [1] ['III'] ['Desistente'], 'BASE. CALC': base3, 'APRO %': self.porcentagem (x [1] ['III'] ['Aprovado'], base3), 'REP %': self.porcentagem (x [1] ['III'] ['Reprovado'], base3), 'ABAN %': self.porcentagem (x [1] ['III'] ['Desistente'], base3), 'TOT. FINAL': (self.unidades == 4 ? x [1] ['IV'] ['Total'] : x [1] ['F'] ['Total'])});
						if (self.unidades == 4) {
							self.multisseriado_por_disciplina ['unid4'] [x [0]] = dict ({'S??RIE': x [0], 'MAT. INICIAL': x [1] ['IV'] ['Total'], 'ADM': x [1] ['IV'] ['Admitido'], 'TRANS': x [1] ['IV'] ['Transferido'], 'APRO': x [1] ['IV'] ['Aprovado'], 'REP': x [1] ['IV'] ['Reprovado'], 'ABAN': x [1] ['IV'] ['Desistente'], 'BASE. CALC': base4, 'APRO %': self.porcentagem (x [1] ['IV'] ['Aprovado'], base4), 'REP %': self.porcentagem (x [1] ['IV'] ['Reprovado'], base4), 'ABAN %': self.porcentagem (x [1] ['IV'] ['Desistente'], base4), 'TOT. FINAL': x [1] ['F'] ['Total']});
						}
						self.multisseriado_por_disciplina ['unidf'] [x [0]] = dict ({'S??RIE': x [0], 'MAT. INICIAL': x [1] ['I'] ['Total'], 'ADM': x [1] ['F'] ['Admitido'], 'TRANS': x [1] ['F'] ['Transferido'], 'APRO': x [1] ['F'] ['Aprovado'], 'REP': x [1] ['F'] ['Reprovado'], 'ABAN': x [1] ['F'] ['Desistente'], 'BASE. CALC': basef, 'APRO %': self.porcentagem (x [1] ['F'] ['Aprovado'], basef), 'REP %': self.porcentagem (x [1] ['F'] ['Reprovado'], basef), 'ABAN %': self.porcentagem (x [1] ['F'] ['Desistente'], basef), 'TOT. FINAL': x [1] ['F'] ['Total']});
					}
					else {
						self.multisseriado_por_disciplina ['unid1'] [x [0]] ['MAT. INICIAL'] += x [1] ['I'] ['Total'];
						self.multisseriado_por_disciplina ['unid1'] [x [0]] ['ADM'] += x [1] ['I'] ['Admitido'];
						self.multisseriado_por_disciplina ['unid1'] [x [0]] ['TRANS'] += x [1] ['I'] ['Transferido'];
						self.multisseriado_por_disciplina ['unid1'] [x [0]] ['APRO'] += x [1] ['I'] ['Aprovado'];
						self.multisseriado_por_disciplina ['unid1'] [x [0]] ['REP'] += x [1] ['I'] ['Reprovado'];
						self.multisseriado_por_disciplina ['unid1'] [x [0]] ['ABAN'] += x [1] ['I'] ['Desistente'];
						self.multisseriado_por_disciplina ['unid1'] [x [0]] ['BASE. CALC'] += base1;
						self.multisseriado_por_disciplina ['unid1'] [x [0]] ['APRO %'] = self.porcentagem (self.multisseriado_por_disciplina ['unid1'] [x [0]] ['APRO'], self.multisseriado_por_disciplina ['unid1'] [x [0]] ['BASE. CALC']);
						self.multisseriado_por_disciplina ['unid1'] [x [0]] ['REP %'] = self.porcentagem (self.multisseriado_por_disciplina ['unid1'] [x [0]] ['REP'], self.multisseriado_por_disciplina ['unid1'] [x [0]] ['BASE. CALC']);
						self.multisseriado_por_disciplina ['unid1'] [x [0]] ['ABAN %'] = self.porcentagem (self.multisseriado_por_disciplina ['unid1'] [x [0]] ['ABAN'], self.multisseriado_por_disciplina ['unid1'] [x [0]] ['BASE. CALC']);
						self.multisseriado_por_disciplina ['unid1'] [x [0]] ['TOT. FINAL'] += x [1] ['II'] ['Total'];
						self.multisseriado_por_disciplina ['unid2'] [x [0]] ['MAT. INICIAL'] += x [1] ['II'] ['Total'];
						self.multisseriado_por_disciplina ['unid2'] [x [0]] ['ADM'] += x [1] ['II'] ['Admitido'];
						self.multisseriado_por_disciplina ['unid2'] [x [0]] ['TRANS'] += x [1] ['II'] ['Transferido'];
						self.multisseriado_por_disciplina ['unid2'] [x [0]] ['APRO'] += x [1] ['II'] ['Aprovado'];
						self.multisseriado_por_disciplina ['unid2'] [x [0]] ['REP'] += x [1] ['II'] ['Reprovado'];
						self.multisseriado_por_disciplina ['unid2'] [x [0]] ['ABAN'] += x [1] ['II'] ['Desistente'];
						self.multisseriado_por_disciplina ['unid2'] [x [0]] ['BASE. CALC'] += base2;
						self.multisseriado_por_disciplina ['unid2'] [x [0]] ['APRO %'] = self.porcentagem (self.multisseriado_por_disciplina ['unid2'] [x [0]] ['APRO'], self.multisseriado_por_disciplina ['unid2'] [x [0]] ['BASE. CALC']);
						self.multisseriado_por_disciplina ['unid2'] [x [0]] ['REP %'] = self.porcentagem (self.multisseriado_por_disciplina ['unid2'] [x [0]] ['REP'], self.multisseriado_por_disciplina ['unid2'] [x [0]] ['BASE. CALC']);
						self.multisseriado_por_disciplina ['unid2'] [x [0]] ['ABAN %'] = self.porcentagem (self.multisseriado_por_disciplina ['unid2'] [x [0]] ['ABAN'], self.multisseriado_por_disciplina ['unid2'] [x [0]] ['BASE. CALC']);
						self.multisseriado_por_disciplina ['unid2'] [x [0]] ['TOT. FINAL'] += x [1] ['III'] ['Total'];
						self.multisseriado_por_disciplina ['unid3'] [x [0]] ['MAT. INICIAL'] += x [1] ['III'] ['Total'];
						self.multisseriado_por_disciplina ['unid3'] [x [0]] ['ADM'] += x [1] ['III'] ['Admitido'];
						self.multisseriado_por_disciplina ['unid3'] [x [0]] ['TRANS'] += x [1] ['III'] ['Transferido'];
						self.multisseriado_por_disciplina ['unid3'] [x [0]] ['APRO'] += x [1] ['III'] ['Aprovado'];
						self.multisseriado_por_disciplina ['unid3'] [x [0]] ['REP'] += x [1] ['III'] ['Reprovado'];
						self.multisseriado_por_disciplina ['unid3'] [x [0]] ['ABAN'] += x [1] ['III'] ['Desistente'];
						self.multisseriado_por_disciplina ['unid3'] [x [0]] ['BASE. CALC'] += base3;
						self.multisseriado_por_disciplina ['unid3'] [x [0]] ['APRO %'] = self.porcentagem (self.multisseriado_por_disciplina ['unid3'] [x [0]] ['APRO'], self.multisseriado_por_disciplina ['unid3'] [x [0]] ['BASE. CALC']);
						self.multisseriado_por_disciplina ['unid3'] [x [0]] ['REP %'] = self.porcentagem (self.multisseriado_por_disciplina ['unid3'] [x [0]] ['REP'], self.multisseriado_por_disciplina ['unid3'] [x [0]] ['BASE. CALC']);
						self.multisseriado_por_disciplina ['unid3'] [x [0]] ['ABAN %'] = self.porcentagem (self.multisseriado_por_disciplina ['unid3'] [x [0]] ['ABAN'], self.multisseriado_por_disciplina ['unid3'] [x [0]] ['BASE. CALC']);
						if (self.unidades == 4) {
							self.multisseriado_por_disciplina ['unid3'] [x [0]] ['TOT. FINAL'] += x [1] ['IV'] ['Total'];
							self.multisseriado_por_disciplina ['unid4'] [x [0]] ['MAT. INICIAL'] += x [1] ['IV'] ['Total'];
							self.multisseriado_por_disciplina ['unid4'] [x [0]] ['ADM'] += x [1] ['IV'] ['Admitido'];
							self.multisseriado_por_disciplina ['unid4'] [x [0]] ['TRANS'] += x [1] ['IV'] ['Transferido'];
							self.multisseriado_por_disciplina ['unid4'] [x [0]] ['APRO'] += x [1] ['IV'] ['Aprovado'];
							self.multisseriado_por_disciplina ['unid4'] [x [0]] ['REP'] += x [1] ['IV'] ['Reprovado'];
							self.multisseriado_por_disciplina ['unid4'] [x [0]] ['ABAN'] += x [1] ['IV'] ['Desistente'];
							self.multisseriado_por_disciplina ['unid4'] [x [0]] ['BASE. CALC'] += base4;
							self.multisseriado_por_disciplina ['unid4'] [x [0]] ['APRO %'] = self.porcentagem (self.multisseriado_por_disciplina ['unid4'] [x [0]] ['APRO'], self.multisseriado_por_disciplina ['unid4'] [x [0]] ['BASE. CALC']);
							self.multisseriado_por_disciplina ['unid4'] [x [0]] ['REP %'] += self.porcentagem (self.multisseriado_por_disciplina ['unid4'] [x [0]] ['REP'], self.multisseriado_por_disciplina ['unid4'] [x [0]] ['BASE. CALC']);
							self.multisseriado_por_disciplina ['unid4'] [x [0]] ['ABAN %'] += self.porcentagem (self.multisseriado_por_disciplina ['unid4'] [x [0]] ['ABAN'], self.multisseriado_por_disciplina ['unid4'] [x [0]] ['BASE. CALC']);
							self.multisseriado_por_disciplina ['unid4'] [x [0]] ['TOT. FINAL'] += x [1] ['F'] ['Total'];
						}
						else {
							self.multisseriado_por_disciplina ['unid3'] [x [0]] ['TOT. FINAL'] += x [1] ['F'] ['Total'];
						}
						self.multisseriado_por_disciplina ['unidf'] [x [0]] ['MAT. INICIAL'] += x [1] ['I'] ['Total'];
						self.multisseriado_por_disciplina ['unidf'] [x [0]] ['ADM'] += x [1] ['F'] ['Admitido'];
						self.multisseriado_por_disciplina ['unidf'] [x [0]] ['TRANS'] += x [1] ['F'] ['Transferido'];
						self.multisseriado_por_disciplina ['unidf'] [x [0]] ['APRO'] += x [1] ['F'] ['Aprovado'];
						self.multisseriado_por_disciplina ['unidf'] [x [0]] ['REP'] += x [1] ['F'] ['Reprovado'];
						self.multisseriado_por_disciplina ['unidf'] [x [0]] ['ABAN'] += x [1] ['F'] ['Desistente'];
						self.multisseriado_por_disciplina ['unidf'] [x [0]] ['BASE. CALC'] += basef;
						self.multisseriado_por_disciplina ['unidf'] [x [0]] ['APRO %'] = self.porcentagem (self.multisseriado_por_disciplina ['unidf'] [x [0]] ['APRO'], self.multisseriado_por_disciplina ['unidf'] [x [0]] ['BASE. CALC']);
						self.multisseriado_por_disciplina ['unidf'] [x [0]] ['REP %'] = self.porcentagem (self.multisseriado_por_disciplina ['unidf'] [x [0]] ['REP'], self.multisseriado_por_disciplina ['unidf'] [x [0]] ['BASE. CALC']);
						self.multisseriado_por_disciplina ['unidf'] [x [0]] ['ABAN %'] = self.porcentagem (self.multisseriado_por_disciplina ['unidf'] [x [0]] ['ABAN'], self.multisseriado_por_disciplina ['unidf'] [x [0]] ['BASE. CALC']);
						self.multisseriado_por_disciplina ['unidf'] [x [0]] ['TOT. FINAL'] += x [1] ['F'] ['Total'];
					}
					self.html_indicador_multi_por_disciplina (x [0]);
				}
				if (tem_indicador) {
					trhtml1.html_to ('#tbody_ind_uni1_{0}'.format (id_turma));
					trhtml2.html_to ('#tbody_ind_uni2_{0}'.format (id_turma));
					trhtml3.html_to ('#tbody_ind_uni3_{0}'.format (id_turma));
					if (self.unidades == 4) {
						trhtml4.html_to ('#tbody_ind_uni4_{0}'.format (id_turma));
					}
					trhtmlf.html_to ('#tbody_ind_unif_{0}'.format (id_turma));
				}
				else {
					var trhtml1 = TR (TH (json.turma), TD ('DADOS INSUFICIENTES', __kwargtrans__ ({_colspan: 13})));
					trhtml1.html_to ('#tbody_ind_uni1_{0}'.format (id_turma));
					$ ('#ind_uni1_{0}'.format (id_turma)).fadeOut ();
					$ ('.tabela_indicador_desempenho_container_uni1').addClass ('enabled');
					var trhtml2 = TR (TH (json.turma), TD ('DADOS INSUFICIENTES', __kwargtrans__ ({_colspan: 13})));
					trhtml2.html_to ('#tbody_ind_uni2_{0}'.format (id_turma));
					$ ('#ind_uni2_{0}'.format (id_turma)).fadeOut ();
					$ ('.tabela_indicador_desempenho_container_uni2').addClass ('enabled');
					var trhtml3 = TR (TH (json.turma), TD ('DADOS INSUFICIENTES', __kwargtrans__ ({_colspan: 13})));
					trhtml3.html_to ('#tbody_ind_uni3_{0}'.format (id_turma));
					$ ('#ind_uni3_{0}'.format (id_turma)).fadeOut ();
					$ ('.tabela_indicador_desempenho_container_uni3').addClass ('enabled');
					if (self.unidades == 4) {
						var trhtml4 = TR (TH (json.turma), TD ('DADOS INSUFICIENTES', __kwargtrans__ ({_colspan: 13})));
						trhtml4.html_to ('#tbody_ind_uni4_{0}'.format (id_turma));
						$ ('#ind_uni4_{0}'.format (id_turma)).fadeOut ();
						$ ('.tabela_indicador_desempenho_container_uni4').addClass ('enabled');
					}
					var trhtmlf = TR (TH (json.turma), TD ('DADOS INSUFICIENTES', __kwargtrans__ ({_colspan: 13})));
					$ ('#ind_unif_{0}'.format (id_turma)).fadeOut ();
					trhtmlf.html_to ('#tbody_ind_unif_{0}'.format (id_turma));
					$ ('.tabela_indicador_desempenho_container_unif').addClass ('enabled');
				}
			}
			else {
				var tem_indicador = false;
				for (var x of json.indicadores) {
					var tem_indicador = true;
					var base1 = x [1] ['II'] ['Total'] + x [1] ['I'] ['Desistente'];
					self.total_inicial_1 += x [1] ['I'] ['Total'];
					self.total_admitidos_1 += x [1] ['I'] ['Admitido'];
					self.total_transferidos_1 += x [1] ['I'] ['Transferido'];
					self.total_desistentes_1 += x [1] ['I'] ['Desistente'];
					self.total_aprovados_1 += x [1] ['I'] ['Aprovado'];
					self.total_reprovados_1 += x [1] ['I'] ['Reprovado'];
					self.total_final_1 += x [1] ['II'] ['Total'];
					var total_base = self.total_final_1 + self.total_desistentes_1;
					$ ('#total_mat_inicial_unid1').text (self.total_inicial_1);
					$ ('#total_adm_unid1').text (self.total_admitidos_1);
					$ ('#total_trans_unid1').text (self.total_transferidos_1);
					$ ('#total_apro_unid1').text (self.total_aprovados_1);
					$ ('#total_rep_unid1').text (self.total_reprovados_1);
					$ ('#total_aban_unid1').text (self.total_desistentes_1);
					$ ('#total_base_calc_unid1').text (total_base);
					$ ('#total_porc_apro_unid1').text (self.porcentagem (self.total_aprovados_1, total_base));
					$ ('#total_porc_rep_unid1').text (self.porcentagem (self.total_reprovados_1, total_base));
					$ ('#total_porc_aban_unid1').text (self.porcentagem (self.total_desistentes_1, total_base));
					$ ('#total_final_unid1').text (self.total_final_1);
					var trhtml1 = TR (TH (json.turma), TD (x [1] ['I'] ['Total']), TD (x [1] ['I'] ['Admitido']), TD (x [1] ['I'] ['Transferido']), TD (x [1] ['I'] ['Aprovado']), TD (x [1] ['I'] ['Reprovado']), TD (x [1] ['I'] ['Desistente']), TD (base1), TD (self.porcentagem (x [1] ['I'] ['Aprovado'], base1)), TD (self.porcentagem (x [1] ['I'] ['Reprovado'], base1)), TD (self.porcentagem (x [1] ['I'] ['Desistente'], base1)), TD (x [1] ['II'] ['Total']));
					trhtml1.html_to ('#tbody_ind_uni1_{0}'.format (id_turma));
					$ ('#ind_uni1_{0}'.format (id_turma)).fadeOut ();
					$ ('.tabela_indicador_desempenho_container_uni1').addClass ('enabled');
					var base2 = x [1] ['III'] ['Total'] + x [1] ['II'] ['Desistente'];
					self.total_inicial_2 += x [1] ['II'] ['Total'];
					self.total_admitidos_2 += x [1] ['II'] ['Admitido'];
					self.total_transferidos_2 += x [1] ['II'] ['Transferido'];
					self.total_desistentes_2 += x [1] ['II'] ['Desistente'];
					self.total_aprovados_2 += x [1] ['II'] ['Aprovado'];
					self.total_reprovados_2 += x [1] ['II'] ['Reprovado'];
					self.total_final_2 += x [1] ['III'] ['Total'];
					var total_base = self.total_final_2 + self.total_desistentes_2;
					$ ('#total_mat_inicial_unid2').text (self.total_inicial_2);
					$ ('#total_adm_unid2').text (self.total_admitidos_2);
					$ ('#total_trans_unid2').text (self.total_transferidos_2);
					$ ('#total_apro_unid2').text (self.total_aprovados_2);
					$ ('#total_rep_unid2').text (self.total_reprovados_2);
					$ ('#total_aban_unid2').text (self.total_desistentes_2);
					$ ('#total_base_calc_unid2').text (total_base);
					$ ('#total_porc_apro_unid2').text (self.porcentagem (self.total_aprovados_2, total_base));
					$ ('#total_porc_rep_unid2').text (self.porcentagem (self.total_reprovados_2, total_base));
					$ ('#total_porc_aban_unid2').text (self.porcentagem (self.total_desistentes_2, total_base));
					$ ('#total_final_unid2').text (self.total_final_2);
					var trhtml2 = TR (TH (json.turma), TD (x [1] ['II'] ['Total']), TD (x [1] ['II'] ['Admitido']), TD (x [1] ['II'] ['Transferido']), TD (x [1] ['II'] ['Aprovado']), TD (x [1] ['II'] ['Reprovado']), TD (x [1] ['II'] ['Desistente']), TD (base2), TD (self.porcentagem (x [1] ['II'] ['Aprovado'], base2)), TD (self.porcentagem (x [1] ['II'] ['Reprovado'], base2)), TD (self.porcentagem (x [1] ['II'] ['Desistente'], base2)), TD (x [1] ['III'] ['Total']));
					trhtml2.html_to ('#tbody_ind_uni2_{0}'.format (id_turma));
					$ ('#ind_uni2_{0}'.format (id_turma)).fadeOut ();
					$ ('.tabela_indicador_desempenho_container_uni2').addClass ('enabled');
					if (self.unidades == 4) {
						var tot = x [1] ['IV'] ['Total'];
					}
					else {
						var tot = x [1] ['III'] ['Aprovado'] + x [1] ['III'] ['Reprovado'];
					}
					var base3 = tot + x [1] ['III'] ['Desistente'];
					self.total_inicial_3 += x [1] ['III'] ['Total'];
					self.total_admitidos_3 += x [1] ['III'] ['Admitido'];
					self.total_transferidos_3 += x [1] ['III'] ['Transferido'];
					self.total_desistentes_3 += x [1] ['III'] ['Desistente'];
					self.total_aprovados_3 += x [1] ['III'] ['Aprovado'];
					self.total_reprovados_3 += x [1] ['III'] ['Reprovado'];
					if (self.unidades == 4) {
						self.total_final_3 += x [1] ['IV'] ['Total'];
					}
					else {
						self.total_final_3 = self.total_aprovados_3 + self.total_reprovados_3;
					}
					var total_base = self.total_final_3 + self.total_desistentes_3;
					$ ('#total_mat_inicial_unid3').text (self.total_inicial_3);
					$ ('#total_adm_unid3').text (self.total_admitidos_3);
					$ ('#total_trans_unid3').text (self.total_transferidos_3);
					$ ('#total_apro_unid3').text (self.total_aprovados_3);
					$ ('#total_rep_unid3').text (self.total_reprovados_3);
					$ ('#total_aban_unid3').text (self.total_desistentes_3);
					$ ('#total_base_calc_unid3').text (total_base);
					$ ('#total_porc_apro_unid3').text (self.porcentagem (self.total_aprovados_3, total_base));
					$ ('#total_porc_rep_unid3').text (self.porcentagem (self.total_reprovados_3, total_base));
					$ ('#total_porc_aban_unid3').text (self.porcentagem (self.total_desistentes_3, total_base));
					$ ('#total_final_unid3').text (self.total_final_3);
					var trhtml3 = TR (TH (json.turma), TD (x [1] ['III'] ['Total']), TD (x [1] ['III'] ['Admitido']), TD (x [1] ['III'] ['Transferido']), TD (x [1] ['III'] ['Aprovado']), TD (x [1] ['III'] ['Reprovado']), TD (x [1] ['III'] ['Desistente']), TD (base3), TD (self.porcentagem (x [1] ['III'] ['Aprovado'], base3)), TD (self.porcentagem (x [1] ['III'] ['Reprovado'], base3)), TD (self.porcentagem (x [1] ['III'] ['Desistente'], base3)), TD (tot));
					trhtml3.html_to ('#tbody_ind_uni3_{0}'.format (id_turma));
					$ ('#ind_uni3_{0}'.format (id_turma)).fadeOut ();
					$ ('.tabela_indicador_desempenho_container_uni3').addClass ('enabled');
					if (self.unidades == 4) {
						var base4 = (x [1] ['IV'] ['Aprovado'] + x [1] ['IV'] ['Reprovado']) + x [1] ['IV'] ['Desistente'];
						self.total_inicial_4 += x [1] ['IV'] ['Total'];
						self.total_admitidos_4 += x [1] ['IV'] ['Admitido'];
						self.total_transferidos_4 += x [1] ['IV'] ['Transferido'];
						self.total_desistentes_4 += x [1] ['IV'] ['Desistente'];
						self.total_aprovados_4 += x [1] ['IV'] ['Aprovado'];
						self.total_reprovados_4 += x [1] ['IV'] ['Reprovado'];
						self.total_final_4 = (self.total_aprovados_4 + self.total_reprovados_4) - self.total_desistentes_4;
						var total_base = (self.total_aprovados_4 + self.total_reprovados_4) + self.total_desistentes_4;
						$ ('#total_mat_inicial_unid4').text (self.total_inicial_4);
						$ ('#total_adm_unid4').text (self.total_admitidos_4);
						$ ('#total_trans_unid4').text (self.total_transferidos_4);
						$ ('#total_apro_unid4').text (self.total_aprovados_4);
						$ ('#total_rep_unid4').text (self.total_reprovados_4);
						$ ('#total_aban_unid4').text (self.total_desistentes_4);
						$ ('#total_base_calc_unid4').text (total_base);
						$ ('#total_porc_apro_unid4').text (self.porcentagem (self.total_aprovados_4, total_base));
						$ ('#total_porc_rep_unid4').text (self.porcentagem (self.total_reprovados_4, total_base));
						$ ('#total_porc_aban_unid4').text (self.porcentagem (self.total_desistentes_4, total_base));
						$ ('#total_final_unid4').text (self.total_final_4);
						var trhtml4 = TR (TH (json.turma), TD (x [1] ['IV'] ['Total']), TD (x [1] ['IV'] ['Admitido']), TD (x [1] ['IV'] ['Transferido']), TD (x [1] ['IV'] ['Aprovado']), TD (x [1] ['IV'] ['Reprovado']), TD (x [1] ['IV'] ['Desistente']), TD (base4), TD (self.porcentagem (x [1] ['IV'] ['Aprovado'], base4)), TD (self.porcentagem (x [1] ['IV'] ['Reprovado'], base4)), TD (self.porcentagem (x [1] ['IV'] ['Desistente'], base4)), TD (x [1] ['IV'] ['Aprovado'] + x [1] ['IV'] ['Reprovado']));
						trhtml4.html_to ('#tbody_ind_uni4_{0}'.format (id_turma));
						$ ('#ind_uni4_{0}'.format (id_turma)).fadeOut ();
						$ ('.tabela_indicador_desempenho_container_uni4').addClass ('enabled');
					}
					var basef = x [1] ['F'] ['Total'] + x [1] ['F'] ['Desistente'];
					self.total_inicial_f += x [1] ['I'] ['Total'];
					self.total_admitidos_f += x [1] ['F'] ['Admitido'];
					self.total_transferidos_f += x [1] ['F'] ['Transferido'];
					self.total_desistentes_f += x [1] ['F'] ['Desistente'];
					self.total_aprovados_f += x [1] ['F'] ['Aprovado'];
					self.total_reprovados_f += x [1] ['F'] ['Reprovado'];
					self.total_final_f += x [1] ['F'] ['Total'];
					var total_base = self.total_final_f + self.total_desistentes_f;
					$ ('#total_mat_inicial_unidf').text (self.total_inicial_f);
					$ ('#total_adm_unidf').text (self.total_admitidos_f);
					$ ('#total_trans_unidf').text (self.total_transferidos_f);
					$ ('#total_apro_unidf').text (self.total_aprovados_f);
					$ ('#total_rep_unidf').text (self.total_reprovados_f);
					$ ('#total_aban_unidf').text (self.total_desistentes_f);
					$ ('#total_base_calc_unidf').text (total_base);
					$ ('#total_porc_apro_unidf').text (self.porcentagem (self.total_aprovados_f, total_base));
					$ ('#total_porc_rep_unidf').text (self.porcentagem (self.total_reprovados_f, total_base));
					$ ('#total_porc_aban_unidf').text (self.porcentagem (self.total_desistentes_f, total_base));
					$ ('#total_final_unidf').text (self.total_final_f);
					var trhtmlf = TR (TH (json.turma), TD (x [1] ['I'] ['Total']), TD (x [1] ['F'] ['Admitido']), TD (x [1] ['F'] ['Transferido']), TD (x [1] ['F'] ['Aprovado']), TD (x [1] ['F'] ['Reprovado']), TD (x [1] ['F'] ['Desistente']), TD (basef), TD (self.porcentagem (x [1] ['F'] ['Aprovado'], basef)), TD (self.porcentagem (x [1] ['F'] ['Reprovado'], basef)), TD (self.porcentagem (x [1] ['F'] ['Desistente'], basef)), TD (x [1] ['F'] ['Total']));
					$ ('#ind_unif_{0}'.format (id_turma)).fadeOut ();
					trhtmlf.html_to ('#tbody_ind_unif_{0}'.format (id_turma));
					$ ('.tabela_indicador_desempenho_container_unif').addClass ('enabled');
				}
				if (tem_indicador === false) {
					var trhtml1 = TR (TH (json.turma), TD ('DADOS INSUFICIENTES', __kwargtrans__ ({_colspan: 12})));
					trhtml1.html_to ('#tbody_ind_uni1_{0}'.format (id_turma));
					$ ('#ind_uni1_{0}'.format (id_turma)).fadeOut ();
					$ ('.tabela_indicador_desempenho_container_uni1').addClass ('enabled');
					var trhtml2 = TR (TH (json.turma), TD ('DADOS INSUFICIENTES', __kwargtrans__ ({_colspan: 12})));
					trhtml2.html_to ('#tbody_ind_uni2_{0}'.format (id_turma));
					$ ('#ind_uni2_{0}'.format (id_turma)).fadeOut ();
					$ ('.tabela_indicador_desempenho_container_uni2').addClass ('enabled');
					var trhtml3 = TR (TH (json.turma), TD ('DADOS INSUFICIENTES', __kwargtrans__ ({_colspan: 12})));
					trhtml3.html_to ('#tbody_ind_uni3_{0}'.format (id_turma));
					$ ('#ind_uni3_{0}'.format (id_turma)).fadeOut ();
					$ ('.tabela_indicador_desempenho_container_uni3').addClass ('enabled');
					if (self.unidades == 4) {
						var trhtml4 = TR (TH (json.turma), TD ('DADOS INSUFICIENTES', __kwargtrans__ ({_colspan: 12})));
						trhtml4.html_to ('#tbody_ind_uni4_{0}'.format (id_turma));
						$ ('#ind_uni4_{0}'.format (id_turma)).fadeOut ();
						$ ('.tabela_indicador_desempenho_container_uni4').addClass ('enabled');
					}
					var trhtmlf = TR (TH (json.turma), TD ('DADOS INSUFICIENTES', __kwargtrans__ ({_colspan: 12})));
					$ ('#ind_unif_{0}'.format (id_turma)).fadeOut ();
					trhtmlf.html_to ('#tbody_ind_unif_{0}'.format (id_turma));
					$ ('.tabela_indicador_desempenho_container_unif').addClass ('enabled');
				}
			}
		}
		else {
			$ ('#ind_uni1_{0}'.format (id_turma)).html ('Falhou');
			$ ('#ind_uni2_{0}'.format (id_turma)).html ('Falhou');
			$ ('#ind_uni3_{0}'.format (id_turma)).html ('Falhou');
			$ ('#ind_uni4_{0}'.format (id_turma)).html ('Falhou');
			$ ('#ind_unif_{0}'.format (id_turma)).html ('Falhou');
		}
	});},
	get html_indicador_multi_por_disciplina () {return __get__ (this, function (self, serie) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'serie': var serie = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var dados = self.multisseriado_por_disciplina;
		var unidades = (function () {
			var __accu0__ = [];
			for (var x = 0; x < self.unidades; x++) {
				__accu0__.append (x + 1);
			}
			return __accu0__;
		}) ();
		unidades.append ('f');
		for (var und of unidades) {
			if ($ ('#tbody-indicador_multi_serie_{0}_und_{1}'.format (self.multisseriado_por_disciplina ['ids'] [serie], und)).length == 0) {
				TBODY (TR (TD (STRONG (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['S??RIE'])), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['MAT. INICIAL']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['ADM']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['TRANS']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['APRO']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['REP']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['ABAN']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['BASE. CALC']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['APRO %']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['REP %']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['ABAN %']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['TOT. FINAL'])), __kwargtrans__ ({_id: 'tbody-indicador_multi_serie_{0}_und_{1}'.format (self.multisseriado_por_disciplina ['ids'] [serie], und), _class: 'tbody-indicador-container'})).append_to ('#tabela_indicador_multi_serie_{0}'.format (und));
			}
			else {
				TR (TD (STRONG (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['S??RIE'])), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['MAT. INICIAL']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['ADM']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['TRANS']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['APRO']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['REP']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['ABAN']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['BASE. CALC']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['APRO %']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['REP %']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['ABAN %']), TD (self.multisseriado_por_disciplina ['unid{0}'.format (und)] [serie] ['TOT. FINAL'])).html_to ('#tbody-indicador_multi_serie_{0}_und_{1}'.format (self.multisseriado_por_disciplina ['ids'] [serie], und));
			}
			$ ('#tbody-indicador_multi_total_und_{0}'.format (und)).remove ();
			var total_multi_base = self ['total_multi_final_{0}'.format (und)] + self ['total_multi_desistentes_{0}'.format (und)];
			TBODY (TR (TD (STRONG ('Total')), TD (STRONG (self ['total_multi_inicial_{0}'.format (und)])), TD (STRONG (self ['total_multi_admitidos_{0}'.format (und)])), TD (STRONG (self ['total_multi_transferidos_{0}'.format (und)])), TD (STRONG (self ['total_multi_aprovados_{0}'.format (und)])), TD (STRONG (self ['total_multi_reprovados_{0}'.format (und)])), TD (STRONG (self ['total_multi_desistentes_{0}'.format (und)])), TD (STRONG (total_multi_base)), TD (STRONG (self.porcentagem (self ['total_multi_aprovados_{0}'.format (und)], total_multi_base))), TD (STRONG (self.porcentagem (self ['total_multi_reprovados_{0}'.format (und)], total_multi_base))), TD (STRONG (self.porcentagem (self ['total_multi_desistentes_{0}'.format (und)], total_multi_base))), TD (STRONG (self ['total_multi_final_{0}'.format (und)]))), __kwargtrans__ ({_id: 'tbody-indicador_multi_total_und_{0}'.format (und), _class: 'tbody-indicador-container'})).append_to ('#tabela_indicador_multi_serie_{0}'.format (und));
		}
	});}
});

//# sourceMappingURL=handlers.indicadores_de_desempenho.map