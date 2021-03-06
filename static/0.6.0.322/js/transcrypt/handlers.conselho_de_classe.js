// Transcrypt'ed from Python, 2022-01-19 13:42:52
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
var __name__ = 'handlers.conselho_de_classe';
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('CONSELHO DE CLASSE', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), tur, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container extend'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-conselho_de_classe', _class: 'p-row card e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container extend'})));
		html.html_to ('#main-container');
		if (str (arg0).isdigit () && str (arg1).isdigit () && str (arg2).isdigit () && str (arg3).isdigit ()) {
			self.ConselhoDeClasse = ConselhoDeClasse (self, arg0, arg1, arg2, arg3);
		}
		var BackButton1 = left_bar.LeftBarButton ('back_conselho_de_classe', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.Request.get_param ('retornar'), 'position': 'top', 'show_if_way_match': '^conselho-de-classe\\/[0-9]{1,}\\/[0-9]{1,}.*$'})));
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
	}));},
	get xml_unidades () {return __get__ (this, function (self) {
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
		var html = DIV (__kwargtrans__ ({_class: 'p-row'}));
		var arg0 = window.PhanterPWA.Request.get_arg (0);
		var arg1 = window.PhanterPWA.Request.get_arg (1);
		var arg2 = window.PhanterPWA.Request.get_arg (2);
		for (var x = 1; x < 4; x++) {
			var link = window.PhanterPWA.XWAY ('conselho-de-classe', arg0, arg1, arg2, x);
			var esc = DIV (DIV (A (DIV ('{0}'.format (x), __kwargtrans__ ({_class: 'botao-ano'})), __kwargtrans__ ({_href: link, _style: 'text-decoration: none;'})), __kwargtrans__ ({_class: 'anos_letivos-container-abreviacao p-col w1p100'})), __kwargtrans__ ({_class: 'p-col  w1p50 w2p33 w3p25 w4p10'}));
			html.append (esc);
		}
		return DIV (DIV ('QUAL UNIDADE FAR?? O CONSELHO?', __kwargtrans__ ({_class: 'card-title'})), html);
	});}
});
export var ConselhoDeClasse =  __class__ ('ConselhoDeClasse', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, escola, ano_letivo, turma, unidade) {
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
						case 'unidade': var unidade = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.id_escola = escola;
		self.ano_letivo = ano_letivo;
		self.id_turma = turma;
		self.unidade = int (unidade);
		self.index_instance = index_instance;
		self._get_dados_conselho ();
		var BackButton1 = left_bar.LeftBarButton ('back_conselho_de_classe', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('turma-simples', self.id_escola, self.ano_letivo), 'position': 'top', 'show_if_way_match': '^conselho-de-classe\\/[0-9]{1,}\\/[0-9]{1,}.*$'})));
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
	});},
	get _get_dados_conselho () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'conselho-de-classe', self.id_escola, self.ano_letivo, self.id_turma, self.unidade, __kwargtrans__ ({onComplete: self.after_get}));
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
			self.conselho_de_classe = json.conselho_de_classe;
			self.disciplinas = json.disciplinas;
			self.turma = json.turma;
			self.quantidade_de_avaliacoes = json.quantidade_de_avaliacoes;
			self.conselho_por_disciplina = json.conselho_por_disciplina;
			self.matriculas = dict ();
			self.processar_conselho ();
		}
	});},
	get processar_conselho () {return __get__ (this, function (self) {
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
		var tur = DIV (self.turma, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'}));
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('CONSELHO DE CLASSE', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), tur, DIV ('UNIDADE ', window.PhanterPWA.Request.get_arg (3), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container extend'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-conselho_de_classe', _class: 'p-row card e-padding_auto continuos'})), __kwargtrans__ ({_class: 'phanterpwa-media-print-container'})), DIV (__kwargtrans__ ({_id: 'modal_cmp_curriculares_container'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container extend'})));
		html.html_to ('#main-container');
		if (self.unidade == 0) {
			var htmls_avals = CONCATENATE ();
			var tabela = TABLE (TR (TH ('ALUNO(A)'), TH ('DISCIPLINA'), TH ('M??DIA'), TH ('RECUPERA????O')), __kwargtrans__ ({_class: 'tabela_conselho_de_classe', _style: 'margin: auto; width: 200mm;'}));
			var tabela2 = TABLE (THEAD (TR (TH (XML ('&#160;'), __kwargtrans__ ({_colspan: 2, _style: 'border-top: hidden; border-left: hidden; border-right: hidden;'})))), TFOOT (TR (TH (XML ('&#160;'), __kwargtrans__ ({_colspan: 2, _style: 'border-bottom: hidden; border-left: hidden; border-right: hidden;'})))), TR (TH ('ALUNO(A)'), TH ('DISCIPLINA(S) DO CONSELHO')), __kwargtrans__ ({_class: 'tabela_conselho_de_classe', _style: 'margin: auto; width: 200mm;'}));
			var has_tabela2 = false;
			for (var x of self.conselho_de_classe) {
				var tr = TR (TH (x.aluno, __kwargtrans__ ({_rowspan: len (x.notas_disciplinas) + 1})));
				self.matriculas [x.id] = x.aluno;
				var linha = TBODY (tr, __kwargtrans__ ({_class: 'dont_cut_inside'}));
				if (len (x.notas_disciplinas) > 0) {
					for (var y of x.notas_disciplinas) {
						var trdis = TR ();
						var ccc = 0;
						for (var n of y) {
							var has_tabela2 = true;
							ccc++;
							if (ccc == 1) {
								trdis.append (CONCATENATE (TD (n [0]), TD (n [2], __kwargtrans__ (n [3]))));
							}
							else {
								trdis.append (TD (n [2], __kwargtrans__ (n [3])));
							}
						}
						linha.append (trdis);
					}
				}
				tabela.append (linha);
				if (len (x.reprovado_em) > 0) {
					var cc2 = 0;
					var body2 = TBODY (__kwargtrans__ ({_class: 'dont_cut_inside'}));
					for (var y of x.reprovado_em) {
						cc2++;
						if (cc2 == 1) {
							body2.append (TR (TH (x.aluno, __kwargtrans__ ({_rowspan: len (x.reprovado_em)})), TD (self.disciplinas [y])));
						}
						else {
							body2.append (TR (TD (self.disciplinas [y])));
						}
					}
					tabela2.append (body2);
				}
			}
			tabela.append (CONCATENATE (THEAD (TR (TH (XML ('&#160;'), __kwargtrans__ ({_colspan: 3 + self.quantidade_de_avaliacoes, _style: 'border-top: hidden; border-left: hidden; border-right: hidden;'})))), TFOOT (TR (TH (XML ('&#160;'), __kwargtrans__ ({_colspan: 3 + self.quantidade_de_avaliacoes, _style: 'border-bottom: hidden; border-left: hidden; border-right: hidden;'}))))));
			var tabela3 = TABLE (THEAD (TR (TH (XML ('&#160;'), __kwargtrans__ ({_colspan: 2, _style: 'border-top: hidden; border-left: hidden; border-right: hidden;'})))), TFOOT (TR (TH (XML ('&#160;'), __kwargtrans__ ({_colspan: 2, _style: 'border-bottom: hidden; border-left: hidden; border-right: hidden;'})))), TR (TH ('DISCIPLINAS'), TH ('ALUNOS(AS) DO CONSELHO')), __kwargtrans__ ({_class: 'tabela_conselho_de_classe', _style: 'margin: auto; width: 200mm;'}));
			var has_tabela3 = false;
			for (var x of dict (self.conselho_por_disciplina).py_keys ()) {
				var cc2 = 0;
				var body2 = TBODY (__kwargtrans__ ({_class: 'dont_cut_inside'}));
				for (var y of self.conselho_por_disciplina [x]) {
					var has_tabela3 = true;
					cc2++;
					if (cc2 == 1) {
						body2.append (TR (TH (self.disciplinas [x], __kwargtrans__ ({_rowspan: len (self.conselho_por_disciplina [x])})), TD (self.matriculas [y])));
					}
					else {
						body2.append (TR (TD (self.matriculas [y])));
					}
				}
				tabela3.append (body2);
			}
			var html_tabela2 = '';
			if (has_tabela2) {
				var html_tabela2 = CONCATENATE (H3 ('LISTA DE ALUNOS E DISCIPLINAS A QUAL V??O PARA O CONSELHO FINAL'), tabela2);
			}
			var html_tabela3 = '';
			if (has_tabela3) {
				var html_tabela3 = CONCATENATE (H3 ('LISTA DE DISCIPLINAS E ALUNOS A QUAL V??O PARA O CONSELHO FINAL'), tabela3);
			}
			var html_conselho = DIV (H3 ('NOTAS FINAIS DO ALUNO'), tabela, html_tabela2, html_tabela3);
			html_conselho.html_to ('#content-conselho_de_classe');
		}
		else {
			var htmls_avals = CONCATENATE ();
			for (var x = 0; x < self.quantidade_de_avaliacoes; x++) {
				htmls_avals.append (TH ('AV{0}'.format (x + 1)));
			}
			var tabela = TABLE (TR (TH ('ALUNO(A)'), TH ('DISCIPLINA'), htmls_avals, TH ('M??DIA')), __kwargtrans__ ({_class: 'tabela_conselho_de_classe', _style: 'margin: auto; width: 200mm;'}));
			var tabela2 = TABLE (THEAD (TR (TH (XML ('&#160;'), __kwargtrans__ ({_colspan: 2, _style: 'border-top: hidden; border-left: hidden; border-right: hidden;'})))), TFOOT (TR (TH (XML ('&#160;'), __kwargtrans__ ({_colspan: 2, _style: 'border-bottom: hidden; border-left: hidden; border-right: hidden;'})))), TR (TH ('ALUNO(A)'), TH ('DISCIPLINA(S) DO CONSELHO')), __kwargtrans__ ({_class: 'tabela_conselho_de_classe', _style: 'margin: auto; width: 200mm;'}));
			var has_tabela2 = false;
			for (var x of self.conselho_de_classe) {
				var tr = TR (TH (x.aluno, __kwargtrans__ ({_rowspan: len (x.notas_disciplinas) + 1})));
				self.matriculas [x.id] = x.aluno;
				var linha = TBODY (tr, __kwargtrans__ ({_class: 'dont_cut_inside'}));
				if (len (x.notas_disciplinas) > 0) {
					for (var y of x.notas_disciplinas) {
						var trdis = TR ();
						var ccc = 0;
						for (var n of y) {
							var has_tabela2 = true;
							ccc++;
							if (ccc == 1) {
								trdis.append (CONCATENATE (TD (n [0]), TD (n [2], __kwargtrans__ (n [3]))));
							}
							else {
								trdis.append (TD (n [2], __kwargtrans__ (n [3])));
							}
						}
						linha.append (trdis);
					}
				}
				tabela.append (linha);
				if (len (x.reprovado_em) > 0) {
					var cc2 = 0;
					var body2 = TBODY (__kwargtrans__ ({_class: 'dont_cut_inside'}));
					for (var y of x.reprovado_em) {
						cc2++;
						if (cc2 == 1) {
							body2.append (TR (TH (x.aluno, __kwargtrans__ ({_rowspan: len (x.reprovado_em)})), TD (self.disciplinas [y])));
						}
						else {
							body2.append (TR (TD (self.disciplinas [y])));
						}
					}
					tabela2.append (body2);
				}
			}
			tabela.append (CONCATENATE (THEAD (TR (TH (XML ('&#160;'), __kwargtrans__ ({_colspan: 3 + self.quantidade_de_avaliacoes, _style: 'border-top: hidden; border-left: hidden; border-right: hidden;'})))), TFOOT (TR (TH (XML ('&#160;'), __kwargtrans__ ({_colspan: 3 + self.quantidade_de_avaliacoes, _style: 'border-bottom: hidden; border-left: hidden; border-right: hidden;'}))))));
			var tabela3 = TABLE (THEAD (TR (TH (XML ('&#160;'), __kwargtrans__ ({_colspan: 2, _style: 'border-top: hidden; border-left: hidden; border-right: hidden;'})))), TFOOT (TR (TH (XML ('&#160;'), __kwargtrans__ ({_colspan: 2, _style: 'border-bottom: hidden; border-left: hidden; border-right: hidden;'})))), TR (TH ('DISCIPLINAS'), TH ('ALUNOS(AS) DO CONSELHO')), __kwargtrans__ ({_class: 'tabela_conselho_de_classe', _style: 'margin: auto; width: 200mm;'}));
			var has_tabela3 = false;
			for (var x of dict (self.conselho_por_disciplina).py_keys ()) {
				var cc2 = 0;
				var body2 = TBODY (__kwargtrans__ ({_class: 'dont_cut_inside'}));
				for (var y of self.conselho_por_disciplina [x]) {
					var has_tabela3 = true;
					cc2++;
					if (cc2 == 1) {
						body2.append (TR (TH (self.disciplinas [x], __kwargtrans__ ({_rowspan: len (self.conselho_por_disciplina [x])})), TD (self.matriculas [y])));
					}
					else {
						body2.append (TR (TD (self.matriculas [y])));
					}
				}
				tabela3.append (body2);
			}
			var html_tabela2 = '';
			if (has_tabela2) {
				var html_tabela2 = CONCATENATE (H3 ('LISTA DE ALUNOS E DISCIPLINAS A QUAL V??O PARA O CONSELHO DA UNIDADE ', self.unidade), tabela2);
			}
			var html_tabela3 = '';
			if (has_tabela3) {
				var html_tabela3 = CONCATENATE (H3 ('LISTA DE DISCIPLINAS E ALUNOS A QUAL V??O PARA O CONSELHO DA UNIDADE ', self.unidade), tabela3);
			}
			var html_conselho = DIV (H3 ('NOTAS DOS ALUNOS DA UNIDADE ', self.unidade), tabela, html_tabela2, html_tabela3);
			html_conselho.html_to ('#content-conselho_de_classe');
		}
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
	});}
});

//# sourceMappingURL=handlers.conselho_de_classe.map