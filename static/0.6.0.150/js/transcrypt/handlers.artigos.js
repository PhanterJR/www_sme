// Transcrypt'ed from Python, 2021-11-08 00:54:15
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as preloaders from './phanterpwa.frontend.preloaders.js';
import * as widgets from './phanterpwa.frontend.components.widgets.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
import * as gatehandler from './phanterpwa.frontend.gatehandler.js';
var __name__ = 'handlers.artigos';
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
export var I18N = helpers.I18N;
export var XTABLE = widgets.Table;
export var XML = helpers.XML;
export var XTRD = widgets.TableData;
export var XTRH = widgets.TableHead;
export var XFOOTER = widgets.TableFooterPagination;
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
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('ARTIGOS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-artigos', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
	});}
});
export var Artigos =  __class__ ('Artigos', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.index_instance = index_instance;
		var html = DIV (DIV (FORM (DIV (DIV (DIV (widgets.Input ('search_artigos', __kwargtrans__ ({label: 'Localizar artigo', placeholder: 'Nome ou parte do nome do artigo', icon: I (__kwargtrans__ ({_class: 'fab fa-sistrix'})), icon_on_click: (function __lambda__ () {
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
			return self.search ();
		})})), __kwargtrans__ ({_class: 'p-col w1p100 w3p50 w4p75'})), DIV (widgets.Select ('campos_artigos', __kwargtrans__ ({label: 'Campos à pesquisar', placeholder: 'Escolha o Campo', value: 'id', data_set: [['id', 'ID'], ['artigo', 'Artigo']]})), __kwargtrans__ ({_id: 'phanterpwa-input-search_field', _class: 'p-col w1p100 w3p50 w4p25'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ ({_action: '#', _id: 'search_artigos', _class: 'form-search_artigos', _enctype: 'multipart/form-data', _method: 'post', _autocomplete: 'off'})), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), DIV (__kwargtrans__ ({_id: 'lista-artigos-subtitle', _class: 'phanterpwa-subtitle'})), DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'lista-artigos-container', _class: 'phanterpwa_tables_container'})), __kwargtrans__ ({_class: 'artigos-container phanterpwa-card-container'}));
		helpers.XmlConstructor.__init__ (self, 'div', false, html, __kwargtrans__ ({_class: 'lista_de_artigos'}));
		self.html_to ('#content-artigos');
		self._get_data_search ();
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
			if (json.artigos === null) {
				window.PhanterPWA.open_way ('artigos/novo');
			}
			else {
				self.process_data (json);
			}
		}
	});},
	get _on_sort () {return __get__ (this, function (self, table_head_instance) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'table_head_instance': var table_head_instance = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var widgets = window.PhanterPWA.Request.widgets;
		var page = widgets ['artigos-table-footer'].page ();
		var search = widgets ['search_artigos'].value ();
		var field = widgets ['campos_artigos'].value ();
		var sorted_field = widgets ['artigos-table-head'].sorted_field ();
		self._get_data_search (__kwargtrans__ ({search: search, field: field, orderby: sorted_field [0], py_sort: sorted_field [1], page: page}));
	});},
	get _on_page () {return __get__ (this, function (self, table_pagination_instance) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'table_pagination_instance': var table_pagination_instance = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var widgets = window.PhanterPWA.Request.widgets;
		var page = widgets ['artigos-table-footer'].page ();
		var search = widgets ['search_artigos'].value ();
		var field = widgets ['campos_artigos'].value ();
		var sorted_field = widgets ['artigos-table-head'].sorted_field ();
		self._get_data_search (__kwargtrans__ ({search: search, field: field, orderby: sorted_field [0], py_sort: sorted_field [1], page: page}));
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
		if (self.current_hash !== json.hash) {
			self.current_hash = json.hash;
			var artigos = json.artigos;
			$ ('#lista-artigos-subtitle').text (json.message);
			var new_select_widget = widgets.Select ('campos_artigos', __kwargtrans__ ({label: artigos.search_fields.label, placeholder: 'Escolha o Campo', value: artigos.search_fields.value, data_set: artigos.search_fields.data_set}));
			new_select_widget.html_to ('#phanterpwa-input-search_field');
			new_select_widget.reload ();
			var table = XTABLE ('artigos-table', XTRH ('artigos-table-head', ...artigos.searcher.data_set, DIV (I (__kwargtrans__ ({_class: 'fas fa-plus'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'artigos/novo', '_class': 'icon_button wave_on_click'}))), __kwargtrans__ ({sort_by: artigos.searcher.sort_by, sort_order: artigos.searcher.sort_order, sortable: artigos.searcher.sortable, on_click_sortable: self._on_sort})));
			var artigos_content = DIV (__kwargtrans__ ({_class: 'p-row'}));
			if (artigos.data !== undefined) {
				for (var x of artigos.data) {
					var logo = '{0}/api/artigos/{1}/image'.format (window.PhanterPWA.ApiServer.remote_address, x.id);
					var html_section = CONCATENATE (DIV (XSECTION (DIV ('{0} - {1}'.format (x.id, x.abreviacao), __kwargtrans__ ({_class: 'artigos-container-abreviacao phanterpwa-xsection-title'})), DIV (DIV (IMG (__kwargtrans__ ({_src: logo})), __kwargtrans__ ({_class: 'artigos-container-info-image'})), DIV (SPAN (x.nome), __kwargtrans__ ({_class: 'e-tagger-wrapper p-col w1p100'})), __kwargtrans__ ({_class: 'artigos-container-info'})), DIV (widgets.MenuBox ('drop_{0}'.format (x.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('Editar', __kwargtrans__ (dict ({'_class': 'botao_editar_artigo wave_on_click', '_href': '#_phanterpwa:/artigos/{0}/editar'.format (x.id)}))), widgets.MenuOption ('Configuração', __kwargtrans__ (dict ({'_class': 'botao_visualizar_socio wave_on_click', '_href': '#_phanterpwa:/artigos/{0}/configuracao'.format (x.id)})))), __kwargtrans__ ({_class: 'phanterpwa-xsection-menu_buttom'})), __kwargtrans__ ({_class: 'artigos-wrapper has_menu_button'})), __kwargtrans__ ({_class: 'p-col w4p50 w1p100 e-padding_10'})));
					artigos_content.append (html_section);
				}
				table.append (CONCATENATE (TR (TD (artigos_content, __kwargtrans__ ({_colspan: 5}))), XFOOTER ('artigos-table-footer', __kwargtrans__ ({page: artigos.searcher.page, total_pages: artigos.searcher.total_pages, on_click_page: self._on_page, colspan: 5}))));
			}
			table.html_to ('#lista-artigos-container');
		}
	});},
	get _get_data_search () {return __get__ (this, function (self, search, field, orderby, py_sort, page) {
		if (typeof search == 'undefined' || (search != null && search.hasOwnProperty ("__kwargtrans__"))) {;
			var search = '';
		};
		if (typeof field == 'undefined' || (field != null && field.hasOwnProperty ("__kwargtrans__"))) {;
			var field = 'id';
		};
		if (typeof orderby == 'undefined' || (orderby != null && orderby.hasOwnProperty ("__kwargtrans__"))) {;
			var orderby = 'id';
		};
		if (typeof py_sort == 'undefined' || (py_sort != null && py_sort.hasOwnProperty ("__kwargtrans__"))) {;
			var py_sort = 'asc';
		};
		if (typeof page == 'undefined' || (page != null && page.hasOwnProperty ("__kwargtrans__"))) {;
			var page = 1;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'search': var search = __allkwargs0__ [__attrib0__]; break;
						case 'field': var field = __allkwargs0__ [__attrib0__]; break;
						case 'orderby': var orderby = __allkwargs0__ [__attrib0__]; break;
						case 'py_sort': var py_sort = __allkwargs0__ [__attrib0__]; break;
						case 'page': var page = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'artigos'], 'url_vars': dict ({'search': search, 'field': field, 'orderby': orderby, 'sort': py_sort, 'page': page}), 'onComplete': self.after_get, 'get_cache': self.process_data})));
	});},
	get search () {return __get__ (this, function (self) {
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
		var widgets = window.PhanterPWA.Request.widgets;
		var search = widgets ['search_artigos'].value ();
		var field = widgets ['campos_artigos'].value ();
		self._get_data_search (__kwargtrans__ ({search: search, field: field, orderby: field, py_sort: 'desc', page: 1}));
	});}
});
export var Artigo =  __class__ ('Artigo', [helpers.XmlConstructor], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, id_artigo, action, target, on_submit) {
		if (typeof target == 'undefined' || (target != null && target.hasOwnProperty ("__kwargtrans__"))) {;
			var target = '#content-artigos';
		};
		if (typeof on_submit == 'undefined' || (on_submit != null && on_submit.hasOwnProperty ("__kwargtrans__"))) {;
			var on_submit = null;
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
						case 'action': var action = __allkwargs0__ [__attrib0__]; break;
						case 'target': var target = __allkwargs0__ [__attrib0__]; break;
						case 'on_submit': var on_submit = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.target = target;
		self.on_submit = on_submit;
		self.id_artigo = id_artigo;
		self.action = action;
		if (action == 'editar' || id_artigo == 'novo') {
			self.get_form_artigo (id_artigo);
		}
		else if (action == 'visualizar') {
			self.visualizar (id_artigo, index_instance.request.params);
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
			self.process_data (json);
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
		self.form = forms.Form (json.data.artigos);
		self.form.html_to (self.target);
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
		forms.SignForm ('#form-artigos', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-artigos');
		})}));
		$ ('#phanterpwa-widget-form-submit_button-artigos').off ('click.submit_artigos_button').on ('click.submit_artigos_button', (function __lambda__ () {
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
		window.PhanterPWA.Request.widgets ['artigos-naturalidades'].set_on_click_new_button (self.modal_add_naturalidade);
	});},
	get get_form_artigo () {return __get__ (this, function (self, id_artigo) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'id_artigo': var id_artigo = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'artigos', id_artigo], 'onComplete': self.after_get, 'get_cache': self.process_data})));
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
			var form_artigo = $ ('#form-artigos') [0];
			var form_artigo = new FormData (form_artigo);
			if (self.id_artigo == 'novo') {
				window.PhanterPWA.ApiServer.POST (__kwargtrans__ (dict ({'url_args': ['api', 'artigos', self.id_artigo], 'form_data': form_artigo, 'onComplete': self.after_submit})));
			}
			else if (self.id_artigo.isdigit ()) {
				window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'artigos', self.id_artigo], 'form_data': form_artigo, 'onComplete': self.after_submit})));
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
		forms.SignForm ('#form-artigos');
		if (ajax_status == 'success') {
			self.form.process_api_response (data);
			if (callable (self.on_submit)) {
				self.on_submit (data, ajax_status);
			}
			else if (data.status == 200 && self.id_artigo == 'novo') {
				window.PhanterPWA.open_way ('artigos/novo');
			}
			else if (data.status == 200) {
				window.PhanterPWA.open_way ('artigos');
			}
		}
	});}
});

//# sourceMappingURL=handlers.artigos.map