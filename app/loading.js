export default function Loading() {
  return (
    <div style={{ display:"flex", height:"100vh", background:"#ffffff", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"16px" }}>
      <div style={{ width:"40px", height:"40px", border:"3px solid rgba(229,30,42,0.15)", borderTop:"3px solid #e51e2a", borderRadius:"50%", animation:"spin 0.8s linear infinite" }}/>
      <div style={{ color:"rgba(229,30,42,0.5)", fontSize:"12px", fontWeight:700, letterSpacing:"0.1em" }}>MEMUAT...</div>
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  );
}
