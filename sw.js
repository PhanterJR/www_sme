
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('0.6.0.252').then(function(cache) {
      return cache.addAll([
        '/static/0.6.0.252/css/normalize.css',
        '/static/0.6.0.252/css/all.min.css',
        '/static/0.6.0.252/css/phanterpwa.css',
        '/static/0.6.0.252/css/application.css',
        '/static/0.6.0.252/favicons/android-chrome-144x144.png',
        '/static/0.6.0.252/favicons/android-chrome-192x192.png',
        '/static/0.6.0.252/favicons/android-chrome-256x256.png',
        '/static/0.6.0.252/favicons/android-chrome-512x512.png',
        '/static/0.6.0.252/favicons/apple-touch-icon.png',
        '/static/0.6.0.252/favicons/browserconfig.xml',
        '/static/0.6.0.252/favicons/favicon-16x16.png',
        '/static/0.6.0.252/favicons/favicon-32x32.png',
        '/static/0.6.0.252/favicons/favicon.ico',
        '/static/0.6.0.252/favicons/manifest.json',
        '/static/0.6.0.252/favicons/mstile-150x150.png',
        '/static/0.6.0.252/favicons/safari-pinned-tab.svg',
        '/static/0.6.0.252/favicons/site.webmanifest',
        '/static/0.6.0.252/favicons/apple-icon-114x114.png',
        '/static/0.6.0.252/favicons/apple-icon-120x120.png',
        '/static/0.6.0.252/favicons/apple-icon-144x144.png',
        '/static/0.6.0.252/favicons/android-icon-48x48.png',
        '/static/0.6.0.252/favicons/apple-icon-152x152.png',
        '/static/0.6.0.252/favicons/apple-icon-180x180.png',
        '/static/0.6.0.252/favicons/apple-icon-57x57.png',
        '/static/0.6.0.252/favicons/apple-icon-60x60.png',
        '/static/0.6.0.252/favicons/apple-icon-72x72.png',
        '/static/0.6.0.252/favicons/apple-icon-precomposed.png',
        '/static/0.6.0.252/favicons/apple-icon-76x76.png',
        '/static/0.6.0.252/favicons/apple-icon.png',
        '/static/0.6.0.252/favicons/android-icon-144x144.png',
        '/static/0.6.0.252/favicons/favicon-96x96.png',
        '/static/0.6.0.252/favicons/android-icon-192x192.png',
        '/static/0.6.0.252/favicons/ms-icon-144x144.png',
        '/static/0.6.0.252/favicons/ms-icon-150x150.png',
        '/static/0.6.0.252/favicons/ms-icon-310x310.png',
        '/static/0.6.0.252/favicons/ms-icon-70x70.png',
        '/static/0.6.0.252/favicons/android-icon-72x72.png',
        '/static/0.6.0.252/favicons/android-icon-36x36.png',
        '/static/0.6.0.252/favicons/android-icon-96x96.png',
        '/static/0.6.0.252/fonts/88bdc70ec292cc29451932f9875b378a.svg',
        '/static/0.6.0.252/fonts/88bdc70ec292cc29451932f9875b378a.eot',
        '/static/0.6.0.252/fonts/88bdc70ec292cc29451932f9875b378a.ttf',
        '/static/0.6.0.252/fonts/88bdc70ec292cc29451932f9875b378a.woff',
        '/static/0.6.0.252/fonts/88bdc70ec292cc29451932f9875b378a.woff2',
        '/static/0.6.0.252/fonts/d6lIkaiiRdih4SpP_SovzAbt.woff2',
        '/static/0.6.0.252/fonts/d6lIkaiiRdih4SpP_SQvzA.woff2',
        '/static/0.6.0.252/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
        '/static/0.6.0.252/fonts/L0x5DF4xlVMF-BfR8bXMIjhFq3-OXg.woff2',
        '/static/0.6.0.252/fonts/L0x5DF4xlVMF-BfR8bXMIjhLq38.woff2',
        '/static/0.6.0.252/fonts/Roboto-Thin.eot',
        '/static/0.6.0.252/fonts/Roboto-Thin.ttf',
        '/static/0.6.0.252/fonts/Roboto-Thin.woff',
        '/static/0.6.0.252/fonts/Roboto-Thin.woff2',
        '/static/0.6.0.252/fonts/roboto-v20-latin-regular.eot',
        '/static/0.6.0.252/fonts/roboto-v20-latin-regular.svg',
        '/static/0.6.0.252/fonts/roboto-v20-latin-regular.ttf',
        '/static/0.6.0.252/fonts/roboto-v20-latin-regular.woff',
        '/static/0.6.0.252/fonts/roboto-v20-latin-regular.woff2',
        '/static/0.6.0.252/fonts/Segoe UI Bold Italic.woff',
        '/static/0.6.0.252/fonts/Segoe UI Bold.woff',
        '/static/0.6.0.252/fonts/Segoe UI Italic.woff',
        '/static/0.6.0.252/fonts/Segoe UI.woff',
        '/static/0.6.0.252/fonts/DejaVuSans.eot',
        '/static/0.6.0.252/fonts/DejaVuSans.svg',
        '/static/0.6.0.252/fonts/DejaVuSans.ttf',
        '/static/0.6.0.252/fonts/DejaVuSans.woff',
        '/static/0.6.0.252/fonts/DejaVuSans.woff2',
        '/static/0.6.0.252/images/background.jpg',
        '/static/0.6.0.252/images/user.png',
        '/static/0.6.0.252/images/warning.png',
        '/static/0.6.0.252/images/contra_cheque.jpg',
        '/static/0.6.0.252/images/perfil_robo-min.jpg',
        '/static/0.6.0.252/images/logo_escola.jpg',
        '/static/0.6.0.252/images/cabecalho_background.jpg',
        '/static/0.6.0.252/images/share.jpg',
        '/static/0.6.0.252/js/hammer.min.js.map',
        '/static/0.6.0.252/js/hammer.min.js',
        '/static/0.6.0.252/js/jquery.hammer.js',
        '/static/0.6.0.252/js/jquery.min.js',
        '/static/0.6.0.252/js/phanterweb.js',
        '/static/0.6.0.252/js/jquery.min.map',
        '/static/0.6.0.252/js/qrcode.min.js',
        '/static/0.6.0.252/js/touch-emulator.js',
        '/static/0.6.0.252/js/highcharts.js',
        '/static/0.6.0.252/js/markdown-it-abbr.min.js',
        '/static/0.6.0.252/js/pica.min.js',
        '/static/0.6.0.252/js/markdown-it-emoji.min.js',
        '/static/0.6.0.252/js/markdown-it-mark.min.js',
        '/static/0.6.0.252/js/markdown-it-ins.min.js',
        '/static/0.6.0.252/js/markdown-it-container.min.js',
        '/static/0.6.0.252/js/markdown-it-sub.min.js',
        '/static/0.6.0.252/js/markdown-it-deflist.min.js',
        '/static/0.6.0.252/js/markdown-it-footnote.min.js',
        '/static/0.6.0.252/js/markdown-it.min.js',
        '/static/0.6.0.252/js/markdown-it-sup.min.js',
        '/static/0.6.0.252/js/transcrypt/org.transcrypt.__runtime__.map',
        '/static/0.6.0.252/js/transcrypt/org.transcrypt.__runtime__.py',
        '/static/0.6.0.252/js/transcrypt/org.transcrypt.__runtime__.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.fmasks.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.fmasks.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.fmasks.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.validations.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.validations.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.validations.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.helpers.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.helpers.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.helpers.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.websocket.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.websocket.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.websocket.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.snippets.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.snippets.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.snippets.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.modal.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.modal.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.modal.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.decorators.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.decorators.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.decorators.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.gatehandler.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.gatehandler.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.gatehandler.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.events.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.events.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.events.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.datetimepicker.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.datetimepicker.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.datetimepicker.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.widgets.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.widgets.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.widgets.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.i18n.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.i18n.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.i18n.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.progressbar.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.progressbar.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.progressbar.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.server.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.server.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.server.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.application.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.application.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.application.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.left_bar.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.left_bar.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.left_bar.js',
        '/static/0.6.0.252/js/transcrypt/plugins.servidor_sme.map',
        '/static/0.6.0.252/js/transcrypt/plugins.servidor_sme.py',
        '/static/0.6.0.252/js/transcrypt/plugins.servidor_sme.js',
        '/static/0.6.0.252/js/transcrypt/auto.config.map',
        '/static/0.6.0.252/js/transcrypt/auto.config.py',
        '/static/0.6.0.252/js/transcrypt/auto.config.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.preloaders.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.preloaders.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.preloaders.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.forms.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.forms.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.forms.js',
        '/static/0.6.0.252/js/transcrypt/handlers.rootcmd.map',
        '/static/0.6.0.252/js/transcrypt/handlers.rootcmd.py',
        '/static/0.6.0.252/js/transcrypt/handlers.rootcmd.js',
        '/static/0.6.0.252/js/transcrypt/handlers.anos_letivos.map',
        '/static/0.6.0.252/js/transcrypt/handlers.anos_letivos.py',
        '/static/0.6.0.252/js/transcrypt/handlers.anos_letivos.js',
        '/static/0.6.0.252/js/transcrypt/handlers.escolas.map',
        '/static/0.6.0.252/js/transcrypt/handlers.escolas.py',
        '/static/0.6.0.252/js/transcrypt/handlers.escolas.js',
        '/static/0.6.0.252/js/transcrypt/handlers.registro_de_atividades.map',
        '/static/0.6.0.252/js/transcrypt/handlers.registro_de_atividades.py',
        '/static/0.6.0.252/js/transcrypt/handlers.registro_de_atividades.js',
        '/static/0.6.0.252/js/transcrypt/handlers.controle_de_atividades.map',
        '/static/0.6.0.252/js/transcrypt/handlers.controle_de_atividades.py',
        '/static/0.6.0.252/js/transcrypt/handlers.controle_de_atividades.js',
        '/static/0.6.0.252/js/transcrypt/handlers.boletins.map',
        '/static/0.6.0.252/js/transcrypt/handlers.boletins.py',
        '/static/0.6.0.252/js/transcrypt/handlers.boletins.js',
        '/static/0.6.0.252/js/transcrypt/handlers.conselho_de_classe.map',
        '/static/0.6.0.252/js/transcrypt/handlers.conselho_de_classe.py',
        '/static/0.6.0.252/js/transcrypt/handlers.conselho_de_classe.js',
        '/static/0.6.0.252/js/transcrypt/handlers.diario_integrado.map',
        '/static/0.6.0.252/js/transcrypt/handlers.diario_integrado.py',
        '/static/0.6.0.252/js/transcrypt/handlers.diario_integrado.js',
        '/static/0.6.0.252/js/transcrypt/handlers.registro_de_faltas.map',
        '/static/0.6.0.252/js/transcrypt/handlers.registro_de_faltas.py',
        '/static/0.6.0.252/js/transcrypt/handlers.registro_de_faltas.js',
        '/static/0.6.0.252/js/transcrypt/handlers.registro_de_aulas_educacao_infantil.map',
        '/static/0.6.0.252/js/transcrypt/handlers.registro_de_aulas_educacao_infantil.py',
        '/static/0.6.0.252/js/transcrypt/handlers.registro_de_aulas_educacao_infantil.js',
        '/static/0.6.0.252/js/transcrypt/handlers.registro_de_aulas.map',
        '/static/0.6.0.252/js/transcrypt/handlers.registro_de_aulas.py',
        '/static/0.6.0.252/js/transcrypt/handlers.registro_de_aulas.js',
        '/static/0.6.0.252/js/transcrypt/handlers.ficha_avaliativa.map',
        '/static/0.6.0.252/js/transcrypt/handlers.ficha_avaliativa.py',
        '/static/0.6.0.252/js/transcrypt/handlers.ficha_avaliativa.js',
        '/static/0.6.0.252/js/transcrypt/handlers.calendarios.map',
        '/static/0.6.0.252/js/transcrypt/handlers.calendarios.py',
        '/static/0.6.0.252/js/transcrypt/handlers.calendarios.js',
        '/static/0.6.0.252/js/transcrypt/handlers.diario_de_notas.map',
        '/static/0.6.0.252/js/transcrypt/handlers.diario_de_notas.py',
        '/static/0.6.0.252/js/transcrypt/handlers.diario_de_notas.js',
        '/static/0.6.0.252/js/transcrypt/handlers.excepcional.map',
        '/static/0.6.0.252/js/transcrypt/handlers.excepcional.py',
        '/static/0.6.0.252/js/transcrypt/handlers.excepcional.js',
        '/static/0.6.0.252/js/transcrypt/handlers.imprimir.map',
        '/static/0.6.0.252/js/transcrypt/handlers.imprimir.py',
        '/static/0.6.0.252/js/transcrypt/handlers.imprimir.js',
        '/static/0.6.0.252/js/transcrypt/handlers.turmas.map',
        '/static/0.6.0.252/js/transcrypt/handlers.turmas.py',
        '/static/0.6.0.252/js/transcrypt/handlers.turmas.js',
        '/static/0.6.0.252/js/transcrypt/handlers.disciplinas.map',
        '/static/0.6.0.252/js/transcrypt/handlers.disciplinas.py',
        '/static/0.6.0.252/js/transcrypt/handlers.disciplinas.js',
        '/static/0.6.0.252/js/transcrypt/handlers.series.map',
        '/static/0.6.0.252/js/transcrypt/handlers.series.py',
        '/static/0.6.0.252/js/transcrypt/handlers.series.js',
        '/static/0.6.0.252/js/transcrypt/handlers.professores.map',
        '/static/0.6.0.252/js/transcrypt/handlers.professores.py',
        '/static/0.6.0.252/js/transcrypt/handlers.professores.js',
        '/static/0.6.0.252/js/transcrypt/handlers.views.funcionario.map',
        '/static/0.6.0.252/js/transcrypt/handlers.views.funcionario.py',
        '/static/0.6.0.252/js/transcrypt/handlers.views.funcionario.js',
        '/static/0.6.0.252/js/transcrypt/handlers.views.funcionarios.map',
        '/static/0.6.0.252/js/transcrypt/handlers.views.funcionarios.py',
        '/static/0.6.0.252/js/transcrypt/handlers.views.funcionarios.js',
        '/static/0.6.0.252/js/transcrypt/handlers.funcionarios.map',
        '/static/0.6.0.252/js/transcrypt/handlers.funcionarios.py',
        '/static/0.6.0.252/js/transcrypt/handlers.funcionarios.js',
        '/static/0.6.0.252/js/transcrypt/handlers.servidores.map',
        '/static/0.6.0.252/js/transcrypt/handlers.servidores.py',
        '/static/0.6.0.252/js/transcrypt/handlers.servidores.js',
        '/static/0.6.0.252/js/transcrypt/handlers.pais_e_alunos.map',
        '/static/0.6.0.252/js/transcrypt/handlers.pais_e_alunos.py',
        '/static/0.6.0.252/js/transcrypt/handlers.pais_e_alunos.js',
        '/static/0.6.0.252/js/transcrypt/plugins.highcharts.map',
        '/static/0.6.0.252/js/transcrypt/plugins.highcharts.py',
        '/static/0.6.0.252/js/transcrypt/plugins.highcharts.js',
        '/static/0.6.0.252/js/transcrypt/handlers.estatisticas.map',
        '/static/0.6.0.252/js/transcrypt/handlers.estatisticas.py',
        '/static/0.6.0.252/js/transcrypt/handlers.estatisticas.js',
        '/static/0.6.0.252/js/transcrypt/handlers.administrar_escola.map',
        '/static/0.6.0.252/js/transcrypt/handlers.administrar_escola.py',
        '/static/0.6.0.252/js/transcrypt/handlers.administrar_escola.js',
        '/static/0.6.0.252/js/transcrypt/handlers.indicadores_de_desempenho.map',
        '/static/0.6.0.252/js/transcrypt/handlers.indicadores_de_desempenho.py',
        '/static/0.6.0.252/js/transcrypt/handlers.indicadores_de_desempenho.js',
        '/static/0.6.0.252/js/transcrypt/handlers.identificar_servidor.map',
        '/static/0.6.0.252/js/transcrypt/handlers.identificar_servidor.py',
        '/static/0.6.0.252/js/transcrypt/handlers.identificar_servidor.js',
        '/static/0.6.0.252/js/transcrypt/handlers.artigos.map',
        '/static/0.6.0.252/js/transcrypt/handlers.artigos.py',
        '/static/0.6.0.252/js/transcrypt/handlers.artigos.js',
        '/static/0.6.0.252/js/transcrypt/handlers.alunos.map',
        '/static/0.6.0.252/js/transcrypt/handlers.alunos.py',
        '/static/0.6.0.252/js/transcrypt/handlers.alunos.js',
        '/static/0.6.0.252/js/transcrypt/handlers.vinculos.map',
        '/static/0.6.0.252/js/transcrypt/handlers.vinculos.py',
        '/static/0.6.0.252/js/transcrypt/handlers.vinculos.js',
        '/static/0.6.0.252/js/transcrypt/handlers.matriculas.map',
        '/static/0.6.0.252/js/transcrypt/handlers.matriculas.py',
        '/static/0.6.0.252/js/transcrypt/handlers.matriculas.js',
        '/static/0.6.0.252/js/transcrypt/handlers.matricular.map',
        '/static/0.6.0.252/js/transcrypt/handlers.matricular.py',
        '/static/0.6.0.252/js/transcrypt/handlers.matricular.js',
        '/static/0.6.0.252/js/transcrypt/handlers.matricula.map',
        '/static/0.6.0.252/js/transcrypt/handlers.matricula.py',
        '/static/0.6.0.252/js/transcrypt/handlers.matricula.js',
        '/static/0.6.0.252/js/transcrypt/handlers.home.map',
        '/static/0.6.0.252/js/transcrypt/handlers.home.py',
        '/static/0.6.0.252/js/transcrypt/handlers.home.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.admin.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.admin.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.admin.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.gallery.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.gallery.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.gallery.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.top_slide.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.top_slide.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.top_slide.js',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.auth_user.map',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.auth_user.py',
        '/static/0.6.0.252/js/transcrypt/phanterpwa.frontend.components.auth_user.js',
        '/static/0.6.0.252/js/transcrypt/application.map',
        '/static/0.6.0.252/js/transcrypt/application.py',
        '/static/0.6.0.252/js/transcrypt/application.js',
        '/static/0.6.0.252/js/transcrypt/application.project',
        '/static/0.6.0.252/js/transcrypt/plugins.codemirror.map',
        '/static/0.6.0.252/js/transcrypt/plugins.codemirror.py',
        '/static/0.6.0.252/js/transcrypt/plugins.codemirror.js',
        '/static/0.6.0.252/json/manifest.json',
        '/static/0.6.0.252/json/manifest.webmanifest',
        '/static/0.6.0.252/lib/codemirror.js',
        '/static/0.6.0.252/lib/codemirror.css',
        '/static/0.6.0.252/webfonts/fa-brands-400.svg',
        '/static/0.6.0.252/webfonts/fa-brands-400.eot',
        '/static/0.6.0.252/webfonts/fa-brands-400.ttf',
        '/static/0.6.0.252/webfonts/fa-brands-400.woff',
        '/static/0.6.0.252/webfonts/fa-brands-400.woff2',
        '/static/0.6.0.252/webfonts/fa-regular-400.eot',
        '/static/0.6.0.252/webfonts/fa-regular-400.ttf',
        '/static/0.6.0.252/webfonts/fa-regular-400.svg',
        '/static/0.6.0.252/webfonts/fa-regular-400.woff',
        '/static/0.6.0.252/webfonts/fa-regular-400.woff2',
        '/static/0.6.0.252/webfonts/fa-solid-900.eot',
        '/static/0.6.0.252/webfonts/fa-solid-900.svg',
        '/static/0.6.0.252/webfonts/fa-solid-900.ttf',
        '/static/0.6.0.252/webfonts/fa-solid-900.woff',
        '/static/0.6.0.252/webfonts/fa-solid-900.woff2',
        '/static/0.6.0.252/mode/index.html',
        '/static/0.6.0.252/mode/meta.js',
        '/static/0.6.0.252/mode/python/python.js',
        '/static/0.6.0.252/mode/python/index.html',
        '/static/0.6.0.252/mode/python/test.js',
        '/static/0.6.0.252/mode/asciiarmor/asciiarmor.js',
        '/static/0.6.0.252/mode/asciiarmor/index.html',
        '/static/0.6.0.252/mode/asn.1/index.html',
        '/static/0.6.0.252/mode/asn.1/asn.1.js',
        '/static/0.6.0.252/mode/asterisk/index.html',
        '/static/0.6.0.252/mode/asterisk/asterisk.js',
        '/static/0.6.0.252/mode/apl/index.html',
        '/static/0.6.0.252/mode/apl/apl.js',
        '/static/0.6.0.252/mode/brainfuck/brainfuck.js',
        '/static/0.6.0.252/mode/brainfuck/index.html',
        '/static/0.6.0.252/mode/clike/index.html',
        '/static/0.6.0.252/mode/clike/clike.js',
        '/static/0.6.0.252/mode/clike/scala.html',
        '/static/0.6.0.252/mode/clike/test.js',
        '/static/0.6.0.252/mode/clojure/index.html',
        '/static/0.6.0.252/mode/clojure/clojure.js',
        '/static/0.6.0.252/mode/clojure/test.js',
        '/static/0.6.0.252/mode/cmake/index.html',
        '/static/0.6.0.252/mode/cmake/cmake.js',
        '/static/0.6.0.252/mode/cobol/cobol.js',
        '/static/0.6.0.252/mode/cobol/index.html',
        '/static/0.6.0.252/mode/coffeescript/index.html',
        '/static/0.6.0.252/mode/coffeescript/coffeescript.js',
        '/static/0.6.0.252/mode/commonlisp/commonlisp.js',
        '/static/0.6.0.252/mode/commonlisp/index.html',
        '/static/0.6.0.252/mode/crystal/crystal.js',
        '/static/0.6.0.252/mode/crystal/index.html',
        '/static/0.6.0.252/mode/css/gss.html',
        '/static/0.6.0.252/mode/css/css.js',
        '/static/0.6.0.252/mode/css/gss_test.js',
        '/static/0.6.0.252/mode/css/index.html',
        '/static/0.6.0.252/mode/css/less.html',
        '/static/0.6.0.252/mode/css/less_test.js',
        '/static/0.6.0.252/mode/css/scss.html',
        '/static/0.6.0.252/mode/css/scss_test.js',
        '/static/0.6.0.252/mode/css/test.js',
        '/static/0.6.0.252/mode/cypher/index.html',
        '/static/0.6.0.252/mode/cypher/cypher.js',
        '/static/0.6.0.252/mode/cypher/test.js',
        '/static/0.6.0.252/mode/d/d.js',
        '/static/0.6.0.252/mode/d/index.html',
        '/static/0.6.0.252/mode/d/test.js',
        '/static/0.6.0.252/mode/dart/index.html',
        '/static/0.6.0.252/mode/dart/dart.js',
        '/static/0.6.0.252/mode/diff/index.html',
        '/static/0.6.0.252/mode/diff/diff.js',
        '/static/0.6.0.252/mode/django/django.js',
        '/static/0.6.0.252/mode/django/index.html',
        '/static/0.6.0.252/mode/dockerfile/dockerfile.js',
        '/static/0.6.0.252/mode/dockerfile/index.html',
        '/static/0.6.0.252/mode/dockerfile/test.js',
        '/static/0.6.0.252/mode/dtd/index.html',
        '/static/0.6.0.252/mode/dtd/dtd.js',
        '/static/0.6.0.252/mode/dylan/index.html',
        '/static/0.6.0.252/mode/dylan/dylan.js',
        '/static/0.6.0.252/mode/dylan/test.js',
        '/static/0.6.0.252/mode/ebnf/ebnf.js',
        '/static/0.6.0.252/mode/ebnf/index.html',
        '/static/0.6.0.252/mode/ecl/index.html',
        '/static/0.6.0.252/mode/ecl/ecl.js',
        '/static/0.6.0.252/mode/eiffel/index.html',
        '/static/0.6.0.252/mode/eiffel/eiffel.js',
        '/static/0.6.0.252/mode/elm/index.html',
        '/static/0.6.0.252/mode/elm/elm.js',
        '/static/0.6.0.252/mode/erlang/erlang.js',
        '/static/0.6.0.252/mode/erlang/index.html',
        '/static/0.6.0.252/mode/factor/factor.js',
        '/static/0.6.0.252/mode/factor/index.html',
        '/static/0.6.0.252/mode/fcl/fcl.js',
        '/static/0.6.0.252/mode/fcl/index.html',
        '/static/0.6.0.252/mode/forth/forth.js',
        '/static/0.6.0.252/mode/forth/index.html',
        '/static/0.6.0.252/mode/fortran/fortran.js',
        '/static/0.6.0.252/mode/fortran/index.html',
        '/static/0.6.0.252/mode/gas/index.html',
        '/static/0.6.0.252/mode/gas/gas.js',
        '/static/0.6.0.252/mode/gfm/gfm.js',
        '/static/0.6.0.252/mode/gfm/index.html',
        '/static/0.6.0.252/mode/gfm/test.js',
        '/static/0.6.0.252/mode/gherkin/index.html',
        '/static/0.6.0.252/mode/gherkin/gherkin.js',
        '/static/0.6.0.252/mode/go/go.js',
        '/static/0.6.0.252/mode/go/index.html',
        '/static/0.6.0.252/mode/groovy/index.html',
        '/static/0.6.0.252/mode/groovy/groovy.js',
        '/static/0.6.0.252/mode/haml/index.html',
        '/static/0.6.0.252/mode/haml/haml.js',
        '/static/0.6.0.252/mode/haml/test.js',
        '/static/0.6.0.252/mode/handlebars/handlebars.js',
        '/static/0.6.0.252/mode/handlebars/index.html',
        '/static/0.6.0.252/mode/haskell/haskell.js',
        '/static/0.6.0.252/mode/haskell/index.html',
        '/static/0.6.0.252/mode/haskell-literate/index.html',
        '/static/0.6.0.252/mode/haskell-literate/haskell-literate.js',
        '/static/0.6.0.252/mode/haxe/index.html',
        '/static/0.6.0.252/mode/haxe/haxe.js',
        '/static/0.6.0.252/mode/htmlembedded/htmlembedded.js',
        '/static/0.6.0.252/mode/htmlembedded/index.html',
        '/static/0.6.0.252/mode/htmlmixed/htmlmixed.js',
        '/static/0.6.0.252/mode/htmlmixed/index.html',
        '/static/0.6.0.252/mode/http/http.js',
        '/static/0.6.0.252/mode/http/index.html',
        '/static/0.6.0.252/mode/idl/index.html',
        '/static/0.6.0.252/mode/idl/idl.js',
        '/static/0.6.0.252/mode/javascript/index.html',
        '/static/0.6.0.252/mode/javascript/javascript.js',
        '/static/0.6.0.252/mode/javascript/json-ld.html',
        '/static/0.6.0.252/mode/javascript/test.js',
        '/static/0.6.0.252/mode/javascript/typescript.html',
        '/static/0.6.0.252/mode/jinja2/jinja2.js',
        '/static/0.6.0.252/mode/jinja2/index.html',
        '/static/0.6.0.252/mode/jsx/jsx.js',
        '/static/0.6.0.252/mode/jsx/index.html',
        '/static/0.6.0.252/mode/jsx/test.js',
        '/static/0.6.0.252/mode/julia/index.html',
        '/static/0.6.0.252/mode/julia/julia.js',
        '/static/0.6.0.252/mode/livescript/index.html',
        '/static/0.6.0.252/mode/livescript/livescript.js',
        '/static/0.6.0.252/mode/lua/index.html',
        '/static/0.6.0.252/mode/lua/lua.js',
        '/static/0.6.0.252/mode/markdown/markdown.js',
        '/static/0.6.0.252/mode/markdown/index.html',
        '/static/0.6.0.252/mode/markdown/test.js',
        '/static/0.6.0.252/mode/mathematica/mathematica.js',
        '/static/0.6.0.252/mode/mathematica/index.html',
        '/static/0.6.0.252/mode/mbox/mbox.js',
        '/static/0.6.0.252/mode/mbox/index.html',
        '/static/0.6.0.252/mode/mirc/mirc.js',
        '/static/0.6.0.252/mode/mirc/index.html',
        '/static/0.6.0.252/mode/mllike/index.html',
        '/static/0.6.0.252/mode/mllike/mllike.js',
        '/static/0.6.0.252/mode/mscgen/mscgen.js',
        '/static/0.6.0.252/mode/mscgen/index.html',
        '/static/0.6.0.252/mode/mscgen/mscgen_test.js',
        '/static/0.6.0.252/mode/mscgen/msgenny_test.js',
        '/static/0.6.0.252/mode/mscgen/xu_test.js',
        '/static/0.6.0.252/mode/modelica/modelica.js',
        '/static/0.6.0.252/mode/modelica/index.html',
        '/static/0.6.0.252/mode/mumps/index.html',
        '/static/0.6.0.252/mode/mumps/mumps.js',
        '/static/0.6.0.252/mode/nginx/nginx.js',
        '/static/0.6.0.252/mode/nginx/index.html',
        '/static/0.6.0.252/mode/nsis/nsis.js',
        '/static/0.6.0.252/mode/nsis/index.html',
        '/static/0.6.0.252/mode/ntriples/ntriples.js',
        '/static/0.6.0.252/mode/ntriples/index.html',
        '/static/0.6.0.252/mode/octave/octave.js',
        '/static/0.6.0.252/mode/octave/index.html',
        '/static/0.6.0.252/mode/oz/index.html',
        '/static/0.6.0.252/mode/oz/oz.js',
        '/static/0.6.0.252/mode/pascal/index.html',
        '/static/0.6.0.252/mode/pascal/pascal.js',
        '/static/0.6.0.252/mode/pegjs/pegjs.js',
        '/static/0.6.0.252/mode/pegjs/index.html',
        '/static/0.6.0.252/mode/perl/perl.js',
        '/static/0.6.0.252/mode/perl/index.html',
        '/static/0.6.0.252/mode/php/index.html',
        '/static/0.6.0.252/mode/php/php.js',
        '/static/0.6.0.252/mode/php/test.js',
        '/static/0.6.0.252/mode/pig/pig.js',
        '/static/0.6.0.252/mode/pig/index.html',
        '/static/0.6.0.252/mode/powershell/index.html',
        '/static/0.6.0.252/mode/powershell/powershell.js',
        '/static/0.6.0.252/mode/powershell/test.js',
        '/static/0.6.0.252/mode/properties/index.html',
        '/static/0.6.0.252/mode/properties/properties.js',
        '/static/0.6.0.252/mode/protobuf/index.html',
        '/static/0.6.0.252/mode/protobuf/protobuf.js',
        '/static/0.6.0.252/mode/pug/pug.js',
        '/static/0.6.0.252/mode/pug/index.html',
        '/static/0.6.0.252/mode/puppet/puppet.js',
        '/static/0.6.0.252/mode/puppet/index.html',
        '/static/0.6.0.252/mode/q/q.js',
        '/static/0.6.0.252/mode/q/index.html',
        '/static/0.6.0.252/mode/r/r.js',
        '/static/0.6.0.252/mode/r/index.html',
        '/static/0.6.0.252/mode/rpm/rpm.js',
        '/static/0.6.0.252/mode/rpm/index.html',
        '/static/0.6.0.252/mode/rpm/changes/index.html',
        '/static/0.6.0.252/mode/rst/rst.js',
        '/static/0.6.0.252/mode/rst/index.html',
        '/static/0.6.0.252/mode/ruby/index.html',
        '/static/0.6.0.252/mode/ruby/ruby.js',
        '/static/0.6.0.252/mode/ruby/test.js',
        '/static/0.6.0.252/mode/rust/index.html',
        '/static/0.6.0.252/mode/rust/rust.js',
        '/static/0.6.0.252/mode/rust/test.js',
        '/static/0.6.0.252/mode/sas/sas.js',
        '/static/0.6.0.252/mode/sas/index.html',
        '/static/0.6.0.252/mode/sass/index.html',
        '/static/0.6.0.252/mode/sass/sass.js',
        '/static/0.6.0.252/mode/sass/test.js',
        '/static/0.6.0.252/mode/scheme/index.html',
        '/static/0.6.0.252/mode/scheme/scheme.js',
        '/static/0.6.0.252/mode/shell/index.html',
        '/static/0.6.0.252/mode/shell/shell.js',
        '/static/0.6.0.252/mode/shell/test.js',
        '/static/0.6.0.252/mode/sieve/index.html',
        '/static/0.6.0.252/mode/sieve/sieve.js',
        '/static/0.6.0.252/mode/slim/slim.js',
        '/static/0.6.0.252/mode/slim/index.html',
        '/static/0.6.0.252/mode/slim/test.js',
        '/static/0.6.0.252/mode/smalltalk/index.html',
        '/static/0.6.0.252/mode/smalltalk/smalltalk.js',
        '/static/0.6.0.252/mode/smarty/index.html',
        '/static/0.6.0.252/mode/smarty/smarty.js',
        '/static/0.6.0.252/mode/solr/index.html',
        '/static/0.6.0.252/mode/solr/solr.js',
        '/static/0.6.0.252/mode/soy/index.html',
        '/static/0.6.0.252/mode/soy/soy.js',
        '/static/0.6.0.252/mode/soy/test.js',
        '/static/0.6.0.252/mode/sparql/index.html',
        '/static/0.6.0.252/mode/sparql/sparql.js',
        '/static/0.6.0.252/mode/spreadsheet/index.html',
        '/static/0.6.0.252/mode/spreadsheet/spreadsheet.js',
        '/static/0.6.0.252/mode/sql/sql.js',
        '/static/0.6.0.252/mode/sql/index.html',
        '/static/0.6.0.252/mode/stex/index.html',
        '/static/0.6.0.252/mode/stex/stex.js',
        '/static/0.6.0.252/mode/stex/test.js',
        '/static/0.6.0.252/mode/stylus/stylus.js',
        '/static/0.6.0.252/mode/stylus/index.html',
        '/static/0.6.0.252/mode/swift/swift.js',
        '/static/0.6.0.252/mode/swift/index.html',
        '/static/0.6.0.252/mode/swift/test.js',
        '/static/0.6.0.252/mode/tcl/index.html',
        '/static/0.6.0.252/mode/tcl/tcl.js',
        '/static/0.6.0.252/mode/textile/test.js',
        '/static/0.6.0.252/mode/textile/index.html',
        '/static/0.6.0.252/mode/textile/textile.js',
        '/static/0.6.0.252/mode/tiddlywiki/index.html',
        '/static/0.6.0.252/mode/tiddlywiki/tiddlywiki.css',
        '/static/0.6.0.252/mode/tiddlywiki/tiddlywiki.js',
        '/static/0.6.0.252/mode/tiki/tiki.css',
        '/static/0.6.0.252/mode/tiki/index.html',
        '/static/0.6.0.252/mode/tiki/tiki.js',
        '/static/0.6.0.252/mode/toml/toml.js',
        '/static/0.6.0.252/mode/toml/index.html',
        '/static/0.6.0.252/mode/tornado/tornado.js',
        '/static/0.6.0.252/mode/tornado/index.html',
        '/static/0.6.0.252/mode/troff/index.html',
        '/static/0.6.0.252/mode/troff/troff.js',
        '/static/0.6.0.252/mode/ttcn/ttcn.js',
        '/static/0.6.0.252/mode/ttcn/index.html',
        '/static/0.6.0.252/mode/ttcn-cfg/index.html',
        '/static/0.6.0.252/mode/ttcn-cfg/ttcn-cfg.js',
        '/static/0.6.0.252/mode/turtle/turtle.js',
        '/static/0.6.0.252/mode/turtle/index.html',
        '/static/0.6.0.252/mode/twig/index.html',
        '/static/0.6.0.252/mode/twig/twig.js',
        '/static/0.6.0.252/mode/vb/index.html',
        '/static/0.6.0.252/mode/vb/vb.js',
        '/static/0.6.0.252/mode/velocity/index.html',
        '/static/0.6.0.252/mode/velocity/velocity.js',
        '/static/0.6.0.252/mode/vbscript/index.html',
        '/static/0.6.0.252/mode/vbscript/vbscript.js',
        '/static/0.6.0.252/mode/verilog/index.html',
        '/static/0.6.0.252/mode/verilog/test.js',
        '/static/0.6.0.252/mode/verilog/verilog.js',
        '/static/0.6.0.252/mode/vhdl/vhdl.js',
        '/static/0.6.0.252/mode/vhdl/index.html',
        '/static/0.6.0.252/mode/vue/vue.js',
        '/static/0.6.0.252/mode/vue/index.html',
        '/static/0.6.0.252/mode/wast/test.js',
        '/static/0.6.0.252/mode/wast/index.html',
        '/static/0.6.0.252/mode/wast/wast.js',
        '/static/0.6.0.252/mode/webidl/index.html',
        '/static/0.6.0.252/mode/webidl/webidl.js',
        '/static/0.6.0.252/mode/xml/index.html',
        '/static/0.6.0.252/mode/xml/test.js',
        '/static/0.6.0.252/mode/xml/xml.js',
        '/static/0.6.0.252/mode/xquery/test.js',
        '/static/0.6.0.252/mode/xquery/index.html',
        '/static/0.6.0.252/mode/xquery/xquery.js',
        '/static/0.6.0.252/mode/yacas/index.html',
        '/static/0.6.0.252/mode/yacas/yacas.js',
        '/static/0.6.0.252/mode/yaml/index.html',
        '/static/0.6.0.252/mode/yaml/yaml.js',
        '/static/0.6.0.252/mode/yaml-frontmatter/index.html',
        '/static/0.6.0.252/mode/yaml-frontmatter/yaml-frontmatter.js',
        '/static/0.6.0.252/mode/z80/index.html',
        '/static/0.6.0.252/mode/z80/z80.js',
        '/static/0.6.0.252/xml/browserconfig.xml'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  if (event.request.method == "GET"){
      event.respondWith(caches.match(event.request).then(function(response) {
        if (response !== undefined) {
          return response;
        } else {
          return fetch(event.request).then(function (response) {
            return response;
          }).catch(function () {
            return caches.match('/static/0.6.0.252/images/warning.png');
          });
        }
      }));
  } else {
    if (window.PhanterPWA.DEBUG){
        console.info(event.request.method)
    };
  };
});
