// Transcrypt'ed from Python, 2021-10-08 09:18:59
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
var __name__ = 'handlers.turmas';
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
export var P = helpers.XmlConstructor.tagger ('p');
export var TH = helpers.XmlConstructor.tagger ('th');
export var TD = helpers.XmlConstructor.tagger ('td');
export var TR = helpers.XmlConstructor.tagger ('tr');
export var TABLE = helpers.XmlConstructor.tagger ('table');
export var LABEL = helpers.XmlConstructor.tagger ('label');
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var I18N = helpers.I18N;
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
		return window.PhanterPWA.auth_user_has_role (['administrator', 'root', 'Administrador Master SME', 'Administrador Master Escola']);
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
		var ano_ht = '';
		if (arg1 !== null) {
			var ano_ht = DIV (arg1, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'}));
		}
		var html = CONCATENATE (DIV (DIV (DIV (ano_ht, DIV ('TURMAS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-turmas', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		if (arg0 === null || arg0 === undefined) {
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
				return '#_phanterpwa:/turmas/{0}'.format (id_escola);
			})}));
		}
		else if (str (arg0).isdigit () && (arg1 === null || arg1 === undefined)) {
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
				return '#_phanterpwa:/turmas/{0}/{1}'.format (arg0, ano);
			})}));
		}
		else if (str (arg0).isdigit () && str (arg1).isdigit ()) {
			if (arg2 == 'detalhado') {
				self.TurmasDetalhado = TurmasDetalhado (self, arg0, arg1);
			}
			else if (arg2 == 'especifico' && str (arg3).isdigit ()) {
				self.TurmaEspecifica = TurmaEspecifica (self, arg0, arg1, arg3);
			}
			else if (arg2 == 'disciplina-professor' && str (arg3).isdigit ()) {
				self.DisciplinaProfessor = DisciplinaProfessor (self, arg0, arg1, arg3);
			}
			else {
				self.TurmasSimples = TurmasSimples (self, arg0, arg1);
			}
		}
		var BackButton1 = left_bar.LeftBarButton ('back_turmas', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': '#_phanterpwa:/area-do-servidor', 'position': 'top', 'show_if': (function __lambda__ () {
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
			return (window.PhanterPWA.get_current_way () == 'turmas/{0}/{1}'.format (arg0, arg1) ? true : false);
		})})));
		var BackButton1 = left_bar.LeftBarButton ('back_lista_de_turmas', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('area-do-servidor'), 'position': 'top', 'show_if_way_match': '^turmas\\/[0-9]{1,}\\/[0-9]{1,}\\/?$'})));
		if (arg2 == 'detalhado') {
			var BackButton1 = left_bar.LeftBarButton ('back_lista_de_turmas', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'tag': 'a', '_href': window.PhanterPWA.XWAY ('turmas', arg0, arg1), 'position': 'top', 'show_if_way_match': '^turmas\\/[0-9]{1,}\\/[0-9]{1,}\\/detalhado\\/?$'})));
		}
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton1);
	}));}
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV (self.ano_letivo, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('TURMAS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-turmas', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
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
		var html = DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (H2 ('NESTE PAINEL É POSSÍVEL MUDAR A ORDEM, EDITAR, EXCLUIR CADA TURMA OU CRIAR UMA NOVA.'), P ('Definindo as séries às turmas automaticamente estará definindo as disciplinas da mesma.', ' Para mais detalhes nas turmas clique no botão ', I (__kwargtrans__ ({_class: 'fas fa-list-alt'})), '.'), P ('É possível adicionar uma nova turma clicando em ', I (__kwargtrans__ ({_class: 'fas fa-plus'})), '.'), P ('Para mudar a ordem basta arrastar a turma na posição desejada.'), __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), DIV (LABEL ('Lista de Turmas disponíveis', __kwargtrans__ ({_for: 'phanterpwa-card-panel-control-{0}'.format ('lista_de_turmas_simples')})), DIV (DIV (DIV (DIV (self.xml_tabela_turmas (), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-plus'})), __kwargtrans__ (dict ({'_class': 'botao_nova_turma icon_button', '_title': 'Adicione uma nova turma', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo}))), A (I (__kwargtrans__ ({_class: 'fas fa-list-alt'})), __kwargtrans__ (dict ({'_class': 'botao_turma_detalhada icon_button', '_title': 'Turmas detalhadas', '_href': window.PhanterPWA.XWAY ('turmas', self.id_escola, self.ano_letivo, 'detalhado')}))), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper has_buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), DIV (__kwargtrans__ ({_id: 'modal_turma_case'})), DIV (__kwargtrans__ ({_id: 'modal_disciplinas_professores'})), DIV (__kwargtrans__ ({_id: 'modal_visualizar_aluno'})), __kwargtrans__ ({_id: 'phanterpwa-card-panel-control-{0}'.format ('lista_de_turmas_simples'), _class: 'phanterpwa-card-panel-control'})), __kwargtrans__ ({_class: 'turmas-turmas-container'}));
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
		var table = XTABLE ('turmas-table', XTRH ('turmas-table-head', 'Turma', 'Turno', TH ('Quantidade de Alunos', __kwargtrans__ ({_style: 'text-align: center;'})), TH ('Multisseriado?', __kwargtrans__ ({_style: 'text-align: center;'})), TH (__kwargtrans__ ({_style: 'width: 40px;'}))));
		var cont_turmas = 0;
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
			var multis = (x.multisseriado === true ? I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:green;', _title: tittle})) : I (__kwargtrans__ ({_class: 'fas fa-times-circle', _style: 'color: red;', _title: tittle})));
			table.append (XTRD ('turma-table-data-{0}'.format (x.id), x.turma, x.turno, TD (x.quant_alunos, __kwargtrans__ ({_style: 'text-align: center;'})), TD (multis, __kwargtrans__ ({_style: 'text-align: center;'})), widgets.MenuBox ('drop_{0}'.format (x.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Turma Detalhada', __kwargtrans__ (dict ({'_class': 'botao_diario_de_notas_turma wave_on_click', '_href': window.PhanterPWA.XWAY ('turmas', self.id_escola, self.ano_letivo, 'especifico', x.id, __kwargtrans__ (dict ({'_retornar': 'turma-simples'})))}))), widgets.MenuOption ('Editar', __kwargtrans__ (dict ({'_class': 'botao_editar_turma wave_on_click', '_data-id_turma': x.id, '_data-turma': x.turma, '_data-series': JSON.stringify ((function () {
				var __accu0__ = [];
				for (var ids of x.series) {
					__accu0__.append (ids [0]);
				}
				return __accu0__;
			}) ()), '_data-ids_series': (function () {
				var __accu0__ = [];
				for (var ids of x.series) {
					__accu0__.append (ids [0]);
				}
				return __accu0__;
			}) (), '_data-turno': x.turno, '_data-quant_aluno': x.quant_alunos}))), widgets.MenuOption ('Deletar', __kwargtrans__ (dict ({'_class': 'botao_deletar_turma wave_on_click', '_data-id_turma': x.id}))), widgets.MenuOption ('Diário de notas', __kwargtrans__ (dict ({'_class': 'botao_diario_de_notas_turma wave_on_click', '_href': window.PhanterPWA.XWAY ('diario-de-notas', self.id_escola, self.ano_letivo, x.id, __kwargtrans__ (dict ({'_turma': x.turma, '_retornar': 'turma-simples'})))}))), widgets.MenuOption ('Ficha Avaliativa', __kwargtrans__ (dict ({'_class': 'botao_ficha_avaliativa_turma wave_on_click', '_href': window.PhanterPWA.XWAY ('ficha-avaliativa', self.id_escola, self.ano_letivo, x.id, __kwargtrans__ (dict ({'_turma': x.turma, '_retornar': 'turma-simples'})))}))), widgets.MenuOption ('Conselho de Classe', __kwargtrans__ (dict ({'_class': 'botao_conselho_de_classe wave_on_click', '_href': window.PhanterPWA.XWAY ('conselho-de-classe', self.id_escola, self.ano_letivo, x.id, __kwargtrans__ (dict ({'_turma': x.turma, '_retornar': 'turma-simples'})))}))), widgets.MenuOption ('Boletins', __kwargtrans__ (dict ({'_class': 'botao_boletins wave_on_click', '_href': window.PhanterPWA.XWAY ('boletins', self.id_escola, self.ano_letivo, x.id, __kwargtrans__ (dict ({'_turma': x.turma, '_retornar': 'turma-simples'})))}))), widgets.MenuOption ('Diário integrado', __kwargtrans__ (dict ({'_class': 'botao_diario_integrado_turma wave_on_click', '_href': window.PhanterPWA.XWAY ('diario-integrado', self.id_escola, self.ano_letivo, x.id, __kwargtrans__ (dict ({'_turma': x.turma, '_retornar': 'turma-simples'})))}))), widgets.MenuOption ('Registros de Atividades', __kwargtrans__ (dict ({'_class': 'botao_diario_integrado_turma wave_on_click', '_href': window.PhanterPWA.XWAY ('registro-de-atividades', self.id_escola, self.ano_letivo, x.id, __kwargtrans__ (dict ({'_turma': x.turma, '_retornar': 'turma-simples'})))}))), __kwargtrans__ (dict ({'onOpen': (function __lambda__ () {
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
			})}))), __kwargtrans__ (dict ({'drag_and_drop': true, 'after_drop': self.after_drop, '_class': 'linha_turma_turma', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': x.turmas, '_data-id_turma': x.id}))));
		}
		if (cont_turmas == 0) {
			self.tem_turma = false;
			var table = DIV ('NÃO HÁ TURMAS CRIADAS NESTA ANO LETIVO', __kwargtrans__ ({_style: 'color: red; padding: 50px 0; text-align: center;'}));
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
	get deletar_turma () {return __get__ (this, function (self, widget_instance) {
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
		var id_turma = $ (widget_instance).data ('id_turma');
		var id_turma = $ (widget_instance).data ('id_turma');
		window.PhanterPWA.ApiServer.DELETE (__kwargtrans__ (dict ({'url_args': ['api', 'turma', self.id_escola, self.ano_letivo, 'turma', id_turma], 'onComplete': (function __lambda__ (data, ajax_status) {
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
			return self.update_turma (data, ajax_status, id_turma);
		})})));
	});},
	get modal_add_turma () {return __get__ (this, function (self, widget_instance, action) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'widget_instance': var widget_instance = __allkwargs0__ [__attrib0__]; break;
						case 'action': var action = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var id_turma = $ (widget_instance).data ('id_turma');
		var extra_field = '';
		var turma_field = forms.FormWidget ('turma', 'nome_turma', __kwargtrans__ (dict ({'value': '', 'default': '', 'label': 'Turma', 'type': 'string', 'validators': ['IS_NOT_EMPTY'], 'form': 'turma', '_class': 'p-col w1p100 w3p70'})));
		var turma = '';
		var turno = '';
		var series = '';
		var basenacionalcomum = false;
		var label_sub = 'Adicionar';
		var titulo_mod = 'Adicionar Nova Turma';
		if (action == 'editar') {
			var label_sub = 'Salvar Alteração';
			var id_turma = $ (widget_instance).data ('id_turma');
			var turma = $ (widget_instance).data ('turma');
			var turno = $ (widget_instance).data ('turno');
			var series = $ (widget_instance).data ('series');
			var titulo_mod = 'Editar Turma "{0}"'.format (turma);
			var extra_field = forms.FormWidget ('turma', 'id', __kwargtrans__ (dict ({'value': id_turma, 'label': 'id', 'type': 'string', 'kind': 'hidden', 'form': 'turma', '_placeholder': 'id', '_class': 'p-col w1p100 w3p50 e-display_hidden'})));
			var turma_field = forms.FormWidget ('turma', 'nome_turma', __kwargtrans__ (dict ({'value': turma, 'default': turma, 'label': 'Turma', 'type': 'string', 'validators': ['IS_NOT_EMPTY'], 'form': 'turma', '_class': 'p-col w1p100 w3p70'})));
		}
		var content = DIV (extra_field, turma_field, forms.FormWidget ('turma', 'turno', __kwargtrans__ (dict ({'value': turno, 'label': 'Turno', 'type': 'select', 'form': 'turma', 'data_set': ['Matutino', 'Vespertino', 'Noturno'], '_placeholder': 'Turma abreviada', '_class': 'p-col w1p100 w3p30'}))), XSECTION (LABEL ('Série(s) da Turma'), DIV (STRONG ('SELECIONANDO MAIS DE UMA SÉRIE A TURMA TORNA-SE MULTISSERIADA,', ' SE ESTE NÃO FOR O CASO BASTA SELECIONAR UMA ÚNICA SÉRIE ', 'CORRESPONDENTE A TURMA', __kwargtrans__ ({_style: 'color: red;'})), widgets.MultSelect ('series', __kwargtrans__ (dict ({'value': series, 'data_set': self.data_set_series, 'label': 'Séries', 'type': 'string', 'name': 'series', 'form': 'turma', '_placeholder': 'Séries', '_class': 'p-col w1p100'}))), __kwargtrans__ ({_class: 'e-padding_10'}))), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.SubmitButton ('turma', label_sub, __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_turma = modal.Modal ('#modal_turma_case', __kwargtrans__ (dict ({'title': titulo_mod, 'content': content, 'footer': footer, 'form': 'turma'})));
		self.modal_turma.open ();
		$ ('#phanterpwa-widget-form-submit_button-turma').off ('click.adicionar_turma').on ('click.adicionar_turma', (function __lambda__ () {
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
			return self._on_click_add_turma (widget_instance, action);
		}));
		forms.SignForm ('#form-turma', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-turma');
		})}));
	});},
	get _on_click_add_turma () {return __get__ (this, function (self, widget_instance, action) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'widget_instance': var widget_instance = __allkwargs0__ [__attrib0__]; break;
						case 'action': var action = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var id_turma = $ (widget_instance).data ('id_turma');
		var form_turma = $ ('#form-turma') [0];
		var form_turma = new FormData (form_turma);
		if (action == 'editar') {
			window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'turma', self.id_escola, self.ano_letivo, 'editar', id_turma], 'form_data': form_turma, 'onComplete': (function __lambda__ (data, ajax_status) {
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
		else {
			window.PhanterPWA.ApiServer.POST (__kwargtrans__ (dict ({'url_args': ['api', 'turma', self.id_escola, self.ano_letivo, 'novo'], 'form_data': form_turma, 'onComplete': (function __lambda__ (data, ajax_status) {
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
		self.modal_turma.close ();
	});},
	get after_drop () {return __get__ (this, function (self, ev, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'ev': var ev = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var lista_ordem = list ();
		var id_turma = $ (el).data ('id_turma');
		$ ('#phanterpwa-card-panel-control-lista_de_turmas_simples').find ('.phanterpwa-widget-table-data').each ((function __lambda__ () {
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
			return lista_ordem.append ($ (this).data ('id_turma'));
		}));
		window.PhanterPWA.GET ('api', 'signforms', 'phanterpwa-form-turma', __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.depois_de_assinar_ordenacao_turma (data, ajax_status, id_turma, lista_ordem);
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
			self.lista_de_turmas = json.data.turmas;
			self.data_set_series = json.data.series;
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
		window.PhanterPWA.ApiServer.GET ('api', 'turmas', self.id_escola, self.ano_letivo, __kwargtrans__ ({onComplete: self.after_get}));
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
export var TurmasDetalhado =  __class__ ('TurmasDetalhado', [helpers.XmlConstructor], {
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
		self.ano_letivo = ano_letivo;
		self.index_instance = index_instance;
		helpers.XmlConstructor.__init__ (self, 'div', false, self.initial_xml (), __kwargtrans__ ({_class: 'lista_de_turmas_detalhado'}));
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV (self.ano_letivo, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('TURMAS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('DETALHADO', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-turmas', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
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
		self.tem_alunos = true;
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.id_escola);
		var html = DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (H2 ('AQUI É POSSÍVEL VISUALIZAR MAIS DETALHES SOBRE A TURMA, COMO POR EXEMPLO OS ALUNOS.'), P ('Para adicionar um aluno que foi matriculado em uma turma, basta clicar em ', I (__kwargtrans__ ({_class: 'fas fa-user-graduate'})), '.'), P ('Além de visualizar a lista de alunos, pode-se ver as disciplinas e os respectivos', ' professores em ', I (__kwargtrans__ ({_class: 'fas fa-chalkboard-teacher'})), '. Observe que é possível', 'ordenar os alunos arrastando-os.'), P ('Já as outras opções são atalhos para o Horário, Diário de Notas, Ficha Avaliativa ', 'e o Diário de Faltas.'), __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), DIV (__kwargtrans__ ({_id: 'modal_turma_case'})), DIV (__kwargtrans__ ({_id: 'modal_disciplinas_professores'})), DIV (__kwargtrans__ ({_id: 'modal_visualizar_aluno'})), __kwargtrans__ ({_class: 'turmas-turmas-container'}));
		if (self.lista_de_turmas !== undefined) {
			for (var s of self.lista_de_turmas) {
				html.append (DIV (self.xml_card (s), __kwargtrans__ ({_id: 'turma_e_turmas_{0}'.format (s.id)})));
			}
			html.append (DIV (__kwargtrans__ ({_id: 'modal_remover_matricula_da_turma_container'})));
			html.append (DIV (__kwargtrans__ ({_id: 'modal_deletar_matricula_container'})));
			html.html_to ('#content-turmas');
			self.binds_painel_da_turma ();
		}
	});},
	get xml_card () {return __get__ (this, function (self, data_turma) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data_turma': var data_turma = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var table = XTABLE ('alunos-table-{0}'.format (data_turma.id), XTRH ('alunos-table-head-{0}'.format (data_turma.id), 'Foto', 'Nº', 'Nome', 'Data de Nascimento', 'Endereço'));
		var linha_serie = [];
		var cont_alunos = 0;
		for (var x of data_turma.alunos) {
			cont_alunos++;
			if (data_turma.multisseriado) {
				if (!__in__ (x.series.serie, linha_serie)) {
					var serie_th = TR (TH (x.series.serie, __kwargtrans__ ({_colspan: '6', _style: 'text-align: center; background-color: #d5d5d5;'})));
					table.append (serie_th);
					linha_serie.append (x.series.serie);
				}
			}
			var data_de_nascimento_formated = '';
			if (x.alunos.data_nasc !== null && x.alunos.data_nasc !== undefined) {
				var data_de_nascimento_formated = validations.format_iso_date_datetime (x.alunos.data_nasc, 'dd/MM/yyyy', 'date');
			}
			var endereco_imagem_aluno = '/static/{0}/images/user.png'.format (window.PhanterPWA.VERSIONING);
			if (x.alunos.foto3x4 !== null && x.alunos.foto3x4 !== undefined) {
				var endereco_imagem_aluno = '{0}/api/alunos/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, x.alunos.foto3x4);
			}
			table.append (XTRD ('turma-table-data-{0}'.format (x.alunos.id), DIV (IMG (__kwargtrans__ ({_src: endereco_imagem_aluno, _style: 'width:25px; height:25px; border-radius: 100%;'}))), validations.zfill (cont_alunos, 2), x.alunos.aluno, data_de_nascimento_formated, x.alunos.endereco, widgets.MenuBox ('menu_alunos_{0}'.format (x.alunos.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Visualizar Aluno', __kwargtrans__ (dict ({'_class': 'botao_visualizar_aluno wave_on_click', '_data-id_aluno': x.alunos.id}))), widgets.MenuOption ('Editar Aluno', __kwargtrans__ (dict ({'_class': 'botao_editar_aluno wave_on_click', '_href': window.PhanterPWA.XWAY ('alunos', x.alunos.id, 'editar', __kwargtrans__ (dict ({'_turmas-detalhadas': '/turmas/{0}/{1}/detalhado/'.format (self.id_escola, self.ano_letivo)})))}))), widgets.MenuOption ('Editar Matrícula', __kwargtrans__ (dict ({'_class': 'botao_editar_aluno wave_on_click', '_href': window.PhanterPWA.XWAY ('matricula', x.alunos.id, 'aluno-conferido', self.id_escola, self.ano_letivo, __kwargtrans__ (dict ({'_turmas-detalhadas': '/turmas/{0}/{1}/detalhado/'.format (self.id_escola, self.ano_letivo)})))}))), widgets.MenuOption ('Deletar Matrícula', __kwargtrans__ (dict ({'_class': 'botao_deletar_matricula wave_on_click', '_data-id_matricula': x.matriculas.id}))), widgets.MenuOption ('Remover de Turma', __kwargtrans__ (dict ({'_class': 'botao_remover_matricula_da_turma wave_on_click', '_data-id_matricula': x.matriculas.id}))), __kwargtrans__ (dict ({'onOpen': (function __lambda__ () {
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
			})}))), __kwargtrans__ (dict ({'drag_and_drop': true, 'after_drop': self.after_drop, 'drop_if': (function __lambda__ (ori, tar) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'ori': var ori = __allkwargs0__ [__attrib0__]; break;
								case 'tar': var tar = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				return (str ($ (ori).data ('id_serie')) == str ($ (tar).data ('id_serie')) && $ (ori).data ('id_turma') == str ($ (tar).data ('id_turma')) ? true : false);
			}), '_class': 'linha_turma_turma', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id, '_data-id_aluno': x.alunos.id, '_data-id_serie': x.series.id, '_data-id_matricula': x.matriculas.id}))));
		}
		var disabled = null;
		if (cont_alunos == 0) {
			var disabled = 'disabled';
			self.tem_turma = false;
			var table = DIV ('NÃO HÁ ALUNOS NESTA TURMA', __kwargtrans__ ({_style: 'color: red; padding: 100px 0; text-align: center;'}));
		}
		var card = DIV (LABEL (data_turma.turma, ' (', data_turma.quant_alunos, ' Alunos)', __kwargtrans__ ({_for: 'phanterpwa-card-panel-control-{0}'.format (data_turma.id)})), DIV (DIV (DIV (DIV (table, __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (A (I (__kwargtrans__ ({_class: 'fas fa-puzzle-piece'})), __kwargtrans__ (dict ({'_class': 'botao_separar_turma icon_button', '_title': 'Separar esta turma', '_href': window.PhanterPWA.XWAY ('turmas', self.id_escola, self.ano_letivo, 'especifico', data_turma.id, __kwargtrans__ (dict ({'_turmas-detalhadas': '/turmas/{0}/{1}/detalhado/'.format (self.id_escola, self.ano_letivo)})))}))), DIV (I (__kwargtrans__ ({_class: 'fas fa-user-graduate'})), __kwargtrans__ (dict ({'_class': 'botao_alunos icon_button actived', '_title': 'Adicione alunos à turma', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id}))), A (I (__kwargtrans__ ({_class: 'fas fa-table'})), __kwargtrans__ (dict ({'_class': 'botao_diario_notas icon_button', '_title': 'Diário de Notas da Turma', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id, '_disabled': disabled, '_href': window.PhanterPWA.XWAY ('diario-de-notas', self.id_escola, self.ano_letivo, data_turma.id, __kwargtrans__ (dict ({'_turma': data_turma.turma})))}))), A (I (__kwargtrans__ ({_class: 'fas fa-clipboard-list'})), __kwargtrans__ (dict ({'_class': 'botao_ficha_avaliativa icon_button', '_title': 'Ficha Avaliativa', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id, '_disabled': disabled, '_href': window.PhanterPWA.XWAY ('ficha-avaliativa', self.id_escola, self.ano_letivo, data_turma.id, __kwargtrans__ (dict ({'_retornar': 'turmas-detalhadas'})))}))), DIV (I (__kwargtrans__ ({_class: 'fas fa-calendar-check'})), __kwargtrans__ (dict ({'_class': 'botao_faltas icon_button', '_title': 'Registro de Presença', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id, '_disabled': disabled}))), DIV (I (__kwargtrans__ ({_class: 'fas fa-chalkboard-teacher'})), __kwargtrans__ (dict ({'_class': 'botao_professores icon_button', '_title': 'Disciplinas e seus respectivos professores', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id}))), DIV (I (__kwargtrans__ ({_class: 'fas fa-clock'})), __kwargtrans__ (dict ({'_class': 'botao_horario icon_button', '_title': 'Horário da Turma', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id, '_disabled': 'disabled'}))), DIV (I (__kwargtrans__ ({_class: 'fas fa-sort-alpha-up'})), __kwargtrans__ (dict ({'_class': 'botao_auto_ordernar icon_button', '_title': 'Ordenar alunos automaticamente', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id}))), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper has_buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_id: 'phanterpwa-card-panel-control-{0}'.format (data_turma.id), _class: 'phanterpwa-card-panel-control'}));
		return card;
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
		$ ('.botao_remover_matricula_da_turma').off ('click.botao_remover_matricula').on ('click.botao_remover_matricula', (function __lambda__ () {
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
			return self.modal_confirmar_remover_matricula_da_turma (this);
		}));
		$ ('.botao_deletar_matricula').off ('click.botao_revogar_matricula').on ('click.botao_revogar_matricula', (function __lambda__ () {
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
			return self.modal_confirmar_deletar_matricula (this);
		}));
	});},
	get binds_painel_da_turma () {return __get__ (this, function (self) {
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
		$ ('.botao_alunos').off ('click.add_alunos').on ('click.add_alunos', (function __lambda__ () {
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
			return self.get_alunos_remanejar (this);
		}));
		$ ('.botao_professores').off ('click.modal_disciplinas_professores').on ('click.modal_disciplinas_professores', (function __lambda__ () {
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
			return self.get_disciplinas_professores (this);
		}));
		$ ('.botao_auto_ordernar').off ('click.botao_auto_ordernar').on ('click.botao_auto_ordernar', (function __lambda__ () {
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
			return self.ordenagem_automatica (this);
		}));
	});},
	get ordenagem_automatica () {return __get__ (this, function (self, widget_instance) {
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
		var id_turma = $ (widget_instance).data ('id_turma');
		window.PhanterPWA.ApiServer.PUT ('api', 'turma', self.id_escola, self.ano_letivo, 'auto-ordenar', id_turma, __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.update_turma (data, ajax_status, id_turma);
		})}));
	});},
	get deletar_turma () {return __get__ (this, function (self, widget_instance) {
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
		var id_turma = $ (widget_instance).data ('id_turma');
		window.PhanterPWA.ApiServer.DELETE (__kwargtrans__ (dict ({'url_args': ['api', 'turma', self.id_escola, self.ano_letivo, 'turma', id_turma], 'onComplete': (function __lambda__ (data, ajax_status) {
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
			return self.update_turma (data, ajax_status, id_turma);
		})})));
	});},
	get after_drop () {return __get__ (this, function (self, ev, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'ev': var ev = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var t_ordem = list ();
		var id_turma = $ (el).data ('id_turma');
		var id_matricula = $ (el).data ('id_matricula');
		$ ('#phanterpwa-card-panel-control-{0}'.format (id_turma)).find ('.phanterpwa-widget-table-data').each ((function __lambda__ () {
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
			return t_ordem.append ($ (this).data ('id_matricula'));
		}));
		var lista_ordem = [];
		for (var li of t_ordem) {
			if (!__in__ (li, lista_ordem)) {
				lista_ordem.append (li);
			}
		}
		window.PhanterPWA.GET ('api', 'signforms', 'phanterpwa-form-turma', __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.depois_de_assinar_ordenacao_aluno (data, ajax_status, id_turma, id_matricula, lista_ordem);
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
			self.lista_de_turmas = json.data.turmas;
			self.data_set_turmas = json.data.data_set_turmas;
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
		window.PhanterPWA.ApiServer.GET ('api', 'turmas', self.id_escola, self.ano_letivo, 'detalhadas', __kwargtrans__ ({onComplete: self.after_get}));
	});},
	get update_turma () {return __get__ (this, function (self, data, ajax_status, id_turma, json) {
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
						case 'json': var json = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var json = data.responseJSON;
		if (ajax_status == 'success') {
			for (var x of json.data.turmas) {
				var card = self.xml_card (x, x.id);
				card.html_to ('#turma_e_turmas_{0}'.format (x.id));
			}
			self.binds_painel_da_turma ();
		}
	});},
	get depois_de_assinar_ordenacao_aluno () {return __get__ (this, function (self, data, ajax_status, id_turma, id_matricula, lista_de_matriculas) {
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
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
						case 'lista_de_matriculas': var lista_de_matriculas = __allkwargs0__ [__attrib0__]; break;
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
			formdata.append ('matriculas', JSON.stringify (lista_de_matriculas));
			window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'turma', self.id_escola, self.ano_letivo, 'ordenar', id_turma, id_matricula], 'form_data': formdata, 'onComplete': (function __lambda__ (data, ajax_status) {
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
				return self.update_turma (data, ajax_status, id_turma);
			})})));
		}
	});},
	get get_alunos_remanejar () {return __get__ (this, function (self, widget_instance) {
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
		var id_turma = $ (widget_instance).data ('id_turma');
		window.PhanterPWA.GET ('api', 'turma', self.id_escola, self.ano_letivo, 'remanejar', id_turma, __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.modal_add_alunos (data, ajax_status, id_turma);
		})}));
	});},
	get modal_add_alunos () {return __get__ (this, function (self, data, ajax_status, id_turma) {
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
					}
				}
			}
		}
		else {
		}
		var json = data.responseJSON;
		if (ajax_status == 'success') {
			var data_turma = json.data;
			var table = XTABLE ('remanejar-table-{0}'.format (data_turma.id_turma), XTRH ('remanejar-table-head-{0}'.format (data_turma.id_turma), 'Foto', 'Nome', 'Data de Nascimento', 'Turma Atual', 'Endereço'));
			var cont_alunos = 0;
			var titulo_adc = false;
			for (var x of data_turma.alunos_sem_turmas) {
				cont_alunos++;
				var data_de_nascimento_formated = '';
				if (x.alunos.data_nasc !== null && x.alunos.data_nasc !== undefined) {
					var data_de_nascimento_formated = validations.format_iso_date_datetime (x.alunos.data_nasc, 'dd/MM/yyyy', 'date');
				}
				var endereco_imagem_aluno = '/static/{0}/images/user.png'.format (window.PhanterPWA.VERSIONING);
				if (x.alunos.foto3x4 !== null && x.alunos.foto3x4 !== undefined) {
					var endereco_imagem_aluno = '{0}/api/alunos/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, x.alunos.foto3x4);
				}
				if (!(titulo_adc)) {
					table.append (TR (TD ('ALUNOS SEM TURMA', __kwargtrans__ ({_colspan: 5, _style: 'text-align: center; background-color: #d5d5d5;'}))));
					var titulo_adc = true;
				}
				table.append (XTRD ('turma-table-data-remaneja-sem_turma-{0}'.format (x.alunos.id), TD (DIV (IMG (__kwargtrans__ ({_src: endereco_imagem_aluno, _style: 'width:25px; height:25px; border-radius: 100%;'})))), TD (x.alunos.aluno), TD (data_de_nascimento_formated), I (__kwargtrans__ ({_class: 'fas fa-times-circle', _style: 'color: red;'})), TD (x.alunos.endereco), __kwargtrans__ (dict ({'drag_and_drop': false, '_class': 'linha_add_aluno_remanejar link', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id_turma, '_data-id_aluno': x.alunos.id, '_data-id_serie': x.series.id, '_data-id_matricula': x.matriculas.id}))));
			}
			var titulo_alun = false;
			for (var x of data_turma.alunos_outras_turmas) {
				cont_alunos++;
				var data_de_nascimento_formated = '';
				if (x.alunos.data_nasc !== null && x.alunos.data_nasc !== undefined) {
					var data_de_nascimento_formated = validations.format_iso_date_datetime (x.alunos.data_nasc, 'dd/MM/yyyy', 'date');
				}
				var endereco_imagem_aluno = '/static/{0}/images/user.png'.format (window.PhanterPWA.VERSIONING);
				if (x.alunos.foto3x4 !== null && x.alunos.foto3x4 !== undefined) {
					var endereco_imagem_aluno = '{0}/api/alunos/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, x.alunos.foto3x4);
				}
				if (!(titulo_alun)) {
					table.append (TR (TD ('ALUNOS EM OUTRA TURMA', __kwargtrans__ ({_colspan: 5, _style: 'text-align: center; background-color: #d5d5d5;'}))));
					var titulo_alun = true;
				}
				table.append (XTRD ('turma-table-data-remanejar-tem_turma-{0}'.format (x.alunos.id), TD (DIV (IMG (__kwargtrans__ ({_src: endereco_imagem_aluno, _style: 'width:25px; height:25px; border-radius: 100%;'})))), TD (x.alunos.aluno), TD (data_de_nascimento_formated), TD (x.turmas.turma), TD (x.alunos.endereco), __kwargtrans__ (dict ({'drag_and_drop': false, '_class': 'linha_add_aluno_remanejar link', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id_turma, '_data-id_aluno': x.alunos.id, '_data-id_serie': x.series.id, '_data-id_matricula': x.matriculas.id}))));
			}
			if (cont_alunos > 0) {
				var content = DIV (table, forms.FormWidget ('turma', 'id_turma', __kwargtrans__ (dict ({'value': data_turma.id_turma, 'type': 'hidden', 'form': 'turma'}))), __kwargtrans__ ({_class: 'p-row'}));
				self.modal_remanejar = modal.Modal ('#modal_turma_case', __kwargtrans__ (dict ({'title': CONCATENATE (DIV ('REMANEJAR ALUNOS PARA A TURMA ', STRONG (str (data_turma.turma).upper ())), DIV ('Basta clicar sobre o(a) aluno(a) para ele ser remanejado', __kwargtrans__ ({_style: 'color: red; font-size: 0.7em;'}))), 'content': content, 'form': 'turma'})));
				self.modal_remanejar.open ();
				$ ('.linha_add_aluno_remanejar').off ('click.adicionar_aluno_na_turma').on ('click.adicionar_aluno_na_turma', (function __lambda__ () {
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
					return self._on_click_add_aluno_turma (this);
				}));
				forms.SignForm ('#form-turma', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
					return forms.ValidateForm ('#form-turma');
				})}));
			}
			else {
				window.PhanterPWA.flash ('Não há alunos matriculados para a série da turma');
			}
		}
	});},
	get _on_click_add_aluno_turma () {return __get__ (this, function (self, widget_instance) {
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
		var id_matricula = $ (widget_instance).data ('id_matricula');
		var id_turma = $ (widget_instance).data ('id_turma');
		$ (widget_instance).fadeOut ();
		var form_remanejar = $ ('#form-turma') [0];
		var form_remanejar = new FormData (form_remanejar);
		window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'turma', self.id_escola, self.ano_letivo, 'remanejar', id_turma, id_matricula], 'form_data': form_remanejar, 'onComplete': (function __lambda__ (data, ajax_status) {
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
			return self.update_turma (data, ajax_status, id_turma);
		})})));
	});},
	get modal_confirmar_remover_matricula_da_turma () {return __get__ (this, function (self, el) {
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
		var content = DIV (P ('Atenção, o(a) aluno(a) sairá da turma permanentemente. Se ele possuir notas, faltas, pareceres, etc. Ou seja, ', 'informações dele vinculados a esta turma, tudo será perdido.'), P ('Tem certeza que deseja remover esta matrícula?'), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.FormButton ('remover_matricula_da_turma_sim', 'Sim', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), forms.FormButton ('remover_matricula_da_turma_nao', 'Não', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_remover_matricula_da_turma = modal.Modal ('#modal_remover_matricula_da_turma_container', __kwargtrans__ (dict ({'title': 'Retirar aluno da turma', 'content': content, 'footer': footer, 'form': 'remover_matricula_da_turma'})));
		self.modal_remover_matricula_da_turma.open ();
		$ ('#phanterpwa-widget-form-form_button-remover_matricula_da_turma_sim').off ('click.adicionar_remover_matricula_da_turma_sim').on ('click.adicionar_remover_matricula_da_turma_sim', (function __lambda__ () {
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
			return self._on_click_remover_matricula_da_turma (id_matricula);
		}));
		$ ('#phanterpwa-widget-form-form_button-remover_matricula_da_turma_nao').off ('click.adicionar_remover_matricula_da_turma_nao').on ('click.adicionar_remover_matricula_da_turma_nao', (function __lambda__ () {
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
			return self.modal_remover_matricula_da_turma.close ();
		}));
	});},
	get _on_click_remover_matricula_da_turma () {return __get__ (this, function (self, id_matricula) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.PUT ('api', 'matricula', 'remover-da-turma', self.id_escola, self.ano_letivo, id_matricula, __kwargtrans__ ({onComplete: self.depois_de_deletar_ou_retirar}));
		self.modal_remover_matricula_da_turma.close ();
	});},
	get modal_confirmar_deletar_matricula () {return __get__ (this, function (self, el) {
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
		var content = DIV (P ('Atenção, a matrícula do  aluno será deletada permanentemente, se ', 'o mesmo possuir notas, faltas, ficha individual, boletim, etc. Tudo isto será perdido, inclusive o mesmo sairá da turma permanentemente.'), P ('Tem certeza que deseja deletar esta matrícula?'), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.FormButton ('deletar_matricula_sim', 'Sim', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), forms.FormButton ('deletar_matricula_nao', 'Não', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_deletar_matricula = modal.Modal ('#modal_deletar_matricula_container', __kwargtrans__ (dict ({'title': 'Deletar Matrícula do(a) aluno(a)', 'content': content, 'footer': footer, 'form': 'deletar_matricula'})));
		self.modal_deletar_matricula.open ();
		$ ('#phanterpwa-widget-form-form_button-deletar_matricula_sim').off ('click.adicionar_deletar_matricula_sim').on ('click.adicionar_deletar_matricula_sim', (function __lambda__ () {
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
			return self._on_click_deletar_matricula (id_matricula);
		}));
		$ ('#phanterpwa-widget-form-form_button-deletar_matricula_nao').off ('click.adicionar_deletar_matricula_nao').on ('click.adicionar_deletar_matricula_nao', (function __lambda__ () {
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
			return self.modal_deletar_matricula.close ();
		}));
	});},
	get _on_click_deletar_matricula () {return __get__ (this, function (self, id_matricula) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.DELETE ('api', 'matricula', 'deletar', self.id_escola, self.ano_letivo, id_matricula, __kwargtrans__ ({onComplete: self.depois_de_deletar_ou_retirar}));
		self.modal_deletar_matricula.close ();
	});},
	get depois_de_deletar_ou_retirar () {return __get__ (this, function (self, data, ajax_status) {
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
			self._get_turmas ();
		}
	});},
	get get_disciplinas_professores () {return __get__ (this, function (self, widget_instance) {
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
		var id_turma = $ (widget_instance).data ('id_turma');
		window.PhanterPWA.GET ('api', 'turma', self.id_escola, self.ano_letivo, 'disciplinas-professores', id_turma, __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.modal_disciplinas_professores (data, ajax_status, id_turma);
		})}));
	});},
	get modal_disciplinas_professores () {return __get__ (this, function (self, data, ajax_status, id_turma) {
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
					}
				}
			}
		}
		else {
		}
		var json = data.responseJSON;
		if (ajax_status == 'success') {
			var disciplinas_turmas = json.data;
			if (disciplinas_turmas.disciplinas !== null) {
				var table = XTABLE ('disciplinas-professores-table-{0}'.format (id_turma), XTRH ('disciplinas-professores-table-head-{0}'.format (id_turma), 'Disciplina', 'Professor'));
				var cont = 0;
				for (var x of disciplinas_turmas.disciplinas) {
					cont++;
					if (disciplinas_turmas.data_set === null) {
						var professor = 'Sem vínculos de professores na escola';
					}
					else {
						var professor = forms.FormWidget ('professores-disciplinas', 'professores_disciplinas_{0}'.format (cont), __kwargtrans__ (dict ({'value': x.professor, 'label': 'Professor', 'can_empty': true, 'validators': disciplinas_turmas.validators, 'type': 'select', 'data_set': disciplinas_turmas.data_set, '_data-disciplina': x.disciplina, '_data-cont': cont, '_placeholder': 'Professor'})));
					}
					table.append (XTRD ('disciplinas-professores-table-linha-{0}'.format (cont), x.disciplina, professor, __kwargtrans__ (dict ({'drag_and_drop': false}))));
				}
				var content = DIV (table, __kwargtrans__ ({form: 'professores-disciplinas', _class: 'p-row'}));
				var footer = DIV (forms.SubmitButton ('confirma_prof_disc', 'Confirmar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
				self.modal_disc_prof = modal.Modal ('#modal_disciplinas_professores', __kwargtrans__ (dict ({'title': DIV ('LISTA DE DISCIPLINAS E SEUS RESPECTIVOS PROFESSORES'), 'content': content, 'footer': footer, 'form': 'professores-disciplinas'})));
				self.modal_disc_prof.open ();
				self.binds_modal_disc_prof (id_turma);
			}
			else {
				window.PhanterPWA.flash ('Não foi encontrada disciplinas na turma');
			}
		}
	});},
	get binds_modal_disc_prof () {return __get__ (this, function (self, id_turma) {
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
		forms.SignForm ('#form-professores-disciplinas', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-professores-disciplinas');
		})}));
		$ ('#phanterpwa-widget-form-submit_button-confirma_prof_disc').off ('click.disc_prof_sub').on ('click.disc_prof_sub', (function __lambda__ () {
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
			return self.submit_disc_prof (this, id_turma);
		}));
	});},
	get submit_disc_prof () {return __get__ (this, function (self, el, id_turma) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
						case 'id_turma': var id_turma = __allkwargs0__ [__attrib0__]; break;
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
			self.form_disc_prof = new FormData ();
			self.modal_disc_prof.close ();
			$ ('#form-professores-disciplinas').find ('.phanterpwa-widget-table-data').each ((function __lambda__ () {
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
				return self.submitar_disc_prof (this, id_turma);
			}));
			window.PhanterPWA.PUT ('api', 'turma', self.id_escola, self.ano_letivo, 'disciplinas-professores', id_turma, __kwargtrans__ ({form_data: self.form_disc_prof, onComplete: self.after_submit_disc_prof}));
		}
	});},
	get submitar_disc_prof () {return __get__ (this, function (self, el, id_turma) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
						case 'id_turma': var id_turma = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var disciplina = $ (el).find ('.phanterpwa-widget-wrapper-select').data ('disciplina');
		var cont = $ (el).find ('.phanterpwa-widget-wrapper-select').data ('cont');
		var valor = $ (el).find ("select[name='professores_disciplinas_{0}']".format (cont)).val ();
		self.form_disc_prof.append ('professores_disciplinas_{0}'.format (cont), JSON.stringify ([disciplina, valor]));
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
			var html_historico = DIV (DIV ('HISTÓRICO ESCOLAR', __kwargtrans__ ({_class: 'p-col w1p100 phanterpwa-widget-form-separator'})), __kwargtrans__ ({_class: 'historicos-conteudo'}));
			if (json.data.historico !== null && json.data.historico !== undefined) {
				for (var x of json.data.historico) {
					var html_ficha = P ('Não há ficha individual no ano de ', STRONG (x.ano_letivo), ' da serie ', STRONG (x.serie), ' na escola ', STRONG (x.escola), '.');
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
			window.PhanterPWA.flash ('Não há alunos_visualizar matriculados para a série da turma');
		}
	});}
});
export var TurmaEspecifica =  __class__ ('TurmaEspecifica', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, parent, id_escola, ano_letivo, id_turma) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'parent': var parent = __allkwargs0__ [__attrib0__]; break;
						case 'id_escola': var id_escola = __allkwargs0__ [__attrib0__]; break;
						case 'ano_letivo': var ano_letivo = __allkwargs0__ [__attrib0__]; break;
						case 'id_turma': var id_turma = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.parent = parent;
		self.id_escola = id_escola;
		self.ano_letivo = ano_letivo;
		self.id_turma = id_turma;
		var html = CONCATENATE (DIV (DIV (DIV (DIV (self.ano_letivo, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('TURMAS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('TURMA ESPECÍFICA', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-turmas', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		self.get_dados_turma (self);
	});},
	get get_dados_turma () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'turma', self.id_escola, self.ano_letivo, 'especifica', self.id_turma, __kwargtrans__ ({onComplete: self.depois_de_obter_turma}));
	});},
	get depois_de_obter_turma () {return __get__ (this, function (self, data, ajax_status) {
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
			self.data_set_turmas = json.data.data_set_turmas;
			self.tem_alunos = true;
			var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.id_escola);
			var html = DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (H2 ('AQUI É POSSÍVEL VISUALIZAR MAIS DETALHES SOBRE A TURMA, COMO POR EXEMPLO OS ALUNOS.'), P ('Para adicionar um aluno que foi matriculado em uma turma, basta clicar em ', I (__kwargtrans__ ({_class: 'fas fa-user-graduate'})), '.'), P ('Além de visualizar a lista de alunos, pode-se ver as disciplinas e os respectivos', ' professores em ', I (__kwargtrans__ ({_class: 'fas fa-chalkboard-teacher'})), '. Observe que é possível', 'ordenar os alunos arrastando-os.'), P ('Já as outras opções são atalhos para o Horário, Diário de Notas, Ficha Avaliativa ', 'e o Diário de Faltas.'), __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), self.xml_card (json.data.turma), DIV (__kwargtrans__ ({_id: 'modal_turma_case'})), DIV (__kwargtrans__ ({_id: 'modal_disciplinas_professores'})), DIV (__kwargtrans__ ({_id: 'modal_visualizar_aluno'})), __kwargtrans__ ({_class: 'turmas-turmas-container'}));
			html.append (DIV (__kwargtrans__ ({_id: 'modal_remover_matricula_da_turma_detalhe_container'})));
			html.append (DIV (__kwargtrans__ ({_id: 'modal_deletar_matricula_detalhe_container'})));
			html.html_to ('#content-turmas');
			self.binds_painel_da_turma ();
		}
	});},
	get xml_card () {return __get__ (this, function (self, data_turma) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data_turma': var data_turma = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var table = XTABLE ('alunos-table-{0}'.format (data_turma.id), XTRH ('alunos-table-head-{0}'.format (data_turma.id), 'Foto', 'Nº', 'Nome', 'Data de Nascimento', 'Endereço'));
		var linha_serie = [];
		var cont_alunos = 0;
		for (var x of data_turma.alunos) {
			cont_alunos++;
			if (data_turma.multisseriado) {
				if (!__in__ (x.series.serie, linha_serie)) {
					var serie_th = TR (TH (x.series.serie, __kwargtrans__ ({_colspan: '6', _style: 'text-align: center; background-color: #d5d5d5;'})));
					table.append (serie_th);
					linha_serie.append (x.series.serie);
				}
			}
			var data_de_nascimento_formated = '';
			if (x.alunos.data_nasc !== null && x.alunos.data_nasc !== undefined) {
				var data_de_nascimento_formated = validations.format_iso_date_datetime (x.alunos.data_nasc, 'dd/MM/yyyy', 'date');
			}
			var endereco_imagem_aluno = '/static/{0}/images/user.png'.format (window.PhanterPWA.VERSIONING);
			if (x.alunos.foto3x4 !== null && x.alunos.foto3x4 !== undefined) {
				var endereco_imagem_aluno = '{0}/api/alunos/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, x.alunos.foto3x4);
			}
			table.append (XTRD ('turma-table-data-{0}'.format (x.alunos.id), DIV (IMG (__kwargtrans__ ({_src: endereco_imagem_aluno, _style: 'width:25px; height:25px; border-radius: 100%;'}))), validations.zfill (cont_alunos, 2), x.alunos.aluno, data_de_nascimento_formated, x.alunos.endereco, widgets.MenuBox ('menu_alunos_{0}'.format (x.alunos.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Visualizar Aluno', __kwargtrans__ (dict ({'_class': 'botao_visualizar_aluno wave_on_click', '_data-id_aluno': x.alunos.id}))), widgets.MenuOption ('Editar Aluno', __kwargtrans__ (dict ({'_class': 'botao_editar_aluno wave_on_click', '_href': window.PhanterPWA.XWAY ('alunos', x.alunos.id, 'editar', __kwargtrans__ (dict ({'_turmas-detalhadas': '/turmas/{0}/{1}/detalhado/'.format (self.id_escola, self.ano_letivo)})))}))), widgets.MenuOption ('Editar Matrícula', __kwargtrans__ (dict ({'_class': 'botao_editar_aluno wave_on_click', '_href': window.PhanterPWA.XWAY ('matricula', x.alunos.id, 'aluno-conferido', self.id_escola, self.ano_letivo, __kwargtrans__ (dict ({'_turmas-detalhadas': '/turmas/{0}/{1}/detalhado/'.format (self.id_escola, self.ano_letivo)})))}))), widgets.MenuOption ('Deletar Matrícula', __kwargtrans__ (dict ({'_class': 'botao_deletar_matricula wave_on_click', '_data-id_matricula': x.matriculas.id}))), widgets.MenuOption ('Remover de Turma', __kwargtrans__ (dict ({'_class': 'botao_remover_matricula_da_turma wave_on_click', '_data-id_matricula': x.matriculas.id}))), __kwargtrans__ (dict ({'onOpen': (function __lambda__ () {
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
			})}))), __kwargtrans__ (dict ({'drag_and_drop': true, 'after_drop': self.after_drop, 'drop_if': (function __lambda__ (ori, tar) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'ori': var ori = __allkwargs0__ [__attrib0__]; break;
								case 'tar': var tar = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				return (str ($ (ori).data ('id_serie')) == str ($ (tar).data ('id_serie')) && $ (ori).data ('id_turma') == str ($ (tar).data ('id_turma')) ? true : false);
			}), '_class': 'linha_turma_turma', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id, '_data-id_aluno': x.alunos.id, '_data-id_serie': x.series.id, '_data-id_matricula': x.matriculas.id}))));
		}
		var disabled = null;
		if (cont_alunos == 0) {
			var disabled = 'disabled';
			self.tem_turma = false;
			var table = DIV ('NÃO HÁ ALUNOS NESTA TURMA', __kwargtrans__ ({_style: 'color: red; padding: 100px 0; text-align: center;'}));
		}
		var card = DIV (LABEL (data_turma.turma, ' (', data_turma.quant_alunos, ' Alunos)', __kwargtrans__ ({_for: 'phanterpwa-card-panel-control-{0}'.format (data_turma.id)})), DIV (DIV (DIV (DIV (table, __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-user-graduate'})), __kwargtrans__ (dict ({'_class': 'botao_alunos icon_button actived', '_title': 'Adicione alunos à turma', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id}))), A (I (__kwargtrans__ ({_class: 'fas fa-table'})), __kwargtrans__ (dict ({'_class': 'botao_diario_notas icon_button', '_title': 'Diário de Notas da Turma', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id, '_disabled': disabled, '_href': window.PhanterPWA.XWAY ('diario-de-notas', self.id_escola, self.ano_letivo, data_turma.id, __kwargtrans__ (dict ({'_retornar': 'turma-especifica'})))}))), A (I (__kwargtrans__ ({_class: 'fas fa-clipboard-list'})), __kwargtrans__ (dict ({'_class': 'botao_ficha_avaliativa icon_button', '_title': 'Ficha Avaliativa', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id, '_disabled': disabled, '_href': window.PhanterPWA.XWAY ('ficha-avaliativa', self.id_escola, self.ano_letivo, data_turma.id, __kwargtrans__ (dict ({'_retornar': 'turma-especifica'})))}))), DIV (I (__kwargtrans__ ({_class: 'fas fa-calendar-check'})), __kwargtrans__ (dict ({'_class': 'botao_faltas icon_button', '_title': 'Registro de Presença', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id, '_disabled': disabled}))), DIV (I (__kwargtrans__ ({_class: 'fas fa-chalkboard-teacher'})), __kwargtrans__ (dict ({'_class': 'botao_professores icon_button', '_title': 'Disciplinas e seus respectivos professores', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id}))), DIV (I (__kwargtrans__ ({_class: 'fas fa-clock'})), __kwargtrans__ (dict ({'_class': 'botao_horario icon_button', '_title': 'Horário da Turma', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id, '_disabled': 'disabled'}))), DIV (I (__kwargtrans__ ({_class: 'fas fa-sort-alpha-up'})), __kwargtrans__ (dict ({'_class': 'botao_auto_ordernar icon_button', '_title': 'Ordenar alunos automaticamente', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id}))), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper has_buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_id: 'phanterpwa-card-panel-control-{0}'.format (data_turma.id), _class: 'phanterpwa-card-panel-control'}));
		return card;
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
		$ ('.botao_remover_matricula_da_turma').off ('click.botao_remover_matricula').on ('click.botao_remover_matricula', (function __lambda__ () {
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
			return self.modal_confirmar_remover_matricula_da_turma (this);
		}));
		$ ('.botao_deletar_matricula').off ('click.botao_revogar_matricula').on ('click.botao_revogar_matricula', (function __lambda__ () {
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
			return self.modal_confirmar_deletar_matricula (this);
		}));
	});},
	get binds_painel_da_turma () {return __get__ (this, function (self) {
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
		$ ('.botao_alunos').off ('click.add_alunos').on ('click.add_alunos', (function __lambda__ () {
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
			return self.get_alunos_remanejar (this);
		}));
		$ ('.botao_professores').off ('click.modal_disciplinas_professores').on ('click.modal_disciplinas_professores', (function __lambda__ () {
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
			return self.get_disciplinas_professores (this);
		}));
		$ ('.botao_auto_ordernar').off ('click.botao_auto_ordernar').on ('click.botao_auto_ordernar', (function __lambda__ () {
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
			return self.ordenagem_automatica (this);
		}));
	});},
	get ordenagem_automatica () {return __get__ (this, function (self, widget_instance) {
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
		var id_turma = $ (widget_instance).data ('id_turma');
		window.PhanterPWA.ApiServer.PUT ('api', 'turma', self.id_escola, self.ano_letivo, 'auto-ordenar', id_turma, __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.update_turma (data, ajax_status, id_turma);
		})}));
	});},
	get deletar_turma () {return __get__ (this, function (self, widget_instance) {
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
		var id_turma = $ (widget_instance).data ('id_turma');
		var id_turma = $ (widget_instance).data ('id_turma');
		window.PhanterPWA.ApiServer.DELETE (__kwargtrans__ (dict ({'url_args': ['api', 'turma', self.id_escola, self.ano_letivo, 'turma', id_turma], 'onComplete': (function __lambda__ (data, ajax_status) {
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
			return self.update_turma (data, ajax_status, id_turma);
		})})));
	});},
	get after_drop () {return __get__ (this, function (self, ev, el) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'ev': var ev = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var t_ordem = list ();
		var id_turma = $ (el).data ('id_turma');
		var id_matricula = $ (el).data ('id_matricula');
		$ ('#phanterpwa-card-panel-control-{0}'.format (id_turma)).find ('.phanterpwa-widget-table-data').each ((function __lambda__ () {
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
			return t_ordem.append ($ (this).data ('id_matricula'));
		}));
		var lista_ordem = [];
		for (var li of t_ordem) {
			if (!__in__ (li, lista_ordem)) {
				lista_ordem.append (li);
			}
		}
		window.PhanterPWA.GET ('api', 'signforms', 'phanterpwa-form-turma', __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.depois_de_assinar_ordenacao_aluno (data, ajax_status, id_turma, id_matricula, lista_ordem);
		})}));
	});},
	get update_turma () {return __get__ (this, function (self, data, ajax_status, id_turma, json) {
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
						case 'json': var json = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var json = data.responseJSON;
		if (ajax_status == 'success') {
			for (var x of json.data.turmas) {
				var card = self.xml_card (x, x.id);
				card.html_to ('#turma_e_turmas_{0}'.format (x.id));
			}
			self.binds_painel_da_turma ();
		}
	});},
	get depois_de_assinar_ordenacao_aluno () {return __get__ (this, function (self, data, ajax_status, id_turma, id_matricula, lista_de_matriculas) {
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
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
						case 'lista_de_matriculas': var lista_de_matriculas = __allkwargs0__ [__attrib0__]; break;
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
			formdata.append ('matriculas', JSON.stringify (lista_de_matriculas));
			window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'turma', self.id_escola, self.ano_letivo, 'ordenar', id_turma, id_matricula], 'form_data': formdata, 'onComplete': (function __lambda__ (data, ajax_status) {
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
				return self.update_turma (data, ajax_status, id_turma);
			})})));
		}
	});},
	get get_alunos_remanejar () {return __get__ (this, function (self, widget_instance) {
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
		var id_turma = $ (widget_instance).data ('id_turma');
		window.PhanterPWA.GET ('api', 'turma', self.id_escola, self.ano_letivo, 'remanejar', id_turma, __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.modal_add_alunos (data, ajax_status, id_turma);
		})}));
	});},
	get modal_add_alunos () {return __get__ (this, function (self, data, ajax_status, id_turma) {
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
					}
				}
			}
		}
		else {
		}
		var json = data.responseJSON;
		if (ajax_status == 'success') {
			var data_turma = json.data;
			var table = XTABLE ('remanejar-table-{0}'.format (data_turma.id_turma), XTRH ('remanejar-table-head-{0}'.format (data_turma.id_turma), 'Foto', 'Nome', 'Data de Nascimento', 'Turma Atual', 'Endereço'));
			var cont_alunos = 0;
			var titulo_adc = false;
			for (var x of data_turma.alunos_sem_turmas) {
				cont_alunos++;
				var data_de_nascimento_formated = '';
				if (x.alunos.data_nasc !== null && x.alunos.data_nasc !== undefined) {
					var data_de_nascimento_formated = validations.format_iso_date_datetime (x.alunos.data_nasc, 'dd/MM/yyyy', 'date');
				}
				var endereco_imagem_aluno = '/static/{0}/images/user.png'.format (window.PhanterPWA.VERSIONING);
				if (x.alunos.foto3x4 !== null && x.alunos.foto3x4 !== undefined) {
					var endereco_imagem_aluno = '{0}/api/alunos/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, x.alunos.foto3x4);
				}
				if (!(titulo_adc)) {
					table.append (TR (TD ('ALUNOS SEM TURMA', __kwargtrans__ ({_colspan: 5, _style: 'text-align: center; background-color: #d5d5d5;'}))));
					var titulo_adc = true;
				}
				table.append (XTRD ('turma-table-data-remaneja-sem_turma-{0}'.format (x.alunos.id), TD (DIV (IMG (__kwargtrans__ ({_src: endereco_imagem_aluno, _style: 'width:25px; height:25px; border-radius: 100%;'})))), TD (x.alunos.aluno), TD (data_de_nascimento_formated), I (__kwargtrans__ ({_class: 'fas fa-times-circle', _style: 'color: red;'})), TD (x.alunos.endereco), __kwargtrans__ (dict ({'drag_and_drop': false, '_class': 'linha_add_aluno_remanejar link', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id_turma, '_data-id_aluno': x.alunos.id, '_data-id_serie': x.series.id, '_data-id_matricula': x.matriculas.id}))));
			}
			var titulo_alun = false;
			for (var x of data_turma.alunos_outras_turmas) {
				cont_alunos++;
				var data_de_nascimento_formated = '';
				if (x.alunos.data_nasc !== null && x.alunos.data_nasc !== undefined) {
					var data_de_nascimento_formated = validations.format_iso_date_datetime (x.alunos.data_nasc, 'dd/MM/yyyy', 'date');
				}
				var endereco_imagem_aluno = '/static/{0}/images/user.png'.format (window.PhanterPWA.VERSIONING);
				if (x.alunos.foto3x4 !== null && x.alunos.foto3x4 !== undefined) {
					var endereco_imagem_aluno = '{0}/api/alunos/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, x.alunos.foto3x4);
				}
				if (!(titulo_alun)) {
					table.append (TR (TD ('ALUNOS EM OUTRA TURMA', __kwargtrans__ ({_colspan: 5, _style: 'text-align: center; background-color: #d5d5d5;'}))));
					var titulo_alun = true;
				}
				table.append (XTRD ('turma-table-data-remanejar-tem_turma-{0}'.format (x.alunos.id), TD (DIV (IMG (__kwargtrans__ ({_src: endereco_imagem_aluno, _style: 'width:25px; height:25px; border-radius: 100%;'})))), TD (x.alunos.aluno), TD (data_de_nascimento_formated), TD (x.turmas.turma), TD (x.alunos.endereco), __kwargtrans__ (dict ({'drag_and_drop': false, '_class': 'linha_add_aluno_remanejar link', '_data-id_escola': self.id_escola, '_data-id_ano_letivo': self.ano_letivo, '_data-id_turma': data_turma.id_turma, '_data-id_aluno': x.alunos.id, '_data-id_serie': x.series.id, '_data-id_matricula': x.matriculas.id}))));
			}
			if (cont_alunos > 0) {
				var content = DIV (table, forms.FormWidget ('turma', 'id_turma', __kwargtrans__ (dict ({'value': data_turma.id_turma, 'type': 'hidden', 'form': 'turma'}))), __kwargtrans__ ({_class: 'p-row'}));
				self.modal_remanejar = modal.Modal ('#modal_turma_case', __kwargtrans__ (dict ({'title': CONCATENATE (DIV ('REMANEJAR ALUNOS PARA A TURMA ', STRONG (str (data_turma.turma).upper ())), DIV ('Basta clicar sobre o(a) aluno(a) para ele(a) ser remanejado(a)', __kwargtrans__ ({_style: 'color: red; font-size: 0.7em;'}))), 'content': content, 'form': 'turma'})));
				self.modal_remanejar.open ();
				$ ('.linha_add_aluno_remanejar').off ('click.adicionar_aluno_na_turma').on ('click.adicionar_aluno_na_turma', (function __lambda__ () {
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
					return self._on_click_add_aluno_turma (this);
				}));
				forms.SignForm ('#form-turma', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
					return forms.ValidateForm ('#form-turma');
				})}));
			}
			else {
				window.PhanterPWA.flash ('Não há alunos matriculados para a série da turma');
			}
		}
	});},
	get _on_click_add_aluno_turma () {return __get__ (this, function (self, widget_instance) {
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
		var id_matricula = $ (widget_instance).data ('id_matricula');
		var id_turma = $ (widget_instance).data ('id_turma');
		$ (widget_instance).fadeOut ();
		var form_remanejar = $ ('#form-turma') [0];
		var form_remanejar = new FormData (form_remanejar);
		window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'turma', self.id_escola, self.ano_letivo, 'remanejar', id_turma, id_matricula], 'form_data': form_remanejar, 'onComplete': (function __lambda__ (data, ajax_status) {
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
			return self.update_turma (data, ajax_status, id_turma);
		})})));
	});},
	get modal_confirmar_remover_matricula_da_turma () {return __get__ (this, function (self, el) {
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
		var content = DIV (P ('Atenção, o(a) aluno(a) sairá da turma permanentemente. Se ele possuir notas, faltas, pareceres, etc. Ou seja, ', 'informações dele vinculados a esta turma, tudo será perdido.'), P ('Tem certeza que deseja remover esta matrícula?'), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.FormButton ('remover_matricula_da_turma_sim', 'Sim', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), forms.FormButton ('remover_matricula_da_turma_nao', 'Não', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_remover_matricula_da_turma = modal.Modal ('#modal_remover_matricula_da_turma_detalhe_container', __kwargtrans__ (dict ({'title': 'Retirar aluno da turma', 'content': content, 'footer': footer, 'form': 'remover_matricula_da_turma'})));
		self.modal_remover_matricula_da_turma.open ();
		$ ('#phanterpwa-widget-form-form_button-remover_matricula_da_turma_sim').off ('click.adicionar_remover_matricula_da_turma_sim').on ('click.adicionar_remover_matricula_da_turma_sim', (function __lambda__ () {
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
			return self._on_click_remover_matricula_da_turma (id_matricula);
		}));
		$ ('#phanterpwa-widget-form-form_button-remover_matricula_da_turma_nao').off ('click.adicionar_remover_matricula_da_turma_nao').on ('click.adicionar_remover_matricula_da_turma_nao', (function __lambda__ () {
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
			return self.modal_remover_matricula_da_turma.close ();
		}));
	});},
	get _on_click_remover_matricula_da_turma () {return __get__ (this, function (self, id_matricula) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.PUT ('api', 'matricula', 'remover-da-turma', self.id_escola, self.ano_letivo, id_matricula, __kwargtrans__ ({onComplete: self.depois_de_deletar_ou_retirar}));
		self.modal_remover_matricula_da_turma.close ();
	});},
	get modal_confirmar_deletar_matricula () {return __get__ (this, function (self, el) {
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
		var content = DIV (P ('Atenção, a matrícula do  aluno será deletada permanentemente, se ', 'o mesmo possuir notas, faltas, ficha individual, boletim, etc. Tudo isto será perdido, inclusive o mesmo sairá da turma permanentemente.'), P ('Tem certeza que deseja deletar esta matrícula?'), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.FormButton ('deletar_matricula_sim', 'Sim', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), forms.FormButton ('deletar_matricula_nao', 'Não', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_deletar_matricula = modal.Modal ('#modal_deletar_matricula_detalhe_container', __kwargtrans__ (dict ({'title': 'Deletar Matrícula do(a) aluno(a)', 'content': content, 'footer': footer, 'form': 'deletar_matricula'})));
		self.modal_deletar_matricula.open ();
		$ ('#phanterpwa-widget-form-form_button-deletar_matricula_sim').off ('click.adicionar_deletar_matricula_sim').on ('click.adicionar_deletar_matricula_sim', (function __lambda__ () {
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
			return self._on_click_deletar_matricula (id_matricula);
		}));
		$ ('#phanterpwa-widget-form-form_button-deletar_matricula_nao').off ('click.adicionar_deletar_matricula_nao').on ('click.adicionar_deletar_matricula_nao', (function __lambda__ () {
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
			return self.modal_deletar_matricula.close ();
		}));
	});},
	get _on_click_deletar_matricula () {return __get__ (this, function (self, id_matricula) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.DELETE ('api', 'matricula', 'deletar', self.id_escola, self.ano_letivo, id_matricula, __kwargtrans__ ({onComplete: self.depois_de_deletar_ou_retirar}));
		self.modal_deletar_matricula.close ();
	});},
	get depois_de_deletar_ou_retirar () {return __get__ (this, function (self, data, ajax_status) {
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
			self.get_dados_turma ();
		}
	});},
	get get_disciplinas_professores () {return __get__ (this, function (self, widget_instance) {
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
		var id_turma = $ (widget_instance).data ('id_turma');
		window.PhanterPWA.GET ('api', 'turma', self.id_escola, self.ano_letivo, 'disciplinas-professores', id_turma, __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.modal_disciplinas_professores (data, ajax_status, id_turma);
		})}));
	});},
	get modal_disciplinas_professores () {return __get__ (this, function (self, data, ajax_status, id_turma) {
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
					}
				}
			}
		}
		else {
		}
		var json = data.responseJSON;
		if (ajax_status == 'success') {
			var disciplinas_turmas = json.data;
			if (disciplinas_turmas.disciplinas !== null) {
				var table = XTABLE ('disciplinas-professores-table-{0}'.format (id_turma), XTRH ('disciplinas-professores-table-head-{0}'.format (id_turma), 'Disciplina', 'Professor'));
				var cont = 0;
				for (var x of disciplinas_turmas.disciplinas) {
					cont++;
					if (disciplinas_turmas.data_set === null) {
						var professor = 'Sem vínculos de professores na escola';
					}
					else {
						var professor = forms.FormWidget ('professores-disciplinas', 'professores_disciplinas_{0}'.format (cont), __kwargtrans__ (dict ({'value': x.professor, 'label': 'Professor', 'can_empty': true, 'validators': disciplinas_turmas.validators, 'type': 'select', 'data_set': disciplinas_turmas.data_set, '_data-disciplina': x.disciplina, '_data-cont': cont, '_placeholder': 'Professor'})));
					}
					table.append (XTRD ('disciplinas-professores-table-linha-{0}'.format (cont), x.disciplina, professor, __kwargtrans__ (dict ({'drag_and_drop': false}))));
				}
				var content = DIV (table, __kwargtrans__ ({form: 'professores-disciplinas', _class: 'p-row'}));
				var footer = DIV (forms.SubmitButton ('confirma_prof_disc', 'Confirmar', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
				self.modal_disc_prof = modal.Modal ('#modal_disciplinas_professores', __kwargtrans__ (dict ({'title': DIV ('LISTA DE DISCIPLINAS E SEUS RESPECTIVOS PROFESSORES'), 'content': content, 'footer': footer, 'form': 'professores-disciplinas'})));
				self.modal_disc_prof.open ();
				self.binds_modal_disc_prof (id_turma);
			}
			else {
				window.PhanterPWA.flash ('Não foi encontrada disciplinas na turma');
			}
		}
	});},
	get binds_modal_disc_prof () {return __get__ (this, function (self, id_turma) {
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
		forms.SignForm ('#form-professores-disciplinas', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-professores-disciplinas');
		})}));
		$ ('#phanterpwa-widget-form-submit_button-confirma_prof_disc').off ('click.disc_prof_sub').on ('click.disc_prof_sub', (function __lambda__ () {
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
			return self.submit_disc_prof (this, id_turma);
		}));
	});},
	get submit_disc_prof () {return __get__ (this, function (self, el, id_turma) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
						case 'id_turma': var id_turma = __allkwargs0__ [__attrib0__]; break;
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
			self.form_disc_prof = new FormData ();
			self.modal_disc_prof.close ();
			$ ('#form-professores-disciplinas').find ('.phanterpwa-widget-table-data').each ((function __lambda__ () {
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
				return self.submitar_disc_prof (this, id_turma);
			}));
			window.PhanterPWA.PUT ('api', 'turma', self.id_escola, self.ano_letivo, 'disciplinas-professores', id_turma, __kwargtrans__ ({form_data: self.form_disc_prof, onComplete: self.after_submit_disc_prof}));
		}
	});},
	get submitar_disc_prof () {return __get__ (this, function (self, el, id_turma) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'el': var el = __allkwargs0__ [__attrib0__]; break;
						case 'id_turma': var id_turma = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var disciplina = $ (el).find ('.phanterpwa-widget-wrapper-select').data ('disciplina');
		var cont = $ (el).find ('.phanterpwa-widget-wrapper-select').data ('cont');
		var valor = $ (el).find ("select[name='professores_disciplinas_{0}']".format (cont)).val ();
		self.form_disc_prof.append ('professores_disciplinas_{0}'.format (cont), JSON.stringify ([disciplina, valor]));
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
			var html_historico = DIV (DIV ('HISTÓRICO ESCOLAR', __kwargtrans__ ({_class: 'p-col w1p100 phanterpwa-widget-form-separator'})), __kwargtrans__ ({_class: 'historicos-conteudo'}));
			if (json.data.historico !== null && json.data.historico !== undefined) {
				for (var x of json.data.historico) {
					var html_ficha = P ('Não há ficha individual no ano de ', STRONG (x.ano_letivo), ' da serie ', STRONG (x.serie), ' na escola ', STRONG (x.escola), '.');
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
			window.PhanterPWA.flash ('Não há alunos_visualizar matriculados para a série da turma');
		}
	});}
});
export var DisciplinaProfessor =  __class__ ('DisciplinaProfessor', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, parent, id_escola, ano_letivo, id_turma) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'parent': var parent = __allkwargs0__ [__attrib0__]; break;
						case 'id_escola': var id_escola = __allkwargs0__ [__attrib0__]; break;
						case 'ano_letivo': var ano_letivo = __allkwargs0__ [__attrib0__]; break;
						case 'id_turma': var id_turma = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.parent = parent;
		self.id_escola = id_escola;
		self.ano_letivo = ano_letivo;
		self.id_turma = id_turma;
		var html = CONCATENATE (DIV (DIV (DIV (DIV (self.ano_letivo, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('TURMAS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('DISCIPLINAS E PROFESSORES', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-turmas', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		self.get_dados_turma (self);
	});}
});

//# sourceMappingURL=handlers.turmas.map