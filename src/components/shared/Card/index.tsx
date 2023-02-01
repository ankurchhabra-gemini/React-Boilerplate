interface Props {
  message: string;
}
const Card = ({ message }: Props) => {
  return (
    <button className="text-xs card card-small items-center justify-center flex w-48 h-12 border border-slate-900/10 mx-3 hover:scale-110 hover:shadow-cardShadow transition ease-in-out delay-200">
      <svg
        className="material-icons"
        xmlns=""
        width="24"
        height="24"
        fill="#5f5f5f"
        viewBox="0 0 24 24"
      >
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
      <span>{message}</span>
    </button>
  );
};
export default Card;
