import phanterpwa.frontend.components.auth_user as auth_user
import phanterpwa.frontend.application as application
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.components.admin as admin
import handlers.home as home
import handlers.matricula as matricula
import handlers.matriculas as matriculas
import handlers.vinculos as vinculos
import handlers.alunos as alunos
import handlers.artigos as artigos
import handlers.identificar_servidor as identificar_servidor
import handlers.administrar_escola as administrar_escola
import handlers.estatisticas as estatisticas
import handlers.pais_e_alunos as pais_e_alunos
import handlers.servidores as servidores
import handlers.funcionarios as funcionarios
import handlers.professores as professores
import handlers.escolas as escolas
import handlers.series as series
import handlers.disciplinas as disciplinas
import handlers.turmas as turmas
import handlers.imprimir as imprimir
import handlers.excepcional as excepcional
import handlers.diario_de_notas as diario_de_notas
import handlers.calendarios as calendarios
import handlers.ficha_avaliativa as ficha_avaliativa
import handlers.registro_de_aulas as registro_de_aulas
import handlers.registro_de_faltas as registro_de_faltas
import handlers.diario_integrado as diario_integrado
import handlers.conselho_de_classe as conselho_de_classe
import handlers.boletins as boletins
import handlers.controle_de_atividades as controle_de_atividades
import handlers.registro_de_atividades as registro_de_atividades
import handlers.rootcmd as rootcmd
import auto.config as config
import plugins.servidor_sme as servidor_sme
from org.transcrypt.stubs.browser import __pragma__

__pragma__("skip")
jQuery = window = console = WebSocket = __new__ = location = this = confirm = 0
__pragma__("noskip")


I = helpers.XmlConstructor.tagger("i")
I18N = helpers.I18N


gates = {
    'home': home.Index,
    'admin': admin.Administration,
    'profile': auth_user.Profile,
    'artigos': artigos.Index,
    'oauth': auth_user.Oauth,
    'two_factor': auth_user.TwoFactor,
    'lock': auth_user.Lock,
    'administrar-escola': administrar_escola.Index,
    'estatistica-controle-de-atividades': estatisticas.ControleDeAtividades,
    'pais-e-alunos': pais_e_alunos.Index,
    'area-do-servidor': servidores.Index,
    'identificar-servidor': identificar_servidor.Index,
    'escolas': escolas.Index,
    'alunos': alunos.Index,
    'matricula': matricula.Index,
    'matriculas': matriculas.Index,
    'vinculos': vinculos.Index,
    'funcionarios': funcionarios.Index,
    'professores': professores.Index,
    'series': series.Index,
    'disciplinas': disciplinas.Index,
    'turmas': turmas.Index,
    'imprimir': imprimir.Index,
    'diario-de-notas': diario_de_notas.Index,
    'calendarios': calendarios.Index,
    'ficha-avaliativa': ficha_avaliativa.Index,
    'registro-de-aulas': registro_de_aulas.Index,
    'diario-integrado': diario_integrado.Index,
    'conselho-de-classe': conselho_de_classe.Index,
    'boletins': boletins.Index,
    'registro-de-faltas': registro_de_faltas.Index,
    'controle-de-atividades': controle_de_atividades.Index,
    'registro-de-atividades': registro_de_atividades.Index,
    'excepcional': excepcional.Index,
    'root-commands': rootcmd.Commands
}

# gates = {
#     'home': home.Manutencao
# }

MyApp = application.PhanterPWA(config.CONFIG, gates, send_global_error=True)
MyApp.add_component(auth_user.AuthUser("#layout-auth_user-container"))
MyApp.add_component(auth_user.LeftBarMainButton("#layout-main_button-container"))
MyApp.add_component(auth_user.LeftBar("#layout-left_bar-container"))

# ingates = [
#     'home',
#     'admin',
#     'profile',
#     'two_factor',
#     'lock',
#     'area-do-servidor',
#     'professores'
# ]
# if window.PhanterPWA.get_current_way() not in ingates:

servidor_sme.ServidorSME.get_left_bar_buttons()
