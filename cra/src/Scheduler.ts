declare global{
  interface Window {
    Scheduler: any;
    taskQueue: any[];
    timerQueue: any[];
  }
}

console.log(`window.Scheduler`);
console.log(window.Scheduler);

const { unstable_scheduleCallback: sc, unstable_runWithPriority: rP, unstable_ImmediatePriority, unstable_NormalPriority, unstable_IdlePriority } = window.Scheduler;

// 函数签名: function unstable_scheduleCallback(priorityLevel, callback, options)

// console.log(`开始调度: ${Date.now()}`);
let start = Date.now();

rP(unstable_IdlePriority, () => {
  console.log(`任务a, ${Date.now()}`);
})

rP(unstable_NormalPriority, () => {
  console.log(`任务b, ${Date.now()}`);
})

rP(unstable_ImmediatePriority, () => {
  console.log(`任务c, ${Date.now()}`);
})

// sc(unstable_NormalPriority, () => {
//   console.log(`任务a, ${Date.now()}`);
// }, { delay: 100 });

// sc(unstable_NormalPriority, () => {
//   console.log(`任务b, ${performance.now()}`);
// }, { delay: 20 });

// sc(unstable_ImmediatePriority, () => {
//   console.log(`任务c, ${performance.now()}`);
// }, { delay: 0 });

console.log(window.taskQueue, window.timerQueue);

export {};