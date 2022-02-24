import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.components.left_bar as left_bar
import phanterpwa.frontend.components.snippets as snippets
from org.transcrypt.stubs.browser import __pragma__
__pragma__('alias', "jQuery", "$")
__pragma__("skip")
jQuery = window = console = WebSocket = __new__ = location = this = confirm = localStorage = 0
__pragma__("noskip")

XML = helpers.XML
CONCATENATE = helpers.CONCATENATE
DIV = helpers.XmlConstructor.tagger("div")
I = helpers.XmlConstructor.tagger("i")
H1 = helpers.XmlConstructor.tagger("h1")
H2 = helpers.XmlConstructor.tagger("h2")
H3 = helpers.XmlConstructor.tagger("h3")
A = helpers.XmlConstructor.tagger("a")
I18N = helpers.I18N
__pragma__('kwargs')


class Index(gatehandler.Handler):
    def initialize(self):
        html = DIV(
            snippets.Centralizer(
                "phanterpwa-logo-wrapper",
                DIV(_class="phanterpwa-background-logo")
            ),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    I(_class="fas fa-user-graduate promo-icon"),
                                    H1("Área do Aluno", _class="promo-title"),
                                    **{
                                        "_class": "link",
                                        "_phanterpwa-way": "acesso-ao-aluno"
                                    }
                                ),
                                DIV("Aqui está disponível o acesso a área do aluno, nela é possível acompanhar o desempenho do mesmo.", _class='promo-content'),
                                **{
                                    "_class": "promo-container",
                                }
                            ),
                            _class='p-col w1p100 w3p50 w4p25'
                        ),
                        DIV(
                            DIV(
                                DIV(
                                    I(_class="fas fa-university promo-icon"),
                                    H1("Escolas", _class="promo-title"),
                                    **{
                                        "_class": "link",
                                        "_phanterpwa-way": "escolas"
                                    }
                                ),
                                DIV("Conheça nossa rede municipal. Aqui também",
                                    " é possível o acesso dos serviços online de cada núcleo Escolar.", _class='promo-content'),
                                **{
                                    "_class": "promo-container",
                                }
                            ),
                            _class='p-col w1p100 w3p50 w4p25'
                        ),
                        DIV(
                            DIV(
                                DIV(
                                    I(_class="far fa-newspaper promo-icon"),
                                    H1("Notícias", _class="promo-title"),
                                    **{
                                        "_class": "link",
                                        "_phanterpwa-way": "parcerias"
                                    }
                                ),
                                DIV("Fique informado sobre tudo que se passa",
                                    " em nossa rede escolar.", _class='promo-content'),
                                **{
                                    "_class": "promo-container",
                                }
                            ),
                            _class='p-col w1p100 w3p50 w4p25'
                        ),
                        DIV(
                            DIV(
                                DIV(
                                    I(_class="fas fa-address-card promo-icon"),
                                    H2("Área do servidor", _class="promo-title"),
                                    **{
                                        "_class": "link",
                                        "_phanterpwa-way": "area-do-servidor"
                                    }
                                ),
                                DIV(
                                    "Os servidores que tem vínculo na secretaria de educação poderá ter acesso às suas informações e serviços especiais.",
                                    _class='promo-content'
                                ),
                                **{
                                    "_class": "promo-container",
                                }
                            ),
                            _class='p-col w1p100 w3p50 w4p25'
                        ),
                        _class='p-row'
                    ),
                    _class="p-container"
                ),
                _style="background-color:#530303; color:white;",
            ),
        )
        html.html_to("#main-container")
        window.PhanterPWA.LOAD(**{
            "args": ["loads", "svg_logo.html"],
            "onComplete": self._after_load
        })
        AdminButton = left_bar.LeftBarButton(
            "phanterpwa-admin-button",
            "Admin",
            I(_class="fas fa-users-cog"),
            **{
                "_phanterpwa-way": "admin",
                "position": "top",
                "show_if": lambda: True if window.PhanterPWA.get_current_way() == "home"
                    and window.PhanterPWA.auth_user_has_role("root") else False
            }
        )

        window.PhanterPWA.Components['left_bar'].add_button(AdminButton)

    def _get_quantidade_escolas(self):
        self.SME = localStorage.getItem("SME")
        if self.SME is None or self.SME is js_undefined:
            self.SME = dict()


    def _after_load(self, data):
        xml = jQuery(
                "#phanterpwa-snippet-phanterpwa-logo-wrapper")
        xml.find(".phanterpwa-background-logo").html(data)
        xml.height(jQuery(window).height() - 60).css("width", "100%")
        jQuery(window).resize(lambda: xml.height(jQuery(window).height() - 60).css("width", "100%"))

class Manutencao(gatehandler.Handler):
    def initialize(self):
        html = DIV(
            snippets.Centralizer(
                "phanterpwa-logo-wrapper",
                DIV(_class="phanterpwa-background-logo")
            )
        )
        html.html_to("#main-container")
        window.PhanterPWA.LOAD(**{
            "args": ["loads", "svg_logo.html"],
            "onComplete": self._after_load
        })

    def _after_load(self, data):
        xml = jQuery(
                "#phanterpwa-snippet-phanterpwa-logo-wrapper")
        xml.find(".phanterpwa-background-logo").html(CONCATENATE(H2("EM MANUTENÇÃO, POR FAVOR AGUARDE!!!", _style="color:red;"), XML(data)).jquery())
        xml.height(jQuery(window).height() - 60).css("width", "100%")
        jQuery(window).resize(lambda: xml.height(jQuery(window).height() - 60).css("width", "100%"))


__pragma__('nokwargs')
