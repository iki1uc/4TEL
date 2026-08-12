// 4TEL.respo.js
import { TEL4_PIPE } from "./4TEL.pipe.js";

export const TEL4_RESPO = {
  speak(segment) {
    const out = TEL4_PIPE.run(segment);

    return `
4TEL:
${out.quad}

Vektoren:
V1 = ${out.vectors.v1}
V2 = ${out.vectors.v2}
V3 = ${out.vectors.v3}
`;
  }
};
