import * as React from "react"

interface LogoProps extends React.SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={120}
      height={111}
      viewBox="0 0 120 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M120 55.258c0-8.183-9.955-15.938-25.218-20.748 3.522-16.013 1.957-28.754-4.941-32.833-1.59-.957-3.449-1.41-5.479-1.41v5.615c1.125 0 2.03.227 2.788.655 3.327 1.964 4.77 9.442 3.645 19.06-.27 2.367-.71 4.86-1.248 7.403-4.794-1.209-10.028-2.14-15.531-2.745-3.303-4.658-6.727-8.888-10.176-12.59C71.814 10.037 79.3 5.858 84.386 5.858V.242c-6.726 0-15.531 4.935-24.435 13.496C51.048 5.228 42.242.343 35.516.343v5.614c5.063 0 12.572 4.155 20.546 11.734A118.223 118.223 0 0045.96 30.255c-5.528.605-10.762 1.536-15.556 2.77a77.976 77.976 0 01-1.272-7.302c-1.15-9.618.269-17.097 3.57-19.086.735-.453 1.689-.654 2.814-.654V.368c-2.055 0-3.914.453-5.528 1.41-6.873 4.079-8.414 16.794-4.868 32.758C9.906 39.37 0 47.1 0 55.258c0 8.183 9.955 15.938 25.218 20.748-3.522 16.013-1.957 28.754 4.941 32.833 1.59.957 3.449 1.41 5.504 1.41 6.726 0 15.532-4.935 24.435-13.496 8.903 8.511 17.709 13.395 24.435 13.395 2.055 0 3.914-.453 5.528-1.41 6.873-4.079 8.414-16.794 4.868-32.758C110.094 71.171 120 63.416 120 55.258zM88.153 38.464c-.905 3.248-2.03 6.596-3.302 9.945a120.339 120.339 0 00-3.204-6.043c-1.125-2.014-2.324-3.978-3.522-5.892 3.473.53 6.824 1.184 10.028 1.99zM76.951 65.279c-1.908 3.4-3.865 6.622-5.895 9.619-3.645.327-7.338.503-11.056.503-3.693 0-7.387-.176-11.007-.478a139.405 139.405 0 01-5.92-9.568 132.55 132.55 0 01-5.087-10.021 132.784 132.784 0 015.063-10.047c1.908-3.4 3.865-6.622 5.895-9.618 3.645-.328 7.338-.504 11.056-.504 3.693 0 7.387.176 11.007.479a139.43 139.43 0 015.92 9.568 132.569 132.569 0 015.087 10.02A142.548 142.548 0 0176.95 65.28zm7.9-3.273a110.09 110.09 0 013.376 10.021c-3.205.806-6.58 1.486-10.078 2.015 1.199-1.94 2.397-3.928 3.522-5.968a144.496 144.496 0 003.18-6.068zM60.05 88.872c-2.275-2.417-4.55-5.111-6.8-8.057 2.201.1 4.452.176 6.726.176 2.3 0 4.574-.05 6.8-.176a97.571 97.571 0 01-6.726 8.057zM41.85 74.042c-3.474-.53-6.825-1.184-10.029-1.99.905-3.248 2.03-6.597 3.302-9.945a120.3 120.3 0 003.205 6.043 167.742 167.742 0 003.522 5.892zm18.076-52.398c2.274 2.417 4.55 5.111 6.8 8.057-2.202-.1-4.452-.176-6.727-.176-2.3 0-4.574.05-6.8.176a97.554 97.554 0 016.727-8.057zm-18.1 14.83c-1.2 1.94-2.398 3.928-3.523 5.968a143.68 143.68 0 00-3.18 6.043 110.09 110.09 0 01-3.375-10.021c3.204-.781 6.58-1.46 10.077-1.99zM19.69 68C11.031 64.197 5.43 59.21 5.43 55.258c0-3.953 5.601-8.964 14.26-12.74 2.104-.932 4.403-1.763 6.776-2.544 1.394 4.935 3.228 10.072 5.503 15.334-2.25 5.238-4.06 10.349-5.43 15.259a72.937 72.937 0 01-6.849-2.568zm13.16 35.98c-3.327-1.963-4.77-9.442-3.645-19.06.27-2.367.71-4.86 1.248-7.403 4.794 1.209 10.028 2.14 15.531 2.745 3.303 4.658 6.727 8.888 10.176 12.59-7.974 7.629-15.459 11.808-20.546 11.808-1.101-.025-2.03-.251-2.764-.68zm58.018-19.186c1.15 9.618-.269 17.097-3.57 19.086-.735.453-1.689.654-2.814.654-5.063 0-12.572-4.154-20.546-11.733A118.236 118.236 0 0074.04 80.236c5.528-.605 10.762-1.536 15.556-2.77.563 2.543 1.003 4.985 1.272 7.327zM100.285 68c-2.103.931-4.402 1.762-6.775 2.543-1.394-4.935-3.229-10.072-5.504-15.334 2.25-5.238 4.06-10.349 5.43-15.259 2.422.78 4.721 1.637 6.874 2.568 8.659 3.802 14.26 8.788 14.26 12.741-.025 3.953-5.626 8.964-14.285 12.74z"
        fill="#61DAFB"
      />
      <path
        d="M59.975 66.765c6.174 0 11.179-5.152 11.179-11.507 0-6.355-5.005-11.507-11.178-11.507-6.174 0-11.179 5.152-11.179 11.507 0 6.355 5.005 11.507 11.178 11.507z"
        fill="#61DAFB"
      />
    </svg>
  )
}