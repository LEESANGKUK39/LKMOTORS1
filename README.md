[index.html.txt](https://github.com/user-attachments/files/24547839/index.html.txt)
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mercedes-Benz Truck Service Pro</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');
        body { font-family: 'Noto Sans KR', sans-serif; background-color: #0a0a0a; color: #e5e5e5; }
        .benz-gradient { background: linear-gradient(135deg, #2c3e50 0%, #000000 100%); }
        .step-active { color: #3b82f6; font-weight: bold; }
        .progress-bar { transition: width 0.5s ease-in-out; }
    </style>
</head>
<body class="p-4 md:p-8">

    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <section class="benz-gradient p-8 rounded-3xl border border-gray-800 shadow-2xl">
            <div class="flex justify-between items-center mb-10">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Benz_Logo_2010.svg/1024px-Mercedes-Benz_Logo_2010.svg.png" alt="Benz Logo" class="w-12 h-12 invert">
                <div class="text-right">
                    <p class="text-gray-400 text-sm">차량번호</p>
                    <p class="text-xl font-bold">서울 88 가 1234 (Actros)</p>
                </div>
            </div>

            <h2 class="text-2xl font-bold mb-8 text-center">실시간 정비 진행 현황</h2>

            <div class="relative pt-1">
                <div class="flex mb-4 items-center justify-between text-xs">
                    <span id="status-label" class="py-1 px-3 rounded-full bg-blue-600 text-white font-semibold">입고 확인</span>
                    <span id="percent-label" class="text-blue-400 font-bold">25%</span>
                </div>
                <div class="overflow-hidden h-3 mb-10 text-xs flex rounded bg-gray-700">
                    <div id="progress-line" style="width:25%" class="progress-bar shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
            </div>

            <div class="grid grid-cols-4 gap-2 text-center text-xs">
                <div id="step1" class="step-active"><i class="fas fa-truck-loading text-2xl mb-2"></i><br>입고</div>
                <div id="step2" class="text-gray-600"><i class="fas fa-search-plus text-2xl mb-2"></i><br>진단</div>
                <div id="step3" class="text-gray-600"><i class="fas fa-tools text-2xl mb-2"></i><br>수리중</div>
                <div id="step4" class="text-gray-600"><i class="fas fa-check-circle text-2xl mb-2"></i><br>완료</div>
            </div>

            <div class="mt-10 p-5 bg-black bg-opacity-50 rounded-xl border-l-4 border-blue-500">
                <p class="text-gray-400 text-xs mb-1">정비사 코멘트</p>
                <p id="mechanic-msg" class="text-sm">차량이 정비소에 안전하게 입고되었습니다. 정밀 진단을 준비 중입니다.</p>
            </div>
        </section>

        <section class="bg-white p-8 rounded-3xl text-gray-900 shadow-xl">
            <h2 class="text-2xl font-bold mb-6 flex items-center">
                <i class="fas fa-user-cog mr-2 text-blue-600"></i> 정비사 전용 관리 패널
            </h2>
            
            <div class="space-y-6">
                <div class="p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <p class="font-bold mb-4">정비 단계 수동 조절</p>
                    <div class="grid grid-cols-2 gap-4">
                        <button onclick="updateStatus(1)" class="py-3 bg-gray-800 text-white rounded-lg hover:bg-black transition">1단계: 입고</button>
                        <button onclick="updateStatus(2)" class="py-3 bg-gray-800 text-white rounded-lg hover:bg-black transition">2단계: 진단</button>
                        <button onclick="updateStatus(3)" class="py-3 bg-gray-800 text-white rounded-lg hover:bg-black transition">3단계: 수리중</button>
                        <button onclick="updateStatus(4)" class="py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">4단계: 완료</button>
                    </div>
                </div>

                <div>
                    <label class="block font-bold mb-2">실시간 코멘트 전송</label>
                    <textarea id="admin-input" class="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" rows="3" placeholder="기사님께 전달할 내용을 입력하세요."></textarea>
                    <button onclick="sendMsg()" class="mt-2 w-full py-3 bg-blue-100 text-blue-700 font-bold rounded-lg hover:bg-blue-200 transition">메시지 업데이트</button>
                </div>
            </div>
        </section>

    </div>

    <script>
        function updateStatus(step) {
            const progress = document.getElementById('progress-line');
            const label = document.getElementById('status-label');
            const percent = document.getElementById('percent-label');
            const msg = document.getElementById('mechanic-msg');

            // 단계별 UI 초기화
            for(let i=1; i<=4; i++) {
                document.getElementById('step'+i).classList.replace('step-active', 'text-gray-600');
                document.getElementById('step'+i).classList.replace('text-blue-500', 'text-gray-600');
            }

            // 상태 업데이트 로직
            if(step === 1) {
                progress.style.width = '25%';
                label.innerText = '입고 확인';
                percent.innerText = '25%';
                msg.innerText = '차량이 입고되었습니다.';
                document.getElementById('step1').classList.add('step-active');
            } else if(step === 2) {
                progress.style.width = '50%';
                label.innerText = '정밀 진단';
                percent.innerText = '50%';
                msg.innerText = '컴퓨터 스캐너를 통해 차량의 시스템 오류를 체크하고 있습니다.';
                document.getElementById('step2').classList.add('step-active');
            } else if(step === 3) {
                progress.style.width = '75%';
                label.innerText = '정비 진행 중';
                percent.innerText = '75%';
                msg.innerText = '소모품 교환 및 부품 정비 작업이 한창 진행 중입니다.';
                document.getElementById('step3').classList.add('step-active');
            } else if(step === 4) {
                progress.style.width = '100%';
                label.innerText = '정비 완료';
                percent.innerText = '100%';
                msg.innerText = '모든 정비가 완료되었습니다! 시운전 후 출고 가능합니다.';
                document.getElementById('step4').classList.add('step-active', 'text-blue-500');
            }
        }

        function sendMsg() {
            const input = document.getElementById('admin-input');
            const display = document.getElementById('mechanic-msg');
            if(input.value) {
                display.innerText = input.value;
                input.value = '';
                alert('차주 화면에 메시지가 반영되었습니다.');
            }
        }
    </script>
</body>
</html>
# .github/workflows/deploy.yml 예시
name: Deploy to AWS
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build & Deploy
        run: |
          npm install
          npm run build
          aws s3 sync ./dist s3://my-benz-truck-service --delete
-- 1. 차량 정보 테이블 (차대번호 VIN 중심)
CREATE TABLE vehicles (
    vin TEXT PRIMARY KEY,               -- 차대번호
    plate_number TEXT NOT NULL,         -- 차량번호
    model_name TEXT NOT NULL,           -- 모델 (예: Actros, Arocs)
    owner_name TEXT NOT NULL,           -- 차주명
    owner_phone TEXT NOT NULL,          -- 연락처 (알림톡 발송용)
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. 정비 오더 테이블 (상태 변화 추적)
CREATE TABLE work_orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    vin TEXT REFERENCES vehicles(vin),
    status TEXT DEFAULT 'PENDING',      -- PENDING, DIAGNOSING, REPAIRING, COMPLETED
    description TEXT,                   -- 증상 및 정비 내용
    mechanic_comment TEXT,              -- 차주에게 전달할 코멘트
    estimated_time TIMESTAMPTZ,         -- 예상 완료 시간
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. 상태 변경 시 실시간 타임스탬프 업데이트 트리거
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_work_order_timestamp
BEFORE UPDATE ON work_orders
FOR EACH ROW EXECUTE PROCEDURE update_timestamp();
// /api/update-work-status.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  const { orderId, newStatus, comment, phoneNumber } = req.body;

  // 1. DB 상태 업데이트
  const { data, error } = await supabase
    .from('work_orders')
    .update({ 
      status: newStatus, 
      mechanic_comment: comment 
    })
    .eq('id', orderId);

  if (error) return res.status(500).json({ error: error.message });

  // 2. 카카오 알림톡 발송 로직 (가상 API 연동)
  const messageResult = await sendKakaoAlimtalk({
    to: phoneNumber,
    template: 'STATUS_UPDATE',
    content: `[벤츠트럭] 차량 정비 상태가 [${newStatus}]단계로 변경되었습니다. 코멘트: ${comment}`
  });

  return res.status(200).json({ success: true, message: '상태 업데이트 및 알림 발송 완료' });
}

async function sendKakaoAlimtalk({ to, content }) {
  // 실제 Solapi나 Aligo 같은 API 호출이 일어나는 곳입니다.
  console.log(`Sending Alimtalk to ${to}: ${content}`);
  return { success: true };
}
// 클라이언트 사이드 (React/Next.js)
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function WorkStatusPage({ orderId }) {
  const [status, setStatus] = useState('LOADING');

  useEffect(() => {
    // 실시간 DB 구독 시작
    const subscription = supabase
      .channel('schema-db-changes')
      .on('postgres_changes', 
        { event: 'UPDATE', schema: 'public', table: 'work_orders', filter: `id=eq.${orderId}` },
        (payload) => {
          console.log('실시간 업데이트 감지!', payload.new);
          setStatus(payload.new.status); // 화면이 자동으로 바뀜
        }
      )
      .subscribe();

    return () => supabase.removeChannel(subscription);
  }, [orderId]);

  return <div>현재 정비 상태: {status}</div>;
}
-- 부품 재고 테이블
CREATE TABLE parts_inventory (
    part_no TEXT PRIMARY KEY,          -- 벤츠 순정 부품 번호 (예: A4710180282)
    part_name TEXT NOT NULL,           -- 부품명
    category TEXT,                     -- 엔진, 미션, 소모품 등
    stock_qty INT DEFAULT 0,           -- 현재 재고량
    safety_stock INT DEFAULT 5,        -- 안전 재고 (이하로 떨어지면 발주 알림)
    price DECIMAL(12, 2)               -- 가격
);

-- 정비 시 사용된 부품 기록 테이블
CREATE TABLE work_order_parts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES work_orders(id),
    part_no TEXT REFERENCES parts_inventory(part_no),
    quantity INT DEFAULT 1,
    used_at TIMESTAMPTZ DEFAULT NOW()
);
// /api/use-parts.js
export async function useParts(orderId, partNo, qty) {
  // 1. 재고 확인 및 차감 (트랜잭션 처리)
  const { data, error } = await supabase.rpc('deduct_inventory', {
    target_part_no: partNo,
    amount: qty
  });

  if (error) throw new Error("재고가 부족합니다.");

  // 2. 사용 내역 기록
  await supabase.from('work_order_parts').insert({ order_id: orderId, part_no: partNo, quantity: qty });

  // 3. 안전 재고 체크 및 알림 (기능 확장)
  if (data.remaining_stock <= data.safety_stock) {
    sendAdminAlert(`${partNo} 부품의 재고가 부족합니다. 현재: ${data.remaining_stock}개`);
  }
}
