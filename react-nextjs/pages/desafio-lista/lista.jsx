import { render } from "react-dom";

export default function lista() {
    const quantidade = 10;
    const spans = createArraySpan(quantidade);

    return (
        <div>
            { spans.map((idx) => (
                <span>{idx}</span>
            ))}
        </div>
    )

    function createArraySpan(qtde) {
        const array = []
        for (let index = 0; index < 10; index++) {
            array.push(index);
        }
        return array;
    }
}