import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import AOS from "aos";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
type Props = {};

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={55.92}
        height={64}
        viewBox="0 0 256 293"
      >
        <path
          fill="#8cc84b"
          d="M78.67 179.029c-4.65 2.907-11.656 7.619-17.076 12.743c-8.898 8.403-10.76 20.059-6.066 22.782c4.342 2.517 14.479-.478 21.734-8.392c7.614-8.308 10.754-18.84 7.511-30.796c-.381.227-.755.455-1.122.667l.008.017l-.492.278c-1.893 1.13-3.44 2.063-4.497 2.7m130.671-3.773c-2.634 5.725-2.766 7.566-1.966 8.14c3.822-1.373 10.145-4.682 10.195-13.55c.008-1.328-.285-2.752-.755-4.242c-4.086 3.618-6.441 7.406-7.474 9.652m41.01-17.306c-10.21-1.19-18.177.242-24.36 2.818c1.145 2.98 2.025 6.083 2.149 9.21c.287 6.863-4.437 11.942-9.36 15.569c-2.875 2.114-5.934 3.523-8.502 4.374c-2.053.865-4.782 1.76-6.719 1.365c-4.27-.868-6.543-4.66-3.638-13.028c1.569-4.528 6.095-11.42 13.401-17.358c-1.665-3.428-3.521-6.92-4.467-10.13c-1.864-6.326-2.427-10.15-2.427-10.15s-6.022 12.486-13.791 23.84c-.448.66-.895 1.306-1.343 1.951c1.526 3.547 2.728 7.297 2.891 11.077c.286 6.863-2.685 12.052-7.615 15.67c-2.669 1.968-5.516 3.327-7.959 4.192c-1.562.681-4.739 1.804-9.257 2.106c-2.471.169-4.848.016-6.175-.99c-1.827-1.38-2.047-3.084-1.101-5.41c.8-1.976 6.785-8.808 11.803-14.79a124 124 0 0 0 3.887-4.903l-.029-.066s.909-1.173 2.384-3.221c-1.834-3.95-4.159-8.06-5.252-11.788c-1.864-6.327-2.428-10.151-2.428-10.151s-6.104 15.649-12.463 28.14c-4.921 9.676-8.208 15.539-9.689 18.108l-.015.103s-.221.375-.602.962l-.285.476l-.008-.044c-1.651 2.438-5.355 7.214-9.037 7.214c-10.108 0-6.397-20.529-6.397-20.529s-2.955 7.605-6.286 14.13c-2.713 5.32-5.185 9.828-10.591 9.828c-1.555 0-4.02-.044-6.067-1.99c-4.643-4.411-8.193-15.612-7.497-24.287c.594-7.376 1.731-12.486 3.286-16.748a337 337 0 0 0-9.242 5.219l-5.018 2.957l.162.294c4.151 8.03 5.259 25.623-3.793 39.128c-9.051 13.511-25.9 21.732-42.316 17.167c-5.297-1.475-13.299-12.433-6.397-27.707c6.088-13.47 30.419-26.203 36.831-29.381l1.76-.97c-12.784-11.185-44.708-26.275-49.182-49.454c-1.262-6.525 1.797-22.13 20.956-40.067c16.115-15.083 38.532-26.637 59.24-33.999c34.79-12.366 71.548-5.071 77.203 17.11c5.56 21.814-13.364 47.907-37.6 57.287c-21.639 8.374-39.53 7.046-46.88 4.632c-8.355-2.745-13.255-8.258-14.45-11.37c-.47-1.219-1.278-3.266 0-3.97c.784-.434 1.099-.33 3.197 1.989c1.996 2.202 10.02 8.11 25.263 6.4c40-4.484 64.095-35.583 56.481-52.318c-5.332-11.715-36.162-17-74.68 2.209c-47.019 23.442-49.571 42.768-49.974 50.108c-1.101 20.192 24.902 30.813 38.972 45.829l.542.595c2.633-1.453 5.414-2.987 8.142-4.484a8176 8176 0 0 1 16.901-9.258c4.952-7.197 15-15.14 22.255-15.14c11.597 0 7.614 16.668 7.614 16.668s.235-.762.55-.77c.33-.008 1.607-2.196 5.187-.89c3.682 1.352 2.845 3.936 2.868 4.2c.044.512-4.35 15.331-6.176 24.837c-.874 4.536-.368 7.84-.11 7.84c.359 0 1.093-1.154 1.775-2.393l-.015-.037s.513-.94 1.372-2.627l.169-.353l.007.016a214 214 0 0 0 4.078-8.507c3.22-7.097 15.506-34.497 16.548-37.528s1.584-6.166 2.098-7.51c.506-1.343 4.849-2.356 9.924-2.319c5.076.037 5.591 2.203 5.626 2.65c.037.447-2.413 6.46-2.978 10.709c-.557 4.25-.021 6.37.441 9.938c.301 2.333 1.76 5.292 3.485 8.645c5.252-8.588 14.493-25.013 15.381-29.615c.608-3.148 1.584-6.165 2.098-7.51c.513-1.343 4.849-2.355 9.924-2.318c5.076.037 5.589 2.201 5.626 2.65s-2.421 6.459-2.978 10.709c-.558 4.242-.021 6.37.44 9.938c.397 3.052 2.758 7.155 5.099 11.822c6.388-3.148 13.907-5.261 22.71-5.305c3.645-.022 7.878.344 10.064 1.026V80.055c0-4.954-2.539-9.52-6.829-11.993L134.616 1.856a13.78 13.78 0 0 0-13.812 0L6.573 68.029C2.289 70.505 0 75.077 0 80.023v132.47c0 4.946 2.303 9.519 6.58 11.992l114.415 66.225a13.65 13.65 0 0 0 13.76 0l114.467-66.226c4.283-2.48 6.778-7.047 6.778-11.992v-53.536c-1.453-.428-3.58-.765-5.649-1.006m-123.232-6.937c-2.457 2.751-6.645 9.849-8.604 15.789c-3.895 11.793-2.208 23.78.55 24.5c3.22.843 8.502-14.922 11.031-21.088c1.585-3.862 7.747-20.999 6.397-23.288c-1.054-1.791-5.42-.345-9.374 4.087m44.563 39.751s-.777.736-.441.94c.455.272 1.438-.08 2.509-.639c3.03-1.906 9.829-6.663 9.844-13.702c0-.206-.008-.404-.022-.617a276 276 0 0 1-4.284 5.475c-2.142 2.665-7.606 8.543-7.606 8.543"
        ></path>
      </svg>
    ),
    alt: "home2.features.card1.alt",
    bg: "bg-pink-100 dark:bg-pink-900",
    title: "home2.features.card1.title",
    desc: "home2.features.card1.description",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1952"
        viewBox="0 0 509.58086729 397.8808683"
        width="2500"
      >
        <path
          d="m0 387.4 245.52-385.39 131.6 83.84-192.11 301.55z"
          fill="#fbbc04"
        />
        <path d="m240.33 0h151.13v387.4h-151.13z" fill="#1a73e8" />
        <circle cx="83.72" cy="81.35" fill="#ea4335" r="74.91" />
        <path
          d="m499.1 279.76a107.64 107.64 0 0 1 -107.64 107.64v-215.27a107.64 107.64 0 0 1 107.64 107.63z"
          fill="#34a853"
        />
        <path
          d="m391.46 172.13v215.27a107.64 107.64 0 0 1 0-215.27z"
          fill="#0d652d"
        />
        <path
          d="m474.3 89.29a82.85 82.85 0 0 1 -82.84 82.84v-165.69a82.85 82.85 0 0 1 82.84 82.85z"
          fill="#1a73e8"
        />
        <path
          d="m391.46 6.44v165.69a82.85 82.85 0 0 1 0-165.69z"
          fill="#174ea6"
        />
      </svg>
    ),
    alt: "home2.features.card2.alt",
    bg: "bg-yellow-100 dark:bg-yellow-900",
    title: "home2.features.card2.title",
    desc: "home2.features.card2.description",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={119.6}
        height={64}
        viewBox="0 0 256 137"
      >
        <path
          fill="#005a9c"
          d="m67.654 1.61l24.219 82.354L116.102 1.61h17.53l-40.093 135.3h-1.668L66.813 53.066l-25.056 83.846h-1.67L0 1.61h17.54l24.217 82.353L58.13 28.511L50.112 1.612h17.542z"
        ></path>
        <path
          fill="#005a9c"
          d="M183.427 93.48c0 12.255-3.261 22.555-9.763 30.908q-9.781 12.523-25.313 12.523c-7.794 0-14.582-2.486-20.375-7.433q-8.69-7.442-12.862-20.123l13.693-5.68c2.01 5.124 4.652 9.16 7.937 12.103c3.285 2.95 7.148 4.432 11.607 4.432c4.677 0 8.634-2.623 11.865-7.853c3.23-5.233 4.84-11.521 4.84-18.876c0-8.13-1.728-14.414-5.183-18.872c-4.006-5.228-10.299-7.854-18.868-7.854h-6.68V58.74l23.383-40.423h-28.234L121.62 31.68h-5.005V1.61h65.136v8.182l-24.717 42.6c8.682 2.782 15.252 7.853 19.707 15.202c4.458 7.347 6.685 15.968 6.685 25.885"
        ></path>
        <path
          fill="#221b0a"
          d="m251.404.853l2.84 17.268l-10.056 19.24s-3.863-8.159-10.274-12.677c-5.407-3.812-8.93-4.636-14.429-3.505c-7.081 1.465-15.09 9.914-18.588 20.34c-4.185 12.468-4.225 18.507-4.373 24.05c-.231 8.89 1.164 14.14 1.164 14.14s-6.104-11.296-6.045-27.84c.036-11.81 1.901-22.524 7.36-33.088c4.811-9.29 11.947-14.866 18.29-15.516c6.553-.689 11.742 2.467 15.743 5.899c4.195 3.59 8.46 11.44 8.46 11.44zm1.229 97.73s-4.433 7.945-7.206 11.003c-2.77 3.06-7.728 8.451-13.846 11.154c-6.122 2.696-9.329 3.208-15.382 2.622c-6.044-.582-11.66-4.08-13.626-5.55c-1.965-1.45-6.999-5.75-9.832-9.746c-2.851-4.016-7.297-12.037-7.297-12.037s2.476 8.033 4.03 11.443c.888 1.961 3.634 7.96 7.528 13.195c3.624 4.87 10.671 13.26 21.387 15.15c10.714 1.897 18.075-2.91 19.892-4.078c1.82-1.16 5.66-4.373 8.095-6.978c2.538-2.712 4.938-6.182 6.257-8.248c.978-1.522 2.562-4.59 2.562-4.59z"
        ></path>
      </svg>
    ),
    alt: "home2.features.card3.alt",
    bg: "bg-blue-100 dark:bg-blue-900",
    title: "home2.features.card3.title",
    desc: "home2.features.card3.description",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={64}
        viewBox="0 0 20 20"
      >
        <path
          fill="#0066d1"
          d="M18.33 3.57s.27-.8-.31-1.36c-.53-.52-1.22-.24-1.22-.24c-.61.3-5.76 3.47-7.67 5.57c-.86.96-2.06 3.79-1.09 4.82c.92.98 3.96-.17 4.79-1c2.06-2.06 5.21-7.17 5.5-7.79M1.4 17.65c2.37-1.56 1.46-3.41 3.23-4.64c.93-.65 2.22-.62 3.08.29c.63.67.8 2.57-.16 3.46c-1.57 1.45-4 1.55-6.15.89"
        ></path>
      </svg>
    ),
    alt: "home2.features.card4.alt",
    bg: "bg-orange-100 dark:bg-orange-900",
    title: "home2.features.card4.title",
    desc: "home2.features.card4.description",
  },

  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={64}
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path
            fill="#66e1ff"
            d="M5.782 14.391V5.304c0-.792.643-1.434 1.435-1.434h14.348c.792 0 1.435.642 1.435 1.434v9.087z"
          ></path>
          <path
            fill="#c2f3ff"
            d="M19.652 3.87H7.217c-.792 0-1.435.642-1.435 1.434v9.087H9.13z"
          ></path>
          <path
            fill="#fff"
            d="M5.782 14.392H23v2.39c0 .793-.643 1.436-1.435 1.436H7.217a1.435 1.435 0 0 1-1.435-1.435z"
          ></path>
          <path
            fill="#fff"
            d="M10.565 6.74h-5.74a.956.956 0 0 0-.956.956v7.652c0 .528.428.957.957.956h5.739a.956.956 0 0 0 .956-.956V7.696a.956.956 0 0 0-.956-.957"
          ></path>
          <path fill="#66e1ff" d="M11.521 8.652H3.87v5.74h7.652z"></path>
          <path fill="#c2f3ff" d="M10.565 8.652H3.869v5.74h.957z"></path>
          <path
            fill="#fff"
            d="M5.783 11.522H1.957a.956.956 0 0 0-.957.956v6.696c0 .528.428.957.957.957h3.826a.957.957 0 0 0 .956-.957v-6.696a.957.957 0 0 0-.956-.956"
          ></path>
          <path fill="#66e1ff" d="M6.739 13.435H1v4.783h5.739z"></path>
          <path fill="#c2f3ff" d="M1 13.435v4.783h.478l4.783-4.783z"></path>
          <path
            stroke="#191919"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.858 4.826a1.405 1.405 0 0 1 1.36-.956h14.347A1.48 1.48 0 0 1 23 5.389v11.31a1.48 1.48 0 0 1-1.435 1.518H8.652m1.434 1.913h8.609m-4.305-1.912v1.913m-.956-5.739H23"
            strokeWidth={1}
          ></path>
          <path
            stroke="#191919"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.87 9.609V7.696c0-.529.427-.957.956-.957h5.739c.528 0 .956.428.956.957v7.652a.956.956 0 0 1-.956.956H8.652m0-1.912h2.87"
            strokeWidth={1}
          ></path>
          <path
            stroke="#191919"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.783 11.522H1.957a.956.956 0 0 0-.957.956v6.696c0 .528.428.957.957.957h3.826a.957.957 0 0 0 .956-.957v-6.696a.957.957 0 0 0-.956-.956M1 18.218h5.739M1 13.435h5.739M3.868 8.653h7.652"
            strokeWidth={1}
          ></path>
        </g>
      </svg>
    ),
    alt: "home2.features.card5.alt",
    bg: "bg-blue-100 dark:bg-blue-900",
    title: "home2.features.card5.title",
    desc: "home2.features.card5.description",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={64}
        viewBox="0 0 24 24"
      >
        <path
          fill="#0066d1"
          d="M4.393 4.5a2.438 2.438 0 1 0-2.8-.141V24h3v-3h17.513c.684 0 1.238-.554 1.238-1.237a1.2 1.2 0 0 0-.107-.503l-2.893-6.51l2.893-6.51a1.2 1.2 0 0 0 .107-.503c0-.683-.554-1.237-1.238-1.237Z"
        ></path>
      </svg>
    ),
    alt: "home2.features.card6.alt",
    bg: "bg-blue-100 dark:bg-blue-900",
    title: "home2.features.card6.title",
    desc: "home2.features.card6.description",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={80.32}
        height={64}
        viewBox="0 0 256 204"
      >
        <path
          fill="#7e13f8"
          d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197c4.343 14.069 4.947 31.32 4.482 44.641c-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65c-.464-13.32.139-30.572 4.482-44.641c4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196c-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17zM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.34 4.34 0 0 1-4.338-4.339V52.068a4.34 4.34 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063c0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537m-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764c0-10.073-7.082-15.636-19.552-15.636m-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965c0-11.728-8.467-17.742-24.786-17.742h-22.782z"
        ></path>
      </svg>
    ),
    alt: "home2.features.card7.alt",
    bg: "bg-purple-100 dark:bg-purple-900",
    title: "home2.features.card7.title",
    desc: "home2.features.card7.description",
  },

  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={64}
        viewBox="0 0 128 128"
      >
        <path
          fill="#0868ac"
          d="M27.758 20.421c-7.352 10.565-6.437 24.312-.82 35.54l.411.798l.263.506l.164.291l.293.524q.261.46.536.919l.306.504q.304.489.622.973l.265.409q.439.656.901 1.301l.026.033l.152.205q.401.552.821 1.093l.309.393q.374.469.759.934l.29.346c.345.406.698.812 1.057 1.208l.021.022l.041.045c.351.383.71.758 1.075 1.133l.344.347q.424.425.858.841l.351.334q.579.547 1.176 1.07l.018.016l.205.174q.527.457 1.068.902l.442.353q.441.353.89.696l.477.361q.495.364.999.717l.363.258l.101.072c.318.22.645.431.97.642l.42.28c.5.315 1.007.628 1.519.93l.42.237q.565.326 1.14.639l.631.326l.816.424l.188.091l.334.161q.64.307 1.293.599l.273.122q.747.327 1.508.628l.368.144q.705.274 1.423.527l.179.062c.524.184 1.054.353 1.587.52l.383.114c.542.164 1.079.358 1.638.462c35.553 6.483 45.88-21.364 45.88-21.364c-8.674 11.3-24.069 14.28-38.656 10.962c-.553-.125-1.089-.298-1.628-.456l-.406-.124a45 45 0 0 1-1.568-.51l-.215-.077a50 50 0 0 1-1.382-.513l-.388-.152q-.753-.297-1.492-.62l-.298-.133a55 55 0 0 1-1.259-.585l-.364-.175c-.327-.159-.65-.328-.974-.495l-.649-.341q-.591-.316-1.167-.654l-.394-.219a58 58 0 0 1-1.52-.932l-.41-.273a41 41 0 0 1-1.081-.719l-.349-.245a54 54 0 0 1-1.022-.738l-.453-.343q-.466-.355-.922-.721l-.411-.33q-.582-.476-1.149-.969l-.126-.105a55 55 0 0 1-1.208-1.098l-.34-.328a33 33 0 0 1-.868-.851l-.34-.34q-.543-.555-1.065-1.126l-.053-.057a42 42 0 0 1-1.08-1.229l-.283-.336a45 45 0 0 1-.777-.961l-.285-.355a53 53 0 0 1-.898-1.195c-8.098-11.047-11.008-26.283-4.535-38.795m17.081-1.626c-5.316 7.65-5.028 17.893-.88 25.983a34 34 0 0 0 2.351 3.925c.796 1.143 1.68 2.501 2.737 3.418c.383.422.784.834 1.193 1.238l.314.311q.594.579 1.218 1.132l.05.043l.012.012c.462.405.939.794 1.423 1.178l.323.252c.486.372.981.738 1.489 1.087l.043.033l.68.447l.322.213q.544.35 1.104.676l.156.092q.484.278.975.545l.347.18l.682.354l.103.047q.701.347 1.424.663l.314.13q.579.246 1.167.473l.5.184c.356.132.712.253 1.072.373l.484.155c.511.158 1.017.359 1.549.448c27.45 4.547 33.787-16.588 33.787-16.588c-5.712 8.228-16.775 12.153-28.58 9.089a35 35 0 0 1-1.555-.449l-.467-.151a29 29 0 0 1-1.087-.374l-.491-.183a39 39 0 0 1-1.171-.473l-.315-.133a33 33 0 0 1-1.432-.666l-.718-.365l-.414-.213q-.46-.25-.909-.514l-.217-.123a31 31 0 0 1-1.1-.672l-.332-.221l-.712-.472a37 37 0 0 1-1.484-1.085l-.334-.264c-5.167-4.079-9.263-9.655-11.21-15.977c-2.041-6.557-1.601-13.917 1.935-19.891m14.847-.518c-3.134 4.612-3.442 10.341-1.267 15.435c2.293 5.407 6.992 9.648 12.477 11.66l.682.235l.3.096c.323.102.644.22.978.282c15.157 2.929 19.268-7.777 20.362-9.354c-3.601 5.185-9.653 6.43-17.079 4.627a19 19 0 0 1-1.796-.555a22 22 0 0 1-2.134-.886a22 22 0 0 1-3.741-2.282c-6.645-5.042-10.772-14.659-6.436-22.492"
        ></path>
        <path
          fill="#131b28"
          d="M66.359 96.295h-4.226a.56.56 0 0 0-.517.417l-1.5 6.94l-1.5 6.94a.554.554 0 0 1-.516.417h-2.991c-2.959 0-2.617-2.047-2.011-4.851l.018-.085l.066-.354l.012-.066l.135-.72l.145-.771l.154-.785l.682-3.332l.683-3.332a.336.336 0 0 0-.341-.419h-4.337a.55.55 0 0 0-.514.418l-.933 4.424l-.932 4.425l-.002.006l-.086.412c-1.074 4.903-.79 9.58 5.048 9.727l.17.003h9.163a.554.554 0 0 0 .516-.417l1.976-9.289l1.976-9.29c.049-.23-.103-.417-.338-.418m-45.256-.049h-4.64a.56.56 0 0 0-.521.416l-.44 1.942l-.44 1.942c-.051.229.098.416.333.416h4.676a.56.56 0 0 0 .518-.417l.425-1.941l.425-1.941c.049-.229-.101-.417-.336-.417m-1.346 6.044H15.08a.56.56 0 0 0-.521.416l-.657 2.91l-.656 2.909l-.183.834l-.631 2.97l-.63 2.971c-.049.229-.15.599-.225.821c0 0-.874 2.6-2.343 2.57l-.184-.004l-1.271-.023h-.001a.56.56 0 0 0-.524.407l-.485 2.039l-.484 2.038c-.055.228.093.416.326.42c.833.01 2.699.031 3.828.031c3.669 0 5.604-2.033 6.843-7.883l1.451-6.714l1.361-6.297c.049-.227-.103-.415-.337-.415m86.117-1.574l-.194-.801l-.191-.82l-.097-.414c-.38-1.477-1.495-2.328-3.917-2.328l-3.77-.004l-3.472-.005h-3.907a.55.55 0 0 0-.515.417l-.173.816l-.204.964l-.057.271l-1.759 8.24l-1.67 7.822c-.05.23-.066.512-.038.626c.028.115.479.209.713.209h3.524c.235 0 .532-.042.66-.094s.317-.513.364-.742l.626-3.099l.627-3.1l.001-.005l.084-.413l.76-3.56l.671-3.144a.555.555 0 0 1 .515-.417l11.089-.005c.235.002.383-.185.33-.414m14.275-7.24l-.854.003h-3.549a.9.9 0 0 0-.667.353l-7.849 11.498c-.132.194-.283.166-.335-.062l-.578-2.533a.56.56 0 0 0-.522-.416h-5.045c-.235 0-.374.184-.31.409l2.261 7.921c.064.226.069.596.011.824l-.985 3.833c-.059.228.085.413.32.413h4.987a.58.58 0 0 0 .532-.413l.986-3.833a2.5 2.5 0 0 1 .363-.755l12.742-16.911c.142-.188.065-.341-.169-.339zm-40.086 9.919v-.004a.514.514 0 0 1-.499.441h-6.397c-.222 0-.334-.15-.301-.336l.006-.015l-.004.002l.003-.021l.029-.109c.611-1.624 1.855-2.69 4.194-2.69c2.634-.001 3.148 1.285 2.969 2.732m-1.877-7.384c-8.211 0-10.157 4.984-11.249 10.015c-1.091 5.128-.998 9.921 7.5 9.921h1.03l.256-.001h.06l1.02-.003h.018c2.244-.009 4.495-.026 5.406-.033a.55.55 0 0 0 .509-.42l.344-1.681l.067-.327l.41-2.006a.335.335 0 0 0-.341-.418h-7.639c-3.039 0-3.941-.807-3.608-3.181H84.18l-.001.001l.008-.001a.5.5 0 0 0 .445-.315l.029-.106l-.001.001c1.813-6.839 1.293-11.445-6.474-11.446m-38.81 7.358l-.116.409v.001l-.922 3.268l-.922 3.267a.6.6 0 0 1-.543.411h-4.88c-3.702 0-4.604-2.896-3.702-7.166c.901-4.368 2.668-7.083 6.312-7.358c4.98-.376 5.976 3.126 4.773 7.168m3.348 7.105s2.301-5.588 2.823-8.814c.713-4.319-1.45-10.585-9.804-10.585c-8.306 0-11.914 5.981-13.29 12.484c-1.376 6.55.427 12.293 8.686 12.246l6.516-.024l6.089-.022a.59.59 0 0 0 .534-.414l1.061-4.046c.059-.228-.084-.414-.319-.416l-1.017-.006l-1.017-.006c-.199-.001-.313-.131-.289-.302zm41.12-3.741a.28.28 0 1 1-.56.001a.28.28 0 0 1 .56-.001"
        ></path>
      </svg>
    ),
    alt: "home2.features.card8.alt",
    bg: "bg-gray-100 dark:bg-gray-900",
    title: "home2.features.card8.title",
    desc: "home2.features.card8.description",
  },

  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={64}
        viewBox="0 0 24 24"
      >
        <path
          fill="#ff3e00"
          d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12s12-5.372 12-12S18.628 0 12 0zm6.857 7.2l-7.428 4.286l-7.429-4.286v9.6l7.429 4.286l7.428-4.286V7.2z"
        ></path>
      </svg>
    ),
    alt: "home2.features.card9.alt",
    bg: "bg-red-100 dark:bg-red-900",
    title: "home2.features.card9.title",
    desc: "home2.features.card9.description",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={64}
        viewBox="0 0 48 48"
      >
        <g fill="none" strokeWidth={4}>
          <rect
            width={40}
            height={32}
            x={4}
            y={8}
            fill="#2f88ff"
            stroke="#000"
            rx={1.633}
          ></rect>
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 18.9479C14 15.9999 10.4978 17.9375 10.7489 20.9687C11 23.9999 15 23.9999 15.2498 27.0311C15.4997 30.0623 12 31.9999 10 29.0519"
          ></path>
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M26 18H22V31H26"
          ></path>
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M22 25H26"
          ></path>
          <rect
            width={6}
            height={13}
            x={32}
            y={18}
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            rx={3}
          ></rect>
        </g>
      </svg>
    ),
    alt: "home2.features.card10.alt",
    bg: "bg-green-100 dark:bg-green-900",
    title: "home2.features.card10.title",
    desc: "home2.features.card10.description",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={64}
        viewBox="0 0 24 24"
      >
        <path
          className="dark:fill-white fill-black"
          d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12s12-5.372 12-12S18.628 0 12 0zm6.857 7.2l-7.428 4.286l-7.429-4.286v9.6l7.429 4.286l7.428-4.286V7.2z"
        ></path>
      </svg>
    ),
    alt: "home2.features.card11.alt",
    bg: "bg-gray-800",
    title: "home2.features.card11.title",
    desc: "home2.features.card11.description",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={64}
        viewBox="0 0 256 256"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#242938" rx={60}></rect>
          <path
            fill="url(#SVGYCM7xdyn)"
            fillRule="evenodd"
            d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5"
            clipRule="evenodd"
          ></path>
          <defs>
            <linearGradient
              id="SVGYCM7xdyn"
              x1={86.5}
              x2={163.5}
              y1={74}
              y2={185.5}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#32b1c1"></stop>
              <stop offset={1} stopColor="#14c6b7"></stop>
            </linearGradient>
          </defs>
        </g>
      </svg>
    ),
    alt: "home2.features.card12.alt",
    bg: "bg-cyan-100 dark:bg-cyan-900",
    title: "home2.features.card12.title",
    desc: "home2.features.card12.description",
  },
];

