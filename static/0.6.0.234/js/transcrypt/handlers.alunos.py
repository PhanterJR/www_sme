import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.validations as validations
import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.components.left_bar as left_bar
import phanterpwa.frontend.fmasks as fmasks
import phanterpwa.frontend.forms as forms
import phanterpwa.frontend.components.modal as modal
import phanterpwa.frontend.preloaders as preloaders
import phanterpwa.frontend.decorators as decorators
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
I = helpers.XmlConstructor.tagger("i")
A = helpers.XmlConstructor.tagger("a")
SPAN = helpers.XmlConstructor.tagger("span")
FORM = helpers.XmlConstructor.tagger("form")
UL = helpers.XmlConstructor.tagger("ul")
LI = helpers.XmlConstructor.tagger("li")
STRONG = helpers.XmlConstructor.tagger("strong")
IMG = helpers.XmlConstructor.tagger("img", True)
INPUT = helpers.XmlConstructor.tagger("input", True)
BR = helpers.XmlConstructor.tagger("br", True)
LABEL = helpers.XmlConstructor.tagger("label")
P = helpers.XmlConstructor.tagger("p")
TH = helpers.XmlConstructor.tagger("th")
TD = helpers.XmlConstructor.tagger("td")
TR = helpers.XmlConstructor.tagger("tr")
TABLE = helpers.XmlConstructor.tagger("table")
I18N = helpers.I18N
XTABLE = widgets.Table
XML = helpers.XML
XTRD = widgets.TableData
XTRH = widgets.TableHead
XFOOTER = widgets.TableFooterPagination


__pragma__('kwargs')


class Index(gatehandler.Handler):
    @decorators.check_authorization(lambda: window.PhanterPWA.auth_user_has_role(["administrator", "root", "Administrador Master SME", "Administrador Master Escola"]))
    def initialize(self):
        arg0 = self.request.get_arg(0)
        arg1 = self.request.get_arg(1)
        arg2 = self.request.get_arg(2)
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("LISTA DE ALUNOS", _class="phanterpwa-breadcrumb"),
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
                    _id="content-alunos",
                    _class='p-row card e-padding_20'
                ),

                _class="phanterpwa-container p-container"
            )
        )
        html.html_to("#main-container")
        if arg0 is not None:
            self.Aluno = Aluno(self, arg0, arg1)
            turma_detalhada = window.PhanterPWA.Request.get_param("turmas-detalhadas")
            if turma_detalhada is None:
                BackButton = left_bar.LeftBarButton(
                    "back_localizar_alunos",
                    "Voltar",
                    I(_class="fas fa-arrow-circle-left"),
                    **{
                        "tag": "a",
                        "_href": window.PhanterPWA.XWAY("alunos"),
                        "position": "top",
                        "show_if_way_match": r"^alunos\/[0-9]{1,}\/editar\/.*$"
                    }
                )
            else:
                BackButton = left_bar.LeftBarButton(
                    "back_localizar_alunos",
                    "Voltar",
                    I(_class="fas fa-arrow-circle-left"),
                    **{
                        "tag": "a",
                        "_href": "/#_phanterpwa:{0}".format(turma_detalhada),
                        "position": "top",
                        "show_if_way_match": r"^alunos\/[0-9]{1,}\/editar\/.*$"
                    }
                )
        else:
            self.Alunos = Alunos(self)
            self.Alunos.html_to("#content-alunos")

            self.Alunos._get_data_search()

            BackButton = left_bar.LeftBarButton(
                "back_localizar_alunos",
                "Voltar",
                I(_class="fas fa-arrow-circle-left"),
                **{
                    "tag": "a",
                    "_href": "/#_phanterpwa:/area-do-servidor",
                    "position": "top",
                    "show_if": lambda: True if window.PhanterPWA.get_current_way() == "alunos" else False
                }
            )
        window.PhanterPWA.Components['left_bar'].add_button(BackButton)


