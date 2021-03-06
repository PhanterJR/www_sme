// Transcrypt'ed from Python, 2022-04-27 21:18:14
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as widgets from './phanterpwa.frontend.components.widgets.js';
import * as decorators from './phanterpwa.frontend.decorators.js';
import * as gatehandler from './phanterpwa.frontend.gatehandler.js';
import * as application from './phanterpwa.frontend.application.js';
import * as preloaders from './phanterpwa.frontend.preloaders.js';
import * as forms from './phanterpwa.frontend.forms.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
import * as gallery from './phanterpwa.frontend.components.gallery.js';
import * as left_bar from './phanterpwa.frontend.components.left_bar.js';
import * as top_slide from './phanterpwa.frontend.components.top_slide.js';
import * as modal from './phanterpwa.frontend.components.modal.js';
var __name__ = 'phanterpwa.frontend.components.auth_user';
export var DIV = helpers.XmlConstructor.tagger ('div');
export var FORM = helpers.XmlConstructor.tagger ('form');
export var SPAN = helpers.XmlConstructor.tagger ('span');
export var IMG = helpers.XmlConstructor.tagger ('img', true);
export var HR = helpers.XmlConstructor.tagger ('hr', true);
export var BR = helpers.XmlConstructor.tagger ('br', true);
export var I = helpers.XmlConstructor.tagger ('i');
export var H2 = helpers.XmlConstructor.tagger ('h2');
export var P = helpers.XmlConstructor.tagger ('p');
export var LABEL = helpers.XmlConstructor.tagger ('label');
export var STRONG = helpers.XmlConstructor.tagger ('strong');
export var I18N = helpers.I18N;
export var CONCATENATE = helpers.CONCATENATE;
export var XSECTION = helpers.XSECTION;
export var Table = widgets.Table;
export var TableHead = widgets.TableHead;
export var TableData = widgets.TableData;
export var AuthUser =  __class__ ('AuthUser', [application.Component], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, target_selector) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'target_selector': var target_selector = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self.target_selector = target_selector;
		self.element_target = $ (self.target_selector);
		self.callback = null;
		self.Modal = null;
		self.AlertActivationAccount = AlertActivationAccount ('#layout-top_slide-container');
		self.auth_user = null;
		self.authorization = null;
		if (__in__ ('callback', parameters)) {
			self.callback = parameters ['callback'];
		}
		var html = DIV (DIV (__kwargtrans__ ({_class: 'link phanterpwa-component-auth_user-button-toggle'})), DIV (__kwargtrans__ ({_class: 'phanterpwa-component-auth_user-button-toggle-options'})), __kwargtrans__ ({_id: 'phanterpwa-component-auth_user-container', _class: 'phanterpwa-component-auth_user-container'}));
		application.Component.__init__ (self, 'auth_user', html);
		window.PhanterPWA.AuthUserCmp = self;
		self.html_to (target_selector);
	});},
	get switch_menu () {return __get__ (this, function (self) {
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
		self.element_target = $ (self.target_selector);
		if (self.element_target.find ('.phanterpwa-component-auth_user-container').hasClass ('enabled')) {
			self.close_menu ();
		}
		else {
			self.open_menu ();
		}
	});},
	get bind_menu_button () {return __get__ (this, function (self) {
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
		self.element_target = $ (self.target_selector);
		self.element_target.find ('.phanterpwa-component-auth_user-button-toggle').off ('click.components-auth_user-button').on ('click.components-auth_user-button', (function __lambda__ () {
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
			return self.switch_menu ();
		}));
	});},
	get reload () {return __get__ (this, function (self) {
		var context = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: context [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete context.__kwargtrans__;
			}
		}
		else {
		}
		if (__in__ ('ajax', context)) {
			if (context ['ajax'] [1] [0] == 'client' || context ['ajax'] [1] [0] == 'auth') {
				self.element_target = $ (self.target_selector);
				self.start ();
			}
		}
		else {
			self.start ();
		}
	});},
	get _open_menu () {return function () {
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
		$ ('#phanterpwa-component-auth_user-container').addClass ('enabled');
	};},
	get open_menu () {return __get__ (this, function (self) {
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
		self._open_menu ();
		LeftBarAuthUserLogin._open_menu ();
		LeftBarAuthUserNoLogin._open_menu ();
	});},
	get _close_menu () {return __get__ (this, function () {
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
		$ ('#phanterpwa-component-auth_user-container').removeClass ('enabled');
	});},
	get close_menu () {return __get__ (this, function (self) {
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
		self._close_menu ();
		LeftBarAuthUserLogin._close_menu ();
		LeftBarAuthUserNoLogin._close_menu ();
	});},
	get _close_on_click_out () {return __get__ (this, function (self, event) {
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
		self.element_target = $ (self.target_selector);
		if ($ (event.target).closest (self.element_target).length == 0) {
			if ($ (event.target).closest ($ ('.phanterpwa-component-left_bar-menu_button-wrapper-auth_user')).length == 0) {
				self.close_menu ();
			}
		}
	});},
	get modal_login () {return __get__ (this, function (self) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self.close_menu ();
		self.Modal = ModalLogin ('#modal-container', __kwargtrans__ (__mergekwargtrans__ ({social_logins: window.PhanterPWA.social_login_list ()}, parameters)));
		self.Modal.open ();
		forms.SignForm ('#form-login', __kwargtrans__ ({has_captcha: true, after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-login');
		})}));
		if (parameters.py_get ('other_account', false)) {
			self.Modal.other_account ();
		}
	});},
	get modal_register () {return __get__ (this, function (self) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self.close_menu ();
		self.Modal = ModalRegister ('#modal-container', __kwargtrans__ (parameters));
		self.Modal.open ();
		forms.SignForm ('#form-register', __kwargtrans__ ({has_captcha: true, after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-register');
		})}));
	});},
	get modal_request_password () {return __get__ (this, function (self) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self.close_menu ();
		self.Modal = ModalRequestPassword ('#modal-container', __kwargtrans__ (parameters));
		self.Modal.open ();
		forms.SignForm ('#form-request_password', __kwargtrans__ ({has_captcha: true, after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-request_password');
		})}));
	});},
	get modal_change_password () {return __get__ (this, function (self, temporary_password) {
		if (typeof temporary_password == 'undefined' || (temporary_password != null && temporary_password.hasOwnProperty ("__kwargtrans__"))) {;
			var temporary_password = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'temporary_password': var temporary_password = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.close_menu ();
		self.Modal = ModalChangePassword ('#modal-container', __kwargtrans__ ({temporary_password: temporary_password}));
		self.Modal.open ();
		forms.SignForm ('#form-change_password', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-change_password');
		})}));
	});},
	get logout () {return __get__ (this, function (self) {
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
		window.PhanterPWA.logout ();
		var LeftBar = window.PhanterPWA.Components ['left_bar'];
		if (LeftBar !== null && LeftBar !== undefined) {
			LeftBar.reload ();
		}
		window.PhanterPWA.Components ['auth_user'].start ();
	});},
	get start () {return __get__ (this, function (self) {
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
		self.element_target = $ (self.target_selector);
		$ (document).off ('click.main_container').on ('click.main_container', (function __lambda__ (event) {
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
			return self._close_on_click_out (event);
		}));
		self.auth_user = window.PhanterPWA.get_auth_user ();
		self.authorization = window.PhanterPWA.get_authorization ();
		self.AlertActivationAccount.close ();
		if (self.auth_user !== null && self.auth_user !== undefined && self.authorization !== null && self.authorization !== undefined) {
			self.AlertActivationAccount.check_activation ();
			var first_name = '';
			var last_name = '';
			var role = I18N ('User');
			var user_image = window.PhanterPWA.get_auth_user_image ();
			if (self.auth_user !== null && self.auth_user !== undefined) {
				var first_name = self.auth_user.first_name;
				var last_name = self.auth_user.last_name;
				var role = I18N (self.auth_user.role);
				var complete_name = '{0} {1}'.format (first_name, last_name);
			}
			if ($ ('#toggle-cmp-bar_user').lenght == 1) {
				$ ('#user_first_and_last_name_login').text (complete_name);
				$ ('#user_role_login').html (role);
				var src_image = $ ('#url_image_user').attr ('src');
				if (src_image != user_image) {
					$ ('#url_image_user').attr ('src', user_image);
				}
			}
			else {
				self.xml_button_login = DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_id: 'url_image_user', _src: user_image, _alt: 'user avatar'})), __kwargtrans__ ({_class: 'cmp-bar_user-img'})), __kwargtrans__ ({_class: 'cmp-bar_user-img-container'})), DIV (DIV (DIV (complete_name, __kwargtrans__ ({_id: 'user_first_and_last_name_login', _class: 'cmp-bar_user-name'})), DIV (role, __kwargtrans__ ({_id: 'user_role_login', _class: 'cmp-bar_user-role'})), __kwargtrans__ ({_class: 'cmp-bar_user-name-role'})), __kwargtrans__ ({_class: 'cmp-bar_user-name-role-container'})), DIV (DIV (DIV (__kwargtrans__ ({_class: 'led'})), __kwargtrans__ ({_class: 'cmd-bar_user-expands'})), __kwargtrans__ ({_class: 'cmd-bar_user-expand-container'})), __kwargtrans__ ({_class: 'cmp-bar_user-info-container'})), __kwargtrans__ ({_id: 'toggle-cmp-bar_user', _class: 'cmp-bar_user-container black link wave_on_click waves-phanterpwa'}));
				self.xml_button_login_options = CONCATENATE (DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-user-circle'})), I18N ('Profile', __kwargtrans__ (dict ({'_pt-br': 'Perfil'}))), __kwargtrans__ (dict ({'_phanterpwa-way': 'profile', '_class': 'option-label-menu'}))), __kwargtrans__ ({_id: 'component-auth_user-option-profile', _class: 'component-auth_user-option link wave_on_click waves-phanterpwa'})), DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-unlock'})), I18N ('Lock', __kwargtrans__ (dict ({'_pt-br': 'Bloquear'}))), __kwargtrans__ (dict ({'_phanterpwa-way': 'lock', '_class': 'option-label-menu'}))), __kwargtrans__ ({_id: 'component-auth_user-option-lock', _class: 'component-auth_user-option link wave_on_click waves-phanterpwa'})), DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-power-off'})), I18N ('Logout', __kwargtrans__ (dict ({'_pt-br': 'Sair'}))), __kwargtrans__ ({_class: 'option-label-menu'})), __kwargtrans__ ({_id: 'component-auth_user-option-logout', _class: 'component-auth_user-option link wave_on_click waves-phanterpwa'})));
				self.xml_button_login.html_to (self.element_target.find ('.phanterpwa-component-auth_user-button-toggle'));
				self.xml_button_login_options.html_to (self.element_target.find ('.phanterpwa-component-auth_user-button-toggle-options'));
			}
			self.element_target.find ('#component-auth_user-option-logout').off ('click.auth_user-option-logout').on ('click.auth_user-option-logout', (function __lambda__ () {
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
				return self.logout ();
			}));
		}
		else {
			self.xml_button_no_login = DIV (SPAN (DIV (DIV (DIV (__kwargtrans__ ({_class: 'led'})), __kwargtrans__ ({_class: 'phanterpwa-component-auth_user-nologin-led'})), DIV (I18N ('START'), __kwargtrans__ ({_class: 'phanterpwa-component-auth_user-nologin-start'})), __kwargtrans__ ({_class: 'phanterpwa-component-auth_user-nologin-led_and_start'})), __kwargtrans__ ({_class: 'phanterpwa-component-auth_user-nologin-led_and_start-wrapper'})), __kwargtrans__ ({_class: 'phanterpwa-component-auth_user-nologin-wrapper link wave_on_click'}));
			self.xml_button_no_login_options = CONCATENATE (DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-power-off'})), I18N ('Login', __kwargtrans__ (dict ({'_pt-br': 'Login'}))), __kwargtrans__ ({_class: 'option-label-menu'})), __kwargtrans__ ({_id: 'component-auth_user-option-login', _class: 'component-auth_user-option link wave_on_click waves-phanterpwa'})), DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-user-plus'})), I18N ('Create an account', __kwargtrans__ (dict ({'_pt-br': 'Criar uma conta'}))), __kwargtrans__ ({_class: 'option-label-menu'})), __kwargtrans__ ({_id: 'component-auth_user-option-register', _class: 'component-auth_user-option link wave_on_click waves-phanterpwa'})), DIV (DIV (I (__kwargtrans__ ({_class: 'fas fa-lock'})), I18N ('Recover password', __kwargtrans__ (dict ({'_pt-br': 'Esqueci a senha'}))), __kwargtrans__ ({_class: 'option-label-menu'})), __kwargtrans__ ({_id: 'component-auth_user-option-request_password', _class: 'component-auth_user-option link wave_on_click waves-phanterpwa'})));
			self.xml_button_no_login.html_to (self.element_target.find ('.phanterpwa-component-auth_user-button-toggle'));
			self.xml_button_no_login_options.html_to (self.element_target.find ('.phanterpwa-component-auth_user-button-toggle-options'));
			self.element_target.find ('#component-auth_user-option-login').off ('click.component-auth_user-option-login').on ('click.component-auth_user-option-login', self.modal_login);
			self.element_target.find ('#component-auth_user-option-register').off ('click.component-auth_user-option-register').on ('click.component-auth_user-option-register', self.modal_register);
			self.element_target.find ('#component-auth_user-option-request_password').off ('click.component-auth_user-option-request_password').on ('click.component-auth_user-option-request_password', self.modal_request_password);
		}
		self.element_target.find ('.component-auth_user-option').off ('click.close_on_click').on ('click.close_on_click', (function __lambda__ () {
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
			return self.close_menu ();
		}));
		self.bind_menu_button ();
	});}
});
export var ModalLogin =  __class__ ('ModalLogin', [modal.Modal], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, target_element) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'target_element': var target_element = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self.element_target = $ (target_element);
		self._social_logins = parameters.py_get ('social_logins', []);
		self.user_mobile_number = parameters.py_get ('user_mobile_number', null);
		self.mask_mobile_number = parameters.py_get ('mask_mobile_number', '+## (##) # ####-####');
		self.prefix_mobile_number = parameters.py_get ('prefix_mobile_number', 55);
		self.prefix_mobile_list = parameters.py_get ('prefix_mobile_list', [self.prefix_mobile_number]);
		self.ignore_last_user = parameters.py_get ('ignore_last_user', false);
		if (!(isinstance (self._social_logins, list))) {
			self._social_logins = [];
		}
		self.last_auth_user = window.PhanterPWA.get_last_auth_user ();
		var first_name = '';
		var last_name = '';
		var email = '';
		var fone_number = self.prefix_mobile_number;
		var role = I18N ('User');
		var user_image = window.PhanterPWA.get_last_auth_user_image ();
		var remember_me = false;
		if (self.last_auth_user !== null && self.last_auth_user !== undefined) {
			var first_name = self.last_auth_user.first_name;
			var last_name = self.last_auth_user.last_name;
			var email = self.last_auth_user.email;
			var fone_number = (self.last_auth_user.fone_number !== undefined ? self.last_auth_user.fone_number : '');
			var remember_me = self.last_auth_user.remember_me;
			var role = I18N (self.last_auth_user.role);
		}
		if (self.user_mobile_number === null && str (email).endswith ('.mobile@phanterpwa.com')) {
			self.user_mobile_number = true;
		}
		if (all ([self.mask_mobile_number !== undefined, self.mask_mobile_number !== null, str (self.prefix_mobile_number).isdigit (), __in__ ('SMS', window.PhanterPWA.CONFIG)])) {
			if (self.user_mobile_number) {
				self._social_logins.append (['email', I (__kwargtrans__ ({_class: 'fas fa-envelope'}))]);
			}
			else {
				self._social_logins.append (['mobile', I (__kwargtrans__ ({_class: 'fas fa-mobile-alt'}))]);
			}
		}
		self._has_social_logins = (len (self._social_logins) > 0 ? true : false);
		var AuthUserCmp = window.PhanterPWA.Components ['auth_user'];
		self.AuthUser = null;
		if (AuthUserCmp !== null && AuthUserCmp !== undefined && !(isinstance (AuthUserCmp, AuthUser))) {
			console.error ('Need AuthUser instance on window.PhanterPWA.Components');
		}
		else {
			self.AuthUser = AuthUserCmp;
		}
		self.xml_social_logins = [];
		self._icons_social_login = dict ({});
		if (self.user_mobile_number === true) {
			var email_mobile_input = forms.FormWidget ('login', 'mobile', __kwargtrans__ (dict ({'type': 'string', 'label': I18N ('Mobile number'), 'value': fone_number, 'validators': ['IS_NOT_EMPTY', ''], 'mask': self.mask_mobile_number})));
		}
		else {
			var email_mobile_input = forms.FormWidget ('login', 'email', __kwargtrans__ (dict ({'type': 'string', 'label': I18N ('E-mail'), 'value': email, 'validators': ['IS_NOT_EMPTY', 'IS_EMAIL']})));
		}
		if (self._has_social_logins) {
			for (var x of self._social_logins) {
				var icon = '';
				var social_name = x;
				if (isinstance (x, list) && len (x) == 2) {
					var icon = x [1];
					var social_name = x [0];
					self._icons_social_login [social_name] = icon;
				}
				self.xml_social_logins.append (DIV (icon, __kwargtrans__ (__mergekwargtrans__ ({_class: 'btn-social_login icon_button link', _title: 'Login with {0}'.format (str (social_name).capitalize ())}, dict ({'_phanterpwa-i18n-title': 'Login with {0}'.format (str (social_name).capitalize ()), '_data-social_login': social_name})))));
			}
		}
		var tcontent = DIV (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_src: user_image, _id: 'form-login-image-user-url'})), __kwargtrans__ ({_class: 'form-image-user-img'})), __kwargtrans__ ({_class: 'form-image-user-img-container'})), DIV (DIV ('{0} {1}'.format (first_name, last_name), __kwargtrans__ ({_id: 'form-login-profile-user-name', _class: 'form-profile-user-name'})), DIV (email, __kwargtrans__ ({_id: 'form-login-profile-user-email', _class: 'form-profile-user-email'})), DIV (role, __kwargtrans__ ({_id: 'form-login-profile-user-role', _class: 'form-profile-user-role'})), __kwargtrans__ ({_class: 'form-profile-user-info'})), __kwargtrans__ ({_class: 'form-profile-container'})), __kwargtrans__ ({_id: 'form-login-image-user-container', _class: 'form-image-user-container'})), DIV (DIV (forms.FormButton ('form-login-button-other-user', I18N ('Other account', __kwargtrans__ (dict ({'_pt-br': 'Outra Conta'}))), __kwargtrans__ ({_class: 'wave_on_click waves-phanterpwa btn-s'})), __kwargtrans__ ({_class: 'buttons-form-container'})), __kwargtrans__ ({_id: 'form-login-button-other-user-container', _class: 'p-col w1p100'})), email_mobile_input, DIV (forms.FormWidget ('login', 'password', __kwargtrans__ (dict ({'label': I18N ('Password', __kwargtrans__ (dict ({'_pt-br': 'Senha'}))), 'type': 'password', 'validators': ['IS_NOT_EMPTY'], 'icon': I (__kwargtrans__ ({_class: 'fas fa-eye'}))}))), __kwargtrans__ ({_class: 'p-col w1p100'})), DIV (forms.FormWidget ('login', 'remember_me', __kwargtrans__ (dict ({'value': remember_me, 'label': I18N ('Remember-me', __kwargtrans__ (dict ({'_pt-br': 'Lembre-me'}))), 'type': 'boolean'}))), __kwargtrans__ ({_class: 'input-field p-col w1p100'})), __kwargtrans__ ({_class: 'phanterpwa-auth_user-form-inputs'})).jquery ();
		if (self._has_social_logins) {
			tcontent.addClass ('has_social_logins');
		}
		var button_login_by_social = '';
		if (self.last_auth_user !== null && self.last_auth_user !== undefined) {
			tcontent.addClass ('has_auth_user');
			if (self.last_auth_user ['social_login'] !== null && self.last_auth_user ['social_login'] !== undefined) {
				var icon = self._icons_social_login.py_get (self.last_auth_user ['social_login'], '');
				tcontent.addClass ('auth_user_logged_by_social_login');
				var current_social_name = self.last_auth_user ['social_login'];
				var button_login_by_social = forms.FormButton ('social_login-{0}'.format (current_social_name), CONCATENATE (icon, I18N ('Continue using {0}'.format (str (current_social_name).capitalize ()), __kwargtrans__ (dict ({'_pt-br': 'Continuar com {0}'.format (str (current_social_name).capitalize ())})))), __kwargtrans__ (dict ({'_class': 'btn-social_login wave_on_click waves-phanterpwa', '_data-social_login': current_social_name})));
			}
		}
		var tfooter = DIV (forms.CaptchaContainer ('login', preloaders.android), DIV (DIV (forms.SubmitButton ('login', I18N ('Login', __kwargtrans__ (dict ({'_pt-br': 'Login'}))), __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'hidden_on_its_social_login'})), DIV (button_login_by_social, __kwargtrans__ ({_class: 'hidden_on_not_has_auth_user'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'})), __kwargtrans__ ({_class: 'p-col w1p100'})).jquery ();
		if (self.last_auth_user !== null && self.last_auth_user !== undefined) {
			tfooter.addClass ('has_auth_user');
			if (self.last_auth_user ['social_login'] !== null && self.last_auth_user ['social_login'] !== undefined) {
				tfooter.addClass ('its_social_login');
			}
		}
		modal.Modal.__init__ (self, self.element_target, __kwargtrans__ (dict ({'_phanterpwa-form': 'login', '_id': 'form-login', 'header_height': 50, 'footer_height': 200, 'title': I18N ('Login'), 'buttons_panel': DIV (...self.xml_social_logins, DIV (I (__kwargtrans__ ({_class: 'fas fa-sign-in-alt'})), __kwargtrans__ (__mergekwargtrans__ ({_id: 'phanterpwa-widget-form-form_button-register', _class: 'icon_button', _title: 'Create an account'}, dict ({'_phanterpwa-i18n-title': 'Create an account', '_pt-br': 'Criar uma Conta'})))), DIV (I (DIV (DIV (SPAN (I (__kwargtrans__ ({_class: 'fas fa-key'})), __kwargtrans__ ({_class: 'icombine-container-first'})), SPAN (I (__kwargtrans__ ({_class: 'fas fa-sync'})), __kwargtrans__ ({_class: 'icombine-container-last'})), __kwargtrans__ ({_class: 'icombine-container'})), __kwargtrans__ ({_class: 'phanterpwa-snippet-icombine'}))), __kwargtrans__ (__mergekwargtrans__ ({_id: 'phanterpwa-widget-form-form_button-password', _title: 'Recover password', _class: 'icon_button'}, dict ({'_phanterpwa-i18n-title': 'Recover password', '_pt-br': 'Esqueci a Senha'}))))), 'content': tcontent, 'footer': tfooter, 'after_open': self.binds})));
	});},
	get other_account () {return __get__ (this, function (self) {
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
		self.element_target.find ('.phanterpwa-auth_user-form-inputs').removeClass ('has_auth_user');
		self.element_target.find ('.phanterpwa-component-modal-footer-container').find ('.has_auth_user').removeClass ('has_auth_user');
	});},
	get open_modal_register () {return __get__ (this, function (self) {
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
		self.close ();
		if (self.user_mobile_number === true) {
			window.PhanterPWA.Components ['auth_user'].modal_register (__kwargtrans__ ({user_mobile_number: true}));
		}
		else {
			window.PhanterPWA.Components ['auth_user'].modal_register (__kwargtrans__ ({user_mobile_number: false}));
		}
	});},
	get open_modal_request_password () {return __get__ (this, function (self) {
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
		self.close ();
		if (self.user_mobile_number === true) {
			window.PhanterPWA.Components ['auth_user'].modal_request_password (__kwargtrans__ ({user_mobile_number: true}));
		}
		else {
			window.PhanterPWA.Components ['auth_user'].modal_request_password (__kwargtrans__ ({user_mobile_number: false}));
		}
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
		self.element_target.find ('#phanterpwa-widget-form-submit_button-login').off ('click.modal_submit_login').on ('click.modal_submit_login', (function __lambda__ () {
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
			return self.submit ();
		}));
		self.element_target.find ('#phanterpwa-widget-form-form_button-form-login-button-other-user').off ('click.other_account_button').on ('click.other_account_button', (function __lambda__ () {
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
			return self.other_account ();
		}));
		self.element_target.find ('#phanterpwa-widget-form-form_button-register').off ('click.form_button_register').on ('click.form_button_register', self.open_modal_register);
		self.element_target.find ('#phanterpwa-widget-form-form_button-password').off ('click.form_button_request_password').on ('click.form_button_request_password', self.open_modal_request_password);
		self.element_target.find ('.btn-social_login').off ('click.social_button').on ('click.social_button', (function __lambda__ () {
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
			return self._on_click_social_button (this);
		}));
		self.element_target.find ('#phanterpwa-widget-input-input-login-mobile').trigger ('keyup');
		var email = $ ('#phanterpwa-widget-input-input-login-email').val ();
		if (str (email).endswith ('.mobile@phanterpwa.com')) {
			$ ('#phanterpwa-widget-input-input-login-email').val ('');
		}
		self.element_target.find ('#phanterpwa-widget-input-input-login-mobile').off ('change.fix_prefix, keyup.fix_prefix').on ('change.fix_prefix, keyup.fix_prefix', (function __lambda__ () {
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
			return self.fix_prefix (this);
		}));
	});},
	get fix_prefix () {return __get__ (this, function (self, el) {
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
		console.log (el);
		var value = $ (el).val ();
		var numbers = (function () {
			var __accu0__ = [];
			for (var x = 0; x < 10; x++) {
				__accu0__.append (str (x));
			}
			return __accu0__;
		}) ();
		var cont = 0;
		for (var x of str (value)) {
			if (__in__ (x, numbers)) {
				cont++;
			}
		}
		var size = len (str (self.prefix_mobile_number));
		if (cont < size) {
			$ (el).val (self.prefix_mobile_number).trigger ('keyup');
		}
	});},
	get _on_click_social_button () {return __get__ (this, function (self, el) {
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
		var social = $ (el).data ('social_login');
		if (social == 'mobile') {
			self.Modal = ModalLogin ('#modal-container', __kwargtrans__ ({social_logins: window.PhanterPWA.social_login_list (), user_mobile_number: true}));
			self.Modal.open ();
			self.other_account ();
			forms.SignForm ('#form-login', __kwargtrans__ ({has_captcha: true, after_sign: (function __lambda__ () {
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
				return forms.ValidateForm ('#form-login');
			})}));
		}
		else if (social == 'email') {
			self.Modal = ModalLogin ('#modal-container', __kwargtrans__ ({social_logins: window.PhanterPWA.social_login_list (), user_mobile_number: false}));
			self.Modal.open ();
			self.other_account ();
			forms.SignForm ('#form-login', __kwargtrans__ ({has_captcha: true, after_sign: (function __lambda__ () {
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
				return forms.ValidateForm ('#form-login');
			})}));
		}
		else {
			window.PhanterPWA.social_login (social);
		}
	});},
	get clear_errors () {return __get__ (this, function (self) {
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
		$ ('#form-{0}'.format (self._form)).find ('.phanterpwa-widget-error').removeClass ('enabled').html ('');
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
		if (ajax_status == 'success') {
			var json = data.responseJSON;
			self.close ();
			if (data.status == 200) {
				if (self.AuthUser !== null && self.AuthUser !== undefined) {
					self.AuthUser.start ();
					self.AuthUser.AlertActivationAccount.check_activation ();
					if (json.used_temporary !== null && json.used_temporary !== undefined) {
						if (window.PhanterPWA.DEBUG) {
							console.error (json.used_temporary);
						}
						self.AuthUser.modal_change_password (__kwargtrans__ ({temporary_password: json.used_temporary}));
					}
				}
				window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': json.i18n.message})));
				var LeftBar = window.PhanterPWA.Components ['left_bar'];
				if (LeftBar !== null && LeftBar !== undefined) {
					LeftBar.reload ();
				}
			}
			else if (data.status == 206) {
				window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': json.i18n.message})));
				window.PhanterPWA.open_way ('two_factor/{0}'.format (json.authorization_url));
			}
		}
		else if (data.status == 400) {
			var json = data.responseJSON;
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': json.i18n.message})));
			forms.SignForm ('#form-login', __kwargtrans__ ({has_captcha: true}));
			var errors = dict (json.i18n ['errors']);
			if (errors !== undefined) {
				for (var x of errors.py_keys ()) {
					var wg = window.PhanterPWA.get_widget ('login-{0}'.format (x));
					if (wg !== null) {
						wg.set_message_error (SPAN (errors [x]).xml ());
					}
				}
			}
		}
		else if (data.status == 401) {
			var json = data.responseJSON;
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': json.i18n.message})));
			forms.SignForm ('#form-login', __kwargtrans__ ({has_captcha: true}));
			if (json.reasons == 'Mobile number does not exist') {
				self.Modal = ModalRegister ('#modal-container', __kwargtrans__ ({user_mobile_number: true, mobile: json.fone_number, password: json.password}));
				self.Modal.open ();
				forms.SignForm ('#form-register', __kwargtrans__ ({has_captcha: true, after_sign: (function __lambda__ () {
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
					return forms.ValidateForm ('#form-register');
				})}));
			}
			else if (json.reasons == 'Email does not exist') {
				self.Modal = ModalRegister ('#modal-container', __kwargtrans__ ({email: json.email, password: json.password}));
				self.Modal.open ();
				forms.SignForm ('#form-register', __kwargtrans__ ({has_captcha: true, after_sign: (function __lambda__ () {
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
					return forms.ValidateForm ('#form-register');
				})}));
			}
		}
	});},
	get submit () {return __get__ (this, function (self) {
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
		self.clear_errors ();
		if (self.user_mobile_number === true) {
			window.PhanterPWA.login ($ ('#phanterpwa-widget-input-input-login-csrf_token').val (), $ ('#phanterpwa-widget-input-input-login-mobile').val (), $ ('#phanterpwa-widget-input-input-login-password').val (), $ ('#phanterpwa-widget-checkbox-input-login-remember_me').prop ('checked'), __kwargtrans__ ({callback: self.after_submit, user_mobile_number: true}));
		}
		else {
			window.PhanterPWA.login ($ ('#phanterpwa-widget-input-input-login-csrf_token').val (), $ ('#phanterpwa-widget-input-input-login-email').val (), $ ('#phanterpwa-widget-input-input-login-password').val (), $ ('#phanterpwa-widget-checkbox-input-login-remember_me').prop ('checked'), __kwargtrans__ ({callback: self.after_submit}));
		}
	});}
});
export var ModalPersonalInformation =  __class__ ('ModalPersonalInformation', [modal.Modal], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, target_element) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'target_element': var target_element = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		var AuthUserCmp = window.PhanterPWA.Components ['auth_user'];
		self.AuthUser = null;
		if (AuthUserCmp !== null && AuthUserCmp !== undefined && !(isinstance (AuthUserCmp, AuthUser))) {
			console.error ('Need AuthUser instance on window.PhanterPWA.Components');
		}
		else {
			self.AuthUser = AuthUserCmp;
		}
		self.element_target = $ (target_element);
		self.auth_user = window.PhanterPWA.get_last_auth_user ();
		var first_name = '';
		var last_name = '';
		var email = '';
		var two_factor = false;
		var multiple_login = false;
		if (self.auth_user !== null && self.auth_user !== undefined) {
			var first_name = self.auth_user.first_name;
			var last_name = self.auth_user.last_name;
			var email = self.auth_user.email;
			var two_factor = self.auth_user.two_factor;
			var multiple_login = self.auth_user.multiple_login;
		}
		var hidden_fields = parameters.py_get ('hidden_fields', null);
		var information = parameters.py_get ('information', '');
		var first_name_hidden = null;
		var last_name_hidden = null;
		var email_hidden = null;
		var two_factor_hidden = null;
		var multiple_login_hidden = null;
		if (hidden_fields !== null) {
			if (__in__ ('first_name', hidden_fields)) {
				var first_name_hidden = ' e-hidden';
			}
			if (__in__ ('last_name', hidden_fields)) {
				var last_name_hidden = ' e-hidden';
			}
			if (__in__ ('email', hidden_fields)) {
				var email_hidden = ' e-hidden';
			}
			if (__in__ ('two_factor', hidden_fields)) {
				var two_factor_hidden = ' e-hidden';
			}
			if (__in__ ('multiple_login', hidden_fields)) {
				var multiple_login_hidden = ' e-hidden';
			}
		}
		var tcontent = DIV (P (information), DIV (DIV (DIV (forms.FormWidget ('change_account', 'first_name', __kwargtrans__ (dict ({'type': 'string', 'label': I18N ('First Name'), 'value': first_name, 'validators': ['IS_NOT_EMPTY'], '_class': 'p-col w1p100 w3p50'}))), __kwargtrans__ ({_class: first_name_hidden})), DIV (forms.FormWidget ('change_account', 'last_name', __kwargtrans__ (dict ({'type': 'string', 'label': I18N ('Last Name'), 'value': last_name, 'validators': ['IS_NOT_EMPTY'], '_class': 'p-col w1p100 w3p50'}))), __kwargtrans__ ({_class: last_name_hidden})), DIV (forms.FormWidget ('change_account', 'email', __kwargtrans__ (dict ({'type': 'string', 'label': I18N ('E-Mail'), 'value': email, 'validators': ['IS_EMAIL'], '_class': 'p-col w1p100'}))), __kwargtrans__ ({_class: email_hidden})), DIV (forms.FormWidget ('change_account', 'two_factor', __kwargtrans__ (dict ({'value': two_factor, 'label': I18N ('Two-step authentication', __kwargtrans__ (dict ({'_pt-br': 'Autentica????o em duas etapas'}))), 'type': 'boolean'}))), __kwargtrans__ ({_class: two_factor_hidden})), DIV (forms.FormWidget ('change_account', 'multiple_login', __kwargtrans__ (dict ({'value': multiple_login, 'label': I18N ('Multiple logins', __kwargtrans__ (dict ({'_pt-br': 'M??ltiplos logins'}))), 'type': 'boolean'}))), __kwargtrans__ ({_class: multiple_login_hidden})), __kwargtrans__ ({_class: 'p-row change_account_inputs_container'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'phanterpwa-change_account-form-inputs p-row'})).jquery ();
		if (self.auth_user !== null && self.auth_user !== undefined) {
			tcontent.addClass ('has_auth_user');
		}
		var tfooter = DIV (DIV (forms.SubmitButton ('change_account', I18N ('Save Changes', __kwargtrans__ (dict ({'_pt-br': 'Salvar Mudan??as'}))), __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'})), __kwargtrans__ ({_class: 'p-col w1p100'})).jquery ();
		modal.Modal.__init__ (self, self.element_target, __kwargtrans__ (dict ({'form': 'change_account', 'header_height': 50, 'title': I18N ('Personal Information', __kwargtrans__ (dict ({'_pt-br': 'Informa????es Pessoais'}))), 'content': tcontent, 'footer': tfooter, 'after_open': self.binds})));
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
		if (ajax_status == 'success') {
			var json = data.responseJSON;
			var message = json.i18n.message;
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': message})));
			if (data.status == 200) {
				$ ('.phanterpwa-gallery-upload-input-file').val ('');
				var auth_user = json.auth_user;
				window.PhanterPWA.store_auth_user (auth_user);
				self.reload ();
				self.close ();
				if (self.AuthUser !== null) {
					self.AuthUser.AlertActivationAccount.check_activation ();
				}
			}
			else {
				forms.SignForm ('#form-change_account');
			}
		}
		else {
			forms.SignForm ('#form-change_account');
			var json = data.responseJSON;
			var message = json.i18n.message;
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': message})));
		}
	});},
	get submit () {return __get__ (this, function (self) {
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
		var formdata = new FormData ($ ('#form-change_account') [0]);
		window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'auth', 'change'], 'form_data': formdata, 'onComplete': self.after_submit})));
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
		forms.ValidateForm ('#form-change_account');
		$ ('#phanterpwa-widget-form-submit_button-change_account').off ('click.profile_button_save').on ('click.profile_button_save', self.submit);
	});},
	get reload () {return __get__ (this, function (self) {
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
		forms.SignForm ('#form-change_account');
		self.auth_user = window.PhanterPWA.get_last_auth_user ();
		var first_name = '';
		var last_name = '';
		var email = '';
		var two_factor = false;
		var multiple_login = false;
		if (self.auth_user !== null && self.auth_user !== undefined) {
			var first_name = self.auth_user.first_name;
			var last_name = self.auth_user.last_name;
			var email = self.auth_user.email;
			var two_factor = self.auth_user.two_factor;
			var multiple_login = self.auth_user.multiple_login;
		}
		var two_factor_represent = I (__kwargtrans__ ({_class: 'fas fa-times'}));
		var multiple_login_represent = I (__kwargtrans__ ({_class: 'fas fa-times'}));
		if (self.auth_user.two_factor !== null && self.auth_user.two_factor !== undefined) {
			var two_factor = self.auth_user.two_factor;
			if (two_factor) {
				var two_factor_represent = I (__kwargtrans__ ({_class: 'fas fa-check'}));
			}
		}
		if (self.auth_user.multiple_login !== null && self.auth_user.multiple_login !== undefined) {
			var multiple_login = self.auth_user.multiple_login;
			if (multiple_login) {
				var multiple_login_represent = I (__kwargtrans__ ({_class: 'fas fa-check'}));
			}
		}
		$ ('#phanterpwa-widget-input-input-profile-first_name').val (first_name);
		$ ('#phanterpwa-widget-input-input-profile-last_name').val (last_name);
		$ ('#phanterpwa-widget-input-input-profile-email').val (email);
		$ ('#phanterpwa-tagger-span-first_name').text (first_name);
		$ ('#phanterpwa-tagger-span-last_name').text (last_name);
		$ ('#phanterpwa-tagger-span-email').text (email);
		$ ('#phanterpwa-tagger-span-two_factor').html (two_factor_represent.jquery ());
		$ ('#phanterpwa-tagger-span-multiple_login').html (multiple_login_represent.jquery ());
		window.PhanterPWA.Request.widgets ['profile-two_factor'].set_value (two_factor);
		window.PhanterPWA.Request.widgets ['profile-multiple_login'].set_value (multiple_login);
	});}
});
export var ModalRegister =  __class__ ('ModalRegister', [modal.Modal], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, target_element) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'target_element': var target_element = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self.element_target = $ (target_element);
		var AuthUserCmp = window.PhanterPWA.Components ['auth_user'];
		self.AuthUser = null;
		if (AuthUserCmp !== null && AuthUserCmp !== undefined && !(isinstance (AuthUserCmp, AuthUser))) {
			console.error ('Need AuthUser instance on window.PhanterPWA.Components');
		}
		else {
			self.AuthUser = AuthUserCmp;
		}
		self.user_mobile_number = parameters.py_get ('user_mobile_number', null);
		self.mask_mobile_number = parameters.py_get ('mask_mobile_number', '+## (##) # ####-####');
		self.prefix_mobile_number = parameters.py_get ('prefix_mobile_number', 55);
		self.prefix_mobile_list = parameters.py_get ('prefix_mobile_list', [self.prefix_mobile_number]);
		if (self.user_mobile_number === true) {
			var mobile = parameters.py_get ('mobile', self.prefix_mobile_number);
			var input_name = forms.FormWidget ('register', 'mobile', __kwargtrans__ (dict ({'type': 'string', 'label': I18N ('Mobile Number'), 'validators': ['IS_NOT_EMPTY'], 'value': mobile, 'mask': self.mask_mobile_number, '_class': 'p-col w1p100'})));
		}
		else {
			var email = parameters.py_get ('email', '');
			var input_name = forms.FormWidget ('register', 'email', __kwargtrans__ (dict ({'type': 'string', 'value': email, 'label': I18N ('E-Mail'), 'validators': ['IS_EMAIL'], '_class': 'p-col w1p100'})));
		}
		var password = parameters.py_get ('password', '');
		self._xml_button = [];
		if (__in__ ('SMS', window.PhanterPWA.CONFIG)) {
			if (self.user_mobile_number === true) {
				self._xml_button.append (DIV (I (__kwargtrans__ ({_class: 'fas fa-envelope'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'btn-social_login icon_button link', _title: 'Register with {0}'.format (str ('email').capitalize ())}, dict ({'_phanterpwa-i18n-title': 'Register with {0}'.format (str ('email').capitalize ()), '_data-social_login': 'email', '_pt-br': 'Registrar com o {0}'.format (str ('email').capitalize ())})))));
			}
			else {
				self._xml_button.append (DIV (I (__kwargtrans__ ({_class: 'fas fa-mobile-alt'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'btn-social_login icon_button link', _title: 'Register with {0}'.format (str ('mobile').capitalize ())}, dict ({'_phanterpwa-i18n-title': 'Register with {0}'.format (str ('mobile').capitalize ()), '_data-social_login': 'mobile', '_pt-br': 'Registrar com o {0}'.format (str ('mobile').capitalize ())})))));
			}
		}
		var tcontent = DIV (forms.FormWidget ('register', 'first_name', __kwargtrans__ (dict ({'type': 'string', 'label': I18N ('First Name'), 'validators': ['IS_NOT_EMPTY'], '_class': 'p-col w1p100 w3p50'}))), forms.FormWidget ('register', 'last_name', __kwargtrans__ (dict ({'type': 'string', 'label': I18N ('Last Name'), 'validators': ['IS_NOT_EMPTY'], '_class': 'p-col w1p100 w3p50'}))), input_name, forms.FormWidget ('register', 'password', __kwargtrans__ (dict ({'type': 'password', 'label': I18N ('Password'), 'value': password, 'validators': ['IS_NOT_EMPTY', 'IS_EQUALS:#phanterpwa-widget-input-input-register-password_repeat'], '_class': 'p-col w1p100 w3p50'}))), forms.FormWidget ('register', 'password_repeat', __kwargtrans__ (dict ({'type': 'password', 'label': I18N ('Repeat Password'), 'validators': ['IS_NOT_EMPTY', 'IS_EQUALS:#phanterpwa-widget-input-input-register-password'], '_class': 'p-col w1p100 w3p50'}))), __kwargtrans__ ({_class: 'phanterpwa-register-form-inputs p-row'})).jquery ();
		if (self.auth_user !== null && self.auth_user !== undefined) {
			tcontent.addClass ('has_auth_user');
		}
		var tfooter = DIV (forms.CaptchaContainer ('register', preloaders.android), DIV (forms.SubmitButton ('register', I18N ('Create', __kwargtrans__ (dict ({'_pt-br': 'Criar'}))), __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'})), __kwargtrans__ ({_class: 'p-col w1p100'})).jquery ();
		modal.Modal.__init__ (self, self.element_target, __kwargtrans__ (dict ({'_phanterpwa-form': 'register', '_id': 'form-register', 'header_height': 50, 'footer_height': 200, 'title': I18N ('Register', __kwargtrans__ (dict ({'_pt-br': 'Registrar'}))), 'buttons_panel': DIV (...self._xml_button, DIV (I (__kwargtrans__ ({_class: 'fas fa-user-circle'})), __kwargtrans__ (__mergekwargtrans__ ({_id: 'phanterpwa-widget-form-form_button-login', _class: 'icon_button', _title: 'Login'}, dict ({'_phanterpwa-i18n-title': 'Login', '_pt-br': 'Logar-se'})))), DIV (I (DIV (DIV (SPAN (I (__kwargtrans__ ({_class: 'fas fa-key'})), __kwargtrans__ ({_class: 'icombine-container-first'})), SPAN (I (__kwargtrans__ ({_class: 'fas fa-sync'})), __kwargtrans__ ({_class: 'icombine-container-last'})), __kwargtrans__ ({_class: 'icombine-container'})), __kwargtrans__ ({_class: 'phanterpwa-snippet-icombine'}))), __kwargtrans__ (__mergekwargtrans__ ({_id: 'phanterpwa-widget-form-form_button-password', _title: 'Recover password', _class: 'icon_button'}, dict ({'_phanterpwa-i18n-title': 'Recover password', '_pt-br': 'Esqueci a Senha'}))))), 'content': tcontent, 'footer': tfooter, 'after_open': self.binds})));
	});},
	get open_modal_login () {return __get__ (this, function (self) {
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
		self.close ();
		if (self.user_mobile_number) {
			window.PhanterPWA.Components ['auth_user'].modal_login (__kwargtrans__ ({user_mobile_number: true, other_account: true}));
		}
		else {
			window.PhanterPWA.Components ['auth_user'].modal_login (__kwargtrans__ ({user_mobile_number: false, other_account: true}));
		}
	});},
	get open_modal_request_password () {return __get__ (this, function (self) {
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
		self.close ();
		if (self.user_mobile_number) {
			window.PhanterPWA.Components ['auth_user'].modal_request_password (__kwargtrans__ ({user_mobile_number: true}));
		}
		else {
			window.PhanterPWA.Components ['auth_user'].modal_request_password ();
		}
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
		self.element_target = $ (self.target_selector);
		self.element_target.find ('#phanterpwa-widget-form-form_button-login').off ('click.form_button_login').on ('click.form_button_login', self.open_modal_login);
		self.element_target.find ('#phanterpwa-widget-form-form_button-password').off ('click.form_button_request_password').on ('click.form_button_request_password', self.open_modal_request_password);
		self.element_target.find ('#phanterpwa-widget-form-submit_button-register').off ('click.modal_submit_register').on ('click.modal_submit_register', (function __lambda__ () {
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
			return self.submit ();
		}));
		self.element_target.find ('.btn-social_login').off ('click.social_button').on ('click.social_button', (function __lambda__ () {
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
			return self._on_click_social_button (this);
		}));
		self.element_target.find ('#phanterpwa-widget-input-input-register-mobile').trigger ('keyup');
		var email = $ ('#phanterpwa-widget-input-input-register-email').val ();
		if (str (email).endswith ('.mobile@phanterpwa.com')) {
			$ ('#phanterpwa-widget-input-input-register-email').val ('');
		}
		self.element_target.find ('#phanterpwa-widget-input-input-register-mobile').off ('change.fix_prefix, keyup.fix_prefix').on ('change.fix_prefix, keyup.fix_prefix', (function __lambda__ () {
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
			return self.fix_prefix (this);
		}));
	});},
	get fix_prefix () {return __get__ (this, function (self, el) {
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
		var value = $ (el).val ();
		var numbers = (function () {
			var __accu0__ = [];
			for (var x = 0; x < 10; x++) {
				__accu0__.append (str (x));
			}
			return __accu0__;
		}) ();
		var cont = 0;
		for (var x of str (value)) {
			if (__in__ (x, numbers)) {
				cont++;
			}
		}
		var size = len (str (self.prefix_mobile_number));
		if (cont < size) {
			$ (el).val (self.prefix_mobile_number).trigger ('keyup');
		}
	});},
	get _on_click_social_button () {return __get__ (this, function (self, el) {
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
		var social = $ (el).data ('social_login');
		if (social == 'mobile') {
			window.PhanterPWA.Components ['auth_user'].modal_register (__kwargtrans__ ({user_mobile_number: true}));
		}
		else if (social == 'email') {
			window.PhanterPWA.Components ['auth_user'].modal_register ();
		}
	});},
	get clear_errors () {return __get__ (this, function (self) {
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
		$ ('#form-{0}'.format (self._form)).find ('.phanterpwa-widget-error').removeClass ('enabled').html ('');
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
		if (ajax_status == 'success') {
			var json = data.responseJSON;
			if (self.AuthUser !== null && self.AuthUser !== undefined) {
				self.AuthUser.start ();
			}
			self.close ();
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': json.i18n.message})));
			var LeftBar = window.PhanterPWA.Components ['left_bar'];
			if (LeftBar !== null && LeftBar !== undefined) {
				LeftBar.reload ();
			}
		}
		else if (data.status == 400) {
			var json = data.responseJSON;
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': json.i18n.message})));
			forms.SignForm ('#form-register', __kwargtrans__ ({has_captcha: true}));
			var errors = dict (json.i18n ['errors']);
			if (errors !== undefined) {
				for (var x of errors.py_keys ()) {
					var wg = window.PhanterPWA.get_widget ('register-{0}'.format (x));
					if (wg !== null) {
						wg.set_message_error (SPAN (errors [x]).xml ());
					}
				}
			}
		}
	});},
	get submit () {return __get__ (this, function (self) {
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
		self.clear_errors ();
		if (self.user_mobile_number) {
			window.PhanterPWA.register ($ ('#phanterpwa-widget-input-input-register-csrf_token').val (), $ ('#phanterpwa-widget-input-input-register-first_name').val (), $ ('#phanterpwa-widget-input-input-register-last_name').val (), $ ('#phanterpwa-widget-input-input-register-mobile').val (), $ ('#phanterpwa-widget-input-input-register-password').val (), $ ('#phanterpwa-widget-input-input-register-password_repeat').val (), __kwargtrans__ ({callback: self.after_submit, user_mobile_number: true}));
		}
		else {
			window.PhanterPWA.register ($ ('#phanterpwa-widget-input-input-register-csrf_token').val (), $ ('#phanterpwa-widget-input-input-register-first_name').val (), $ ('#phanterpwa-widget-input-input-register-last_name').val (), $ ('#phanterpwa-widget-input-input-register-email').val (), $ ('#phanterpwa-widget-input-input-register-password').val (), $ ('#phanterpwa-widget-input-input-register-password_repeat').val (), __kwargtrans__ ({callback: self.after_submit}));
		}
	});}
});
export var ModalRequestPassword =  __class__ ('ModalRequestPassword', [modal.Modal], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, target_element) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'target_element': var target_element = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self.element_target = $ (target_element);
		var AuthUserCmp = window.PhanterPWA.Components ['auth_user'];
		self.AuthUser = null;
		if (AuthUserCmp !== null && AuthUserCmp !== undefined && !(isinstance (AuthUserCmp, AuthUser))) {
			console.error ('Need AuthUser instance on window.PhanterPWA.Components');
		}
		else {
			self.AuthUser = AuthUserCmp;
		}
		self.user_mobile_number = parameters.py_get ('user_mobile_number', null);
		self.mask_mobile_number = parameters.py_get ('mask_mobile_number', '+## (##) # ####-####');
		self.prefix_mobile_number = parameters.py_get ('prefix_mobile_number', 55);
		self.prefix_mobile_list = parameters.py_get ('prefix_mobile_list', [self.prefix_mobile_number]);
		self.last_auth_user = window.PhanterPWA.get_last_auth_user ();
		var email = '';
		var fone_number = self.prefix_mobile_number;
		if (self.last_auth_user !== null && self.last_auth_user !== undefined) {
			var email = self.last_auth_user.email;
			var fone_number = (self.last_auth_user.fone_number !== undefined ? self.last_auth_user.fone_number : '');
		}
		if (self.user_mobile_number) {
			var widget_email = forms.FormWidget ('request_password', 'mobile', __kwargtrans__ (dict ({'type': 'string', 'label': I18N ('Mobile number'), 'validators': ['IS_NOT_EMPTY'], 'value': fone_number, 'mask': self.mask_mobile_number, '_class': 'p-col w1p100'})));
		}
		else {
			var widget_email = forms.FormWidget ('request_password', 'email', __kwargtrans__ (dict ({'type': 'string', 'label': I18N ('E-Mail'), 'validators': ['IS_EMAIL'], 'value': email, '_class': 'p-col w1p100'})));
		}
		self._xml_button = [];
		if (__in__ ('SMS', window.PhanterPWA.CONFIG)) {
			if (self.user_mobile_number === true) {
				self._xml_button.append (DIV (I (__kwargtrans__ ({_class: 'fas fa-envelope'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'btn-social_login icon_button link', _title: 'Recover with {0}'.format (str ('email').capitalize ())}, dict ({'_phanterpwa-i18n-title': 'Register with {0}'.format (str ('email').capitalize ()), '_data-social_login': 'email', '_pt-br': 'Recuperar com o {0}'.format (str ('email').capitalize ())})))));
			}
			else {
				self._xml_button = [DIV (I (__kwargtrans__ ({_class: 'fas fa-mobile-alt'})), __kwargtrans__ (__mergekwargtrans__ ({_class: 'btn-social_login icon_button link', _title: 'Recover with {0}'.format (str ('mobile').capitalize ())}, dict ({'_phanterpwa-i18n-title': 'Register with {0}'.format (str ('mobile').capitalize ()), '_data-social_login': 'mobile', '_pt-br': 'Recuperar com o {0}'.format (str ('mobile').capitalize ())}))))];
			}
		}
		var tcontent = DIV (BR (), widget_email, DIV (__kwargtrans__ ({_style: 'min-height: 35px;display: table;width: 10px;'})), __kwargtrans__ ({_class: 'phanterpwa-request_password-form-inputs p-row'})).jquery ();
		if (self.auth_user !== null && self.auth_user !== undefined) {
			tcontent.addClass ('has_auth_user');
		}
		var tfooter = DIV (forms.CaptchaContainer ('request_password', preloaders.android), DIV (forms.SubmitButton ('request_password', I18N ('Recover', __kwargtrans__ (dict ({'_pt-br': 'Recuperar'}))), __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'})), __kwargtrans__ ({_class: 'p-col w1p100'})).jquery ();
		modal.Modal.__init__ (self, self.element_target, __kwargtrans__ (dict ({'_phanterpwa-form': 'request_password', '_id': 'form-request_password', 'header_height': 50, 'footer_height': 200, 'title': I18N ('Recover Password', __kwargtrans__ (dict ({'_pt-br': 'Recuperar Senha'}))), 'buttons_panel': DIV (...self._xml_button, DIV (I (__kwargtrans__ ({_class: 'fas fa-user-circle'})), __kwargtrans__ (__mergekwargtrans__ ({_id: 'phanterpwa-widget-form-form_button-login', _class: 'icon_button', _title: 'Login'}, dict ({'_phanterpwa-i18n-title': 'Login', '_pt-br': 'Logar-se'})))), DIV (I (__kwargtrans__ ({_class: 'fas fa-sign-in-alt'})), __kwargtrans__ (__mergekwargtrans__ ({_id: 'phanterpwa-widget-form-form_button-register', _class: 'icon_button', _title: 'Create an account'}, dict ({'_phanterpwa-i18n-title': 'Create an account', '_pt-br': 'Criar uma Conta'}))))), 'content': tcontent, 'footer': tfooter, 'after_open': self.binds})));
	});},
	get open_modal_login () {return __get__ (this, function (self) {
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
		self.close ();
		if (self.user_mobile_number) {
			window.PhanterPWA.Components ['auth_user'].modal_login (__kwargtrans__ ({user_mobile_number: true, other_account: true}));
		}
		else {
			window.PhanterPWA.Components ['auth_user'].modal_login (__kwargtrans__ ({other_account: true}));
		}
	});},
	get open_modal_register () {return __get__ (this, function (self) {
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
		self.close ();
		if (self.user_mobile_number) {
			window.PhanterPWA.Components ['auth_user'].modal_register (__kwargtrans__ ({user_mobile_number: true}));
		}
		else {
			window.PhanterPWA.Components ['auth_user'].modal_register ();
		}
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
		self.element_target.find ('#phanterpwa-widget-form-submit_button-request_password').off ('click.modal_submit_request').on ('click.modal_submit_request', (function __lambda__ () {
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
			return self.submit ();
		}));
		self.element_target.find ('#phanterpwa-widget-form-form_button-register').off ('click.form_button_register').on ('click.form_button_register', self.open_modal_register);
		self.element_target.find ('#phanterpwa-widget-form-form_button-login').off ('click.form_button_login').on ('click.form_button_login', self.open_modal_login);
		self.element_target.find ('.btn-social_login').off ('click.social_button').on ('click.social_button', (function __lambda__ () {
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
			return self._on_click_social_button (this);
		}));
		self.element_target.find ('#phanterpwa-widget-input-input-request_password-mobile').trigger ('keyup');
		var email = $ ('#phanterpwa-widget-input-input-request_password-email').val ();
		if (str (email).endswith ('.mobile@phanterpwa.com')) {
			$ ('#phanterpwa-widget-input-input-request_password-email').val ('');
		}
		self.element_target.find ('#phanterpwa-widget-input-input-request_password-mobile').off ('change.fix_prefix, keyup.fix_prefix').on ('change.fix_prefix, keyup.fix_prefix', (function __lambda__ () {
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
			return self.fix_prefix (this);
		}));
	});},
	get fix_prefix () {return __get__ (this, function (self, el) {
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
		console.log (el);
		var value = $ (el).val ();
		var numbers = (function () {
			var __accu0__ = [];
			for (var x = 0; x < 10; x++) {
				__accu0__.append (str (x));
			}
			return __accu0__;
		}) ();
		var cont = 0;
		for (var x of str (value)) {
			if (__in__ (x, numbers)) {
				cont++;
			}
		}
		var size = len (str (self.prefix_mobile_number));
		if (cont < size) {
			$ (el).val (self.prefix_mobile_number).trigger ('keyup');
		}
	});},
	get _on_click_social_button () {return __get__ (this, function (self, el) {
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
		var social = $ (el).data ('social_login');
		if (social == 'mobile') {
			window.PhanterPWA.Components ['auth_user'].modal_register (__kwargtrans__ ({user_mobile_number: true}));
		}
		else if (social == 'email') {
			window.PhanterPWA.Components ['auth_user'].modal_register ();
		}
	});},
	get _on_click_social_button () {return __get__ (this, function (self, el) {
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
		var social = $ (el).data ('social_login');
		if (social == 'mobile') {
			window.PhanterPWA.Components ['auth_user'].modal_request_password (__kwargtrans__ ({user_mobile_number: true}));
		}
		else if (social == 'email') {
			window.PhanterPWA.Components ['auth_user'].modal_request_password ();
		}
	});},
	get clear_errors () {return __get__ (this, function (self) {
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
		$ ('#form-{0}'.format (self._form)).find ('.phanterpwa-widget-error').removeClass ('enabled').html ('');
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
		if (ajax_status == 'success') {
			var json = data.responseJSON;
			self.close ();
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': json.i18n.message})));
			var LeftBar = window.PhanterPWA.Components ['left_bar'];
			if (LeftBar !== null && LeftBar !== undefined) {
				LeftBar.reload ();
			}
		}
		else if (data.status == 400) {
			var json = data.responseJSON;
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': json.i18n.message})));
			forms.SignForm ('#form-request_password', __kwargtrans__ ({has_captcha: true}));
			var errors = dict (json.i18n ['errors']);
			if (errors !== undefined) {
				for (var x of errors.py_keys ()) {
					var wg = window.PhanterPWA.get_widget ('request_password-{0}'.format (x));
					if (wg !== null) {
						wg.set_message_error (SPAN (errors [x]).xml ());
					}
				}
			}
		}
	});},
	get submit () {return __get__ (this, function (self) {
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
		self.clear_errors ();
		if (self.user_mobile_number) {
			window.PhanterPWA.request_password ($ ('#phanterpwa-widget-input-input-request_password-csrf_token').val (), $ ('#phanterpwa-widget-input-input-request_password-mobile').val (), __kwargtrans__ ({callback: self.after_submit, user_mobile_number: true}));
		}
		else {
			window.PhanterPWA.request_password ($ ('#phanterpwa-widget-input-input-request_password-csrf_token').val (), $ ('#phanterpwa-widget-input-input-request_password-email').val (), __kwargtrans__ ({callback: self.after_submit}));
		}
	});}
});
export var AlertActivationAccount =  __class__ ('AlertActivationAccount', [top_slide.TopSlide], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, target_element) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'target_element': var target_element = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var content = DIV (__kwargtrans__ ({_id: 'phanterpwa-top-slide-auth_user-activation-container', _class: 'phanterpwa-auth_user-activation-container'}));
		var parameters = dict (__kwargtrans__ ({after_open: self.binds}));
		top_slide.TopSlide.__init__ (self, target_element, content, __kwargtrans__ (parameters));
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
		self._process_alert_content ();
		forms.SignForm ('#form-activation', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-activation');
		})}));
		self.element_target = $ (self.target_selector);
		self.element_target.find ('#phanterpwa-widget-form-submit_button-activation').off ('click.modal_submit_activation').on ('click.modal_submit_activation', (function __lambda__ () {
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
			return self.submit ();
		}));
		self.element_target.find ('#phanterpwa-widget-form-form_button-activation_new_code').off ('click.modal_submit_activation_new_code').on ('click.modal_submit_activation_new_code', (function __lambda__ () {
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
			return self.request_new_activation_code_to_send_to_email ();
		}));
	});},
	get _process_alert_content () {return __get__ (this, function (self) {
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
		var email = PhanterPWA.get_auth_user ().email;
		if (str (email).endswith ('.mobile@phanterpwa.com')) {
			var html = CONCATENATE (DIV (I18N ('{0}{1}{2}'.format ('Your account has not yet been activated,', ' when you created it, the activation code was sent by sms to', ' the your mobile number. Add the code received in the field below.')), __kwargtrans__ ({_class: 'phanterpwa-auth_user-activation-text'})), FORM (DIV (DIV (forms.FormWidget ('activation', 'activation_code', __kwargtrans__ (dict ({'type': 'string', 'label': I18N ('Activation Code', __kwargtrans__ (dict ({'_pt-br': 'C??digo de Ativa????o'}))), 'validators': ['IS_NOT_EMPTY', 'IS_ACTIVATION_CODE']}))), __kwargtrans__ ({_class: 'phanterpwa-auth_user-activation-action-input'})), DIV (forms.SubmitButton ('activation', I18N ('Activate', __kwargtrans__ (dict ({'_pt-br': 'Ativar'}))), __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), forms.FormButton ('activation_new_code', I18N ('Request Activation Code', __kwargtrans__ (dict ({'_pt-br': 'Requisitar novo c??digo'}))), __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'})), __kwargtrans__ ({_class: 'phanterpwa-auth_user-activation-actions-activate'})), __kwargtrans__ (dict ({'_class': 'phanterpwa-auth_user-activation-actions-container', '_phanterpwa-form': 'activation', '_id': 'form-activation'}))));
		}
		else {
			var html = CONCATENATE (DIV (I18N ('{0}{1}{2}'.format ('Your account has not yet been activated,', ' when you created it, the activation code was sent to', ' the registered email address. Check your email and add the code in the field below.'), __kwargtrans__ (dict ({'_pt-br': '{0}{1}{2}'.format ('Sua conta ainda n??o foi ativada, ao cri??-la foi enviado', ' ao email cadastrado o c??digo de ativa????o. Check seu ', 'email e adicione o c??digo no campo abaixo.')}))), __kwargtrans__ ({_class: 'phanterpwa-auth_user-activation-text'})), FORM (DIV (DIV (forms.FormWidget ('activation', 'activation_code', __kwargtrans__ (dict ({'type': 'string', 'label': I18N ('Activation Code', __kwargtrans__ (dict ({'_pt-br': 'C??digo de Ativa????o'}))), 'validators': ['IS_NOT_EMPTY', 'IS_ACTIVATION_CODE']}))), __kwargtrans__ ({_class: 'phanterpwa-auth_user-activation-action-input'})), DIV (forms.SubmitButton ('activation', I18N ('Activate', __kwargtrans__ (dict ({'_pt-br': 'Ativar'}))), __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), forms.FormButton ('activation_new_code', I18N ('Request Activation Code', __kwargtrans__ (dict ({'_pt-br': 'Requisitar novo c??digo'}))), __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'})), __kwargtrans__ ({_class: 'phanterpwa-auth_user-activation-actions-activate'})), __kwargtrans__ (dict ({'_class': 'phanterpwa-auth_user-activation-actions-container', '_phanterpwa-form': 'activation', '_id': 'form-activation'}))));
		}
		html.html_to ('#phanterpwa-top-slide-auth_user-activation-container');
	});},
	get after_activation_code_send () {return __get__ (this, function (self, data, ajax_status) {
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
			var message = json.i18n.message;
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': message})));
		}
		else if (data.status == 400) {
			var json = data.responseJSON;
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': json.i18n.message})));
			forms.SignForm ('#form-activation', __kwargtrans__ ({has_captcha: true}));
			var errors = dict (json.i18n ['errors']);
			if (errors !== undefined) {
				for (var x of errors.py_keys ()) {
					var wg = window.PhanterPWA.get_widget ('activation-{0}'.format (x));
					if (wg !== null) {
						wg.set_message_error (SPAN (errors [x]).xml ());
					}
				}
			}
		}
	});},
	get request_new_activation_code_to_send_to_email () {return __get__ (this, function (self) {
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
		window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'auth', 'active-account'], 'onComplete': self.after_activation_code_send})));
	});},
	get clear_errors () {return __get__ (this, function (self) {
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
		self.element_target = $ (self.target_selector);
		self.element_target.find ('.phanterpwa-widget-error').removeClass ('enabled').html ('');
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
		if (ajax_status == 'success') {
			var json = data.responseJSON;
			self.close ();
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': json.i18n.message})));
		}
		else if (data.status == 400) {
			var json = data.responseJSON;
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': json.i18n.message})));
			forms.SignForm ('#form-activation');
			var errors = dict (json.i18n ['errors']);
			if (errors !== undefined) {
				for (var x of errors.py_keys ()) {
					var wg = window.PhanterPWA.get_widget ('activation-{0}'.format (x));
					if (wg !== null) {
						wg.set_message_error (SPAN (errors [x]).xml ());
					}
				}
			}
		}
	});},
	get submit () {return __get__ (this, function (self) {
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
		self.element_target = $ (self.target_selector);
		self.clear_errors ();
		window.PhanterPWA.activation_account (self.element_target.find ('#phanterpwa-widget-input-input-activation-csrf_token').val (), self.element_target.find ('#phanterpwa-widget-input-input-activation-activation_code').val (), __kwargtrans__ ({callback: self.after_submit}));
	});},
	get check_activation () {return __get__ (this, function (self) {
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
		var auth_user = window.PhanterPWA.get_auth_user ();
		var _phanterpwa_user_try_activation = sessionStorage.getItem ('_phanterpwa-user-try-activation');
		if (auth_user !== null) {
			if (window.PhanterPWA.DEBUG) {
				console.info ('cheking', auth_user);
			}
			if (!(auth_user.activated)) {
				if (!(_phanterpwa_user_try_activation == 'true' || _phanterpwa_user_try_activation === true)) {
					self.request_new_activation_code_to_send_to_email ();
					sessionStorage.setItem ('_phanterpwa-user-try-activation', 'true');
				}
				self.open ();
				return false;
			}
			else {
				return true;
			}
		}
	});}
});
export var ModalChangePassword =  __class__ ('ModalChangePassword', [modal.Modal], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, target_selector) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'target_selector': var target_selector = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self.target_selector = target_selector;
		self.element_target = $ (self.target_selector);
		var AuthUserCmp = window.PhanterPWA.Components ['auth_user'];
		self.AuthUser = null;
		if (AuthUserCmp !== null && AuthUserCmp !== undefined && !(isinstance (AuthUserCmp, AuthUser))) {
			console.error ('Need AuthUser instance on window.PhanterPWA.Components');
		}
		else {
			self.AuthUser = AuthUserCmp;
		}
		var widget_password = forms.FormWidget ('change_password', 'password', __kwargtrans__ (dict ({'type': 'password', 'label': I18N ('Current Password'), 'validators': ['IS_NOT_EMPTY'], '_class': 'p-col w1p100'})));
		if (__in__ ('temporary_password', parameters)) {
			if (parameters ['temporary_password'] !== null && parameters ['temporary_password'] !== undefined) {
				var widget_password = forms.FormWidget ('change_password', 'password', __kwargtrans__ (dict ({'type': 'password', 'label': I18N ('Current Password'), 'validators': ['IS_NOT_EMPTY'], 'value': parameters ['temporary_password'], '_class': 'p-col w1p100', '_style': 'display: none;'})));
			}
		}
		var tcontent = DIV (widget_password, forms.FormWidget ('change_password', 'new_password', __kwargtrans__ (dict ({'type': 'password', 'label': I18N ('New password'), 'validators': ['IS_NOT_EMPTY', 'IS_EQUALS:#phanterpwa-widget-input-input-change_password-new_password_repeat'], '_class': 'p-col w1p100'}))), forms.FormWidget ('change_password', 'new_password_repeat', __kwargtrans__ (dict ({'type': 'password', 'label': I18N ('Password Repeat'), 'validators': ['IS_NOT_EMPTY', 'IS_EQUALS:#phanterpwa-widget-input-input-change_password-new_password'], '_class': 'p-col w1p100'}))), __kwargtrans__ ({_class: 'phanterpwa-change_password-form-inputs p-row'})).jquery ();
		if (self.auth_user !== null && self.auth_user !== undefined) {
			tcontent.addClass ('has_auth_user');
		}
		var tfooter = DIV (DIV (forms.SubmitButton ('change_password', I18N ('Change password', __kwargtrans__ (dict ({'_pt-br': 'Mudar a senha'}))), __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'})), __kwargtrans__ ({_class: 'p-col w1p100'})).jquery ();
		modal.Modal.__init__ (self, self.element_target, __kwargtrans__ (dict ({'_phanterpwa-form': 'change_password', '_id': 'form-change_password', 'header_height': 50, 'title': I18N ('Change Password'), 'content': tcontent, 'footer': tfooter, 'after_open': self.binds})));
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
		self.element_target = $ (self.target_selector);
		self.element_target.find ('#phanterpwa-widget-form-submit_button-change_password').off ('click.modal_submit_request').on ('click.modal_submit_request', (function __lambda__ () {
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
			return self.submit ();
		}));
	});},
	get clear_errors () {return __get__ (this, function (self) {
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
		$ ('#form-{0}'.format (self._form)).find ('.phanterpwa-widget-error').removeClass ('enabled').html ('');
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
		if (ajax_status == 'success') {
			var json = data.responseJSON;
			self.close ();
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': json.i18n.message})));
			var LeftBar = window.PhanterPWA.Components ['left_bar'];
			if (LeftBar !== null && LeftBar !== undefined) {
				LeftBar.reload ();
			}
		}
		else if (data.status == 400) {
			var json = data.responseJSON;
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': json.i18n.message})));
			forms.SignForm ('#form-change_password');
			var errors = dict (json.i18n ['errors']);
			if (errors !== undefined) {
				for (var x of errors.py_keys ()) {
					var wg = window.PhanterPWA.get_widget ('change_password-{0}'.format (x));
					if (wg !== null) {
						wg.set_message_error (SPAN (errors [x]).xml ());
					}
				}
			}
		}
	});},
	get submit () {return __get__ (this, function (self) {
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
		self.clear_errors ();
		window.PhanterPWA.change_password ($ ('#phanterpwa-widget-input-input-change_password-csrf_token').val (), $ ('#phanterpwa-widget-input-input-change_password-password').val (), $ ('#phanterpwa-widget-input-input-change_password-new_password').val (), $ ('#phanterpwa-widget-input-input-change_password-new_password_repeat').val (), __kwargtrans__ ({callback: self.after_submit}));
	});}
});
export var LeftBarMainButton =  __class__ ('LeftBarMainButton', [left_bar.LeftBarMainButton], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, target_selector) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'target_selector': var target_selector = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		left_bar.LeftBarMainButton.__init__ (self, target_selector);
	});},
	get switch_leftbar () {return __get__ (this, function (self) {
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
		self.element_target = $ (self.target_selector);
		var el = self.element_target.find ('#phanterpwa-component-left_bar-main_button');
		if (el.hasClass ('enabled') && el.hasClass ('enabled_submenu')) {
			self.close_leftbar ();
		}
		else if (el.hasClass ('enabled_submenu')) {
			LeftBarAuthUserLogin._close_menu ();
			LeftBarAuthUserNoLogin._close_menu ();
			AuthUser._close_menu ();
			self.open_leftbar ();
		}
		else if (el.hasClass ('enabled')) {
			self.close_leftbar ();
		}
		else {
			self.open_leftbar ();
		}
	});},
	get _close () {return function () {
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
		$ ('#phanterpwa-component-left_bar-main_button').removeClass ('enabled').removeClass ('enabled_submenu');
	};},
	get close_leftbar () {return __get__ (this, function (self) {
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
		AuthUser._close_menu ();
		self._close ();
		left_bar.LeftBar._close ();
	});},
	get _open () {return function () {
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
		$ ('#phanterpwa-component-left_bar-main_button').addClass ('enabled');
	};},
	get open_leftbar () {return __get__ (this, function (self) {
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
		self._open ();
		left_bar.LeftBar._open ();
	});}
});
export var LeftBar =  __class__ ('LeftBar', [left_bar.LeftBar], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, target_selector) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'target_selector': var target_selector = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		left_bar.LeftBar.__init__ (self, target_selector, __kwargtrans__ (parameters));
		self.add_button (LeftBarAuthUserLogin ());
		self.add_button (LeftBarAuthUserNoLogin ());
		self.add_button (left_bar.LeftBarButton ('home', I18N ('Home', __kwargtrans__ (dict ({'_pt-br': 'Principal'}))), I (__kwargtrans__ ({_class: 'fas fa-home'})), __kwargtrans__ (dict ({'tag': 'a', '_href': '#_phanterpwa:/home', 'position': 'top'}))));
	});}
});
export var LeftBarAuthUserLogin =  __class__ ('LeftBarAuthUserLogin', [left_bar.LeftBarUserMenu], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
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
		left_bar.LeftBarUserMenu.__init__ (self);
		self.position = 'top';
		self.addSubmenu ('profile', I18N ('Profile', __kwargtrans__ (dict ({'_pt-br': 'Perfil'}))), __kwargtrans__ (dict ({'_class': 'command_user', '_phanterpwa-way': 'profile'})));
		self.addSubmenu ('lock', I18N ('Lock', __kwargtrans__ (dict ({'_pt-br': 'Bloquear'}))), __kwargtrans__ (dict ({'_phanterpwa-way': 'lock', '_class': 'command_user'})));
		self.addSubmenu ('logout', I18N ('Logout', __kwargtrans__ (dict ({'_pt-br': 'Sair'}))), __kwargtrans__ ({_class: 'command_user'}));
	});},
	get switch_menu () {return __get__ (this, function (self) {
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
		var el = $ ('#phanterpwa-component-left_bar').find ('#phanterpwa-component-left_bar-menu_button-{0}'.format (self.identifier)).parent ();
		if (el.hasClass ('enabled')) {
			self.close_menu ();
		}
		else {
			self.open_menu ();
		}
	});},
	get _open_menu () {return function (self) {
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
		var element = $ ('#phanterpwa-component-left_bar').find ('#phanterpwa-component-left_bar-menu_button-auth_user_login').parent ();
		element.addClass ('enabled');
		$ ('#phanterpwa-component-left_bar').addClass ('enabled_submenu');
		$ ('#phanterpwa-component-left_bar-main_button').addClass ('enabled_submenu');
	};},
	get open_menu () {return __get__ (this, function (self) {
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
		AuthUser._open_menu ();
		self._open_menu ();
	});},
	get _close_menu () {return function (self) {
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
		var element = $ ('#phanterpwa-component-left_bar').find ('#phanterpwa-component-left_bar-menu_button-auth_user_login').parent ();
		element.removeClass ('enabled');
		if ($ ('#phanterpwa-component-left_bar').find ('.phanterpwa-component-left_bar-menu_button-wrapper.enabled').length == 0) {
			$ ('#phanterpwa-component-left_bar').removeClass ('enabled_submenu');
			$ ('#phanterpwa-component-left_bar-main_button').removeClass ('enabled_submenu');
		}
	};},
	get close_menu () {return __get__ (this, function (self) {
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
		AuthUser._close_menu ();
		self._close_menu ();
	});},
	get logout () {return __get__ (this, function (self) {
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
		window.PhanterPWA.logout ();
		self.start ();
		window.PhanterPWA.logout ();
		var LeftBar = window.PhanterPWA.Components ['left_bar'];
		if (LeftBar !== null && LeftBar !== undefined) {
			LeftBar.reload ();
		}
		window.PhanterPWA.Components ['auth_user'].start ();
	});},
	get start () {return __get__ (this, function (self) {
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
		var element = $ ('#phanterpwa-component-left_bar').find ('#phanterpwa-component-left_bar-menu_button-{0}'.format (self.identifier));
		element.off ('click.open_leftbar_menu').on ('click.open_leftbar_menu', (function __lambda__ () {
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
			return self.switch_menu (this);
		}));
		var sub_element = $ ('#phanterpwa-component-left_bar').find ('#phanterpwa-component-left_bar-submenu-from-{0} .phanterpwa-component-left_bar-submenu-button'.format (self.identifier));
		sub_element.off ('click.close_leftbar_submenu').on ('click.close_leftbar_submenu', (function __lambda__ () {
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
			return self.close_menu ();
		}));
		self.auth_user = window.PhanterPWA.get_auth_user ();
		var user_name = 'Anonymous';
		var role = I18N ('User');
		var user_image = window.PhanterPWA.get_auth_user_image ();
		if (self.auth_user !== null) {
			var first_name = self.auth_user.first_name;
			var last_name = self.auth_user.last_name;
			var user_name = '{0} {1}'.format (first_name, last_name);
			var role = I18N (self.auth_user.role);
		}
		if (element.find ('#phanterpwa-component-left_bar-url-imagem-user').attr ('src') != user_image) {
			element.find ('#phanterpwa-component-left_bar-url-imagem-user').attr ('src', user_image);
		}
		element.find ('#phanterpwa-component-left_bar-name-user').text (user_name);
		$ ('#phanterpwa-component-left_bar-submenu-button-logout').off ('click.left_bar_buton_logout').on ('click.left_bar_buton_logout', (function __lambda__ () {
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
			return self.logout ();
		}));
	});}
});
export var LeftBarAuthUserNoLogin =  __class__ ('LeftBarAuthUserNoLogin', [left_bar.LeftBarMenu], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
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
		left_bar.LeftBarMenu.__init__ (self, 'auth_user_no_login', I18N ('Start', __kwargtrans__ (dict ({'_pt-br': 'In??cio'}))), I (__kwargtrans__ ({_class: 'fas fa-user'})));
		self.attributes = dict (__kwargtrans__ ({_class: '{0} {1}'.format ('phanterpwa-component-left_bar-menu_button-wrapper-auth_user', 'phanterpwa-component-left_bar-menu_button-wrapper')}));
		self.addSubmenu ('login', I18N ('Login', __kwargtrans__ (dict ({'_pt-br': 'Logar-se'}))), __kwargtrans__ ({_class: 'command_user'}));
		self.addSubmenu ('register', I18N ('Create an account', __kwargtrans__ (dict ({'_pt-br': 'Criar Conta'}))), __kwargtrans__ ({_class: 'command_user'}));
		self.addSubmenu ('request_password', I18N ('Recover password', __kwargtrans__ (dict ({'_pt-br': 'Esqueci a Senha'}))), __kwargtrans__ ({_class: 'command_user'}));
		self.position = 'top';
		self.autorized_roles = ['anonymous'];
	});},
	get switch_menu () {return __get__ (this, function (self) {
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
		var el = $ ('#phanterpwa-component-left_bar').find ('#phanterpwa-component-left_bar-menu_button-auth_user_no_login').parent ();
		if (el.hasClass ('enabled')) {
			self.close_menu ();
		}
		else {
			self.open_menu ();
		}
	});},
	get _open_menu () {return function () {
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
		var element = $ ('#phanterpwa-component-left_bar').find ('#phanterpwa-component-left_bar-menu_button-auth_user_no_login').parent ();
		element.addClass ('enabled');
		$ ('#phanterpwa-component-left_bar').addClass ('enabled_submenu');
		$ ('#phanterpwa-component-left_bar-main_button').addClass ('enabled_submenu');
	};},
	get open_menu () {return __get__ (this, function (self) {
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
		AuthUser._open_menu ();
		self._open_menu ();
	});},
	get _close_menu () {return __get__ (this, function (self) {
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
		var element = $ ('#phanterpwa-component-left_bar').find ('#phanterpwa-component-left_bar-menu_button-auth_user_no_login').parent ();
		element.removeClass ('enabled');
		if ($ ('#phanterpwa-component-left_bar').find ('.phanterpwa-component-left_bar-menu_button-wrapper.enabled').length == 0) {
			$ ('#phanterpwa-component-left_bar').removeClass ('enabled_submenu');
			$ ('#phanterpwa-component-left_bar-main_button').removeClass ('enabled_submenu');
		}
	});},
	get close_menu () {return __get__ (this, function (self) {
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
		AuthUser._close_menu ();
		self._close_menu ();
	});},
	get close_all () {return __get__ (this, function (self) {
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
		AuthUser._close_menu ();
		LeftBarAuthUserLogin._close_menu ();
		LeftBarAuthUserNoLogin._close_menu ();
		LeftBarMainButton._close ();
		left_bar.LeftBar._close ();
	});},
	get modal_login () {return __get__ (this, function (self) {
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
		self.close_all ();
		self.Modal = ModalLogin ('#modal-container', __kwargtrans__ ({social_logins: window.PhanterPWA.social_login_list ()}));
		self.Modal.open ();
		forms.SignForm ('#form-login', __kwargtrans__ ({has_captcha: true, after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-login');
		})}));
	});},
	get modal_register () {return __get__ (this, function (self) {
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
		self.close_all ();
		self.Modal = ModalRegister ('#modal-container');
		self.Modal.open ();
		forms.SignForm ('#form-register', __kwargtrans__ ({has_captcha: true, after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-register');
		})}));
	});},
	get modal_request_password () {return __get__ (this, function (self) {
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
		self.close_all ();
		self.Modal = ModalRequestPassword ('#modal-container');
		self.Modal.open ();
		forms.SignForm ('#form-request_password', __kwargtrans__ ({has_captcha: true, after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-request_password');
		})}));
	});},
	get start () {return __get__ (this, function (self) {
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
		var element = $ ('#phanterpwa-component-left_bar').find ('#phanterpwa-component-left_bar-menu_button-{0}'.format (self.identifier));
		element.off ('click.open_leftbar_menu').on ('click.open_leftbar_menu', (function __lambda__ () {
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
			return self.switch_menu ();
		}));
		var sub_element = $ ('#phanterpwa-component-left_bar').find ('#phanterpwa-component-left_bar-submenu-from-{0} .phanterpwa-component-left_bar-submenu-button'.format (self.identifier));
		sub_element.off ('click.close_leftbar_submenu').on ('click.close_leftbar_submenu', (function __lambda__ () {
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
			return self.close_menu ();
		}));
		$ ('#phanterpwa-component-left_bar-submenu-button-login').off ('click.left_bar_login_button').on ('click.left_bar_login_button', (function __lambda__ () {
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
			return self.modal_login ();
		}));
		$ ('#phanterpwa-component-left_bar-submenu-button-register').off ('click.left_bar_register_button').on ('click.left_bar_register_button', (function __lambda__ () {
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
			return self.modal_register ();
		}));
		$ ('#phanterpwa-component-left_bar-submenu-button-request_password').off ('click.left_bar_request_btn').on ('click.left_bar_request_btn', (function __lambda__ () {
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
			return self.modal_request_password ();
		}));
	});}
});
export var Profile =  __class__ ('Profile', [gatehandler.Handler], {
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
		self.auth_user = window.PhanterPWA.get_last_auth_user ();
		var first_name = '';
		var last_name = '';
		var email = '';
		var locale = 'Automatic';
		var two_factor = false;
		var two_factor_represent = I (__kwargtrans__ ({_class: 'fas fa-times'}));
		var multiple_login = false;
		var multiple_login_represent = I (__kwargtrans__ ({_class: 'fas fa-times'}));
		if (self.auth_user !== null && self.auth_user !== undefined) {
			var first_name = self.auth_user.first_name;
			var last_name = self.auth_user.last_name;
			var email = self.auth_user.email;
			if (self.auth_user.locale !== null && self.auth_user.locale !== undefined) {
				var locale = self.auth_user.locale;
			}
			if (self.auth_user.two_factor !== null && self.auth_user.two_factor !== undefined) {
				var two_factor = self.auth_user.two_factor;
				if (two_factor) {
					var two_factor_represent = I (__kwargtrans__ ({_class: 'fas fa-check'}));
				}
			}
			if (self.auth_user.multiple_login !== null && self.auth_user.multiple_login !== undefined) {
				var multiple_login = self.auth_user.multiple_login;
				if (multiple_login) {
					var multiple_login_represent = I (__kwargtrans__ ({_class: 'fas fa-check'}));
				}
			}
		}
		var xml_content = CONCATENATE (DIV (DIV (DIV (DIV (I18N ('Profile', __kwargtrans__ (dict ({'_pt-br': 'Perfil'}))), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (XSECTION (LABEL (I18N ('Personal Information', __kwargtrans__ (dict ({'_pt-br': 'Informa????es Pessoais'})))), FORM (DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'text-align:center;'})), __kwargtrans__ ({_id: 'profile-image-user-container', _class: 'p-row'})), __kwargtrans__ ({_class: 'p-col w1p100 l4'})), DIV (DIV (DIV (STRONG (I18N ('First Name')), SPAN (first_name, __kwargtrans__ ({_id: 'phanterpwa-tagger-span-first_name'})), DIV (I (__kwargtrans__ ({_class: 'fas fa-pen'})), __kwargtrans__ ({_class: 'e-tagger-button e-link open-model-edit-personal_information'})), __kwargtrans__ ({_class: 'e-tagger-wrapper'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row'})), DIV (DIV (DIV (STRONG (I18N ('Last Name')), SPAN (last_name, __kwargtrans__ ({_id: 'phanterpwa-tagger-span-last_name'})), DIV (I (__kwargtrans__ ({_class: 'fas fa-pen'})), __kwargtrans__ ({_class: 'e-tagger-button e-link open-model-edit-personal_information'})), __kwargtrans__ ({_class: 'e-tagger-wrapper'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row'})), DIV (DIV (DIV (STRONG (I18N ('E-Mail')), SPAN (email, __kwargtrans__ ({_id: 'phanterpwa-tagger-span-email'})), DIV (I (__kwargtrans__ ({_class: 'fas fa-pen'})), __kwargtrans__ ({_class: 'e-tagger-button e-link open-model-edit-change_email'})), __kwargtrans__ ({_class: 'e-tagger-wrapper'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'e-padding_20'})), DIV (DIV (DIV (forms.FormWidget ('profile', 'first_name', __kwargtrans__ (dict ({'type': 'string', 'label': I18N ('First Name'), 'value': first_name, 'validators': ['IS_NOT_EMPTY'], '_class': 'p-col w1p100 w3p50'}))), forms.FormWidget ('profile', 'last_name', __kwargtrans__ (dict ({'type': 'string', 'label': I18N ('Last Name'), 'value': last_name, 'validators': ['IS_NOT_EMPTY'], '_class': 'p-col w1p100 w3p50'}))), forms.FormWidget ('profile', 'email', __kwargtrans__ (dict ({'type': 'string', 'label': I18N ('E-Mail'), 'value': email, 'validators': ['IS_EMAIL'], '_class': 'p-col w1p100'}))), forms.FormWidget ('profile', 'two_factor', __kwargtrans__ (dict ({'value': two_factor, 'label': I18N ('Two-step authentication', __kwargtrans__ (dict ({'_pt-br': 'Autentica????o em duas etapas'}))), 'type': 'boolean'}))), forms.FormWidget ('profile', 'multiple_login', __kwargtrans__ (dict ({'value': multiple_login, 'label': I18N ('Multiple logins', __kwargtrans__ (dict ({'_pt-br': 'M??ltiplos logins'}))), 'type': 'boolean'}))), __kwargtrans__ ({_class: 'p-row profile_inputs_container'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'e-padding_20 e-hidden'})), __kwargtrans__ (dict ({'_phanterpwa-form': 'profile', '_id': 'form-profile', '_class': 'p-row', '_autocomplete': 'off'})))), XSECTION (LABEL (I18N ('Segurity', __kwargtrans__ (dict ({'_pt-br': 'Seguran??a'})))), FORM (DIV (DIV (DIV (DIV (STRONG (I18N ('Two-step authentication')), SPAN (two_factor_represent, __kwargtrans__ ({_id: 'phanterpwa-tagger-span-two_factor'})), DIV (I (__kwargtrans__ ({_class: 'fas fa-pen'})), __kwargtrans__ ({_class: 'e-tagger-button e-link open-model-edit-two_factor'})), __kwargtrans__ ({_class: 'e-tagger-wrapper'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row'})), DIV (DIV (DIV (STRONG (I18N ('Password')), SPAN (I (__kwargtrans__ ({_class: 'fas fa-ellipsis-h', _style: 'margin-right: 1px;'})), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-h', _style: 'margin-right: 1px;'})), I (__kwargtrans__ ({_class: 'fas fa-ellipsis-h'})), __kwargtrans__ ({_id: 'phanterpwa-tagger-span-password'})), DIV (I (__kwargtrans__ ({_class: 'fas fa-pen'})), __kwargtrans__ ({_class: 'e-tagger-button e-link open-model-edit-password'})), __kwargtrans__ ({_class: 'e-tagger-wrapper'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row'})), DIV (DIV (DIV (STRONG (I18N ('Multiple logins')), SPAN (multiple_login_represent, __kwargtrans__ ({_id: 'phanterpwa-tagger-span-multiple_login'})), DIV (I (__kwargtrans__ ({_class: 'fas fa-pen'})), __kwargtrans__ ({_class: 'e-tagger-button e-link open-model-edit-multiple_login'})), __kwargtrans__ ({_class: 'e-tagger-wrapper'})), __kwargtrans__ ({_class: 'p-col w1p100'})), DIV (HR (), H2 (I18N ('Active sessions')), DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'text-align:center; overflow: hidden;'})), __kwargtrans__ ({_id: 'active_sessions_wrapper'})), __kwargtrans__ ({_class: 'p-col w1p100'})), DIV (HR (), H2 (I18N ('Your Activity')), DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'text-align:center; overflow: hidden;'})), __kwargtrans__ ({_id: 'user_activity_wrapper'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'e-padding_20'})), __kwargtrans__ (dict ({'_phanterpwa-form': 'security', '_id': 'form-security', '_class': 'p-row', '_autocomplete': 'off'})))), __kwargtrans__ ({_class: 'e-margin_bottom_20 phanterpwa-card-container e-padding_20 card'})), __kwargtrans__ ({_class: 'phanterpwa-container container'})));
		xml_content.html_to ('#main-container');
		self.reload ();
		self.get_active_sessions ();
		self.get_activity ();
	}));},
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
		if (ajax_status == 'success') {
			var json = data.responseJSON;
			var message = json.i18n.message;
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': message})));
			if (data.status == 200) {
				$ ('.phanterpwa-gallery-upload-input-file').val ('');
				var auth_user = json.auth_user;
				window.PhanterPWA.store_auth_user (auth_user);
				self.reload ();
			}
		}
		else {
			forms.SignForm ('#form-profile');
			var json = data.responseJSON;
			var message = json.i18n.message;
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': message})));
		}
	});},
	get get_active_sessions () {return __get__ (this, function (self) {
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
		window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'auth'], 'onComplete': self._active_sessions_xml})));
	});},
	get _active_sessions_xml () {return __get__ (this, function (self, data, ajax_status) {
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
			if (json.sessions !== null && json.sessions !== undefined) {
				var MyTable = Table ('session_table');
				var cont = 0;
				for (var x of json.sessions) {
					cont++;
					var date_created = new Date (x ['date_created']);
					var date_created = date_created.toLocaleDateString (window.PhanterPWA.I18N.load_storage (), dict ({'year': 'numeric', 'month': '2-digit', 'day': 'numeric'}));
					var identify = x ['identify'];
					if (x ['this_session']) {
						var agent = STRONG (x ['agent']);
						var date_created = STRONG (date_created);
						var remote_addr = STRONG (x ['remote_addr']);
						var this_session = DIV (STRONG (I18N ('This Session', __kwargtrans__ (dict ({'_pt-br': 'Esta sess??o'})))), __kwargtrans__ (__mergekwargtrans__ ({_class: 'btn'}, dict ({'_data-session_id': identify, '_disabled': 'disabled'}))));
					}
					else {
						var agent = x ['agent'];
						var date_created = date_created;
						var remote_addr = x ['remote_addr'];
						var this_session = DIV (I18N ('Cancel', __kwargtrans__ (dict ({'_pt-br': 'Cancelar'}))), __kwargtrans__ (__mergekwargtrans__ ({_class: 'phanterpwa_cancel_session e-link btn wave_on_click'}, dict ({'_data-session_id': identify}))));
					}
					MyTable.append (TableData ('data_{0}'.format (cont), agent, date_created, remote_addr, this_session, __kwargtrans__ ({drag_and_drop: false})));
				}
				MyTable.html_to ('#active_sessions_wrapper');
				$ ('.phanterpwa_cancel_session').off ('click.cancel_session').on ('click.cancel_session', (function __lambda__ () {
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
					return self.delete_session ($ (this).attr ('data-session_id'));
				}));
			}
		}
	});},
	get _after_delete_session () {return __get__ (this, function (self, data, ajax_status) {
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
			self._active_sessions_xml (data, ajax_status);
		}
		window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': json.i18n.message})));
	});},
	get delete_session () {return __get__ (this, function (self, identify) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identify': var identify = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		window.PhanterPWA.ApiServer.DELETE (__kwargtrans__ (dict ({'url_args': ['api', 'auth', identify], 'onComplete': self._after_delete_session})));
	});},
	get submit () {return __get__ (this, function (self) {
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
		var formdata = new FormData ($ ('#form-profile') [0]);
		window.PhanterPWA.ApiServer.PUT (__kwargtrans__ (dict ({'url_args': ['api', 'auth', 'change'], 'form_data': formdata, 'onComplete': self.after_submit})));
	});},
	get open_modal_change_password () {return __get__ (this, function (self) {
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
		window.PhanterPWA.Components ['auth_user'].modal_change_password ();
	});},
	get reload () {return __get__ (this, function (self) {
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
		forms.SignForm ('#form-profile');
		self.auth_user = window.PhanterPWA.get_last_auth_user ();
		var first_name = '';
		var last_name = '';
		var email = '';
		var user_image = window.PhanterPWA.get_last_auth_user_image ();
		if (self.auth_user !== null && self.auth_user !== undefined) {
			var first_name = self.auth_user.first_name;
			var last_name = self.auth_user.last_name;
			var email = self.auth_user.email;
		}
		self.GalleryInput = gallery.GalleryInput ('#profile-image-user-container', __kwargtrans__ (dict ({'cutter': true, 'current_image': user_image, 'afterCut': (function __lambda__ () {
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
			return self.submit ();
		})})));
		if (!($ ('#phanterpwa-component-left_bar-url-imagem-user').lenght == 0)) {
			$ ('#phanterpwa-component-left_bar-url-imagem-user').attr ('src', user_image);
		}
		$ ('#url_image_user').attr ('src', user_image);
		$ ('#phanterpwa-component-left_bar-url-imagem-user').attr ('src', user_image);
		$ ('#phanterpwa-widget-input-input-profile-first_name').val (first_name);
		$ ('#phanterpwa-widget-input-input-profile-last_name').val (last_name);
		$ ('#phanterpwa-widget-input-input-profile-email').val (email).trigger ('keyup');
		$ ('.open-model-edit-personal_information').off ('click.open-model-edit-personal_information').on ('click.open-model-edit-personal_information', (function __lambda__ () {
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
			return self.modal_personal_information ();
		}));
		$ ('.open-model-edit-change_email').off ('click.open-model-edit-change_email').on ('click.open-model-edit-change_email', (function __lambda__ () {
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
			return self.modal_change_email ();
		}));
		$ ('.open-model-edit-two_factor').off ('click.open-model-edit-two_factor').on ('click.open-model-edit-two_factor', (function __lambda__ () {
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
			return self.modal_change_two_factor ();
		}));
		$ ('.open-model-edit-multiple_login').off ('click.open-model-edit-multiple_login').on ('click.open-model-edit-multiple_login', (function __lambda__ () {
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
			return self.modal_change_multiple_login ();
		}));
		$ ('.open-model-edit-password').off ('click.open-model-edit-password').on ('click.open-model-edit-password', (function __lambda__ () {
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
			return self.open_modal_change_password ();
		}));
	});},
	get modal_personal_information () {return __get__ (this, function (self) {
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
		self.Modal = ModalPersonalInformation ('#modal-container', __kwargtrans__ ({hidden_fields: ['email', 'two_factor', 'multiple_login']}));
		self.Modal.open ();
		forms.SignForm ('#form-change_account', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-change_account');
		})}));
	});},
	get modal_change_email () {return __get__ (this, function (self) {
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
		self.Modal = ModalPersonalInformation ('#modal-container', __kwargtrans__ ({hidden_fields: ['first_name', 'last_name', 'two_factor', 'multiple_login']}));
		self.Modal.open ();
		forms.SignForm ('#form-change_account', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-change_account');
		})}));
	});},
	get modal_change_two_factor () {return __get__ (this, function (self) {
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
		self.Modal = ModalPersonalInformation ('#modal-container', __kwargtrans__ ({hidden_fields: ['first_name', 'last_name', 'email', 'multiple_login'], information: I18N (('When activated, upon login, a code will be sent to the' + ' registered email. The login will only be effective if the correct ') + 'code is added in the appropriate place.')}));
		self.Modal.open ();
		forms.SignForm ('#form-change_account', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-change_account');
		})}));
	});},
	get modal_change_multiple_login () {return __get__ (this, function (self) {
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
		self.Modal = ModalPersonalInformation ('#modal-container', __kwargtrans__ ({hidden_fields: ['first_name', 'last_name', 'email', 'two_factor'], information: I18N (('When enabled, it allows you to log in and stay logged' + ' in on several different devices. When deactivated, when you ') + 'log in to a certain device, you are automatically logged out of the others.')}));
		self.Modal.open ();
		forms.SignForm ('#form-change_account', __kwargtrans__ ({after_sign: (function __lambda__ () {
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
			return forms.ValidateForm ('#form-change_account');
		})}));
	});},
	get get_activity () {return __get__ (this, function (self) {
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
		window.PhanterPWA.GET ('api', 'auth', 'activity', __kwargtrans__ ({onComplete: self._after_get_activity}));
	});},
	get _after_get_activity () {return __get__ (this, function (self, data, ajax_status) {
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
			if (json.data !== null && json.data !== undefined) {
				var MyTable = Table ('activity_table');
				var cont = 0;
				for (var x of json.data) {
					cont++;
					var date_created = new Date (x.date_activity);
					var date_created = date_created.toLocaleDateString (window.PhanterPWA.I18N.load_storage (), dict ({'year': 'numeric', 'month': '2-digit', 'day': 'numeric'}));
					var activity = x.activity;
					MyTable.append (TableData ('data_activity_{0}'.format (x.id), date_created, activity, __kwargtrans__ ({drag_and_drop: false})));
				}
				MyTable.html_to ('#user_activity_wrapper');
			}
		}
	});}
});
export var Oauth =  __class__ ('Oauth', [gatehandler.Handler], {
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
		var xml_content = CONCATENATE (DIV (DIV (DIV (DIV ('Oauth', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (preloaders.android, __kwargtrans__ ({_style: 'width: 300px; height: 300px; overflow: hidden; margin: auto;'})), __kwargtrans__ ({_style: 'text-align:center; padding: 50px 0;'})), __kwargtrans__ ({_id: 'content-alunos', _class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		xml_content.html_to ('#main-container');
		if (arg0 !== null && arg1 !== null) {
			window.PhanterPWA.oauth (arg0, arg1);
		}
		else {
			window.PhanterPWA.open_way ('home');
		}
	});}
});
export var Lock =  __class__ ('Lock', [gatehandler.Handler], {
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
		var request = self.request;
		var last_way = request ['last_way'];
		if (last_way !== null && last_way !== undefined && last_way !== 'lock') {
			sessionStorage.setItem ('way_before_lock', last_way);
		}
		else {
			sessionStorage.setItem ('way_before_lock', window.PhanterPWA.default_way);
		}
		self.last_auth_user = window.PhanterPWA.get_last_auth_user ();
		self.last_auth_user_image = window.PhanterPWA.get_last_auth_user_image ();
		if (self.last_auth_user !== null) {
			window.PhanterPWA.ApiServer.GET (__kwargtrans__ (dict ({'url_args': ['api', 'auth', 'lock'], 'onComplete': self.after_confirm_lock})));
		}
		else {
			self.on_other_user_click ();
		}
	});},
	get on_other_user_click () {return __get__ (this, function (self) {
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
		$ ('body').removeClass ('phanterpwa-lock');
		localStorage.removeItem ('last_auth_user');
		localStorage.removeItem ('current_way');
		localStorage.removeItem ('way_before_lock');
		window.PhanterPWA.Components ['auth_user'].logout ();
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
		if (ajax_status == 'success') {
			var json = data.responseJSON;
			var authorization = json.authorization;
			var auth_user = json.auth_user;
			var client_token = json.client_token;
			var url_token = json.url_token;
			if (authorization !== undefined && auth_user !== undefined && client_token !== undefined) {
				localStorage.setItem ('phanterpwa-client-token', client_token);
				localStorage.setItem ('phanterpwa-url-token', url_token);
				if (auth_user ['remember_me'] === true) {
					localStorage.setItem ('phanterpwa-authorization', authorization);
					localStorage.setItem ('auth_user', JSON.stringify (auth_user));
					sessionStorage.removeItem ('phanterpwa-authorization');
					sessionStorage.removeItem ('auth_user');
				}
				else {
					sessionStorage.setItem ('phanterpwa-authorization', authorization);
					sessionStorage.setItem ('auth_user', JSON.stringify (auth_user));
					localStorage.removeItem ('phanterpwa-authorization');
					localStorage.removeItem ('auth_user');
				}
				localStorage.setItem ('last_auth_user', JSON.stringify (auth_user));
			}
			var way_before_lock = sessionStorage.getItem ('way_before_lock');
			if (way_before_lock !== null && way_before_lock !== undefined) {
				window.PhanterPWA.open_way (way_before_lock);
			}
			else {
				window.PhanterPWA.open_default_way ();
			}
			self.AuthUser = window.PhanterPWA.Components ['auth_user'];
			if (self.AuthUser !== null && self.AuthUser !== undefined) {
				self.AuthUser.start ();
				self.AuthUser.AlertActivationAccount.check_activation ();
			}
			var LeftBar = window.PhanterPWA.Components ['left_bar'];
			if (LeftBar !== null && LeftBar !== undefined) {
				LeftBar.reload ();
			}
			$ ('body').removeClass ('phanterpwa-lock');
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': json.i18n.message})));
		}
		else if (data.status == 400) {
			var json = data.responseJSON;
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': json.i18n.message})));
			forms.SignLockForm ();
			var errors = dict (json.i18n ['errors']);
			if (errors !== undefined) {
				for (var x of errors.py_keys ()) {
					var wg = window.PhanterPWA.get_widget ('login-{0}'.format (x));
					if (wg !== null) {
						wg.set_message_error (SPAN (errors [x]).xml ());
					}
				}
			}
		}
	});},
	get submit () {return __get__ (this, function (self) {
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
		$ ('#user_locked .phanterpwa-materialize-input-error').removeClass ('enabled').text ('');
		var formdata = new FormData ();
		formdata.append ('csrf_token', $ ('#form-lock #phanterpwa-widget-input-input-lock-csrf_token').val ());
		var login_password = '{0}:{1}'.format (window.btoa ($ ('#form-lock #phanterpwa-widget-input-input-lock-email').val ()), window.btoa ($ ('#form-lock #phanterpwa-widget-input-input-lock-password').val ()));
		formdata.append ('edata', login_password);
		var remember_me = false;
		if ($ ('#form-lock #phanterpwa-widget-checkbox-input-lock-remember_me').prop ('checked')) {
			var remember_me = true;
		}
		formdata.append ($ ('#form-lock #phanterpwa-widget-checkbox-input-lock-remember_me').attr ('name'), remember_me);
		window.PhanterPWA.ApiServer.POST (__kwargtrans__ (dict ({'url_args': ['api', 'auth'], 'form_data': formdata, 'onComplete': self.after_submit})));
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
		forms.SignLockForm ();
		$ ('#phanterpwa-widget-form-form_button-other').off ('click.other_user_unlock').on ('click.other_user_unlock', self.on_other_user_click);
		$ ('#phanterpwa-widget-form-submit_button-lock').off ('click.login_user_unlock').on ('click.login_user_unlock', self.submit);
	});},
	get after_confirm_lock () {return __get__ (this, function (self, data, ajax_status) {
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
			var html = CONCATENATE (DIV (DIV (DIV (DIV (I18N ('Locked', __kwargtrans__ (dict ({'_pt-br': 'Bloqueado'}))), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (DIV (FORM (DIV (DIV (DIV (DIV (IMG (__kwargtrans__ ({_id: 'form-lock-image-user-url'})), __kwargtrans__ ({_class: 'form-image-user-img'})), __kwargtrans__ ({_class: 'form-image-user-img-container'})), DIV (DIV (__kwargtrans__ ({_id: 'form-lock-profile-user-name', _class: 'form-profile-user-name'})), DIV (__kwargtrans__ ({_id: 'form-lock-profile-user-role', _class: 'form-profile-user-role'})), __kwargtrans__ ({_class: 'form-profile-user-info'})), __kwargtrans__ ({_class: 'form-profile-container'})), __kwargtrans__ ({_id: 'form-lock-image-user-container', _class: 'form-image-user-container'})), forms.FormWidget ('lock', 'email', __kwargtrans__ (dict ({'type': 'string', 'label': I18N ('E-mail'), 'validators': ['IS_NOT_EMPTY', 'IS_EMAIL'], '_class': 'e-display_hidden'}))), DIV (forms.FormWidget ('lock', 'password', __kwargtrans__ (dict ({'label': I18N ('Password', __kwargtrans__ (dict ({'_pt-br': 'Senha'}))), 'type': 'password', 'validators': ['IS_NOT_EMPTY']}))), __kwargtrans__ ({_class: 'p-col w1p100'})), DIV (forms.FormWidget ('lock', 'remember_me', __kwargtrans__ (dict ({'label': I18N ('Remember-me', __kwargtrans__ (dict ({'_pt-br': 'Lembre-me'}))), 'type': 'boolean'}))), __kwargtrans__ ({_class: 'input-field p-col w1p100'})), DIV (DIV (forms.SubmitButton ('lock', I18N ('Unlock', __kwargtrans__ (dict ({'_pt-br': 'Desbloquear'}))), __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), forms.FormButton ('other', I18N ('Use other account', __kwargtrans__ (dict ({'_pt-br': 'Usar outra conta'}))), __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'})), __kwargtrans__ ({_class: 'input-field p-col w1p100'})), __kwargtrans__ (dict ({'_phanterpwa-form': 'lock', '_id': 'form-lock', '_class': 'p-row', '_autocomplete': 'off'}))), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ ({_class: 'p-row'})), __kwargtrans__ ({_class: 'lock-container'})), __kwargtrans__ ({_class: 'card'})), __kwargtrans__ ({_class: 'container'})));
			sessionStorage.removeItem ('phanterpwa-authorization');
			sessionStorage.removeItem ('auth_user');
			localStorage.removeItem ('phanterpwa-authorization');
			localStorage.removeItem ('auth_user');
			$ ('body').addClass ('phanterpwa-lock');
			html.html_to ('#main-container');
			$ ('#form-lock #phanterpwa-widget-input-input-lock-email').val (self.last_auth_user.email);
			if (self.last_auth_user.remember_me) {
				PhanterPWA.Request.widgets ['lock-remember_me'].set_value (true);
			}
			$ ('#form-lock-profile-user-name').text ('{0} {1}'.format (self.last_auth_user ['first_name'], self.last_auth_user ['last_name']));
			$ ('#form-lock-profile-user-role').text (self.last_auth_user ['role']);
			$ ('#form-lock-image-user-url').attr ('src', self.last_auth_user_image);
			self.binds ();
		}
		else {
			self.on_other_user_click ();
		}
		var json = data.responseJSON;
		window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': json.i18n.message})));
	});}
});
export var TwoFactor =  __class__ ('TwoFactor', [gatehandler.Handler], {
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
		self._authorization_url_two_factor = self._request.get_arg (0);
		var AuthUserCmp = window.PhanterPWA.Components ['auth_user'];
		self.AuthUser = null;
		if (AuthUserCmp !== null && AuthUserCmp !== undefined && !(isinstance (AuthUserCmp, AuthUser))) {
			console.error ('Need AuthUser instance on window.PhanterPWA.Components');
		}
		else {
			self.AuthUser = AuthUserCmp;
		}
		var last_way = self._request ['last_way'];
		if (last_way !== null && last_way !== undefined && !(last_way.startswith ('two_factor'))) {
			self.way_before_two_factor = last_way;
		}
		else {
			self.way_before_two_factor = window.PhanterPWA.default_way;
		}
		self.start ();
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
		if (ajax_status == 'success') {
			var json = data.responseJSON;
			self.AuthUser.start ();
			self.AuthUser.AlertActivationAccount.check_activation ();
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': json.i18n.message})));
			var LeftBar = window.PhanterPWA.Components ['left_bar'];
			if (LeftBar !== null && LeftBar !== undefined) {
				LeftBar.reload ();
			}
			window.PhanterPWA.open_way (self.way_before_two_factor);
		}
	});},
	get submit () {return __get__ (this, function (self) {
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
		window.PhanterPWA.two_factor (self._authorization_url_two_factor, $ ('#phanterpwa-widget-input-input-confirmation-code-code').val (), __kwargtrans__ ({callback: self.after_submit}));
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
		forms.ValidateForm ('#form-confirmation-code');
		$ ('#phanterpwa-widget-form-submit_button-confirmation-code').off ('click.confirmation-code_button_save').on ('click.confirmation-code_button_save', self.submit);
	});},
	get reload () {return __get__ (this, function (self) {
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
		self.start ();
	});},
	get start () {return __get__ (this, function (self) {
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
		var xml_content = CONCATENATE (DIV (DIV (DIV (DIV (I18N ('Two Factor Authentication', __kwargtrans__ (dict ({'_pt-br': 'Autentica????o de duas etapas'}))), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (FORM (H2 (I18N ('Login Confirmation Code', __kwargtrans__ (dict ({'_pt-br': 'C??digo de confirma????o do login'})))), P (I18N ('The two-factor confirmation code has ', 'been sent to your email, add it below and confirm.', __kwargtrans__ (dict ({'_pt-br': 'Um c??digo de confirma????o foi enviado ao seu email, digite-o abaixo e confirme'})))), DIV (DIV (forms.FormWidget ('confirmation-code', 'code', __kwargtrans__ (dict ({'type': 'string', 'label': I18N ('Confirmation code', __kwargtrans__ (dict ({'_pt-br': 'C??digo de Confirma????o'}))), 'validators': ['IS_NOT_EMPTY', 'IS_ACTIVATION_CODE'], '_class': 'p-col w1p100'}))), __kwargtrans__ ({_class: 'p-row profile_inputs_container'})), DIV (forms.SubmitButton ('confirmation-code', I18N ('Confirm', __kwargtrans__ (dict ({'_pt-br': 'Confirmar'}))), __kwargtrans__ ({_class: 'btn-autoresize wave_on_click waves-phanterpwa'})), __kwargtrans__ ({_class: 'phanterpwa-form-buttons-container'})), __kwargtrans__ ({_class: 'p-col w1p100'})), __kwargtrans__ (dict ({'_phanterpwa-form': 'confirmation-code', '_id': 'form-confirmation-code', '_class': 'p-row', '_autocomplete': 'off'}))), __kwargtrans__ ({_class: 'e-margin_bottom_20 phanterpwa-card-container e-padding_20 card'})), __kwargtrans__ ({_class: 'phanterpwa-container container'})));
		xml_content.html_to ('#main-container');
		self.binds ();
	});}
});

//# sourceMappingURL=phanterpwa.frontend.components.auth_user.map