
type NavbarProp={
    btnText: string;
}

function NavbarBtn({btnText}:NavbarProp ){
return(
    <button className="w-fit h-6 font-medium text-sm mx-3 uppercase overflow-hidden relative after:content-[''] after:absolute after:w-full after:bg-black after:h-[5.5px] after:-bottom-1 after:left-0 after:translate-x-full after:duration-200 hover:after:translate-x-0 ">
        {btnText}
    </button>
)
}

export default NavbarBtn;