
export const getVitalStatus = (
    value: number,
    [min, max]: [number, number]
  ): { status: "normal" | "lower" | "higher"; statusIcon?: string } => {
    if (value < min) return { status: "lower", statusIcon: "/icons/down-arrow.svg" };
    if (value > max) return { status: "higher", statusIcon: "/icons/up-arrow.svg" };
    return { status: "normal" };
  };
  