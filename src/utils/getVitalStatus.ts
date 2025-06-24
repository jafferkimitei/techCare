export const getVitalStatus = (value: number, normalRange: { min: number; max: number }) => {
  if (value === 0) {
    return { status: 'normal' as const, statusIcon: undefined };
  }
  if (value < normalRange.min) {
    return { status: 'lower' as const, statusIcon: '/icons/ArrowDown.svg' };
  }
  if (value > normalRange.max) {
    return { status: 'higher' as const, statusIcon: '/icons/ArrowUp.svg' };
  }
  return { status: 'normal' as const, statusIcon: undefined };
};