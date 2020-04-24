import React from "react";

function SubHeaderFilter({ count, total }) {
  return (
    <div className="text-white rounded-b flex items-center justify-between text-xs bg-gray-1000">
      <div className="ml-4">
        Mostrando (&nbsp;<strong className="text-green-500">{count}</strong>
        &nbsp;) de {total} registros
      </div>
      <div className="flex bg-gray-850 border-r border-b border-t border-gray-1000 px-3 py-2">
        <div className="mr-3 border-r pr-3 border-gray-1000 flex items-center justify-center">
          <svg
            width="14"
            height="12"
            className="mr-1"
            viewBox="0 0 76 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.9268 69.4747L32.4893 64.5247C13.1768 47.0122 0.426819 35.4622 0.426819 21.2872C0.426819 9.73722 9.50182 0.662216 21.0518 0.662216C27.5768 0.662216 33.8393 3.69972 37.9268 8.49972C42.0143 3.69972 48.2768 0.662216 54.8018 0.662216C66.3518 0.662216 75.4268 9.73722 75.4268 21.2872C75.4268 35.4622 62.6768 47.0122 43.3643 64.5622L37.9268 69.4747Z"
              fill="red"
            />
          </svg>
          Mis Favoritos
        </div>
        <div className="flex items-center justify-center">
          <svg
            width="15"
            height="14"
            className="mr-1 fill-current text-yellow-500"
            viewBox="0 0 76 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M60.4268 48.9522V63.9522C60.4268 66.0147 58.7393 67.7022 56.6768 67.7022H11.6768C9.61432 67.7022 7.92682 66.0147 7.92682 63.9522V18.9522C7.92682 16.8897 9.61432 15.2022 11.6768 15.2022H23.0018C25.0643 15.2022 26.7518 13.5147 26.7518 11.4522C26.7518 9.38971 25.0643 7.70221 23.0018 7.70221H7.92682C3.80182 7.70221 0.426819 11.0772 0.426819 15.2022V67.7022C0.426819 71.8272 3.80182 75.2022 7.92682 75.2022H60.4268C64.5518 75.2022 67.9268 71.8272 67.9268 67.7022V48.9522C67.9268 46.8897 66.2393 45.2022 64.1768 45.2022C62.1143 45.2022 60.4268 46.8897 60.4268 48.9522ZM51.0518 60.2022H17.3768C15.8018 60.2022 14.9393 58.4022 15.9143 57.1647L22.4393 48.8022C22.6122 48.5809 22.8325 48.4013 23.0841 48.2766C23.3357 48.1519 23.6121 48.0853 23.8928 48.0817C24.1736 48.0781 24.4516 48.1376 24.7063 48.2558C24.9609 48.374 25.1858 48.5479 25.3643 48.7647L31.2143 55.8147L40.0268 44.4897C40.7768 43.5147 42.2768 43.5147 42.9893 44.5272L52.5518 57.2397C53.4893 58.4397 52.5893 60.2022 51.0518 60.2022V60.2022ZM65.3018 26.0397C67.1018 23.1522 68.1143 19.7772 67.8893 16.0647C67.4018 8.00221 60.9893 1.17721 53.0018 0.314707C50.6371 0.0396077 48.2409 0.26797 45.9707 0.98479C43.7006 1.70161 41.6077 2.89066 39.8298 4.47383C38.0518 6.057 36.6289 7.99845 35.6547 10.1706C34.6804 12.3428 34.1767 14.6965 34.1768 17.0772C34.1768 26.4147 41.7143 33.9522 51.0143 33.9522C54.3143 33.9522 57.3893 32.9772 59.9768 31.3272L69.0143 40.3647C70.4768 41.8272 72.8768 41.8272 74.3393 40.3647C75.8018 38.9022 75.8018 36.5022 74.3393 35.0397L65.3018 26.0397ZM51.0518 26.4522C48.5654 26.4522 46.1808 25.4645 44.4227 23.7063C42.6645 21.9482 41.6768 19.5636 41.6768 17.0772C41.6768 14.5908 42.6645 12.2062 44.4227 10.4481C46.1808 8.68993 48.5654 7.70221 51.0518 7.70221C53.5382 7.70221 55.9228 8.68993 57.6809 10.4481C59.4391 12.2062 60.4268 14.5908 60.4268 17.0772C60.4268 19.5636 59.4391 21.9482 57.6809 23.7063C55.9228 25.4645 53.5382 26.4522 51.0518 26.4522Z" />
          </svg>
          B&uacute;squedas Guardadas
        </div>
      </div>
    </div>
  );
}

export default SubHeaderFilter;