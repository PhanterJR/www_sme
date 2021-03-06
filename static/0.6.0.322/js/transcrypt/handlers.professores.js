// Transcrypt'ed from Python, 2022-04-10 17:38:41
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as anos_letivos from './handlers.anos_letivos.js';
import * as escolas from './handlers.escolas.js';
import * as snippets from './phanterpwa.frontend.components.snippets.js';
import * as forms from './phanterpwa.frontend.forms.js';
import * as widgets from './phanterpwa.frontend.components.widgets.js';
import * as modal from './phanterpwa.frontend.components.modal.js';
import * as preloaders from './phanterpwa.frontend.preloaders.js';
import * as left_bar from './phanterpwa.frontend.components.left_bar.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
import * as validations from './phanterpwa.frontend.validations.js';
import * as decorators from './phanterpwa.frontend.decorators.js';
import * as gatehandler from './phanterpwa.frontend.gatehandler.js';
var __name__ = 'handlers.professores';
export var DIV = helpers.XmlConstructor.tagger ('div');
export var I = helpers.XmlConstructor.tagger ('i');
export var H2 = helpers.XmlConstructor.tagger ('h2');
export var FORM = helpers.XmlConstructor.tagger ('form');
export var SPAN = helpers.XmlConstructor.tagger ('span');
export var STRONG = helpers.XmlConstructor.tagger ('strong');
export var IMG = helpers.XmlConstructor.tagger ('img', true);
export var UL = helpers.XmlConstructor.tagger ('ul');
export var LI = helpers.XmlConstructor.tagger ('li');
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var A = helpers.XmlConstructor.tagger ('a');
export var P = helpers.XmlConstructor.tagger ('p');
export var LABEL = helpers.XmlConstructor.tagger ('label');
export var TABLE = helpers.XmlConstructor.tagger ('table');
export var TD = helpers.XmlConstructor.tagger ('td');
export var TH = helpers.XmlConstructor.tagger ('th');
export var TR = helpers.XmlConstructor.tagger ('tr');
export var I18N = helpers.I18N;
export var CONCATENATE = helpers.CONCATENATE;
export var PromoOption = snippets.PromoOption;
export var OPTION = helpers.XmlConstructor.tagger ('option');
export var SELECT = helpers.XmlConstructor.tagger ('select');
export var XTABLE = widgets.Table;
export var XML = helpers.XML;
export var XTRD = widgets.TableData;
export var XTRH = widgets.TableHead;
export var XFOOTER = widgets.TableFooterPagination;
export var XSECTION = helpers.XSECTION;
export var Index =  __class__ ('Index', [gatehandler.Handler], {
	__module__: __name__,
	get initialize () {return __get__ (this, function (self) {
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
		var ano_ht = '';
		if (arg2 !== null) {
			var ano_ht = DIV (arg2, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'}));
		}
		var html = CONCATENATE (DIV (DIV (DIV (ano_ht, DIV ('SUAS TURMAS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-turmas', _class: 'p-row card e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		if (arg0 == 'turmas') {
			if (arg1 === null || arg1 === undefined) {
				var html = escolas.EscolherEscola (__kwargtrans__ ({id_target: '#content-turmas', callback_link: (function __lambda__ (id_escola) {
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
					return '#_phanterpwa:/professores/turmas/{0}'.format (id_escola);
				})}));
			}
			else if (str (arg1).isdigit () && (arg2 === null || arg2 === undefined)) {
				var html = anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({id_target: '#content-turmas', callback_link: (function __lambda__ (ano) {
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
					return '#_phanterpwa:/professores/turmas/{0}/{1}'.format (arg1, ano);
				})}));
			}
			else if (str (arg1).isdigit () && str (arg2).isdigit ()) {
				if (arg3 == 'detalhado') {
					self.TurmasDetalhado = TurmasDetalhado (self, arg1, arg2);
				}
				else if (arg3 == 'especifico' && str (arg3).isdigit ()) {
					self.TurmaEspecifica = TurmaEspecifica (self, arg1, arg2, arg4);
				}
				else {
					self.TurmasSimples = TurmasSimples (self, arg1, arg2);
				}
			}
			var BackButton1 = left_bar.LeftBarButton ('botao_voltar_professor', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('area-do-servidor'), 'position': 'top', 'show_if_way_match': '^professores\\/turmas\\/[0-9]{1,}\\/[0-9]{1,}\\/?$'})));
			if (arg2 == 'detalhado') {
				var BackButton1 = left_bar.LeftBarButton ('botao_voltar_professor', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('professores', 'turmas', arg0, arg1), 'position': 'top', 'show_if_way_match': '^professores\\/turmas\\/[0-9]{1,}\\/[0-9]{1,}\\/detalhado\\/?$'})));
			}
			window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
		}
		else if (arg0 == 'alunos') {
			if (arg1 === null || arg1 === undefined) {
				var html = escolas.EscolherEscola (__kwargtrans__ ({id_target: '#content-turmas', callback_link: (function __lambda__ (id_escola) {
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
					return '#_phanterpwa:/professores/alunos/{0}'.format (id_escola);
				})}));
			}
			else if (str (arg1).isdigit () && (arg2 === null || arg2 === undefined)) {
				var html = anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({id_target: '#content-turmas', callback_link: (function __lambda__ (ano) {
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
					return '#_phanterpwa:/professores/alunos/{0}/{1}'.format (arg1, ano);
				})}));
			}
			else if (str (arg1).isdigit () && str (arg2).isdigit ()) {
				self.alunos = Alunos (self, arg1, arg2);
			}
			var BackButton1 = left_bar.LeftBarButton ('botao_voltar_professor', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('area-do-servidor'), 'position': 'top', 'show_if_way_match': '^professores\\/alunos\\/[0-9]{1,}\\/[0-9]{1,}\\/?$'})));
			window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
		}
	});}
});
export var TurmasSimples =  __class__ ('TurmasSimples', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, escola, ano_letivo, prosseguir) {
		if (typeof prosseguir == 'undefined' || (prosseguir != null && prosseguir.hasOwnProperty ("__kwargtrans__"))) {;
			var prosseguir = null;
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
						case 'prosseguir': var prosseguir = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.prosseguir = prosseguir;
		self.id_escola = escola;
		self.tem_turma = true;
		self.ano_letivo = ano_letivo;
		self.index_instance = index_instance;
		helpers.XmlConstructor.__init__ (self, 'div', false, self.initial_xml (), __kwargtrans__ ({_class: 'lista_de_turmas_simples'}));
		self._get_turmas ();
	});},
	get initial_xml () {return __get__ (this, function (self) {
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV (self.ano_letivo, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('TURMAS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-turmas', _class: 'p-row card e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		return html;
	});},
	get turmas_disponiveis () {return __get__ (this, function (self) {
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
		self.tem_turma = true;
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.id_escola);
		var html = DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (H2 ('NESTE PAINEL ?? POSS??VEL VISUALIZAR TODAS AS TURMAS ??S QUAIS ENSINA.'), P ('Acessando o bot??o ', I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), ' ?? poss??vel acessar op????es', ' relacionadas ?? referente turma, como: ', STRONG ('Di??rio de Notas, Ficha Avaliativa,', ' Registro de Faltas, Registro de Aulas, etc.')), P ('Se estiver faltando alguma turma ou disciplina, informe a dire????o de sua escola.'), __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), DIV (self.xml_tabela_turmas (), DIV (__kwargtrans__ ({_id: 'modal_turma_case'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'turmas-turmas-container'}));
		html.html_to ('#content-turmas');
		if (!(self.tem_turma)) {
			$ ('#phanterpwa-card-panel-control-lista_de_turmas_simples').find ('.botao_turma_detalhada').fadeOut ();
		}
		self.binds_escolha_de_turmas ();
	});},
	get xml_tabela_turmas () {return __get__ (this, function (self) {
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
		var data_turma = self.lista_de_turmas;
		var table = XTABLE ('turmas-table', XTRH ('turmas-table-head', 'Turma', TH ('Turno', __kwargtrans__ ({_style: 'text-align: center;'})), TH ('Quantidade de Alunos', __kwargtrans__ ({_style: 'text-align: center;'})), 'Disciplina', TH (__kwargtrans__ ({_style: 'width: 40px;'}))));
		var cont_turmas = 0;
		var l_turmas = [];
		for (var x of data_turma) {
			cont_turmas++;
			var lista_series = list ((function () {
				var __accu0__ = [];
				for (var ids of x.series) {
					__accu0__.append (ids [1]);
				}
				return __accu0__;
			}) ());
			if (len (lista_series) > 1) {
				var ultimo = lista_series [len (lista_series) - 1];
				var tittle = ', '.join (lista_series.__getslice__ (0, -(1), 1));
				var tittle = '{0} e {1}'.format (tittle, ultimo);
			}
			else {
				var tittle = lista_series [0];
			}
			if (x.eh_educacao_infantil) {
				var menus_options = [widgets.MenuOption ('Registrar pareceres', __kwargtrans__ (dict ({'_class': 'botao_diario_de_notas_turma wave_on_click', '_href': window.PhanterPWA.XWAY ('diario-de-notas', 'professor', self.id_escola, self.ano_letivo, x.id, __kwargtrans__ (dict ({'_retornar': window.PhanterPWA.XWAY ('professores', 'turmas', self.id_escola, self.ano_letivo)})))}))), widgets.MenuOption ('Lista de pareceres', __kwargtrans__ (dict ({'_class': 'botao_ficha_avaliativa_turma wave_on_click', '_href': window.PhanterPWA.XWAY ('ficha-avaliativa', 'professor', self.id_escola, self.ano_letivo, x.id, 'parecer', __kwargtrans__ (dict ({'_retornar': window.PhanterPWA.XWAY ('professores', 'turmas', self.id_escola, self.ano_letivo)})))}))), widgets.MenuOption ('Registro de Faltas', __kwargtrans__ (dict ({'_class': 'botao_registro_de_faltas_turma wave_on_click', '_href': window.PhanterPWA.XWAY ('registro-de-faltas', self.id_escola, self.ano_letivo, x.id, __kwargtrans__ (dict ({'_retornar': window.PhanterPWA.XWAY ('professores', 'turmas', self.id_escola, self.ano_letivo)})))}))), widgets.MenuOption ('Controle de Atividades', __kwargtrans__ (dict ({'_class': 'botao_controle_de_atividades_turma wave_on_click', '_href': window.PhanterPWA.XWAY ('controle-de-atividades', self.id_escola, self.ano_letivo, x.id, x.id_disciplina, __kwargtrans__ (dict ({'_retornar': window.PhanterPWA.XWAY ('professores', 'turmas', self.id_escola, self.ano_letivo)})))}))), widgets.MenuOption ('Registro de Aulas', __kwargtrans__ (dict ({'_class': 'botao_registro_de_aulas_turma wave_on_click', '_href': window.PhanterPWA.XWAY ('registro-de-aulas-educacao-infantil', self.id_escola, self.ano_letivo, x.id, x.id_disciplina, __kwargtrans__ (dict ({'_retornar': window.PhanterPWA.XWAY ('professores', 'turmas', self.id_escola, self.ano_letivo)})))})))];
			}
			else {
				var menus_options = [widgets.MenuOption ('Ficha Avaliativa', __kwargtrans__ (dict ({'_class': 'botao_diario_de_notas_turma wave_on_click', '_href': window.PhanterPWA.XWAY ('ficha-avaliativa', 'professor', self.id_escola, self.ano_letivo, x.id, x.id_disciplina, __kwargtrans__ (dict ({'_retornar': window.PhanterPWA.XWAY ('professores', 'turmas', self.id_escola, self.ano_letivo)})))}))), widgets.MenuOption ('Di??rio de notas', __kwargtrans__ (dict ({'_class': 'botao_diario_de_notas_turma wave_on_click', '_href': window.PhanterPWA.XWAY ('diario-de-notas', 'professor', self.id_escola, self.ano_letivo, x.id, __kwargtrans__ (dict ({'_retornar': window.PhanterPWA.XWAY ('professores', 'turmas', self.id_escola, self.ano_letivo)})))}))), widgets.MenuOption ('Registro de Faltas', __kwargtrans__ (dict ({'_class': 'botao_registro_de_faltas_turma wave_on_click', '_href': window.PhanterPWA.XWAY ('registro-de-faltas', self.id_escola, self.ano_letivo, x.id, x.id_disciplina, __kwargtrans__ (dict ({'_retornar': window.PhanterPWA.XWAY ('professores', 'turmas', self.id_escola, self.ano_letivo)})))}))), widgets.MenuOption ('Controle de Atividades', __kwargtrans__ (dict ({'_class': 'botao_controle_de_atividades_turma wave_on_click', '_href': window.PhanterPWA.XWAY ('controle-de-atividades', self.id_escola, self.ano_letivo, x.id, x.id_disciplina, __kwargtrans__ (dict ({'_retornar': window.PhanterPWA.XWAY ('professores', 'turmas', self.id_escola, self.ano_letivo)})))}))), widgets.MenuOption ('Registro de Aulas', __kwargtrans__ (dict ({'_class': 'botao_registro_de_aulas_turma wave_on_click', '_href': window.PhanterPWA.XWAY ('registro-de-aulas{0}'.format ((x.eh_educacao_infantil ? '-educacao-infantil' : '')), self.id_escola, self.ano_letivo, x.id, x.id_disciplina, __kwargtrans__ (dict ({'_retornar': window.PhanterPWA.XWAY ('professores', 'turmas', self.id_escola, self.ano_letivo)})))})))];
			}
			if (!__in__ (x.turma, l_turmas)) {
				l_turmas.append (x.turma);
				table.append (XTRD ('turma-table-data-{0}'.format (cont_turmas), TD (x.turma, __kwargtrans__ ({_rowspan: self.total_disciplinas_por_turma [int (x.id)]})), TD (x.turno, __kwargtrans__ ({_rowspan: self.total_disciplinas_por_turma [int (x.id)], _style: 'text-align: center;'})), TD (x.quant_alunos, __kwargtrans__ ({_rowspan: self.total_disciplinas_por_turma [int (x.id)], _style: 'text-align: center;'})), x.disciplina, widgets.MenuBox ('drop_diarios_{0}'.format (cont_turmas), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), ...menus_options, __kwargtrans__ (dict ({'onOpen': (function __lambda__ () {
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
					return self.binds_escolha_de_turmas ();
				})}))), __kwargtrans__ (dict ({'drag_and_drop': false, '_class': 'linha_turma_turma', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': x.turmas, '_data-id_turma': x.id}))));
			}
			else {
				table.append (XTRD ('turma-table-data-{0}'.format (cont_turmas), x.disciplina, widgets.MenuBox ('drop_diarios_{0}'.format (cont_turmas), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), ...menus_options, __kwargtrans__ (dict ({'onOpen': (function __lambda__ () {
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
					return self.binds_escolha_de_turmas ();
				})}))), __kwargtrans__ (dict ({'drag_and_drop': false, '_class': 'linha_turma_turma', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': x.turmas, '_data-id_turma': x.id}))));
			}
		}
		if (cont_turmas == 0) {
			self.tem_turma = false;
			var table = DIV ('AS SUAS DISCIPLINAS, AT?? O MOMENTO, N??O DEVEM TER SIDO ATRIBU??DAS A ESTA SUA CONTA.', __kwargtrans__ ({_style: 'color: red; padding: 50px 0; text-align: center;'}));
		}
		return table;
	});},
	get binds_escolha_de_turmas () {return __get__ (this, function (self) {
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
		$ ('.botao_nova_turma').off ('click.nova_turmas').on ('click.nova_turmas', (function __lambda__ () {
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
			return self.modal_add_turma (this, 'novo');
		}));
		$ ('.botao_editar_turma').off ('click.editar_turmas').on ('click.editar_turmas', (function __lambda__ () {
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
			return self.modal_add_turma (this, 'editar');
		}));
		$ ('.botao_deletar_turma').off ('click.deletar_turmas').on ('click.deletar_turmas', (function __lambda__ () {
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
			return self.deletar_turma (this);
		}));
		$ ('.linha_turma_turma');
		$ ('.botao_copiar').off ('click.copiar_turmas').on ('click.copiar_turmas', (function __lambda__ () {
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
			return self.copiar_dados (this);
		}));
		$ ('.botao_colar').off ('click.colar_turmas').on ('click.colar_turmas', (function __lambda__ () {
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
			return self.colar_dados (this);
		}));
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
			self.lista_de_turmas = json.data.turmas;
			self.data_set_series = json.data.series;
			self.total_disciplinas_por_turma = json.data.total_disciplinas_por_turma;
			self.tem_multisseriado = json.data.tem_multisseriado;
			self.turmas_disponiveis ();
		}
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
		window.PhanterPWA.ApiServer.GET ('api', 'turmas', self.id_escola, self.ano_letivo, 'professor', __kwargtrans__ ({onComplete: self.after_get}));
	});},
	get update_turma () {return __get__ (this, function (self, data, ajax_status) {
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
		if (ajax_status == 'success') {
			self.lista_de_turmas = json.data.turmas;
			self.data_set_series = json.data.series;
			self.turmas_disponiveis ();
		}
	});},
	get depois_de_assinar_ordenacao_turma () {return __get__ (this, function (self, data, ajax_status, id_turma, turmas_ordenadas) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'ajax_status': var ajax_status = __allkwargs0__ [__attrib0__]; break;
						case 'id_turma': var id_turma = __allkwargs0__ [__attrib0__]; break;
						case 'turmas_ordenadas': var turmas_ordenadas = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var json = data.responseJSON;
		if (ajax_status == 'success') {
			var formdata = new FormData ();
			formdata.append ('csrf_token', json.csrf);
			formdata.append ('turmas', JSON.stringify (turmas_ordenadas));
			window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'turmas', self.id_escola, self.ano_letivo, 'ordenar', id_turma], 'form_data': formdata, 'onComplete': (function __lambda__ (data, ajax_status) {
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
				return self.update_turma (data, ajax_status);
			})})));
		}
	});}
});
export var Alunos =  __class__ ('Alunos', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, escola, ano_letivo, prosseguir) {
		if (typeof prosseguir == 'undefined' || (prosseguir != null && prosseguir.hasOwnProperty ("__kwargtrans__"))) {;
			var prosseguir = null;
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
						case 'prosseguir': var prosseguir = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.prosseguir = prosseguir;
		self.id_escola = escola;
		self.tem_turma = true;
		self.ano_letivo = ano_letivo;
		self.index_instance = index_instance;
		helpers.XmlConstructor.__init__ (self, 'div', false, self.initial_xml (), __kwargtrans__ ({_class: 'lista_de_turmas_simples'}));
		self._get_alunos ();
	});},
	get initial_xml () {return __get__ (this, function (self) {
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV (self.ano_letivo, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('MEUS ALUNOS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-alunos', _class: 'p-row card e-padding_auto'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
	});},
	get criar_lista_de_alunos () {return __get__ (this, function (self) {
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
		self.tem_turma = true;
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.id_escola);
		var html = DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (H2 ('NESTE PAINEL ?? POSS??VEL VISUALIZAR TODOS SEUS ALUNOS POR TURMA.'), P ('Acessando o bot??o ', I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), ' ?? poss??vel acessar op????es', ' relacionados ao aluno'), __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), DIV (self.xml_tabela_alunos (), DIV (__kwargtrans__ ({_id: 'modal_visualizar_aluno'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'alunos-alunos-container'}));
		html.html_to ('#content-alunos');
		if (!(self.tem_turma)) {
			$ ('#phanterpwa-card-panel-control-lista_de_alunos_simples').find ('.botao_turma_detalhada').fadeOut ();
		}
		self.binds_escolha_de_alunos ();
	});},
	get xml_tabela_alunos () {return __get__ (this, function (self) {
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
		var cont_alunos = 0;
		var table = XTABLE ('alunos-table', XTRH ('alunos-table-head', 'ID', 'Nome', 'Data de Nascimento', 'Endere??o'));
		var lista_turmas = [];
		var lista_serie = [];
		if (self.alunos !== undefined) {
			for (var x of self.alunos) {
				var data_de_nascimento_formated = '';
				if (x.alunos.data_nasc !== null && x.alunos.data_nasc !== undefined) {
					var data_de_nascimento_formated = validations.format_iso_date_datetime (x.alunos.data_nasc, 'dd/MM/yyyy', 'date');
				}
				var ano_letivo = '';
				var id_escola = '';
				if (!__in__ (x.turmas.id, lista_turmas)) {
					var lista_serie = [];
					lista_turmas.append (x.turmas.id);
					table.append (TR (TH (x.turmas.turma, __kwargtrans__ ({_colspan: 5, _style: 'color:white; background-color:grey; text-align:center;'}))));
				}
				if (x.eh_multisseriado) {
					if (!__in__ (x.series.serie, lista_serie)) {
						lista_serie.append (x.series.serie);
						table.append (TR (TH (x.series.serie, __kwargtrans__ ({_colspan: 5, _style: 'color:orange; text-align:center;'}))));
					}
				}
				table.append (XTRD ('alunos-table-data-{0}'.format (x.alunos.id), x.matriculas.id, x.alunos.aluno, data_de_nascimento_formated, x.alunos.endereco, widgets.MenuBox ('drop_{0}'.format (x.alunos.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Visualizar', __kwargtrans__ (dict ({'_class': 'botao_visualizar_aluno wave_on_click', '_data-id_aluno': x.alunos.id}))), __kwargtrans__ ({onOpen: (function __lambda__ () {
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
					return self.binds_menu_aluno ();
				})})), __kwargtrans__ (dict ({'drag_and_drop': false}))));
			}
			return table;
		}
	});},
	get binds_menu_aluno () {return __get__ (this, function (self) {
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
		$ ('.botao_visualizar_aluno').off ('click.botao_visualizar_aluno').on ('click.botao_visualizar_aluno', (function __lambda__ () {
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
			return self.get_visualizar_aluno (this);
		}));
	});},
	get binds_escolha_de_alunos () {return __get__ (this, function (self) {
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
		$ ('.botao_nova_turma').off ('click.nova_turmas').on ('click.nova_turmas', (function __lambda__ () {
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
			return self.modal_add_turma (this, 'novo');
		}));
		$ ('.botao_editar_turma').off ('click.editar_turmas').on ('click.editar_turmas', (function __lambda__ () {
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
			return self.modal_add_turma (this, 'editar');
		}));
		$ ('.botao_deletar_turma').off ('click.deletar_turmas').on ('click.deletar_turmas', (function __lambda__ () {
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
			return self.deletar_turma (this);
		}));
		$ ('.linha_turma_turma');
		$ ('.botao_copiar').off ('click.copiar_turmas').on ('click.copiar_turmas', (function __lambda__ () {
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
			return self.copiar_dados (this);
		}));
		$ ('.botao_colar').off ('click.colar_turmas').on ('click.colar_turmas', (function __lambda__ () {
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
			return self.colar_dados (this);
		}));
	});},
	get get_visualizar_aluno () {return __get__ (this, function (self, widget_instance) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'widget_instance': var widget_instance = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var id_aluno = $ (widget_instance).data ('id_aluno');
		window.PhanterPWA.GET ('api', 'aluno', id_aluno, 'visualizar', __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.modal_add_alunos_visualizar (data, ajax_status);
		})}));
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
			self.alunos = json.alunos;
			self.criar_lista_de_alunos ();
		}
	});},
	get _get_alunos () {return __get__ (this, function (self) {
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
		window.PhanterPWA.ApiServer.GET ('api', 'alunos', self.id_escola, self.ano_letivo, 'professor', __kwargtrans__ ({onComplete: self.after_get}));
	});},
	get modal_add_alunos_visualizar () {return __get__ (this, function (self, data, ajax_status) {
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
		if (ajax_status == 'success') {
			var html_historico = DIV (DIV ('HIST??RICO ESCOLAR', __kwargtrans__ ({_class: 'p-col w1p100 phanterpwa-widget-form-separator'})), __kwargtrans__ ({_class: 'historicos-conteudo'}));
			if (json.data.historico !== null && json.data.historico !== undefined) {
				for (var x of json.data.historico) {
					var html_ficha = P ('N??o h?? ficha individual no ano de ', STRONG (x.ano_letivo), ' da serie ', STRONG (x.serie), ' na escola ', STRONG (x.escola), '.');
					if (x.ficha_individual !== null && x.ficha_individual !== undefined) {
						var tabela = TABLE (__kwargtrans__ ({_class: 'tabela_ficha_individual'}));
						for (var y of x.ficha_individual) {
							var linha = TR ();
							for (var c of y) {
								if (c [1] ['tipo'] == 'cabecalho') {
									linha.append (TH (c [0], __kwargtrans__ (dict (c [1]))));
								}
								else if (c [1] ['tipo'] == 'cabecalho_rotate') {
									linha.append (TH (DIV (c [0], __kwargtrans__ ({_class: 'rotate'})), __kwargtrans__ (dict (c [1]))));
								}
								else {
									linha.append (TD (c [0], __kwargtrans__ (dict (c [1]))));
								}
							}
							tabela.append (linha);
						}
						var html_ficha = DIV (LABEL (x.ano_letivo, ' - ', x.serie, ' - ', x.escola), DIV (DIV (DIV (DIV (tabela, __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control p-col w1p100'}));
					}
					html_historico.append (html_ficha);
				}
			}
			var content = CONCATENATE (forms.Form (json.data.aluno), DIV (html_historico, __kwargtrans__ ({_class: 'p-row'})));
			self.modal_visualizar = modal.Modal ('#modal_visualizar_aluno', __kwargtrans__ (dict ({'title': CONCATENATE (DIV ('Visualizar dados do aluno'), DIV (STRONG (json.data.nome))), 'content': content})));
			self.modal_visualizar.open ();
		}
		else {
			window.PhanterPWA.flash ('N??o h?? alunos_visualizar matriculados para a s??rie da turma');
		}
	});}
});

//# sourceMappingURL=handlers.professores.map