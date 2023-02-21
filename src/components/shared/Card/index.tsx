/* eslint-disable react/button-has-type */
interface Props {
  message: string;
}
const Card = ({ message }: Props) => {
  return (
    <button
      type="button"
      className="flex items-center justify-center w-48 h-12 mx-3 text-xs transition ease-in-out delay-200 border card card-small border-slate-900/10 hover:scale-110 hover:shadow-cardShadow"
    >
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
