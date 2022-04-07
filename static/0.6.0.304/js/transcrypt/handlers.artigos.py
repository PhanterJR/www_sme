import phanterpwa.frontend.gatehandler as gatehandler
import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.components.widgets as widgets
import phanterpwa.frontend.preloaders as preloaders
import plugins.codemirror as codemirror
import phanterpwa.frontend.forms as forms
from org.transcrypt.stubs.browser import __pragma__

__pragma__('alias', "jQuery", "$")
__pragma__('skip')
jQuery = sessionStorage = JSON = M = js_undefined = Date = window =\
    this = __new__ = FormData = console = localStorage = QRCode = 0
__pragma__('noskip')

CONCATENATE = helpers.CONCATENATE
OPTION = helpers.XmlConstructor.tagger("option")
SELECT = helpers.XmlConstructor.tagger("select")
BUTTON = helpers.XmlConstructor.tagger("button")
DIV = helpers.XmlConstructor.tagger("div")
H2 = helpers.XmlConstructor.tagger("h2")
A = helpers.XmlConstructor.tagger("a")
SPAN = helpers.XmlConstructor.tagger("span")
ARTICLE = helpers.XmlConstructor.tagger("article")
FORM = helpers.XmlConstructor.tagger("form")
UL = helpers.XmlConstructor.tagger("ul")
LI = helpers.XmlConstructor.tagger("li")
TABLE = helpers.XmlConstructor.tagger("table")
TR = helpers.XmlConstructor.tagger("tr")
TD = helpers.XmlConstructor.tagger("td")
TH = helpers.XmlConstructor.tagger("th")
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
I = helpers.XmlConstructor.tagger("i")
LABEL = helpers.XmlConstructor.tagger("label")
XSECTION = helpers.XSECTION


__pragma__('kwargs')


