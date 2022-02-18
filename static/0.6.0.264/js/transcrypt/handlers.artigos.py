import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.preloaders as preloaders
import plugins.codemirror as codemirror
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
PRE = helpers.XmlConstructor.tagger("pre")

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

    def codemirror_wrapper(self, source, lang=None, _id=None):
        if lang is None or lang is js_undefined or lang == "":
            return ""
        else:
            lang = str(lang).strip()
            the_id = _id
            if _id is None or _id is js_undefined:
                the_id = window.PhanterPWA.get_id()
            if lang in dict(window.CodeMirror.modes).keys():
                code = PRE(
                    codemirror.CodeMirrorHelper(
                        the_id,
                        value=source,
                        mode=lang,
                        lineNumbers=True
                    ),
                    _class="markdownit-codemirror_wrapper"
                ).xml()
                return code
            else:
                code = PRE(
                    codemirror.CodeMirrorHelper(
                        the_id,
                        value=source,
                        mode=None,
                        lineNumbers=True
                    ),
                    _class="markdownit-codemirror_wrapper"
                ).xml()
                return code

    def _depois_de_pegar_artigos(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            if json.data is not js_undefined and json.data is not None:
                html_artigos = DIV(_class="artigos-wrapper")
                for x in json.data:
                    data_pos, hora = x.postagem.split(" ")
                    ano, mes, dia = data_pos.strip().split("-")
                    data_postagem = "{0} de {1} de {2} - {3}".format(dia, self.meses[mes], ano, hora)
                    md = window.markdownit("default", {
                        "html": True,
                        "linkify": True,
                        "typographer": True,
                        "highlight": lambda source, lang: self.codemirror_wrapper(source, lang)
                    })
                    # codemirror.CodeMirrorHelper(
                    # )
                    md.use(window.markdownitAbbr)
                    md.use(window.markdownitContainer)
                    md.use(window.markdownitDeflist)
                    md.use(window.markdownitEmoji)
                    md.use(window.markdownitFootnote)
                    md.use(window.markdownitIns)
                    md.use(window.markdownitMark)
                    md.use(window.markdownitSub)
                    md.use(window.markdownitSup)
                    md.enable('replacements').enable('smartquotes').enable('image')
                    result = DIV(XML(md.render(x.texto)), _class="phanterpwa-markdownit-wrapper")
                    html_artigos.append(
                        DIV(
                            H2(x.titulo),
                            DIV(
                                DIV(STRONG("Autor: "), x.autor, _class="p-col w1p50"),
                                DIV(STRONG("Postagem: "), data_postagem, _class="p-col w1p50"),
                                _class="p-row"
                            ),
                            result,
                            _id="artigo-container-{0}".format(x.id), _class="artigo-container"
                        )
                    )
                html_artigos.html_to("#content-artigos")





__pragma__('nokwargs')
