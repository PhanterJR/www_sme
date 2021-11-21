import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.helpers as helpers
import plugins.codemirror as codemirror
import phanterpwa.frontend.components.left_bar as left_bar

from org.transcrypt.stubs.browser import __pragma__

__pragma__('alias', "jQuery", "$")
__pragma__('skip')
jQuery = sessionStorage = JSON = M = js_undefined = window =\
    __new__ = FormData = console = localStorage = document = this = 0
__pragma__('noskip')

DIV = helpers.XmlConstructor.tagger("div")
LABEL = helpers.XmlConstructor.tagger("label")
I = helpers.XmlConstructor.tagger("i")
H2 = helpers.XmlConstructor.tagger("h2")
FORM = helpers.XmlConstructor.tagger("form")
SPAN = helpers.XmlConstructor.tagger("span")
IMG = helpers.XmlConstructor.tagger("img", True)
HR = helpers.XmlConstructor.tagger("hr", True)
UL = helpers.XmlConstructor.tagger("ul")
LI = helpers.XmlConstructor.tagger("li")
INPUT = helpers.XmlConstructor.tagger("input", True)
P = helpers.XmlConstructor.tagger("p")
A = helpers.XmlConstructor.tagger("a")
I18N = helpers.I18N
CONCATENATE = helpers.CONCATENATE
XML = helpers.XML
XSECTION = helpers.XSECTION


class Index(gatehandler.Handler):
    def initialize(self):
        if self.request.get_arg(0) == "inputs":
            self.inputs = Inputs(self)
        elif self.request.get_arg(0) == "selects":
            self.selects = Selects(self)
        elif self.request.get_arg(0) == "textarea":
            self.selects = Textarea(self)
        elif self.request.get_arg(0) == "fontawesome":
            self.fontawesome = FontAwesome(self)
        else:
            html = CONCATENATE(
                DIV(
                    DIV(
                        DIV(
                            DIV("COMPONENTES", _class="phanterpwa-breadcrumb"),
                            _class="phanterpwa-breadcrumb-wrapper"
                        ),
                        _class="p-container"),
                    _class='title_page_container card'
                ),
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    I(
                                        **{
                                            "_class": "fas fa-edit promo-icon",
                                        }
                                    ),
                                    H2("Input", _class="promo-title"),
                                    **{
                                        "_class": "link",
                                        "_phanterpwa-way": "components/inputs"
                                    }
                                ),
                                DIV("A forma mais simples para o usuário adicionar dados em um formulário.", _class='promo-content'),
                                **{"_class": "promo-container"}
                            ),
                            _class='p-col w1p100 w3p50 w4p25'
                        ),
                        DIV(
                            DIV(
                                DIV(
                                    I(
                                        **{
                                            "_class": "far fa-caret-square-down promo-icon",
                                        }
                                    ),
                                    H2("Selects", _class="promo-title"),
                                    **{
                                        "_class": "link",
                                        "_phanterpwa-way": "components/selects"
                                    }
                                ),
                                DIV("Confira aqui os Inputs do tipo Select, eles permintem ao usuário",
                                    " fazer escolhas pré-definidas evitando digitar.", _class='promo-content'),
                                **{"_class": "promo-container"}
                            ),
                            _class='p-col w1p100 w3p50 w4p25'),
                        DIV(
                            DIV(
                                DIV(
                                    I(
                                        **{
                                            "_class": "fas fa-file-signature  promo-icon",
                                        }
                                    ),
                                    H2("Others", _class="promo-title"),
                                    **{
                                        "_class": "link",
                                        "_phanterpwa-way": "components/textarea"
                                    }
                                ),
                                DIV("Estando conectado conosco alguns serviços estão disponíveis online, os que não",
                                    " estão você terá informações de como proceder, desta ",
                                    "forma economizar tempo e agilizar sua vida.", _class='promo-content'),
                                **{"_class": "promo-container"}
                            ),
                            _class='p-col w1p100 w3p50 w4p25'),
                        DIV(
                            DIV(
                                DIV(
                                    I(
                                        **{
                                            "_class": "fas fa-flag promo-icon",
                                        }
                                    ),
                                    H2("Font Awesome", _class="promo-title"),
                                    **{
                                        "_class": "link",
                                        "_phanterpwa-way": "fontawesome"
                                    }
                                ),
                                DIV(
                                    "Usamos os ícones da Font Awesome! ",
                                    " Confira aqui o helpers de cada ícone free para ajudar na implementação.",
                                    "  Vale também conferir o site clicando ",
                                    A("aqui", _href="https://fontawesome.com/", _target="_blank"),
                                    ".",
                                     _class='promo-content'
                                ),
                                **{"_class": "promo-container"}
                            ),
                            _class='p-col w1p100 w3p50 w4p25'),
                        _class='p-row card e-padding_20'
                    ),

                    _class="phanterpwa-container p-container"
                )
            )
            jQuery("#main-container").html(html.jquery())
        BackButton = left_bar.LeftBarButton(
            "back_localizar_aluno",
            "Voltar",
            I(_class="fas fa-arrow-circle-left"),
            **{"_phanterpwa-way": "components",
                "position": "top",
                "ways": [lambda r: True if r.startswith("components/") else False]}
        )

        window.PhanterPWA.Components['left_bar'].add_button(BackButton)

