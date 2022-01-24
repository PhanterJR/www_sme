import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.preloaders as preloaders
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
H2 = helpers.XmlConstructor.tagger("h2")
A = helpers.XmlConstructor.tagger("a")
SPAN = helpers.XmlConstructor.tagger("span")
FORM = helpers.XmlConstructor.tagger("form")
UL = helpers.XmlConstructor.tagger("ul")
LI = helpers.XmlConstructor.tagger("li")
STRONG = helpers.XmlConstructor.tagger("strong")
IMG = helpers.XmlConstructor.tagger("img", True)
INPUT = helpers.XmlConstructor.tagger("input", True)
I18N = helpers.I18N
XTABLE = widgets.Table
XML = helpers.XML
XTRD = widgets.TableData
XTRH = widgets.TableHead
XFOOTER = widgets.TableFooterPagination

__pragma__('kwargs')

class Index(gatehandler.Handler):

    def initialize(self):
        self.meses = {
            "01": "Janeiro",
            "02": "Fevereiro",
            "03": "Março",
            "04": "Abril",
            "05": "Maio",
            "06": "Junho",
            "07": "Julho",
            "08": "Agosto",
            "09": "Setembro",
            "10": "Outubro",
            "11": "Novembro",
            "12": "Dezembro"
        }
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("ARTIGOS", _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    DIV(
                        DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                        _style="text-align:center; padding: 50px 0;"
                    ),
                    _id="content-artigos",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")
        self.get_artigos()

    def get_artigos(self):
        window.PhanterPWA.GET(
            "api",
            "artigos",
            onComplete=self._depois_de_pegar_artigos
        )

    def _depois_de_pegar_artigos(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            if json.data is not js_undefined and json.data is not None:
                html_artigos = DIV(_class="artigos-wrapper")
                for x in json.data:
                    data_pos, hora = x.postagem.split(" ")
                    ano, mes, dia = data_pos.strip().split("-")
                    data_postagem = "{0} de {1} de {2} - {3}".format(dia, self.meses[mes], ano, hora)
                    md = window.markdownit()
                    result = md.render(x.texto)
                    html_artigos.append(
                        DIV(
                            H2(x.titulo),
                            DIV(
                                DIV("Autor:", x.autor, _class="p-col w1p50"),
                                DIV("Postagem:", data_postagem, _class="p-col w1p50"),
                                _class="p-row"
                            ),
                            XML(result),
                            _id="artigo-container-{0}".format(x.id), _class="artigo-container"
                        )
                    )
                html_artigos.html_to("#content-artigos")





__pragma__('nokwargs')
