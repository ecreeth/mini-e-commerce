@extends('layouts.master')

@section('content')
  <div class="flex" style="min-height: 50vh;">
    <div class="w-1/4 bg-gray-850 text-white rounded p-4 mr-6">
      <div class="bg-gray-1000 h-12 rounded mb-4"></div>
      <ul>
        <x-list.aside-item text="Dashboard" class="border-t" />
        <x-list.aside-item text="Mi Cuenta" />
        <x-list.aside-item text="Mis Ordenes" class="font-bold text-white" />
        <x-list.aside-item text="Mis Favoritos" />
        <x-list.aside-item text="Facturas" />
        <x-list.aside-item text="Ofertas" />
        <x-list.aside-item text="Configuraci&oacute;n" />
        <x-list.aside-item text="Ayuda" />
      </ul>
      <div class="flex items-center justify-between mt-6">
        <div class="bg-gray-1000 h-12 w-12 rounded mr-2"></div>
        <div class="bg-gray-1000 h-12 w-full rounded"></div>
      </div>
    </div>
    <div class="w-3/4">
      <div class="bg-gray-850 h-12 w-full rounded mb-4 flex px-4 justify-between items-center">
        <div class="h-6 bg-gray-1000 w-48"></div>
        <div class="flex">
          <div class="h-6 bg-gray-1000 w-32 mr-4"></div>
          <div class="h-6 bg-gray-1000 w-12 mr-4"></div>
          <div class="h-6 bg-gray-1000 w-12"></div>
        </div>
      </div>
      <div class="p-4 bg-white rounded">
        <table class="table-auto w-full text-center">
          <thead>
            <tr class="border-b">
              <th class="px-4 py-2"># Orden</th>
              <th class="px-4 py-2">Fecha de creaci&oacute;n</th>
              <th class="px-4 py-2">Entrega</th>
              <th class="px-4 py-2">Estado</th>
              <th class="px-4 py-2">Total</th>
              <th class="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            @forelse ($orders as $order)
              <tr>
                <td class="border-b px-4 py-2">{{ $order->id}}</td>
                <td class="border-b px-4 py-2">{{ $order->created_at }}</td>
                <td class="border-b px-4 py-2">Pendiente</td>
                <td class="border-b px-4 py-2">{{ $order->status }}</td>
                <td class="border-b px-4 py-2">RD${{  number_format($order->total, 2, '.', ',') }}</td>
                <td class="border-b px-4 py-2 text-sm text-center">
                  <a href="#" class="underline text-blue-500 mr-2">Ver Orden</a>
                  <a href="#" onclick="cancelOrder({{ $order->id }})" class="underline text-red-500">Cancelar</a>
                </td>
              </tr>
              @empty
                <tr>
                <td class="p-20" colspan="5">😥 No tienes ordenes realizadas</td>
              </tr>
            @endforelse
          </tbody>
        </table>
        {{ $orders->links('pagination::tailwind') }}
      </div>
    </div>
  </div>
  <script>
      function cancelOrder(id){
       if(confirm('Deseas eliminar esta orden?')){
          window.axios.delete(`/api/order/${id}`)
          .then(res => {
            alert('La orden ha sido eliminada con exito!');
            window.location.reload();
          })
          .catch(error => console.log(error));
       }
      }
  </script>
@endsection
