import React from 'react';
import main from './Main.module.css';

const Main:React.FC = () => {
  return (
    <div className={main.content}>
      <div className={main.container}>
        <h1 className={main.title}>Робот-помощник</h1>
        <button type='button' className={`${main.button} ${main.buttonSize}`}></button>
      </div>
      <button type="button" className={`${main.button} ${main.buttonPopup}`}></button>
      <button type="button" className={`${main.button} ${main.buttonPage} ${main.active}`}></button>
      <button type="button" className={`${main.button} ${main.buttonPage} ${main.buttonQuestion}`}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0007 2.49991C18.3147 2.50348 21.4919 3.8214 23.8352 6.16476C26.1786 8.50812 27.4967 11.6854 27.5003 14.9995C27.4967 18.3136 26.1787 21.4909 23.8354 23.8345C21.4921 26.1781 18.3149 27.4965 15.0007 27.5005C11.6864 27.4965 8.50905 26.1781 6.16549 23.8345C3.82193 21.491 2.50351 18.3137 2.49954 14.9995C2.50351 11.6853 3.82189 8.50808 6.16549 6.16476C8.50909 3.82144 11.6866 2.50348 15.0007 2.49991ZM15.0007 0C11.0225 -1.98265e-08 7.20727 1.58035 4.39413 4.39321C1.58099 7.20608 0.000397183 11.0213 0 14.9995C0.000397137 18.9778 1.58085 22.793 4.39394 25.6061C7.20704 28.4192 11.0224 29.9996 15.0007 30C18.9789 29.9996 22.7939 28.4192 25.6068 25.6061C28.4196 22.7929 30 18.9776 30 14.9995C30 11.0214 28.4197 7.20612 25.6068 4.39321C22.7939 1.58031 18.9788 0 15.0007 0ZM16.5628 21.2494C16.5628 21.6638 16.3982 22.0612 16.1053 22.3544C15.8124 22.6476 15.4152 22.8125 15.0007 22.8129C14.5862 22.8125 14.1887 22.6475 13.8956 22.3544C13.6024 22.0612 13.4375 21.664 13.4371 21.2494C13.4378 20.8351 13.6028 20.438 13.8959 20.1452C14.189 19.8523 14.5864 19.6874 15.0007 19.687C15.4152 19.6874 15.8124 19.8523 16.1053 20.1455C16.3982 20.4387 16.5628 20.8364 16.5628 21.2509V21.2494ZM18.3045 8.75242C17.8786 8.35147 17.3773 8.03924 16.8297 7.83356C16.2821 7.62788 15.699 7.53316 15.1144 7.55457C12.3902 7.55457 10.6214 9.49078 10.6214 12.4966H13.1361C13.1361 10.638 14.171 9.97916 15.0576 9.97916C15.4855 9.96297 15.9028 10.1141 16.2213 10.4004C16.5397 10.6867 16.7342 11.0855 16.7635 11.5127C16.8399 12.5715 16.2752 13.1092 15.5653 13.7892C14.9057 14.2847 14.3914 14.9488 14.0766 15.7114C13.7617 16.4739 13.6578 17.307 13.7756 18.1235H16.2812C16.2498 17.61 16.3391 17.0965 16.5419 16.6236C16.7448 16.1508 17.0557 15.7321 17.4494 15.4009C18.5595 14.442 19.2489 13.0858 19.3694 11.6238C19.3944 11.0986 19.3134 10.5737 19.1312 10.0804C18.9491 9.58719 18.6694 9.13534 18.3091 8.75242H18.3045Z" 
          fill="#7D8193"/>
        </svg>
      </button>
      <button type="button" className={`${main.button} ${main.buttonPage} ${main.buttonNotification}`}>
        <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5933 26.7007C16.5713 27.6772 16.1826 28.608 15.5075 29.3015C14.8323 29.9949 13.9219 30.3983 12.9637 30.4286C11.9977 30.402 11.0779 30.0022 10.3908 29.3099C9.7037 28.6175 9.30087 27.6846 9.26405 26.7007H16.5933ZM16.7601 5.47737C16.3724 5.24597 16.0509 4.91515 15.8278 4.51774C15.6046 4.12032 15.4876 3.67011 15.4883 3.21226C15.4905 2.86761 15.4259 2.52599 15.2984 2.20675C15.171 1.88752 14.983 1.59682 14.7453 1.3516C14.5077 1.10638 14.2249 0.911371 13.9132 0.777494C13.6015 0.643617 13.2669 0.573589 12.9287 0.571442C12.5903 0.573394 12.2556 0.64334 11.9438 0.77713C11.6319 0.910919 11.3489 1.10599 11.1111 1.35124C10.8733 1.59648 10.6852 1.88705 10.5576 2.20639C10.4301 2.52572 10.3654 2.86749 10.3676 3.21226C10.3686 3.67017 10.2517 4.12027 10.0285 4.51774C9.80532 4.91521 9.48372 5.2462 9.09577 5.47737C3.38816 8.84736 6.67069 20.0561 0.714294 22.0289V24.2048H25.1429V22.0289C19.185 20.0561 22.4648 8.84736 16.7601 5.47737ZM12.9287 1.81212C13.2524 1.81212 13.5628 1.94295 13.7917 2.17617C14.0206 2.40939 14.1492 2.72589 14.1492 3.05571C14.1494 3.21915 14.1179 3.3812 14.0567 3.53226C13.9954 3.68331 13.9056 3.82035 13.7923 3.93599C13.6789 4.05162 13.5442 4.14352 13.396 4.20611C13.2478 4.2687 13.0891 4.30076 12.9287 4.30076C12.6046 4.30076 12.2937 4.16949 12.0645 3.93599C11.8354 3.70248 11.7067 3.38594 11.7067 3.05571C11.7071 2.72575 11.836 2.40935 12.0651 2.17617C12.2942 1.94299 12.6048 1.81212 12.9287 1.81212ZM5.0492 21.7234C6.34258 19.5115 7.16023 17.0449 7.44791 14.4869C7.9938 11.5046 8.50889 8.70256 10.3236 7.62745C11.1123 7.15078 12.0124 6.89935 12.9294 6.89935C13.8464 6.89935 14.7465 7.15078 15.5352 7.62745C17.3484 8.69958 17.8635 11.5046 18.4109 14.4869C18.6979 17.045 19.5156 19.5118 20.8096 21.7234H5.0492Z" 
          fill="#7D8193"/>
        </svg>
      </button>
      <button type="button" className={`${main.button} ${main.buttonPage} ${main.buttonCall}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.81876 12.9585H5.44144C5.84304 7.54018 10.4251 3.25313 16 3.25313C20.4115 3.25313 24.4034 6.00339 25.9333 10.0969C26.1638 10.7137 26.8559 11.0287 27.4791 10.8006C28.1023 10.5724 28.4206 9.8874 28.1901 9.27054C27.2783 6.83073 25.6583 4.74294 23.5055 3.23282C21.3032 1.68799 18.7078 0.871429 16 0.871429C12.5293 0.871429 9.26624 2.20923 6.81204 4.63838C4.38985 7.03586 3.04265 10.2133 3.00788 13.5984C1.57003 14.4231 0.600006 15.962 0.600006 17.7219V21.7708C0.600006 24.3974 2.75889 26.5342 5.41251 26.5342H7.81876C8.48324 26.5342 9.02188 26.0011 9.02188 25.3434V14.1494C9.02188 13.4917 8.48324 12.9585 7.81876 12.9585ZM6.61563 24.1525H5.41251C4.0857 24.1525 3.00626 23.0841 3.00626 21.7708V17.7219C3.00626 16.4087 4.0857 15.3402 5.41251 15.3402H6.61563V24.1525Z" 
        fill="#7D8193"/>
        <path d="M26.5875 12.9585H24.1812C23.5168 12.9585 22.9781 13.4917 22.9781 14.1494V22.3067V25.3434V26.5938C22.9781 27.2504 22.4384 27.7846 21.775 27.7846H18.1055V27.8224C17.6951 27.0898 16.9062 26.5938 16 26.5938C14.6711 26.5938 13.5938 27.6601 13.5938 28.9755C13.5938 30.2908 14.6711 31.3571 16 31.3571C16.9062 31.3571 17.6951 30.8611 18.1055 30.1285V30.1663H21.775C23.7652 30.1663 25.3844 28.5637 25.3844 26.5938V26.5342H26.5875C29.2411 26.5342 31.4 24.3974 31.4 21.7708V17.7219C31.4 15.0954 29.2411 12.9585 26.5875 12.9585ZM28.9937 21.7708C28.9937 23.0841 27.9143 24.1525 26.5875 24.1525H25.3844V22.3067V15.3402H26.5875C27.9143 15.3402 28.9937 16.4087 28.9937 17.7219V21.7708Z" 
        fill="#7D8193"/>
      </svg>
      </button>
    </div>
  );
}

export default Main;