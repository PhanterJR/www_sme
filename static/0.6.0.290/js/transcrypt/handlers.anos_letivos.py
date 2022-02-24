import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.validations as validations
import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.components.left_bar as left_bar
import phanterpwa.frontend.forms as forms
import phanterpwa.frontend.components.modal as modal
import phanterpwa.frontend.preloaders as preloaders
import phanterpwa.frontend.decorators as decorators
from org.transcrypt.stubs.browser import __pragma__
import plugins.servidor_sme as servidor_sme

__pragma__('alias', "jQuery", "$")
__pragma__('skip')
jQuery = sessionStorage = JSON = M = js_undefined = Date = window =\
    this = __new__ = FormData = console = localStorage = QRCode = 0
__pragma__('noskip')

CONCATENATE = helpers.CONCATENATE
OPTION = helpers.XmlConstructor.tagger("option")
SELECT = helpers.XmlConstructor.tagger("select")
DIV = helpers.XmlConstructor.tagger("div")
I = helpers.XmlConstructor.tagger("i")
A = helpers.XmlConstructor.tagger("a")
SPAN = helpers.XmlConstructor.tagger("span")
FORM = helpers.XmlConstructor.tagger("form")
UL = helpers.XmlConstructor.tagger("ul")
LI = helpers.XmlConstructor.tagger("li")
HR = helpers.XmlConstructor.tagger("hr", True)
STRONG = helpers.XmlConstructor.tagger("strong")
IMG = helpers.XmlConstructor.tagger("img", True)
INPUT = helpers.XmlConstructor.tagger("input", True)
I18N = helpers.I18N
XTABLE = widgets.Table
XML = helpers.XML
XTRD = widgets.TableData
XTRH = widgets.TableHead
XFOOTER = widgets.TableFooterPagination
XSECTION = helpers.XSECTION
TD = helpers.XmlConstructor.tagger("td")
TR = helpers.XmlConstructor.tagger("tr")


__pragma__('kwargs')


class EscolherAnoLetivo(helpers.XmlConstructor):
    def __init__(self, id_target=None, callback_link=None):
        html = ""
        self.callback_link = callback_link
        if window.ServidorSME is not js_undefined:
            self.lista_de_anos_letivos = window.ServidorSME.get_anos_letivos()
            html = self.xml_anos_letivos()
            if id_target is not None:
                if jQuery(id_target).length == 1:
                    DIV(self.xml_anos_letivos()).html_to(id_target)
                else:
                    raise ValueError("O id \"{0}\"do destino não existe ou não é único.".format(id_target))

        else:
            servidor_sme.ServidorSME(
                on_success=lambda json: EscolherAnoLetivo(id_target=id_target, callback_link=callback_link)
            )
        helpers.XmlConstructor.__init__(self, "div", False, html)

    def xml_anos_letivos(self):
        html = DIV(_class="p-row")
        for x in self.lista_de_anos_letivos:
            link = "#"
            if callable(self.callback_link):
                link = self.callback_link(x.ano)
            esc = DIV(
                DIV(
                    A(
                        DIV(
                            "{0}".format(x.ano),
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
            DIV("ANTES DE CONTINUAR ESCOLHA O ANO LETIVO", _class="card-title"),
            html
        )

__pragma__('nokwargs')