class Index(gatehandler.Handler):
    def initialize(self):
        arg0 = self.request.get_arg(0)
        arg1 = self.request.get_arg(1)
        if arg0 == "criar" and window.PhanterPWA.auth_user_has_role(["Redator", "Editor", "root"]):
            self.CriarEditarArtigo = CriarEditarArtigo(self, )
        elif arg0 == "editar" and str(arg1).isdigit() and window.PhanterPWA.auth_user_has_role(["Redator", "Editor", "root"]):
            self.CriarEditarArtigo = CriarEditarArtigo(self, arg1)
        else:
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
                ),
                DIV(_id="float_button_novo")

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

    def _data_process(self, x, sorte=None):
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

        if x.artigo is not None:
            artigo = DIV(XML(md.render(x.artigo)), _class="phanterpwa-markdownit-wrapper texto_artigo")
        else:
            artigo = ""
        if x.introducao is not None:
            introducao = DIV(XML(md.render(x.introducao)), _class="phanterpwa-markdownit-wrapper introducao_artigo")
        else:
            introducao = ""
        imagem = "{0}/api/artigo/image/{1}".format(
            window.PhanterPWA.ApiServer.remote_address,
            x.id
        )
        tabela_data_postagem = TABLE(_classs='tabela_data_postagem')
        autor = "Anônimo"
        title_edicao = None
        botao_edicao = False
        if window.PhanterPWA.auth_user_has_role(["Editor", "root"]):
            botao_edicao = True
        if x.autor is not None:
            if window.PhanterPWA.auth_user_has_id(x.autor.id):
                botao_edicao = True
            autor = "{0} {1}".format(x.autor.first_name, x.autor.last_name)
        if x.editor is not None:
            title_edicao = "Editado por: {0} {1}".format(x.editor.first_name, x.editor.last_name)
        btn_edit = ""
        widgets.FloatMenu(
            "botao_criar_artigo",
            I(_class="fas fa-print"),
            _title="Criar um novo artigo",
            _href=window.PhanterPWA.XWAY("artigos", "criar")
        ).html_to("#float_button_novo")
        if botao_edicao:
            btn_edit = TD(
                A(
                    I(_class="fas fa-edit"),
                    _class="botao_editar_artigo icon_button",
                    _href=window.PhanterPWA.XWAY("artigos", "editar", x.id)
                ),
                _class="campo_botao_editar_artigo",
                _colspan="2"
            )
        tabela_data_postagem.append(
            TR(TH(autor), btn_edit)
        )
        if x.editor is not None and x.edicao is not None:
            data_edi, hora_edi = x.edicao.split(" ")
            ano, mes, dia = data_edi.strip().split("-")
            data_edicao = "{0} de {1} de {2} - {3}".format(dia, self.meses[mes], ano, hora_edi)
            tabela_data_postagem.append(
                TR(TD(STRONG(data_postagem, SPAN(" (Editado em ", data_edicao, ")", _title=title_edicao))))
            )
        else:
            tabela_data_postagem.append(
                TR(TD(STRONG(data_postagem)))
            )

        subtitulo = ""
        if x.subtitulo is not None:
            subtitulo = DIV(x.titulo, _class="subtitulo_artigo")
        self.html_artigos.append(
            DIV(
                DIV(x.titulo, _class="titulo_artigo"),
                subtitulo,
                DIV(
                    tabela_data_postagem,
                    _class="p-row"
                ),

                DIV(
                    DIV(
                        IMG(_src=imagem, _class="imagem_artigo"),
                        _class="imagem_artigo_conteiner"
                    ),
                    DIV(x.subtitulo, _class="subtitulo_artigo"),
                    _class="p-row"
                ),
                DIV(
                    introducao,
                    _class="p-row"
                ),
                ARTICLE(
                    artigo,
                ),
                _id="artigo-container-{0}".format(x.id), _class="artigo-container"
            )
        )

    def _depois_de_pegar_artigos(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            if json.data is not js_undefined and json.data is not None:
                self.html_artigos = DIV(_class="artigos-wrapper")
                for x in json.data.sorte:
                    self._data_process(x, sorte=True)
                for x in json.data.titulo:
                    self._data_process(x, sorte=False)
                for x in json.data.subtitulo:
                    self._data_process(x, sorte=False)
                for x in json.data.introducao:
                    self._data_process(x, sorte=False)
                for x in json.data.artigo:
                    self._data_process(x, sorte=False)
                self.html_artigos.html_to("#content-artigos")
            else:
                botao_criar = ""
                if window.PhanterPWA.auth_user_has_role(["Redator", "Editor", "root"]):
                    botao_criar = DIV(
                        A(
                            BUTTON("CRIAR UM NOVO ARTIGO/NOTÍCIA", _class="btn"),
                            _href=window.PhanterPWA.XWAY("artigos", "criar")
                        ),
                        _class="p-row w1p100"
                    )
                DIV(
                    DIV("NÃO HÁ ARTIGOS/NOTÍCIAS"),
                    botao_criar,
                    _class="p-col"
                ).html_to("#content-artigos")


class CriarEditarArtigo():
    def __init__(self, index_instance, id_artigo=None):
        self.Index = index_instance
        self.id_artigo = id_artigo
        if id_artigo is None:
            self._get_id_artigo()
        else:
            self._get_form_artigo()

    def _get_id_artigo(self):
        window.PhanterPWA.POST(
            "api",
            "artigo",
            "criar",
            onComplete=self._depois_de_pegar_id
        )

    def _get_form_artigo(self):
        window.PhanterPWA.GET(
            "api",
            "artigo",
            "editar",
            self.id_artigo,
            onComplete=self._depois_de_pegar_id
        )

    def _depois_de_pegar_id(self, data, ajax_status):
        if ajax_status == "success":
            json = data.responseJSON
            self.id_artigo = json.data.id
            self.dados_form = json.data
            self._form_artigo()

    def _form_artigo(self):
        if self.dados_form.rascunho is True:
            titulo_art = "CRIAR ARTIGO (RASCUNHO)"
        else:
            titulo_art = "EDITAR ARTIGO"
        thumb = "{0}/api/artigo/thumb/{1}".format(
            window.PhanterPWA.ApiServer.remote_address,
            self.id_artigo
        )
        imagem = "{0}/api/artigo/image/{1}".format(
            window.PhanterPWA.ApiServer.remote_address,
            self.id_artigo
        )
        html = CONCATENATE(
            DIV(
                DIV(
                    DIV(
                        DIV("ARTIGOS", _class="phanterpwa-breadcrumb"),
                        DIV(titulo_art, _class="phanterpwa-breadcrumb"),
                        _class="phanterpwa-breadcrumb-wrapper"
                    ),
                    _class="p-container"),
                _class='title_page_container card'
            ),
            DIV(
                DIV(

                    DIV(
                        FORM(
                            DIV(
                                widgets.Input(
                                    "titulo_artigo",
                                    label="Título do Artigo",
                                    name="titulo",
                                    placeholder="Título do Artigo",
                                    value=self.dados_form.titulo,
                                ),
                                XSECTION(
                                    LABEL("Imagem do Artigo"),
                                    widgets.Image(
                                        "card_artigo",
                                        value=imagem,
                                        name="imagem_artigo",
                                        cutter=True,
                                        width=600,
                                        height=200,
                                        nocache=True
                                    ),
                                ),
                                widgets.Input(
                                    "subtitulo_artigo",
                                    label="Subtítulo do Artigo",
                                    name="subtitulo",
                                    placeholder="Subtítulo do Artigo",
                                    value=self.dados_form.subtitulo,
                                ),
                                XSECTION(
                                    LABEL("Resumo/Introdução do Artigo"),
                                    widgets.Textarea(
                                        "textarea_introducao",
                                        name="introducao",
                                        value=self.dados_form.introducao,
                                    ),
                                ),
                                XSECTION(
                                    LABEL("Texto do Artigo"),
                                    widgets.Textarea(
                                        "textarea_artigo",
                                        name="artigo",
                                        value=self.dados_form.artigo,
                                    ),
                                ),
                                XSECTION(
                                    LABEL("Imagem miniatura (Compartilhamento)"),
                                    widgets.Image(
                                        "card_thumb",
                                        name="miniatura_artigo",
                                        value=thumb,
                                        width=300,
                                        height=300,
                                        nocache=True
                                    ),
                                ),
                                DIV(
                                    forms.FormButton(
                                        "publicar",
                                        "Publicar",
                                        _id="botao-publicar"
                                    ),
                                    forms.FormButton(
                                        "salvar-rascunho",
                                        "Salvar Rascunho",
                                        _id="botao-salvar-rascunho"
                                    ),
                                    _class="p-row"
                                ),
                                _id="form-editor"
                            ),
                            DIV(
                                _id="visualizador_tempo_real"
                            ),
                            _id="form-artigos",
                            _class="form-wrapper",
                            **{
                                "_phanterpwa-form": "artigos"
                            }
                        ),
                        DIV(
                            DIV(
                                I(_class="fas fa-user-graduate"),
                                **{
                                    "_class": "botao_tempo_real icon_button",
                                    "_title": "Dividir tela para visualização em tempo real",
                                }
                            ),
                            DIV(
                                I(_class="fas fa-user-graduate"),
                                **{
                                    "_class": "botao_visualizar icon_button",
                                    "_title": "Dividir tela para visualização em tempo real",
                                }
                            ),
                            _class="form-botoes"
                        ),
                        _class="form-artigo-container"
                    ),
                    _class="p-col w1p100"
                ),

                _class="p-row"
            )
        )
        html.html_to("#main-container")
        forms.SignForm("#form-artigos")
        self.binds()

    def binds(self):
        jQuery("#botao-publicar").off("click.publicar").on(
            "click.publicar",
            lambda: self.publicar(rascunho=False)
        )
        jQuery("#botao-salvar-rascunho").off("click.publicar").on(
            "click.publicar",
            lambda: self.publicar(rascunho=True)
        )

    def publicar(self, rascunho=False):
        form_data = __new__(FormData(jQuery("#form-artigos")[0]))
        if rascunho:
            form_data.append("rascunho", True)
        window.PhanterPWA.PUT(
            "api",
            "artigo",
            "editar",
            self.id_artigo,
            form_data=form_data,
            onComplete=lambda data, ajax_status: self.depois_de_publicar(data, ajax_status, rascunho=rascunho))

    def depois_de_publicar(self, data, ajax_status, rascunho=False):
        json = data.responseJSON
        if ajax_status == "success":
            if rascunho:
                window.PhanterPWA.flash(json.message)
            else:
                window.PhanterPWA.flash(json.message)
            window.PhanterPWA.open_way("artigos")
        else:
            forms.SignForm("#form-artigos")

    def realtime(self):
        data_pos, hora = form.postagem.split(" ")
        ano, mes, dia = data_pos.strip().split("-")
        data_postagem = "{0} de {1} de {2} - {3}".format(dia, self.Index.meses[mes], ano, hora)
        md = window.markdownit("default", {
            "html": True,
            "linkify": True,
            "typographer": True,
            "highlight": lambda source, lang: self.Index.codemirror_wrapper(source, lang)
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
        result = DIV(XML(md.render(form.artigo)), _class="phanterpwa-markdownit-wrapper")
        self.html_artigos.append(
            DIV(
                H2(form.titulo),
                DIV(
                    DIV(STRONG("Autor: "), form.autor, _class="p-col w1p50"),
                    DIV(STRONG("Postagem: "), data_postagem, _class="p-col w1p50"),
                    _class="p-row"
                ),
                result,
                _id="artigo-container-{0}".format(form.id), _class="artigo-container"
            )
        )

__pragma__('nokwargs')
