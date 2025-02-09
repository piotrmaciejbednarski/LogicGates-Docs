import Link from "next/link";
import ClientImage from "./ClientImage";
import YouTube from "react-youtube";
import YoutubeWrapper from "./YoutubeWrapper";

export const metadata = {
  title: "LogicGates for Spigot",
};

export default function HomePage() {
  return (
    <main
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <ClientImage />

      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
        }}
      >
        Welcome to LogicGates
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          marginBottom: "2rem",
          lineHeight: "1.6",
        }}
      >
        Say goodbye to massive Redstone circuits! This plugin introduces compact
        and efficient logic gates directly into your Spigot server.
      </p>

      {/*
      For future Youtube tutorials, plugin showcase
      <div style={{ marginBottom: "2rem" }}>
        <YoutubeWrapper />
      </div>
      */}

      <p>
        Explore the{" "}
        <Link href="/docs">
          <b>documentation</b>
        </Link>{" "}
        to get started.
      </p>
    </main>
  );
}
