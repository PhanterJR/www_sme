// Transcrypt'ed from Python, 2021-09-29 15:56:54
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as modal from './phanterpwa.frontend.components.modal.js';
import * as forms from './phanterpwa.frontend.forms.js';
import * as widgets from './phanterpwa.frontend.components.widgets.js';
import * as preloaders from './phanterpwa.frontend.preloaders.js';
import * as left_bar from './phanterpwa.frontend.components.left_bar.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
import * as decorators from './phanterpwa.frontend.decorators.js';
import * as gatehandler from './phanterpwa.frontend.gatehandler.js';
var __name__ = 'phanterpwa.frontend.components.admin';
export var DIV = helpers.XmlConstructor.tagger ('div');
export var I = helpers.XmlConstructor.tagger ('i');
export var H2 = helpers.XmlConstructor.tagger ('h2');
export var FORM = helpers.XmlConstructor.tagger ('form');
export var SPAN = helpers.XmlConstructor.tagger ('span');
export var IMG = helpers.XmlConstructor.tagger ('img', true);
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var A = helpers.XmlConstructor.tagger ('A');
export var OPTION = helpers.XmlConstructor.tagger ('option');
export var SELECT = helpers.XmlConstructor.tagger ('select');
export var UL = helpers.XmlConstructor.tagger ('ul');
export var LI = helpers.XmlConstructor.tagger ('li');
export var STRONG = helpers.XmlConstructor.tagger ('strong');
export var XTABLE = widgets.Table;
export var XML = helpers.XML;
export var XTRD = widgets.TableData;
export var XTRH = widgets.TableHead;
export var XFOOTER = widgets.TableFooterPagination;
export var I18N = helpers.I18N;
export var CONCATENATE = helpers.CONCATENATE;
export var Administration =  __class__ ('Administration', [gatehandler.Handler], {
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
		return window.PhanterPWA.auth_user_has_role ('root');
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
		self.auth_user = window.PhanterPWA.get_last_auth_user ();
		var arg = self.request.get_arg (0);
		var arg1 = self.request.get_arg (1);
		var arg2 = self.request.get_arg (2);
		if (arg == 'users') {
			var html = CONCATENATE (DIV (DIV (DIV (DIV ('USERS', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-users', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
			html.html_to ('#main-container');
			if (arg1 == 'new') {
				var BackButton = left_bar.LeftBarButton ('back_admin_user', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'admin/users', 'position': 'top', 'show_if': (function __lambda__ () {
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
					return (window.PhanterPWA.get_current_way () == 'admin/users/new' && window.PhanterPWA.auth_user_has_role ('root') ? true : false);
				})})));
				window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
				self.User = User (self, 'new');
			}
			else if (arg2 == 'edit' && str (arg1).isdigit ()) {
				var BackButton = left_bar.LeftBarButton ('back_admin_user_edit', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'admin/users', 'position': 'top', 'show_if': (function __lambda__ () {
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
					return (window.PhanterPWA.get_current_way () == 'admin/users/{0}/edit'.format (arg1) && window.PhanterPWA.auth_user_has_role ('root') ? true : false);
				})})));
				window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
				self.User = User (self, arg1, arg2);
			}
			else if (arg2 == 'impersonate' && str (arg1).isdigit ()) {
				var BackButton = left_bar.LeftBarButton ('back_admin_user_edit', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'admin/users', 'position': 'top', 'show_if': (function __lambda__ () {
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
					return (window.PhanterPWA.get_current_way () == 'admin/users/{0}/edit'.format (arg1) && window.PhanterPWA.auth_user_has_role ('root') ? true : false);
				})})));
				window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
				self.Impersonate = Impersonate (self, arg1, arg2);
			}
			else if (arg2 == 'delete' && str (arg1).isdigit ()) {
				self.User = User (self, arg1, arg2);
			}
			else {
				var BackButton = left_bar.LeftBarButton ('back_admin', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'admin', 'position': 'top', 'show_if': (function __lambda__ () {
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
					return (window.PhanterPWA.get_current_way () == 'admin/users' && window.PhanterPWA.auth_user_has_role ('root') ? true : false);
				})})));
				window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
				self.UsersList = UsersList (self);
			}
		}
		else if (arg == 'roles') {
			var html = CONCATENATE (DIV (DIV (DIV (DIV ('ROLES', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-roles', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
			html.html_to ('#main-container');
			if (arg1 == 'new') {
				var BackButton = left_bar.LeftBarButton ('back_admin_user', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'admin/users', 'position': 'top', 'show_if': (function __lambda__ () {
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
					return (window.PhanterPWA.get_current_way () == 'admin/users/new' && window.PhanterPWA.auth_user_has_role ('root') ? true : false);
				})})));
				window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
				self.Role = Role (self, 'new');
			}
			else if (arg2 == 'edit' && str (arg1).isdigit ()) {
				var BackButton = left_bar.LeftBarButton ('back_admin_user_edit', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'admin/users', 'position': 'top', 'show_if': (function __lambda__ () {
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
					return (window.PhanterPWA.get_current_way () == 'admin/users/{0}/edit'.format (arg1) && window.PhanterPWA.auth_user_has_role ('root') ? true : false);
				})})));
				window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
				self.Role = Role (self, arg1, arg2);
			}
			else {
				var BackButton = left_bar.LeftBarButton ('back_localizar_roles', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'admin', 'position': 'top', 'show_if': (function __lambda__ () {
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
					return (window.PhanterPWA.get_current_way () == 'admin/roles' && window.PhanterPWA.auth_user_has_role ('root') ? true : false);
				})})));
				window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
				self.RolesList = RolesList (self);
			}
		}
		else {
			var html = CONCATENATE (DIV (DIV (DIV (DIV ('USERS ADMINISTRATION', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (DIV (I (__kwargtrans__ (dict ({'_class': 'fas fa-user-cog promo-icon'}))), H2 ('USERS', __kwargtrans__ ({_class: 'promo-title'})), __kwargtrans__ (dict ({'_class': 'link', '_phanterpwa-way': 'admin/users'}))), DIV (I18N ('Users Administration', __kwargtrans__ (dict ({'_pt-br': 'Administração de Usuários'}))), __kwargtrans__ ({_class: 'promo-content'})), __kwargtrans__ (dict ({'_class': 'promo-container'}))), __kwargtrans__ ({_class: 'p-col w1p100 w3p50 w4p25'})), DIV (DIV (DIV (I (__kwargtrans__ (dict ({'_class': 'fas fa-user-tag promo-icon'}))), H2 ('ROLES', __kwargtrans__ ({_class: 'promo-title'})), __kwargtrans__ (dict ({'_class': 'link', '_phanterpwa-way': 'admin/roles'}))), DIV ('Roles users Administration', __kwargtrans__ ({_class: 'promo-content'})), __kwargtrans__ (dict ({'_class': 'promo-container'}))), __kwargtrans__ ({_class: 'p-col w1p100 w3p50 w4p25'})), __kwargtrans__ ({_class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
			html.html_to ('#main-container');
		}
	}));}
});
export var UsersList =  __class__ ('UsersList', [helpers.XmlConstructor], {
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
		var html = DIV (DIV (FORM (DIV (DIV (DIV (widgets.Input ('search_users', __kwargtrans__ ({label: 'Search Email', placeholder: 'Email', icon: I (__kwargtrans__ ({_class: 'fab fa-sistrix'})), icon_on_click: (function __lambda__ () {
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
		})})), __kwargtrans__ ({_class: 'p-col w1p100 w3p50 w4p75'})), DIV (widgets.Select ('users_field', __kwargtrans__ ({label: 'Search Fields', placeholder: 'Choice a Field', value: 'email', data_set: [['id', 'ID'], ['first_name', 'First Name'], ['last_name', 'Last Name'], ['email', 'E-mail'], ['permit_mult_login', 'Allows Multiple Logins'], ['activated', 'Activated'], ['online', 'Online']]})), __kwargtrans__ ({_id: 'phanterpwa-input-search_field', _class: 'p-col w1p100 w3p50 w4p25'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ ({_action: '#', _id: 'search_users', _class: 'form-search_users', _enctype: 'multipart/form-data', _method: 'post', _autocomplete: 'off'})), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), DIV (__kwargtrans__ ({_id: 'lista-users-subtitle', _class: 'phanterpwa-subtitle'})), DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'lista-users-container', _class: 'phanterpwa_tables_container'})), DIV (__kwargtrans__ ({_id: 'modal_user'})), __kwargtrans__ ({_class: 'users-container phanterpwa-card-container'}));
		helpers.XmlConstructor.__init__ (self, 'div', false, html, __kwargtrans__ ({_class: 'lista_de_users'}));
		self.html_to ('#content-users');
		self._get_data_search (__kwargtrans__ ({orderby: 'id'}));
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
			if (json.users === null) {
				window.PhanterPWA.open_way ('/users/new');
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
		var page = widgets ['users-table-footer'].page ();
		var search = widgets ['search_users'].value ();
		var field = widgets ['users_field'].value ();
		var sorted_field = widgets ['users-table-head'].sorted_field ();
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
		var page = widgets ['users-table-footer'].page ();
		var search = widgets ['search_users'].value ();
		var field = widgets ['users_field'].value ();
		var sorted_field = widgets ['users-table-head'].sorted_field ();
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
			var users = json.users;
			$ ('#lista-users-subtitle').text (json.message);
			var new_select_widget = widgets.Select ('users_field', __kwargtrans__ ({label: users.search_fields.label, placeholder: 'Choose a Field ', value: users.search_fields.value, data_set: users.search_fields.data_set}));
			new_select_widget.html_to ('#phanterpwa-input-search_field');
			new_select_widget.reload ();
			var table = XTABLE ('users-table', XTRH ('users-table-head', ...users.searcher.data_set, DIV (I (__kwargtrans__ ({_class: 'fas fa-plus'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'admin/users/new', '_class': 'icon_button wave_on_click'}))), __kwargtrans__ ({sort_by: users.searcher.sort_by, sort_order: users.searcher.sort_order, sortable: users.searcher.sortable, on_click_sortable: self._on_sort})));
			if (users.data !== undefined) {
				var red_icon = I (__kwargtrans__ ({_class: 'fas fa-times-circle', _style: 'color: red;'}));
				var green_icon = I (__kwargtrans__ ({_class: 'fas fa-check-circle', _style: 'color:green;'}));
				for (var x of users.data) {
					table.append (XTRD ('users-table-data-{0}'.format (x.id), x.id, x.first_name, x.last_name, x.email, (x.permit_mult_login ? green_icon : red_icon), (x.activated ? green_icon : red_icon), (x.websocket_opened ? green_icon : red_icon), widgets.MenuBox ('drop_{0}'.format (x.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('View', __kwargtrans__ (dict ({'_class': 'admin-button-user-edit wave_on_click', '_href': '#_phanterpwa:/admin/users/{0}/view'.format (x.id)}))), widgets.MenuOption ('Edit', __kwargtrans__ (dict ({'_class': 'admin-button-user-edit wave_on_click', '_href': '#_phanterpwa:/admin/users/{0}/edit'.format (x.id)}))), widgets.MenuOption ('Impersonate', __kwargtrans__ (dict ({'_class': 'admin-button-user-edit wave_on_click', '_href': '#_phanterpwa:/admin/users/{0}/impersonate'.format (x.id)}))), widgets.MenuOption ('Temporary password', __kwargtrans__ (dict ({'_data-email': x.email, '_data-id': x.id, '_class': 'admin-button-user-temporary_password wave_on_click'}))), widgets.MenuOption ('Change password', __kwargtrans__ (dict ({'_data-email': x.email, '_data-id': x.id, '_class': 'admin-button-user-change_password wave_on_click'}))), widgets.MenuOption ('Active account', __kwargtrans__ (dict ({'_data-email': x.email, '_data-id': x.id, '_class': 'admin-button-user-active_account wave_on_click'}))), widgets.MenuOption ('Delete', __kwargtrans__ (dict ({'_data-email': x.email, '_data-id': x.id, '_class': 'admin-button-user-delete wave_on_click'}))), __kwargtrans__ (dict ({'onOpen': (function __lambda__ () {
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
						return self._binds_user_menu ();
					})})))));
				}
				table.append (XFOOTER ('users-table-footer', __kwargtrans__ ({page: users.searcher.page, total_pages: users.searcher.total_pages, on_click_page: self._on_page})));
			}
			table.html_to ('#lista-users-container');
			var change_attr_drop = function (el) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'el': var el = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				var targ = $ (el).attr ('phanterpwa_dowpdown_target');
				$ (el).attr ('data-target', targ);
			};
			$ ('[phanterpwa_dowpdown_target]').each ((function __lambda__ () {
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
				return change_attr_drop (this);
			}));
		}
	});},
	get _binds_user_menu () {return __get__ (this, function (self) {
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
		$ ('.admin-button-user-delete').off ('click.delete_menu').on ('click.delete_menu', (function __lambda__ () {
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
			return self._modal_delete (this);
		}));
		$ ('.admin-button-user-temporary_password').off ('click.temporary_password_menu').on ('click.temporary_password_menu', (function __lambda__ () {
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
			return self._modal_temporary_password (this);
		}));
		$ ('.admin-button-user-change_password').off ('click.change_password_menu').on ('click.change_password_menu', (function __lambda__ () {
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
			return self._modal_change_password (this);
		}));
		$ ('.admin-button-user-active_account').off ('click.active_account_menu').on ('click.active_account_menu', (function __lambda__ () {
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
			return self._active_account (this);
		}));
	});},
	get _modal_temporary_password () {return __get__ (this, function (self, el) {
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
		var email = $ (el).data ('email');
		var content = DIV ('Are you sure you want to request a temporary access password? ', 'An email sent to the user (', email, ') with a temporary password. ', 'By using it, it can change the current password to a new one.', DIV (forms.FormWidget ('auth_user', 'email', __kwargtrans__ (dict ({'value': email, 'label': 'Email', 'data_view': true, 'type': 'string', 'form': 'auth_user', '_placeholder': 'Email', '_class': 'p-col w1p100'})))), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.SubmitButton ('yes_delete', 'Yes', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), forms.FormButton ('no_delete', 'No', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_temporary_password = modal.Modal ('#modal_user', __kwargtrans__ (dict ({'title': 'Temporary password ({0})'.format (email), 'content': content, 'footer': footer, 'form': 'auth_user'})));
		self.modal_temporary_password.open ();
		$ ('#phanterpwa-widget-form-submit_button-yes_delete').off ('click.yes_delete').on ('click.yes_delete', (function __lambda__ () {
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
			return self._request_temporary_password ();
		}));
		$ ('#phanterpwa-widget-form-form_button-no_delete').off ('click.no_delete').on ('click.no_delete', (function __lambda__ () {
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
			return self.modal_temporary_password.close ();
		}));
		forms.SignForm ('#form-auth_user', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-auth_user');
		})}));
	});},
	get _request_temporary_password () {return __get__ (this, function (self) {
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
		var form_temporary_password = $ ('#form-auth_user') [0];
		var form_temporary_password = new FormData (form_temporary_password);
		window.PhanterPWA.POST ('api', 'admin', 'request-password', __kwargtrans__ ({form_data: form_temporary_password, onComplete: (function __lambda__ (data, ajax_status) {
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
			return self._after_request_temporary_password (data, ajax_status);
		})}));
	});},
	get _after_request_temporary_password () {return __get__ (this, function (self, data, ajax_status) {
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
			self.modal_temporary_password.close ();
			var json = data.responseJSON;
			var content = DIV ('The temporary password is: ', json.temporary_password, __kwargtrans__ ({_class: 'p-row'}));
			var footer = DIV (forms.FormButton ('close', 'Close', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
			self.modal_show_temporary_password = modal.Modal ('#modal_user', __kwargtrans__ (dict ({'title': 'Temporary password'.format (json.email), 'content': content, 'footer': footer, 'form': 'auth_user'})));
			self.modal_show_temporary_password.open ();
			$ ('#phanterpwa-widget-form-form_button-close').off ('click.close').on ('click.close', (function __lambda__ () {
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
				return self.modal_show_temporary_password.close ();
			}));
		}
	});},
	get _modal_change_password () {return __get__ (this, function (self, el) {
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
		var email = $ (el).data ('email');
		var content = DIV ("With this action you will be abruptly changing the user's password", ' to a new password. Enter the new password in the field below', ' and click on ', STRONG ('change password'), '.', DIV (forms.FormWidget ('auth_user', 'email', __kwargtrans__ (dict ({'value': email, 'label': 'Email', 'data_view': true, 'type': 'string', 'form': 'auth_user', '_placeholder': 'Email', '_class': 'p-col w1p100'}))), forms.FormWidget ('auth_user', 'password', __kwargtrans__ (dict ({'value': '', 'label': 'Password', 'type': 'string', 'form': 'auth_user', '_placeholder': 'Password', '_class': 'p-col w1p100'})))), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.SubmitButton ('yes_change', 'Change Password', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), forms.FormButton ('no_change', 'Cancel', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_change_password = modal.Modal ('#modal_user', __kwargtrans__ (dict ({'title': 'Temporary password ({0})'.format (email), 'content': content, 'footer': footer, 'form': 'auth_user'})));
		self.modal_change_password.open ();
		$ ('#phanterpwa-widget-form-submit_button-yes_change').off ('click.yes_change').on ('click.yes_change', (function __lambda__ () {
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
			return self._request_change_password (email);
		}));
		$ ('#phanterpwa-widget-form-form_button-no_change').off ('click.no_change').on ('click.no_change', (function __lambda__ () {
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
			return self.modal_change_password.close ();
		}));
		forms.SignForm ('#form-auth_user', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-auth_user');
		})}));
	});},
	get _request_change_password () {return __get__ (this, function (self, email) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'email': var email = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var form_change_password = $ ('#form-auth_user') [0];
		var form_change_password = new FormData (form_change_password);
		form_change_password.append ('email', email);
		window.PhanterPWA.POST ('api', 'admin', 'change-password', __kwargtrans__ ({form_data: form_change_password, onComplete: (function __lambda__ (data, ajax_status) {
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
			return self._after_request_change_password (data, ajax_status);
		})}));
	});},
	get _after_request_change_password () {return __get__ (this, function (self, data, ajax_status) {
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
			self.modal_change_password.close ();
			window.PhanterPWA.flash ('Password Changed!');
		}
	});},
	get _get_data_search () {return __get__ (this, function (self, search, field, orderby, py_sort, page) {
		if (typeof search == 'undefined' || (search != null && search.hasOwnProperty ("__kwargtrans__"))) {;
			var search = '';
		};
		if (typeof field == 'undefined' || (field != null && field.hasOwnProperty ("__kwargtrans__"))) {;
			var field = 'email';
		};
		if (typeof orderby == 'undefined' || (orderby != null && orderby.hasOwnProperty ("__kwargtrans__"))) {;
			var orderby = 'email';
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
		$ ('#phanterpwa-widget-input-input-search_users').off ('keyup.search_users').on ('keyup.search_users', self._onkeyup);
		window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'admin', 'usermanager'], 'url_vars': dict ({'search': search, 'field': field, 'orderby': orderby, 'sort': py_sort, 'page': page}), 'onComplete': self.after_get, 'get_cache': self.process_data})));
	});},
	get _onkeyup () {return __get__ (this, function (self, event) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var key = event.which || event.keyCode;
		var element = $ ('#phanterpwa-widget-input-input-search_users');
		if (key == 13) {
			var value = element.val ();
			if (value != '') {
				self.search ();
			}
		}
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
		var search = widgets ['search_users'].value ();
		var field = widgets ['users_field'].value ();
		self._get_data_search (__kwargtrans__ ({search: search, field: field, orderby: field, py_sort: 'asc', page: 1}));
	});},
	get _modal_delete () {return __get__ (this, function (self, el) {
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
		var email = $ (el).data ('email');
		var id_email = $ (el).data ('id');
		var content = DIV ('Are you sure you want to delete the user account {0}'.format (email), __kwargtrans__ ({_class: 'p-row'}));
		var footer = DIV (forms.FormButton ('yes_delete', 'Yes', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), forms.FormButton ('no_delete', 'No', __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'}));
		self.modal_delete = modal.Modal ('#modal_user', __kwargtrans__ (dict ({'title': 'Remove the account {0}'.format (email), 'content': content, 'footer': footer})));
		self.modal_delete.open ();
		$ ('#phanterpwa-widget-form-form_button-yes_delete').off ('click.yes_delete').on ('click.yes_delete', (function __lambda__ () {
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
			return self._delete_user_account (id_email);
		}));
		$ ('#phanterpwa-widget-form-form_button-no_delete').off ('click.no_delete').on ('click.no_delete', (function __lambda__ () {
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
			return self.modal_delete.close ();
		}));
	});},
	get _delete_user_account () {return __get__ (this, function (self, user_id) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'user_id': var user_id = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.DELETE (__kwargtrans__ (dict ({'url_args': ['api', 'admin', 'usermanager', user_id], 'onComplete': (function __lambda__ (data, ajax_status) {
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
			return self._after_delete (data, ajax_status);
		})})));
	});},
	get _after_delete () {return __get__ (this, function (self, data, ajax_status) {
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
			window.PhanterPWA.flash (__kwargtrans__ ({html: 'Successfully deleted'}));
			window.PhanterPWA.open_way ('admin/users');
		}
		else {
			window.PhanterPWA.flash (__kwargtrans__ ({html: 'Problem deleting'}));
		}
	});}
});
export var RolesList =  __class__ ('RolesList', [helpers.XmlConstructor], {
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
		var html = DIV (DIV (FORM (DIV (DIV (DIV (widgets.Input ('search_roles', __kwargtrans__ ({label: 'Search Role', placeholder: 'Role', icon: I (__kwargtrans__ ({_class: 'fab fa-sistrix'})), icon_on_click: (function __lambda__ () {
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
		})})), __kwargtrans__ ({_class: 'p-col w1p100 w3p50 w4p75'})), DIV (widgets.Select ('campos_roles', __kwargtrans__ ({label: 'Search Fields', placeholder: 'Choice a Field', value: 'role', data_set: [['id', 'ID'], ['grade', 'Grade'], ['role', 'Role'], ['description', 'Description']]})), __kwargtrans__ ({_id: 'phanterpwa-input-search_field', _class: 'p-col w1p100 w3p50 w4p25'})), __kwargtrans__ ({_class: 'p-row e-padding_20w'})), __kwargtrans__ ({_class: 'phanterpwa-container-section'})), __kwargtrans__ ({_action: '#', _id: 'search_roles', _class: 'form-search_roles', _enctype: 'multipart/form-data', _method: 'post', _autocomplete: 'off'})), __kwargtrans__ ({_class: 'phanterpwa_tables_search_wrapper'})), DIV (__kwargtrans__ ({_id: 'lista-roles-subtitle', _class: 'phanterpwa-subtitle'})), DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'lista-roles-container', _class: 'phanterpwa_tables_container'})), __kwargtrans__ ({_class: 'roles-container phanterpwa-card-container'}));
		helpers.XmlConstructor.__init__ (self, 'div', false, html, __kwargtrans__ ({_class: 'lista_de_roles'}));
		self.html_to ('#content-roles');
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
			if (json.roles === null) {
				window.PhanterPWA.open_way ('/roles/new');
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
		var page = widgets ['roles-table-footer'].page ();
		var search = widgets ['search_roles'].value ();
		var field = widgets ['campos_roles'].value ();
		var sorted_field = widgets ['roles-table-head'].sorted_field ();
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
		var page = widgets ['roles-table-footer'].page ();
		var search = widgets ['search_roles'].value ();
		var field = widgets ['campos_roles'].value ();
		var sorted_field = widgets ['roles-table-head'].sorted_field ();
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
			var roles = json.groups;
			$ ('#lista-roles-subtitle').text (json.message);
			var new_select_widget = widgets.Select ('campos_roles', __kwargtrans__ ({label: roles.search_fields.label, placeholder: 'Escolha o Campo', value: roles.search_fields.value, data_set: roles.search_fields.data_set}));
			new_select_widget.html_to ('#phanterpwa-input-search_field');
			new_select_widget.reload ();
			var table = XTABLE ('roles-table', XTRH ('roles-table-head', ...roles.searcher.data_set, DIV (I (__kwargtrans__ ({_class: 'fas fa-plus'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'admin/roles/new', '_class': 'icon_button wave_on_click'}))), __kwargtrans__ ({sort_by: roles.searcher.sort_by, sort_order: roles.searcher.sort_order, sortable: roles.searcher.sortable, on_click_sortable: self._on_sort})));
			if (roles.data !== undefined) {
				for (var x of roles.data) {
					table.append (XTRD ('roles-table-data-{0}'.format (x.id), x.id, x.grade, x.role, x.description, widgets.MenuBox ('drop_{0}'.format (x.id), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-v'})), widgets.MenuOption ('View', __kwargtrans__ (dict ({'_class': 'admin-button-user-edit wave_on_click', '_href': '#_phanterpwa:/admin/roles/{0}/view'.format (x.id)}))), widgets.MenuOption ('Edit', __kwargtrans__ (dict ({'_class': 'admin-button-user-edit wave_on_click', '_href': '#_phanterpwa:/admin/roles/{0}/edit'.format (x.id)}))), widgets.MenuOption ('Impersonate', __kwargtrans__ (dict ({'_class': 'admin-button-user-edit wave_on_click', '_href': '#_phanterpwa:/admin/roles/{0}/impersonate'.format (x.id)}))))));
				}
				table.append (XFOOTER ('roles-table-footer', __kwargtrans__ ({page: roles.searcher.page, total_pages: roles.searcher.total_pages, on_click_page: self._on_page})));
			}
			var edit_role = function (el) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'el': var el = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				var id_role = $ (el).attr ('register_target');
				roles_edit_new.start (id_role);
			};
			var view_role = function (el) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'el': var el = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				var id_role = $ (el).attr ('register_target');
				roles_view.start (id_role);
			};
			table.html_to ('#lista-roles-container');
			$ ('.botao_edit_role').off ('click.botao_edit_role').on ('click.botao_edit_role', (function __lambda__ () {
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
				return edit_role (this);
			}));
			$ ('.botao_view_role').off ('click.botao_view_role').on ('click.botao_view_role', (function __lambda__ () {
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
				return view_role (this);
			}));
			var change_attr_drop = function (el) {
				if (arguments.length) {
					var __ilastarg0__ = arguments.length - 1;
					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
						var __allkwargs0__ = arguments [__ilastarg0__--];
						for (var __attrib0__ in __allkwargs0__) {
							switch (__attrib0__) {
								case 'el': var el = __allkwargs0__ [__attrib0__]; break;
							}
						}
					}
				}
				else {
				}
				var targ = $ (el).attr ('phanterpwa_dowpdown_target');
				$ (el).attr ('data-target', targ);
			};
			$ ('[phanterpwa_dowpdown_target]').each ((function __lambda__ () {
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
				return change_attr_drop (this);
			}));
		}
	});},
	get _get_data_search () {return __get__ (this, function (self, search, field, orderby, py_sort, page) {
		if (typeof search == 'undefined' || (search != null && search.hasOwnProperty ("__kwargtrans__"))) {;
			var search = '';
		};
		if (typeof field == 'undefined' || (field != null && field.hasOwnProperty ("__kwargtrans__"))) {;
			var field = 'nome_completo';
		};
		if (typeof orderby == 'undefined' || (orderby != null && orderby.hasOwnProperty ("__kwargtrans__"))) {;
			var orderby = 'nome_completo';
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
		$ ('#phanterpwa-widget-input-input-search_roles').off ('keyup.search_roles').on ('keyup.search_roles', self._onkeyup);
		window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'admin', 'rolemanager'], 'url_vars': dict ({'search': search, 'field': field, 'orderby': orderby, 'sort': py_sort, 'page': page}), 'onComplete': self.after_get, 'get_cache': self.process_data})));
	});},
	get _onkeyup () {return __get__ (this, function (self, event) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'event': var event = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var key = event.which || event.keyCode;
		var element = $ ('#phanterpwa-widget-input-input-search_roles');
		if (key == 13) {
			var value = element.val ();
			if (value != '') {
				self.search ();
			}
		}
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
		var search = widgets ['search_roles'].value ();
		var field = widgets ['campos_roles'].value ();
		self._get_data_search (__kwargtrans__ ({search: search, field: field, orderby: field, py_sort: 'asc', page: 1}));
	});}
});
export var User =  __class__ ('User', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, user_id, action) {
		if (typeof user_id == 'undefined' || (user_id != null && user_id.hasOwnProperty ("__kwargtrans__"))) {;
			var user_id = null;
		};
		if (typeof action == 'undefined' || (action != null && action.hasOwnProperty ("__kwargtrans__"))) {;
			var action = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
						case 'user_id': var user_id = __allkwargs0__ [__attrib0__]; break;
						case 'action': var action = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.index_instance = index_instance;
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('USERS ADMINISTRATION', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), DIV ('USER', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-users', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		self.user_id = user_id;
		self.action = action;
		if (user_id == 'new') {
			self.get_form_user (user_id);
		}
		else if (action == 'edit') {
			self.get_form_user (user_id, 'edit');
		}
		else if (action == 'view') {
			self.view (user_id, index_instance.request.params);
		}
		else if (action == 'delete') {
			window.PhanterPWA.DELETE (__kwargtrans__ (dict ({'url_args': ['api', 'admin', 'usermanager', user_id], 'onComplete': (function __lambda__ () {
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
				return window.PhanterPWA.open_way ('admin/users');
			})})));
		}
	});},
	get view () {return __get__ (this, function (self, user_id, params) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'user_id': var user_id = __allkwargs0__ [__attrib0__]; break;
						case 'params': var params = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var url_image = '{0}/api/admin/usermanager/{1}/image'.format (window.PhanterPWA.get_api_address (), user_id);
		var nome_completo = params ['nome_completo'];
		var nome_da_mae = params ['nome_da_mae'];
		var matricula = params ['matricula'];
		var cpf = params ['cpf'];
		var qrcode = params ['qrcode'];
		var rg_string = params ['rg_string'];
		var data_de_nascimento = params ['data_de_nascimento'];
		self._carteira = DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: url_image})), __kwargtrans__ ({_class: 'carteira-image'})), DIV (DIV (DIV (DIV ('NOME', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (nome_completo, __kwargtrans__ ({_class: 'carteira-data-nome carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p100'})), DIV (DIV (DIV ('NOME DA MÃE', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (nome_da_mae, __kwargtrans__ ({_class: 'carteira-data-nome_da_mae carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p100'})), DIV (DIV (DIV ('MATRÍCULA', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (matricula, __kwargtrans__ ({_class: 'carteira-data-matricula carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p40'})), DIV (DIV (DIV ('CPF', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (cpf, __kwargtrans__ ({_class: 'carteira-data-cpf carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p60'})), DIV (DIV (DIV ('DATA DE NASCIMENTO', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (data_de_nascimento, __kwargtrans__ ({_class: 'carteira-data-data_de_nascimento carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p40'})), DIV (DIV (DIV ('RG', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (rg_string, __kwargtrans__ ({_class: 'carteira-data-rg_string carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p60'})), __kwargtrans__ ({_class: 'carteira-data-container p-row'})), __kwargtrans__ ({_class: 'p-col w1p30'})), DIV (DIV (__kwargtrans__ ({_class: 'carteira-logo'})), DIV (__kwargtrans__ ({_class: 'carteira-qrcode'})), __kwargtrans__ ({_class: 'p-col w1p70'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'carteira_containar'})), __kwargtrans__ ({_class: 'view_user_container a4'})), __kwargtrans__ ({_class: 'phanterpwa-media-print'})), __kwargtrans__ ({_class: 'phanterpwa-media-print-container'}));
		self._carteira.html_to ('#content-users');
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
			return $ ('#content-users').find ('.carteira-logo').html (data);
		})})));
		var url = '{0}/api/associado/{1}'.format (window.PhanterPWA.ApiServer.remote_address, qrcode);
		var qrcode = new QRCode ($ ('#content-users').find ('.carteira-qrcode') [0], dict ({'text': url, 'width': 125, 'height': 125, 'colorDark': '#000000', 'colorLight': '#ffffff', 'correctLevel': QRCode.CorrectLevel.H}));
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
		self.form = forms.Form (json.data.auth_user);
		self.form.html_to ('#content-users');
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
		forms.SignForm ('#form-auth_user', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-auth_user');
		})}));
		$ ('#phanterpwa-widget-form-submit_button-auth_user').off ('click.submit_users_button').on ('click.submit_users_button', (function __lambda__ () {
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
	get get_form_user () {return __get__ (this, function (self, user_id, action) {
		if (typeof action == 'undefined' || (action != null && action.hasOwnProperty ("__kwargtrans__"))) {;
			var action = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'user_id': var user_id = __allkwargs0__ [__attrib0__]; break;
						case 'action': var action = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (action == 'edit') {
			window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'admin', 'usermanager', user_id, 'edit'], 'onComplete': self.after_get, 'get_cache': self.process_data})));
		}
		else if (action == 'view') {
			window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'admin', 'usermanager', user_id, 'view'], 'onComplete': self.after_get, 'get_cache': self.process_data})));
		}
		else if (user_id == 'new') {
			window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'admin', 'usermanager', user_id], 'onComplete': self.after_get, 'get_cache': self.process_data})));
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
			var form_user = $ ('#form-auth_user') [0];
			var form_user = new FormData (form_user);
			if (self.user_id == 'new') {
				window.PhanterPWA.ApiServer.POST (__kwargtrans__ (dict ({'url_args': ['api', 'admin', 'usermanager'], 'form_data': form_user, 'onComplete': self.after_submit})));
			}
			else if (self.user_id.isdigit ()) {
				window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'admin', 'usermanager', self.user_id], 'form_data': form_user, 'onComplete': self.after_submit})));
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
		forms.SignForm ('#form-auth_user');
		self.form.process_api_response (data);
		if (data.status == 200 && self.user_id == 'new') {
			window.PhanterPWA.open_way ('admin/users/new');
		}
		else if (data.status == 200) {
			window.PhanterPWA.open_way ('admin/users');
		}
	});}
});
export var Impersonate =  __class__ ('Impersonate', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, user_id) {
		if (typeof user_id == 'undefined' || (user_id != null && user_id.hasOwnProperty ("__kwargtrans__"))) {;
			var user_id = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
						case 'user_id': var user_id = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.user_id = user_id;
		self.index_instance = index_instance;
		window.PhanterPWA.GET ('api', 'admin', 'impersonate', self.user_id, __kwargtrans__ ({onComplete: self.after_get}));
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
			window.PhanterPWA.open_way ('home');
			window.PhanterPWA._after_submit_login (data, ajax_status);
		}
		else {
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': 'Impersonate Problem!'})));
		}
	});}
});
export var Role =  __class__ ('Role', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, index_instance, role_id, action) {
		if (typeof role_id == 'undefined' || (role_id != null && role_id.hasOwnProperty ("__kwargtrans__"))) {;
			var role_id = null;
		};
		if (typeof action == 'undefined' || (action != null && action.hasOwnProperty ("__kwargtrans__"))) {;
			var action = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'index_instance': var index_instance = __allkwargs0__ [__attrib0__]; break;
						case 'role_id': var role_id = __allkwargs0__ [__attrib0__]; break;
						case 'action': var action = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.index_instance = index_instance;
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('ROLES ADMINISTRATION', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-roles', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		self.role_id = role_id;
		self.action = action;
		if (role_id == 'new') {
			self.get_form_role (role_id);
		}
		else if (action == 'edit') {
			self.get_form_role (role_id, 'edit');
		}
		else if (action == 'view') {
			self.view (role_id, index_instance.request.params);
		}
	});},
	get view () {return __get__ (this, function (self, role_id, params) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'role_id': var role_id = __allkwargs0__ [__attrib0__]; break;
						case 'params': var params = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var url_image = '{0}/api/admin/rolemanager/{1}/image'.format (window.PhanterPWA.get_api_address (), role_id);
		var nome_completo = params ['nome_completo'];
		var nome_da_mae = params ['nome_da_mae'];
		var matricula = params ['matricula'];
		var cpf = params ['cpf'];
		var qrcode = params ['qrcode'];
		var rg_string = params ['rg_string'];
		var data_de_nascimento = params ['data_de_nascimento'];
		self._carteira = DIV (DIV (DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: url_image})), __kwargtrans__ ({_class: 'carteira-image'})), DIV (DIV (DIV (DIV ('NOME', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (nome_completo, __kwargtrans__ ({_class: 'carteira-data-nome carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p100'})), DIV (DIV (DIV ('NOME DA MÃE', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (nome_da_mae, __kwargtrans__ ({_class: 'carteira-data-nome_da_mae carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p100'})), DIV (DIV (DIV ('MATRÍCULA', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (matricula, __kwargtrans__ ({_class: 'carteira-data-matricula carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p40'})), DIV (DIV (DIV ('CPF', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (cpf, __kwargtrans__ ({_class: 'carteira-data-cpf carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p60'})), DIV (DIV (DIV ('DATA DE NASCIMENTO', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (data_de_nascimento, __kwargtrans__ ({_class: 'carteira-data-data_de_nascimento carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p40'})), DIV (DIV (DIV ('RG', __kwargtrans__ ({_class: 'carteira-data-field'})), DIV (rg_string, __kwargtrans__ ({_class: 'carteira-data-rg_string carteira-data-value'})), __kwargtrans__ ({_class: 'carteira-data-col'})), __kwargtrans__ ({_class: 'p-col w1p60'})), __kwargtrans__ ({_class: 'carteira-data-container p-row'})), __kwargtrans__ ({_class: 'p-col w1p30'})), DIV (DIV (__kwargtrans__ ({_class: 'carteira-logo'})), DIV (__kwargtrans__ ({_class: 'carteira-qrcode'})), __kwargtrans__ ({_class: 'p-col w1p70'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'carteira_containar'})), __kwargtrans__ ({_class: 'view_role_container a4'})), __kwargtrans__ ({_class: 'phanterpwa-media-print'})), __kwargtrans__ ({_class: 'phanterpwa-media-print-container'}));
		self._carteira.html_to ('#content-roles');
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
			return $ ('#content-roles').find ('.carteira-logo').html (data);
		})})));
		var url = '{0}/api/associado/{1}'.format (window.PhanterPWA.ApiServer.remote_address, qrcode);
		var qrcode = new QRCode ($ ('#content-roles').find ('.carteira-qrcode') [0], dict ({'text': url, 'width': 125, 'height': 125, 'colorDark': '#000000', 'colorLight': '#ffffff', 'correctLevel': QRCode.CorrectLevel.H}));
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
		self.form = forms.Form (json.data.auth_role);
		self.form.html_to ('#content-roles');
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
		forms.SignForm ('#form-auth_group', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-auth_group');
		})}));
		$ ('#phanterpwa-widget-form-submit_button-auth_group').off ('click.submit_roles_button').on ('click.submit_roles_button', (function __lambda__ () {
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
	get get_form_role () {return __get__ (this, function (self, role_id, action) {
		if (typeof action == 'undefined' || (action != null && action.hasOwnProperty ("__kwargtrans__"))) {;
			var action = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'role_id': var role_id = __allkwargs0__ [__attrib0__]; break;
						case 'action': var action = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (action == 'edit') {
			window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'admin', 'rolemanager', role_id, 'edit'], 'onComplete': self.after_get, 'get_cache': self.process_data})));
		}
		else if (action == 'view') {
			window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'admin', 'rolemanager', role_id, 'view'], 'onComplete': self.after_get, 'get_cache': self.process_data})));
		}
		else if (role_id == 'new') {
			window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'admin', 'rolemanager', role_id], 'onComplete': self.after_get, 'get_cache': self.process_data})));
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
			var form_role = $ ('#form-auth_group') [0];
			var form_role = new FormData (form_role);
			if (self.role_id == 'new') {
				window.PhanterPWA.ApiServer.POST (__kwargtrans__ (dict ({'url_args': ['api', 'admin', 'rolemanager'], 'form_data': form_role, 'onComplete': self.after_submit})));
			}
			else if (self.role_id.isdigit ()) {
				window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'admin', 'rolemanager', self.role_id], 'form_data': form_role, 'onComplete': self.after_submit})));
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
		forms.SignForm ('#form-auth_group');
		self.form.process_api_response (data);
		if (data.status == 200 && self.role_id == 'new') {
			window.PhanterPWA.open_way ('admin/roles/new');
		}
		else if (data.status == 200) {
			window.PhanterPWA.open_way ('admin/roles');
		}
	});}
});

//# sourceMappingURL=phanterpwa.frontend.components.admin.map