const home2 = (props: Props) => {
  const { t } = useTranslation();
  React.useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <Head>
        <title>{t("home2.title")}</title>
        <meta name="description" content={t("home2.metaDescription")} />
      </Head>
      <main className="caret-transparent">
        <SiteHeader />
        {/* Hero Section - Software Innovation & Development */}
        <section className="relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-white px-8 py-20 overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 dark:opacity-30"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/your-background-video.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support the video tag */}
          </video>
          {/* Left: Headline, Description, CTA */}
          <div className="flex-1 z-10 max-w-xl relative">
            <span className="text-orange-400 dark:text-orange-300 font-semibold tracking-wide mb-4 block text-sm">
              {t("home2.heroSubtitle")}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-white dark:text-white">
              {t("home2.heroTitle")}
            </h1>
            <p className="mb-8 text-base text-white/80 dark:text-white/70">
              {t("home2.heroDescription")}
            </p>
            <button className="bg-orange-400 dark:bg-orange-500 hover:bg-orange-500 dark:hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all text-base">
              {t("home2.getStarted")}
            </button>
          </div>
          {/* Right: Image & Accents */}
          <div className="flex-1 flex justify-center items-center relative  ">
            {/* Main Image */}
            <div className="relative z-10">
              <Image
                src="https://i.pinimg.com/736x/ef/5a/43/ef5a43bddd09fae0f0a64e5df8fc09e2.jpg"
                alt="Software Innovation & Development"
                width={420}
                height={420}
                className="rounded-2xl object-cover shadow-2xl border-4 border-[#07446a] dark:border-gray-800"
              />
            </div>
          </div>
        </section>

        {/* Awesome Features Section - matches reference image */}
        <section className="py-20 px-4 bg-[#f7fafd] dark:bg-[#101624]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
              {t("home2.features.title")}
            </h2>
            <p className="text-center text-gray-500 dark:text-gray-300 mb-10 text-base">
              {t("home2.features.description")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-once="false"
                  className="relative rounded-3xl p-8 flex flex-col items-center text-center border border-gray-200 dark:border-gray-700 shadow-xl bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-gray-900/80 dark:to-blue-950/60 backdrop-blur-md hover:scale-105 transition-transform duration-300"
                  style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
                >
                  <span
                    className={`mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full ${feature.bg} shadow-lg`}
                  >
                    {feature.icon}
                  </span>
                  <h3 className="font-extrabold text-xl text-gray-900 dark:text-white mb-2 tracking-tight">
                    {t(feature.title)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {t(feature.desc)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Solutions Section - matches reference image */}
        <section className="relative flex flex-col md:flex-row items-center justify-between bg-[#eaf0f6] dark:bg-[#101624] px-8 py-20 overflow-hidden">
          {/* Left: Headline, Description, Feature Cards, CTA */}
          <div className="flex-1 z-10 max-w-xl w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-gray-900 dark:text-white">
              {t("home2.itSolutions.title")}
            </h2>
            <p className="mb-8 text-base text-gray-700 dark:text-gray-300">
              {t("home2.itSolutions.description")}
            </p>
            {/* Feature Cards */}
            <div className="space-y-6 mb-8">
              {/* Card 1 */}
              <div className="flex items-center bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 gap-4">
                <div className="flex-shrink-0">
                  {/* Icon */}
                  <span className="inline-block bg-orange-100 dark:bg-orange-900 p-3 rounded-full">
                    <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="4"
                        fill="#f97316"
                        opacity="0.2"
                      />
                      <path
                        d="M7 7h10v10H7V7z"
                        stroke="#f97316"
                        strokeWidth="2"
                      />
                      <circle cx="12" cy="12" r="2" fill="#f97316" />
                    </svg>
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {t("home2.itSolutions.card1.title")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {t("home2.itSolutions.card1.description")}
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="flex items-center bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 gap-4">
                <div className="flex-shrink-0">
                  {/* Icon */}
                  <span className="inline-block bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                    <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        fill="#8b5cf6"
                        opacity="0.2"
                      />
                      <path d="M8 12h8" stroke="#8b5cf6" strokeWidth="2" />
                      <path d="M12 8v8" stroke="#8b5cf6" strokeWidth="2" />
                    </svg>
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {t("home2.itSolutions.card2.title")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {t("home2.itSolutions.card2.description")}
                  </p>
                </div>
              </div>
            </div>
            {/* CTA Button */}
            <a
              href="/services"
              className="bg-orange-400 dark:bg-orange-500 hover:bg-orange-500 dark:hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all text-base"
            >
              {t("home2.getStarted")}
            </a>
          </div>
          {/* Right: Themed Image & Abstract Accents */}
          <div className="flex-1 flex justify-center items-center relative w-full mt-12 md:mt-0">
            {/* Main Image */}
            <div className="relative z-10">
              <Image
                src="https://i.pinimg.com/736x/03/16/dc/0316dc671ac3edaa3d21500f9b93c0f5.jpg"
                alt="IT Solutions Theme"
                width={420}
                height={420}
                className="rounded-[60px] object-cover shadow-2xl border-4 border-[#07446a] dark:border-gray-800"
              />
            </div>
          </div>
        </section>

        {/* Interactive Services Section with Hover Effect */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-700 dark:text-blue-300 tracking-tight">
              {t("home2.Expertise.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: (
                    <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M12 2v20M2 12h20"
                        stroke="#f97316"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                  bg: "bg-blue-100 dark:bg-blue-900",
                  title: "home2.Expertise.card1.title",
                  titleClass: "text-blue-700 dark:text-blue-300",
                  desc: "home2.Expertise.card1.description",
                  btnClass:
                    "bg-blue-600 dark:bg-blue-400 group-hover:bg-blue-700 dark:group-hover:bg-blue-500",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={50}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#f97316"
                        d="M12 3.19L5 6.3V12h7v8.93c3.72-1.15 6.47-4.82 7-8.94h-7z"
                        opacity={0.3}
                      ></path>
                      <path
                        fill="#f97316"
                        d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm0 19.93V12H5V6.3l7-3.11v8.8h7c-.53 4.12-3.28 7.79-7 8.94"
                      ></path>
                    </svg>
                  ),
                  bg: "bg-purple-100 dark:bg-purple-900",
                  title: "home2.Expertise.card2.title",
                  titleClass: "text-purple-700 dark:text-purple-300",
                  desc: "home2.Expertise.card2.description",
                  btnClass:
                    "bg-purple-600 dark:bg-purple-400 group-hover:bg-purple-700 dark:group-hover:bg-purple-500",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={50}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="#f97316"
                        strokeWidth={2}
                        d="M6 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0-6V0m0 12V9M0 6h3m6 0h3M2 2l2 2m4 4l2 2m0-8L8 4M4 8l-2 2m16 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0-6V3m0 12v-3m-6-3h3m6 0h3M14 5l2 2m4 4l2 2m0-8l-2 2m-4 4l-2 2m-5 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0-6v-3m0 12v-3m-6-3h3m6 0h3M5 14l2 2m4 4l2 2m0-8l-2 2m-4 4l-2 2"
                      ></path>
                    </svg>
                  ),
                  bg: "bg-blue-100 dark:bg-blue-900",
                  title: "home2.Expertise.card3.title",
                  titleClass: "text-blue-700 dark:text-blue-300",
                  desc: "home2.Expertise.card3.description",
                  btnClass:
                    "bg-blue-600 dark:bg-blue-400 group-hover:bg-blue-700 dark:group-hover:bg-blue-500",
                },
              ].map((card, idx) => (
                <>
                  <div
                    key={idx}
                    className="group relative rounded-3xl p-10 flex flex-col items-center text-center border border-gray-200 dark:border-gray-700 shadow-xl bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-gray-900/80 dark:to-blue-950/60 backdrop-blur-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                    style={{
                      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                    }}
                  >
                    <span className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition">
                      {card.icon}
                    </span>
                    <span
                      className={`mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full ${card.bg} shadow-lg`}
                    >
                      {card.icon}
                    </span>
                    <h3
                      className={`font-extrabold text-xl mb-2 tracking-tight ${card.titleClass}`}
                    >
                      {t(card.title)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4">
                      {t(card.desc)}
                    </p>
                    <a
                      href="/services"
                      className={`inline-block ${card.btnClass} text-white px-5 py-2 rounded-full font-semibold transition`}
                    >
                      {t("home2.learnMore")}
                    </a>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>

        {/* Insights & Resources Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-700 dark:text-blue-300 tracking-tight">
              {t("home2.insights.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Card 1 */}
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:scale-105 transition group flex flex-col items-start border border-blue-100 dark:border-blue-800">
                <span className="absolute top-6 right-6 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold">
                  {t("home2.insights.card1.label")}
                </span>
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#f97316"
                      d="M22 2h-1v1h1zm-1 1h-1v1h1zm-1 1h-4v1h4zm-4-1h-2v1h2zm-2-1h-1v1h1zm-1-1h-2v1h2zm-2 1h-1v1h1zm-1 1H8v1h2zM8 4H4v1h4zM4 3H3v1h1zM3 2H2v1h1zm0 12H2v2h1zm1 2H3v2h1zm1 2H4v1h1zm2 1H5v1h2zm2 1H7v1h2zm2 1H9v1h2zm2 1h-2v1h2zm2-1h-2v1h2zm2-1h-2v1h2zm2-1h-2v1h2zm1-1h-1v1h1zm1-2h-1v2h1zm1-2h-1v2h1zm1-11h-1v11h1zM2 3H1v11h1z"
                    ></path>
                    <path
                      fill="#f97316"
                      d="M20 5v1h-4V5h-2V4h-1V3h-2v1h-1v1H8v1H4V5H3v9h1v2h1v2h2v1h2v1h2v1h2v-1h2v-1h2v-1h2v-2h1v-2h1V5zM10 17v-2h1v-3h-1V9h1V8h2v1h1v3h-1v3h1v2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">
                  {t("home2.insights.card1.title")}
                </h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {t("home2.insights.card1.description")}
                </p>
              </div>
              {/* Card 2 */}
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:scale-105 transition group flex flex-col items-start border border-purple-100 dark:border-purple-800">
                <span className="absolute top-6 right-6 bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-bold">
                  {t("home2.insights.card2.label")}
                </span>
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#f97316"
                      d="M22 30H10c-1.1 0-2-.9-2-2v-3h2v3h12v-3h2v3c0 1.1-.9 2-2 2m-7-15.2V25h2V14.8l2.6 2.6L21 16l-5-5l-5 5l1.4 1.4z"
                    ></path>
                    <path
                      fill="#f97316"
                      d="M24.8 9.1C23.9 5 20.3 2 16 2S8.1 5 7.2 9.1c-3 .6-5.2 3.3-5.2 6.4C2 19.1 4.9 22 8.5 22H12v-2H8.5C6 20 4 18 4 15.5c0-2.3 1.8-4.3 4.1-4.5H9l.1-.8C9.5 6.6 12.5 4 16 4s6.5 2.6 6.9 6.1l.1.9l.8.1c2.3.2 4.1 2.2 4.1 4.5c0 2.5-2 4.5-4.5 4.5H20v2h3.5c3.6 0 6.5-2.9 6.5-6.5c0-3.2-2.2-5.9-5.2-6.5"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">
                  {t("home2.insights.card2.title")}
                </h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {t("home2.insights.card2.description")}
                </p>
              </div>
              {/* Card 3 */}
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:scale-105 transition group flex flex-col items-start border border-green-100 dark:border-green-800">
                <span className="absolute top-6 right-6 bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 px-3 py-1 rounded-full text-xs font-bold">
                  {t("home2.insights.card3.label")}
                </span>
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#f97316"
                      d="M9.756 24.065a3.37 3.37 0 0 1 3.366 3.366c0 1.856-1.51 3.363-3.366 3.363s-3.364-1.508-3.364-3.364a3.366 3.366 0 0 1 3.364-3.366zM32.062 5.333a4.426 4.426 0 1 1 0 8.853a4.423 4.423 0 0 1-4.424-4.423a4.43 4.43 0 0 1 4.424-4.43M7.681 19.64l.688 1.094a3.4 3.4 0 0 1 4.68 1.062l1.091-.69a4.69 4.69 0 0 0-6.459-1.466m3.103-5.202l.424 1.219a3.396 3.396 0 0 1 4.321 2.088l1.218-.425a4.69 4.69 0 0 0-5.963-2.881zm4.194-4.371l.14 1.284a3.4 3.4 0 0 1 3.742 3.006l1.282-.141a4.69 4.69 0 0 0-5.163-4.149zm4.917-2.034a3.4 3.4 0 0 1 2.968 3.772l1.282.152a4.69 4.69 0 0 0-4.096-5.205zm20.564-1.654a3.4 3.4 0 0 1-.76 4.738l.756 1.047a4.69 4.69 0 0 0 1.05-6.539l-1.046.755zm5.246 2.512a3.4 3.4 0 0 1-1.806 4.444l.502 1.19a4.69 4.69 0 0 0 2.494-6.133zm4.547 3.625a3.4 3.4 0 0 1-2.762 3.926l.22 1.271a4.69 4.69 0 0 0 3.814-5.416l-1.272.22zm.04 7.761l-.07 1.288a4.69 4.69 0 0 0 4.933-4.42l-1.29-.071a3.4 3.4 0 0 1-3.574 3.204zm3.436 10.941c-1.872 0-3.39-1.506-3.39-3.362s1.517-3.362 3.39-3.362c1.87 0 3.39 1.505 3.39 3.362c0 1.856-1.52 3.362-3.39 3.362m3.577 5.745l1.268.002l2.594 9.058c.2.695.976 1.077 1.734.86c.76-.217 1.24-.881.984-1.75l-2.667-9.292c-1.066-3.715-4.176-3.599-4.176-3.599h-6.627s-3.107-.116-4.176 3.599l-2.669 9.292c-.254.869.226 1.533.986 1.75c.758.217 1.534-.165 1.731-.86l2.596-9.058l1.266-.002l-3.465 12.084h14.09l-3.467-12.084zM9.686 35.677c1.214 0 1.928-.444 1.954-3.8H7.786c.028 3.356.678 3.8 1.9 3.8"
                    ></path>
                    <path
                      fill="#f97316"
                      d="M14.268 37.209h1.23v9.397c0 .814.658 1.476 1.468 1.476a1.46 1.46 0 0 0 1.456-1.476V36.183c0-2.378-1.95-4.306-4.328-4.306h-1.522c0 3.275-.956 4.662-2.366 4.662v3.787c.416.177.71.592.71 1.072c0 .644-.516 1.174-1.16 1.174c-.646 0-1.16-.512-1.16-1.158c0-.483.29-.894.706-1.072v-3.79c-1.48 0-2.392-1.513-2.392-4.675H5.462c-2.38 0-4.501 1.928-4.501 4.306v10.423c0 .814.638 1.475 1.452 1.475c.812 0 1.472-.661 1.472-1.475v-9.397h1.218v11.838h9.165zm24.551-15.732h-1.12v34.924c0 1.379-1.118 2.496-2.498 2.496s-2.497-1.117-2.497-2.496v-21.63h-1.28v21.63a2.5 2.5 0 0 1-4.998 0V21.477h-1.124L25.3 34.356a1.906 1.906 0 0 1-3.812 0v-14.24c0-3.136 2.244-4.912 5.317-4.912h10.513c3.072 0 5.317 1.777 5.317 4.912v14.24a1.906 1.906 0 0 1-3.812 0l-.006-12.879z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-700 dark:text-green-300">
                  {t("home2.insights.card3.title")}
                </h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {t("home2.insights.card3.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Book a Free Consultation */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-900 dark:to-purple-900 flex flex-col items-center justify-center">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white dark:text-blue-300 tracking-tight">
              {t("home2.cta.title")}
            </h2>
            <p className="text-lg text-white/80 dark:text-white/70 mb-8">
              {t("home2.cta.description")}
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all text-lg"
            >
              {t("home2.cta.button")}
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
};

export default home2;
