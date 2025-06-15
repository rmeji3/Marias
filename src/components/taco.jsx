function taco({tacoRef}) {
    return (
        <div ref={tacoRef} className="flex flex-col h-[500px]">
            <h1 className="text-2xl font-bold">Specials</h1>
            <p>Specials component content goes here.</p>
        </div>
    );
}
export default Taco;