// utils/validation.ts
export const validateMercedesVIN = (vin: string): { isValid: boolean; message: string } => {
  // 1. 길이 체크 (표준 17자리)
  if (vin.length !== 17) return { isValid: false, message: "차대번호는 17자리여야 합니다." };
  
  // 2. 벤츠 트럭 식별자 포함 여부 (예시: WDB로 시작하는지 등)
  const isMercedes = vin.startsWith('WDB') || vin.startsWith('W1T');
  if (!isMercedes) return { isValid: false, message: "올바른 벤츠 차량 번호가 아닙니다." };

  // 3. 영문/숫자 조합 정규식
  const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/i;
  if (!vinRegex.test(vin)) return { isValid: false, message: "특수문자는 포함될 수 없습니다." };

  return { isValid: true, message: "확인되었습니다." };
};
