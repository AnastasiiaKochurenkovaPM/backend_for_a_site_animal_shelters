import React from "react";
import s from "./SecondSlide.module.css";

const SecondSlideAbout = (props) => {
  return (
    <div className={s.secondSlide}>
      <div className={s.flexcontainer1}>
        <div className={s.title1}>ME FOR PETS</div>
      </div>
      <div className={s.flexcontainer1}>
        <div className={s.title2}>Наші основні цілі</div>
      </div>

      <div className={s.flexcontainer2}>
        <div class={s.row}>
          <div class={s.column}>
            <svg
              width="119"
              height="120"
              viewBox="0 0 119 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M59.0652 0L81.3696 22.3729V11.7966H102.848L104.5 44.339L118.957 58.9831V69.1525H102.848L104.5 120H73.5217L72.4472 102.532V90.219H59.9255V89.3431V88.4671H72.4472V76.2044H59.9255H45.6149V90.1065V102.482H51.4286H58.1366V90.219H45.6149V88.4671H58.1366V76.2044H59.9255V88.4671V102.482L72.4472 102.532L73.5217 120H14.0435V69.1525H0V58.9831L59.0652 0Z"
                fill="#FD7D00"
              />
            </svg>

            <div className={s.text}>Допомогти тваринам знайти дім</div>
          </div>
          <div class={s.stick}>
            <svg
              width="1"
              height="162"
              viewBox="0 0 1 162"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="-2.18557e-08"
                x2="0.500007"
                y2="162"
                stroke="url(#paint0_linear_275_811)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_275_811"
                  x1="-0.999988"
                  y1="162"
                  x2="1.62396"
                  y2="0.026308"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FD7D00" />
                  <stop offset="0.123257" stop-color="#FEB336" />
                  <stop offset="0.519097" stop-color="#D6D899" />
                  <stop offset="0.878479" stop-color="#FEB336" />
                  <stop offset="1" stop-color="#FD7D00" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class={s.column}>
            <svg
              width="123"
              height="122"
              viewBox="0 0 123 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M75.5707 121C85.612 110.547 107.489 86.504 114.668 73.96C123.641 58.28 130.691 24.04 95.8669 12.2C94.0866 9.49778 89.2653 3.47467 84.2233 1C82.621 2.99111 79.3736 8.01867 79.2027 12.2C76.4965 13.48 70.4219 17 67.7727 20.84C62.8589 21.3022 52.7963 22.568 51.8563 23.9333C50.6812 25.64 54.3132 31.08 60.0816 35.0267C60.0816 36.7333 60.229 43.1004 60.229 44.6364C63.0159 48.8348 68.7052 50.8369 71.6183 51.3467C74.2889 51.3467 79.5445 51.9653 79.2027 54.44C78.8609 56.9147 77.4223 59.4533 76.7458 60.4133C74.7874 58.4578 71.0201 53.9067 71.6183 51.3467C68.7052 50.8369 63.0159 48.8348 60.229 44.6364C59.7117 43.857 59.2943 43.0019 59.0134 42.0667C57.2187 36.0933 51.2153 30.9022 48.438 29.0533C42.5628 21.8 4.96144 17.7467 1.32949 48.5733C-2.30246 79.4 25.2576 91.56 26.7531 93.48C27.9495 95.016 59.7967 112.467 75.5707 121ZM85.1847 33.5333L84.8643 36.4133C84.5438 36.9467 82.1937 36.2 81.3391 36.0933C80.6555 36.008 80.7694 34.9911 80.9119 34.4933C80.9119 34.3156 81.3605 33.6187 83.1551 32.2533C84.9497 30.888 85.256 32.5378 85.1847 33.5333Z"
                fill="#FD7D00"
              />
              <path
                d="M75.5707 121L75.3328 121.44L75.6676 121.621L75.9313 121.346L75.5707 121ZM114.668 73.96L114.234 73.7117L114.668 73.96ZM95.8669 12.2L95.4494 12.4751L95.5437 12.6182L95.706 12.6734L95.8669 12.2ZM84.2233 1L84.4436 0.551149L84.0846 0.374915L83.8338 0.686528L84.2233 1ZM79.2027 12.2L79.4165 12.652L79.6899 12.5227L79.7023 12.2204L79.2027 12.2ZM67.7727 20.84L67.8196 21.3378L68.0518 21.316L68.1843 21.1239L67.7727 20.84ZM51.8563 23.9333L52.2681 24.2169L51.8563 23.9333ZM60.0816 35.0267H60.5816V34.7629L60.3639 34.614L60.0816 35.0267ZM26.7531 93.48L26.3587 93.7873L26.7531 93.48ZM48.438 29.0533L48.0494 29.368L48.0974 29.4273L48.1609 29.4695L48.438 29.0533ZM59.0134 42.0667L58.5345 42.2105L59.0134 42.0667ZM44.3787 73L44.5042 72.516L44.4781 72.5092L44.4515 72.5053L44.3787 73ZM33.5897 64.5733L34.066 64.4205L34.0615 64.4077L33.5897 64.5733ZM33.5897 76.2L33.9787 76.5142L33.5897 76.2ZM85.1847 33.5333L85.6817 33.5886L85.6828 33.5788L85.6835 33.569L85.1847 33.5333ZM80.9119 34.4933L81.3926 34.6309L81.4119 34.5635V34.4933H80.9119ZM81.3391 36.0933L81.2772 36.5895L81.3391 36.0933ZM75.9313 121.346C80.9574 116.114 88.9434 107.483 96.5722 98.5895C104.193 89.7059 111.486 80.5266 115.102 74.2083L114.234 73.7117C110.671 79.9374 103.436 89.0514 95.8132 97.9385C88.1985 106.816 80.2254 115.433 75.2102 120.654L75.9313 121.346ZM115.102 74.2083C119.626 66.3022 123.673 53.714 122.187 41.5793C121.444 35.503 119.311 29.5316 115.148 24.3277C110.984 19.1228 104.811 14.7127 96.0279 11.7266L95.706 12.6734C104.335 15.6073 110.339 19.9172 114.367 24.9523C118.396 29.9884 120.47 35.777 121.195 41.7007C122.647 53.566 118.682 65.9378 114.234 73.7117L115.102 74.2083ZM96.2844 11.9249C95.3783 10.5495 93.7092 8.34447 91.6297 6.16916C89.5544 3.99837 87.0411 1.826 84.4436 0.551149L84.003 1.44885C86.4476 2.64866 88.8658 4.72519 90.9068 6.86017C92.9435 8.99064 94.5752 11.1483 95.4494 12.4751L96.2844 11.9249ZM83.8338 0.686528C83.0125 1.70714 81.7808 3.4906 80.7307 5.55168C79.6847 7.60477 78.7929 9.98296 78.7031 12.1796L79.7023 12.2204C79.7834 10.2357 80.6008 8.00945 81.6217 6.00565C82.6386 4.00985 83.8318 2.28397 84.6129 1.31347L83.8338 0.686528ZM78.9889 11.748C77.6126 12.399 75.3933 13.6126 73.1811 15.1494C70.9766 16.6807 68.737 18.5618 67.3612 20.5561L68.1843 21.1239C69.4576 19.2782 71.5799 17.4793 73.7516 15.9706C75.9156 14.4674 78.0867 13.281 79.4165 12.652L78.9889 11.748ZM67.7259 20.3422C65.2616 20.574 61.5047 21.0074 58.2416 21.5549C56.6116 21.8284 55.0926 22.1324 53.9158 22.457C53.3285 22.619 52.8126 22.7899 52.4058 22.9703C52.025 23.1392 51.6477 23.3546 51.4444 23.6498L52.2681 24.2169C52.2999 24.1707 52.4426 24.0479 52.8112 23.8844C53.1539 23.7325 53.6167 23.5769 54.1818 23.421C55.3097 23.1098 56.7897 22.8125 58.4071 22.5411C61.6388 21.9989 65.3701 21.5682 67.8196 21.3378L67.7259 20.3422ZM51.4444 23.6498C51.0125 24.2772 51.0816 25.1377 51.3593 25.9871C51.6462 26.8645 52.2008 27.8744 52.9588 28.9314C54.4779 31.0495 56.8713 33.4361 59.7992 35.4393L60.3639 34.614C57.5234 32.6706 55.2167 30.3638 53.7714 28.3486C53.0473 27.339 52.5537 26.4221 52.3098 25.6763C52.0568 24.9023 52.1126 24.4428 52.2681 24.2169L51.4444 23.6498ZM59.5816 35.0267C59.5816 35.8859 59.6186 37.9108 59.6554 39.9047C59.6923 41.9055 59.729 43.8744 59.729 44.6364H60.729C60.729 43.8624 60.692 41.8797 60.6552 39.8863C60.6183 37.886 60.5816 35.8741 60.5816 35.0267H59.5816ZM75.8086 120.56C67.9227 116.294 56.0194 109.799 45.9388 104.179C40.8981 101.369 36.3155 98.779 32.9195 96.7962C31.2209 95.8045 29.8229 94.9669 28.814 94.3306C28.309 94.0121 27.9064 93.7471 27.614 93.5403C27.4676 93.4367 27.3536 93.351 27.2701 93.2827C27.2285 93.2487 27.1973 93.2214 27.1751 93.2004C27.1514 93.1779 27.1449 93.1693 27.1476 93.1728L26.3587 93.7873C26.4324 93.8819 26.5366 93.9747 26.6372 94.057C26.7454 94.1454 26.88 94.2459 27.0364 94.3566C27.3498 94.5783 27.7694 94.8541 28.2805 95.1764C29.3039 95.8218 30.7135 96.6662 32.4153 97.6598C35.82 99.6477 40.4094 102.242 45.4518 105.053C55.5374 110.675 67.4447 117.173 75.3328 121.44L75.8086 120.56ZM27.1476 93.1728C27.003 92.9871 26.7485 92.7885 26.4717 92.591C26.1783 92.3815 25.7985 92.1318 25.3543 91.8439C24.4609 91.265 23.2841 90.5174 21.9233 89.577C19.2033 87.6973 15.7631 85.0573 12.4849 81.5265C5.93628 74.4732 0.0311641 63.8662 1.82605 48.6318L0.832923 48.5148C-1.00413 64.1071 5.05481 74.9935 11.7521 82.2069C15.0969 85.8094 18.6001 88.496 21.3548 90.3997C22.7312 91.3509 23.9246 92.1091 24.8105 92.6832C25.2559 92.9718 25.618 93.2102 25.8908 93.4049C26.1802 93.6115 26.3163 93.7329 26.3587 93.7873L27.1476 93.1728ZM1.82605 48.6318C2.72125 41.0337 5.70254 35.6191 9.73686 31.8643C13.7781 28.1032 18.9068 25.9793 24.1323 25.0252C29.3585 24.071 34.6577 24.2917 39.0074 25.1978C41.1818 25.6508 43.1087 26.273 44.6646 26.9984C46.2284 27.7274 47.3824 28.5445 48.0494 29.368L48.8265 28.7386C48.0248 27.7488 46.7185 26.8526 45.0872 26.092C43.448 25.3278 41.4451 24.6842 39.2114 24.2188C34.7449 23.2883 29.3152 23.0624 23.9527 24.0415C18.5895 25.0207 13.2697 27.2102 9.05557 31.1323C4.83456 35.0609 1.7537 40.6996 0.832923 48.5148L1.82605 48.6318ZM48.1609 29.4695C49.5166 30.372 51.6805 32.1055 53.7245 34.35C55.7717 36.5979 57.6674 39.3243 58.5345 42.2105L59.4922 41.9228C58.5647 38.8357 56.5614 35.9799 54.4639 33.6767C52.3632 31.37 50.1367 29.5835 48.715 28.6371L48.1609 29.4695ZM58.5345 42.2105C59.4813 45.3619 61.8837 47.6165 64.4363 49.1487C66.9911 50.6823 69.7534 51.5279 71.5322 51.8392L71.7045 50.8542C70.0294 50.561 67.3864 49.7533 64.9509 48.2913C62.5132 46.828 60.34 44.7447 59.4922 41.9228L58.5345 42.2105ZM71.6183 51.8467C72.9283 51.8467 74.8584 51.9996 76.4013 52.4457C77.1769 52.6699 77.8083 52.9553 78.217 53.2965C78.6083 53.6231 78.7633 53.9669 78.7074 54.3716L79.698 54.5084C79.813 53.6758 79.4393 53.0142 78.8578 52.5288C78.2938 52.058 77.5085 51.7248 76.679 51.485C75.012 51.0031 72.979 50.8467 71.6183 50.8467V51.8467ZM78.7074 54.3716C78.381 56.7348 76.9912 59.1972 76.3371 60.1253L77.1545 60.7014C77.8535 59.7095 79.3408 57.0945 79.698 54.5084L78.7074 54.3716ZM77.0991 60.0595C76.1377 59.0995 74.7303 57.4995 73.642 55.8332C73.0976 54.9999 72.6431 54.165 72.3612 53.3962C72.076 52.6186 71.9878 51.9631 72.1052 51.4604L71.1315 51.2329C70.9498 52.0103 71.1081 52.8836 71.4223 53.7405C71.7397 54.6061 72.2372 55.5112 72.8047 56.3801C73.9401 58.1183 75.3955 59.7716 76.3925 60.7671L77.0991 60.0595ZM76.3051 60.1772C75.5027 61.6751 74.2396 63.5679 72.9149 65.1754C72.253 65.9786 71.5827 66.7019 70.9539 67.2662C70.3162 67.8385 69.7568 68.2143 69.3169 68.368L69.6469 69.312C70.2753 69.0924 70.9532 68.6104 71.6218 68.0105C72.2993 67.4025 73.0044 66.6392 73.6867 65.8113C75.0503 64.1566 76.351 62.2093 77.1866 60.6494L76.3051 60.1772ZM69.3665 68.3535C67.6124 68.7697 64.9167 69.0566 62.537 68.5842C60.164 68.1132 58.2239 66.9225 57.6858 64.4663L56.709 64.6803C57.3673 67.6855 59.7713 69.0548 62.3423 69.5651C64.9067 70.0741 67.7551 69.7636 69.5973 69.3265L69.3665 68.3535ZM68.9819 68.84C68.9819 70.3565 67.9119 72.5366 64.3042 73.7307C60.6722 74.9327 54.5075 75.1088 44.5042 72.516L44.2533 73.484C54.3326 76.0965 60.7194 75.9704 64.6184 74.68C68.5416 73.3816 69.9819 70.879 69.9819 68.84H68.9819ZM44.4515 72.5053C42.9699 72.2875 41.3095 72.2144 39.8568 72.4413C38.4262 72.6648 37.0721 73.2 36.3824 74.3158C35.6742 75.4615 35.7818 77.0191 36.8097 78.9966C37.841 80.9806 39.8515 83.5011 43.1779 86.694L43.8704 85.9726C40.5738 82.8083 38.6542 80.3767 37.697 78.5354C36.7365 76.6876 36.7974 75.5464 37.2331 74.8415C37.6873 74.1066 38.6676 73.6392 40.0111 73.4293C41.3324 73.2229 42.8856 73.2858 44.306 73.4947L44.4515 72.5053ZM43.1779 86.694C49.977 93.2204 59.2918 93.6836 68.0569 91.6956C76.8286 89.7061 85.1665 85.2406 90.172 81.7293L89.5978 80.9107C84.6688 84.3682 76.4494 88.7667 67.8357 90.7204C59.2156 92.6755 50.3173 92.1609 43.8704 85.9726L43.1779 86.694ZM34.9745 40.6274C34.6293 40.0778 34.183 39.5009 33.6904 39.0758C33.2176 38.6678 32.5937 38.3077 31.926 38.431C31.2258 38.5602 30.7291 39.1662 30.3982 40.0873C30.0625 41.0217 29.8432 42.415 29.7785 44.397L30.778 44.4297C30.8414 42.4864 31.0557 41.2147 31.3393 40.4254C31.6277 39.6227 31.9362 39.446 32.1075 39.4144C32.3113 39.3767 32.6252 39.4775 33.0371 39.8329C33.4291 40.1711 33.8142 40.66 34.1277 41.1593L34.9745 40.6274ZM29.7785 44.397C29.5193 52.334 31.8969 61.2603 33.1179 64.7389L34.0615 64.4077C32.8613 60.9886 30.5244 52.194 30.778 44.4297L29.7785 44.397ZM33.1136 64.7261C33.5492 66.0832 34.0735 68.2884 34.2259 70.4695C34.3021 71.5594 34.2842 72.6277 34.1233 73.5735C33.9618 74.5227 33.6619 75.3148 33.2007 75.8858L33.9787 76.5142C34.5858 75.7625 34.9313 74.7867 35.1091 73.7412C35.2876 72.6923 35.3031 71.5392 35.2235 70.3998C35.0643 68.1222 34.5204 65.8368 34.0658 64.4205L33.1136 64.7261ZM33.2007 75.8858C32.9998 76.1347 32.5658 76.3413 31.8056 76.3744C31.0615 76.4069 30.0951 76.2669 28.9666 75.9323C26.7137 75.2644 23.9012 73.8467 21.0916 71.6588C15.4772 67.2868 9.92943 59.8834 8.87725 49.3768L7.88223 49.4765C8.96649 60.3033 14.6884 67.9399 20.4772 72.4478C23.3693 74.7 26.2918 76.1823 28.6823 76.891C29.8756 77.2448 30.958 77.4123 31.8491 77.3735C32.7243 77.3354 33.5121 77.092 33.9787 76.5142L33.2007 75.8858ZM42.9302 51.3386C43.6785 51.8275 44.6144 52.3245 45.6026 52.6813C46.5862 53.0364 47.6537 53.2642 48.6531 53.1809C49.6674 53.0964 50.6219 52.6881 51.3095 51.7735C51.9851 50.8749 52.3563 49.5494 52.3563 47.72H51.3563C51.3563 49.432 51.0064 50.5127 50.5102 51.1725C50.0262 51.8163 49.3583 52.1187 48.57 52.1844C47.7668 52.2513 46.8515 52.069 45.9422 51.7407C45.0377 51.4142 44.171 50.9547 43.4772 50.5014L42.9302 51.3386ZM63.1427 31.8416C62.5301 31.4195 61.8598 30.8849 61.2934 30.3162C60.7187 29.7391 60.2888 29.1641 60.1048 28.6645C60.0148 28.4203 59.9926 28.2183 60.0195 28.0535C60.045 27.8969 60.1198 27.7407 60.2857 27.5851C60.6423 27.2507 61.4173 26.9243 62.9079 26.7776L62.81 25.7824C61.2668 25.9343 60.2089 26.2862 59.6017 26.8556C59.2857 27.1519 59.0958 27.504 59.0325 27.8927C58.9705 28.2733 59.0352 28.6539 59.1664 29.0102C59.4248 29.7114 59.9745 30.4089 60.5849 31.0218C61.2035 31.6431 61.9237 32.2161 62.5752 32.665L63.1427 31.8416ZM84.2916 12.2665C84.4038 11.431 84.6074 10.5244 84.9071 9.76444C85.2158 8.98178 85.5877 8.45411 85.9743 8.24013C86.151 8.14236 86.3367 8.10605 86.5514 8.14507C86.7762 8.18591 87.0643 8.3157 87.4182 8.60832C88.1343 9.20049 89.0227 10.3781 90.0815 12.4294L90.9701 11.9706C89.8926 9.88323 88.9294 8.56039 88.0554 7.83768C87.6142 7.47286 87.1727 7.24159 86.7302 7.16118C86.2777 7.07895 85.8587 7.16119 85.4901 7.3652C84.7862 7.75478 84.3058 8.56355 83.9769 9.39756C83.639 10.2543 83.4198 11.2446 83.3005 12.1335L84.2916 12.2665ZM69.7214 34.8974C70.3128 35.3285 71.0552 35.7565 71.8436 36.0421C72.6272 36.326 73.4955 36.4833 74.318 36.3227C75.1635 36.1576 75.9175 35.6636 76.4444 34.7364C76.9597 33.8298 77.2458 32.5327 77.2458 30.76H76.2458C76.2458 32.4433 75.9711 33.5453 75.575 34.2423C75.1907 34.9186 74.6828 35.2326 74.1263 35.3413C73.5467 35.4545 72.8727 35.3513 72.1842 35.1019C71.5005 34.8542 70.8409 34.476 70.3106 34.0893L69.7214 34.8974ZM83.5391 26.7089C84.1942 27.1014 85.0064 27.4781 85.8536 27.7056C86.6958 27.9317 87.612 28.0209 88.4516 27.7917C89.3136 27.5564 90.0575 26.9942 90.5288 26.0026C90.9898 25.0328 91.1775 23.681 91.0241 21.8646L90.0276 21.9487C90.1733 23.6737 89.9809 24.8259 89.6256 25.5734C89.2806 26.2992 88.7719 26.6676 88.1883 26.827C87.5822 26.9924 86.8597 26.9403 86.1129 26.7398C85.3711 26.5406 84.6441 26.2052 84.053 25.8511L83.5391 26.7089ZM85.3612 36.4686L85.6817 33.5886L84.6878 33.478L84.3673 36.358L85.3612 36.4686ZM85.6835 33.569C85.7035 33.2886 85.6977 32.9577 85.6429 32.6371C85.5895 32.3248 85.4814 31.9733 85.2606 31.6963C85.0194 31.3938 84.6587 31.2032 84.2006 31.2388C83.7816 31.2714 83.3336 31.4893 82.8524 31.8554L83.4579 32.6513C83.8739 32.3347 84.1372 32.2468 84.2781 32.2358C84.38 32.2279 84.4278 32.2559 84.4787 32.3197C84.5498 32.4089 84.6171 32.5712 84.6572 32.8056C84.6958 33.0317 84.7016 33.2802 84.686 33.4977L85.6835 33.569ZM82.8524 31.8554C81.9407 32.549 81.3551 33.0846 80.9919 33.4808C80.8108 33.6785 80.6777 33.8493 80.5865 33.9945C80.541 34.067 80.5013 34.1405 80.4716 34.2135C80.4448 34.2791 80.4119 34.3784 80.4119 34.4933H81.4119C81.4119 34.5638 81.3929 34.6025 81.3977 34.5906C81.3995 34.5861 81.4089 34.5653 81.4335 34.5262C81.4825 34.4481 81.5738 34.326 81.7291 34.1565C82.0389 33.8186 82.5749 33.323 83.4579 32.6513L82.8524 31.8554ZM80.4311 34.3558C80.3498 34.64 80.2693 35.09 80.3193 35.5074C80.3444 35.7175 80.4074 35.961 80.5588 36.1703C80.7221 36.3962 80.9667 36.5507 81.2772 36.5895L81.4011 35.5972C81.3697 35.5933 81.3722 35.5886 81.3691 35.5844C81.354 35.5635 81.3262 35.5056 81.3122 35.3886C81.2838 35.1517 81.3315 34.8444 81.3926 34.6309L80.4311 34.3558ZM81.2772 36.5895C81.4623 36.6126 81.7435 36.673 82.0971 36.7515C82.4389 36.8273 82.8338 36.9165 83.2127 36.9853C83.5868 37.0532 83.9759 37.1072 84.3044 37.1033C84.468 37.1013 84.6439 37.085 84.806 37.034C84.9667 36.9834 85.1664 36.8812 85.2929 36.6709L84.4357 36.1558C84.482 36.0788 84.5382 36.0699 84.5057 36.0802C84.4746 36.09 84.4076 36.102 84.2925 36.1034C84.0635 36.1061 83.7516 36.0668 83.3913 36.0014C83.0358 35.9368 82.6629 35.8527 82.3137 35.7752C81.9763 35.7003 81.6433 35.6274 81.4011 35.5972L81.2772 36.5895ZM84.39 36.5717C84.8458 37.9371 85.261 39.8582 85.0993 41.2572C85.0182 41.9588 84.8039 42.4271 84.4886 42.6731C84.1941 42.9029 83.6836 43.0344 82.7636 42.7607L82.4785 43.7192C83.5667 44.0429 84.4565 43.9665 85.1037 43.4616C85.7302 42.9729 85.9993 42.1798 86.0927 41.3721C86.2799 39.7525 85.8085 37.6629 85.3385 36.255L84.39 36.5717ZM84.5069 36.7631C85.2923 37.5656 86.5748 38.5861 87.8297 38.8936C88.473 39.0513 89.1668 39.0342 89.7717 38.6345C90.3703 38.2388 90.7839 37.5323 91.0134 36.5243L90.0383 36.3024C89.8404 37.1717 89.5241 37.5994 89.2203 37.8002C88.9227 37.9969 88.5417 38.0385 88.0678 37.9224C87.0883 37.6823 85.9673 36.8256 85.2216 36.0636L84.5069 36.7631ZM87.2214 44.122C87.7436 44.359 88.3796 44.5725 89.0257 44.6725C89.6654 44.7714 90.3608 44.7661 90.9697 44.5158C91.6045 44.2548 92.1013 43.7439 92.3304 42.9384C92.5517 42.1599 92.5167 41.133 92.1859 39.8119L91.2159 40.0548C91.526 41.2937 91.5221 42.1245 91.3685 42.6649C91.2225 43.1783 90.9383 43.4474 90.5894 43.5909C90.2146 43.745 89.7239 43.7686 89.1785 43.6842C88.6396 43.6008 88.0916 43.4188 87.6347 43.2114L87.2214 44.122ZM89.4535 34.1339C90.4035 33.3577 92.0706 32.2248 93.9551 31.3729C95.8526 30.5152 97.8931 29.9778 99.6232 30.292L99.8018 29.308C97.7719 28.9395 95.5038 29.5755 93.5432 30.4617C91.5697 31.3538 89.8292 32.5356 88.8208 33.3595L89.4535 34.1339ZM90.9286 35.3829C92.0824 34.9115 94.0229 34.2374 96.0721 33.7561C98.1379 33.2709 100.242 32.9995 101.759 33.2784L101.939 32.2949C100.208 31.9765 97.933 32.2918 95.8434 32.7826C93.7372 33.2773 91.7466 33.9685 90.5504 34.4571L90.9286 35.3829ZM80.9686 38.8509C79.9381 39.9883 78.4372 41.8597 77.276 43.7903C76.6957 44.7553 76.191 45.7501 75.8752 46.6857C75.563 47.6104 75.4141 48.5386 75.6208 49.3384L76.589 49.0882C76.4538 48.5654 76.5346 47.8589 76.8226 47.0056C77.107 46.1633 77.573 45.2367 78.133 44.3057C79.2525 42.4443 80.7106 40.625 81.7097 39.5224L80.9686 38.8509ZM81.909 40.9024C81.0691 41.9599 79.8803 43.74 79.0285 45.6672C78.1883 47.5679 77.6196 49.7357 78.193 51.5011L79.1441 51.1922C78.6921 49.8003 79.1204 47.9325 79.9431 46.0715C80.7541 44.2368 81.8941 42.529 82.6921 41.5243L81.909 40.9024ZM59.8124 44.9129C61.2699 47.1086 63.4696 48.7083 65.6491 49.8201C67.8309 50.9331 70.0294 51.5762 71.5322 51.8392L71.7045 50.8542C70.2942 50.6073 68.1915 49.9945 66.1036 48.9293C64.0134 47.8631 61.975 46.3625 60.6456 44.3598L59.8124 44.9129ZM60.6456 44.3598C60.1531 43.6179 59.7579 42.8072 59.4922 41.9228L58.5345 42.2105C58.8308 43.1966 59.2702 44.096 59.8124 44.9129L60.6456 44.3598Z"
                fill="#E8E9D1"
              />
            </svg>

            <div className={s.text}>Допомогти знайти вірних друзів людям</div>
          </div>
          <div class={s.stick}>
            <svg
              width="1"
              height="162"
              viewBox="0 0 1 162"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="-2.18557e-08"
                x2="0.500007"
                y2="162"
                stroke="url(#paint0_linear_275_811)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_275_811"
                  x1="-0.999988"
                  y1="162"
                  x2="1.62396"
                  y2="0.026308"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FD7D00" />
                  <stop offset="0.123257" stop-color="#FEB336" />
                  <stop offset="0.519097" stop-color="#D6D899" />
                  <stop offset="0.878479" stop-color="#FEB336" />
                  <stop offset="1" stop-color="#FD7D00" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class={s.column}>
            <svg
              width="130"
              height="122"
              viewBox="0 0 130 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.3596 62.0206C49.4577 54.7558 70.3672 44.5851 89.2197 62.0206C112.785 83.8149 119.223 105.36 103.189 118.188C99.9903 119.599 92.1836 120.952 86.5473 115.074C79.5019 107.726 73.1854 117.191 71.7277 117.69C69.6627 119.433 64.2693 121.874 59.216 117.69C56.0577 114.452 47.7976 109.918 40.0234 117.69C33.5854 122.92 15.4373 120.405 19.616 92.4081C21.1141 86.4303 27.5603 71.9837 41.3596 62.0206Z"
                fill="#FD7D00"
              />
              <path
                d="M41.3596 62.0206L42.5303 63.6421L42.6162 63.5801L42.6951 63.5093L41.3596 62.0206ZM89.2197 62.0206L87.8618 63.4889L89.2197 62.0206ZM103.189 118.188L103.996 120.018L104.235 119.912L104.438 119.749L103.189 118.188ZM86.5473 115.074L85.1037 116.458L86.5473 115.074ZM71.7277 117.69L71.0809 115.797L70.7249 115.919L70.4374 116.161L71.7277 117.69ZM59.216 117.69L57.7843 119.086L57.8585 119.162L57.9404 119.23L59.216 117.69ZM40.0234 117.69L41.2845 119.242L41.3645 119.177L41.4373 119.104L40.0234 117.69ZM19.616 92.4081L17.676 91.9219L17.6523 92.0165L17.6379 92.1129L19.616 92.4081ZM42.6951 63.5093C46.5083 60.0885 53.4099 55.9403 61.5494 54.7365C69.5923 53.547 78.913 55.2127 87.8618 63.4889L90.5777 60.5523C80.6739 51.3929 70.1136 49.4263 60.9641 50.7795C51.9112 52.1184 44.3089 56.6879 40.024 60.5318L42.6951 63.5093ZM87.8618 63.4889C99.5145 74.2658 106.707 84.7862 109.12 93.9747C110.319 98.5405 110.327 102.731 109.173 106.476C108.022 110.212 105.674 113.639 101.94 116.626L104.438 119.749C108.722 116.323 111.581 112.246 112.996 107.654C114.408 103.07 114.341 98.107 112.989 92.9587C110.3 82.7192 102.491 71.5698 90.5777 60.5523L87.8618 63.4889ZM102.382 116.358C99.5528 117.606 92.7921 118.697 87.9909 113.69L85.1037 116.458C91.5752 123.208 100.428 121.592 103.996 120.018L102.382 116.358ZM87.9909 113.69C85.9653 111.577 83.8197 110.508 81.6359 110.32C79.4901 110.136 77.5839 110.826 76.0497 111.703C74.5214 112.577 73.2378 113.707 72.3064 114.572C71.8007 115.042 71.4736 115.362 71.1592 115.643C71.0133 115.774 70.9207 115.85 70.8662 115.89C70.7833 115.952 70.8733 115.868 71.0809 115.797L72.3745 119.582C72.7643 119.449 73.0744 119.233 73.2477 119.104C73.4493 118.955 73.6487 118.784 73.8288 118.622C74.1664 118.32 74.6269 117.876 75.0285 117.503C75.9116 116.683 76.9208 115.813 78.0345 115.176C79.1423 114.543 80.2274 114.214 81.293 114.306C82.3206 114.394 83.6067 114.897 85.1037 116.458L87.9909 113.69ZM70.4374 116.161C69.6543 116.823 68.1347 117.684 66.3223 117.931C64.5857 118.168 62.5481 117.852 60.4916 116.149L57.9404 119.23C60.9372 121.712 64.1229 122.268 66.8626 121.894C69.5264 121.531 71.736 120.3 73.0179 119.218L70.4374 116.161ZM60.6478 116.293C58.8422 114.442 55.6194 112.239 51.6765 111.588C47.6067 110.916 42.951 111.935 38.6094 116.275L41.4373 119.104C44.87 115.673 48.2315 115.073 51.0248 115.534C53.9451 116.017 56.4316 117.699 57.7843 119.086L60.6478 116.293ZM38.7622 116.137C36.2558 118.174 31.1063 118.841 27.0081 115.887C23.0495 113.033 19.5598 106.333 21.5941 92.7034L17.6379 92.1129C15.4935 106.48 18.9885 115.036 24.6688 119.131C30.2095 123.126 37.3529 122.436 41.2845 119.242L38.7622 116.137ZM21.556 92.8943C22.9643 87.2751 29.1883 73.2751 42.5303 63.6421L40.1888 60.3991C25.9323 70.6923 19.264 85.5854 17.676 91.9219L21.556 92.8943Z"
                fill="#FD7D00"
              />
              <ellipse
                rx="12.7062"
                ry="17.1039"
                transform="matrix(0.896473 -0.443099 0.42553 0.904944 18.669 46.0161)"
                fill="#FD7D00"
              />
              <ellipse
                rx="12.6458"
                ry="19.3354"
                transform="matrix(0.999274 0.0381001 -0.0362493 0.999343 46.923 20.9808)"
                fill="#FD7D00"
              />
              <ellipse
                rx="13.3933"
                ry="19.4354"
                transform="matrix(0.989695 0.143191 -0.136359 0.99066 84.2028 21.1717)"
                fill="#FD7D00"
              />
              <ellipse
                rx="12.0861"
                ry="17.4613"
                transform="matrix(0.941872 0.335973 -0.321357 0.946958 112.046 45.5034)"
                fill="#FD7D00"
              />
            </svg>

            <div className={s.text}>Збільшити кількість щасливих людей</div>
          </div>
          <div class={s.stick}>
            <svg
              width="1"
              height="162"
              viewBox="0 0 1 162"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="-2.18557e-08"
                x2="0.500007"
                y2="162"
                stroke="url(#paint0_linear_275_811)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_275_811"
                  x1="-0.999988"
                  y1="162"
                  x2="1.62396"
                  y2="0.026308"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FD7D00" />
                  <stop offset="0.123257" stop-color="#FEB336" />
                  <stop offset="0.519097" stop-color="#D6D899" />
                  <stop offset="0.878479" stop-color="#FEB336" />
                  <stop offset="1" stop-color="#FD7D00" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class={s.column}>
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="60" cy="60" r="60" fill="#FD7D00" />
              <circle cx="42.5531" cy="41.7021" r="6.80851" fill="#E8E9D1" />
              <circle cx="78.2978" cy="41.7021" r="6.80851" fill="#E8E9D1" />
              <path
                d="M31.4893 73.1914C46.3829 98.2978 75.319 97.4467 89.7871 73.1914"
                stroke="#E8E9D1"
                stroke-width="6"
              />
            </svg>

            <div className={s.text}>
              Збільшити кількість щасливих історій чотирилапих
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSlideAbout;
