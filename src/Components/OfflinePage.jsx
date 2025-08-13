function OfflineMessage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f8d7da",
        color: "#721c24",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        You are Offline
      </h1>
      <p style={{ fontSize: "1.2rem" }}>
        Please check your internet connection.
      </p>
    </div>
  );
}

export default OfflineMessage;