input1_source = """import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.helpers as helpers

DIV = helpers.XmlConstructor.tagger("div")

helper_instance = DIV(
    widgets.Input(
        "android",
        label="Label Widget",
        placeholder="Placeholder Widget",
    ),
    _class="widget_input_example"
)
helper_instance.html_to("#your-container")
"""

input2_source = """import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.helpers as helpers

DIV = helpers.XmlConstructor.tagger("div")

helper_instance = DIV(
    widgets.Input(
        "shadows",
        label="Label Widget",
        placeholder="Placeholder Widget",
        wear="shadows"
    ),
    _class="widget_input_example"
)
helper_instance.html_to("#your-container")
"""

input3_source = """import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.helpers as helpers

DIV = helpers.XmlConstructor.tagger("div")

helper_instance = DIV(
    widgets.Input(
        "elegant",
        label="Label Widget",
        placeholder="Placeholder Widget",
        wear="elegant"
    ),
    _class="widget_input_example"
)
helper_instance.html_to("#your-container")
"""

input4_source = """
# your imports
# your code

your_instance = widgets.Input(
    "password",
    label="Label Widget",
    placeholder="Placeholder Widget",
    kind="password"
)

# your code
"""

input5_source = """
# your code

your_instance = widgets.Input(
    "date",
    label="Label Widget",
    placeholder="Placeholder Widget",
    kind="date"
)

# your code
"""

input6_source = """
# your code

your_instance = widgets.Input(
    "datetime",
    label="Label Widget",
    value="20200-02-02 03:12:33",
    placeholder="Placeholder Widget",
    kind="datetime"
)

# your code
"""

input7_source = """
# your code

your_instance = widgets.Input(
    "datetime2",
    label="Label Widget",
    value="02/02/2020 03:12:33",
    placeholder="Placeholder Widget",
    kind="datetime",
    format="dd/MM/yyyy HH:mm:ss"
)

# your code
"""

input8_source = """
# your code

your_instance = widgets.Input(
    "iconify",
    label="Label Widget",
    placeholder="Placeholder Widget",
    icon=I(_class="fab fa-sistrix"),
    icon_on_click=lambda: window.PhanterPWA.flash(**{"html": I18N("Fui Clicado!")})
)

# your code
"""
input9_source = """
# your code

your_instance = widgets.Input(
    "iconify_datetime",
    label="Label Widget",
    placeholder="Placeholder Widget",
    kind="datetime",
    icon=I(_class="far fa-calendar-alt")
)

# your code
"""

