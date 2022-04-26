// Transcrypt'ed from Python, 2022-04-26 16:30:48
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as anos_letivos from './handlers.anos_letivos.js';
import * as escolas from './handlers.escolas.js';
import * as decorators from './phanterpwa.frontend.decorators.js';
import * as preloaders from './phanterpwa.frontend.preloaders.js';
import * as forms from './phanterpwa.frontend.forms.js';
import * as left_bar from './phanterpwa.frontend.components.left_bar.js';
import * as widgets from './phanterpwa.frontend.components.widgets.js';
import * as validations from './phanterpwa.frontend.validations.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
import * as gatehandler from './phanterpwa.frontend.gatehandler.js';
var __name__ = 'handlers.ficha_avaliativa';
export var CONCATENATE = helpers.CONCATENATE;
export var OPTION = helpers.XmlConstructor.tagger ('option');
export var SELECT = helpers.XmlConstructor.tagger ('select');
export var DIV = helpers.XmlConstructor.tagger ('div');
export var BUTTON = helpers.XmlConstructor.tagger ('button');
export var I = helpers.XmlConstructor.tagger ('i');
export var A = helpers.XmlConstructor.tagger ('a');
export var SPAN = helpers.XmlConstructor.tagger ('span');
export var FORM = helpers.XmlConstructor.tagger ('form');
export var UL = helpers.XmlConstructor.tagger ('ul');
export var LI = helpers.XmlConstructor.tagger ('li');
export var STRONG = helpers.XmlConstructor.tagger ('strong');
export var IMG = helpers.XmlConstructor.tagger ('img', true);
export var H2 = helpers.XmlConstructor.tagger ('h2');
export var H3 = helpers.XmlConstructor.tagger ('h3');
export var H4 = helpers.XmlConstructor.tagger ('h4');
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
export var HR = helpers.XmlConstructor.tagger ('hr', true);
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
		var tit = 'FICHA AVALIATIVA';
		if (arg4 == 'parecer') {
			var tit = 'PARECERES POR ALUNO';
		}
		var html = CONCATENATE (DIV (DIV (DIV (DIV (tit, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-diario_de_notas', _class: 'p-row card e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container', _style: 'width: 95%; max-width: 95%;'})));
		html.html_to ('#main-container');
		if (arg0 == 'professor') {
			if (arg1 === null || arg1 === undefined) {
				var html = escolas.EscolherEscola (__kwargtrans__ ({id_target: '#content-diario_de_notas', callback_link: (function __lambda__ (id_escola) {
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
					return '#_phanterpwa:/ficha-avaliativa/professor/{0}'.format (id_escola);
				})}));
			}
			else if (str (arg1).isdigit () && (arg2 === null || arg2 === undefined)) {
				var html = anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({id_target: '#content-diario_de_notas', callback_link: (function __lambda__ (ano) {
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
					return '#_phanterpwa:/ficha-avaliativa/professor/{0}/{1}'.format (arg1, ano);
				})}));
			}
			else if (str (arg1).isdigit () && str (arg2).isdigit ()) {
				self.FichaAvaliativa = FichaAvaliativa (self, arg1, arg2, arg3, arg4, __kwargtrans__ ({eh_professor: true}));
			}
			var BackButton1 = left_bar.LeftBarButton ('back_ficha_avaliativa', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ([['tag', 'a'], ['_href', window.PhanterPWA.XWAY ('professores', 'turmas', arg1, arg2)], ['position', 'top'], ['show_if_way_match', '^ficha-avaliativa\\/professor\\/[0-9]{1,}\\/[0-9]{1,}\\/?']])));
			window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
		}
		else {
			if (arg0 === null || arg0 === undefined) {
				var html = escolas.EscolherEscola (__kwargtrans__ ({id_target: '#content-diario_de_notas', callback_link: (function __lambda__ (id_escola) {
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
					return '#_phanterpwa:/diario_de_notas/{0}'.format (id_escola);
				})}));
			}
			else if (str (arg0).isdigit () && (arg1 === null || arg1 === undefined)) {
				var html = anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({id_target: '#content-diario_de_notas', callback_link: (function __lambda__ (ano) {
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
					return '#_phanterpwa:/diario_de_notas/{0}/{1}'.format (arg0, ano);
				})}));
			}
			else if (str (arg0).isdigit () && str (arg1).isdigit ()) {
				self.FichaAvaliativa = FichaAvaliativa (self, arg0, arg1, arg2, arg3);
			}
			var BackButton1 = left_bar.LeftBarButton ('back_diario_de_notas', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ([['tag', 'a'], ['_href', '#_phanterpwa:/area-do-servidor'], ['position', 'top'], ['show_if', (function __lambda__ () {
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
				return (window.PhanterPWA.get_current_way () == 'diario_de_notas/{0}/{1}'.format (arg0, arg1) ? true : false);
			})]])));
			window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
		}
	}));}
});
export var FichaAvaliativa =  __class__ ('FichaAvaliativa', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, escola, ano_letivo, turma, disciplina, eh_professor) {
		if (typeof eh_professor == 'undefined' || (eh_professor != null && eh_professor.hasOwnProperty ("__kwargtrans__"))) {;
			var eh_professor = false;
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
						case 'disciplina': var disciplina = __allkwargs0__ [__attrib0__]; break;
						case 'eh_professor': var eh_professor = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.id_escola = escola;
		self.ano_letivo = ano_letivo;
		self.id_turma = turma;
		self.id_disciplina = disciplina;
		self.index_instance = index_instance;
		self.eh_professor = eh_professor;
		self._get_diario_de_notas ();
	});},
	get processar_diario () {return __get__ (this, function (self, diario_de_notas, professor, disciplina, turma) {
		if (typeof professor == 'undefined' || (professor != null && professor.hasOwnProperty ("__kwargtrans__"))) {;
			var professor = '';
		};
		if (typeof disciplina == 'undefined' || (disciplina != null && disciplina.hasOwnProperty ("__kwargtrans__"))) {;
			var disciplina = '';
		};
		if (typeof turma == 'undefined' || (turma != null && turma.hasOwnProperty ("__kwargtrans__"))) {;
			var turma = '';
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'diario_de_notas': var diario_de_notas = __allkwargs0__ [__attrib0__]; break;
						case 'professor': var professor = __allkwargs0__ [__attrib0__]; break;
						case 'disciplina': var disciplina = __allkwargs0__ [__attrib0__]; break;
						case 'turma': var turma = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var tit = 'Ficha Avaliativa ';
		var sub_tit = CONCATENATE (DIV (professor, __kwargtrans__ ({_class: 'p-col w1p100 w4p50'})), DIV (disciplina, __kwargtrans__ ({_class: 'p-col w1p100 w4p50'})));
		if (self.id_disciplina == 'parecer') {
			var tit = 'Pareceres ';
			var sub_tit = CONCATENATE (DIV (professor, __kwargtrans__ ({_class: 'p-col w1p100'})));
		}
		var html = DIV (DIV (H2 (tit, STRONG (turma)), DIV (sub_tit, __kwargtrans__ ({_class: 'p-row'})), HR (), __kwargtrans__ ({_class: 'media-print-visible'})), __kwargtrans__ ({_class: 'diario_de_notas_container ficha_avaliativa_imprimir phanterpwa-simple-media-print'}));
		var tabela = TABLE (__kwargtrans__ ({_class: 'tabela_diario_de_notas'}));
		var has_textarea = false;
		self.limites_verticais = [];
		self.limites_horizontais = [];
		self.max_h = 0;
		self.max_v = 0;
		var limit_v = 0;
		var limit_h = 0;
		for (var x of diario_de_notas) {
			var linha = TR ();
			for (var y of x) {
				if (y === null) {
					var celula = '';
				}
				else if (y [1] ['tipo'] == 'cabecalho') {
					var celula = TH (y [0], __kwargtrans__ (y [1]));
				}
				else if (y [1] ['tipo'] == 'input') {
					if (__in__ ('_coor', y [1])) {
						var seps = y [1] ['_coor'].py_split ('x');
						var v = int (seps [0]);
						var h = int (seps [1]);
						if (limit_v < v) {
							var limit_v = v;
						}
						if (limit_h < h) {
							var limit_h = h;
						}
						if (len (self.limites_verticais) == 0) {
							self.limites_verticais.append (v);
						}
						if (len (self.limites_horizontais) == 0) {
							self.limites_horizontais.append (h);
						}
					}
					var celula = TD (DIV (INPUT (__kwargtrans__ ({_value: y [0], _coordenadas: '{0}x{1}'.format (v, h)})), __kwargtrans__ ({_class: 'ficha_avaliativa_content_input_textarea'})), DIV (I (__kwargtrans__ ({_class: 'fas fa-cloud-upload-alt'})), __kwargtrans__ ({_class: 'botao_enviar_nota'})), __kwargtrans__ (y [1]));
				}
				else if (y [1] ['tipo'] == 'texto') {
					var has_textarea = true;
					var celula = TD (DIV (TEXTAREA (y [0]), __kwargtrans__ ({_class: 'ficha_avaliativa_content_input_textarea'})), DIV (I (__kwargtrans__ ({_class: 'fas fa-cloud-upload-alt'})), __kwargtrans__ ({_class: 'botao_enviar_parecer'})), __kwargtrans__ (y [1]));
				}
				else if (y [1] ['tipo'] == 'botao') {
					var celula = TD (XML (y [0]), __kwargtrans__ (y [1]));
				}
				else {
					var celula = TD (y [0], __kwargtrans__ (y [1]));
				}
				linha.append (celula);
			}
			tabela.append (linha);
		}
		self.max_h = limit_h;
		self.max_v = limit_v;
		self.limites_verticais.append (limit_v);
		self.limites_horizontais.append (limit_h);
		if (has_textarea) {
			var class_ac = 'diario-ficha_avaliativa-container-textarea';
		}
		else {
			var class_ac = 'diario-ficha_avaliativa-container';
		}
		html.append (DIV (DIV (tabela, __kwargtrans__ ({_class: class_ac})), __kwargtrans__ ({_class: 'diario-ficha_avaliativa-wrapper media-print-visible'})));
		html.append (widgets.FloatMenu ('menu_impressao', I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-file-excel'})), __kwargtrans__ ({_class: 'botao_criar_excel', _title: 'Salvar dados da ficha avaliativa em excel', _href: '{0}/api/ficha-avaliativa/excel/{1}/{2}/{3}/{4}/'.format (window.PhanterPWA.ApiServer.remote_address, self.id_escola, self.ano_letivo, self.id_turma, self.id_disciplina)})), widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-print'})), __kwargtrans__ ({_class: 'botao_imprimir_diario_de_notas', _onclick: 'print();'}))));
		html.html_to ('#content-diario_de_notas');
		self.diario_binds ();
	});},
	get imprimir () {return __get__ (this, function (self) {
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
		print();
	});},
	get _criar_auxiliar_print () {return __get__ (this, function (self, el) {
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
		element.find ('textarea').off ('change.update_textarea').on ('change.update_textarea', (function __lambda__ () {
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
			return self._criar_auxiliar_print (element);
		}));
		var id_element = element.attr ('id');
		var val_textarea = element.find ('textarea').val ();
		if (element.find ('#{0}-print-aux'.format (id_element)).length == 0) {
			element.append (DIV (val_textarea, __kwargtrans__ ({_id: '{0}-print-aux'.format (id_element), _class: 'auxiliar_imprimir_ficha'})).jquery ());
		}
		else {
			$ ('#{0}-print-aux'.format (id_element)).text (val_textarea);
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
			if (self.id_disciplina == 'parecer') {
				var diario_de_notas = json.ficha_avaliativa;
				var turma = diario_de_notas.turma.turma;
				var professor = DIV (STRONG ('Professor'), SPAN ('Não definido'), __kwargtrans__ ({_class: 'e-tagger-wrapper'}));
				var disciplina = '';
				if (diario_de_notas.professor !== null && diario_de_notas.professor !== undefined) {
					var professor = DIV (STRONG ('Professor'), SPAN (diario_de_notas.professor), __kwargtrans__ ({_class: 'e-tagger-wrapper'}));
				}
				self.processar_diario (diario_de_notas.ficha_avaliativa_parecer, professor, disciplina, turma);
			}
			else {
				var diario_de_notas = json.ficha_avaliativa;
				self.id_disciplina = json.id_disciplina;
				var turma = diario_de_notas.turma.turma;
				self.lista_de_disciplinas = json.lista_de_disciplinas;
				self.disciplina_atual = diario_de_notas.disciplina;
				var professor = DIV (STRONG ('Professor'), SPAN ('Não definido'), __kwargtrans__ ({_class: 'e-tagger-wrapper'}));
				var disciplina = '';
				if (diario_de_notas.professor !== null && diario_de_notas.professor !== undefined) {
					var professor = DIV (STRONG ('Professor'), SPAN (diario_de_notas.professor), __kwargtrans__ ({_class: 'e-tagger-wrapper'}));
				}
				if (diario_de_notas.disciplina !== null && diario_de_notas.disciplina !== undefined) {
					var disciplina = DIV (STRONG ('Disciplina'), SPAN (diario_de_notas.disciplina), (len (self.lista_de_disciplinas) > 1 ? DIV (self.menu_box_disciplinas (), __kwargtrans__ ({_class: 'botao_mudar_disciplina media-print-inside-invisible'})) : ''), __kwargtrans__ ({_class: 'e-tagger-wrapper disciplina_atual'}));
				}
				self.processar_diario (diario_de_notas.ficha_avaliativa, professor, disciplina, turma);
			}
		}
	});},
	get _get_diario_de_notas () {return __get__ (this, function (self) {
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
		if (self.eh_professor) {
			window.PhanterPWA.ApiServer.GET ('api', 'ficha-avaliativa', 'professor', self.id_escola, self.ano_letivo, self.id_turma, self.id_disciplina, __kwargtrans__ ({onComplete: self.after_get}));
		}
		else if (self.id_disciplina !== null && self.id_disciplina !== undefined) {
			window.PhanterPWA.ApiServer.GET ('api', 'ficha-avaliativa', self.id_escola, self.ano_letivo, self.id_turma, self.id_disciplina, __kwargtrans__ ({onComplete: self.after_get}));
		}
		else {
			window.PhanterPWA.ApiServer.GET ('api', 'ficha-avaliativa', self.id_escola, self.ano_letivo, self.id_turma, __kwargtrans__ ({onComplete: self.after_get}));
		}
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
		$ ('.diario_notas_input_nota').find ('input').off ('change.nota_diario').on ('change.nota_diario', (function __lambda__ () {
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
			return self._enviar_nota ($ (this).parent ());
		}));
		$ ('.diario_notas_text_nota').find ('textarea').off ('change.texto_diario').on ('change.texto_diario', (function __lambda__ () {
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
			return self._enviar_parecer ($ (this).parent ());
		}));
		$ ('.botao_enviar_nota').off ('click.enviar_nota').on ('click.enviar_nota', (function __lambda__ () {
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
			return self._enviar_nota ($ (this));
		}));
		$ ('.diario_notas_input_nota').find ('input').off ('keyup.keynota_diario').on ('keyup.keynota_diario', (function __lambda__ (event) {
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
			return self.onKeyPress (event, this);
		}));
		$ ('.botao_enviar_parecer').off ('click.enviar_parecer').on ('click.enviar_parecer', (function __lambda__ () {
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
			return self._enviar_parecer ($ (this));
		}));
		$ ('.diario_notas_text_nota').each ((function __lambda__ () {
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
			return self._criar_auxiliar_print (this);
		}));
	});},
	get _enviar_nota () {return __get__ (this, function (self, el) {
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
		var elemento = $ (el).parent ();
		var nota = elemento.find ('input').val ();
		var nota = self.nota (nota);
		elemento.find ('input').val (nota);
		elemento.find ('.botao_enviar_nota').fadeIn ();
		var campo = elemento.data ('info');
		var id_matricula = elemento.data ('matricula');
		var linha = elemento.data ('linha');
		var disciplina = elemento.data ('disciplina');
		var formdata = new FormData ();
		formdata.append (campo, nota);
		formdata.append ('matricula', id_matricula);
		formdata.append ('disciplina', disciplina);
		if (self.eh_professor) {
			window.PhanterPWA.PUT ('api', 'ficha-avaliativa', 'professor', self.id_escola, self.ano_letivo, self.id_turma, disciplina, linha, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
				return self.depois_de_enviar_nota (data, ajax_status, elemento);
			})}));
		}
		else {
			window.PhanterPWA.PUT ('api', 'ficha-avaliativa', self.id_escola, self.ano_letivo, self.id_turma, disciplina, linha, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
				return self.depois_de_enviar_nota (data, ajax_status, elemento);
			})}));
		}
	});},
	get _enviar_parecer () {return __get__ (this, function (self, el) {
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
		var elemento = $ (el).parent ();
		var nota = elemento.find ('textarea').val ();
		var linha = elemento.data ('linha');
		elemento.find ('textarea').val (nota);
		elemento.find ('.botao_enviar_parecer').fadeIn ();
		var campo = elemento.data ('info');
		var id_matricula = elemento.data ('matricula');
		var formdata = new FormData ();
		formdata.append (campo, nota);
		formdata.append ('matricula', id_matricula);
		if (self.eh_professor) {
			window.PhanterPWA.PUT ('api', 'ficha-avaliativa', 'professor', self.id_escola, self.ano_letivo, self.id_turma, 'parecer', linha, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
				return self.depois_de_enviar_parecer (data, ajax_status, elemento);
			})}));
		}
		else {
			window.PhanterPWA.PUT ('api', 'ficha-avaliativa', self.id_escola, self.ano_letivo, self.id_turma, 'parecer', linha, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
				return self.depois_de_enviar_parecer (data, ajax_status, elemento);
			})}));
		}
	});},
	get depois_de_enviar_parecer () {return __get__ (this, function (self, data, ajax_status, elemento) {
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
			var json = data.responseJSON;
			elemento.find ('.botao_enviar_parecer').fadeOut ();
			self.diario_binds ();
		}
	});},
	get depois_de_enviar_nota () {return __get__ (this, function (self, data, ajax_status, elemento) {
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
			var json = data.responseJSON;
			elemento.find ('.botao_enviar_nota').fadeOut ();
			var updates = json.updates;
			if (updates !== null && updates !== undefined) {
				for (var x of dict (updates).py_keys ()) {
					var celula = '';
					if (updates [x] [1] ['tipo'] == 'input') {
						var celula = TD (DIV (INPUT (__kwargtrans__ ({_value: updates [x] [0], _coordenadas: updates [x] [1] ['_coor']})), __kwargtrans__ ({_class: 'ficha_avaliativa_content_input_textarea'})), DIV (I (__kwargtrans__ ({_class: 'fas fa-cloud-upload-alt'})), __kwargtrans__ ({_class: 'botao_enviar_nota'})), __kwargtrans__ (updates [x] [1]));
					}
					else {
						var celula = TD (updates [x] [0], __kwargtrans__ (updates [x] [1]));
					}
					$ ('#{0}'.format (x)).replaceWith (celula.jquery ());
				}
				self.diario_binds ();
			}
		}
	});},
	get nota () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var value = str (value).strip ();
		if (value == '-') {
			return value;
		}
		else if (value == '') {
			return value;
		}
		else {
			var value = str (value).py_replace (',', '.');
			var numeros = (function () {
				var __accu0__ = [];
				for (var x = 0; x < 10; x++) {
					__accu0__.append (str (x));
				}
				return __accu0__;
			}) ();
			if (value [0] == '-') {
				window.PhanterPWA.flash ('A não pode ser menor que 0');
				return '0.0';
			}
			else {
				var nvalue = '';
				var tem_numero = false;
				var tem_ponto = false;
				for (var v of value) {
					if (__in__ (v, numeros)) {
						var tem_numero = true;
						var nvalue = ''.join ([nvalue, v]);
					}
					else if (v == '.' && !(tem_ponto)) {
						var tem_ponto = true;
						var nvalue = ''.join ([nvalue, v]);
					}
				}
				if (tem_numero) {
					if (nvalue [0] == '.') {
						var nvalue = ''.join (['0', nvalue]);
					}
					if (__in__ ('.', nvalue)) {
						var svalue = nvalue.py_split ('.');
						if (len (svalue) > 1) {
							if (svalue [1] [0] == '') {
								var nvalue = '.'.join ([svalue [0], '0']);
							}
							else {
								var nvalue = '.'.join ([svalue [0], svalue [1] [0]]);
							}
						}
						else {
							var nvalue = ''.join ([nvalue, '0']);
						}
					}
					else {
						var nvalue = '.'.join ([nvalue, '0']);
					}
				}
				else {
					window.PhanterPWA.flash ('O valor adicionado é inválido');
					return '';
				}
				try {
					var fvalue = float ('{0}'.format (nvalue));
				}
				catch (__except0__) {
					window.PhanterPWA.flash ('O valor adicionado é inválido');
					return '';
				}
				if (fvalue > 10) {
					window.PhanterPWA.flash ('A não pode ser maior que 10');
					return '10.0';
				}
				else if (fvalue < 0) {
					window.PhanterPWA.flash ('A não pode ser menor que 0');
					return '0.0';
				}
				else {
					return nvalue;
				}
			}
		}
		window.PhanterPWA.flash ('O valor adicionado é inválido');
		return '';
	});},
	get onKeyPress () {return __get__ (this, function (self, event, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		event.preventDefault ();
		var code = event.keyCode || event.which;
		var element = $ (el);
		var coor = element.parent ().parent ().attr ('coor');
		var __left0__ = coor.py_split ('x');
		var v = __left0__ [0];
		var h = __left0__ [1];
		var v = int (v);
		var h = int (h);
		var max_interations = 200;
		if (code == 37) {
			while (true) {
				max_interations -= 1;
				if (max_interations < 0) {
					var max_interations = 200;
					console.error ('Parada inesperada!');
					break;
				}
				h -= 1;
				if (h <= 0) {
					var h = self.max_h;
				}
				var nl = $ ("td[coor='{0}x{1}']".format (v, h)).find ('input');
				if (nl.length > 0) {
					$ ("td[coor='{0}x{1}']".format (v, h)).find ('input').focus ().select ();
					break;
				}
			}
		}
		else if (code == 39) {
			while (true) {
				max_interations -= 1;
				if (max_interations < 0) {
					var max_interations = 200;
					console.error ('Parada inesperada!');
					break;
				}
				h += 1;
				if (h > self.max_h) {
					var h = 0;
				}
				var nl = $ ("td[coor='{0}x{1}']".format (v, h)).find ('input');
				if (nl.length > 0) {
					$ ("td[coor='{0}x{1}']".format (v, h)).find ('input').focus ().select ();
					break;
				}
			}
		}
		if (code == 38) {
			while (true) {
				max_interations -= 1;
				if (max_interations < 0) {
					var max_interations = 200;
					console.error ('Parada inesperada!');
					break;
				}
				v -= 1;
				if (v <= 0) {
					var v = self.max_v;
				}
				var nl = $ ("td[coor='{0}x{1}']".format (v, h)).find ('input');
				if (nl.length > 0) {
					$ ("td[coor='{0}x{1}']".format (v, h)).find ('input').focus ().select ();
					break;
				}
			}
		}
		else if (code == 40) {
			while (true) {
				max_interations -= 1;
				if (max_interations < 0) {
					var max_interations = 200;
					console.error ('Parada inesperada!');
					break;
				}
				v += 1;
				if (v > self.max_v) {
					var v = 0;
				}
				var nl = $ ("td[coor='{0}x{1}']".format (v, h)).find ('input');
				if (nl.length > 0) {
					$ ("td[coor='{0}x{1}']".format (v, h)).find ('input').focus ().select ();
					break;
				}
			}
		}
		else if (code == 13) {
			while (true) {
				max_interations -= 1;
				if (max_interations < 0) {
					var max_interations = 200;
					$ ("td[coor='1x1']").find ('input').focus ().select ();
					console.error ('Parada inesperada!');
					break;
				}
				v += 1;
				if (v > self.max_v) {
					h += 1;
					var v = 0;
				}
				if (h > self.max_h) {
					var h = 0;
				}
				var nl = $ ("td[coor='{0}x{1}']".format (v, h)).find ('input');
				if (nl.length > 0) {
					$ ("td[coor='{0}x{1}']".format (v, h)).find ('input').focus ().select ();
					break;
				}
			}
		}
	});},
	get menu_box_disciplinas () {return __get__ (this, function (self) {
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
		var menus = [];
		for (var x of self.lista_de_disciplinas) {
			if (x.disciplina != self.disciplina_atual) {
				menus.append (widgets.MenuOption (x.disciplina, __kwargtrans__ (dict ([['_class', 'botao_mudar_disciplina_ficha_avaliativa wave_on_click'], ['_data-id_disciplina', x.id]]))));
			}
		}
		var html = widgets.MenuBox ('drop_mudar_disciplina_ficha_avaliativa', I (__kwargtrans__ ({_class: 'fas fa-sync-alt'})), ...menus, __kwargtrans__ ({onOpen: (function __lambda__ () {
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
			return self.binds_disciplinas ();
		})}));
		return html;
	});},
	get binds_disciplinas () {return __get__ (this, function (self) {
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
		$ ('.botao_mudar_disciplina_ficha_avaliativa').off ('click.botao_mudar_disciplina_ficha_avaliativa').on ('click.botao_mudar_disciplina_ficha_avaliativa', (function __lambda__ () {
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
			return self.mudar_disciplina (this);
		}));
	});},
	get mudar_disciplina () {return __get__ (this, function (self, el) {
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
		var id_disciplina = $ (el).data ('id_disciplina');
		if (self.eh_professor) {
			window.PhanterPWA.open_xway ('ficha-avaliativa', 'professor', self.id_escola, self.ano_letivo, self.id_turma, id_disciplina);
		}
		else {
			window.PhanterPWA.open_xway ('ficha-avaliativa', self.id_escola, self.ano_letivo, self.id_turma, id_disciplina);
		}
	});}
});

//# sourceMappingURL=handlers.ficha_avaliativa.map