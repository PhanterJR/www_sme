// Transcrypt'ed from Python, 2022-03-14 09:15:23
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as forms from './phanterpwa.frontend.forms.js';
import * as codemirror from './plugins.codemirror.js';
import * as preloaders from './phanterpwa.frontend.preloaders.js';
import * as widgets from './phanterpwa.frontend.components.widgets.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
import * as gatehandler from './phanterpwa.frontend.gatehandler.js';
var __name__ = 'handlers.artigos';
export var CONCATENATE = helpers.CONCATENATE;
export var OPTION = helpers.XmlConstructor.tagger ('option');
export var SELECT = helpers.XmlConstructor.tagger ('select');
export var BUTTON = helpers.XmlConstructor.tagger ('button');
export var DIV = helpers.XmlConstructor.tagger ('div');
export var H2 = helpers.XmlConstructor.tagger ('h2');
export var A = helpers.XmlConstructor.tagger ('a');
export var SPAN = helpers.XmlConstructor.tagger ('span');
export var ARTICLE = helpers.XmlConstructor.tagger ('article');
export var FORM = helpers.XmlConstructor.tagger ('form');
export var UL = helpers.XmlConstructor.tagger ('ul');
export var LI = helpers.XmlConstructor.tagger ('li');
export var TABLE = helpers.XmlConstructor.tagger ('table');
export var TR = helpers.XmlConstructor.tagger ('tr');
export var TD = helpers.XmlConstructor.tagger ('td');
export var TH = helpers.XmlConstructor.tagger ('th');
export var STRONG = helpers.XmlConstructor.tagger ('strong');
export var IMG = helpers.XmlConstructor.tagger ('img', true);
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var I18N = helpers.I18N;
export var XTABLE = widgets.Table;
export var XML = helpers.XML;
export var XTRD = widgets.TableData;
export var XTRH = widgets.TableHead;
export var XFOOTER = widgets.TableFooterPagination;
export var PRE = helpers.XmlConstructor.tagger ('pre');
export var I = helpers.XmlConstructor.tagger ('i');
export var LABEL = helpers.XmlConstructor.tagger ('label');
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
		var arg0 = self.request.get_arg (0);
		var arg1 = self.request.get_arg (1);
		if (arg0 == 'criar' && window.PhanterPWA.auth_user_has_role (['Redator', 'Editor', 'root'])) {
			self.CriarEditarArtigo = CriarEditarArtigo (self);
		}
		else if (arg0 == 'editar' && str (arg1).isdigit () && window.PhanterPWA.auth_user_has_role (['Redator', 'Editor', 'root'])) {
			self.CriarEditarArtigo = CriarEditarArtigo (self, arg1);
		}
		else {
			self.meses = dict ({'01': 'Janeiro', '02': 'Fevereiro', '03': 'Março', '04': 'Abril', '05': 'Maio', '06': 'Junho', '07': 'Julho', '08': 'Agosto', '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'});
			var html = CONCATENATE (DIV (DIV (DIV (DIV ('ARTIGOS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-artigos', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})), DIV (__kwargtrans__ ({_id: 'float_button_novo'})));
			html.html_to ('#main-container');
			self.get_artigos ();
		}
	});},
	get get_artigos () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'artigos', __kwargtrans__ ({onComplete: self._depois_de_pegar_artigos}));
	});},
	get codemirror_wrapper () {return __get__ (this, function (self, source, lang, _id) {
		if (typeof lang == 'undefined' || (lang != null && lang.hasOwnProperty ("__kwargtrans__"))) {;
			var lang = null;
		};
		if (typeof _id == 'undefined' || (_id != null && _id.hasOwnProperty ("__kwargtrans__"))) {;
			var _id = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'source': var source = __allkwargs0__ [__attrib0__]; break;
						case 'lang': var lang = __allkwargs0__ [__attrib0__]; break;
						case '_id': var _id = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (lang === null || lang === undefined || lang == '') {
			return '';
		}
		else {
			var lang = str (lang).strip ();
			var the_id = _id;
			if (_id === null || _id === undefined) {
				var the_id = window.PhanterPWA.get_id ();
			}
			if (__in__ (lang, dict (window.CodeMirror.modes).py_keys ())) {
				var code = PRE (codemirror.CodeMirrorHelper (the_id, __kwargtrans__ ({value: source, mode: lang, lineNumbers: true})), __kwargtrans__ ({_class: 'markdownit-codemirror_wrapper'})).xml ();
				return code;
			}
			else {
				var code = PRE (codemirror.CodeMirrorHelper (the_id, __kwargtrans__ ({value: source, mode: null, lineNumbers: true})), __kwargtrans__ ({_class: 'markdownit-codemirror_wrapper'})).xml ();
				return code;
			}
		}
	});},
	get _data_process () {return __get__ (this, function (self, x, sorte) {
		if (typeof sorte == 'undefined' || (sorte != null && sorte.hasOwnProperty ("__kwargtrans__"))) {;
			var sorte = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'x': var x = __allkwargs0__ [__attrib0__]; break;
						case 'sorte': var sorte = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var __left0__ = x.postagem.py_split (' ');
		var data_pos = __left0__ [0];
		var hora = __left0__ [1];
		var __left0__ = data_pos.strip ().py_split ('-');
		var ano = __left0__ [0];
		var mes = __left0__ [1];
		var dia = __left0__ [2];
		var data_postagem = '{0} de {1} de {2} - {3}'.format (dia, self.meses [mes], ano, hora);
		var md = window.markdownit ('default', dict ({'html': true, 'linkify': true, 'typographer': true, 'highlight': (function __lambda__ (source, lang) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'source': var source = __allkwargs0__ [__attrib0__]; break;
							case 'lang': var lang = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self.codemirror_wrapper (source, lang);
		})}));
		md.use (window.markdownitAbbr);
		md.use (window.markdownitContainer);
		md.use (window.markdownitDeflist);
		md.use (window.markdownitEmoji);
		md.use (window.markdownitFootnote);
		md.use (window.markdownitIns);
		md.use (window.markdownitMark);
		md.use (window.markdownitSub);
		md.use (window.markdownitSup);
		md.enable ('replacements').enable ('smartquotes').enable ('image');
		if (x.artigo !== null) {
			var artigo = DIV (XML (md.render (x.artigo)), __kwargtrans__ ({_class: 'phanterpwa-markdownit-wrapper texto_artigo'}));
		}
		else {
			var artigo = '';
		}
		if (x.introducao !== null) {
			var introducao = DIV (XML (md.render (x.introducao)), __kwargtrans__ ({_class: 'phanterpwa-markdownit-wrapper introducao_artigo'}));
		}
		else {
			var introducao = '';
		}
		var imagem = '{0}/api/artigo/image/{1}'.format (window.PhanterPWA.ApiServer.remote_address, x.id);
		var tabela_data_postagem = TABLE (__kwargtrans__ ({_classs: 'tabela_data_postagem'}));
		var autor = 'Anônimo';
		var title_edicao = null;
		var botao_edicao = false;
		if (window.PhanterPWA.auth_user_has_role (['Editor', 'root'])) {
			var botao_edicao = true;
		}
		if (x.autor !== null) {
			if (window.PhanterPWA.auth_user_has_id (x.autor.id)) {
				var botao_edicao = true;
			}
			var autor = '{0} {1}'.format (x.autor.first_name, x.autor.last_name);
		}
		if (x.editor !== null) {
			var title_edicao = 'Editado por: {0} {1}'.format (x.editor.first_name, x.editor.last_name);
		}
		var btn_edit = '';
		widgets.FloatMenu ('botao_criar_artigo', I (__kwargtrans__ ({_class: 'fas fa-print'})), __kwargtrans__ ({_title: 'Criar um novo artigo', _href: window.PhanterPWA.XWAY ('artigos', 'criar')})).html_to ('#float_button_novo');
		if (botao_edicao) {
			var btn_edit = TD (A (I (__kwargtrans__ ({_class: 'fas fa-edit'})), __kwargtrans__ ({_class: 'botao_editar_artigo icon_button', _href: window.PhanterPWA.XWAY ('artigos', 'editar', x.id)})), __kwargtrans__ ({_class: 'campo_botao_editar_artigo', _colspan: '2'}));
		}
		tabela_data_postagem.append (TR (TH (autor), btn_edit));
		if (x.editor !== null && x.edicao !== null) {
			var __left0__ = x.edicao.py_split (' ');
			var data_edi = __left0__ [0];
			var hora_edi = __left0__ [1];
			var __left0__ = data_edi.strip ().py_split ('-');
			var ano = __left0__ [0];
			var mes = __left0__ [1];
			var dia = __left0__ [2];
			var data_edicao = '{0} de {1} de {2} - {3}'.format (dia, self.meses [mes], ano, hora_edi);
			tabela_data_postagem.append (TR (TD (STRONG (data_postagem, SPAN (' (Editado em ', data_edicao, ')', __kwargtrans__ ({_title: title_edicao}))))));
		}
		else {
			tabela_data_postagem.append (TR (TD (STRONG (data_postagem))));
		}
		var subtitulo = '';
		if (x.subtitulo !== null) {
			var subtitulo = DIV (x.titulo, __kwargtrans__ ({_class: 'subtitulo_artigo'}));
		}
		self.html_artigos.append (DIV (DIV (x.titulo, __kwargtrans__ ({_class: 'titulo_artigo'})), subtitulo, DIV (tabela_data_postagem, __kwargtrans__ ({_class: 'p-row'})), DIV (DIV (IMG (__kwargtrans__ ({_src: imagem, _class: 'imagem_artigo'})), __kwargtrans__ ({_class: 'imagem_artigo_conteiner'})), DIV (x.subtitulo, __kwargtrans__ ({_class: 'subtitulo_artigo'})), __kwargtrans__ ({_class: 'p-row'})), DIV (introducao, __kwargtrans__ ({_class: 'p-row'})), ARTICLE (artigo), __kwargtrans__ ({_id: 'artigo-container-{0}'.format (x.id), _class: 'artigo-container'})));
	});},
	get _depois_de_pegar_artigos () {return __get__ (this, function (self, data, ajax_status) {
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
			if (json.data !== undefined && json.data !== null) {
				self.html_artigos = DIV (__kwargtrans__ ({_class: 'artigos-wrapper'}));
				for (var x of json.data.sorte) {
					self._data_process (x, __kwargtrans__ ({sorte: true}));
				}
				for (var x of json.data.titulo) {
					self._data_process (x, __kwargtrans__ ({sorte: false}));
				}
				for (var x of json.data.subtitulo) {
					self._data_process (x, __kwargtrans__ ({sorte: false}));
				}
				for (var x of json.data.introducao) {
					self._data_process (x, __kwargtrans__ ({sorte: false}));
				}
				for (var x of json.data.artigo) {
					self._data_process (x, __kwargtrans__ ({sorte: false}));
				}
				self.html_artigos.html_to ('#content-artigos');
			}
			else {
				var botao_criar = '';
				if (window.PhanterPWA.auth_user_has_role (['Redator', 'Editor', 'root'])) {
					var botao_criar = DIV (A (BUTTON ('CRIAR UM NOVO ARTIGO/NOTÍCIA', __kwargtrans__ ({_class: 'btn'})), __kwargtrans__ ({_href: window.PhanterPWA.XWAY ('artigos', 'criar')})), __kwargtrans__ ({_class: 'p-row w1p100'}));
				}
				DIV (DIV ('NÃO HÁ ARTIGOS/NOTÍCIAS'), botao_criar, __kwargtrans__ ({_class: 'p-col'})).html_to ('#content-artigos');
			}
		}
	});}
});
export var CriarEditarArtigo =  __class__ ('CriarEditarArtigo', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, id_artigo) {
		if (typeof id_artigo == 'undefined' || (id_artigo != null && id_artigo.hasOwnProperty ("__kwargtrans__"))) {;
			var id_artigo = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
						case 'id_artigo': var id_artigo = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.Index = index_instance;
		self.id_artigo = id_artigo;
		if (id_artigo === null) {
			self._get_id_artigo ();
		}
		else {
			self._get_form_artigo ();
		}
	});},
	get _get_id_artigo () {return __get__ (this, function (self) {
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
		window.PhanterPWA.POST ('api', 'artigo', 'criar', __kwargtrans__ ({onComplete: self._depois_de_pegar_id}));
	});},
	get _get_form_artigo () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'artigo', 'editar', self.id_artigo, __kwargtrans__ ({onComplete: self._depois_de_pegar_id}));
	});},
	get _depois_de_pegar_id () {return __get__ (this, function (self, data, ajax_status) {
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
			self.id_artigo = json.data.id;
			self.dados_form = json.data;
			self._form_artigo ();
		}
	});},
	get _form_artigo () {return __get__ (this, function (self) {
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
		if (self.dados_form.rascunho === true) {
			var titulo_art = 'CRIAR ARTIGO (RASCUNHO)';
		}
		else {
			var titulo_art = 'EDITAR ARTIGO';
		}
		var thumb = '{0}/api/artigo/thumb/{1}'.format (window.PhanterPWA.ApiServer.remote_address, self.id_artigo);
		var imagem = '{0}/api/artigo/image/{1}'.format (window.PhanterPWA.ApiServer.remote_address, self.id_artigo);
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('ARTIGOS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV (titulo_art, __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (FORM (DIV (widgets.Input ('titulo_artigo', __kwargtrans__ ({label: 'Título do Artigo', py_name: 'titulo', placeholder: 'Título do Artigo', value: self.dados_form.titulo})), XSECTION (LABEL ('Imagem do Artigo'), widgets.Image ('card_artigo', __kwargtrans__ ({value: imagem, py_name: 'imagem_artigo', cutter: true, width: 600, height: 200, nocache: true}))), widgets.Input ('subtitulo_artigo', __kwargtrans__ ({label: 'Subtítulo do Artigo', py_name: 'subtitulo', placeholder: 'Subtítulo do Artigo', value: self.dados_form.subtitulo})), XSECTION (LABEL ('Resumo/Introdução do Artigo'), widgets.Textarea ('textarea_introducao', __kwargtrans__ ({py_name: 'introducao', value: self.dados_form.introducao}))), XSECTION (LABEL ('Texto do Artigo'), widgets.Textarea ('textarea_artigo', __kwargtrans__ ({py_name: 'artigo', value: self.dados_form.artigo}))), XSECTION (LABEL ('Imagem miniatura (Compartilhamento)'), widgets.Image ('card_thumb', __kwargtrans__ ({py_name: 'miniatura_artigo', value: thumb, width: 300, height: 300, nocache: true}))), DIV (forms.FormButton ('publicar', 'Publicar', __kwargtrans__ ({_id: 'botao-publicar'})), forms.FormButton ('salvar-rascunho', 'Salvar Rascunho', __kwargtrans__ ({_id: 'botao-salvar-rascunho'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_id: 'form-editor'})), DIV (__kwargtrans__ ({_id: 'visualizador_tempo_real'})), __kwargtrans__ (__mergekwargtrans__ ({_id: 'form-artigos', _class: 'form-wrapper'}, dict ({'_phanterpwa-form': 'artigos'})))), DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-user-graduate'})), __kwargtrans__ (dict ({'_class': 'botao_tempo_real icon_button', '_title': 'Dividir tela para visualização em tempo real'}))), DIV (I (__kwargtrans__ ({_class: 'fas fa-user-graduate'})), __kwargtrans__ (dict ({'_class': 'botao_visualizar icon_button', '_title': 'Dividir tela para visualização em tempo real'}))), __kwargtrans__ ({_class: 'form-botoes'})), __kwargtrans__ ({_class: 'form-artigo-container'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row'})));
		html.html_to ('#main-container');
		forms.SignForm ('#form-artigos');
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
		$ ('#botao-publicar').off ('click.publicar').on ('click.publicar', (function __lambda__ () {
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
			return self.publicar (__kwargtrans__ ({rascunho: false}));
		}));
		$ ('#botao-salvar-rascunho').off ('click.publicar').on ('click.publicar', (function __lambda__ () {
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
			return self.publicar (__kwargtrans__ ({rascunho: true}));
		}));
	});},
	get publicar () {return __get__ (this, function (self, rascunho) {
		if (typeof rascunho == 'undefined' || (rascunho != null && rascunho.hasOwnProperty ("__kwargtrans__"))) {;
			var rascunho = false;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'rascunho': var rascunho = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var form_data = new FormData ($ ('#form-artigos') [0]);
		if (rascunho) {
			form_data.append ('rascunho', true);
		}
		window.PhanterPWA.PUT ('api', 'artigo', 'editar', self.id_artigo, __kwargtrans__ ({form_data: form_data, onComplete: (function __lambda__ (data, ajax_status) {
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
			return self.depois_de_publicar (data, ajax_status, __kwargtrans__ ({rascunho: rascunho}));
		})}));
	});},
	get depois_de_publicar () {return __get__ (this, function (self, data, ajax_status, rascunho) {
		if (typeof rascunho == 'undefined' || (rascunho != null && rascunho.hasOwnProperty ("__kwargtrans__"))) {;
			var rascunho = false;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'ajax_status': var ajax_status = __allkwargs0__ [__attrib0__]; break;
						case 'rascunho': var rascunho = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var json = data.responseJSON;
		if (ajax_status == 'success') {
			if (rascunho) {
				window.PhanterPWA.flash (json.message);
			}
			else {
				window.PhanterPWA.flash (json.message);
			}
			window.PhanterPWA.open_way ('artigos');
		}
		else {
			forms.SignForm ('#form-artigos');
		}
	});},
	get realtime () {return __get__ (this, function (self) {
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
		var __left0__ = form.postagem.py_split (' ');
		var data_pos = __left0__ [0];
		var hora = __left0__ [1];
		var __left0__ = data_pos.strip ().py_split ('-');
		var ano = __left0__ [0];
		var mes = __left0__ [1];
		var dia = __left0__ [2];
		var data_postagem = '{0} de {1} de {2} - {3}'.format (dia, self.Index.meses [mes], ano, hora);
		var md = window.markdownit ('default', dict ({'html': true, 'linkify': true, 'typographer': true, 'highlight': (function __lambda__ (source, lang) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'source': var source = __allkwargs0__ [__attrib0__]; break;
							case 'lang': var lang = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return self.Index.codemirror_wrapper (source, lang);
		})}));
		md.use (window.markdownitAbbr);
		md.use (window.markdownitContainer);
		md.use (window.markdownitDeflist);
		md.use (window.markdownitEmoji);
		md.use (window.markdownitFootnote);
		md.use (window.markdownitIns);
		md.use (window.markdownitMark);
		md.use (window.markdownitSub);
		md.use (window.markdownitSup);
		md.enable ('replacements').enable ('smartquotes').enable ('image');
		var result = DIV (XML (md.render (form.artigo)), __kwargtrans__ ({_class: 'phanterpwa-markdownit-wrapper'}));
		self.html_artigos.append (DIV (H2 (form.titulo), DIV (DIV (STRONG ('Autor: '), form.autor, __kwargtrans__ ({_class: 'p-col w1p50'})), DIV (STRONG ('Postagem: '), data_postagem, __kwargtrans__ ({_class: 'p-col w1p50'})), __kwargtrans__ ({_class: 'p-row'})), result, __kwargtrans__ ({_id: 'artigo-container-{0}'.format (form.id), _class: 'artigo-container'})));
	});}
});

//# sourceMappingURL=handlers.artigos.map