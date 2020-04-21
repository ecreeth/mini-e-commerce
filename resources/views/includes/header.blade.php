<nav class="bg-gray-800 h-64" style="background-color: #1D1D1D;">
  <div class="max-w-7xl mx-auto container px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center mt-2">
        <a href="/" class="flex-shrink-0">
          <img class="h-8 w-8" src="{{ asset('images/logo.svg') }}" alt="Workflow logo" />
        </a>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline">
            <a href="#" class="px-3 py-2 rounded-md text-sm text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Home</a>
            <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Categor&iacute;as</a>
            <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Ofertas</a>
            <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Acerca de</a>
            <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Contacto</a>
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
          <div class="ml-3 relative">
            <div>
              <button class="max-w-xs ml-4 flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true">
                <img class="h-8 w-8 rounded-full" src="{{ asset("images/user.png") }}" alt="" />
              </button>
            </div>
            <!--
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
            <div class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
              <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Mis Ordenes</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Configuraci&oacute;n</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Cerrar Sesi&oacute;n</a>
              </div>
            </div>
          </div>
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
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Dashboard</a>
      <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Team</a>
      <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Projects</a>
      <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Calendar</a>
      <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Reports</a>
    </div>
    <div class="pt-4 pb-3 border-t border-gray-700">
      <div class="flex items-center px-5">
        <div class="flex-shrink-0">
          <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        </div>
        <div class="ml-3">
          <div class="text-base font-medium leading-none text-white">Tom Cook</div>
          <div class="mt-1 text-sm font-medium leading-none text-gray-400">tom@example.com</div>
        </div>
      </div>
      <div class="mt-3 px-2">
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Your Profile</a>
        <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Settings</a>
        <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Sign out</a>
      </div>
    </div>
  </div>
</nav>
