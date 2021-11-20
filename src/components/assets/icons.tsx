// Contains the code of all icon components.
// The props have the same meaning as they would have in an svg tag.
// To make svg icons compatible with react-native-svg, use this webpage: https://react-svgr.com/playground/?native=true&typescript=true

import React from "react";
import Svg, { SvgProps, Path, Ellipse, Circle } from "react-native-svg-web";

export const Home: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={51} height={56} viewBox="0 0 51 56" fill="none" {...props}>
      <Path
        d="M3 21.243a3 3 0 011.21-2.407L25.5 3l21.29 15.836A3 3 0 0148 21.243V50.5a2.5 2.5 0 01-2.5 2.5H33.25a1 1 0 01-1-1V36.455a.5.5 0 00-.5-.5h-12.5a.5.5 0 00-.5.5V52a1 1 0 01-1 1H5.5A2.5 2.5 0 013 50.5V21.243z"
        stroke={props.color}
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const Scan: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={46} height={45} viewBox="0 0 46 45" fill="none" {...props}>
      <Ellipse
        cx={23}
        cy={22.5}
        rx={20.167}
        ry={19.708}
        stroke={props.color}
        strokeWidth={5}
      />
      <Path
        d="M23 2.792v8.958M23 33.25v8.958M2.833 22.5H12M34 22.5h9.167"
        stroke={props.color}
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const Profiles: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={64} height={43} viewBox="0 0 64 43" fill="none" {...props}>
      <Circle
        cx={32.07}
        cy={10.13}
        r={8.13}
        stroke={props.color}
        strokeWidth={4}
      />
      <Circle
        cx={51.532}
        cy={10.13}
        r={5.737}
        stroke={props.color}
        strokeWidth={4}
      />
      <Circle
        cx={12.608}
        cy={10.13}
        r={5.737}
        stroke={props.color}
        strokeWidth={4}
      />
      <Path
        d="M10.318 35.158a2 2 0 10.593-3.955l-.593 3.955zm-.552-2.115l-.345 1.97.345-1.97zm1.145-1.84a32.98 32.98 0 01-.8-.13l-.69 3.94c.29.05.59.1.897.145l.593-3.955zm-6.195-8.784c.29-.982 1.212-1.878 2.927-2.552 1.681-.66 3.78-.958 5.683-.958v-4c-2.245 0-4.87.341-7.146 1.236-2.243.881-4.51 2.459-5.301 5.145l3.837 1.129zm8.61-3.51c2.146 0 3.592.016 4.875.397 1.165.345 2.308 1.033 3.607 2.673l3.136-2.482c-1.732-2.189-3.54-3.415-5.606-4.027-1.946-.576-4.01-.56-6.012-.56v4zm-3.214 12.164c-4.027-.706-6.545-4.747-5.396-8.654L.88 21.29c-1.827 6.212 2.18 12.608 8.542 13.723l.69-3.94z"
        fill={props.color}
      />
      <Path
        d="M40.797 39.98c-5.73 1.504-13.483 1.309-18.693-.35-4.034-1.283-5.648-5.643-4.954-9.818.63-3.783 2.268-8.057 6.385-9.234 4.08-1.165 6.232-.943 8.774-.957 2.33-.013 5.036-.372 8.774.957 3.55 1.263 5.19 4.602 5.925 7.873 1.122 4.993-1.26 10.23-6.211 11.53z"
        stroke={props.color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M53.982 35.158a2 2 0 11-.593-3.955l.593 3.955zm-.593-3.955c.275-.041.541-.085.799-.13l.69 3.94c-.29.05-.589.1-.896.145l-.593-3.955zm6.194-8.784c-.289-.982-1.212-1.878-2.926-2.552-1.682-.66-3.78-.958-5.684-.958v-4c2.245 0 4.871.341 7.147 1.236 2.243.881 4.51 2.459 5.3 5.145l-3.837 1.129zm-8.61-3.51c-2.146 0-3.591.016-4.875.397-1.164.345-2.308 1.033-3.606 2.673l-3.137-2.482c1.733-2.189 3.54-3.415 5.607-4.027 1.946-.576 4.01-.56 6.011-.56v4zm3.215 12.164c4.026-.706 6.544-4.747 5.395-8.654l3.837-1.129c1.827 6.212-2.18 12.608-8.542 13.723l-.69-3.94z"
        fill={props.color}
      />
    </Svg>
  );
};

