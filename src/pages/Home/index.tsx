/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import { Resources } from '../../config/Resources';
import Card from '../../components/shared/Card';
import { array } from '../../helpers/Home';

const Home = () => {
  const [selectedButton, setSelectedButton] = useState<string>('');
  return (
    <div className="w-4/5 h-[90vh] overflow-y-auto bg-white text-lightWhite">
      <div className="fixed flex items-center w-full h-16 bg-lightBluish">
        <img src={Resources.images.ReactLogo} className="w-12 h-10 pl-3" />
        <p className="pl-3 text-center text-white">
          {'welcome to react boiler plate'.toUpperCase()}
        </p>
      </div>
      <div className="flex flex-col items-center w-4/6 m-auto mt-16">
        <p className="mt-5 text-xl font-medium text-black">
          What do you want to do next with your app?
        </p>
        <div className="flex justify-center mt-8">
          {array.map(({ label, id, command }) => {
            return (
              <div
                onClick={() => {
                  setSelectedButton(command);
                }}
              >
                <Card message={label} key={id} />
              </div>
            );
          })}
        </div>
        <div className="flex mt-8">
          {array.map(({ label, id, command }) => {
            return (
              <div
                onClick={() => {
                  setSelectedButton(command);
                }}
              >
                <Card message={label} key={id} />
              </div>
            );
          })}
        </div>
        <div className="w-[90%] mt-6">
          <div className="w-full">
            <div className="px-5 pt-4 pb-6 overflow-hidden font-mono text-sm subpixel-antialiased leading-normal text-gray-100 bg-gray-800 rounded-lg shadow-lg coding inverse-toggle">
              <div className="flex mb-2 top">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 ml-2 bg-orange-300 rounded-full" />
                <div className="w-3 h-3 ml-2 bg-green-500 rounded-full" />
              </div>
              <div className="flex mt-4">
                <span className="text-green-400">C:\Users\~$</span>
                <p className="items-center flex-1 pl-2 typing">
                  {selectedButton}
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 text-center">
          <div className="text-lg font-medium text-black">Resources</div>
          <div className="text-sm">
            Here are some links to help you get started:
          </div>
          <div className="flex flex-wrap mt-4 card-container ">
            <a
              className="flex items-center justify-center w-48 h-12 m-4 mx-3 text-xs transition ease-in-out delay-200 border card card-small border-slate-900/10 hover:scale-110 hover:shadow-cardShadow"
              target="_blank"
              rel="noopener noreferrer"
              href="https://angular.io/tutorial"
            >
              <svg
                className="material-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#5f5f5f"
              >
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
              </svg>
              <span>Learn Angular</span>
              <svg
                className="material-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#5f5f5f"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>{' '}
            </a>

            <a
              className="flex items-center justify-center w-48 h-12 m-4 mx-3 text-xs transition ease-in-out delay-200 border card card-small border-slate-900/10 hover:scale-110 hover:shadow-cardShadow"
              target="_blank"
              rel="noopener noreferrer"
              href="https://angular.io/cli"
            >
              <svg
                className="material-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#5f5f5f"
              >
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
              </svg>
              <span>CLI Documentation</span>
              <svg
                className="material-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#5f5f5f"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </a>

            <a
              className="flex items-center justify-center w-48 h-12 m-4 mx-3 text-xs transition ease-in-out delay-200 border card card-small border-slate-900/10 hover:scale-110 hover:shadow-cardShadow"
              target="_blank"
              rel="noopener noreferrer"
              href="https://material.angular.io"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.813"
                height="23.453"
                viewBox="0 0 21.813 23.453"
                fill="#5f5f5f"
              >
                <path
                  d="M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z"
                  transform="translate(-4088.702 -972.736)"
                  fill="#808080"
                />
                <path
                  d="M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z"
                  transform="translate(-4170.633 -972.736)"
                  fill="#808080"
                />
                <path
                  d="M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z"
                  transform="translate(-4125.003 -1058.315)"
                  fill="#ffe0b2"
                />
                <path
                  d="M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z"
                  transform="translate(-4125.003 -1036.757)"
                  fill="#fff3e0"
                />
                <path
                  d="M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z"
                  transform="translate(-4125.003 -1015.199)"
                  fill="#fff"
                />
              </svg>
              <span>Angular Material</span>
              <svg
                className="material-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#5f5f5f"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </a>

            <a
              className="flex items-center justify-center w-48 h-12 m-4 mx-3 text-xs transition ease-in-out delay-200 border card card-small border-slate-900/10 hover:scale-110 hover:shadow-cardShadow"
              target="_blank"
              rel="noopener noreferrer"
              href="https://blog.angular.io/"
            >
              <svg
                className="material-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#5f5f5f"
              >
                <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
              </svg>
              <span>Angular Blog</span>
              <svg
                className="material-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#5f5f5f"
                viewBox="0 0 24 24"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </a>

            <a
              className="flex items-center justify-center w-48 h-12 m-4 mx-3 text-xs transition ease-in-out delay-200 border card card-small border-slate-900/10 hover:scale-110 hover:shadow-cardShadow"
              target="_blank"
              rel="noopener noreferrer"
              href="https://angular.io/devtools/"
            >
              <svg
                className="material-icons"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#5f5f5f"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <g>
                    <path d="M14.73,13.31C15.52,12.24,16,10.93,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.43,0,2.74-0.48,3.81-1.27L19.59,21L21,19.59L14.73,13.31z M9.5,14C7.01,14,5,11.99,5,9.5S7.01,5,9.5,5S14,7.01,14,9.5 S11.99,14,9.5,14z" />
                    <polygon points="10.29,8.44 9.5,6 8.71,8.44 6.25,8.44 8.26,10.03 7.49,12.5 9.5,10.97 11.51,12.5 10.74,10.03 12.75,8.44" />
                  </g>
                </g>
              </svg>
              <span>Angular DevTools</span>
              <svg
                className="material-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#5f5f5f"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