input10_source = """
# your code

your_instance = widgets.Input(
    "iconify_date",
    label="Label Widget",
    placeholder="Placeholder Widget",
    kind="date",
    icon=I(_class="far fa-calendar-alt"),
    format="dd/MM/yyyy"
)

# your code
"""

class Inputs():
    def __init__(self, gatehandler):
        self.gatehandler = gatehandler
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("COMPONENTES", _class="phanterpwa-breadcrumb"),
                        DIV("INPUT", _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    DIV(
                        P(
                            I18N(
                                "Os inputs servem para adicionar dados ao sistema. Abaixo você verá os diferente tipos de inputs, seus estilos, sua implementação."
                            )
                        ),
                        H2(I18N("Styles (waer)")),
                        HR(),
                        P(
                            I18N(
                                "Todos os widgets possuem um estilo, atualmente estão divididos em Android, Shadows e Elegant, abaixo você poderá conferir cada um desses estilos."
                            )
                        ),
                        XSECTION(
                            LABEL(I18N("Example"), ' 01 (wear="android")'),
                            P(
                                I18N(
                                    "Por padrão o parâmetro wear é android, então não é necessário adicioná-lo."
                                )
                            ),
                            DIV(
                                widgets.Input(
                                    "android",
                                    label="Label Widget",
                                    placeholder="Placeholder Widget",
                                ),
                                _class="widget_input_example"
                            ),
                                P(
                                    I18N(
                                        "Como pode ser observado no código-fonte os widgets são adicionados de forma aninhada com os helpers. O primeiro parâmetro deve ser um identificador, ou seja, um nome único que será utilizado como id."
                                    )
                                ),
                            codemirror.CodeMirrorHelper(
                                "codemirror1",
                                **{
                                    "value": input1_source,
                                    "mode": "python",
                                    "lineNumbers": True
                                }
                            ),
                            _class="e-padding_20"
                        ),
                        XSECTION(
                            LABEL(I18N("Example"), ' 02 (wear="shadows")'),
                            DIV(
                                P(
                                    I18N(
                                        "Ao adicionar no parâmetro wear o 'shadows' o estilo muda."
                                    )
                                ),
                                widgets.Input(
                                    "shadows",
                                    label="Label Widget",
                                    placeholder="Placeholder Widget",
                                    wear="shadows"
                                ),
                                _class="widget_input_example"
                            ),
                            codemirror.CodeMirrorHelper(
                                "codemirror2",
                                **{
                                    "value": input2_source,
                                    "mode": "python",
                                    "lineNumbers": True
                                }
                            ),
                            _class="e-padding_20"
                        ),
                        XSECTION(
                            LABEL(I18N("Example"), ' 03 (wear="elegant")'),
                            DIV(
                                widgets.Input(
                                    "elegant",
                                    label="Label Widget",
                                    placeholder="Placeholder Widget",
                                    wear="elegant"
                                ),
                                _class="widget_input_example"
                            ),
                            codemirror.CodeMirrorHelper(
                                "codemirror3",
                                **{
                                    "value": input3_source,
                                    "mode": "python",
                                    "lineNumbers": True
                                }
                            ),
                            _class="e-padding_20"
                        ),
                        H2(I18N("Types (kind)")),
                        HR(),
                        P(
                            I18N(
                                "O parâmetro kind especifica o tipo de dado que será adicionado, como por exemplo o password, com isso o input não irá exibir os caracteres digitados."
                            )
                        ),
                        XSECTION(
                            LABEL(I18N("Example"), ' 01 (kind="password")'),
                            P(
                                I18N(
                                    "Ao digitar valores no input os reais caracteres não serão exibidos."
                                )
                            ),
                            DIV(
                                widgets.Input(
                                    "password",
                                    label="Label Widget",
                                    placeholder="Placeholder Widget",
                                    kind="password"
                                ),
                                _class="widget_input_example"
                            ),
                            codemirror.CodeMirrorHelper(
                                "codemirror4",
                                **{
                                    "value": input4_source,
                                    "mode": "python",
                                    "lineNumbers": True
                                }
                            ),
                        ),
                        XSECTION(
                            LABEL(I18N("Example"), ' 02 (kind="date")'),
                            P(
                                I18N(
                                    "Ao atribuir date a kind os caracteres aceitos serão números e uma máscara é exibida, por padrão é usado o padrão americano yyyy-MM-dd"
                                )
                            ),
                            DIV(
                                widgets.Input(
                                    "date",
                                    label="Label Widget",
                                    placeholder="Placeholder Widget",
                                    kind="date"
                                ),
                                _class="widget_input_example"
                            ),
                            codemirror.CodeMirrorHelper(
                                "codemirror5",
                                **{
                                    "value": input5_source,
                                    "mode": "python",
                                    "lineNumbers": True
                                }
                            ),
                        ),
                        XSECTION(
                            LABEL(I18N("Example"), ' 03 (kind="datetime")'),
                            P(
                                I18N(
                                    "Ao atribuir datetime ao parâmetro kind terá efeito parecido com o exemplo02 porém a marcara será yyyy-MM-dd HH:mm:ss"
                                )
                            ),
                            DIV(
                                widgets.Input(
                                    "datetime",
                                    label="Label Widget",
                                    value="20200-02-02 03:12:33",
                                    placeholder="Placeholder Widget",
                                    kind="datetime"
                                ),
                                _class="widget_input_example"
                            ),
                            P(
                                I18N(
                                    "Observe que abaixo temos um novo parêmetro definido, o value, ele serve para adicionar o valor atual no input, por isso que já havia uma data definida no input."
                                )
                            ),
                            codemirror.CodeMirrorHelper(
                                "codemirror6",
                                **{
                                    "value": input6_source,
                                    "mode": "python",
                                    "lineNumbers": True
                                }
                            ),
                            P(
                                I18N(
                                    "Com o parâmetro format juntamente com o kind date ou datetime, você pode mudar a máscara, por exemplo, vamos adicionar o formato brasileiro que seria dd/MM/yyyy HH:mm:ss ao atributo format."
                                )
                            ),
                            codemirror.CodeMirrorHelper(
                                "codemirror7",
                                **{
                                    "value": input7_source,
                                    "mode": "python",
                                    "lineNumbers": True
                                }
                            ),
                            P(
                                I18N(
                                    "Observe o resultado."
                                )
                            ),
                            DIV(
                                widgets.Input(
                                    "datetime2",
                                    label="Label Widget",
                                    placeholder="Placeholder Widget",
                                    kind="datetime",
                                    value="02/02/2020 03:12:33",
                                    format="dd/MM/yyyy HH:mm:ss"
                                ),
                                _class="widget_input_example"
                            ),
                        ),
                        H2(I18N("Iconify (icon)")),
                        HR(),
                        P(
                            I18N(
                                "Ao definir um ícone no parâmetro icon do input é adicionado um botão por padrão do lado direito."
                            )
                        ),
                        XSECTION(
                            LABEL(I18N("Example"), ' 01 (icon=I(_class="fab fa-sistrix"))'),
                            P(
                                I18N(
                                    "Neste exemplo adicionamos um ícone para um input do tipo pesquisa, ao clicar no ícone aparece um flash."
                                )
                            ),
                            DIV(
                                widgets.Input(
                                    "iconify",
                                    label="Label Widget",
                                    placeholder="Placeholder Widget",
                                    icon=I(_class="fab fa-sistrix"),
                                    icon_on_click=lambda: window.PhanterPWA.flash(**{"html": I18N("Fui Clicado!")})
                                ),
                                _class="widget_input_example"
                            ),
                            codemirror.CodeMirrorHelper(
                                "codemirror8",
                                **{
                                    "value": input8_source,
                                    "mode": "python",
                                    "lineNumbers": True
                                }
                            ),
                        ),
                        XSECTION(
                            LABEL(I18N("Example"), ' 02 (I(_class="far fa-calendar-alt") e kind="datetime"))'),
                            P(
                                I18N(
                                    "Neste exemplo adicionamos um ícone de calendário, observe que o parâmatro kind é datetime e não iremos adicionar uma ação ao botão, clique e veja o que acontece."
                                )
                            ),
                            DIV(
                                widgets.Input(
                                    "iconify_datetime",
                                    label="Label Widget",
                                    placeholder="Placeholder Widget",
                                    kind="datetime",
                                    icon=I(_class="far fa-calendar-alt")
                                ),
                                _class="widget_input_example"
                            ),
                            codemirror.CodeMirrorHelper(
                                "codemirror9",
                                **{
                                    "value": input9_source,
                                    "mode": "python",
                                    "lineNumbers": True
                                }
                            ),
                        ),
                        XSECTION(
                            LABEL(I18N("Example"), ' 03 (I(_class="far fa-calendar-alt"), kind="date") e format="dd/MM/yyyy")'),
                            P(
                                I18N(
                                    "Como você pode observar, com o kind='date', 'icon' definido e sem uma ação para o icon automaticamente foi utilizado o datetimepicker, agora vamos tentar com o date colocando format='dd/MM/yyyy'."
                                )
                            ),
                            DIV(
                                widgets.Input(
                                    "iconify_date",
                                    label="Label Widget",
                                    placeholder="Placeholder Widget",
                                    kind="date",
                                    icon=I(_class="far fa-calendar-alt"),
                                    format="dd/MM/yyyy",
                                    value="01/03/1980"
                                ),
                                _class="widget_input_example"
                            ),
                            codemirror.CodeMirrorHelper(
                                "codemirror10",
                                **{
                                    "value": input10_source,
                                    "mode": "python",
                                    "lineNumbers": True
                                }
                            ),
                        ),
                        _class="card e-padding_20"
                    ),
                    _class="new-container"
                ),
                _class="phanterpwa-container p-container"
            )
        )
        jQuery("#main-container").html(html.jquery())


