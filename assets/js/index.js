document.addEventListener("DOMContentLoaded", () => {
  renderPropiedades("venta-listado", propiedades_venta);
  renderPropiedades("alquiler-listado", propiedades_alquiler);
});

function renderPropiedades(containerId, propiedades) {
  const contenedor = document.getElementById(containerId);
  contenedor.innerHTML = propiedades.map(p => `
  <div class="col-md-4 mb-4">
    <div class="card h-100">
      <img src="${p.src}" class="card-img-top" alt="${p.nombre}" />
      <div class="card-body">
        <h5 class="card-title">${p.nombre}</h5>
        <p class="card-text">${p.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${p.ubicacion}</p>
        <p><i class="fas fa-bed"></i> ${p.habitaciones} Habitaciones</p>
        <p><i class="fas fa-dollar-sign"></i> $${p.costo.toLocaleString()}</p>
        <p class="${p.smoke ? 'text-success' : 'text-danger'}">
          <i class="${p.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i>
          ${p.smoke ? 'Permitido fumar' : 'No se permite fumar'}
        </p>
        <p class="${p.pets ? 'text-success' : 'text-danger'}">
          <i class="${p.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i>
          ${p.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
        </p>
      </div>
    </div>
  </div>
`).join('');

}