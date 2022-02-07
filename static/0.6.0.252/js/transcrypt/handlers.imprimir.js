// Transcrypt'ed from Python, 2022-02-07 17:41:40
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
var __name__ = 'handlers.imprimir';
export var CONCATENATE = helpers.CONCATENATE;
export var OPTION = helpers.XmlConstructor.tagger ('option');
export var SELECT = helpers.XmlConstructor.tagger ('select');
export var DIV = helpers.XmlConstructor.tagger ('div');
export var I = helpers.XmlConstructor.tagger ('i');
export var A = helpers.XmlConstructor.tagger ('a');
export var SPAN = helpers.XmlConstructor.tagger ('span');
export var FORM = helpers.XmlConstructor.tagger ('form');
export var UL = helpers.XmlConstructor.tagger ('ul');
export var LI = helpers.XmlConstructor.tagger ('li');
export var STRONG = helpers.XmlConstructor.tagger ('strong');
export var IMG = helpers.XmlConstructor.tagger ('img', true);
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var TABLE = helpers.XmlConstructor.tagger ('table');
export var TR = helpers.XmlConstructor.tagger ('tr');
export var TD = helpers.XmlConstructor.tagger ('td');
export var TH = helpers.XmlConstructor.tagger ('th');
export var H1 = helpers.XmlConstructor.tagger ('h1');
export var H2 = helpers.XmlConstructor.tagger ('h2');
export var H3 = helpers.XmlConstructor.tagger ('h3');
export var H4 = helpers.XmlConstructor.tagger ('h4');
export var CANVAS = helpers.XmlConstructor.tagger ('canvas');
export var H5 = helpers.XmlConstructor.tagger ('h5');
export var HR = helpers.XmlConstructor.tagger ('hr', true);
export var P = helpers.XmlConstructor.tagger ('p');
export var LABEL = helpers.XmlConstructor.tagger ('label');
export var XSECTION = helpers.XSECTION;
export var XTABLE = widgets.Table;
export var XML = helpers.XML;
export var BR = helpers.XmlConstructor.tagger ('br', true);
export var XTRD = widgets.TableData;
export var XTRH = widgets.TableHead;
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
		return window.PhanterPWA.logged ();
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
		if (arg0 == 'matricula') {
			self.Matriculas = Matricula ();
			self.Matriculas.initialize ();
		}
		else if (arg0 == 'declaracao-de-matricula') {
			self.DeclaracaoDeMatricula = DeclaracaoDeMatricula ();
		}
		else if (arg0 == 'questionario-social') {
			self.QuestionarioSocial = QuestionarioSocial ();
		}
		else if (arg0 == 'declaracao-de-transferencia') {
			self.DeclaracaoDeTransferencia = DeclaracaoDeTransferencia ();
		}
		else if (arg0 == 'ficha-individual-do-aluno') {
			self.FichaIndividualDoAluno = FichaIndividualDoAluno ();
		}
		else if (arg0 == 'ata-de-resultados-finais') {
			self.AtaDeResultadosFinais = AtaDeResultadosFinais ();
		}
		else if (arg0 == 'total-de-matriculados') {
			if (window.PhanterPWA.auth_user_has_role (['administrator', 'root', 'Administrador Master SME'])) {
				if (arg1 === null || arg1 === undefined) {
					var arg1 = 'todos';
				}
				if (arg2 === null || arg2 === undefined) {
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
						return '#_phanterpwa:/imprimir/total-de-matriculados/{0}/{1}'.format (arg1, ano);
					})}));
				}
				else {
					self.TotalDeMatriculados = TotalDeMatriculados (self, arg1, arg2);
				}
			}
			else if (arg0 === null || arg0 === undefined) {
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
					return '#_phanterpwa:/imprimir/total-de-matriculados/{0}'.format (id_escola);
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
					return '#_phanterpwa:/imprimir/total-de-matriculados/{0}/{1}'.format (arg1, ano);
				})}));
			}
			else {
				self.TotalDeMatriculados = TotalDeMatriculados (self, arg1, arg2);
			}
		}
		else if (arg0 == 'lista-transporte-alunos') {
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
					return '#_phanterpwa:/imprimir/lista-transporte-alunos/{0}'.format (id_escola);
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
					return '#_phanterpwa:/imprimir/lista-transporte-alunos/{0}/{1}'.format (arg1, ano);
				})}));
			}
			else {
				self.AlunosTransporte = AlunosTransporte (self, arg1, arg2);
			}
		}
		else if (arg0 == 'lista-de-novatos') {
			self.ListaDeNovatos = ListaDeNovatos (self, arg1);
		}
		else {
			var html = CONCATENATE (DIV (DIV (DIV (DIV ('CENTRAL DE IMPRESSÃO', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-matriculas-imprimir', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
			html.html_to ('#main-container');
			var BackButton = left_bar.LeftBarButton ('back_localizar_socios', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'restrito', 'position': 'top', 'ways': [(function __lambda__ (r) {
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
				return (r.startswith ('socios') || r.startswith ('socios/') ? true : false);
			})]})));
			window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
		}
	}));}
});
export var Matricula =  __class__ ('Matricula', [object], {
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
		self.id_matricula = window.PhanterPWA.Request.get_arg (1);
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('IMPRIMIR', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('MATRÍCULA', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-matriculas-imprimir', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})), __kwargtrans__ ({_id: 'documentos-content'})), DIV (__kwargtrans__ ({_id: 'botoes_de_comando_impressao'})));
		html.html_to ('#main-container');
		var BackButton = left_bar.LeftBarButton ('back_imprimir_matricula', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'area-do-servidor', 'position': 'top', 'ways': [(function __lambda__ (r) {
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
			return (r.startswith ('documentos') || r.startswith ('documentos/') ? true : false);
		})]})));
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
		self._get_data ();
	}));},
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
		var json = data.responseJSON;
		self.id_escola = json.data.id_escola;
		self.ano_letivo = json.data.ano_letivo;
		self.id_aluno = json.data.matricula.aluno;
		var now = new Date ().getTime ();
		var html_botoes = CONCATENATE (widgets.FloatMenu ('menu_impressao', I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.FloatButton (I (DIV (DIV (SPAN (I (__kwargtrans__ ({_class: 'fas fa-user-graduate'})), __kwargtrans__ ({_class: 'icombine-container-first'})), SPAN (I (__kwargtrans__ ({_class: 'fas fa-plus'})), __kwargtrans__ ({_class: 'icombine-container-last'})), __kwargtrans__ ({_class: 'icombine-container'})), __kwargtrans__ ({_class: 'phanterpwa-snippet-icombine'}))), __kwargtrans__ ({_class: 'botao_matricular', _title: 'Matricular outro aluno', _href: window.PhanterPWA.XWAY ('matricular', self.id_escola, self.ano_letivo)})), widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-edit'})), __kwargtrans__ ({_class: 'botao_editar_matricula', _title: 'Editar Matrícula', _href: window.PhanterPWA.XWAY ('matricular', self.id_escola, self.ano_letivo, 'aluno-conferido', self.id_aluno)})), widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-comments'})), __kwargtrans__ ({_class: 'botao_questionario', _title: 'Questionário Social', _href: window.PhanterPWA.XWAY ('imprimir', 'questionario-social', self.id_escola, self.ano_letivo, self.id_aluno, __kwargtrans__ ({_id_matricula: self.id_matricula}))})), widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-file-pdf'})), __kwargtrans__ ({_class: 'botao_gerar_pdf', _title: 'Gerar PDF', _href: '{0}/api/pdfs/matricula/{1}?nocache={2}'.format (window.PhanterPWA.ApiServer.remote_address, self.id_matricula, now)})), widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-print'})), __kwargtrans__ ({_title: 'Imprimir documento', _class: 'botao_imprimir_diario_de_notas', _onclick: 'print();'}))));
		html_botoes.html_to ('#botoes_de_comando_impressao');
		var id_escola = json.data.id_escola;
		var nome_escola = json.data.nome_escola;
		var dados_escola = json.data.dados_escola;
		var novato = json.data.matricula.novato;
		var ano_letivo = json.data.ano_letivo;
		var nome_do_aluno = json.data.matricula.nome_do_aluno;
		var ano_anterior = json.data.ano_anterior;
		var naturalidade = json.data.naturalidade;
		var nome_do_pai = json.data.matricula.nome_do_pai;
		var prof_pai = json.data.matricula.prof_pai;
		var nome_da_mae = json.data.matricula.nome_da_mae;
		var prof_mae = json.data.matricula.prof_mae;
		var endereco = json.data.endereco;
		var cidade = json.data.cidade;
		var serie_anterior = json.data.serie_anterior;
		var serie_subsequente = json.data.serie_subsequente;
		var data_assinatura = json.data.data_assinatura;
		var responsavel = json.data.responsavel;
		var resultado = json.data.resultado;
		var resultado_anterior = json.data.matricula.resultado_anterior;
		var sexo = json.data.sexo;
		var nome_autoridade = json.data.nome_autoridade;
		var cargo_autoridade = json.data.cargo_autoridade;
		var data_nasc = json.data.data_nasc;
		var data_de_nascimento_formatada = json.data.data_de_nascimento_formatada;
		var data_mat = json.data.matricula.data_mat;
		var data_de_nascimento = validations.format_iso_date_datetime (data_nasc, 'dd/MM/yyyy', 'date');
		var data_assinatura = json.data.data_matricula_formatada;
		var nome_do_aluno_h = 'Nome do(a) Aluno(a)';
		var P1 = ' o(a) aluno(a) estudou ';
		var considerado = 'considerado(a)';
		if (sexo == 'Masculino' || sexo == '1' || sexo == 1) {
			var nome_do_aluno_h = 'Nome do Aluno';
			var P1 = ' o aluno estudou ';
			var considerado = 'considerado';
			if (resultado_anterior == 'Aprovado(a)') {
				var resultado_anterior = 'Aprovado';
			}
			else if (resultado_anterior == 'Reprovado(a)') {
				var resultado_anterior = 'Reprovado';
			}
		}
		else if (sexo == 'Feminino' || sexo == '2' || sexo == 2) {
			var nome_do_aluno_h = 'Nome da Aluna';
			var P1 = ' a aluna estudou ';
			var considerado = 'considerada';
			if (resultado_anterior == 'Aprovado(a)') {
				var resultado_anterior = 'Aprovada';
			}
			else if (resultado_anterior == 'Reprovado(a)') {
				var resultado_anterior = 'Reprovada';
			}
		}
		if (serie_subsequente.startswith ('Creche') || __in__ ('SÉRIE', serie_subsequente.upper ())) {
			var P4 = ' na ';
		}
		else {
			var P4 = ' no ';
		}
		if (serie_anterior !== null && ano_letivo !== null && resultado_anterior !== null) {
			if (serie_anterior.startswith ('Creche') || __in__ ('SÉRIE', serie_anterior.upper ())) {
				var P2 = ' na ';
			}
			else {
				var P2 = ' no ';
			}
			var anunciado = CONCATENATE (DIV (P ('No ano letivo de ', STRONG (ano_anterior), P1, P2, STRONG (serie_anterior), ' tendo sido ', considerado, ' ', STRONG (resultado_anterior), ', portanto tendo direito a matricular-se ', P4, STRONG (serie_subsequente), '. Ficando sob a responsabilidade de ', STRONG (responsavel), '.'), __kwargtrans__ ({_class: 'p-row'})));
			if (novato) {
				var titulo_resumo = H4 ('Nova Matrícula para o Ano Letivo de ', ano_letivo);
			}
			else {
				var titulo_resumo = H4 ('Matrícula renovada para o Ano Letivo de ', ano_letivo);
			}
			var resumo = XSECTION (LABEL ('RESUMO'), titulo_resumo, TABLE (TR (TD (STRONG ('Série Anterior: '), serie_anterior), TD (STRONG ('Série Atual: '), serie_subsequente)), __kwargtrans__ ({_class: 'tudo_centralizado'})));
		}
		else {
			if (novato) {
				var anunciado = CONCATENATE (DIV (P ('Nova matrícula efetuada para o ano letivo de ', STRONG (ano_letivo), P4, STRONG (serie_subsequente), '. Ficando sob a responsabilidade de ', STRONG (responsavel), '.'), __kwargtrans__ ({_class: 'p-row'})));
				var titulo_resumo = H4 ('Nova Matrícula para o Ano Letivo de ', STRONG (ano_letivo));
			}
			else {
				var anunciado = CONCATENATE (DIV (P ('Matrícula renovada para o ano letivo de ', STRONG (ano_letivo), P4, STRONG (serie_subsequente), '. Ficando sob a responsabilidade de ', STRONG (responsavel), '.'), __kwargtrans__ ({_class: 'p-row'})));
				var titulo_resumo = H4 ('Matrícula renovada para o Ano Letivo de ', STRONG (ano_letivo));
			}
			var resumo = XSECTION (LABEL ('RESUMO'), titulo_resumo, TABLE (TR (TD (STRONG ('Série Anterior: '), '-'), TD (STRONG ('Série Atual: '), serie_subsequente)), __kwargtrans__ ({_class: 'tudo_centralizado'})));
		}
		var requerimento = P ('Venho requerer a V. Sª que se digne mandar matricular o aluno supracitado', P4, STRONG (serie_subsequente), ' deste estabelecimento, ficando sob a responsabilidade de ', STRONG (responsavel), ' declarando estar obrigado e de acordo com todas as exigências constantes no', STRONG (' Regimento Escolar'), ' deste Estabelecimento e outras normas estabelecidas pelo diretor. Nestes termos pede deferimento.');
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, id_escola);
		if (ajax_status == 'success') {
			var codigo = '{0}-{1}-{2}-{3}'.format (self.id_escola, self.ano_letivo, self.id_aluno, self.id_matricula);
			var matricula_content = DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: '/static/{0}/images/cabecalho_background.jpg'.format (window.PhanterPWA.VERSIONING)})), __kwargtrans__ ({_class: 'back'})), DIV (IMG (__kwargtrans__ ({_src: logo, _style: 'width: 120px; height: 120px;'})), __kwargtrans__ ({_class: 'front'})), __kwargtrans__ ({_class: 'sme_cabecalho_sme'})), DIV (H3 (nome_escola), __kwargtrans__ ({_class: 'sme_cabecalho_sme_nome_escola'})), DIV (H5 (dados_escola), __kwargtrans__ ({_class: 'sme_cabecalho_sme_dados_escola'})), DIV (H2 ('FICHA DE MATRÍCULA'), __kwargtrans__ ({_class: 'sme_cabecalho_titulo_documento'})), DIV (DIV (TABLE (TR (TD (STRONG (nome_do_aluno_h, ': '), nome_do_aluno, __kwargtrans__ ({_colspan: 1}))), TR (TD (STRONG ('Data de Nascimento: '), data_de_nascimento_formatada), TD (STRONG ('Naturalidade', ': '), naturalidade)), TR (TD (STRONG ('Nome do pai: '), nome_do_pai, __kwargtrans__ ({_colspan: (prof_pai ? null : 1)})), (prof_pai ? TD (STRONG ('Profissão: '), prof_pai) : '')), TR (TD (STRONG ('Nome da mãe: '), nome_da_mae, __kwargtrans__ ({_colspan: (prof_mae ? null : 1)})), (prof_mae ? TD (STRONG ('Profissão: '), prof_mae) : '')), TR (TD (STRONG ('Endereço: '), endereco, __kwargtrans__ ({_colspan: 1})))), __kwargtrans__ ({_class: 'p-row'})), DIV (anunciado, __kwargtrans__ ({_class: 'p-row'})), DIV (resumo, __kwargtrans__ ({_class: 'p-row'})), DIV (cidade, ', ', data_assinatura, __kwargtrans__ ({_class: 'p-row  tudo_centralizado cidade_e_data'})), DIV (TABLE (TR (TD ('___________________________________________'), TD ('___________________________________________')), TR (TD (nome_autoridade), TD (responsavel)), TR (TD (cargo_autoridade, __kwargtrans__ ({_class: 'miudinho'})), TD ('Responsável', __kwargtrans__ ({_class: 'miudinho'}))), __kwargtrans__ ({_class: 'tudo_centralizado'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'sme_documento_conteudo'})), DIV (DIV (IMG (__kwargtrans__ ({_src: '/static/{0}/images/cabecalho_background.jpg'.format (window.PhanterPWA.VERSIONING)})), __kwargtrans__ ({_class: 'back'})), DIV (IMG (__kwargtrans__ ({_src: logo, _style: 'width: 120px; height: 120px;'})), __kwargtrans__ ({_class: 'front'})), __kwargtrans__ ({_class: 'sme_cabecalho_sme'})), DIV (H3 (nome_escola), __kwargtrans__ ({_class: 'sme_cabecalho_sme_nome_escola'})), DIV (H5 (dados_escola), __kwargtrans__ ({_class: 'sme_cabecalho_sme_dados_escola'})), DIV (H2 ('FICHA DE REQUERIMENTO'), __kwargtrans__ ({_class: 'sme_cabecalho_titulo_documento'})), DIV (DIV (TABLE (TR (TD (STRONG (nome_do_aluno_h, ': '), nome_do_aluno, __kwargtrans__ ({_colspan: 1}))), TR (TD (STRONG ('Data de Nascimento', ': '), data_de_nascimento_formatada), TD (STRONG ('Naturalidade', ': '), naturalidade)), TR (TD (STRONG ('Nome do pai', ': '), nome_do_pai, __kwargtrans__ ({_colspan: (prof_pai ? null : 1)})), (prof_pai ? TD (STRONG ('Profissão', ': '), prof_pai) : '')), TR (TD (STRONG ('Nome da mãe', ': '), nome_da_mae, __kwargtrans__ ({_colspan: (prof_mae ? null : 1)})), (prof_mae ? TD (STRONG ('Profissão', ': '), prof_mae) : '')), TR (TD (STRONG ('Endereço', ': '), endereco, __kwargtrans__ ({_colspan: 1})))), __kwargtrans__ ({_class: 'p-row'})), DIV (requerimento, __kwargtrans__ ({_class: 'p-row'})), DIV (cidade, ', ', data_assinatura, __kwargtrans__ ({_class: 'p-row tudo_centralizado cidade_e_data'})), DIV (TABLE (TR (TD ('___________________________________________')), TR (TD (responsavel)), TR (TD ('Responsável', __kwargtrans__ ({_class: 'miudinho'}))), __kwargtrans__ ({_class: 'tudo_centralizado'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'sme_documento_conteudo'})), __kwargtrans__ ({_id: 'pagina_{0}_matricula'.format (self.id_matricula), _class: 'p-row'})), __kwargtrans__ ({_class: 'imprimir_matricula_wrapper imprimir_documentos_wrapper'})), __kwargtrans__ ({_class: 'imprimir_matricula_container'})), DIV (DIV (DIV (XML ('&#160;'), __kwargtrans__ ({_style: 'height: 40px;'})), DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: '/static/{0}/images/cabecalho_background.jpg'.format (window.PhanterPWA.VERSIONING)})), __kwargtrans__ ({_class: 'back'})), DIV (IMG (__kwargtrans__ ({_src: logo, _style: 'width: 120px; height: 120px;'})), __kwargtrans__ ({_class: 'front'})), __kwargtrans__ ({_class: 'sme_cabecalho_sme'})), DIV (H3 (nome_escola), __kwargtrans__ ({_class: 'sme_cabecalho_sme_nome_escola'})), DIV (H2 ('COMPROVANTE DE MATRÍCULA ', self.ano_letivo), __kwargtrans__ ({_class: 'sme_cabecalho_titulo_documento'})), DIV (H3 (nome_do_aluno), __kwargtrans__ ({_class: 'sme_cabecalho_sme_nome_escola'})), DIV (DIV (XSECTION (LABEL ('QRCODE'), DIV (__kwargtrans__ ({_id: 'qrcode_matricula'})), BR (), DIV (STRONG ('CÓDIGO DE ACESSO: '), codigo, __kwargtrans__ ({_class: 'tudo_centralizado'}))), __kwargtrans__ ({_class: 'p-row'})), DIV (P ('Senhores pais ou responsáveis,'), P ('Este doumento possui várias informações sobre a matrícula do aluno.', ' Quando vier pra escola pra tratar de assuntos relacionados ao aluno, ao trazê-lo,', ' os funcionários da secretaria poderão', ' identificar e localizar as informações do aluno mais facilmente.', ' Outra vantagem é que ele facilitará o acesso ao sistema da ', STRONG ('Secretaria Municipal de Educação', ' de Fátima/BA.')), P ('Para acessar o sistema basta ler o ', STRONG ('QRCODE'), ' ou acessar o endereço: '), P ('https://smefatima.com.br/#_phanterpwa:/acesso-ao-aluno/{0}'.format (codigo)), __kwargtrans__ ({_class: 'p-row'})), DIV (XSECTION (LABEL ('INFORMAÇÕES DO ALUNO'), TABLE (TR (TD (STRONG (nome_do_aluno_h, ': '), nome_do_aluno, __kwargtrans__ ({_colspan: 2}))), TR (TD (STRONG ('Código da Matrícula: '), self.id_matricula, __kwargtrans__ ({_colspan: 2}))), TR (TD (STRONG ('Série: '), serie_subsequente), TD (STRONG ('Ano Letivo: '), ano_letivo)), TR (TD (STRONG ('Data de Nascimento: '), data_de_nascimento_formatada), TD (STRONG ('Naturalidade', ': '), naturalidade)), TR (TD (STRONG ('Nome do pai: '), nome_do_pai, __kwargtrans__ ({_colspan: (prof_pai ? null : 1)})), (prof_pai ? TD (STRONG ('Profissão: '), prof_pai) : '')), TR (TD (STRONG ('Nome da mãe: '), nome_da_mae, __kwargtrans__ ({_colspan: (prof_mae ? null : 1)})), (prof_mae ? TD (STRONG ('Profissão: '), prof_mae) : '')), TR (TD (STRONG ('Endereço: '), endereco, __kwargtrans__ ({_colspan: 1}))))), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'sme_documento_conteudo'})), __kwargtrans__ ({_id: 'pagina_{0}_comprovante'.format (self.id_matricula), _class: 'p-row'})), __kwargtrans__ ({_class: 'imprimir_matricula_wrapper imprimir_documentos_wrapper'})), __kwargtrans__ ({_class: 'imprimir_comprovante_social quebra-de-pagina-antes'}))), __kwargtrans__ ({_class: 'media-print-visible'})), __kwargtrans__ ({_class: 'folhas_para_imprimir phanterpwa-simple-media-print'}));
			CONCATENATE (matricula_content).html_to ('#documentos-content');
			var url = 'https://smefatima.com.br/#_phanterpwa:/acesso-ao-aluno/{0}'.format (codigo);
			var qrcode = new QRCode ($ ('#qrcode_matricula') [0], dict ({'text': url, 'width': 125, 'height': 125, 'colorDark': '#000000', 'colorLight': '#ffffff', 'correctLevel': QRCode.CorrectLevel.H}));
		}
	});},
	get _get_data () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'imprimir', 'matricula', self.id_matricula, __kwargtrans__ ({onComplete: self.after_get}));
	});}
});
export var QuestionarioSocial =  __class__ ('QuestionarioSocial', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, decorators.check_authorization ((function __lambda__ () {
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
		self.id_escola = window.PhanterPWA.Request.get_arg (1);
		self.ano_letivo = window.PhanterPWA.Request.get_arg (2);
		self.id_aluno = window.PhanterPWA.Request.get_arg (3);
		self.id_matricula = window.PhanterPWA.Request.get_param ('id_matricula');
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('IMPRIMIR', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('QUESTIONÁRIO SOCIAL', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-matriculas-imprimir', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})), __kwargtrans__ ({_id: 'documentos-content'})), DIV (__kwargtrans__ ({_id: 'botoes_de_comando_impressao'})));
		html.html_to ('#main-container');
		self._pegar_dados ();
	}));},
	get _pegar_dados () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'imprimir', 'questionario-social', self.id_escola, self.id_aluno, __kwargtrans__ ({onComplete: self._depois_de_pegar_os_dados}));
	});},
	get _depois_de_pegar_os_dados () {return __get__ (this, function (self, data, ajax_status) {
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
			self.id_aluno = json.data.alunos;
			var _id = json.data.id;
			var responsavel = json.data.responsavel;
			var responsavel_legal = json.data.responsavel_legal;
			var sexo = json.data.sexo;
			var moradores_residencia = json.data.moradores_residencia;
			var acompanhamento_escolar = json.data.acompanhamento_escolar;
			var acompanhamento_escolar2 = json.data.acompanhamento_escolar2;
			var escolaridade_acompanhamento = json.data.escolaridade_acompanhamento;
			var escolaridade_acompanhamento2 = json.data.escolaridade_acompanhamento2;
			var morada_outro = json.data.morada_outro;
			var alergia = json.data.alergia;
			var alergia_sim = json.data.alergia_sim;
			var deficiencia = json.data.deficiencia;
			var deficiencia_sim = json.data.deficiencia_sim;
			var celular_aluno = json.data.celular_aluno;
			var celular_aluno2 = json.data.celular_aluno2;
			var transporte_escolar = json.data.transporte_escolar;
			var bolsa_familia = json.data.bolsa_familia;
			var possui_computador = json.data.possui_computador;
			var acesso_internet_movel = json.data.acesso_internet_movel;
			var acesso_internet_wifi = json.data.acesso_internet_wifi;
			var uso_imagem = json.data.uso_imagem;
			var telefone = json.data.telefone;
			var dono_telefone = json.data.dono_telefone;
			var tamanho_camisa = json.data.tamanho_camisa;
			var observacao_qs = json.data.observacao_qs;
			var nome_escola = json.data.escola;
			var aluno = json.data.aluno;
			var now = new Date ().getTime ();
			var array_botoes = [];
			if (self.id_escola !== null && self.ano_letivo !== null) {
				array_botoes.append (widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-edit'})), __kwargtrans__ ({_class: 'botao_editar_matricula', _title: 'Editar Matrícula', _href: window.PhanterPWA.XWAY ('matricular', self.id_escola, self.ano_letivo, 'aluno-conferido', self.id_aluno)})));
			}
			if (self.id_matricula !== null) {
				array_botoes.append (widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-file-contract'})), __kwargtrans__ ({_class: 'botao_imprimir_matricula', _title: 'Documento de matrícula', _href: window.PhanterPWA.XWAY ('imprimir', 'matricula', self.id_matricula)})));
			}
			array_botoes.append (widgets.FloatButton (I (DIV (DIV (SPAN (I (__kwargtrans__ ({_class: 'fas fa-user-graduate'})), __kwargtrans__ ({_class: 'icombine-container-first'})), SPAN (I (__kwargtrans__ ({_class: 'fas fa-pen'})), __kwargtrans__ ({_class: 'icombine-container-last'})), __kwargtrans__ ({_class: 'icombine-container'})), __kwargtrans__ ({_class: 'phanterpwa-snippet-icombine'}))), __kwargtrans__ ({_class: 'botao_editar_dados_aluno', _title: 'Editar dados do aluno', _href: window.PhanterPWA.XWAY ('matricular', self.id_escola, self.ano_letivo, self.id_aluno, __kwargtrans__ ({_retornar: 'imprimir/questionario-social/{0}/{1}/{2}'.format (self.id_escola, self.ano_letivo, self.id_aluno)}))})));
			array_botoes.append (widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-file-pdf'})), __kwargtrans__ ({_class: 'botao_gerar_pdf', _title: 'Gerar PDF', _href: '{0}/api/pdfs/questionario-social/{1}/{2}/{3}?nocache={4}'.format (window.PhanterPWA.ApiServer.remote_address, self.id_escola, self.ano_letivo, self.id_aluno, now)})));
			array_botoes.append (widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-print'})), __kwargtrans__ ({_title: 'Imprimir documento', _class: 'botao_imprimir_diario_de_notas', _onclick: 'print();'})));
			var html_botoes = widgets.FloatMenu ('menu_impressao', I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), ...array_botoes);
			html_botoes.html_to ('#botoes_de_comando_impressao');
			var inis_acom = 'O(A) aluno(a)';
			var art_acom = 'o(a)';
			var meio_acom = 'o(a) aluno(a)';
			if (sexo == 'Masculino' || sexo == '1' || sexo == 1) {
				var inis_acom = 'O aluno';
				var art_acom = 'o';
				var meio_acom = 'o aluno';
			}
			else if (sexo == 'Feminino' || sexo == '2' || sexo == 2) {
				var inis_acom = 'A aluna';
				var art_acom = 'a';
				var meio_acom = 'a aluna';
			}
			var xml_acompanha = CONCATENATE (TABLE (TR (TH (inis_acom, ' possui alguém que ', art_acom, ' acompanhe ou ajude nas tarefas escolares?', __kwargtrans__ ({_class: 'pergunta'})), TD (acompanhamento_escolar, __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'})));
			if (acompanhamento_escolar == 'Sim') {
				xml_acompanha.append (TABLE (TR (TH ('Quem acompanha/ajuda nas tarefas escolares?', __kwargtrans__ ({_class: 'pergunta'})), TD (acompanhamento_escolar2, __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'})));
				xml_acompanha.append (TABLE (TR (TH ('Qual o nível de escolaridade de quem acompanha?', __kwargtrans__ ({_class: 'pergunta'})), TD (escolaridade_acompanhamento, __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'})));
			}
			if (__in__ ('incompleto', escolaridade_acompanhamento)) {
				xml_acompanha.append (TABLE (TR (TH ('Qual nível de escolaridade atingiu?', __kwargtrans__ ({_class: 'pergunta'})), TD (escolaridade_acompanhamento2, __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'})));
			}
			var xml_alergia = CONCATENATE (TABLE (TR (TH (inis_acom, ' tem alergia?', __kwargtrans__ ({_class: 'pergunta'})), TD (alergia, __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'})));
			if (alergia == 'Sim') {
				xml_alergia.append (TABLE (TR (TH ('Alergia de quê?', __kwargtrans__ ({_class: 'pergunta'})), TD (alergia_sim, __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'})));
			}
			var xml_deficiencia = CONCATENATE (TABLE (TR (TH (inis_acom, ' possui alguma deficiência?', __kwargtrans__ ({_class: 'pergunta'})), TD (deficiencia, __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'})));
			if (deficiencia == 'Sim') {
				xml_deficiencia.append (TABLE (TR (TH ('Qual a deficiência?', __kwargtrans__ ({_class: 'pergunta'})), TD (deficiencia_sim, __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'})));
			}
			var xml_celular_aluno = CONCATENATE (TABLE (TR (TH (inis_acom, ' tem celular próprio?', __kwargtrans__ ({_class: 'pergunta'})), TD (celular_aluno, __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'})));
			if (celular_aluno == 'Sim') {
				xml_celular_aluno.append (TABLE (TR (TH ('Qual o número do celular d', meio_acom, '?', __kwargtrans__ ({_class: 'pergunta'})), TD (celular_aluno2, __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'})));
			}
			var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.id_escola);
			var folhas_content = DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: '/static/{0}/images/cabecalho_background.jpg'.format (window.PhanterPWA.VERSIONING)})), __kwargtrans__ ({_class: 'back'})), DIV (IMG (__kwargtrans__ ({_src: logo, _style: 'width: 120px; height: 120px;'})), __kwargtrans__ ({_class: 'front'})), __kwargtrans__ ({_class: 'sme_cabecalho_sme'})), DIV (H3 (nome_escola), __kwargtrans__ ({_class: 'sme_cabecalho_sme_nome_escola'})), DIV (H2 ('QUESTIONÁRIO SOCIAL'), __kwargtrans__ ({_class: 'sme_cabecalho_titulo_documento'})), DIV (H3 (aluno), __kwargtrans__ ({_class: 'sme_cabecalho_sme_nome_escola'})), DIV (DIV (XSECTION (LABEL ('SOBRE O ALUNO'), TABLE (TR (TH ('Quem é ou são os responsáveis legais?', __kwargtrans__ ({_class: 'pergunta'})), TD (responsavel_legal, __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'})), TABLE (TR (TH ('Com quem ', meio_acom, ' mora?', __kwargtrans__ ({_class: 'pergunta'})), TD (morada_outro, __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'})), TABLE (TR (TH ('Quantas pessoas moram na residência, incluindo ', meio_acom, '?', __kwargtrans__ ({_class: 'pergunta'})), TD (moradores_residencia, __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'})), xml_acompanha, xml_alergia, xml_deficiencia, xml_celular_aluno, TABLE (TR (TH (inis_acom, ' necessita de transporte escolar para vir à escola?', __kwargtrans__ ({_class: 'pergunta'})), TD ((transporte_escolar === true ? 'Sim' : 'Não'), __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'})), TABLE (TR (TH (inis_acom, ' recebe o Bolsa Família?', __kwargtrans__ ({_class: 'pergunta'})), TD ((bolsa_familia === true ? 'Sim' : 'Não'), __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'})), TABLE (TR (TH (inis_acom, ' possui computador ou notebook?', __kwargtrans__ ({_class: 'pergunta'})), TD ((possui_computador === true ? 'Sim' : 'Não'), __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'})), TABLE (TR (TH (inis_acom, ' tem acesso a internet por rede móvel?', __kwargtrans__ ({_class: 'pergunta'})), TD ((acesso_internet_movel === true ? 'Sim' : 'Não'), __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'})), TABLE (TR (TH (inis_acom, ' tem acesso a internet por wifi?', __kwargtrans__ ({_class: 'pergunta'})), TD ((acesso_internet_wifi === true ? 'Sim' : 'Não'), __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'})), TABLE (TR (TH ('Qual o tamanho da farda d', meio_acom, '?', __kwargtrans__ ({_class: 'pergunta'})), TD (tamanho_camisa, __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'}))), __kwargtrans__ ({_class: 'p-row'})), DIV (XSECTION (LABEL ('SOBRE OS RESPONSÁVEIS'), TABLE (TR (TH ('O responsável autoriza o uso de imagem d', meio_acom, ' em divulgações audiovisuais?', __kwargtrans__ ({_class: 'pergunta'})), TD ((uso_imagem === true ? 'Sim' : 'Não'), __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz'})), TABLE (TR (TH ('Número de Contato:', __kwargtrans__ ({_class: 'pergunta'})), TD (telefone, __kwargtrans__ ({_class: 'resposta'})), TH ('Falar com:', __kwargtrans__ ({_class: 'pergunta pra_direita'})), TD (dono_telefone, __kwargtrans__ ({_class: 'resposta_direita'}))), __kwargtrans__ ({_class: 'quiz'}))), __kwargtrans__ ({_class: 'p-row'})), DIV (XSECTION (LABEL ('OBSERVAÇÕES'), TABLE (TR (TD (observacao_qs, __kwargtrans__ ({_class: 'resposta'}))), __kwargtrans__ ({_class: 'quiz observacoes'}))), __kwargtrans__ ({_class: 'p-row'})), DIV ('____________________, _____ de __________________ de ', self.ano_letivo, __kwargtrans__ ({_class: 'p-row tudo_centralizado cidade_e_data'})), DIV (TABLE (TR (TD ('___________________________________________')), TR (TD (responsavel)), TR (TD ('Responsável', __kwargtrans__ ({_class: 'miudinho'}))), __kwargtrans__ ({_class: 'tudo_centralizado'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'sme_documento_conteudo'})), __kwargtrans__ ({_id: 'pagina_{0}_questionario'.format (_id), _class: 'p-row'})), __kwargtrans__ ({_class: 'imprimir_matricula_wrapper imprimir_documentos_wrapper'})), __kwargtrans__ ({_class: 'imprimir_questionario_social'}))), __kwargtrans__ ({_class: 'media-print-visible'})), __kwargtrans__ ({_class: 'folhas_para_imprimir phanterpwa-simple-media-print'}));
			folhas_content.html_to ('#documentos-content');
		}
	});}
});
export var DeclaracaoDeMatricula =  __class__ ('DeclaracaoDeMatricula', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, decorators.check_authorization ((function __lambda__ () {
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
		self.id_matricula = window.PhanterPWA.Request.get_arg (1);
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('IMPRIMIR', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('DECLARAÇÃO DE MATRÍCULA', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-matriculas-imprimir', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})), __kwargtrans__ ({_id: 'documentos-content'})), DIV (__kwargtrans__ ({_id: 'botoes_de_comando_impressao'})));
		html.html_to ('#main-container');
		var BackButton = left_bar.LeftBarButton ('back_imprimir_matricula', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'area-do-servidor', 'position': 'top', 'ways': [(function __lambda__ (r) {
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
			return (r.startswith ('documentos') || r.startswith ('documentos/') ? true : false);
		})]})));
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
		self._get_data ();
	}));},
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
		var json = data.responseJSON;
		self.id_escola = json.data.id_escola;
		self.ano_letivo = json.data.ano_letivo;
		self.id_aluno = json.data.matricula.aluno;
		var meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
		var now = new Date ().getTime ();
		var dia = new Date ().getDate ();
		var mes_int = new Date ().getMonth ();
		var ano = new Date ().getFullYear ();
		var mes = meses [int (mes_int)];
		var data_assinatura = '{0} de {1} de {2}'.format (dia, mes, ano);
		var html_botoes = CONCATENATE (widgets.FloatMenu ('menu_impressao', I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-edit'})), __kwargtrans__ ({_class: 'botao_editar_matricula', _title: 'Editar Matrícula', _href: window.PhanterPWA.XWAY ('matricular', self.id_escola, self.ano_letivo, 'aluno-conferido', self.id_aluno)})), widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-comments'})), __kwargtrans__ ({_class: 'botao_questionario', _title: 'Questionário Social', _href: window.PhanterPWA.XWAY ('imprimir', 'questionario-social', self.id_escola, self.ano_letivo, self.id_aluno, __kwargtrans__ ({_id_matricula: self.id_matricula}))})), widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-file-pdf'})), __kwargtrans__ ({_class: 'botao_gerar_pdf', _title: 'Gerar PDF', _href: '{0}/api/pdfs/declaracao-de-matricula/{1}?nocache={2}'.format (window.PhanterPWA.ApiServer.remote_address, self.id_matricula, now)})), widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-print'})), __kwargtrans__ ({_title: 'Imprimir documento', _class: 'botao_imprimir_diario_de_notas', _onclick: 'print();'}))));
		html_botoes.html_to ('#botoes_de_comando_impressao');
		var id_escola = json.data.id_escola;
		var nome_escola = json.data.nome_escola;
		var dados_escola = json.data.dados_escola;
		var ano_letivo = json.data.ano_letivo;
		var nome_do_aluno = json.data.matricula.nome_do_aluno;
		var naturalidade = json.data.naturalidade;
		var nome_do_pai = json.data.matricula.nome_do_pai;
		var nome_da_mae = json.data.matricula.nome_da_mae;
		var cidade = json.data.cidade;
		var serie_subsequente = json.data.serie_subsequente;
		var sexo = json.data.sexo;
		var nome_autoridade = json.data.nome_autoridade;
		var cargo_autoridade = json.data.cargo_autoridade;
		var data_nasc = json.data.data_nasc;
		var __left0__ = data_nasc.py_split ('-');
		var ano2 = __left0__ [0];
		var mes2 = __left0__ [1];
		var dia2 = __left0__ [2];
		var data_nasc_extenso = '{0} de {1} de {2}'.format (dia2, meses [int (mes2) - 1], ano2);
		var oa_alunoa = 'o(a) aluno(a)';
		var filho = 'filho(a)';
		var nasc = 'nascido(a)';
		var filiacao = CONCATENATE (STRONG (nome_do_pai), ' e ', STRONG (nome_da_mae));
		var mats = 'matriculado(a)';
		if (nome_do_pai === null || nome_do_pai == '') {
			var filiacao = STRONG (nome_da_mae);
		}
		if (sexo == 'Masculino' || sexo == '1' || sexo == 1) {
			var nasc = 'nascido';
			var filho = 'filho';
			var oa_alunoa = 'o aluno';
			var mats = 'matriculado';
		}
		else if (sexo == 'Feminino' || sexo == '2' || sexo == 2) {
			var nasc = 'nascida';
			var filho = 'filha';
			var oa_alunoa = 'a aluna';
			var mats = 'matriculada';
		}
		var declaracao = CONCATENATE (P ('A direção da ', nome_escola, ', declara para os devidos', ' fins que ', oa_alunoa, ' ', STRONG (nome_do_aluno), ', ', nasc, ' em ', STRONG (data_nasc_extenso), ', ', filho, ' de ', filiacao, ', natural de ', STRONG (naturalidade), ', foi ', mats, ' junto a(o) ', STRONG (serie_subsequente), ', nesta unidade', ' de ensino no ano letivo de ', STRONG (ano_letivo), '.'), P ('Esta declaração somente será válida sem emendas ou rasuras.'));
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, id_escola);
		if (ajax_status == 'success') {
			var declaracao_matricula_content = DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: '/static/{0}/images/cabecalho_background.jpg'.format (window.PhanterPWA.VERSIONING)})), __kwargtrans__ ({_class: 'back'})), DIV (IMG (__kwargtrans__ ({_src: logo, _style: 'width: 120px; height: 120px;'})), __kwargtrans__ ({_class: 'front'})), __kwargtrans__ ({_class: 'sme_cabecalho_sme'})), DIV (H3 (nome_escola), __kwargtrans__ ({_class: 'sme_cabecalho_sme_nome_escola'})), DIV (H5 (dados_escola), __kwargtrans__ ({_class: 'sme_cabecalho_sme_dados_escola'})), BR (), BR (), BR (), BR (), BR (), BR (), DIV (H2 ('DECLARAÇÃO'), __kwargtrans__ ({_class: 'sme_cabecalho_titulo_documento'})), BR (), BR (), BR (), BR (), BR (), DIV (DIV (declaracao, __kwargtrans__ ({_class: 'p-row'})), BR (), BR (), BR (), BR (), DIV (cidade, ', ', data_assinatura, __kwargtrans__ ({_class: 'p-row  tudo_centralizado cidade_e_data'})), BR (), BR (), BR (), BR (), BR (), BR (), DIV (TABLE (TR (TD ('___________________________________________')), TR (TD (nome_autoridade)), TR (TD (cargo_autoridade, __kwargtrans__ ({_class: 'miudinho'}))), __kwargtrans__ ({_class: 'tudo_centralizado'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'sme_documento_conteudo conteudo_declaracao'})), __kwargtrans__ ({_id: 'pagina_{0}_declaracao'.format (self.id_matricula), _class: 'p-row'})), __kwargtrans__ ({_class: 'imprimir_matricula_wrapper imprimir_documentos_wrapper'})), __kwargtrans__ ({_class: 'imprimir_matricula_container'}))), __kwargtrans__ ({_class: 'media-print-visible'})), __kwargtrans__ ({_class: 'folhas_para_imprimir phanterpwa-simple-media-print'}));
			CONCATENATE (declaracao_matricula_content).html_to ('#documentos-content');
		}
	});},
	get _get_data () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'imprimir', 'matricula', self.id_matricula, __kwargtrans__ ({onComplete: self.after_get}));
	});}
});
export var DeclaracaoDeTransferencia =  __class__ ('DeclaracaoDeTransferencia', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, decorators.check_authorization ((function __lambda__ () {
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
		self.id_matricula = window.PhanterPWA.Request.get_arg (1);
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('IMPRIMIR', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('DECLARAÇÃO DE TRANFERÊNCIA', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-matriculas-imprimir', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})), __kwargtrans__ ({_id: 'documentos-content'})), DIV (__kwargtrans__ ({_id: 'botoes_de_comando_impressao'})));
		html.html_to ('#main-container');
		var BackButton = left_bar.LeftBarButton ('back_imprimir_matricula', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'area-do-servidor', 'position': 'top', 'ways': [(function __lambda__ (r) {
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
			return (r.startswith ('documentos') || r.startswith ('documentos/') ? true : false);
		})]})));
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
		self._get_data ();
	}));},
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
		var json = data.responseJSON;
		self.id_escola = json.data.id_escola;
		self.ano_letivo = json.data.ano_letivo;
		self.id_aluno = json.data.matricula.aluno;
		var meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
		var now = new Date ().getTime ();
		var dia = new Date ().getDate ();
		var mes_int = new Date ().getMonth ();
		var ano = new Date ().getFullYear ();
		var mes = meses [int (mes_int)];
		var data_assinatura = '{0} de {1} de {2}'.format (dia, mes, ano);
		var html_botoes = CONCATENATE (widgets.FloatMenu ('menu_impressao', I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-file-pdf'})), __kwargtrans__ ({_class: 'botao_gerar_pdf', _title: 'Gerar PDF', _href: '{0}/api/pdfs/declaracao-de-transferencia/{1}?nocache={2}'.format (window.PhanterPWA.ApiServer.remote_address, self.id_matricula, now)})), widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-print'})), __kwargtrans__ ({_title: 'Imprimir documento', _class: 'botao_imprimir_diario_de_notas', _onclick: 'print();'}))));
		html_botoes.html_to ('#botoes_de_comando_impressao');
		var id_escola = json.data.id_escola;
		var nome_escola = json.data.nome_escola;
		var dados_escola = json.data.dados_escola;
		var ano_letivo = json.data.ano_letivo;
		var nome_do_aluno = json.data.matricula.nome_do_aluno;
		var naturalidade = json.data.naturalidade;
		var nome_do_pai = json.data.matricula.nome_do_pai;
		var nome_da_mae = json.data.matricula.nome_da_mae;
		var cidade = json.data.cidade;
		var serie_subsequente = json.data.serie_subsequente;
		var serie_proximo_ano = json.data.serie_proximo_ano;
		var resultado_final = json.data.resultado_final;
		var sexo = json.data.sexo;
		var nome_autoridade = json.data.nome_autoridade;
		var cargo_autoridade = json.data.cargo_autoridade;
		var data_nasc = json.data.data_nasc;
		var __left0__ = data_nasc.py_split ('-');
		var ano2 = __left0__ [0];
		var mes2 = __left0__ [1];
		var dia2 = __left0__ [2];
		var data_nasc_extenso = '{0} de {1} de {2}'.format (dia2, meses [int (mes2) - 1], ano2);
		var oa_alunoa = 'o(a) aluno(a)';
		var filho = 'filho(a)';
		var nasc = 'nascido(a)';
		var filiacao = CONCATENATE (STRONG (nome_do_pai), ' e ', STRONG (nome_da_mae));
		var mats = 'matriculado(a)';
		var considerado = 'considerado(a)';
		if (nome_do_pai === null || nome_do_pai == '') {
			var filiacao = STRONG (nome_da_mae);
		}
		if (sexo == 'Masculino' || sexo == '1' || sexo == 1) {
			var nasc = 'nascido';
			var filho = 'filho';
			var oa_alunoa = 'o aluno';
			var mats = 'matriculado';
			var considerado = 'considerado';
			if (resultado_final == 'Aprovado(a)') {
				var resultado_final = 'Aprovado';
			}
			else if (resultado_final == 'Reprovado(a)') {
				var resultado_final = 'Reprovado';
			}
		}
		else if (sexo == 'Feminino' || sexo == '2' || sexo == 2) {
			var nasc = 'nascida';
			var filho = 'filha';
			var oa_alunoa = 'a aluna';
			var mats = 'matriculada';
			var considerado = 'considerada';
			if (resultado_final == 'Aprovado(a)') {
				var resultado_final = 'Aprovada';
			}
			else if (resultado_final == 'Reprovado(a)') {
				var resultado_final = 'Reprovada';
			}
		}
		var declaracao = CONCATENATE (P ('A direção da ', nome_escola, ', declara para os devidos', ' fins que ', oa_alunoa, ' ', STRONG (nome_do_aluno), ', ', nasc, ' em ', STRONG (data_nasc_extenso), ', ', filho, ' de ', filiacao, ', natural de ', STRONG (naturalidade), ', foi ', mats, ' junto a(o) ', STRONG (serie_subsequente), ', nesta unidade', ' de ensino no ano letivo de ', STRONG (ano_letivo), ', tendo sido ', considerado, ' ', STRONG (resultado_final), ', portanto tendo direito a matricular-se no(a) ', STRONG (serie_proximo_ano), '.'), P ('Esta declaração somente será válida sem emendas ou rasuras.'));
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, id_escola);
		if (ajax_status == 'success') {
			var declaracao_matricula_content = DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: '/static/{0}/images/cabecalho_background.jpg'.format (window.PhanterPWA.VERSIONING)})), __kwargtrans__ ({_class: 'back'})), DIV (IMG (__kwargtrans__ ({_src: logo, _style: 'width: 120px; height: 120px;'})), __kwargtrans__ ({_class: 'front'})), __kwargtrans__ ({_class: 'sme_cabecalho_sme'})), DIV (H3 (nome_escola), __kwargtrans__ ({_class: 'sme_cabecalho_sme_nome_escola'})), DIV (H5 (dados_escola), __kwargtrans__ ({_class: 'sme_cabecalho_sme_dados_escola'})), BR (), BR (), BR (), BR (), BR (), BR (), DIV (H2 ('DECLARAÇÃO'), __kwargtrans__ ({_class: 'sme_cabecalho_titulo_documento'})), BR (), BR (), BR (), BR (), BR (), DIV (DIV (declaracao, __kwargtrans__ ({_class: 'p-row'})), BR (), BR (), BR (), BR (), DIV (cidade, ', ', data_assinatura, __kwargtrans__ ({_class: 'p-row  tudo_centralizado cidade_e_data'})), BR (), BR (), BR (), BR (), BR (), BR (), DIV (TABLE (TR (TD ('___________________________________________')), TR (TD (nome_autoridade)), TR (TD (cargo_autoridade, __kwargtrans__ ({_class: 'miudinho'}))), __kwargtrans__ ({_class: 'tudo_centralizado'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'sme_documento_conteudo conteudo_declaracao'})), __kwargtrans__ ({_id: 'pagina_{0}_declaracao'.format (self.id_matricula), _class: 'p-row'})), __kwargtrans__ ({_class: 'imprimir_matricula_wrapper imprimir_documentos_wrapper'})), __kwargtrans__ ({_class: 'imprimir_matricula_container'}))), __kwargtrans__ ({_class: 'media-print-visible'})), __kwargtrans__ ({_class: 'folhas_para_imprimir phanterpwa-simple-media-print'}));
			CONCATENATE (declaracao_matricula_content).html_to ('#documentos-content');
		}
	});},
	get _get_data () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'imprimir', 'matricula', self.id_matricula, __kwargtrans__ ({onComplete: self.after_get}));
	});}
});
export var FichaIndividualDoAluno =  __class__ ('FichaIndividualDoAluno', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, decorators.check_authorization ((function __lambda__ () {
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
		self.id_matricula = window.PhanterPWA.Request.get_arg (1);
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('IMPRIMIR', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('FICHA INDIVIDUAL DO ALUNO', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-matriculas-imprimir', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})), __kwargtrans__ ({_id: 'documentos-content'})), DIV (__kwargtrans__ ({_id: 'botoes_de_comando_impressao'})));
		html.html_to ('#main-container');
		var BackButton = left_bar.LeftBarButton ('back_imprimir_matricula', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'area-do-servidor', 'position': 'top', 'ways': [(function __lambda__ (r) {
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
			return (r.startswith ('documentos') || r.startswith ('documentos/') ? true : false);
		})]})));
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
		self._get_data ();
	}));},
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
		var json = data.responseJSON;
		self.id_escola = json.data.id_escola;
		self.ano_letivo = json.data.ano_letivo;
		self.id_aluno = json.data.id_aluno;
		var meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
		var now = new Date ().getTime ();
		var dia = new Date ().getDate ();
		var mes_int = new Date ().getMonth ();
		var ano = new Date ().getFullYear ();
		var mes = meses [int (mes_int)];
		var data_assinatura = '{0} de {1} de {2}'.format (dia, mes, ano);
		var html_botoes = CONCATENATE (widgets.FloatMenu ('menu_impressao', I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-file-pdf'})), __kwargtrans__ ({_class: 'botao_gerar_pdf', _title: 'Gerar PDF', _href: '{0}/api/pdfs/declaracao-de-transferencia/{1}?nocache={2}'.format (window.PhanterPWA.ApiServer.remote_address, self.id_matricula, now)})), widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-print'})), __kwargtrans__ ({_title: 'Imprimir documento', _class: 'botao_imprimir_diario_de_notas', _onclick: 'print();'}))));
		html_botoes.html_to ('#botoes_de_comando_impressao');
		var id_escola = json.data.id_escola;
		var nome_escola = json.data.nome_escola;
		var dados_escola = json.data.dados_escola;
		var ano_letivo = json.data.ano_letivo;
		var nome_do_aluno = json.data.nome_do_aluno;
		var naturalidade = json.data.naturalidade;
		var nome_do_pai = json.data.nome_do_pai;
		var nome_da_mae = json.data.nome_da_mae;
		var sexo = json.data.sexo;
		var data_de_nascimento_formatada = json.data.data_de_nascimento_formatada;
		var nome_autoridade = json.data.nome_autoridade;
		var cargo_autoridade = json.data.cargo_autoridade;
		var turma = json.data.turma;
		var turno = json.data.turno;
		var serie_e_ensino = json.data.serie_e_ensino;
		var resultado_final = json.data.resultado_final;
		var oa_alunoa = 'o(a) aluno(a)';
		var filho = 'filho(a)';
		var nasc = 'nascido(a)';
		var mats = 'matriculado(a)';
		var considerado = 'considerado(a)';
		if (nome_do_pai === null || nome_do_pai == '') {
			var nome_do_pai = '';
		}
		var DO_AL = 'DO(A) ALUNO(A)';
		var nome_do_aluno_h = 'Nome do(a) aluno(a)';
		if (sexo == 'Masculino' || sexo == '1' || sexo == 1) {
			var DO_AL = 'DO ALUNO';
			var nome_do_aluno_h = 'Nome do aluno';
			var nasc = 'nascido';
			var filho = 'filho';
			var oa_alunoa = 'o aluno';
			var mats = 'matriculado';
			var considerado = 'considerado';
			if (resultado_final == 'Aprovado(a)') {
				var resultado_final = 'Aprovado';
			}
			else if (resultado_final == 'Reprovado(a)') {
				var resultado_final = 'Reprovado';
			}
		}
		else if (sexo == 'Feminino' || sexo == '2' || sexo == 2) {
			var DO_AL = 'DA ALUNA';
			var nome_do_aluno_h = 'Nome da aluna';
			var nasc = 'nascida';
			var filho = 'filha';
			var oa_alunoa = 'a aluna';
			var mats = 'matriculada';
			var considerado = 'considerada';
			if (resultado_final == 'Aprovado(a)') {
				var resultado_final = 'Aprovada';
			}
			else if (resultado_final == 'Reprovado(a)') {
				var resultado_final = 'Reprovada';
			}
		}
		var dados_aluno = DIV (DIV (DIV (LABEL ('Dados do Aluno'), TABLE (TR (TD (STRONG (nome_do_aluno_h, ': '), nome_do_aluno, __kwargtrans__ ({_colspan: 1}))), TR (TD (STRONG ('Data de Nascimento', ': '), data_de_nascimento_formatada), TD (STRONG ('Naturalidade', ': '), naturalidade)), TR (TD (STRONG ('Nome do pai', ': '), nome_do_pai, __kwargtrans__ ({_colspan: '1'}))), TR (TD (STRONG ('Nome da mãe', ': '), nome_da_mae, __kwargtrans__ ({_colspan: '1'})))), __kwargtrans__ ({_class: 'phanterpwa-xsection'})), __kwargtrans__ ({_class: 'phanterpwa-xsection-container'})), __kwargtrans__ ({_class: 'p-row'}));
		var dados_serie = DIV (DIV (DIV (LABEL ('Dados da Turma'), TABLE (TR (TD (STRONG ('Turma', ': '), turma), TD (STRONG ('Turno', ': '), turno)), TR (TD (STRONG ('Série', ': '), serie_e_ensino, __kwargtrans__ ({_colspan: '2'})))), __kwargtrans__ ({_class: 'phanterpwa-xsection'})), __kwargtrans__ ({_class: 'phanterpwa-xsection-container'})), __kwargtrans__ ({_class: 'p-row'}));
		var tabela = TABLE (__kwargtrans__ ({_class: 'tabela_ficha_individual'}));
		for (var y of json.data.ficha_individual) {
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
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, id_escola);
		if (ajax_status == 'success') {
			var declaracao_matricula_content = DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: '/static/{0}/images/cabecalho_background.jpg'.format (window.PhanterPWA.VERSIONING)})), __kwargtrans__ ({_class: 'back'})), DIV (IMG (__kwargtrans__ ({_src: logo, _style: 'width: 120px; height: 120px;'})), __kwargtrans__ ({_class: 'front'})), __kwargtrans__ ({_class: 'sme_cabecalho_sme'})), DIV (H3 (nome_escola), __kwargtrans__ ({_class: 'sme_cabecalho_sme_nome_escola'})), DIV (H5 (dados_escola), __kwargtrans__ ({_class: 'sme_cabecalho_sme_dados_escola'})), DIV (H2 ('FICHA INDIVIDUAL ', DO_AL, ' ', ano_letivo), __kwargtrans__ ({_class: 'sme_cabecalho_titulo_documento'})), BR (), DIV (dados_aluno, BR (), dados_serie, BR (), H3 ('RESULTADOS OBTIDOS', __kwargtrans__ ({_class: 'tudo_centralizado'})), tabela, BR (), BR (), BR (), BR (), BR (), DIV (TABLE (TR (TD ('___________________________________________')), TR (TD (nome_autoridade)), TR (TD (cargo_autoridade, __kwargtrans__ ({_class: 'miudinho'}))), __kwargtrans__ ({_class: 'tudo_centralizado'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'sme_documento_conteudo'})), __kwargtrans__ ({_id: 'pagina_{0}_declaracao'.format (self.id_matricula), _class: 'p-row'})), __kwargtrans__ ({_class: 'imprimir_matricula_wrapper imprimir_documentos_wrapper'})), __kwargtrans__ ({_class: 'imprimir_matricula_container'}))), __kwargtrans__ ({_class: 'media-print-visible'})), __kwargtrans__ ({_class: 'folhas_para_imprimir phanterpwa-simple-media-print'}));
			CONCATENATE (declaracao_matricula_content).html_to ('#documentos-content');
		}
	});},
	get _get_data () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'imprimir', 'ficha-individual', self.id_matricula, __kwargtrans__ ({onComplete: self.after_get}));
	});}
});
export var AtaDeResultadosFinais =  __class__ ('AtaDeResultadosFinais', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, decorators.check_authorization ((function __lambda__ () {
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
		self.id_escola = window.PhanterPWA.Request.get_arg (1);
		self.ano_letivo = window.PhanterPWA.Request.get_arg (2);
		self.id_turma = window.PhanterPWA.Request.get_arg (3);
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('IMPRIMIR', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('ATAS DE RESULTADOS FINAIS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-matriculas-imprimir', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})), __kwargtrans__ ({_id: 'documentos-content'})), DIV (__kwargtrans__ ({_id: 'botoes_de_comando_impressao'})));
		html.html_to ('#main-container');
		var BackButton = left_bar.LeftBarButton ('back_imprimir_matricula', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'area-do-servidor', 'position': 'top', 'ways': [(function __lambda__ (r) {
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
			return (r.startswith ('documentos') || r.startswith ('documentos/') ? true : false);
		})]})));
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
		self._get_data ();
	}));},
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
		var json = data.responseJSON;
		self.id_escola = json.data.id_escola;
		self.ano_letivo = json.data.ano_letivo;
		self.id_aluno = json.data.id_aluno;
		var meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
		var now = new Date ().getTime ();
		var dia = new Date ().getDate ();
		var mes_int = new Date ().getMonth ();
		var ano = new Date ().getFullYear ();
		var mes = meses [int (mes_int)];
		var data_assinatura = '{0} de {1} de {2}'.format (dia, mes, ano);
		var html_botoes = CONCATENATE (widgets.FloatMenu ('menu_impressao', I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-file-pdf'})), __kwargtrans__ ({_class: 'botao_gerar_pdf', _title: 'Gerar PDF', _href: '{0}/api/pdfs/declaracao-de-transferencia/{1}?nocache={2}'.format (window.PhanterPWA.ApiServer.remote_address, self.id_matricula, now)})), widgets.FloatButton (I (__kwargtrans__ ({_class: 'fas fa-print'})), __kwargtrans__ ({_title: 'Imprimir documento', _class: 'botao_imprimir_diario_de_notas', _onclick: 'print();'}))));
		html_botoes.html_to ('#botoes_de_comando_impressao');
		var nome_escola = json.data.nome_escola;
		var dados_escola = json.data.dados_escola;
		var ano_letivo = json.data.ano_letivo;
		var eh_multi = json.data.ata_de_resultados_finais.eh_multi;
		var naturalidade = json.data.naturalidade;
		var nome_do_pai = json.data.nome_do_pai;
		var nome_da_mae = json.data.nome_da_mae;
		var sexo = json.data.sexo;
		var data_de_nascimento_formatada = json.data.data_de_nascimento_formatada;
		var nome_autoridade = json.data.nome_autoridade;
		var cargo_autoridade = json.data.cargo_autoridade;
		var turma = json.data.turma;
		var turno = json.data.turno;
		var serie_e_ensino = json.data.serie_e_ensino;
		var resultado_final = json.data.resultado_final;
		var oa_alunoa = 'o(a) aluno(a)';
		var filho = 'filho(a)';
		var nasc = 'nascido(a)';
		var mats = 'matriculado(a)';
		var considerado = 'considerado(a)';
		if (nome_do_pai === null || nome_do_pai == '') {
			var nome_do_pai = '';
		}
		var series_multi = [];
		var anunciado = XML (json.data.anunciado);
		var dados_serie = '';
		var disciplinas = json.data.ata_de_resultados_finais.disciplinas_ordem;
		var linha_cabecalho_educacao = TR (TH ('Nº', __kwargtrans__ ({_class: 'disciplina_atas_ed'})), TH ('Nome do(a) aluno(a)', __kwargtrans__ ({_class: 'disciplina_atas_ed'})), TH ('Parecer Final', __kwargtrans__ ({_class: 'disciplina_atas_ed'})));
		var tabela_educacao = TABLE (linha_cabecalho_educacao, __kwargtrans__ ({_class: 'tabela_educacao_infantil tabela_resultados_ata'}));
		var tem_dados_educacao_infantil = false;
		for (var c of json.data.ata_de_resultados_finais.resultados_finais_educacao) {
			var tem_dados_educacao_infantil = true;
			var numero_aluno = c [0].numero_do_aluno;
			var nome_aluno = c [0].nome_do_aluno;
			var colunas = [TH (numero_aluno, __kwargtrans__ ({_class: 'nome_do_aluno_atas'})), TH (nome_aluno, __kwargtrans__ ({_class: 'nome_do_aluno_atas'}))];
			if (eh_multi && !__in__ (c [0].serie, series_multi)) {
				tabela_educacao.append (TR (TH (c [0].serie, __kwargtrans__ ({_class: 'serie_multisseriada_cabecalho', _colspan: 3}))));
				series_multi.append (c [0].serie);
			}
			if (c [1] == 'Desistente' || c [1] == 'Transferido(a)') {
				var class_add = (c [1] == 'Transferido(a)' ? ' transferido' : ' desistente');
				colunas.append (TH (c [1], __kwargtrans__ ({_class: 'desistente_transferido_atas{0}'.format (class_add)})));
			}
			else if (c [2] !== null) {
				colunas.append (TD (c [2], __kwargtrans__ ({_class: 'notas_disciplina_atas'})));
			}
			else {
				colunas.append (TD ('Não foi atribuido um parecer final a(o) referente aluno(a)!', __kwargtrans__ ({_class: 'notas_disciplina_atas sem_dados'})));
			}
			var linha = TR (...colunas);
			tabela_educacao.append (linha);
		}
		var linha_cabecalho = TR (TH (DIV ('Número do(a) aluno(a)', __kwargtrans__ ({_class: 'rotate'})), __kwargtrans__ ({_class: 'disciplina_atas_rotate cabecalho_rotate disciplina_atas_ed'})), TH (CANVAS (__kwargtrans__ ({_id: 'myCanvas', _width: 300, _height: 300})), DIV ('NOME DO(A) ALUNO(A)', __kwargtrans__ ({_class: 'rotulo_alunos_atas'})), DIV ('DISCIPLINAS', __kwargtrans__ ({_class: 'rotulo_disciplinas_atas'})), __kwargtrans__ ({_class: 'caixa_vazia rotulo_diciplinas_alunos_atas disciplina_atas_ed'})), ...(function () {
			var __accu0__ = [];
			for (var x of disciplinas) {
				__accu0__.append (TH (DIV (x, __kwargtrans__ ({_class: 'rotate'})), __kwargtrans__ ({_class: 'disciplina_atas_rotate cabecalho_rotate disciplina_atas_ed'})));
			}
			return __accu0__;
		}) ());
		var tabela_fundamental = TABLE (linha_cabecalho, __kwargtrans__ ({_class: 'tabela_fundamental tabela_resultados_ata'}));
		linha_cabecalho.append (TH (DIV ('Resultado', __kwargtrans__ ({_class: 'rotate'})), __kwargtrans__ ({_class: 'disciplina_atas_rotate cabecalho_rotate disciplina_atas_ed'})));
		var tem_aluno_fundamental = false;
		for (var c of json.data.ata_de_resultados_finais.resultados_finais) {
			var tem_aluno_fundamental = true;
			var numero_aluno = c [0].numero_do_aluno;
			var nome_aluno = c [0].nome_do_aluno;
			var colunas = [TH (numero_aluno, __kwargtrans__ ({_class: 'nome_do_aluno_atas'})), TH (nome_aluno, __kwargtrans__ ({_class: 'nome_do_aluno_atas'}))];
			if (eh_multi && !__in__ (c [0].serie, series_multi)) {
				tabela_fundamental.append (TR (TH (c [0].serie, __kwargtrans__ ({_class: 'serie_multisseriada_cabecalho', _colspan: len (disciplinas) + 3}))));
				series_multi.append (c [0].serie);
			}
			if (c [1] == 'Desistente' || c [1] == 'Transferido(a)') {
				var class_add = (c [1] == 'Transferido(a)' ? ' transferido' : ' desistente');
				colunas.append (TH (c [1], __kwargtrans__ ({_class: 'desistente_transferido_atas{0}'.format (class_add), _colspan: len (disciplinas) + 1})));
			}
			else {
				if (c [2] !== null) {
					var dict_dis_al = dict (c [2]);
					for (var x of disciplinas) {
						if (__in__ (x, dict_dis_al)) {
							var class_add = (dict_dis_al [x].vermelho ? ' vermelho' : '');
							colunas.append (TD (dict_dis_al [x].nota, __kwargtrans__ ({_class: 'notas_disciplina_atas{0}'.format (class_add)})));
						}
						else {
							colunas.append (TD ('', __kwargtrans__ ({_class: 'notas_disciplina_atas sem_dados'})));
						}
					}
				}
				else {
					for (var x of disciplinas) {
						colunas.append (TD ('', __kwargtrans__ ({_class: 'notas_disciplina_atas sem_dados'})));
					}
				}
				var legenda = '?';
				if ('Aprovado(a)' == c [1]) {
					var legenda = 'AP';
				}
				else if ('Reprovado(a)' == c [1]) {
					var legenda = 'RP';
				}
				else if ('Aprovado(a) no Conselho' == c [1]) {
					var legenda = 'APC';
				}
				else if ('Reprovado(a) no Conselho' == c [1]) {
					var legenda = 'RPC';
				}
				colunas.append (TD (legenda, __kwargtrans__ ({_class: 'resultado_legenda'})));
			}
			var linha = TR (...colunas);
			tabela_fundamental.append (linha);
		}
		tabela_fundamental.append (TR (TD (DIV (DIV (STRONG ('LEGENDA')), DIV (DIV (STRONG ('AP'), ' - APROVADO(A)', __kwargtrans__ ({_class: 'p-col w1p50'})), DIV (STRONG ('APC'), ' - APROVADO(A) NO CONSELHO', __kwargtrans__ ({_class: 'p-col w1p50'})), DIV (STRONG ('RP'), ' - REPROVADO(A)', __kwargtrans__ ({_class: 'p-col w1p50'})), DIV (STRONG ('RPC'), ' - REPROVADO(A) NO CONSELHO', __kwargtrans__ ({_class: 'p-col w1p50'})), DIV (STRONG ('*'), ' -  MÉDIA CONFORME PARECER DO CONSELHO DE CLASSE', __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'painel_legenda_ata'})), __kwargtrans__ ({_colspan: len (disciplinas) + 3}))));
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.id_escola);
		if (ajax_status == 'success') {
			var declaracao_matricula_content = DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: '/static/{0}/images/cabecalho_background.jpg'.format (window.PhanterPWA.VERSIONING)})), __kwargtrans__ ({_class: 'back'})), DIV (IMG (__kwargtrans__ ({_src: logo, _style: 'width: 120px; height: 120px;'})), __kwargtrans__ ({_class: 'front'})), __kwargtrans__ ({_class: 'sme_cabecalho_sme'})), DIV (H3 (nome_escola), __kwargtrans__ ({_class: 'sme_cabecalho_sme_nome_escola'})), DIV (H5 (dados_escola), __kwargtrans__ ({_class: 'sme_cabecalho_sme_dados_escola'})), DIV (H3 ('ATA DE RESULTADOS FINAIS', __kwargtrans__ ({_class: 'tudo_centralizado'})), __kwargtrans__ ({_class: 'sme_cabecalho_titulo_documento'})), DIV (P (anunciado), (tem_dados_educacao_infantil ? tabela_educacao : ''), (tem_aluno_fundamental ? tabela_fundamental : ''), P ('E, Para constar, eu, ', '__________________________________________________', ', Secretário(a), lavrei a presente ata que vai assinada ', 'por mim e pelo(a) Diretor(a) do estabelecimento.'), BR (), BR (), DIV (TABLE (TR (TD ('___________________________________________'), TD ('___________________________________________')), TR (TD ('Diretor(a)', __kwargtrans__ ({_class: 'miudinho'})), TD ('Secretário)', __kwargtrans__ ({_class: 'miudinho'}))), __kwargtrans__ ({_class: 'tudo_centralizado'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'sme_documento_conteudo'})), __kwargtrans__ ({_id: 'pagina_{0}_declaracao'.format (self.id_matricula), _class: 'p-row'})), __kwargtrans__ ({_class: 'imprimir_matricula_wrapper imprimir_documentos_wrapper'})), __kwargtrans__ ({_class: 'imprimir_ata_de_resultados'}))), __kwargtrans__ ({_class: 'media-print-visible'})), __kwargtrans__ ({_class: 'folhas_para_imprimir phanterpwa-simple-media-print'}));
			CONCATENATE (declaracao_matricula_content).html_to ('#documentos-content');
			var c = $ ('#myCanvas') [0];
			var ctx = c.getContext ('2d');
			ctx.lineWidth = 1;
			ctx.beginPath ();
			ctx.moveTo (0, 0);
			ctx.lineTo (300, 300);
			ctx.stroke ();
			var altura = $ ('.caixa_vazia.rotulo_diciplinas_alunos_atas').height ();
			var largura = $ ('.caixa_vazia.rotulo_diciplinas_alunos_atas').width ();
			$ ('#myCanvas').width (largura).height (altura);
		}
	});},
	get _get_data () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'imprimir', 'ata-de-resultados-finais', self.id_escola, self.ano_letivo, self.id_turma, __kwargtrans__ ({onComplete: self.after_get}));
	});}
});
export var TotalDeMatriculados =  __class__ ('TotalDeMatriculados', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, parent, id_escola, ano_letivo) {
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
					}
				}
			}
		}
		else {
		}
		self.parent = parent;
		self.id_escola = id_escola;
		self.ano_letivo = ano_letivo;
		self.initialize ();
	});},
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
		return window.PhanterPWA.auth_user_has_role (['administrator', 'root', 'Administrador Master SME']);
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
		self.id_matricula = window.PhanterPWA.Request.get_arg (1);
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('IMPRIMIR', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('TOTAL DE MATRÍCULAS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-matriculas-imprimir', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})), __kwargtrans__ ({_id: 'documentos-content'})), DIV (__kwargtrans__ ({_id: 'documento-lista-alunos'})), DIV (__kwargtrans__ ({_id: 'documento-lista-desistentes'})), DIV (__kwargtrans__ ({_id: 'documento-lista-transferidos'})), DIV (__kwargtrans__ ({_id: 'documento-lista-novatos'})));
		html.html_to ('#main-container');
		var BackButton = left_bar.LeftBarButton ('back_imprimir_matricula', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'area-do-servidor', 'position': 'top', 'ways': [(function __lambda__ (r) {
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
			return (r.startswith ('documentos') || r.startswith ('documentos/') ? true : false);
		})]})));
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
		self._get_data ();
	}));},
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
		var json = data.responseJSON;
		var total_geral = json.data.total_geral;
		var desistentes = json.data.conta_alunos_desistentes;
		var transferidos = json.data.conta_alunos_transferidos;
		var novatos = json.data.total_novatos;
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, 12);
		var html_escolas = DIV (__kwargtrans__ ({_class: 'p-row'}));
		for (var y of dict (json.data.total_alunos_por_escola).py_keys ()) {
			var x = json.data.total_alunos_por_escola [y];
			html_escolas.append (CONCATENATE (DIV (H4 (x.nome_escola), DIV (DIV (DIV (STRONG ('EFETIVADOS: '), x.total_alunos, ' (', STRONG (x.total_novatos), ' novatos)', __kwargtrans__ ({_class: 'p-col w1p100 w3p100'}))), DIV (STRONG ('DESISTENTES: '), x.total_desistetes, __kwargtrans__ ({_class: 'p-col w1p100 w3p50'})), DIV (STRONG ('TRANSFERIDOS: '), x.total_transferidos, __kwargtrans__ ({_class: 'p-col w1p100 w3p50'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_style: 'padding: 5px; border-radius: 5px; border: 1px solid grey;'})), HR ()));
		}
		if (ajax_status == 'success') {
			var folhas_content = DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: '/static/{0}/images/cabecalho_background.jpg'.format (window.PhanterPWA.VERSIONING)})), __kwargtrans__ ({_class: 'back'})), DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'front'})), __kwargtrans__ ({_class: 'sme_cabecalho_sme'})), DIV (H2 ('RESUMO DAS MATRÍCULAS EFETIVADAS'), __kwargtrans__ ({_class: 'sme_cabecalho_titulo_documento'})), DIV (XSECTION (LABEL ('Total de Alunos matriculados'), DIV (DIV (DIV (DIV (STRONG ('EFETIVADOS: '), total_geral, __kwargtrans__ ({_class: 'p-col w1p100 w3p100'})), P ('As matrículas efetivadas acima são descontanto os desistentes e transferidos.', ' Das mastrículas efetivadas, ', STRONG (novatos), ' matrículas são de novatos.')), DIV (STRONG ('DESISTENTES: '), desistentes, __kwargtrans__ ({_class: 'p-col w1p100 w3p50'})), DIV (STRONG ('TRANSFERIDOS: '), transferidos, __kwargtrans__ ({_class: 'p-col w1p100 w3p50'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'e-padding_10'}))), XSECTION (LABEL ('Matrículas distribuidas por escola'), DIV (html_escolas, __kwargtrans__ ({_class: 'e-padding_10'}))), __kwargtrans__ ({_class: 'sme_documento_conteudo'})), __kwargtrans__ ({_id: 'pagina_1_matricula', _class: 'p-row'})), __kwargtrans__ ({_class: 'a4'})), __kwargtrans__ ({_class: 'phanterpwa-media-print'}))), __kwargtrans__ ({_class: 'phanterpwa-paper-a4'})), __kwargtrans__ ({_class: 'folhas_para_imprimir phanterpwa-media-print-container'}));
			folhas_content.html_to ('#documentos-content');
			var lista_escola = [];
			var dict_escola = dict ({});
			var html_lista_novatos = DIV (__kwargtrans__ ({_class: 'p-row'}));
			for (var a of json.data.alunos_novatos) {
				var data_de_nascimento = validations.format_iso_date_datetime (a.data_de_nascimento, 'dd/MM/yyyy', 'date');
				if (!(__in__ (a.escola, lista_escola))) {
					lista_escola.append (a.escola);
					html_lista_novatos.append (H3 (a.escola));
					var table = XTABLE ('tabela_escola_{0}'.format (a.id_escola), XTRH ('tabela_th_escola_{0}'.format (a.id_escola), 'Nome', 'Data de Nascimento', 'Nome da Mãe', 'Endereço'), TR (TH (a.serie, __kwargtrans__ ({_colspan: 4, _style: 'background-color: grey; color: white;'}))));
					html_lista_novatos.append (table);
					html_lista_novatos.append (HR ());
					dict_escola [a.id_escola] = dict ({'serie': [a.serie]});
				}
				else if (!(__in__ (a.serie, dict_escola [a.id_escola] ['serie']))) {
					dict_escola [a.id_escola] ['serie'].append (a.serie);
					table.append (TR (TH (a.serie, __kwargtrans__ ({_colspan: 4, _style: 'background-color: grey; color: white;'}))));
				}
				table.append (XTRH ('tabela_aluno_escola_{0}'.format (a.matricula), a.nome, data_de_nascimento, a.nome_da_mae, a.endereco));
			}
			var folha2_content = DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: '/static/{0}/images/cabecalho_background.jpg'.format (window.PhanterPWA.VERSIONING)})), __kwargtrans__ ({_class: 'back'})), DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'front'})), __kwargtrans__ ({_class: 'sme_cabecalho_sme'})), DIV (H2 ('LISTA DE ALUNOS NOVATOS POR ESCOLA E SÉRIE'), __kwargtrans__ ({_class: 'sme_cabecalho_titulo_documento'})), DIV (html_lista_novatos, __kwargtrans__ ({_class: 'sme_documento_conteudo'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'a4'})), __kwargtrans__ ({_class: 'phanterpwa-media-print'}))), __kwargtrans__ ({_class: 'phanterpwa-paper-a4'})), __kwargtrans__ ({_class: 'folhas_para_imprimir phanterpwa-media-print-container'}));
			folha2_content.html_to ('#documento-lista-novatos');
		}
	});},
	get _get_data () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'estatisticas', 'matriculas', self.id_escola, self.ano_letivo, __kwargtrans__ ({onComplete: self.after_get}));
	});}
});
export var AlunosTransporte =  __class__ ('AlunosTransporte', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, parent, id_escola, ano_letivo) {
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
					}
				}
			}
		}
		else {
		}
		self.parent = parent;
		self.id_escola = id_escola;
		self.ano_letivo = ano_letivo;
		self.initialize ();
	});},
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
		return window.PhanterPWA.auth_user_has_role (['administrator', 'root', 'Administrador Master SME']);
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
		self.id_matricula = window.PhanterPWA.Request.get_arg (1);
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('IMPRIMIR', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('ZONAS DE TRANSPORTE', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-alunos-transporte', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})), __kwargtrans__ ({_id: 'documentos-content'})), DIV (__kwargtrans__ ({_id: 'documento-lista-alunos'})), DIV (__kwargtrans__ ({_id: 'documento-lista-desistentes'})), DIV (__kwargtrans__ ({_id: 'documento-lista-transferidos'})), DIV (__kwargtrans__ ({_id: 'documento-lista-novatos'})));
		html.html_to ('#main-container');
		var BackButton = left_bar.LeftBarButton ('back_imprimir_matricula', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'area-do-servidor', 'position': 'top', 'ways': [(function __lambda__ (r) {
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
			return (r.startswith ('documentos') || r.startswith ('documentos/') ? true : false);
		})]})));
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
		self._get_data ();
	}));},
	get _get_data () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'estatisticas', 'transporte', self.id_escola, self.ano_letivo, __kwargtrans__ ({onComplete: self.after_get}));
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
		var json = data.responseJSON;
		self.localidades = dict (json.data.localidades);
		self.escola = json.data.escola;
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.id_escola);
		if (ajax_status == 'success') {
			var html_lista_novatos = DIV (__kwargtrans__ ({_class: 'p-row'}));
			var table = XTABLE ('tabela_escola_{0}'.format (self.id_escola), XTRH ('tabela_th_escola_{0}'.format (self.id_escola), 'Nome', 'Data de Nascimento', 'Série', 'Turno', 'Endereço', ' '));
			self.conta_localidades = dict ();
			for (var loc_ of self.localidades.py_keys ()) {
				self.conta_localidades [loc_] = 0;
				table.append (TR (TH (loc_, __kwargtrans__ ({_colspan: '6', _style: 'text-align: center; background-color: grey;'}))));
				for (var aln of self.localidades [loc_]) {
					self.conta_localidades [loc_]++;
					var data_de_nascimento = validations.format_iso_date_datetime (aln.data_de_nascimento, 'dd/MM/yyyy', 'date');
					table.append (XTRD ('tabela_th_aluno_{0}'.format (aln.id_aluno), aln.aluno, data_de_nascimento, aln.serie, aln.turno, aln.endereco, TD (A (I (__kwargtrans__ ({_class: 'fas fa-list-alt'})), __kwargtrans__ (dict ({'_class': 'botao_turma_detalhada icon_button', '_title': 'Turmas detalhadas', '_href': window.PhanterPWA.XWAY ('alunos', aln.id_aluno, 'editar'), '_target': '_blank'}))))));
				}
			}
			var tabela_resu = XTABLE ('tabela_resumo_localidade_{0}'.format (self.id_escola), XTRH ('tabela_th_resumo_localidade_{0}'.format (self.id_escola), 'Zona de Transporte', 'Quantidade de Alunos'));
			var id_total_locs = 0;
			for (var conts of self.conta_localidades.py_keys ()) {
				id_total_locs++;
				tabela_resu.append (XTRD ('tabela_resumo_localidade_dados_{0}'.format (id_total_locs), conts, self.conta_localidades [conts]));
			}
			var folha2_content = DIV (DIV (DIV (DIV (DIV (DIV (DIV (H2 ('ZONAS DE TRANSPORTE E SUAS RESPECTIVAS QUANTIDADE DE ALUNOS'), __kwargtrans__ ({_class: 'sme_cabecalho_titulo_documento'})), DIV (tabela_resu, __kwargtrans__ ({_class: 'sme_documento_conteudo'})), __kwargtrans__ ({_class: 'p-row'})), DIV (DIV (H2 ('LISTA DE ALUNOS POR ZONA DE TRANSPORTE'), __kwargtrans__ ({_class: 'sme_cabecalho_titulo_documento'})), DIV (table, __kwargtrans__ ({_class: 'sme_documento_conteudo'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'p-container extend'})))), __kwargtrans__ ({_class: 'media-print-visible'})), __kwargtrans__ ({_class: 'folhas_para_imprimir phanterpwa-simple-media-print'}));
			folha2_content.html_to ('#content-alunos-transporte');
		}
	});}
});

//# sourceMappingURL=handlers.imprimir.map