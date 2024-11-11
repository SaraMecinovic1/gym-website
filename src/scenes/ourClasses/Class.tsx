type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
        h-full w-full flex-col items-center justify-center
        whitespace-normal bg-primary-500 text-center text-white
        transition duration-500 opacity-0 group-hover:opacity-90`;

  return (
    <li className="relative w-[400px] h-[380px] flex-shrink-0 group">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        {description && <p className="mt-5">{description}</p>}
      </div>
      <img
        className="w-full h-full object-cover border border-gray"
        alt={name}
        src={image}
      />
    </li>
  );
};

export default Class;
