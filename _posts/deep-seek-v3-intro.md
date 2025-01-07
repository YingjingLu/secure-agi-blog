---
title: "DeepSeek V3 Intro: Ground breaking does not cost a lot of money as people would think"
excerpt: "Intro to Deep Seek V3, a new state of the art LLM that does not cost a lot of money to train. Let's dive into what it is for this article"
coverImage: "/assets/blog/deep-seek-v3/DeepSeek-v3.webp"
date: "2025-01-03T05:35:07.322Z"
author:
  name: Yingjing Lu
  picture: "/assets/blog/authors/linkedin-profile.jpeg"
ogImage:
  url: "/assets/blog/deep-seek-v3/DeepSeek-v3.webp"
---

## Intro
DeepSeek-V3 is a state-of-the-art Mixture-of-Experts (MoE) model developed to optimize both performance and training efficiency. With 671 billion parameters, it activates 37 billion parameters for each token. This architecture blends cutting-edge advancements in efficient training and inference, resulting in robust performance across diverse benchmarks while minimizing costs.

## Key Features of DeepSeek-V3
1. Architecture: DeepSeek-V3 utilizes a Transformer-based architecture, enhanced by Multi-head Latent Attention (MLA) and DeepSeekMoE. These innovations ensure that it balances computational efficiency with strong model performance. MLA reduces the need for large memory caches during inference, and DeepSeekMoE supports distributed computing by employing shared and routed experts across the model's layers.


2. Training Efficiency:
  - FP8 Mixed Precision: DeepSeek-V3 employs FP8 precision during training, reducing memory usage and accelerating the process. Despite the challenges inherent in low-precision training, such as activation outliers, DeepSeek-V3 leverages a fine-grained quantization strategy to maintain high performance.
  - DualPipe Algorithm: This algorithm optimizes pipeline parallelism by overlapping computation and communication phases, significantly improving efficiency during training across nodes.
  - Reduced Communication Overhead: Custom all-to-all communication kernels make full use of high-bandwidth connections like NVLink and InfiniBand, further enhancing the system's scalability and reducing bottlenecks in large distributed settings.

3. Training and Cost:

  - DeepSeek-V3 is trained on a massive 14.8 trillion token dataset. Despite its scale, the training cost is kept low at $5.576 million, due to the efficient use of GPU resources and optimization techniques like memory recomputation and FP8 storage.
4. Post-Training:

  - After pre-training, the model undergoes Supervised Fine-Tuning (SFT) and Reinforcement Learning (RL), refining its output to align better with human preferences. The model also incorporates reasoning capabilities from the DeepSeek-R1 models, improving its problem-solving abilities.
5. Performance:

  - On benchmarks like MMLU and GPQA, DeepSeek-V3 outperforms other open-source models, achieving results close to leading closed-source models. Its performance in tasks such as coding and mathematical problem solving sets it apart as one of the best open-source alternatives.

6. Deployment:

  - DeepSeek-V3's deployment strategy ensures efficient load balancing, even during inference. Redundant expert routing and communication optimization allow for high throughput and low latency, making it suitable for real-world applications.

## Conclusion
DeepSeek-V3 represents a significant leap in both model scale and efficiency. Its innovations in architecture, training efficiency, and deployment strategies make it a powerful tool for natural language processing tasks while remaining cost-effective. As the open-source AI landscape grows, DeepSeek-V3 positions itself as a leader, bridging the gap between cutting-edge performance and practical, scalable deployment.