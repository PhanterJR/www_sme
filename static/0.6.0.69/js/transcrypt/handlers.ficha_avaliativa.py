import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.validations as validations
import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.components.left_bar as left_bar
import phanterpwa.frontend.forms as forms
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
UL = helpers.XmlConstructor.tagger("ul")
LI = helpers.XmlConstructor.tagger("li")
STRONG = helpers.XmlConstructor.tagger("strong")
IMG = helpers.XmlConstructor.tagger("img", True)
H2 = helpers.XmlConstructor.tagger("h2")
H3 = helpers.XmlConstructor.tagger("h3")
H4 = helpers.XmlConstructor.tagger("h4")
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
HR = helpers.XmlConstructor.tagger('hr', True)

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
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("FICHA AVALIATIVA", _class="phanterpwa-breadcrumb"),
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
                    _id="content-diario_de_notas",
                    _class='p-row card e-padding_auto'
                ),

                _class="phanterpwa-container p-container",
                _style="width: 95%; max-width: 95%;"
            )
        )
        html.html_to("#main-container")
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)
        arg2 = window.PhanterPWA.Request.get_arg(2)
        arg3 = window.PhanterPWA.Request.get_arg(3)
        arg4 = window.PhanterPWA.Request.get_arg(4)

        if arg0 == "professor":
            if arg1 is None or arg1 is js_undefined:
                    html = escolas.EscolherEscola(
                        id_target="#content-diario_de_notas",
                        callback_link=lambda id_escola: "#_phanterpwa:/ficha-avaliativa/professor/{0}".format(id_escola)
                    )
            elif str(arg1).isdigit() and (arg2 is None or arg2 is js_undefined):
                html = anos_letivos.EscolherAnoLetivo(
                    id_target="#content-diario_de_notas",
                    callback_link=lambda ano: "#_phanterpwa:/ficha-avaliativa/professor/{0}/{1}".format(arg1, ano)
                )
            elif str(arg1).isdigit() and str(arg2).isdigit():
                self.FichaAvaliativa = FichaAvaliativa(self, arg1, arg2, arg3, arg4, eh_professor=True)
            BackButton1 = left_bar.LeftBarButton(
                "back_ficha_avaliativa",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{
                    "tag": "a",
                    "_href": window.PhanterPWA.XWAY("professores", "turmas", arg1, arg2),
                    "position": "top",
                    "show_if_way_match": r"^ficha-avaliativa\/professor\/[0-9]{1,}\/[0-9]{1,}\/?"
                }
            )
            window.PhanterPWA.Components['left_bar'].add_button(BackButton1)
        else:

            if arg0 is None or arg0 is js_undefined:
                html = escolas.EscolherEscola(
                    id_target="#content-diario_de_notas",
                    callback_link=lambda id_escola: "#_phanterpwa:/diario_de_notas/{0}".format(id_escola)
                )
            elif str(arg0).isdigit() and (arg1 is None or arg1 is js_undefined):
                html = anos_letivos.EscolherAnoLetivo(
                    id_target="#content-diario_de_notas",
                    callback_link=lambda ano: "#_phanterpwa:/diario_de_notas/{0}/{1}".format(arg0, ano)
                )
            elif str(arg0).isdigit() and str(arg1).isdigit():
                self.FichaAvaliativa = FichaAvaliativa(self, arg0, arg1, arg2, arg3)
            BackButton1 = left_bar.LeftBarButton(
                "back_diario_de_notas",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{
                    "tag": "a",
                    "_href": "#_phanterpwa:/area-do-servidor",
                    "position": "top",
                    "show_if": lambda: True if window.PhanterPWA.get_current_way() == "diario_de_notas/{0}/{1}".format(arg0, arg1) else False
                }
            )

            window.PhanterPWA.Components['left_bar'].add_button(BackButton1)


