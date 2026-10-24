export default function TrustPayLogo({
  size = "large",
}: {
  size?: "small" | "large";
}) {
  const isLarge = size === "large";

  return (
    <div
      className={`relative ${
        isLarge ? "w-36 h-36" : "w-16 h-16"
      }`}
    >
      {/* Top Left Corner */}
      <div
        className={`absolute top-0 left-0 border-l-[6px] border-t-[6px] border-white ${
          isLarge ? "w-24 h-24" : "w-10 h-10"
        }`}
      />

      {/* Bottom Right Corner */}
      <div
        className={`absolute bottom-0 right-0 border-r-[6px] border-b-[6px] border-white ${
          isLarge ? "w-24 h-24" : "w-10 h-10"
        }`}
      />

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-bold ${
            isLarge ? "text-2xl" : "text-xs"
          }`}
          style={{
            fontFamily: "Georgia, serif",
          }}
        >
          Trustpay
        </span>
      </div>
    </div>
  );
}