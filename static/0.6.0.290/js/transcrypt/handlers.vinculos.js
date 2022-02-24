// Transcrypt'ed from Python, 2022-02-24 15:11:23
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
var __name__ = 'handlers.vinculos';
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
export var TR = helpers.XmlConstructor.tagger ('tr');
export var TH = helpers.XmlConstructor.tagger ('th');
export var TD = helpers.XmlConstructor.tagger ('td');
export var P = helpers.XmlConstructor.tagger ('p');
export var LABEL = helpers.XmlConstructor.tagger ('label');
export var STRONG = helpers.XmlConstructor.tagger ('strong');
export var IMG = helpers.XmlConstructor.tagger ('img', true);
export var H2 = helpers.XmlConstructor.tagger ('h2');
export var H3 = helpers.XmlConstructor.tagger ('h3');
export var H4 = helpers.XmlConstructor.tagger ('h4');
export var H5 = helpers.XmlConstructor.tagger ('h5');
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var BR = helpers.XmlConstructor.tagger ('br', true);
export var I18N = helpers.I18N;
export var XTABLE = widgets.Table;
export var XML = helpers.XML;
export var XTRD = widgets.TableData;
export var XTRH = widgets.TableHead;
export var XFOOTER = widgets.TableFooterPagination;
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('VINCULAR', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container expand'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-vinculo', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container expand'})));
		html.html_to ('#main-container');
		var arg0 = window.PhanterPWA.Request.get_arg (0);
		var arg1 = window.PhanterPWA.Request.get_arg (1);
		var arg2 = window.PhanterPWA.Request.get_arg (2);
		var arg3 = window.PhanterPWA.Request.get_arg (3);
		var BackButton = left_bar.LeftBarButton ('back_localizar_vinculos', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'area-do-servidor', 'position': 'top', 'ways': [(function __lambda__ (r) {
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
			return (r.startswith ('vinculos') || r.startswith ('vinculos/') ? true : false);
		})]})));
		if (arg0 == 'editar' || arg0 == 'novo') {
			if (window.PhanterPWA.Request.get_param ('retornar') !== null) {
				var BackButton = left_bar.LeftBarButton ('back_localizar_vinculos', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': window.PhanterPWA.Request.get_param ('retornar'), 'position': 'top', 'ways': [(function __lambda__ (r) {
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
					return (r.startswith ('vinculos') || r.startswith ('vinculos/') ? true : false);
				})]})));
			}
			else {
				var BackButton = left_bar.LeftBarButton ('back_localizar_vinculos', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'vinculos', 'position': 'top', 'ways': [(function __lambda__ (r) {
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
					return (r.startswith ('vinculos') || r.startswith ('vinculos/') ? true : false);
				})]})));
			}
			self.Vinculo = Vinculo (self, arg0, arg1, arg2, arg3);
		}
		else if (arg0 == 'escola') {
			if (arg1 === null || arg1 === undefined) {
				var html = escolas.EscolherEscola (__kwargtrans__ ({id_target: '#content-vinculo', callback_link: (function __lambda__ (id_escola) {
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
					return '#_phanterpwa:/vinculos/escola/{0}'.format (id_escola);
				})}));
			}
			else if (str (arg1).isdigit () && (arg2 === null || arg2 === undefined)) {
				var html = anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({id_target: '#content-vinculo', callback_link: (function __lambda__ (ano) {
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
					return '#_phanterpwa:/vinculos/escola/{0}/{1}'.format (arg1, ano);
				})}));
			}
			else if (str (arg1).isdigit () && str (arg2).isdigit ()) {
				self.VinculosEscola = VinculosEscola (self, arg0, arg1, arg2, arg3);
				if (window.PhanterPWA.Request.get_param ('vinculos-funcionarios') !== null) {
					var BackButton = left_bar.LeftBarButton ('back_localizar_vinculos', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': window.PhanterPWA.Request.get_param ('vinculos-funcionarios'), 'position': 'top', 'ways': [(function __lambda__ (r) {
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
						return (r.startswith ('vinculos') || r.startswith ('vinculos/') ? true : false);
					})]})));
				}
				else {
					var BackButton = left_bar.LeftBarButton ('back_localizar_vinculos', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'vinculos', 'position': 'top', 'ways': [(function __lambda__ (r) {
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
						return (r.startswith ('vinculos') || r.startswith ('vinculos/') ? true : false);
					})]})));
				}
			}
		}
		else if (window.PhanterPWA.auth_user_has_role (['administrator', 'root', 'Administrador Master SME'])) {
			if (arg0 === null) {
				var html = anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({id_target: '#content-vinculo', callback_link: (function __lambda__ (ano) {
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
					return '#_phanterpwa:/vinculos/escolas/{0}'.format (ano);
				})}));
			}
			else if (arg0 == 'escolas' && str (arg1).isdigit ()) {
				self.VinculosUsuarioSME = VinculosUsuarioSME (self, arg0, arg1, arg2, arg3);
				var BackButton = left_bar.LeftBarButton ('back_localizar_vinculos', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'vinculos', 'position': 'top', 'ways': [(function __lambda__ (r) {
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
					return (r.startswith ('vinculos') || r.startswith ('vinculos/') ? true : false);
				})]})));
			}
		}
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
	}));}
});
export var VinculosUsuarioSME =  __class__ ('VinculosUsuarioSME', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, arg0, arg1, arg2, arg3) {
		if (typeof arg2 == 'undefined' || (arg2 != null && arg2.hasOwnProperty ("__kwargtrans__"))) {;
			var arg2 = null;
		};
		if (typeof arg3 == 'undefined' || (arg3 != null && arg3.hasOwnProperty ("__kwargtrans__"))) {;
			var arg3 = null;
		};
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('VINCULOS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container expand'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-vinculo', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container expand'})));
		html.html_to ('#main-container');
		self.obter_vinculos ();
	});},
	get obter_vinculos () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'vinculos', 'sme', self.arg1, __kwargtrans__ ({onComplete: self.depois_de_obter}));
	});},
	get depois_de_obter () {return __get__ (this, function (self, data, ajax_status) {
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
			var dados = json.dados;
			var escolas = [];
			var grupo = [];
			var xmls = CONCATENATE ();
			for (var x of dados) {
				var endereco_imagem_funcionario = '/static/{0}/images/user.png'.format (window.PhanterPWA.VERSIONING);
				var endereco_imagem_escola = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, x [0]);
				if (!__in__ (x [0], escolas)) {
					escolas.append (x [0]);
					var equipe_diretiva = '';
					var corpo_docente = '';
					var equipe_de_apoio = '';
					var equipe_diretiva = XTABLE ('funcionarios-vinculos-equipe_diretiva-{0}'.format (x [0]), TR (TH ('EQUIPE DIRETIVA', __kwargtrans__ ({_colspan: '6', _style: 'text-align: center;'}))), XTRH ('funcionarios-vinculos-equipe_diretiva-rotulos-{0}'.format (x [0]), 'Foto', 'Nome Completo', 'Atribuição', 'Email de Acesso', 'Nível de Acesso'));
					var corpo_docente = XTABLE ('funcionarios-vinculos-corpo_docente-{0}'.format (x [0]), TR (TH ('CORPO DOCENTE', __kwargtrans__ ({_colspan: '7', _style: 'text-align: center;'}))), XTRH ('funcionarios-vinculos-corpo_docente-rotulos-{0}'.format (x [0]), 'Foto', 'Nome Completo', 'Atribuição', 'Email de Acesso', 'Nível de Acesso', TH ('T&D', __kwargtrans__ ({_title: 'Turmas e Disciplinas'}))));
					var equipe_de_apoio = XTABLE ('funcionarios-vinculos-equipe_de_apoio-{0}'.format (x [0]), TR (TH ('EQUIPE DE APOIO', __kwargtrans__ ({_colspan: '6', _style: 'text-align: center;'}))), XTRH ('funcionarios-vinculos-equipe_de_apoio-rotulos-{0}'.format (x [0]), 'Foto', 'Nome Completo', 'Atribuição', 'Email de Acesso', 'Nível de Acesso'));
					var bool_equipe_diretiva = false;
					var bool_corpo_docente = false;
					var bool_equipe_de_apoio = false;
					for (var ed of x [2]) {
						var wg_renovar = [];
						if (str (json.ultimo_ano).isdigit () && ed.tem_vinculo_ultimo_ano === false) {
							wg_renovar.append (widgets.MenuOption ('Renovar Vínculo para {0}'.format (json.ultimo_ano), __kwargtrans__ (dict ({'_class': 'botao_vinculo_ultimo_ano wave_on_click', '_href': '#_phanterpwa:/vinculos/novo/{0}/{1}/{2}/{3}?retornar={4}{5}'.format (ed.id_funcionario, ed.id_escola, json.ultimo_ano, ed.id_atribuicao, window.PhanterPWA._get_way_from_url_hash (), (ed.autorizacao_especial != '' ? '&autorizacao={0}'.format (ed.autorizacao_especial) : ''))}))));
						}
						var bool_equipe_diretiva = true;
						if (ed.id_funcionario !== null) {
							var endereco_imagem_funcionario = '{0}/api/funcionarios/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, ed.id_funcionario);
						}
						equipe_diretiva.append (XTRD ('funcionarios-vinculos-tabela-dados-{0}-{1}'.format (ed.id_escola, ed.id_funcionario), DIV (IMG (__kwargtrans__ ({_src: endereco_imagem_funcionario, _style: 'width:25px; height:25px; border-radius: 100%;'}))), ed.nome_funcionario, ed.atribuicoes, TD (ed.email_de_acesso, __kwargtrans__ ({_class: 'email_de_acesso_funcionario_{0}'.format (ed.id_funcionario)})), TD (ed.autorizacao_especial, __kwargtrans__ ({_class: 'papel_funcionario_{0}'.format (ed.id_funcionario)})), widgets.MenuBox ('menu_funcionario_vinculado_{0}'.format (ed.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Visualizar', __kwargtrans__ (dict ({'_class': 'botao_visualizar_funcionario wave_on_click', '_data-id_funcionario': ed.id_funcionario}))), widgets.MenuOption ('Editar Funcionário', __kwargtrans__ (dict ({'_class': 'botao_editar_vinculo wave_on_click', '_href': '#_phanterpwa:/funcionarios/{0}/editar/?origem={1}'.format (ed.id_funcionario, window.PhanterPWA.get_current_way ())}))), widgets.MenuOption ('Editar Vínculo', __kwargtrans__ (dict ({'_class': 'botao_editar_vinculo wave_on_click', '_href': '#_phanterpwa:/vinculos/editar/{0}/?retornar={1}'.format (ed.id, window.PhanterPWA._get_way_from_url_hash ())}))), widgets.MenuOption ('Revogar Vínculo', __kwargtrans__ (dict ({'_class': 'botao_revogar_vinculo wave_on_click', '_data-id_vinculo': ed.id}))), widgets.MenuOption ('Conta de Acesso', __kwargtrans__ (dict ({'_class': 'botao_prover_acesso_vinculo wave_on_click', '_data-id_funcionario': ed.id_funcionario}))), ...wg_renovar, __kwargtrans__ ({onOpen: self.bind_menu_option})), __kwargtrans__ (dict ({'drag_and_drop': false}))));
					}
					for (var cd of x [3]) {
						var wg_renovar = [];
						if (str (json.ultimo_ano).isdigit () && cd.tem_vinculo_ultimo_ano === false) {
							wg_renovar.append (widgets.MenuOption ('Renovar Vínculo para {0}'.format (json.ultimo_ano), __kwargtrans__ (dict ({'_class': 'botao_vinculo_ultimo_ano wave_on_click', '_href': '#_phanterpwa:/vinculos/novo/{0}/{1}/{2}/{3}?retornar={4}{5}'.format (cd.id_funcionario, cd.id_escola, json.ultimo_ano, cd.id_atribuicao, window.PhanterPWA._get_way_from_url_hash (), (cd.autorizacao_especial != '' ? '&autorizacao={0}'.format (cd.autorizacao_especial) : ''))}))));
						}
						var bool_corpo_docente = true;
						if (cd.id_funcionario !== null) {
							var endereco_imagem_funcionario = '{0}/api/funcionarios/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, cd.id_funcionario);
						}
						corpo_docente.append (XTRD ('funcionarios-vinculos-tabela-dados-{0}-{1}'.format (cd.id_escola, cd.id_funcionario), DIV (IMG (__kwargtrans__ ({_src: endereco_imagem_funcionario, _style: 'width:25px; height:25px; border-radius: 100%;'}))), cd.nome_funcionario, cd.atribuicoes, TD (cd.email_de_acesso, __kwargtrans__ ({_class: 'email_de_acesso_funcionario_{0}'.format (cd.id_funcionario)})), TD (cd.autorizacao_especial, __kwargtrans__ ({_class: 'papel_funcionario_{0}'.format (cd.id_funcionario)})), widgets.MenuBox ('menu_funcionario_turmas_{0}'.format (cd.id), I (cd.disciplinas_turmas.length, __kwargtrans__ ({_class: 'phanterpwa-icon_numb'})), ...(function () {
							var __accu0__ = [];
							for (var t_e_d of cd.disciplinas_turmas) {
								__accu0__.append (widgets.MenuOption (t_e_d [0], __kwargtrans__ ({_href: window.PhanterPWA.XWAY ('turmas', t_e_d [1], t_e_d [2], 'especifico', t_e_d [3])})));
							}
							return __accu0__;
						}) ()), widgets.MenuBox ('menu_funcionario_vinculado_{0}'.format (cd.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Visualizar', __kwargtrans__ (dict ({'_class': 'botao_visualizar_funcionario wave_on_click', '_data-id_funcionario': cd.id_funcionario}))), widgets.MenuOption ('Editar Funcionário', __kwargtrans__ (dict ({'_class': 'botao_editar_vinculo wave_on_click', '_href': '#_phanterpwa:/funcionarios/{0}/editar/?origem={1}'.format (cd.id_funcionario, window.PhanterPWA.get_current_way ())}))), widgets.MenuOption ('Editar Vínculo', __kwargtrans__ (dict ({'_class': 'botao_editar_vinculo wave_on_click', '_href': '#_phanterpwa:/vinculos/editar/{0}/?retornar={1}'.format (cd.id, window.PhanterPWA._get_way_from_url_hash ())}))), widgets.MenuOption ('Revogar Vínculo', __kwargtrans__ (dict ({'_class': 'botao_revogar_vinculo wave_on_click', '_data-id_vinculo': cd.id}))), widgets.MenuOption ('Conta de Acesso', __kwargtrans__ (dict ({'_class': 'botao_prover_acesso_vinculo wave_on_click', '_data-id_funcionario': cd.id_funcionario}))), ...wg_renovar, __kwargtrans__ ({onOpen: self.bind_menu_option})), __kwargtrans__ (dict ({'drag_and_drop': false}))));
					}
					for (var eda of x [4]) {
						var bool_equipe_de_apoio = true;
						var wg_renovar = [];
						if (str (json.ultimo_ano).isdigit () && eda.tem_vinculo_ultimo_ano === false) {
							wg_renovar.append (widgets.MenuOption ('Renovar Vínculo para {0}'.format (json.ultimo_ano), __kwargtrans__ (dict ({'_class': 'botao_vinculo_ultimo_ano wave_on_click', '_href': '#_phanterpwa:/vinculos/novo/{0}/{1}/{2}/{3}?retornar={4}{5}'.format (eda.id_funcionario, eda.id_escola, json.ultimo_ano, eda.id_atribuicao, window.PhanterPWA._get_way_from_url_hash (), (eda.autorizacao_especial != '' ? '&autorizacao={0}'.format (eda.autorizacao_especial) : ''))}))));
						}
						if (eda.id_funcionario !== null) {
							var endereco_imagem_funcionario = '{0}/api/funcionarios/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, eda.id_funcionario);
						}
						equipe_de_apoio.append (XTRD ('funcionarios-vinculos-tabela-dados-{0}-{1}'.format (eda.id_escola, eda.id_funcionario), DIV (IMG (__kwargtrans__ ({_src: endereco_imagem_funcionario, _style: 'width:25px; height:25px; border-radius: 100%;'}))), eda.nome_funcionario, eda.atribuicoes, TD (eda.email_de_acesso, __kwargtrans__ ({_class: 'email_de_acesso_funcionario_{0}'.format (eda.id_funcionario)})), TD (eda.autorizacao_especial, __kwargtrans__ ({_class: 'papel_funcionario_{0}'.format (eda.id_funcionario)})), widgets.MenuBox ('menu_funcionario_vinculado_{0}'.format (eda.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Visualizar', __kwargtrans__ (dict ({'_class': 'botao_visualizar_funcionario wave_on_click', '_data-id_funcionario': eda.id_funcionario}))), widgets.MenuOption ('Editar Funcionário', __kwargtrans__ (dict ({'_class': 'botao_editar_vinculo wave_on_click', '_href': '#_phanterpwa:/funcionarios/{0}/editar/?origem={1}'.format (eda.id_funcionario, window.PhanterPWA.get_current_way ())}))), widgets.MenuOption ('Editar Vínculo', __kwargtrans__ (dict ({'_class': 'botao_editar_vinculo wave_on_click', '_href': '#_phanterpwa:/vinculos/editar/{0}/?retornar={1}'.format (eda.id, window.PhanterPWA._get_way_from_url_hash ())}))), widgets.MenuOption ('Revogar Vínculo', __kwargtrans__ (dict ({'_class': 'botao_revogar_vinculo wave_on_click', '_data-id_vinculo': eda.id}))), widgets.MenuOption ('Conta de Acesso', __kwargtrans__ (dict ({'_class': 'botao_prover_acesso_vinculo wave_on_click', '_data-id_funcionario': eda.id_funcionario}))), ...wg_renovar, __kwargtrans__ ({onOpen: self.bind_menu_option})), __kwargtrans__ (dict ({'drag_and_drop': false}))));
					}
					var card = DIV (LABEL (DIV (IMG (__kwargtrans__ ({_src: endereco_imagem_escola, _style: 'width:25px; height:25px; border-radius: 100%;position: absolute;top: 6px;'})), __kwargtrans__ ({_style: 'display: inline-block;margin-right: 10px;height: 25px;width: 25px;position: relative;'})), x [1], __kwargtrans__ ({_for: 'phanterpwa-card-panel-control-{0}'.format (x [0])})), DIV (DIV (DIV (DIV ((bool_equipe_diretiva ? equipe_diretiva : ''), (bool_equipe_diretiva && bool_corpo_docente ? BR () : ''), (bool_corpo_docente ? corpo_docente : ''), (bool_equipe_diretiva && bool_equipe_de_apoio ? BR () : ''), (bool_equipe_de_apoio ? equipe_de_apoio : ''), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (A (I (__kwargtrans__ ({_class: 'fas fa-puzzle-piece'})), __kwargtrans__ (dict ({'_class': 'botao_separar_unidade_escolar icon_button', '_title': 'Separar esta unidade escolar', '_href': window.PhanterPWA.XWAY ('vinculos', 'escola', x [0], self.arg1, __kwargtrans__ (dict ({'_vinculos-funcionarios': 'vinculos/escolas/{0}/'.format (self.arg1)})))}))), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper has_buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_id: 'phanterpwa-card-panel-control-{0}'.format (x.id_escola), _class: 'phanterpwa-card-panel-control'}));
					xmls.append (card);
				}
			}
			xmls.append (DIV (__kwargtrans__ ({_id: 'modal_prover_acesso_container'})));
			xmls.append (DIV (__kwargtrans__ ({_id: 'modal_deletar_acesso_container'})));
			xmls.append (DIV (__kwargtrans__ ({_id: 'modal_visualizar_funcionario'})));
			xmls.html_to ('#content-vinculo');
		}
	});},
	get bind_menu_option () {return __get__ (this, function (self) {
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
		$ ('.botao_prover_acesso_vinculo').off ('click.botao_prover_acesso').on ('click.botao_prover_acesso', (function __lambda__ () {
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
			return self.obter_lista_de_contas_disponiveis (this);
		}));
		$ ('.botao_revogar_vinculo').off ('click.botao_revogar_acesso').on ('click.botao_revogar_acesso', (function __lambda__ () {
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
			return self.modal_confirmar_deletar_vinculo (this);
		}));
		$ ('.botao_visualizar_funcionario').off ('click.botao_visualizar_funcionario').on ('click.botao_visualizar_funcionario', (function __lambda__ () {
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
			return self.get_visualizar_funcionario (this);
		}));
	});},
	get obter_lista_de_contas_disponiveis () {return __get__ (this, function (self, el) {
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
		var valor = $ (el).data ('id_funcionario');
		window.PhanterPWA.GET ('api', 'funcionarios', 'contas-disponiveis', __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.abrir_modal_prover_acesso (valor, data, ajax_status);
		})}));
	});},
	get abrir_modal_prover_acesso () {return __get__ (this, function (self, id_funcionario, data, ajax_status) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_funcionario': var id_funcionario = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'ajax_status': var ajax_status = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (ajax_status == 'success') {
			var data_set = data.responseJSON.contas;
			var content = DIV (forms.FormWidget ('prover_acesso', 'contas_disponiveis', __kwargtrans__ (dict ({'value': '', 'label': 'Contas disponíveis', 'type': 'select', 'form': 'prover_acesso', 'data_set': data_set, '_class': 'p-col w1p100'}))), __kwargtrans__ ({_class: 'p-row'}));
			var footer = DIV (forms.SubmitButton ('adicionar_prover_acesso', 'Usar a conta selecionada', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
			self.modal_prover_acesso = modal.Modal ('#modal_prover_acesso_container', __kwargtrans__ (dict ({'title': 'Definir a conta do funcionário que será usada no acesso', 'content': content, 'footer': footer, 'form': 'prover_acesso'})));
			self.modal_prover_acesso.open ();
			$ ('#phanterpwa-widget-form-submit_button-adicionar_prover_acesso').off ('click.adicionar_prover_acesso').on ('click.adicionar_prover_acesso', (function __lambda__ () {
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
				return self.sing_form_modal_funcionario (id_funcionario);
			}));
		}
	});},
	get sing_form_modal_funcionario () {return __get__ (this, function (self, id_funcionario) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_funcionario': var id_funcionario = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.GET ('api', 'signforms', 'phanterpwa-form-funcionarios', __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.depois_de_assinar_modal_funcionario (data, ajax_status, id_funcionario);
		})}));
	});},
	get depois_de_assinar_modal_funcionario () {return __get__ (this, function (self, data, ajax_status, id_funcionario) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'ajax_status': var ajax_status = __allkwargs0__ [__attrib0__]; break;
						case 'id_funcionario': var id_funcionario = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var json = data.responseJSON;
		var id_auth_user = $ (".phanterpwa-widget-select-select[name='contas_disponiveis']").val ();
		var formdata = new FormData ();
		formdata.append ('csrf_token', json.csrf);
		formdata.append ('auth_user', id_auth_user);
		window.PhanterPWA.PUT ('api', 'funcionario', 'definir-conta', id_funcionario, __kwargtrans__ ({form_data: formdata, onComplete: self.depois_de_definir_o_email_do_funcionario}));
	});},
	get depois_de_definir_o_email_do_funcionario () {return __get__ (this, function (self, data, ajax_status) {
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
			self.modal_prover_acesso.close ();
			var dados = data.responseJSON.dados;
			$ ('.email_de_acesso_funcionario_{0}'.format (dados.id_funcionario)).text (dados.email_de_acesso);
			$ ('.papel_funcionario_{0}'.format (dados.id_funcionario)).text (dados.papel);
		}
	});},
	get modal_confirmar_deletar_vinculo () {return __get__ (this, function (self, el) {
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
		var id_vinculo = $ (el).data ('id_vinculo');
		var content = DIV (P ('Atenção, o vínculo do funcionário será deletado permanentemente, se ', 'o mesmo possuir acesso especial ao sistema, este será revogado. Por exemplo, em caso de ', STRONG ('professores'), ', ele não terá mais acesso às suas ', 'disciplinas e suas turmas'), P ('Tem certeza que deseja deletar este vínculo?'), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.FormButton ('deletar_vinculo_sim', 'Sim', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), forms.FormButton ('deletar_vinculo_nao', 'Não', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_deletar_vinculo = modal.Modal ('#modal_deletar_acesso_container', __kwargtrans__ (dict ({'title': 'Deletar vínculo', 'content': content, 'footer': footer, 'form': 'deletar_vinculo'})));
		self.modal_deletar_vinculo.open ();
		$ ('#phanterpwa-widget-form-form_button-deletar_vinculo_sim').off ('click.adicionar_deletar_vinculo_sim').on ('click.adicionar_deletar_vinculo_sim', (function __lambda__ () {
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
			return self._on_click_deletar_vinculo (id_vinculo);
		}));
		$ ('#phanterpwa-widget-form-form_button-deletar_vinculo_nao').off ('click.adicionar_deletar_vinculo_nao').on ('click.adicionar_deletar_vinculo_nao', (function __lambda__ () {
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
			return self.modal_deletar_vinculo.close ();
		}));
	});},
	get _on_click_deletar_vinculo () {return __get__ (this, function (self, id_vinculo) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_vinculo': var id_vinculo = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.DELETE ('api', 'vinculo', 'deletar', id_vinculo, __kwargtrans__ ({onComplete: self.depois_de_deletar_vinculo}));
		self.modal_deletar_vinculo.close ();
	});},
	get depois_de_deletar_vinculo () {return __get__ (this, function (self, data, ajax_status) {
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
			self.obter_vinculos ();
		}
	});},
	get get_visualizar_funcionario () {return __get__ (this, function (self, widget_instance) {
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
		var id_funcionario = $ (widget_instance).data ('id_funcionario');
		window.PhanterPWA.GET ('api', 'funcionario', 'visualizar', id_funcionario, __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.modal_add_funcinario_visualizar (data, ajax_status);
		})}));
	});},
	get modal_add_funcinario_visualizar () {return __get__ (this, function (self, data, ajax_status) {
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
			var html_vinculos = DIV (DIV ('VÍNCULOS DO FUNCIONÁRIO', __kwargtrans__ ({_class: 'p-col w1p100 phanterpwa-widget-form-separator'})), P ('O Funcionário não possui vínculos'), __kwargtrans__ ({_class: 'vinculos-conteudo'}));
			if (json.data.vinculos !== null && json.data.vinculos !== undefined) {
				var html_vinculos = DIV (DIV ('VÍNCULOS DO FUNCIONÁRIO', __kwargtrans__ ({_class: 'p-col w1p100 phanterpwa-widget-form-separator'})), __kwargtrans__ ({_class: 'vinculos-conteudo'}));
				var tabela = XTABLE ('tabela_ficha_individual', XTRH ('tabela_ficha_individual_head', 'Ano Letivo', 'Escola', 'Atribuições', 'Data Limite', 'Autorização'));
				for (var x of json.data.vinculos) {
					var data_limite = '31/12/{0}'.format (x.anos_letivo.ano);
					if (x.vinculos_funcionarios.data_limite !== null && x.vinculos_funcionarios.data_limite !== undefined) {
						var data_limite = validations.format_iso_date_datetime (x.vinculos_funcionarios.data_limite, 'dd/MM/yyyy', 'date');
					}
					tabela.append (XTRD ('tabela_ficha_individual_linhas_{0}'.format (x.vinculos_funcionarios.id), x.anos_letivo.ano, x.escolas.nome, x.profissoes.profissao, data_limite, x.vinculos_funcionarios.autorizacao, __kwargtrans__ (dict ({'drag_and_drop': false}))));
				}
				html_vinculos.append (tabela);
			}
			var content = DIV (forms.Form (json.data.funcionario), html_vinculos, __kwargtrans__ ({_class: 'p-row'}));
			self.modal_visualizar_funcionario = modal.Modal ('#modal_visualizar_funcionario', __kwargtrans__ (dict ({'title': CONCATENATE (DIV ('Visualizar dados do funcionário'), DIV (STRONG (json.data.nome))), 'content': content})));
			self.modal_visualizar_funcionario.open ();
		}
		else {
			window.PhanterPWA.flash ('Não há alunos_visualizar matriculados para a série da turma');
		}
	});}
});
export var VinculosEscola =  __class__ ('VinculosEscola', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, arg0, arg1, arg2, arg3) {
		if (typeof arg2 == 'undefined' || (arg2 != null && arg2.hasOwnProperty ("__kwargtrans__"))) {;
			var arg2 = null;
		};
		if (typeof arg3 == 'undefined' || (arg3 != null && arg3.hasOwnProperty ("__kwargtrans__"))) {;
			var arg3 = null;
		};
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
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, arg1);
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('VINCULOS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('ESCOLA', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container expand'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (H2 ('LISTA DE FUNCIONÁRIOS VINCULADOS À ESTA UNIDADE DE ENSINO NO ANO DE ', arg2, '.'), P ('O funcionário sem ', STRONG ('Email de Acesso'), 'indica que o funcionário vinculado', ' não possui uma conta de usuário ou a conta não está devidamente ligada ao cadastro', ' do funcionário.'), P ('É possível vincular um novo funcionário clicando em ', I (__kwargtrans__ ({_class: 'fas fa-plus'})), '.'), P ('Para acessar opções individuais de cada funcionário basta clicar em ', I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), '.'), __kwargtrans__ ({_class: 'p-col w1p100 w4p70', _id: 'u_informacao_series'})), __kwargtrans__ ({_class: 'p-row'})), DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-vinculo-escola', _class: 'p-row'})), __kwargtrans__ ({_class: 'card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container expand'})));
		html.html_to ('#main-container');
		self.obter_vinculos ();
	});},
	get obter_vinculos () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'vinculos', 'escola', self.arg1, self.arg2, __kwargtrans__ ({onComplete: self.depois_de_obter}));
	});},
	get depois_de_obter () {return __get__ (this, function (self, data, ajax_status) {
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
			var dados = json.dados;
			var escolas = [];
			var grupo = [];
			var xmls = CONCATENATE ();
			for (var x of dados) {
				var endereco_imagem_funcionario = '/static/{0}/images/user.png'.format (window.PhanterPWA.VERSIONING);
				var endereco_imagem_escola = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, x [0]);
				if (!__in__ (x [0], escolas)) {
					escolas.append (x [0]);
					var equipe_diretiva = '';
					var corpo_docente = '';
					var equipe_de_apoio = '';
					var equipe_diretiva = XTABLE ('funcionarios-vinculos-equipe_diretiva-{0}'.format (x [0]), TR (TH ('EQUIPE DIRETIVA', __kwargtrans__ ({_colspan: '6', _style: 'text-align: center;'}))), XTRH ('funcionarios-vinculos-equipe_diretiva-rotulos-{0}'.format (x [0]), 'Foto', 'Nome Completo', 'Atribuição', 'Email de Acesso', 'Nível de Acesso'));
					var corpo_docente = XTABLE ('funcionarios-vinculos-corpo_docente-{0}'.format (x [0]), TR (TH ('CORPO DOCENTE', __kwargtrans__ ({_colspan: '7', _style: 'text-align: center;'}))), XTRH ('funcionarios-vinculos-corpo_docente-rotulos-{0}'.format (x [0]), 'Foto', 'Nome Completo', 'Atribuição', 'Email de Acesso', 'Nível de Acesso', TH ('T&D', __kwargtrans__ ({_title: 'Turmas e Disciplinas'}))));
					var equipe_de_apoio = XTABLE ('funcionarios-vinculos-equipe_de_apoio-{0}'.format (x [0]), TR (TH ('EQUIPE DE APOIO', __kwargtrans__ ({_colspan: '6', _style: 'text-align: center;'}))), XTRH ('funcionarios-vinculos-equipe_de_apoio-rotulos-{0}'.format (x [0]), 'Foto', 'Nome Completo', 'Atribuição', 'Email de Acesso', 'Nível de Acesso'));
					var bool_equipe_diretiva = false;
					var bool_corpo_docente = false;
					var bool_equipe_de_apoio = false;
					for (var ed of x [2]) {
						var bool_equipe_diretiva = true;
						if (ed.id_funcionario !== null) {
							var endereco_imagem_funcionario = '{0}/api/funcionarios/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, ed.id_funcionario);
						}
						equipe_diretiva.append (XTRD ('funcionarios-vinculos-tabela-dados-{0}-{1}'.format (ed.id_escola, ed.id_funcionario), DIV (IMG (__kwargtrans__ ({_src: endereco_imagem_funcionario, _style: 'width:25px; height:25px; border-radius: 100%;'}))), ed.nome_funcionario, ed.atribuicoes, TD (ed.email_de_acesso, __kwargtrans__ ({_class: 'email_de_acesso_funcionario_{0}'.format (ed.id_funcionario)})), TD (ed.autorizacao_especial, __kwargtrans__ ({_class: 'papel_funcionario_{0}'.format (ed.id_funcionario)})), widgets.MenuBox ('menu_funcionario_vinculado_{0}'.format (ed.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Visualizar', __kwargtrans__ (dict ({'_class': 'botao_visualizar_funcionario wave_on_click', '_data-id_funcionario': ed.id_funcionario}))), widgets.MenuOption ('Editar Funcionário', __kwargtrans__ (dict ({'_class': 'botao_editar_vinculo wave_on_click', '_href': '#_phanterpwa:/funcionarios/{0}/editar/?origem={1}'.format (ed.id_funcionario, window.PhanterPWA.get_current_way ())}))), widgets.MenuOption ('Editar Vínculo', __kwargtrans__ (dict ({'_class': 'botao_editar_vinculo wave_on_click', '_href': '#_phanterpwa:/vinculos/editar/{0}/?retornar={1}'.format (ed.id, window.PhanterPWA._get_way_from_url_hash ())}))), widgets.MenuOption ('Revogar Vínculo', __kwargtrans__ (dict ({'_class': 'botao_revogar_vinculo wave_on_click', '_data-id_vinculo': ed.id}))), widgets.MenuOption ('Conta de Acesso', __kwargtrans__ (dict ({'_class': 'botao_prover_acesso_vinculo wave_on_click', '_data-id_funcionario': ed.id_funcionario}))), __kwargtrans__ ({onOpen: self.bind_menu_option})), __kwargtrans__ (dict ({'drag_and_drop': false}))));
					}
					for (var cd of x [3]) {
						console.log (json.ultimo_ano, cd.tem_vinculo_ultimo_ano);
						var bool_corpo_docente = true;
						var wg_renovar = [];
						if (str (json.ultimo_ano).isdigit () && cd.tem_vinculo_ultimo_ano === false) {
							wg_renovar.append (widgets.MenuOption ('Renovar Vínculo para {0}'.format (json.ultimo_ano), __kwargtrans__ (dict ({'_class': 'botao_vinculo_ultimo_ano wave_on_click', '_href': '#_phanterpwa:/vinculos/novo/{0}/{1}/{2}/{3}?retornar={4}{5}'.format (cd.id_funcionario, cd.id_escola, json.ultimo_ano, cd.id_atribuicao, window.PhanterPWA._get_way_from_url_hash (), (cd.autorizacao_especial != '' ? '&autorizacao={0}'.format (cd.autorizacao_especial) : ''))}))));
						}
						if (cd.id_funcionario !== null) {
							var endereco_imagem_funcionario = '{0}/api/funcionarios/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, cd.id_funcionario);
						}
						corpo_docente.append (XTRD ('funcionarios-vinculos-tabela-dados-{0}-{1}'.format (cd.id_escola, cd.id_funcionario), DIV (IMG (__kwargtrans__ ({_src: endereco_imagem_funcionario, _style: 'width:25px; height:25px; border-radius: 100%;'}))), cd.nome_funcionario, cd.atribuicoes, TD (cd.email_de_acesso, __kwargtrans__ ({_class: 'email_de_acesso_funcionario_{0}'.format (cd.id_funcionario)})), TD (cd.autorizacao_especial, __kwargtrans__ ({_class: 'papel_funcionario_{0}'.format (cd.id_funcionario)})), widgets.MenuBox ('menu_funcionario_turmas_{0}'.format (cd.id), I (cd.disciplinas_turmas.length, __kwargtrans__ ({_class: 'phanterpwa-icon_numb'})), ...(function () {
							var __accu0__ = [];
							for (var t_e_d of cd.disciplinas_turmas) {
								__accu0__.append (widgets.MenuOption (t_e_d [0], __kwargtrans__ ({_href: window.PhanterPWA.XWAY ('turmas', t_e_d [1], t_e_d [2], 'especifico', t_e_d [3])})));
							}
							return __accu0__;
						}) ()), widgets.MenuBox ('menu_funcionario_vinculado_{0}'.format (cd.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Visualizar', __kwargtrans__ (dict ({'_class': 'botao_visualizar_funcionario wave_on_click', '_data-id_funcionario': cd.id_funcionario}))), widgets.MenuOption ('Editar Funcionário', __kwargtrans__ (dict ({'_class': 'botao_editar_vinculo wave_on_click', '_href': '#_phanterpwa:/funcionarios/{0}/editar/?origem={1}'.format (cd.id_funcionario, window.PhanterPWA.get_current_way ())}))), widgets.MenuOption ('Editar Vínculo', __kwargtrans__ (dict ({'_class': 'botao_editar_vinculo wave_on_click', '_href': '#_phanterpwa:/vinculos/editar/{0}/?retornar={1}'.format (cd.id, window.PhanterPWA._get_way_from_url_hash ())}))), widgets.MenuOption ('Revogar Vínculo', __kwargtrans__ (dict ({'_class': 'botao_revogar_vinculo wave_on_click', '_data-id_vinculo': cd.id}))), widgets.MenuOption ('Conta de Acesso', __kwargtrans__ (dict ({'_class': 'botao_prover_acesso_vinculo wave_on_click', '_data-id_funcionario': cd.id_funcionario}))), ...wg_renovar, __kwargtrans__ ({onOpen: self.bind_menu_option})), __kwargtrans__ (dict ({'drag_and_drop': false}))));
					}
					for (var eda of x [4]) {
						var bool_equipe_de_apoio = true;
						var wg_renovar = [];
						if (str (json.ultimo_ano).isdigit () && eda.tem_vinculo_ultimo_ano === false) {
							wg_renovar.append (widgets.MenuOption ('Renovar Vínculo para {0}'.format (json.ultimo_ano), __kwargtrans__ (dict ({'_class': 'botao_vinculo_ultimo_ano wave_on_click', '_href': '#_phanterpwa:/vinculos/novo/{0}/{1}/{2}/{3}?retornar={4}{5}'.format (eda.id_funcionario, eda.id_escola, json.ultimo_ano, eda.id_atribuicao, window.PhanterPWA._get_way_from_url_hash (), (eda.autorizacao_especial != '' ? '&autorizacao={0}'.format (eda.autorizacao_especial) : ''))}))));
						}
						if (eda.id_funcionario !== null) {
							var endereco_imagem_funcionario = '{0}/api/funcionarios/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, eda.id_funcionario);
						}
						equipe_de_apoio.append (XTRD ('funcionarios-vinculos-tabela-dados-{0}-{1}'.format (eda.id_escola, eda.id_funcionario), DIV (IMG (__kwargtrans__ ({_src: endereco_imagem_funcionario, _style: 'width:25px; height:25px; border-radius: 100%;'}))), eda.nome_funcionario, eda.atribuicoes, TD (eda.email_de_acesso, __kwargtrans__ ({_class: 'email_de_acesso_funcionario_{0}'.format (eda.id_funcionario)})), TD (eda.autorizacao_especial, __kwargtrans__ ({_class: 'papel_funcionario_{0}'.format (eda.id_funcionario)})), widgets.MenuBox ('menu_funcionario_vinculado_{0}'.format (eda.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Visualizar', __kwargtrans__ (dict ({'_class': 'botao_visualizar_funcionario wave_on_click', '_data-id_funcionario': eda.id_funcionario}))), widgets.MenuOption ('Editar Funcionário', __kwargtrans__ (dict ({'_class': 'botao_editar_vinculo wave_on_click', '_href': '#_phanterpwa:/funcionarios/{0}/editar/?origem={1}'.format (eda.id_funcionario, window.PhanterPWA.get_current_way ())}))), widgets.MenuOption ('Editar Vínculo', __kwargtrans__ (dict ({'_class': 'botao_editar_vinculo wave_on_click', '_href': '#_phanterpwa:/vinculos/editar/{0}/?retornar={1}'.format (eda.id, window.PhanterPWA._get_way_from_url_hash ())}))), widgets.MenuOption ('Revogar Vínculo', __kwargtrans__ (dict ({'_class': 'botao_revogar_vinculo wave_on_click', '_data-id_vinculo': eda.id}))), widgets.MenuOption ('Conta de Acesso', __kwargtrans__ (dict ({'_class': 'botao_prover_acesso_vinculo wave_on_click', '_data-id_funcionario': eda.id_funcionario}))), ...wg_renovar, __kwargtrans__ ({onOpen: self.bind_menu_option})), __kwargtrans__ (dict ({'drag_and_drop': false}))));
					}
					var card = DIV (LABEL (DIV (IMG (__kwargtrans__ ({_src: endereco_imagem_escola, _style: 'width:25px; height:25px; border-radius: 100%;position: absolute;top: 6px;'})), __kwargtrans__ ({_style: 'display: inline-block;margin-right: 10px;height: 25px;width: 25px;position: relative;'})), x [1], __kwargtrans__ ({_for: 'phanterpwa-card-panel-control-{0}'.format (x [0])})), DIV (DIV (DIV (DIV ((bool_equipe_diretiva ? equipe_diretiva : ''), (bool_equipe_diretiva && bool_corpo_docente ? BR () : ''), (bool_corpo_docente ? corpo_docente : ''), (bool_equipe_diretiva && bool_equipe_de_apoio ? BR () : ''), (bool_equipe_de_apoio ? equipe_de_apoio : ''), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-content'})), DIV (A (I (__kwargtrans__ ({_class: 'fas fa-puzzle-piece'})), __kwargtrans__ (dict ({'_class': 'botao_separar_unidade_escolar icon_button', '_title': 'Separar esta unidade escolar', '_href': window.PhanterPWA.XWAY ('vinculos', 'escola', x [0], self.arg1, __kwargtrans__ (dict ({'_vinculos-funcionarios': 'vinculos/escolas/{0}/'.format (self.arg1)})))}))), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-wrapper has_buttons'})), __kwargtrans__ ({_class: 'phanterpwa-card-panel-control-container'})), __kwargtrans__ ({_id: 'phanterpwa-card-panel-control-{0}'.format (x.id_escola), _class: 'phanterpwa-card-panel-control'}));
					xmls.append (card);
				}
			}
			xmls.append (DIV (__kwargtrans__ ({_id: 'modal_prover_acesso_escola_container'})));
			xmls.append (DIV (__kwargtrans__ ({_id: 'modal_deletar_acesso_escola_container'})));
			xmls.append (DIV (__kwargtrans__ ({_id: 'modal_visualizar_escola_funcionario'})));
			xmls.html_to ('#content-vinculo-escola');
		}
	});},
	get bind_menu_option () {return __get__ (this, function (self) {
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
		$ ('.botao_prover_acesso_vinculo').off ('click.botao_prover_acesso').on ('click.botao_prover_acesso', (function __lambda__ () {
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
			return self.obter_lista_de_contas_disponiveis (this);
		}));
		$ ('.botao_revogar_vinculo').off ('click.botao_revogar_acesso').on ('click.botao_revogar_acesso', (function __lambda__ () {
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
			return self.modal_confirmar_deletar_vinculo (this);
		}));
		$ ('.botao_visualizar_funcionario').off ('click.botao_visualizar_funcionario').on ('click.botao_visualizar_funcionario', (function __lambda__ () {
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
			return self.get_visualizar_funcionario (this);
		}));
	});},
	get obter_lista_de_contas_disponiveis () {return __get__ (this, function (self, el) {
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
		var valor = $ (el).data ('id_funcionario');
		window.PhanterPWA.GET ('api', 'funcionarios', 'contas-disponiveis', __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.abrir_modal_prover_acesso (valor, data, ajax_status);
		})}));
	});},
	get abrir_modal_prover_acesso () {return __get__ (this, function (self, id_funcionario, data, ajax_status) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_funcionario': var id_funcionario = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'ajax_status': var ajax_status = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (ajax_status == 'success') {
			var data_set = data.responseJSON.contas;
			var content = DIV (forms.FormWidget ('prover_acesso', 'contas_disponiveis', __kwargtrans__ (dict ({'value': '', 'label': 'Contas disponíveis', 'type': 'select', 'form': 'prover_acesso', 'data_set': data_set, '_class': 'p-col w1p100'}))), __kwargtrans__ ({_class: 'p-row'}));
			var footer = DIV (forms.SubmitButton ('adicionar_prover_acesso', 'Usar a conta selecionada', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
			self.modal_prover_acesso = modal.Modal ('#modal_prover_acesso_escola_container', __kwargtrans__ (dict ({'title': 'Definir a conta do funcionário que será usada no acesso', 'content': content, 'footer': footer, 'form': 'prover_acesso'})));
			self.modal_prover_acesso.open ();
			$ ('#phanterpwa-widget-form-submit_button-adicionar_prover_acesso').off ('click.adicionar_prover_acesso').on ('click.adicionar_prover_acesso', (function __lambda__ () {
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
				return self.sing_form_modal_funcionario (id_funcionario);
			}));
		}
	});},
	get sing_form_modal_funcionario () {return __get__ (this, function (self, id_funcionario) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_funcionario': var id_funcionario = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.GET ('api', 'signforms', 'phanterpwa-form-funcionarios', __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.depois_de_assinar_modal_funcionario (data, ajax_status, id_funcionario);
		})}));
	});},
	get depois_de_assinar_modal_funcionario () {return __get__ (this, function (self, data, ajax_status, id_funcionario) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'ajax_status': var ajax_status = __allkwargs0__ [__attrib0__]; break;
						case 'id_funcionario': var id_funcionario = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var json = data.responseJSON;
		var id_auth_user = $ (".phanterpwa-widget-select-select[name='contas_disponiveis']").val ();
		var formdata = new FormData ();
		formdata.append ('csrf_token', json.csrf);
		formdata.append ('auth_user', id_auth_user);
		window.PhanterPWA.PUT ('api', 'funcionario', 'definir-conta', id_funcionario, __kwargtrans__ ({form_data: formdata, onComplete: self.depois_de_definir_o_email_do_funcionario}));
	});},
	get depois_de_definir_o_email_do_funcionario () {return __get__ (this, function (self, data, ajax_status) {
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
			self.modal_prover_acesso.close ();
			var dados = data.responseJSON.dados;
			$ ('.email_de_acesso_funcionario_{0}'.format (dados.id_funcionario)).text (dados.email_de_acesso);
			$ ('.papel_funcionario_{0}'.format (dados.id_funcionario)).text (dados.papel);
		}
	});},
	get modal_confirmar_deletar_vinculo () {return __get__ (this, function (self, el) {
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
		var id_vinculo = $ (el).data ('id_vinculo');
		var content = DIV (P ('Atenção, o vínculo do funcionário será deletado permanentemente, se ', 'o mesmo possuir acesso especial ao sistema, este será revogado. Por exemplo, em caso de ', STRONG ('professores'), ', ele não terá mais acesso às suas ', 'disciplinas e suas turmas'), P ('Tem certeza que deseja deletar este vínculo?'), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.FormButton ('deletar_vinculo_sim', 'Sim', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), forms.FormButton ('deletar_vinculo_nao', 'Não', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_deletar_vinculo = modal.Modal ('#modal_deletar_acesso_escola_container', __kwargtrans__ (dict ({'title': 'Deletar vínculo', 'content': content, 'footer': footer, 'form': 'deletar_vinculo'})));
		self.modal_deletar_vinculo.open ();
		$ ('#phanterpwa-widget-form-form_button-deletar_vinculo_sim').off ('click.adicionar_deletar_vinculo_sim').on ('click.adicionar_deletar_vinculo_sim', (function __lambda__ () {
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
			return self._on_click_deletar_vinculo (id_vinculo);
		}));
		$ ('#phanterpwa-widget-form-form_button-deletar_vinculo_nao').off ('click.adicionar_deletar_vinculo_nao').on ('click.adicionar_deletar_vinculo_nao', (function __lambda__ () {
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
			return self.modal_deletar_vinculo.close ();
		}));
	});},
	get _on_click_deletar_vinculo () {return __get__ (this, function (self, id_vinculo) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_vinculo': var id_vinculo = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.DELETE ('api', 'vinculo', 'deletar', id_vinculo, __kwargtrans__ ({onComplete: self.depois_de_deletar_vinculo}));
		self.modal_deletar_vinculo.close ();
	});},
	get depois_de_deletar_vinculo () {return __get__ (this, function (self, data, ajax_status) {
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
			self.obter_vinculos ();
		}
	});},
	get get_visualizar_funcionario () {return __get__ (this, function (self, widget_instance) {
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
		var id_funcionario = $ (widget_instance).data ('id_funcionario');
		window.PhanterPWA.GET ('api', 'funcionario', 'visualizar', id_funcionario, __kwargtrans__ ({onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.modal_add_funcinario_visualizar (data, ajax_status);
		})}));
	});},
	get modal_add_funcinario_visualizar () {return __get__ (this, function (self, data, ajax_status) {
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
			var html_vinculos = DIV (DIV ('VÍNCULOS DO FUNCIONÁRIO', __kwargtrans__ ({_class: 'p-col w1p100 phanterpwa-widget-form-separator'})), P ('O Funcionário não possui vínculos'), __kwargtrans__ ({_class: 'vinculos-conteudo'}));
			if (json.data.vinculos !== null && json.data.vinculos !== undefined) {
				var html_vinculos = DIV (DIV ('VÍNCULOS DO FUNCIONÁRIO', __kwargtrans__ ({_class: 'p-col w1p100 phanterpwa-widget-form-separator'})), __kwargtrans__ ({_class: 'vinculos-conteudo'}));
				var tabela = XTABLE ('tabela_ficha_individual', XTRH ('tabela_ficha_individual_head', 'Ano Letivo', 'Escola', 'Atribuições', 'Data Limite', 'Autorização'));
				for (var x of json.data.vinculos) {
					var data_limite = '31/12/{0}'.format (x.anos_letivo.ano);
					if (x.vinculos_funcionarios.data_limite !== null && x.vinculos_funcionarios.data_limite !== undefined) {
						var data_limite = validations.format_iso_date_datetime (x.vinculos_funcionarios.data_limite, 'dd/MM/yyyy', 'date');
					}
					tabela.append (XTRD ('tabela_ficha_individual_linhas_{0}'.format (x.vinculos_funcionarios.id), x.anos_letivo.ano, x.escolas.nome, x.profissoes.profissao, data_limite, x.vinculos_funcionarios.autorizacao, __kwargtrans__ (dict ({'drag_and_drop': false}))));
				}
				html_vinculos.append (tabela);
			}
			var content = DIV (forms.Form (json.data.funcionario), html_vinculos, __kwargtrans__ ({_class: 'p-row'}));
			self.modal_visualizar_funcionario = modal.Modal ('#modal_visualizar_escola_funcionario', __kwargtrans__ (dict ({'title': CONCATENATE (DIV ('Visualizar dados do funcionário'), DIV (STRONG (json.data.nome))), 'content': content})));
			self.modal_visualizar_funcionario.open ();
		}
		else {
			window.PhanterPWA.flash ('Não há alunos_visualizar matriculados para a série da turma');
		}
	});}
});
export var Vinculo =  __class__ ('Vinculo', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, arg0, arg1, arg2, arg3) {
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
		var vars_serialized = '';
		if (self.index_instance.request.js_params !== null && self.index_instance.request.js_params !== undefined) {
			var vars_serialized = '?{0}'.format ($.param (self.index_instance.request.js_params));
		}
		if (arg0 == 'editar') {
			self.get_form_vinculo ();
		}
		else if (arg0 == 'visualizar') {
			self.visualizar (id_vinculo, index_instance.request.params);
		}
		else if (arg0 == 'novo' && str (arg1).isdigit () && (arg2 === null || arg2 === undefined)) {
			var html = escolas.EscolherEscola (__kwargtrans__ ({id_target: '#content-vinculo', callback_link: (function __lambda__ (id_escola) {
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
				return '#_phanterpwa:/vinculos/novo/{0}/{1}{2}'.format (self.arg1, id_escola, vars_serialized);
			})}));
		}
		else if (arg0 == 'novo' && str (arg1).isdigit () && str (arg2).isdigit () && (arg3 === null || arg3 === undefined)) {
			var html = anos_letivos.EscolherAnoLetivo (__kwargtrans__ ({id_target: '#content-vinculo', callback_link: (function __lambda__ (ano) {
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
				return '#_phanterpwa:/vinculos/novo/{0}/{1}/{2}{3}'.format (self.arg1, self.arg2, ano, vars_serialized);
			})}));
		}
		else if (arg0 == 'novo' && str (arg1).isdigit () && str (arg2).isdigit () && str (arg3).isdigit ()) {
			self.id_funcionario = arg1;
			self.id_escola = arg2;
			self.ano_letivo = arg3;
			self.id_atribuicao = window.PhanterPWA.Request.get_arg (4);
			self.autorizacao_especial = window.PhanterPWA.Request.get_param ('autorizacao');
			self.get_form_vinculo (arg0, arg1, arg2);
		}
	});},
	get lista_de_vinculos () {return __get__ (this, function (self, json) {
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
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, self.arg1);
		var aviso = '';
		if (json.aviso !== null && json.aviso !== undefined) {
			var aviso = H5 (json.aviso, __kwargtrans__ ({_style: 'color:red;'}));
		}
		var table = XTABLE ('lista_de_vinculos-table', XTRH ('lista_de_vinculos-table-head', ...['Nome completo', 'Vinculo Escolar', 'Atribuição'], DIV (I (__kwargtrans__ ({_class: 'fas fa-plus'})), __kwargtrans__ (dict ({'_class': 'icon_button wave_on_click novo_vinculo', '_data-id_funcionario': self.arg0, '_data-id_escola': self.arg1, '_data-ano_letivo': self.arg2})))));
		if (json.data.vinculos !== undefined) {
			var cont_vinculos = 0;
			var cont_escola = 0;
			for (var x of json.data.vinculos) {
				cont_vinculos++;
				var botao_acao = DIV (I (__kwargtrans__ ({_class: 'fas fa-exclamation-circle'})), __kwargtrans__ (dict ({'_href': '#', '_class': 'icon_button wave_on_click', '_disabled': 'disabled'})));
				if (x.autorizado) {
					cont_escola++;
					var botao_acao = DIV (I (__kwargtrans__ ({_class: 'fas fa-edit'})), __kwargtrans__ (dict ({'_class': 'icon_button wave_on_click editar_vinculo_especifico', '_data-id_vinculo': x.id, '_data-id_funcionario': self.arg0, '_data-id_escola': self.arg1, '_data-ano_letivo': self.arg2})));
				}
				table.append (XTRD ('lista_de_vinculos-table-data-{0}'.format (x.id), x.nome_completo, x.nome_da_escola, x.nome_atribuicao, botao_acao, __kwargtrans__ (dict ({'drag_and_drop': false}))));
			}
		}
		if (cont_vinculos == 1 && cont_escola == 1) {
			var titulo = H3 ('O FUNCIONÁRIO JÁ POSSUI UM VÍNCULO NESTA UNIDADE DE ENSINO NO ANO LETIVO ESPECIFICADO.');
		}
		else if (cont_vinculos == 1) {
			var titulo = H3 ('O FUNCIONÁRIO POSSUI UM VÍNCULO EM OUTRA UNIDADE DE ENSINO ANO LETIVO ESPECIFICADO.', ' VOCÊ NÃO TEM AUTORIZAÇÃO DE EDITÁ-LO, PORÉM PODE ADICIONAR UM NOVO VINCULO EM SUA ESCOLA.');
		}
		else {
			var titulo = H3 ('O FUNCIONÁRIO POSSUI OUTROS VÍNCULOS EM OUTRA UNIDADE DE ENSINO NO ANO LETIVO ESPECIFICADO.', ' VOCÊ NÃO TEM AUTORIZAÇÃO DE EDITÁ-LOS, PORÉM PODE ADICIONAR UM NOVO VINCULO EM SUA ESCOLA.');
			if (cont_escola > 0) {
				var titulo = H3 ('O FUNCIONÁRIO POSSUI OUTROS VÍNCULOS EM OUTRA UNIDADE DE ENSINO NO ANO LETIVO ESPECIFICADO.', ' VOCÊ NÃO TEM AUTORIZAÇÃO DE EDITÁ-LOS, PORÉM PODE EDITAR OS VÍNCULOS EXISTENTES DE SUA UNIDADE', ' DE ENSINO OU ADICIONAR UM NOVO VINCULO EM SUA ESCOLA.');
				if (cont_escola == cont_vinculos) {
					var titulo = H3 ('O FUNCIONÁRIO JÁ POSSUI OUTROS VÍNCULOS EM SUA UNIDADE DE ENSINO NO ANO LETIVO ESPECIFICADO.', ' VOCÊ PODE EDITAR OS VÍNCULOS EXISTENTES OU ADICIONAR UM NOVO VINCULO.');
				}
			}
		}
		var html = DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (titulo, __kwargtrans__ ({_class: 'p-col w1p100 w4p70'})), __kwargtrans__ ({_class: 'p-row'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'lista_de_vinculos'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ (dict ({'_id': 'vinculo-funcionario-escola', '_class': 'p-row'}))), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), __kwargtrans__ ({_class: 'series-container phanterpwa-card-container'}));
		html.html_to ('#content-vinculo');
		table.html_to ('#lista_de_vinculos');
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
				self.lista_de_vinculos (json);
			}
			else {
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
		self.nome_funcionario = json.data.funcionario.nome_completo;
		self.form = forms.Form (json.data.vinculo);
		var logo = '{0}/api/escolas/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, json.data.id_escola);
		var aviso = '';
		if (json.aviso !== null && json.aviso !== undefined) {
			var aviso = H5 (json.aviso, __kwargtrans__ ({_style: 'color:red;'}));
		}
		var titulo = P ('CRIANDO UM NOVO VÍNCULO DO(A) FUNCIONÁRIO(A) ', STRONG (self.nome_funcionario), ' NESTA UNIDADE DE ENSINO.');
		self.id_vinculo = null;
		if (json.id_vinculo !== null && json.id_vinculo !== undefined) {
			self.id_vinculo = json.id_vinculo;
			var titulo = H3 ('O FUNCIONÁRIO JÁ POSSUI UM VÍNCULO NESTA UNIDADE DE ENSINO NO ANO LETIVO ESPECIFICADO.');
		}
		var html = DIV (DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'escolas-container-info-image', _style: 'text-align: center;'})), __kwargtrans__ ({_class: 'p-col w1p100 w4p30'})), DIV (titulo, P ('OBSERVE QUE O VÍNCULO ESTÁ SENDO EFETUADO NO ANO LETIVO DE ', STRONG (self.ano_letivo, __kwargtrans__ ({_style: 'text-style:bold'})), ', CASO ESTE NÃO', ' SEJA O ANO CORRETO ', A ('CLIQUE AQUI.', __kwargtrans__ ({_href: window.PhanterPWA.XWAY ('vinculo', self.arg0, self.arg1, self.arg2), _class: 'btn btn-inline'}))), aviso, __kwargtrans__ ({_class: 'p-col w1p100 w4p70'})), __kwargtrans__ ({_class: 'p-row'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'formulario_vinculo_funcionario'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ (dict ({'_id': 'vinculo-funcionario-escola', '_class': 'p-row'}))), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), __kwargtrans__ ({_class: 'series-container phanterpwa-card-container'}));
		html.html_to ('#content-vinculo');
		self.form.html_to ('#formulario_vinculo_funcionario');
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
		forms.SignForm ('#form-vinculos_funcionarios', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-vinculos_funcionarios');
		})}));
		$ ('#phanterpwa-widget-form-submit_button-vinculos_funcionarios').off ('click.submit_vinculos_button').on ('click.submit_vinculos_button', (function __lambda__ () {
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
	get get_form_vinculo () {return __get__ (this, function (self) {
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
		if (self.arg0 == 'novo' && str (self.arg1).isdigit () && str (self.arg2).isdigit () && str (self.arg3).isdigit ()) {
			var paramentros = dict (__kwargtrans__ ({onComplete: self.after_get}));
			if (self.id_atribuicao !== null) {
				paramentros ['_atribuicao'] = self.id_atribuicao;
			}
			if (self.autorizacao_especial !== null) {
				paramentros ['_autorizacao_especial'] = self.autorizacao_especial;
			}
			window.PhanterPWA.GET ('api', 'vinculo', self.arg0, self.arg1, self.arg2, self.arg3, __kwargtrans__ (paramentros));
		}
		else {
			window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'vinculo', self.arg0, self.arg1], 'onComplete': self.after_get, 'get_cache': self.process_data})));
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
			var form_vinculo = $ ('#form-vinculos_funcionarios') [0];
			var form_vinculo = new FormData (form_vinculo);
			if (self.arg0 == 'novo' && str (self.arg1).isdigit () && str (self.arg2).isdigit () && str (self.arg3).isdigit ()) {
				window.PhanterPWA.ApiServer.POST (__kwargtrans__ (dict ({'url_args': ['api', 'vinculo', self.arg0, self.arg1, self.arg2, self.arg3], 'form_data': form_vinculo, 'onComplete': self.after_submit})));
			}
			else if (self.arg0 == 'editar' && str (self.arg1).isdigit ()) {
				window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'vinculo', self.arg0, self.arg1], 'form_data': form_vinculo, 'onComplete': self.after_submit})));
			}
		}
	});},
	get after_submit () {return __get__ (this, function (self, data) {
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
		forms.SignForm ('#form-vinculos_funcionarios');
		self.form.process_api_response (data);
		if (data.status == 200) {
			if (window.PhanterPWA.Request.get_param ('retornar') !== null) {
				window.PhanterPWA.open_way (window.PhanterPWA.Request.get_param ('retornar'));
			}
			else {
				window.PhanterPWA.open_way ('funcionarios/');
			}
		}
	});}
});

//# sourceMappingURL=handlers.vinculos.map