class Selects():
    def __init__(self, gatehandler):
        self.gatehandler = gatehandler
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("COMPONENTES", _class="phanterpwa-breadcrumb"),
                        DIV("SELECT", _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    DIV(
                        H2(I18N("Android Style")),
                        DIV(
                            widgets.Select(
                                "the_select",
                                label="Label Widget",
                                placeholder="Placeholder Widget",
                                data_set={
                                    "banana": "Banana",
                                    "abacate": "Abacate",
                                    "doce": "Doce"
                                }
                            ),
                            _class="component_select"
                        ),
                        DIV(
                            DIV(_id="codemirror-selec1"),
                            _class="source_code-codemirror-wrapper"
                        ),
                        DIV(
                            widgets.Select(
                                "the_select2",
                                label="Label Widget",
                                data_set={
                                    "banana": "banana",
                                    "abacate": "abacate",
                                    "doce": "doce"
                                }
                            ),
                            _class="component_select"
                        ),
                        DIV(
                            widgets.Select(
                                "the_select3",
                                label="Label Widget",
                                can_empty=True,
                                data_set={
                                    "banana": "banana",
                                    "abacate": "abacate",
                                    "doce": "doce"
                                }
                            ),
                            _class="component_select"
                        ),
                        DIV(
                            widgets.Select(
                                "the_select4",
                                label="Label Widget",
                                placeholder="Placeholder Widget",
                                can_empty=True,
                                data_set={
                                    "banana": "banana",
                                    "abacate": "abacate",
                                    "doce": "doce"
                                }
                            ),
                            _class="component_select"
                        ),
                        DIV(
                            widgets.Select(
                                "the_select5",
                                label="Label Widget",
                                placeholder="Placeholder Widget",
                                editable=True,
                                can_empty=True,
                                data_set={
                                    "banana": "banana",
                                    "abacate": "abacate",
                                    "doce": "doce"
                                }
                            ),
                            _class="component_select"
                        ),
                        DIV(
                            widgets.Select(
                                "the_select6",
                                label="Label Widget",
                                editable=True,
                                can_empty=True,
                                data_set={
                                    "banana": "banana",
                                    "abacate": "abacate",
                                    "doce": "doce"
                                }
                            ),
                            _class="component_select"
                        ),
                        H2(I18N("Android Style")),
                        DIV(
                            widgets.Select(
                                "the_select7",
                                label="Label Widget",
                                placeholder="Placeholder Widget",
                                data_set={
                                    "banana": "Banana",
                                    "abacate": "Abacate",
                                    "doce": "Doce"
                                },
                                wear="shadows"
                            ),
                            _class="component_select"
                        ),
                        DIV(
                            DIV(_id="codemirror-selec7"),
                            _class="source_code-codemirror-wrapper"
                        ),
                        H2(I18N("Android elegant")),
                        DIV(
                            widgets.Select(
                                "the_select_elegant8",
                                label="Label Widget",
                                placeholder="Placeholder Widget",
                                data_set={
                                    "banana": "Banana",
                                    "abacate": "Abacate",
                                    "doce": "Doce"
                                },
                                wear="elegant"
                            ),
                            _class="component_select"
                        ),
                        DIV(
                            DIV(_id="codemirror-selec1-elegant8"),
                            _class="source_code-codemirror-wrapper"
                        ),
                        _class="card e-padding_20"
                    ),
                    _class="new-container"
                ),
                _class="phanterpwa-container p-container"
            )
        )
        # jQuery("#main-container").html(html.jquery())
        html.html_to("#main-container")


