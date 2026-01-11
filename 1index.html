// components/RepairProgress.tsx
import React from 'react';

const STEPS = [
  { label: '입고', icon: '📥' },
  { label: '진단중', icon: '🔍' },
  { label: '정비중', icon: '🛠️' },
  { label: '검수중', icon: '✅' },
  { label: '완료', icon: '🚚' }
];

export default function RepairProgress({ currentStatus }: { currentStatus: string }) {
  const currentIndex = STEPS.findIndex(s => s.label === currentStatus);

  return (
    <div className="w-full max-w-2xl p-6 bg-white rounded-3xl shadow-xl border border-gray-100">
      <div className="flex justify-between relative">
        {STEPS.map((step, i) => (
          <div key={step.label} className="flex flex-col items-center z-10 w-1/5">
            {/* 아이콘 원형 */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-500
              ${i <= currentIndex ? 'bg-blue-600 shadow-blue-200 shadow-lg scale-110' : 'bg-gray-100 text-gray-400'}`}>
              {step.icon}
            </div>
            {/* 라벨 */}
            <span className={`mt-3 text-xs font-bold ${i <= currentIndex ? 'text-blue-600' : 'text-gray-400'}`}>
              {step.label}
            </span>
          </div>
        ))}
        {/* 진행 라인 배경 */}
        <div className="absolute top-6 left-0 w-full h-1 bg-gray-100 -z-0" />
        {/* 실제 채워지는 라인 */}
        <div 
          className="absolute top-6 left-0 h-1 bg-blue-600 transition-all duration-700 ease-out"
          style={{ width: `${(currentIndex / (STEPS.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
}