export const Settings: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg
      width={37}
      height={33}
      viewBox="0 0 37 33"
      fill="none"
      {...props}
      stroke={props.color}
    >
      <Path
        d="M3.375 25.459h17.917M15.917 7.542h17.916"
        strokeWidth={5}
        strokeLinecap="round"
      />
      <Circle cx={28.458} cy={25.458} r={4.667} strokeWidth={5} />
      <Path
        d="M13.417 7.542a4.667 4.667 0 11-9.334 0 4.667 4.667 0 019.334 0z"
        strokeWidth={5}
      />
    </Svg>
  );
};

export const Forward: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={13} height={19} viewBox="0 0 13 19" fill="none" {...props}>
      <Path
        d="M3.482 2.555l6.963 6.963-6.963 6.963"
        stroke={props.color}
        strokeOpacity={0.8}
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const Back: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9.717 5L3 12l6.717 7"
        stroke={props.color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        stroke={props.color}
        strokeWidth={4}
        strokeLinecap="round"
        d="M5.267 12.032H19"
      />
    </Svg>
  );
};

export const ChevronRight: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={11} height={18} viewBox="0 0 11 18" fill="none" {...props}>
      <Path
        d="M2 16l6.717-7L2 2"
        stroke={props.color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const NotifBell: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={38} height={37} viewBox="0 0 38 37" fill="none" {...props}>
      <Path
        d="M34.641 17.535c1.169-2.48 1.257-5.346.244-7.967-1.013-2.62-3.043-4.781-5.644-6.007-2.601-1.225-5.56-1.415-8.226-.528-2.665.888-4.82 2.78-5.988 5.26-3.989 8.465-9.524 10.47-11.805 10.942-.258.054-.326.485-.087.598l9.187 4.329c.106.05.164.164.146.28-.15.953-.557 5.17 3.58 7.119 4.137 1.949 7.13-1.05 7.77-1.772a.263.263 0 01.308-.066l9.188 4.329c.238.112.528-.215.404-.448-1.087-2.06-3.065-7.604.923-16.07z"
        stroke={props.color ?? "white"}
        strokeOpacity={0.55}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const Show: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={24} height={18} viewBox="0 0 24 18" fill="none" {...props}>
      <Path
        d="M1.335 10.256a2.522 2.522 0 010-2.512C3.685 3.651 7.444 1 11.68 1c4.236 0 7.995 2.65 10.345 6.744a2.522 2.522 0 010 2.512C19.675 14.349 15.915 17 11.68 17c-4.236 0-7.995-2.65-10.345-6.744z"
        stroke={props.color}
        strokeWidth={2}
      />
      <Circle cx={11.68} cy={9} r={3} stroke={props.color} strokeWidth={2} />
    </Svg>
  );
};

export const Hide: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={24} height={20} viewBox="0 0 24 20" fill="none" {...props}>
      <Path
        d="M5.68 1l16 16"
        stroke="#fff"
        strokeOpacity={0.5}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.055 2.79a1 1 0 011.271-.619c3.122 1.077 5.758 3.482 7.566 6.632.475.827.588 1.798.34 2.694a1 1 0 01-1.928-.534 1.522 1.522 0 00-.147-1.165c-1.618-2.818-3.906-4.847-6.483-5.736a1 1 0 01-.62-1.272zm-5.305.151a1 1 0 01-.55 1.303C5.822 5.21 3.717 7.16 2.202 9.798c-.27.47-.27 1.047 0 1.517 2.223 3.87 5.691 6.242 9.478 6.242 2.687 0 5.2-1.188 7.235-3.258a1 1 0 011.426 1.402c-2.345 2.386-5.351 3.855-8.661 3.855-4.686 0-8.735-2.93-11.212-7.246a3.522 3.522 0 010-3.507C2.162 5.85 4.582 3.555 7.448 2.39a1 1 0 011.302.55z"
        fill="#fff"
        fillOpacity={0.5}
      />
      <Path
        d="M14.59 9.825a3 3 0 11-2.291-2.204"
        stroke="#fff"
        strokeOpacity={0.5}
        strokeWidth={2}
      />
    </Svg>
  );
};

