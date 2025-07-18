type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  ban: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.364 18.364C19.9926 16.7353 21 14.4853 21 12C21 7.02944 16.9706 3 12 3C9.51472 3 7.26472 4.00736 5.63604 5.63604M18.364 18.364C16.7353 19.9926 14.4853 21 12 21C7.02944 21 3 16.9706 3 12C3 9.51472 4.00736 7.26472 5.63604 5.63604M18.364 18.364L5.63604 5.63604"
        stroke={props.color || 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  mute: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g>
        <path fill={props.color || 'currentColor'} d="M436.418,244.958v-26.706h-35.395v26.706c-0.021,20.719-4.369,40.396-12.217,58.212l26.432,26.44   C428.735,304.384,436.403,275.558,436.418,244.958z" />
        <path fill={props.color || 'currentColor'} d="M336.135,244.958V80.124C336.121,35.926,300.209,0.014,256.003,0c-44.184,0.014-80.11,35.926-80.124,80.124   v10.119l160.068,160.076C336.063,248.544,336.135,246.769,336.135,244.958z" />
        <path fill={props.color || 'currentColor'} d="M393.815,361.087c0.202-0.237,0.431-0.453,0.633-0.69l-25.117-25.125c-0.194,0.244-0.431,0.46-0.626,0.704   l-46.311-46.318c0.18-0.259,0.396-0.489,0.568-0.755L175.88,141.843v1.301L84.608,51.873l-25.8,25.793L175.88,194.737v50.22   c0.014,44.184,35.94,80.096,80.124,80.11c14.423-0.007,27.928-3.888,39.627-10.579l46.692,46.692   c-24.169,18.01-53.914,28.776-86.319,28.776c-40.001,0-76.164-16.228-102.482-42.531c-26.303-26.318-42.531-62.466-42.531-102.468   v-26.706H75.597v26.706c0.028,91.494,68.438,167.033,156.828,178.675V512h47.188v-88.367c32.929-4.348,62.998-17.672,87.886-37.277   l59.901,59.901l25.793-25.793L393.815,361.087z" />
      </g>
    </svg>
  ),
  warn: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 15H12.01M12 12V9M4.98207 19H19.0179C20.5615 19 21.5233 17.3256 20.7455 15.9923L13.7276 3.96153C12.9558 2.63852 11.0442 2.63852 10.2724 3.96153L3.25452 15.9923C2.47675 17.3256 3.43849 19 4.98207 19Z"
        stroke={props.color || 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  kick: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke={props.color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
}