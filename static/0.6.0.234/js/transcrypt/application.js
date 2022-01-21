// Transcrypt'ed from Python, 2022-01-21 01:15:36
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as servidor_sme from './plugins.servidor_sme.js';
import * as config from './auto.config.js';
import * as rootcmd from './handlers.rootcmd.js';
import * as registro_de_atividades from './handlers.registro_de_atividades.js';
import * as controle_de_atividades from './handlers.controle_de_atividades.js';
import * as boletins from './handlers.boletins.js';
import * as conselho_de_classe from './handlers.conselho_de_classe.js';
import * as diario_integrado from './handlers.diario_integrado.js';
import * as registro_de_faltas from './handlers.registro_de_faltas.js';
import * as registro_de_aulas_educacao_infantil from './handlers.registro_de_aulas_educacao_infantil.js';
import * as registro_de_aulas from './handlers.registro_de_aulas.js';
import * as ficha_avaliativa from './handlers.ficha_avaliativa.js';
import * as calendarios from './handlers.calendarios.js';
import * as diario_de_notas from './handlers.diario_de_notas.js';
import * as excepcional from './handlers.excepcional.js';
import * as imprimir from './handlers.imprimir.js';
import * as turmas from './handlers.turmas.js';
import * as disciplinas from './handlers.disciplinas.js';
import * as series from './handlers.series.js';
import * as escolas from './handlers.escolas.js';
import * as professores from './handlers.professores.js';
import * as funcionarios from './handlers.funcionarios.js';
import * as servidores from './handlers.servidores.js';
import * as pais_e_alunos from './handlers.pais_e_alunos.js';
import * as estatisticas from './handlers.estatisticas.js';
import * as administrar_escola from './handlers.administrar_escola.js';
import * as indicadores_de_desempenho from './handlers.indicadores_de_desempenho.js';
import * as identificar_servidor from './handlers.identificar_servidor.js';
import * as artigos from './handlers.artigos.js';
import * as alunos from './handlers.alunos.js';
import * as vinculos from './handlers.vinculos.js';
import * as matriculas from './handlers.matriculas.js';
import * as matricular from './handlers.matricular.js';
import * as matricula from './handlers.matricula.js';
import * as home from './handlers.home.js';
import * as admin from './phanterpwa.frontend.components.admin.js';
import * as helpers from './phanterpwa.frontend.helpers.js';
import * as application from './phanterpwa.frontend.application.js';
import * as auth_user from './phanterpwa.frontend.components.auth_user.js';
var __name__ = '__main__';
export var I = helpers.XmlConstructor.tagger ('i');
export var I18N = helpers.I18N;
export var gates = dict ({'home': home.Index, 'admin': admin.Administration, 'profile': auth_user.Profile, 'artigos': artigos.Index, 'oauth': auth_user.Oauth, 'two_factor': auth_user.TwoFactor, 'lock': auth_user.Lock, 'administrar-escola': administrar_escola.Index, 'estatistica-controle-de-atividades': estatisticas.ControleDeAtividades, 'estatistica-registro-de-atividades': estatisticas.RegistroDeAtividades, 'estatistica-registro-de-atividades-turma': estatisticas.RegistroDeAtividadesTurma, 'pais-e-alunos': pais_e_alunos.Index, 'area-do-servidor': servidores.Index, 'identificar-servidor': identificar_servidor.Index, 'indicadores-de-desempenho': indicadores_de_desempenho.Index, 'escolas': escolas.Index, 'escola-configuracao': escolas.Configuracoes, 'alunos': alunos.Index, 'matricula': matricula.Index, 'matricular': matricular.Index, 'matriculas': matriculas.Index, 'vinculos': vinculos.Index, 'funcionarios': funcionarios.Index, 'professores': professores.Index, 'series': series.Index, 'disciplinas': disciplinas.Index, 'turmas': turmas.Index, 'imprimir': imprimir.Index, 'diario-de-notas': diario_de_notas.Index, 'calendarios': calendarios.Index, 'ficha-avaliativa': ficha_avaliativa.Index, 'registro-de-aulas': registro_de_aulas.Index, 'registro-de-aulas-educacao-infantil': registro_de_aulas_educacao_infantil.Index, 'diario-integrado': diario_integrado.Index, 'conselho-de-classe': conselho_de_classe.Index, 'boletins': boletins.Index, 'registro-de-faltas': registro_de_faltas.Index, 'controle-de-atividades': controle_de_atividades.Index, 'registro-de-atividades': registro_de_atividades.Index, 'excepcional': excepcional.Index, 'root-commands': rootcmd.Commands});
export var MyApp = application.PhanterPWA (config.CONFIG, gates, __kwargtrans__ ({send_global_error: true}));
MyApp.add_component (auth_user.AuthUser ('#layout-auth_user-container'));
MyApp.add_component (auth_user.LeftBarMainButton ('#layout-main_button-container'));
MyApp.add_component (auth_user.LeftBar ('#layout-left_bar-container'));
servidor_sme.ServidorSME.get_left_bar_buttons ();

//# sourceMappingURL=application.map