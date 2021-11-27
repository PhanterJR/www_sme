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
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("DIARIO DE NOTAS", _class="phanterpwa-breadcrumb"),
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
                    _id="content-diario_de_notas",
                    _class='p-row card e-padding_auto'
                ),

                _class="phanterpwa-container p-container extend"
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
                    callback_link=lambda id_escola: "#_phanterpwa:/diario_de_notas/{0}".format(id_escola)
                )
            elif str(arg1).isdigit() and (arg2 is None or arg2 is js_undefined):
                html = anos_letivos.EscolherAnoLetivo(
                    id_target="#content-diario_de_notas",
                    callback_link=lambda ano: "#_phanterpwa:/diario_de_notas/{0}/{1}".format(arg1, ano)
                )
            elif str(arg1).isdigit() and str(arg2).isdigit():
                self.Diario = Diario(self, arg1, arg2, arg3, arg4, eh_professor=True)
            BackButton1 = left_bar.LeftBarButton(
                "back_diario_de_notas",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{
                    "tag": "a",
                    "_href": window.PhanterPWA.XWAY("professores", "turmas", arg1, arg2),
                    "position": "top",
                    "show_if_way_match": r"^diario-de-notas\/professor\/[0-9]{1,}\/[0-9]{1,}\/"
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
                self.Diario = Diario(self, arg0, arg1, arg2, arg3)
            BackButton1 = left_bar.LeftBarButton(
                "back_diario_de_notas",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{
                    "tag": "a",
                    "_href": window.PhanterPWA.XWAY("turmas", arg0, arg1, "detalhado"),
                    "position": "top",
                    "show_if_way_match": r"^diario-de-notas\/[0-9]{1,}\/[0-9]{1,}.*$"
                }
            )
            if window.PhanterPWA.Request.get_param("retornar") == "turma-simples":
                BackButton1 = left_bar.LeftBarButton(
                    "back_diario_de_notas",
                    "Voltar",
                    I(_class="fas fa-arrow-circle-left"),
                    **{
                        "tag": "a",
                        "_href": window.PhanterPWA.XWAY("turmas", arg0, arg1),
                        "position": "top",
                        "show_if_way_match": r"^diario-de-notas\/[0-9]{1,}\/[0-9]{1,}.*$"
                    }
                )
            elif window.PhanterPWA.Request.get_param("retornar") == "turma-especifica":
                BackButton1 = left_bar.LeftBarButton(
                    "back_diario_de_notas",
                    "Voltar",
                    I(_class="fas fa-arrow-circle-left"),
                    **{
                        "tag": "a",
                        "_href": window.PhanterPWA.XWAY("turmas", arg0, arg1, "especifico", arg2),
                        "position": "top",
                        "show_if_way_match": r"^diario-de-notas\/[0-9]{1,}\/[0-9]{1,}.*$"
                    }
                )
            window.PhanterPWA.Components['left_bar'].add_button(BackButton1)


class Diario():
    def __init__(self, index_instance, escola, ano_letivo, turma, id_aluno, eh_professor=False):
        self.id_escola = escola
        self.ano_letivo = ano_letivo
        self.id_turma = turma
        self.eh_professor = eh_professor
        self.id_aluno = id_aluno
        self.index_instance = index_instance
        self._get_diario_de_notas()

    def processar_diario(self, diario_de_notas):
        html = DIV(
            H2("Diário de notas ", STRONG(diario_de_notas.turma.turma)),
            _class="diario_de_notas_container"
        )
        tabela = TABLE(_class='tabela_diario_de_notas')
        self.limites_verticais = []
        self.limites_horizontais = []
        self.max_h = 0
        self.max_v = 0
        limit_v = 0
        limit_h = 0
        for x in diario_de_notas.diario:
            linha = TR()
            for y in x:
                if y[1]['tipo'] == "cabecalho":
                    if y[1]['_class'] == "diario_notas_disciplina":
                        id_disciplina = y[1]['_data-id_disciplina']
                        if self.eh_professor:
                            celula = TH(
                                A(y[0], _href=window.PhanterPWA.XWAY(
                                    "ficha-avaliativa",
                                    "professor",
                                    self.id_escola,
                                    self.ano_letivo,
                                    self.id_turma,
                                    id_disciplina
                                )),
                                **y[1]
                            )
                        else:
                            celula = TH(
                                A(y[0], _href=window.PhanterPWA.XWAY(
                                    "ficha-avaliativa",
                                    self.id_escola,
                                    self.ano_letivo,
                                    self.id_turma,
                                    id_disciplina
                                )),
                                **y[1]
                            )
                    else:
                        celula = TH(
                            y[0],
                            **y[1]
                        )
                elif y[1]['tipo'] == "input":
                    if "_coor" in y[1]:
                        console.log(y[1]["_coor"])
                        seps = y[1]["_coor"].split("x")
                        v = int(seps[0])
                        h = int(seps[1])
                        if limit_v < v:
                            limit_v = v
                        if limit_h < h:
                            limit_h = h
                        if len(self.limites_verticais) == 0:
                            self.limites_verticais.append(v)
                        if len(self.limites_horizontais) == 0:
                            self.limites_horizontais.append(h)
                    celula = TD(
                        INPUT(_value=y[0]),
                        DIV(I(_class="fas fa-cloud-upload-alt"), _class="botao_enviar_nota"),
                        **y[1]
                    )
                elif y[1]['tipo'] == "texto":
                    celula = TD(
                        TEXTAREA(y[0]),
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
        self.limites_verticais.append(limit_v)
        self.limites_horizontais.append(limit_h)
        self.max_h = limit_h
        self.max_v = limit_v
        tabela_lista_alunos = XTABLE(
            "lista_alunos_diario_{0}".format(self.id_turma),
            XTRH(
                "lista_alunos_diario_cabecalho_{0}".format(self.id_turma),
                "Nº",
                "Aluno",
                "Resultado Automático",
                "Resultado Final"
            )
        )
        series = []
        for x in diario_de_notas.lista_alunos:
            add_class = "link linha_aluno_abrir_diario"
            if "selecionado" in x[1][1]["_class"]:
                add_class = "link selecionado linha_aluno_abrir_diario"
            if self.eh_multisseriado:
                serie = x[1][1]["_data-serie"]
                if serie not in series:
                    series.append(serie)
                    tabela_lista_alunos.append(
                        TR(TH(serie, _colspan=4, _class="serie_multisseriado"))
                    )

            tabela_lista_alunos.append(
                XTRD(
                    "lista_alunos_diario_linha_{0}_{1}".format(self.id_turma, x[1][1]['_data-id_aluno']),
                    *[TD(y[0], **dict(y[1])) for y in x],
                    **{"_class": add_class, "_data-id_aluno": x[1][1]["_data-id_aluno"], "drag_and_drop": False}
                )
            )
        botao_aluno_anterior = DIV(
            I(_class="fas fa-angle-double-left"),
            **{
                "_class": "botao_aluno_anterior icon_button",
                "_title": "Diário do Aluno Anterior",
                "_disabled": "disabled"
            }
        )
        botao_proximo_aluno = DIV(
            I(_class="fas fa-angle-double-right"),
            **{
                "_class": "botao_proximo_aluno icon_button",
                "_title": "Diário do Próximo Aluno turma",
                "_disabled": "disabled"
            }
        )
        if self.eh_professor:
            way = [
                "diario-de-notas",
                "professor",
                self.id_escola,
                self.ano_letivo,
                self.id_turma
            ]
        else:
            way = [
                "diario-de-notas",
                self.id_escola,
                self.ano_letivo,
                self.id_turma
            ]
        if diario_de_notas.aluno_anterior is not None and diario_de_notas.aluno_anterior is not js_undefined:
            nway = list(way)
            nway.append(
                diario_de_notas.aluno_anterior
            )

            botao_aluno_anterior = A(
                I(_class="fas fa-angle-double-left"),
                **{
                    "_class": "botao_aluno_anterior icon_button",
                    "_title": "Diário do aluno anterior",
                    "_href": window.PhanterPWA.XWAY(
                        *nway
                    )
                }
            )
        if diario_de_notas.proximo_aluno is not None and diario_de_notas.proximo_aluno is not js_undefined:
            way.append(
                diario_de_notas.proximo_aluno
            )
            botao_proximo_aluno = A(
                I(_class="fas fa-angle-double-right"),
                **{
                    "_class": "botao_proximo_aluno icon_button",
                    "_title": "Diário do próximo aluno",
                    "_href": window.PhanterPWA.XWAY(
                        *way
                    )
                }
            )
        painel = DIV(
            LABEL(diario_de_notas.aluno.aluno, _for="phanterpwa-card-panel-control-{0}".format(diario_de_notas.aluno.id)),
            DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    tabela,
                                    _class="diario-ficha_avaliativa-container"
                                ),
                                _class="diario-ficha_avaliativa-wrapper"
                            ),
                            _class="p-row e-padding_auto",
                        ),
                        _class="phanterpwa-card-panel-control-content"
                    ),
                    DIV(
                        botao_aluno_anterior,
                        botao_proximo_aluno,
                        _class="phanterpwa-card-panel-control-buttons"
                    ),
                    _class="phanterpwa-card-panel-control-wrapper has_buttons"
                ),
                _class="phanterpwa-card-panel-control-container"
            ),
            DIV(
                H3("Lista de Alunos da Turma"),
                P("Clique no aluno abaixo para abrir seu respectivo diário."),
                tabela_lista_alunos,
                _class="painel_lista_turma e-padding_auto"
            ),
            _id="phanterpwa-card-panel-control-{0}".format(diario_de_notas.aluno.id),
            _class="phanterpwa-card-panel-control"
        )

        html.append(painel)
        html.html_to("#content-diario_de_notas")
        self.diario_binds()

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
            "change.nota_diario"
        ).on(
            "change.nota_diario",
            lambda: self._enviar_parecer(jQuery(this).parent())
        )
        jQuery(
            ".botao_enviar_nota"
        ).off(
            "click.enviar_nota"
        ).on(
            "click.enviar_nota",
            lambda: self._enviar_nota(jQuery(this).parent())
        )
        jQuery(
            ".botao_enviar_parecer"
        ).off(
            "click.enviar_parecer"
        ).on(
            "click.enviar_parecer",
            lambda: self._enviar_parecer(jQuery(this).parent())
        )
        jQuery(
            ".diario_notas_input_nota"
        ).find("input").off(
            "keyup.keynota_diario"
        ).on(
            "keyup.keynota_diario",
            lambda event: self.onKeyPress(event, this)
        )
        if self.eh_professor:
            jQuery(
                ".linha_aluno_abrir_diario"
            ).off(
                "click.aluno_abrir_diario"
            ).on(
                "click.aluno_abrir_diario",
                lambda: self.abrir_diario(window.PhanterPWA.XWAY("diario-de-notas", "professor", self.id_escola, self.ano_letivo, self.id_turma, jQuery(this).data("id_aluno")))
            )
        else:
            jQuery(
                ".linha_aluno_abrir_diario"
            ).off(
                "click.aluno_abrir_diario"
            ).on(
                "click.aluno_abrir_diario",
                lambda: self.abrir_diario(window.PhanterPWA.XWAY("diario-de-notas", self.id_escola, self.ano_letivo, self.id_turma, jQuery(this).data("id_aluno")))
            )

    def abrir_diario(self, url):
        window.location = url

    def _enviar_parecer(self, el):
        elemento = jQuery(el)
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
                "diario-de-notas",
                "professor",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                "parecer",
                form_data=formdata,
                onComplete=lambda data, ajax_status: self.depois_de_enviar_parecer(data, ajax_status, elemento)
            )
        else:
            window.PhanterPWA.PUT(
                "api",
                "diario-de-notas",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                "parecer",
                form_data=formdata,
                onComplete=lambda data, ajax_status: self.depois_de_enviar_parecer(data, ajax_status, elemento)
            )

    def depois_de_enviar_parecer(self, data, ajax_status, elemento):
        if ajax_status == "success":
            json = data.responseJSON
            elemento.find(".botao_enviar_parecer").fadeOut()
            self.diario_binds()

    def _enviar_nota(self, el):
        elemento = jQuery(el)
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
                "diario-de-notas",
                "professor",
                self.id_escola,
                self.ano_letivo,
                linha,
                form_data=formdata,
                onComplete=lambda data, ajax_status: self.depois_de_enviar_nota(data, ajax_status, elemento)
            )
        else:
            window.PhanterPWA.PUT(
                "api",
                "diario-de-notas",
                self.id_escola,
                self.ano_letivo,
                linha,
                form_data=formdata,
                onComplete=lambda data, ajax_status: self.depois_de_enviar_nota(data, ajax_status, elemento)
            )

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
                    console.log(x)
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
        # 37< 38^ 39> 40v
        coor = element.parent().attr("coor")
        v, h = coor.split("x")
        v = int(v)
        h = int(h)
        max_interations = 200
        if code == 37: #vertical_negativo
            while True:
                max_interations -= 1
                if max_interations < 0:
                    max_interations = 200
                    console.error("Parada inesperada!")
                    break

                h -= 1
                if h <= 0:
                    h = self.max_h
                nl = jQuery("td[coor='{0}x{1}']".format(v, h)).find("input")
                if nl.length > 0:
                    jQuery("td[coor='{0}x{1}']".format(v, h)).find("input").focus().select()
                    break

        elif code == 39: #vertical_positivo
            while True:
                max_interations -= 1
                if max_interations < 0:
                    max_interations = 200
                    console.error("Parada inesperada!")
                    break
                h += 1
                if h > self.max_h:
                    h = 0
                nl = jQuery("td[coor='{0}x{1}']".format(v, h)).find("input")
                if nl.length > 0:
                    jQuery("td[coor='{0}x{1}']".format(v, h)).find("input").focus().select()
                    break

        if code == 38: #vertical_negativo
            while True:
                max_interations -= 1
                if max_interations < 0:
                    max_interations = 200
                    console.error("Parada inesperada!")
                    break

                v -= 1
                if v <= 0:
                    v = self.max_v
                nl = jQuery("td[coor='{0}x{1}']".format(v, h)).find("input")
                if nl.length > 0:
                    jQuery("td[coor='{0}x{1}']".format(v, h)).find("input").focus().select()
                    break

        elif code == 40: #vertical_positivo
            while True:
                max_interations -= 1
                if max_interations < 0:
                    max_interations = 200
                    console.error("Parada inesperada!")
                    break

                v += 1
                if v > self.max_v:
                    v = 0
                nl = jQuery("td[coor='{0}x{1}']".format(v, h)).find("input")
                if nl.length > 0:
                    jQuery("td[coor='{0}x{1}']".format(v, h)).find("input").focus().select()
                    break

        elif code == 13: #vertical_positivo <Enter>
            while True:
                max_interations -= 1
                if max_interations < 0:
                    max_interations = 200
                    jQuery("td[coor='1x1']").find("input").focus().select()
                    console.error("Parada inesperada!")
                    break

                v += 1
                if v > self.max_v:
                    h += 1
                    v = 0
                if h > self.max_h:
                    h = 0
                nl = jQuery("td[coor='{0}x{1}']".format(v, h)).find("input")
                if nl.length > 0:
                    jQuery("td[coor='{0}x{1}']".format(v, h)).find("input").focus().select()
                    break



    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            diario_de_notas = json.diario_de_notas
            self.eh_multisseriado = json.eh_multisseriado

            self.processar_diario(diario_de_notas)

    def _get_diario_de_notas(self):

        if self.id_aluno is not None and self.id_aluno is not js_undefined:
            if self.eh_professor:
                window.PhanterPWA.GET(
                    "api",
                    "diario-de-notas",
                    "professor",
                    self.id_escola,
                    self.ano_letivo,
                    self.id_turma,
                    self.id_aluno,
                    onComplete=self.after_get
                )
            else:
                window.PhanterPWA.GET(
                    "api",
                    "diario-de-notas",
                    self.id_escola,
                    self.ano_letivo,
                    self.id_turma,
                    self.id_aluno,
                    onComplete=self.after_get
                )
        else:
            if self.eh_professor:
                window.PhanterPWA.GET(
                    "api",
                    "diario-de-notas",
                    "professor",
                    self.id_escola,
                    self.ano_letivo,
                    self.id_turma,
                    self.id_aluno,
                    onComplete=self.after_get
                )
            else:
                window.PhanterPWA.ApiServer.GET(
                    "api",
                    "diario-de-notas",
                    self.id_escola,
                    self.ano_letivo,
                    self.id_turma,
                    onComplete=self.after_get
                )

__pragma__('nokwargs')
