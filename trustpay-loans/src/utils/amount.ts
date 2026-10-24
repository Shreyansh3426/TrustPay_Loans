export function parseIndianAmount(
  value: string
): number | null {
  if (!value) return null;

  const input = value
    .toLowerCase()
    .trim()
    .replace(/,/g, "");

  let multiplier = 1;

  if (
    input.includes("crore") ||
    input.includes("crores") ||
    input.includes("cr")
  ) {
    multiplier = 10000000;
  } else if (
    input.includes("lakh") ||
    input.includes("lakhs") ||
    input.endsWith("l")
  ) {
    multiplier = 100000;
  } else if (
    input.includes("thousand") ||
    input.endsWith("k")
  ) {
    multiplier = 1000;
  }

  const numericPart = parseFloat(
    input.replace(/[^\d.]/g, "")
  );

  if (isNaN(numericPart))
    return null;

  const amount =
    numericPart * multiplier;

  if (amount < 0)
    return null;

  if (amount > 1000000000)
    return null; // 100 Cr

  return amount;
}

export function formatIndianCurrency(
  amount: number
) {
  return new Intl.NumberFormat(
    "en-IN",
    {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }
  ).format(amount);
}