type Props = { width: string };

const LinearGradient = ({ width = "w-full" }: Props) => {
  return <div className={`h-0.5 ${width} bg-gradient-rainblue`}></div>;
};

export default LinearGradient;
