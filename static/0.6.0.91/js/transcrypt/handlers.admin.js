// Transcrypt'ed from Python, 2021-04-05 14:16:18
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as left_bar from './phanterpwa.frontend.components.left_bar.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
import * as widgets from './phanterpwa.frontend.components.widgets.js';
import * as gatehandler from './phanterpwa.frontend.gatehandler.js';
var __name__ = 'handlers.admin';
export var DIV = helpers.XmlConstructor.tagger ('div');
export var I = helpers.XmlConstructor.tagger ('i');
export var H2 = helpers.XmlConstructor.tagger ('h2');
export var FORM = helpers.XmlConstructor.tagger ('form');
export var SPAN = helpers.XmlConstructor.tagger ('span');
export var IMG = helpers.XmlConstructor.tagger ('img', true);
export var UL = helpers.XmlConstructor.tagger ('ul');
export var LI = helpers.XmlConstructor.tagger ('li');
export var INPUT = helpers.XmlConstructor.tagger ('input', true);
export var A = helpers.XmlConstructor.tagger ('A');
export var I18N = helpers.I18N;
export var CONCATENATE = helpers.CONCATENATE;
export var Index =  __class__ ('Index', [gatehandler.Handler], {
	__module__: __name__,
	get initialize () {return __get__ (this, function (self) {
		self.requires_login = true;
		self.autorized_roles = ['root'];
		self.autorized_ids = ['all'];
		var html = CONCATENATE (DIV (DIV (DIV (DIV ('USER ADMINISTRATION', __kwargtrans__ ({_class: 'phanterpwa-breadcrumb'})), __kwargtrans__ ({_class: 'phanterpwa-breadcrumb-wrapper'})), __kwargtrans__ ({_class: 'p-container'})), __kwargtrans__ ({_class: 'title_page_container card'})), DIV (DIV (DIV (DIV (DIV (I (__kwargtrans__ (dict ({'_class': 'fas fa-edit promo-icon'}))), H2 ('USERS', __kwargtrans__ ({_class: 'promo-title'})), __kwargtrans__ (dict ({'_class': 'link', '_phanterpwa-way': 'users'}))), DIV ('Users Administration', __kwargtrans__ ({_class: 'promo-content'})), __kwargtrans__ (dict ({'_class': 'promo-container'}))), __kwargtrans__ ({_class: 'p-col w1p100 w3p50 w4p25'})), DIV (DIV (DIV (I (__kwargtrans__ (dict ({'_class': 'fas fa-edit promo-icon'}))), H2 ('USERS', __kwargtrans__ ({_class: 'promo-title'})), __kwargtrans__ (dict ({'_class': 'link', '_phanterpwa-way': 'roles'}))), DIV ('Roles users Administration', __kwargtrans__ ({_class: 'promo-content'})), __kwargtrans__ (dict ({'_class': 'promo-container'}))), __kwargtrans__ ({_class: 'p-col w1p100 w3p50 w4p25'})), __kwargtrans__ ({_class: 'p-row card e-padding_20'})), __kwargtrans__ ({_class: 'phanterpwa-container p-container'})));
		html.html_to ('#main-container');
		var BackButton = left_bar.LeftBarButton ('back_localizar_aluno', 'Voltar', I (__kwargtrans__ ({_class: 'fas fa-arrow-circle-left'})), __kwargtrans__ (dict ({'_phanterpwa-way': 'home', 'position': 'top', 'ways': [(function __lambda__ (r) {
			return (r.startswith ('conquistas/') ? true : false);
		})]})));
		window.PhanterPWA.Components ['left_bar'].add_button (BackButton);
	});}
});

//# sourceMappingURL=handlers.admin.map