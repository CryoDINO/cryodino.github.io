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
      "CryoDINO is a 3D foundation model for cryo-electron tomography, pretrained with self-supervised teacher-student distillation on 425,852 3D patches from 1,658 tomograms and transferred to semantic segmentation and particle detection.",
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
    { name: "Elnaz Khalili Samani", affiliation: { number: "8" } },
    { name: "Mohammad T. Mazhab-Jafari", affiliation: { number: "8" } },
    { name: "Maged Goubran", affiliation: { number: "5,6,9,10" } },
    { name: "Barry Rubin", affiliation: { number: "1,2" } },
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
      name: "Princess Margaret Cancer Centre, University Health Network, Toronto, Canada",
    },
    {
      number: "9",
      name: "Hurvitz Brain Sciences, Sunnybrook Health Sciences Centre, Toronto, Canada",
    },
    {
      number: "10",
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
            text: "CryoDINO learns generalizable 3D representations that transfer across cryo-ET object identification tasks. Each panel shows a different downstream dataset, from thin actin filaments to densely packed organelle classes, all segmented by the same frozen pretrained backbone.",
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
      {
        title: "Contributions",
        paragraphStyle: "list",
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
    ],
    sections: [
      {
        title: "One Pretrained 3D Backbone for Cryo-ET",
        image: {
          src: "./static/images/fig1_overview.jpg",
          caption:
            "Figure 1. Overview of CryoDINO. (a) A 3D ViT-Large was pretrained with 3DINO on 1,658 tomograms from 48 datasets and transferred to segmentation and particle detection using task-specific decoders. (b) Distribution of 3D training patches across species, colored by biological domain. (c) Downstream performance with 10%, 50%, and 100% of the training data; CryoDINO uses a frozen pretrained encoder. (d) Patch-level PCA feature maps and final-layer class-token attention across tomographic planes.",
        },
        paragraphs: [
          {
            text: "We curated an unlabeled pretraining corpus from the CryoET Data Portal, keeping tomograms with high-quality tilt series and an axial resolution of 20 Å or better, removing acquisitions that overlap the downstream benchmarks, and capping each dataset at 100 tomograms so that no single study dominates. A deconvolution and Otsu-threshold foreground mask guided patch extraction, keeping only subvolumes with enough structure to fill at least one 16×16×16 ViT token. The result is 425,852 3D patches from 1,658 tomograms covering 37 species.",
          },
          {
            text: "CryoDINO builds on 3DINO, a volumetric extension of DINOv2 that jointly optimizes image-level and patch-level self-distillation objectives between a teacher and a student network. A ViT-Large backbone was pretrained for 125,000 iterations on 96³ global and 48³ local crops, followed by a high-resolution adaptation stage at 128³. To make the model robust to acquisition variability, patches were normalized with randomly chosen percentile clipping or tomogram-level z-scoring, and augmented with 3D crops, flips, rotations, contrast changes, smoothing, sharpening, and Gibbs and Gaussian noise.",
          },
          {
            text: "For downstream tasks, the pretrained encoder stays frozen. Segmentation uses a ViT-Adapter UNETR decoder; particle detection adds a feature-pyramid fusion and an anchor-free head that predicts per-class center scores and 3D offsets to particle centers.",
          },
        ],
      },
      {
        title: "Generalizable and Label-Efficient Semantic Segmentation",
        image: {
          src: "./static/images/fig2_segmentation_qualitative.jpg",
          caption:
            "Figure 2. Qualitative comparison of segmentation performance. 3D representative multiclass (a) and membrane (b) predictions overlaid on tomographic slices, with class-wise Dice scores above each prediction. CryoDINO achieves the highest Dice in six of the seven examples.",
        },
        paragraphs: [
          {
            text: "We compared CryoDINO with 3D U-Net, UNETR, DeePiCt, MemBrain-seg, and an architecturally identical model trained from random initialization, on four benchmarks (DS-10001, DS-10010, EMPIAR-10989, EMPIAR-12049) with identical splits. With all labels, CryoDINO obtained the highest foreground Dice on all four datasets and the lowest HD95 on three of them. No single baseline was consistently second best. On membranes, CryoDINO outperformed MemBrain-seg on all three applicable datasets (0.721 vs. 0.638, 0.697 vs. 0.524, and 0.333 vs. 0.265 Dice).",
          },
          {
            text: "The gains are largest when labels are scarce. With a single training tomogram on DS-10001, CryoDINO reached 0.820 Dice, above U-Net, UNETR, and the randomly initialized model trained on all eight tomograms. On DS-10010, 10% of the labels gave 0.655, higher than every baseline trained on 100%. Averaged over three datasets, CryoDINO with half the labels (0.619) beat every baseline trained on all labels (0.585 for the strongest). Fully fine-tuning the encoder did not improve over keeping it frozen on any dataset.",
          },
        ],
        table: {
          caption:
            "Foreground Dice on the test sets with 100% of the training data (classes averaged, background excluded). Best value per dataset in bold.",
          columns: ["Method", "DS-10001", "DS-10010", "EMPIAR-10989", "EMPIAR-12049"],
          rows: [
            ["U-Net", "0.799", "0.597", "0.256", "0.303"],
            ["UNETR", "0.773", "0.641", "0.301", "0.222"],
            ["DeePiCt", "0.473", "0.478", "0.127", "0.258"],
            ["CryoDINO (random init.)", "0.807", "0.626", "0.334", "0.321"],
            ["CryoDINO (frozen encoder)", "**0.858", "**0.697", "**0.354", "**0.322"],
          ],
        },
        extra_images: [
          {
            src: "./static/images/figS_label_efficiency.png",
            caption:
              "Segmentation performance across training-data proportions. Foreground Dice (a–d) and HD95 (e–h) for DS-10001, DS-10010, EMPIAR-12049, and their average. CryoDINO uses a frozen pretrained encoder.",
          },
        ],
      },
      {
        title: "Transfer to Particle Detection",
        image: {
          src: "./static/images/fig3_detection_qualitative.jpg",
          caption:
            "Figure 3. Qualitative particle-detection results on the CZII phantom dataset. Ground-truth annotations and predictions from DeepETPicker, ResNet34-FPN, and CryoDINO. Numbers above the predictions are per-class F4 scores.",
        },
        paragraphs: [
          {
            text: "Paired with a detection decoder, the same frozen encoder transfers beyond segmentation. On the CZII CryoET Object Identification benchmark (364 test tomograms), CryoDINO achieved the highest class-weighted F4 at every label fraction, compared with DeepETPicker, a ResNet34-FPN RetinaNet, and the same architecture trained from random initialization. The margin over DeepETPicker was largest with one training tomogram (+0.136 F4) and smallest with all seven (+0.018).",
          },
          {
            text: "The largest class-level gains came on β-galactosidase and thyroglobulin, the two hardest classes and the ones weighted double in the challenge score. DeepETPicker remained best on the ribosome and virus-like particle. Low-rank adaptation (LoRA, rank 16) of the encoder raised F4 further from 0.681 to 0.690, while full fine-tuning did not help.",
          },
        ],
        table: {
          caption:
            "Class-weighted F4 on the CZII test set (364 tomograms) with 10% (1), 50% (4), and 100% (7) of the training tomograms. Best value per column in bold.",
          columns: ["Method", "10%", "50%", "100%"],
          rows: [
            ["DeepETPicker", "0.422", "0.623", "0.663"],
            ["ResNet34-FPN", "0.539", "0.646", "0.635"],
            ["CryoDINO (random init.)", "0.553", "0.639", "0.656"],
            ["CryoDINO (pretrained encoder)", "**0.558", "**0.672", "**0.681"],
          ],
        },
        extra_images: [
          {
            src: "./static/images/figS_detection_f4.png",
            caption:
              "Particle-picking performance on CZII. (a) Aggregate F4 by amount of training data. (b) Per-class F4 with all training data. Error bars are 95% bootstrap confidence intervals over test tomograms; β-amylase has zero weight in the aggregate score.",
          },
        ],
      },
      {
        title: "What the Frozen Encoder Learns",
        image: {
          src: "./static/images/figS_linear_probe.png",
          caption:
            "Linear-probe foreground validation Dice as a function of pretraining iterations for (a) DS-10001, (b) DS-10010, (c) EMPIAR-12049, and (d) their average. Stars mark random initialization; open circles mark the checkpoint used for fine-tuning.",
        },
        paragraphs: [
          {
            text: "A linear head on the frozen backbone already separates cellular structures. Pretrained weights beat random initialization at every checkpoint, and the selected checkpoint reached 0.74 Dice on DS-10001 (0.32 for random initialization), 0.30 on DS-10010 (0.07), and 0.14 on EMPIAR-12049 (0.01). High-resolution adaptation added up to 0.08 Dice.",
          },
          {
            text: "PCA of patch tokens and multi-head self-attention maps (Figure 1d) show the same picture without any labels: foreground cellular context separates from background on unseen downstream data, structurally similar regions group together, and attention concentrates on structured regions despite noise and reconstruction artifacts.",
          },
        ],
      },
    ],
    conclusion: {
      title: "Conclusion",
      paragraphs: [
        {
          text: "CryoDINO is a 3D foundation model pretrained on a large and diverse corpus of unlabeled cryo-ET tomograms through teacher–student self-distillation. Across semantic-segmentation and particle-detection benchmarks spanning diverse species, imaging conditions, and resolutions, it consistently outperformed task-specific supervised methods. Linear probing, attention maps, and comparison with an identical model trained from random initialization show that it learns semantically meaningful 3D representations of macromolecular identity and spatial organization.",
        },
        {
          text: "CryoDINO is particularly effective in low-label regimes, exceeding supervised baselines trained with all available annotations while using only 10% or 50% of the labeled tomograms. By decoupling large-scale representation learning from dense supervision, it provides a scalable and label-efficient backbone for cryo-ET analysis. Extending it to subtomogram averaging, 3D macromolecular reconstruction, and broader multi-institution validation are natural next steps.",
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