class Alunos(helpers.XmlConstructor):
    def __init__(self, index_instance=None):
        self.index_instance = index_instance
        # self.auth_user = window.PhanterPWA.get_auth_user()
        # self.servidor_sme = localStorage.getItem("servidor_sme")
        # if window.ServidorSME is not js_undefined:
        #     self.ano_letivo = window.ServidorSME.get_ano_letivo()
        #     self.escola = window.ServidorSME.get_escola()
        # else:
        #     window.location = "/#_phanterpwa:/area-do-servidor"
        helpers.XmlConstructor.__init__(self, "div", False, self.initial_xml(), _class="lista_de_alunos")

    def initial_xml(self):
        html = DIV(
            DIV(
                FORM(
                    DIV(
                        DIV(
                            DIV(
                                widgets.Input(
                                    "search_alunos",
                                    label="Localizar Aluno(a)",
                                    placeholder="Nome ou parte do nome do aluno",
                                    icon=I(_class="fab fa-sistrix"),
                                    icon_on_click=lambda: self.search()
                                ),
                                _id="search_alunos_container",
                                _class="p-col w1p100 w3p50 w4p75",
                            ),
                            DIV(
                                widgets.Select(
                                    "campos_alunos",
                                    label="Campos à pesquisar",
                                    placeholder="Escolha o Campo",
                                    value="aluno",
                                    data_set=[
                                        ["id", "ID"],
                                        ["aluno", "Nome do(a) Aluno(a)"],
                                        ["data_nasc", "Data de Nascimento"],
                                        ["nome_do_pai", "Nome do Pai"],
                                        ["nome_da_mae", "Nome da Mãe"],
                                    ]
                                ),
                                _id="phanterpwa-input-search_field-alunos",
                                _class="p-col w1p100 w3p50 w4p25"
                            ),
                            _class="p-row e-padding_20w"
                        ),
                        _class="phanterpwa-container-section"
                    ),
                    _action="#",
                    _id="search_alunos",
                    _class="form-search_alunos",
                    _enctype="multipart/form-data",
                    _method="post",
                    _autocomplete="off"
                ),
                _class="phanterpwa_tables_search_wrapper"
            ),
            DIV(_id='lista-alunos-subtitle', _class="phanterpwa-subtitle"),
            DIV(
                DIV(
                    DIV(preloaders.android, _style="width: 300px; height: 300px; overflow: hidden; margin: auto;"),
                    _style="text-align:center; padding: 50px 0;"
                ),
                _id='lista-alunos-container',
                _class="phanterpwa_tables_container"
            ),
            DIV(_id="modal_visualizar_aluno"),
            _class='alunos-container phanterpwa-card-container'
        )
        return html

    def binds(self):
        jQuery(
            "#phanterpwa-widget-input-input-search_alunos"
        ).off(
            "keydown.search_aluno_matricula"
        ).on(
            "keydown.search_aluno_matricula",
            self._onkeydown
        )

        jQuery(
            "#phanterpwa-widget-input-input-search_alunos"
        ).off(
            "keyup.search_aluno_matricula"
        ).on(
            "keyup.search_aluno_matricula",
            self._onkeyup
        )

        jQuery(
            "#phanterpwa-widget-input-input-search_alunos"
        ).off(
            "keypress.search_aluno_matricula"
        ).on(
            "keypress.search_aluno_matricula",
            self._onkeypress
        )

        jQuery(
            "#phanterpwa-widget-select-input-campos_alunos"
        ).off(
            "change.search_field-alunos"
        ).on(
            "change.search_field-alunos",
            lambda: self.mudar_input_search(this)
        )


    def mudar_input_search(self, el):
        element = jQuery(el)
        campo = element.val()
        jQuery("#phanterpwa-widget-input-input-search_alunos").val("")
        if campo == "Nome do(a) Aluno(a)":
            jQuery("#search_alunos_container").find("label").text("Localizar Aluno(a)")
            jQuery("#phanterpwa-widget-input-input-search_alunos").attr("placeholder", "Nome ou parte do nome do aluno")
        elif campo == "Nome do Pai":
            jQuery("#search_alunos_container").find("label").text("Localizar Pai")
            jQuery("#phanterpwa-widget-input-input-search_alunos").attr("placeholder", "Nome ou parte do nome do pai")
        elif campo == "Nome da Mãe":
            jQuery("#search_alunos_container").find("label").text("Localizar Mãe")
            jQuery("#phanterpwa-widget-input-input-search_alunos").attr("placeholder", "Nome ou parte do nome da mãe")
        elif campo == "ID":
            jQuery("#search_alunos_container").find("label").text("Localizar pelo ID")
            jQuery("#phanterpwa-widget-input-input-search_alunos").attr("placeholder", "Digite o id do(a) aluno(a)")
        elif campo == "Data de Nascimento":
            jQuery("#search_alunos_container").find("label").text("Filtrar pela Data de Nascimento")
            jQuery("#phanterpwa-widget-input-input-search_alunos").attr("placeholder", "Digite a data de nascimento")

    def _onkeydown(self, event):
        element = jQuery(
            "#phanterpwa-widget-input-input-search_alunos"
        )
        self.valor_atual = ""
        valores = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        if str(event.key) in valores:
            value = element.val()
            nvalue = fmasks.stringFilter(value)
            console.log(nvalue)

    def _onkeypress(self, event):
        element = jQuery(
            "#phanterpwa-widget-input-input-search_alunos"
        )
        label = element.parent().find("label").text()
        self.valor_atual = ""
        valores = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        if label == "Filtrar pela Data de Nascimento":
            event.preventDefault()
            if str(event.key) in valores:
                value = str(element.val())
                value += event.key
                nvalue = fmasks.stringFilter(value)
                nvalue, pos = fmasks.maskDate(nvalue)
                con = 0
                element.val(nvalue)
                for x in str(nvalue):
                    con += 1
                    if str(x).isdigit():
                        pos = con
                element[0].selectionStart = pos
                element[0].selectionEnd = pos
        elif label == "Localizar pelo ID":
            event.preventDefault()
            if str(event.key) in valores:
                value = element.val()
                value += event.key
                nvalue = fmasks.stringFilter(value)
                element.val(nvalue)

    def _onkeyup(self, event):
        key = event.which or event.keyCode
        element = jQuery(
            "#phanterpwa-widget-input-input-search_alunos"
        )
        label = element.parent().find("label").text()
        if key == 13:
            value = element.val()
            if value is not "":
                self.search()
        else:
            if label == "Filtrar pela Data de Nascimento":
                value = element.val()
                nvalue = fmasks.stringFilter(value)
                nvalue, pos = fmasks.maskDate(nvalue)
                con = 0
                element.val(nvalue)
                for x in str(nvalue):
                    con += 1
                    if str(x).isdigit():
                        pos = con
                element[0].selectionStart = pos
                element[0].selectionEnd = pos
            elif label == "Localizar pelo ID":
                value = element.val()
                nvalue = fmasks.stringFilter(value)
                element.val(nvalue)

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            if json.alunos is None:
                window.PhanterPWA.open_way("alunos/novo")
            else:
                self.process_data(json)

    def _on_sort(self, table_head_instance):
        widgets = window.PhanterPWA.Request.widgets
        page = widgets["alunos-table-footer"].page()
        search = widgets["search_alunos"].value()
        field = widgets["campos_alunos"].value()
        sorted_field = widgets["alunos-table-head"].sorted_field()
        self._get_data_search(search=search, field=field, orderby=sorted_field[0], sort=sorted_field[1], page=page)

    def _on_page(self, table_pagination_instance):
        widgets = window.PhanterPWA.Request.widgets
        page = widgets["alunos-table-footer"].page()
        search = widgets["search_alunos"].value()
        field = widgets["campos_alunos"].value()
        sorted_field = widgets["alunos-table-head"].sorted_field()
        self._get_data_search(search=search, field=field, orderby=sorted_field[0], sort=sorted_field[1], page=page)

    def process_data(self, json):
        if self.current_hash is not json.hash:
            self.current_hash = json.hash
            alunos = json.alunos
            jQuery("#lista-alunos-subtitle").text(json.message)
            new_select_widget = widgets.Select(
                "campos_alunos",
                label=alunos.search_fields.label,
                placeholder="Escolha o Campo",
                value=alunos.search_fields.value,
                data_set=alunos.search_fields.data_set
            )
            new_select_widget.html_to("#phanterpwa-input-search_field-alunos")
            new_select_widget.reload()
            table = XTABLE(
                "alunos-table",
                XTRH(
                    "alunos-table-head",
                    *alunos.searcher.data_set,
                    ["matriculas", "Matrículas"],
                    DIV(
                        I(_class="fas fa-plus"),
                        **{
                            "_phanterpwa-way": "alunos/novo",
                            "_class": "icon_button wave_on_click"
                        }
                    ),
                    sort_by=alunos.searcher.sort_by,
                    sort_order=alunos.searcher.sort_order,
                    sortable=alunos.searcher.sortable,
                    on_click_sortable=self._on_sort,
                )
            )
            if alunos.data is not js_undefined:
                for x in alunos.data:
                    data_de_nascimento_formated = ""
                    if x.data_nasc is not None and x.data_nasc is not js_undefined:
                        data_de_nascimento_formated = validations.format_iso_date_datetime(
                            x.data_nasc, "dd/MM/yyyy", "date"
                        )
                    __pragma__("jsiter")
                    vars_aluno = {
                        "aluno": x.aluno,
                        "data_de_nascimento": data_de_nascimento_formated,
                        "nome_do_pai": x.nome_do_pai,
                        "nome_da_mae": x.nome_da_mae,
                    }
                    __pragma__("nojsiter")
                    vars_serialized = jQuery.param(vars_aluno)
                    ano_letivo = ""
                    id_escola = ""

                    if self.ano_letivo is not None and self.ano_letivo is not js_undefined:
                        ano_letivo = "/{0}".format(self.ano_letivo)

                    if self.escola is not None and self.escola is not js_undefined:
                        id_escola = "/{0}".format(self.escola["id"])

                    bot_menus = [
                        widgets.MenuOption("Nova Matricula", **{
                            "_class": "botao_matricular_aluno wave_on_click",
                            "_title": "Matricular o aluno",
                            "_href": "#_phanterpwa:/matricula/{0}{1}{2}?{3}".format(x.id, id_escola, ano_letivo, vars_serialized)
                        })
                    ]
                    for m in x.matriculas:
                        m_ano = m.ano_letivo
                        m_abreviacao = " - {0}".format(m.abreviacao)
                        m_serie = ""
                        m_turma = ""
                        if m.serie is not None:
                            m_serie = " - {0}".format(m.serie)
                        if m.turma is not None:
                            m_turma = " ({0})".format(m.turma)
                        mat_info = "{0}{1}{2}{3}".format(m_ano, m_serie, m_turma, m_abreviacao)
                        bot_menus.append(
                            widgets.MenuOption(mat_info, **{
                                "_class": "botao_matriculas_aluno wave_on_click",
                                "_title": m.nome_escola,
                                "_href": "#_phanterpwa:/matricula/{0}/aluno-conferido/{1}/{2}/".format(x.id, m.id_escola, m.ano_letivo)
                            })
                        )
                    html_menus = widgets.MenuBox(
                            "quant_matris_{0}".format(x.id),
                            I(x.total_matriculas, _class="phanterpwa-icon_numb"),
                            *bot_menus,
                            **{"_class": "borda_color_botao_icone"}
                        )

                    table.append(
                        XTRD(
                            "alunos-table-data-{0}".format(x.id),
                            x.id,
                            x.aluno,
                            data_de_nascimento_formated,
                            x.nome_do_pai,
                            x.nome_da_mae,
                            html_menus,
                            widgets.MenuBox(
                                "drop_{0}".format(x.id),
                                I(_class="fas fa-ellipsis-v"),
                                
                                widgets.MenuOption("Visualizar", **{
                                    "_class": "botao_visualizar_aluno wave_on_click",
                                    "_data-id_aluno": x.id,
                                }),
                                widgets.MenuOption("Editar", **{
                                    "_class": "botao_editar_aluno wave_on_click",
                                    "_href": "#_phanterpwa:/alunos/{0}/editar".format(x.id)
                                }),
                                widgets.MenuOption("Deletar", **{
                                    "_class": "botao_deletar_aluno wave_on_click",
                                    "_data-id_aluno": x.id
                                }),
                                onOpen=lambda: self.binds_menu_aluno()
                            ),
                            **{"drag_and_drop": False}
                        )
                    )
                table.append(
                    XFOOTER(
                        "alunos-table-footer",
                        page=alunos.searcher.page,
                        total_pages=alunos.searcher.total_pages,
                        on_click_page=self._on_page,
                    )
                )
            table.html_to("#lista-alunos-container")
            self.binds()
            def change_attr_drop(el):
                targ = jQuery(el).attr("phanterpwa_dowpdown_target")
                jQuery(el).attr("data-target", targ)
                # jQuery(el).dropdown()
            jQuery("[phanterpwa_dowpdown_target]").each(lambda: change_attr_drop(this))

    def binds_menu_aluno(self):
            jQuery(
                ".botao_visualizar_aluno"
            ).off(
                "click.botao_visualizar_aluno"
            ).on(
                "click.botao_visualizar_aluno",
                lambda: self.get_visualizar_aluno(this)
            )
            jQuery(
                ".botao_deletar_aluno"
            ).off(
                "click.botao_deletar_aluno"
            ).on(
                "click.botao_deletar_aluno",
                lambda: self.get_deletar_aluno(this)
            )

    def _get_data_search(self, search="", field="aluno", orderby="aluno", sort="asc", page=1):
        self._search = search
        self._field = field
        self._orderby = orderby
        self._sort = sort
        self._page = page
        window.PhanterPWA.ApiServer.GET(**{
            'url_args': ["api", "alunos"],
            'url_vars': {
                "search": search,
                "field": field,
                "orderby": orderby,
                "sort": sort,
                "page": page
            },
            'onComplete': self.after_get,
            'get_cache': self.process_data
        })

    def search(self):
        widgets = window.PhanterPWA.Request.widgets
        search = widgets["search_alunos"].value()
        field = widgets["campos_alunos"].value()
        self._get_data_search(search=search, field=field, orderby=field, sort="asc", page=1)

    def get_visualizar_aluno(self, widget_instance):
        id_aluno = jQuery(widget_instance).data("id_aluno")
        window.PhanterPWA.GET(
            "api",
            "aluno",
            id_aluno,
            "visualizar",
            onComplete=lambda data, ajax_status: self.modal_add_alunos_visualizar(data, ajax_status)
        )

    def get_deletar_aluno(self, widget_instance):
        id_aluno = jQuery(widget_instance).data("id_aluno")
        window.PhanterPWA.DELETE(
            "api",
            "aluno",
            id_aluno,
            onComplete=self.depois_de_deletar
        )

    def depois_de_deletar(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            if data.code == 202:
                window.PhanterPWA.flash(json.message)
            else:
                window.PhanterPWA.flash(json.message)
            window.PhanterPWA.GET(**{
                'url_args': ["api", "alunos"],
                'url_vars': {
                    "search": self._search,
                    "field": self._field,
                    "orderby": self._orderby,
                    "sort": self._sort,
                    "page": self._page
                },
                'onComplete': self.after_get,
                'get_cache': self.process_data
            })
        else:
            window.PhanterPWA.flash(json.message)

    def modal_add_alunos_visualizar(self, data, ajax_status):
        json = data.responseJSON
        if ajax_status == "success":
            html_historico = DIV(
                DIV("HISTÓRICO ESCOLAR", _class="p-col w1p100 phanterpwa-widget-form-separator"),
                _class="historicos-conteudo"
            )
            if json.data.historico is not None and json.data.historico is not js_undefined:
                for x in json.data.historico:
                    html_ficha = P(
                        "Não há ficha individual no ano de ",
                        STRONG(x.ano_letivo), " da serie ", STRONG(x.serie), " na escola ",
                        STRONG(x.escola), "."
                    )

                    if x.ficha_individual is not None and x.ficha_individual is not js_undefined:
                        tabela = TABLE(
                            _class="tabela_ficha_individual"
                        )
                        for y in x.ficha_individual:
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
                            LABEL(x.ano_letivo, " - ", x.serie, " - ", x.escola),
                            DIV(
                                DIV(
                                    DIV(
                                        DIV(
                                            tabela,
                                            _class="p-row"
                                        ),
                                        _class="phanterpwa-card-panel-control-content"
                                    ),
                                    _class="phanterpwa-card-panel-control-wrapper"
                                ),
                                _class="phanterpwa-card-panel-control-container"
                            ),
                            _class="phanterpwa-card-panel-control p-col w1p100"
                        )
                    html_historico.append(html_ficha)


            content = CONCATENATE(
                forms.Form(json.data.aluno),
                DIV(html_historico, _class="p-row")
            )
            self.modal_visualizar = modal.Modal(
                "#modal_visualizar_aluno",
                **{
                    "title": CONCATENATE(DIV("Visualizar dados do aluno"),
                        DIV(STRONG(json.data.nome))),
                    "content": content
                }
            )
            self.modal_visualizar.open()

            
        else:
            window.PhanterPWA.flash("Não há alunos_visualizar matriculados para a série da turma")