export const TickInCircle: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={95} height={95} viewBox="0 0 95 95" fill="none" {...props}>
      <Path
        d="M25.489 49.511L40.47 64.492 70.433 34.53"
        stroke={props.color}
        strokeWidth={8}
        strokeLinecap="round"
      />
      <Circle
        cx={47.5}
        cy={47.5}
        r={43.5}
        stroke={props.color}
        strokeWidth={8}
      />
    </Svg>
  );
};

export const CrossInCircle: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={95} height={95} viewBox="0 0 95 95" fill="none" {...props}>
      <Path
        d="M35.413 35.752l24.495 24.495M35.413 60.248l24.495-24.496"
        stroke={props.color}
        strokeWidth={8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx={47.5}
        cy={47.5}
        r={43.5}
        stroke={props.color}
        strokeWidth={8}
      />
    </Svg>
  );
};

export const UploadPic: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={59} height={54} viewBox="0 0 59 54" fill="none" {...props}>
      <Path
        d="M3 5a2 2 0 012-2h47a2 2 0 012 2v37a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
        stroke={props.color}
        strokeWidth={5}
        strokeLinejoin="round"
      />
      <Path
        d="M14 44l26.145-28.596a2 2 0 012.75-.193L54 24.385"
        stroke={props.color}
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M3 19l18 18" stroke={props.color} strokeWidth={5} />
      <Path
        d="M30 26c0-2.333-4.253-7-9.5-7S11 23.667 11 26"
        stroke={props.color}
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M54 39.717L47 33l-7 6.717"
        stroke={props.color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        stroke={props.color}
        strokeWidth={4}
        strokeLinecap="round"
        d="M46.968 35.267V49"
      />
      <Path d="M59 30h11V19H59v11zm0 24v11h11V54H59zm-24 0H24v11h11V54zm0-24V19H24v11h11zm13 0v24h22V30H48zm11 13H35v22h24V43zM46 54V30H24v24h22zM35 41h24V19H35v22z" />
    </Svg>
  );
};

export const Plus: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
      <Path
        d="M15 3.75v22.5M3.75 15h22.5"
        stroke={props.color}
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const Ellipsis: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={8} height={31} viewBox="0 0 8 31" {...props}>
      <Path
        d="M7.344 27.264c0 .608-.144 1.168-.432 1.68a3.45 3.45 0 01-1.224 1.224 3.369 3.369 0 01-1.68.432 3.415 3.415 0 01-1.704-.432 3.262 3.262 0 01-1.2-1.224 3.23 3.23 0 01-.456-1.68c0-.624.152-1.192.456-1.704a3.048 3.048 0 011.2-1.224 3.275 3.275 0 011.704-.456 3.23 3.23 0 011.68.456c.512.288.92.696 1.224 1.224.288.512.432 1.08.432 1.704zm0-11.531c0 .608-.144 1.168-.432 1.68a3.45 3.45 0 01-1.224 1.224 3.369 3.369 0 01-1.68.432 3.415 3.415 0 01-1.704-.432 3.262 3.262 0 01-1.2-1.224 3.23 3.23 0 01-.456-1.68c0-.624.152-1.192.456-1.704a3.048 3.048 0 011.2-1.224 3.275 3.275 0 011.704-.456 3.23 3.23 0 011.68.456c.512.288.92.696 1.224 1.224.288.512.432 1.08.432 1.704zm0-11.531c0 .607-.144 1.168-.432 1.68a3.45 3.45 0 01-1.224 1.224 3.369 3.369 0 01-1.68.431 3.415 3.415 0 01-1.704-.431 3.262 3.262 0 01-1.2-1.224 3.23 3.23 0 01-.456-1.68c0-.624.152-1.192.456-1.704a3.048 3.048 0 011.2-1.225A3.275 3.275 0 014.008.818a3.23 3.23 0 011.68.457c.512.288.92.696 1.224 1.224.288.511.432 1.08.432 1.704z"
        fill={props.color}
      />
    </Svg>
  );
};

export const DropdownChevron: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={18} height={11} viewBox="0 0 18 11" fill="none" {...props}>
      <Path
        d="M2 2l7 6.717L16 2"
        stroke={props.color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
