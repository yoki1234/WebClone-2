function BannerButton() {
  return (
    <button className="min-w-32 w-full h-9 border-2 mt-8 text-black duration-150 hover:text-white border-black text-sm uppercase font-semibold px-4 overflow-hidden relative after:content-[''] after:absolute after:w-full after:h-full after:bg-black after:left-0 after:translate-y-5 after:duration-150 hover:after:-translate-y-4">
      <span className="w-full h-full absolute top-1.5 left-0 z-50">watch</span>
    </button>
  );
}

export default BannerButton;
