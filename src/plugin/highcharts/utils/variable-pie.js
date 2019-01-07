/*
  Highcharts JS v6.1.4 (2018-09-25)

 Variable Pie module for Highcharts

 (c) 2010-2017 Grzegorz Blachliski

 License: www.highcharts.com/license
*/
import HighCharts from 'highcharts'
//(function(HighCharts) {
//  "object" === typeof module && module.exports ? module.exports = f : "function" === typeof define && define.amd ? define(function() {
//      return f
//  }) : f(Highcharts)
//}
//)(function(f) {
    (function(g) {
        var f = g.pick
          , t = g.each
          , q = g.grep
          , u = g.arrayMin
          , w = g.arrayMax
          , x = g.seriesType
          , y = g.seriesTypes.pie.prototype;
        x("variablepie", "pie", {
            minPointSize: "10%",
            maxPointSize: "100%",
            zMin: void 0,
            zMax: void 0,
            sizeBy: "area",
            tooltip: {
                pointFormat: '\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}\x3cbr/\x3eValue: {point.y}\x3cbr/\x3eSize: {point.z}\x3cbr/\x3e'
            }
        }, {
            pointArrayMap: ["y", "z"],
            parallelArrays: ["x", "y", "z"],
            redraw: function() {
                this.center = null;
                y.redraw.call(this, arguments)
            },
            zValEval: function(a) {
                return "number" !== typeof a || isNaN(a) ? null : !0
            },
            calculateExtremes: function() {
                var a = this.chart, k = this.options, e;
                e = this.zData;
                var z = Math.min(a.plotWidth, a.plotHeight) - 2 * (k.slicedOffset || 0)
                  , h = {}
                  , a = this.center || this.getCenter();
                t(["minPointSize", "maxPointSize"], function(a) {
                    var b = k[a]
                      , c = /%$/.test(b)
                      , b = parseInt(b, 10);
                    h[a] = c ? z * b / 100 : 2 * b
                });
                this.minPxSize = a[3] + h.minPointSize;
                this.maxPxSize = Math.max(Math.min(a[2], h.maxPointSize), a[3] + h.minPointSize);
                e.length && (a = f(k.zMin, u(q(e, this.zValEval))),
                e = f(k.zMax, w(q(e, this.zValEval))),
                this.getRadii(a, e, this.minPxSize, this.maxPxSize))
            },
            getRadii: function(a, k, e, f) {
                var h = 0, b, l = this.zData, c = l.length, n = [], g = "radius" !== this.options.sizeBy, m = k - a;
                for (h; h < c; h++)
                    b = this.zValEval(l[h]) ? l[h] : a,
                    b <= a ? b = e / 2 : b >= k ? b = f / 2 : (b = 0 < m ? (b - a) / m : .5,
                    g && (b = Math.sqrt(b)),
                    b = Math.ceil(e + b * (f - e)) / 2),
                    n.push(b);
                this.radii = n
            },
            translate: function(a) {
                this.generatePoints();
                var k = 0, e = this.options, g = e.slicedOffset, h = g + (e.borderWidth || 0), b, l, c, n = e.startAngle || 0, r = Math.PI / 180 * (n - 90), m = Math.PI / 180 * (f(e.endAngle, n + 360) - 90), n = m - r, q = this.points, v, t = e.dataLabels.distance, e = e.ignoreHiddenPoint, u = q.length, d, p;
                this.startAngleRad = r;
                this.endAngleRad = m;
                this.calculateExtremes();
                a || (this.center = a = this.getCenter());
                this.getX = function(b, e, d) {
                    var f = d.series.radii[d.index];
                    c = Math.asin(Math.max(Math.min((b - a[1]) / (f + d.labelDistance), 1), -1));
                    return a[0] + (e ? -1 : 1) * Math.cos(c) * (f + d.labelDistance)
                }
                ;
                for (m = 0; m < u; m++) {
                    d = q[m];
                    p = this.radii[m];
                    d.labelDistance = f(d.options.dataLabels && d.options.dataLabels.distance, t);
                    this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, d.labelDistance);
                    l = r + k * n;
                    if (!e || d.visible)
                        k += d.percentage / 100;
                    b = r + k * n;
                    d.shapeType = "arc";
                    d.shapeArgs = {
                        x: a[0],
                        y: a[1],
                        r: p,
                        innerR: a[3] / 2,
                        start: Math.round(1E3 * l) / 1E3,
                        end: Math.round(1E3 * b) / 1E3
                    };
                    c = (b + l) / 2;
                    c > 1.5 * Math.PI ? c -= 2 * Math.PI : c < -Math.PI / 2 && (c += 2 * Math.PI);
                    d.slicedTranslation = {
                        translateX: Math.round(Math.cos(c) * g),
                        translateY: Math.round(Math.sin(c) * g)
                    };
                    b = Math.cos(c) * a[2] / 2;
                    v = Math.sin(c) * a[2] / 2;
                    l = Math.cos(c) * p;
                    p *= Math.sin(c);
                    d.tooltipPos = [a[0] + .7 * b, a[1] + .7 * v];
                    d.half = c < -Math.PI / 2 || c > Math.PI / 2 ? 1 : 0;
                    d.angle = c;
                    b = Math.min(h, d.labelDistance / 5);
                    d.labelPos = [a[0] + l + Math.cos(c) * d.labelDistance, a[1] + p + Math.sin(c) * d.labelDistance, a[0] + l + Math.cos(c) * b, a[1] + p + Math.sin(c) * b, a[0] + l, a[1] + p, 0 > d.labelDistance ? "center" : d.half ? "right" : "left", c]
                }
            }
        })
    }
    )(HighCharts)
//});
//# sourceMappingURL=variable-pie.js.map
