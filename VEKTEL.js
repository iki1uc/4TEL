// VEKTEL.js
export const VEKTEL = {
  id: "VEKTEL",
  mode: "vector.tel.len",
  status: "active",

  // erzeugt alle drei Vektoren
  build(tri, quad) {
    return {
      v1: this.v1(tri),
      v2: this.v2(quad),
      v3: this.v3(tri, quad)
    };
  },

  // Vektor 1 = erster Punkt des 3TEL
  v1(tri) {
    return tri[0];
  },

  // Vektor 2 = letzter Punkt des 4TEL
  v2(quad) {
    return quad[quad.length - 1];
  },

  // Vektor 3 = Synthese aus 3TEL + 4TEL
  v3(tri, quad) {
    return tri[1] + "→" + quad[2];
  }
};
