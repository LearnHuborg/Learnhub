import LoaderIcon from "../../assets/icons/loader.svg";
export const CodeXWithIcon = () => {
    return (
        <button className=" flex justify-center place-items-center p-2 gap-2 border rounded-[5px] border-solid border-black w-[180px]">
        <img src={LoaderIcon} />

        <p className="text-black text-center text-base not-italic font-semibold leading-[normal]">
          Made By CodeX
        </p>
      </button>
    )
}