interface CustomCardProps {
  heading: string;
  title: string;
  completed: boolean;
  id: string;
}
const CustomCard = ({ title, completed, heading, id }: CustomCardProps) => {
  return (
    <div className="w-96 mx-2  rounded overflow-hidden shadow-lg text-center m-auto">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {heading}----{id}
        </div>
      </div>
      <div className="px-1 pt-4 pb-2 w-[100%]">
        <div>
          <span className="">Title</span>
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {title.substring(0, 6)}
          </span>
        </div>
        <div>
          <span className="">completed</span>
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {completed === true ? "true" : "false"}
          </span>
        </div>
      </div>
    </div>
  );
};
export default CustomCard;