class FichaAvaliativa():
    def __init__(self, index_instance, escola, ano_letivo, turma, disciplina, eh_professor=False):
        self.id_escola = escola
        self.ano_letivo = ano_letivo
        self.id_turma = turma
        self.id_disciplina = disciplina
        self.index_instance = index_instance
        self.eh_professor = eh_professor
        self._get_diario_de_notas()

    def processar_diario(self, diario_de_notas, professor="", disciplina="", turma=""):

        html = DIV(
            H2("Ficha Avaliativa ", STRONG(turma)),
            DIV(
                DIV(professor, _class="p-col w1p100 w4p50"),
                DIV(disciplina, _class="p-col w1p100 w4p50"),
                _class="p-row"
            ),
            HR(),
            _class="diario_de_notas_container"
        )
        tabela = TABLE(_class='tabela_diario_de_notas')
        has_textarea = False
        for x in diario_de_notas:
            linha = TR()
            for y in x:
                if y[1]['tipo'] == "cabecalho":
                    celula = TH(
                        y[0],
                        **y[1]
                    )
                elif y[1]['tipo'] == "input":
                    celula = TD(
                        DIV(
                            INPUT(_value=y[0]),
                            _class="ficha_avaliativa_content_input_textarea"
                        ),
                        DIV(I(_class="fas fa-cloud-upload-alt"), _class="botao_enviar_nota"),
                        **y[1]
                    )
                elif y[1]['tipo'] == "texto":
                    has_textarea = True
                    celula = TD(
                        DIV(
                            TEXTAREA(y[0]),
                            _class="ficha_avaliativa_content_input_textarea"
                        ),
                        DIV(I(_class="fas fa-cloud-upload-alt"), _class="botao_enviar_parecer"),
                        **y[1]
                    )
                elif y[1]['tipo'] == "botao":
                    celula = TD(
                        XML(y[0]),
                        **y[1]
                    )
                else:
                    celula = TD(
                        y[0],
                        **y[1]
                    )
                linha.append(celula)
            tabela.append(
                linha
            )
        if has_textarea:
            class_ac = "diario-ficha_avaliativa-container-textarea"
        else:
            class_ac = "diario-ficha_avaliativa-container"
        html.append(DIV(DIV(tabela, _class=class_ac), _class="diario-ficha_avaliativa-wrapper"))
        html.html_to("#content-diario_de_notas")
        self.diario_binds()

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            diario_de_notas = json.ficha_avaliativa
            turma = diario_de_notas.turma.turma
            professor = DIV(
                STRONG("Professor"),
                SPAN("Não definido"),
                _class="e-tagger-wrapper"
            )
            disciplina = ""
            if diario_de_notas.professor is not None and diario_de_notas.professor is not js_undefined:
                professor = DIV(
                    STRONG("Professor"),
                    SPAN(diario_de_notas.professor),
                    _class="e-tagger-wrapper"
                )
            if diario_de_notas.disciplina is not None and diario_de_notas.disciplina is not js_undefined:
                disciplina = DIV(
                    STRONG("Disciplina"),
                    SPAN(diario_de_notas.disciplina),
                    _class="e-tagger-wrapper"
                )
            self.processar_diario(diario_de_notas.ficha_avaliativa, professor, disciplina, turma)

    def _get_diario_de_notas(self):
        if self.eh_professor:
            window.PhanterPWA.ApiServer.GET(
                "api",
                "ficha-avaliativa",
                "professor",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                self.id_disciplina,
                onComplete=self.after_get
            )
        else:
            if self.id_disciplina is not None and self.id_disciplina is not js_undefined:
                window.PhanterPWA.ApiServer.GET(
                    "api",
                    "ficha-avaliativa",
                    self.id_escola,
                    self.ano_letivo,
                    self.id_turma,
                    self.id_disciplina,
                    onComplete=self.after_get
                )
            else:
                window.PhanterPWA.ApiServer.GET(
                    "api",
                    "ficha-avaliativa",
                    self.id_escola,
                    self.ano_letivo,
                    self.id_turma,
                    onComplete=self.after_get
                )

    def diario_binds(self):
        jQuery(
            ".diario_notas_input_nota"
        ).find("input").off(
            "change.nota_diario"
        ).on(
            "change.nota_diario",
            lambda: self._enviar_nota(jQuery(this).parent())
        )
        jQuery(
            ".diario_notas_text_nota"
        ).find("textarea").off(
            "change.texto_diario"
        ).on(
            "change.texto_diario",
            lambda: self._enviar_parecer(jQuery(this).parent())
        )
        jQuery(
            ".botao_enviar_nota"
        ).off(
            "click.enviar_nota"
        ).on(
            "click.enviar_nota",
            lambda: self._enviar_nota(jQuery(this))
        )
        jQuery(
            ".diario_notas_input_nota"
        ).find("input").off(
            "keyup.keynota_diario"
        ).on(
            "keyup.keynota_diario",
            lambda event: self.onKeyPress(event, this)
        )
        jQuery(
            ".botao_enviar_parecer"
        ).off(
            "click.enviar_parecer"
        ).on(
            "click.enviar_parecer",
            lambda: self._enviar_parecer(jQuery(this))
        )

    def _enviar_nota(self, el):
        elemento = jQuery(el).parent()
        nota = elemento.find('input').val()
        nota = self.nota(nota)
        elemento.find('input').val(nota)
        elemento.find(".botao_enviar_nota").fadeIn()
        campo = elemento.data("info")
        id_matricula = elemento.data("matricula")
        linha = elemento.data("linha")
        disciplina = elemento.data("disciplina")
        formdata = __new__(FormData())
        formdata.append(
            campo,
            nota
        )
        formdata.append(
            "matricula",
            id_matricula
        )
        formdata.append(
            "disciplina",
            disciplina
        )
        if self.eh_professor:
            window.PhanterPWA.PUT(
                "api",
                "ficha-avaliativa",
                "professor",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                disciplina,
                linha,
                form_data=formdata,
                onComplete=lambda data, ajax_status: self.depois_de_enviar_nota(data, ajax_status, elemento)
            )
        else:
            window.PhanterPWA.PUT(
                "api",
                "ficha-avaliativa",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                disciplina,
                linha,
                form_data=formdata,
                onComplete=lambda data, ajax_status: self.depois_de_enviar_nota(data, ajax_status, elemento)
            )

    def _enviar_parecer(self, el):
        elemento = jQuery(el).parent()
        nota = elemento.find('textarea').val()
        linha = elemento.data("linha")
        elemento.find('textarea').val(nota)
        elemento.find(".botao_enviar_parecer").fadeIn()
        campo = elemento.data("info")
        id_matricula = elemento.data("matricula")
        formdata = __new__(FormData())
        formdata.append(
            campo,
            nota
        )
        formdata.append(
            "matricula",
            id_matricula
        )
        if self.eh_professor:
            window.PhanterPWA.PUT(
                "api",
                "ficha-avaliativa",
                "professor",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                "parecer",
                linha,
                form_data=formdata,
                onComplete=lambda data, ajax_status: self.depois_de_enviar_parecer(data, ajax_status, elemento)
            )
        else:
            window.PhanterPWA.PUT(
                "api",
                "ficha-avaliativa",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                "parecer",
                linha,
                form_data=formdata,
                onComplete=lambda data, ajax_status: self.depois_de_enviar_parecer(data, ajax_status, elemento)
            )

    def depois_de_enviar_parecer(self, data, ajax_status, elemento):
        if ajax_status == "success":
            json = data.responseJSON
            elemento.find(".botao_enviar_parecer").fadeOut()
            self.diario_binds()

    def depois_de_enviar_nota(self, data, ajax_status, elemento):
        if ajax_status == "success":
            json = data.responseJSON
            elemento.find(".botao_enviar_nota").fadeOut()
            updates = json.updates
            if updates is not None and updates is not js_undefined:
                for x in dict(updates).keys():
                    celula = ""
                    if updates[x][1]['tipo'] == "input":
                        celula = TD(
                            INPUT(_value=updates[x][0]),
                            DIV(I(_class="fas fa-cloud-upload-alt"), _class="botao_enviar_nota"),
                            **updates[x][1]
                        )
                    else:
                        celula = TD(
                            updates[x][0],
                            **updates[x][1]
                        )
                    jQuery("#{0}".format(x)).replaceWith(
                        celula.jquery()
                    )
                self.diario_binds()


    def nota(self, value):
        value = str(value).strip()
        if value == "-":
            return value
        elif value == "":
            return value
        else:
            value = str(value).replace(",", ".")
            numeros = [str(x) for x in range(10)]
            if value[0] == "-":
                window.PhanterPWA.flash("A não pode ser menor que 0")
                return "0.0"
            else:
                nvalue = ""
                tem_numero = False
                tem_ponto = False
                for v in value:
                    if v in numeros:
                        tem_numero = True
                        nvalue = "".join([nvalue, v])
                    elif v == "." and not tem_ponto:
                        tem_ponto = True
                        nvalue = "".join([nvalue, v])
                
                if tem_numero:
                    if nvalue[0] == ".":
                        nvalue = "".join(["0", nvalue])
                    
                    if "." in nvalue:
                        svalue = nvalue.split(".")
                        if len(svalue) > 1:
                            if svalue[1][0] == "":
                                nvalue = ".".join([svalue[0], "0"])
                            else:
                                nvalue = ".".join([svalue[0], svalue[1][0]])
                        else:
                            nvalue = "".join([nvalue, "0"])
                    else:
                        nvalue = ".".join([nvalue, "0"])
                else:
                    window.PhanterPWA.flash("O valor adicionado é inválido")
                    return ""
                try:
                    fvalue = float("{0}".format(nvalue))
                except:
                    window.PhanterPWA.flash("O valor adicionado é inválido")
                    return ""

                if fvalue > 10:
                    window.PhanterPWA.flash("A não pode ser maior que 10")
                    return "10.0"
                elif fvalue < 0:
                    window.PhanterPWA.flash("A não pode ser menor que 0")
                    return "0.0"
                else:
                    return nvalue
        window.PhanterPWA.flash("O valor adicionado é inválido")
        return ""


    def onKeyPress(self, event, el):
        event.preventDefault()
        code = event.keyCode or event.which
        element = jQuery(el)
        if code == 13:
            proximo_campo = element.parent().parent().data("proximo_campo")
            jQuery("#{0}".format(proximo_campo)).find("input").focus().select()


__pragma__('nokwargs')
