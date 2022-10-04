
export default function lista2() {
    return (
        <>
            <span>{createSpan(10)}</span>
        </>
    );

    function createSpan(quantidade) {
        const listSpans = [];
        for (let i = 0; i < quantidade; i++) {
            if (i === (quantidade-1)) {
                listSpans.push(<span key={i}>{i}</span>);
            } else {
                listSpans.push(<span>{i},</span>);
            }
        }
        return listSpans;
    }
}