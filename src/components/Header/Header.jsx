import React, { useState } from "react";
import s from './Header.module.css'
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"

//const {user, setUser} = use

const Header = (props) => {
    const setActive = ({ isActive }) => isActive ? s.active : s.item
    // const auth = useAuth();
    let navigate = useNavigate();
    const authUser = props.authUser ? props.authUser : false

    const onLogOut = () => {
        localStorage.clear();
        navigate("/LogIn");
    };

    return (
        <header className={s.header}>
            <div className={s.logo}>
                <svg width="101" height="100" viewBox="0 0 101 100" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M67.8906 83.5204V82.9932C67.8906 82.7239 67.9519 82.4583 68.0699 82.2163V82.2163C68.1528 82.0464 68.2622 81.8908 68.3942 81.7555L68.4059 81.7435C68.4681 81.6797 68.5348 81.6204 68.6054 81.5661L68.8509 81.3773C69.0212 81.2463 69.2117 81.1441 69.415 81.0746V81.0746C69.5145 81.0406 69.6167 81.0146 69.7204 80.9968L70.0083 80.9476C70.3206 80.8943 70.6369 80.8674 70.9538 80.8674H73.6734V80.8674C73.7722 80.8674 73.8148 80.7421 73.7365 80.6819L73.3834 80.4103C73.3738 80.403 73.3648 80.3949 73.3563 80.3862L72.7603 79.775V79.775C72.3571 79.3616 72.0226 78.8863 71.7695 78.3671L71.6951 78.2145L71.3907 77.4342L71.0863 76.4979L70.9342 75.7176V75.7176C70.8329 75.1986 70.782 74.6711 70.782 74.1424V73.5566C70.782 73.3331 70.8 73.1099 70.8359 72.8893V72.8893C70.901 72.4882 71.0246 72.0988 71.2027 71.7336L71.2385 71.6602L71.4247 71.3739C71.5033 71.2529 71.5936 71.14 71.6943 71.0368V71.0368C71.796 70.9325 71.9078 70.8385 72.0281 70.7563L72.3038 70.5678V70.5678C72.7077 70.3607 73.1379 70.2095 73.5826 70.1183L73.6734 70.0997V70.0997C74.281 69.9958 74.8963 69.9436 75.5127 69.9436H75.6517L77.0212 70.0997L77.6499 70.1918C77.939 70.2341 78.2191 70.3237 78.4791 70.457V70.457C78.6229 70.5307 78.7596 70.6174 78.8877 70.7159L79.0368 70.8305C79.2146 70.9673 79.3825 71.1166 79.5392 71.2773L79.9126 71.6602L80.5213 72.2844L80.8442 72.6818C81.1353 73.0399 81.3843 73.4302 81.5866 73.845V73.845"
                        stroke="#FD7D00" />
                    <path
                        d="M60.282 8.92583V8.63783C60.282 8.31168 60.3333 7.98756 60.4342 7.67739V7.67739L60.5863 7.36528L60.8907 6.89712L60.9574 6.79445C61.1155 6.55137 61.297 6.32441 61.4994 6.11684V6.11684L61.8038 5.80474L62.1081 5.49263L62.4125 5.18052L62.7168 4.86841L63.0212 4.5563L63.2291 4.34307C63.293 4.27759 63.367 4.22291 63.4484 4.18117L63.5806 4.11342C63.613 4.0968 63.6489 4.08813 63.6853 4.08813V4.08813C63.7472 4.08813 63.8064 4.11312 63.8496 4.15741L63.8922 4.20107C63.92 4.22963 63.9431 4.26246 63.9606 4.29832L64.0864 4.5563L64.2386 5.02446L64.3908 5.49263L64.5429 5.96079L64.6951 6.42895L64.8473 7.05317L64.9995 7.52134L65.1516 7.9895L65.3038 8.61372L65.456 9.23794L65.6082 9.86215L65.7604 10.6424L65.9125 11.7348"
                        stroke="#FD7D00" />
                    <path
                        d="M71.8475 35.1431L71.6953 34.2068L71.5882 33.548C71.5582 33.3632 71.5431 33.1764 71.5431 32.9893V32.876C71.5431 32.5179 71.6099 32.1629 71.74 31.8292L71.7439 31.8193C71.8128 31.6428 71.8995 31.4738 72.0028 31.315V31.315C72.1019 31.1625 72.2158 31.0201 72.3427 30.8899L72.4769 30.7523C72.6647 30.5597 72.8826 30.3989 73.122 30.2761V30.2761C73.2863 30.1919 73.4595 30.1262 73.6384 30.0803L74.5866 29.8372L75.4997 29.5251L76.7171 29.213L77.9345 28.9009L78.8476 28.5888L80.065 28.2767L80.3308 28.1858C80.7618 28.0385 81.1815 27.8603 81.5868 27.6525V27.6525L82.0433 27.3404L82.14 27.2743C82.3793 27.1107 82.6018 26.9237 82.8042 26.7161V26.7161L83.1086 26.404L83.4129 26.0919L83.7173 25.7798V25.7798C83.9189 25.5731 84.0861 25.3354 84.2127 25.0759L84.326 24.8435V24.8435C84.5283 24.4285 84.6855 23.9931 84.7948 23.5446L84.9347 22.9708L85.0461 22.6282C85.1739 22.2348 85.239 21.8239 85.239 21.4103V21.4103M85.239 21.4103L85.2183 21.389C85.0305 21.1964 84.8126 21.0356 84.5732 20.9129V20.9129C84.4089 20.8286 84.2357 20.7629 84.0568 20.7171L83.7173 20.63L83.4509 20.5617C83.2244 20.5037 83.0098 20.4065 82.8168 20.2745L82.7895 20.2558C82.6981 20.1933 82.6131 20.1219 82.5358 20.0426L82.4473 19.9519C82.3813 19.8842 82.3266 19.8065 82.2852 19.7215V19.7215C82.2262 19.6005 82.1955 19.4677 82.1955 19.3331V18.9134M85.239 21.4103L85.3912 21.0982V21.0982C85.4901 20.7939 85.4901 20.4661 85.3912 20.1619V20.1619L85.3808 20.1297C85.2875 19.8429 85.1295 19.5814 84.919 19.3655V19.3655C84.8282 19.2724 84.7285 19.1886 84.6212 19.1152L84.326 18.9134L83.8475 18.6681C83.7608 18.6236 83.671 18.5855 83.5788 18.554L83.4369 18.5055C83.3202 18.4656 83.1978 18.4453 83.0746 18.4453H83.0081C82.8741 18.4453 82.742 18.4771 82.6228 18.5383V18.5383C82.5414 18.58 82.4673 18.6347 82.4034 18.7002L82.1955 18.9134M82.1955 18.9134H82.0433H81.739C81.4955 18.9134 80.8259 18.8094 80.5215 18.7574L79.152 18.6013L77.7824 18.4453L77.0215 18.2892L76.1084 17.9771L75.611 17.7731C75.4358 17.7012 75.2687 17.6111 75.1125 17.5043V17.5043C74.9652 17.4036 74.8283 17.2885 74.7037 17.1608L74.5866 17.0408V17.0408C74.3842 16.8332 74.1617 16.6462 73.9224 16.4826L73.8258 16.4165L73.7291 16.3505C73.4898 16.1869 73.2673 15.9999 73.0649 15.7923V15.7923L72.7605 15.4802L72.4562 15.1681V15.1681C72.2546 14.9614 72.0189 14.7879 71.762 14.6561V14.6561C71.6171 14.5818 71.4781 14.4939 71.349 14.3946L70.9344 14.0757L70.8679 14.0246C70.5072 13.7472 70.1219 13.5031 69.717 13.2955V13.2955L69.1083 12.9833L68.4996 12.6712V12.6712C68.0943 12.4634 67.6745 12.2852 67.2436 12.1379L66.9778 12.047L66.5213 11.891L65.9126 11.7349L65.456 11.5789L64.8473 11.4228L64.0864 11.2667L63.0212 11.1107L62.2603 10.9546L62.0938 10.912C61.8002 10.8367 61.4982 10.7986 61.1951 10.7986V10.7986"
                        stroke="#FD7D00" />
                    <path
                        d="M91.326 76.6537L91.6303 76.3416V76.3416C91.8328 76.134 92.0143 75.9071 92.1723 75.664L92.2391 75.5613V75.5613C92.4405 75.2515 92.5881 74.9098 92.6757 74.5507L92.6956 74.469V74.469C92.7968 73.95 92.8478 73.4225 92.8478 72.8937V72.2842V72.1464C92.8478 71.7196 92.7967 71.2944 92.6956 70.8797V70.8797L92.3912 70.0994L92.0869 69.4752L91.7825 68.851L91.4782 68.2268L91.1738 67.7586L90.8695 67.1344L90.7173 66.6662L90.5651 65.886L90.4129 65.1057V65.1057C90.3117 64.5867 90.2608 64.0592 90.2608 63.5304V63.3891V63.3891C90.2608 62.8701 90.3108 62.3523 90.4101 61.843L90.4129 61.8285L90.5651 61.2043L90.7173 60.5801V60.5801C90.8184 60.1652 90.9639 59.7623 91.151 59.3784L91.1738 59.3317L91.4782 58.7075L91.7825 58.0832L92.0869 57.459L92.3912 56.8348L92.458 56.7321C92.616 56.4891 92.7975 56.2621 92.9999 56.0545V56.0545L93.3043 55.7424L93.6086 55.4303L94.0652 54.9621V54.9621C94.3691 54.6504 94.6949 54.3608 95.04 54.0953L95.1304 54.0258L95.7391 53.5577L96.3478 53.0895L96.8044 52.7774L97.2609 52.4653L97.5382 52.2757C97.6571 52.1944 97.7865 52.1295 97.9229 52.0829L98.03 52.0463C98.1253 52.0137 98.2254 51.9971 98.3261 51.9971V51.9971C98.4269 51.9971 98.527 52.0137 98.6223 52.0463L98.7572 52.0925C98.8751 52.1327 98.987 52.1888 99.0898 52.2591L99.1047 52.2693C99.2926 52.3977 99.4438 52.5728 99.5435 52.7774V52.7774L99.726 53.0581C99.8069 53.1825 99.8711 53.317 99.917 53.4582V53.4582C99.972 53.6275 100 53.8044 100 53.9824V54.0258V54.2894C100 54.424 99.9694 54.5569 99.9104 54.6779V54.6779C99.869 54.7628 99.8143 54.8406 99.7483 54.9082L99.5658 55.0954C99.4498 55.2143 99.3223 55.3215 99.1852 55.4152L98.9348 55.5864V55.5864C98.5299 55.794 98.1446 56.0381 97.7839 56.3155L97.7174 56.3666L97.5753 56.4638C97.3662 56.6067 97.1718 56.7701 96.995 56.9515V56.9515C96.8681 57.0816 96.732 57.2025 96.588 57.3133L96.5 57.381C96.2974 57.5368 96.1061 57.7069 95.9276 57.89L95.5869 58.2393L95.1987 58.717C94.9508 59.0222 94.7298 59.3483 94.5384 59.6918V59.6918C94.3249 60.075 94.1491 60.4781 94.0135 60.8953L93.913 61.2043L93.8499 61.3986C93.69 61.8902 93.6086 62.404 93.6086 62.9209V62.9209V62.9209C93.6086 63.5441 93.6589 64.1663 93.7588 64.7815L93.7608 64.7936L93.913 65.4178L94.2174 66.3541L94.6739 67.2905L95.1304 68.2268L95.4348 69.1631L95.4459 69.1973C95.6411 69.7978 95.79 70.4125 95.8913 71.0358V71.0358L96.0435 72.1281L96.1474 73.1938C96.1795 73.5227 96.1755 73.8542 96.1355 74.1823V74.1823C96.0746 74.682 95.9309 75.1681 95.7102 75.6206L95.5869 75.8735L95.2826 76.6537L94.9782 77.2779L94.6739 77.9022L94.3695 78.3703L94.0652 78.8385L93.4565 79.6188L92.6956 80.399L91.9347 81.0233L91.8036 81.1577C91.4873 81.4821 91.1204 81.7529 90.7173 81.9596V81.9596L90.3585 82.1435C89.7868 82.4367 89.1947 82.6881 88.5868 82.8959V82.8959V82.8959C87.9819 83.1027 87.348 83.2118 86.7089 83.2193L61.551 83.5142C61.2713 83.5175 61.0428 83.2916 61.0428 83.0119V83.0119C61.0428 82.9356 61.0601 82.8603 61.0936 82.7917L61.3471 82.2717L61.4936 82.0464C61.5986 81.8849 61.7192 81.7341 61.8537 81.5961V81.5961C62.0226 81.4229 62.2122 81.2713 62.4182 81.1445L62.5769 81.0469C62.7704 80.9278 62.9808 80.8385 63.201 80.7821V80.7821C63.3847 80.735 63.5735 80.7111 63.7631 80.7111H65.234C65.3759 80.7111 65.5117 80.6539 65.6108 80.5523V80.5523C65.7066 80.454 65.7602 80.3222 65.7602 80.1849V80.0869V71.0952V70.0531C65.7602 69.8766 65.7391 69.7006 65.6973 69.5291L65.6919 69.5068C65.6364 69.2793 65.5429 69.0628 65.4153 68.8665V68.8665C65.3411 68.7524 65.2559 68.6459 65.1608 68.5484L65.0766 68.462C64.924 68.3056 64.7563 68.1647 64.5759 68.0413L64.3907 67.9147L64.3003 67.8452C63.9552 67.5797 63.6294 67.2901 63.3254 66.9783V66.9783L62.8689 66.3541L62.5645 65.886L62.2602 65.2617L61.9558 64.6375L61.9404 64.5979C61.7482 64.1051 61.6005 63.5961 61.4993 63.077V63.077L61.4973 63.0649C61.3973 62.4497 61.3471 61.8275 61.3471 61.2043V61.2043L61.4993 57.9272L61.8036 54.494L61.9558 53.4016L62.108 52.7774V52.7774C62.2056 52.4771 62.1878 52.1396 61.9532 51.9283C61.5857 51.5974 61.0363 51.3314 60.7384 51.2168L58.9914 50.3211C58.7363 50.1903 58.4936 50.0365 58.2664 49.8617V49.8617C58.0885 49.7249 57.9206 49.5757 57.7639 49.415L57.5427 49.1881L57.0862 48.5639L56.9224 48.34C56.728 48.0743 56.569 47.7844 56.4494 47.4776V47.4776C56.3668 47.2659 56.3034 47.0472 56.2599 46.8242L56.2025 46.5297C56.1829 46.4296 56.1731 46.3278 56.1731 46.2257V46.1741C56.1731 45.9005 56.2525 45.6329 56.4015 45.4035V45.4035C56.452 45.3259 56.51 45.2534 56.5747 45.1871L56.5919 45.1694C56.7177 45.0404 56.8636 44.9327 57.0239 44.8505L57.3905 44.6625L57.8394 44.4324C57.9452 44.3781 58.0416 44.307 58.1246 44.2218V44.2218C58.2423 44.1011 58.3307 43.9549 58.3828 43.7946L58.6079 43.102L58.9123 42.1657L59.2166 41.5415L59.521 40.9172V40.9172C59.7226 40.5037 59.989 40.1252 60.3102 39.7958L61.0428 39.0446M61.0428 39.0446L62.5645 38.5764L63.4776 38.4204L64.9994 38.2643H65.9124M61.0428 39.0446C62.9906 29.6813 65.1008 34.623 65.9124 38.2643M65.9124 38.2643L66.7578 38.4088C66.8027 38.4165 66.8461 38.4309 66.8866 38.4517V38.4517C67.0359 38.5283 67.1298 38.682 67.1298 38.8498V41.8536V34.9429C67.1298 34.8119 67.1479 34.6814 67.1836 34.5553L67.2375 34.3646C67.2667 34.2611 67.3213 34.1666 67.3964 34.0896L67.4513 34.0333C67.5377 33.9447 67.6562 33.8948 67.7799 33.8948V33.8948C67.8527 33.8948 67.9245 33.9121 67.9893 33.9453L68.0722 33.9878C68.1536 34.0295 68.2276 34.0842 68.2915 34.1497L68.6516 34.519L70.7821 37.328L71.9995 39.3567L72.3304 39.9505C72.9204 41.0093 73.4205 42.1157 73.8256 43.258V43.258L74.13 44.5065V44.5065C74.2312 45.0255 74.2822 45.553 74.2822 46.0817V47.4156C74.2822 47.8669 74.3436 48.3162 74.4647 48.7509V48.7509C74.5457 49.0418 74.6531 49.3247 74.7854 49.5961L75.043 50.1244L75.4996 50.9047L75.9561 51.5289L76.4681 52.264C76.6338 52.5018 76.8187 52.7256 77.021 52.9331V52.9331C77.3244 53.2442 77.6651 53.5168 78.0352 53.7445L78.2388 53.8698V53.8698C78.7453 54.1814 79.2267 54.532 79.6788 54.9183L79.9127 55.1182L80.2534 55.4675C80.4318 55.6506 80.6231 55.8206 80.8258 55.9765V55.9765C81.0284 56.1324 81.2197 56.3024 81.3982 56.4855L81.7388 56.8348L81.9577 57.0592C82.217 57.3251 82.4495 57.6158 82.6519 57.9272L82.7186 58.0299C82.8767 58.2729 83.0582 58.4999 83.2606 58.7075V58.7075C83.463 58.915 83.6445 59.142 83.8026 59.3851L84.1737 59.9559L84.7824 60.8922L85.0867 61.5164L85.2389 61.7506C85.5425 62.2175 85.7974 62.7142 85.9998 63.233V63.233L86.3041 64.0133L86.6085 64.6375L86.9129 65.2617L87.2172 65.886L87.5216 66.5102L87.8259 67.4465L87.9781 68.2268L88.2824 69.3192L88.4346 70.0994L88.5868 70.8797L89.0433 73.0645L89.3477 74.625L89.4999 76.0295V77.2779V78.5264"
                        stroke="#FD7D00" />
                    <path
                        d="M57.8469 84.1447L34.1848 84.1447C32.935 84.1447 31.6877 84.0403 30.4551 83.8325V83.8325L29.2377 83.5204L28.3246 83.2083L28.0574 83.117C27.6274 82.97 27.2081 82.7919 26.8028 82.5841V82.5841L26.1941 82.2719L25.5854 81.9598L25.1289 81.6477L25.0306 81.5805C24.7923 81.4176 24.5704 81.2311 24.368 81.0235V81.0235L24.0637 80.7114L23.7593 80.3993L23.4549 80.0872L23.1506 79.7751L22.8462 79.4629L22.5419 79.1508L22.2375 78.8387L21.9332 78.5266L21.6288 78.2145V78.2145C21.4264 78.0069 21.2445 77.7794 21.0857 77.5351L21.0201 77.4342L20.7158 76.9661L20.4114 76.3419L20.1071 75.7176L19.8027 75.0934L19.4983 74.4692L19.194 73.845L18.8896 72.9087L18.5853 71.9723L18.2809 71.036L17.9766 69.7876L17.6722 68.227L17.3679 65.7302L17.3679 62.6338C17.3679 61.371 17.4697 60.1101 17.6722 58.8638V58.8638L17.9766 57.6153L18.2809 56.679L18.5853 55.7427L18.6745 55.4682C18.8177 55.0275 18.9913 54.5977 19.194 54.1821V54.1821L19.4983 53.5579L19.8027 52.9337L20.1071 52.3095L20.7158 51.3731L21.3245 50.4368L21.9332 49.5005L22.2375 48.8763V48.8763C22.54 48.0492 22.7131 47.1787 22.7505 46.2971L22.8044 45.0257C22.8321 44.3731 22.7431 43.7212 22.5419 43.1022V43.1022L22.2375 42.322L21.9332 41.6978L21.6288 41.0735L21.3245 40.4493L21.0201 39.9812V39.9812C20.8177 39.6698 20.5858 39.3797 20.3278 39.1151L20.1071 38.8888V38.8888C19.9046 38.6812 19.6827 38.4946 19.4445 38.3318L19.3462 38.2646L18.8896 37.9524L18.4331 37.6403L17.9865 37.335C17.9799 37.3305 17.9728 37.3269 17.9652 37.3243V37.3243C17.8715 37.2923 17.8904 37.1511 17.9892 37.1454L20.2084 37.019C20.2422 37.0171 20.2761 37.0186 20.3096 37.0235L21.3245 37.1722V37.1722C21.7291 37.2759 22.1212 37.4247 22.494 37.6158L22.5419 37.6403V37.6403C23.0483 37.8481 23.5377 38.097 24.0052 38.3847L24.0637 38.4206L24.6724 38.7327L25.4332 39.2009L26.042 39.669L26.8028 40.2933L27.2594 40.7614L27.7159 41.2296L28.1724 41.6978L28.629 42.322L29.0855 42.9462L29.542 43.5704L29.9986 44.3507L30.4551 45.131L30.7594 45.7552L31.0638 46.3794L31.6725 47.9399L31.9769 49.1884L32.2812 50.7489L32.3105 50.9292C32.4936 52.0555 32.5856 53.1957 32.5856 54.3382V54.3382"
                        stroke="#FD7D00" />
                    <path
                        d="M27.7162 78.2143L27.4119 77.59L26.9553 76.4976L26.651 75.4053V75.4053C26.4485 74.5749 26.3246 73.7279 26.2809 72.8758L26.2762 72.7847C26.2219 71.7268 26.2967 70.6677 26.4988 69.6313V69.6313L26.8032 68.5389L27.1075 67.6025L27.564 66.6662L27.8684 66.042L28.1727 65.4178L29.9989 62.2967L33.1946 57.7711L34.7164 55.8984L50.2384 37.6401V37.6401C50.7439 36.9143 51.1622 36.13 51.4847 35.3033L51.608 34.9871V34.9871C52.0121 33.433 52.2167 31.8306 52.2167 30.2191L52.2167 30.1494L52.0645 27.6526L51.7602 25.7799L51.1515 23.5952L50.9993 22.5028L50.9846 22.3518C50.8932 21.4146 50.8981 20.4715 50.9993 19.5377V19.5377L51.1088 18.7518C51.1371 18.5482 51.1891 18.349 51.2635 18.1581L51.3778 17.8652C51.4293 17.7331 51.5066 17.613 51.6051 17.512L51.6344 17.4819C51.8124 17.2995 52.0558 17.1969 52.311 17.1969V17.1969C52.5445 17.1969 52.7709 17.2828 52.948 17.4385L53.7385 18.1332V18.1332C53.0582 17.4356 52.6874 16.4907 52.7123 15.5186L52.8254 11.1108L52.9776 9.23813L53.282 7.83364L53.5863 6.89731L54.195 5.33677L54.3222 5.04333C54.6417 4.30606 55.0597 3.61728 55.5646 2.99595V2.99595L55.8634 2.68958C55.9644 2.58601 56.1026 2.52779 56.2474 2.52779V2.52779C56.3946 2.52779 56.5363 2.58788 56.6401 2.69439L56.7093 2.76536C56.7576 2.81483 56.7992 2.87044 56.8332 2.93074L63.0213 13.9198"
                        stroke="#FD7D00" />
                    <path
                        d="M43.8467 61.9848L45.0641 61.6727L46.2815 61.3606L47.4989 61.0485L49.3251 60.7364L49.627 60.7106C50.6409 60.6239 51.6607 60.6326 52.6729 60.7364V60.7364L53.7382 60.8924L54.3469 61.0485L55.1078 61.3606L55.3286 61.4738C55.5855 61.6055 55.8193 61.7781 56.0208 61.9848V61.9848L56.3252 62.2969L56.6295 62.609V62.609C56.8312 62.8158 56.9984 63.0534 57.125 63.313L57.2383 63.5454L57.5426 64.1696L57.5519 64.1981C57.647 64.4908 57.7196 64.7903 57.7689 65.094V65.094C57.8209 65.4135 57.847 65.7367 57.847 66.0604V66.8225L57.6948 67.9149L57.5426 68.6952L57.3904 69.4754L57.0861 70.4118L56.7817 71.192L56.4774 71.9723L56.0208 72.9086L55.7165 73.5329L55.4121 74.1571L55.1078 74.7813L54.8034 75.4055L54.4991 76.0297L54.1947 76.6539L53.8904 77.2782V77.2782C53.688 77.6932 53.4428 78.0859 53.1588 78.4499L52.9773 78.6827V78.6827C52.807 78.8573 52.9307 79.1508 53.1747 79.1508H59.8253H60.2301C60.3641 79.1508 60.4962 79.1827 60.6154 79.2439V79.2439C60.6968 79.2856 60.7709 79.3403 60.8348 79.4058L61.0427 79.619"
                        stroke="#FD7D00" />
                    <path
                        d="M69.7628 61.0123C69.7628 62.5623 67.9764 63.1809 67.0236 64.4566C66.0708 63.1809 64.2844 62.5623 64.2844 61.0123C64.2844 59.4622 66.0708 58.8435 67.0236 60.2468C67.8573 58.8435 69.7628 59.4622 69.7628 61.0123Z"
                        fill="#FD7D00" />
                </svg>
            </div>
            <div className={s.name}>
                <NavLink className={setActive} to='/Main'>GIVE A PAW</NavLink>
            </div>
            <div>
                <NavLink className={setActive} to='/1'>Тварини</NavLink>

            </div>
            <div>
                <NavLink className={setActive} to='/2'>Притулки</NavLink>

            </div>
            <div>
                <NavLink className={setActive} to='/AboutUs'> Про нас</NavLink>
            </div>

            {(authUser === 'true') ? (
                <>
                    <div>
                        <NavLink className={setActive} to='/Cabinet'>
                            <button className={s.btn}>Особистий кабінет</button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink className={setActive} to='/LogIn'>
                            <button className={s.btn} onClick={onLogOut}>Вийти</button>
                        </NavLink>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <NavLink className={setActive} to='/Login'>
                            <button className={s.btn}>Увійти</button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink className={setActive} to='/Registration'>
                            <button className={s.btn}>Зареєструватися</button>
                        </NavLink>
                    </div>
                </>
            )}

            {/* <div>
               <NavLink className={setActive} to='/Login'>     
                   <button className={s.btn}>Увійти</button>
               </NavLink>
            </div>
            <div>
                <NavLink className={setActive} to='/Registration'>
                    <button className={s.btn}>Зареєструватися</button>
                </NavLink>
            </div> */}




        </header>
    )
}

export default Header