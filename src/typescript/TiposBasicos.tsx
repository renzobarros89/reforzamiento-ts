export const TiposBasicos = () => {
  const nombre: string = "Renzo";
  const edad: number = 123;
  const activo: boolean = true;

  const poderes: string[] = [
    "Teleportacion",
    "Teletransportacion",
    "Telekinesis",
  ];

  return (
    <>
      <h3>Tipos Basicos</h3>
      {nombre} {edad} {activo ? "activo" : "inactivo"}
      <br />
      {poderes.join(", ")}
    </>
  );
};
