/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type PriorityLevel = 0 | 1 | 2 | 3 | 4 | 5;

// 调度的6个优先级变量

// TODO: Use symbols?
export const NoPriority = 0;
export const ImmediatePriority = 1;
export const UserBlockingPriority = 2; // 用户交互
export const NormalPriority = 3; // 最常见: 如fetch相应更新
export const LowPriority = 4; // Susponse
export const IdlePriority = 5;
