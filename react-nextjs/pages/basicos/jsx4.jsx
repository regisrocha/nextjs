export default function jsx4() {
    const subTitle = "Subtitulo do JSX";

    return (
        <>
            <h1>Integracao com JS e JSX</h1>
            <h2>{subTitle}</h2>
            <h2>Random: {funcao()}</h2>
        </>
    )

    function funcao() {
        return Math.random();
    }    
}