class Aluno(helpers.XmlConstructor):
    def __init__(self, index_instance, id_aluno, action=None, target="#content-alunos", on_submit=None):
        self.target = target
        self.on_submit = on_submit
        self.id_aluno = id_aluno
        self.action = action
        self.eh_maior = None
        self.responsaveis = set()
        if action == "editar" or id_aluno == "novo":
            self.get_form_aluno(id_aluno)
        elif action == "visualizar":
            self.visualizar(id_aluno, index_instance.request.params)

    def modal_add_naturalidade(self, widget_instance):
        data_set = [
            [1, 'AC'],
            [2, 'AL'],
            [3, 'AM'],
            [4, 'AP'],
            [5, 'BA'],
            [6, 'CE'],
            [7, 'DF'],
            [8, 'ES'],
            [9, 'GO'],
            [10, 'MA'],
            [11, 'MG'],
            [12, 'MS'],
            [13, 'MT'],
            [14, 'PA'],
            [15, 'PB'],
            [16, 'PE'],
            [17, 'PI'],
            [18, 'PR'],
            [19, 'RJ'],
            [20, 'RN'],
            [21, 'RO'],
            [22, 'RR'],
            [23, 'RS'],
            [24, 'SC'],
            [25, 'SE'],
            [26, 'SP'],
            [27, 'TO']
        ]
        content = DIV(

            forms.FormWidget(
                "naturalidade",
                "cidade",
                **{
                    "value": "",
                    "label": "Cidade",
                    "type": "string",
                    "form": "naturalidade",
                    "_placeholder": "Nome da cidade",
                    "_class": "p-col w1p100 w3p50 w4p75"
                }
            ),
            forms.FormWidget(
                "naturalidade",
                "uf",
                **{
                    "value": "",
                    "label": "UF",
                    "type": "select",
                    "form": "naturalidade",
                    "data_set": data_set,
                    "_class": "p-col w1p100 w3p50 w4p25"
                }
            ),
            _class="p-row"
        )
        footer = DIV(
            forms.SubmitButton(
                "adicionar_naturalidade",
                "Adicionar",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_naturalidade = modal.Modal(
            widget_instance.target_selector,
            **{
                "title": "Adicionar Naturalidade",
                "content": content,
                "footer": footer,
                "form": "naturalidade"
            }
        )
        self.modal_naturalidade.open()
        jQuery("#phanterpwa-widget-form-submit_button-adicionar_naturalidade").off(
            "click.adicionar_naturalidade"
        ).on(
            "click.adicionar_naturalidade",
            lambda: self._on_click_add_naturalidade(widget_instance)
        )

    def _on_click_add_naturalidade(self, widget_instance):
        cidade = jQuery("#phanterpwa-widget-input-input-naturalidade-cidade").val()
        uf = jQuery("#phanterpwa-widget-select-input-naturalidade-uf").val()
        if cidade is not "" and uf is not "":
            value = "{0}/{1}".format(
                str(cidade).strip(),
                str(uf).strip()
            )
            widget_instance.add_new_value(value)
        self.modal_naturalidade.close()

    def modal_add_morada(self, widget_instance):
        content = DIV(

            forms.FormWidget(
                "form_morada",
                "morada_outro_model",
                **{
                    "value": "",
                    "label": "Nome",
                    "type": "string",
                    "form": "form_morada",
                    "_placeholder": "Nome",
                    "_class": "p-col w1p100 w3p50 w4p75"
                }
            ),
            forms.FormWidget(
                "form_morada",
                "parentesco",
                **{
                    "value": "",
                    "label": "Parentesco",
                    "type": "string",
                    "form": "form_morada",
                    "_class": "p-col w1p100 w3p50 w4p25"
                }
            ),
            _class="p-row"
        )
        footer = DIV(
            forms.SubmitButton(
                "confirmar_morada",
                "Confirmar",
                _class="btn-autoresize wave_on_click waves-phanterpwa"
            ),
            _class='phanterpwa-form-buttons-container'
        )
        self.modal_morada = modal.Modal(
            widget_instance.target_selector,
            **{
                "title": "Com que o(a) aluno(a) mora?",
                "content": content,
                "footer": footer,
                "form": "form_morada"
            }
        )
        self.modal_morada.open()
        jQuery("#phanterpwa-widget-form-submit_button-confirmar_morada").off(
            "click.adicionar_morada"
        ).on(
            "click.adicionar_morada",
            lambda: self._on_click_add_morada(widget_instance)
        )

    def _on_click_add_morada(self, widget_instance):
        morada_outro_model = jQuery("#phanterpwa-widget-input-input-form_morada-morada_outro_model").val()
        parentesco = jQuery("#phanterpwa-widget-input-input-form_morada-parentesco").val()
        if morada_outro_model is not "" and parentesco is not "":
            value = "{0} ({1})".format(
                morada_outro_model,
                parentesco
            )
            widget_instance.add_new_value(value)
        self.modal_morada.close()

    def check_eh_maior(self, el):
        data = jQuery(el).val()
        nre = __new__(RegExp(r"[0-9]{2}\/[0-9]{2}\/[0-9]{4}"))
        result = str(data).match(nre)
        console.log(result)
        if result is not None and result is not js_undefined:
            data = "{2}{1}{0}".format(*data.split("/"))
            window.PhanterPWA.GET(
                "api",
                "aluno",
                "eh-maior",
                data,
                onComplete=self._resposta_se_eh_maior
            )

    def _resposta_se_eh_maior(self, data, ajax_status):
        if ajax_status == "success":
            if data.status == 200:
                self.eh_maior = True
                window.PhanterPWA.flash("O(A) Aluno(a) é maior de idade")
                self.update_responsaveis()
            elif data.status == 202:
                self.eh_maior = False

    def update_responsaveis(self):
        self._responsaveis = set()
        if self.eh_maior is True:
            self._responsaveis.add(PhanterPWA.get_widget("alunos-aluno").value())
        nome_do_pai = window.PhanterPWA.get_widget("alunos-nome_do_pai").value()
        if nome_do_pai != "":
            self._responsaveis.add(nome_do_pai)
        nome_da_mae = window.PhanterPWA.get_widget("alunos-nome_da_mae").value()
        if nome_da_mae != "":
            self._responsaveis.add(nome_da_mae)
        self._responsaveis = list(self._responsaveis)
        window.PhanterPWA.get_widget("alunos-responsavel_legal").set_new_data_set(self._responsaveis)


    def get_form_aluno(self):
        if self.id_aluno == "novo":
            window.PhanterPWA.ApiServer.GET(**{
                'url_args': ["api", "aluno", "novo"],
                'onComplete': self.after_get
            })
        elif self.action == "visualizar":
            window.PhanterPWA.ApiServer.GET(**{
                'url_args': ["api", "aluno", self.id_aluno, "visualizar"],
                'onComplete': self.visualizar
            })
        else:
            window.PhanterPWA.ApiServer.GET(**{
                'url_args': ["api", "aluno", self.id_aluno, "editar"],
                'onComplete': self.after_get
            })

    def visualizar(self, id_aluno, params):
        url_image = "{0}/api/alunos/{1}/image".format(
            window.PhanterPWA.get_api_address(),
            id_aluno
        )
        aluno = params["aluno"]
        nome_da_mae = params["nome_da_mae"]
        matricula = params["matricula"]
        cpf = params["cpf"]
        qrcode = params["qrcode"]
        rg_string = params["rg_string"]
        data_de_nascimento = params["data_de_nascimento"]
        self._carteira = DIV(
            DIV(
                DIV(
                    DIV(
                        DIV(
                            DIV(
                                DIV(
                                    IMG(
                                        _src=url_image
                                    ),
                                    _class="carteira-image"
                                ),
                                DIV(
                                    DIV(
                                        DIV(
                                            DIV(
                                                "NOME",
                                                _class="carteira-data-field"
                                            ),
                                            DIV(
                                                aluno,
                                                _class="carteira-data-nome carteira-data-value"
                                            ),
                                            _class="carteira-data-col"
                                        ),
                                        _class="p-col w1p100"
                                    ),
                                    DIV(
                                        DIV(
                                            DIV(
                                                "NOME DA MÃE",
                                                _class="carteira-data-field"
                                            ),
                                            DIV(
                                                nome_da_mae,
                                                _class="carteira-data-nome_da_mae carteira-data-value"
                                            ),
                                            _class="carteira-data-col"
                                        ),
                                        _class="p-col w1p100"
                                    ),
                                    DIV(
                                        DIV(
                                            DIV(
                                                'MATRÍCULA',
                                                _class="carteira-data-field"
                                            ),
                                            DIV(
                                                matricula,
                                                _class="carteira-data-matricula carteira-data-value"
                                            ),
                                            _class="carteira-data-col"
                                        ),
                                        _class="p-col w1p40"
                                    ),
                                    DIV(
                                        DIV(
                                            DIV(
                                                "CPF",
                                                _class="carteira-data-field"
                                            ),
                                            DIV(cpf,
                                                _class="carteira-data-cpf carteira-data-value"),
                                            _class="carteira-data-col"
                                        ),
                                        _class="p-col w1p60"
                                    ),
                                    DIV(
                                        DIV(
                                            DIV(
                                                "DATA DE NASCIMENTO",
                                                _class="carteira-data-field"
                                            ),
                                            DIV(data_de_nascimento,
                                                _class="carteira-data-data_de_nascimento carteira-data-value"),
                                            _class="carteira-data-col"
                                        ),
                                        _class="p-col w1p40"
                                    ),
                                    DIV(
                                        DIV(
                                            DIV(
                                                "RG",
                                                _class="carteira-data-field"
                                            ),
                                            DIV(rg_string,
                                                _class="carteira-data-rg_string carteira-data-value"),
                                            _class="carteira-data-col"
                                        ),
                                        _class="p-col w1p60"
                                    ),
                                    _class="carteira-data-container p-row"
                                ),
                                _class="p-col w1p30"
                            ),
                            DIV(
                                DIV(
                                    _class="carteira-logo"
                                ),
                                DIV(_class="carteira-qrcode"),
                                _class="p-col w1p70"
                            ),
                            _class="p-row"
                        ),
                        _class="carteira_containar"
                    ),
                    _class="visualizar_aluno_container a4"
                ),
                _class="phanterpwa-media-print"
            ),
            _class="phanterpwa-media-print-container"
        )

        self._carteira.html_to("#content-alunos")
        window.PhanterPWA.LOAD(**{
            "args": ["loads", "svg_logo.html"],
            "onComplete": lambda data: jQuery("#content-alunos").find(".carteira-logo").html(data),
        })
        url = "{0}/api/associado/{1}".format(
            window.PhanterPWA.ApiServer.remote_address,
            qrcode
        )
        qrcode = __new__(QRCode(jQuery("#content-alunos").find(".carteira-qrcode")[0], {
            "text": url,
            "width": 125,
            "height": 125,
            "colorDark": "#000000",
            "colorLight": "#ffffff",
            "correctLevel": QRCode.CorrectLevel.H
        }))

    def after_get(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            self.process_data(json)

    def process_data(self, json):
        self.form = forms.Form(json.data.alunos)
        self.form.html_to(self.target)
        aluno = window.PhanterPWA.Request.get_param("aluno")
        if aluno is not None:
            window.PhanterPWA.get_widget("alunos-aluno").set_value(aluno)
        self.binds()

    def binds(self):
        forms.SignForm("#form-alunos", after_sign=lambda: forms.ValidateForm("#form-alunos"))
        
        jQuery(
            "#phanterpwa-widget-form-submit_button-alunos"
        ).off(
            "click.submit_alunos_button"
        ).on(
            "click.submit_alunos_button",
            lambda: self.submit(this)
        )
        # escolaridade mae
        jQuery(
            "#phanterpwa-widget-select-input-alunos-escolaridade_mae_ensino"
        ).off(
            "change.escolaridade_incompleta_mae"
        ).on(
            "change.escolaridade_incompleta_mae",
            lambda: self._switch_escolaridade(this, "alunos-escolaridade_mae_serie")
        )
        self._switch_escolaridade(
            jQuery("#phanterpwa-widget-select-input-alunos-escolaridade_mae_ensino"),
            "alunos-escolaridade_mae_serie"
        )
        # escolaridade pai
        jQuery(
            "#phanterpwa-widget-select-input-alunos-escolaridade_pai_ensino"
        ).off(
            "change.escolaridade_incompleta_pai"
        ).on(
            "change.escolaridade_incompleta_pai",
            lambda: self._switch_escolaridade(this, "alunos-escolaridade_pai_serie")
        )
        self._switch_escolaridade(
            jQuery("#phanterpwa-widget-select-input-alunos-escolaridade_pai_ensino"),
            "alunos-escolaridade_pai_serie"
        )
        # acompanhamento
        jQuery(
            "#phanterpwa-widget-select-input-alunos-acompanhamento_escolar"
        ).off(
            "change.se_tem_acompanhamento"
        ).on(
            "change.se_tem_acompanhamento",
            lambda: self._switch_sim_ou_nao(this, ".acompanhamento_info")
        )
        self._switch_sim_ou_nao(
            jQuery("#phanterpwa-widget-select-input-alunos-acompanhamento_escolar"),
            ".acompanhamento_info"
        )
        # escolaridade acompanhamento
        jQuery(
            "#phanterpwa-widget-select-input-alunos-escolaridade_acompanhamento"
        ).off(
            "change.escolaridade_incompleta_acompanhamento"
        ).on(
            "change.escolaridade_incompleta_acompanhamento",
            lambda: self._switch_escolaridade(this, "alunos-escolaridade_acompanhamento2")
        )
        self._switch_escolaridade(
            jQuery("#phanterpwa-widget-select-input-alunos-escolaridade_acompanhamento"),
            "alunos-escolaridade_acompanhamento2"
        )
        # alergia
        jQuery(
            "#phanterpwa-widget-select-input-alunos-alergia"
        ).off(
            "change.se_tem_alergia"
        ).on(
            "change.se_tem_alergia",
            lambda: self._switch_sim_ou_nao(this, ".alergia_info")
        )
        self._switch_sim_ou_nao(
            jQuery("#phanterpwa-widget-select-input-alunos-alergia"),
            ".alergia_info"
        )
        # deficiencia
        jQuery(
            "#phanterpwa-widget-select-input-alunos-deficiencia"
        ).off(
            "change.se_tem_deficiencia"
        ).on(
            "change.se_tem_deficiencia",
            lambda: self._switch_sim_ou_nao(this, ".deficiencia_info")
        )
        self._switch_sim_ou_nao(
            jQuery("#phanterpwa-widget-select-input-alunos-deficiencia"),
            ".deficiencia_info"
        )
        # celular_aluno
        jQuery(
            "#phanterpwa-widget-select-input-alunos-celular_aluno"
        ).off(
            "change.se_tem_celular_aluno"
        ).on(
            "change.se_tem_celular_aluno",
            lambda: self._switch_sim_ou_nao(this, ".celular_aluno_info")
        )
        self._switch_sim_ou_nao(
            jQuery("#phanterpwa-widget-select-input-alunos-celular_aluno"),
            ".celular_aluno_info"
        )
        jQuery("#phanterpwa-widget-input-input-alunos-data_nasc").off("change.data_nasc").on(
            "change.data_nasc",
            lambda: self.check_eh_maior(this)
        )

        jQuery("#phanterpwa-widget-input-input-alunos-nome_do_pai").off("change.update_responsaveis").on(
            "change.update_responsaveis",
            lambda: self.update_responsaveis()
        )

        jQuery("#phanterpwa-widget-input-input-alunos-nome_da_mae").off("change.update_responsaveis").on(
            "change.update_responsaveis",
            lambda: self.update_responsaveis()
        )

        window.PhanterPWA.get_widget("alunos-naturalidades").set_on_click_new_button(self.modal_add_naturalidade)
        window.PhanterPWA.get_widget("alunos-morada_outro").set_on_click_new_button(self.modal_add_morada)

    def _switch_escolaridade(self, el, target):
        value = jQuery(el).val()
        if "Incompleto" in str(value):
            window.PhanterPWA.get_widget(target).set_enabled()
        else:
            window.PhanterPWA.get_widget(target).set_disabled()

    def _switch_sim_ou_nao(self, el, target):
        value = jQuery(el).val()
        if value == "Sim":
            jQuery(target).find("phanterpwa-widget").slideDown()
        else:
            jQuery(target).find("phanterpwa-widget").slideUp()

    def submit(self, el):
        if jQuery(el)[0].hasAttribute("disabled"):
            window.PhanterPWA.flash(html=I18N("The form has errors!"))
        else:
            form_aluno = jQuery("#form-alunos")[0]
            form_aluno = __new__(FormData(form_aluno))
            if self.id_aluno == "novo":
                window.PhanterPWA.ApiServer.POST(**{
                    'url_args': ["api", "aluno", self.id_aluno],
                    'form_data': form_aluno,
                    'onComplete': self.after_submit
                })
            elif self.id_aluno.isdigit():
                window.PhanterPWA.ApiServer.PUT(**{
                    'url_args': ["api", "aluno", self.id_aluno],
                    'form_data': form_aluno,
                    'onComplete': self.after_submit
                })

    def after_submit(self, data, ajax_status):
        forms.SignForm("#form-alunos")
        json = data.responseJSON
        if ajax_status == "success":
            self.form.process_api_response(data)
            if callable(self.on_submit):
                self.on_submit(data, ajax_status)
            else:
                if data.status == 200 and self.id_aluno == 'novo':
                    if self.action == 'matricula':
                        window.PhanterPWA.open_way("matricula/{0}/aluno-conferido/".format(
                            json.data.alunos.id
                        ))
                    elif self.action == 'matricular':
                        id_escola = window.PhanterPWA.Request.get_arg(2)
                        ano_letivo = window.PhanterPWA.Request.get_arg(3)
                        window.PhanterPWA.open_way("matricular/{0}/{1}/aluno-conferido/{2}".format(
                            id_escola,
                            ano_letivo,
                            json.data.alunos.id
                        ))
                    else:
                        window.PhanterPWA.open_way("alunos/novo")
                elif data.status == 200:
                    turma_detalhada = window.PhanterPWA.Request.get_param("turmas-detalhadas")
                    if turma_detalhada is None:
                        window.PhanterPWA.open_way("alunos")
                    else:
                        window.PhanterPWA.open_way(turma_detalhada)

__pragma__('nokwargs')
