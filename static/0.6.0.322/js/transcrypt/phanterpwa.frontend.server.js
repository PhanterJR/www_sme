// Transcrypt'ed from Python, 2022-04-05 08:18:01
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
var __name__ = 'phanterpwa.frontend.server';
export var I18N = helpers.I18N;
export var ApiServer =  __class__ ('ApiServer', [object], {
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
		self.remote_address = window.PhanterPWA.CONFIG ['APP'] ['http_address'];
	});},
	get _process_args () {return function (args) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'args': var args = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var s_args = '';
		var ISINSTANCEOF = args instanceof Array
		if (isinstance (args, list) || ISINSTANCEOF) {
			var s_args = '/'.join (args);
		}
		if (s_args != '') {
			var s_args = '{0}/'.format (s_args);
		}
		return s_args;
	};},
	get _process_parameters () {return function (parameters) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'parameters': var parameters = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var _vars = dict ();
		for (var x of parameters.py_keys ()) {
			if (x == '_') {
				_vars [x] = parameters [x];
			}
			else if (x.startswith ('_') && len (x) > 1) {
				_vars [x.__getslice__ (1, null, 1)] = parameters [x];
			}
		}
		if (len (_vars.py_keys ()) > 0) {
			return _vars;
		}
		else {
			return parameters.py_get ('url_vars', null);
		}
	};},
	get _serialize_vars () {return function (_vars) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case '_vars': var _vars = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var ISTYPEOF = _vars instanceof FormData
		if (_vars === null || _vars === undefined) {
			return '';
		}
		else if (ISTYPEOF) {
			return '';
		}
		else if (isinstance (_vars, dict)) {
			var jsdict = {};
			var has_value = false;
			for (var x of _vars.py_keys ()) {
				var has_value = true;
				if (_vars [x] !== null && _vars [x] !== undefined) {
					jsdict [x] = _vars [x];
				}
			}
			if (has_value) {
				return '?{0}'.format ($.param (jsdict));
			}
			else {
				return '';
			}
		}
		else {
			var t = $.param (_vars);
			if (t !== null || t !== undefined) {
				return '?{0}'.format (t);
			}
			else {
				return '';
			}
		}
	};},
	get GET () {return __get__ (this, function (self) {
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
			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var args = tuple ();
		}
		var url_vars = null;
		var onComplete = null;
		var headers = dict ({'Cache-Control': 'no-store, must-revalidate, no-cache, max-age=0', 'phanterpwa-application': window.PhanterPWA.CONFIG ['PROJECT'] ['name'], 'phanterpwa-application-version': window.PhanterPWA.CONFIG ['PROJECT'] ['version']});
		var reload_phanterpwa = parameters.py_get ('reload', true);
		var url_args = parameters.py_get ('url_args', null);
		if (len (args) > 0) {
			var url_args = args;
		}
		var url_vars = self._process_parameters (parameters);
		var onComplete = parameters.py_get ('onComplete', (function __lambda__ () {
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
			return (window.PhanterPWA.DEBUG ? console.info ('GET') : '');
		}));
		var onError = parameters.py_get ('onError', null);
		if (__in__ ('headers', parameters)) {
			if (parameters ['headers'] !== null) {
				for (var x of parameters ['headers']) {
					headers [x] = parameters ['headers'] [x];
				}
			}
		}
		var date_stamp = new Date ().getTime ();
		window.PhanterPWA.ProgressBar.addEventProgressBar ('GET_' + date_stamp);
		var client_token = localStorage.getItem ('phanterpwa-client-token');
		var authorization = sessionStorage.getItem ('phanterpwa-authorization');
		var all_args = self._process_args (url_args);
		var all_vars = self._serialize_vars (url_vars);
		var current_uri = '/{0}{1}'.format (all_args, all_vars);
		var url = '{0}{1}'.format (self.remote_address, current_uri);
		if (__in__ ('get_cache', parameters)) {
			if (callable (parameters ['get_cache'])) {
				var get_cache = parameters ['get_cache'];
				if (__in__ (current_uri, window.PhanterPWA.Cache)) {
					get_cache (window.PhanterPWA.Cache [current_uri]);
				}
			}
		}
		var _after_sucess = function (data) {
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
			var data_hash = data.hash;
			var data_uri = data.uri;
			if (data_hash !== undefined && data_uri !== undefined) {
				if (!__in__ (data_uri, window.PhanterPWA.Cache)) {
					window.PhanterPWA.Cache [data_uri] = data;
				}
				else if (data_hash != window.PhanterPWA.Cache [data_uri].hash) {
					window.PhanterPWA.Cache [data_uri] = data;
				}
			}
			window.PhanterPWA.ProgressBar.removeEventProgressBar ('GET_' + date_stamp);
		};
		var _after_error = function (data, ajax_status) {
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
			window.PhanterPWA.ProgressBar.removeEventProgressBar ('GET_' + date_stamp);
			self.on_ajax_error (data, ajax_status, onError);
		};
		var ajax_param = {'url': url, 'type': 'GET', 'complete': (function __lambda__ (a, b, c) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'a': var a = __allkwargs0__ [__attrib0__]; break;
							case 'b': var b = __allkwargs0__ [__attrib0__]; break;
							case 'c': var c = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return tuple ([onComplete (a, b, c), (reload_phanterpwa ? window.PhanterPWA.reload () : null)]);
		}), 'success': _after_sucess, 'error': _after_error, 'datatype': 'json', 'crossDomain': true, 'headers': headers};
		if (client_token !== null) {
			ajax_param ['headers'] ['phanterpwa-client-token'] = client_token;
		}
		if (authorization !== null && authorization !== undefined) {
			ajax_param ['headers'] ['phanterpwa-authorization'] = authorization;
		}
		else {
			var authorization = localStorage.getItem ('phanterpwa-authorization');
			if (authorization !== null && authorization !== undefined) {
				ajax_param ['headers'] ['phanterpwa-authorization'] = authorization;
			}
		}
		$.ajax (ajax_param);
	});},
	get DELETE () {return __get__ (this, function (self) {
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
			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var args = tuple ();
		}
		var url_vars = null;
		var onComplete = null;
		var headers = dict ({'Cache-Control': 'no-store, must-revalidate, no-cache, max-age=0', 'phanterpwa-application': window.PhanterPWA.CONFIG ['PROJECT'] ['name'], 'phanterpwa-application-version': window.PhanterPWA.CONFIG ['PROJECT'] ['version']});
		var reload_phanterpwa = parameters.py_get ('reload', true);
		var url_args = parameters.py_get ('url_args', null);
		if (len (args) > 0) {
			var url_args = args;
		}
		var url_vars = self._process_parameters (parameters);
		var onComplete = parameters.py_get ('onComplete', (function __lambda__ () {
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
			return (window.PhanterPWA.DEBUG ? console.info ('DELETE') : '');
		}));
		var onError = parameters.py_get ('onError', null);
		if (__in__ ('headers', parameters)) {
			if (parameters ['headers'] !== null) {
				for (var x of parameters ['headers']) {
					headers [x] = parameters ['headers'] [x];
				}
			}
		}
		var date_stamp = new Date ().getTime ();
		window.PhanterPWA.ProgressBar.addEventProgressBar ('DELETE_' + date_stamp);
		var client_token = localStorage.getItem ('phanterpwa-client-token');
		var authorization = sessionStorage.getItem ('phanterpwa-authorization');
		var url = '{0}/{1}{2}'.format (self.remote_address, self._process_args (url_args), self._serialize_vars (url_vars));
		var _after_error = function (data, ajax_status) {
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
			window.PhanterPWA.ProgressBar.removeEventProgressBar ('DELETE_' + date_stamp);
			self.on_ajax_error (data, ajax_status, onError);
		};
		var ajax_param = {'url': url, 'type': 'DELETE', 'complete': (function __lambda__ (a, b, c) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'a': var a = __allkwargs0__ [__attrib0__]; break;
							case 'b': var b = __allkwargs0__ [__attrib0__]; break;
							case 'c': var c = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return tuple ([onComplete (a, b, c), (reload_phanterpwa ? window.PhanterPWA.reload () : null)]);
		}), 'success': (function __lambda__ () {
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
			return window.PhanterPWA.ProgressBar.removeEventProgressBar ('DELETE_' + date_stamp);
		}), 'error': _after_error, 'datatype': 'json', 'crossDomain': true, 'headers': headers};
		if (client_token !== null) {
			ajax_param ['headers'] ['phanterpwa-client-token'] = client_token;
		}
		if (authorization !== null && authorization !== undefined) {
			ajax_param ['headers'] ['phanterpwa-authorization'] = authorization;
		}
		else {
			var authorization = localStorage.getItem ('phanterpwa-authorization');
			if (authorization !== null && authorization !== undefined) {
				ajax_param ['headers'] ['phanterpwa-authorization'] = authorization;
			}
		}
		$.ajax (ajax_param);
	});},
	get POST () {return __get__ (this, function (self) {
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
			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var args = tuple ();
		}
		var form_data = null;
		var onComplete = null;
		var headers = dict ({'Cache-Control': 'no-store, must-revalidate, no-cache, max-age=0', 'phanterpwa-application': window.PhanterPWA.CONFIG ['PROJECT'] ['name'], 'phanterpwa-application-version': window.PhanterPWA.CONFIG ['PROJECT'] ['version']});
		var reload_phanterpwa = parameters.py_get ('reload', true);
		var url_args = parameters.py_get ('url_args', null);
		if (len (args) > 0) {
			var url_args = args;
		}
		if (__in__ ('form_data', parameters)) {
			var form_data = parameters ['form_data'];
		}
		var onComplete = parameters.py_get ('onComplete', (function __lambda__ () {
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
			return (window.PhanterPWA.DEBUG ? console.info ('POST') : '');
		}));
		var onError = parameters.py_get ('onError', null);
		if (__in__ ('headers', parameters)) {
			if (parameters ['headers'] !== null) {
				for (var x of parameters ['headers']) {
					headers [x] = parameters ['headers'] [x];
				}
			}
		}
		var date_stamp = new Date ().getTime ();
		window.PhanterPWA.ProgressBar.addEventProgressBar ('POST_' + date_stamp);
		var client_token = localStorage.getItem ('phanterpwa-client-token');
		var authorization = sessionStorage.getItem ('phanterpwa-authorization');
		var url = '{0}/{1}'.format (self.remote_address, self._process_args (url_args));
		var _after_error = function (data, ajax_status) {
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
			window.PhanterPWA.ProgressBar.removeEventProgressBar ('POST_' + date_stamp);
			self.on_ajax_error (data, ajax_status, onError);
		};
		var ajax_param = {'url': url, 'type': 'POST', 'data': form_data, 'complete': (function __lambda__ (a, b, c) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'a': var a = __allkwargs0__ [__attrib0__]; break;
							case 'b': var b = __allkwargs0__ [__attrib0__]; break;
							case 'c': var c = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return tuple ([onComplete (a, b, c), (reload_phanterpwa ? window.PhanterPWA.reload () : null)]);
		}), 'success': (function __lambda__ () {
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
			return window.PhanterPWA.ProgressBar.removeEventProgressBar ('POST_' + date_stamp);
		}), 'error': _after_error, 'datatype': 'json', 'crossDomain': true, 'headers': headers};
		if (client_token !== null) {
			ajax_param ['headers'] ['phanterpwa-client-token'] = client_token;
		}
		if (authorization !== null && authorization !== undefined) {
			ajax_param ['headers'] ['phanterpwa-authorization'] = authorization;
		}
		else {
			var authorization = localStorage.getItem ('phanterpwa-authorization');
			if (authorization !== null && authorization !== undefined) {
				ajax_param ['headers'] ['phanterpwa-authorization'] = authorization;
			}
		}
		var ISTYPEOF = form_data instanceof FormData
		if (ISTYPEOF) {
			ajax_param ['processData'] = false;
			ajax_param ['contentType'] = false;
		}
		$.ajax (ajax_param);
	});},
	get PUT () {return __get__ (this, function (self) {
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
			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var args = tuple ();
		}
		var form_data = null;
		var onComplete = null;
		var headers = dict ({'Cache-Control': 'no-store, must-revalidate, no-cache, max-age=0', 'phanterpwa-application': window.PhanterPWA.CONFIG ['PROJECT'] ['name'], 'phanterpwa-application-version': window.PhanterPWA.CONFIG ['PROJECT'] ['version']});
		var reload_phanterpwa = parameters.py_get ('reload', true);
		var url_args = parameters.py_get ('url_args', null);
		if (len (args) > 0) {
			var url_args = args;
		}
		if (__in__ ('form_data', parameters)) {
			var form_data = parameters ['form_data'];
		}
		var onComplete = parameters.py_get ('onComplete', (function __lambda__ () {
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
			return (window.PhanterPWA.DEBUG ? console.info ('PUT') : '');
		}));
		var onError = parameters.py_get ('onError', null);
		if (__in__ ('headers', parameters)) {
			if (parameters ['headers'] !== null) {
				for (var x of parameters ['headers']) {
					headers [x] = parameters ['headers'] [x];
				}
			}
		}
		var date_stamp = new Date ().getTime ();
		window.PhanterPWA.ProgressBar.addEventProgressBar ('PUT_' + date_stamp);
		var client_token = localStorage.getItem ('phanterpwa-client-token');
		var authorization = sessionStorage.getItem ('phanterpwa-authorization');
		var url = '{0}/{1}'.format (self.remote_address, self._process_args (url_args));
		var _after_error = function (data, ajax_status) {
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
			window.PhanterPWA.ProgressBar.removeEventProgressBar ('PUT_' + date_stamp);
			self.on_ajax_error (data, ajax_status, onError);
		};
		var ajax_param = {'url': url, 'type': 'PUT', 'data': form_data, 'complete': (function __lambda__ (a, b, c) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'a': var a = __allkwargs0__ [__attrib0__]; break;
							case 'b': var b = __allkwargs0__ [__attrib0__]; break;
							case 'c': var c = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return tuple ([onComplete (a, b, c), (reload_phanterpwa ? window.PhanterPWA.reload () : null)]);
		}), 'success': (function __lambda__ () {
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
			return window.PhanterPWA.ProgressBar.removeEventProgressBar ('PUT_' + date_stamp);
		}), 'error': _after_error, 'datatype': 'json', 'crossDomain': true, 'headers': headers};
		if (client_token !== null) {
			ajax_param ['headers'] ['phanterpwa-client-token'] = client_token;
		}
		if (authorization !== null && authorization !== undefined) {
			ajax_param ['headers'] ['phanterpwa-authorization'] = authorization;
		}
		else {
			var authorization = localStorage.getItem ('phanterpwa-authorization');
			if (authorization !== null && authorization !== undefined) {
				ajax_param ['headers'] ['phanterpwa-authorization'] = authorization;
			}
		}
		var ISTYPEOF = form_data instanceof FormData
		if (ISTYPEOF) {
			ajax_param ['processData'] = false;
			ajax_param ['contentType'] = false;
		}
		$.ajax (ajax_param);
	});},
	get getClientToken () {return __get__ (this, function (self, callback) {
		if (typeof callback == 'undefined' || (callback != null && callback.hasOwnProperty ("__kwargtrans__"))) {;
			var callback = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'callback': var callback = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var onComplete = function (data, ajax_status) {
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
			if (ajax_status == 'success') {
				var auth_user = data.responseJSON.auth_user;
				if (auth_user == 'anonymous' || auth_user == 'logout') {
					sessionStorage.removeItem ('phanterpwa-authorization');
					sessionStorage.removeItem ('auth_user');
					localStorage.removeItem ('phanterpwa-authorization');
					localStorage.removeItem ('auth_user');
				}
				var client_token = data.responseJSON.client_token;
				var url_token = data.responseJSON.url_token;
				if (url_token !== undefined) {
					localStorage.setItem ('phanterpwa-url-token', url_token);
				}
				if (client_token !== undefined) {
					localStorage.setItem ('phanterpwa-client-token', client_token);
					if (callback !== null && callback !== undefined) {
						callback (data, ajax_status);
					}
				}
			}
			else if (data.status == 0) {
				console.info ('Server Problem!');
			}
			else if (data.status == 400) {
				sessionStorage.clear ();
				localStorage.clear ();
			}
		};
		var client_token = localStorage.getItem ('phanterpwa-client-token');
		var session_authorization = sessionStorage.getItem ('phanterpwa-authorization');
		if (client_token === null || client_token === undefined) {
			sessionStorage.removeItem ('phanterpwa-authorization');
			sessionStorage.removeItem ('auth_user');
		}
		if (session_authorization === null || session_authorization === undefined) {
			var local_authorization = localStorage.getItem ('phanterpwa-authorization');
			if (local_authorization === null || local_authorization === undefined) {
				sessionStorage.removeItem ('phanterpwa-authorization');
				sessionStorage.removeItem ('auth_user');
				localStorage.removeItem ('phanterpwa-authorization');
				localStorage.removeItem ('auth_user');
			}
		}
		return self.GET (__kwargtrans__ (dict ({'url_args': ['api', 'client'], 'onComplete': onComplete})));
	});},
	get reSignCredentials () {return __get__ (this, function (self) {
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
		var date_stamp = new Date ().getTime ();
		var last_resing = sessionStorage.getItem ('last_resing');
		var authorization = sessionStorage.getItem ('phanterpwa-authorization');
		var auth_user = sessionStorage.getItem ('auth_user');
		if (auth_user === null || auth_user === undefined) {
			var auth_user = localStorage.getItem ('auth_user');
		}
		var lets_go_resign = false;
		if (last_resing !== null && last_resing !== undefined) {
			var timeout_last_resign = window.PhanterPWA.CONFIG ['CONFIGJS'] ['timeout_to_resign'] * 1000;
			if (int (last_resing) + int (timeout_last_resign) < int (date_stamp)) {
				var lets_go_resign = true;
				sessionStorage.setItem ('last_resing', date_stamp);
			}
		}
		else {
			sessionStorage.setItem ('last_resing', date_stamp);
			var lets_go_resign = true;
		}
		var onComplete = function (data, ajax_status) {
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
			var json = data.responseJSON;
			if (ajax_status == 'success') {
				if (json.url_token !== null && json.url_token !== undefined) {
					localStorage.setItem ('phanterpwa-url-token', json.url_token);
				}
				if (json.client_token !== null && json.client_token !== undefined) {
					localStorage.setItem ('phanterpwa-client-token', json.client_token);
				}
				if (json.authorization !== null && json.authorization !== undefined) {
					if (auth_user ['remember_me'] === true) {
						localStorage.setItem ('phanterpwa-authorization', json.authorization);
					}
					else {
						localStorage.setItem ('phanterpwa-authorization', json.authorization);
					}
				}
			}
		};
		if (lets_go_resign && authorization !== null && authorization !== undefined) {
			if (auth_user !== null && auth_user !== undefined) {
				self.GET (__kwargtrans__ (dict ({'url_args': ['api', 'resigncredentials'], 'url_vars': dict ({'_': date_stamp}), 'onComplete': onComplete})));
			}
		}
	});},
	get on_ajax_error () {return __get__ (this, function (self, data, status, onError) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
						case 'status': var status = __allkwargs0__ [__attrib0__]; break;
						case 'onError': var onError = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var json = data.responseJSON;
		var message = I18N ('Unexpected error!', __kwargtrans__ (dict ({'_pt-br': 'Erro inesperado!'})));
		var reasons = null;
		if (json !== null && json !== undefined) {
			if (json.i18n !== null && json.i18n !== undefined) {
				if (json.i18n.message !== null && json.i18n !== undefined) {
					var message = json.i18n.message;
				}
				if (json.i18n.reasons !== null && json.i18n !== undefined) {
					var reasons = json.i18n.reasons;
				}
			}
			else {
				if (json.message !== null && json.message !== undefined) {
					var message = json.message;
				}
				if (json.reasons !== null && json.reasons !== undefined) {
					var reasons = json.reasons;
				}
			}
		}
		if (data.status == 401 || data.status == 403) {
			if (window.PhanterPWA.logged ()) {
				if (data.status == 401) {
					if (json.specification == 'client deleted') {
						self.getClientToken (__kwargtrans__ ({callback: (function __lambda__ () {
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
							return tuple ([window.PhanterPWA.reload_component ('auth_user'), window.PhanterPWA.reload_component ('left_bar')]);
						})}));
					}
				}
				window.PhanterPWA.open_code_way (data.status, window.PhanterPWA.Request, window.PhanterPWA.Response, reasons);
			}
		}
		else if (callable (onError)) {
			onError (data, status);
		}
		else {
			window.PhanterPWA.flash (__kwargtrans__ (dict ({'html': message})));
		}
	});}
});

//# sourceMappingURL=phanterpwa.frontend.server.map