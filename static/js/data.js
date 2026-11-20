/**
 * Paragraph block display: plain uses p, list uses ul/li
 * @typedef {"plain" | "list"} ParagraphStyle
 *
 * Single paragraph: optional style, defaults to block-level paragraphStyle
 * @typedef {{
 *   text: string;
 *   style?: ParagraphStyle;
 * }} Paragraph
 *
 * @typedef {{ src: string; caption?: string }} Video
 * @typedef {{ src: string; caption?: string }} Image
 *
 * Unified content block: shared by intro / section / conclusion.
 * Rendering: show video when present; when paragraphs exist use p or ul/li per paragraphStyle.
 * Results table. Cells are strings; prefix a cell with "**" to bold it.
 * @typedef {{ caption?: string; columns: string[]; rows: string[][] }} Table
 *
 * @typedef {{
 *   title?: string;
 *   paragraphs?: Paragraph[];
 *   paragraphStyle?: ParagraphStyle;
 *   video?: Video;
 *   image?: Image;
 *   table?: Table;
 *   extra_images?: Image[];
 * }} ContentBlock
 *
 * @typedef {{
 *   intros: ContentBlock[];
 *   sections: ContentBlock[];
 *   conclusion: ContentBlock;
 * }} Content
 */

const paper = {
  metadata: {
    title:
      "CryoDINO: A generalizable 3D foundation model for cryo-electron tomography",
    url: "https://cryodino.github.io/",
    description:
      "CryoDINO: A generalizable 3D foundation model for cryo-electron tomography",
  },
  // navbar: {
  //   home_link: "https://example.com",
  //   more_research: [
  //     {
  //       name: "Research 1",
  //       link: "https://example.com/research-1",
  //     },
  //   ],
  // },
  authors: [
    {
      name: "Ahmadreza Attarpour",
      affiliation: { number: "1,2" },
      equal_contribution: true,
      corresponding: true,
    },
    {
      name: "Sumin Kim",
      affiliation: { number: "2,3,4" },
      equal_contribution: true,
      corresponding: true,
    },
    { name: "Tony Xu", affiliation: { number: "5,6" } },
    { name: "Charles Chen", affiliation: { number: "1,2" } },
    { name: "Daphne Baron", affiliation: { number: "1,2" } },
    { name: "Ching-Yuan Yu", affiliation: { number: "1,2" } },
    { name: "Yeonwoo Seo", affiliation: { number: "7" } },
    { name: "Baidu Li", affiliation: { number: "2" } },
    { name: "Maged Goubran", affiliation: { number: "5,6,8,9" } },
    { name: "Barry B. Rubin", affiliation: { number: "1,2" } },
    { name: "Jun Ma", affiliation: { number: "2" } },
    {
      name: "Bo Wang",
      affiliation: { number: "1,2,3,4" },
      corresponding: true,
    },
  ],
  affiliations: [
    {
      number: "1",
      name: "Peter Munk Cardiac Centre, University Health Network, Toronto, Canada",
    },
    { number: "2", name: "University Health Network, Toronto, Canada" },
    {
      number: "3",
      name: "Department of Computer Science, University of Toronto, Toronto, Canada",
    },
    { number: "4", name: "Vector Institute, Toronto, Canada" },
    {
      number: "5",
      name: "Department of Medical Biophysics, University of Toronto, Toronto, Canada",
    },
    {
      number: "6",
      name: "Physical Sciences Platform, Sunnybrook Research Institute, Toronto, Canada",
    },
    {
      number: "7",
      name: "Department of Computer Science and Engineering, Korea University, Seoul, South Korea",
    },
    {
      number: "8",
      name: "Hurvitz Brain Sciences, Sunnybrook Health Sciences Centre, Toronto, Canada",
    },
    {
      number: "9",
      name: "Centre for Neuromodulation, Sunnybrook Health Sciences Centre, Toronto, Canada",
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
    {
      name: "Code",
      link: "https://github.com/bowang-lab/CryoDINO",
      icon: "fab fa-github",
    },
  ],
  content: {
    intros: [
      {
        title:
          "CryoDINO in Action: Object Identification Across Biological Structures",
        video: {
          src: "./static/videos/tiled_2x2.mp4",
        },
        paragraphs: [
          {
            text: "CryoDINO learns generalizable 3D representations that transfer across the full spectrum of cryo-ET object identification challenges. Each panel shows a different downstream dataset from — thin actin filaments to densely packed organelle classes — all segmented by the same pretrained backbone with minimal annotations.",
          },
        ],
      },
      {
        title: "Abstract",
        paragraphs: [
          {
            text: "Nanometre-resolution images acquired with cryogenic electron tomography (cryo-ET) provide unprecedented insights into sub-cellular architecture and the 3D spatial organization of macromolecules in their native environment. Yet, there remains an unmet need for computational pipelines that generalize across experimental conditions and downstream tasks while remaining robust to extremely low signal-to-noise ratios and reconstruction artifacts. We present CryoDINO, a general-purpose foundation model for cryo-ET, pretrained using teacher-student self-distillation self-supervised learning on a corpus of 1,658 tomograms and 425,852 3D patches spanning 37 species and experimental conditions. CryoDINO learns transferable 3D representations that encode explicit semantic information about macromolecular identity and spatial organization. A shared pretrained backbone, coupled with task-specific decoders, enables both semantic segmentation and particle detection. Validation against state-of-the-art task-specific methods on multiple semantic-segmentation and particle-detection benchmarks demonstrated CryoDINO’s high generalizability and performance. CryoDINO establishes a scalable and transferable representation backbone for generalizable computational pipelines in structural biology.",
          },
        ],
      },
    ],
    sections: [
      {
        title: "Overview of CryoDINO",
        image: {
          src: "./static/images/fig1_overview.jpg",
          caption:
            "Overview of CryoDINO. (a) A 3D ViT-Large was pretrained with 3DINO on 1,658 tomograms from 48 datasets and transferred to segmentation and particle detection using task-specific decoders. (b) Distribution of 3D training patches across species, colored by biological domain. (c) Downstream performance with 10%, 50%, and 100% of the training data. CryoDINO uses a frozen pretrained encoder and outperforms the baselines, with the largest gains in the 10% label regime. (d) Patch-level representations and multi-head self-attention across tomographic planes: raw tomograms, ground truth, PCA feature maps, and final-layer class-token attention.",
        },
        paragraphs: [
          {
            text: "Here, we present CryoDINO, a cryo-ET 3D foundation model pretrained on 425,852 patches extracted from 1,658 unique tomograms in the CryoET Data Portal. Our approach builds on 3DINO, a three-dimensional extension of DINOv2 that adapts self-supervised teacher–student distillation to volumetric data. We show that CryoDINO learns transferable, semantically rich representations that capture macromolecular identity and broader cellular context. A shared pretrained backbone, coupled with optimized task-specific decoders, enables both semantic segmentation and particle detection.",
          },
        ],
      },
      {
        title: "CryoDINO enables generalizable and label-efficient semantic segmentation",
        image: {
          src: "./static/images/fig2_segmentation_qualitative.jpg",
          caption:
            "Qualitative comparison of segmentation performance. 3D representative multiclass (a) and membrane (b) predictions overlaid on tomographic slices, with class-wise Dice scores shown above each prediction. CryoDINO better preserves the morphology and spatial organization of the ground-truth structures, achieving the highest Dice in six of the seven examples.",
        },
        paragraphs: [
          {
            text: "With all labels (100%), CryoDINO obtained the highest foreground Dice on all four datasets: 0.858 on DS-10001, 0.697 on DS-10010, 0.354 on EMPIAR-10989 and 0.322 on EMPIAR-12049, compared with 0.807, 0.641, 0.334, and 0.321, respectively, for the strongest competing method on each dataset. Averaged across the three datasets, CryoDINO with only half of the labels achieved a higher foreground Dice than every baseline trained on all available labels (0.619 vs. 0.585 for the strongest baseline), with only a modest additional gain at 100% (+0.007).",
          },
        ],
      },
      {
        title: "CryoDINO transfers effectively to particle detection",
        image: {
          src: "./static/images/fig3_detection_qualitative.jpg",
          caption:
            "Qualitative particle-detection results. Ground-truth annotations and predictions from DeepETPicker, ResNet34-FPN, and CryoDINO. Numbers above the predictions indicate per-class F4 scores.",
        },
        paragraphs: [
          {
            text: "To evaluate transfer beyond semantic segmentation, we coupled the frozen CryoDINO encoder with an optimized decoder for particle detection. We compared CryoDINO with DeepETPicker, ResNet34-FPN, and the architecturally identical detection model trained from random initialization. Across experiments using 10%, 50%, and 100% of the training data, CryoDINO achieved the highest aggregate F4 score at every label fraction. Notably, the improvement over DeepETPicker was substantially larger in the low-label setting (+0.136 F4 at 10%) than with all training data (+0.018), demonstrating the benefit of CryoDINO when annotations are limited.",
          },
        ],
      },
    ],
    conclusion: {
      title: "Contributions & Conclusion",
      paragraphs: [
        {
          text: "We introduce CryoDINO, a 3D foundation model for cryo-ET pretrained through self-supervised teacher–student distillation on 425,852 unlabeled 3D patches from 1,658 tomograms, spanning 37 species and diverse imaging conditions and resolutions.",
        },
        {
          text: "To the best of our knowledge, CryoDINO is the first cryo-ET foundation model pretrained at scale on heterogeneous real experimental tomograms. It learns transferable 3D representations of macromolecular identity and spatial organization that support both semantic segmentation and particle detection through a shared frozen encoder with task-specific decoders.",
        },
        {
          text: "We demonstrate strong performance across semantic segmentation and particle detection benchmarks, outperforming state-of-the-art task-specific methods while maintaining generalization across acquisition settings and strong label efficiency in low-annotation regimes.",
        },
      ],
    },
  },
  bibtex: `@misc{attarpour2026cryodino,
  title  = {CryoDINO: A Generalizable 3D Foundation Model for Cryo-Electron Tomography},
  author = {Attarpour, Ahmadreza and Kim, Sumin and Xu, Tony and Chen, Charles and Baron, Daphne and Yu, Ching-Yuan and Seo, Yeonwoo and Li, Baidu and Goubran, Maged and Rubin, Barry B. and Ma, Jun and Wang, Bo},
  year   = {2026}
}`,
};
