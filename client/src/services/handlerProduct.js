export default function makeProducts(product, index) {
  const { name, id, color, price, model, brand } = product;
  return (
      <li key={index} id={id} className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div className="group relative">
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  {name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{`Modelo: ${model}`}</p>
              <p className="mt-1 text-sm text-gray-500">{`Marca: ${brand}`}</p>
              <p className="mt-1 text-sm text-gray-500">{`Cor: ${color}`}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{`R$${price}`}</p>
          </div>
        </div>
      </li>
  );
}