class Textarea():
    def __init__(self, gatehandler):
        self.gatehandler = gatehandler
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("COMPONENTES", _class="phanterpwa-breadcrumb"),
                        DIV("TEXTAREA", _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    DIV(
                        H2(I18N("Textboxs")),
                        HR(),
                        XSECTION(
                            LABEL("Type: Password"),
                            DIV(
                                widgets.Textarea(
                                    "textare1",
                                    label="Label Widget",
                                ),
                                _class="component_materialize"
                            ),
                        ),
                        XSECTION(
                            LABEL("Type: Password"),
                            DIV(
                                widgets.Textarea(
                                    "textare2",
                                    label="Label Widget",
                                    wear="shadows"
                                ),
                                _class="component_shadows"
                            ),
                        ),
                        XSECTION(
                            LABEL("Type: Password"),
                            DIV(
                                widgets.Textarea(
                                    "textare3",
                                    label="Label Widget",
                                    wear="elegant"
                                ),
                                _class="component_shadows"
                            ),
                        ),
                        H2(I18N("Dropdown")),
                        HR(),
                        XSECTION(
                            LABEL("Value: True"),
                            DIV(
                                DIV(
                                    DIV(
                                        widgets.MenuBox(
                                            "drop1",
                                            xml_menu=UL(
                                                LI(SPAN("Editar", _class="botao_editar_socio")),
                                                LI(SPAN("Visualizar", _class="botao_visualizar_socio")),
                                                _class='dropdown-content'
                                            )
                                        ),
                                        _class="p-col w1p10"
                                    ),
                                    DIV(
                                        " ",
                                        _class="p-col w1p80"
                                    ),
                                    DIV(
                                        widgets.MenuBox(
                                            "drop2",
                                            xml_menu=UL(
                                                LI(SPAN("Editar", _class="botao_editar_socio")),
                                                LI(SPAN("Visualizar", _class="botao_visualizar_socio")),
                                                _class='dropdown-content'
                                            )
                                        ),
                                        _class="p-col w1p10"
                                    ),
                                    _class="p-row"
                                ),
                                _class="component_materialize"
                            ),
                        ),
                        H2(I18N("Checkbox")),
                        HR(),
                        XSECTION(
                            LABEL("Value: True"),
                            DIV(
                                widgets.CheckBox(
                                    "check1",
                                    value=True,
                                    label="Label Widget",
                                ),
                                _class="component_materialize"
                            ),
                        ),
                        XSECTION(
                            LABEL("Value: False"),
                            DIV(
                                widgets.CheckBox(
                                    "check2",
                                    value=False,
                                    label="Label Widget",
                                ),
                                _class="component_materialize"
                            ),
                        ),
                        XSECTION(
                            LABEL("Value: False"),
                            DIV(
                                widgets.CheckBox(
                                    "check3",
                                    value=False,
                                    label="Label Widget",
                                    wear="elegant"
                                ),
                                _class="component_materialize"
                            ),
                        ),
                        H2(I18N("ListString")),
                        HR(),
                        XSECTION(
                            LABEL("Value: [\"Value01\", \"Value02\", \"Value03\"]"),
                            DIV(
                                widgets.ListString(
                                    "liststring1",
                                    value=["Value01", "Value02", "Value03"],
                                    label="Label Widget",
                                ),
                                _class="component_materialize"
                            ),
                        ),
                        XSECTION(
                            LABEL("data_set: [\"Value04\", \"Value05\"] and editable: False"),
                            DIV(
                                widgets.ListString(
                                    "liststring2",
                                    value=["Value01", "Value02", "Value03"],
                                    label="Label Widget",
                                    data_set=["Value04", "Value05"],
                                    editable=False
                                ),
                                _class="component_materialize"
                            ),
                        ),
                        _class="card e-padding_20"
                    ),
                    _class="new-container"
                ),
                _class="phanterpwa-container p-container"
            )
        )
        jQuery("#main-container").html(html.jquery())


