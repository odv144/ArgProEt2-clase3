import "./App.css";

function App() {
  //utilizo js vanilla

  const Producto = {
    nombre: "Disco SSD de 480gb",
    descripcion:
      "Unidad de almacenamiento solido de conexion Sata, dimension 2.5 pulgadas",
    precio: '35.000',
    sku: "D480SSD35000",
    stock: 20,
    img:'https://medias.musimundo.com/medias/00435038-144147-144147-01-144147-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3MTgxOXxpbWFnZS9qcGVnfGg0ZS9oZWYvMTAzMTM0NTAxOTI5MjYvMDA0MzUwMzgtMTQ0MTQ3LTE0NDE0N18wMS0xNDQxNDdfMDEuanBnX3NpemU1MTV8ZjM0YjUzMWE4ZTUzNmI5YTUzMmNhYTQ5ZjJjOTE0MGUzNjI3NDM1MmNmNzc4ZDQ5YmRkZWRlNTE1NTE3MGU3Yg'
  };
  return (
    //utilizo jsx

    <main>
      <div class="card">
        <img src={Producto.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{Producto.nombre}</h5>
          <p class="card-text">
            {Producto.descripcion}
          </p>
          <p class="card-precio">$ {Producto.precio}</p>
          <p class="card-stock">Stock disponible: {Producto.stock}</p>
        </div>
      </div>
      <div class="card">
        <img src={Producto.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{Producto.nombre}</h5>
          <p class="card-text">
            {Producto.descripcion}
          </p>
          <p class="card-precio">$ {Producto.precio}</p>
          <p class="card-stock">Stock disponible: {Producto.stock}</p>
        </div>
      </div>
      <div class="card">
        <img src={Producto.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{Producto.nombre}</h5>
          <p class="card-text">
            {Producto.descripcion}
          </p>
          <p class="card-precio">$ {Producto.precio}</p>
          <p class="card-stock">Stock disponible: {Producto.stock}</p>
        </div>
      </div>
      <div class="card">
        <img src={Producto.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{Producto.nombre}</h5>
          <p class="card-text">
            {Producto.descripcion}
          </p>
          <p class="card-precio">$ {Producto.precio}</p>
          <p class="card-stock">Stock disponible: {Producto.stock}</p>
        </div>
      </div>
      <div class="card">
        <img src={Producto.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{Producto.nombre}</h5>
          <p class="card-text">
            {Producto.descripcion}
          </p>
          <p class="card-precio">$ {Producto.precio}</p>
          <p class="card-stock">Stock disponible: {Producto.stock}</p>
        </div>
      </div>
      <div class="card">
        <img src={Producto.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{Producto.nombre}</h5>
          <p class="card-text">
            {Producto.descripcion}
          </p>
          <p class="card-precio">$ {Producto.precio}</p>
          <p class="card-stock">Stock disponible: {Producto.stock}</p>
        </div>
      </div>
      <div class="card">
        <img src={Producto.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{Producto.nombre}</h5>
          <p class="card-text">
            {Producto.descripcion}
          </p>
          <p class="card-precio">$ {Producto.precio}</p>
          <p class="card-stock">Stock disponible: {Producto.stock}</p>
        </div>
      </div>
    </main>
  );
}

export default App;
