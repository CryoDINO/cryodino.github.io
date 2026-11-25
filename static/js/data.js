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
    short_title: "CryoDINO",
    subtitle:
      "A generalizable 3D foundation model for cryo-electron tomography",
    hero_video: {
      src: "./static/videos/tiled_2x2.mp4",
      // caption:
      //   "CryoDINO learns generalizable 3D representations that transfer across the full spectrum of cryo-ET object identification challenges. Each panel shows a different downstream dataset from — thin actin filaments to densely packed organelle classes — all segmented by the same pretrained backbone with minimal annotations.",
    },
    stats: [
      { value: "1,658", label: "Tomograms" },
      { value: "425,852", label: "3D patches" },
      { value: "37", label: "Species" },
    ],
    // tagline:
    //   "A 3D foundation model for cryo-electron tomography, pretrained on 425,852 3D patches from 1,658 tomograms spanning 37 species, for semantic segmentation and particle detection.",
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
  nav: [
    { id: "abstract", label: "Abstract" },
    { id: "overview", label: "Overview" },
    { id: "preprocessing", label: "Data" },
    { id: "representations", label: "Representations" },
    { id: "segmentation", label: "Segmentation" },
    { id: "detection", label: "Detection" },
    { id: "authors", label: "Authors" },
    { id: "citation", label: "BibTeX" },
  ],
  authors: [
    {
      name: "Ahmadreza Attarpour",
      affiliation: { number: "1" },
      equal_contribution: true,
      corresponding: true,
    },
    {
      name: "Sumin Kim",
      affiliation: { number: "2,3" },
      equal_contribution: true,
      corresponding: true,
    },
    { name: "Tony Xu", affiliation: { number: "4,5" } },
    { name: "Charles Chen", affiliation: { number: "1" } },
    { name: "Daphne Baron", affiliation: { number: "1" } },
    { name: "Ching-Yuan Yu", affiliation: { number: "1" } },
    { name: "Yeonwoo Seo", affiliation: { number: "6" } },
    { name: "Baidu Li", affiliation: { number: "" } },
    { name: "Elnaz Khalili Samani", affiliation: { number: "7" } },
    { name: "Mohammad T. Mazhab-Jafari", affiliation: { number: "4,7" } },
    { name: "Maged Goubran", affiliation: { number: "4,5,8,9" } },
    { name: "Barry Rubin", affiliation: { number: "1" } },
    { name: "Jun Ma", affiliation: { number: "4,7,10" } },
    {
      name: "Bo Wang",
      affiliation: { number: "2,3,4,11" },
      corresponding: true,
    },
  ],
  affiliations: [
    {
      number: "1",
      name: "Peter Munk Cardiac Centre, University Health Network, Toronto, Canada",
    },
    {
      number: "2",
      name: "Department of Computer Science, University of Toronto, Toronto, Canada",
    },
    {
      number: "3",
      name: "Vector Institute, Toronto, Canada",
    },
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
      name: "Graduate School of AI, KAIST, Seoul, South Korea",
    },
    {
      number: "7",
      name: "Princess Margaret Cancer Center, University Health Network, Toronto, Ontario, Canada",
    },
    {
      number: "8",
      name: "Hurvitz Brain Sciences, Sunnybrook Health Sciences Centre, Toronto, Canada",
    },
    {
      number: "9",
      name: "Centre for Neuromodulation, Sunnybrook Health Sciences Centre, Toronto, Canada",
    },
    {
      number: "10",
      name: "AI Hub, University Health Network, Toronto, Ontario, Canada",
    },
    {
      number: "11",
      name: "Department of Laboratory Medicine and Pathobiology, University of Toronto, Toronto, Ontario, Canada",
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
        title: "Abstract",
        paragraphs: [
          {
            text: "Nanometre-resolution images acquired with cryogenic electron tomography (cryo-ET) provide unprecedented insights into sub-cellular architecture and the 3D spatial organization of macromolecules in their native environment. Yet, there remains an unmet need for computational pipelines that generalize across experimental conditions and downstream tasks while remaining robust to extremely low signal-to-noise ratios and reconstruction artifacts. We present CryoDINO, a general-purpose foundation model for cryo-ET, pretrained through self-supervised teacher–student distillation on an exceptionally large and diverse corpus of 1,658 tomograms and 425,852 3D patches spanning 37 species and diverse experimental conditions. CryoDINO learns transferable representations that capture biologically meaningful structural information across molecular and cellular scales. Coupling a shared pretrained backbone with task-specific decoders enables both semantic segmentation and particle detection. Across multiple downstream benchmarks, CryoDINO achieved the strongest overall performance among the evaluated methods and demonstrated high label efficiency, outperforming supervised baselines trained with substantially more annotations. CryoDINO establishes a scalable and transferable representation backbone for generalizable computational pipelines in structural biology.",
          },
        ],
      },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview of CryoDINO",
        shaded: true,
        image: {
          src: "./static/images/fig1a_pipeline.png",
          caption:
            "A 3D ViT-Large was pretrained with 3DINO on 1,658 tomograms from 48 datasets and transferred to segmentation and particle detection using task-specific decoders.",
        },
        paragraphs: [
          {
            text: "Here, we present CryoDINO, a cryo-ET foundation model pretrained on a large and diverse corpus of 425,852 3D patches extracted from 1,658 tomograms spanning 37 species, diverse cellular environments, and experimental conditions in the CryoET Data Portal. Our approach builds on 3DINO, a three-dimensional extension of DINOv2 that adapts self-supervised teacher–student distillation to volumetric data. We show that CryoDINO learns transferable, semantically rich representations that capture macromolecular identity and broader cellular context. A shared pretrained backbone, coupled with optimized task-specific decoders, enables both semantic segmentation and particle detection.",
          },
        ],
        columns: [
          {
            title: "Pretraining Methods",
            card: true,
            paragraphs: [
              {
                text: "Our implementation builds on 3DINO, a volumetric extension of DINOv2, using the official DINOv2 PyTorch codebase. Pretraining was performed on four NVIDIA B200-183GB GPUs with a ViT-Large backbone and a patch size of 16 × 16 × 16. Standard pretraining used a batch size of 275 per GPU (1,100 total), global crops of 96³, and eight local crops of 48³. A subsequent high-resolution adaptation stage followed the 3DINO protocol with identical scheduling compressed to 12,500 iterations.",
              },
            ],
          },
          {
            title: "Finetuning Methods",
            card: true,
            paragraphs: [
              {
                text: "Using the selected backbone, we evaluated ViTAdapterUNETR, under two regimes: (i) frozen backbone (only the adapter and decoder are trained) and (ii) full fine-tuning (joint encoder–decoder optimization). For particle picking, CryoDINO was paired with the ViTAdapterUNETR decoder with feature pyramid network (FPN) fusion. The four multi-scale feature maps from the adapter were fused top-down through three UNETR up-sampling blocks, stopping at the penultimate level, half the input resolution.",
              },
            ],
          },
        ],
      },
      {
        id: "preprocessing",
        title: "Pretraining data preprocessing",
        image: {
          src: "./static/images/fig_preprocessing.jpg",
        },
        paragraphs: [
          {
            text: "We curated a large, unlabeled pretraining corpus using data from the CryoET Data Portal, selecting tomograms with high-quality tilt series (score ≥ 4/5) and excluding runs with low axial resolution (>20 Å along the z-axis). To prevent data leakage, acquisitions overlapping with downstream annotated datasets and duplicate runs were removed. To avoid overrepresentation of large studies, each dataset contributed at most 100 training tomograms via random sampling. The resulting corpus spans diverse organisms, cellular contexts, and imaging conditions while limiting dominance by individual large studies. For patch extraction, an approximate foreground mask was generated per tomogram using deconvolution followed by Otsu thresholding. Mask-guided sampling retained only subvolumes containing more than 4,096 foreground voxels, matching the 16 × 16 × 16 ViT tokenization to ensure at least one fully informative structural token per patch. In total, 425,852 biologically meaningful 3D patches were extracted for self-supervised pretraining.",
          },
        ],
      },
      {
        shaded: true,
        columns: [
          {
            width: "is-7",
            image: {
              src: "./static/images/fig1b_dataset.png",
              caption:
                "Distribution of 3D training patches across species, colored by biological domain.",
            },
          },
          {
            width: "is-5",
            image: {
              src: "./static/images/fig1c_performance.png",
              caption:
                "Downstream performance with 10%, 50%, and 100% of the training data. CryoDINO uses a frozen pretrained encoder and outperforms the baselines, with the largest gains in the 10% label regime.",
            },
          },
        ],
      },
      {
        id: "representations",
        title: "Patch-level representation and multi-head self-attention",
        image: {
          src: "./static/images/fig1d_representations.jpg",
          caption:
            "Patch-level representations and multi-head self-attention across tomographic planes: raw tomograms, ground truth, PCA feature maps, and final-layer class-token attention.",
        },
        paragraphs: [
          {
            text: "To inspect the learned embeddings we visualized patch-level principal components (PCA) and multi-head self-attention (MHSA) maps of the frozen backbone. The PCA projections separated the foreground cellular context from the background on unseen downstream data and grouped structurally similar regions; for DS-10001, components inside the foreground (cytoplasm, organelles, membrane) were distinct from the background. MHSA maps concentrated on structured regions despite acquisition noise and reconstruction artifacts.",
          },
        ],
      },
      {
        id: "segmentation",
        title: "CryoDINO enables generalizable and label-efficient semantic segmentation",
        shaded: true,
        layout: "split",
        image: {
          src: "./static/images/fig2_segmentation_qualitative.png",
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
        id: "detection",
        title: "CryoDINO transfers effectively across particle-detection benchmarks",
        image: {
          src: "./static/images/fig3_detection_qualitative.jpg",
          caption:
            "Qualitative particle-detection results. Representative test tomograms from (a) CZII and (b) BYU datasets. Both panels show ground-truth locations and predictions from DeepETPicker, ResNet34-FPN, and CryoDINO. Numbers indicate per-example F4 scores for CZII (a) and F2 scores for BYU (b).",
        },
        paragraphs: [
          {
            text: "To evaluate transfer beyond semantic segmentation, we coupled the frozen CryoDINO encoder with an optimized decoder for particle detection. We compared CryoDINO with DeepETPicker, ResNet34-FPN, and the architecturally identical detection model trained from random initialization. Across experiments using 10%, 50%, and 100% of the training data, CryoDINO achieved the highest aggregate detection performance at every label fraction on both benchmarks and produced more precise particle localization.",
          },
          {
            text: "On CZII, the F4 score increased from 0.558 at 10% to 0.681 at 100% training data, while on BYU the F2 score increased from 0.547 to 0.895. Notably, the advantage over DeepETPicker was largest in the low-annotation setting on both benchmarks, reaching +0.136 F4 on CZII and +0.152 F2 on BYU at 10% of the training data.",
          },
        ],
      },
    ],
    conclusion: {
      title: "Contributions & Conclusion",
      paragraphs: [
        {
          text: "We introduce CryoDINO, a 3D foundation model for cryo-ET pretrained through self-supervised teacher–student distillation on 425,852 unlabeled 3D patches from 1,658 tomograms spanning 37 species and diverse imaging conditions and resolutions. The code, pretrained weights, tutorials, visualization tools, and evaluation framework are publicly available at https://github.com/bowang-lab/CryoDINO.",
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
  author = {Attarpour, Ahmadreza and Kim, Sumin and Xu, Tony and Chen, Charles and Baron, Daphne and Yu, Ching-Yuan and Seo, Yeonwoo and Li, Baidu and Khalili Samani, Elnaz and Mazhab-Jafari, Mohammad T. and Goubran, Maged and Rubin, Barry and Ma, Jun and Wang, Bo},
  year   = {2026}
}`,
};
