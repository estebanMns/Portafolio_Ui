import Icon3D from "./3D/Icon3D";

export default function KnowledgeGrid() {
  const icons = ["angular", "react", "github", "java", "python", "csharp", "vercel"];
  return (
    <div className="grid grid-cols-5 gap-4">
      {icons.map((icon) => (
        <Icon3D key={icon} ruta={`/models/${icon}.glb`} />
      ))}
    </div>
  );
}
