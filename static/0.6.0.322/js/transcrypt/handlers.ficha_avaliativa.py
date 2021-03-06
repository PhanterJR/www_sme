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
        arg0 = window.PhanterPWA.Request.get_arg(0)
        arg1 = window.PhanterPWA.Request.get_arg(1)
        arg2 = window.PhanterPWA.Request.get_arg(2)
        arg3 = window.PhanterPWA.Request.get_arg(3)
        arg4 = window.PhanterPWA.Request.get_arg(4)
        tit = "FICHA AVALIATIVA"
        if arg4 == "parecer":
            tit = "PARECERES POR ALUNO"

        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV(tit, _class="phanterpwa-breadcrumb"),
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
        tit = "Ficha Avaliativa "
        sub_tit = CONCATENATE(
                DIV(professor, _class="p-col w1p100 w4p50"),
                DIV(disciplina, _class="p-col w1p100 w4p50")
        )
        if self.id_disciplina == "parecer":
            tit = "Pareceres "
            sub_tit = CONCATENATE(
                    DIV(professor, _class="p-col w1p100")
            )
        html = DIV(
            DIV(
                H2(tit, STRONG(turma)),
                DIV(
                    sub_tit,
                    _class="p-row"
                ),
                HR(),
                _class="media-print-visible"
            ),
            _class="diario_de_notas_container ficha_avaliativa_imprimir phanterpwa-simple-media-print"
        )
        tabela = TABLE(_class='tabela_diario_de_notas')
        has_textarea = False
        self.limites_verticais = []
        self.limites_horizontais = []
        self.max_h = 0
        self.max_v = 0
        limit_v = 0
        limit_h = 0
        for x in diario_de_notas:
            linha = TR()
            for y in x:
                if y is None:
                    celula = ""
                elif y[1]['tipo'] == "cabecalho":
                    celula = TH(
                        y[0],
                        **y[1]
                    )
                elif y[1]['tipo'] == "input":
                    if "_coor" in y[1]:
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
                        DIV(
                            INPUT(_value=y[0], _coordenadas="{0}x{1}".format(v, h)),
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
        self.max_h = limit_h
        self.max_v = limit_v
        self.limites_verticais.append(limit_v)
        self.limites_horizontais.append(limit_h)
        if has_textarea:
            class_ac = "diario-ficha_avaliativa-container-textarea"
        else:
            class_ac = "diario-ficha_avaliativa-container"
        html.append(DIV(DIV(tabela, _class=class_ac), _class="diario-ficha_avaliativa-wrapper media-print-visible"))
        html.append(
            widgets.FloatMenu(
                "menu_impressao",
                I(_class="fas fa-ellipsis-v"),
                widgets.FloatButton(
                    I(_class="fas fa-file-excel"),
                    _class="botao_criar_excel",
                    _title="Salvar dados da ficha avaliativa em excel",
                    _href="{0}/api/ficha-avaliativa/excel/{1}/{2}/{3}/{4}/".format(
                        window.PhanterPWA.ApiServer.remote_address,
                        self.id_escola,
                        self.ano_letivo,
                        self.id_turma,
                        self.id_disciplina
                    )
                ),
                widgets.FloatButton(
                    I(_class="fas fa-print"),
                    _class="botao_imprimir_diario_de_notas",
                    _onclick="print();"
                ),
            )
        )
        html.html_to("#content-diario_de_notas")
        self.diario_binds()

    def imprimir(self):
        __pragma__(
            'js',
            '{}',
            'print();'
        )

    def _criar_auxiliar_print(self, el):
        element = jQuery(el)
        element.find("textarea").off("change.update_textarea").on(
            "change.update_textarea",
            lambda: self._criar_auxiliar_print(element)
        )
        id_element = element.attr("id")
        val_textarea = element.find("textarea").val()
        if element.find("#{0}-print-aux".format(id_element)).length == 0:
            element.append(
                DIV(val_textarea, _id="{0}-print-aux".format(id_element), _class="auxiliar_imprimir_ficha").jquery()
            )
        else:
            jQuery("#{0}-print-aux".format(id_element)).text(val_textarea)


    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            if self.id_disciplina == "parecer":
                diario_de_notas = json.ficha_avaliativa
                turma = diario_de_notas.turma.turma
                professor = DIV(
                    STRONG("Professor"),
                    SPAN("N??o definido"),
                    _class="e-tagger-wrapper"
                )
                disciplina = ""
                if diario_de_notas.professor is not None and diario_de_notas.professor is not js_undefined:
                    professor = DIV(
                        STRONG("Professor"),
                        SPAN(diario_de_notas.professor),
                        _class="e-tagger-wrapper"
                    )

                self.processar_diario(diario_de_notas.ficha_avaliativa_parecer, professor, disciplina, turma)

            else:
                diario_de_notas = json.ficha_avaliativa
                self.id_disciplina = json.id_disciplina
                turma = diario_de_notas.turma.turma
                self.lista_de_disciplinas = json.lista_de_disciplinas
                self.disciplina_atual = diario_de_notas.disciplina
                professor = DIV(
                    STRONG("Professor"),
                    SPAN("N??o definido"),
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
                        DIV(
                            self.menu_box_disciplinas(),
                            _class="botao_mudar_disciplina media-print-inside-invisible"
                        ) if len(self.lista_de_disciplinas) > 1 else "",
                        _class="e-tagger-wrapper disciplina_atual"
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
        jQuery(".diario_notas_text_nota").each(lambda: self._criar_auxiliar_print(this))

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
                            DIV(
                                INPUT(_value=updates[x][0], _coordenadas=updates[x][1]["_coor"]),
                                _class="ficha_avaliativa_content_input_textarea"
                            ),
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
                window.PhanterPWA.flash("A n??o pode ser menor que 0")
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
                    window.PhanterPWA.flash("O valor adicionado ?? inv??lido")
                    return ""
                try:
                    fvalue = float("{0}".format(nvalue))
                except:
                    window.PhanterPWA.flash("O valor adicionado ?? inv??lido")
                    return ""

                if fvalue > 10:
                    window.PhanterPWA.flash("A n??o pode ser maior que 10")
                    return "10.0"
                elif fvalue < 0:
                    window.PhanterPWA.flash("A n??o pode ser menor que 0")
                    return "0.0"
                else:
                    return nvalue
        window.PhanterPWA.flash("O valor adicionado ?? inv??lido")
        return ""

    def onKeyPress(self, event, el):
        event.preventDefault()
        code = event.keyCode or event.which
        element = jQuery(el)
        # 37< 38^ 39> 40v
        coor = element.parent().parent().attr("coor")
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
        # if code == 13:
        #     proximo_campo = element.parent().data("proximo_campo")
        #     jQuery("#{0}".format(proximo_campo)).find("input").focus().select()

    def menu_box_disciplinas(self):
        menus = []
        for x in self.lista_de_disciplinas:
            if x.disciplina != self.disciplina_atual:
                menus.append(
                    widgets.MenuOption(x.disciplina, **{
                        "_class": "botao_mudar_disciplina_ficha_avaliativa wave_on_click",
                        "_data-id_disciplina": x.id
                    })
                )
        html = widgets.MenuBox(
            "drop_mudar_disciplina_ficha_avaliativa",
            I(_class="fas fa-sync-alt"),
            *menus,
            onOpen=lambda: self.binds_disciplinas()
        )
        return html

    def binds_disciplinas(self):
        jQuery(".botao_mudar_disciplina_ficha_avaliativa").off("click.botao_mudar_disciplina_ficha_avaliativa").on(
            "click.botao_mudar_disciplina_ficha_avaliativa",
            lambda: self.mudar_disciplina(this)
        )

    def mudar_disciplina(self, el):
        id_disciplina = jQuery(el).data("id_disciplina")
        if self.eh_professor:
            window.PhanterPWA.open_xway(
                "ficha-avaliativa",
                "professor",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                id_disciplina
            )
        else:
            window.PhanterPWA.open_xway(
                "ficha-avaliativa",
                self.id_escola,
                self.ano_letivo,
                self.id_turma,
                id_disciplina
            )



__pragma__('nokwargs')
