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
TABLE = helpers.XmlConstructor.tagger('table')
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
        turma = window.PhanterPWA.Request.get_param("turma")
        tur = ""
        if turma is not None:
            tur = DIV(turma, _class="phanterpwa-breadcrumb")
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)
        arg2 = window.PhanterPWA.Request.get_arg(2)
        arg3 = window.PhanterPWA.Request.get_arg(3)
        arg4 = window.PhanterPWA.Request.get_arg(4)

        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("BOLETINS", _class="phanterpwa-breadcrumb"),
                        tur,
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container extend"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    DIV(
                        DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                        _style="text-align:center; padding: 50px 0;"
                    ),
                    _id="content-boletins",
                    _class='p-row card e-padding_auto'
                ),

                _class="phanterpwa-container p-container extend"
            )
        )
        if str(arg0).isdigit() and str(arg1).isdigit() and str(arg2).isdigit():
            self.Boletins = Boletins(self, arg0, arg1, arg2)


        BackButton1 = left_bar.LeftBarButton(
            "back_boletins",
            "Voltar",
            I(_class="fas fa-arrow-circle-left"),
            **{
                "tag": "a",
                "_href": window.PhanterPWA.Request.get_param("retornar"),
                "position": "top",
                "show_if_way_match": r"^boletins\/[0-9]{1,}\/[0-9]{1,}.*$"
            }
        )

        window.PhanterPWA.Components['left_bar'].add_button(BackButton1)


class Boletins():
    def __init__(self, index_instance, escola, ano_letivo, turma):
        self.id_escola = escola
        self.ano_letivo = ano_letivo
        self.id_turma = turma
        self.index_instance = index_instance
        self._get_dados_conselho()
        BackButton1 = left_bar.LeftBarButton(
            "back_boletins",
            "Voltar",
            I(_class="fas fa-arrow-circle-left"),
            **{
                "tag": "a",
                "_href": window.PhanterPWA.XWAY("turma-simples", self.id_escola, self.ano_letivo),
                "position": "top",
                "show_if_way_match": r"^boletins\/[0-9]{1,}\/[0-9]{1,}.*$"
            }
        )

        window.PhanterPWA.Components['left_bar'].add_button(BackButton1)

    def _get_dados_conselho(self):

        window.PhanterPWA.GET(
            "api",
            "boletins",
            self.id_escola,
            self.ano_letivo,
            self.id_turma,
            onComplete=self.after_get
        )

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            boletins = json.data.boletins
            self.turma = json.data.turma
            self.processar_boletins(boletins)

    def processar_boletins(self, boletins):
        tur = DIV(self.turma, _class="phanterpwa-breadcrumb")

        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("BOLETINS", _class="phanterpwa-breadcrumb"),
                        tur,
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container extend"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                            _style="text-align:center; padding: 50px 0;"
                        ),
                        _id="content-boletins",
                        _class='p-row card e-padding_auto continuos'
                    ),
                    _class="phanterpwa-media-print-container"
                ),
                DIV(_id="modal_cmp_curriculares_container"),
                DIV(
                    I(_class="fas fa-marker"),
                    _class="exibir_media_final_switch fixed_button",
                    _title="Ocultar Recuperação e Média Final"
                ),
                _class="phanterpwa-container p-container extend"
            )
        )
        html.html_to("#main-container")

        html_boletins = DIV(
            DIV("BOLETINS", _class="p-col w1p100 phanterpwa-widget-form-separator"),
            _class="historicos-conteudo"
        )
        if boletins is not None and boletins is not js_undefined:
            cont = 0
            for x in boletins:
                cont += 1
                _class = ""
                if cont % 4:
                    _class = " quebra-linha"
                html_ficha = P(
                    "Boletin não encontrado no ano letivo de ",
                    STRONG(x.ano_letivo), "."
                )
                if x.boletin is not None and x.boletin is not js_undefined:
                    tabela_rotulo = TABLE(
                        TR(TH("Aluno(a):"), TD(x.aluno, _colspan=4)),
                        TR(TH("Turma:"), TD(x.turma), TH("Série:"), TD(x.serie)),
                        _class="tabela_ficha_individual",
                        _style="width: 100%; margin-bottom: 5px;"
                    )
                    tabela = TABLE(
                        _class="tabela_ficha_individual p-row"
                    )
                    for y in x.boletin:
                        linha = TR()
                        for c in y:
                            if c[1]["tipo"] == "cabecalho":
                                linha.append(TH(c[0], **dict(c[1])))
                            elif c[1]["tipo"] == "cabecalho_rotate":
                                linha.append(TH(DIV(c[0], _class="rotate"), **dict(c[1])))
                            else:
                                linha.append(TD(c[0], **dict(c[1])))
                        tabela.append(linha)
                    html_ficha = DIV(
                        DIV(
                            DIV(
                                tabela_rotulo,
                                tabela,
                                _style="padding: 10px;"
                            ),
                            _class="p-row"
                        ),
                        _class="p-col w1p100 w4p50 dont_cut_inside"
                    )
                html_boletins.append(html_ficha)

        html_boletins.html_to("#content-boletins")
        self.binds()

    def abrir_diario(self, url):
        window.location = url

    def binds(self):
        jQuery(
            ".exibir_media_final_switch"
        ).off(
            "click.medfin"
        ).on(
            "click.medfin",
            lambda: self.ocultar_mostrar_media_e_rec_final(this)
        )

    def ocultar_mostrar_media_e_rec_final(self, el):
        console.log(el)
        element = jQuery(el)
        if element.hasClass("actived"):
            element.removeClass("actived")
            jQuery("#content-boletins").removeClass("ocultar_medias")
        else:
            element.addClass("actived")
            jQuery("#content-boletins").addClass("ocultar_medias")

__pragma__('nokwargs')
