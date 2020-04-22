<div class="ml-3 relative">
  <div>
    <button class="max-w-xs ml-4 flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true">
      <img class="h-8 w-8 rounded-full" src="{{ asset("images/user.png") }}" alt="" />
    </button>
  </div>
  <!--
    Profile dropdown panel, show/hide based on dropdown state.
  -->
  <div class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
    <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Mis Ordenes</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Configuraci&oacute;n</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Cerrar Sesi&oacute;n</a>
    </div>
  </div>
</div>
