import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.validations as validations
import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.components.left_bar as left_bar
import phanterpwa.frontend.forms as forms
import phanterpwa.frontend.components.modal as modal
import phanterpwa.frontend.preloaders as preloaders
import phanterpwa.frontend.decorators as decorators
import handlers.escolas as escolas
import handlers.anos_letivos as anos_letivos
from org.transcrypt.stubs.browser import __pragma__

__pragma__('alias', "jQuery", "$")
__pragma__('skip')
jQuery = sessionStorage = JSON = M = js_undefined = Date = window =\
    this = __new__ = FormData = console = localStorage = QRCode = 0
__pragma__('noskip')

CONCATENATE = helpers.CONCATENATE
OPTION = helpers.XmlConstructor.tagger("option")
SELECT = helpers.XmlConstructor.tagger("select")
DIV = helpers.XmlConstructor.tagger("div")
BUTTON = helpers.XmlConstructor.tagger("button")
I = helpers.XmlConstructor.tagger("i")
A = helpers.XmlConstructor.tagger("a")
SPAN = helpers.XmlConstructor.tagger("span")
FORM = helpers.XmlConstructor.tagger("form")
OPTION = helpers.XmlConstructor.tagger("option")
SELECT = helpers.XmlConstructor.tagger("select")
UL = helpers.XmlConstructor.tagger("ul")
LI = helpers.XmlConstructor.tagger("li")
STRONG = helpers.XmlConstructor.tagger("strong")
IMG = helpers.XmlConstructor.tagger("img", True)
H2 = helpers.XmlConstructor.tagger("h2")
H3 = helpers.XmlConstructor.tagger("h3")
H5 = helpers.XmlConstructor.tagger("h5")
TR = helpers.XmlConstructor.tagger("tr")
P = helpers.XmlConstructor.tagger("p")
TH = helpers.XmlConstructor.tagger("th")
TD = helpers.XmlConstructor.tagger("td")
LABEL = helpers.XmlConstructor.tagger("label")
TEXTAREA = helpers.XmlConstructor.tagger("textarea")
INPUT = helpers.XmlConstructor.tagger("input", True)
BR = helpers.XmlConstructor.tagger("br", True)
TABLE = helpers.XmlConstructor.tagger('table')
THEAD = helpers.XmlConstructor.tagger('thead')
TFOOT = helpers.XmlConstructor.tagger('tfoot')
TBODY = helpers.XmlConstructor.tagger('tbody')
TR = helpers.XmlConstructor.tagger('tr')
TH = helpers.XmlConstructor.tagger('th')
TD = helpers.XmlConstructor.tagger('td')
CAPTION = helpers.XmlConstructor.tagger('caption')

XTABLE = widgets.Table
XML = helpers.XML
XTRD = widgets.TableData
XTRH = widgets.TableHead
XFOOTER = widgets.TableFooterPagination
XSECTION = helpers.XSECTION

__pragma__('kwargs')


class Index(gatehandler.Handler):
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola", "Professor(a)"]))
    def initialize(self):
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)

        if str(arg0).isdigit() and str(arg1).isdigit():
            self.IndicadoresDeDesempenho = IndicadoresDeDesempenho(self, arg0, arg1)


        BackButton1 = left_bar.LeftBarButton(
            "back_conselho_de_classe",
            "Voltar",
            I(_class="fas fa-arrow-circle-left"),
            **{
                "tag": "a",
                "_href": window.PhanterPWA.XWAY("turmas", arg0, arg1),
                "position": "top",
                "show_if_way_match": r"^indicadores-de-desempenho\/[0-9]{1,}\/[0-9]{1,}.*$"
            }
        )

        window.PhanterPWA.Components['left_bar'].add_button(BackButton1)


