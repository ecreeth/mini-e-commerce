<nav class="bg-gray-800 h-64" style="background-color: #1D1D1D;">
  <div class="max-w-7xl mx-auto container px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center mt-2">
        <a href="/" class="flex-shrink-0">
          <img class="h-8 w-8" src="{{ asset('images/logo.svg') }}" alt="Logo" />
        </a>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline">
            <x-link.page to="Home" />
            <x-link.page to="Categor&iacute;as" />
            <x-link.page to="Ofertas" />
            <x-link.page to="Acerca de" />
            <x-link.page to="Contacto" />
          </div>
        </div>
      </div>
      <div class="hidden md:block">
        <div class="ml-4 flex items-center md:ml-6 mt-2">
          <button class="p-1 shadow text-gray-400 rounded hover:text-white focus:outline-none focus:text-white focus:bg-gray-700" aria-label="Carrito de compras" style="background-color: #353535;">
              <div class="relative">
                <a href="{{ route('cart.index', 'ecreeth') }}" class="flex items-center justify-between px-2">
                  <img src="{{ asset('images/icon-cart.svg') }}" class="pr-2 border-gray-800" alt="Carrito de compras">
                  <span class="text-sm"> &middot; &nbsp;$1.540</span>
                </a>
                <span class="bg-red-600 text-white text-xs rounded-full w-4 h-4 absolute top-0 -mt-3 right-0 -mr-3">1</span>
              </div>
            </svg>
          </button>

          <!-- Profile dropdown -->
          <x-dropdown.profile />

        </div>
      </div>
      <div class="-mr-2 flex md:hidden">
        <!-- Mobile menu button -->
        <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
          <!-- Menu open: "hidden", Menu closed: "block" -->
          <svg class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!-- Menu open: "block", Menu closed: "hidden" -->
          <svg class="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!--
    Mobile menu, toggle classes based on menu state.

    Open: "block", closed: "hidden"
  -->
  <div class="hidden md:hidden">
    <div class="px-2 pt-2 pb-3 sm:px-3">
      <x-link.page class="mt-1 block text-base font-medium" to="Home" />
      <x-link.page class="mt-1 block text-base font-medium" to="Categor&iacute;as" />
      <x-link.page class="mt-1 block text-base font-medium" to="Ofertas" />
      <x-link.page class="mt-1 block text-base font-medium" to="Acerca de" />
    </div>
    <div class="pt-4 pb-3 border-t border-gray-700">
      <div class="flex items-center px-5">
        <div class="flex-shrink-0">
          <img class="h-10 w-10 rounded-full" src="{{ asset("images/user.png") }}" alt="" />
        </div>
        <div class="ml-3">
          <div class="text-base font-medium leading-none text-white">Tom Cook</div>
          <div class="mt-1 text-sm font-medium leading-none text-gray-400">tom@example.com</div>
        </div>
      </div>
      <div class="mt-3 px-2">
        <x-link.page-mobile to="Mis Ordenes" />
        <x-link.page-mobile to="Configuraci&oacute;n" />
        <x-link.page-mobile to="Cerrar Sesi&oacute;n" />
      </div>
    </div>
  </div>
</nav>
