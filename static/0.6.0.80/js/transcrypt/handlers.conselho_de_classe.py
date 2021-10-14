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
                        DIV("CONSELHO DE CLASSE", _class="phanterpwa-breadcrumb"),
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
                    _id="content-conselho_de_classe",
                    _class='p-row card e-padding_auto'
                ),

                _class="phanterpwa-container p-container extend"
            )
        )
        if str(arg0).isdigit() and str(arg1).isdigit() and str(arg2).isdigit() and (arg3 is None or arg3 is js_undefined):
            
            html = CONCATENATE(
                DIV(
                    DIV(
                        DIV(
                            DIV("CONSELHO DE CLASSE", _class="phanterpwa-breadcrumb"),
                            tur,
                            DIV("QUAL A UNIDADE?", _class="phanterpwa-breadcrumb"),
                            _class="phanterpwa-breadcrumb-wrapper"
                        ),
                        _class="p-container extend"),
                    _class='title_page_container card'
                ),
                DIV(
                    DIV(
                        self.xml_unidades(),
                        _id="content-conselho_de_classe",
                        _class='p-row card e-padding_auto'
                    ),

                    _class="phanterpwa-container p-container extend"
                )
            )
            html.html_to("#main-container")

        elif str(arg0).isdigit() and str(arg1).isdigit() and str(arg2).isdigit() and str(arg3).isdigit():
            self.ConselhoDeClasse = ConselhoDeClasse(self, arg0, arg1, arg2, arg3)


        BackButton1 = left_bar.LeftBarButton(
            "back_conselho_de_classe",
            "Voltar",
            I(_class="fas fa-arrow-circle-left"),
            **{
                "tag": "a",
                "_href": window.PhanterPWA.Request.get_param("retornar"),
                "position": "top",
                "show_if_way_match": r"^conselho-de-classe\/[0-9]{1,}\/[0-9]{1,}.*$"
            }
        )

        window.PhanterPWA.Components['left_bar'].add_button(BackButton1)


    def xml_unidades(self):
        html = DIV(_class="p-row")
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)
        arg2 = window.PhanterPWA.Request.get_arg(2)
        for x in range(1, 4):
            link = window.PhanterPWA.XWAY("conselho-de-classe", arg0, arg1, arg2, x)
            esc = DIV(
                DIV(
                    A(
                        DIV(
                            "{0}".format(x),
                            _class="botao-ano"
                        ),
                        _href=link,
                        _style="text-decoration: none;"
                    ),
                    _class="anos_letivos-container-abreviacao p-col w1p100"
                ),
                _class="p-col  w1p50 w2p33 w3p25 w4p10"
            )
            html.append(esc)
        return DIV(
            DIV("QUAL UNIDADE FARÁ O CONSELHO?", _class="card-title"),
            html
        )


class ConselhoDeClasse():
    def __init__(self, index_instance, escola, ano_letivo, turma, unidade):
        self.id_escola = escola
        self.ano_letivo = ano_letivo
        self.id_turma = turma
        self.unidade = unidade
        self.index_instance = index_instance
        self._get_dados_conselho()
        BackButton1 = left_bar.LeftBarButton(
            "back_conselho_de_classe",
            "Voltar",
            I(_class="fas fa-arrow-circle-left"),
            **{
                "tag": "a",
                "_href": window.PhanterPWA.XWAY("turma-simples", self.id_escola, self.ano_letivo),
                "position": "top",
                "show_if_way_match": r"^conselho-de-classe\/[0-9]{1,}\/[0-9]{1,}.*$"
            }
        )

        window.PhanterPWA.Components['left_bar'].add_button(BackButton1)

    def _get_dados_conselho(self):

        window.PhanterPWA.GET(
            "api",
            "conselho-de-classe",
            self.id_escola,
            self.ano_letivo,
            self.id_turma,
            self.unidade,
            onComplete=self.after_get
        )

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            conselho_de_classe = json.conselho_de_classe
            self.disciplinas = json.disciplinas
            self.turma = json.turma
            self.processar_conselho(conselho_de_classe)


    def processar_conselho(self, conselho_de_classe):
        tur = DIV(self.turma, _class="phanterpwa-breadcrumb")

        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("CONSELHO DE CLASSE", _class="phanterpwa-breadcrumb"),
                        tur,
                        DIV("UNIDADE ", window.PhanterPWA.Request.get_arg(3), _class="phanterpwa-breadcrumb"),
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
                        _id="content-conselho_de_classe",
                        _class='p-row card e-padding_auto continuos'
                    ),
                    _class="phanterpwa-media-print-container"
                ),
                DIV(_id="modal_cmp_curriculares_container"),
                _class="phanterpwa-container p-container extend"
            )
        )
        html.html_to("#main-container")

        tabela = TABLE(
            TR(TH("ALUNO"), TH("DISCIPLINA"), TH("AV1"), TH("AV2"), TH("AV3"), TH("AV4"), TH("AV5"), TH("MÉDIA")),
            _class='tabela_conselho_de_classe',
            _style="margin: auto; width: 200mm;"
        )

        for x in conselho_de_classe:
            tr = TR(
                TH(x.aluno, _rowspan=len(x.notas_disciplinas) + 1)
            )
            linha = TBODY(tr, _class="dont_cut_inside")
            if len(x.notas_disciplinas) > 0:
                for y in x.notas_disciplinas:
                    trdis = TR()
                    ccc = 0
                    for n in y:
                        ccc += 1
                        if ccc == 1:
                            trdis.append(CONCATENATE(
                                TD(n[0]),
                                TD(n[2], **n[3]),
                            ))
                        else:
                            trdis.append(
                                TD(n[2], **n[3]),
                            )
                    linha.append(
                        trdis
                    )
            tabela.append(linha)


        tabela.html_to("#content-conselho_de_classe")



    def abrir_diario(self, url):
        window.location = url


__pragma__('nokwargs')
