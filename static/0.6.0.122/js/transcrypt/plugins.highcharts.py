import phanterpwa.frontend.helpers as helpers
import phanterpwa.frontend.components.widgets as widgets
from org.transcrypt.stubs.browser import __pragma__
__pragma__('alias', "jQuery", "$")
__pragma__('skip')
jQuery = sessionStorage = JSON = M = js_undefined = window =\
    __new__ = FormData = console = localStorage = document = this = Highcharts = 0
__pragma__('noskip')


DIV = helpers.XmlConstructor.tagger("div")


__pragma__('kwargs')


class Pie(widgets.Widget):
    def __init__(self, identifier, **parameters):
        self.code_mirror_parameters = dict()
        for x in parameters.keys():
            if not x.startswith("_"):
                self.code_mirror_parameters[x] = parameters[x]
        parameters["_id"] = identifier
        if "_class" in parameters:
            parameters["_class"] = "{0}{1}".format(
                parameters["_class"].strip(),
                " phanterpwa-plugin-highcharts-pie"
            )
        else:
            parameters["_class"] = "phanterpwa-plugin-highcharts-pie"
        self.title = parameters.get("title", "")
        self.showLegend = parameters.get("showLegend", True)
        self.showLabels = parameters.get("showLabels", False)
        self.series_name = parameters.get("series_name", None)
        if self.series_name is None:
            self.series_name = "Total"

        self.pointFormat = parameters.get("pointFormat", "{series.name} (%): <b>{point.y} ({point.percentage:.1f}%)</b>")
        self._chart_target = window.PhanterPWA.get_id(identifier)
        self._series = parameters.get("series", [])

        html = DIV(_id=self._chart_target, _class="phanterpwa-plugin-highcharts-wrapper")
        widgets.Widget.__init__(self, identifier, html, **parameters)

    def _series_validator(self):
        new_serie = {}
        ordem = []
        maior = 0
        key_maior = ""
        for x in self._series:
            field = x["field"]
            if field not in ordem:
                ordem.append(field)
                value = float(x["value"])
                new_serie[field] = {
                    "name": field,
                    "y": value,
                }
                if "color" in x:
                    new_serie[field]["color"] = x["color"]
                if value > maior:
                    maior = value
                    key_maior = field
        if key_maior != "":
            new_serie[key_maior]["sliced"] = True
            new_serie[key_maior]["selected"] = True
        self.data_serie = [new_serie[y] for y in ordem]

    def add_serie(self, field_name, value, **kargs):
        value = float(value)
        if field_name:
            p = dict(kargs)
            p["field"] = field_name
            p["value"] = value
            self._series.append(p)

    def reload(self):
        self.start()

    def start(self):
        self._series_validator()
        Highcharts.chart("{0}".format(self._chart_target), {
            "chart": {
                "plotBackgroundColor": None,
                "plotBorderWidth": None,
                "plotShadow": False,
                "type": 'pie'
            },
            "title": {
                "text": self.title
            },
            "tooltip": {
                "pointFormat": self.pointFormat
            },
            # accessibility: {
            #     point: {
            #         valueSuffix: '%'
            #     }
            # },
            "credits": False,
            "plotOptions": {
                "pie": {
                    "allowPointSelect": True,
                    "cursor": 'pointer',
                    "dataLabels": {
                        "enabled": self.showLabels
                    },
                    "showInLegend": self.showLegend
                }
            },
            "series": [{
                "name": self.series_name,
                "colorByPoint": True,
                "data": self.data_serie
            }]
        })


__pragma__('nokwargs')
