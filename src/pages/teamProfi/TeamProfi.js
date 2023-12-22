import React from "react";
import "./style/teamProfi.css";
import imgTop from "../../assets/images/line-dec.png";
import trener from "../../assets/images/4.jpg";
import trener1 from "../../assets/images/1.jpg";
import trener2 from "../../assets/images/2.jpg";

const TeamProfi = () => {
  return (
    <div>
      <div id="teamProfi">
        <div className="container">
          <div className="teamProfi">
            <div className="teamProfi-top">
              <h1>
                Команда <span> профессионалов</span>
              </h1>
              <img src={imgTop} alt="" />
            </div>
            <div className="block-group">
              <div className="block-trener">
                <img src={trener} alt="" />
                <p>Тренер групповых программ</p>

                <h2>Анастасия Карамышева</h2>

                <div className="icon-group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="17"
                    viewBox="0 0 10 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_118)">
                      <path
                        d="M7.72286 0.517089V2.87423H6.32107C5.80917 2.87423 5.46393 2.98137 5.28536 3.19566C5.10679 3.40995 5.0175 3.73137 5.0175 4.15995V5.84745H7.63357L7.28536 8.4903H5.0175V15.2671H2.28536V8.4903H0.00857162V5.84745H2.28536V3.90102C2.28536 2.79387 2.59488 1.93524 3.21393 1.32512C3.83298 0.715006 4.65738 0.409946 5.68714 0.409946C6.56214 0.409946 7.24072 0.445661 7.72286 0.517089Z"
                        fill="#232D39"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_118">
                        <rect
                          width="9.16"
                          height="16"
                          fill="white"
                          transform="matrix(1 0 0 -1 0 16.4102)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_120)">
                      <path
                        d="M14.5129 4.05308C14.1141 4.63642 13.6319 5.13344 13.0664 5.54415C13.0724 5.62749 13.0754 5.75249 13.0754 5.91915C13.0754 6.69296 12.9623 7.46529 12.7361 8.23612C12.5099 9.00695 12.1661 9.74654 11.7048 10.4549C11.2435 11.1632 10.6944 11.7897 10.0575 12.3343C9.4206 12.879 8.65274 13.3135 7.75393 13.6379C6.85512 13.9623 5.89381 14.1245 4.87 14.1245C3.25691 14.1245 1.78072 13.693 0.441431 12.8299C0.649764 12.8537 0.881907 12.8656 1.13786 12.8656C2.47715 12.8656 3.6706 12.4549 4.71822 11.6334C4.09322 11.6215 3.53369 11.4296 3.03965 11.0575C2.5456 10.6855 2.20631 10.2108 2.02179 9.63344C2.21822 9.6632 2.39976 9.67808 2.56643 9.67808C2.82238 9.67808 3.07536 9.64534 3.32536 9.57987C2.65869 9.44296 2.10661 9.11112 1.66911 8.58433C1.23161 8.05755 1.01286 7.44594 1.01286 6.74951V6.7138C1.41762 6.93999 1.85215 7.06201 2.31643 7.07987C1.92357 6.81796 1.61107 6.4757 1.37893 6.05308C1.14679 5.63046 1.03072 5.17213 1.03072 4.67808C1.03072 4.15427 1.16167 3.66915 1.42357 3.22273C2.14381 4.10963 3.0203 4.81945 4.05304 5.35219C5.08578 5.88493 6.19143 6.18106 7.37 6.24058C7.32238 6.01439 7.29857 5.79415 7.29857 5.57987C7.29857 4.78225 7.57982 4.10219 8.14232 3.53969C8.70482 2.97719 9.38488 2.69594 10.1825 2.69594C11.0158 2.69594 11.7182 2.99951 12.2896 3.60665C12.9385 3.48165 13.5486 3.24951 14.12 2.91023C13.8998 3.59475 13.4771 4.12451 12.8521 4.49951C13.4057 4.43999 13.9593 4.29118 14.5129 4.05308Z"
                        fill="#232D39"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_120">
                        <rect
                          width="14.86"
                          height="16"
                          fill="white"
                          transform="matrix(1 0 0 -1 0.440002 16.4102)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="17"
                    viewBox="0 0 15 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_122)">
                      <path
                        d="M3.69893 5.99065V14.8389H0.752502V5.99065H3.69893ZM3.88643 3.25851C3.89238 3.69303 3.74209 4.05613 3.43554 4.3478C3.12899 4.63946 2.72572 4.7853 2.22572 4.7853H2.20786C1.71976 4.7853 1.32691 4.63946 1.02929 4.3478C0.731669 4.05613 0.582859 3.69303 0.582859 3.25851C0.582859 2.81803 0.736133 2.45345 1.04268 2.16476C1.34923 1.87607 1.74953 1.73172 2.24357 1.73172C2.73762 1.73172 3.13345 1.87607 3.43107 2.16476C3.72869 2.45345 3.88048 2.81803 3.88643 3.25851ZM14.2971 9.76744V14.8389H11.3596V10.1067C11.3596 9.48172 11.2391 8.99214 10.998 8.63797C10.757 8.28381 10.3805 8.10672 9.86857 8.10672C9.49357 8.10672 9.17959 8.2094 8.92661 8.41476C8.67363 8.62012 8.48464 8.87458 8.35964 9.17815C8.29417 9.35672 8.26143 9.5978 8.26143 9.90137V14.8389H5.32393C5.33584 12.4639 5.34179 10.5383 5.34179 9.06208C5.34179 7.58589 5.33881 6.70494 5.33286 6.41922L5.32393 5.99065H8.26143V7.27637H8.24357C8.36262 7.08589 8.48464 6.91922 8.60964 6.77637C8.73464 6.63351 8.9028 6.47875 9.11411 6.31208C9.32542 6.14541 9.58435 6.01595 9.89089 5.92369C10.1974 5.83143 10.5382 5.7853 10.9132 5.7853C11.9311 5.7853 12.7495 6.12309 13.3686 6.79869C13.9876 7.47428 14.2971 8.46387 14.2971 9.76744Z"
                        fill="#232D39"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_122">
                        <rect
                          width="13.72"
                          height="16"
                          fill="white"
                          transform="matrix(1 0 0 -1 0.580002 16.4102)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_124)">
                      <path
                        d="M17.0871 3.43673H12.5246V4.54387H17.0871V3.43673ZM14.8371 7.2403C14.3014 7.2403 13.8669 7.39655 13.5336 7.70905C13.2002 8.02155 13.0157 8.44566 12.98 8.98138H16.6229C16.5157 7.82066 15.9205 7.2403 14.8371 7.2403ZM14.98 12.4635C15.355 12.4635 15.7181 12.3683 16.0693 12.1778C16.4205 11.9873 16.6467 11.7284 16.7479 11.401H18.7211C18.1258 13.2284 16.855 14.1421 14.9086 14.1421C13.6348 14.1421 12.6214 13.7492 11.8684 12.9635C11.1154 12.1778 10.7389 11.1451 10.7389 9.8653C10.7389 8.62721 11.1273 7.59893 11.9041 6.78048C12.6809 5.96203 13.6824 5.5528 14.9086 5.5528C15.73 5.5528 16.4458 5.75519 17.0559 6.15995C17.666 6.56471 18.1214 7.09745 18.422 7.75816C18.7226 8.41888 18.8729 9.15697 18.8729 9.97245C18.8729 10.0736 18.8669 10.2135 18.855 10.3921H12.98C12.98 11.0528 13.1511 11.5632 13.4934 11.9233C13.8357 12.2835 14.3312 12.4635 14.98 12.4635ZM3.06036 12.0171H5.70321C6.92345 12.0171 7.53357 11.5201 7.53357 10.526C7.53357 9.45459 6.94131 8.91888 5.75679 8.91888H3.06036V12.0171ZM3.06036 7.22245H5.56929C6.03357 7.22245 6.40113 7.11382 6.67196 6.89655C6.9428 6.67929 7.07821 6.34149 7.07821 5.88316C7.07821 5.02602 6.51274 4.59745 5.38179 4.59745H3.06036V7.22245ZM0.587143 2.6778H5.89071C6.40857 2.6778 6.86988 2.71947 7.27464 2.8028C7.67941 2.88614 8.05589 3.02751 8.40411 3.22691C8.75232 3.42632 9.02018 3.71352 9.20768 4.08852C9.39518 4.46352 9.48893 4.92185 9.48893 5.46352C9.48893 6.5409 8.97702 7.32364 7.95321 7.81173C8.63179 8.00221 9.14369 8.34447 9.48893 8.83852C9.83417 9.33257 10.0068 9.93971 10.0068 10.6599C10.0068 11.1064 9.93387 11.5126 9.78804 11.8787C9.6422 12.2448 9.44577 12.5528 9.19875 12.8028C8.95173 13.0528 8.65857 13.2641 8.31929 13.4367C7.98 13.6094 7.61988 13.7344 7.23893 13.8117C6.85798 13.8891 6.45917 13.9278 6.0425 13.9278H0.587143V2.6778Z"
                        fill="#232D39"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_124">
                        <rect
                          width="18.3"
                          height="16"
                          fill="white"
                          transform="matrix(1 0 0 -1 0.580002 16.4102)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="block-trener">
                <img src={trener1} alt="" />
                <p>Тренер по единоборствам</p>

                <h2>Тимур Денисов</h2>

                <div className="icon-group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="17"
                    viewBox="0 0 10 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_118)">
                      <path
                        d="M7.72286 0.517089V2.87423H6.32107C5.80917 2.87423 5.46393 2.98137 5.28536 3.19566C5.10679 3.40995 5.0175 3.73137 5.0175 4.15995V5.84745H7.63357L7.28536 8.4903H5.0175V15.2671H2.28536V8.4903H0.00857162V5.84745H2.28536V3.90102C2.28536 2.79387 2.59488 1.93524 3.21393 1.32512C3.83298 0.715006 4.65738 0.409946 5.68714 0.409946C6.56214 0.409946 7.24072 0.445661 7.72286 0.517089Z"
                        fill="#232D39"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_118">
                        <rect
                          width="9.16"
                          height="16"
                          fill="white"
                          transform="matrix(1 0 0 -1 0 16.4102)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_120)">
                      <path
                        d="M14.5129 4.05308C14.1141 4.63642 13.6319 5.13344 13.0664 5.54415C13.0724 5.62749 13.0754 5.75249 13.0754 5.91915C13.0754 6.69296 12.9623 7.46529 12.7361 8.23612C12.5099 9.00695 12.1661 9.74654 11.7048 10.4549C11.2435 11.1632 10.6944 11.7897 10.0575 12.3343C9.4206 12.879 8.65274 13.3135 7.75393 13.6379C6.85512 13.9623 5.89381 14.1245 4.87 14.1245C3.25691 14.1245 1.78072 13.693 0.441431 12.8299C0.649764 12.8537 0.881907 12.8656 1.13786 12.8656C2.47715 12.8656 3.6706 12.4549 4.71822 11.6334C4.09322 11.6215 3.53369 11.4296 3.03965 11.0575C2.5456 10.6855 2.20631 10.2108 2.02179 9.63344C2.21822 9.6632 2.39976 9.67808 2.56643 9.67808C2.82238 9.67808 3.07536 9.64534 3.32536 9.57987C2.65869 9.44296 2.10661 9.11112 1.66911 8.58433C1.23161 8.05755 1.01286 7.44594 1.01286 6.74951V6.7138C1.41762 6.93999 1.85215 7.06201 2.31643 7.07987C1.92357 6.81796 1.61107 6.4757 1.37893 6.05308C1.14679 5.63046 1.03072 5.17213 1.03072 4.67808C1.03072 4.15427 1.16167 3.66915 1.42357 3.22273C2.14381 4.10963 3.0203 4.81945 4.05304 5.35219C5.08578 5.88493 6.19143 6.18106 7.37 6.24058C7.32238 6.01439 7.29857 5.79415 7.29857 5.57987C7.29857 4.78225 7.57982 4.10219 8.14232 3.53969C8.70482 2.97719 9.38488 2.69594 10.1825 2.69594C11.0158 2.69594 11.7182 2.99951 12.2896 3.60665C12.9385 3.48165 13.5486 3.24951 14.12 2.91023C13.8998 3.59475 13.4771 4.12451 12.8521 4.49951C13.4057 4.43999 13.9593 4.29118 14.5129 4.05308Z"
                        fill="#232D39"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_120">
                        <rect
                          width="14.86"
                          height="16"
                          fill="white"
                          transform="matrix(1 0 0 -1 0.440002 16.4102)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="17"
                    viewBox="0 0 15 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_122)">
                      <path
                        d="M3.69893 5.99065V14.8389H0.752502V5.99065H3.69893ZM3.88643 3.25851C3.89238 3.69303 3.74209 4.05613 3.43554 4.3478C3.12899 4.63946 2.72572 4.7853 2.22572 4.7853H2.20786C1.71976 4.7853 1.32691 4.63946 1.02929 4.3478C0.731669 4.05613 0.582859 3.69303 0.582859 3.25851C0.582859 2.81803 0.736133 2.45345 1.04268 2.16476C1.34923 1.87607 1.74953 1.73172 2.24357 1.73172C2.73762 1.73172 3.13345 1.87607 3.43107 2.16476C3.72869 2.45345 3.88048 2.81803 3.88643 3.25851ZM14.2971 9.76744V14.8389H11.3596V10.1067C11.3596 9.48172 11.2391 8.99214 10.998 8.63797C10.757 8.28381 10.3805 8.10672 9.86857 8.10672C9.49357 8.10672 9.17959 8.2094 8.92661 8.41476C8.67363 8.62012 8.48464 8.87458 8.35964 9.17815C8.29417 9.35672 8.26143 9.5978 8.26143 9.90137V14.8389H5.32393C5.33584 12.4639 5.34179 10.5383 5.34179 9.06208C5.34179 7.58589 5.33881 6.70494 5.33286 6.41922L5.32393 5.99065H8.26143V7.27637H8.24357C8.36262 7.08589 8.48464 6.91922 8.60964 6.77637C8.73464 6.63351 8.9028 6.47875 9.11411 6.31208C9.32542 6.14541 9.58435 6.01595 9.89089 5.92369C10.1974 5.83143 10.5382 5.7853 10.9132 5.7853C11.9311 5.7853 12.7495 6.12309 13.3686 6.79869C13.9876 7.47428 14.2971 8.46387 14.2971 9.76744Z"
                        fill="#232D39"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_122">
                        <rect
                          width="13.72"
                          height="16"
                          fill="white"
                          transform="matrix(1 0 0 -1 0.580002 16.4102)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_124)">
                      <path
                        d="M17.0871 3.43673H12.5246V4.54387H17.0871V3.43673ZM14.8371 7.2403C14.3014 7.2403 13.8669 7.39655 13.5336 7.70905C13.2002 8.02155 13.0157 8.44566 12.98 8.98138H16.6229C16.5157 7.82066 15.9205 7.2403 14.8371 7.2403ZM14.98 12.4635C15.355 12.4635 15.7181 12.3683 16.0693 12.1778C16.4205 11.9873 16.6467 11.7284 16.7479 11.401H18.7211C18.1258 13.2284 16.855 14.1421 14.9086 14.1421C13.6348 14.1421 12.6214 13.7492 11.8684 12.9635C11.1154 12.1778 10.7389 11.1451 10.7389 9.8653C10.7389 8.62721 11.1273 7.59893 11.9041 6.78048C12.6809 5.96203 13.6824 5.5528 14.9086 5.5528C15.73 5.5528 16.4458 5.75519 17.0559 6.15995C17.666 6.56471 18.1214 7.09745 18.422 7.75816C18.7226 8.41888 18.8729 9.15697 18.8729 9.97245C18.8729 10.0736 18.8669 10.2135 18.855 10.3921H12.98C12.98 11.0528 13.1511 11.5632 13.4934 11.9233C13.8357 12.2835 14.3312 12.4635 14.98 12.4635ZM3.06036 12.0171H5.70321C6.92345 12.0171 7.53357 11.5201 7.53357 10.526C7.53357 9.45459 6.94131 8.91888 5.75679 8.91888H3.06036V12.0171ZM3.06036 7.22245H5.56929C6.03357 7.22245 6.40113 7.11382 6.67196 6.89655C6.9428 6.67929 7.07821 6.34149 7.07821 5.88316C7.07821 5.02602 6.51274 4.59745 5.38179 4.59745H3.06036V7.22245ZM0.587143 2.6778H5.89071C6.40857 2.6778 6.86988 2.71947 7.27464 2.8028C7.67941 2.88614 8.05589 3.02751 8.40411 3.22691C8.75232 3.42632 9.02018 3.71352 9.20768 4.08852C9.39518 4.46352 9.48893 4.92185 9.48893 5.46352C9.48893 6.5409 8.97702 7.32364 7.95321 7.81173C8.63179 8.00221 9.14369 8.34447 9.48893 8.83852C9.83417 9.33257 10.0068 9.93971 10.0068 10.6599C10.0068 11.1064 9.93387 11.5126 9.78804 11.8787C9.6422 12.2448 9.44577 12.5528 9.19875 12.8028C8.95173 13.0528 8.65857 13.2641 8.31929 13.4367C7.98 13.6094 7.61988 13.7344 7.23893 13.8117C6.85798 13.8891 6.45917 13.9278 6.0425 13.9278H0.587143V2.6778Z"
                        fill="#232D39"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_124">
                        <rect
                          width="18.3"
                          height="16"
                          fill="white"
                          transform="matrix(1 0 0 -1 0.580002 16.4102)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="block-trener">
                <img src={trener2} alt="" />
                <p>Тренер тренажерного зала</p>

                <h2>Марина Фиткулина</h2>

                <div className="icon-group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="17"
                    viewBox="0 0 10 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_118)">
                      <path
                        d="M7.72286 0.517089V2.87423H6.32107C5.80917 2.87423 5.46393 2.98137 5.28536 3.19566C5.10679 3.40995 5.0175 3.73137 5.0175 4.15995V5.84745H7.63357L7.28536 8.4903H5.0175V15.2671H2.28536V8.4903H0.00857162V5.84745H2.28536V3.90102C2.28536 2.79387 2.59488 1.93524 3.21393 1.32512C3.83298 0.715006 4.65738 0.409946 5.68714 0.409946C6.56214 0.409946 7.24072 0.445661 7.72286 0.517089Z"
                        fill="#232D39"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_118">
                        <rect
                          width="9.16"
                          height="16"
                          fill="white"
                          transform="matrix(1 0 0 -1 0 16.4102)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_120)">
                      <path
                        d="M14.5129 4.05308C14.1141 4.63642 13.6319 5.13344 13.0664 5.54415C13.0724 5.62749 13.0754 5.75249 13.0754 5.91915C13.0754 6.69296 12.9623 7.46529 12.7361 8.23612C12.5099 9.00695 12.1661 9.74654 11.7048 10.4549C11.2435 11.1632 10.6944 11.7897 10.0575 12.3343C9.4206 12.879 8.65274 13.3135 7.75393 13.6379C6.85512 13.9623 5.89381 14.1245 4.87 14.1245C3.25691 14.1245 1.78072 13.693 0.441431 12.8299C0.649764 12.8537 0.881907 12.8656 1.13786 12.8656C2.47715 12.8656 3.6706 12.4549 4.71822 11.6334C4.09322 11.6215 3.53369 11.4296 3.03965 11.0575C2.5456 10.6855 2.20631 10.2108 2.02179 9.63344C2.21822 9.6632 2.39976 9.67808 2.56643 9.67808C2.82238 9.67808 3.07536 9.64534 3.32536 9.57987C2.65869 9.44296 2.10661 9.11112 1.66911 8.58433C1.23161 8.05755 1.01286 7.44594 1.01286 6.74951V6.7138C1.41762 6.93999 1.85215 7.06201 2.31643 7.07987C1.92357 6.81796 1.61107 6.4757 1.37893 6.05308C1.14679 5.63046 1.03072 5.17213 1.03072 4.67808C1.03072 4.15427 1.16167 3.66915 1.42357 3.22273C2.14381 4.10963 3.0203 4.81945 4.05304 5.35219C5.08578 5.88493 6.19143 6.18106 7.37 6.24058C7.32238 6.01439 7.29857 5.79415 7.29857 5.57987C7.29857 4.78225 7.57982 4.10219 8.14232 3.53969C8.70482 2.97719 9.38488 2.69594 10.1825 2.69594C11.0158 2.69594 11.7182 2.99951 12.2896 3.60665C12.9385 3.48165 13.5486 3.24951 14.12 2.91023C13.8998 3.59475 13.4771 4.12451 12.8521 4.49951C13.4057 4.43999 13.9593 4.29118 14.5129 4.05308Z"
                        fill="#232D39"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_120">
                        <rect
                          width="14.86"
                          height="16"
                          fill="white"
                          transform="matrix(1 0 0 -1 0.440002 16.4102)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="17"
                    viewBox="0 0 15 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_122)">
                      <path
                        d="M3.69893 5.99065V14.8389H0.752502V5.99065H3.69893ZM3.88643 3.25851C3.89238 3.69303 3.74209 4.05613 3.43554 4.3478C3.12899 4.63946 2.72572 4.7853 2.22572 4.7853H2.20786C1.71976 4.7853 1.32691 4.63946 1.02929 4.3478C0.731669 4.05613 0.582859 3.69303 0.582859 3.25851C0.582859 2.81803 0.736133 2.45345 1.04268 2.16476C1.34923 1.87607 1.74953 1.73172 2.24357 1.73172C2.73762 1.73172 3.13345 1.87607 3.43107 2.16476C3.72869 2.45345 3.88048 2.81803 3.88643 3.25851ZM14.2971 9.76744V14.8389H11.3596V10.1067C11.3596 9.48172 11.2391 8.99214 10.998 8.63797C10.757 8.28381 10.3805 8.10672 9.86857 8.10672C9.49357 8.10672 9.17959 8.2094 8.92661 8.41476C8.67363 8.62012 8.48464 8.87458 8.35964 9.17815C8.29417 9.35672 8.26143 9.5978 8.26143 9.90137V14.8389H5.32393C5.33584 12.4639 5.34179 10.5383 5.34179 9.06208C5.34179 7.58589 5.33881 6.70494 5.33286 6.41922L5.32393 5.99065H8.26143V7.27637H8.24357C8.36262 7.08589 8.48464 6.91922 8.60964 6.77637C8.73464 6.63351 8.9028 6.47875 9.11411 6.31208C9.32542 6.14541 9.58435 6.01595 9.89089 5.92369C10.1974 5.83143 10.5382 5.7853 10.9132 5.7853C11.9311 5.7853 12.7495 6.12309 13.3686 6.79869C13.9876 7.47428 14.2971 8.46387 14.2971 9.76744Z"
                        fill="#232D39"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_122">
                        <rect
                          width="13.72"
                          height="16"
                          fill="white"
                          transform="matrix(1 0 0 -1 0.580002 16.4102)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_124)">
                      <path
                        d="M17.0871 3.43673H12.5246V4.54387H17.0871V3.43673ZM14.8371 7.2403C14.3014 7.2403 13.8669 7.39655 13.5336 7.70905C13.2002 8.02155 13.0157 8.44566 12.98 8.98138H16.6229C16.5157 7.82066 15.9205 7.2403 14.8371 7.2403ZM14.98 12.4635C15.355 12.4635 15.7181 12.3683 16.0693 12.1778C16.4205 11.9873 16.6467 11.7284 16.7479 11.401H18.7211C18.1258 13.2284 16.855 14.1421 14.9086 14.1421C13.6348 14.1421 12.6214 13.7492 11.8684 12.9635C11.1154 12.1778 10.7389 11.1451 10.7389 9.8653C10.7389 8.62721 11.1273 7.59893 11.9041 6.78048C12.6809 5.96203 13.6824 5.5528 14.9086 5.5528C15.73 5.5528 16.4458 5.75519 17.0559 6.15995C17.666 6.56471 18.1214 7.09745 18.422 7.75816C18.7226 8.41888 18.8729 9.15697 18.8729 9.97245C18.8729 10.0736 18.8669 10.2135 18.855 10.3921H12.98C12.98 11.0528 13.1511 11.5632 13.4934 11.9233C13.8357 12.2835 14.3312 12.4635 14.98 12.4635ZM3.06036 12.0171H5.70321C6.92345 12.0171 7.53357 11.5201 7.53357 10.526C7.53357 9.45459 6.94131 8.91888 5.75679 8.91888H3.06036V12.0171ZM3.06036 7.22245H5.56929C6.03357 7.22245 6.40113 7.11382 6.67196 6.89655C6.9428 6.67929 7.07821 6.34149 7.07821 5.88316C7.07821 5.02602 6.51274 4.59745 5.38179 4.59745H3.06036V7.22245ZM0.587143 2.6778H5.89071C6.40857 2.6778 6.86988 2.71947 7.27464 2.8028C7.67941 2.88614 8.05589 3.02751 8.40411 3.22691C8.75232 3.42632 9.02018 3.71352 9.20768 4.08852C9.39518 4.46352 9.48893 4.92185 9.48893 5.46352C9.48893 6.5409 8.97702 7.32364 7.95321 7.81173C8.63179 8.00221 9.14369 8.34447 9.48893 8.83852C9.83417 9.33257 10.0068 9.93971 10.0068 10.6599C10.0068 11.1064 9.93387 11.5126 9.78804 11.8787C9.6422 12.2448 9.44577 12.5528 9.19875 12.8028C8.95173 13.0528 8.65857 13.2641 8.31929 13.4367C7.98 13.6094 7.61988 13.7344 7.23893 13.8117C6.85798 13.8891 6.45917 13.9278 6.0425 13.9278H0.587143V2.6778Z"
                        fill="#232D39"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_124">
                        <rect
                          width="18.3"
                          height="16"
                          fill="white"
                          transform="matrix(1 0 0 -1 0.580002 16.4102)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamProfi;
