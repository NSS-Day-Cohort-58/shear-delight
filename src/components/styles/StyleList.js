import { Style } from "./Style"

export const StyleList = ({ styles }) => {
    return <article className='styles option'>
        <h1>List of Styles</h1>
        {
            styles.map(
                (style) => {
                    return <Style style={style} key={`style--${style.id}`} />
                }
            )
        }
    </article>
}
