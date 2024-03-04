import Image from 'next/image';

const Loading = () => {
  return (
    <Image
      src="/assets/spinner.svg"
      alt="Spinner"
      width={50}
      height={50}
      className="block"
    />
  );
};

export default Loading;
