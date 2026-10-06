import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Navera at Mayfield Village";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#1D2F25",
          color: "#FAF7F0",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 92, fontFamily: "Georgia" }}>Navera</div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#E7E1D6",
          }}
        >
          at Mayfield Village
        </div>
        <div style={{ display: "flex", width: 120, height: 4, background: "#B07A54", marginTop: 28 }} />
      </div>
    ),
    size,
  );
}
