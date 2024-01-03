function HamburgerMenu(){
return(
    <button className="w-full h-[2px] -top-[14px] group cursor-pointer relative before:content-[''] before:absolute before:origin-center before:w-full before:h-full before:rounded before:bg-black before:top-0 before:left-0 after:content-[''] after:absolute after:w-full after:h-full after:rounded after:bg-black after:top-2 after:left-0 after:origin-center after:duration-500 before:duration-500 focus:after:top-1 focus:before:top-1 focus:after:rotate-45 focus:before:-rotate-45">
        <div className="w-full h-full bg-black rounded absolute top-1 origin-center duration-300 group-focus:rotate-y-90 group-focus:opacity-0"/>
    </button>
)
}

export default HamburgerMenu;