class IndicadoresDeDesempenho():
    def __init__(self, index_instance, id_escola, ano_letivo):
        self.index_instance = index_instance
        self.id_escola = id_escola
        self.ano_letivo = ano_letivo
        self.total_multi_inicial_1 = 0
        self.total_multi_admitidos_1 = 0
        self.total_multi_transferidos_1 = 0
        self.total_multi_desistentes_1 = 0
        self.total_multi_aprovados_1 = 0
        self.total_multi_reprovados_1 = 0
        self.total_multi_final_1 = 0

        self.total_multi_inicial_2 = 0
        self.total_multi_admitidos_2 = 0
        self.total_multi_transferidos_2 = 0
        self.total_multi_desistentes_2 = 0
        self.total_multi_aprovados_2 = 0
        self.total_multi_reprovados_2 = 0
        self.total_multi_final_2 = 0

        self.total_multi_inicial_3 = 0
        self.total_multi_admitidos_3 = 0
        self.total_multi_transferidos_3 = 0
        self.total_multi_desistentes_3 = 0
        self.total_multi_aprovados_3 = 0
        self.total_multi_reprovados_3 = 0
        self.total_multi_final_3 = 0

        self.total_multi_inicial_4 = 0
        self.total_multi_admitidos_4 = 0
        self.total_multi_transferidos_4 = 0
        self.total_multi_desistentes_4 = 0
        self.total_multi_aprovados_4 = 0
        self.total_multi_reprovados_4 = 0
        self.total_multi_final_4 = 0

        self.total_multi_inicial_f = 0
        self.total_multi_admitidos_f = 0
        self.total_multi_transferidos_f = 0
        self.total_multi_desistentes_f = 0
        self.total_multi_aprovados_f = 0
        self.total_multi_reprovados_f = 0
        self.total_multi_final_f = 0

        self.total_inicial_1 = 0
        self.total_admitidos_1 = 0
        self.total_transferidos_1 = 0
        self.total_desistentes_1 = 0
        self.total_aprovados_1 = 0
        self.total_reprovados_1 = 0
        self.total_final_1 = 0

        self.total_inicial_2 = 0
        self.total_admitidos_2 = 0
        self.total_transferidos_2 = 0
        self.total_desistentes_2 = 0
        self.total_aprovados_2 = 0
        self.total_reprovados_2 = 0
        self.total_final_2 = 0

        self.total_inicial_3 = 0
        self.total_admitidos_3 = 0
        self.total_transferidos_3 = 0
        self.total_desistentes_3 = 0
        self.total_aprovados_3 = 0
        self.total_reprovados_3 = 0
        self.total_final_3 = 0

        self.total_inicial_4 = 0
        self.total_admitidos_4 = 0
        self.total_transferidos_4 = 0
        self.total_desistentes_4 = 0
        self.total_aprovados_4 = 0
        self.total_reprovados_4 = 0
        self.total_final_4 = 0

        self.total_inicial_f = 0
        self.total_admitidos_f = 0
        self.total_transferidos_f = 0
        self.total_desistentes_f = 0
        self.total_aprovados_f = 0
        self.total_reprovados_f = 0
        self.total_final_f = 0
        self.serie_ordem = 0
        self.multisseriado_por_disciplina_ordem = []
        self.multisseriado_por_disciplina = {
            "ids": {},
            "ordem": [],
            "unid1": {},
            "unid2": {},
            "unid3": {},
            "unid4": {},
            "unidf": {},
        }

        self._get_turmas()

    def porcentagem(self, valor, total):
        if str(valor).isdigit() and str(total).isdigit():
            valor = int(valor)
            total = int(total)
            if valor == 0:
                return " 0%"
            else:
                return " {0}%".format(((valor / total) * 100).toFixed(2))
        return ""

    def _get_turmas(self):

        window.PhanterPWA.GET(
            "api",
            "turmas",
            self.id_escola,
            self.ano_letivo,
            onComplete=self.after_get_turma
        )

    def after_get_turma(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            self.turmas = json.data.turmas
            self.unidades = json.unidades
            self.processar_turmas()

    def processar_turmas(self):

        tr_inicial = TBODY(
            TR(
                TH("TURMA"),
                TH("MAT. INICIAL"),
                TH("ADM"),
                TH("TRANS"),
                TH("APRO"),
                TH("REP"),
                TH("ABAN"),
                TH("BASE. CALC"),
                TH("APRO %"),
                TH("REP %"),
                TH("ABAN %"),
                TH("TOT. FINAL"),
                _class="rotulo_indicador"
            ),
            _class="tbody-indicador-container"
        )
        self.html_tabela_uni1 = TABLE(
            THEAD(TR(TD(BR(), _class="thead_indicador"))),
            TFOOT(TR(TD(BR(), _class="tfoot_indicador"))),
            tr_inicial,
            _class="tabela_indicador_desempenho_container tabela_indicador_desempenho_container_uni1"
        )
        self.html_tabela_uni2 = TABLE(
            THEAD(TR(TD(BR(), _class="thead_indicador"))),
            TFOOT(TR(TD(BR(), _class="tfoot_indicador"))),
            tr_inicial,
            _class="tabela_indicador_desempenho_container tabela_indicador_desempenho_container_uni2"
        )
        self.html_tabela_uni3 = TABLE(
            THEAD(TR(TD(BR(), _class="thead_indicador"))),
            TFOOT(TR(TD(BR(), _class="tfoot_indicador"))),
            tr_inicial,
            _class="tabela_indicador_desempenho_container tabela_indicador_desempenho_container_uni3"
        )
        self.html_tabela_uni4 = TABLE(
            THEAD(TR(TD(BR(), _class="thead_indicador"))),
            TFOOT(TR(TD(BR(), _class="tfoot_indicador"))),
            tr_inicial,
            _class="tabela_indicador_desempenho_container tabela_indicador_desempenho_container_uni4"
        )
        self.html_tabela_unif = TABLE(
            THEAD(TR(TD(BR(), _class="thead_indicador"))),
            TFOOT(TR(TD(BR(), _class="tfoot_indicador"))),
            tr_inicial,
            _class="tabela_indicador_desempenho_container tabela_indicador_desempenho_container_unif"
        )
        tr_inicial_multi = TBODY(
            TR(
                TH("TURMA"),
                TH("SÉRIE"),
                TH("MAT. INICIAL"),
                TH("ADM"),
                TH("TRANS"),
                TH("APRO"),
                TH("REP"),
                TH("ABAN"),
                TH("BASE. CALC"),
                TH("APRO %"),
                TH("REP %"),
                TH("ABAN %"),
                TH("TOT. FINAL"),
                _class="rotulo_indicador"
            ),
            _class="tbody-indicador-container"
        )
        tr_inicial_multi_por_disciplina = TBODY(
            TR(
                TH("SÉRIE"),
                TH("MAT. INICIAL"),
                TH("ADM"),
                TH("TRANS"),
                TH("APRO"),
                TH("REP"),
                TH("ABAN"),
                TH("BASE. CALC"),
                TH("APRO %"),
                TH("REP %"),
                TH("ABAN %"),
                TH("TOT. FINAL"),
                _class="rotulo_indicador"
            ),
            _class="tbody-indicador-container"
        )
        self.html_tabela_multi_uni1 = TABLE(
            THEAD(TR(TD(BR(), _class="thead_indicador"))),
            TFOOT(TR(TD(BR(), _class="tfoot_indicador"))),
            tr_inicial_multi,
            _class="tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_uni1"
        )
        self.html_tabela_multi_uni2 = TABLE(
            THEAD(TR(TD(BR(), _class="thead_indicador"))),
            TFOOT(TR(TD(BR(), _class="tfoot_indicador"))),
            tr_inicial_multi,
            _class="tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_uni2"
        )
        self.html_tabela_multi_uni3 = TABLE(
            THEAD(TR(TD(BR(), _class="thead_indicador"))),
            TFOOT(TR(TD(BR(), _class="tfoot_indicador"))),
            tr_inicial_multi,
            _class="tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_uni3"
        )
        self.html_tabela_multi_uni4 = TABLE(
            THEAD(TR(TD(BR(), _class="thead_indicador"))),
            TFOOT(TR(TD(BR(), _class="tfoot_indicador"))),
            tr_inicial_multi,
            _class="tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_uni4"
        )
        self.html_tabela_multi_unif = TABLE(
            THEAD(TR(TD(BR(), _class="thead_indicador"))),
            TFOOT(TR(TD(BR(), _class="tfoot_indicador"))),
            tr_inicial_multi,
            _class="tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_unif"
        )

        self.html_tabela_multi_por_disciplina_uni1 = TABLE(
            THEAD(TR(TD(BR(), _class="thead_indicador"))),
            TFOOT(TR(TD(BR(), _class="tfoot_indicador"))),
            tr_inicial_multi_por_disciplina,
            _id="tabela_indicador_multi_serie_1",
            _class="tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_uni1"
        )
        self.html_tabela_multi_por_disciplina_uni2 = TABLE(
            THEAD(TR(TD(BR(), _class="thead_indicador"))),
            TFOOT(TR(TD(BR(), _class="tfoot_indicador"))),
            tr_inicial_multi_por_disciplina,
            _id="tabela_indicador_multi_serie_2",
            _class="tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_uni2"
        )
        self.html_tabela_multi_por_disciplina_uni3 = TABLE(
            THEAD(TR(TD(BR(), _class="thead_indicador"))),
            TFOOT(TR(TD(BR(), _class="tfoot_indicador"))),
            tr_inicial_multi_por_disciplina,
            _id="tabela_indicador_multi_serie_3",
            _class="tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_uni3"
        )
        self.html_tabela_multi_por_disciplina_uni4 = TABLE(
            THEAD(TR(TD(BR(), _class="thead_indicador"))),
            TFOOT(TR(TD(BR(), _class="tfoot_indicador"))),
            tr_inicial_multi_por_disciplina,
            _id="tabela_indicador_multi_serie_4",
            _class="tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_uni4"
        )
        self.html_tabela_multi_por_disciplina_unif = TABLE(
            THEAD(TR(TD(BR(), _class="thead_indicador"))),
            TFOOT(TR(TD(BR(), _class="tfoot_indicador"))),
            tr_inicial_multi_por_disciplina,
            _id="tabela_indicador_multi_serie_f",
            _class="tabela_indicador_desempenho_container tabela_indicador_desempenho_container_mult_unif"
        )

        self.html_indicador_uni1 = DIV(
            H3("Indicadores de Desempenho - Unidade I"),
            self.html_tabela_uni1,
            _class="indicador_desempenho_container indicador_desempenho_container_uni1"
        )
        self.html_indicador_uni2 = DIV(
            H3("Indicadores de Desempenho - Unidade II"),
            self.html_tabela_uni2,
            _class="indicador_desempenho_container indicador_desempenho_container_uni2"
        )
        self.html_indicador_uni3 = DIV(
            H3("Indicadores de Desempenho - Unidade III"),
            self.html_tabela_uni3,
            _class="indicador_desempenho_container indicador_desempenho_container_uni3"
        )
        self.html_indicador_uni4 = DIV(
            H3("Indicadores de Desempenho - Unidade IV"),
            self.html_tabela_uni4,
            _class="indicador_desempenho_container indicador_desempenho_container_uni4"
        )
        self.html_indicador_unif = DIV(
            H3("Indicadores de Desempenho - Final"),
            self.html_tabela_unif,
            _class="indicador_desempenho_container indicador_desempenho_container_unif"
        )

        self.html_indicador_multi_uni1 = DIV(
            H3("Indicadores de Desempenho - Multisseriado - Unidade I"),
            self.html_tabela_multi_uni1,
            _class="indicador_desempenho_container indicador_desempenho_container_mult_uni1"
        )
        self.html_indicador_multi_uni2 = DIV(
            H3("Indicadores de Desempenho - Multisseriado - Unidade II"),
            self.html_tabela_multi_uni2,
            _class="indicador_desempenho_container indicador_desempenho_container_mult_uni2"
        )
        self.html_indicador_multi_uni3 = DIV(
            H3("Indicadores de Desempenho - Multisseriado - Unidade III"),
            self.html_tabela_multi_uni3,
            _class="indicador_desempenho_container indicador_desempenho_container_mult_uni3"
        )
        self.html_indicador_multi_uni4 = DIV(
            H3("Indicadores de Desempenho - Multisseriado - Unidade IV"),
            self.html_tabela_multi_uni4,
            _class="indicador_desempenho_container indicador_desempenho_container_mult_uni4"
        )
        self.html_indicador_multi_unif = DIV(
            H3("Indicadores de Desempenho - Multisseriado - Final"),
            self.html_tabela_multi_unif,
            _class="indicador_desempenho_container indicador_desempenho_container_mult_unif"
        )

        self.html_indicador_multi_por_disciplina_uni1 = DIV(
            H3("Indicadores de Desempenho - Multisseriado por Série - Unidade I"),
            self.html_tabela_multi_por_disciplina_uni1,
            _class="indicador_desempenho_container indicador_desempenho_container_mult_uni1"
        )
        self.html_indicador_multi_por_disciplina_uni2 = DIV(
            H3("Indicadores de Desempenho - Multisseriado por Série - Unidade II"),
            self.html_tabela_multi_por_disciplina_uni2,
            _class="indicador_desempenho_container indicador_desempenho_container_mult_uni2"
        )
        self.html_indicador_multi_por_disciplina_uni3 = DIV(
            H3("Indicadores de Desempenho - Multisseriado por Série - Unidade III"),
            self.html_tabela_multi_por_disciplina_uni3,
            _class="indicador_desempenho_container indicador_desempenho_container_mult_uni3"
        )
        self.html_indicador_multi_por_disciplina_uni4 = DIV(
            H3("Indicadores de Desempenho - Multisseriado por Série - Unidade IV"),
            self.html_tabela_multi_por_disciplina_uni4,
            _class="indicador_desempenho_container indicador_desempenho_container_mult_uni4"
        )
        self.html_indicador_multi_por_disciplina_unif = DIV(
            H3("Indicadores de Desempenho - Multisseriado por Série - Final"),
            self.html_tabela_multi_por_disciplina_unif,
            _class="indicador_desempenho_container indicador_desempenho_container_mult_unif"
        )

        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("INDICADORES DE DESEMPENHO", _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container extend"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                self.html_indicador_uni1,
                                self.html_indicador_uni2,
                                self.html_indicador_uni3,
                                self.html_indicador_uni4 if self.unidades == 4 else "",
                                self.html_indicador_unif,
                                _class="indicador_simples"
                            ),
                            DIV(
                                self.html_indicador_multi_uni1,
                                self.html_indicador_multi_uni2,
                                self.html_indicador_multi_uni3,
                                self.html_indicador_multi_uni4 if self.unidades == 4 else "",
                                self.html_indicador_multi_unif,
                                _class="indicador_multi"
                            ),
                            DIV(
                                self.html_indicador_multi_por_disciplina_uni1,
                                self.html_indicador_multi_por_disciplina_uni2,
                                self.html_indicador_multi_por_disciplina_uni3,
                                self.html_indicador_multi_por_disciplina_uni4 if self.unidades == 4 else "",
                                self.html_indicador_multi_por_disciplina_unif,
                                _class="indicador_multi_serie"
                            ),
                            _id="content-indicadores_de_desempenho",
                            _class='p-row e-padding_auto continuos'
                        ),
                        _class="phanterpwa-media-print-container"
                    ),
                    _class="card"
                ),
                DIV(_id="modal_cmp_curriculares_container"),
                _class="phanterpwa-container p-container extend"
            )
        )
        tem_multisseriado = False
        tem_regular = False
        for x in self.turmas:
            if x.multisseriado:
                tem_multisseriado = True
                # self.html_indicador_multi_uni1.append(DIV(preloaders.run_points, _id="ind_uni1_{0}".format(x.id), _class="indicador-container"))
                # self.html_indicador_multi_uni2.append(DIV(preloaders.run_points, _id="ind_uni2_{0}".format(x.id), _class="indicador-container"))
                # self.html_indicador_multi_uni3.append(DIV(preloaders.run_points, _id="ind_uni3_{0}".format(x.id), _class="indicador-container"))
                # if self.unidades == 4:
                #     self.html_indicador_multi_uni4.append(DIV(preloaders.run_points, _id="ind_uni4_{0}".format(x.id), _class="indicador-container"))
                # self.html_indicador_multi_unif.append(DIV(preloaders.run_points, _id="ind_unif_{0}".format(x.id), _class="indicador-container"))

                self.html_tabela_multi_uni1.append(TBODY(TR(TH(x.turma), TD(DIV(preloaders.run_points), _colspan=13, _style="text-align: center;")), _id="tbody_ind_uni1_{0}".format(x.id), _class="tbody-indicador-container"))
                self.html_tabela_multi_uni2.append(TBODY(TR(TH(x.turma), TD(DIV(preloaders.run_points), _colspan=13, _style="text-align: center;")), _id="tbody_ind_uni2_{0}".format(x.id), _class="tbody-indicador-container"))
                self.html_tabela_multi_uni3.append(TBODY(TR(TH(x.turma), TD(DIV(preloaders.run_points), _colspan=13, _style="text-align: center;")), _id="tbody_ind_uni3_{0}".format(x.id), _class="tbody-indicador-container"))
                if self.unidades == 4:
                    self.html_tabela_multi_uni4.append(TBODY(TR(TH(x.turma), TD(DIV(preloaders.run_points), _colspan=13, _style="text-align: center;")), _id="tbody_ind_uni4_{0}".format(x.id), _class="tbody-indicador-container"))
                self.html_tabela_multi_unif.append(TBODY(TR(TH(x.turma), TD(DIV(preloaders.run_points), _colspan=13, _style="text-align: center;")), _id="tbody_ind_unif_{0}".format(x.id), _class="tbody-indicador-container"))

            else:
                tem_regular = True
                # self.html_indicador_uni1.append(DIV(preloaders.run_points, _id="ind_uni1_{0}".format(x.id), _class="indicador-container"))
                # self.html_indicador_uni2.append(DIV(preloaders.run_points, _id="ind_uni2_{0}".format(x.id), _class="indicador-container"))
                # self.html_indicador_uni3.append(DIV(preloaders.run_points, _id="ind_uni3_{0}".format(x.id), _class="indicador-container"))
                # if self.unidades == 4:
                #     self.html_indicador_uni4.append(DIV(preloaders.run_points, _id="ind_uni4_{0}".format(x.id), _class="indicador-container"))
                # self.html_indicador_unif.append(DIV(preloaders.run_points, _id="ind_unif_{0}".format(x.id), _class="indicador-container"))

                self.html_tabela_uni1.append(TBODY(TR(TH(x.turma), TD(DIV(preloaders.run_points), _colspan=12, _style="text-align: center;")), _id="tbody_ind_uni1_{0}".format(x.id), _class="tbody-indicador-container"))
                self.html_tabela_uni2.append(TBODY(TR(TH(x.turma), TD(DIV(preloaders.run_points), _colspan=12, _style="text-align: center;")), _id="tbody_ind_uni2_{0}".format(x.id), _class="tbody-indicador-container"))
                self.html_tabela_uni3.append(TBODY(TR(TH(x.turma), TD(DIV(preloaders.run_points), _colspan=12, _style="text-align: center;")), _id="tbody_ind_uni3_{0}".format(x.id), _class="tbody-indicador-container"))
                if self.unidades == 4:
                    self.html_tabela_uni4.append(TBODY(TR(TH(x.turma), TD(DIV(preloaders.run_points), _colspan=12, _style="text-align: center;")), _id="tbody_ind_uni4_{0}".format(x.id), _class="tbody-indicador-container"))
                self.html_tabela_unif.append(TBODY(TR(TH(x.turma), TD(DIV(preloaders.run_points), _colspan=12, _style="text-align: center;")), _id="tbody_ind_unif_{0}".format(x.id), _class="tbody-indicador-container"))

        self.html_tabela_multi_uni1.append(TBODY(
            TR(
                TH("Total", _colspan=2),
                TH(_id="total_multi_mat_inicial_unid1"),
                TH(_id="total_multi_adm_unid1"),
                TH(_id="total_multi_trans_unid1"),
                TH(_id="total_multi_apro_unid1"),
                TH(_id="total_multi_rep_unid1"),
                TH(_id="total_multi_aban_unid1"),
                TH(_id="total_multi_base_calc_unid1"),
                TH(_id="total_multi_porc_apro_unid1"),
                TH(_id="total_multi_porc_rep_unid1"),
                TH(_id="total_multi_porc_aban_unid1"),
                TH(_id="total_multi_final_unid1"),

            ),
            _id="tbody-total_multi_ind_uni1_{0}".format(x.id),
            _class="tbody-indicador-container"
        ))
        self.html_tabela_multi_uni2.append(TBODY(
            TR(
                TH("Total", _colspan=2),
                TH(_id="total_multi_mat_inicial_unid2"),
                TH(_id="total_multi_adm_unid2"),
                TH(_id="total_multi_trans_unid2"),
                TH(_id="total_multi_apro_unid2"),
                TH(_id="total_multi_rep_unid2"),
                TH(_id="total_multi_aban_unid2"),
                TH(_id="total_multi_base_calc_unid2"),
                TH(_id="total_multi_porc_apro_unid2"),
                TH(_id="total_multi_porc_rep_unid2"),
                TH(_id="total_multi_porc_aban_unid2"),
                TH(_id="total_multi_final_unid2"),

            ),
            _id="tbody-total_multi_ind_uni2_{0}".format(x.id),
            _class="tbody-indicador-container"
        ))
        self.html_tabela_multi_uni3.append(TBODY(
            TR(
                TH("Total", _colspan=2),
                TH(_id="total_multi_mat_inicial_unid3"),
                TH(_id="total_multi_adm_unid3"),
                TH(_id="total_multi_trans_unid3"),
                TH(_id="total_multi_apro_unid3"),
                TH(_id="total_multi_rep_unid3"),
                TH(_id="total_multi_aban_unid3"),
                TH(_id="total_multi_base_calc_unid3"),
                TH(_id="total_multi_porc_apro_unid3"),
                TH(_id="total_multi_porc_rep_unid3"),
                TH(_id="total_multi_porc_aban_unid3"),
                TH(_id="total_multi_final_unid3"),

            ),
            _id="tbody-total_multi_ind_uni3_{0}".format(x.id),
            _class="tbody-indicador-container"
        ))
        if self.unidades == 4:
            self.html_tabela_multi_uni4.append(TBODY(
                TR(
                    TH("Total", _colspan=2),
                    TH(_id="total_multi_mat_inicial_unid4"),
                    TH(_id="total_multi_adm_unid4"),
                    TH(_id="total_multi_trans_unid4"),
                    TH(_id="total_multi_apro_unid4"),
                    TH(_id="total_multi_rep_unid4"),
                    TH(_id="total_multi_aban_unid4"),
                    TH(_id="total_multi_base_calc_unid4"),
                    TH(_id="total_multi_porc_apro_unid4"),
                    TH(_id="total_multi_porc_rep_unid4"),
                    TH(_id="total_multi_porc_aban_unid4"),
                    TH(_id="total_multi_final_unid4"),
                ),
                _id="tbody-total_multi_ind_uni4_{0}".format(x.id),
                _class="tbody-indicador-container"
            ))
        self.html_tabela_multi_unif.append(TBODY(
            TR(
                TH("Total", _colspan=2),
                TH(_id="total_multi_mat_inicial_unidf"),
                TH(_id="total_multi_adm_unidf"),
                TH(_id="total_multi_trans_unidf"),
                TH(_id="total_multi_apro_unidf"),
                TH(_id="total_multi_rep_unidf"),
                TH(_id="total_multi_aban_unidf"),
                TH(_id="total_multi_base_calc_unidf"),
                TH(_id="total_multi_porc_apro_unidf"),
                TH(_id="total_multi_porc_rep_unidf"),
                TH(_id="total_multi_porc_aban_unidf"),
                TH(_id="total_multi_final_unidf"),

            ),
            _id="tbody-total_multi_ind_unif_{0}".format(x.id),
            _class="tbody-indicador-container"
        ))

        self.html_tabela_uni1.append(TBODY(
            TR(
                TH("Total"),
                TH(_id="total_mat_inicial_unid1"),
                TH(_id="total_adm_unid1"),
                TH(_id="total_trans_unid1"),
                TH(_id="total_apro_unid1"),
                TH(_id="total_rep_unid1"),
                TH(_id="total_aban_unid1"),
                TH(_id="total_base_calc_unid1"),
                TH(_id="total_porc_apro_unid1"),
                TH(_id="total_porc_rep_unid1"),
                TH(_id="total_porc_aban_unid1"),
                TH(_id="total_final_unid1"),
            ),
            _id="tbody-total_ind_uni1_{0}".format(x.id),
            _class="tbody-indicador-container"
        ))
        self.html_tabela_uni2.append(TBODY(
            TR(
                TH("Total"),
                TH(_id="total_mat_inicial_unid2"),
                TH(_id="total_adm_unid2"),
                TH(_id="total_trans_unid2"),
                TH(_id="total_apro_unid2"),
                TH(_id="total_rep_unid2"),
                TH(_id="total_aban_unid2"),
                TH(_id="total_base_calc_unid2"),
                TH(_id="total_porc_apro_unid2"),
                TH(_id="total_porc_rep_unid2"),
                TH(_id="total_porc_aban_unid2"),
                TH(_id="total_final_unid2"),
            ),
            _id="tbody-total_ind_uni2_{0}".format(x.id),
            _class="tbody-indicador-container"
        ))
        self.html_tabela_uni3.append(TBODY(
            TR(
                TH("Total"),
                TH(_id="total_mat_inicial_unid3"),
                TH(_id="total_adm_unid3"),
                TH(_id="total_trans_unid3"),
                TH(_id="total_apro_unid3"),
                TH(_id="total_rep_unid3"),
                TH(_id="total_aban_unid3"),
                TH(_id="total_base_calc_unid3"),
                TH(_id="total_porc_apro_unid3"),
                TH(_id="total_porc_rep_unid3"),
                TH(_id="total_porc_aban_unid3"),
                TH(_id="total_final_unid3"),
            ),
            _id="tbody-total_ind_uni3_{0}".format(x.id),
            _class="tbody-indicador-container"
        ))
        if self.unidades == 4:
            self.html_tabela_uni4.append(TBODY(
                TR(
                    TH("Total"),
                    TH(_id="total_mat_inicial_unid4"),
                    TH(_id="total_adm_unid4"),
                    TH(_id="total_trans_unid4"),
                    TH(_id="total_apro_unid4"),
                    TH(_id="total_rep_unid4"),
                    TH(_id="total_aban_unid4"),
                    TH(_id="total_base_calc_unid4"),
                    TH(_id="total_porc_apro_unid4"),
                    TH(_id="total_porc_rep_unid4"),
                    TH(_id="total_porc_aban_unid4"),
                    TH(_id="total_final_unid4"),
                ),
                _id="tbody-total_ind_uni4_{0}".format(x.id),
                _class="tbody-indicador-container"
            ))
        self.html_tabela_unif.append(TBODY(
            TR(
                TH("Total"),
                TH(_id="total_mat_inicial_unidf"),
                TH(_id="total_adm_unidf"),
                TH(_id="total_trans_unidf"),
                TH(_id="total_apro_unidf"),
                TH(_id="total_rep_unidf"),
                TH(_id="total_aban_unidf"),
                TH(_id="total_base_calc_unidf"),
                TH(_id="total_porc_apro_unidf"),
                TH(_id="total_porc_rep_unidf"),
                TH(_id="total_porc_aban_unidf"),
                TH(_id="total_final_unidf"),
            ),
            _id="tbody-total_ind_unif_{0}".format(x.id),
            _class="tbody-indicador-container"
        ))

        html.html_to("#main-container")
        if not tem_multisseriado:
            jQuery(".indicador_multi").fadeOut()
        if not tem_regular:
            jQuery(".indicador_simples").fadeOut()
        self.posicao = 0
        self.get_indicador(self.turmas[self.posicao].id)

    def get_indicador(self, id_turma):
        self.posicao += 1
        if self.posicao <= len(self.turmas):
            window.PhanterPWA.GET(
                "api",
                "indicador-de-desempenho",
                self.id_escola,
                self.ano_letivo,
                id_turma,
                onComplete=lambda data, ajax_status: (
                    self.after_get_indicador(id_turma, data, ajax_status),
                    self.get_indicador(self.turmas[self.posicao].id) if self.turmas[self.posicao] is not js_undefined else ""
                )
            )

    def after_get_indicador(self, id_turma, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON.data
            if json.multisseriado:
                tem_indicador = False
                trhtml1 = CONCATENATE(TR(
                    TH(json.turma, _rowspan=len(json.indicadores) + 1)
                ))
                trhtml2 = CONCATENATE(TR(
                    TH(json.turma, _rowspan=len(json.indicadores) + 1)
                ))
                trhtml3 = CONCATENATE(TR(
                    TH(json.turma, _rowspan=len(json.indicadores) + 1)
                ))
                if self.unidades == 4:
                    trhtml4 = CONCATENATE(TR(
                        TH(json.turma, _rowspan=len(json.indicadores) + 1)
                    ))
                trhtmlf = CONCATENATE(TR(
                    TH(json.turma, _rowspan=len(json.indicadores) + 1)
                ))
                for x in json.indicadores:
                    tem_indicador = True
                    base1 = x[1]["II"]["Total"] + x[1]["I"]["Desistente"]

                    self.total_multi_inicial_1 += x[1]["I"]["Total"]
                    self.total_multi_admitidos_1 += x[1]["I"]["Admitido"]
                    self.total_multi_transferidos_1 += x[1]["I"]["Transferido"]
                    self.total_multi_desistentes_1 += x[1]["I"]["Desistente"]
                    self.total_multi_aprovados_1 += x[1]["I"]["Aprovado"]
                    self.total_multi_reprovados_1 += x[1]["I"]["Reprovado"]
                    self.total_multi_final_1 += x[1]["II"]["Total"]

                    total_base = self.total_multi_final_1 + self.total_multi_desistentes_1
                    jQuery("#total_multi_mat_inicial_unid1").text(self.total_multi_inicial_1)
                    jQuery("#total_multi_adm_unid1").text(self.total_multi_admitidos_1)
                    jQuery("#total_multi_trans_unid1").text(self.total_multi_transferidos_1)
                    jQuery("#total_multi_apro_unid1").text(self.total_multi_aprovados_1)
                    jQuery("#total_multi_rep_unid1").text(self.total_multi_reprovados_1)
                    jQuery("#total_multi_aban_unid1").text(self.total_multi_desistentes_1)
                    jQuery("#total_multi_base_calc_unid1").text(total_base)
                    jQuery("#total_multi_porc_apro_unid1").text(self.porcentagem(self.total_multi_aprovados_1, total_base))
                    jQuery("#total_multi_porc_rep_unid1").text(self.porcentagem(self.total_multi_reprovados_1, total_base))
                    jQuery("#total_multi_porc_aban_unid1").text(self.porcentagem(self.total_multi_desistentes_1, total_base))
                    jQuery("#total_multi_final_unid1").text(self.total_multi_final_1)


                    trhtml1.append(TR(
                        TH(x[0]),
                        TD(x[1]["I"]["Total"]),
                        TD(x[1]["I"]["Admitido"]),
                        TD(x[1]["I"]["Transferido"]),
                        TD(x[1]["I"]["Aprovado"]),
                        TD(x[1]["I"]["Reprovado"]),
                        TD(x[1]["I"]["Desistente"]),
                        TD(base1),
                        TD(self.porcentagem(x[1]["I"]["Aprovado"], base1)),
                        TD(self.porcentagem(x[1]["I"]["Reprovado"], base1)),
                        TD(self.porcentagem(x[1]["I"]["Desistente"], base1)),
                        TD(x[1]["II"]["Total"]),
                    ))

                    jQuery("#ind_uni1_{0}".format(id_turma)).fadeOut()
                    jQuery(".tabela_indicador_desempenho_container_mult_uni1").addClass("enabled")
                    base2 = x[1]["III"]["Total"] + x[1]["II"]["Desistente"]


                    self.total_multi_inicial_2 += x[1]["II"]["Total"]
                    self.total_multi_admitidos_2 += x[1]["II"]["Admitido"]
                    self.total_multi_transferidos_2 += x[1]["II"]["Transferido"]
                    self.total_multi_desistentes_2 += x[1]["II"]["Desistente"]
                    self.total_multi_aprovados_2 += x[1]["II"]["Aprovado"]
                    self.total_multi_reprovados_2 += x[1]["II"]["Reprovado"]
                    self.total_multi_final_2 += x[1]["III"]["Total"]

                    total_base = self.total_multi_final_2 + self.total_multi_desistentes_2
                    jQuery("#total_multi_mat_inicial_unid2").text(self.total_multi_inicial_2)
                    jQuery("#total_multi_adm_unid2").text(self.total_multi_admitidos_2)
                    jQuery("#total_multi_trans_unid2").text(self.total_multi_transferidos_2)
                    jQuery("#total_multi_apro_unid2").text(self.total_multi_aprovados_2)
                    jQuery("#total_multi_rep_unid2").text(self.total_multi_reprovados_2)
                    jQuery("#total_multi_aban_unid2").text(self.total_multi_desistentes_2)
                    jQuery("#total_multi_base_calc_unid2").text(total_base)
                    jQuery("#total_multi_porc_apro_unid2").text(self.porcentagem(self.total_multi_aprovados_2, total_base))
                    jQuery("#total_multi_porc_rep_unid2").text(self.porcentagem(self.total_multi_reprovados_2, total_base))
                    jQuery("#total_multi_porc_aban_unid2").text(self.porcentagem(self.total_multi_desistentes_2, total_base))
                    jQuery("#total_multi_final_unid2").text(self.total_multi_final_2)

                    trhtml2.append(TR(
                        TH(x[0]),
                        TD(x[1]["II"]["Total"]),
                        TD(x[1]["II"]["Admitido"]),
                        TD(x[1]["II"]["Transferido"]),
                        TD(x[1]["II"]["Aprovado"]),
                        TD(x[1]["II"]["Reprovado"]),
                        TD(x[1]["II"]["Desistente"]),
                        TD(base2),
                        TD(self.porcentagem(x[1]["II"]["Aprovado"], base2)),
                        TD(self.porcentagem(x[1]["II"]["Reprovado"], base2)),
                        TD(self.porcentagem(x[1]["II"]["Desistente"], base2)),
                        TD(x[1]["III"]["Total"]),
                    ))

                    jQuery("#ind_uni2_{0}".format(id_turma)).fadeOut()
                    jQuery(".tabela_indicador_desempenho_container_mult_uni2").addClass("enabled")
                    if self.unidades == 4:
                        tot = x[1]["IV"]["Total"]
                    else:
                        tot = x[1]["F"]["Total"]
                    base3 = tot + x[1]["III"]["Desistente"]


                    self.total_multi_inicial_3 += x[1]["III"]["Total"]
                    self.total_multi_admitidos_3 += x[1]["III"]["Admitido"]
                    self.total_multi_transferidos_3 += x[1]["III"]["Transferido"]
                    self.total_multi_desistentes_3 += x[1]["III"]["Desistente"]
                    self.total_multi_aprovados_3 += x[1]["III"]["Aprovado"]
                    self.total_multi_reprovados_3 += x[1]["III"]["Reprovado"]
                    if self.unidades == 4:
                        self.total_multi_final_3 += x[1]["IV"]["Total"]
                    else:
                        self.total_multi_final_3 += x[1]["F"]["Total"]

                    total_base = self.total_multi_final_3 + self.total_multi_desistentes_3
                    jQuery("#total_multi_mat_inicial_unid3").text(self.total_multi_inicial_3)
                    jQuery("#total_multi_adm_unid3").text(self.total_multi_admitidos_3)
                    jQuery("#total_multi_trans_unid3").text(self.total_multi_transferidos_3)
                    jQuery("#total_multi_apro_unid3").text(self.total_multi_aprovados_3)
                    jQuery("#total_multi_rep_unid3").text(self.total_multi_reprovados_3)
                    jQuery("#total_multi_aban_unid3").text(self.total_multi_desistentes_3)
                    jQuery("#total_multi_base_calc_unid3").text(total_base)
                    jQuery("#total_multi_porc_apro_unid3").text(self.porcentagem(self.total_multi_aprovados_3, total_base))
                    jQuery("#total_multi_porc_rep_unid3").text(self.porcentagem(self.total_multi_reprovados_3, total_base))
                    jQuery("#total_multi_porc_aban_unid3").text(self.porcentagem(self.total_multi_desistentes_3, total_base))
                    jQuery("#total_multi_final_unid3").text(self.total_multi_final_3)

                    trhtml3.append(TR(
                        TH(x[0]),
                        TD(x[1]["III"]["Total"]),
                        TD(x[1]["III"]["Admitido"]),
                        TD(x[1]["III"]["Transferido"]),
                        TD(x[1]["III"]["Aprovado"]),
                        TD(x[1]["III"]["Reprovado"]),
                        TD(x[1]["III"]["Desistente"]),
                        TD(base3),
                        TD(self.porcentagem(x[1]["III"]["Aprovado"], base3)),
                        TD(self.porcentagem(x[1]["III"]["Reprovado"], base3)),
                        TD(self.porcentagem(x[1]["III"]["Desistente"], base3)),
                        TD(x[1]["IV"]["Total"]) if self.unidades == 4 else TD(x[1]["F"]["Total"]),
                    ))

                    jQuery("#ind_uni3_{0}".format(id_turma)).fadeOut()
                    jQuery(".tabela_indicador_desempenho_container_mult_uni3").addClass("enabled")
                    if self.unidades == 4:
                        base4 = x[1]["F"]["Total"] + x[1]["IV"]["Desistente"]

                        self.total_multi_inicial_4 += x[1]["IV"]["Total"]
                        self.total_multi_admitidos_4 += x[1]["IV"]["Admitido"]
                        self.total_multi_transferidos_4 += x[1]["IV"]["Transferido"]
                        self.total_multi_desistentes_4 += x[1]["IV"]["Desistente"]
                        self.total_multi_aprovados_4 += x[1]["IV"]["Aprovado"]
                        self.total_multi_reprovados_4 += x[1]["IV"]["Reprovado"]
                        self.total_multi_final_4 += x[1]["F"]["Total"]

                        total_base = self.total_multi_final_4 + self.total_multi_desistentes_4
                        jQuery("#total_multi_mat_inicial_unid4").text(self.total_multi_inicial_4)
                        jQuery("#total_multi_adm_unid4").text(self.total_multi_admitidos_4)
                        jQuery("#total_multi_trans_unid4").text(self.total_multi_transferidos_4)
                        jQuery("#total_multi_apro_unid4").text(self.total_multi_aprovados_4)
                        jQuery("#total_multi_rep_unid4").text(self.total_multi_reprovados_4)
                        jQuery("#total_multi_aban_unid4").text(self.total_multi_desistentes_4)
                        jQuery("#total_multi_base_calc_unid4").text(total_base)
                        jQuery("#total_multi_porc_apro_unid4").text(self.porcentagem(self.total_multi_aprovados_4, total_base))
                        jQuery("#total_multi_porc_rep_unid4").text(self.porcentagem(self.total_multi_reprovados_4, total_base))
                        jQuery("#total_multi_porc_aban_unid4").text(self.porcentagem(self.total_multi_desistentes_4, total_base))
                        jQuery("#total_multi_final_unid4").text(self.total_multi_final_4)

                        trhtml4.append(TR(
                            TH(x[0]),
                            TD(x[1]["IV"]["Total"]),
                            TD(x[1]["IV"]["Admitido"]),
                            TD(x[1]["IV"]["Transferido"]),
                            TD(x[1]["IV"]["Aprovado"]),
                            TD(x[1]["IV"]["Reprovado"]),
                            TD(x[1]["IV"]["Desistente"]),
                            TD(base4),
                            TD(self.porcentagem(x[1]["IV"]["Aprovado"], base4)),
                            TD(self.porcentagem(x[1]["IV"]["Reprovado"], base4)),
                            TD(self.porcentagem(x[1]["IV"]["Desistente"], base4)),
                            TD(x[1]["F"]["Total"]),
                        ))
                        jQuery("#ind_uni4_{0}".format(id_turma)).fadeOut()
                        jQuery(".tabela_indicador_desempenho_container_mult_uni4").addClass("enabled")
                    basef = x[1]["F"]["Total"] + x[1]["F"]["Desistente"]

                    self.total_multi_inicial_f += x[1]["I"]["Total"]
                    self.total_multi_admitidos_f += x[1]["F"]["Admitido"]
                    self.total_multi_transferidos_f += x[1]["F"]["Transferido"]
                    self.total_multi_desistentes_f += x[1]["F"]["Desistente"]
                    self.total_multi_aprovados_f += x[1]["F"]["Aprovado"]
                    self.total_multi_reprovados_f += x[1]["F"]["Reprovado"]
                    self.total_multi_final_f += x[1]["F"]["Total"]

                    total_base = self.total_multi_final_f + self.total_multi_desistentes_f
                    jQuery("#total_multi_mat_inicial_unidf").text(self.total_multi_inicial_f)
                    jQuery("#total_multi_adm_unidf").text(self.total_multi_admitidos_f)
                    jQuery("#total_multi_trans_unidf").text(self.total_multi_transferidos_f)
                    jQuery("#total_multi_apro_unidf").text(self.total_multi_aprovados_f)
                    jQuery("#total_multi_rep_unidf").text(self.total_multi_reprovados_f)
                    jQuery("#total_multi_aban_unidf").text(self.total_multi_desistentes_f)
                    jQuery("#total_multi_base_calc_unidf").text(total_base)
                    jQuery("#total_multi_porc_apro_unidf").text(self.porcentagem(self.total_multi_aprovados_f, total_base))
                    jQuery("#total_multi_porc_rep_unidf").text(self.porcentagem(self.total_multi_reprovados_f, total_base))
                    jQuery("#total_multi_porc_aban_unidf").text(self.porcentagem(self.total_multi_desistentes_f, total_base))
                    jQuery("#total_multi_final_unidf").text(self.total_multi_final_f)

                    trhtmlf.append(TR(
                        TH(x[0]),
                        TD(x[1]["I"]["Total"]),
                        TD(x[1]["F"]["Admitido"]),
                        TD(x[1]["F"]["Transferido"]),
                        TD(x[1]["F"]["Aprovado"]),
                        TD(x[1]["F"]["Reprovado"]),
                        TD(x[1]["F"]["Desistente"]),
                        TD(basef),
                        TD(self.porcentagem(x[1]["F"]["Aprovado"], basef)),
                        TD(self.porcentagem(x[1]["F"]["Reprovado"], basef)),
                        TD(self.porcentagem(x[1]["F"]["Desistente"], basef)),
                        TD(x[1]["F"]["Total"]),
                    ))
                    jQuery("#ind_unif_{0}".format(id_turma)).fadeOut()
                    jQuery(".tabela_indicador_desempenho_container_mult_unif").addClass("enabled")

                    if x[0] not in self.multisseriado_por_disciplina["ordem"]:
                        self.serie_ordem += 1
                        self.multisseriado_por_disciplina["ordem"].append(x[0])
                        self.multisseriado_por_disciplina["ids"][x[0]] = self.serie_ordem
                        self.multisseriado_por_disciplina["unid1"][x[0]] = {
                            "SÉRIE": x[0],
                            "MAT. INICIAL": x[1]["I"]["Total"],
                            "ADM": x[1]["I"]["Admitido"],
                            "TRANS": x[1]["I"]["Transferido"],
                            "APRO": x[1]["I"]["Aprovado"],
                            "REP": x[1]["I"]["Reprovado"],
                            "ABAN": x[1]["I"]["Desistente"],
                            "BASE. CALC": base1,
                            "APRO %": self.porcentagem(x[1]["I"]["Aprovado"], base1),
                            "REP %": self.porcentagem(x[1]["I"]["Reprovado"], base1),
                            "ABAN %": self.porcentagem(x[1]["I"]["Desistente"], base1),
                            "TOT. FINAL": x[1]["II"]["Total"],
                        }
                        self.multisseriado_por_disciplina["unid2"][x[0]] = {
                            "SÉRIE": x[0],
                            "MAT. INICIAL": x[1]["II"]["Total"],
                            "ADM": x[1]["II"]["Admitido"],
                            "TRANS": x[1]["II"]["Transferido"],
                            "APRO": x[1]["II"]["Aprovado"],
                            "REP": x[1]["II"]["Reprovado"],
                            "ABAN": x[1]["II"]["Desistente"],
                            "BASE. CALC": base2,
                            "APRO %": self.porcentagem(x[1]["II"]["Aprovado"], base2),
                            "REP %": self.porcentagem(x[1]["II"]["Reprovado"], base2),
                            "ABAN %": self.porcentagem(x[1]["II"]["Desistente"], base2),
                            "TOT. FINAL": x[1]["III"]["Total"],
                        }
                        self.multisseriado_por_disciplina["unid3"][x[0]] = {
                            "SÉRIE": x[0],
                            "MAT. INICIAL": x[1]["III"]["Total"],
                            "ADM": x[1]["III"]["Admitido"],
                            "TRANS": x[1]["III"]["Transferido"],
                            "APRO": x[1]["III"]["Aprovado"],
                            "REP": x[1]["III"]["Reprovado"],
                            "ABAN": x[1]["III"]["Desistente"],
                            "BASE. CALC": base3,
                            "APRO %": self.porcentagem(x[1]["III"]["Aprovado"], base3),
                            "REP %": self.porcentagem(x[1]["III"]["Reprovado"], base3),
                            "ABAN %": self.porcentagem(x[1]["III"]["Desistente"], base3),
                            "TOT. FINAL": x[1]["IV"]["Total"] if self.unidades == 4 else x[1]["F"]["Total"],
                        }
                        if self.unidades == 4:
                            self.multisseriado_por_disciplina["unid4"][x[0]] = {
                                "SÉRIE": x[0],
                                "MAT. INICIAL": x[1]["IV"]["Total"],
                                "ADM": x[1]["IV"]["Admitido"],
                                "TRANS": x[1]["IV"]["Transferido"],
                                "APRO": x[1]["IV"]["Aprovado"],
                                "REP": x[1]["IV"]["Reprovado"],
                                "ABAN": x[1]["IV"]["Desistente"],
                                "BASE. CALC": base4,
                                "APRO %": self.porcentagem(x[1]["IV"]["Aprovado"], base4),
                                "REP %": self.porcentagem(x[1]["IV"]["Reprovado"], base4),
                                "ABAN %": self.porcentagem(x[1]["IV"]["Desistente"], base4),
                                "TOT. FINAL": x[1]["F"]["Total"],
                            }
                        self.multisseriado_por_disciplina["unidf"][x[0]] = {
                            "SÉRIE": x[0],
                            "MAT. INICIAL": x[1]["I"]["Total"],
                            "ADM": x[1]["F"]["Admitido"],
                            "TRANS": x[1]["F"]["Transferido"],
                            "APRO": x[1]["F"]["Aprovado"],
                            "REP": x[1]["F"]["Reprovado"],
                            "ABAN": x[1]["F"]["Desistente"],
                            "BASE. CALC": basef,
                            "APRO %": self.porcentagem(x[1]["F"]["Aprovado"], basef),
                            "REP %": self.porcentagem(x[1]["F"]["Reprovado"], basef),
                            "ABAN %": self.porcentagem(x[1]["F"]["Desistente"], basef),
                            "TOT. FINAL": x[1]["F"]["Total"],
                        }
                    else:
                        self.multisseriado_por_disciplina["unid1"][x[0]]["MAT. INICIAL"] += x[1]["I"]["Total"]
                        self.multisseriado_por_disciplina["unid1"][x[0]]["ADM"] += x[1]["I"]["Admitido"]
                        self.multisseriado_por_disciplina["unid1"][x[0]]["TRANS"] += x[1]["I"]["Transferido"]
                        self.multisseriado_por_disciplina["unid1"][x[0]]["APRO"] += x[1]["I"]["Aprovado"]
                        self.multisseriado_por_disciplina["unid1"][x[0]]["REP"] += x[1]["I"]["Reprovado"]
                        self.multisseriado_por_disciplina["unid1"][x[0]]["ABAN"] += x[1]["I"]["Desistente"]
                        self.multisseriado_por_disciplina["unid1"][x[0]]["BASE. CALC"] += base1
                        self.multisseriado_por_disciplina["unid1"][x[0]]["APRO %"] = self.porcentagem(self.multisseriado_por_disciplina["unid1"][x[0]]["APRO"], self.multisseriado_por_disciplina["unid1"][x[0]]["BASE. CALC"])
                        self.multisseriado_por_disciplina["unid1"][x[0]]["REP %"] = self.porcentagem(self.multisseriado_por_disciplina["unid1"][x[0]]["REP"], self.multisseriado_por_disciplina["unid1"][x[0]]["BASE. CALC"])
                        self.multisseriado_por_disciplina["unid1"][x[0]]["ABAN %"] = self.porcentagem(self.multisseriado_por_disciplina["unid1"][x[0]]["ABAN"], self.multisseriado_por_disciplina["unid1"][x[0]]["BASE. CALC"])
                        self.multisseriado_por_disciplina["unid1"][x[0]]["TOT. FINAL"] += x[1]["II"]["Total"]

                        self.multisseriado_por_disciplina["unid2"][x[0]]["MAT. INICIAL"] += x[1]["II"]["Total"]
                        self.multisseriado_por_disciplina["unid2"][x[0]]["ADM"] += x[1]["II"]["Admitido"]
                        self.multisseriado_por_disciplina["unid2"][x[0]]["TRANS"] += x[1]["II"]["Transferido"]
                        self.multisseriado_por_disciplina["unid2"][x[0]]["APRO"] += x[1]["II"]["Aprovado"]
                        self.multisseriado_por_disciplina["unid2"][x[0]]["REP"] += x[1]["II"]["Reprovado"]
                        self.multisseriado_por_disciplina["unid2"][x[0]]["ABAN"] += x[1]["II"]["Desistente"]
                        self.multisseriado_por_disciplina["unid2"][x[0]]["BASE. CALC"] += base2
                        self.multisseriado_por_disciplina["unid2"][x[0]]["APRO %"] = self.porcentagem(self.multisseriado_por_disciplina["unid2"][x[0]]["APRO"], self.multisseriado_por_disciplina["unid2"][x[0]]["BASE. CALC"])
                        self.multisseriado_por_disciplina["unid2"][x[0]]["REP %"] = self.porcentagem(self.multisseriado_por_disciplina["unid2"][x[0]]["REP"], self.multisseriado_por_disciplina["unid2"][x[0]]["BASE. CALC"])
                        self.multisseriado_por_disciplina["unid2"][x[0]]["ABAN %"] = self.porcentagem(self.multisseriado_por_disciplina["unid2"][x[0]]["ABAN"], self.multisseriado_por_disciplina["unid2"][x[0]]["BASE. CALC"])
                        self.multisseriado_por_disciplina["unid2"][x[0]]["TOT. FINAL"] += x[1]["III"]["Total"]

                        self.multisseriado_por_disciplina["unid3"][x[0]]["MAT. INICIAL"] += x[1]["III"]["Total"]
                        self.multisseriado_por_disciplina["unid3"][x[0]]["ADM"] += x[1]["III"]["Admitido"]
                        self.multisseriado_por_disciplina["unid3"][x[0]]["TRANS"] += x[1]["III"]["Transferido"]
                        self.multisseriado_por_disciplina["unid3"][x[0]]["APRO"] += x[1]["III"]["Aprovado"]
                        self.multisseriado_por_disciplina["unid3"][x[0]]["REP"] += x[1]["III"]["Reprovado"]
                        self.multisseriado_por_disciplina["unid3"][x[0]]["ABAN"] += x[1]["III"]["Desistente"]
                        self.multisseriado_por_disciplina["unid3"][x[0]]["BASE. CALC"] += base3
                        self.multisseriado_por_disciplina["unid3"][x[0]]["APRO %"] = self.porcentagem(self.multisseriado_por_disciplina["unid3"][x[0]]["APRO"], self.multisseriado_por_disciplina["unid3"][x[0]]["BASE. CALC"])
                        self.multisseriado_por_disciplina["unid3"][x[0]]["REP %"] = self.porcentagem(self.multisseriado_por_disciplina["unid3"][x[0]]["REP"], self.multisseriado_por_disciplina["unid3"][x[0]]["BASE. CALC"])
                        self.multisseriado_por_disciplina["unid3"][x[0]]["ABAN %"] = self.porcentagem(self.multisseriado_por_disciplina["unid3"][x[0]]["ABAN"], self.multisseriado_por_disciplina["unid3"][x[0]]["BASE. CALC"])
                        if self.unidades == 4:
                            self.multisseriado_por_disciplina["unid3"][x[0]]["TOT. FINAL"] += x[1]["IV"]["Total"]

                            self.multisseriado_por_disciplina["unid4"][x[0]]["MAT. INICIAL"] += x[1]["IV"]["Total"]
                            self.multisseriado_por_disciplina["unid4"][x[0]]["ADM"] += x[1]["IV"]["Admitido"]
                            self.multisseriado_por_disciplina["unid4"][x[0]]["TRANS"] += x[1]["IV"]["Transferido"]
                            self.multisseriado_por_disciplina["unid4"][x[0]]["APRO"] += x[1]["IV"]["Aprovado"]
                            self.multisseriado_por_disciplina["unid4"][x[0]]["REP"] += x[1]["IV"]["Reprovado"]
                            self.multisseriado_por_disciplina["unid4"][x[0]]["ABAN"] += x[1]["IV"]["Desistente"]
                            self.multisseriado_por_disciplina["unid4"][x[0]]["BASE. CALC"] += base4
                            self.multisseriado_por_disciplina["unid4"][x[0]]["APRO %"] = self.porcentagem(self.multisseriado_por_disciplina["unid4"][x[0]]["APRO"], self.multisseriado_por_disciplina["unid4"][x[0]]["BASE. CALC"])
                            self.multisseriado_por_disciplina["unid4"][x[0]]["REP %"] += self.porcentagem(self.multisseriado_por_disciplina["unid4"][x[0]]["REP"], self.multisseriado_por_disciplina["unid4"][x[0]]["BASE. CALC"])
                            self.multisseriado_por_disciplina["unid4"][x[0]]["ABAN %"] += self.porcentagem(self.multisseriado_por_disciplina["unid4"][x[0]]["ABAN"], self.multisseriado_por_disciplina["unid4"][x[0]]["BASE. CALC"])
                            self.multisseriado_por_disciplina["unid4"][x[0]]["TOT. FINAL"] += x[1]["F"]["Total"]
                        else:
                            self.multisseriado_por_disciplina["unid3"][x[0]]["TOT. FINAL"] += x[1]["F"]["Total"]

                        self.multisseriado_por_disciplina["unidf"][x[0]]["MAT. INICIAL"] += x[1]["I"]["Total"]
                        self.multisseriado_por_disciplina["unidf"][x[0]]["ADM"] += x[1]["F"]["Admitido"]
                        self.multisseriado_por_disciplina["unidf"][x[0]]["TRANS"] += x[1]["F"]["Transferido"]
                        self.multisseriado_por_disciplina["unidf"][x[0]]["APRO"] += x[1]["F"]["Aprovado"]
                        self.multisseriado_por_disciplina["unidf"][x[0]]["REP"] += x[1]["F"]["Reprovado"]
                        self.multisseriado_por_disciplina["unidf"][x[0]]["ABAN"] += x[1]["F"]["Desistente"]
                        self.multisseriado_por_disciplina["unidf"][x[0]]["BASE. CALC"] += basef
                        self.multisseriado_por_disciplina["unidf"][x[0]]["APRO %"] = self.porcentagem(self.multisseriado_por_disciplina["unidf"][x[0]]["APRO"], self.multisseriado_por_disciplina["unidf"][x[0]]["BASE. CALC"])
                        self.multisseriado_por_disciplina["unidf"][x[0]]["REP %"] = self.porcentagem(self.multisseriado_por_disciplina["unidf"][x[0]]["REP"], self.multisseriado_por_disciplina["unidf"][x[0]]["BASE. CALC"])
                        self.multisseriado_por_disciplina["unidf"][x[0]]["ABAN %"] = self.porcentagem(self.multisseriado_por_disciplina["unidf"][x[0]]["ABAN"], self.multisseriado_por_disciplina["unidf"][x[0]]["BASE. CALC"])
                        self.multisseriado_por_disciplina["unidf"][x[0]]["TOT. FINAL"] += x[1]["F"]["Total"]
                    self.html_indicador_multi_por_disciplina(x[0])
                if tem_indicador:
                    trhtml1.html_to("#tbody_ind_uni1_{0}".format(id_turma))
                    trhtml2.html_to("#tbody_ind_uni2_{0}".format(id_turma))
                    trhtml3.html_to("#tbody_ind_uni3_{0}".format(id_turma))
                    if self.unidades == 4:
                        trhtml4.html_to("#tbody_ind_uni4_{0}".format(id_turma))
                    trhtmlf.html_to("#tbody_ind_unif_{0}".format(id_turma))
                else:
                    trhtml1 = TR(
                        TH(json.turma),
                        TD("DADOS INSUFICIENTES", _colspan=13),
                    )
                    trhtml1.html_to("#tbody_ind_uni1_{0}".format(id_turma))
                    jQuery("#ind_uni1_{0}".format(id_turma)).fadeOut()
                    jQuery(".tabela_indicador_desempenho_container_uni1").addClass("enabled")
                    trhtml2 = TR(
                        TH(json.turma),
                        TD("DADOS INSUFICIENTES", _colspan=13),
                    )
                    trhtml2.html_to("#tbody_ind_uni2_{0}".format(id_turma))
                    jQuery("#ind_uni2_{0}".format(id_turma)).fadeOut()
                    jQuery(".tabela_indicador_desempenho_container_uni2").addClass("enabled")
                    trhtml3 = TR(
                        TH(json.turma),
                        TD("DADOS INSUFICIENTES", _colspan=13),
                    )
                    trhtml3.html_to("#tbody_ind_uni3_{0}".format(id_turma))
                    jQuery("#ind_uni3_{0}".format(id_turma)).fadeOut()
                    jQuery(".tabela_indicador_desempenho_container_uni3").addClass("enabled")
                    if self.unidades == 4:
                        trhtml4 = TR(
                            TH(json.turma),
                            TD("DADOS INSUFICIENTES", _colspan=13),
                        )
                        trhtml4.html_to("#tbody_ind_uni4_{0}".format(id_turma))
                        jQuery("#ind_uni4_{0}".format(id_turma)).fadeOut()
                        jQuery(".tabela_indicador_desempenho_container_uni4").addClass("enabled")
                    trhtmlf = TR(
                        TH(json.turma),
                        TD("DADOS INSUFICIENTES", _colspan=13),
                    )
                    jQuery("#ind_unif_{0}".format(id_turma)).fadeOut()
                    trhtmlf.html_to("#tbody_ind_unif_{0}".format(id_turma))
                    jQuery(".tabela_indicador_desempenho_container_unif").addClass("enabled")
            else:
                tem_indicador = False
                for x in json.indicadores:
                    tem_indicador = True
                    base1 = x[1]["II"]["Total"] + x[1]["I"]["Desistente"]

                    self.total_inicial_1 += x[1]["I"]["Total"]
                    self.total_admitidos_1 += x[1]["I"]["Admitido"]
                    self.total_transferidos_1 += x[1]["I"]["Transferido"]
                    self.total_desistentes_1 += x[1]["I"]["Desistente"]
                    self.total_aprovados_1 += x[1]["I"]["Aprovado"]
                    self.total_reprovados_1 += x[1]["I"]["Reprovado"]
                    self.total_final_1 += x[1]["II"]["Total"]

                    total_base = self.total_final_1 + self.total_desistentes_1
                    jQuery("#total_mat_inicial_unid1").text(self.total_inicial_1)
                    jQuery("#total_adm_unid1").text(self.total_admitidos_1)
                    jQuery("#total_trans_unid1").text(self.total_transferidos_1)
                    jQuery("#total_apro_unid1").text(self.total_aprovados_1)
                    jQuery("#total_rep_unid1").text(self.total_reprovados_1)
                    jQuery("#total_aban_unid1").text(self.total_desistentes_1)
                    jQuery("#total_base_calc_unid1").text(total_base)
                    jQuery("#total_porc_apro_unid1").text(self.porcentagem(self.total_aprovados_1, total_base))
                    jQuery("#total_porc_rep_unid1").text(self.porcentagem(self.total_reprovados_1, total_base))
                    jQuery("#total_porc_aban_unid1").text(self.porcentagem(self.total_desistentes_1, total_base))
                    jQuery("#total_final_unid1").text(self.total_final_1)

                    trhtml1 = TR(
                        TH(json.turma),
                        TD(x[1]["I"]["Total"]),
                        TD(x[1]["I"]["Admitido"]),
                        TD(x[1]["I"]["Transferido"]),
                        TD(x[1]["I"]["Aprovado"]),
                        TD(x[1]["I"]["Reprovado"]),
                        TD(x[1]["I"]["Desistente"]),
                        TD(base1),
                        TD(self.porcentagem(x[1]["I"]["Aprovado"], base1)),
                        TD(self.porcentagem(x[1]["I"]["Reprovado"], base1)),
                        TD(self.porcentagem(x[1]["I"]["Desistente"], base1)),
                        TD(x[1]["II"]["Total"]),
                    )
                    trhtml1.html_to("#tbody_ind_uni1_{0}".format(id_turma))
                    jQuery("#ind_uni1_{0}".format(id_turma)).fadeOut()
                    jQuery(".tabela_indicador_desempenho_container_uni1").addClass("enabled")
                    base2 = x[1]["III"]["Total"] + x[1]["II"]["Desistente"]

                    self.total_inicial_2 += x[1]["II"]["Total"]
                    self.total_admitidos_2 += x[1]["II"]["Admitido"]
                    self.total_transferidos_2 += x[1]["II"]["Transferido"]
                    self.total_desistentes_2 += x[1]["II"]["Desistente"]
                    self.total_aprovados_2 += x[1]["II"]["Aprovado"]
                    self.total_reprovados_2 += x[1]["II"]["Reprovado"]
                    self.total_final_2 += x[1]["III"]["Total"]

                    total_base = self.total_final_2 + self.total_desistentes_2
                    jQuery("#total_mat_inicial_unid2").text(self.total_inicial_2)
                    jQuery("#total_adm_unid2").text(self.total_admitidos_2)
                    jQuery("#total_trans_unid2").text(self.total_transferidos_2)
                    jQuery("#total_apro_unid2").text(self.total_aprovados_2)
                    jQuery("#total_rep_unid2").text(self.total_reprovados_2)
                    jQuery("#total_aban_unid2").text(self.total_desistentes_2)
                    jQuery("#total_base_calc_unid2").text(total_base)
                    jQuery("#total_porc_apro_unid2").text(self.porcentagem(self.total_aprovados_2, total_base))
                    jQuery("#total_porc_rep_unid2").text(self.porcentagem(self.total_reprovados_2, total_base))
                    jQuery("#total_porc_aban_unid2").text(self.porcentagem(self.total_desistentes_2, total_base))
                    jQuery("#total_final_unid2").text(self.total_final_2)

                    trhtml2 = TR(
                        TH(json.turma),
                        TD(x[1]["II"]["Total"]),
                        TD(x[1]["II"]["Admitido"]),
                        TD(x[1]["II"]["Transferido"]),
                        TD(x[1]["II"]["Aprovado"]),
                        TD(x[1]["II"]["Reprovado"]),
                        TD(x[1]["II"]["Desistente"]),
                        TD(base2),
                        TD(self.porcentagem(x[1]["II"]["Aprovado"], base2)),
                        TD(self.porcentagem(x[1]["II"]["Reprovado"], base2)),
                        TD(self.porcentagem(x[1]["II"]["Desistente"], base2)),
                        TD(x[1]["III"]["Total"]),
                    )
                    trhtml2.html_to("#tbody_ind_uni2_{0}".format(id_turma))
                    jQuery("#ind_uni2_{0}".format(id_turma)).fadeOut()
                    jQuery(".tabela_indicador_desempenho_container_uni2").addClass("enabled")
                    if self.unidades == 4:
                        tot = x[1]["IV"]["Total"]
                    else:
                        tot = x[1]["F"]["Total"]
                    base3 = tot + x[1]["III"]["Desistente"]

                    self.total_inicial_3 += x[1]["III"]["Total"]
                    self.total_admitidos_3 += x[1]["III"]["Admitido"]
                    self.total_transferidos_3 += x[1]["III"]["Transferido"]
                    self.total_desistentes_3 += x[1]["III"]["Desistente"]
                    self.total_aprovados_3 += x[1]["III"]["Aprovado"]
                    self.total_reprovados_3 += x[1]["III"]["Reprovado"]
                    if self.unidades == 4:
                        self.total_final_3 += x[1]["IV"]["Total"]
                    else:
                        self.total_final_3 += x[1]["F"]["Total"]

                    total_base = self.total_final_3 + self.total_desistentes_3
                    jQuery("#total_mat_inicial_unid3").text(self.total_inicial_3)
                    jQuery("#total_adm_unid3").text(self.total_admitidos_3)
                    jQuery("#total_trans_unid3").text(self.total_transferidos_3)
                    jQuery("#total_apro_unid3").text(self.total_aprovados_3)
                    jQuery("#total_rep_unid3").text(self.total_reprovados_3)
                    jQuery("#total_aban_unid3").text(self.total_desistentes_3)
                    jQuery("#total_base_calc_unid3").text(total_base)
                    jQuery("#total_porc_apro_unid3").text(self.porcentagem(self.total_aprovados_3, total_base))
                    jQuery("#total_porc_rep_unid3").text(self.porcentagem(self.total_reprovados_3, total_base))
                    jQuery("#total_porc_aban_unid3").text(self.porcentagem(self.total_desistentes_3, total_base))
                    jQuery("#total_final_unid3").text(self.total_final_3)

                    trhtml3 = TR(
                        TH(json.turma),
                        TD(x[1]["III"]["Total"]),
                        TD(x[1]["III"]["Admitido"]),
                        TD(x[1]["III"]["Transferido"]),
                        TD(x[1]["III"]["Aprovado"]),
                        TD(x[1]["III"]["Reprovado"]),
                        TD(x[1]["III"]["Desistente"]),
                        TD(base3),
                        TD(self.porcentagem(x[1]["III"]["Aprovado"], base3)),
                        TD(self.porcentagem(x[1]["III"]["Reprovado"], base3)),
                        TD(self.porcentagem(x[1]["III"]["Desistente"], base3)),
                        TD(x[1]["IV"]["Total"]) if self.unidades == 4 else TD(x[1]["F"]["Total"]),
                    )
                    trhtml3.html_to("#tbody_ind_uni3_{0}".format(id_turma))
                    jQuery("#ind_uni3_{0}".format(id_turma)).fadeOut()
                    jQuery(".tabela_indicador_desempenho_container_uni3").addClass("enabled")
                    if self.unidades == 4:
                        base4 = x[1]["F"]["Total"] + x[1]["IV"]["Desistente"]

                        self.total_inicial_4 += x[1]["IV"]["Total"]
                        self.total_admitidos_4 += x[1]["IV"]["Admitido"]
                        self.total_transferidos_4 += x[1]["IV"]["Transferido"]
                        self.total_desistentes_4 += x[1]["IV"]["Desistente"]
                        self.total_aprovados_4 += x[1]["IV"]["Aprovado"]
                        self.total_reprovados_4 += x[1]["IV"]["Reprovado"]
                        self.total_final_4 += x[1]["F"]["Total"]

                        total_base = self.total_final_4 + self.total_desistentes_4
                        jQuery("#total_mat_inicial_unid4").text(self.total_inicial_4)
                        jQuery("#total_adm_unid4").text(self.total_admitidos_4)
                        jQuery("#total_trans_unid4").text(self.total_transferidos_4)
                        jQuery("#total_apro_unid4").text(self.total_aprovados_4)
                        jQuery("#total_rep_unid4").text(self.total_reprovados_4)
                        jQuery("#total_aban_unid4").text(self.total_desistentes_4)
                        jQuery("#total_base_calc_unid4").text(total_base)
                        jQuery("#total_porc_apro_unid4").text(self.porcentagem(self.total_aprovados_4, total_base))
                        jQuery("#total_porc_rep_unid4").text(self.porcentagem(self.total_reprovados_4, total_base))
                        jQuery("#total_porc_aban_unid4").text(self.porcentagem(self.total_desistentes_4, total_base))
                        jQuery("#total_final_unid4").text(self.total_final_4)

                        trhtml4 = TR(
                            TH(json.turma),
                            TD(x[1]["IV"]["Total"]),
                            TD(x[1]["IV"]["Admitido"]),
                            TD(x[1]["IV"]["Transferido"]),
                            TD(x[1]["IV"]["Aprovado"]),
                            TD(x[1]["IV"]["Reprovado"]),
                            TD(x[1]["IV"]["Desistente"]),
                            TD(base4),
                            TD(self.porcentagem(x[1]["IV"]["Aprovado"], base4)),
                            TD(self.porcentagem(x[1]["IV"]["Reprovado"], base4)),
                            TD(self.porcentagem(x[1]["IV"]["Desistente"], base4)),
                            TD(x[1]["F"]["Total"]),
                        )
                        trhtml4.html_to("#tbody_ind_uni4_{0}".format(id_turma))
                        jQuery("#ind_uni4_{0}".format(id_turma)).fadeOut()
                        jQuery(".tabela_indicador_desempenho_container_uni4").addClass("enabled")
                    basef = x[1]["F"]["Total"] + x[1]["F"]["Desistente"]

                    self.total_inicial_f += x[1]["I"]["Total"]
                    self.total_admitidos_f += x[1]["F"]["Admitido"]
                    self.total_transferidos_f += x[1]["F"]["Transferido"]
                    self.total_desistentes_f += x[1]["F"]["Desistente"]
                    self.total_aprovados_f += x[1]["F"]["Aprovado"]
                    self.total_reprovados_f += x[1]["F"]["Reprovado"]
                    self.total_final_f += x[1]["F"]["Total"]

                    total_base = self.total_final_f + self.total_desistentes_f
                    jQuery("#total_mat_inicial_unidf").text(self.total_inicial_f)
                    jQuery("#total_adm_unidf").text(self.total_admitidos_f)
                    jQuery("#total_trans_unidf").text(self.total_transferidos_f)
                    jQuery("#total_apro_unidf").text(self.total_aprovados_f)
                    jQuery("#total_rep_unidf").text(self.total_reprovados_f)
                    jQuery("#total_aban_unidf").text(self.total_desistentes_f)
                    jQuery("#total_base_calc_unidf").text(total_base)
                    jQuery("#total_porc_apro_unidf").text(self.porcentagem(self.total_aprovados_f, total_base))
                    jQuery("#total_porc_rep_unidf").text(self.porcentagem(self.total_reprovados_f, total_base))
                    jQuery("#total_porc_aban_unidf").text(self.porcentagem(self.total_desistentes_f, total_base))
                    jQuery("#total_final_unidf").text(self.total_final_f)

                    trhtmlf = TR(
                        TH(json.turma),
                        TD(x[1]["I"]["Total"]),
                        TD(x[1]["F"]["Admitido"]),
                        TD(x[1]["F"]["Transferido"]),
                        TD(x[1]["F"]["Aprovado"]),
                        TD(x[1]["F"]["Reprovado"]),
                        TD(x[1]["F"]["Desistente"]),
                        TD(basef),
                        TD(self.porcentagem(x[1]["F"]["Aprovado"], basef)),
                        TD(self.porcentagem(x[1]["F"]["Reprovado"], basef)),
                        TD(self.porcentagem(x[1]["F"]["Desistente"], basef)),
                        TD(x[1]["F"]["Total"]),
                    )
                    jQuery("#ind_unif_{0}".format(id_turma)).fadeOut()
                    trhtmlf.html_to("#tbody_ind_unif_{0}".format(id_turma))
                    jQuery(".tabela_indicador_desempenho_container_unif").addClass("enabled")
                if tem_indicador is False:
                    trhtml1 = TR(
                        TH(json.turma),
                        TD("DADOS INSUFICIENTES", _colspan=12),
                    )
                    trhtml1.html_to("#tbody_ind_uni1_{0}".format(id_turma))
                    jQuery("#ind_uni1_{0}".format(id_turma)).fadeOut()
                    jQuery(".tabela_indicador_desempenho_container_uni1").addClass("enabled")
                    trhtml2 = TR(
                        TH(json.turma),
                        TD("DADOS INSUFICIENTES", _colspan=12),
                    )
                    trhtml2.html_to("#tbody_ind_uni2_{0}".format(id_turma))
                    jQuery("#ind_uni2_{0}".format(id_turma)).fadeOut()
                    jQuery(".tabela_indicador_desempenho_container_uni2").addClass("enabled")
                    trhtml3 = TR(
                        TH(json.turma),
                        TD("DADOS INSUFICIENTES", _colspan=12),
                    )
                    trhtml3.html_to("#tbody_ind_uni3_{0}".format(id_turma))
                    jQuery("#ind_uni3_{0}".format(id_turma)).fadeOut()
                    jQuery(".tabela_indicador_desempenho_container_uni3").addClass("enabled")
                    if self.unidades == 4:
                        trhtml4 = TR(
                            TH(json.turma),
                            TD("DADOS INSUFICIENTES", _colspan=12),
                        )
                        trhtml4.html_to("#tbody_ind_uni4_{0}".format(id_turma))
                        jQuery("#ind_uni4_{0}".format(id_turma)).fadeOut()
                        jQuery(".tabela_indicador_desempenho_container_uni4").addClass("enabled")
                    trhtmlf = TR(
                        TH(json.turma),
                        TD("DADOS INSUFICIENTES", _colspan=12),
                    )
                    jQuery("#ind_unif_{0}".format(id_turma)).fadeOut()
                    trhtmlf.html_to("#tbody_ind_unif_{0}".format(id_turma))
                    jQuery(".tabela_indicador_desempenho_container_unif").addClass("enabled")

        else:
            jQuery("#ind_uni1_{0}".format(id_turma)).html("Falhou")
            jQuery("#ind_uni2_{0}".format(id_turma)).html("Falhou")
            jQuery("#ind_uni3_{0}".format(id_turma)).html("Falhou")
            jQuery("#ind_uni4_{0}".format(id_turma)).html("Falhou")
            jQuery("#ind_unif_{0}".format(id_turma)).html("Falhou")

    def html_indicador_multi_por_disciplina(self, serie):
        dados = self.multisseriado_por_disciplina

        unidades = [x + 1 for x in range(self.unidades)]
        unidades.append("f")
        for und in unidades:
            if jQuery("#tbody-indicador_multi_serie_{0}_und_{1}".format(self.multisseriado_por_disciplina["ids"][serie], und)).length == 0:
                TBODY(
                    TR(
                        TD(STRONG(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["SÉRIE"])),
                        TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["MAT. INICIAL"]),
                        TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["ADM"]),
                        TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["TRANS"]),
                        TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["APRO"]),
                        TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["REP"]),
                        TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["ABAN"]),
                        TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["BASE. CALC"]),
                        TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["APRO %"]),
                        TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["REP %"]),
                        TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["ABAN %"]),
                        TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["TOT. FINAL"]),
                    ),
                    _id="tbody-indicador_multi_serie_{0}_und_{1}".format(self.multisseriado_por_disciplina["ids"][serie], und),
                    _class="tbody-indicador-container"
                ).append_to("#tabela_indicador_multi_serie_{0}".format(und))

            else:
                TR(

                    TD(STRONG(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["SÉRIE"])),
                    TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["MAT. INICIAL"]),
                    TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["ADM"]),
                    TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["TRANS"]),
                    TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["APRO"]),
                    TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["REP"]),
                    TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["ABAN"]),
                    TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["BASE. CALC"]),
                    TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["APRO %"]),
                    TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["REP %"]),
                    TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["ABAN %"]),
                    TD(self.multisseriado_por_disciplina["unid{0}".format(und)][serie]["TOT. FINAL"]),
                ).html_to("#tbody-indicador_multi_serie_{0}_und_{1}".format(self.multisseriado_por_disciplina["ids"][serie], und))

            jQuery("#tbody-indicador_multi_total_und_{0}".format(und)).remove()
            total_multi_base = self["total_multi_final_{0}".format(und)] + self["total_multi_desistentes_{0}".format(und)]
            TBODY(
                TR(
                    TD(STRONG("Total")),
                    TD(STRONG(self["total_multi_inicial_{0}".format(und)])),
                    TD(STRONG(self["total_multi_admitidos_{0}".format(und)])),
                    TD(STRONG(self["total_multi_transferidos_{0}".format(und)])),
                    TD(STRONG(self["total_multi_aprovados_{0}".format(und)])),
                    TD(STRONG(self["total_multi_reprovados_{0}".format(und)])),
                    TD(STRONG(self["total_multi_desistentes_{0}".format(und)])),
                    TD(STRONG(total_multi_base)),
                    TD(STRONG(self.porcentagem(self["total_multi_aprovados_{0}".format(und)], total_multi_base))),
                    TD(STRONG(self.porcentagem(self["total_multi_reprovados_{0}".format(und)], total_multi_base))),
                    TD(STRONG(self.porcentagem(self["total_multi_desistentes_{0}".format(und)], total_multi_base))),
                    TD(STRONG(self["total_multi_final_{0}".format(und)])),
                ),
                _id="tbody-indicador_multi_total_und_{0}".format(und),
                _class="tbody-indicador-container"
            ).append_to("#tabela_indicador_multi_serie_{0}".format(und))


__pragma__('nokwargs')
