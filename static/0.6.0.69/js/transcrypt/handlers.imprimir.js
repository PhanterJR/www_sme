// Transcrypt'ed from Python, 2021-08-18 02:15:22
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
export var H5 = helpers.XmlConstructor.tagger ('h5');
export var HR = helpers.XmlConstructor.tagger ('hr', true);
export var P = helpers.XmlConstructor.tagger ('p');
export var LABEL = helpers.XmlConstructor.tagger ('label');
export var XSECTION = helpers.XSECTION;
export var XTABLE = widgets.Table;
export var XML = helpers.XML;
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
						return '#_phanterpwa:/imprimir/lista-transporte-alunos/{0}/{1}'.format (arg1, ano);
					})}));
				}
				else {
					self.AlunosTransporte = AlunosTransporte (self, arg1, arg2);
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('IMPRIMIR', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('MATRÍCULA', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-matriculas-imprimir', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})), __kwargtrans__ ({_id: 'documentos-content'})));
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
		var data_mat = json.data.matricula.data_mat;
		var data_de_nascimento = validations.format_iso_date_datetime (data_nasc, 'dd/MM/yyyy', 'date');
		var data_assinatura = json.data.data_matricula_formatada;
		var nome_do_aluno_h = 'Nome do(a) Aluno(a)';
		var P1 = ' o(a) aluno(a) estudou ';
		if (sexo == 'Masculino' || sexo == '1' || sexo == 1) {
			var nome_do_aluno_h = 'Nome do Aluno';
			var P1 = ' o aluno estudou ';
		}
		else if (sexo == 'Feminino' || sexo == '2' || sexo == 2) {
			var nome_do_aluno_h = 'Nome da Aluna';
			var P1 = ' a aluna estudou ';
		}
		if (serie_subsequente.startswith ('Creche') || __in__ ('SÉRIE', serie_subsequente.upper ())) {
			var P4 = ' na ';
		}
		else {
			var P4 = ' no ';
		}
		if (serie_anterior !== null && ano_letivo !== null && resultado !== null) {
			if (serie_anterior.startswith ('Creche') || __in__ ('SÉRIE', serie_anterior.upper ())) {
				var P2 = ' na ';
			}
			else {
				var P2 = ' no ';
			}
			var anunciado = CONCATENATE (DIV (P ('No ano letivo de ', STRONG (ano_anterior), P1, P2, STRONG (serie_anterior), ' e foi considerado ', STRONG (resultado_anterior), ' portanto tendo direito a matricular-se ', P4, STRONG (serie_subsequente), '. Ficando sob a responsabilidade de ', STRONG (responsavel), '.'), __kwargtrans__ ({_class: 'p-row'})));
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
		var requerimento = P ('Venho requerer a V. Sª que se digne mandar matricular o aluno supracitado ', P4, STRONG (serie_subsequente), ' deste estabelecimento, ficando sob a responsabilidade de ', STRONG (responsavel), ' declarando estar obrigado e de acordo com todas as exigências constantes no', STRONG (' Regimento Escolar'), ' deste Estabelecimento e outras normas estabelecidas pelo diretor. Nestes termos pede deferimento.');
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, id_escola);
		if (ajax_status == 'success') {
			var folhas_content = DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: '/static/{0}/images/cabecalho_background.jpg'.format (window.PhanterPWA.VERSIONING)})), __kwargtrans__ ({_class: 'back'})), DIV (IMG (__kwargtrans__ ({_src: logo, _style: 'width: 120px; height: 120px;'})), __kwargtrans__ ({_class: 'front'})), __kwargtrans__ ({_class: 'sme_cabecalho_sme'})), DIV (H3 (nome_escola), __kwargtrans__ ({_class: 'sme_cabecalho_sme_nome_escola'})), DIV (H5 (dados_escola), __kwargtrans__ ({_class: 'sme_cabecalho_sme_dados_escola'})), DIV (H2 ('FICHA DE MATRÍCULA'), __kwargtrans__ ({_class: 'sme_cabecalho_titulo_documento'})), DIV (DIV (TABLE (TR (TD (STRONG (nome_do_aluno_h, ': '), nome_do_aluno, __kwargtrans__ ({_colspan: 1}))), TR (TD (STRONG ('Data de Nascimento: '), data_de_nascimento), TD (STRONG ('Naturalidade', ': '), naturalidade)), TR (TD (STRONG ('Nome do pai: '), nome_do_pai, __kwargtrans__ ({_colspan: (prof_pai ? null : 1)})), (prof_pai ? TD (STRONG ('Profissão: '), prof_pai) : '')), TR (TD (STRONG ('Nome da mãe: '), nome_da_mae, __kwargtrans__ ({_colspan: (prof_mae ? null : 1)})), (prof_mae ? TD (STRONG ('Profissão: '), prof_mae) : '')), TR (TD (STRONG ('Endereço: '), endereco, __kwargtrans__ ({_colspan: 1})))), __kwargtrans__ ({_class: 'p-row'})), DIV (anunciado, __kwargtrans__ ({_class: 'p-row'})), DIV (resumo, __kwargtrans__ ({_class: 'p-row'})), DIV (cidade, ', ', data_assinatura, __kwargtrans__ ({_class: 'p-row  tudo_centralizado cidade_e_data'})), DIV (TABLE (TR (TD ('___________________________________________'), TD ('___________________________________________')), TR (TD (nome_autoridade), TD (responsavel)), TR (TD (cargo_autoridade, __kwargtrans__ ({_class: 'miudinho'})), TD ('Responsável', __kwargtrans__ ({_class: 'miudinho'}))), __kwargtrans__ ({_class: 'tudo_centralizado'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'sme_documento_conteudo'})), DIV (DIV (IMG (__kwargtrans__ ({_src: '/static/{0}/images/cabecalho_background.jpg'.format (window.PhanterPWA.VERSIONING)})), __kwargtrans__ ({_class: 'back'})), DIV (IMG (__kwargtrans__ ({_src: logo, _style: 'width: 120px; height: 120px;'})), __kwargtrans__ ({_class: 'front'})), __kwargtrans__ ({_class: 'sme_cabecalho_sme'})), DIV (H3 (nome_escola), __kwargtrans__ ({_class: 'sme_cabecalho_sme_nome_escola'})), DIV (H5 (dados_escola), __kwargtrans__ ({_class: 'sme_cabecalho_sme_dados_escola'})), DIV (H2 ('FICHA DE REQUERIMENTO'), __kwargtrans__ ({_class: 'sme_cabecalho_titulo_documento'})), DIV (DIV (TABLE (TR (TD (STRONG (nome_do_aluno_h, ': '), nome_do_aluno, __kwargtrans__ ({_colspan: 1}))), TR (TD (STRONG ('Data de Nascimento', ': '), data_de_nascimento), TD (STRONG ('Naturalidade', ': '), naturalidade)), TR (TD (STRONG ('Nome do pai', ': '), nome_do_pai, __kwargtrans__ ({_colspan: (prof_pai ? null : 1)})), (prof_pai ? TD (STRONG ('Profissão', ': '), prof_pai) : '')), TR (TD (STRONG ('Nome da mãe', ': '), nome_da_mae, __kwargtrans__ ({_colspan: (prof_mae ? null : 1)})), (prof_mae ? TD (STRONG ('Profissão', ': '), prof_mae) : '')), TR (TD (STRONG ('Endereço', ': '), endereco, __kwargtrans__ ({_colspan: 1})))), __kwargtrans__ ({_class: 'p-row'})), DIV (requerimento, __kwargtrans__ ({_class: 'p-row'})), DIV (cidade, ', ', data_assinatura, __kwargtrans__ ({_class: 'p-row tudo_centralizado cidade_e_data'})), DIV (TABLE (TR (TD ('___________________________________________')), TR (TD (responsavel)), TR (TD ('Responsável', __kwargtrans__ ({_class: 'miudinho'}))), __kwargtrans__ ({_class: 'tudo_centralizado'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'sme_documento_conteudo'})), __kwargtrans__ ({_id: 'pagina_{0}_matricula'.format (self.id_matricula), _class: 'p-row'})), __kwargtrans__ ({_class: 'a4'})), __kwargtrans__ ({_class: 'phanterpwa-media-print'}))), __kwargtrans__ ({_class: 'phanterpwa-paper-a4'})), __kwargtrans__ ({_class: 'folhas_para_imprimir phanterpwa-media-print-container'}));
			folhas_content.html_to ('#documentos-content');
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('IMPRIMIR', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('LISTA DE ALUNOS TRANSPORTE', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-matriculas-imprimir', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})), __kwargtrans__ ({_id: 'documentos-content'})), DIV (__kwargtrans__ ({_id: 'documento-lista-alunos'})), DIV (__kwargtrans__ ({_id: 'documento-lista-desistentes'})), DIV (__kwargtrans__ ({_id: 'documento-lista-transferidos'})), DIV (__kwargtrans__ ({_id: 'documento-lista-novatos'})));
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
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, 12);
		if (ajax_status == 'success') {
			var lista_escola = [];
			var dict_escola = dict ({});
			var html_lista_novatos = DIV (__kwargtrans__ ({_class: 'p-row'}));
			for (var a of json.data.alunos) {
				var data_de_nascimento = validations.format_iso_date_datetime (a.data_de_nascimento, 'dd/MM/yyyy', 'date');
				if (!(__in__ (a.escola, lista_escola))) {
					lista_escola.append (a.escola);
					html_lista_novatos.append (H3 (a.escola));
					var table = XTABLE ('tabela_escola_{0}'.format (a.id_escola), XTRH ('tabela_th_escola_{0}'.format (a.id_escola), 'Nome', 'Data de Nascimento', 'Sexo', 'Cor/Raça', 'Localização', 'Ensino', 'Turno', 'CPF', 'Responsável', 'Grau de Parentesto', 'Endereço', 'Latitude', 'Longitude'));
					html_lista_novatos.append (table);
					html_lista_novatos.append (HR ());
					dict_escola [a.id_escola] = dict ({'serie': [a.serie]});
				}
				else if (!(__in__ (a.serie, dict_escola [a.id_escola] ['serie']))) {
					dict_escola [a.id_escola] ['serie'].append (a.serie);
				}
				table.append (XTRD ('tabela_aluno_escola_{0}'.format (a.matricula), a.aluno, data_de_nascimento, a.sexo, a.raca, a.localizacao, a.ensino, a.turno, a.cpf, a.nome_do_responsavel, a.grau_parentesto, a.endereco, '', ''));
			}
			var folha2_content = DIV (DIV (DIV (DIV (DIV (DIV (DIV (H2 ('LISTA DE ALUNOS TRANSPORTE POR ESCOLA'), __kwargtrans__ ({_class: 'sme_cabecalho_titulo_documento'})), DIV (html_lista_novatos, __kwargtrans__ ({_class: 'sme_documento_conteudo'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'p-container extend'}))))), __kwargtrans__ ({_class: 'folhas_para_imprimir phanterpwa-media-print-container'}));
			folha2_content.html_to ('#content-matriculas-imprimir');
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
		window.PhanterPWA.GET ('api', 'estatisticas', 'transporte', self.id_escola, self.ano_letivo, __kwargtrans__ ({onComplete: self.after_get}));
	});}
});

//# sourceMappingURL=handlers.imprimir.map