class FontAwesome():
    def __init__(self, gatehandler):
        self.gatehandler = gatehandler
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("COMPONENTES", _class="phanterpwa-breadcrumb"),
                        DIV("FONT AWESOME", _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            widgets.Preloaders(),
                            _style="width:100%; text-align: center; padding-top: 100px; padding-bottom: 100px;"
                        ),
                        _id="icon_awesome_container", _class="icon_awesome_container e-padding_20"),
                    _class="card p-row padding_20"
                ),
                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")
        jQuery("").html(html.jquery())
        window.PhanterPWA.LOAD(**{
                "args": ["loads", "fontawesome.html"],
                "onComplete": self._after_load
            }
        )
        # jQuery("#icon_awesome_container").load("/loads/fontawesome.html",
        #     lambda: self._after_load())

    def _copy(self, el):
        p = jQuery(el).parent()
        p.find("input").select()
        document.execCommand("copy")

    def _process_icon(self, el):
        jQuery(".icon_awesome_panel_wrapper").css("display", "none")
        p = jQuery(el).parent()
        icon = jQuery(el).data("icon")
        p_html = DIV(
            DIV(
                DIV(I(_class="fas fa-clipboard"), _class="copy_buttom"), INPUT(_value="I(_class=\"{0}\")".format(icon)),
                _class="icon_awesome_panel"
            ),
            _class="icon_awesome_panel_wrapper"
        )
        if p.find(".icon_awesome-panel-container").find(".icon_awesome_panel_wrapper").length == 0:
            p.find(".icon_awesome-panel-container").html(p_html.jquery())
            p.find(".copy_buttom").off("click").on("click", lambda: self._copy(this))
        else:
            p.find(".icon_awesome-panel-container").find(".icon_awesome_panel_wrapper").remove()



    def reload(self):
        self._after_load()

    def _after_load(self, data):
        console.log(data)
        XML(data).html_to("#icon_awesome_container")
        jQuery(".icon_awesome-button").off("click.icon_awesome-wrapper").on(
            "click.icon_awesome-wrapper",
            lambda: self._process_icon(this)
        )
