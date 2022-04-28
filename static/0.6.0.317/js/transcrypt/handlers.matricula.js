// Transcrypt'ed from Python, 2022-04-05 08:18:13
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as matriculas from './handlers.views.matriculas.js';
import * as anos_letivos from './handlers.anos_letivos.js';
import * as alunos from './handlers.alunos.js';
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
var __name__ = 'handlers.matricula';
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
export var P = helpers.XmlConstructor.tagger ('p');
export var TD = helpers.XmlConstructor.tagger ('td');
export var LI = helpers.XmlConstructor.tagger ('li');
export var STRONG = helpers.XmlConstructor.tagger ('strong');
export var IMG = helpers.XmlConstructor.tagger ('img', true);
export var H2 = helpers.XmlConstructor.tagger ('h2');
export var H3 = helpers.XmlConstructor.tagger ('h3');
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var I18N = helpers.I18N;
export var XTABLE = widgets.Table;
export var XML = helpers.XML;
export var XTRD = widgets.TableData;
export var XTRH = widgets.TableHead;
export var XFOOTER = widgets.TableFooterPagination;
export var TABLE = helpers.XmlConstructor.tagger ('table');
var TD = helpers.XmlConstructor.tagger ('td');
export var TR = helpers.XmlConstructor.tagger ('tr');
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
		return window.PhanterPWA.auth_user_has_role (['administrator', 'root', 'Administrador Master SME', 'Administrador Master Escola', 'Coordenação SME']);
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('MATRICULAR', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-matricula', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		var arg0 = window.PhanterPWA.Request.get_arg (0);
		var arg1 = window.PhanterPWA.Request.get_arg (1);
		var arg2 = window.PhanterPWA.Request.get_arg (2);
		var arg3 = window.PhanterPWA.Request.get_arg (3);
		var arg4 = window.PhanterPWA.Request.get_arg (4);
		var arg5 = window.PhanterPWA.Request.get_arg (5);
		if (self.request.get_arg (0) !== null) {
			self.Matricula = Matricula (self, arg0, arg1, arg2, arg3, arg4, arg5);
			var BackButton = left_bar.LeftBarButton ('back_localizar_matriculas', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'matriculas', 'position': 'top', 'ways': [(function __lambda__ (r) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'r': var r = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				return (r.startswith ('matriculas') || r.startswith ('matriculas/') ? true : false);
			})]})));
			window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
		}
		else {
			window.PhanterPWA.open_way ('matricular/');
		}
	}));}
});
export var Matricula =  __class__ ('Matricula', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, arg0, arg1, arg2, arg3, arg4, arg5) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
						case 'arg0': var arg0 = __allkwargs0__ [__attrib0__]; break;
						case 'arg1': var arg1 = __allkwargs0__ [__attrib0__]; break;
						case 'arg2': var arg2 = __allkwargs0__ [__attrib0__]; break;
						case 'arg3': var arg3 = __allkwargs0__ [__attrib0__]; break;
						case 'arg4': var arg4 = __allkwargs0__ [__attrib0__]; break;
						case 'arg5': var arg5 = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.index_instance = index_instance;
		self.arg0 = arg0;
		self.arg1 = arg1;
		self.arg2 = arg2;
		self.arg3 = arg3;
		self.arg4 = arg4;
		self.arg5 = arg5;
		if (self.arg0 == 'novo') {
			window.PhanterPWA.open_way ('alunos/novo/matricula');
		}
		else if (str (arg0).isdigit () && (arg1 === null || arg1 === undefined)) {
			var html = escolas.EscolherEscola (__kwargtrans__ ({id_target: '#content-matricula', callback_link: (function __lambda__ (id_escola) {
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
				return '#_phanterpwa:/matricula/{0}/{1}'.format (self.arg0, id_escola);
			})}));
		}
		else if (str (arg0).isdigit () && str (arg1).isdigit () && (arg2 === null || arg2 === undefined)) {
			var html = anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({id_target: '#content-matricula', callback_link: (function __lambda__ (ano) {
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
				return '#_phanterpwa:/matricula/{0}/{1}/{2}'.format (self.arg0, self.arg1, ano);
			})}));
		}
		else if (str (arg0).isdigit () && str (arg1).isdigit () && str (arg2).isdigit ()) {
			self.xml_editar_aluno ();
		}
	});},
	get xml_editar_aluno () {return __get__ (this, function (self) {
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
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.arg1);
		var arg3 = window.PhanterPWA.Request.get_arg (3);
		var arg4 = window.PhanterPWA.Request.get_arg (4);
		if (arg3 == 'editar' && str (arg4).isdigit ()) {
			self.get_form_matricula (self.arg4);
		}
		else if (arg3 == 'conferido') {
			self.get_form_matricula ();
		}
		else if (arg3 == 'social') {
			var html = DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (P ('CONFIRA ESTAS INFORMAÇÕES DO QUESTIONÁRIO SOCIAL, COM ELE PODEMOS CONHECER MELHOR O ALUNO AJUDANDO NA AÇÕES DE POLÍTICAS PÚBLICAS, COMO TRANSPORTE, SAÚDE, INTEGRAÇÃO ESCOLAR, ETC.'), P ('VOCÊ ESTÁ MATRICULANDO NO ANO LETIVO DE ', STRONG (self.arg2, __kwargtrans__ ({_style: 'text-style:bold'})), ', CASO ESTE NÃO', ' SEJA O ANO CORRETO ', A ('CLIQUE AQUI.', __kwargtrans__ ({_href: window.PhanterPWA.XWAY ('matricula', self.arg0, self.arg1), _class: 'btn btn-inline btn-inline'}))), __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'formulario_editar_aluno'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ (dict ({'_id': 'matricula-editar-aluno', '_class': 'p-row'}))), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), __kwargtrans__ ({_class: 'series-container phanterpwa-card-container'}));
			html.html_to ('#content-matricula');
			self.alunos = alunos.Social (self, self.arg0, '#formulario_editar_aluno', (function __lambda__ () {
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
				return self.process_data_social ();
			}));
		}
		else {
			var html = DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (P ('ANTES DE PROSSEGUIR COM A MATRÍCULA DO ALUNO NESTA UNIDADE ESCOLAR ', 'É IMPORTANTE VERIFICAR SE ESTÁ TUDO EM ORDEM COM SEU CADASTRO.'), P ('VOCÊ ESTÁ MATRICULANDO NO ANO LETIVO DE ', STRONG (self.arg2, __kwargtrans__ ({_style: 'text-style:bold'})), ', CASO ESTE NÃO', ' SEJA O ANO CORRETO ', A ('CLIQUE AQUI.', __kwargtrans__ ({_href: window.PhanterPWA.XWAY ('matricula', self.arg0, self.arg1), _class: 'btn btn-inline btn-inline'}))), __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'formulario_editar_aluno'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ (dict ({'_id': 'matricula-editar-aluno', '_class': 'p-row'}))), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), __kwargtrans__ ({_class: 'series-container phanterpwa-card-container'}));
			html.html_to ('#content-matricula');
			self.alunos = alunos.Aluno (self, self.arg0, 'editar', '#formulario_editar_aluno', (function __lambda__ () {
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
				return self.process_data_aluno ();
			}));
		}
	});},
	get visualizar () {return __get__ (this, function (self, id_matricula, params) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_matricula': var id_matricula = __allkwargs0__ [__attrib0__]; break;
						case 'params': var params = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var url_image = '{0}/api/matriculas/{1}/image'.format (window.PhanterPWA.get_api_address (), id_matricula);
		var matricula = params ['matricula'];
		var nome_da_mae = params ['nome_da_mae'];
		var matricula = params ['matricula'];
		var cpf = params ['cpf'];
		var qrcode = params ['qrcode'];
		var rg_string = params ['rg_string'];
		var data_de_nascimento = params ['data_de_nascimento'];
		self._carteira = DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: url_image})), __kwargtrans__ ({_class: 'carteira-image'})), DIV (DIV (DIV (DIV ('NOME', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (matricula, __kwargtrans__ ({_class: 'carteira-data-nome carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p100'})), DIV (DIV (DIV ('NOME DA MÃE', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (nome_da_mae, __kwargtrans__ ({_class: 'carteira-data-nome_da_mae carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p100'})), DIV (DIV (DIV ('MATRÍCULA', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (matricula, __kwargtrans__ ({_class: 'carteira-data-matricula carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p40'})), DIV (DIV (DIV ('CPF', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (cpf, __kwargtrans__ ({_class: 'carteira-data-cpf carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p60'})), DIV (DIV (DIV ('DATA DE NASCIMENTO', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (data_de_nascimento, __kwargtrans__ ({_class: 'carteira-data-data_de_nascimento carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p40'})), DIV (DIV (DIV ('RG', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (rg_string, __kwargtrans__ ({_class: 'carteira-data-rg_string carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p60'})), __kwargtrans__ ({_class: 'carteira-data-container p-row'})), __kwargtrans__ ({_class: 'p-col w1p30'})), DIV (DIV (__kwargtrans__ ({_class: 'carteira-logo'})), DIV (__kwargtrans__ ({_class: 'carteira-qrcode'})), __kwargtrans__ ({_class: 'p-col w1p70'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'carteira_containar'})), __kwargtrans__ ({_class: 'visualizar_matricula_container a4'})), __kwargtrans__ ({_class: 'phanterpwa-media-print'})), __kwargtrans__ ({_class: 'phanterpwa-media-print-container'}));
		self._carteira.html_to ('#content-matricula');
		window.PhanterPWA.LOAD (__kwargtrans__ (dict ({'args': ['loads', 'svg_logo.html'], 'onComplete': (function __lambda__ (data) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return $ ('#content-matricula').find ('.carteira-logo').html (data);
		})})));
		var url = '{0}/api/associado/{1}'.format (window.PhanterPWA.ApiServer.remote_address, qrcode);
		var qrcode = new QRCode ($ ('#content-matricula').find ('.carteira-qrcode') [0], dict ({'text': url, 'width': 125, 'height': 125, 'colorDark': '#000000', 'colorLight': '#ffffff', 'correctLevel': QRCode.CorrectLevel.H}));
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
				else if (json.razoes == 'matricula_existe') {
					window.PhanterPWA.flash (json.message);
					var id_matricula = json.data.id;
					var id_escola = json.data.id_escola;
					var ano_letivo = json.data.ano_letivo;
					var prof_pai = json.data.prof_pai;
					var prof_mae = json.data.prof_mae;
					var id_aluno = json.data.id_aluno;
					var sexo = json.data.sexo;
					var nome_do_aluno = json.data.nome_do_aluno;
					var data_de_nascimento = json.data.data_de_nascimento;
					var nome_do_pai = json.data.nome_do_pai;
					var nome_da_mae = json.data.nome_da_mae;
					var naturalidade = json.data.naturalidade;
					var endereco = json.data.endereco;
					var serie = json.data.serie;
					var nome_do_responsavel = json.data.nome_do_responsavel;
					var data_mat = json.data.data_mat;
					var novato = json.data.novato;
					var admitido = json.data.admitido;
					var unidade_admitido = json.data.unidade_admitido;
					var ano_anterior = json.data.ano_anterior;
					var serie_ant = json.data.serie_ant;
					var resultado_final = json.data.resultado_final;
					var resultado_anterior = json.data.resultado_anterior;
					var numero_aluno = json.data.numero_aluno;
					var turma = json.data.turma;
					var card = matriculas.Visualizar (id_matricula, id_escola, ano_letivo, prof_pai, prof_mae, id_aluno, nome_do_aluno, sexo, data_de_nascimento, nome_do_pai, nome_da_mae, naturalidade, endereco, serie, nome_do_responsavel, data_mat, novato, admitido, unidade_admitido, ano_anterior, serie_ant, resultado_final, resultado_anterior, numero_aluno, turma);
					card.html_to ('#content-matricula');
				}
			}
			else {
				var json = data.responseJSON;
				self.process_data (json);
			}
		}
	});},
	get process_data_social () {return __get__ (this, function (self, data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var arg0 = window.PhanterPWA.Request.get_arg (0);
		var arg1 = window.PhanterPWA.Request.get_arg (1);
		var arg2 = window.PhanterPWA.Request.get_arg (2);
		window.PhanterPWA.open_xway ('matricula', arg0, arg1, arg2, 'conferido');
	});},
	get process_data_aluno () {return __get__ (this, function (self, data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var arg0 = window.PhanterPWA.Request.get_arg (0);
		var arg1 = window.PhanterPWA.Request.get_arg (1);
		var arg2 = window.PhanterPWA.Request.get_arg (2);
		window.PhanterPWA.open_xway ('matricula', arg0, arg1, arg2, 'social');
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
		var data_de_nascimento = json.data.aluno.data_de_nascimento;
		if (data_de_nascimento !== null) {
			var __left0__ = data_de_nascimento.py_split ('-');
			var adn = __left0__ [0];
			var mdn = __left0__ [1];
			var ddn = __left0__ [2];
		}
		var data_da_matricula = json.data.data_da_matricula;
		var __left0__ = data_da_matricula.py_split ('-');
		var aad = __left0__ [0];
		var mmd = __left0__ [1];
		var ddd = __left0__ [2];
		var nome_aluno = json.data.aluno.nome;
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.arg1);
		var ano_letivo = self.arg2;
		var P1 = 'O(A) ALUNO(A) ';
		var RETIRALO = 'RETIRÁ-LO(A)';
		if (sexo == '1' || sexo == 1 || sexo == 'Masculino') {
			var RETIRALO = 'RETIRÁ-LO';
			var P1 = 'O ALUNO ';
		}
		else if (sexo == '2' || sexo == 2 || sexo == 'Feminino') {
			var RETIRALO = 'RETIRÁ-LA';
			var P1 = 'A ALUNA ';
		}
		var turma = json.data.turma;
		var __left0__ = json.data.aluno.data_base.py_split ('-');
		var aa = __left0__ [0];
		var mm = __left0__ [1];
		var dd = __left0__ [2];
		var str_aluno = '';
		if (json.data.aluno.idade_aluno !== null || json.data.aluno.idade_aluno_pela_data_base !== null) {
			var str_aluno = CONCATENATE ();
		}
		if (json.data.aluno.idade_aluno !== null) {
			str_aluno.append (SPAN (' NA DATA DESTA MATRÍCULA (', STRONG (ddd, '/', mmd, '/', aad), ') A IDADE D', P1, ' É DE ', STRONG (json.data.aluno.idade_aluno, ' ANOS.')));
		}
		if (json.data.aluno.idade_aluno_pela_data_base !== null) {
			str_aluno.append (SPAN (' NA DATA BASE PARA O CÁLCULO DA SÉRIE (', STRONG (dd, '/', mm, '/', aa), ') A IDADE D', P1, ' É DE ', STRONG (json.data.aluno.idade_aluno_pela_data_base, ' ANOS.')));
		}
		var multisseriado = json.data.multisseriado;
		var arg3 = window.PhanterPWA.Request.get_arg (3);
		var arg4 = window.PhanterPWA.Request.get_arg (4);
		if (arg3 == 'editar' && str (arg4).isdigit ()) {
			var compl = SPAN ('PODEMOS EDITAR A MATRÍCULA D', P1, ' NO ANO LETIVO ESPECIFICADO (', STRONG (ano_letivo), ')');
		}
		else {
			var compl = SPAN (P1, 'JÁ POSSUI UMA MATRÍCULA NO ANO LETIVO DE ', STRONG (ano_letivo));
		}
		if (turma !== null && turma !== undefined) {
			if (multisseriado === true) {
				var texto = CONCATENATE (P ('MATRÍCULA DE ', STRONG (nome_aluno, __kwargtrans__ ({_style: 'color: orange; text-transform: uppercase;'})), ' (DATA DE NASCIMENTO:', STRONG (ddn, '/', mdn, '/', adn), ').'), P (str_aluno), P (compl, ', PORÉM AS SÉRIES SERÃO LIMITADAS ÀS SÉRIES DA TURMA MULTISSERIADA A QUAL ', P1, ' SE ENCONTRA (', STRONG (turma, __kwargtrans__ ({_style: 'text-transform: uppercase;'})), '). PARA UMA OFERTA PLENA DE SÉRIES É NECESSÁRIO ', RETIRALO, ' DA TURMA.'), P ('OBSERVE QUE É POSSÍVEL EDITAR CAMPOS QUE ANTES NÃO ERAM POSSÍVEIS, COMO O NOME DO ALUNO, PORÉM', ' ESTA ALTERAÇÃO SÓ TERÁ EFEITO NA MATRÍCULA (ATAS, DIÁRIOS) DESTE ANO LETIVO, OU SEJA, NÃO IRÁ ALTERAR OS DADOS DOS ALUNOS.'));
			}
			else {
				var texto = CONCATENATE (P ('MATRÍCULA DE ', STRONG (nome_aluno, __kwargtrans__ ({_style: 'color: orange; text-transform: uppercase;'})), ' (DATA DE NASCIMENTO:', STRONG (ddn, '/', mdn, '/', adn), ').'), P (str_aluno), P (compl, ', PORÉM NÃO É POSSÍVEL EDITAR A SÉRIE, POIS ', P1, ' SE ENCONTRA NA TURMA ', STRONG (turma, __kwargtrans__ ({_style: 'text-transform: uppercase;'})), '. PARA PODER EDITAR A SÉRIE É NECESSÁRIO ', RETIRALO, ' DA TURMA.'), P ('OBSERVE QUE É POSSÍVEL EDITAR CAMPOS QUE ANTES NÃO ERAM POSSÍVEIS, COMO O NOME DO ALUNO, PORÉM', ' ESTA ALTERAÇÃO SÓ TERÁ EFEITO NA MATRÍCULA (ATAS, DIÁRIOS) DESTE ANO LETIVO, OU SEJA, NÃO IRÁ ALTERAR OS DADOS DOS ALUNOS.'));
			}
		}
		else if (self.nova_matricula) {
			if (json.data.sugestao_serie !== null) {
				str_aluno.append (' DE ACORDO COM A SUA IDADE, ');
				if (len (json.data.sugestao_serie) == 1) {
					str_aluno.append ('A SÉRIE IDEAL É ');
					str_aluno.append (STRONG (json.data.sugestao_serie [0]));
					str_aluno.append ('.');
				}
				else if (len (json.data.sugestao_serie) == 2) {
					str_aluno.append ('AS SUGESTÕES DE SÉRIES SÃO: ');
					str_aluno.append (STRONG (json.data.sugestao_serie [0]));
					str_aluno.append (' E ');
					str_aluno.append (STRONG (json.data.sugestao_serie [1]));
					str_aluno.append ('.');
				}
				else if (len (json.data.sugestao_serie) > 2) {
					str_aluno.append ('AS SUGESTÕES DE SÉRIES SÃO: ');
					var q_su = len (json.data.sugestao_serie);
					var cont_su = 1;
					for (var x of json.data.sugestao_serie) {
						if (cont_su == 1) {
							str_aluno.append (STRONG (x));
						}
						else if (cont_su == q_su) {
							str_aluno.append (' E ');
							str_aluno.append (STRONG (x));
						}
						else {
							str_aluno.append (', ');
							str_aluno.append (STRONG (x));
						}
						cont_su++;
					}
					str_aluno.append ('.');
				}
			}
			var texto = CONCATENATE (P ('MATRÍCULA DE ', STRONG (nome_aluno, __kwargtrans__ ({_style: 'color: orange; text-transform: uppercase;'})), ' (DATA DE NASCIMENTO:', STRONG (ddn, '/', mdn, '/', adn), ').'), P ('AGORA VAMOS CRIAR UMA NOVA MATRÍCULA PARA ', P1, 'NO ANO LETIVO DE ', STRONG (ano_letivo), '.'), P (str_aluno), P ('OBSERVE QUE ALGUNS DADOS NÃO PODEM SER ALTERADOS (COMO NOME DO ALUNO POR EXEMPLO), PARA ALTERAR ', 'VOCÊ PODE EDITAR A MATRÍCULA POSTERIORMENTE OU VOLTAR A TELA ANTERIOR.'));
		}
		else {
			var texto = CONCATENATE (P ('MATRÍCULA DE ', STRONG (nome_aluno, __kwargtrans__ ({_style: 'color: orange; text-transform: uppercase;'})), ' (DATA DE NASCIMENTO:', STRONG (ddn, '/', mdn, '/', adn), ').'), P (P1, 'JÁ POSSUI UMA MATRÍCULA NO ANO LETIVO DE ', STRONG (ano_letivo), ', PORTANTO É POSSÍVEL EDITÁ-LA.'), P ('OBSERVE QUE É POSSÍVEL EDITAR CAMPOS QUE ANTES NÃO ERAM POSSÍVEIS, COMO O NOME DO ALUNO, PORÉM', ' ESTA ALTERAÇÃO SÓ TERÁ EFEITO NA MATRÍCULA (ATAS, DIÁRIOS) DESTE ANO LETIVO, OU SEJA, NÃO IRÁ ALTERAR OS DADOS DOS ALUNOS.'));
		}
		var html = DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (texto, __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'formulario_matricula_aluno'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ (dict ({'_id': 'matricula-editar-aluno', '_class': 'p-row'}))), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), __kwargtrans__ ({_class: 'series-container phanterpwa-card-container'}));
		html.html_to ('#content-matricula');
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
	get get_form_matricula () {return __get__ (this, function (self, nome_aluno) {
		if (typeof nome_aluno == 'undefined' || (nome_aluno != null && nome_aluno.hasOwnProperty ("__kwargtrans__"))) {;
			var nome_aluno = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'nome_aluno': var nome_aluno = __allkwargs0__ [__attrib0__]; break;
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
		var id_aluno = arg0;
		var id_escola = arg1;
		var ano_letivo = arg2;
		var id_matricula = arg4;
		if (arg3 == 'editar' && str (arg4).isdigit ()) {
			window.PhanterPWA.GET ('api', 'matricular', id_escola, ano_letivo, id_aluno, id_matricula, __kwargtrans__ ({onComplete: self.after_get}));
		}
		else {
			window.PhanterPWA.GET ('api', 'matricular', id_escola, ano_letivo, id_aluno, __kwargtrans__ ({onComplete: self.after_get}));
		}
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

//# sourceMappingURL=handlers.matricula.map