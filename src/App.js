import "./App.css";

function App() {
  //utilizo js vanilla

  const Producto = [{
    nombre: "Disco SSD de 480gb",
    descripcion:
      "Unidad de almacenamiento solido de conexion Sata, dimension 2.5 pulgadas",
    precio: '35.000',
    sku: "D480SSD35000",
    stock: 20,
    img:'https://medias.musimundo.com/medias/00435038-144147-144147-01-144147-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3MTgxOXxpbWFnZS9qcGVnfGg0ZS9oZWYvMTAzMTM0NTAxOTI5MjYvMDA0MzUwMzgtMTQ0MTQ3LTE0NDE0N18wMS0xNDQxNDdfMDEuanBnX3NpemU1MTV8ZjM0YjUzMWE4ZTUzNmI5YTUzMmNhYTQ5ZjJjOTE0MGUzNjI3NDM1MmNmNzc4ZDQ5YmRkZWRlNTE1NTE3MGU3Yg'
  },
  {
    nombre: "Disco SSD de 240gb",
    descripcion:
      "Unidad de almacenamiento solido de conexion Sata, dimension 2.5 pulgadas",
    precio: '25.000',
    sku: "D240SSD25000",
    stock: 10,
    img:'https://imgs.search.brave.com/F_1FvbOGsRuCq-k-8ubIcqW8ppP8da78S9Kr1LRILOw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVuZXguY29tLmFy/L3Byb2R1Y3RzX2lt/YWdlcy8xNTc2NzAw/NjI4X3NzZGFkYXRh/My41MjQwZ2JzdTYz/MDYwMHg2MjkuanBn'
  },
  {
    nombre: "Disco SSD de 120gb",
    descripcion:
      "Unidad de almacenamiento solido de conexion Sata, dimension 2.5 pulgadas",
    precio: '15.000',
    sku: "D1200SSD15000",
    stock: 5,
    img:'https://imgs.search.brave.com/nWewDEWRCoXeKVXF6iLSzL7WMYOOachvvKPD6jIfEnI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9nb3Jp/bGFnYW1lcy5jb20v/aW1nL1B1YmxpYy8x/MDE5LXByb2R1Y3Rv/LWRpc2NvLXNzZC1h/ZGF0YS0xMjBnYi1z/dTY1MC0yLTU2NjQu/anBn'
  },{
    nombre: "Disco HDD de 500gb",
    descripcion:
      "Unidad de almacenamiento mecanico de conexion Sata, dimension 2.5 pulgadas",
    precio: '31.000',
    sku: "D500HDD135000",
    stock: 2,
    img:'https://imgs.search.brave.com/yeRv2j_uE37CdgP2sc8uozDhdnwD4rwbySHhF_EexEE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzQxNi80MTYvaW50/ZXJuYWwtaGFyZC1k/cml2ZS9hL3QveC93/ZC13ZDUwMDBscGN4/LW9yaWdpbmFsLWlt/YWVyMzZjenMzOWFt/M3UuanBlZz9xPTcw'
  }];
  return (
    //utilizo jsx

    <main>
      <div class="card">
        <img src={Producto[0].img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{Producto[0].nombre}</h5>
          <p class="card-text">
            {Producto[0].descripcion}
          </p>
          <p class="card-precio">$ {Producto[0].precio}</p>
          <p class="card-stock">Stock disponible: {Producto[0].stock}</p>
        </div>
      </div>
      <div class="card">
        <img src={Producto[1].img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{Producto[1].nombre}</h5>
          <p class="card-text">
            {Producto[1].descripcion}
          </p>
          <p class="card-precio">$ {Producto[1].precio}</p>
          <p class="card-stock">Stock disponible: {Producto[1].stock}</p>
        </div>
      </div>
      <div class="card">
        <img src={Producto[2].img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{Producto[2].nombre}</h5>
          <p class="card-text">
            {Producto[2].descripcion}
          </p>
          <p class="card-precio">$ {Producto[2].precio}</p>
          <p class="card-stock">Stock disponible: {Producto[2].stock}</p>
        </div>
      </div>
      <div class="card">
        <img src={Producto[3].img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{Producto[3].nombre}</h5>
          <p class="card-text">
            {Producto[3].descripcion}
          </p>
          <p class="card-precio">$ {Producto[3].precio}</p>
          <p class="card-stock">Stock disponible: {Producto[3].stock}</p>
        </div>
      </div>
    </main>
  );
}

export default App;
