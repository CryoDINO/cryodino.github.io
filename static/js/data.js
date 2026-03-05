const paper = {
  metadata: {
    title:
      "CryoDINO: A generalizable 3D foundation model for Cryo-electron tomography",
    description: "This is a description",
    keywords: ["This", "Is", "A", "Keyword"],
  },
  // navbar: {
  //   home_link: "https://example.com",
  //   more_research: [
  //     {
  //       name: "Research 1",
  //       link: "https://example.com/research-1",
  //     },
  //     {
  //       name: "Research 2",
  //       link: "https://example.com/research-2",
  //     },
  //   ],
  // },
  authors: [
    {
      name: "Ahmadreza Attarpour",
      affiliation: { number: "1,2" },
      equal_contribution: true,
    },
    {
      name: "Sumin Kim",
      affiliation: { number: "1,2,3" },
      equal_contribution: true,
    },
    {
      name: "Jun Ma",
      affiliation: { number: "1,2,3" },
    },
    {
      name: "Tony Xu",
      affiliation: { number: "4" },
    },
    {
      name: "Yeonwoo Seo",
      affiliation: { number: "8" },
    },
    {
      name: "Baidu Li",
      affiliation: { number: "2" },
    },
    {
      name: "Maged Goubran",
      affiliation: { number: "4,5,6,7" },
    },
    {
      name: "Bo Wang",
      affiliation: { number: "1,2,3" },
    },
  ],
  affiliations: [
    {
      number: "1",
      name: "Department of Computer Science, University of Toronto, Toronto, Canada",
    },
    {
      number: "2",
      name: "Peter Munk Cardiac Centre, University Health Network, Toronto, Canada",
    },
    { number: "3", name: "Vector Institute, Toronto, Canada" },
    {
      number: "4",
      name: "Department of Medical Biophysics, University of Toronto, Toronto, Canada",
    },
    {
      number: "5",
      name: "Physical Sciences Platform, Sunnybrook Research Institute, Toronto, Canada",
    },
    {
      number: "6",
      name: "Hurvitz Brain Sciences, Sunnybrook Health Sciences Centre, Toronto, Canada",
    },
    {
      number: "7",
      name: "Centre for Neuromodulation, Sunnybrook Health Sciences Centre, Toronto, Canada",
    },
    {
      number: "8",
      name: "Department of Computer Science and Engineering, Korea University, Seoul, South Korea",
    },
  ],
  link_items: [
    // {
    //   name: "Paper",
    //   link: "https://example.com/paper.pdf",
    //   icon: "fas fa-file-pdf",
    // },
    // {
    //   name: "Arxiv",
    //   link: "https://arxiv.org/abs/xxx",
    //   icon: "ai ai-arxiv",
    // },
    // {
    //   name: "Video",
    //   link: "https://youtube.com/xxx",
    //   icon: "fab fa-youtube",
    // },
    // {
    //   name: "Code",
    //   link: "https://github.com/xxx",
    //   icon: "fab fa-github",
    // },
    // {
    //   name: "Dataset",
    //   link: "https://example.com/dataset",
    //   icon: "fa-solid fa-database",
    // },
  ],
  content: {
    intros: [
      {
        type: "abstract",
        title: "Abstract",
        text: "Nanometre-resolution tomograms acquired with cryogenic electron tomography (cryo-ET) provide unprecedented insight into sub-cellular architecture and the 3D spatial organization of macromolecules in their native environment. Yet, there remains an unmet need for computational pipelines that generalize across experimental conditions and remain robust to extremely low signal-to-noise ratios and reconstruction artifacts. We present CryoDINO, a general-purpose foundation model for cryo-ET, pretrained using teacher-student self-distillation self-supervised learning on an ultra-large corpus of over 360,000 3D patches spanning over 37 species and experimental conditions. CryoDINO learns transferable 3D representations that encode explicit semantic information about macromolecular identity and spatial organization. Validation against state-of-the-art task-specific methods on multiple downstream benchmarks demonstrated CryoDINO’s high generalizability and performance. CryoDINO establishes a scalable and transferable representation backbone for generalizable computational pipelines in in situ structural biology.",
      },
      // { type: "contributions", title: "Key Contributions", items: ["First key contribution", "Second key contribution"] },
    ],
    sections: [
      {
        title: "From Raw Tomogram to a Universal 3D Cryo-ET Foundation Model",
        image: "./static/images/demo-fig1-min.png",
        image_name: "Figure 1 — Pipeline",
        text: "Starting from raw tomograms spanning diverse species, resolutions, and imaging protocols, we extract over 360,000 volumetric 3D patches and apply a self-supervised 3DINO framework — jointly optimizing image-level and patch-level objectives through teacher–student learning. The result is a ViT-Large foundation model that generalizes across downstream tasks by simply attaching a decoder — with minimal data with label.",
      },
      {
        title: "CryoDINO Sees What Matters — Without Ever Seeing a Label",
        image: "./static/images/demo-fig2-min.png",
        image_name: "Figure 2 — PCA & Attention Maps",
        text: "Visualizing the internal representations of CryoDINO reveals strikingly structured feature spaces. PCA projections of patch tokens cleanly separate biologically distinct regions — cytoplasm, membrane, and organelles — across all three anatomical planes (axial, coronal, sagittal). Self-attention heads further confirm that the model spontaneously learns to focus on biologically meaningful structures, despite never receiving a single segmentation label during pretraining. These emergent representations are the foundation of CryoDINO's strong downstream transfer.",
      },
      {
        title: "Outperforming a Fully Supervised Expert — With Half the Labels",
        image: "./static/images/demo-fig3-min.jpg",
        image_name: "Figure 3 — Radar Charts",
        text: "Across three challenging benchmarks (CZII-10001, CZII-10010, EMPIAR-10989) and diverse subcellular targets — organelles, cytoplasm, actin filaments, and membranes — CryoDINO with a frozen encoder trained on just 50% of labeled data (only for 100 epochs) closely rivals or outperform nnU-Net trained on 100% of labels under its full supervised protocol with deep supervision and test-time postprocessing, and 1000 epochs training . With 100% of labels, CryoDINO surpasses nnU-Net on every axis. This demonstrates that self-supervised pretraining on unlabeled cryo-ET volumes captures representations powerful enough to reduce annotation burden by half without sacrificing accuracy.",
      },
    ],
    conclusion: {
      title: "Contributions & Conclusion",
      paragraphs: [
        "We introduce CryoDINO, a cryo-ET foundation model trained via a teacher--student self-distillation self-supervised learning framework on large-scale unannotated data, spanning 37 species, multiple datasets, and diverse imaging conditions and resolutions.",
        "We show that CryoDINO learns transferable 3D representations that encode explicit semantic information about macromolecular identity and spatial organization.",
        "We demonstrate robust generalization across acquisition settings and annotation regimes, achieving consistent gains in low-label scenarios and across three downstream tasks, establishing CryoDINO as a scalable and label-efficient backbone for general-purpose cryo-ET analysis.",
      ],
    },
  },
  bibtex: `@article{cryodino2025,
  title   = {CryoDINO: A 3D Self-Supervised Foundation Model for Cryo-Electron Tomography},
  author  = {Attarpour, Ahmadreza and others},
  year    = {2025}
}`,
};
