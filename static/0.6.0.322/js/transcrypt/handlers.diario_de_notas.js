// Transcrypt'ed from Python, 2022-03-14 09:15:16
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
var __name__ = 'handlers.diario_de_notas';
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('DIARIO DE NOTAS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), tur, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container extend'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-diario_de_notas', _class: 'p-row card e-padding_auto'})), DIV (__kwargtrans__ ({_id: 'float_button_container'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container extend'})));
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
					return '#_phanterpwa:/diario_de_notas/{0}'.format (id_escola);
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
					return '#_phanterpwa:/diario_de_notas/{0}/{1}'.format (arg1, ano);
				})}));
			}
			else if (str (arg1).isdigit () && str (arg2).isdigit ()) {
				self.Diario = Diario (self, arg1, arg2, arg3, arg4, __kwargtrans__ ({eh_professor: true}));
			}
			var BackButton1 = left_bar.LeftBarButton ('back_diario_de_notas', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('professores', 'turmas', arg1, arg2), 'position': 'top', 'show_if_way_match': '^diario-de-notas\\/professor\\/[0-9]{1,}\\/[0-9]{1,}\\/'})));
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
				self.Diario = Diario (self, arg0, arg1, arg2, arg3);
			}
			var BackButton1 = left_bar.LeftBarButton ('back_diario_de_notas', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('turmas', arg0, arg1, 'detalhado'), 'position': 'top', 'show_if_way_match': '^diario-de-notas\\/[0-9]{1,}\\/[0-9]{1,}.*$'})));
			if (window.PhanterPWA.Request.get_param ('retornar') == 'turma-simples') {
				var BackButton1 = left_bar.LeftBarButton ('back_diario_de_notas', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('turmas', arg0, arg1), 'position': 'top', 'show_if_way_match': '^diario-de-notas\\/[0-9]{1,}\\/[0-9]{1,}.*$'})));
			}
			else if (window.PhanterPWA.Request.get_param ('retornar') == 'turma-especifica') {
				var BackButton1 = left_bar.LeftBarButton ('back_diario_de_notas', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('turmas', arg0, arg1, 'especifico', arg2), 'position': 'top', 'show_if_way_match': '^diario-de-notas\\/[0-9]{1,}\\/[0-9]{1,}.*$'})));
			}
			window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
		}
	}));}
});
export var Diario =  __class__ ('Diario', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, escola, ano_letivo, turma, id_matricula, eh_professor) {
		if (typeof id_matricula == 'undefined' || (id_matricula != null && id_matricula.hasOwnProperty ("__kwargtrans__"))) {;
			var id_matricula = null;
		};
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
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
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
		self.eh_professor = eh_professor;
		self.id_matricula = id_matricula;
		self.index_instance = index_instance;
		if (self.id_matricula === null) {
			var mat_link = '';
		}
		else {
			var mat_link = '/{0}'.format (self.id_matricula);
		}
		widgets.FloatMenu ('menu_impressao', I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-file-excel'})), __kwargtrans__ ({_class: 'botao_criar_excel', _href: '{0}/api/diario-de-notas/excel/{1}/{2}/{3}{4}/'.format (window.PhanterPWA.ApiServer.remote_address, self.id_escola, self.ano_letivo, self.id_turma, mat_link)})), widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-print'})), __kwargtrans__ ({_title: 'Salvar Di??rio de Notas como arquivo do excel', _class: 'botao_imprimir_diario_de_notas', _onclick: 'print();'}))).html_to ('#float_button_container');
		self._get_diario_de_notas ();
	});},
	get processar_diario () {return __get__ (this, function (self, diario_de_notas) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'diario_de_notas': var diario_de_notas = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var html = DIV (H2 ('Di??rio de notas ', STRONG (diario_de_notas.turma.turma), __kwargtrans__ ({_class: 'media-print-visible'})), __kwargtrans__ ({_class: 'diario_de_notas_container diario_de_notas_imprimir phanterpwa-simple-media-print'}));
		var tabela = TABLE (__kwargtrans__ ({_class: 'tabela_diario_de_notas'}));
		self.limites_verticais = [];
		self.limites_horizontais = [];
		self.max_h = 0;
		self.max_v = 0;
		var limit_v = 0;
		var limit_h = 0;
		for (var x of diario_de_notas.diario) {
			var linha = TR ();
			for (var y of x) {
				if (y === null) {
					var celula = '';
				}
				else if (y [1] ['tipo'] == 'cabecalho') {
					if (y [1] ['_class'] == 'diario_notas_disciplina') {
						var id_disciplina = y [1] ['_data-id_disciplina'];
						if (self.eh_professor) {
							if (y [0] == 'Pareceres') {
								var celula = TH (A (y [0], __kwargtrans__ ({_href: window.PhanterPWA.XWAY ('ficha-avaliativa', 'professor', self.id_escola, self.ano_letivo, self.id_turma, 'parecer')})), __kwargtrans__ (y [1]));
							}
							else {
								var celula = TH (A (y [0], __kwargtrans__ ({_href: window.PhanterPWA.XWAY ('ficha-avaliativa', 'professor', self.id_escola, self.ano_letivo, self.id_turma, id_disciplina)})), __kwargtrans__ (y [1]));
							}
						}
						else {
							var celula = TH (A (y [0], __kwargtrans__ ({_href: window.PhanterPWA.XWAY ('ficha-avaliativa', self.id_escola, self.ano_letivo, self.id_turma, id_disciplina)})), __kwargtrans__ (y [1]));
						}
					}
					else {
						var celula = TH (y [0], __kwargtrans__ (y [1]));
					}
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
					var celula = TD (INPUT (__kwargtrans__ ({_value: y [0]})), DIV (I (__kwargtrans__ ({_class: 'fas fa-cloud-upload-alt'})), __kwargtrans__ ({_class: 'botao_enviar_nota'})), __kwargtrans__ (y [1]));
				}
				else if (y [1] ['tipo'] == 'texto') {
					var celula = TD (TEXTAREA (y [0]), DIV (I (__kwargtrans__ ({_class: 'fas fa-cloud-upload-alt'})), __kwargtrans__ ({_class: 'botao_enviar_parecer'})), __kwargtrans__ (y [1]));
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
		self.limites_verticais.append (limit_v);
		self.limites_horizontais.append (limit_h);
		self.max_h = limit_h;
		self.max_v = limit_v;
		var tabela_lista_alunos = XTABLE ('lista_alunos_diario_{0}'.format (self.id_turma), XTRH ('lista_alunos_diario_cabecalho_{0}'.format (self.id_turma), 'N??', 'Aluno', 'Resultado Autom??tico', 'Resultado Final'));
		var series = [];
		for (var x of diario_de_notas.lista_alunos) {
			var add_class = 'link linha_aluno_abrir_diario';
			if (__in__ ('selecionado', x [1] [1] ['_class'])) {
				var add_class = 'selecionado linha_aluno_abrir_diario';
			}
			if (self.eh_multisseriado) {
				var serie = x [1] [1] ['_data-serie'];
				if (!__in__ (serie, series)) {
					series.append (serie);
					tabela_lista_alunos.append (TR (TH (serie, __kwargtrans__ ({_colspan: 4, _class: 'serie_multisseriado'}))));
				}
			}
			tabela_lista_alunos.append (XTRD ('lista_alunos_diario_linha_{0}_{1}'.format (self.id_turma, x [1] [1] ['_data-id_matricula']), ...(function () {
				var __accu0__ = [];
				for (var y of x) {
					__accu0__.append (TD (y [0], __kwargtrans__ (dict (y [1]))));
				}
				return __accu0__;
			}) (), __kwargtrans__ (dict ({'_class': add_class, '_data-id_aluno': x [1] [1] ['_data-id_aluno'], '_data-id_matricula': x [1] [1] ['_data-id_matricula'], 'drag_and_drop': false}))));
		}
		var botao_aluno_anterior = DIV (I (__kwargtrans__ ({_class: 'fas fa-angle-double-left'})), __kwargtrans__ (dict ({'_class': 'botao_aluno_anterior icon_button', '_title': 'Di??rio do Aluno Anterior', '_disabled': 'disabled'})));
		var botao_proximo_aluno = DIV (I (__kwargtrans__ ({_class: 'fas fa-angle-double-right'})), __kwargtrans__ (dict ({'_class': 'botao_proximo_aluno icon_button', '_title': 'Di??rio do Pr??ximo Aluno turma', '_disabled': 'disabled'})));
		if (self.eh_professor) {
			var way = ['diario-de-notas', 'professor', self.id_escola, self.ano_letivo, self.id_turma];
		}
		else {
			var way = ['diario-de-notas', self.id_escola, self.ano_letivo, self.id_turma];
		}
		if (diario_de_notas.aluno_anterior !== null && diario_de_notas.aluno_anterior !== undefined) {
			var nway = list (way);
			nway.append (diario_de_notas.aluno_anterior);
			var botao_aluno_anterior = A (I (__kwargtrans__ ({_class: 'fas fa-angle-double-left'})), __kwargtrans__ (dict ({'_class': 'botao_aluno_anterior icon_button', '_title': 'Di??rio do aluno anterior', '_href': window.PhanterPWA.XWAY (...nway)})));
		}
		if (diario_de_notas.proximo_aluno !== null && diario_de_notas.proximo_aluno !== undefined) {
			way.append (diario_de_notas.proximo_aluno);
			var botao_proximo_aluno = A (I (__kwargtrans__ ({_class: 'fas fa-angle-double-right'})), __kwargtrans__ (dict ({'_class': 'botao_proximo_aluno icon_button', '_title': 'Di??rio do pr??ximo aluno', '_href': window.PhanterPWA.XWAY (...way)})));
		}
		var painel = DIV (LABEL (diario_de_notas.aluno.aluno, __kwargtrans__ ({_for: 'phanterpwa-card-panel-control-{0}'.format (diario_de_notas.aluno.id)})), DIV (DIV (DIV (DIV (DIV (DIV (tabela, __kwargtrans__ ({_class: 'diario-ficha_avaliativa-container'})), __kwargtrans__ ({_class: 'diario-ficha_avaliativa-wrapper'})), __kwargtrans__ ({_class: 'p-row e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (botao_aluno_anterior, botao_proximo_aluno, __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper has_buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), DIV (H3 ('Lista de Alunos da Turma'), P ('Clique no aluno abaixo para abrir seu respectivo di??rio.'), tabela_lista_alunos, __kwargtrans__ ({_class: 'painel_lista_turma e-padding_auto media-print-inside-invisible'})), __kwargtrans__ ({_id: 'phanterpwa-card-panel-control-{0}'.format (diario_de_notas.aluno.id), _class: 'phanterpwa-card-panel-control media-print-visible'}));
		html.append (painel);
		html.html_to ('#content-diario_de_notas');
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
		$ ('.diario_notas_text_nota').find ('textarea').off ('change.nota_diario').on ('change.nota_diario', (function __lambda__ () {
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
			return self._enviar_nota ($ (this).parent ());
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
			return self._enviar_parecer ($ (this).parent ());
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
		if (self.eh_professor) {
			$ ('.linha_aluno_abrir_diario').off ('click.aluno_abrir_diario').on ('click.aluno_abrir_diario', (function __lambda__ () {
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
				return self.abrir_diario (window.PhanterPWA.XWAY ('diario-de-notas', 'professor', self.id_escola, self.ano_letivo, self.id_turma, $ (this).data ('id_matricula')));
			}));
		}
		else {
			$ ('.linha_aluno_abrir_diario').off ('click.aluno_abrir_diario').on ('click.aluno_abrir_diario', (function __lambda__ () {
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
				return self.abrir_diario (window.PhanterPWA.XWAY ('diario-de-notas', self.id_escola, self.ano_letivo, self.id_turma, $ (this).data ('id_matricula')));
			}));
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
		var elemento = $ (el);
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
			window.PhanterPWA.PUT ('api', 'diario-de-notas', 'professor', self.id_escola, self.ano_letivo, self.id_turma, 'parecer', __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
			window.PhanterPWA.PUT ('api', 'diario-de-notas', self.id_escola, self.ano_letivo, self.id_turma, 'parecer', __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
		var elemento = $ (el);
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
			window.PhanterPWA.PUT ('api', 'diario-de-notas', 'professor', self.id_escola, self.ano_letivo, linha, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
			window.PhanterPWA.PUT ('api', 'diario-de-notas', self.id_escola, self.ano_letivo, linha, __kwargtrans__ ({form_data: formdata, onComplete: (function __lambda__ (data, ajax_status) {
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
					if (updates [x] !== null && updates [x] !== undefined) {
						if (updates [x] [1] ['tipo'] == 'input') {
							var celula = TD (INPUT (__kwargtrans__ ({_value: updates [x] [0]})), DIV (I (__kwargtrans__ ({_class: 'fas fa-cloud-upload-alt'})), __kwargtrans__ ({_class: 'botao_enviar_nota'})), __kwargtrans__ (updates [x] [1]));
						}
						else {
							var celula = TD (updates [x] [0], __kwargtrans__ (updates [x] [1]));
						}
						$ ('#{0}'.format (x)).replaceWith (celula.jquery ());
					}
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
				window.PhanterPWA.flash ('A n??o pode ser menor que 0');
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
					window.PhanterPWA.flash ('O valor adicionado ?? inv??lido');
					return '';
				}
				try {
					var fvalue = float ('{0}'.format (nvalue));
				}
				catch (__except0__) {
					window.PhanterPWA.flash ('O valor adicionado ?? inv??lido');
					return '';
				}
				if (fvalue > 10) {
					window.PhanterPWA.flash ('A n??o pode ser maior que 10');
					return '10.0';
				}
				else if (fvalue < 0) {
					window.PhanterPWA.flash ('A n??o pode ser menor que 0');
					return '0.0';
				}
				else {
					return nvalue;
				}
			}
		}
		window.PhanterPWA.flash ('O valor adicionado ?? inv??lido');
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
		var coor = element.parent ().attr ('coor');
		var __left0__ = coor.py_split ('x');
		var v = __left0__ [0];
		var h = __left0__ [1];
		var v = int (v);
		var h = int (h);
		var max_interations = 200;
		if (code == 37) {
			while (true) {
				max_interations--;
				if (max_interations < 0) {
					var max_interations = 200;
					console.error ('Parada inesperada!');
					break;
				}
				h--;
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
				max_interations--;
				if (max_interations < 0) {
					var max_interations = 200;
					console.error ('Parada inesperada!');
					break;
				}
				h++;
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
				max_interations--;
				if (max_interations < 0) {
					var max_interations = 200;
					console.error ('Parada inesperada!');
					break;
				}
				v--;
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
				max_interations--;
				if (max_interations < 0) {
					var max_interations = 200;
					console.error ('Parada inesperada!');
					break;
				}
				v++;
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
				max_interations--;
				if (max_interations < 0) {
					var max_interations = 200;
					$ ("td[coor='1x1']").find ('input').focus ().select ();
					console.error ('Parada inesperada!');
					break;
				}
				v++;
				if (v > self.max_v) {
					h++;
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
			var diario_de_notas = json.diario_de_notas;
			self.eh_multisseriado = json.eh_multisseriado;
			self.processar_diario (diario_de_notas);
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
		if (self.id_matricula !== null && self.id_matricula !== undefined) {
			if (self.eh_professor) {
				window.PhanterPWA.GET ('api', 'diario-de-notas', 'professor', self.id_escola, self.ano_letivo, self.id_turma, self.id_matricula, __kwargtrans__ ({onComplete: self.after_get}));
			}
			else {
				window.PhanterPWA.GET ('api', 'diario-de-notas', self.id_escola, self.ano_letivo, self.id_turma, self.id_matricula, __kwargtrans__ ({onComplete: self.after_get}));
			}
		}
		else if (self.eh_professor) {
			window.PhanterPWA.GET ('api', 'diario-de-notas', 'professor', self.id_escola, self.ano_letivo, self.id_turma, __kwargtrans__ ({onComplete: self.after_get}));
		}
		else {
			window.PhanterPWA.ApiServer.GET ('api', 'diario-de-notas', self.id_escola, self.ano_letivo, self.id_turma, __kwargtrans__ ({onComplete: self.after_get}));
		}
	});}
});

//# sourceMappingURL=handlers.diario_de_notas.map