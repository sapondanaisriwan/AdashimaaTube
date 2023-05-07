e.calcMaxSlimElementsPerRow = function(a, b, c) {
  return (void 0 === c ? 0 : c) ? 1 === a ? 2 : A("kevlar_shorts_home_big_mode") ? 0 === a % 2 ? a / 2 * 3 : A("kevlar_simp_more_options") ? a + 2 : a + 1 : 2 * a : 2 * b
}
;
e.calcElementsPerRow = function(a, b) {
  var c = this.hostElement.clientWidth;
  if (!A("disable_rich_grid_guide_compensation")) {
      var d = Wn().resolve(Vn(CL))
        , f = null == d ? void 0 : d.guideElement;
      if (d && !d.getData() && !(null != f && f.opened || d.getMiniGuideVisible()))
          if (d.canFitPersistentGuide(c)) {
              var h, l, m = Number(null == (h = window.getComputedStyle(this.hostElement)) ? void 0 : null == (l = h.getPropertyValue("--app-drawer-width")) ? void 0 : l.replace("px", ""));
              c -= m || 0
          } else if (d.canFitMiniGuide(c)) {
              var p;
              h = Number(null == (m = window.getComputedStyle(this.hostElement)) ? void 0 : null == (p = m.getPropertyValue("--ytd-mini-guide-width")) ? void 0 : p.replace("px", ""));
              c -= h || 0
          }
  }
  600 < c && (this.isShortsGrid || this.isShortsGridSlim || this.isCompactGrid || (c -= 48));
  h = this.isShortsGrid || this.isCompactGrid ? 4 : 16;
  return Math.min(Math.floor((c + h) / (a + h)) || 1, b)
}
;