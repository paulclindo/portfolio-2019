import * as React from 'react';

function LogoIcon(props) {
  const { color = '#FBFAF8' } = props;
  return (
    <svg width={40} height={63} fill="none" {...props}>
      <g fill={color}>
        <path d="M25.26 14.867h-9.886A15.374 15.374 0 000 30.24v32.004h9.548V30.628a6.213 6.213 0 016.213-6.213h9.5v-9.548z" />
        <path d="M25.219 51.564A14.781 14.781 0 0040 36.784v-20.85A15.934 15.934 0 0024.066 0H5.439v9.307h18.544a6.71 6.71 0 016.71 6.71v20.144a6.096 6.096 0 01-6.096 6.097h-9.736v9.306H25.22z" />
      </g>
      <defs>
        <clipPath id="logo_svg">
          <path fill="#fff" d="M0 0h40v62.245H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default LogoIcon;
