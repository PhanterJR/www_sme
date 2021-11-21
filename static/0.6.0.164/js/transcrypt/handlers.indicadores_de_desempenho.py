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
                TH("SERIE"),
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

        for x in self.turmas:
            if x.multisseriado:
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

        html.html_to("#main-container")
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
                    base3 = tot - x[1]["III"]["Desistente"]
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


__pragma__('nokwargs')
