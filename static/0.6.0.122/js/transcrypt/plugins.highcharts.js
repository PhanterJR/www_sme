// Transcrypt'ed from Python, 2021-11-08 00:54:15
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as widgets from './phanterpwa.frontend.components.widgets.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
var __name__ = 'plugins.highcharts';
export var DIV = helpers.XmlConstructor.tagger ('div');
export var Pie =  __class__ ('Pie', [widgets.Widget], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, identifier) {
		var parameters = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'identifier': var identifier = __allkwargs0__ [__attrib0__]; break;
						default: parameters [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete parameters.__kwargtrans__;
			}
		}
		else {
		}
		self.code_mirror_parameters = dict ();
		for (var x of parameters.py_keys ()) {
			if (!(x.startswith ('_'))) {
				self.code_mirror_parameters [x] = parameters [x];
			}
		}
		parameters ['_id'] = identifier;
		if (__in__ ('_class', parameters)) {
			parameters ['_class'] = '{0}{1}'.format (parameters ['_class'].strip (), ' phanterpwa-plugin-highcharts-pie');
		}
		else {
			parameters ['_class'] = 'phanterpwa-plugin-highcharts-pie';
		}
		self.title = parameters.py_get ('title', '');
		self.showLegend = parameters.py_get ('showLegend', true);
		self.showLabels = parameters.py_get ('showLabels', false);
		self.series_name = parameters.py_get ('series_name', null);
		if (self.series_name === null) {
			self.series_name = 'Total';
		}
		self.pointFormat = parameters.py_get ('pointFormat', '{series.name} (%): <b>{point.y} ({point.percentage:.1f}%)</b>');
		self._chart_target = window.PhanterPWA.get_id (identifier);
		self._series = parameters.py_get ('series', []);
		var html = DIV (__kwargtrans__ ({_id: self._chart_target, _class: 'phanterpwa-plugin-highcharts-wrapper'}));
		widgets.Widget.__init__ (self, identifier, html, __kwargtrans__ (parameters));
	});},
	get _series_validator () {return __get__ (this, function (self) {
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
		var new_serie = dict ({});
		var ordem = [];
		var maior = 0;
		var key_maior = '';
		for (var x of self._series) {
			var field = x ['field'];
			if (!__in__ (field, ordem)) {
				ordem.append (field);
				var value = float (x ['value']);
				new_serie [field] = dict ({'name': field, 'y': value});
				if (__in__ ('color', x)) {
					new_serie [field] ['color'] = x ['color'];
				}
				if (value > maior) {
					var maior = value;
					var key_maior = field;
				}
			}
		}
		if (key_maior != '') {
			new_serie [key_maior] ['sliced'] = true;
			new_serie [key_maior] ['selected'] = true;
		}
		self.data_serie = (function () {
			var __accu0__ = [];
			for (var y of ordem) {
				__accu0__.append (new_serie [y]);
			}
			return __accu0__;
		}) ();
	});},
	get add_serie () {return __get__ (this, function (self, field_name, value) {
		var kargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'field_name': var field_name = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
						default: kargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kargs.__kwargtrans__;
			}
		}
		else {
		}
		var value = float (value);
		if (field_name) {
			var p = dict (kargs);
			p ['field'] = field_name;
			p ['value'] = value;
			self._series.append (p);
		}
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
		self._series_validator ();
		Highcharts.chart ('{0}'.format (self._chart_target), dict ({'chart': dict ({'plotBackgroundColor': null, 'plotBorderWidth': null, 'plotShadow': false, 'type': 'pie'}), 'title': dict ({'text': self.title}), 'tooltip': dict ({'pointFormat': self.pointFormat}), 'credits': false, 'plotOptions': dict ({'pie': dict ({'allowPointSelect': true, 'cursor': 'pointer', 'dataLabels': dict ({'enabled': self.showLabels}), 'showInLegend': self.showLegend})}), 'series': [dict ({'name': self.series_name, 'colorByPoint': true, 'data': self.data_serie})]}));
	});}
});

//# sourceMappingURL=plugins.highcharts.map